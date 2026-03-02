import { Link } from 'react-router-dom';
import nuvionLogo from '../assets/nuvion-logo.png';

export const FOOTER_CSS = `
.footer{border-top:1px solid rgba(79,110,247,.08);padding:64px 20px 40px}
.footer-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:48px}
@media(min-width:768px){.footer-inner{grid-template-columns:2fr 1fr 1fr}}
.f-logo-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.f-mark{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,var(--primary),var(--cyan));display:flex;align-items:center;justify-content:center;font-weight:900;color:#fff;font-size:.9rem}
.f-brand{font-size:1.1rem;font-weight:800;color:var(--text)}
.f-tag{font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:22px;max-width:280px}
.f-contact{display:flex;flex-direction:column;gap:8px}
.f-contact a{font-size:.83rem;color:var(--muted);text-decoration:none;transition:color .2s}
.f-contact a:hover{color:var(--cyan)}
.f-col-title{font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--text);margin-bottom:16px}
.f-links{list-style:none;display:flex;flex-direction:column;gap:10px}
.f-links a{font-size:.85rem;color:var(--muted);text-decoration:none;transition:color .2s}
.f-links a:hover{color:var(--text)}
.footer-bot{max-width:1200px;margin:36px auto 0;padding-top:22px;border-top:1px solid rgba(255,255,255,.04);display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center}
.f-copy{font-size:.78rem;color:var(--dim)}
.f-leg{display:flex;gap:20px}
.f-leg a{font-size:.78rem;color:var(--dim);text-decoration:none;transition:color .2s}
.f-leg a:hover{color:var(--muted)}
`;

const services = [
  { slug: 'ai-automation',       label: 'AI & Automation' },
  { slug: 'ai-receptionist',     label: 'AI Receptionist' },
  { slug: 'lead-followup',       label: 'Lead Follow-Up' },
  { slug: 'custom-integrations', label: 'Custom Integrations' },
  { slug: 'social-media-ai',     label: 'Social Media AI' },
  { slug: 'reminders',           label: 'Reminders & Retention' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="f-logo-row">
            <img src={nuvionLogo} alt="Nuvion Solutions" style={{ height: '32px', width: 'auto' }} />
          </div>
          <p className="f-tag">AI automation systems that eliminate manual work and help your business run on autopilot.</p>
          <div className="f-contact">
            <a href="mailto:jaedenc3604@gmail.com">jaedenc3604@gmail.com</a>
          </div>
        </div>
        <div>
          <div className="f-col-title">Services</div>
          <ul className="f-links">
            {services.map(s => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-col-title">Company</div>
          <ul className="f-links">
            <li><Link to="/#how-it-works">How It Works</Link></li>
            <li><Link to="/#why-us">Why Nuvion</Link></li>
            <li><Link to="/#team">Our Team</Link></li>
            <li><Link to="/book">Book a Call</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <div className="f-copy">© {year} Nuvion Solutions. All rights reserved.</div>
        <div className="f-leg">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
