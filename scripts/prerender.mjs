/*
 * Static pre-render (SEO) — runs after `vite build` via `npm run build:ssg`.
 *
 * WHY: the app is a client-rendered SPA, so the served HTML for every URL is an
 * empty shell (no per-page title/description/content) until JS runs. Non-JS
 * crawlers (Bing, Facebook/LinkedIn/X previews, GPTBot/PerplexityBot) and, to a
 * lesser degree, Google, therefore see the generic homepage on every page.
 *
 * WHAT: we serve the built dist/ locally, drive a headless browser to each route
 * from the sitemap, wait for React to render, and snapshot the real DOM into
 * dist/<route>/index.html. The client bundle stays in the HTML, so the app still
 * boots for users; crawlers get real content immediately. Zero app-code changes.
 *
 * Two correctness guards:
 *  - The SPA fallback always serves the ORIGINAL shell captured in memory, never a
 *    file we've already overwritten (otherwise the homepage — rendered first —
 *    would leak its <head> metadata onto every later page).
 *  - After each snapshot we FORCE exactly one route-correct <link canonical> and one
 *    page-correct <title>, and sync the OG/Twitter tags to the page's title/desc, so
 *    no generic/duplicate tag survives.
 *
 * SAFE BY DESIGN: if the browser can't launch (or any single route fails), we log
 * loudly and exit 0 so the deploy still ships (degrading to today's shell).
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 5123;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const SITE = 'https://www.nuvion-solutions.com';

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.txt': 'text/plain',
  '.xml': 'application/xml', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.avif': 'image/avif', '.gif': 'image/gif',
};

const escText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function routesFromSitemap() {
  const xml = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = locs
    .map((u) => { try { return new URL(u).pathname; } catch { return null; } })
    .filter((p) => p && !p.endsWith('.xml'));
  return [...new Set(paths)];
}

function startServer(shell) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = path.join(DIST, urlPath);
      const hasExt = !!path.extname(urlPath);
      // Only serve real static assets from disk (js/css/img/xml…). Every
      // extensionless "route" gets the ORIGINAL in-memory shell so an already-
      // written prerendered file never contaminates a later route's render.
      if (hasExt && filePath.startsWith(DIST) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        res.setHeader('Content-Type', MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
        res.end(fs.readFileSync(filePath));
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(shell);
      }
    } catch {
      res.statusCode = 500;
      res.end('error');
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function launchBrowser() {
  const puppeteer = (await import('puppeteer-core')).default;
  const onCI = !!process.env.VERCEL || !!process.env.CI;
  if (onCI) {
    const chromium = (await import('@sparticuz/chromium')).default;
    return puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-gpu'],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      defaultViewport: { width: 1280, height: 900 },
    });
  }
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
  ];
  const executablePath = candidates.find((c) => fs.existsSync(c));
  if (!executablePath) throw new Error('No local Chrome/Edge found for pre-render.');
  return puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1280, height: 900 },
  });
}

// Force one route-correct canonical + one page-correct title, and sync social tags.
function normalizeHead(html, { title, description, canonical }) {
  let out = html.split(ORIGIN).join(''); // scrub any localhost origin
  out = out
    .replace(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi, '')
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '');
  const inject = `<title>${escText(title)}</title><link rel="canonical" href="${escAttr(canonical)}"/>`;
  out = out.replace(/<\/head>/i, `${inject}</head>`);
  // Sync OG / Twitter to this page (they come from the static shell as generic).
  out = out
    .replace(/(<meta property="og:title" content=")[^"]*(")/i, `$1${escAttr(title)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/i, `$1${escAttr(title)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/i, `$1${escAttr(canonical)}$2`)
    .replace(/(<meta name="twitter:url" content=")[^"]*(")/i, `$1${escAttr(canonical)}$2`);
  if (description) {
    out = out
      .replace(/(<meta property="og:description" content=")[^"]*(")/i, `$1${escAttr(description)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/i, `$1${escAttr(description)}$2`);
  }
  return out;
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html missing — did vite build run? Skipping.');
    return;
  }
  const shell = fs.readFileSync(path.join(DIST, 'index.html')); // capture ORIGINAL before any overwrite
  const routes = routesFromSitemap();
  console.log(`[prerender] ${routes.length} routes to snapshot`);

  const server = await startServer(shell);
  let browser;
  try {
    browser = await launchBrowser();
  } catch (e) {
    console.error('[prerender] Browser launch FAILED — shipping client-only build. Reason:', e.message);
    server.close();
    return;
  }

  let ok = 0, failed = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`${ORIGIN}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForFunction(
        () => { const r = document.getElementById('root'); return r && r.children.length > 0 && document.querySelector('h1, main, article, section'); },
        { timeout: 20000 },
      ).catch(() => {});
      await new Promise((r) => setTimeout(r, 500));
      const meta = await page.evaluate(() => ({
        title: document.title,
        description: (document.querySelector('meta[name="description"]') || {}).content || '',
      }));
      const canonical = `${SITE}${route}`;
      const html = normalizeHead(await page.content(), { ...meta, canonical });
      const outDir = route === '/' ? DIST : path.join(DIST, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      ok++;
    } catch (e) {
      console.error(`[prerender] FAIL ${route}: ${e.message}`);
      failed++;
    } finally {
      await page.close().catch(() => {});
    }
  }
  await browser.close().catch(() => {});
  server.close();
  console.log(`[prerender] done — ${ok} snapshotted, ${failed} failed of ${routes.length}`);
}

main().catch((e) => {
  console.error('[prerender] fatal (shipping client-only build):', e);
  process.exit(0);
});
