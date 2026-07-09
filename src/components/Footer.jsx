import { Link } from 'react-router-dom';
import nuvionLogo from '../assets/nuvion-logo.webp';

/* Night edition: the footer is a PAPER band — print on black. */
export const FOOTER_CSS = `
.footer{background:var(--band);color:var(--band-ink);padding:clamp(64px,8vw,104px) 20px 40px;position:relative;overflow:hidden;z-index:1}
.footer-inner{max-width:1200px;margin:0 auto}
.f-call{display:flex;flex-direction:column;gap:6px;padding-bottom:clamp(40px,6vw,72px);border-bottom:1px solid var(--band-hairline)}
.f-call-label{font-family:var(--mono);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:#8A9590}
.f-call-num{font-family:var(--serif);font-weight:700;font-size:clamp(2.2rem,6vw,4.6rem);letter-spacing:-.02em;color:var(--band-ink);line-height:1.05;transition:color .18s;width:fit-content;font-variant-numeric:tabular-nums}
.f-call-num:hover{color:#0E5F63}
.f-call-sub{font-size:.95rem;color:var(--band-muted);max-width:44ch}
.f-cols{display:grid;grid-template-columns:1fr;gap:44px;padding:clamp(40px,5vw,64px) 0}
@media(min-width:768px){.f-cols{grid-template-columns:1.6fr 1fr 1fr}}
.f-logo-chip{background:#141B19;border-radius:8px;padding:14px 18px;width:fit-content;margin-bottom:16px;box-shadow:0 2px 10px rgba(20,27,25,.18)}
.f-tag{font-size:.92rem;color:var(--band-muted);line-height:1.7;margin-bottom:22px;max-width:300px}
.f-contact{display:flex;flex-direction:column;gap:8px}
.f-contact a{font-family:var(--mono);font-size:.8rem;color:var(--band-muted);transition:color .18s;width:fit-content}
.f-contact a:hover{color:var(--band-ink)}
.f-col-title{font-family:var(--mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#8A9590;margin-bottom:18px}
.f-links{list-style:none;display:flex;flex-direction:column;gap:11px}
.f-links a{font-size:.9rem;color:#3E4742;transition:color .18s,padding-left .18s}
.f-links a:hover{color:#0E5F63;padding-left:4px}
.footer-bot{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid var(--band-hairline)}
.f-copy{font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;color:#77817B}
.f-leg{display:flex;gap:22px}
.f-leg a{font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;color:#77817B;transition:color .18s}
.f-leg a:hover{color:var(--band-ink)}
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
            <div className="f-logo-chip">
              <img src={nuvionLogo} alt="Nuvion Solutions" style={{ width: '140px', height: 'auto', objectFit: 'contain' }} loading="lazy" />
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
