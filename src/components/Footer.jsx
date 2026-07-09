import { Link } from 'react-router-dom';
import nuvionLogo from '../assets/nuvion-logo.webp';

export const FOOTER_CSS = `
.footer{background:var(--ink);color:var(--paper);padding:clamp(64px,8vw,104px) 20px 40px;position:relative;overflow:hidden;border-top:1px solid var(--hairline-dark)}
.footer-inner{max-width:1200px;margin:0 auto}
.f-call{display:flex;flex-direction:column;gap:6px;padding-bottom:clamp(40px,6vw,72px);border-bottom:1px solid var(--hairline-dark)}
.f-call-label{font-family:var(--mono);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,242,236,.55)}
.f-call-num{font-family:var(--serif);font-weight:700;font-size:clamp(2.2rem,6vw,4.6rem);letter-spacing:-.02em;color:var(--paper);line-height:1.05;transition:color .18s;width:fit-content;font-variant-numeric:tabular-nums}
.f-call-num:hover{color:#9BC4C1}
.f-call-sub{font-size:.95rem;color:rgba(244,242,236,.6);max-width:44ch}
.f-cols{display:grid;grid-template-columns:1fr;gap:44px;padding:clamp(40px,5vw,64px) 0}
@media(min-width:768px){.f-cols{grid-template-columns:1.6fr 1fr 1fr}}
.f-logo-row{display:flex;align-items:center;margin-bottom:16px}
.f-tag{font-size:.92rem;color:rgba(244,242,236,.62);line-height:1.7;margin-bottom:22px;max-width:300px}
.f-contact{display:flex;flex-direction:column;gap:8px}
.f-contact a{font-family:var(--mono);font-size:.8rem;color:rgba(244,242,236,.62);transition:color .18s;width:fit-content}
.f-contact a:hover{color:var(--paper)}
.f-col-title{font-family:var(--mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,242,236,.55);margin-bottom:18px}
.f-links{list-style:none;display:flex;flex-direction:column;gap:11px}
.f-links a{font-size:.9rem;color:rgba(244,242,236,.72);transition:color .18s,padding-left .18s}
.f-links a:hover{color:var(--paper);padding-left:4px}
.footer-bot{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid var(--hairline-dark)}
.f-copy{font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;color:rgba(244,242,236,.55)}
.f-leg{display:flex;gap:22px}
.f-leg a{font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;color:rgba(244,242,236,.55);transition:color .18s}
.f-leg a:hover{color:rgba(244,242,236,.85)}
`;

const services = [
  { slug: 'ai-automation',       label: 'AI & Automation' },
  { slug: 'ai-receptionist',     label: 'Virtual Front Desk' },
  { slug: 'lead-followup',       label: 'Lead Follow-Up' },
  { slug: 'custom-integrations', label: 'Custom Integrations' },
  { slug: 'social-media-ai',     label: 'Social Media AI' },
  { slug: 'reminders',           label: 'Reminders & Retention' },
  { slug: 'seo-aso',             label: 'SEO & AI Search Optimization' },
  { slug: 'web-design',          label: 'Web Design & Development' },
  { slug: 'reviews-automation',  label: 'Reviews Automation' },
  { slug: 'done-for-you-business', label: 'Done-For-You Business' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="f-call">
          <span className="f-call-label">One number. A person answers, or our system does — either way, you're heard.</span>
          <a className="f-call-num" href="tel:+17075209179">(707) 520-9179</a>
          <span className="f-call-sub">Call or text. If we're on the other line, you'll hear back the same day.</span>
        </div>
        <div className="f-cols">
          <div>
            <div className="f-logo-row">
              <img src={nuvionLogo} alt="Nuvion Solutions" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} loading="lazy" />
            </div>
            <p className="f-tag">Web design and AI automation for small businesses that can't afford to miss a lead.</p>
            <div className="f-contact">
              <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>
              <a href="tel:+17075209179">(707) 520-9179</a>
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
              <li><Link to="/audit">Free Audit</Link></li>
              <li><Link to="/book">Book a Call</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <div className="f-copy">© {year} Nuvion Solutions. All rights reserved.</div>
          <div className="f-leg">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
