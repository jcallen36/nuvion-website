/* Generates public/sitemap.xml from the site's page inventory.
   Run: node scripts/gen-sitemap.mjs   (re-run whenever pages are added). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.nuvion-solutions.com';
const TODAY = '2026-08-03';

const TOWNS = ['santa-rosa','petaluma','rohnert-park','windsor','healdsburg','sonoma','sebastopol','cotati','cloverdale','guerneville','forestville','glen-ellen','kenwood','penngrove','bodega-bay','occidental','geyserville','graton'];
const INDUSTRIES = ['restaurants','wineries','real-estate','med-spas','dental-medical','fitness','professional-services','nonprofits'];
const SERVICES = ['seo','marketing','automation','custom-builds'];
const ARTICLES = [
  'website-cost-sonoma-county','do-i-own-my-website','choose-web-designer-santa-rosa','local-seo-sonoma-county','ai-website-builder-vs-real-designer',
  'do-i-need-a-website-small-business','how-long-to-build-a-website','website-vs-facebook-page','get-found-on-google-maps','why-my-website-gets-no-customers','what-makes-a-website-look-professional','move-website-off-wix-squarespace','small-business-website-checklist',
  'how-to-write-website-copy','website-photos-that-sell','google-business-profile-guide','website-mistakes-small-business','how-to-get-more-google-reviews','mobile-friendly-website-why','website-launch-checklist','how-fast-should-website-load',
];

const u = (loc, priority, changefreq = 'monthly') =>
  `  <url><loc>${BASE}${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;

const lines = [];
lines.push('<?xml version="1.0" encoding="UTF-8"?>');
lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

lines.push('\n  <!-- Core -->');
lines.push(u('/', '1.0', 'weekly'));
for (const s of ['web-design', 'seo-aso', 'integrations', 'custom-builds', 'social-media-ai']) lines.push(u(`/services/${s}`, '0.9', 'weekly'));
for (const [loc, p] of [['/work','0.8'],['/for-business','0.8'],['/trades','0.8'],['/david','0.8'],['/plan','0.7'],['/about','0.7'],['/book','0.7'],['/guides','0.8'],['/websites','0.6'],['/jaeden','0.5']]) lines.push(u(loc, p, 'weekly'));

lines.push('\n  <!-- Guides -->');
for (const a of ARTICLES) lines.push(u(`/guides/${a}`, '0.7'));

lines.push('\n  <!-- Local: web design per town -->');
for (const t of TOWNS) lines.push(u(`/web-design/${t}`, '0.7'));

lines.push('\n  <!-- Industries -->');
for (const i of INDUSTRIES) lines.push(u(`/web-design-for/${i}`, '0.7'));

// Only index the service×town pages with real local search demand.
// automation/custom-builds ×town are noindex (kept live + linked, out of the index).
const INDEXED_SERVICES = SERVICES.filter((s) => s === 'seo' || s === 'marketing');
lines.push('\n  <!-- Service x town (search-intent services only) -->');
for (const s of INDEXED_SERVICES) for (const t of TOWNS) lines.push(u(`/${s}/${t}`, '0.6'));

lines.push('\n  <!-- Legal -->');
lines.push(u('/privacy', '0.3', 'yearly'));
lines.push(u('/terms', '0.3', 'yearly'));

lines.push('\n</urlset>\n');

const out = path.join(ROOT, 'public', 'sitemap.xml');
fs.writeFileSync(out, lines.join('\n'));
const count = lines.filter((l) => l.includes('<url>')).length;
console.log(`Wrote ${out} — ${count} URLs.`);
