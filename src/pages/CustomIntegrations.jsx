import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Custom Integrations — service page.
   Ink on porcelain paper; the hub-and-spoke schematic is the
   centerpiece, framed like a figure in a technical print.
───────────────────────────────────────────────────────────── */

const CSS = `
/* Section scaffold (homepage sec-head pattern) */
.ci-sec{padding:calc(var(--pad-section)*.72) 0 0}
.ci-sec.ci-last{padding-bottom:var(--pad-section)}
.ci-head{margin-bottom:clamp(34px,4.5vw,54px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.ci-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.ci-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.ci-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.ci-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.8rem,3.2vw,2.6rem);line-height:1.08;letter-spacing:-.018em;max-width:22ch}
.ci-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.ci-sub{font-size:.98rem;color:var(--muted-2);line-height:1.7;max-width:58ch;margin-top:12px}

/* FIGURE PLATE — the framed schematic */
.ci-plate{padding:clamp(22px,3.4vw,40px)}
.ci-fig-cap{display:flex;justify-content:space-between;align-items:baseline;gap:14px;flex-wrap:wrap;padding-bottom:16px;border-bottom:1px solid var(--hairline);margin-bottom:clamp(22px,3.4vw,38px)}
.ci-fig-note{margin-top:clamp(22px,3.4vw,38px);padding-top:16px;border-top:1px solid var(--hairline);font-family:var(--mono);font-size:.72rem;letter-spacing:.08em;color:var(--muted-2);line-height:1.75;max-width:62ch}

/* HUB & SPOKES */
.ci-hub-wrap{position:relative;width:min(520px,100%);aspect-ratio:1;margin:0 auto}
.ci-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.ci-orbit{fill:none;stroke:var(--hairline);stroke-width:.25;opacity:.7}
.ci-spoke{stroke:var(--hairline);stroke-width:.35;stroke-dasharray:1.4 1.6}
.ci-term{fill:var(--petrol);opacity:.45}
.ci-hub{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:clamp(86px,22%,114px);aspect-ratio:1;background:var(--petrol);border:1px solid var(--petrol-deep);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;z-index:2;box-shadow:var(--shadow-2)}
.ci-hub-label{font-family:var(--mono);font-size:.64rem;letter-spacing:.22em;text-transform:uppercase;color:var(--paper)}
.ci-hub-sub{font-family:var(--mono);font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(244,242,236,.66);margin-top:4px}
.ci-node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:8px;z-index:2}
.ci-node-box{width:54px;height:54px;background:var(--card);border:1px solid var(--hairline);border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:.78rem;color:var(--ink);font-variant-numeric:tabular-nums;box-shadow:var(--shadow-1);transition:border-color .25s var(--ease-out),color .25s var(--ease-out),transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.ci-node:hover .ci-node-box{border-color:var(--petrol);color:var(--petrol);transform:translateY(-3px);box-shadow:var(--shadow-2)}
.ci-node-name{font-family:var(--mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2);white-space:nowrap}

/* WHAT WE BUILD — ruled index rows */
.ci-rows{border-top:1px solid var(--hairline)}
.ci-row{display:grid;grid-template-columns:44px 1fr;gap:12px 16px;padding:clamp(24px,3.2vw,36px) 6px;border-bottom:1px solid var(--hairline);align-items:baseline;transition:background .2s,padding-left .2s}
@media(min-width:760px){.ci-row{grid-template-columns:64px 300px 1fr;gap:24px}}
.ci-row:hover{background:var(--card);padding-left:14px}
.ci-row-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums}
.ci-row-title{font-family:var(--serif);font-weight:700;font-size:clamp(1.25rem,2.2vw,1.6rem);letter-spacing:-.012em;line-height:1.18}
.ci-row-body{font-size:.94rem;color:var(--muted-2);line-height:1.7;max-width:56ch}
.ci-flow{margin-top:12px;font-family:var(--mono);font-size:.72rem;letter-spacing:.06em;color:var(--ink);line-height:1.9}
.ci-flow b{color:var(--petrol);font-weight:400;padding:0 6px}
@media(max-width:759px){.ci-row-body{grid-column:2}}

@media(max-width:560px){
  .ci-node-box{width:42px;height:42px;font-size:.66rem;border-radius:7px}
  .ci-node-name{font-size:.54rem;letter-spacing:.1em}
  .ci-hub-label{font-size:.56rem;letter-spacing:.18em}
  .ci-hub-sub{display:none}
}
`;

/* Nodes placed around a circle — computed geometry (trig), styled as
   a schematic: mono index chips on a hairline orbit, petrol terminals. */
const NODES = [
  { name: 'CRM',        angle: 0   },
  { name: 'Calendar',   angle: 45  },
  { name: 'Payments',   angle: 90  },
  { name: 'Email',      angle: 135 },
  { name: 'Analytics',  angle: 180 },
  { name: 'Messaging',  angle: 225 },
  { name: 'eCommerce',  angle: 270 },
  { name: 'Forms',      angle: 315 },
];

const R_PERCENT = 42; // % from center

function nodePos(angle) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    left: `${50 + R_PERCENT * Math.cos(rad)}%`,
    top:  `${50 + R_PERCENT * Math.sin(rad)}%`,
  };
}

const SVG_LINES = NODES.map(n => {
  const rad = (n.angle - 90) * (Math.PI / 180);
  const x2 = 50 + R_PERCENT * Math.cos(rad);
  const y2 = 50 + R_PERCENT * Math.sin(rad);
  return { x2, y2 };
});

const BUILDS = [
  {
    title: 'Two-way data sync',
    body: 'Your tools stay in sync automatically. A booking in Calendly updates your CRM. A payment in Stripe triggers a workflow. No manual entry, ever.',
  },
  {
    title: 'Trigger-based automations',
    body: 'When X happens in one app, Y automatically happens in another — instantly, with nothing for anyone to remember.',
    flow: ['New lead', 'send SMS', 'log to CRM', 'notify team'],
  },
  {
    title: 'Custom API connections',
    body: 'If a pre-built integration doesn’t exist, we build it. Any platform with an API can be connected to your ecosystem.',
  },
];

export default function CustomIntegrations() {
  return (
    <>
      <Helmet>
        <title>Custom Business Integrations | Nuvion Solutions</title>
        <meta name="description" content="Connect your CRM, calendar, billing, and communication tools into one seamless automated ecosystem. No switching platforms — we integrate what you already use." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/custom-integrations" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Custom Integrations</div>
        <h1 className="sp-h1">All your tools.<br /><em>One connected system.</em></h1>
        <p className="sp-sub">We connect your CRM, scheduling software, billing tools, and communication platforms into a single automated ecosystem — no more copy-pasting between apps.</p>
      </header>

      <div className="sp-wrap">
        <section className="ci-sec">
          <div className="ci-head">
            <div className="ci-index">№ 01 — The connected system</div>
            <div>
              <h2 className="ci-h2">One system that <em>talks to itself</em>.</h2>
              <p className="ci-sub">
                Eight common connection points, one hub in the middle. Bookings,
                payments, messages, and records move between your tools on their
                own — you stop being the integration.
              </p>
            </div>
          </div>

          <figure className="ci-plate plate">
            <figcaption className="ci-fig-cap">
              <span className="label"><b>Fig. 01</b> — Your connected ecosystem</span>
              <span className="label">8 endpoints · 1 hub</span>
            </figcaption>

            <div className="ci-hub-wrap">
              {/* Spokes + orbit — same computed geometry, hairline ink */}
              <svg className="ci-svg" viewBox="0 0 100 100" aria-hidden="true">
                <circle className="ci-orbit" cx="50" cy="50" r={R_PERCENT} />
                {SVG_LINES.map((l, i) => (
                  <line key={i} className="ci-spoke" x1="50" y1="50" x2={l.x2} y2={l.y2} />
                ))}
                {SVG_LINES.map((l, i) => (
                  <circle key={i} className="ci-term" cx={l.x2} cy={l.y2} r="0.9" />
                ))}
              </svg>

              {/* Center hub */}
              <div className="ci-hub">
                <div className="ci-hub-label">Nuvion</div>
                <div className="ci-hub-sub">Central hub</div>
              </div>

              {/* Tool nodes — mono index chips */}
              {NODES.map((n, i) => (
                <div key={n.name} className="ci-node" style={nodePos(n.angle)}>
                  <div className="ci-node-box tnum">{String(i + 1).padStart(2, '0')}</div>
                  <div className="ci-node-name">{n.name}</div>
                </div>
              ))}
            </div>

            <div className="ci-fig-note">
              Eight of the most common connection points shown. Any tool with an
              API can take a seat on the diagram — including the ones you already pay for.
            </div>
          </figure>
        </section>

        <section className="ci-sec ci-last">
          <div className="ci-head">
            <div className="ci-index">№ 02 — What we build</div>
            <div>
              <h2 className="ci-h2">Three kinds of <em>wiring</em>.</h2>
            </div>
          </div>

          <div className="ci-rows">
            {BUILDS.map((b, i) => (
              <div key={b.title} className="ci-row">
                <span className="ci-row-num tnum">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="ci-row-title">{b.title}</h3>
                <div>
                  <p className="ci-row-body">{b.body}</p>
                  {b.flow && (
                    <p className="ci-flow" aria-label={b.flow.join(', then ')}>
                      {b.flow.map((step, j) => (
                        <span key={step}>
                          {step}
                          {j < b.flow.length - 1 && <b aria-hidden="true">→</b>}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="sp-cta">
        <h2>Ready to unify your tech stack?</h2>
        <p>Book a free call and we’ll map out exactly how your tools can work together.</p>
        <Link to="/book" className="sp-cta-btn">Book a free strategy call →</Link>
      </section>

      <Footer />
    </>
  );
}
