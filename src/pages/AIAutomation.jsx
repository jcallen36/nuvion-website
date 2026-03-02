import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
/* PAGE ACCENT */
.aa-accent{color:#00DCFF}
.sp-eyebrow.aa{background:rgba(0,220,255,0.08);border:1px solid rgba(0,220,255,0.2);color:#00DCFF}
.sp-cta-btn.aa{background:#00DCFF;color:#07090F}

/* BEFORE / AFTER */
.aa-compare{padding:20px 0 64px}
.aa-grid{display:grid;grid-template-columns:1fr 80px 1fr;gap:0;align-items:stretch}
.aa-panel{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:28px 24px}
.aa-panel-label{font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:8px}
.aa-label-before{color:#6B7280}
.aa-label-after{color:#00DCFF}
.aa-node{display:flex;align-items:center;gap:10px;padding:11px 14px;border-radius:10px;font-size:.83rem;font-weight:600;margin-bottom:9px}
.aa-node-b{background:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.18);color:#9CA3AF}
.aa-node-a{background:rgba(0,220,255,0.07);border:1px solid rgba(0,220,255,0.18);color:#E0F9FF}
.aa-node-icon{font-size:1rem;flex-shrink:0}
.aa-connector{text-align:center;color:var(--dim);font-size:.65rem;padding:2px 0}
.aa-middle{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:0 8px}
.aa-divider-pill{background:rgba(0,220,255,0.1);border:1px solid rgba(0,220,255,0.25);border-radius:100px;padding:6px 14px;font-size:.7rem;font-weight:700;color:#00DCFF;letter-spacing:.06em;text-transform:uppercase}

/* PHASES */
.aa-phases{padding:0 0 80px}
.aa-phase-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.aa-phase{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:30px 26px;position:relative;overflow:hidden}
.aa-phase::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#00DCFF,transparent)}
.aa-phase-num{font-size:3rem;font-weight:900;color:rgba(0,220,255,0.4);line-height:1;margin-bottom:14px;letter-spacing:-.04em}
.aa-phase-title{font-size:.95rem;font-weight:700;margin-bottom:8px;color:var(--text)}
.aa-phase-desc{font-size:.82rem;color:var(--muted);line-height:1.65}

@media(max-width:700px){
  .aa-grid{grid-template-columns:1fr;gap:16px}
  .aa-middle{flex-direction:row;padding:8px 0}
  .aa-phase-grid{grid-template-columns:1fr}
}
`;

const BEFORE = [
  ['⚠️', 'Phone tag with every lead'],
  ['📋', 'Manual data entry daily'],
  ['📊', 'Spreadsheet chaos'],
  ['❌', 'Follow-ups fall through cracks'],
  ['😓', 'Staff doing repetitive busywork'],
  ['🔇', 'After-hours = missed revenue'],
];

const AFTER = [
  ['⚡', 'Every lead captured instantly'],
  ['🔄', 'Data syncs across all tools'],
  ['📈', 'Clean dashboards, always'],
  ['✅', 'Every lead followed up automatically'],
  ['🤖', 'Staff focused on high-value work'],
  ['🌙', '24/7 coverage with zero staff'],
];

export default function AIAutomation() {
  return (
    <>
      <Helmet>
        <title>AI & Automation Consulting | Nuvion Solutions</title>
        <meta name="description" content="Custom AI automation consulting for small businesses. We map your workflows, eliminate bottlenecks, and build systems that run automatically — saving you 10+ hours per week." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/ai-automation" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow aa">⚡ AI & Automation Consulting</div>
        <h1 className="sp-h1">Your business on<br /><em className="aa-accent">autopilot</em></h1>
        <p className="sp-sub">We audit every manual task in your operation, design a custom automation blueprint, and deploy it end-to-end — so your team stops grinding and starts growing.</p>
      </div>

      <div className="sp-wrap">
        <div className="aa-compare">
          <div className="sp-section-title">The Transformation</div>
          <div className="aa-grid">
            <div className="aa-panel">
              <div className="aa-panel-label aa-label-before">⚠ Before Nuvion</div>
              {BEFORE.map(([icon, label]) => (
                <div key={label}>
                  <div className="aa-node aa-node-b"><span className="aa-node-icon">{icon}</span>{label}</div>
                  <div className="aa-connector">·</div>
                </div>
              ))}
            </div>

            <div className="aa-middle">
              <div className="aa-divider-pill">vs</div>
            </div>

            <div className="aa-panel">
              <div className="aa-panel-label aa-label-after">✓ After Nuvion</div>
              {AFTER.map(([icon, label]) => (
                <div key={label}>
                  <div className="aa-node aa-node-a"><span className="aa-node-icon">{icon}</span>{label}</div>
                  <div className="aa-connector">·</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="aa-phases">
          <div className="sp-section-title">How It Works</div>
          <div className="aa-phase-grid">
            <div className="aa-phase">
              <div className="aa-phase-num">01</div>
              <div className="aa-phase-title">Workflow Audit</div>
              <div className="aa-phase-desc">We spend time inside your operation — mapping every manual task, every handoff, every bottleneck. Nothing gets missed.</div>
            </div>
            <div className="aa-phase">
              <div className="aa-phase-num">02</div>
              <div className="aa-phase-title">Custom Blueprint</div>
              <div className="aa-phase-desc">We design an automation architecture built specifically for your business. No generic templates. No cookie-cutter solutions.</div>
            </div>
            <div className="aa-phase">
              <div className="aa-phase-num">03</div>
              <div className="aa-phase-title">Full Deployment</div>
              <div className="aa-phase-desc">We build it, test it, and go live alongside you. Ongoing support included so your systems grow as your business does.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Ready to eliminate the busywork?</h2>
        <p>Book a free strategy call and we'll map out your automation potential in 30 minutes.</p>
        <Link to="/book" className="sp-cta-btn aa">Book a Free Strategy Call →</Link>
      </div>
          <Footer />
    </>
  );
}
