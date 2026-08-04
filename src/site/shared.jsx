import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LANG_CSS, LangToggle, useLang } from './i18n.jsx';
import { trackCall } from '../analytics.js';
import dumolinLogo from '../assets/clients/dumolin.webp';
import arpkdLogo from '../assets/clients/arpkd.webp';
import deniseLogo from '../assets/clients/denise.webp';
import calegalLogo from '../assets/clients/calegal.webp';

/* ─────────────────────────────────────────────────────────────
   Shared design system — tokens, primitives, Nav, Footer, icons.
   Imported by every page so the whole site stays consistent.
───────────────────────────────────────────────────────────── */

/* Sticky mobile CTA — shared so pages with their own CSS can import it too */
export const MCTA_CSS = `
.nv-mcta{position:fixed;left:0;right:0;bottom:0;z-index:90;display:flex;gap:10px;align-items:stretch;padding:10px 14px calc(10px + env(safe-area-inset-bottom));background:rgba(255,255,255,.95);backdrop-filter:saturate(160%) blur(12px);-webkit-backdrop-filter:saturate(160%) blur(12px);border-top:1px solid var(--line);box-shadow:0 -8px 26px -16px rgba(10,18,34,.5)}
.nv-mcta .call{flex:0 0 54px;display:flex;align-items:center;justify-content:center;background:var(--brand-soft);color:var(--brand-strong);border:1px solid var(--line);border-radius:11px}
.nv-mcta .book{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;border-radius:11px;font-weight:800;font-size:1rem;box-shadow:0 8px 20px -8px rgba(37,110,247,.6);line-height:1.1;padding:8px}
.nv-mcta .book small{font-size:.64rem;font-weight:600;opacity:.9;margin-top:2px;letter-spacing:.01em}
@media(min-width:940px){.nv-mcta{display:none}}
body{padding-bottom:0}
@media(max-width:939px){body{padding-bottom:76px}}
/* Floating desktop contact (hidden on mobile, where the sticky bar handles it) */
.nv-fab{position:fixed;right:22px;bottom:22px;z-index:80;display:inline-flex;align-items:center;gap:11px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;padding:11px 18px 11px 12px;border-radius:100px;box-shadow:0 12px 30px -8px rgba(37,110,247,.55);font-weight:800;font-size:.94rem;transition:transform .16s,box-shadow .16s}
.nv-fab:hover{transform:translateY(-2px);box-shadow:0 18px 38px -8px rgba(37,110,247,.65)}
.nv-fab .ic{display:inline-flex;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.2);align-items:center;justify-content:center;flex-shrink:0}
.nv-fab .tx{display:flex;flex-direction:column;line-height:1.15;text-align:left}
.nv-fab .tx small{font-weight:500;font-size:.72rem;opacity:.9}
@media(max-width:939px){.nv-fab{display:none}}
`;

export const BASE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root{
  --bg:#FFFFFF; --bg-soft:#F5F8FC; --surface:#FFFFFF;
  --ink:#0A1222; --body:#475467; --muted:#667085;
  --brand:#2563EB; --brand-strong:#1D4ED8; --brand-soft:#EAF1FF; --cyan:#22D3EE;
  --line:#E5EAF1;
  --shadow-sm:0 1px 2px rgba(10,18,34,.04);
  --shadow:0 1px 3px rgba(10,18,34,.05),0 14px 30px -12px rgba(10,18,34,.12);
  --shadow-lg:0 30px 70px -24px rgba(13,35,80,.32);
  --radius:18px;
  --font:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:84px}
body{font-family:var(--font);background:var(--bg);color:var(--body);-webkit-font-smoothing:antialiased;line-height:1.6}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
.nv-wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 24px}
.nv-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--brand-soft);color:var(--brand-strong);font-weight:700;font-size:.76rem;letter-spacing:.05em;text-transform:uppercase;padding:8px 15px;border-radius:100px}
.nv-eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--brand);box-shadow:0 0 0 4px rgba(37,110,247,.16)}
.nv-kicker{color:var(--brand);font-weight:700;font-size:.8rem;letter-spacing:.09em;text-transform:uppercase;margin-bottom:14px}
.nv-h2{font-size:clamp(1.9rem,3.4vw,2.75rem);color:var(--ink);font-weight:800;letter-spacing:-.03em;line-height:1.1}
.nv-lead{color:var(--body);font-size:clamp(1rem,1.4vw,1.14rem);margin-top:16px;line-height:1.65}
.nv-grad{background:linear-gradient(100deg,var(--brand) 10%,#4F86FF 60%,var(--cyan) 130%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nv-center{text-align:center;max-width:680px;margin:0 auto 52px}
.nv-sec{padding:82px 0}
.nv-sec.soft{background:var(--bg-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}

.nv-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-family:var(--font);font-weight:700;font-size:.98rem;cursor:pointer;border:none;border-radius:12px;padding:14px 26px;transition:transform .14s ease,box-shadow .14s ease,background .14s ease,color .14s ease;white-space:nowrap}
.nv-btn-primary{background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;box-shadow:0 10px 24px -8px rgba(37,110,247,.6)}
.nv-btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 32px -8px rgba(37,110,247,.7)}
.nv-btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:var(--shadow-sm)}
.nv-btn-ghost:hover{border-color:#c7d3e6;transform:translateY(-2px)}
.nv-btn-lg{padding:16px 32px;font-size:1.05rem}
.nv-btn-white{background:#fff;color:var(--brand-strong)}
.nv-btn-white:hover{transform:translateY(-2px);box-shadow:0 16px 30px -10px rgba(0,0,0,.35)}

/* Scroll-reveal is fail-open: content is always visible (opacity:1) so crawlers,
   AI engines, and no-JS all see it; the reveal is a subtle slide-up only. */
.rv{transform:translateY(18px);transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.rv.in{transform:none}
.rv.d1{transition-delay:.07s}.rv.d2{transition-delay:.14s}.rv.d3{transition-delay:.21s}.rv.d4{transition-delay:.28s}

/* NAV */
.nv-nav{position:sticky;top:0;z-index:100;transition:background .3s,box-shadow .3s,border-color .3s;border-bottom:1px solid transparent;background:rgba(255,255,255,.82);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px)}
.nv-nav.scrolled{border-bottom:1px solid var(--line);box-shadow:0 4px 24px -18px rgba(10,18,34,.5)}
.nv-nav-in{display:flex;align-items:center;justify-content:space-between;height:74px}
.nv-logo{display:flex;align-items:center;gap:10px}
.nv-logo .mark{width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;box-shadow:0 6px 16px -6px rgba(37,110,247,.6);flex-shrink:0}
.nv-logo .wm{display:flex;flex-direction:column;line-height:1.05}
.nv-logo .wm b{color:var(--ink);font-weight:800;font-size:1.14rem;letter-spacing:-.01em}
.nv-logo .wm small{color:var(--muted);font-size:.58rem;font-weight:700;letter-spacing:.22em}
.nv-links{display:none;align-items:center;gap:6px}
.nv-links a{padding:9px 14px;border-radius:9px;font-size:.93rem;font-weight:500;color:var(--body);transition:color .2s,background .2s}
.nv-links a:hover{color:var(--brand-strong);background:var(--brand-soft)}
.nv-navcta{display:none}
.nv-burger{display:inline-flex;flex-direction:column;gap:5px;background:transparent;border:1px solid var(--line);border-radius:9px;padding:10px;cursor:pointer}
.nv-burger span{width:20px;height:2px;background:var(--ink);border-radius:2px;transition:.3s}
.nv-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nv-burger.open span:nth-child(2){opacity:0}
.nv-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.nv-mobile{display:none;flex-direction:column;gap:4px;padding:12px 24px 22px;border-bottom:1px solid var(--line);background:#fff}
.nv-mobile.show{display:flex}
.nv-mobile a{padding:12px 6px;font-weight:600;color:var(--ink);border-bottom:1px solid var(--line)}
.nv-mobile .nv-btn{margin-top:12px}
@media(min-width:940px){.nv-links,.nv-navcta{display:flex}.nv-burger{display:none}.nv-mobile{display:none!important}}

/* FOOTER */
.nv-foot{background:#fff;border-top:1px solid var(--line);padding:58px 0 32px}
.nv-foot-grid{display:grid;grid-template-columns:1fr;gap:38px}
@media(min-width:820px){.nv-foot-grid{grid-template-columns:1.7fr 1fr 1fr 1fr}}
.nv-foot .tag{color:var(--muted);font-size:.9rem;max-width:290px;margin:14px 0 16px;line-height:1.65}
.nv-foot .con a{display:block;color:var(--body);font-size:.9rem;margin-bottom:7px;font-weight:600}
.nv-foot h5{color:var(--ink);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:15px}
.nv-foot .links a{display:block;color:var(--body);font-size:.9rem;margin-bottom:10px}
.nv-foot .links a:hover{color:var(--brand-strong)}
.nv-foot-bot{border-top:1px solid var(--line);margin-top:38px;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;color:var(--muted);font-size:.82rem}
.nv-foot-bot .leg{display:flex;gap:20px}

/* BRAND RIBBON — the recurring brand thread across pages */
.nv-ribbon{background:var(--bg-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.nv-ribbon-in{display:flex;flex-wrap:wrap;gap:12px 26px;justify-content:center;padding:16px 0;font-size:.9rem;font-weight:700;color:var(--ink)}
.nv-ribbon-in span{display:inline-flex;align-items:center;gap:8px}
.nv-ribbon-in .ic{font-size:1.05rem;line-height:1}

${LANG_CSS}
${MCTA_CSS}
@media(prefers-reduced-motion:reduce){ .rv{transform:none!important;transition:none} }
`;

/* scroll reveal */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* icons */
export const Ico = ({ children }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
export const IconWeb = () => <Ico><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 4v5"/></Ico>;
export const IconSeo = () => <Ico><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></Ico>;
export const IconMkt = () => <Ico><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></Ico>;
export const Check = () => <Ico><path d="m20 6-11 11-5-5"/></Ico>;
export const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
export const ExtLink = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/></svg>;
export const PhoneIco = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

/* Default (company) contact line. David's ad pages pass their own phone via the `phone` prop. */
export const COMPANY_PHONE = { tel: '+17075209179', display: '(707) 520-9179' };

/* ── STICKY MOBILE CTA (site-wide, mobile only) ────────────── */
export function MobileCTA({ phone = COMPANY_PHONE }) {
  const { t } = useLang();
  return (
    <div className="nv-mcta" role="region" aria-label="Quick contact">
      <a className="call" href={`tel:${phone.tel}`} aria-label={`Call or text ${phone.display}`} onClick={() => trackCall({ source: 'mobile_bar' })}><PhoneIco /></a>
      <Link className="book" to="/book">{t('Book a Free Call', 'Reserva una llamada gratis')}<small>{t('⚡ Live in 1 week or you don\'t pay', '⚡ En vivo en 1 semana o no pagas')}</small></Link>
    </div>
  );
}

/* ── BRAND RIBBON (the brand's thread, dropped onto feature pages) ── */
export function BrandRibbon() {
  const { t } = useLang();
  const items = [
    ['💬', t('Real people, not a bot', 'Personas reales, no un bot')],
    ['🎨', t('Your exact vision', 'Tu visión exacta')],
    ['🔑', t('You own it', 'Es tuyo')],
    ['📍', t('Local in Sonoma County', 'Locales en Sonoma County')],
    ['⚡', t('Live in 1 week', 'En vivo en 1 semana')],
  ];
  return (
    <div className="nv-ribbon"><div className="nv-wrap nv-ribbon-in">
      {items.map(([ic, label], i) => <span key={i}><b className="ic">{ic}</b> {label}</span>)}
    </div></div>
  );
}

/* ── FLOATING DESKTOP CONTACT (site-wide, desktop only) ────── */
export function FloatingContact({ phone = COMPANY_PHONE }) {
  const { t } = useLang();
  return (
    <a className="nv-fab" href={`tel:${phone.tel}`} aria-label={t('Talk to a human', 'Habla con una persona')} onClick={() => trackCall({ source: 'floating' })}>
      <span className="ic"><PhoneIco /></span>
      <span className="tx">{t('Talk to a human', 'Habla con una persona')}<small>{phone.display}</small></span>
    </a>
  );
}

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Websites', to: '/services/web-design' },
  { label: 'Automation', to: '/services/integrations' },
  { label: 'SEO', to: '/services/seo-aso' },
  { label: 'Our Work', to: '/work' },
  { label: 'About', to: '/about' },
];

const Logo = () => (
  <Link to="/" className="nv-logo" aria-label="Nuvion Solutions"><span className="mark">N</span><span className="wm"><b>NUVION</b><small>SOLUTIONS</small></span></Link>
);

const NAV_LABELS_ES = {
  Home: 'Inicio',
  'Websites': 'Sitios web',
  'Automation': 'Automatización',
  SEO: 'SEO',
  'Our Work': 'Nuestro trabajo',
  About: 'Nosotros',
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`nv-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nv-wrap nv-nav-in">
        <Logo />
        <nav className="nv-links">{NAV_LINKS.map((l) => <Link key={l.label} to={l.to}>{t(l.label, NAV_LABELS_ES[l.label])}</Link>)}</nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LangToggle />
          <Link to="/book" className="nv-btn nv-btn-primary nv-navcta">{t('Book a Call', 'Reserva una llamada')}</Link>
          <button className={`nv-burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu"><span/><span/><span/></button>
        </div>
      </div>
      <div className={`nv-mobile${open ? ' show' : ''}`}>
        <LangToggle />
        {NAV_LINKS.map((l) => <Link key={l.label} to={l.to} onClick={() => setOpen(false)}>{t(l.label, NAV_LABELS_ES[l.label])}</Link>)}
        <Link to="/book" className="nv-btn nv-btn-primary" onClick={() => setOpen(false)}>{t('Book a Call', 'Reserva una llamada')}</Link>
      </div>
    </header>
  );
}

export function Footer({ phone = COMPANY_PHONE }) {
  const year = new Date().getFullYear();
  const { t } = useLang();
  return (
    <>
    <MobileCTA phone={phone} />
    <FloatingContact phone={phone} />
    <footer className="nv-foot"><div className="nv-wrap">
      <div className="nv-foot-grid">
        <div>
          <Logo />
          <p className="tag">{t('On a mission to give every local business a website they’re proud of — new or redesigned, built by real people who actually answer and stay in your corner.', 'En una misión: darle a cada negocio local un sitio web del que se sienta orgulloso — nuevo o rediseñado, hecho por personas reales que sí responden y se quedan a tu lado.')}</p>
          <div className="con">
            <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>
            <a href={`tel:${phone.tel}`}>{phone.display}</a>
          </div>
        </div>
        <div className="links">
          <h5>{t('Services', 'Servicios')}</h5>
          <Link to="/services/web-design">{t('Websites', 'Sitios web')}</Link>
          <Link to="/services/custom-builds">{t('Custom Builds', 'Desarrollos a medida')}</Link>
          <Link to="/services/integrations">{t('Integrations & Automation', 'Integraciones y automatización')}</Link>
          <Link to="/services/seo-aso">{t('SEO', 'SEO')}</Link>
          <Link to="/services/social-media-ai">{t('Marketing', 'Marketing')}</Link>
          <Link to="/for-business">{t('For Business', 'Para empresas')}</Link>
          <Link to="/trades">{t('For Trades', 'Para oficios')}</Link>
        </div>
        <div className="links">
          <h5>{t('Company', 'Empresa')}</h5>
          <Link to="/work">{t('Our Work', 'Nuestro trabajo')}</Link>
          <Link to="/about">{t('About', 'Nosotros')}</Link>
          <Link to="/guides">{t('Guides', 'Guías')}</Link>
          <Link to="/book">{t('Book a Call', 'Reserva una llamada')}</Link>
        </div>
        <div className="links">
          <h5>{t('Industries', 'Industrias')}</h5>
          <Link to="/web-design-for/restaurants">{t('Restaurants', 'Restaurantes')}</Link>
          <Link to="/web-design-for/wineries">{t('Wineries', 'Bodegas')}</Link>
          <Link to="/web-design-for/real-estate">{t('Real Estate', 'Bienes raíces')}</Link>
          <Link to="/web-design-for/med-spas">{t('Med Spas & Salons', 'Med spas y salones')}</Link>
          <Link to="/web-design-for/dental-medical">{t('Dental & Medical', 'Dental y médico')}</Link>
          <Link to="/web-design-for/fitness">{t('Gyms & Fitness', 'Gimnasios')}</Link>
          <Link to="/web-design-for/professional-services">{t('Professional Svcs', 'Servicios profesionales')}</Link>
          <Link to="/web-design-for/nonprofits">{t('Nonprofits', 'Sin fines de lucro')}</Link>
        </div>
      </div>
      <div className="nv-foot-bot">
        <span>© {year} Nuvion Solutions. {t('All rights reserved.', 'Todos los derechos reservados.')}</span>
        <span className="leg"><Link to="/privacy">{t('Privacy Policy', 'Política de privacidad')}</Link><Link to="/terms">{t('Terms of Service', 'Términos de servicio')}</Link></span>
      </div>
    </div></footer>
    </>
  );
}

/* ── CLIENT LOGO WALL ──────────────────────────────────────── */
const CLIENT_LOGOS = [
  { img: dumolinLogo, name: 'DuMolin Community Living' },
  { img: calegalLogo, name: 'California Legal Document Excellence' },
  { img: arpkdLogo, name: 'ARPKD / CHF Alliance' },
  { img: deniseLogo, name: 'Denise Kramer Weddings' },
];
const CLIENT_NAMES = ['Bay Area 2nd Mom', 'Floors for Sonoma'];

export const WALL_CSS = `
.nv-wall{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;gap:16px}
.nv-wall-item{height:80px;flex:0 1 190px;min-width:150px;padding:14px 22px;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-sm);display:flex;align-items:center;justify-content:center;text-align:center;transition:transform .16s,box-shadow .16s}
.nv-wall-item:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.nv-wall-item img{max-height:56px;max-width:160px;object-fit:contain;transition:transform .2s}
.nv-wall-item:hover img{transform:scale(1.05)}
.nv-wall-name{color:var(--muted);font-weight:800;font-size:.86rem;letter-spacing:-.01em;line-height:1.18;transition:color .2s}
.nv-wall-item:hover .nv-wall-name{color:var(--ink)}
`;

export function LogoWall() {
  return (
    <div className="nv-wall">
      {CLIENT_LOGOS.map((c) => (
        <div className="nv-wall-item" key={c.name} title={c.name}><img src={c.img} alt={`${c.name} logo`} loading="lazy" /></div>
      ))}
      {CLIENT_NAMES.map((n) => (
        <div className="nv-wall-item" key={n}><span className="nv-wall-name">{n}</span></div>
      ))}
    </div>
  );
}
