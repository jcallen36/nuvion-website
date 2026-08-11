import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_CSS, Footer, useReveal, Arrow, Check, IconWeb, IconSeo, IconMkt } from './shared.jsx';
import { useLang, LangToggle } from './i18n.jsx';
import { trackLead, trackCall } from '../analytics.js';
import { useLeadStart } from './useLeadStart.js';
import { LOCAL_TOWNS } from './LocalPage.jsx';
import davidHero from '../assets/team/david-hero.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import workDumolin from '../assets/work/dumolin.webp';
import workCalegal from '../assets/work/calegal.webp';
import workArpkd from '../assets/work/arpkd.webp';
import workBayarea from '../assets/work/bayarea.webp';
import workFloors from '../assets/work/floors.webp';
import workDenise from '../assets/work/denise.webp';
import workSupercars from '../assets/work/supercars.webp';
import workAviation from '../assets/work/aviation.webp';
import workMedspa from '../assets/work/medspa.webp';

// David's personal line — used everywhere on the /david ad pages (distinct from the company line).
const DAVID_PHONE = { tel: '+17075356054', display: '(707) 535-6054' };

const ABOUT_CSS = `
.ab-hero{padding:64px 0 44px;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.84) 44%, rgba(246,249,253,.72)), url(${sonomaHills});background-size:cover;background-position:center 26%}
.ab-hero-in{display:grid;grid-template-columns:1fr;gap:44px;align-items:center}
@media(min-width:900px){.ab-hero-in{grid-template-columns:1.1fr .9fr}}
.ab-h1{font-size:clamp(2.2rem,4.4vw,3.4rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.07;margin:18px 0 18px}
.ab-hero p.sub{font-size:clamp(1.05rem,1.5vw,1.22rem);color:var(--body);line-height:1.6;max-width:520px}
.ab-cta{display:flex;gap:13px;flex-wrap:wrap;margin:28px 0 16px}
.ab-guar{display:inline-flex;align-items:center;gap:8px;background:#0A1222;color:#fff;font-weight:700;font-size:.9rem;padding:9px 16px;border-radius:100px;margin:0 0 18px;box-shadow:var(--shadow)}
.ab-guar b{color:#FFD84D}
.ab-ticks{display:flex;gap:18px;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.ab-ticks span{display:inline-flex;align-items:center;gap:7px}.ab-ticks svg{color:var(--brand)}
.ab-photo{position:relative;justify-self:center;max-width:380px;width:100%}
.ab-photo img{width:100%;border-radius:22px;box-shadow:var(--shadow-lg);border:1px solid var(--line)}
.ab-badge{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-lg);padding:12px 15px;display:flex;gap:10px;align-items:center}
.ab-badge b{color:var(--ink);font-size:.9rem;display:block}.ab-badge span{color:var(--muted);font-size:.76rem}
.ab-badge.b1{top:24px;left:-14px;animation:ab-float 5s ease-in-out infinite}.ab-badge.b2{bottom:26px;right:-14px;animation:ab-float 5.6s ease-in-out infinite .4s}
@keyframes ab-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@media(prefers-reduced-motion:reduce){.ab-badge.b1,.ab-badge.b2{animation:none}}
.ab-stars{color:#F5A623;letter-spacing:1px;font-size:1.1rem}
.ab-pulse{width:9px;height:9px;border-radius:50%;background:#22C55E;box-shadow:0 0 0 0 rgba(34,197,94,.5);animation:ab-pulse 2s infinite}
@keyframes ab-pulse{70%{box-shadow:0 0 0 9px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
@media(max-width:560px){.ab-badge{display:none}.ab-hero{padding:40px 0 30px}.ab-hero-in{gap:24px}.ab-h1{margin:10px 0 12px}.ab-cta{margin:20px 0 12px}.ab-heroform{padding:18px 18px 8px}}

.ab-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--bg-soft)}
.ab-strip-in{display:flex;gap:16px;justify-content:space-between;flex-wrap:wrap;padding:20px 0;font-weight:600;color:var(--ink);font-size:.92rem}
.ab-strip-in span{display:inline-flex;align-items:center;gap:9px}.ab-strip-in .ic{color:var(--brand);display:inline-flex}

.ab-do{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:820px){.ab-do{grid-template-columns:repeat(3,1fr)}}
.ab-do-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.ab-do-card .ic{width:48px;height:48px;border-radius:12px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.ab-do-card h3{color:var(--ink);font-size:1.14rem;margin-bottom:7px}
.ab-do-card p{font-size:.94rem}

.ab-work{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:640px){.ab-work{grid-template-columns:repeat(2,1fr)}}
@media(min-width:940px){.ab-work{grid-template-columns:repeat(3,1fr)}}
.ab-work-card{display:block;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff;box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s;color:inherit;text-decoration:none}
.ab-work-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg)}
.ab-work-bar{height:26px;background:#F1F4F9;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:5px;padding:0 10px}
.ab-work-bar i{width:7px;height:7px;border-radius:50%;background:#CBD4E1}
.ab-work-shot{position:relative;height:184px;overflow:hidden}
.ab-work-shot img{width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .3s}
.ab-work-card:hover .ab-work-shot img{transform:scale(1.045)}
.ab-work-live{position:absolute;right:10px;bottom:10px;background:rgba(10,18,34,.86);color:#fff;font-size:.74rem;font-weight:700;padding:6px 11px;border-radius:100px;opacity:0;transform:translateY(6px);transition:opacity .2s,transform .2s}
.ab-work-card:hover .ab-work-live{opacity:1;transform:translateY(0)}
.ab-work-meta{padding:15px 16px 18px}
.ab-work-meta h4{color:var(--ink);font-size:1.02rem;margin:0 0 9px}
.ab-work-chip{display:inline-block;background:var(--brand-soft);color:var(--brand-strong);font-size:.72rem;font-weight:700;padding:4px 10px;border-radius:100px}
.ab-work-result{color:var(--body);font-size:.88rem;line-height:1.5;margin-top:10px}

.ab-quote{max-width:760px;margin:0 auto;text-align:center}
.ab-quote .mk{font-size:3.4rem;line-height:.5;color:var(--brand);font-weight:800}
.ab-quote p{font-size:clamp(1.2rem,2.2vw,1.6rem);color:var(--ink);font-weight:600;line-height:1.42;letter-spacing:-.01em;margin:16px 0 20px}
.ab-quote .who{display:inline-flex;align-items:center;gap:12px}
.ab-quote .who .av{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
.ab-quote .who .nm{text-align:left}.ab-quote .who .nm b{color:var(--ink)}.ab-quote .who .nm span{display:block;color:var(--muted);font-size:.85rem}

.ab-story{max-width:720px;margin:0 auto}
.ab-story p{color:var(--body);font-size:1.06rem;line-height:1.75;margin-bottom:18px}
.ab-story p strong{color:var(--ink)}
.ab-sign{font-weight:800;color:var(--ink);font-size:1.2rem;margin-top:6px}

.ab-why{display:grid;grid-template-columns:1fr;gap:14px;max-width:760px;margin:0 auto}
@media(min-width:640px){.ab-why{grid-template-columns:1fr 1fr}}
.ab-why-item{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;box-shadow:var(--shadow-sm)}
.ab-why-item .ck{width:26px;height:26px;border-radius:8px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.ab-why-item b{color:var(--ink);display:block;font-size:.98rem}.ab-why-item span{color:var(--body);font-size:.9rem}

.ab-faq{display:grid;grid-template-columns:1fr;gap:14px;max-width:900px;margin:0 auto}
@media(min-width:720px){.ab-faq{grid-template-columns:1fr 1fr}}
.ab-faq-item{background:#fff;border:1px solid var(--line);border-radius:14px;padding:20px 22px;box-shadow:var(--shadow-sm)}
.ab-faq-item h4{color:var(--ink);font-size:1rem;margin:0 0 7px;display:flex;gap:7px}
.ab-faq-item h4 span{color:var(--brand);font-weight:800}
.ab-faq-item p{color:var(--body);font-size:.92rem;line-height:1.55;margin:0}

/* CONTACT / INTAKE */
.ab-contact{background:radial-gradient(120% 130% at 50% -20%, #12203c, #0A1222 75%);border-radius:26px;padding:clamp(30px,5vw,54px);color:#fff}
.ab-contact-in{display:grid;grid-template-columns:1fr;gap:34px}
@media(min-width:860px){.ab-contact-in{grid-template-columns:.9fr 1.1fr}}
.ab-contact h2{color:#fff;font-size:clamp(1.7rem,3vw,2.3rem);letter-spacing:-.02em;line-height:1.15;margin-bottom:12px}
.ab-contact .lead{color:rgba(255,255,255,.76);font-size:1.02rem;line-height:1.6}
.ab-call{margin-top:24px;display:inline-flex;flex-direction:column;gap:12px}
.ab-callbtn{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--brand-strong);font-weight:800;padding:15px 24px;border-radius:12px;font-size:1.05rem}
.ab-callbtn small{display:block;color:var(--muted);font-weight:600;font-size:.72rem}
.ab-contact .note{color:rgba(255,255,255,.55);font-size:.82rem;margin-top:14px}
.ab-form{background:#fff;border-radius:18px;padding:26px;box-shadow:var(--shadow-lg)}
.ab-form .row{display:grid;grid-template-columns:1fr;gap:12px}
@media(min-width:520px){.ab-form .row.two{grid-template-columns:1fr 1fr}}
.ab-form label{display:block;font-size:.8rem;font-weight:700;color:var(--ink);margin:0 0 6px}
.ab-form input,.ab-form select,.ab-form textarea{width:100%;font-family:var(--font);font-size:16px;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 13px;outline:none;transition:border-color .15s,box-shadow .15s}
.ab-form input:focus,.ab-form select:focus,.ab-form textarea:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(37,110,247,.14)}
.ab-form textarea{resize:vertical;min-height:96px}
.ab-form .fld{margin-bottom:14px}
.ab-form .submit{width:100%;justify-content:center;margin-top:4px}
.ab-form .msg{margin-top:12px;font-size:.9rem;font-weight:600}
.ab-form .msg.ok{color:#059669}.ab-form .msg.err{color:#DC2626}
.ab-done{text-align:center;padding:26px 10px}
.ab-done .big{width:56px;height:56px;border-radius:50%;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
.ab-done h3{color:var(--ink);font-size:1.3rem;margin-bottom:8px}
.ab-done p{color:var(--body)}

/* HERO FORM (above the fold) */
.ab-heroform{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:var(--shadow-lg);padding:22px 22px 10px;max-width:440px;width:100%;justify-self:center}
.ab-heroform .hf-head{display:flex;align-items:center;gap:13px;margin:0 0 15px}
.ab-heroform .hf-head img{width:64px;height:64px;border-radius:50%;object-fit:cover;object-position:top;border:2px solid var(--brand-soft);flex-shrink:0}
.ab-heroform .hf-head b{color:var(--ink);font-size:1.02rem;display:block;line-height:1.2}
.ab-heroform .hf-head .st{color:#F5A623;letter-spacing:1px;font-size:.9rem}
.ab-heroform .hf-head .sd{color:var(--muted);font-size:.78rem;font-weight:500}
.ab-heroform .ab-form{box-shadow:none;border:0;padding:0;border-radius:0}

/* STICKY CTA (follows on scroll) */
.ab-sticky{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:60;display:inline-flex;align-items:center;gap:9px;background:var(--brand-strong);color:#fff;font-weight:800;font-size:.98rem;padding:14px 24px;border-radius:100px;box-shadow:0 12px 32px rgba(10,18,34,.3);text-decoration:none;white-space:nowrap;animation:ab-stickyin .28s ease}
.ab-sticky:hover{background:var(--brand)}
@keyframes ab-stickyin{from{opacity:0;transform:translate(-50%,14px)}to{opacity:1;transform:translate(-50%,0)}}
`;

/* Minimal nav for the ad landing page — logo + language toggle + one call CTA, no exit links */
function MiniNav() {
  const { t } = useLang();
  return (
    <header className="nv-nav scrolled">
      <div className="nv-wrap nv-nav-in">
        <Link to="/" className="nv-logo" aria-label="Nuvion Solutions home"><span className="mark">N</span><span className="wm"><b>NUVION</b><small>SOLUTIONS</small></span></Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LangToggle />
          <a href={`tel:${DAVID_PHONE.tel}`} className="nv-btn nv-btn-primary" onClick={() => trackCall({ source: 'david_nav' })}>{t('Call / text me', 'Llámame')}</a>
        </div>
      </div>
    </header>
  );
}

function IntakeForm({ source = 'david' }) {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', email: '', niche: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [err, setErr] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const { onStart, markSubmitted } = useLeadStart(source, () => form);

  async function submit(e) {
    e.preventDefault();
    if (!form.phone.trim() && !form.email.trim()) {
      setStatus('error');
      setErr(t('Please add a phone or email so I can reach you.', 'Agrega un teléfono o correo para poder contactarte.'));
      return;
    }
    setStatus('sending'); setErr('');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source, lang }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) { setStatus('done'); markSubmitted(); trackLead({ source, niche: form.niche || 'unspecified', email: form.email, phone: form.phone }); }
      else { setStatus('error'); setErr(j.error || t('Something went wrong. Please call instead.', 'Algo salió mal. Por favor llama en su lugar.')); }
    } catch { setStatus('error'); setErr(t('Network error — please call or text me instead.', 'Error de red — por favor llámame o escríbeme.')); }
  }

  if (status === 'done') {
    return (
      <div className="ab-form"><div className="ab-done">
        <div className="big"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5"/></svg></div>
        <h3>{t('Thanks — I got it.', 'Listo — lo recibí.')}</h3>
        <p>{t("I'll personally get back to you the same day. Talk soon!", 'Te responderé personalmente el mismo día. ¡Hablamos pronto!')}</p>
      </div></div>
    );
  }

  return (
    <form className="ab-form" onSubmit={submit} onInput={onStart}>
      <div className="row two" style={{ marginBottom: 14 }}>
        <div><label>{t('Your name', 'Tu nombre')}</label><input value={form.name} onChange={set('name')} required placeholder={t('Jane Smith', 'Juana Pérez')} /></div>
        <div><label>{t('Phone', 'Teléfono')}</label><input value={form.phone} onChange={set('phone')} placeholder="(707) 555-1234" /></div>
      </div>
      <div className="fld"><label>{t('Email (optional)', 'Correo (opcional)')}</label><input type="email" value={form.email} onChange={set('email')} placeholder={t('you@business.com', 'tu@negocio.com')} /></div>
      <div className="fld"><label>{t('Your business (optional)', 'Tu negocio (opcional)')}</label><textarea value={form.message} onChange={set('message')} placeholder={t("What's your business, and do you have a site now? (a sentence is plenty)", '¿Cuál es tu negocio y ya tienes un sitio? (una frase basta)')} /></div>
      <button className="nv-btn nv-btn-primary submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('Sending…', 'Enviando…') : t('Get my free mockup', 'Quiero mi mockup gratis')} <Arrow />
      </button>
      {status === 'error' && <div className="msg err">{err}</div>}
      <div className="msg" style={{ color: 'var(--muted)', fontWeight: 500 }}>{t('Prefer to talk? Call or text me directly — I answer the same day.', '¿Prefieres hablar? Llámame o escríbeme directamente — respondo el mismo día.')}</div>
    </form>
  );
}

/* Floating CTA that appears once the visitor scrolls past the hero form, so a
   convinced mid-page reader can jump to the form from anywhere. Hides again near
   the bottom form so it doesn't overlap it. */
function StickyCTA() {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 720;
      setShow(window.scrollY > 620 && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  if (!show) return null;
  return <a href="#contact" className="ab-sticky">⚡ {t('Get my free mockup', 'Quiero mi mockup gratis')} <Arrow /></a>;
}

/* ── Ad-angle configs: /david (default) + /david/:variant ──────────────
   The default page is indexable; every ad variant is noindex so paid landing
   pages never compete with or duplicate the organic site. Hero copy is
   message-matched to the ad; everything else (proof, work, form) stays. */
const DEFAULT_ANGLE = {
  eyebrow: { en: 'Co-founder · Santa Rosa, CA', es: 'Cofundador · Santa Rosa, CA' },
  h1: { en: `Hi, I'm David — I'll build your website <span class="nv-grad">before you pay</span>.`, es: `Hola, soy David — construiré tu sitio web <span class="nv-grad">antes de que pagues</span>.` },
  sub: { en: "Start with a free mockup — see exactly what your site will look like. I design, build, and host the whole thing myself, and you only pay once it's live and you love it. One local person, start to finish.", es: 'Empieza con un mockup gratis — mira exactamente cómo se verá tu sitio. Yo diseño, construyo y alojo todo, y solo pagas cuando está en vivo y te encanta. Una persona local, de principio a fin.' },
  title: 'Meet David — Web Designer in Sonoma County | Nuvion',
  desc: "I'm David Prudhomme — I design, build, and host your website before you pay. Start with a free mockup, go live in about a week, and only pay once you love it. Sonoma County web design.",
  noindex: false,
};

const SERVICE_ANGLES = {
  'web-design': {
    eyebrow: { en: 'Web Design · Santa Rosa, CA', es: 'Diseño web · Santa Rosa, CA' },
    h1: { en: `Hi, I'm David — I'll design your <span class="nv-grad">custom website</span>, personally.`, es: `Hola, soy David — diseñaré tu <span class="nv-grad">sitio web personalizado</span>, personalmente.` },
    sub: { en: "Start with a free mockup — no template, no bot. I design, build, and host your custom site myself, and you only pay once it's live and you love it. Yours forever.", es: 'Empieza con un mockup gratis — sin plantilla, sin bot. Yo diseño, construyo y alojo tu sitio personalizado, y solo pagas cuando está en vivo y te encanta. Tuyo para siempre.' },
    title: 'David — Custom Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I personally design and build custom, high-converting websites for local businesses. Live in 1 week, or you don't pay.",
    noindex: true,
  },
  'seo': {
    eyebrow: { en: 'Local SEO · Santa Rosa, CA', es: 'SEO local · Santa Rosa, CA' },
    h1: { en: `Hi, I'm David — I'll get your business <span class="nv-grad">found on Google</span>.`, es: `Hola, soy David — haré que tu negocio <span class="nv-grad">aparezca en Google</span>.` },
    sub: { en: 'Real, local SEO handled by me personally — no agency runaround, no empty promises, no long contracts. Just more of the right customers finding you.', es: 'SEO local real, manejado por mí — sin vueltas de agencia, sin promesas vacías, sin contratos largos. Solo más de los clientes correctos encontrándote.' },
    title: 'David — Local SEO in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I personally handle local SEO for Sonoma County businesses. No agency runaround, just more of the right customers finding you.",
    noindex: true,
  },
  'redesign': {
    eyebrow: { en: 'Website Redesign · Santa Rosa, CA', es: 'Rediseño web · Santa Rosa, CA' },
    h1: { en: `Hi, I'm David — I'll <span class="nv-grad">redesign your website</span>, personally.`, es: `Hola, soy David — <span class="nv-grad">rediseñaré tu sitio web</span>, personalmente.` },
    sub: { en: "Already have a site that's slow, dated, or just not bringing in customers? Start with a free mockup of the rebuild — I design, build, and host it, and you only pay once it's live and you love it. Yours forever.", es: '¿Ya tienes un sitio lento, anticuado o que simplemente no te trae clientes? Empieza con un mockup gratis de la reconstrucción — yo lo diseño, construyo y alojo, y solo pagas cuando está en vivo y te encanta. Tuyo para siempre.' },
    title: 'David — Website Redesign in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I personally redesign and rebuild outdated, slow, or underperforming websites into custom sites that win customers. Live in 1 week.",
    noindex: true,
  },
  'custom-builds': {
    eyebrow: { en: 'Custom Builds & Web Apps · Sonoma County', es: 'Desarrollos a medida y web apps · Sonoma County' },
    h1: { en: `Hi, I'm David — I'll build the <span class="nv-grad">custom features</span> your business needs.`, es: `Hola, soy David — construiré las <span class="nv-grad">funciones a medida</span> que tu negocio necesita.` },
    sub: { en: "Online stores, booking systems, client portals, dashboards — I build the functionality to fit exactly how you work. Free scoping, a written quote before you owe a cent, and you own everything.", es: 'Tiendas en línea, sistemas de reservas, portales de clientes, paneles — construyo la funcionalidad a la medida de cómo trabajas. Alcance gratis, una cotización por escrito antes de que debas un centavo, y todo es tuyo.' },
    title: 'David — Custom Builds & Web Apps in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom functionality (stores, booking, portals, dashboards) for Sonoma County businesses that need their site to actually work.",
    noindex: true,
  },
  'automation': {
    eyebrow: { en: 'Integrations & Automation · Sonoma County', es: 'Integraciones y automatización · Sonoma County' },
    h1: { en: `Hi, I'm David — I'll <span class="nv-grad">connect and automate</span> your business tools.`, es: `Hola, soy David — <span class="nv-grad">conectaré y automatizaré</span> las herramientas de tu negocio.` },
    sub: { en: "I connect your website to the tools you already use — CRM, calendar, payments, POS — and automate the busywork. Free scoping, a written quote before you owe a cent, and you own everything.", es: 'Conecto tu sitio con las herramientas que ya usas — CRM, calendario, pagos, punto de venta — y automatizo el trabajo repetitivo. Alcance gratis, una cotización por escrito antes de que debas un centavo, y todo es tuyo.' },
    title: 'David — Integrations & Automation in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I connect your website to your CRM, calendar, payments and POS, and automate the busywork. The thing template shops can't do.",
    noindex: true,
  },
};

/* Offer-angle ad pages — test the HOOK (price/guarantee), not the service. */
const OFFER_ANGLES = {
  'zero-down': {
    eyebrow: { en: '$0 Down · Sonoma County', es: '$0 inicial · Sonoma County' },
    h1: { en: `Hi, I'm David — <span class="nv-grad">$0 upfront</span> for your new website.`, es: `Hola, soy David — <span class="nv-grad">$0 por adelantado</span> por tu nuevo sitio web.` },
    sub: { en: "No upfront cost, no risk. Start with a free mockup — I design, build, and host your whole site, and you only pay once it's live and you love it. Yours forever.", es: 'Sin costo inicial, sin riesgo. Empieza con un mockup gratis — yo diseño, construyo y alojo todo tu sitio, y solo pagas cuando está en vivo y te encanta. Tuyo para siempre.' },
    title: "David — Websites With $0 Upfront in Sonoma County | Nuvion Solutions",
    desc: "I'm David — $0 upfront for a custom website. Free mockup first, and you only pay once it's live and you love it. Yours forever.",
    noindex: true,
  },
  'guarantee': {
    eyebrow: { en: '1-Week Guarantee · Sonoma County', es: 'Garantía de 1 semana · Sonoma County' },
    h1: { en: `Hi, I'm David — your site's <span class="nv-grad">live in 1 week</span>, or you don't pay.`, es: `Hola, soy David — tu sitio está <span class="nv-grad">en vivo en 1 semana</span>, o no pagas.` },
    sub: { en: "Start with a free mockup, then I design, build, and host your custom site — live within 1 week of your content, guaranteed. You only pay once it's live and you love it, and it's yours forever.", es: 'Empieza con un mockup gratis, luego diseño, construyo y alojo tu sitio personalizado — en vivo dentro de 1 semana de tu contenido, garantizado. Solo pagas cuando está en vivo y te encanta, y es tuyo para siempre.' },
    title: "David — 1-Week Website Guarantee in Sonoma County | Nuvion Solutions",
    desc: "I'm David — your custom website is live in 1 week or you don't pay. Designed one-on-one, and it's yours to keep.",
    noindex: true,
  },
  'business': {
    eyebrow: { en: 'For established businesses · Sonoma County', es: 'Para empresas establecidas · Sonoma County' },
    h1: { en: `Hi, I'm David — I build the <span class="nv-grad">systems</span> bigger businesses run on.`, es: `Hola, soy David — construyo los <span class="nv-grad">sistemas</span> que las empresas más grandes usan.` },
    sub: { en: "Custom builds, integrations, and automation, done right — you work directly with me, get answers the same day, and own everything. A written quote before you owe a cent, no runaround.", es: 'Desarrollos a medida, integraciones y automatización, bien hechos — trabajas directamente conmigo, obtienes respuestas el mismo día y todo es tuyo. Una cotización por escrito antes de que debas un centavo, sin vueltas.' },
    title: "David — Custom Builds & Systems for Businesses in Sonoma County | Nuvion Solutions",
    desc: "I'm David — I build custom web apps, integrations, and automation for established Sonoma County businesses. Work directly with me, and own everything.",
    noindex: true,
  },
};

const INDUSTRY_ANGLES = {
  'restaurants': {
    eyebrow: { en: 'Restaurant Web Design · Sonoma County', es: 'Diseño web para restaurantes · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that fill <span class="nv-grad">restaurant tables</span>.`, es: `Hola, soy David — construyo sitios web que llenan <span class="nv-grad">mesas de restaurantes</span>.` },
    sub: { en: "Menus that make people hungry, one-tap reservations, and Google visibility — designed by me. Start with a free mockup and only pay once it's live and you love it.", es: 'Menús que dan hambre, reservaciones en un toque y visibilidad en Google — diseñado por mí. Empieza con un mockup gratis y solo paga cuando está en vivo y te encanta.' },
    title: 'David — Restaurant Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom websites for restaurants that fill tables: mouth-watering menus, one-tap reservations, and Google visibility.",
    noindex: true,
  },
  'contractors': {
    eyebrow: { en: 'Web Design for Contractors · Sonoma County', es: 'Diseño web para contratistas · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that book <span class="nv-grad">more jobs</span>.`, es: `Hola, soy David — construyo sitios web que consiguen <span class="nv-grad">más trabajos</span>.` },
    sub: { en: "Tap-to-call, quote forms, and local SEO so homeowners find you first — built by me. Start with a free mockup and only pay once it's live and you love it.", es: 'Llamada en un toque, formularios de cotización y SEO local para que los dueños de casa te encuentren primero — hecho por mí. Empieza con un mockup gratis y solo paga cuando está en vivo y te encanta.' },
    title: 'David — Web Design for Contractors in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom websites for contractors and home-services pros that book more jobs: tap-to-call, quote forms, and local SEO.",
    noindex: true,
  },
  'med-spas': {
    eyebrow: { en: 'Med Spa Web Design · Sonoma County', es: 'Diseño web para spas médicos · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that book <span class="nv-grad">more appointments</span>.`, es: `Hola, soy David — construyo sitios web que agendan <span class="nv-grad">más citas</span>.` },
    sub: { en: "A luxe, calming site with online booking that turns browsers into clients — designed by me. Start with a free mockup and only pay once it's live and you love it.", es: 'Un sitio elegante y relajante con reservas en línea que convierte visitantes en clientes — diseñado por mí. Empieza con un mockup gratis y solo paga cuando está en vivo y te encanta.' },
    title: 'David — Med Spa Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom websites for med spas that book more appointments: a luxe, calming design with online booking.",
    noindex: true,
  },
  'real-estate': {
    eyebrow: { en: 'Real Estate Web Design · Sonoma County', es: 'Diseño web para bienes raíces · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that win <span class="nv-grad">more listings</span>.`, es: `Hola, soy David — construyo sitios web que ganan <span class="nv-grad">más propiedades</span>.` },
    sub: { en: "A polished personal-brand site that makes sellers trust you before you meet — built by me. Start with a free mockup and only pay once it's live and you love it.", es: 'Un sitio de marca personal pulido que hace que los vendedores confíen en ti antes de conocerte — hecho por mí. Empieza con un mockup gratis y solo paga cuando está en vivo y te encanta.' },
    title: 'David — Real Estate Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build polished personal-brand websites for real estate agents that win more listings and build trust before you meet.",
    noindex: true,
  },
};

function resolveAngle(variant) {
  if (variant && SERVICE_ANGLES[variant]) return SERVICE_ANGLES[variant];
  if (variant && OFFER_ANGLES[variant]) return OFFER_ANGLES[variant];
  if (variant && INDUSTRY_ANGLES[variant]) return INDUSTRY_ANGLES[variant];
  if (variant && LOCAL_TOWNS[variant]) {
    const town = LOCAL_TOWNS[variant];
    return {
      eyebrow: { en: `Web Design · ${town}, CA`, es: `Diseño web · ${town}, CA` },
      h1: { en: `Hi, I'm David — I build websites for <span class="nv-grad">${town}</span> businesses.`, es: `Hola, soy David — construyo sitios web para negocios de <span class="nv-grad">${town}</span>.` },
      sub: { en: `I'm right here in Sonoma County. Start with a free mockup of your ${town} business site — I design, build, and host it, and you only pay once it's live and you love it. Yours forever.`, es: `Estoy aquí mismo en Sonoma County. Empieza con un mockup gratis del sitio de tu negocio en ${town} — yo lo diseño, construyo y alojo, y solo pagas cuando está en vivo y te encanta. Tuyo para siempre.` },
      title: `David — Web Design in ${town}, CA | Nuvion Solutions`,
      desc: `I'm David — I personally design and build custom websites for ${town} businesses. Same-day answers, live in 1 week, and you own it.`,
      noindex: true,
    };
  }
  return variant ? { ...DEFAULT_ANGLE, noindex: true } : DEFAULT_ANGLE;
}

export default function AboutPage() {
  useReveal();
  const { t, lang } = useLang();
  const { variant } = useParams();
  const angle = resolveAngle(variant);
  const formSource = variant ? `david_${variant}` : 'david';
  const works = [
    { img: workCalegal, name: 'California Legal Document Excellence', cat: t('Legal · Sonoma County', 'Legal · Sonoma County'), result: t('A lead-gen site with same-day intake — turns searches into booked consults.', 'Un sitio de captación con admisión el mismo día — convierte búsquedas en consultas agendadas.'), url: 'https://calegaldocumenthelp.com' },
    { img: workDumolin, name: 'DuMolin Community Living', cat: t('Care Facilities · Santa Rosa', 'Centros de cuidado · Santa Rosa'), result: t('Six licensed care homes, unified under one modern, multi-location site.', 'Seis hogares de cuidado con licencia, unidos en un sitio moderno de varias ubicaciones.'), url: 'https://dumolin-homes.vercel.app' },
    { img: workFloors, name: 'Floors for Sonoma', cat: t('Flooring Studio · Sonoma', 'Estudio de pisos · Sonoma'), result: t('An editorial, high-end site for a Sonoma Valley flooring studio.', 'Un sitio editorial y de alta gama para un estudio de pisos de Sonoma Valley.'), url: 'https://floors-for-sonoma.vercel.app' },
    { img: workDenise, name: 'Denise Kramer Weddings', cat: t('Weddings · Wine Country', 'Bodas · Wine Country'), result: t('An elegant wedding-planning site for Sonoma & Napa couples.', 'Un elegante sitio de planificación de bodas para parejas de Sonoma y Napa.'), url: 'https://demo-wedding-iota.vercel.app' },
    { img: workBayarea, name: 'Bay Area 2nd Mom', cat: t('Nanny Agency · Bay Area', 'Agencia de niñeras · Bay Area'), result: t('40+ years of trusted care, freshly branded online.', '40+ años de cuidado confiable, con una marca renovada en línea.'), url: 'https://nanny-agency-website-alpha.vercel.app' },
    { img: workArpkd, name: 'ARPKD / CHF Alliance', cat: t('Nonprofit · National', 'Sin fines de lucro · Nacional'), result: t('A 25-year rare-disease nonprofit, fully modernized.', 'Una organización de enfermedades raras de 25 años, totalmente modernizada.'), url: '' },
  ];
  const concepts = [
    { img: workSupercars, name: 'Velocity Motors', cat: t('Concept · Automotive', 'Concepto · Automotriz'), result: t('A bold automotive brand — motion, depth, and drama.', 'Una marca automotriz audaz — movimiento, profundidad y dramatismo.'), url: 'https://supercars.nuvion-solutions.com' },
    { img: workAviation, name: 'APEX Private Aviation', cat: t('Concept · Luxury Aviation', 'Concepto · Aviación de lujo'), result: t('A cinematic concept for a private-jet brand.', 'Un concepto cinematográfico para una marca de jets privados.'), url: 'https://aviation.nuvion-solutions.com' },
    { img: workMedspa, name: 'Lumina Aesthetics', cat: t('Concept · Med Spa', 'Concepto · Med Spa'), result: t('A luxe, calming concept for a modern med spa.', 'Un concepto lujoso y relajante para un med spa moderno.'), url: 'https://medspa.nuvion-solutions.com' },
  ];
  const faqs = [
    [t('Is the mockup really free?', '¿El mockup es realmente gratis?'), t('Yes — 100% free, no card, no obligation. I design a real mockup of your site so you can see it before you decide anything.', 'Sí — 100% gratis, sin tarjeta, sin obligación. Diseño un mockup real de tu sitio para que lo veas antes de decidir nada.')],
    [t("What's the catch?", '¿Cuál es el truco?'), t("There isn't one. I only get paid if you love what I build and want it live. If it's not for you, we part as friends and you owe nothing.", 'No hay ninguno. Solo me pagan si te encanta lo que construyo y lo quieres en vivo. Si no es para ti, quedamos como amigos y no debes nada.')],
    [t('When do I actually pay?', '¿Cuándo pago en realidad?'), t("Only once your site is live and you're happy with it. Nothing upfront, no deposit.", 'Solo cuando tu sitio está en vivo y estás contento con él. Nada por adelantado, sin depósito.')],
    [t('How fast is it?', '¿Qué tan rápido es?'), t("You'll see your free mockup within a few days, and once we're rolling, your site goes live in about a week.", 'Verás tu mockup gratis en unos días, y una vez en marcha, tu sitio se publica en aproximadamente una semana.')],
    [t('Do I own my website?', '¿Soy dueño de mi sitio web?'), t("Yes — it's yours to keep. I host and look after it for you, and you're never locked in.", 'Sí — es tuyo. Yo lo alojo y lo cuido por ti, y nunca quedas atrapado en un contrato.')],
    [t('How do I get started?', '¿Cómo empiezo?'), t("Just tell me a bit about your business below, or text me. I'll get to work on your free mockup — same-day reply.", 'Solo cuéntame un poco sobre tu negocio abajo, o escríbeme. Empezaré con tu mockup gratis — respuesta el mismo día.')],
  ];
  return (
    <>
      <title>{angle.title}</title>
      <meta name="description" content={angle.desc} />
      <link rel="canonical" href={`https://www.nuvion-solutions.com/david${variant ? '/' + variant : ''}`} />
      {angle.noindex && <meta name="robots" content="noindex, follow" />}
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + ABOUT_CSS }} />
      <MiniNav />
      <main>
        {/* HERO */}
        <section className="ab-hero"><div className="nv-wrap ab-hero-in">
          <div className="rv">
            <span className="nv-eyebrow"><span className="dot" />{angle.eyebrow[lang] || angle.eyebrow.en}</span>
            <h1 className="ab-h1" dangerouslySetInnerHTML={{ __html: angle.h1[lang] || angle.h1.en }} />
            <p className="sub">{angle.sub[lang] || angle.sub.en}</p>
            <div className="ab-cta">
              <a href={`tel:${DAVID_PHONE.tel}`} className="nv-btn nv-btn-ghost nv-btn-lg" onClick={() => trackCall({ source: 'david_hero' })}>{t('Call / text me', 'Llámame')}</a>
            </div>
            <div className="ab-guar">{t(<>⚡ Free mockup —&nbsp;<b>built before you pay</b></>, <>⚡ Mockup gratis —&nbsp;<b>construido antes de pagar</b></>)}</div>
            <div className="ab-ticks">
              <span><Check /> {t('Pay only when you love it', 'Pagas solo cuando te encanta')}</span>
              <span><Check /> {t('Yours forever', 'Tuyo para siempre')}</span>
              <span><Check /> {t('Sonoma County local', 'Local de Sonoma County')}</span>
            </div>
          </div>
          <div className="ab-heroform rv d1">
            <div className="hf-head">
              <img src={davidHero} alt="David Prudhomme, founder of Nuvion Solutions" />
              <div>
                <b>{t('Start your free mockup', 'Empieza tu mockup gratis')}</b>
                <div className="st">★★★★★ <span className="sd">· {t('replies same-day', 'responde el mismo día')}</span></div>
              </div>
            </div>
            <IntakeForm source={formSource} />
          </div>
        </div></section>

        {/* PROOF STRIP */}
        <div className="ab-strip"><div className="nv-wrap ab-strip-in">
          <span><span className="ab-stars" style={{ fontSize: '1rem' }}>★★★★★</span> {t('Loved by clients', 'Querido por clientes')}</span>
          <span><span className="ic"><IconWeb /></span> {t('100+ sites designed', '100+ sitios diseñados')}</span>
          <span><span className="ic"><IconSeo /></span> {t('You work with me directly', 'Trabajas directamente conmigo')}</span>
          <span><span className="ic"><IconMkt /></span> {t('Built to win you customers', 'Hecho para ganarte clientes')}</span>
        </div></div>

        {/* WHAT I DO */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('What I do for you', 'Lo que hago por ti')}</div><h2 className="nv-h2">{t('Everything, handled by one person who cares', 'Todo, manejado por una persona que se preocupa')}</h2></div>
          <div className="ab-do">
            <div className="ab-do-card rv"><div className="ic"><IconWeb /></div><h3>{t('Web Design', 'Diseño web')}</h3><p>{t('Custom, high-converting websites designed around your brand and built to turn visitors into customers.', 'Sitios web personalizados y de alta conversión, diseñados en torno a tu marca y hechos para convertir visitantes en clientes.')}</p></div>
            <div className="ab-do-card rv d1"><div className="ic"><IconSeo /></div><h3>SEO</h3><p>{t('Get found on Google by the right local customers — ongoing, month after month.', 'Que te encuentren en Google los clientes locales indicados — mes tras mes.')}</p></div>
            <div className="ab-do-card rv d2"><div className="ic"><IconMkt /></div><h3>{t('Marketing & AI', 'Marketing e IA')}</h3><p>{t("Reviews, follow-up, social, and AI tools when you're ready to scale — all optional, all handled.", 'Reseñas, seguimiento, redes sociales y herramientas de IA cuando estés listo para crecer — todo opcional, todo manejado.')}</p></div>
          </div>
        </div></section>

        {/* MY WORK */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('My work', 'Mi trabajo')}</div><h2 className="nv-h2">{t('Real sites for real local businesses', 'Sitios reales para negocios locales reales')}</h2><p className="nv-lead">{t("A few I've designed and built — tap any one to see it live.", 'Algunos que he diseñado y construido — toca cualquiera para verlo en vivo.')}</p></div>
          <div className="ab-work">
            {works.map((w, i) => {
              const inner = (
                <>
                  <div className="ab-work-bar"><i/><i/><i/></div>
                  <div className="ab-work-shot"><img src={w.img} alt={`${w.name} website`} loading="lazy" />{w.url && <span className="ab-work-live">{t('View live', 'Ver en vivo')} ↗</span>}</div>
                  <div className="ab-work-meta"><h4>{w.name}</h4><span className="ab-work-chip">{w.cat}</span><p className="ab-work-result">{w.result}</p></div>
                </>
              );
              return w.url
                ? <a className={`ab-work-card rv d${(i % 3) + 1}`} key={w.name} href={w.url} target="_blank" rel="noopener noreferrer">{inner}</a>
                : <div className={`ab-work-card rv d${(i % 3) + 1}`} key={w.name}>{inner}</div>;
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 34 }}><Link to="/work" className="nv-btn nv-btn-ghost">{t('See all my work', 'Ver todo mi trabajo')} <Arrow /></Link></div>
        </div></section>

        {/* DESIGN RANGE (concept builds) */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Design range', 'Rango de diseño')}</div><h2 className="nv-h2">{t('A taste of what I can build', 'Una muestra de lo que puedo construir')}</h2><p className="nv-lead">{t('Concept builds — showing the range and polish I can bring to yours. Tap any to explore.', 'Proyectos conceptuales — muestran el rango y la calidad que puedo aportar al tuyo. Toca cualquiera para explorar.')}</p></div>
          <div className="ab-work">
            {concepts.map((w, i) => (
              <a className={`ab-work-card rv d${(i % 3) + 1}`} key={w.name} href={w.url} target="_blank" rel="noopener noreferrer">
                <div className="ab-work-bar"><i/><i/><i/></div>
                <div className="ab-work-shot"><img src={w.img} alt={`${w.name} concept website`} loading="lazy" /><span className="ab-work-live">{t('View live', 'Ver en vivo')} ↗</span></div>
                <div className="ab-work-meta"><h4>{w.name}</h4><span className="ab-work-chip">{w.cat}</span><p className="ab-work-result">{w.result}</p></div>
              </a>
            ))}
          </div>
        </div></section>

        {/* REVIEW */}
        <section className="nv-sec"><div className="nv-wrap"><div className="ab-quote rv">
          <div className="mk">“</div>
          <p>{t('David exceeded my expectations. Quick turnaround, easy access to the site, and — most importantly — he designed exactly what I had in mind.', 'David superó mis expectativas. Entrega rápida, acceso fácil al sitio y — lo más importante — diseñó exactamente lo que tenía en mente.')}</p>
          <div className="ab-stars">★★★★★</div>
          <div className="who" style={{ marginTop: 14 }}><div className="av">AA</div><div className="nm"><b>Angela Ames</b><span>{t('Web Design Client', 'Cliente de diseño web')}</span></div></div>
        </div></div></section>

        {/* ABOUT ME STORY */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('My story', 'Mi historia')}</div><h2 className="nv-h2">{t('Why I do this', 'Por qué hago esto')}</h2></div>
          <div className="ab-story rv">
            <p>{t('I started Nuvion because I was tired of watching small businesses get burned — overcharged for a website, then left on read the moment they needed a change.', 'Empecé Nuvion porque estaba cansado de ver a los pequeños negocios salir perjudicados — cobrándoles de más por un sitio web y luego ignorándolos apenas necesitaban un cambio.')}</p>
            <p>{t(<><strong>I do the opposite.</strong> I personally design and build every site, I answer the same day, and I stay with you long after launch. When you need a phone number changed or a page added, you text me — and it's done, not stuck in a ticket queue.</>, <><strong>Yo hago lo contrario.</strong> Diseño y construyo cada sitio personalmente, respondo el mismo día y me quedo contigo mucho después del lanzamiento. Cuando necesites cambiar un número o agregar una página, me escribes — y queda hecho, no atrapado en una fila de tickets.</>)}</p>
            <p>{t("I'm based in Santa Rosa and work with businesses across Sonoma County and beyond. My goal is simple: build you a website that actually wins you customers, and be the kind of partner you'd recommend to a friend.", 'Estoy en Santa Rosa y trabajo con negocios en todo Sonoma County y más allá. Mi meta es simple: construirte un sitio web que de verdad te gane clientes y ser el tipo de aliado que le recomendarías a un amigo.')}</p>
            <div className="ab-sign">— David Prudhomme</div>
          </div>
        </div></section>

        {/* WHY WORK WITH ME */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Why work with me', 'Por qué trabajar conmigo')}</div><h2 className="nv-h2">{t('What you actually get', 'Lo que realmente obtienes')}</h2></div>
          <div className="ab-why">
            {[
              [t('A real person who owns it', 'Una persona real a cargo'), t('You work directly with me — accountable for your results, start to finish.', 'Trabajas directamente conmigo — responsable de tus resultados, de principio a fin.')],
              [t('Same-day answers', 'Respuestas el mismo día'), t('No ghosting, no weeks-long waits. I respond the same day, every time.', 'Sin desapariciones ni esperas de semanas. Respondo el mismo día, siempre.')],
              [t('Until it’s exactly right', 'Hasta que quede perfecto'), t('We keep going until you’re genuinely happy. And it’s yours to keep.', 'Seguimos hasta que estés realmente contento. Y es tuyo para siempre.')],
              [t('Built to get customers', 'Hecho para conseguir clientes'), t('Fast, mobile-first, SEO-ready — designed to turn visitors into paying clients.', 'Rápido, mobile-first y listo para SEO — diseñado para convertir visitantes en clientes que pagan.')],
            ].map(([title, d]) => (
              <div className="ab-why-item rv" key={title}><span className="ck"><Check /></span><div><b>{title}</b><span>{d}</span></div></div>
            ))}
          </div>
        </div></section>

        {/* FAQ */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Common questions', 'Preguntas comunes')}</div><h2 className="nv-h2">{t('The free mockup, explained', 'El mockup gratis, explicado')}</h2></div>
          <div className="ab-faq">
            {faqs.map(([q, a], i) => (
              <div className="ab-faq-item rv" key={i}><h4><span>Q.</span>{q}</h4><p>{a}</p></div>
            ))}
          </div>
        </div></section>

        {/* CONTACT / INTAKE */}
        <section className="nv-sec" id="contact" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="ab-contact rv"><div className="ab-contact-in">
            <div>
              <h2>{t('Get your free mockup', 'Recibe tu mockup gratis')}</h2>
              <p className="lead">{t("Tell me a bit about your business and I'll design a free mockup of your new site — no cost, no pressure. You only pay if you love it and want it live.", 'Cuéntame un poco sobre tu negocio y diseñaré un mockup gratis de tu nuevo sitio — sin costo, sin presión. Solo pagas si te encanta y lo quieres en vivo.')}</p>
              <div className="ab-call">
                <a className="ab-callbtn" href={`tel:${DAVID_PHONE.tel}`} onClick={() => trackCall({ source: 'david_contact' })}><span>📞</span><span>{DAVID_PHONE.display}<small>{t('Call or text me directly', 'Llámame o escríbeme directamente')}</small></span></a>
              </div>
              <div className="note">{t('Your info goes straight to my inbox — never shared.', 'Tu información llega directo a mi correo — nunca se comparte.')}</div>
            </div>
            <IntakeForm source={formSource} />
          </div></div>
        </div></section>
      </main>
      <StickyCTA />
      <Footer phone={DAVID_PHONE} minimal />
    </>
  );
}
