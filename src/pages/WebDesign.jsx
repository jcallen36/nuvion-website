import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
/* PAGE ACCENT */
.wd-accent{color:#F59E0B}
.sp-eyebrow.wd{background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.22);color:#F59E0B}
.sp-cta-btn.wd{background:#F59E0B;color:#07090F}

/* PILLARS */
.wd-pillars{padding:20px 0 72px}
.wd-pillar-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
.wd-pillar{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:28px 24px;position:relative;overflow:hidden;transition:border-color .3s,transform .3s}
.wd-pillar:hover{border-color:rgba(245,158,11,0.3);transform:translateY(-3px)}
.wd-pillar::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#F59E0B,transparent)}
.wd-pillar-icon{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;background:rgba(245,158,11,0.12);margin-bottom:16px}
.wd-pillar-title{font-size:1.05rem;font-weight:700;margin-bottom:10px;color:var(--text)}
.wd-pillar-desc{font-size:.85rem;color:var(--muted);line-height:1.65}

/* WHAT YOU GET */
.wd-get{padding:0 0 72px}
.wd-get-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.wd-get-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 20px;text-align:center;transition:border-color .3s,transform .3s}
.wd-get-card:hover{border-color:rgba(245,158,11,0.3);transform:translateY(-3px)}
.wd-get-icon{font-size:1.6rem;margin-bottom:12px}
.wd-get-title{font-size:.88rem;font-weight:700;color:var(--text);margin-bottom:6px}
.wd-get-desc{font-size:.78rem;color:var(--muted);line-height:1.55}

/* COMPARISON: OLD vs NEW */
.wd-compare{padding:0 0 72px}
.wd-compare-grid{display:grid;grid-template-columns:1fr 60px 1fr;gap:0;align-items:stretch}
.wd-panel{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:28px 24px}
.wd-panel-label{font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:8px}
.wd-label-old{color:#6B7280}
.wd-label-new{color:#F59E0B}
.wd-item{display:flex;align-items:center;gap:10px;padding:11px 14px;border-radius:10px;font-size:.82rem;font-weight:600;margin-bottom:9px}
.wd-item-old{background:rgba(107,114,128,0.1);border:1px solid rgba(107,114,128,0.18);color:#9CA3AF}
.wd-item-new{background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.18);color:#FDE68A}
.wd-item-icon{font-size:1rem;flex-shrink:0}
.wd-middle{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:0 8px}
.wd-divider-pill{background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);border-radius:100px;padding:6px 12px;font-size:.68rem;font-weight:700;color:#F59E0B;letter-spacing:.06em;text-transform:uppercase}

/* PROCESS */
.wd-process{padding:0 0 72px}
.wd-process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;position:relative}
.wd-step{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 20px;position:relative}
.wd-step-num{font-size:.7rem;font-weight:800;letter-spacing:.12em;color:#F59E0B;margin-bottom:10px}
.wd-step-title{font-size:.95rem;font-weight:700;color:var(--text);margin-bottom:8px}
.wd-step-desc{font-size:.8rem;color:var(--muted);line-height:1.55}

/* STACK */
.wd-stack{padding:0 0 72px}
.wd-stack-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.wd-stack-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px 22px;transition:border-color .3s,transform .3s}
.wd-stack-card:hover{border-color:rgba(245,158,11,0.3);transform:translateY(-3px)}
.wd-stack-top{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.wd-stack-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;background:rgba(245,158,11,0.1);flex-shrink:0}
.wd-stack-name{font-size:.95rem;font-weight:700}
.wd-stack-desc{font-size:.8rem;color:var(--muted);line-height:1.55}

@media(max-width:900px){
  .wd-pillar-grid{grid-template-columns:1fr}
  .wd-get-grid{grid-template-columns:repeat(2,1fr)}
  .wd-process-grid{grid-template-columns:repeat(2,1fr)}
  .wd-stack-grid{grid-template-columns:1fr}
}
@media(max-width:700px){
  .wd-compare-grid{grid-template-columns:1fr;gap:16px}
  .wd-middle{flex-direction:row;padding:8px 0}
}
`;

const OLD_WAY = [
  ['🐌', 'Bloated template sites that load in 8+ seconds'],
  ['📱', 'Broken or clunky on mobile'],
  ['🎭', 'Generic designs that look like every competitor'],
  ['🔌', 'No integrations — forms email you and that\'s it'],
  ['🛠️', 'You pay monthly forever and never own a thing'],
];

const NEW_WAY = [
  ['⚡', 'Blazing-fast custom sites built for Core Web Vitals'],
  ['📲', 'Mobile-first, pixel-perfect on every device'],
  ['🎨', 'Distinctive branding that actually stands out'],
  ['🔗', 'Plugged into your CRM, calendar, and AI workflows'],
  ['🔑', 'You own the code, hosting, and domain — forever'],
];

export default function WebDesign() {
  return (
    <>
      <Helmet>
        <title>Web Design & Development | Nuvion Solutions</title>
        <meta name="description" content="Custom-built, high-converting websites for service businesses. Fast, mobile-first, SEO-ready, and wired into the automations that grow your business." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/web-design" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">&larr; Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow wd">🎨 Web Design & Development</div>
        <h1 className="sp-h1">Websites that look sharp<br /><em className="wd-accent">and actually convert</em></h1>
        <p className="sp-sub">Custom-built, mobile-first websites designed around your brand and wired into your automations — so your site doesn't just sit there, it books appointments, captures leads, and closes deals 24/7.</p>
      </div>

      <div className="sp-wrap">

        {/* THREE PILLARS */}
        <div className="wd-pillars">
          <div className="sp-section-title">Built Around Three Things That Matter</div>
          <div className="wd-pillar-grid">
            <div className="wd-pillar">
              <div className="wd-pillar-icon">⚡</div>
              <div className="wd-pillar-title">Performance First</div>
              <div className="wd-pillar-desc">Lightning-fast load times, optimized images, clean code, and perfect Core Web Vitals scores. Fast sites rank higher and convert more — no exceptions.</div>
            </div>
            <div className="wd-pillar">
              <div className="wd-pillar-icon">🎯</div>
              <div className="wd-pillar-title">Designed to Convert</div>
              <div className="wd-pillar-desc">Every section, button, and headline is crafted with one goal in mind: turning visitors into booked calls, qualified leads, and paying customers.</div>
            </div>
            <div className="wd-pillar">
              <div className="wd-pillar-icon">🔗</div>
              <div className="wd-pillar-title">Wired Into Automation</div>
              <div className="wd-pillar-desc">Forms, bookings, and chat are connected directly to your CRM, calendar, and AI receptionist — so leads flow into your pipeline automatically.</div>
            </div>
          </div>
        </div>

        {/* BEFORE / AFTER COMPARISON */}
        <div className="wd-compare">
          <div className="sp-section-title">The Old Way vs. The Nuvion Way</div>
          <div className="wd-compare-grid">
            <div className="wd-panel">
              <div className="wd-panel-label wd-label-old">Template Site</div>
              {OLD_WAY.map(([icon, text]) => (
                <div key={text} className="wd-item wd-item-old">
                  <span className="wd-item-icon">{icon}</span>{text}
                </div>
              ))}
            </div>
            <div className="wd-middle">
              <div className="wd-divider-pill">VS</div>
            </div>
            <div className="wd-panel">
              <div className="wd-panel-label wd-label-new">Nuvion Custom Build</div>
              {NEW_WAY.map(([icon, text]) => (
                <div key={text} className="wd-item wd-item-new">
                  <span className="wd-item-icon">{icon}</span>{text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT YOU GET */}
        <div className="wd-get">
          <div className="sp-section-title">What's Included in Every Build</div>
          <div className="wd-get-grid">
            <div className="wd-get-card">
              <div className="wd-get-icon">🎨</div>
              <div className="wd-get-title">Custom Design</div>
              <div className="wd-get-desc">Bespoke visual identity, typography, and layouts — no cookie-cutter templates.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">📱</div>
              <div className="wd-get-title">Fully Responsive</div>
              <div className="wd-get-desc">Looks and performs flawlessly on phones, tablets, laptops, and giant monitors.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">🔎</div>
              <div className="wd-get-title">SEO Foundation</div>
              <div className="wd-get-desc">Semantic HTML, schema markup, meta tags, and sitemaps baked in from day one.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">📝</div>
              <div className="wd-get-title">Copy That Converts</div>
              <div className="wd-get-desc">Headlines, CTAs, and page structure written to turn visitors into customers.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">📅</div>
              <div className="wd-get-title">Booking Integration</div>
              <div className="wd-get-desc">Calendly, GHL, or your preferred scheduler embedded right where leads will use it.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">💬</div>
              <div className="wd-get-title">Lead Capture Forms</div>
              <div className="wd-get-desc">Forms that feed directly into your CRM and trigger instant follow-up automations.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">📊</div>
              <div className="wd-get-title">Analytics Setup</div>
              <div className="wd-get-desc">Google Analytics, conversion tracking, and heatmaps configured so you know what works.</div>
            </div>
            <div className="wd-get-card">
              <div className="wd-get-icon">🛡️</div>
              <div className="wd-get-title">SSL & Security</div>
              <div className="wd-get-desc">HTTPS, spam protection, and modern security best practices — locked down out of the gate.</div>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="wd-process">
          <div className="sp-section-title">From Kickoff to Live Site</div>
          <div className="wd-process-grid">
            <div className="wd-step">
              <div className="wd-step-num">STEP 01</div>
              <div className="wd-step-title">Discovery & Strategy</div>
              <div className="wd-step-desc">We dig into your brand, audience, and goals — and map exactly what the site needs to do to move your business forward.</div>
            </div>
            <div className="wd-step">
              <div className="wd-step-num">STEP 02</div>
              <div className="wd-step-title">Design & Wireframes</div>
              <div className="wd-step-desc">Custom mockups and wireframes for every key page. You approve the look and feel before a single line of code gets written.</div>
            </div>
            <div className="wd-step">
              <div className="wd-step-num">STEP 03</div>
              <div className="wd-step-title">Build & Integrate</div>
              <div className="wd-step-desc">We build the site with modern tooling, plug in your CRM and automations, and test relentlessly across devices and browsers.</div>
            </div>
            <div className="wd-step">
              <div className="wd-step-num">STEP 04</div>
              <div className="wd-step-title">Launch & Support</div>
              <div className="wd-step-desc">We handle deployment, DNS, and launch QA — then stick around for ongoing tweaks, updates, and optimization.</div>
            </div>
          </div>
        </div>

        {/* STACK */}
        <div className="wd-stack">
          <div className="sp-section-title">The Tech We Build With</div>
          <div className="wd-stack-grid">
            <div className="wd-stack-card">
              <div className="wd-stack-top">
                <div className="wd-stack-icon">⚛️</div>
                <div className="wd-stack-name">React & Modern JS</div>
              </div>
              <div className="wd-stack-desc">Fast, component-driven front-ends built with React, Vite, and the same tools powering the world's top product sites.</div>
            </div>
            <div className="wd-stack-card">
              <div className="wd-stack-top">
                <div className="wd-stack-icon">▲</div>
                <div className="wd-stack-name">Vercel Hosting</div>
              </div>
              <div className="wd-stack-desc">Global edge network, instant deploys, automatic SSL, and 99.99% uptime — your site stays fast everywhere in the world.</div>
            </div>
            <div className="wd-stack-card">
              <div className="wd-stack-top">
                <div className="wd-stack-icon">🔌</div>
                <div className="wd-stack-name">CRM & Automation Hooks</div>
              </div>
              <div className="wd-stack-desc">Native integrations with GoHighLevel, HubSpot, Stripe, Calendly, n8n, and any API — your site plugs into your stack.</div>
            </div>
          </div>
        </div>

      </div>

      <div className="sp-cta">
        <h2>Ready for a website that actually earns its keep?</h2>
        <p>Book a free design call and we'll audit your current site, show you what's costing you leads, and sketch out exactly what a Nuvion build would look like.</p>
        <Link to="/book" className="sp-cta-btn wd">Book a Free Design Call &rarr;</Link>
      </div>
      <Footer />
    </>
  );
}
