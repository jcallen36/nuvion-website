import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   AI & Automation — Flagship № 02.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* SECTION SCAFFOLD */
.aa-section{padding:var(--pad-section) 0}
.aa-head{margin-bottom:clamp(36px,5vw,56px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.aa-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.aa-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.aa-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.aa-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.9rem,3.4vw,2.8rem);line-height:1.06;letter-spacing:-.02em;max-width:22ch}
.aa-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.aa-sub{font-size:1rem;color:var(--muted-2);line-height:1.7;max-width:52ch;margin-top:12px}

/* LEDGER — before / after */
.aa-ledger{border-top:1px solid var(--hairline)}
.aa-ledger-head{display:grid;grid-template-columns:56px 1fr 44px 1fr;gap:18px;padding:12px 6px;border-bottom:1px solid var(--hairline)}
.aa-col-k{font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2)}
.aa-col-k.after{color:var(--petrol)}
.aa-row{display:grid;grid-template-columns:56px 1fr 44px 1fr;gap:18px;align-items:baseline;padding:19px 6px;border-bottom:1px solid var(--hairline);transition:background .2s,padding-left .2s}
.aa-row:hover{background:var(--card);padding-left:14px}
.aa-num{font-family:var(--mono);font-size:.72rem;color:var(--muted-2);font-variant-numeric:tabular-nums}
.aa-before{font-size:.93rem;color:var(--muted-2);line-height:1.6;max-width:40ch}
.aa-after{font-size:.95rem;font-weight:600;color:var(--ink);line-height:1.6;max-width:40ch}
.aa-arrow{color:var(--petrol);display:flex;align-items:center;justify-content:center;align-self:center}
.aa-arrow svg{transition:transform .2s}
.aa-row:hover .aa-arrow svg{transform:translateX(4px)}
.aa-tag{display:none}
@media(max-width:719px){
  .aa-ledger-head{display:none}
  .aa-row{grid-template-columns:40px 1fr;row-gap:10px}
  .aa-arrow{display:none}
  .aa-before,.aa-after{grid-column:2}
  .aa-tag{display:block;font-family:var(--mono);font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2);margin-bottom:3px}
  .aa-tag.is-after{color:var(--petrol)}
}

/* PROCESS — bone band */
.aa-band{background:var(--bone);border-top:1px solid var(--hairline);border-bottom:1px solid var(--hairline);padding:var(--pad-section) 0}
.aa-steps{display:grid;grid-template-columns:1fr;border-left:1px solid var(--hairline)}
@media(min-width:880px){.aa-steps{grid-template-columns:repeat(3,1fr);border-left:none;border-top:1px solid var(--hairline)}}
.aa-step{padding:30px 26px 8px}
@media(min-width:880px){.aa-step{padding:42px 30px 6px 28px;border-left:1px solid var(--hairline)}}
.aa-step-num{font-family:var(--serif);font-weight:700;font-size:clamp(3.6rem,6vw,5.6rem);line-height:.9;color:transparent;-webkit-text-stroke:1.5px var(--muted-2);letter-spacing:-.03em;margin-bottom:16px;opacity:.7;transition:color .3s,opacity .3s,transform .3s var(--ease-out)}
.aa-step:hover .aa-step-num{color:var(--petrol);-webkit-text-stroke:1.5px var(--petrol);opacity:1;transform:translateY(-2px)}
.aa-step-title{font-family:var(--serif);font-size:1.28rem;font-weight:700;margin-bottom:10px;letter-spacing:-.01em}
.aa-step-desc{font-size:.93rem;color:var(--muted-2);line-height:1.68;max-width:36ch}

/* SCOPE — related systems index */
.aa-scope{border-top:1px solid var(--hairline)}
.aa-scope-row{display:grid;grid-template-columns:44px 1fr auto;align-items:baseline;gap:16px;padding:20px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:720px){.aa-scope-row{grid-template-columns:56px 250px 1fr auto;align-items:center}}
.aa-scope-row:hover{background:var(--card);padding-left:14px}
.aa-scope-name{font-family:var(--serif);font-size:1.12rem;font-weight:700;letter-spacing:-.01em}
.aa-scope-desc{display:none;font-size:.88rem;color:var(--muted-2);line-height:1.55;max-width:58ch}
@media(min-width:720px){.aa-scope-desc{display:block}}
.aa-scope-go{font-size:1rem;color:var(--petrol);transition:transform .2s}
.aa-scope-row:hover .aa-scope-go{transform:translateX(4px)}

/* CTA inner alignment */
.aa-cta-inner{max-width:1076px;margin:0 auto}
.aa-cta-label{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(244,242,236,.5);margin-bottom:18px}
`;

const LEDGER = [
  { before: 'Phone tag with every new lead', after: 'Every lead captured and answered instantly' },
  { before: 'Manual data entry, every single day', after: 'Data syncs itself across all your tools' },
  { before: 'Spreadsheet chaos', after: 'Clean dashboards, always current' },
  { before: 'Follow-ups fall through the cracks', after: 'Every lead followed up automatically' },
  { before: 'Staff buried in repetitive busywork', after: 'Staff focused on high-value work' },
  { before: 'After-hours calls become missed revenue', after: 'Covered 24/7 without adding staff' },
];

const PHASES = [
  { n: '01', title: 'Workflow audit', desc: 'We spend time inside your operation — mapping every manual task, every handoff, every bottleneck. Nothing gets missed.' },
  { n: '02', title: 'Custom blueprint', desc: 'We design an automation architecture built specifically for your business. No generic templates. No cookie-cutter solutions.' },
  { n: '03', title: 'Full deployment', desc: 'We build it, test it, and go live alongside you. Ongoing support included, so your systems grow as your business does.' },
];

const SCOPE = [
  { slug: 'lead-followup', name: 'Lead Follow-Up', desc: 'Every new lead gets a personal text or email within seconds — and smart follow-up until they book.' },
  { slug: 'ai-receptionist', name: 'Virtual Front Desk', desc: 'A 24/7 AI phone agent trained on your business — answers, books, and triages while you work.' },
  { slug: 'reminders', name: 'Reminders & Confirmations', desc: 'Automatic sequences that confirm, reschedule, and cut down on no-shows.' },
  { slug: 'custom-integrations', name: 'Custom Integrations', desc: 'Your CRM, calendar, billing, and phones — connected into one system that talks to itself.' },
];

const Arrow = () => (
  <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
    <path d="M1 5h17M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AIAutomation() {
  return (
    <>
      <Helmet>
        <title>AI & Automation Consulting | Nuvion Solutions</title>
        <meta name="description" content="Custom AI automation consulting for small businesses. We map your workflows, eliminate bottlenecks, and build systems that run on their own — automation that removes the manual work." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/ai-automation" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Flagship · 02 — AI & Automation Consulting</div>
        <h1 className="sp-h1">Your business, <em>on autopilot</em>.</h1>
        <p className="sp-sub">
          We audit every manual task in your operation, design a custom automation
          blueprint, and deploy it end-to-end — so your team stops grinding and
          starts growing.
        </p>
      </header>

      <div className="sp-wrap">
        <section className="aa-section">
          <div className="aa-head">
            <div className="aa-index">№ 01 — The transformation</div>
            <div>
              <h2 className="aa-h2">From by-hand to <em>hands-off</em>.</h2>
              <p className="aa-sub">
                The left column is how most small operations run today. The right
                column is the same work after the system takes it over.
              </p>
            </div>
          </div>
          <div className="aa-ledger">
            <div className="aa-ledger-head">
              <span />
              <span className="aa-col-k">Before Nuvion</span>
              <span />
              <span className="aa-col-k after">After Nuvion</span>
            </div>
            {LEDGER.map((row, i) => (
              <div key={row.before} className="aa-row">
                <span className="aa-num tnum">{String(i + 1).padStart(2, '0')}</span>
                <p className="aa-before"><span className="aa-tag">Before Nuvion</span>{row.before}</p>
                <span className="aa-arrow"><Arrow /></span>
                <p className="aa-after"><span className="aa-tag is-after">After Nuvion</span>{row.after}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="aa-band">
        <div className="sp-wrap">
          <div className="aa-head">
            <div className="aa-index">№ 02 — The process</div>
            <div>
              <h2 className="aa-h2">Audit, blueprint, <em>deploy</em>.</h2>
              <p className="aa-sub">
                The whole engagement in three phases — you see what we’re building,
                and why, at every step.
              </p>
            </div>
          </div>
          <div className="aa-steps">
            {PHASES.map(p => (
              <div key={p.n} className="aa-step">
                <div className="aa-step-num tnum" aria-hidden="true">{p.n}</div>
                <h3 className="aa-step-title">{p.title}</h3>
                <p className="aa-step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sp-wrap">
        <section className="aa-section">
          <div className="aa-head">
            <div className="aa-index">№ 03 — Where it shows up</div>
            <div>
              <h2 className="aa-h2">The systems it usually <em>becomes</em>.</h2>
              <p className="aa-sub">
                Consulting is the map. These are the builds it most often leads to —
                each one designed around your workflows, and each one a Nuvion
                service in its own right.
              </p>
            </div>
          </div>
          <div className="aa-scope" role="list">
            {SCOPE.map((s, i) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="aa-scope-row" role="listitem">
                <span className="aa-num tnum">{String(i + 1).padStart(2, '0')}</span>
                <span className="aa-scope-name">{s.name}</span>
                <span className="aa-scope-desc">{s.desc}</span>
                <span className="aa-scope-go" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="sp-cta">
        <div className="aa-cta-inner">
          <div className="aa-cta-label">№ 04 — Start here</div>
          <h2>Ready to eliminate the busywork?</h2>
          <p>Book a free strategy call and we’ll map out your automation potential in 30 minutes.</p>
          <Link to="/book" className="sp-cta-btn">Book a free strategy call <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
