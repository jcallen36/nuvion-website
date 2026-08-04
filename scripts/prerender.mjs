/* Prerender / SSG — after `vite build`, render every indexable route in a real
   browser and save the finished HTML as a static file, so search engines AND
   AI answer engines (which don't run JS) get full content immediately.

   Runs as a SEPARATE command (`npm run build:ssg`); the normal `npm run build`
   is untouched, so the existing deploy path is never at risk.

   Chromium: locally uses your installed Chrome; on Vercel uses @sparticuz/chromium.
   Resilient: a page that fails to render is logged and skipped — it never fails
   the build. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

// Indexable routes to bake to static HTML (noindex /david ad variants are skipped on purpose).
const ARTICLE_SLUGS = [
  'website-cost-sonoma-county', 'do-i-own-my-website', 'choose-web-designer-santa-rosa',
  'local-seo-sonoma-county', 'ai-website-builder-vs-real-designer',
];
const TOWNS = [
  'santa-rosa', 'petaluma', 'rohnert-park', 'windsor', 'healdsburg', 'sonoma',
  'sebastopol', 'cotati', 'cloverdale', 'guerneville', 'forestville',
];
const ROUTES = [
  '/',
  '/services/web-design', '/services/seo-aso', '/services/custom-builds',
  '/services/integrations', '/services/social-media-ai', '/services/ai-automation',
  '/work', '/about', '/book', '/jaeden', '/for-business', '/trades', '/plan', '/david',
  '/guides', ...ARTICLE_SLUGS.map((s) => `/guides/${s}`),
  ...TOWNS.map((t) => `/web-design/${t}`),
  '/websites', '/websites2', '/websiteinfo',
  '/privacy', '/terms',
];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

// Minimal static server over dist/ with SPA fallback to index.html.
const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const filePath = path.join(DIST, urlPath);
  if (urlPath !== '/' && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream');
    res.end(fs.readFileSync(filePath));
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end(indexHtml); // SPA fallback — the client router renders the right route
  }
});

async function launch() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default;
    return puppeteer.launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: chromium.headless });
  }
  const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  return puppeteer.launch({ executablePath, args: ['--no-sandbox'], headless: 'new' });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}`;
  const browser = await launch();
  let ok = 0, failed = 0;
  for (const route of ROUTES) {
    const page = await browser.newPage();
    try {
      const resp = await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 45000 });
      await sleep(250); // let React 19 head hoisting + first paint settle
      const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
      if (!html || html.length < 500) throw new Error('empty render');
      const outDir = route === '/' ? DIST : path.join(DIST, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      ok++;
      console.log(`  ✓ ${route}`);
    } catch (e) {
      failed++;
      console.warn(`  ✗ ${route} — ${e.message} (kept SPA fallback, not fatal)`);
    } finally {
      await page.close();
    }
  }
  await browser.close();
  server.close();
  console.log(`\nPrerender complete: ${ok} pages baked, ${failed} skipped.`);
}

run().catch((e) => { console.error('Prerender error:', e.message); process.exit(0); }); // never fail the build
