import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
/* PAGE ACCENT */
.seo-accent{color:#34D399}
.sp-eyebrow.seo{background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.22);color:#34D399}
.sp-cta-btn.seo{background:#34D399;color:#07090F}

/* DUAL PILLARS */
.seo-pillars{padding:20px 0 72px}
.seo-pillar-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.seo-pillar{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:32px 28px;position:relative;overflow:hidden}
.seo-pillar::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#34D399,transparent)}
.seo-pillar-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:100px;font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:18px}
.seo-badge-trad{background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.2);color:#818CF8}
.seo-badge-ai{background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.2);color:#34D399}
.seo-pillar-title{font-size:1.15rem;font-weight:700;margin-bottom:10px;color:var(--text)}
.seo-pillar-desc{font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:20px}
.seo-pillar-features{display:flex;flex-direction:column;gap:10px}
.seo-feat{display:flex;align-items:flex-start;gap:10px;font-size:.82rem;color:var(--muted);line-height:1.5}
.seo-feat-icon{flex-shrink:0;font-size:.9rem;margin-top:1px}

/* WHAT WE DO MONTHLY */
.seo-monthly{padding:0 0 72px}
.seo-month-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.seo-month-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 20px;text-align:center;transition:border-color .3s,transform .3s}
.seo-month-card:hover{border-color:rgba(52,211,153,0.3);transform:translateY(-3px)}
.seo-month-icon{font-size:1.6rem;margin-bottom:12px}
.seo-month-title{font-size:.88rem;font-weight:700;color:var(--text);margin-bottom:6px}
.seo-month-desc{font-size:.78rem;color:var(--muted);line-height:1.55}

/* COMPARISON: OLD vs NEW */
.seo-compare{padding:0 0 72px}
.seo-compare-grid{display:grid;grid-template-columns:1fr 60px 1fr;gap:0;align-items:stretch}
.seo-panel{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:28px 24px}
.seo-panel-label{font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:8px}
.seo-label-old{color:#6B7280}
.seo-label-new{color:#34D399}
.seo-item{display:flex;align-items:center;gap:10px;padding:11px 14px;border-radius:10px;font-size:.82rem;font-weight:600;margin-bottom:9px}
.seo-item-old{background:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.18);color:#9CA3AF}
.seo-item-new{background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.18);color:#D1FAE5}
.seo-item-icon{font-size:1rem;flex-shrink:0}
.seo-middle{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:0 8px}
.seo-divider-pill{background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.25);border-radius:100px;padding:6px 12px;font-size:.68rem;font-weight:700;color:#34D399;letter-spacing:.06em;text-transform:uppercase}

/* PLATFORMS */
.seo-engines{padding:0 0 72px}
.seo-engine-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.seo-engine{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 24px;position:relative;overflow:hidden;transition:border-color .3s,transform .3s}
.seo-engine:hover{border-color:rgba(52,211,153,0.3);transform:translateY(-3px)}
.seo-engine-top{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.seo-engine-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0}
.seo-engine-name{font-size:.95rem;font-weight:700}
.seo-engine-desc{font-size:.8rem;color:var(--muted);line-height:1.55}
.seo-engine-google .seo-engine-icon{background:rgba(59,130,246,0.12)}
.seo-engine-bing .seo-engine-icon{background:rgba(0,220,255,0.12)}
.seo-engine-chatgpt .seo-engine-icon{background:rgba(52,211,153,0.12)}
.seo-engine-perplexity .seo-engine-icon{background:rgba(167,139,250,0.12)}
.seo-engine-gemini .seo-engine-icon{background:rgba(245,158,11,0.12)}
.seo-engine-claude .seo-engine-icon{background:rgba(236,72,153,0.12)}

@media(max-width:700px){
  .seo-pillar-grid{grid-template-columns:1fr}
  .seo-month-grid{grid-template-columns:repeat(2,1fr)}
  .seo-compare-grid{grid-template-columns:1fr;gap:16px}
  .seo-middle{flex-direction:row;padding:8px 0}
  .seo-engine-grid{grid-template-columns:1fr}
}
`;

const OLD_WAY = [
  ['😴', 'Set-and-forget SEO from years ago'],
  ['📉', 'Invisible to AI search assistants'],
  ['🔇', 'No structured data or schema markup'],
  ['❌', 'Generic content that ranks nowhere'],
  ['📋', 'No monthly reporting or adjustments'],
];

const NEW_WAY = [
  ['🚀', 'Monthly optimized SEO + AI search'],
  ['🤖', 'Structured for ChatGPT, Claude, Perplexity, Gemini'],
  ['📊', 'Schema markup and entity optimization'],
  ['✍️', 'Authority content that ranks and gets cited'],
  ['📈', 'Monthly reporting with clear growth metrics'],
];

export default function SeoAso() {
  return (
    <>
      <Helmet>
        <title>SEO & AI Search Optimization | Nuvion Solutions</title>
        <meta name="description" content="Monthly optimized SEO for traditional search engines and AI Answer Optimization. Get found by Google, ChatGPT, Claude, Perplexity, Gemini, and more." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/seo-aso" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">&larr; Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow seo">🔎 SEO & AI Search Optimization</div>
        <h1 className="sp-h1">Get found by Google<br /><em className="seo-accent">and AI assistants</em></h1>
        <p className="sp-sub">Monthly optimized SEO for traditional search engines plus AI Answer Optimization — so your business shows up whether customers search Google or ask ChatGPT, Claude, or any AI assistant.</p>
      </div>

      <div className="sp-wrap">

        {/* TWO PILLARS: Traditional SEO + AI ASO */}
        <div className="seo-pillars">
          <div className="sp-section-title">Two Pillars, One Strategy</div>
          <div className="seo-pillar-grid">
            <div className="seo-pillar">
              <div className="seo-pillar-badge seo-badge-trad">Traditional SEO</div>
              <div className="seo-pillar-title">Rank on Google, Bing & Yahoo</div>
              <div className="seo-pillar-desc">Classic search engine optimization, executed monthly with modern best practices — not a one-time setup that gathers dust.</div>
              <div className="seo-pillar-features">
                <div className="seo-feat"><span className="seo-feat-icon">🔑</span> Keyword research and content gap analysis</div>
                <div className="seo-feat"><span className="seo-feat-icon">📝</span> On-page optimization (titles, meta, headers, internal links)</div>
                <div className="seo-feat"><span className="seo-feat-icon">⚡</span> Technical SEO audits (speed, mobile, crawlability)</div>
                <div className="seo-feat"><span className="seo-feat-icon">🔗</span> Strategic backlink building and outreach</div>
                <div className="seo-feat"><span className="seo-feat-icon">📍</span> Local SEO and Google Business Profile optimization</div>
              </div>
            </div>
            <div className="seo-pillar">
              <div className="seo-pillar-badge seo-badge-ai">AI Answer Optimization</div>
              <div className="seo-pillar-title">Get Cited by AI Assistants</div>
              <div className="seo-pillar-desc">The rapidly growing world of AI-powered search. When someone asks ChatGPT, Claude, Perplexity, or Gemini for a recommendation, your business should be the answer.</div>
              <div className="seo-pillar-features">
                <div className="seo-feat"><span className="seo-feat-icon">🧠</span> Entity and knowledge graph optimization</div>
                <div className="seo-feat"><span className="seo-feat-icon">📋</span> Structured data and schema markup for AI crawlers</div>
                <div className="seo-feat"><span className="seo-feat-icon">💬</span> Conversational content optimized for AI citation</div>
                <div className="seo-feat"><span className="seo-feat-icon">🏆</span> Authority building across AI training sources</div>
                <div className="seo-feat"><span className="seo-feat-icon">📊</span> AI visibility monitoring and citation tracking</div>
              </div>
            </div>
          </div>
        </div>

        {/* BEFORE / AFTER COMPARISON */}
        <div className="seo-compare">
          <div className="sp-section-title">The Old Way vs. The Nuvion Way</div>
          <div className="seo-compare-grid">
            <div className="seo-panel">
              <div className="seo-panel-label seo-label-old">Without Nuvion</div>
              {OLD_WAY.map(([icon, text]) => (
                <div key={text} className="seo-item seo-item-old">
                  <span className="seo-item-icon">{icon}</span>{text}
                </div>
              ))}
            </div>
            <div className="seo-middle">
              <div className="seo-divider-pill">VS</div>
            </div>
            <div className="seo-panel">
              <div className="seo-panel-label seo-label-new">With Nuvion</div>
              {NEW_WAY.map(([icon, text]) => (
                <div key={text} className="seo-item seo-item-new">
                  <span className="seo-item-icon">{icon}</span>{text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT WE DO MONTHLY */}
        <div className="seo-monthly">
          <div className="sp-section-title">What We Do Every Month</div>
          <div className="seo-month-grid">
            <div className="seo-month-card">
              <div className="seo-month-icon">🔍</div>
              <div className="seo-month-title">Audit & Analyze</div>
              <div className="seo-month-desc">Full technical audit, rank tracking, and AI visibility check to identify growth opportunities.</div>
            </div>
            <div className="seo-month-card">
              <div className="seo-month-icon">✍️</div>
              <div className="seo-month-title">Optimize & Create</div>
              <div className="seo-month-desc">On-page tweaks, new authority content, and structured data updates for both search and AI.</div>
            </div>
            <div className="seo-month-card">
              <div className="seo-month-icon">🔗</div>
              <div className="seo-month-title">Build & Outreach</div>
              <div className="seo-month-desc">Strategic backlink acquisition and entity mentions to build domain authority and AI trust signals.</div>
            </div>
            <div className="seo-month-card">
              <div className="seo-month-icon">📈</div>
              <div className="seo-month-title">Report & Refine</div>
              <div className="seo-month-desc">Clear monthly report showing rankings, traffic, and AI citations — with a refined plan for next month.</div>
            </div>
          </div>
        </div>

        {/* PLATFORMS WE OPTIMIZE FOR */}
        <div className="seo-engines">
          <div className="sp-section-title">Platforms We Optimize For</div>
          <div className="seo-engine-grid">
            <div className="seo-engine seo-engine-google">
              <div className="seo-engine-top">
                <div className="seo-engine-icon">🔵</div>
                <div className="seo-engine-name">Google Search</div>
              </div>
              <div className="seo-engine-desc">The foundation. We optimize for Google's ever-evolving algorithm, including AI Overviews and featured snippets.</div>
            </div>
            <div className="seo-engine seo-engine-bing">
              <div className="seo-engine-top">
                <div className="seo-engine-icon">🌐</div>
                <div className="seo-engine-name">Bing & Copilot</div>
              </div>
              <div className="seo-engine-desc">Microsoft's search engine powers Copilot's AI answers. Optimizing here means visibility across Microsoft's ecosystem.</div>
            </div>
            <div className="seo-engine seo-engine-chatgpt">
              <div className="seo-engine-top">
                <div className="seo-engine-icon">🤖</div>
                <div className="seo-engine-name">ChatGPT Search</div>
              </div>
              <div className="seo-engine-desc">Millions now search via ChatGPT. We ensure your business is cited when users ask for recommendations.</div>
            </div>
            <div className="seo-engine seo-engine-perplexity">
              <div className="seo-engine-top">
                <div className="seo-engine-icon">🟣</div>
                <div className="seo-engine-name">Perplexity AI</div>
              </div>
              <div className="seo-engine-desc">The fastest-growing AI search engine. We optimize your content to be sourced and cited in Perplexity answers.</div>
            </div>
            <div className="seo-engine seo-engine-gemini">
              <div className="seo-engine-top">
                <div className="seo-engine-icon">🟡</div>
                <div className="seo-engine-name">Google Gemini</div>
              </div>
              <div className="seo-engine-desc">Google's AI assistant pulls from web content to answer questions. Structured, authoritative content gets cited first.</div>
            </div>
            <div className="seo-engine seo-engine-claude">
              <div className="seo-engine-top">
                <div className="seo-engine-icon">🟠</div>
                <div className="seo-engine-name">Claude & Others</div>
              </div>
              <div className="seo-engine-desc">As more AI assistants emerge, our optimization strategy ensures you're visible across all of them.</div>
            </div>
          </div>
        </div>

      </div>

      <div className="sp-cta">
        <h2>Ready to dominate search — traditional and AI?</h2>
        <p>Book a free call and we'll audit your current search visibility and show you exactly where the opportunities are.</p>
        <Link to="/book" className="sp-cta-btn seo">Book a Free SEO Audit Call &rarr;</Link>
      </div>
      <Footer />
    </>
  );
}
