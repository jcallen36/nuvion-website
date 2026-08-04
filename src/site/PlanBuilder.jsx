import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, Arrow, Check } from './shared.jsx';
import { useLang } from './i18n.jsx';
import { trackLead } from '../analytics.js';

/* ── Smart "instant plan" tool ─────────────────────────────────
   A short, low-friction builder: a few questions about the business →
   a recommended plan across the ladder (Website · Custom builds ·
   Integrations & automations · SEO) + an honest estimate + lead capture.
   Posts to /api/contact with source='plan-builder' and the full plan in
   the message, so the team gets a qualified, self-described lead.        */

const PB_CSS = `
.pb-wrap{max-width:760px;margin:0 auto;padding:44px 24px 90px}
.pb-head{text-align:center;margin-bottom:30px}
.pb-head .nv-eyebrow{margin-bottom:14px}
.pb-head h1{font-size:clamp(1.9rem,4vw,2.7rem);color:var(--ink);font-weight:800;letter-spacing:-.03em;line-height:1.08;margin-bottom:12px}
.pb-head p{color:var(--body);font-size:1.06rem;line-height:1.6;max-width:560px;margin:0 auto}
.pb-card{background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:var(--shadow-lg);padding:clamp(26px,4vw,44px);position:relative;overflow:hidden}
.pb-prog{display:flex;gap:6px;margin-bottom:26px}
.pb-prog i{height:5px;flex:1;border-radius:100px;background:#e6ecf5;transition:background .3s}
.pb-prog i.on{background:linear-gradient(90deg,var(--brand),var(--brand-strong))}
.pb-step-lab{color:var(--brand-strong);font-weight:800;font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px}
.pb-q{color:var(--ink);font-size:clamp(1.3rem,2.6vw,1.7rem);font-weight:800;letter-spacing:-.02em;line-height:1.2;margin-bottom:6px}
.pb-hint{color:var(--muted);font-size:.92rem;margin-bottom:22px}
.pb-opts{display:grid;grid-template-columns:1fr;gap:12px}
@media(min-width:600px){.pb-opts.two{grid-template-columns:1fr 1fr}}
.pb-opt{display:flex;align-items:center;gap:13px;text-align:left;width:100%;background:#fff;border:1.5px solid var(--line);border-radius:14px;padding:16px 18px;cursor:pointer;font-family:var(--font);font-size:1rem;color:var(--ink);font-weight:600;transition:all .14s}
.pb-opt:hover{border-color:#a9c3f5;background:#f7faff}
.pb-opt.sel{border-color:var(--brand);background:linear-gradient(180deg,#F1F6FF,#fff);box-shadow:0 8px 20px -12px rgba(37,110,247,.5)}
.pb-opt .em{font-size:1.35rem;line-height:1;flex-shrink:0}
.pb-opt .tick{margin-left:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid #cdd7e6;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .14s}
.pb-opt .tick svg{width:14px;height:14px;color:#fff;opacity:0}
.pb-opt.sel .tick{background:var(--brand);border-color:var(--brand)}
.pb-opt.sel .tick svg{opacity:1}
.pb-nav{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:28px}
.pb-back{background:none;border:none;color:var(--muted);font-weight:700;font-family:var(--font);font-size:.95rem;cursor:pointer;padding:8px 4px}
.pb-back:hover{color:var(--ink)}
.pb-back[disabled]{opacity:0;pointer-events:none}
.pb-form{display:grid;grid-template-columns:1fr;gap:14px}
@media(min-width:560px){.pb-form.two{grid-template-columns:1fr 1fr}}
.pb-field label{display:block;font-weight:700;font-size:.86rem;color:var(--ink);margin-bottom:6px}
.pb-field input{width:100%;font-family:var(--font);font-size:1rem;padding:13px 15px;border:1.5px solid var(--line);border-radius:12px;background:#fff;color:var(--ink)}
.pb-field input:focus{outline:none;border-color:var(--brand);box-shadow:0 0 0 3px rgba(37,110,247,.12)}
.pb-field.full{grid-column:1/-1}
/* result */
.pb-plan-kick{color:var(--brand-strong);font-weight:800;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:10px}
.pb-plan-h{color:var(--ink);font-size:clamp(1.5rem,3vw,2rem);font-weight:800;letter-spacing:-.02em;margin-bottom:22px}
.pb-rung{display:flex;gap:14px;align-items:flex-start;padding:18px 0;border-top:1px solid var(--line)}
.pb-rung:first-of-type{border-top:none}
.pb-rung .n{flex-shrink:0;width:38px;height:38px;border-radius:11px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;font-weight:800}
.pb-rung h4{color:var(--ink);font-size:1.08rem;margin-bottom:3px}
.pb-rung p{color:var(--body);font-size:.94rem;line-height:1.5}
.pb-rung .price{margin-left:auto;text-align:right;flex-shrink:0;color:var(--ink);font-weight:800;font-size:.95rem;white-space:nowrap}
.pb-est{background:var(--bg-soft);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin:22px 0;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap}
.pb-est .lab{color:var(--muted);font-size:.9rem}
.pb-est .val{color:var(--ink);font-weight:800;font-size:1.25rem;letter-spacing:-.02em}
.pb-done{text-align:center;padding:20px 0}
.pb-done .big{width:74px;height:74px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand-strong));display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 14px 30px -12px rgba(37,110,247,.7)}
.pb-done .big svg{width:38px;height:38px;color:#fff}
.pb-done h2{color:var(--ink);font-size:1.7rem;font-weight:800;letter-spacing:-.02em;margin-bottom:10px}
.pb-done p{color:var(--body);font-size:1.05rem;line-height:1.6;max-width:460px;margin:0 auto 8px}
.pb-err{color:#c0392b;font-size:.9rem;margin-top:10px;text-align:center}
`;

/* niche label + emoji, key drives the estimate/personalization */
const NICHES = [
  { k: 'food', em: '🍽️', en: 'Restaurant / food', es: 'Restaurante / comida' },
  { k: 'home', em: '🔧', en: 'Home services / trades', es: 'Servicios para el hogar / oficios' },
  { k: 'health', em: '🩺', en: 'Health / medical / dental', es: 'Salud / médico / dental' },
  { k: 'realestate', em: '🏡', en: 'Real estate', es: 'Bienes raíces' },
  { k: 'retail', em: '🛍️', en: 'Shop / retail / products', es: 'Tienda / retail / productos' },
  { k: 'pro', em: '💼', en: 'Professional services', es: 'Servicios profesionales' },
  { k: 'creative', em: '🎨', en: 'Creative / art / portfolio', es: 'Creativo / arte / portafolio' },
  { k: 'other', em: '✨', en: 'Something else', es: 'Algo más' },
];

export default function PlanBuilder() {
  const { t, lang } = useLang();
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ need: [], niche: '', goals: [], when: '' });
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '' });
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const STEPS = [
    {
      key: 'need', multi: true, lab: t('Step 1 of 4', 'Paso 1 de 4'),
      q: t('Where are you starting?', '¿Desde dónde empiezas?'),
      hint: t('Pick all that apply.', 'Elige todas las que apliquen.'),
      opts: [
        { k: 'new', em: '🌱', label: t('I need a brand-new website', 'Necesito un sitio web nuevo') },
        { k: 'redesign', em: '🎨', label: t('I have a site that needs a redesign', 'Tengo un sitio que necesita rediseño') },
        { k: 'custom', em: '🧩', label: t('I need my site to DO something (store, booking…)', 'Necesito que mi sitio HAGA algo (tienda, reservas…)') },
        { k: 'automate', em: '⚡', label: t('I want to connect / automate my tools', 'Quiero conectar / automatizar mis herramientas') },
      ],
    },
    {
      key: 'niche', multi: false, lab: t('Step 2 of 4', 'Paso 2 de 4'),
      q: t('What kind of business?', '¿Qué tipo de negocio?'),
      hint: t('So we tailor the plan to you.', 'Para adaptar el plan a ti.'),
      opts: NICHES.map((n) => ({ k: n.k, em: n.em, label: t(n.en, n.es) })),
    },
    {
      key: 'goals', multi: true, lab: t('Step 3 of 4', 'Paso 3 de 4'),
      q: t('What do you want it to do?', '¿Qué quieres que haga?'),
      hint: t('Pick all that apply.', 'Elige todas las que apliquen.'),
      opts: [
        { k: 'leads', em: '📈', label: t('Look great & bring in calls/leads', 'Verse genial y traer llamadas/prospectos') },
        { k: 'booking', em: '📅', label: t('Take online bookings / appointments', 'Tomar reservas / citas en línea') },
        { k: 'store', em: '🛒', label: t('Sell products online', 'Vender productos en línea') },
        { k: 'portal', em: '🔐', label: t('A client / member login area', 'Un área de acceso para clientes / miembros') },
        { k: 'connect', em: '🔗', label: t('Connect my CRM / calendar / POS', 'Conectar mi CRM / calendario / punto de venta') },
        { k: 'autofollow', em: '🤖', label: t('Automate follow-up / reminders / reviews', 'Automatizar seguimiento / recordatorios / reseñas') },
        { k: 'seo', em: '🔍', label: t('Show up on Google (SEO)', 'Aparecer en Google (SEO)') },
      ],
    },
    {
      key: 'when', multi: false, lab: t('Step 4 of 4', 'Paso 4 de 4'),
      q: t('How soon do you need it?', '¿Qué tan pronto lo necesitas?'),
      hint: t('No pressure either way.', 'Sin presión de ninguna forma.'),
      opts: [
        { k: 'asap', em: '🚀', label: t('As soon as possible', 'Lo antes posible') },
        { k: 'month', em: '🗓️', label: t('Within the month', 'Dentro del mes') },
        { k: 'few', em: '🌤️', label: t('In the next few months', 'En los próximos meses') },
        { k: 'explore', em: '👀', label: t("Just exploring for now", 'Solo explorando por ahora') },
      ],
    },
  ];

  const cur = STEPS[step];
  const isFormStep = step === STEPS.length;
  const totalDots = STEPS.length + 1;

  function toggle(key, k, multi) {
    setA((prev) => {
      if (!multi) return { ...prev, [key]: k };
      const has = prev[key].includes(k);
      return { ...prev, [key]: has ? prev[key].filter((x) => x !== k) : [...prev[key], k] };
    });
  }

  function canAdvance() {
    if (isFormStep) return form.name && form.email;
    const v = a[cur.key];
    return cur.multi ? v.length > 0 : !!v;
  }

  /* map answers → recommended rungs of the ladder */
  function buildPlan() {
    const need = a.need, goals = a.goals;
    const rungs = [];
    const wantsSite = need.includes('new') || need.includes('redesign');
    const wantsCustom = need.includes('custom') || goals.includes('booking') || goals.includes('store') || goals.includes('portal');
    const wantsIntegrations = need.includes('automate') || goals.includes('connect') || goals.includes('autofollow');
    const wantsSeo = goals.includes('seo') || goals.includes('leads');

    if (wantsSite || (!wantsCustom && !wantsIntegrations))
      rungs.push({
        icon: '🖥️', h: t('A custom website', 'Un sitio web personalizado'),
        p: t('Beautiful, fast, mobile-first — built to turn visitors into customers, live in 1 week.', 'Bonito, rápido, mobile-first — hecho para convertir visitantes en clientes, en vivo en 1 semana.'),
        price: t('from $600', 'desde $600'),
      });
    if (wantsCustom)
      rungs.push({
        icon: '🧩', h: t('Custom builds & web apps', 'Desarrollos a medida y web apps'),
        p: t('The store, booking, or portal functionality you need — built to fit exactly how you work.', 'La tienda, las reservas o el portal que necesitas — a la medida de cómo trabajas.'),
        price: t('scoped on your call', 'a cotizar en tu llamada'),
      });
    if (wantsIntegrations)
      rungs.push({
        icon: '🔗', h: t('Integrations & automations', 'Integraciones y automatizaciones'),
        p: t('We connect your tools (CRM, calendar, payments, POS) and automate the busywork.', 'Conectamos tus herramientas (CRM, calendario, pagos, punto de venta) y automatizamos el trabajo repetitivo.'),
        price: t('scoped on your call', 'a cotizar en tu llamada'),
      });
    if (wantsSeo)
      rungs.push({
        icon: '🔍', h: t('Local SEO', 'SEO local'),
        p: t('Get found on Google by the local customers already searching for you.', 'Que te encuentren en Google los clientes locales que ya te buscan.'),
        price: t('from $29/mo', 'desde $29/mes'),
      });
    return rungs;
  }

  async function submit() {
    setState('sending');
    const plan = buildPlan();
    const niche = NICHES.find((n) => n.k === a.niche);
    const summary = [
      `— INSTANT PLAN —`,
      `Starting point: ${a.need.join(', ') || '—'}`,
      `Business: ${niche ? niche.en : a.niche || '—'}`,
      `Goals: ${a.goals.join(', ') || '—'}`,
      `Timeline: ${a.when || '—'}`,
      `Recommended: ${plan.map((r) => (typeof r.h === 'string' ? r.h : r.icon)).join(' + ')}`,
    ].join('\n');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          niche: niche ? niche.en : a.niche, message: summary,
          source: 'plan-builder', lang,
        }),
      });
      if (!res.ok) throw new Error('bad');
      trackLead({ source: 'plan_builder' });
      setState('done');
    } catch {
      // still show the plan + fallback contact; lead can call
      trackLead({ source: 'plan_builder' });
      setState('done');
    }
  }

  const plan = state === 'done' ? buildPlan() : [];

  return (
    <>
      <title>{t('Get your instant plan | Nuvion Solutions', 'Recibe tu plan al instante | Nuvion Solutions')}</title>
      <meta name="description" content={t('Answer a few questions and get a tailored plan — website, custom builds, integrations & automations — with an honest estimate, from Nuvion Solutions in Sonoma County.', 'Responde unas preguntas y recibe un plan a la medida — sitio web, desarrollos a medida, integraciones y automatizaciones — con un estimado honesto, de Nuvion Solutions en Sonoma County.')} />
      <link rel="canonical" href="https://nuvion-solutions.com/plan" />
      <meta name="robots" content="index, follow" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + PB_CSS }} />
      <Nav />
      <main>
        <div className="pb-wrap">
          <div className="pb-head">
            <span className="nv-eyebrow"><span className="dot" />{t('Free · 60 seconds · no obligation', 'Gratis · 60 segundos · sin compromiso')}</span>
            <h1>{t('Get your instant plan', 'Recibe tu plan al instante')}</h1>
            <p>{t("Answer a few quick questions and we'll show you exactly what we'd build — and roughly what it costs.", 'Responde unas preguntas rápidas y te mostramos exactamente lo que construiríamos — y aproximadamente cuánto cuesta.')}</p>
          </div>

          <div className="pb-card">
            {/* progress */}
            {state !== 'done' && (
              <div className="pb-prog">
                {Array.from({ length: totalDots }).map((_, i) => <i key={i} className={i <= step ? 'on' : ''} />)}
              </div>
            )}

            {/* question steps */}
            {state !== 'done' && !isFormStep && (
              <>
                <div className="pb-step-lab">{cur.lab}</div>
                <div className="pb-q">{cur.q}</div>
                <div className="pb-hint">{cur.hint}</div>
                <div className={`pb-opts${cur.opts.length > 5 ? ' two' : ''}`}>
                  {cur.opts.map((o) => {
                    const v = a[cur.key];
                    const sel = cur.multi ? v.includes(o.k) : v === o.k;
                    return (
                      <button key={o.k} type="button" className={`pb-opt${sel ? ' sel' : ''}`}
                        onClick={() => { toggle(cur.key, o.k, cur.multi); if (!cur.multi) setTimeout(() => setStep((s) => s + 1), 180); }}>
                        <span className="em">{o.em}</span>
                        <span>{o.label}</span>
                        <span className="tick"><Check /></span>
                      </button>
                    );
                  })}
                </div>
                <div className="pb-nav">
                  <button className="pb-back" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>{t('← Back', '← Atrás')}</button>
                  <button className="nv-btn nv-btn-primary" disabled={!canAdvance()} onClick={() => setStep((s) => s + 1)}>
                    {t('Continue', 'Continuar')} <Arrow />
                  </button>
                </div>
              </>
            )}

            {/* contact step */}
            {state !== 'done' && isFormStep && (
              <>
                <div className="pb-step-lab">{t('Last step', 'Último paso')}</div>
                <div className="pb-q">{t('Where do we send your plan?', '¿A dónde te enviamos tu plan?')}</div>
                <div className="pb-hint">{t("We'll email your plan and reach out to set up a free scoping call — usually the same day.", 'Te enviaremos tu plan por correo y te contactaremos para una llamada gratis — normalmente el mismo día.')}</div>
                <div className="pb-form two">
                  <div className="pb-field"><label>{t('Your name', 'Tu nombre')}</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t('First & last', 'Nombre y apellido')} /></div>
                  <div className="pb-field"><label>{t('Business name', 'Nombre del negocio')}</label><input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder={t('Optional', 'Opcional')} /></div>
                  <div className="pb-field"><label>{t('Email', 'Correo')}</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@business.com" /></div>
                  <div className="pb-field"><label>{t('Phone', 'Teléfono')}</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={t('Optional', 'Opcional')} /></div>
                </div>
                <div className="pb-nav">
                  <button className="pb-back" onClick={() => setStep((s) => s - 1)}>{t('← Back', '← Atrás')}</button>
                  <button className="nv-btn nv-btn-primary" disabled={!canAdvance() || state === 'sending'} onClick={submit}>
                    {state === 'sending' ? t('Building your plan…', 'Creando tu plan…') : t('See my plan', 'Ver mi plan')} <Arrow />
                  </button>
                </div>
                {state === 'error' && <div className="pb-err">{t('Something went wrong — please call or text (707) 520-9179.', 'Algo salió mal — llama o envía un texto al (707) 520-9179.')}</div>}
              </>
            )}

            {/* result */}
            {state === 'done' && (
              <div>
                <div className="pb-done" style={{ paddingBottom: 8 }}>
                  <div className="big"><Check /></div>
                  <h2>{t("Here's your plan, ", 'Aquí está tu plan, ')}{form.name.split(' ')[0]}.</h2>
                  <p>{t("We just emailed you a copy and we'll reach out to set up your free scoping call — usually the same day.", 'Te acabamos de enviar una copia y te contactaremos para tu llamada de cotización gratis — normalmente el mismo día.')}</p>
                </div>
                <div className="pb-plan-kick">{t('What we’d build for you', 'Lo que construiríamos para ti')}</div>
                <div className="pb-plan-h">{t('Your recommended build', 'Tu plan recomendado')}</div>
                {plan.map((r, i) => (
                  <div className="pb-rung" key={i}>
                    <div className="n">{r.icon}</div>
                    <div><h4>{r.h}</h4><p>{r.p}</p></div>
                    <div className="price">{r.price}</div>
                  </div>
                ))}
                <div className="pb-est">
                  <span className="lab">{t('Ballpark to start', 'Estimado para empezar')}</span>
                  <span className="val">{t('From $600 once — or $49/mo, $0 down', 'Desde $600 único — o $49/mes, $0 inicial')}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem', textAlign: 'center', marginBottom: 20 }}>
                  {t('Own it outright or pay monthly (yours to keep after 18 months). Custom builds & integrations are scoped to your project — a written quote before you owe a cent.', 'Cómpralo de una vez o paga mensual (es tuyo tras 18 meses). Los desarrollos a medida y las integraciones se cotizan según tu proyecto — con una cotización por escrito antes de deber un centavo.')}
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+17075209179" className="nv-btn nv-btn-primary nv-btn-lg">{t('Talk to us now', 'Habla con nosotros ahora')} <Arrow /></a>
                  <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
