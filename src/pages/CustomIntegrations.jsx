import { Link } from 'react-router-dom';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';

const CSS = BASE_CSS + `
.sp-eyebrow.ci{background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.25);color:#A78BFA}
.ci-accent{color:#A78BFA}
.sp-cta-btn.ci{background:#A78BFA;color:#07090F}

/* HUB */
.ci-diagram{padding:20px 0 64px;display:flex;flex-direction:column;align-items:center}
.ci-hub-wrap{position:relative;width:520px;height:520px;max-width:100%}
.ci-hub{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:110px;height:110px;background:linear-gradient(135deg,rgba(167,139,250,0.2),rgba(79,110,247,0.2));border:2px solid rgba(167,139,250,0.4);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;z-index:2;box-shadow:0 0 40px rgba(167,139,250,0.15)}
.ci-hub-label{font-size:.72rem;font-weight:800;color:#A78BFA;letter-spacing:.04em}
.ci-hub-sub{font-size:.58rem;color:var(--muted);margin-top:2px}

/* SVG lines */
.ci-svg{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}

/* NODES */
.ci-node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:6px;z-index:2}
.ci-node-icon{width:58px;height:58px;background:var(--surface);border:1px solid rgba(167,139,250,0.25);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,0.3)}
.ci-node:hover .ci-node-icon{border-color:rgba(167,139,250,0.5);box-shadow:0 0 20px rgba(167,139,250,0.15),0 4px 20px rgba(0,0,0,0.3)}
.ci-node-name{font-size:.7rem;font-weight:600;color:var(--muted);white-space:nowrap}

/* INTEGRATION TYPES */
.ci-types{padding:0 0 80px}
.ci-type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.ci-type{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:26px 22px}
.ci-type-icon{font-size:1.6rem;margin-bottom:14px}
.ci-type-title{font-size:.92rem;font-weight:700;margin-bottom:8px;color:var(--text)}
.ci-type-desc{font-size:.8rem;color:var(--muted);line-height:1.6}

@media(max-width:580px){
  .ci-hub-wrap{width:320px;height:320px}
  .ci-node-icon{width:42px;height:42px;font-size:1rem;border-radius:10px}
  .ci-node-name{font-size:.6rem}
  .ci-hub{width:76px;height:76px}
  .ci-hub-label{font-size:.6rem}
  .ci-type-grid{grid-template-columns:1fr}
}
`;

// Nodes placed around a circle: top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
const NODES = [
  { icon: '💼', name: 'CRM',        angle: 0   },
  { icon: '📅', name: 'Calendar',   angle: 45  },
  { icon: '💳', name: 'Payments',   angle: 90  },
  { icon: '📧', name: 'Email',      angle: 135 },
  { icon: '📊', name: 'Analytics',  angle: 180 },
  { icon: '💬', name: 'Messaging',  angle: 225 },
  { icon: '🛒', name: 'eCommerce',  angle: 270 },
  { icon: '📋', name: 'Forms',      angle: 315 },
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

export default function CustomIntegrations() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow ci">🔗 Custom Integrations</div>
        <h1 className="sp-h1">All your tools.<br /><em className="ci-accent">One connected system.</em></h1>
        <p className="sp-sub">We connect your CRM, scheduling software, billing tools, and communication platforms into a single automated ecosystem — no more copy-pasting between apps.</p>
      </div>

      <div className="sp-wrap">
        <div className="ci-diagram">
          <div className="sp-section-title">Your Connected Ecosystem</div>
          <div className="ci-hub-wrap">
            {/* SVG connection lines */}
            <svg className="ci-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {SVG_LINES.map((l, i) => (
                <line
                  key={i}
                  x1="50" y1="50"
                  x2={l.x2} y2={l.y2}
                  stroke="rgba(167,139,250,0.2)"
                  strokeWidth="0.4"
                  strokeDasharray="1.5 1.5"
                />
              ))}
            </svg>

            {/* Center hub */}
            <div className="ci-hub">
              <div className="ci-hub-label">NUVION</div>
              <div className="ci-hub-sub">Central Hub</div>
            </div>

            {/* Tool nodes */}
            {NODES.map(n => (
              <div key={n.name} className="ci-node" style={nodePos(n.angle)}>
                <div className="ci-node-icon">{n.icon}</div>
                <div className="ci-node-name">{n.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ci-types">
          <div className="sp-section-title">What We Build</div>
          <div className="ci-type-grid">
            <div className="ci-type">
              <div className="ci-type-icon">⚙️</div>
              <div className="ci-type-title">Two-Way Data Sync</div>
              <div className="ci-type-desc">Your tools stay in sync automatically. A booking in Calendly updates your CRM. A payment in Stripe triggers a workflow. No manual entry ever.</div>
            </div>
            <div className="ci-type">
              <div className="ci-type-icon">🔔</div>
              <div className="ci-type-title">Trigger-Based Automations</div>
              <div className="ci-type-desc">When X happens in one app, Y automatically happens in another. New lead → send SMS → log to CRM → notify team. Instantly.</div>
            </div>
            <div className="ci-type">
              <div className="ci-type-icon">🧩</div>
              <div className="ci-type-title">Custom API Connections</div>
              <div className="ci-type-desc">If a pre-built integration doesn't exist, we build it. Any platform with an API can be connected to your ecosystem.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Ready to unify your tech stack?</h2>
        <p>Book a free call and we'll map out exactly how your tools can work together.</p>
        <Link to="/book" className="sp-cta-btn ci">Book a Free <span className="grad">Strategy Call</span> →</Link>
      </div>
    </>
  );
}
