import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Web Design & Development — Flagship № 01.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* Hero refinements */
.sp-hero .sp-h1{max-width:24ch}
.wd-proof{margin-top:26px;display:inline-flex;align-items:center;gap:12px;font-family:var(--mono);font-size:.75rem;letter-spacing:.08em;color:var(--ink)}
.wd-proof::before{content:'';width:26px;height:1px;background:var(--petrol)}
.wd-proof b{color:var(--petrol);font-weight:400}

/* Section scaffold (homepage pattern) */
.wd-section{padding-top:var(--pad-section)}
.wd-section.last{padding-bottom:var(--pad-section)}
.wd-head{margin-bottom:clamp(36px,4.5vw,56px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.wd-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.wd-idx{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.wd-idx::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.wd-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.8rem,3.2vw,2.6rem);line-height:1.08;letter-spacing:-.018em;max-width:22ch}
.wd-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.wd-sub{font-size:.98rem;color:var(--muted-2);line-height:1.7;max-width:56ch;margin-top:12px}

/* Pillars */
.wd-pillars{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:880px){.wd-pillars{grid-template-columns:repeat(3,1fr)}}
.wd-pillar{padding:28px 26px 26px;border-top:2px solid var(--petrol);transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.wd-pillar:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.wd-pillar-k{display:flex;justify-content:space-between;align-items:baseline;font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);padding-bottom:16px;border-bottom:1px solid var(--hairline);margin-bottom:18px}
.wd-pillar-k span:last-child{color:var(--muted-2)}
.wd-pillar h3{font-family:var(--serif);font-size:1.35rem;font-weight:700;letter-spacing:-.012em;line-height:1.15;margin-bottom:10px}
.wd-pillar p{font-size:.92rem;color:var(--muted-2);line-height:1.66;max-width:44ch}

/* Ledger — template site vs Nuvion build */
.wd-ledger{border-top:1px solid var(--hairline)}
.wd-ledger-head{display:none}
@media(min-width:860px){
  .wd-ledger-head{display:grid;grid-template-columns:44px 1fr 44px 1fr;gap:16px;padding:14px 6px;border-bottom:1px solid var(--hairline)}
  .wd-ledger-head span{font-family:var(--mono);font-size:.68rem;letter-spacing:.16em;text-transform:uppercase}
  .wd-lh-old{color:var(--muted-2);grid-column:2}
  .wd-lh-new{color:var(--petrol);grid-column:4}
}
.wd-legend{margin-bottom:14px}
@media(min-width:860px){.wd-legend{display:none}}
.wd-lrow{display:grid;grid-template-columns:44px 1fr;gap:8px 16px;padding:20px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:860px){.wd-lrow{grid-template-columns:44px 1fr 44px 1fr;align-items:baseline}}
.wd-lrow:hover{background:var(--card);padding-left:14px}
.wd-lnum{font-family:var(--mono);font-size:.72rem;color:var(--muted-2);font-variant-numeric:tabular-nums;padding-top:3px}
.wd-lold{font-size:.9rem;color:var(--muted-2);line-height:1.6}
@media(max-width:859px){.wd-lold{grid-column:2}}
.wd-larr{display:none}
@media(min-width:860px){.wd-larr{display:block;font-family:var(--mono);font-size:.85rem;color:var(--petrol);text-align:center}}
.wd-lnew{font-size:.94rem;font-weight:600;color:var(--ink);line-height:1.6}
@media(max-width:859px){.wd-lnew{grid-column:2}.wd-lnew::before{content:'→';font-family:var(--mono);font-weight:400;color:var(--petrol);margin-right:10px}}

/* Included — ruled index */
.wd-inc{border-top:1px solid var(--hairline)}
.wd-inc-row{display:grid;grid-template-columns:44px 1fr;gap:4px 16px;padding:18px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:760px){.wd-inc-row{grid-template-columns:56px 240px 1fr;align-items:baseline}}
.wd-inc-row:hover{background:var(--card);padding-left:14px}
.wd-inc-num{font-family:var(--mono);font-size:.72rem;color:var(--petrol);font-variant-numeric:tabular-nums}
.wd-inc-name{font-family:var(--serif);font-size:1.12rem;font-weight:700;letter-spacing:-.01em}
.wd-inc-desc{font-size:.9rem;color:var(--muted-2);line-height:1.6;max-width:60ch}
@media(max-width:759px){.wd-inc-desc{grid-column:2}}

/* Two plans */
.wd-plans{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:820px){.wd-plans{grid-template-columns:1fr 1fr}}
.wd-plan{padding:30px 30px 28px;border-top:2px solid var(--petrol);transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.wd-plan:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.wd-plan-k{display:flex;justify-content:space-between;align-items:baseline;font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);padding-bottom:16px;border-bottom:1px solid var(--hairline);margin-bottom:20px}
.wd-plan h3{font-family:var(--serif);font-size:clamp(1.5rem,2.2vw,1.85rem);font-weight:700;letter-spacing:-.015em;margin-bottom:8px}
.wd-plan>p{font-size:.92rem;color:var(--muted-2);line-height:1.66;margin-bottom:18px;max-width:48ch}
.wd-plan ul{list-style:none;margin:0;display:flex;flex-direction:column}
.wd-plan li{display:flex;align-items:baseline;gap:12px;padding:9px 0;font-size:.88rem;color:var(--ink);border-bottom:1px solid var(--hairline)}
.wd-plan li:last-child{border-bottom:none}
.wd-plan li::before{content:'—';color:var(--petrol);font-family:var(--mono);font-size:.8rem}
.wd-plan-note{margin-top:26px;padding-top:20px;border-top:1px solid var(--hairline);display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;justify-content:space-between}
.wd-plan-note p{font-size:.94rem;color:var(--ink);max-width:52ch}
.wd-plan-note p b{color:var(--petrol);font-weight:600}
.wd-agree{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--petrol);white-space:nowrap}
.wd-agree::after{content:'→';transition:transform .2s}
.wd-agree:hover::after{transform:translateX(4px)}

/* Process */
.wd-steps{display:grid;grid-template-columns:1fr;border-top:1px solid var(--hairline)}
@media(min-width:880px){.wd-steps{grid-template-columns:repeat(4,1fr)}}
.wd-step{padding:30px 6px 26px;border-bottom:1px solid var(--hairline)}
@media(min-width:880px){
  .wd-step{padding:38px 30px 10px 0;border-bottom:none;border-left:1px solid var(--hairline);padding-left:26px}
  .wd-step:first-child{border-left:none;padding-left:0}
}
.wd-step-num{font-family:var(--serif);font-weight:700;font-size:clamp(3.2rem,5.2vw,4.6rem);line-height:.9;color:transparent;-webkit-text-stroke:1.4px var(--muted-2);letter-spacing:-.03em;margin-bottom:16px;opacity:.7;transition:color .3s,opacity .3s}
.wd-step:hover .wd-step-num{color:var(--petrol);-webkit-text-stroke:1.4px var(--petrol);opacity:1}
.wd-step h3{font-family:var(--serif);font-size:1.2rem;font-weight:700;letter-spacing:-.01em;margin-bottom:8px}
.wd-step p{font-size:.9rem;color:var(--muted-2);line-height:1.66;max-width:36ch}

/* Stack */
.wd-stack{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:880px){.wd-stack{grid-template-columns:repeat(3,1fr)}}
.wd-stack-card{padding:26px 26px 24px;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.wd-stack-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.wd-stack-k{font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);margin-bottom:14px}
.wd-stack-name{font-family:var(--serif);font-size:1.2rem;font-weight:700;letter-spacing:-.01em;margin-bottom:8px}
.wd-stack-desc{font-size:.9rem;color:var(--muted-2);line-height:1.62;max-width:44ch}

/* CTA inner alignment */
.wd-cta-in{max-width:1140px;margin:0 auto}
.wd-cta-in .label{color:rgba(244,242,236,.5);margin-bottom:20px;display:block}
.sp-cta h2 em{font-style:italic;font-weight:400;color:#9BC4C1}
`;

/* ── Data ─────────────────────────────────────────────────── */
const PILLARS = [
  {
    label: 'Pillar',
    title: 'Performance first',
    desc: 'Lean pages, optimized images, clean code — built and tested against Core Web Vitals, because fast sites rank higher and convert more.',
  },
  {
    label: 'Pillar',
    title: 'Designed to convert',
    desc: 'Every section, button, and headline is crafted with one goal in mind: turning visitors into booked calls, qualified leads, and paying customers.',
  },
  {
    label: 'Pillar',
    title: 'Wired into automation',
    desc: 'Forms, bookings, and chat connect directly to your CRM, calendar, and Virtual Front Desk — so leads flow into your pipeline automatically.',
  },
];

const COMPARE = [
  ['A bloated template that takes ages to load', 'A lean custom build, tuned for Core Web Vitals'],
  ['Broken or clunky on mobile', 'Mobile-first — designed for the phone screen before the desktop'],
  ['A generic design that looks like every competitor', 'Distinctive branding that actually stands out'],
  ['No integrations — the form emails you, and that’s it', 'Plugged into your CRM, calendar, and follow-up automations'],
  ['Renting a page you’ll never own', 'Own it outright on the one-time build — design, files, and content'],
];

const INCLUDED = [
  { name: 'Custom design', desc: 'Bespoke visual identity, typography, and layouts — no cookie-cutter templates.' },
  { name: 'Fully responsive', desc: 'Looks and performs flawlessly on phones, tablets, laptops, and widescreen monitors.' },
  { name: 'SEO foundation', desc: 'Semantic HTML, schema markup, meta tags, and sitemaps baked in from day one.' },
  { name: 'Copy that converts', desc: 'Headlines, CTAs, and page structure written to turn visitors into customers.' },
  { name: 'Booking integration', desc: 'Calendly, GHL, or your preferred scheduler embedded right where leads will use it.' },
  { name: 'Lead capture forms', desc: 'Forms that feed directly into your CRM and trigger instant follow-up automations.' },
  { name: 'Analytics setup', desc: 'Google Analytics, conversion tracking, and heatmaps configured so you know what works.' },
  { name: 'SSL & security', desc: 'HTTPS, spam protection, and modern security best practices from the day it goes live.' },
];

const STEPS = [
  { title: 'Discovery & strategy', desc: 'We dig into your brand, audience, and goals — and map exactly what the site needs to do to move your business forward.' },
  { title: 'Design & wireframes', desc: 'Custom mockups and wireframes for every key page. You approve the look and feel before a single line of code gets written.' },
  { title: 'Build & integrate', desc: 'We build the site with modern tooling, plug in your CRM and automations, and test relentlessly across devices and browsers.' },
  { title: 'Launch & support', desc: 'We handle deployment, DNS, and launch QA — then stick around for ongoing tweaks, updates, and optimization.' },
];

const STACK = [
  { kicker: 'Front-end', name: 'React & modern JavaScript', desc: 'Fast, component-driven front ends built with React and Vite — the same tools powering the world’s top product sites.' },
  { kicker: 'Hosting', name: 'Vercel hosting', desc: 'Global edge network, instant deploys, and automatic SSL — fast, reliable hosting included, everywhere in the world.' },
  { kicker: 'Integrations', name: 'CRM & automation hooks', desc: 'Direct integrations with GoHighLevel, HubSpot, Stripe, Calendly, n8n, and any API — your site plugs into your stack.' },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function WebDesign() {
  return (
    <>
      <Helmet>
        <title>Web Design & Development | Nuvion Solutions</title>
        <meta name="description" content="Custom-built, high-converting websites for service businesses. Fast, mobile-first, SEO-ready, and wired into the automations that grow your business." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/web-design" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Web Design &amp; Development — Flagship № 01</div>
        <h1 className="sp-h1">Websites that look sharp<br /><em>and actually convert</em>.</h1>
        <p className="sp-sub">
          Custom-built, mobile-first websites designed around your brand and wired
          into your automations — so your site doesn’t just sit there, it books
          appointments, captures leads, and closes deals 24/7.
        </p>
        <div className="wd-proof">You see the finished site <b>before you pay a dollar</b></div>
      </header>

      <main>
        <div className="sp-wrap">

          {/* № 01 — PILLARS */}
          <section className="wd-section">
            <div className="wd-head">
              <div className="wd-idx">№ 01 — The standard</div>
              <div>
                <h2 className="wd-h2">Built around three things <em>that matter</em>.</h2>
              </div>
            </div>
            <div className="wd-pillars">
              {PILLARS.map((p, i) => (
                <div key={p.title} className="plate wd-pillar">
                  <div className="wd-pillar-k"><span>{p.label}</span><span className="tnum">{String(i + 1).padStart(2, '0')}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* № 02 — LEDGER */}
          <section className="wd-section">
            <div className="wd-head">
              <div className="wd-idx">№ 02 — The difference</div>
              <div>
                <h2 className="wd-h2">The template site, <em>retired</em>.</h2>
                <p className="wd-sub">
                  Five ways a Nuvion build leaves the off-the-shelf website behind —
                  line by line.
                </p>
              </div>
            </div>
            <div className="wd-legend label">The template site <b>→ the Nuvion build</b></div>
            <div className="wd-ledger">
              <div className="wd-ledger-head" aria-hidden="true">
                <span className="wd-lh-old">The template site</span>
                <span className="wd-lh-new">The Nuvion build</span>
              </div>
              {COMPARE.map(([oldWay, newWay], i) => (
                <div key={newWay} className="wd-lrow">
                  <span className="wd-lnum">{String(i + 1).padStart(2, '0')}</span>
                  <span className="wd-lold">{oldWay}</span>
                  <span className="wd-larr" aria-hidden="true">→</span>
                  <span className="wd-lnew">{newWay}</span>
                </div>
              ))}
            </div>
          </section>

          {/* № 03 — INCLUDED */}
          <section className="wd-section">
            <div className="wd-head">
              <div className="wd-idx">№ 03 — What’s included</div>
              <div>
                <h2 className="wd-h2">Every build ships with <em>all of it</em>.</h2>
                <p className="wd-sub">
                  Not a menu of paid add-ons — the baseline. Eight things that come
                  standard with every website we deliver.
                </p>
              </div>
            </div>
            <div className="wd-inc" role="list">
              {INCLUDED.map((item, i) => (
                <div key={item.name} className="wd-inc-row" role="listitem">
                  <span className="wd-inc-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="wd-inc-name">{item.name}</span>
                  <span className="wd-inc-desc">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* № 04 — TWO PLANS */}
          <section className="wd-section">
            <div className="wd-head">
              <div className="wd-idx">№ 04 — Two ways to pay</div>
              <div>
                <h2 className="wd-h2">Own it outright, or <em>subscribe to it</em>.</h2>
                <p className="wd-sub">
                  Same build quality either way. The amounts live on your written
                  quote — the structure is simple enough to fit on this page.
                </p>
              </div>
            </div>
            <div className="wd-plans">
              <div className="plate wd-plan">
                <div className="wd-plan-k"><span>Plan A</span><span>Pay once</span></div>
                <h3>One-time build</h3>
                <p>Pay once, per your quote — the site is yours to keep.</p>
                <ul>
                  <li>The design, files, and content are yours outright</li>
                  <li>Hosting included — no separate hosting fee</li>
                  <li>Revisions after delivery are a small per-change fee</li>
                </ul>
              </div>
              <div className="plate wd-plan">
                <div className="wd-plan-k"><span>Plan B</span><span>Monthly</span></div>
                <h3>Monthly plan</h3>
                <p>No big upfront cost — a flat monthly rate, per your quote.</p>
                <ul>
                  <li>Hosting and revisions included while subscribed</li>
                  <li>Cancel anytime — no long-term contract</li>
                  <li>Switch to a one-time buyout whenever you want to own it</li>
                </ul>
              </div>
            </div>
            <div className="wd-plan-note">
              <p>Either way, <b>you see the finished website before you pay a dollar</b>.</p>
              <Link to="/agreement" className="wd-agree">Read the plain-English agreement</Link>
            </div>
          </section>

          {/* № 05 — PROCESS */}
          <section className="wd-section">
            <div className="wd-head">
              <div className="wd-idx">№ 05 — The process</div>
              <div>
                <h2 className="wd-h2">From kickoff <em>to live site</em>.</h2>
              </div>
            </div>
            <div className="wd-steps">
              {STEPS.map((s, i) => (
                <div key={s.title} className="wd-step">
                  <div className="wd-step-num tnum" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* № 06 — STACK */}
          <section className="wd-section last">
            <div className="wd-head">
              <div className="wd-idx">№ 06 — The stack</div>
              <div>
                <h2 className="wd-h2">The tech we <em>build with</em>.</h2>
              </div>
            </div>
            <div className="wd-stack">
              {STACK.map(t => (
                <div key={t.name} className="plate wd-stack-card">
                  <div className="wd-stack-k">{t.kicker}</div>
                  <div className="wd-stack-name">{t.name}</div>
                  <p className="wd-stack-desc">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA */}
        <section className="sp-cta">
          <div className="wd-cta-in">
            <div className="label">№ 07 — Start here</div>
            <h2>Ready for a website that actually <em>earns its keep</em>?</h2>
            <p>
              Book a free design call — we’ll audit your current site, show you
              what’s costing you leads, and sketch out exactly what a Nuvion
              build would look like.
            </p>
            <Link to="/book" className="sp-cta-btn">Book a free design call →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
