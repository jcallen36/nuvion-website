import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, BrandRibbon, useReveal, Arrow, Check, IconWeb, IconSeo, IconMkt } from './shared.jsx';
import { useLang } from './i18n.jsx';
import workCalegal from '../assets/work/calegal.webp';
import workDumolin from '../assets/work/dumolin.webp';
import workFloors from '../assets/work/floors.webp';
import workCalegalM from '../assets/work/calegal-m.webp';
import baRoofBefore from '../assets/work/ba-roofing-before.webp';
import baRoofAfter from '../assets/work/ba-roofing-after.webp';
import baRestBefore from '../assets/work/ba-restaurant-before.webp';
import baRestAfter from '../assets/work/ba-restaurant-after.webp';
import baSpaBefore from '../assets/work/ba-medspa-before.webp';
import baSpaAfter from '../assets/work/ba-medspa-after.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';

const SERVICE_CSS = `
.sv-hero{padding:66px 0 46px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.85) 45%, rgba(246,249,253,.74)), url(${sonomaHills});background-size:cover;background-position:center 30%}
.sv-h1{font-size:clamp(2.2rem,4.6vw,3.5rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:18px auto 16px;max-width:15ch}
.sv-hero p.sub{font-size:clamp(1.04rem,1.5vw,1.24rem);color:var(--body);max-width:600px;margin:0 auto;line-height:1.6}
.sv-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap;margin:30px 0 14px}
.sv-ticks{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.sv-ticks span{display:inline-flex;align-items:center;gap:7px}.sv-ticks svg{color:var(--brand)}
.sv-stage{position:relative;max-width:880px;margin:56px auto 0}
.sv-stage .glow{position:absolute;left:6%;right:6%;top:8%;bottom:-4%;background:radial-gradient(55% 60% at 50% 42%, rgba(37,110,247,.20), transparent 72%);filter:blur(40px);z-index:0}
.sv-browser{position:relative;z-index:1;border-radius:16px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow-lg);background:#fff}
.sv-browser .bar{height:42px;background:#FBFCFE;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:7px;padding:0 16px}
.sv-browser .bar i{width:11px;height:11px;border-radius:50%;background:#E1E6EF}
.sv-browser .bar .url{margin-left:14px;flex:0 1 300px;height:24px;border-radius:7px;background:#EEF2F8;display:flex;align-items:center;gap:7px;padding:0 12px;font-size:.76rem;color:var(--muted);font-weight:600;overflow:hidden}
.sv-browser .bar .url svg{flex-shrink:0}
.sv-browser .shot{height:400px;overflow:hidden}
.sv-browser .shot img{width:100%;display:block;object-fit:cover;object-position:top}
.sv-phone{position:absolute;right:-8px;bottom:-18px;z-index:2;width:156px;border-radius:26px;background:#0B1222;padding:6px;box-shadow:var(--shadow-lg);border:1px solid rgba(255,255,255,.12)}
.sv-phone .scr{border-radius:20px;overflow:hidden;aspect-ratio:9/19.5;background:#fff}
.sv-phone .scr img{width:100%;display:block}
.sv-chip{position:absolute;z-index:3;background:#fff;border:1px solid var(--line);border-radius:13px;box-shadow:var(--shadow);padding:10px 14px;font-weight:700;color:var(--ink);display:flex;align-items:center;gap:9px;white-space:nowrap;font-size:.86rem}
.sv-chip .em{font-size:1.1rem}
.sv-chip-1{top:60px;left:-16px}
.sv-chip-2{bottom:28px;left:-24px}
.sv-cap{text-align:center;color:var(--muted);font-size:.92rem;font-weight:600;margin:30px auto 0;max-width:520px}
@media(max-width:720px){
  .sv-phone{width:108px;right:-2px;bottom:-8px}
  .sv-chip{display:none}
  .sv-browser .shot{height:270px}
}

/* service hero visuals (SEO / Marketing / AI) — fill the hero for pages without a screenshot */
.sv-viz{max-width:500px;margin:46px auto 0;position:relative}
.sv-viz::before{content:"";position:absolute;left:6%;right:6%;top:10%;bottom:-6%;background:radial-gradient(55% 60% at 50% 40%,rgba(37,110,247,.18),transparent 72%);filter:blur(38px);z-index:0}
.sv-viz .card{position:relative;z-index:1;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-lg);padding:20px;text-align:left}
.viz-search{display:flex;align-items:center;gap:9px;background:#F1F4F9;border:1px solid var(--line);border-radius:100px;padding:10px 16px;font-size:.92rem;color:var(--muted);font-weight:600;margin-bottom:14px}
.viz-row{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:12px;border:1px solid transparent}
.viz-row.top{background:linear-gradient(120deg,#EFF5FF,#fff);border-color:#bcd0f7}
.viz-row + .viz-row{margin-top:5px}
.viz-fav{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,#1f6f43,#123f27);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.viz-fav.dim{background:#e3e8f0;color:#8a97ab}
.viz-row b{display:block;color:var(--ink);font-size:.92rem}
.viz-row small{color:var(--muted);font-size:.78rem}
.viz-row .stars{color:#F5A623;font-size:.8rem;letter-spacing:1px}
.viz-pill{margin-left:auto;background:var(--brand);color:#fff;font-weight:800;font-size:.72rem;padding:5px 10px;border-radius:100px}
.viz-note{margin-top:14px;display:flex;align-items:center;justify-content:space-between;color:var(--brand-strong);font-size:.82rem;font-weight:700}
.viz-chip{display:flex;align-items:center;gap:11px;background:#fff;border:1px solid var(--line);border-radius:13px;padding:12px 14px;box-shadow:var(--shadow-sm)}
.viz-chip + .viz-chip{margin-top:10px}
.viz-chip .ic{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:1.05rem;flex-shrink:0}
.viz-chip b{display:block;color:var(--ink);font-size:.9rem}.viz-chip small{color:var(--muted);font-size:.77rem}
.viz-chip .t{margin-left:auto;color:#0EA47A;font-weight:800;font-size:.78rem}

.sv-feat{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:640px){.sv-feat{grid-template-columns:1fr 1fr}}
@media(min-width:980px){.sv-feat{grid-template-columns:repeat(3,1fr)}}
.sv-feat-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm);transition:transform .16s,box-shadow .16s}
.sv-feat-card:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.sv-feat-card .ic{width:42px;height:42px;border-radius:11px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.sv-feat-card h3{color:var(--ink);font-size:1.1rem;margin-bottom:7px}
.sv-feat-card p{font-size:.94rem}

.sv-steps{display:grid;grid-template-columns:1fr;gap:20px;counter-reset:s}
@media(min-width:820px){.sv-steps{grid-template-columns:repeat(4,1fr)}}
.sv-step{position:relative;padding:8px 0}
.sv-step .n{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.sv-step h4{color:var(--ink);font-size:1.06rem;margin-bottom:6px}
.sv-step p{font-size:.92rem}

.sv-price{display:grid;grid-template-columns:1fr;gap:20px;max-width:820px;margin:0 auto}
@media(min-width:720px){.sv-price{grid-template-columns:1fr 1fr}}
.sv-plan{background:#fff;border:1px solid var(--line);border-radius:18px;padding:30px 28px;box-shadow:var(--shadow);display:flex;flex-direction:column}
.sv-plan.hi{border-color:#bcd0f7;background:linear-gradient(165deg,#F4F8FF,#fff 55%);box-shadow:var(--shadow-lg)}
.sv-plan .pname{color:var(--brand-strong);font-weight:700;font-size:.82rem;letter-spacing:.05em;text-transform:uppercase}
.sv-plan .amt{color:var(--ink);font-size:2.4rem;font-weight:800;letter-spacing:-.03em;margin:8px 0 2px}
.sv-plan .amt small{font-size:1rem;color:var(--muted);font-weight:600}
.sv-plan .pdesc{color:var(--body);font-size:.94rem;margin-bottom:16px}
.sv-plan ul{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
.sv-plan ul li{display:flex;gap:9px;align-items:flex-start;font-size:.93rem;color:var(--body)}
.sv-plan ul li svg{color:var(--brand);flex-shrink:0;margin-top:2px}
.sv-plan .nv-btn{margin-top:auto}
.sv-price-note{text-align:center;color:var(--muted);font-size:.9rem;margin-top:22px}

.sv-assure{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:680px){.sv-assure{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1000px){.sv-assure{grid-template-columns:repeat(4,1fr)}}
.sv-assure-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px 20px;box-shadow:var(--shadow-sm)}
.sv-assure-card .ic{width:38px;height:38px;border-radius:10px;background:#E2FAF2;color:#0EA47A;display:flex;align-items:center;justify-content:center;margin-bottom:12px}
.sv-assure-card b{display:block;color:var(--ink);font-size:.98rem;margin-bottom:5px}
.sv-assure-card span{color:var(--body);font-size:.88rem;line-height:1.5}

.sv-faq{max-width:760px;margin:0 auto}
.sv-faq details{border:1px solid var(--line);border-radius:12px;background:#fff;margin-bottom:12px;box-shadow:var(--shadow-sm);overflow:hidden}
.sv-faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:700;color:var(--ink);font-size:1rem;display:flex;justify-content:space-between;align-items:center;gap:12px}
.sv-faq summary::-webkit-details-marker{display:none}
.sv-faq summary::after{content:"+";color:var(--brand);font-weight:800;font-size:1.3rem;line-height:1}
.sv-faq details[open] summary::after{content:"–"}
.sv-faq .a{padding:0 20px 18px;color:var(--body);font-size:.96rem;line-height:1.65}

.ba-tabs{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:0 0 22px}
.ba-tab{font-family:var(--font);font-weight:700;font-size:.9rem;padding:9px 18px;border-radius:100px;border:1px solid var(--line);background:#fff;color:var(--body);cursor:pointer;transition:background .15s,color .15s,border-color .15s}
.ba-tab:hover{border-color:#c7d3e6}
.ba-tab.on{background:var(--brand);color:#fff;border-color:var(--brand);box-shadow:0 8px 18px -8px rgba(37,110,247,.5)}
.ba{position:relative;max-width:900px;margin:0 auto;aspect-ratio:1000/625;border-radius:16px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow-lg);user-select:none;touch-action:none}
.ba-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;pointer-events:none}
.ba-before{will-change:clip-path}
.ba-tag{position:absolute;top:12px;font-size:.7rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:5px 11px;border-radius:100px;color:#fff;z-index:3;pointer-events:none}
.ba-tag-before{left:12px;background:rgba(10,18,34,.72)}
.ba-tag-after{right:12px;background:var(--brand)}
.ba-line{position:absolute;top:0;bottom:0;width:3px;background:#fff;transform:translateX(-50%);box-shadow:0 0 0 1px rgba(10,18,34,.18);z-index:2;pointer-events:none}
.ba-handle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:42px;height:42px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.05rem;box-shadow:var(--shadow-lg);border:2px solid #fff}
.ba-range{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:ew-resize;z-index:4}
.sv-band{position:relative;overflow:hidden;border-radius:26px;padding:60px 40px;text-align:center;color:#fff;background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.sv-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.5rem);letter-spacing:-.03em;margin-bottom:12px}
.sv-band p{color:rgba(255,255,255,.8);font-size:1.06rem;margin-bottom:26px}
`;

const IMAGES = { calegal: workCalegal, dumolin: workDumolin, floors: workFloors };

function BeforeAfter() {
  const { t } = useLang();
  const [pos, setPos] = useState(50);
  const [idx, setIdx] = useState(0);
  const examples = [
    { label: t('Roofing', 'Techado'), before: baRoofBefore, after: baRoofAfter },
    { label: t('Restaurant', 'Restaurante'), before: baRestBefore, after: baRestAfter },
    { label: t('Med spa', 'Spa médico'), before: baSpaBefore, after: baSpaAfter },
  ];
  const ex = examples[idx];
  return (
    <section className="nv-sec soft"><div className="nv-wrap">
      <div className="nv-center rv" style={{ marginBottom: 26 }}><div className="nv-kicker">{t('New site or a redesign', 'Sitio nuevo o rediseño')}</div><h2 className="nv-h2">{t('From dated to “wow.” Drag to see the difference.', 'De anticuado a “wow”. Arrastra para ver la diferencia.')}</h2></div>
      <div className="ba-tabs rv">
        {examples.map((e2, i) => (
          <button key={i} type="button" className={`ba-tab${i === idx ? ' on' : ''}`} onClick={() => { setIdx(i); setPos(50); }}>{e2.label}</button>
        ))}
      </div>
      <div className="ba rv">
        <img className="ba-img" src={ex.after} alt="After — a modern website redesign by Nuvion Solutions" />
        <img className="ba-img ba-before" src={ex.before} alt="Before — an outdated website" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <span className="ba-tag ba-tag-before">{t('Before', 'Antes')}</span>
        <span className="ba-tag ba-tag-after">{t('After', 'Después')}</span>
        <div className="ba-line" style={{ left: `${pos}%` }}><span className="ba-handle">⇄</span></div>
        <input className="ba-range" type="range" min="0" max="100" value={pos} onChange={(ev) => setPos(+ev.target.value)} aria-label={t('Drag to compare before and after', 'Arrastra para comparar antes y después')} />
      </div>
      <p className="sv-cap">{t('Real transformations — a new build or a full redesign of your current site, live in 1 week.', 'Transformaciones reales — un sitio nuevo o un rediseño completo del que ya tienes, en vivo en 1 semana.')}</p>
    </div></section>
  );
}

function ServiceVisual({ kind }) {
  const { t } = useLang();
  if (kind === 'seo') {
    return (
      <div className="sv-viz rv"><div className="card">
        <div className="viz-search"><span>🔍</span> {t('roofer near me', 'techador cerca de mí')}</div>
        <div className="viz-row top"><div className="viz-fav">R</div><div><b>{t('Ridgeline Roofing — your business', 'Ridgeline Roofing — tu negocio')}</b><span className="stars">★★★★★</span> <small>Santa Rosa, CA</small></div><span className="viz-pill">#1</span></div>
        <div className="viz-row"><div className="viz-fav dim">C</div><div><b>{t('A competitor', 'Un competidor')}</b><small>{t('three towns over', 'a tres pueblos')}</small></div></div>
        <div className="viz-row"><div className="viz-fav dim">C</div><div><b>{t('Another competitor', 'Otro competidor')}</b><small>—</small></div></div>
        <div className="viz-note"><span>{t('Your ranking, climbing', 'Tu posición, subiendo')}</span><span>↗ +18</span></div>
      </div></div>
    );
  }
  if (kind === 'marketing') {
    const chips = [
      ['⭐', '#FFF3D6', 'New 5-star review', 'Nueva reseña de 5 estrellas', 'Google', '+1'],
      ['💬', '#E2FAF2', 'New lead — replied in 2 min', 'Nuevo prospecto — respondido en 2 min', t('Website', 'Sitio web'), t('New', 'Nuevo')],
      ['📅', '#EAF1FF', 'Consultation booked', 'Consulta agendada', t('Calendar', 'Calendario'), t('Booked', 'Agendado')],
    ];
    return (
      <div className="sv-viz rv"><div className="card">
        {chips.map(([ic, bg, en, es, src, tag], i) => (
          <div className="viz-chip" key={i}><div className="ic" style={{ background: bg }}>{ic}</div><div><b>{t(en, es)}</b><small>{src}</small></div><span className="t">{tag}</span></div>
        ))}
      </div></div>
    );
  }
  const steps = [
    ['📩', 'New inquiry comes in', 'Llega una consulta'],
    ['🤖', 'AI replies & qualifies — 24/7', 'La IA responde y califica — 24/7'],
    ['📅', 'Booked on your calendar', 'Agendado en tu calendario'],
  ];
  return (
    <div className="sv-viz rv"><div className="card">
      {steps.map(([ic, en, es], i) => (
        <div className="viz-chip" key={i}><div className="ic" style={{ background: '#EAF1FF' }}>{ic}</div><div><b>{t(en, es)}</b></div><span className="t">{i < 2 ? '↓' : '✓'}</span></div>
      ))}
    </div></div>
  );
}

export default function ServicePage({ cfg }) {
  useReveal();
  const { lang, t } = useLang();
  const c = lang === 'es' && cfg.es ? { ...cfg, ...cfg.es } : cfg;
  const svcUrl = `https://www.nuvion-solutions.com/services/${cfg.slug}`;
  const svcName = String(cfg.title).split('|')[0].trim();
  const faqLd = c.faqs && c.faqs.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: c.faqs.filter((f) => typeof f.a === 'string').map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null;
  const serviceLd = {
    '@context': 'https://schema.org', '@type': 'Service', name: svcName, serviceType: cfg.slug, url: svcUrl,
    description: cfg.description, areaServed: { '@type': 'AdministrativeArea', name: 'Sonoma County, California' },
    provider: { '@type': 'ProfessionalService', name: 'Nuvion Solutions', telephone: '+1-707-520-9179', areaServed: 'Sonoma County, CA', url: 'https://www.nuvion-solutions.com' },
  };
  const crumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nuvion-solutions.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.nuvion-solutions.com/#services' },
      { '@type': 'ListItem', position: 3, name: svcName, item: svcUrl },
    ],
  };
  return (
    <>
      <title>{cfg.title}</title>
      <meta name="description" content={cfg.description} />
      <link rel="canonical" href={svcUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={cfg.title} />
      <meta property="og:description" content={cfg.description} />
      <meta property="og:url" content={svcUrl} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + SERVICE_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="sv-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{c.eyebrow}</span>
          <h1 className="sv-h1" dangerouslySetInnerHTML={{ __html: c.h1 }} />
          <p className="sub">{c.sub}</p>
          <div className="sv-cta">
            <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{c.ctaLabel || t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
            <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</Link>
          </div>
          <div className="sv-ticks">{c.ticks.map((tick) => <span key={tick}><Check /> {tick}</span>)}</div>
          {cfg.heroVisual && <ServiceVisual kind={cfg.heroVisual} />}
          {cfg.heroImg && (
            <>
              <div className="sv-stage rv">
                <div className="glow" />
                <div className="sv-browser">
                  <div className="bar"><i/><i/><i/><span className="url"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>yourbusiness.com</span></div>
                  <div className="shot"><img src={IMAGES[cfg.heroImg]} alt="A responsive website designed and built by Nuvion Solutions" /></div>
                </div>
                <div className="sv-phone"><div className="scr"><img src={workCalegalM} alt="Mobile view of a Nuvion website" /></div></div>
                <div className="sv-chip sv-chip-1"><span style={{ color: '#F5A623', letterSpacing: '1px' }}>★★★★★</span><span>{t('Exactly right', 'Justo lo que quería')}</span></div>
                <div className="sv-chip sv-chip-2"><span className="em">⚡</span><span>{t('Loads in 0.9s', 'Carga en 0.9s')}</span></div>
              </div>
              <p className="sv-cap">{t('Beautiful on every screen — a real site we designed, built, and launched.', 'Se ve increíble en cualquier pantalla — un sitio real que diseñamos, construimos y lanzamos.')}</p>
            </>
          )}
        </div></section>

        <BrandRibbon />

        {/* FEATURES */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{c.featuresKicker}</div><h2 className="nv-h2">{c.featuresTitle}</h2></div>
          <div className="sv-feat">
            {c.features.map((f, i) => (
              <div className={`sv-feat-card rv d${(i % 3) + 1}`} key={f.title}><div className="ic">{cfg.icon}</div><h3>{f.title}</h3><p>{f.desc}</p></div>
            ))}
          </div>
        </div></section>

        {cfg.beforeAfter && <BeforeAfter />}

        {/* PROCESS */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('How it works', 'Cómo funciona')}</div><h2 className="nv-h2">{c.processTitle}</h2></div>
          <div className="sv-steps">
            {c.steps.map((s, i) => (
              <div className="sv-step rv" key={i}><div className="n">{i + 1}</div><h4>{s.title}</h4><p>{s.desc}</p></div>
            ))}
          </div>
        </div></section>

        {/* PRICING */}
        {cfg.plans && (
          <section className="nv-sec"><div className="nv-wrap">
            <div className="nv-center rv"><div className="nv-kicker">{t('Pricing', 'Precios')}</div><h2 className="nv-h2">{c.pricingTitle}</h2></div>
            <div className="sv-price">
              {c.plans.map((p) => (
                <div className={`sv-plan rv${p.highlight ? ' hi' : ''}`} key={p.name}>
                  <div className="pname">{p.name}</div>
                  <div className="amt">{p.price}{p.per && <small> {p.per}</small>}</div>
                  <div className="pdesc">{p.desc}</div>
                  <ul>{p.features.map((f) => <li key={f}><Check /> {f}</li>)}</ul>
                  <Link to="/book" className={`nv-btn ${p.highlight ? 'nv-btn-primary' : 'nv-btn-ghost'}`}>{p.cta || t('Get started', 'Comienza')} <Arrow /></Link>
                </div>
              ))}
            </div>
            {c.pricingNote && <div className="sv-price-note">{c.pricingNote}</div>}
          </div></section>
        )}

        {/* ASSURANCE */}
        {cfg.assurance && (
          <section className="nv-sec"><div className="nv-wrap">
            <div className="nv-center rv"><div className="nv-kicker">{c.assuranceKicker || t('No risk, no surprises', 'Sin riesgo, sin sorpresas')}</div><h2 className="nv-h2">{c.assuranceTitle || t('The catch? There isn’t one.', '¿La trampa? No hay ninguna.')}</h2></div>
            <div className="sv-assure">
              {c.assurance.map((a) => (
                <div className="sv-assure-card rv" key={a.title}><div className="ic"><Check /></div><b>{a.title}</b><span>{a.desc}</span></div>
              ))}
            </div>
          </div></section>
        )}

        {/* FAQ */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('FAQ', 'FAQ')}</div><h2 className="nv-h2">{t('Common questions', 'Preguntas frecuentes')}</h2></div>
          <div className="sv-faq">
            {c.faqs.map((f) => (
              <details className="rv" key={f.q}><summary>{f.q}</summary><div className="a">{f.a}</div></details>
            ))}
          </div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="sv-band rv">
            <h2>{c.ctaHeadline}</h2>
            <p>{t("Book a free call — we'll show you exactly what we'd build for you.", 'Reserva una llamada gratis — te mostraremos exactamente lo que construiríamos para ti.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}

export const WEB_DESIGN = {
  slug: 'web-design',
  title: 'Web Design in Sonoma County | Custom Websites — Nuvion Solutions',
  description: 'Custom websites for Sonoma County businesses — a brand-new build or a full redesign of your current site. Fast, mobile-first, SEO-ready, and you own it. Live in 1 week. Book a free call.',
  eyebrow: 'Web Design · Sonoma County',
  h1: 'Custom websites, built to <span class="nv-grad">grow your business</span>.',
  sub: 'Beautiful, fast, mobile-first websites — a brand-new build or a full redesign of your current site — designed around your brand and handled by a real team that answers.',
  ticks: ['You own your site', 'Live in 1 week — guaranteed', 'Same-day support'],
  heroImg: 'floors',
  beforeAfter: true,
  icon: <IconWeb />,
  featuresKicker: 'What you get',
  featuresTitle: "Everything a website needs to actually work",
  features: [
    { title: 'Custom design', desc: 'No cookie-cutter templates — a site designed around your brand and your customers.' },
    { title: 'Mobile-first & fast', desc: 'Looks perfect on every phone and loads in a blink. Speed = more customers.' },
    { title: 'SEO-ready from day one', desc: 'Built clean so Google can find you, with the fundamentals baked in.' },
    { title: 'Conversion-focused', desc: 'Clear calls-to-action and layouts designed to turn visitors into leads.' },
    { title: 'You own everything', desc: 'The site is yours — no proprietary lock-in, no hostage situations.' },
    { title: 'Ongoing care', desc: 'Optional care plans from $29/mo keep it hosted, secure, and backed up — with revisions and SEO available on higher tiers.' },
  ],
  processTitle: 'The Nuvion 1-Week Launch',
  steps: [
    { title: 'Day 1 — Strategy call', desc: 'We learn your business and goals — no pressure, no jargon.' },
    { title: 'Days 2–4 — Design', desc: 'We design a custom site around your brand and share it for your feedback.' },
    { title: 'Days 5–6 — Build & refine', desc: 'We build it out and refine until it’s exactly what you had in mind.' },
    { title: 'Day 7 — Launch & grow', desc: 'Live within the week — then we stay on for fast tweaks and support.' },
  ],
  pricingTitle: 'Simple, honest pricing',
  plans: [
    { name: 'Websites', price: 'from $600', per: 'one-time · or $49/mo, $0 down', desc: 'Own it outright, or go monthly with $0 down — the site is yours to keep either way (after 18 months on monthly).', features: ['Custom, mobile-first design', 'SEO-ready build', 'Live in 1 week — or you don’t pay', 'You own it — outright, or after 18 months on monthly'], cta: 'Start your site', highlight: true },
    { name: 'Care Plan', price: 'from $29', per: '/mo · optional', desc: 'Essential entry tier — hosting, security & backups. Plus ($50/mo) adds revisions; Pro ($149/mo) adds SEO.', features: ['Hosting & SSL', 'Daily + off-site backups', 'Malware & security protection', '24/7 uptime monitoring'], cta: 'Add care' },
  ],
  pricingNote: '⚡ Every build includes our 1-week launch guarantee — your site goes live within a week of us having your content, or you don’t pay. Final quote confirmed on your free call.',
  assuranceKicker: 'No risk, no surprises',
  assuranceTitle: 'The catch? There isn’t one.',
  assurance: [
    { title: 'You approve before you pay', desc: 'We build it and walk you through it live. You only pay once you’ve seen it and want it online — no deposit.' },
    { title: '7 days of free revisions', desc: 'Colors, photos, wording, layout — we keep tweaking for a full week after launch until you’d show it off.' },
    { title: 'You own everything', desc: 'Design, files, and domain are yours the moment it’s paid. No lock-in, no hostage situations.' },
    { title: 'A written quote first', desc: 'The price you see is the price — in writing before you owe a cent. No surprise invoices, ever.' },
  ],
  faqs: [
    { q: 'How long does it take?', a: 'One week — guaranteed. Once we have your content and go-ahead, your custom site goes live within a week. If we miss it, you don’t pay.' },
    { q: 'We already have a website.', a: 'Then compare it side by side with what we’d build — that’s the whole test. Pull both up on your phone: which loads faster, shows your reviews, and makes it easier to call? If yours wins, keep it — no hard feelings.' },
    { q: 'I’m not a tech person.', a: 'You never touch anything. We design it, build it, and put it online — and on a care plan we host it, secure it, and keep it backed up. Your only job is a quick onboarding form and a few photos.' },
    { q: 'Do I own my website?', a: 'You do. Pay once and it’s yours the moment the build is paid — design, files, domain, all of it, and you can host it anywhere. Prefer monthly? It’s $0 down and the site becomes fully yours after 18 months. Either way it ends up yours — the optional care plans (from $29/mo) just handle hosting, security, and backups for you.' },
    { q: 'What’s the $29/month for? Do I have to take it?', a: 'The $29 Essential plan covers hosting (fast, SSL-secured), daily off-site backups, malware & security protection, and 24/7 uptime monitoring — keeping your site safe and online. It’s optional — skip it or cancel anytime and the site is still 100% yours. Want ongoing edits too? That’s the $50 Plus plan. Want ongoing local SEO? That’s the $149 Pro plan. Most owners keep at least the Essential plan.' },
    { q: 'What if I don’t like what you build?', a: 'Then you say no and owe nothing. We build it and walk you through it live — you only pay once you’ve seen it and want it online. No deposit, no obligation. Worst case, you got a free look at what your site could be.' },
    { q: 'What if I need changes later?', a: 'Unlimited free revisions for the first 7 days after launch. After that, ongoing small text and image edits come with the $50 Plus plan (priority same-day support included); anything bigger gets a written quote first. Want your local SEO tuned every month too? That’s the $149 Pro plan.' },
    { q: 'What do you need from me?', a: 'A quick onboarding form, photos of your work if you have them, and your logo if you have one. That’s it — we pull the rest from what’s already public.' },
  ],
  ctaHeadline: 'Ready for a website that actually works?',
  es: {
    eyebrow: 'Diseño web · Sonoma County',
    h1: 'Sitios web personalizados, hechos para <span class="nv-grad">hacer crecer tu negocio</span>.',
    sub: 'Sitios web bonitos, rápidos y pensados para el móvil — un sitio nuevo o un rediseño completo del que ya tienes — diseñados en torno a tu marca y manejados por un equipo real que responde.',
    ticks: ['Tu sitio es tuyo', 'En vivo en 1 semana — garantizado', 'Soporte el mismo día'],
    featuresKicker: 'Lo que obtienes',
    featuresTitle: 'Todo lo que un sitio web necesita para de verdad funcionar',
    features: [
      { title: 'Diseño personalizado', desc: 'Nada de plantillas genéricas — un sitio diseñado en torno a tu marca y tus clientes.' },
      { title: 'Rápido y pensado para el móvil', desc: 'Se ve perfecto en todo teléfono y carga en un parpadeo. Velocidad = más clientes.' },
      { title: 'Listo para SEO desde el día uno', desc: 'Construido limpio para que Google te encuentre, con los fundamentos ya incluidos.' },
      { title: 'Enfocado en conversión', desc: 'Llamados a la acción claros y diseños hechos para convertir visitantes en prospectos.' },
      { title: 'Todo es tuyo', desc: 'El sitio es tuyo — sin ataduras propietarias, sin situaciones de rehén.' },
      { title: 'Mantenimiento continuo', desc: 'Planes de mantenimiento opcionales desde $29/mes lo mantienen alojado, seguro y respaldado — con revisiones y SEO disponibles en los planes superiores.' },
    ],
    processTitle: 'El lanzamiento Nuvion en 1 semana',
    steps: [
      { title: 'Día 1 — Llamada de estrategia', desc: 'Conocemos tu negocio y tus metas — sin presión, sin tecnicismos.' },
      { title: 'Días 2–4 — Diseño', desc: 'Diseñamos un sitio personalizado en torno a tu marca y te lo mostramos para tus comentarios.' },
      { title: 'Días 5–6 — Construcción y ajustes', desc: 'Lo construimos y lo ajustamos hasta que sea exactamente lo que tenías en mente.' },
      { title: 'Día 7 — Lanzamiento y crecimiento', desc: 'En vivo dentro de la semana — y nos quedamos para ajustes rápidos y soporte.' },
    ],
    pricingTitle: 'Precios simples y honestos',
    plans: [
      { name: 'Sitios web', price: 'desde $600', per: 'pago único · o $49/mes, $0 inicial', desc: 'Págalo una vez, o ve mensual con $0 inicial — el sitio es tuyo de cualquier forma (después de 18 meses en el plan mensual).', features: ['Diseño personalizado, pensado para el móvil', 'Construido listo para SEO', 'En vivo en 1 semana — o no pagas', 'Es tuyo — de una vez, o después de 18 meses en el mensual'], cta: 'Comienza tu sitio', highlight: true },
      { name: 'Plan de mantenimiento', price: 'desde $29', per: '/mes · opcional', desc: 'Nivel de entrada Essential — hosting, seguridad y respaldos. Plus ($50/mes) agrega revisiones; Pro ($149/mes) agrega SEO.', features: ['Hosting y SSL', 'Respaldos diarios y externos', 'Protección contra malware y seguridad', 'Monitoreo de disponibilidad 24/7'], cta: 'Agregar mantenimiento' },
    ],
    pricingNote: '⚡ Cada proyecto incluye nuestra garantía de lanzamiento en 1 semana — tu sitio sale en vivo dentro de una semana de tener tu contenido, o no pagas. La cotización final se confirma en tu llamada gratis.',
    assuranceKicker: 'Sin riesgo, sin sorpresas',
    assuranceTitle: '¿La trampa? No hay ninguna.',
    assurance: [
      { title: 'Apruebas antes de pagar', desc: 'Lo construimos y te lo mostramos en vivo. Solo pagas una vez que lo viste y lo quieres en línea — sin depósito.' },
      { title: '7 días de revisiones gratis', desc: 'Colores, fotos, textos, diseño — seguimos ajustando durante una semana completa después del lanzamiento hasta que lo quieras presumir.' },
      { title: 'Todo es tuyo', desc: 'El diseño, los archivos y el dominio son tuyos en el momento en que se paga. Sin ataduras, sin situaciones de rehén.' },
      { title: 'Primero una cotización por escrito', desc: 'El precio que ves es el precio — por escrito antes de que debas un centavo. Sin facturas sorpresa, nunca.' },
    ],
    faqs: [
      { q: '¿Cuánto tarda?', a: 'Una semana — garantizado. En cuanto tengamos tu contenido y tu visto bueno, tu sitio personalizado sale en vivo dentro de una semana. Si no lo logramos, no pagas.' },
      { q: 'Ya tenemos un sitio web.', a: 'Entonces compáralo lado a lado con lo que construiríamos — esa es toda la prueba. Abre ambos en tu teléfono: ¿cuál carga más rápido, muestra tus reseñas y hace más fácil llamar? Si el tuyo gana, quédatelo — sin resentimientos.' },
      { q: 'No soy una persona de tecnología.', a: 'Nunca tocas nada. Nosotros lo diseñamos, lo construimos y lo ponemos en línea — y con un plan de mantenimiento lo alojamos, lo aseguramos y lo respaldamos. Tu única tarea es un formulario rápido y unas cuantas fotos.' },
      { q: '¿El sitio web es mío?', a: 'Lo es. Págalo una vez y es tuyo en el momento en que se paga la construcción — el diseño, los archivos, el dominio, todo, y puedes alojarlo donde quieras. ¿Prefieres mensual? Es $0 inicial y el sitio pasa a ser 100% tuyo después de 18 meses. De cualquier forma termina siendo tuyo — los planes de mantenimiento opcionales (desde $29/mes) solo se encargan del hosting, la seguridad y los respaldos por ti.' },
      { q: '¿Para qué es el $29 al mes? ¿Es obligatorio?', a: 'El plan Essential de $29 cubre el hosting (rápido, con SSL), respaldos diarios y externos, protección contra malware y seguridad, y monitoreo de disponibilidad 24/7 — mantiene tu sitio seguro y en línea. Es opcional — sáltalo o cancela cuando quieras y el sitio sigue siendo 100% tuyo. ¿Quieres además ediciones continuas? Ese es el plan Plus de $50. ¿Quieres SEO local continuo? Ese es el plan Pro de $149. La mayoría de los dueños conservan al menos el plan Essential.' },
      { q: '¿Y si no me gusta lo que construyen?', a: 'Entonces dices que no y no debes nada. Lo construimos y te lo mostramos en vivo — solo pagas una vez que lo viste y lo quieres en línea. Sin depósito, sin obligación. En el peor de los casos, obtuviste una vista gratis de lo que tu sitio podría ser.' },
      { q: '¿Y si necesito cambios más adelante?', a: 'Revisiones gratis ilimitadas durante los primeros 7 días después del lanzamiento. Después de eso, las ediciones pequeñas continuas de texto e imágenes vienen con el plan Plus de $50 (con soporte prioritario el mismo día); cualquier cosa más grande lleva una cotización por escrito primero. ¿Quieres además que tu SEO local se ajuste cada mes? Ese es el plan Pro de $149.' },
      { q: '¿Qué necesitan de mí?', a: 'Un formulario rápido, fotos de tu trabajo si las tienes y tu logo si tienes uno. Eso es todo — el resto lo tomamos de lo que ya es público.' },
    ],
    ctaHeadline: '¿Listo para un sitio web que de verdad funciona?',
  },
};

export const SEO = {
  slug: 'seo-aso',
  title: 'Local SEO in Sonoma County | Get Found on Google — Nuvion Solutions',
  description: 'Local SEO for Sonoma County businesses — get found on Google by the customers who need you. Ongoing optimization, real reporting, no long-term contracts.',
  eyebrow: 'SEO · Local Search',
  h1: 'Get found on Google by the <span class="nv-grad">customers who need you</span>.',
  sub: 'Ongoing local SEO that brings the right customers to your door — and gets you cited by AI search like ChatGPT and Perplexity. Real optimization and honest reporting, not empty promises.',
  ticks: ['Local-first', 'Google + AI search', 'No long-term contracts'],
  heroImg: null,
  heroVisual: 'seo',
  icon: <IconSeo />,
  featuresKicker: 'What we optimize',
  featuresTitle: 'The work that actually moves rankings',
  features: [
    { title: 'Local SEO', desc: 'Rank in your service area for the searches your customers actually make.' },
    { title: 'Google Business Profile', desc: 'Optimized and maintained so you show up in the map pack and local results.' },
    { title: 'On-page optimization', desc: 'Titles, content, and structure tuned so Google understands what you do.' },
    { title: 'Technical SEO', desc: 'Speed, mobile, and clean structure — the fundamentals that let you rank.' },
    { title: 'Content that ranks', desc: 'Pages and posts built around what your customers are searching for.' },
    { title: 'AI answer optimization', desc: 'Get cited when customers ask ChatGPT, Perplexity, or Gemini for a recommendation — the next frontier of search.' },
    { title: 'Real reporting', desc: 'A clear monthly picture of rankings, traffic, and what we did — no fluff.' },
  ],
  processTitle: 'How we get you ranking',
  steps: [
    { title: 'Audit', desc: 'We assess where you stand and where the fastest wins are.' },
    { title: 'Optimize', desc: 'We fix the fundamentals and optimize your site and profile.' },
    { title: 'Build', desc: 'Ongoing content and improvements aimed at your best keywords.' },
    { title: 'Report & grow', desc: 'Monthly reporting and steady, compounding progress.' },
  ],
  plans: null,
  faqs: [
    { q: 'Can you guarantee I’ll be #1 on Google?', a: 'No — and anyone who does is selling you something. Nobody can honestly promise a specific ranking. What we promise is a site built and optimized properly, kept tuned every month, that makes you the easiest business in town to find, size up, and call.' },
    { q: 'How long until I see results?', a: 'SEO is a compounding investment — most businesses see meaningful movement within a few months, with results building from there. Anyone promising overnight #1 rankings is not being honest.' },
    { q: 'Is this just for local businesses?', a: 'Local businesses are our sweet spot — getting you found by nearby customers who are ready to buy. We tailor the plan to your market.' },
    { q: 'Do I have to sign a long contract?', a: 'No long-term contracts. We earn your business month to month with real results and reporting.' },
    { q: 'How much does it cost?', a: 'SEO plans are tailored to your market and goals — book a free call and we’ll put together a custom quote.' },
  ],
  assuranceKicker: 'Honest SEO',
  assuranceTitle: 'No games, no lock-in.',
  assurance: [
    { title: 'A real person, not a bot', desc: 'You work directly with us — ask a question and get a same-day answer from a human who actually knows your account.' },
    { title: 'No fake promises', desc: 'No spammy links, no “#1 guaranteed.” Just the honest work Google actually rewards.' },
    { title: 'No long-term contracts', desc: 'We earn it month to month with real movement and plain-English reporting.' },
    { title: 'Local-first', desc: 'Right here in Sonoma County — we optimize for the customers in your own backyard.' },
  ],
  ctaHeadline: 'Ready to get found on Google?',
  es: {
    eyebrow: 'SEO · Búsqueda local',
    h1: 'Que te encuentren en Google los <span class="nv-grad">clientes que te necesitan</span>.',
    sub: 'SEO local continuo que trae a los clientes indicados a tu puerta — y hace que te citen en búsquedas con IA como ChatGPT y Perplexity. Optimización real y reportes honestos, no promesas vacías.',
    ticks: ['Local primero', 'Google + búsqueda con IA', 'Sin contratos a largo plazo'],
    featuresKicker: 'Lo que optimizamos',
    featuresTitle: 'El trabajo que de verdad mueve los rankings',
    features: [
      { title: 'SEO local', desc: 'Posiciónate en tu área de servicio para las búsquedas que tus clientes realmente hacen.' },
      { title: 'Google Business Profile', desc: 'Optimizado y mantenido para que aparezcas en el paquete de mapas y en los resultados locales.' },
      { title: 'Optimización on-page', desc: 'Títulos, contenido y estructura ajustados para que Google entienda lo que haces.' },
      { title: 'SEO técnico', desc: 'Velocidad, móvil y estructura limpia — los fundamentos que te permiten posicionar.' },
      { title: 'Contenido que posiciona', desc: 'Páginas y publicaciones creadas en torno a lo que tus clientes están buscando.' },
      { title: 'Optimización para respuestas de IA', desc: 'Que te citen cuando los clientes le piden una recomendación a ChatGPT, Perplexity o Gemini — la próxima frontera de la búsqueda.' },
      { title: 'Reportes reales', desc: 'Un panorama mensual claro de rankings, tráfico y lo que hicimos — sin relleno.' },
    ],
    processTitle: 'Cómo te hacemos posicionar',
    steps: [
      { title: 'Auditoría', desc: 'Evaluamos dónde estás y dónde están las victorias más rápidas.' },
      { title: 'Optimizar', desc: 'Arreglamos los fundamentos y optimizamos tu sitio y tu perfil.' },
      { title: 'Construir', desc: 'Contenido y mejoras continuas enfocadas en tus mejores palabras clave.' },
      { title: 'Reportar y crecer', desc: 'Reportes mensuales y progreso constante que se acumula.' },
    ],
    faqs: [
      { q: '¿Pueden garantizar que quede #1 en Google?', a: 'No — y quien lo hace te está vendiendo algo. Nadie puede prometer honestamente una posición específica. Lo que sí prometemos es un sitio construido y optimizado correctamente, ajustado cada mes, que te convierte en el negocio más fácil de encontrar, evaluar y llamar del pueblo.' },
      { q: '¿Cuánto tardo en ver resultados?', a: 'El SEO es una inversión que se acumula — la mayoría de los negocios ven movimiento importante en unos pocos meses, y los resultados crecen desde ahí. Cualquiera que prometa quedar #1 de la noche a la mañana no está siendo honesto.' },
      { q: '¿Esto es solo para negocios locales?', a: 'Los negocios locales son nuestra especialidad — hacer que te encuentren clientes cercanos que están listos para comprar. Adaptamos el plan a tu mercado.' },
      { q: '¿Tengo que firmar un contrato largo?', a: 'Sin contratos a largo plazo. Nos ganamos tu confianza mes a mes con resultados y reportes reales.' },
      { q: '¿Cuánto cuesta?', a: 'Los planes de SEO se adaptan a tu mercado y tus metas — reserva una llamada gratis y armaremos una cotización personalizada.' },
    ],
    assuranceKicker: 'SEO honesto',
    assuranceTitle: 'Sin trucos, sin ataduras.',
    assurance: [
      { title: 'Una persona real, no un bot', desc: 'Trabajas directamente con nosotros — haz una pregunta y recibe una respuesta el mismo día de una persona que de verdad conoce tu cuenta.' },
      { title: 'Sin promesas falsas', desc: 'Sin enlaces spam, sin “#1 garantizado”. Solo el trabajo honesto que Google de verdad premia.' },
      { title: 'Sin contratos a largo plazo', desc: 'Nos lo ganamos mes a mes con movimiento real y reportes en lenguaje claro.' },
      { title: 'Local primero', desc: 'Aquí mismo en Sonoma County — optimizamos para los clientes de tu propia zona.' },
    ],
    ctaHeadline: '¿Listo para que te encuentren en Google?',
  },
};

export const MARKETING = {
  slug: 'social-media-ai',
  title: 'Marketing & Growth for Local Businesses | Nuvion Solutions',
  description: 'Reviews, lead follow-up, and social — the growth engine that keeps new customers coming to your local business. Done for you by Nuvion Solutions.',
  eyebrow: 'Marketing & Growth',
  h1: 'The growth engine that keeps <span class="nv-grad">customers coming</span>.',
  sub: 'Once your site is live, this is what keeps new customers flowing in — reviews, follow-up, and social, all handled for you.',
  ticks: ['Done for you', 'No long-term contracts', 'Real results'],
  heroImg: null,
  heroVisual: 'marketing',
  icon: <IconMkt />,
  featuresKicker: 'What we handle',
  featuresTitle: 'More customers, on autopilot',
  features: [
    { title: 'Reviews automation', desc: 'Automatically ask happy customers for reviews — the trust signal that wins new business.' },
    { title: 'Lead follow-up', desc: 'Every new lead gets an instant, personal follow-up so none slip through the cracks.' },
    { title: 'Social media', desc: 'Consistent, on-brand posts that keep you visible without you lifting a finger.' },
    { title: 'Email & retention', desc: 'Stay top-of-mind with past customers so they come back and refer you.' },
    { title: 'Google Business Profile', desc: 'Kept fresh and optimized so you show up when locals search.' },
    { title: 'Reporting', desc: 'A clear picture of what’s working — leads, reviews, and growth.' },
  ],
  processTitle: 'How it works',
  steps: [
    { title: 'Set up', desc: 'We connect the pieces to your business and brand.' },
    { title: 'Automate', desc: 'Reviews, follow-up, and posts start running for you.' },
    { title: 'Grow', desc: 'New customers and reviews compound month over month.' },
    { title: 'Report', desc: 'You see exactly what’s driving growth.' },
  ],
  plans: null,
  faqs: [
    { q: 'Do I need a website first?', a: 'A solid site makes everything work better, but we can start improving reviews and follow-up right away.' },
    { q: 'Is there a contract?', a: 'No long-term contracts — we earn it month to month.' },
    { q: 'How much does it cost?', a: 'Plans are tailored to your business — book a free call for a custom quote.' },
  ],
  assuranceKicker: 'Low-risk growth',
  assuranceTitle: 'Handled, and always yours.',
  assurance: [
    { title: 'A real person runs it', desc: 'Not a dashboard you have to babysit — we manage it and report what’s working in plain English.' },
    { title: 'No long-term contracts', desc: 'We earn it month to month. Stay because it works, not because you’re locked in.' },
    { title: 'Your accounts stay yours', desc: 'Your reviews, your profiles, your audience — always in your name, never held hostage.' },
    { title: 'Only when you’re ready', desc: 'This is the “grow” stage. Get your site right first — there’s no pressure to add it.' },
  ],
  ctaHeadline: 'Ready to keep customers coming?',
  es: {
    eyebrow: 'Marketing y crecimiento',
    h1: 'El motor de crecimiento que mantiene a los <span class="nv-grad">clientes llegando</span>.',
    sub: 'Una vez que tu sitio está en vivo, esto es lo que mantiene el flujo de nuevos clientes — reseñas, seguimiento y redes sociales, todo lo manejamos por ti.',
    ticks: ['Lo hacemos por ti', 'Sin contratos a largo plazo', 'Resultados reales'],
    featuresKicker: 'Lo que manejamos',
    featuresTitle: 'Más clientes, en piloto automático',
    features: [
      { title: 'Automatización de reseñas', desc: 'Pide reseñas automáticamente a los clientes contentos — la señal de confianza que gana nuevos negocios.' },
      { title: 'Seguimiento de prospectos', desc: 'Cada nuevo prospecto recibe un seguimiento instantáneo y personal para que ninguno se pierda.' },
      { title: 'Redes sociales', desc: 'Publicaciones consistentes y alineadas a tu marca que te mantienen visible sin que muevas un dedo.' },
      { title: 'Correo y retención', desc: 'Mantente presente con tus clientes anteriores para que vuelvan y te recomienden.' },
      { title: 'Google Business Profile', desc: 'Se mantiene fresco y optimizado para que aparezcas cuando los locales buscan.' },
      { title: 'Reportes', desc: 'Un panorama claro de lo que funciona — prospectos, reseñas y crecimiento.' },
    ],
    processTitle: 'Cómo funciona',
    steps: [
      { title: 'Configurar', desc: 'Conectamos las piezas a tu negocio y tu marca.' },
      { title: 'Automatizar', desc: 'Las reseñas, el seguimiento y las publicaciones empiezan a funcionar por ti.' },
      { title: 'Crecer', desc: 'Los nuevos clientes y las reseñas se acumulan mes tras mes.' },
      { title: 'Reportar', desc: 'Ves exactamente qué está impulsando el crecimiento.' },
    ],
    faqs: [
      { q: '¿Necesito un sitio web primero?', a: 'Un sitio sólido hace que todo funcione mejor, pero podemos empezar a mejorar las reseñas y el seguimiento de inmediato.' },
      { q: '¿Hay contrato?', a: 'Sin contratos a largo plazo — nos lo ganamos mes a mes.' },
      { q: '¿Cuánto cuesta?', a: 'Los planes se adaptan a tu negocio — reserva una llamada gratis para una cotización personalizada.' },
    ],
    assuranceKicker: 'Crecimiento sin riesgo',
    assuranceTitle: 'Todo manejado, y siempre tuyo.',
    assurance: [
      { title: 'Lo maneja una persona real', desc: 'No un panel que tengas que vigilar — nosotros lo gestionamos y te reportamos lo que funciona en lenguaje claro.' },
      { title: 'Sin contratos a largo plazo', desc: 'Nos lo ganamos mes a mes. Te quedas porque funciona, no porque estés atado.' },
      { title: 'Tus cuentas siguen siendo tuyas', desc: 'Tus reseñas, tus perfiles, tu audiencia — siempre a tu nombre, nunca de rehén.' },
      { title: 'Solo cuando estés listo', desc: 'Esta es la etapa de “crecer”. Primero deja tu sitio bien — sin presión para agregarlo.' },
    ],
    ctaHeadline: '¿Listo para que los clientes sigan llegando?',
  },
};

export const INTEGRATIONS = {
  slug: 'integrations',
  title: 'Integrations & Automations for Local Businesses | Nuvion Solutions',
  description: 'We connect your website and tools — CRM, calendar, payments, POS, email, spreadsheets — and automate the repetitive work, so your systems finally talk to each other. Scoped per project. Book a free scoping call.',
  eyebrow: 'Integrations & Automations',
  h1: 'Your tools, finally <span class="nv-grad">talking to each other</span>.',
  sub: 'We connect your website to the tools you already use — CRM, calendar, payments, POS, email, spreadsheets — and automate the busywork, so nothing falls through the cracks and you stop doing the same thing twice.',
  ticks: ['Connects to your existing tools', 'Automate the busywork', 'Scoped to your project'],
  heroImg: null,
  heroVisual: 'ai',
  icon: <IconWeb />,
  featuresKicker: 'What we connect & automate',
  featuresTitle: 'One system, no double entry',
  features: [
    { title: 'Your tools finally talk to each other', desc: 'We connect the apps you already run — CRM, calendar, payments, POS, email, spreadsheets — so a change in one shows up everywhere it should.' },
    { title: 'Automate the busywork', desc: 'Lead follow-up, appointment reminders, review requests, and reporting run on their own in the background — no more chasing it all by hand.' },
    { title: 'One system, no double entry', desc: 'Enter it once. We wire your tools together so you’re not retyping the same info into three different apps.' },
    { title: 'Built on top of your website', desc: 'Your site becomes the front door — forms, bookings, and payments flow straight into the tools you run the business with.' },
    { title: 'Connect anything with an API', desc: 'If your software can talk to other software, we can connect it. If it can’t, we’ll tell you straight and find the next best way.' },
    { title: 'AI-powered follow-up (optional)', desc: 'Want it? We can add AI that replies to new leads instantly and qualifies them — one automation among many, never the whole pitch.' },
  ],
  processTitle: 'How we connect it all',
  steps: [
    { title: 'Map', desc: 'We learn your tools and where time leaks — the double entry and the manual chasing.' },
    { title: 'Plan', desc: 'We scope the simplest set of connections and automations that fixes it.' },
    { title: 'Build', desc: 'We wire it together and test it against real, everyday cases.' },
    { title: 'Support', desc: 'We keep it running and tune it as your business changes.' },
  ],
  plans: null,
  faqs: [
    { q: 'Can you connect to [my tool]?', a: 'Most likely, yes. If your software has an API — and most modern tools do (CRMs, calendars, payment processors, POS, email, spreadsheets) — we can connect it. Tell us what you use on a free call and we’ll confirm before any work starts.' },
    { q: 'What if my tool doesn’t have an API?', a: 'Then we tell you straight and find the next best path — an export/import, a lightweight bridge, or a small custom tool. We’d rather be honest about the limits than overpromise and under-deliver.' },
    { q: 'Do I need to be technical?', a: 'Not at all. We handle the wiring and the testing — you just tell us how your business actually works. Once it’s live, it runs quietly in the background.' },
    { q: 'Will this change the tools I already use?', a: 'No — we build on top of what you’ve got. You keep your logins, your data, and your accounts. We just make them work together.' },
    { q: 'How much does it cost?', a: 'Every integration is different, so we scope it to your exact setup — no fixed tiers. Book a free scoping call and we’ll map it out and put a written quote in front of you before anything begins.' },
  ],
  assuranceKicker: 'No black boxes',
  assuranceTitle: 'Honest about what connects — and what doesn’t.',
  assurance: [
    { title: 'We tell you what’s possible', desc: 'Before any work, we check that your tools can actually connect. If something won’t, you hear it straight — no overpromising.' },
    { title: 'Your accounts stay yours', desc: 'We build on top of the tools and logins you already own. Nothing gets held hostage, and you keep full control.' },
    { title: 'Scoped and quoted first', desc: 'Every project is scoped to your setup with a written quote before we start. No surprise invoices.' },
    { title: 'A real person who answers', desc: 'When something needs a tweak, you reach a human who knows your setup — same-day, not a ticket queue.' },
  ],
  ctaHeadline: 'Ready for your systems to finally talk?',
  es: {
    eyebrow: 'Integraciones y automatizaciones',
    h1: 'Tus herramientas, por fin <span class="nv-grad">hablando entre sí</span>.',
    sub: 'Conectamos tu sitio web con las herramientas que ya usas — CRM, calendario, pagos, punto de venta, correo, hojas de cálculo — y automatizamos el trabajo repetitivo, para que nada se pierda y dejes de hacer lo mismo dos veces.',
    ticks: ['Se conecta con tus herramientas', 'Automatiza el trabajo repetitivo', 'A la medida de tu proyecto'],
    featuresKicker: 'Lo que conectamos y automatizamos',
    featuresTitle: 'Un solo sistema, sin doble captura',
    features: [
      { title: 'Tus herramientas por fin se hablan', desc: 'Conectamos las apps que ya usas — CRM, calendario, pagos, punto de venta, correo, hojas de cálculo — para que un cambio en una aparezca donde debe.' },
      { title: 'Automatiza el trabajo repetitivo', desc: 'El seguimiento de prospectos, los recordatorios de citas, las solicitudes de reseñas y los reportes corren solos en segundo plano — se acabó perseguir todo a mano.' },
      { title: 'Un solo sistema, sin doble captura', desc: 'Captúralo una vez. Conectamos tus herramientas para que no reescribas la misma información en tres apps distintas.' },
      { title: 'Construido sobre tu sitio web', desc: 'Tu sitio se vuelve la puerta de entrada — formularios, reservas y pagos fluyen directo a las herramientas con las que manejas el negocio.' },
      { title: 'Conecta lo que tenga API', desc: 'Si tu software puede hablar con otro software, podemos conectarlo. Y si no puede, te lo decimos claro y buscamos la mejor alternativa.' },
      { title: 'Seguimiento con IA (opcional)', desc: '¿Lo quieres? Podemos agregar IA que responde a los nuevos prospectos al instante y los califica — una automatización más entre muchas, nunca el discurso completo.' },
    ],
    processTitle: 'Cómo lo conectamos todo',
    steps: [
      { title: 'Mapear', desc: 'Conocemos tus herramientas y dónde se fuga el tiempo — la doble captura y el trabajo manual.' },
      { title: 'Planear', desc: 'Definimos el conjunto más simple de conexiones y automatizaciones que lo resuelve.' },
      { title: 'Construir', desc: 'Lo conectamos todo y lo probamos con casos reales del día a día.' },
      { title: 'Soporte', desc: 'Lo mantenemos funcionando y lo ajustamos conforme cambia tu negocio.' },
    ],
    faqs: [
      { q: '¿Pueden conectarse con [mi herramienta]?', a: 'Lo más probable es que sí. Si tu software tiene una API — y la mayoría de las herramientas modernas la tienen (CRM, calendarios, procesadores de pago, punto de venta, correo, hojas de cálculo) — podemos conectarlo. Cuéntanos qué usas en una llamada gratis y lo confirmamos antes de empezar.' },
      { q: '¿Y si mi herramienta no tiene API?', a: 'Entonces te lo decimos claro y buscamos la mejor alternativa — una exportación/importación, un puente ligero o una pequeña herramienta a la medida. Preferimos ser honestos sobre los límites que prometer de más y quedar mal.' },
      { q: '¿Necesito ser técnico?', a: 'Para nada. Nosotros nos encargamos de la conexión y las pruebas — tú solo nos cuentas cómo funciona de verdad tu negocio. Una vez en vivo, corre en silencio en segundo plano.' },
      { q: '¿Esto cambia las herramientas que ya uso?', a: 'No — construimos sobre lo que ya tienes. Conservas tus accesos, tus datos y tus cuentas. Solo hacemos que trabajen juntas.' },
      { q: '¿Cuánto cuesta?', a: 'Cada integración es diferente, así que la definimos según tu configuración exacta — sin tarifas fijas. Reserva una llamada de alcance gratis, la trazamos contigo y te ponemos una cotización por escrito antes de empezar.' },
    ],
    assuranceKicker: 'Sin cajas negras',
    assuranceTitle: 'Honestos sobre lo que se conecta — y lo que no.',
    assurance: [
      { title: 'Te decimos qué es posible', desc: 'Antes de cualquier trabajo, verificamos que tus herramientas de verdad puedan conectarse. Si algo no se puede, te lo decimos claro — sin prometer de más.' },
      { title: 'Tus cuentas siguen siendo tuyas', desc: 'Construimos sobre las herramientas y los accesos que ya son tuyos. Nada queda de rehén y tú mantienes el control total.' },
      { title: 'Primero definimos el alcance y cotizamos', desc: 'Cada proyecto se define según tu configuración con una cotización por escrito antes de empezar. Sin facturas sorpresa.' },
      { title: 'Una persona real que responde', desc: 'Cuando algo necesita un ajuste, hablas con una persona que conoce tu sistema — el mismo día, no una fila de tickets.' },
    ],
    ctaHeadline: '¿Listo para que tus sistemas por fin se hablen?',
  },
};

export const CUSTOM_BUILDS = {
  slug: 'custom-builds',
  title: 'Custom Builds & Web Apps in Sonoma County | Nuvion Solutions',
  description: 'When your site needs to do more than look good — online stores, booking systems, client portals, dashboards, and custom functionality built to fit exactly how you work. Scoped per project. Book a free call.',
  eyebrow: 'Custom Builds & Web Apps',
  h1: 'When your site needs to <span class="nv-grad">do more than look good</span>.',
  sub: 'Sometimes a business needs the site to actually work for it — take orders, book appointments, log in customers, crunch the numbers. We build custom functionality designed to fit exactly how you run things.',
  ticks: ['Built to fit your business', 'You own everything', 'Scoped to your project'],
  heroImg: 'calegal',
  icon: <IconWeb />,
  featuresKicker: 'What we can build',
  featuresTitle: 'A website that does the work',
  features: [
    { title: 'Online stores & e-commerce', desc: 'Sell products or services online with a checkout that fits your catalog, your pricing, and the way you ship.' },
    { title: 'Booking & scheduling', desc: 'Let customers book appointments or reservations right from your site — synced to your calendar, no phone tag.' },
    { title: 'Member & client portals', desc: 'A secure login where clients see their info, files, or account — and you stop emailing the same things over and over.' },
    { title: 'Dashboards & reporting', desc: 'See your numbers in one place, pulled from the tools you already use, laid out the way you actually think about them.' },
    { title: 'Quote & price calculators', desc: 'Let customers get an instant estimate — or give your team a tool that quotes jobs the same way, every time.' },
    { title: 'Multi-location & corporate', desc: 'Bigger footprint? We build sites that handle multiple locations, teams, and services without turning into a mess.' },
  ],
  processTitle: 'How we build it',
  steps: [
    { title: 'Discover', desc: 'We learn exactly how you work and what the build needs to do — the real workflow, not a guess.' },
    { title: 'Scope', desc: 'We map the simplest build that does the job and put a written quote in front of you.' },
    { title: 'Build', desc: 'We build it in stages, showing you progress so it comes out exactly right.' },
    { title: 'Launch & support', desc: 'We ship it, then stay on to fix, tune, and grow it as you do.' },
  ],
  plans: null,
  faqs: [
    { q: 'How is this different from a regular website?', a: 'A regular website tells people about you. A custom build does something — takes orders, books appointments, logs in customers, runs the numbers. When “looks good” isn’t enough and the site needs to actually work for you, that’s a custom build.' },
    { q: 'Do I own what you build?', a: 'You do — the build, the code, and the data are yours the moment it’s paid. No proprietary lock-in, and you can host it or move it wherever you like.' },
    { q: 'Can you build exactly what I need?', a: 'That’s the whole point. We start from how your business actually works and build to fit it — not force you into a template that almost does the job.' },
    { q: 'How much does it cost?', a: 'Custom builds are scoped per project — there’s no fixed price because no two are the same. Book a free call, we’ll scope it with you, and you’ll get a written quote before any work begins.' },
    { q: 'How long does it take?', a: 'It depends on what we’re building — a booking system is quick, a full portal takes longer. We’ll give you a realistic timeline when we scope it, and we build in stages so you see progress along the way.' },
  ],
  assuranceKicker: 'No risk, no surprises',
  assuranceTitle: 'Built to fit — and yours to keep.',
  assurance: [
    { title: 'Scoped and quoted first', desc: 'Every custom build is scoped to your exact needs with a written quote before we start. The price you see is the price.' },
    { title: 'You own everything', desc: 'The build, the code, the data — yours the moment it’s paid. No proprietary lock-in, no hostage situations.' },
    { title: 'Built in the open', desc: 'We show you progress in stages, so there are no surprises at the end — you shape it as it comes together.' },
    { title: 'We stay on after launch', desc: 'Custom tools need care. We’re here to fix, tune, and grow it — a real person who knows your build.' },
  ],
  ctaHeadline: 'Need your site to do more?',
  es: {
    eyebrow: 'Desarrollos a la medida y web apps',
    h1: 'Cuando tu sitio necesita <span class="nv-grad">hacer más que verse bien</span>.',
    sub: 'A veces un negocio necesita que el sitio de verdad trabaje para él — tomar pedidos, agendar citas, dar acceso a clientes, hacer los cálculos. Construimos funcionalidad a la medida, diseñada para encajar exactamente con tu forma de trabajar.',
    ticks: ['Hecho a la medida de tu negocio', 'Todo es tuyo', 'A la medida de tu proyecto'],
    featuresKicker: 'Lo que podemos construir',
    featuresTitle: 'Un sitio web que hace el trabajo',
    features: [
      { title: 'Tiendas en línea y e-commerce', desc: 'Vende productos o servicios en línea con un checkout que encaja con tu catálogo, tus precios y tu forma de enviar.' },
      { title: 'Reservas y agendamiento', desc: 'Deja que los clientes agenden citas o reservaciones desde tu sitio — sincronizado con tu calendario, sin llamadas de ida y vuelta.' },
      { title: 'Portales de clientes y miembros', desc: 'Un acceso seguro donde los clientes ven su información, archivos o cuenta — y tú dejas de enviar lo mismo una y otra vez.' },
      { title: 'Paneles y reportes', desc: 'Ve tus números en un solo lugar, extraídos de las herramientas que ya usas, presentados como de verdad los piensas.' },
      { title: 'Calculadoras de cotización', desc: 'Deja que los clientes obtengan un estimado al instante — o dale a tu equipo una herramienta que cotiza los trabajos igual, siempre.' },
      { title: 'Multi-sucursal y corporativo', desc: '¿Mayor tamaño? Construimos sitios que manejan múltiples ubicaciones, equipos y servicios sin volverse un desorden.' },
    ],
    processTitle: 'Cómo lo construimos',
    steps: [
      { title: 'Descubrir', desc: 'Conocemos exactamente cómo trabajas y qué necesita hacer el desarrollo — el flujo real, no una suposición.' },
      { title: 'Definir alcance', desc: 'Trazamos el desarrollo más simple que hace el trabajo y te ponemos una cotización por escrito.' },
      { title: 'Construir', desc: 'Lo construimos por etapas, mostrándote el avance para que salga exactamente bien.' },
      { title: 'Lanzar y dar soporte', desc: 'Lo lanzamos y nos quedamos para arreglar, ajustar y hacerlo crecer contigo.' },
    ],
    faqs: [
      { q: '¿En qué se diferencia de un sitio web normal?', a: 'Un sitio web normal le cuenta a la gente sobre ti. Un desarrollo a la medida hace algo — toma pedidos, agenda citas, da acceso a clientes, hace los cálculos. Cuando “verse bien” no basta y el sitio necesita de verdad trabajar para ti, eso es un desarrollo a la medida.' },
      { q: '¿Es mío lo que construyen?', a: 'Lo es — el desarrollo, el código y los datos son tuyos en el momento en que se paga. Sin ataduras propietarias, y puedes alojarlo o moverlo donde quieras.' },
      { q: '¿Pueden construir exactamente lo que necesito?', a: 'Ese es todo el punto. Partimos de cómo funciona de verdad tu negocio y construimos para encajar con él — no para meterte en una plantilla que casi hace el trabajo.' },
      { q: '¿Cuánto cuesta?', a: 'Los desarrollos a la medida se definen por proyecto — no hay un precio fijo porque no hay dos iguales. Reserva una llamada gratis, lo definimos contigo y recibirás una cotización por escrito antes de empezar.' },
      { q: '¿Cuánto tarda?', a: 'Depende de lo que construyamos — un sistema de reservas es rápido, un portal completo toma más tiempo. Te damos un plazo realista cuando definimos el alcance, y construimos por etapas para que veas el avance en el camino.' },
    ],
    assuranceKicker: 'Sin riesgo, sin sorpresas',
    assuranceTitle: 'Hecho a tu medida — y tuyo para siempre.',
    assurance: [
      { title: 'Primero definimos el alcance y cotizamos', desc: 'Cada desarrollo a la medida se define según tus necesidades exactas con una cotización por escrito antes de empezar. El precio que ves es el precio.' },
      { title: 'Todo es tuyo', desc: 'El desarrollo, el código, los datos — tuyos en el momento en que se paga. Sin ataduras propietarias, sin situaciones de rehén.' },
      { title: 'Construido a la vista', desc: 'Te mostramos el avance por etapas, para que no haya sorpresas al final — tú lo moldeas conforme toma forma.' },
      { title: 'Seguimos después del lanzamiento', desc: 'Las herramientas a la medida necesitan cuidado. Aquí estamos para arreglar, ajustar y hacerlo crecer — una persona real que conoce tu desarrollo.' },
    ],
    ctaHeadline: '¿Necesitas que tu sitio haga más?',
  },
};
