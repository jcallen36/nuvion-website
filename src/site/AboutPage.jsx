import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_CSS, Footer, useReveal, Arrow, Check, IconWeb, IconSeo, IconMkt } from './shared.jsx';
import { useLang, LangToggle } from './i18n.jsx';
import { trackLead, trackCall } from '../analytics.js';
import { LOCAL_TOWNS } from './LocalPage.jsx';
import davidHero from '../assets/team/david-hero.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import workDumolin from '../assets/work/dumolin.webp';
import workCalegal from '../assets/work/calegal.webp';
import workArpkd from '../assets/work/arpkd.webp';

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
.ab-badge.b1{top:24px;left:-14px}.ab-badge.b2{bottom:26px;right:-14px}
.ab-stars{color:#F5A623;letter-spacing:1px;font-size:1.1rem}
.ab-pulse{width:9px;height:9px;border-radius:50%;background:#22C55E;box-shadow:0 0 0 0 rgba(34,197,94,.5);animation:ab-pulse 2s infinite}
@keyframes ab-pulse{70%{box-shadow:0 0 0 9px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
@media(max-width:560px){.ab-badge{display:none}}

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
@media(min-width:760px){.ab-work{grid-template-columns:repeat(3,1fr)}}
.ab-work-card{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff;box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s}
.ab-work-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.ab-work-bar{height:26px;background:#F1F4F9;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:5px;padding:0 10px}
.ab-work-bar i{width:7px;height:7px;border-radius:50%;background:#CBD4E1}
.ab-work-shot{height:172px;overflow:hidden}
.ab-work-shot img{width:100%;height:100%;object-fit:cover;object-position:top}
.ab-work-card h4{color:var(--ink);font-size:1rem;padding:14px 16px}

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
.ab-form input,.ab-form select,.ab-form textarea{width:100%;font-family:var(--font);font-size:.95rem;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 13px;outline:none;transition:border-color .15s,box-shadow .15s}
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
      if (r.ok && j.ok) { setStatus('done'); trackLead({ source, niche: form.niche || 'unspecified' }); }
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
    <form className="ab-form" onSubmit={submit}>
      <div className="row two" style={{ marginBottom: 14 }}>
        <div><label>{t('Your name', 'Tu nombre')}</label><input value={form.name} onChange={set('name')} required placeholder={t('Jane Smith', 'Juana Pérez')} /></div>
        <div><label>{t('Phone', 'Teléfono')}</label><input value={form.phone} onChange={set('phone')} placeholder="(707) 555-1234" /></div>
      </div>
      <div className="fld"><label>{t('Email', 'Correo electrónico')}</label><input type="email" value={form.email} onChange={set('email')} placeholder={t('you@business.com', 'tu@negocio.com')} /></div>
      <div className="fld"><label>{t('What do you need help with?', '¿En qué necesitas ayuda?')}</label>
        <select value={form.niche} onChange={set('niche')}>
          <option value="">{t('Select one…', 'Selecciona una…')}</option>
          <option>{t('A new website', 'Un sitio web nuevo')}</option>
          <option>{t('Redesign my current site', 'Rediseñar mi sitio actual')}</option>
          <option>{t('SEO / get found on Google', 'SEO / que me encuentren en Google')}</option>
          <option>{t('Marketing & growth', 'Marketing y crecimiento')}</option>
          <option>{t('AI tools / automation', 'Herramientas de IA / automatización')}</option>
          <option>{t('Something else', 'Otra cosa')}</option>
        </select>
      </div>
      <div className="fld"><label>{t('Tell me a bit about your project', 'Cuéntame un poco sobre tu proyecto')}</label><textarea value={form.message} onChange={set('message')} placeholder={t("What's your business, and what are you hoping to get done?", '¿Cuál es tu negocio y qué te gustaría lograr?')} /></div>
      <button className="nv-btn nv-btn-primary submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('Sending…', 'Enviando…') : t('Send it to David', 'Enviárselo a David')} <Arrow />
      </button>
      {status === 'error' && <div className="msg err">{err}</div>}
      <div className="msg" style={{ color: 'var(--muted)', fontWeight: 500 }}>{t('Prefer to talk? Call or text me directly — I answer the same day.', '¿Prefieres hablar? Llámame o escríbeme directamente — respondo el mismo día.')}</div>
    </form>
  );
}

/* ── Ad-angle configs: /david (default) + /david/:variant ──────────────
   The default page is indexable; every ad variant is noindex so paid landing
   pages never compete with or duplicate the organic site. Hero copy is
   message-matched to the ad; everything else (proof, work, form) stays. */
const DEFAULT_ANGLE = {
  eyebrow: { en: 'Co-founder · Santa Rosa, CA', es: 'Cofundador · Santa Rosa, CA' },
  h1: { en: `Hi, I'm David — I'll build your website <span class="nv-grad">personally</span>.`, es: `Hola, soy David — construiré tu sitio web <span class="nv-grad">personalmente</span>.` },
  sub: { en: "You won't get passed to a sales rep or an offshore team. I design and build every site myself, answer the same day, and stick with you long after launch.", es: 'No te pasarán con un vendedor ni con un equipo en el extranjero. Yo diseño y construyo cada sitio, respondo el mismo día y me quedo contigo mucho después del lanzamiento.' },
  title: 'Meet David — Web Designer in Sonoma County | Nuvion',
  desc: "I'm David Prudhomme — I personally design and build websites for Sonoma County businesses, answer same-day, and stay with you after launch. See my work.",
  noindex: false,
};

const SERVICE_ANGLES = {
  'web-design': {
    eyebrow: { en: 'Web Design · Santa Rosa, CA', es: 'Diseño web · Santa Rosa, CA' },
    h1: { en: `Hi, I'm David — I'll design your <span class="nv-grad">custom website</span>, personally.`, es: `Hola, soy David — diseñaré tu <span class="nv-grad">sitio web personalizado</span>, personalmente.` },
    sub: { en: "No template, no bot. I design and build every site myself, one-on-one, to your exact vision — live in a week, and it's yours to keep.", es: 'Sin plantilla, sin bot. Diseño y construyo cada sitio yo mismo, uno a uno, según tu visión exacta — en vivo en una semana, y es tuyo.' },
    title: 'David — Custom Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I personally design and build custom, high-converting websites for local businesses. Live in 1 week, or you don't pay.",
    noindex: true,
  },
  'seo': {
    eyebrow: { en: 'Local SEO · Santa Rosa, CA', es: 'SEO local · Santa Rosa, CA' },
    h1: { en: `Hi, I'm David — I'll get your business <span class="nv-grad">found on Google</span>.`, es: `Hola, soy David — haré que tu negocio <span class="nv-grad">aparezca en Google</span>.` },
    sub: { en: 'Real, local SEO handled by me personally — no agency runaround, no empty promises. Just more of the right customers finding you.', es: 'SEO local real, manejado por mí — sin vueltas de agencia, sin promesas vacías. Solo más de los clientes correctos encontrándote.' },
    title: 'David — Local SEO in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I personally handle local SEO for Sonoma County businesses. No agency runaround, just more of the right customers finding you.",
    noindex: true,
  },
  'redesign': {
    eyebrow: { en: 'Website Redesign · Santa Rosa, CA', es: 'Rediseño web · Santa Rosa, CA' },
    h1: { en: `Hi, I'm David — I'll <span class="nv-grad">redesign your website</span>, personally.`, es: `Hola, soy David — <span class="nv-grad">rediseñaré tu sitio web</span>, personalmente.` },
    sub: { en: "Already have a site that's slow, dated, or just not bringing in customers? I'll rebuild it into something you're proud of — one-on-one, live in a week, and you own it.", es: '¿Ya tienes un sitio lento, anticuado o que simplemente no te trae clientes? Lo reconstruiré en algo de lo que estés orgulloso — uno a uno, en vivo en una semana, y es tuyo.' },
    title: 'David — Website Redesign in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I personally redesign and rebuild outdated, slow, or underperforming websites into custom sites that win customers. Live in 1 week.",
    noindex: true,
  },
  'custom-builds': {
    eyebrow: { en: 'Custom Builds & Web Apps · Sonoma County', es: 'Desarrollos a medida y web apps · Sonoma County' },
    h1: { en: `Hi, I'm David — I'll build the <span class="nv-grad">custom features</span> your business needs.`, es: `Hola, soy David — construiré las <span class="nv-grad">funciones a medida</span> que tu negocio necesita.` },
    sub: { en: "Online stores, booking systems, client portals, dashboards — when your site needs to do more than look good, I build the functionality to fit exactly how you work.", es: 'Tiendas en línea, sistemas de reservas, portales de clientes, paneles — cuando tu sitio necesita hacer más que verse bien, construyo la funcionalidad a la medida de cómo trabajas.' },
    title: 'David — Custom Builds & Web Apps in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom functionality (stores, booking, portals, dashboards) for Sonoma County businesses that need their site to actually work.",
    noindex: true,
  },
  'automation': {
    eyebrow: { en: 'Integrations & Automation · Sonoma County', es: 'Integraciones y automatización · Sonoma County' },
    h1: { en: `Hi, I'm David — I'll <span class="nv-grad">connect and automate</span> your business tools.`, es: `Hola, soy David — <span class="nv-grad">conectaré y automatizaré</span> las herramientas de tu negocio.` },
    sub: { en: "I connect your website to the tools you already use — CRM, calendar, payments, POS — and automate the busywork, so nothing falls through the cracks and you stop doing the same thing twice.", es: 'Conecto tu sitio con las herramientas que ya usas — CRM, calendario, pagos, punto de venta — y automatizo el trabajo repetitivo, para que nada se pierda y dejes de hacer lo mismo dos veces.' },
    title: 'David — Integrations & Automation in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I connect your website to your CRM, calendar, payments and POS, and automate the busywork. The thing template shops can't do.",
    noindex: true,
  },
};

/* Offer-angle ad pages — test the HOOK (price/guarantee), not the service. */
const OFFER_ANGLES = {
  'zero-down': {
    eyebrow: { en: '$0 Down · Sonoma County', es: '$0 inicial · Sonoma County' },
    h1: { en: `Hi, I'm David — get a custom website for <span class="nv-grad">$0 down</span>.`, es: `Hola, soy David — obtén un sitio web personalizado con <span class="nv-grad">$0 inicial</span>.` },
    sub: { en: "No big upfront cost. I'll design and build your site for as little as $49/mo — hosting, care and updates included — and it's yours to keep after 18 months. Live in a week.", es: 'Sin gran costo inicial. Diseño y construyo tu sitio desde $49/mes — hosting, cuidado y actualizaciones incluidos — y es tuyo para siempre después de 18 meses. En vivo en una semana.' },
    title: "David — Websites for $0 Down ($49/mo) in Sonoma County | Nuvion Solutions",
    desc: "I'm David — get a custom website for $0 down, from $49/mo (hosting & care included), yours to keep after 18 months. Live in 1 week.",
    noindex: true,
  },
  'guarantee': {
    eyebrow: { en: '1-Week Guarantee · Sonoma County', es: 'Garantía de 1 semana · Sonoma County' },
    h1: { en: `Hi, I'm David — your site's <span class="nv-grad">live in 1 week</span>, or you don't pay.`, es: `Hola, soy David — tu sitio está <span class="nv-grad">en vivo en 1 semana</span>, o no pagas.` },
    sub: { en: "I design and build your custom site myself, one-on-one, and it's live within a week of your content — guaranteed. Miss the deadline and you don't pay. And it's yours to keep.", es: 'Diseño y construyo tu sitio personalizado yo mismo, uno a uno, y está en vivo dentro de una semana de tu contenido — garantizado. Si no cumplo, no pagas. Y es tuyo.' },
    title: "David — 1-Week Website Guarantee in Sonoma County | Nuvion Solutions",
    desc: "I'm David — your custom website is live in 1 week or you don't pay. Designed one-on-one, and it's yours to keep.",
    noindex: true,
  },
  'business': {
    eyebrow: { en: 'For established businesses · Sonoma County', es: 'Para empresas establecidas · Sonoma County' },
    h1: { en: `Hi, I'm David — I build the <span class="nv-grad">systems</span> bigger businesses run on.`, es: `Hola, soy David — construyo los <span class="nv-grad">sistemas</span> que las empresas más grandes usan.` },
    sub: { en: "Custom builds, integrations, and automation, done right — you work directly with me, get answers the same day, and own everything. The technical depth of an agency, without the runaround.", es: 'Desarrollos a medida, integraciones y automatización, bien hechos — trabajas directamente conmigo, obtienes respuestas el mismo día y todo es tuyo. La profundidad técnica de una agencia, sin las vueltas.' },
    title: "David — Custom Builds & Systems for Businesses in Sonoma County | Nuvion Solutions",
    desc: "I'm David — I build custom web apps, integrations, and automation for established Sonoma County businesses. Work directly with me, and own everything.",
    noindex: true,
  },
};

const INDUSTRY_ANGLES = {
  'restaurants': {
    eyebrow: { en: 'Restaurant Web Design · Sonoma County', es: 'Diseño web para restaurantes · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that fill <span class="nv-grad">restaurant tables</span>.`, es: `Hola, soy David — construyo sitios web que llenan <span class="nv-grad">mesas de restaurantes</span>.` },
    sub: { en: 'Menus that make people hungry, one-tap reservations, and Google visibility — designed one-on-one by me, live in a week.', es: 'Menús que dan hambre, reservaciones en un toque y visibilidad en Google — diseñado uno a uno por mí, en vivo en una semana.' },
    title: 'David — Restaurant Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom websites for restaurants that fill tables: mouth-watering menus, one-tap reservations, and Google visibility.",
    noindex: true,
  },
  'contractors': {
    eyebrow: { en: 'Web Design for Contractors · Sonoma County', es: 'Diseño web para contratistas · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that book <span class="nv-grad">more jobs</span>.`, es: `Hola, soy David — construyo sitios web que consiguen <span class="nv-grad">más trabajos</span>.` },
    sub: { en: 'Tap-to-call, quote forms, and local SEO so homeowners in your area find you first — built by me, personally, live in a week.', es: 'Llamada en un toque, formularios de cotización y SEO local para que los dueños de casa de tu zona te encuentren primero — hecho por mí, en vivo en una semana.' },
    title: 'David — Web Design for Contractors in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom websites for contractors and home-services pros that book more jobs: tap-to-call, quote forms, and local SEO.",
    noindex: true,
  },
  'med-spas': {
    eyebrow: { en: 'Med Spa Web Design · Sonoma County', es: 'Diseño web para spas médicos · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that book <span class="nv-grad">more appointments</span>.`, es: `Hola, soy David — construyo sitios web que agendan <span class="nv-grad">más citas</span>.` },
    sub: { en: 'A luxe, calming site with online booking that turns browsers into clients — designed one-on-one by me, live in a week.', es: 'Un sitio elegante y relajante con reservas en línea que convierte visitantes en clientes — diseñado uno a uno por mí, en vivo en una semana.' },
    title: 'David — Med Spa Web Design in Sonoma County | Nuvion Solutions',
    desc: "I'm David — I build custom websites for med spas that book more appointments: a luxe, calming design with online booking.",
    noindex: true,
  },
  'real-estate': {
    eyebrow: { en: 'Real Estate Web Design · Sonoma County', es: 'Diseño web para bienes raíces · Sonoma County' },
    h1: { en: `Hi, I'm David — I build websites that win <span class="nv-grad">more listings</span>.`, es: `Hola, soy David — construyo sitios web que ganan <span class="nv-grad">más propiedades</span>.` },
    sub: { en: 'A polished personal-brand site that makes sellers trust you before you even meet — built by me, personally, live in a week.', es: 'Un sitio de marca personal pulido que hace que los vendedores confíen en ti antes de conocerte — hecho por mí, en vivo en una semana.' },
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
      sub: { en: `I'm right here in Sonoma County. I'll design your ${town} business a custom site, one-on-one, and answer the same day — live in a week, and you own it.`, es: `Estoy aquí mismo en Sonoma County. Diseñaré para tu negocio en ${town} un sitio personalizado, uno a uno, y respondo el mismo día — en vivo en una semana, y es tuyo.` },
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
  const works = [{ img: workDumolin, name: 'DuMolin Community Living' }, { img: workCalegal, name: 'CA Legal Document Excellence' }, { img: workArpkd, name: 'ARPKD / CHF Alliance' }];
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
              <a href="#contact" className="nv-btn nv-btn-primary nv-btn-lg">{t('Start your project', 'Comienza tu proyecto')} <Arrow /></a>
              <a href={`tel:${DAVID_PHONE.tel}`} className="nv-btn nv-btn-ghost nv-btn-lg" onClick={() => trackCall({ source: 'david_hero' })}>{t('Call / text me', 'Llámame')}</a>
            </div>
            <div className="ab-guar">{t(<>⚡ Your site live in&nbsp;<b>1 week</b>&nbsp;— or you don't pay</>, <>⚡ Tu sitio en vivo en&nbsp;<b>1 semana</b>&nbsp;— o no pagas</>)}</div>
            <div className="ab-ticks">
              <span><Check /> {t('Same-day answers', 'Respuestas el mismo día')}</span>
              <span><Check /> {t('No long-term contracts', 'Sin contratos a largo plazo')}</span>
              <span><Check /> {t('Sonoma County local', 'Local de Sonoma County')}</span>
            </div>
          </div>
          <div className="ab-photo rv d1">
            <img src={davidHero} alt="David Prudhomme, founder of Nuvion Solutions" />
            <div className="ab-badge b1"><div><span className="ab-stars">★★★★★</span><b style={{ marginTop: 2 }}>{t('5-star', '5★')}</b></div></div>
            <div className="ab-badge b2"><div className="ab-pulse" /><div><b>{t('Replies same-day', 'Responde el mismo día')}</b><span>{t('Every time', 'Siempre')}</span></div></div>
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
          <div className="nv-center rv"><div className="nv-kicker">{t('My work', 'Mi trabajo')}</div><h2 className="nv-h2">{t("A few businesses I've helped", 'Algunos negocios que he ayudado')}</h2></div>
          <div className="ab-work">
            {works.map((w, i) => (
              <div className={`ab-work-card rv d${i + 1}`} key={w.name}>
                <div className="ab-work-bar"><i/><i/><i/></div>
                <div className="ab-work-shot"><img src={w.img} alt={`${w.name} website`} loading="lazy" /></div>
                <h4>{w.name}</h4>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 34 }}><Link to="/work" className="nv-btn nv-btn-ghost">{t('See all my work', 'Ver todo mi trabajo')} <Arrow /></Link></div>
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
              [t('Until it’s exactly right', 'Hasta que quede perfecto'), t('We keep going until you’re genuinely happy. No long-term contracts.', 'Seguimos hasta que estés realmente contento. Sin contratos a largo plazo.')],
              [t('Built to get customers', 'Hecho para conseguir clientes'), t('Fast, mobile-first, SEO-ready — designed to turn visitors into paying clients.', 'Rápido, mobile-first y listo para SEO — diseñado para convertir visitantes en clientes que pagan.')],
            ].map(([title, d]) => (
              <div className="ab-why-item rv" key={title}><span className="ck"><Check /></span><div><b>{title}</b><span>{d}</span></div></div>
            ))}
          </div>
        </div></section>

        {/* CONTACT / INTAKE */}
        <section className="nv-sec" id="contact" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="ab-contact rv"><div className="ab-contact-in">
            <div>
              <h2>{t("Let's talk about your project", 'Hablemos de tu proyecto')}</h2>
              <p className="lead">{t("Tell me a bit about your business and I'll personally get back to you the same day — no pressure, no jargon.", 'Cuéntame un poco sobre tu negocio y te responderé personalmente el mismo día — sin presión, sin tecnicismos.')}</p>
              <div className="ab-call">
                <a className="ab-callbtn" href={`tel:${DAVID_PHONE.tel}`} onClick={() => trackCall({ source: 'david_contact' })}><span>📞</span><span>{DAVID_PHONE.display}<small>{t('Call or text me directly', 'Llámame o escríbeme directamente')}</small></span></a>
              </div>
              <div className="note">{t('Your info goes straight to my inbox — never shared.', 'Tu información llega directo a mi correo — nunca se comparte.')}</div>
            </div>
            <IntakeForm source={formSource} />
          </div></div>
        </div></section>
      </main>
      <Footer phone={DAVID_PHONE} />
    </>
  );
}
