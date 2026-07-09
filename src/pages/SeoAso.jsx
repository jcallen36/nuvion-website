import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   SEO & AI Search Optimization — service page.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* SECTION SCAFFOLD */
.seo-sec{padding-top:var(--pad-section)}
.seo-sec:last-of-type{padding-bottom:var(--pad-section)}
.seo-head{margin-bottom:clamp(34px,4.5vw,54px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.seo-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.seo-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.seo-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.seo-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.7rem,3.2vw,2.6rem);line-height:1.08;letter-spacing:-.018em;max-width:22ch}
.seo-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.seo-lede{font-size:.98rem;color:var(--muted-2);line-height:1.7;max-width:58ch;margin-top:12px}

/* № 01 — TWO PILLARS, ruled two-column editorial */
.pillars{display:grid;grid-template-columns:1fr;border-top:1px solid var(--hairline)}
@media(min-width:860px){.pillars{grid-template-columns:1fr 1fr}}
.pillar{padding:34px 0 8px}
@media(max-width:859px){.pillar+.pillar{border-top:1px solid var(--hairline)}}
@media(min-width:860px){
  .pillar{padding:38px 44px 12px 0}
  .pillar+.pillar{border-left:1px solid var(--hairline);padding-left:44px;padding-right:0}
}
.pillar-kicker{font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);margin-bottom:16px;display:flex;align-items:center;gap:10px}
.pillar-kicker::before{content:'';width:22px;height:1px;background:var(--petrol)}
.pillar-title{font-family:var(--serif);font-size:clamp(1.4rem,2.3vw,1.85rem);font-weight:700;letter-spacing:-.015em;line-height:1.12;margin-bottom:12px}
.pillar-desc{font-size:.94rem;color:var(--muted-2);line-height:1.68;max-width:52ch}
.pillar-list{list-style:none;margin-top:22px}
.pillar-list li{display:grid;grid-template-columns:36px 1fr;gap:12px;align-items:baseline;padding:11px 0;border-bottom:1px solid var(--hairline);font-size:.9rem;color:var(--ink);line-height:1.55;max-width:60ch}
.pillar-list li:last-child{border-bottom:none}
.pillar-list .pl-n{font-family:var(--mono);font-size:.68rem;color:var(--muted-2);font-variant-numeric:tabular-nums}

/* № 02 — OLD WAY vs NUVION WAY, ruled ledger */
.vs{border-top:1px solid var(--hairline)}
.vs-legend{display:none}
@media(min-width:760px){
  .vs-legend{display:grid;grid-template-columns:56px 1fr 1fr;gap:24px;padding:14px 6px;border-bottom:1px solid var(--hairline)}
  .vs-legend span{font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2)}
  .vs-legend .lit{color:var(--petrol)}
}
.vs-row{display:grid;grid-template-columns:44px 1fr;gap:12px 16px;padding:18px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:760px){.vs-row{grid-template-columns:56px 1fr 1fr;gap:24px;align-items:baseline;padding:20px 6px}}
.vs-row:hover{background:var(--card);padding-left:14px}
.vs-num{font-family:var(--mono);font-size:.72rem;color:var(--petrol);font-variant-numeric:tabular-nums;grid-row:span 2}
@media(min-width:760px){.vs-num{grid-row:auto}}
.vs-tag{display:block;font-family:var(--mono);font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-2);margin-bottom:3px}
.vs-new .vs-tag{color:var(--petrol)}
@media(min-width:760px){.vs-tag{display:none}}
.vs-old{font-size:.92rem;color:var(--muted-2);line-height:1.55;max-width:44ch}
.vs-new{font-size:.92rem;font-weight:600;color:var(--ink);line-height:1.55;max-width:44ch}

/* № 03 — MONTHLY CADENCE, index rows */
.month{border-top:1px solid var(--hairline)}
.month-row{display:grid;grid-template-columns:44px 1fr;gap:8px 16px;align-items:baseline;padding:clamp(22px,3vw,32px) 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:760px){.month-row{grid-template-columns:56px 250px 1fr;gap:24px}}
.month-row:hover{background:var(--card);padding-left:14px}
.month-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums}
.month-title{font-family:var(--serif);font-size:clamp(1.2rem,2.2vw,1.5rem);font-weight:700;letter-spacing:-.012em;line-height:1.2}
.month-desc{font-size:.93rem;color:var(--muted-2);line-height:1.68;max-width:58ch}
@media(max-width:759px){.month-desc{grid-column:2}}

/* № 04 — PLATFORMS, plate grid */
.plat-grid{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:680px){.plat-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.plat-grid{grid-template-columns:repeat(3,1fr)}}
.plat{padding:24px 26px 24px;display:flex;flex-direction:column;gap:12px;transition:transform .22s var(--ease-out),box-shadow .22s var(--ease-out)}
.plat:hover{transform:translateY(-3px);box-shadow:var(--shadow-2)}
.plat-top{display:flex;justify-content:space-between;align-items:baseline;gap:14px;padding-bottom:12px;border-bottom:1px solid var(--hairline)}
.plat-name{font-family:var(--serif);font-size:1.14rem;font-weight:700;letter-spacing:-.01em;transition:color .18s}
.plat:hover .plat-name{color:var(--petrol)}
.plat-num{font-family:var(--mono);font-size:.68rem;color:var(--muted-2);font-variant-numeric:tabular-nums}
.plat-desc{font-size:.88rem;color:var(--muted-2);line-height:1.64;max-width:60ch}

/* CTA alignment */
.sp-cta-in{max-width:1140px;margin:0 auto}
.sp-cta .label{display:block;color:rgba(244,242,236,.5);margin-bottom:18px}
`;

/* ── Data ─────────────────────────────────────────────────── */
const PILLARS = [
  {
    kicker: 'Pillar 01 — Traditional SEO',
    title: 'Rank on Google, Bing & Yahoo',
    desc: 'Classic search engine optimization, executed monthly with modern best practices — not a one-time setup that gathers dust.',
    points: [
      'Keyword research and content gap analysis',
      'On-page optimization — titles, meta, headers, internal links',
      'Technical SEO audits — speed, mobile, crawlability',
      'Strategic backlink building and outreach',
      'Local SEO and Google Business Profile optimization',
    ],
  },
  {
    kicker: 'Pillar 02 — AI Answer Optimization',
    title: 'Get cited by AI assistants',
    desc: 'More of your customers ask an AI assistant first. When someone asks ChatGPT, Claude, Perplexity, or Gemini for a recommendation, your business should be the answer.',
    points: [
      'Entity and knowledge graph optimization',
      'Structured data and schema markup for AI crawlers',
      'Conversational content optimized for AI citation',
      'Authority building across AI training sources',
      'AI visibility monitoring and citation tracking',
    ],
  },
];

const COMPARE = [
  { old: 'Set-and-forget SEO from years ago', now: 'Monthly optimized SEO + AI search' },
  { old: 'Invisible to AI search assistants', now: 'Structured for ChatGPT, Claude, Perplexity, Gemini' },
  { old: 'No structured data or schema markup', now: 'Schema markup and entity optimization' },
  { old: 'Generic content that ranks nowhere', now: 'Authority content that ranks and gets cited' },
  { old: 'No monthly reporting or adjustments', now: 'Monthly reporting with clear growth metrics' },
];

const MONTHLY = [
  { title: 'Audit & analyze', desc: 'Full technical audit, rank tracking, and an AI visibility check to find where the growth opportunities are.' },
  { title: 'Optimize & create', desc: 'On-page tweaks, new authority content, and structured data updates for both traditional search and AI answers.' },
  { title: 'Build & outreach', desc: 'Strategic backlink acquisition and entity mentions that build domain authority and AI trust signals.' },
  { title: 'Report & refine', desc: 'A clear monthly report showing rankings, traffic, and AI citations — with a refined plan for the month ahead.' },
];

const PLATFORMS = [
  { name: 'Google Search', desc: 'The foundation. We optimize for Google’s ever-evolving algorithm, including AI Overviews and featured snippets.' },
  { name: 'Bing & Copilot', desc: 'Microsoft’s search engine powers Copilot’s AI answers. Optimizing here means visibility across Microsoft’s ecosystem.' },
  { name: 'ChatGPT Search', desc: 'People increasingly ask ChatGPT the questions they used to type into a search bar. We structure your content so it can be found and cited when those questions are about what you do.' },
  { name: 'Perplexity AI', desc: 'An answer engine that cites its sources in every response. We optimize your content to be sourced and cited in Perplexity’s answers.' },
  { name: 'Google Gemini', desc: 'Google’s AI assistant pulls from web content to answer questions. Structured, authoritative content gets cited first.' },
  { name: 'Claude & others', desc: 'As more AI assistants emerge, the same structural work keeps your business visible across them — without starting over each time.' },
];

export default function SeoAso() {
  return (
    <>
      <Helmet>
        <title>SEO & AI Search Optimization | Nuvion Solutions</title>
        <meta name="description" content="Monthly optimized SEO for traditional search engines and AI Answer Optimization. Get found by Google, ChatGPT, Claude, Perplexity, Gemini, and more." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/seo-aso" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />
      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">SEO & AI Search Optimization</div>
        <h1 className="sp-h1">Get found — on Google, and <em>wherever people ask</em>.</h1>
        <p className="sp-sub">
          Monthly optimized SEO for traditional search engines, plus AI Answer
          Optimization — so your business shows up whether customers type it into
          Google or ask ChatGPT, Claude, or another AI assistant.
        </p>
      </header>

      <div className="sp-wrap">

        {/* № 01 — TWO PILLARS */}
        <section className="seo-sec">
          <div className="seo-head">
            <div className="seo-index">№ 01 — The strategy</div>
            <div>
              <h2 className="seo-h2">Two pillars, <em>one strategy</em>.</h2>
              <p className="seo-lede">
                Search didn’t stop at the results page. We work both surfaces at
                once — the rankings you already know, and the AI answers your
                customers are starting to trust.
              </p>
            </div>
          </div>
          <div className="pillars">
            {PILLARS.map(p => (
              <div key={p.kicker} className="pillar">
                <div className="pillar-kicker">{p.kicker}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <ul className="pillar-list">
                  {p.points.map((pt, i) => (
                    <li key={pt}>
                      <span className="pl-n">{String(i + 1).padStart(2, '0')}</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* № 02 — OLD WAY vs NUVION WAY */}
        <section className="seo-sec">
          <div className="seo-head">
            <div className="seo-index">№ 02 — The difference</div>
            <div>
              <h2 className="seo-h2">The old way vs. <em>the Nuvion way</em>.</h2>
            </div>
          </div>
          <div className="vs">
            <div className="vs-legend" aria-hidden="true">
              <span>№</span>
              <span>The old way</span>
              <span className="lit">The Nuvion way</span>
            </div>
            {COMPARE.map((row, i) => (
              <div key={row.old} className="vs-row">
                <span className="vs-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="vs-old"><span className="vs-tag">The old way</span>{row.old}</div>
                <div className="vs-new"><span className="vs-tag">The Nuvion way</span>{row.now}</div>
              </div>
            ))}
          </div>
        </section>

        {/* № 03 — MONTHLY CADENCE */}
        <section className="seo-sec">
          <div className="seo-head">
            <div className="seo-index">№ 03 — The cadence</div>
            <div>
              <h2 className="seo-h2">What we do <em>every month</em>.</h2>
              <p className="seo-lede">
                Search optimization isn’t a launch event — it’s a discipline.
                Every month runs the same four-step loop, in the open.
              </p>
            </div>
          </div>
          <div className="month">
            {MONTHLY.map((m, i) => (
              <div key={m.title} className="month-row">
                <span className="month-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="month-title">{m.title}</h3>
                <p className="month-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* № 04 — PLATFORMS */}
        <section className="seo-sec">
          <div className="seo-head">
            <div className="seo-index">№ 04 — The surfaces</div>
            <div>
              <h2 className="seo-h2">Platforms we <em>optimize for</em>.</h2>
            </div>
          </div>
          <div className="plat-grid">
            {PLATFORMS.map((p, i) => (
              <div key={p.name} className="plate plat">
                <div className="plat-top">
                  <span className="plat-name">{p.name}</span>
                  <span className="plat-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="plat-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <section className="sp-cta">
        <div className="sp-cta-in">
          <span className="label">№ 05 — Start here</span>
          <h2>Ready to be found — in search results and AI answers?</h2>
          <p>
            Book a free call and we’ll audit your current search visibility and
            show you exactly where the opportunities are.
          </p>
          <Link to="/book" className="sp-cta-btn">Book a free SEO audit call <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
