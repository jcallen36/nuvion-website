import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Done-For-You Business — the end-to-end engagement that bundles
   every Nuvion capability: strategy, website, Virtual Front Desk,
   automations, integrations, custom apps, ongoing optimization.
   Ink on porcelain paper — no page accent, petrol only.
───────────────────────────────────────────────────────────── */

const CSS = `
/* Section scaffold — homepage sec-head pattern */
.df-section{padding-top:var(--pad-section)}
.df-section.df-last{padding-bottom:var(--pad-section)}
.df-head{margin-bottom:clamp(36px,5vw,56px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.df-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.df-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.df-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.df-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.8rem,3.4vw,2.7rem);line-height:1.08;letter-spacing:-.018em;max-width:24ch}
.df-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.df-sub{font-size:.98rem;color:var(--muted-2);line-height:1.7;max-width:58ch;margin-top:12px}

/* № 01 — Inventory index rows */
.df-inv{border-top:1px solid var(--hairline)}
.df-inv-row{display:grid;grid-template-columns:44px 1fr;gap:14px;padding:20px 6px;border-bottom:1px solid var(--hairline);align-items:baseline;transition:background .2s,padding-left .2s}
@media(min-width:760px){.df-inv-row{grid-template-columns:56px 260px 1fr;gap:22px}}
.df-inv-row:hover{background:var(--card);padding-left:14px}
.df-inv-num{font-family:var(--mono);font-size:.72rem;color:var(--muted-2);font-variant-numeric:tabular-nums;transition:color .2s}
.df-inv-row:hover .df-inv-num{color:var(--petrol)}
.df-inv-name{font-family:var(--serif);font-size:1.12rem;font-weight:700;letter-spacing:-.01em;line-height:1.25}
.df-inv-desc{font-size:.9rem;color:var(--muted-2);line-height:1.62;max-width:60ch}
@media(max-width:759px){.df-inv-desc{grid-column:2}}

/* № 02 — Two starting points (plates) */
.df-paths{display:grid;grid-template-columns:1fr;gap:22px}
@media(min-width:820px){.df-paths{grid-template-columns:1fr 1fr}}
.df-path{padding:32px 30px 26px;border-top:2px solid var(--petrol);display:flex;flex-direction:column;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.df-path:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.df-path-tag{display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);padding-bottom:16px;border-bottom:1px solid var(--hairline)}
.df-path-h{font-family:var(--serif);font-size:clamp(1.3rem,2.2vw,1.7rem);font-weight:700;letter-spacing:-.015em;line-height:1.15;margin:18px 0 10px}
.df-path-p{font-size:.92rem;color:var(--muted-2);line-height:1.68;margin-bottom:22px;max-width:52ch}
.df-path-list{list-style:none;margin-top:auto;border-top:1px solid var(--hairline)}
.df-path-list li{display:flex;gap:12px;align-items:baseline;padding:10px 0;font-size:.88rem;color:var(--ink);border-bottom:1px solid var(--hairline);line-height:1.55}
.df-path-list li:last-child{border-bottom:none}
.df-path-list li::before{content:'—';font-family:var(--mono);font-size:.8rem;color:var(--petrol);flex-shrink:0}

/* № 03 — Vendor stack vs done-for-you (parallel ruled columns) */
.df-compare{display:grid;grid-template-columns:1fr;gap:22px}
@media(min-width:820px){.df-compare{grid-template-columns:1fr 1fr}}
.df-col{padding:30px 30px 22px;border:1px solid var(--hairline);border-radius:10px}
.df-col-dfy{border-top:2px solid var(--petrol)}
.df-col-label{font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;padding-bottom:14px;border-bottom:1px solid var(--hairline)}
.df-col-vendor .df-col-label{color:var(--muted-2)}
.df-col-dfy .df-col-label{color:var(--petrol)}
.df-col h3{font-family:var(--serif);font-size:1.28rem;font-weight:700;letter-spacing:-.012em;margin:18px 0 8px}
.df-col-vendor h3{color:var(--muted-2)}
.df-col-line{display:flex;gap:14px;align-items:baseline;padding:11px 0;border-bottom:1px solid var(--hairline);font-size:.9rem;line-height:1.55}
.df-col-line:last-child{border-bottom:none}
.df-col-vendor .df-col-line{color:var(--muted-2)}
.df-col-dfy .df-col-line{color:var(--ink)}
.df-mark{font-family:var(--mono);font-size:.72rem;flex-shrink:0;font-variant-numeric:tabular-nums}
.df-col-vendor .df-mark{color:var(--muted-2)}
.df-col-dfy .df-mark{color:var(--petrol)}

/* № 04 — Process rows (homepage promise-row pattern) */
.df-proc{border-top:1px solid var(--hairline)}
.df-proc-row{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:clamp(22px,3vw,34px) 6px;border-bottom:1px solid var(--hairline);align-items:baseline;transition:background .2s,padding-left .2s}
@media(min-width:760px){.df-proc-row{grid-template-columns:70px 260px 1fr;gap:24px}}
.df-proc-row:hover{background:var(--card);padding-left:14px}
.df-proc-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums}
.df-proc-title{font-family:var(--serif);font-size:clamp(1.25rem,2.2vw,1.6rem);font-weight:700;letter-spacing:-.012em;line-height:1.18}
.df-proc-desc{font-size:.92rem;color:var(--muted-2);line-height:1.68;max-width:56ch}
@media(max-width:759px){.df-proc-desc{grid-column:2}}

/* № 05 — Fit / not-fit (ruled editorial columns: petrol vs muted) */
.df-fit{display:grid;grid-template-columns:1fr;gap:0 48px;max-width:980px}
@media(min-width:760px){.df-fit{grid-template-columns:1fr 1fr}}
.df-fit-col{border-top:1px solid var(--hairline)}
@media(max-width:759px){.df-fit-no{margin-top:40px}}
.df-fit-head{font-family:var(--mono);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;padding:16px 6px;border-bottom:1px solid var(--hairline)}
.df-fit-yes .df-fit-head{color:var(--petrol)}
.df-fit-no .df-fit-head{color:var(--muted-2)}
.df-fit-line{display:flex;gap:14px;align-items:baseline;padding:15px 6px;border-bottom:1px solid var(--hairline);font-size:.92rem;line-height:1.6;transition:background .2s,padding-left .2s}
.df-fit-line:hover{background:var(--card);padding-left:14px}
.df-fit-num{font-family:var(--mono);font-size:.72rem;flex-shrink:0;font-variant-numeric:tabular-nums}
.df-fit-yes .df-fit-num{color:var(--petrol)}
.df-fit-yes .df-fit-line{color:var(--ink)}
.df-fit-no .df-fit-num{color:var(--muted-2)}
.df-fit-no .df-fit-line{color:var(--muted-2)}

/* CTA inner alignment (sp-cta pads 32px; match sp-wrap's content column) */
.df-cta-inner{max-width:1076px;margin:0 auto}
.df-cta-label{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(244,242,236,.55);margin-bottom:20px}
`;

/* ── Data ─────────────────────────────────────────────────── */
const INCLUDED = [
  { title: 'Strategy & Consulting', desc: 'We start by getting deeply inside your business — customers, bottlenecks, goals — before writing a single line of anything.' },
  { title: 'Website + Branding', desc: 'A custom site built for conversion, mobile-first, wired into your operations — not a static brochure.' },
  { title: 'Virtual Front Desk', desc: 'A 24/7 AI receptionist that answers every call, books appointments, triages emergencies, and runs reminders.' },
  { title: 'Lead Follow-Up Automation', desc: 'Every new lead gets a personalized response within seconds — SMS, email, voicemail. Nothing slips.' },
  { title: 'Custom Integrations', desc: 'Your CRM, calendar, billing, comms — all connected so your systems talk to each other automatically.' },
  { title: 'Custom AI Features', desc: 'Bespoke AI built for your business — quote bots, lead scorers, intake assistants, whatever moves the needle.' },
  { title: 'Custom Internal Apps', desc: 'Replace clunky spreadsheets and tab-shuffling with tools built around how your team actually works.' },
  { title: 'SEO & AI Search Optimization', desc: 'Get found by Google — and by AI assistants like ChatGPT, Gemini, and Perplexity, where attention is moving.' },
  { title: 'Reminders & Review Requests', desc: 'Automatic nudges that reduce no-shows and grow your Google rating — all without you touching it.' },
];

const PATHS = [
  {
    tag: 'Path A — Launching a new business',
    headline: 'Start with the whole operation, not just a website.',
    body: 'Most new founders cobble together a logo, a Squarespace site, a Calendly link, and start hustling. Six months in, they’re drowning in manual tasks and rebuilding everything. We skip that — you launch with strategy, brand, site, AI front desk, and automations from day one.',
    lines: [
      'Strategic positioning + brand identity from scratch',
      'Site + booking + AI receptionist live on launch day',
      'Lead capture + follow-up automated from your first lead',
      'No “we’ll fix the systems later” — built right the first time',
    ],
  },
  {
    tag: 'Path B — Already running',
    headline: 'Stop juggling vendors and tools.',
    body: 'You’ve been making it work with a patchwork — a website here, a CRM there, a missed-call texting tool that doesn’t talk to your calendar. We replace that with one connected system, take it off your plate, and tune it monthly.',
    lines: [
      'Audit your current stack — keep what works, replace what doesn’t',
      'Connect everything you already use into one operation',
      'Free up the owner from coordination and admin',
      'Ongoing monthly optimization based on what’s actually performing',
    ],
  },
];

const VENDOR_PROBLEMS = [
  'Manage 3–5 different vendors yourself',
  'Tools that don’t talk to each other',
  '“Wait, who handles that part?”',
  'Constant coordination overhead',
  'You’re still the operations bottleneck',
  'Vendors disappear after launch day',
];

const DFY_WINS = [
  'One team. One point of contact.',
  'Every system connected on day one',
  'Clear ownership of every component',
  'Zero coordination required from you',
  'Your time goes back to high-leverage work',
  'Ongoing optimization built into the deal',
];

const PROCESS = [
  { title: 'Discovery deep-dive', desc: 'A 90-minute working session where we map your business — customers, daily workflows, every manual task you wish would just happen on its own. We leave with a clear picture of what we’re building and why.' },
  { title: 'Custom blueprint', desc: 'Within a week, you get a written spec: every system we’ll build, how they’ll connect, who owns what. You sign off on the plan before we touch a single line of code.' },
  { title: 'Parallel build', desc: 'We build every component in parallel — website, AI receptionist, automations, integrations, custom apps — and coordinate so it all hits production at the same time, not piece by piece.' },
  { title: 'Coordinated launch', desc: 'Everything goes live together. One onboarding session for the whole system, plus a written runbook so you know exactly what to do if anything ever needs adjusting from your side.' },
  { title: 'Continuous optimization', desc: 'We don’t disappear after launch. Monthly review calls, real-time monitoring, and tweaks based on what’s actually working in your specific business. Your operation gets sharper every month.' },
];

const RIGHT_FIT = [
  'Launching a new service business and want to start right',
  'Or running one and tired of juggling multiple vendors',
  'Want a real operation, not a patchwork of tools',
  'Ready to invest in something built around you',
];

const NOT_FIT = [
  'Just want a one-off site or single feature',
  'Looking for the cheapest possible option',
  'Need a Fortune 500–scale custom platform',
  'Not ready for a 3–6 month engagement',
];

/* ── Page ─────────────────────────────────────────────────── */
export default function DoneForYouBusiness() {
  return (
    <>
      <Helmet>
        <title>Done-For-You Business | Nuvion Solutions</title>
        <meta name="description" content="The full Nuvion Solutions build — strategy, website, AI Virtual Front Desk, automations, integrations, custom apps, and ongoing optimization. One team, end-to-end, everything connected. Custom-scoped." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/done-for-you-business" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Service № 10 — Done-For-You Business</div>
        <h1 className="sp-h1">One team. <em>The whole business.</em></h1>
        <p className="sp-sub">
          Whether you’re launching a brand-new business or scaling one that’s
          already running — we build out and connect your entire operation.
          Strategy, website, AI receptionist, automations, integrations, custom
          apps. One team, end to end, everything talking to each other.
        </p>
      </header>

      <main className="sp-wrap">
        {/* № 01 — WHAT'S INCLUDED */}
        <section className="df-section">
          <div className="df-head">
            <div className="df-index">№ 01 — What’s included</div>
            <div>
              <h2 className="df-h2">Every system a modern service business runs on — <em>in one build</em>.</h2>
              <p className="df-sub">
                Built, connected, and tuned to your specific operation. Take
                everything, or take only the pieces you need — we tailor scope to fit.
              </p>
            </div>
          </div>
          <div className="df-inv" role="list">
            {INCLUDED.map((item, i) => (
              <div key={item.title} className="df-inv-row" role="listitem">
                <span className="df-inv-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="df-inv-name">{item.title}</span>
                <span className="df-inv-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* № 02 — TWO STARTING POINTS */}
        <section className="df-section">
          <div className="df-head">
            <div className="df-index">№ 02 — Two starting points</div>
            <div>
              <h2 className="df-h2">Launching from zero, or <em>already running</em>.</h2>
              <p className="df-sub">
                Done-For-You Business works from either starting point. The build
                process is the same — only the starting context changes.
              </p>
            </div>
          </div>
          <div className="df-paths">
            {PATHS.map(p => (
              <article key={p.tag} className="plate df-path">
                <div className="df-path-tag">{p.tag}</div>
                <h3 className="df-path-h">{p.headline}</h3>
                <p className="df-path-p">{p.body}</p>
                <ul className="df-path-list">
                  {p.lines.map(line => <li key={line}>{line}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* № 03 — THE ALTERNATIVE */}
        <section className="df-section">
          <div className="df-head">
            <div className="df-index">№ 03 — The alternative</div>
            <div>
              <h2 className="df-h2">Why not just hire <em>five freelancers</em>?</h2>
              <p className="df-sub">You can. People do. Here’s what that looks like next to what we do.</p>
            </div>
          </div>
          <div className="df-compare">
            <div className="df-col df-col-vendor">
              <div className="df-col-label">The vendor stack</div>
              <h3>Juggling five contractors</h3>
              {VENDOR_PROBLEMS.map((line, i) => (
                <div key={line} className="df-col-line">
                  <span className="df-mark">{String(i + 1).padStart(2, '0')}</span>{line}
                </div>
              ))}
            </div>
            <div className="df-col df-col-dfy">
              <div className="df-col-label">Done-for-you</div>
              <h3>One team, one operation</h3>
              {DFY_WINS.map((line, i) => (
                <div key={line} className="df-col-line">
                  <span className="df-mark">{String(i + 1).padStart(2, '0')}</span>{line}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* № 04 — THE PROCESS */}
        <section className="df-section">
          <div className="df-head">
            <div className="df-index">№ 04 — The process</div>
            <div>
              <h2 className="df-h2">Five phases, <em>one roof</em>.</h2>
              <p className="df-sub">No handoffs between agencies, no “that’s not our department.”</p>
            </div>
          </div>
          <div className="df-proc">
            {PROCESS.map((s, i) => (
              <div key={s.title} className="df-proc-row">
                <span className="df-proc-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="df-proc-title">{s.title}</h3>
                <p className="df-proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* № 05 — WHO IT'S FOR */}
        <section className="df-section df-last">
          <div className="df-head">
            <div className="df-index">№ 05 — Who it’s for</div>
            <div>
              <h2 className="df-h2">A serious engagement — <em>worth being upfront about</em>.</h2>
              <p className="df-sub">
                Done-For-You Business does its best work in specific situations.
                Here’s an honest read on both sides.
              </p>
            </div>
          </div>
          <div className="df-fit">
            <div className="df-fit-col df-fit-yes">
              <div className="df-fit-head">Right fit if you…</div>
              {RIGHT_FIT.map((line, i) => (
                <div key={line} className="df-fit-line">
                  <span className="df-fit-num">{String(i + 1).padStart(2, '0')}</span>{line}
                </div>
              ))}
            </div>
            <div className="df-fit-col df-fit-no">
              <div className="df-fit-head">Not the right fit if you…</div>
              {NOT_FIT.map((line, i) => (
                <div key={line} className="df-fit-line">
                  <span className="df-fit-num">{String(i + 1).padStart(2, '0')}</span>{line}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="sp-cta">
        <div className="df-cta-inner">
          <div className="df-cta-label">№ 06 — Start here</div>
          <h2>Let’s scope what your business actually needs.</h2>
          <p>
            Every engagement is custom — book a strategy call and we’ll walk
            through what your business looks like six months from now if we
            built it for you.
          </p>
          <Link to="/book" className="sp-cta-btn">Book a strategy call <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
