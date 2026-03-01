import { Link } from 'react-router-dom';
import { BASE_CSS } from './shared.js';

const CSS = BASE_CSS + `
.sp-eyebrow.ar{background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.25);color:#4F6EF7}
.ar-accent{color:#4F6EF7}
.sp-cta-btn.ar{background:#4F6EF7;color:#fff}

/* LAYOUT */
.ar-layout{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;padding:20px 0 72px}

/* PHONE */
.ar-phone{max-width:300px;margin:0 auto}
.ar-frame{background:#0A0E1A;border:2px solid rgba(79,110,247,0.35);border-radius:38px;padding:18px 16px 22px;box-shadow:0 0 80px rgba(79,110,247,0.12),0 40px 60px rgba(0,0,0,0.4)}
.ar-phone-bar{display:flex;align-items:center;justify-content:space-between;padding:4px 8px 14px;border-bottom:1px solid rgba(79,110,247,0.1);margin-bottom:14px}
.ar-phone-caller{font-size:.78rem;font-weight:600;color:var(--text)}
.ar-phone-tag{font-size:.64rem;background:rgba(79,110,247,0.2);color:#4F6EF7;padding:3px 9px;border-radius:100px;font-weight:700}
.ar-messages{display:flex;flex-direction:column;gap:9px;min-height:280px}
.ar-msg{max-width:82%;padding:9px 13px;font-size:.79rem;line-height:1.5;border-radius:14px}
.ar-msg-in{background:var(--surface2);border-radius:14px 14px 14px 3px;color:var(--text);align-self:flex-start}
.ar-msg-ai{background:rgba(79,110,247,0.15);border:1px solid rgba(79,110,247,0.22);border-radius:14px 14px 3px 14px;color:var(--text);align-self:flex-end}
.ar-msg-sys{font-size:.68rem;text-align:center;color:var(--dim);padding:3px 0}
.ar-badges{display:flex;gap:6px;flex-wrap:wrap;margin-top:16px;padding-top:14px;border-top:1px solid rgba(79,110,247,0.1)}
.ar-badge{font-size:.67rem;padding:4px 9px;border-radius:6px;font-weight:700}
.ar-b-g{background:rgba(52,211,153,0.1);color:#34D399;border:1px solid rgba(52,211,153,0.2)}
.ar-b-b{background:rgba(79,110,247,0.1);color:#4F6EF7;border:1px solid rgba(79,110,247,0.2)}
.ar-b-c{background:rgba(0,220,255,0.1);color:#00DCFF;border:1px solid rgba(0,220,255,0.2)}

/* CAPABILITIES */
.ar-caps-title{font-size:1.15rem;font-weight:700;margin-bottom:28px;letter-spacing:-.01em}
.ar-cap{display:flex;align-items:flex-start;gap:14px;margin-bottom:24px}
.ar-cap-icon{width:38px;height:38px;background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}
.ar-cap-title{font-size:.88rem;font-weight:700;color:var(--text);margin-bottom:4px}
.ar-cap-desc{font-size:.79rem;color:var(--muted);line-height:1.55}

@media(max-width:700px){
  .ar-layout{grid-template-columns:1fr;gap:36px}
}
`;

const CAPS = [
  { icon: '🕐', title: 'Always On — 24/7/365', desc: 'Never misses a call, never goes on break. Every inquiry answered instantly, day or night.' },
  { icon: '🎯', title: 'Qualifies Leads Automatically', desc: 'Asks the right questions, scores prospects, and routes hot leads directly to your calendar.' },
  { icon: '📅', title: 'Books Appointments Instantly', desc: 'Integrates with your scheduling tool to confirm bookings in real-time — no back-and-forth.' },
  { icon: '🔗', title: 'Syncs to Your CRM', desc: 'Every conversation, contact, and booking automatically saved to your existing systems.' },
  { icon: '📲', title: 'Instant Owner Alerts', desc: 'You get notified the moment a high-value lead is captured or a booking is confirmed.' },
];

export default function AIReceptionist() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><span className="sp-logo-mark">N</span>Nuvion</Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow ar">🤖 AI Smart Receptionist</div>
        <h1 className="sp-h1">Every lead answered.<br /><em className="ar-accent">Every time.</em></h1>
        <p className="sp-sub">Your AI receptionist handles calls, qualifies prospects, and books appointments 24/7 — without you lifting a finger. No voicemail. No missed opportunities.</p>
      </div>

      <div className="sp-wrap">
        <div className="ar-layout">
          <div className="ar-phone">
            <div className="ar-frame">
              <div className="ar-phone-bar">
                <span className="ar-phone-caller">Incoming Lead</span>
                <span className="ar-phone-tag">AI Receptionist</span>
              </div>
              <div className="ar-messages">
                <div className="ar-msg ar-msg-in">Hi, I saw your ad — how much do you charge for a full detail?</div>
                <div className="ar-msg ar-msg-ai">Hey! Great question. Our full detail packages start at $199. Are you looking for interior, exterior, or both?</div>
                <div className="ar-msg ar-msg-in">Both please. How soon can you get me in?</div>
                <div className="ar-msg ar-msg-ai">We have openings this Thursday at 10am or Friday at 2pm — which works better for you?</div>
                <div className="ar-msg ar-msg-in">Thursday at 10 is perfect.</div>
                <div className="ar-msg ar-msg-ai">You're all set! I've booked Thursday at 10am. You'll get a confirmation text in just a moment.</div>
                <div className="ar-msg ar-msg-sys">— Appointment confirmed · Lead saved · Owner notified —</div>
              </div>
              <div className="ar-badges">
                <span className="ar-badge ar-b-g">✓ Booked</span>
                <span className="ar-badge ar-b-b">CRM Saved</span>
                <span className="ar-badge ar-b-c">Owner Alerted</span>
              </div>
            </div>
          </div>

          <div>
            <div className="ar-caps-title">What It Handles For You</div>
            {CAPS.map(c => (
              <div key={c.title} className="ar-cap">
                <div className="ar-cap-icon">{c.icon}</div>
                <div>
                  <div className="ar-cap-title">{c.title}</div>
                  <div className="ar-cap-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Stop missing leads after hours.</h2>
        <p>Book a free call and see a live demo of your AI receptionist in action.</p>
        <a href="/#contact" className="sp-cta-btn ar">Book a Free Strategy Call →</a>
      </div>
    </>
  );
}
