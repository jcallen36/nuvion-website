import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check } from './shared.jsx';
import { IntakeForm, FORM_CSS } from './IntakeForm.jsx';
import PreviewsFeed from './PreviewsFeed.jsx';
import { useLang } from './i18n.jsx';
import sonomaHills from '../assets/local/sonoma-hills.webp';

/* Productized recurring-revenue offer page for the TRADES niche.
   Grand-slam offer (value-stacked, one monthly price, $0 down, risk-reversed),
   self-serve funnel. NOTE: $199/mo is a sensible default — adjust to your number. */

const TR_CSS = `
.tr-hero{position:relative;overflow:hidden;padding:76px 0 54px;text-align:center;background:linear-gradient(180deg, rgba(9,16,30,.9), rgba(9,16,30,.8) 55%, rgba(9,16,30,.9)), url(${sonomaHills});background-size:cover;background-position:center}
.tr-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:.74rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#ffd24a;background:rgba(255,210,74,.1);border:1px solid rgba(255,210,74,.28);padding:7px 15px;border-radius:100px;margin-bottom:20px}
.tr-h1{font-size:clamp(2.2rem,5vw,3.6rem);color:#fff;font-weight:800;letter-spacing:-.035em;line-height:1.04;margin:0 auto 18px;max-width:16ch}
.tr-h1 .g{background:linear-gradient(100deg,#ffd24a,#ffb020);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.tr-sub{font-size:clamp(1.05rem,1.6vw,1.26rem);color:rgba(255,255,255,.84);max-width:620px;margin:0 auto 30px;line-height:1.6}
.tr-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap}
.tr-ticks{display:flex;gap:22px;justify-content:center;flex-wrap:wrap;margin-top:26px;color:rgba(255,255,255,.82);font-size:.92rem;font-weight:600}
.tr-ticks span{display:inline-flex;align-items:center;gap:8px}
.tr-ticks svg{color:#ffd24a;width:17px;height:17px}

/* the offer stack */
.tr-offer{max-width:920px;margin:0 auto}
.tr-stack{display:grid;grid-template-columns:1fr;gap:0;background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:var(--shadow)}
@media(min-width:820px){.tr-stack{grid-template-columns:1.35fr .9fr}}
.tr-stack-list{padding:34px 34px 30px}
.tr-stack-list h3{color:var(--ink);font-size:1.2rem;margin-bottom:18px;letter-spacing:-.01em}
.tr-stack-list ul{list-style:none;display:flex;flex-direction:column;gap:14px;padding:0;margin:0}
.tr-stack-list li{display:flex;gap:12px;align-items:flex-start}
.tr-stack-list li svg{color:var(--brand);flex-shrink:0;margin-top:2px;width:19px;height:19px}
.tr-stack-list li b{color:var(--ink);display:block;font-size:1rem}
.tr-stack-list li span{color:var(--body);font-size:.9rem;line-height:1.45}
.tr-stack-list li .val{margin-left:auto;color:var(--muted);font-size:.82rem;white-space:nowrap;font-weight:600}
.tr-price{background:radial-gradient(120% 130% at 50% 0%, #12213f, #0A1222 80%);color:#fff;padding:36px 30px;display:flex;flex-direction:column;justify-content:center;text-align:center}
.tr-price .anchor{color:rgba(255,255,255,.55);text-decoration:line-through;font-size:1rem}
.tr-price .big{font-size:3.2rem;font-weight:800;letter-spacing:-.03em;line-height:1;margin:6px 0 2px}
.tr-price .big small{font-size:1.1rem;color:rgba(255,255,255,.7);font-weight:600;letter-spacing:0}
.tr-price .down{color:#ffd24a;font-weight:700;font-size:.95rem;margin-bottom:20px}
.tr-price .nv-btn{width:100%;justify-content:center}
.tr-price .fine{color:rgba(255,255,255,.6);font-size:.82rem;margin-top:14px;line-height:1.5}
.tr-own{text-align:center;color:var(--muted);font-size:.95rem;margin-top:20px}
.tr-own a{color:var(--brand-strong);font-weight:700}

/* guarantee strip */
.tr-guar{max-width:820px;margin:0 auto;background:linear-gradient(180deg,#F4F8FF,#fff 72%);border:1px solid #dbe6fb;border-radius:20px;padding:30px 32px;text-align:center}
.tr-guar .lab{font-weight:800;font-size:.76rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand);margin-bottom:10px}
.tr-guar h3{color:var(--ink);font-size:clamp(1.3rem,2.4vw,1.7rem);letter-spacing:-.02em;margin-bottom:8px}
.tr-guar p{color:var(--body);font-size:1rem;max-width:52ch;margin:0 auto}

/* steps */
.tr-steps{display:grid;grid-template-columns:1fr;gap:16px;max-width:900px;margin:0 auto}
@media(min-width:760px){.tr-steps{grid-template-columns:repeat(3,1fr)}}
.tr-step{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.tr-step .n{width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.tr-step h4{color:var(--ink);font-size:1.1rem;margin-bottom:6px}
.tr-step p{color:var(--body);font-size:.94rem;line-height:1.55}

.tr-faq{max-width:760px;margin:0 auto}
.tr-faq details{border:1px solid var(--line);border-radius:12px;padding:2px 20px;margin-bottom:12px;background:#fff}
.tr-faq summary{cursor:pointer;font-weight:700;color:var(--ink);padding:16px 0;list-style:none;font-size:1.02rem}
.tr-faq summary::-webkit-details-marker{display:none}
.tr-faq summary::after{content:'+';float:right;color:var(--brand-strong);font-weight:700}
.tr-faq details[open] summary::after{content:'\\2212'}
.tr-faq details p{color:var(--body);font-size:.97rem;line-height:1.6;padding:0 0 16px}
`;

export default function TradesPage() {
  useReveal();
  const { t } = useLang();

  const stack = [
    { b: t('A custom website built for the trades', 'Un sitio web a la medida de los oficios'), s: t('Not a template — designed to make you look like the most trusted outfit in the area.', 'Nada de plantillas — diseñado para que parezcas la empresa más confiable de la zona.'), val: '$1,800+' },
    { b: t('Found on Google (local SEO)', 'Que te encuentren en Google (SEO local)'), s: t('Set up and tuned so people searching your service in your area find you first.', 'Configurado y afinado para que quienes buscan tu servicio en tu zona te encuentren primero.'), val: '$1,800/yr' },
    { b: t('Your reviews, front and center', 'Tus reseñas, al frente'), s: t('The trust signal that wins the call — pulled onto your site automatically.', 'La señal de confianza que gana la llamada — en tu sitio automáticamente.'), val: '$600/yr' },
    { b: t('One-tap calling + quote requests', 'Llamada en un toque + cotizaciones'), s: t('Every visitor is one tap from calling you or sending a job request.', 'Cada visitante está a un toque de llamarte o enviarte una solicitud.'), val: t('included', 'incluido') },
    { b: t('Hosting, security & backups', 'Hosting, seguridad y respaldos'), s: t('Fast, secure, always online. We handle all of it — you never think about it.', 'Rápido, seguro, siempre en línea. Nos encargamos de todo — tú nunca lo piensas.'), val: '$350/yr' },
    { b: t('Ongoing edits & updates', 'Ediciones y actualizaciones continuas'), s: t('New photos, prices, services — just text us. Done the same day.', 'Nuevas fotos, precios, servicios — solo escríbenos. Hecho el mismo día.'), val: '$600/yr' },
    { b: t('A real person, same-day', 'Una persona real, el mismo día'), s: t('No tickets, no runaround. Text or call and a human answers.', 'Sin tickets, sin vueltas. Escribe o llama y responde una persona.'), val: t('priceless', 'no tiene precio') },
  ];

  const steps = [
    { h: t('We build your preview — free', 'Construimos tu vista previa — gratis'), p: t('Tell us about your business and we build a real preview of your site before you owe a cent.', 'Cuéntanos sobre tu negocio y construimos una vista previa real de tu sitio antes de que debas un centavo.') },
    { h: t('You approve it', 'Tú lo apruebas'), p: t('We walk you through it live. Love it? Great. Not yet? We tweak until it’s right — or you walk away.', 'Te lo mostramos en vivo. ¿Te encanta? Perfecto. ¿Aún no? Lo ajustamos hasta que quede — o te vas.') },
    { h: t('Live in 1 week — and we keep it growing', 'En vivo en 1 semana — y lo hacemos crecer', ), p: t('It goes live within the week, and every month we keep it fast, found, and booking jobs.', 'Sale en vivo dentro de la semana, y cada mes lo mantenemos rápido, encontrado y consiguiendo trabajos.') },
  ];

  const faqs = [
    { q: t('What does the monthly cover?', '¿Qué cubre el pago mensual?'), a: t('Everything above — the site, hosting, security, local SEO, reviews, and ongoing edits. One price, no surprises, cancel anytime.', 'Todo lo de arriba — el sitio, hosting, seguridad, SEO local, reseñas y ediciones. Un precio, sin sorpresas, cancela cuando quieras.') },
    { q: t('Do I own my website?', '¿El sitio es mío?'), a: t('Yes. There’s $0 down, and the site becomes yours to keep after 24 months. Prefer to own it outright now? You can buy it once instead — just ask.', 'Sí. Es $0 inicial, y el sitio es tuyo para siempre después de 24 meses. ¿Prefieres comprarlo de una vez? También puedes — solo pregunta.') },
    { q: t('What if I already have a website?', '¿Y si ya tengo un sitio?'), a: t('We’ll rebuild it into something that actually books jobs — same offer, same guarantee.', 'Lo reconstruimos en algo que de verdad consigue trabajos — misma oferta, misma garantía.') },
    { q: t('Is there a contract?', '¿Hay contrato?'), a: t('No long-term contract. Cancel anytime. We keep your business by getting you jobs, not by locking you in.', 'Sin contrato a largo plazo. Cancela cuando quieras. Nos ganamos tu negocio consiguiéndote trabajos, no atándote.') },
  ];

  return (
    <>
      <title>{t('Websites for the Trades — Book More Jobs | Nuvion Solutions', 'Sitios web para los oficios — Consigue más trabajos | Nuvion Solutions')}</title>
      <meta name="description" content={t('A custom website for trade businesses — found on Google, built to book more jobs. $0 down, live in 1 week or your first month’s free. Get a free preview.', 'Un sitio web a la medida para negocios de oficios — encontrado en Google, hecho para conseguir más trabajos. $0 inicial, todo incluido, en vivo en 1 semana o tu primer mes es gratis. Recibe tu vista previa gratis.')} />
      <link rel="canonical" href="https://www.nuvion-solutions.com/trades" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + TR_CSS + FORM_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="tr-hero"><div className="nv-wrap">
          <span className="tr-eyebrow"><span className="dot" style={{ background: '#ffd24a' }} />{t('For excavation, land-clearing & the trades', 'Para excavación, desmonte y los oficios')}</span>
          <h1 className="tr-h1">{t(<>The website that keeps your <span className="g">phone ringing</span>.</>, <>El sitio web que mantiene tu <span className="g">teléfono sonando</span>.</>)}</h1>
          <p className="tr-sub">{t("Built for trade businesses — a custom site, found on Google, that turns “just looked you up” into “booked the job.” $0 down. Everything handled. Cancel anytime.", 'Hecho para negocios de oficios — un sitio a la medida, encontrado en Google, que convierte “te busqué” en “te contraté.” $0 inicial. Todo incluido. Cancela cuando quieras.')}</p>
          <div className="tr-cta">
            <a href="#tr-start" className="nv-btn nv-btn-primary nv-btn-lg">{t('Get my free preview', 'Recibe mi vista previa gratis')} <Arrow /></a>
            <a href="tel:+17075209179" className="nv-btn nv-btn-white nv-btn-lg">{t('Call / text us', 'Llámanos / escríbenos')}</a>
          </div>
          <div className="tr-ticks">
            <span><Check /> {t('$0 down', '$0 inicial')}</span>
            <span><Check /> {t('Live in 1 week', 'En vivo en 1 semana')}</span>
            <span><Check /> {t('Cancel anytime', 'Cancela cuando quieras')}</span>
            <span><Check /> {t('You own it', 'Es tuyo')}</span>
          </div>
        </div></section>

        {/* THE OFFER STACK */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('The offer', 'La oferta')}</div><h2 className="nv-h2">{t('Everything to keep your phone ringing — one simple plan', 'Todo para mantener tu teléfono sonando — un plan simple')}</h2></div>
          <div className="tr-offer">
            <div className="tr-stack rv">
              <div className="tr-stack-list">
                <h3>{t('What you get, every month:', 'Lo que recibes, cada mes:')}</h3>
                <ul>
                  {stack.map((s, i) => (
                    <li key={i}><Check /><div><b>{s.b}</b><span>{s.s}</span></div><span className="val">{s.val}</span></li>
                  ))}
                </ul>
              </div>
              <div className="tr-price">
                <div className="anchor">{t('Worth $5,000+ a year', 'Vale más de $5,000 al año')}</div>
                <div className="big">$199<small> {t('/mo', '/mes')}</small></div>
                <div className="down">{t('$0 down · cancel anytime', '$0 inicial · cancela cuando quieras')}</div>
                <a href="#tr-start" className="nv-btn nv-btn-white nv-btn-lg">{t('Start with a free preview', 'Empieza con una vista previa gratis')} <Arrow /></a>
                <div className="fine">{t('Yours to keep after 24 months. Prefer to own it now? From $900 one-time.', 'Tuyo para siempre después de 24 meses. ¿Prefieres comprarlo ya? Desde $900 pago único.')}</div>
              </div>
            </div>
          </div>
        </div></section>

        {/* GUARANTEE */}
        <section className="nv-sec soft" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="tr-guar rv">
            <div className="lab">{t('Our guarantee', 'Nuestra garantía')}</div>
            <h3>{t('Live in 1 week — or your first month’s free.', 'En vivo en 1 semana — o tu primer mes es gratis.')}</h3>
            <p>{t('Once we have your photos and go-ahead, your site is live within the week. If we miss it, your first month is free. That’s how sure we are.', 'Una vez que tenemos tus fotos y luz verde, tu sitio está en vivo dentro de la semana. Si no cumplimos, tu primer mes es gratis. Así de seguros estamos.')}</p>
          </div>
        </div></section>

        {/* HOW IT WORKS */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('How it works', 'Cómo funciona')}</div><h2 className="nv-h2">{t('You see it before you pay for it', 'Lo ves antes de pagarlo')}</h2></div>
          <div className="tr-steps">
            {steps.map((s, i) => (
              <div className="tr-step rv" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="n">{i + 1}</div><h4>{s.h}</h4><p>{s.p}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* PROOF — live trade builds (auto-updates from previews.json) */}
        <PreviewsFeed heading={t('Trade sites we’ve built', 'Sitios de oficios que hemos hecho')} sub={t('Real builds for excavation, land-clearing and the trades. Tap any to see it live.', 'Sitios reales para excavación, desmonte y oficios. Toca cualquiera para verlo en vivo.')} />

        {/* FAQ */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Questions', 'Preguntas')}</div><h2 className="nv-h2">{t('Straight answers', 'Respuestas claras')}</h2></div>
          <div className="tr-faq rv">
            {faqs.map((f, i) => <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>
        </div></section>

        {/* START / FORM */}
        <section className="nv-sec" id="tr-start"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Get started', 'Empieza')}</div><h2 className="nv-h2">{t('Get your free preview', 'Recibe tu vista previa gratis')}</h2><p className="nv-lead" style={{ margin: '0 auto' }}>{t('Tell us about your business. We’ll build a real preview of your site — no cost, no obligation — and show you exactly what we’d do.', 'Cuéntanos sobre tu negocio. Construiremos una vista previa real de tu sitio — sin costo, sin compromiso — y te mostramos exactamente lo que haríamos.')}</p></div>
          <div className="rv" style={{ maxWidth: 640, margin: '30px auto 0' }}><IntakeForm source="trades" /></div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
