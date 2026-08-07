import { Link } from 'react-router-dom';
import { BASE_CSS, Footer, useReveal, Arrow, Check, ExtLink, MCTA_CSS } from '../site/shared.jsx';
import { useLang, LangToggle } from '../site/i18n.jsx';
import ironTall from '../assets/work/iron-river-tall.jpg';
import timberTall from '../assets/work/timberline-tall.jpg';
import cabanaTall from '../assets/work/blue-cabana-tall.jpg';
import sonomaTall from '../assets/work/sonoma-tall.jpg';
import sonomaHills from '../assets/local/sonoma-hills.webp';

/* ─────────────────────────────────────────────────────────────
   /websites — the "send me the information" ad-landing page.
   Sent to prospects (by email or text) who ask for "everything."
   Rebuilt in the LIGHT brand (was dark). Same proven copy, same
   parametrized price points (/websites, /websites2, /websiteinfo),
   lighter reveal instead of GSAP scroll-scrub.
───────────────────────────────────────────────────────────── */

const WI_CSS = `
.wi-nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.85);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px);border-bottom:1px solid var(--line)}
.wi-nav-in{display:flex;align-items:center;justify-content:space-between;height:70px}
.wi-nav .lnk{font-weight:600;font-size:.92rem;color:var(--brand-strong);display:inline-flex;align-items:center;gap:6px}

.wi-hero{position:relative;overflow:hidden;padding:60px 0 40px;background:linear-gradient(180deg, rgba(246,249,253,.96), rgba(246,249,253,.82) 50%, rgba(246,249,253,.7)), url(${sonomaHills});background-size:cover;background-position:center 24%}
.wi-hero-grid{display:grid;grid-template-columns:1fr;gap:36px;align-items:center}
@media(min-width:940px){.wi-hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:48px}}
.wi-h1{font-size:clamp(2.4rem,5.4vw,4rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.02;margin:16px 0 18px}
.wi-h1 em{font-style:normal;color:var(--brand)}
.wi-lede{color:var(--body);font-size:clamp(1.02rem,1.4vw,1.16rem);line-height:1.65;max-width:46ch;margin-bottom:26px}
.wi-lede strong{color:var(--ink);font-weight:700}
.wi-hero-cta{display:flex;gap:13px;flex-wrap:wrap;margin-bottom:30px}
.wi-spec{display:flex;gap:clamp(16px,2.4vw,30px);border-top:1px solid var(--line);padding-top:26px;max-width:520px}
.wi-spec div{flex:1;min-width:0;padding-left:14px;border-left:2px solid var(--brand-soft)}
.wi-spec b{display:block;font-size:1.35rem;font-weight:800;color:var(--ink);letter-spacing:-.02em;line-height:1}
.wi-spec span{display:block;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:700;margin-top:6px}

.wi-phone{position:relative;border-radius:30px;background:#0B1222;padding:7px;box-shadow:0 30px 70px -24px rgba(13,35,80,.42);border:1px solid rgba(255,255,255,.08)}
.wi-phone .scr{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:9/19;background:#fff}
.wi-phone .scr img{position:absolute;top:0;left:0;width:100%;display:block}
.wi-deck{position:relative;height:clamp(360px,36vw,470px)}
.wi-deck .wi-phone{position:absolute;top:0;left:50%;width:clamp(150px,16vw,210px)}
.wi-deck-a{transform:translateX(-108%) rotate(-7deg) scale(.9);z-index:1}
.wi-deck-b{transform:translateX(-50%) rotate(2.5deg);z-index:3}
.wi-deck-c{transform:translateX(8%) rotate(8deg) scale(.86);z-index:2}
.wi-deck-note{position:absolute;bottom:2px;left:50%;transform:translateX(-50%);z-index:5;font-size:.7rem;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);font-weight:700;white-space:nowrap}

.wi-work-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:34px;flex-wrap:wrap}
.wi-work-link{font-weight:700;font-size:.9rem;color:var(--brand-strong);display:inline-flex;align-items:center;gap:6px;white-space:nowrap}
.wi-work-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
@media(min-width:940px){.wi-work-grid{grid-template-columns:repeat(4,1fr)}}
.wi-card{display:block;background:#fff;border:1px solid var(--line);border-radius:22px;padding:14px;box-shadow:var(--shadow-sm);transition:transform .2s,box-shadow .2s,border-color .2s}
.wi-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:#c7d3e6}
.wi-card-meta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 6px 4px}
.wi-card-meta b{color:var(--ink);font-size:.94rem;font-weight:700}
.wi-card-meta span{display:block;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700;margin-top:3px}
.wi-card-arrow{flex-shrink:0;width:34px;height:34px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--brand);transition:all .2s}
.wi-card:hover .wi-card-arrow{background:var(--brand);border-color:var(--brand);color:#fff}
.wi-work-note{margin-top:20px;font-size:.86rem;color:var(--muted);line-height:1.7}

.wi-why-grid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:36px}
@media(min-width:760px){.wi-why-grid{grid-template-columns:1fr 1fr}}
.wi-why-card{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:28px 26px;box-shadow:var(--shadow-sm);transition:transform .18s,border-color .18s}
.wi-why-card:hover{transform:translateY(-4px);border-color:#c7d3e6}
.wi-why-n{font-weight:800;font-size:.82rem;letter-spacing:.06em;color:var(--brand);margin-bottom:12px}
.wi-why-card h3{color:var(--ink);font-size:1.22rem;letter-spacing:-.01em;margin-bottom:9px}
.wi-why-card p{font-size:.94rem;color:var(--body);line-height:1.6}
.wi-why-card p strong{color:var(--ink);font-weight:700}

.wi-inc-grid{display:grid;grid-template-columns:1fr;gap:40px;align-items:center}
@media(min-width:940px){.wi-inc-grid{grid-template-columns:minmax(0,6fr) minmax(0,5fr)}}
.wi-spec-list{margin-top:26px;border-top:1px solid var(--line)}
.wi-spec-row{display:grid;grid-template-columns:38px 1fr;gap:14px;padding:17px 2px;border-bottom:1px solid var(--line);align-items:baseline}
.wi-spec-row i{font-style:normal;font-weight:700;font-size:.8rem;color:var(--brand)}
.wi-spec-row b{display:block;color:var(--ink);font-size:.98rem;font-weight:700;margin-bottom:3px}
.wi-spec-row span{font-size:.88rem;color:var(--body);line-height:1.55}
.wi-inc-stage{max-width:280px;margin:0 auto;width:100%}

.wi-proc{display:grid;grid-template-columns:1fr;gap:20px;counter-reset:s}
@media(min-width:820px){.wi-proc{grid-template-columns:repeat(4,1fr)}}
.wi-step .n{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;margin-bottom:14px}
.wi-step em{font-style:normal;display:block;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--brand);font-weight:700;margin-bottom:6px}
.wi-step h4{color:var(--ink);font-size:1.06rem;margin-bottom:6px}
.wi-step p{font-size:.92rem;color:var(--body);line-height:1.6}

.wi-plans{display:grid;grid-template-columns:1fr;gap:20px;max-width:900px;margin:0 auto}
@media(min-width:800px){.wi-plans{grid-template-columns:1.15fr .85fr}}
.wi-plan{background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px 30px;box-shadow:var(--shadow)}
.wi-plan.hot{border-color:#bcd0f7;background:linear-gradient(168deg,#F4F8FF,#fff 55%);box-shadow:var(--shadow-lg)}
.wi-plan-name{color:var(--brand-strong);font-weight:700;font-size:.82rem;letter-spacing:.04em;text-transform:uppercase}
.wi-price{color:var(--ink);font-size:2.7rem;font-weight:800;letter-spacing:-.03em;margin:8px 0 2px}
.wi-price small{font-size:1.05rem;color:var(--muted);font-weight:600}
.wi-price-alt{font-size:.72rem;letter-spacing:.05em;color:var(--muted);font-weight:700;text-transform:uppercase;margin-bottom:18px}
.wi-plan ul{list-style:none;display:flex;flex-direction:column;gap:11px;margin:0}
.wi-plan ul li{display:flex;gap:10px;align-items:flex-start;font-size:.93rem;color:var(--body);line-height:1.5}
.wi-plan ul li svg{color:var(--brand);flex-shrink:0;margin-top:2px}
.wi-plan ul li strong{color:var(--ink)}
.wi-care-note{margin-top:18px;font-size:.86rem;color:var(--muted);line-height:1.55}
.wi-quote-note{text-align:center;color:var(--brand-strong);font-weight:700;font-size:.9rem;letter-spacing:.03em;margin-top:26px;text-transform:uppercase}
.wi-quote-note strong{color:var(--ink)}

.wi-after{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:820px){.wi-after{grid-template-columns:repeat(3,1fr)}}
.wi-after-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.wi-after-card i{font-style:normal;display:inline-block;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--brand);font-weight:700;margin-bottom:10px}
.wi-after-card h3{color:var(--ink);font-size:1.14rem;margin-bottom:8px}
.wi-after-card p{font-size:.92rem;color:var(--body);line-height:1.6}
.wi-after-card p strong{color:var(--ink)}
.wi-honest{margin-top:22px;background:var(--brand-soft);border:1px solid #d9e5ff;border-radius:16px;padding:26px 28px}
.wi-honest i{font-style:normal;display:block;font-weight:800;color:var(--brand-strong);font-size:.82rem;letter-spacing:.05em;text-transform:uppercase;margin-bottom:10px}
.wi-honest p{color:var(--body);font-size:.96rem;line-height:1.7}
.wi-honest p strong{color:var(--ink)}
.wi-honest a{color:var(--brand-strong);font-weight:700;text-decoration:underline}

.wi-faq{max-width:760px;margin:0 auto}
.wi-faq details{border:1px solid var(--line);border-radius:12px;background:#fff;margin-bottom:12px;box-shadow:var(--shadow-sm);overflow:hidden}
.wi-faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:700;color:var(--ink);font-size:1rem;display:flex;justify-content:space-between;align-items:center;gap:12px}
.wi-faq summary::-webkit-details-marker{display:none}
.wi-faq summary::after{content:"+";color:var(--brand);font-weight:800;font-size:1.3rem;line-height:1}
.wi-faq details[open] summary::after{content:"–"}
.wi-faq .a{padding:0 20px 18px;color:var(--body);font-size:.95rem;line-height:1.65}

.wi-band{position:relative;overflow:hidden;border-radius:26px;padding:60px 40px;text-align:center;color:#fff;background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.wi-band h2{color:#fff;font-size:clamp(1.9rem,3.6vw,2.7rem);letter-spacing:-.03em;margin-bottom:12px}
.wi-band p{color:rgba(255,255,255,.82);font-size:1.06rem;margin-bottom:26px;max-width:520px;margin-left:auto;margin-right:auto}
.wi-band .sub{color:rgba(255,255,255,.6);font-size:.86rem;margin-top:16px}
`;

function Phone({ img, alt }) {
  return (
    <div className="wi-phone"><div className="scr"><img src={img} alt={alt} loading="lazy" decoding="async" /></div></div>
  );
}

export default function WebsiteInfo({ price = { once: '900', care: '29' }, canonical = 'https://www.nuvion-solutions.com/websites' }) {
  useReveal();
  const { t } = useLang();
  const once = price.once;
  const care = price.care ?? '29';
  const monthly = price.monthly ?? '89'; // $0-down site plan, tracks the build tier ($600→49 / $900→89 / $1,800→149)

  const WORK = [
    { img: sonomaTall, name: 'Floors for Sonoma', href: 'https://floors-for-sonoma.vercel.app/', alt: t('Warm editorial flooring-studio homepage design, mobile view', 'Diseño de página de inicio de estudio de pisos, estilo editorial cálido, vista móvil') },
    { img: ironTall, name: 'Iron River Plumbing', href: 'https://websites.nuvion-solutions.com/iron-river-plumbing', alt: t('Retro-Americana plumbing homepage design, mobile view', 'Diseño de página de inicio de plomería estilo retro-americano, vista móvil') },
    { img: timberTall, name: 'Timberline Tree Service', href: 'https://websites.nuvion-solutions.com/timberline-tree-service', alt: t('Dark dramatic forest tree-service homepage design, mobile view', 'Diseño de página de inicio de servicio de árboles con bosque oscuro y dramático, vista móvil') },
    { img: cabanaTall, name: 'Blue Cabana Pool Care', href: 'https://websites.nuvion-solutions.com/blue-cabana-pools', alt: t('Retro Palm-Springs resort pool-care homepage design, mobile view', 'Diseño de página de inicio de cuidado de piscinas estilo resort retro de Palm Springs, vista móvil') },
  ];

  const WHY = [
    [t('Customers can actually find you', 'Los clientes de verdad te encuentran'), t(<>Built and SEO’d so the people Googling your service in your area land on <strong>you</strong> — not the competitor three towns over.</>, <>Creado y optimizado con SEO para que quienes buscan tu servicio en tu zona lleguen a <strong>ti</strong> — no al competidor de tres pueblos más allá.</>)],
    [t('They reach you in one tap', 'Te contactan con un solo toque'), t(<>Your number’s tappable from the first second, and a quote form drops straight into your inbox. <strong>No hunting, no friction</strong> — the call comes to you.</>, <>Tu número se puede tocar desde el primer segundo, y un formulario de cotización llega directo a tu correo. <strong>Sin buscar, sin fricción</strong> — la llamada llega a ti.</>)],
    [t('You stand out from the other guys', 'Destacas frente a los demás'), t(<>A custom design built around your business — <strong>not a template with your logo dropped in</strong>. Clean, fast, and easy to get around.</>, <>Un diseño a la medida hecho en torno a tu negocio — <strong>no una plantilla con tu logo encima</strong>. Limpio, rápido y fácil de navegar.</>)],
    [t('They trust you before you meet', 'Confían en ti antes de conocerte'), t(<>Your real work, your reviews, your finished jobs — right up front. Customers show up <strong>already sold</strong>, so you spend less time convincing and more time booking.</>, <>Tu trabajo real, tus reseñas, tus trabajos terminados — al frente y sin rodeos. Los clientes llegan <strong>ya convencidos</strong>, así pasas menos tiempo convenciendo y más tiempo agendando.</>)],
  ];

  const SPECS = [
    [t('Built from your real business', 'Construido a partir de tu negocio real'), t('Your reviews, your jobs, your towns, your photos — gathered before we write a line of code. No two come out the same.', 'Tus reseñas, tus trabajos, tus pueblos, tus fotos — reunidos antes de escribir una sola línea de código. No hay dos iguales.')],
    [t('You own it', 'Es tuyo'), t('One payment and the site is yours — design, files, domain, all of it, forever.', 'Un solo pago y el sitio es tuyo — diseño, archivos, dominio, todo, para siempre.')],
    [t('Local + on-page SEO, set up right', 'SEO local y en la página, bien configurado'), t('Built so Google understands what you do and where you do it. Ongoing monthly SEO tuning is the Pro care tier ($149/mo).', 'Creado para que Google entienda qué haces y dónde lo haces. La optimización SEO mensual continua es el nivel Pro del plan de mantenimiento ($149/mes).')],
    [t('Quote form built in', 'Formulario de cotización integrado'), t('A lead-capture form on the site — the care plan keeps requests landing in your inbox the moment they’re sent.', 'Un formulario para captar clientes en el sitio — el plan de mantenimiento hace que las solicitudes lleguen a tu correo en el momento en que se envían.')],
    [t('Your domain, handled', 'Tu dominio, resuelto'), t('Use one you own or we set one up — you just cover the ~$15–20/yr registration.', 'Usa uno que ya tengas o te configuramos uno — tú solo cubres el registro de ~$15–20 al año.')],
  ];

  const STEPS = [
    [t('Today', 'Hoy'), t('Just say you’re ready', 'Solo di que estás listo'), t('Reply to the message that sent you this — email or text, whichever it was. That’s the whole first step: no form yet, no commitment.', 'Responde al mensaje que te envió esto — correo o texto, el que haya sido. Ese es todo el primer paso: sin formulario todavía, sin compromiso.')],
    [t('This week', 'Esta semana'), t('Your details + a time', 'Tus datos + una hora'), t('A quick 5-minute form so we build from your real business — then we pick a time together to show you the result.', 'Un formulario rápido de 5 minutos para construir a partir de tu negocio real — luego elegimos una hora juntos para mostrarte el resultado.')],
    [t('The walkthrough', 'El recorrido'), t('We show you your site, live', 'Te mostramos tu sitio, en vivo'), t('We hop on a quick call and walk you through the site we built for you, section by section — your questions answered on the spot.', 'Nos conectamos en una llamada rápida y te mostramos el sitio que construimos para ti, sección por sección — tus preguntas respondidas al instante.')],
    [t('If you like it', 'Si te gusta'), t('We put it online', 'Lo ponemos en línea'), t('You approve a written quote and your site goes live — then unlimited free tweaks for the first 7 days. Nothing’s owed until you say go.', 'Apruebas una cotización por escrito y tu sitio se publica — luego ajustes gratis ilimitados durante los primeros 7 días. No debes nada hasta que tú des el visto bueno.')],
  ];

  const BUILD_INC = [
    t('Full multi-section custom site — services, photo gallery, service area', 'Sitio a la medida completo de varias secciones — servicios, galería de fotos, área de servicio'),
    t('A dedicated page for each service you offer', 'Una página dedicada para cada servicio que ofreces'),
    t('A page for every town you work — built to help you show up when that town searches', 'Una página para cada pueblo donde trabajas — creada para ayudarte a aparecer cuando ese pueblo busca'),
    t('Mobile-first with one-tap calling', 'Diseño primero para móvil con llamada de un solo toque'),
    t('Your Google reviews on the page', 'Tus reseñas de Google en la página'),
    t('Google Business Profile optimization — your Google Maps listing, set up right', 'Optimización del Perfil de Empresa de Google — tu ficha de Google Maps, bien configurada'),
    t('One-tap review link + printable QR card to grow your stars', 'Enlace de reseña de un solo toque + tarjeta QR imprimible para aumentar tus estrellas'),
    t('Quote form built into the site', 'Formulario de cotización integrado en el sitio'),
    t('Local + on-page SEO, set up right', 'SEO local y en la página, bien configurado'),
    t('Your domain handled — you just cover the ~$15–20/yr registration', 'Tu dominio resuelto — tú solo cubres el registro de ~$15–20 al año'),
    t('7 days of unlimited free revisions', '7 días de revisiones ilimitadas gratis'),
  ];

  const CARE_INC = [
    t('Fast, secure hosting with SSL — no “Not Secure” warning', 'Alojamiento rápido y seguro con SSL — sin advertencia de “No seguro”'),
    t('Daily + off-site backups', 'Copias de seguridad diarias y externas'),
    t('Malware & security protection', 'Protección contra malware y seguridad'),
    t('24/7 uptime monitoring + site health & SSL checks', 'Monitoreo de disponibilidad 24/7 + revisión de estado del sitio y SSL'),
    t('Your quote form wired to your inbox — leads land the moment they’re sent', 'Tu formulario de cotización conectado a tu correo — los clientes llegan en el momento en que se envían'),
  ];

  const AFTER = [
    [t('Days 1–7', 'Días 1–7'), t('Change anything', 'Cambia lo que sea'), t(<><strong>Unlimited free revisions for the first 7 days after it goes live.</strong> Colors, photos, wording, layout — we keep tweaking until you’d show it off.</>, <><strong>Revisiones ilimitadas gratis durante los primeros 7 días después de publicarlo.</strong> Colores, fotos, textos, diseño — seguimos ajustando hasta que lo quieras presumir.</>)],
    [t('Day 8 onward', 'Del día 8 en adelante'), t('Still covered', 'Sigues cubierto'), t(<>Small text and photo swaps stay free — anything bigger gets a <strong>written quote first</strong>, so nothing ever costs money by surprise. Want ongoing edits or monthly SEO handled for you? The <strong>Plus ($50/mo) and Pro ($149/mo)</strong> care tiers add that.</>, <>Los cambios pequeños de texto y fotos siguen siendo gratis — cualquier cosa más grande recibe primero una <strong>cotización por escrito</strong>, así nada te cuesta dinero por sorpresa. ¿Quieres ediciones continuas o SEO mensual gestionado por nosotros? Los niveles <strong>Plus ($50/mes) y Pro ($149/mes)</strong> del plan de mantenimiento lo agregan.</>)],
    [t('Any day', 'Cualquier día'), t('No trap doors', 'Sin trampas'), t(<><strong>You own the site and the domain</strong> the moment the build is paid — full stop. The care plan is optional and cancel-anytime: cancel and the site is still yours; we hand over the files.</>, <><strong>El sitio y el dominio son tuyos</strong> en el momento en que se paga la construcción — punto. El plan de mantenimiento es opcional y se cancela cuando quieras: cancela y el sitio sigue siendo tuyo; te entregamos los archivos.</>)],
  ];

  const FAQS = [
    [t('We already have a website.', 'Ya tenemos un sitio web.'), t('Then compare it side by side with what we build — that’s the whole test. Pull both up on your phone: which one loads faster, shows your reviews, and makes it easier to call? If yours wins, keep it, no hard feelings.', 'Entonces compáralo lado a lado con lo que construimos — esa es toda la prueba. Abre los dos en tu teléfono: ¿cuál carga más rápido, muestra tus reseñas y facilita llamar? Si el tuyo gana, quédatelo, sin resentimientos.')],
    [t('I’m not a tech person.', 'No soy una persona de tecnología.'), t('You never touch anything. We build it and put it online, and on the care plan we host it, secure it, back it up, and keep it monitored. Your only job is a 5-minute form and sending us photos of your work.', 'Tú nunca tocas nada. Nosotros lo construimos y lo ponemos en línea, y con el plan de mantenimiento lo alojamos, lo protegemos, lo respaldamos y lo monitoreamos. Tu única tarea es un formulario de 5 minutos y enviarnos fotos de tu trabajo.')],
    [t('Who owns the site?', '¿Quién es dueño del sitio?'), t('You do — the moment the build is paid. Design, files, domain, all of it, and you can host it anywhere. The care plan doesn’t change that: it’s just us handling hosting, security, backups, and your quote-form leads for you — with ongoing edits and SEO on the higher tiers.', 'Tú — en el momento en que se paga la construcción. Diseño, archivos, dominio, todo, y puedes alojarlo donde quieras. El plan de mantenimiento no cambia eso: solo somos nosotros encargándonos del alojamiento, la seguridad, las copias de seguridad y los clientes de tu formulario de cotización — con ediciones continuas y SEO en los niveles superiores.')],
    [t('What’s the monthly for? Do I have to take it?', '¿Para qué es la mensualidad? ¿Tengo que tomarla?'), t('The Essential tier ($29/mo) covers us hosting the site (fast, SSL-secured), daily backups, malware and uptime monitoring, and keeping your quote form wired to your inbox. Want ongoing edits or monthly SEO handled too? Plus ($50/mo) adds revisions and Pro ($149/mo) adds SEO, content, and your Google profile. It’s optional — skip it or cancel anytime and the site is still 100% yours; you’d just handle hosting and the form yourself. Most owners take it.', 'El nivel Essential ($29/mes) cubre que alojemos el sitio (rápido, protegido con SSL), copias de seguridad diarias, protección contra malware y monitoreo de disponibilidad, y que tu formulario de cotización siga conectado a tu correo. ¿Quieres también ediciones continuas o SEO mensual gestionado? Plus ($50/mes) agrega revisiones y Pro ($149/mes) agrega SEO, contenido y tu perfil de Google. Es opcional — omítela o cancela cuando quieras y el sitio sigue siendo 100% tuyo; tú solo te encargarías del alojamiento y del formulario. La mayoría de los dueños la toman.')],
    [t('How long does it take?', '¿Cuánto tarda?'), t('Days, not months. Plan on live inside a week of your onboarding form coming back.', 'Días, no meses. Cuenta con que estará en vivo dentro de 1 semana de que regreses tu formulario de inicio.')],
    [t('What do you need from me?', '¿Qué necesitas de mí?'), t('A 5-minute onboarding form, photos of your work if you have them, and your logo if you have one. That’s it — we pull the rest from what’s already public.', 'Un formulario de inicio de 5 minutos, fotos de tu trabajo si las tienes y tu logo si tienes uno. Eso es todo — el resto lo sacamos de lo que ya es público.')],
    [t('What if I don’t like what you build?', '¿Y si no me gusta lo que construyes?'), t('Then you say no and owe nothing. We build it and walk you through it live — you only pay once you’ve seen it and want it online. There’s no deposit and no obligation to keep it. Worst case, you got a free look at what your site could be.', 'Entonces dices que no y no debes nada. Lo construimos y te lo mostramos en vivo — solo pagas una vez que lo hayas visto y lo quieras en línea. No hay depósito ni obligación de quedártelo. En el peor de los casos, obtuviste un vistazo gratis de cómo podría ser tu sitio.')],
    [t('What if I want changes later?', '¿Y si quiero cambios más adelante?'), t('You get unlimited free revisions for the first 7 days after it goes live. After that, small text and photo swaps stay free — bigger work is quoted in writing before we touch it. Want ongoing edits or monthly SEO done for you? The Plus ($50/mo) and Pro ($149/mo) care tiers add that on top.', 'Tienes revisiones ilimitadas gratis durante los primeros 7 días después de publicarlo. Después de eso, los cambios pequeños de texto y fotos siguen siendo gratis — el trabajo más grande se cotiza por escrito antes de tocarlo. ¿Quieres ediciones continuas o SEO mensual hecho por nosotros? Los niveles Plus ($50/mes) y Pro ($149/mes) del plan de mantenimiento lo agregan además.')],
  ];

  return (
    <>
      <title>Websites — the Work, the Process, the Price | Nuvion</title>
      <meta name="description" content="The full rundown on Nuvion Solutions websites — live examples you can tap through, what the build includes, the exact price, and how revisions work." />
      <link rel="canonical" href={canonical} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + MCTA_CSS + WI_CSS }} />

      <header className="wi-nav"><div className="nv-wrap wi-nav-in">
        <Link to="/" className="nv-logo" aria-label="Nuvion Solutions home"><span className="mark">N</span><span className="wm"><b>NUVION</b><small>SOLUTIONS</small></span></Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a className="lnk" href="https://websites.nuvion-solutions.com" target="_blank" rel="noopener noreferrer">{t('See live examples', 'Ve ejemplos en vivo')} <ExtLink /></a>
          <LangToggle />
        </div>
      </div></header>

      <main>
        {/* HERO */}
        <section className="wi-hero"><div className="nv-wrap">
          <div className="wi-hero-grid">
            <div>
              <span className="nv-eyebrow"><span className="dot" />{t('The full rundown', 'El resumen completo')}</span>
              <h1 className="wi-h1">{t(<>You asked for the info. <em>Here’s all of it.</em></>, <>Pediste la información. <em>Aquí está toda.</em></>)}</h1>
              <p className="wi-lede">{t(<>What every site includes, the <strong>exact price</strong>, how changes work — and real, tappable examples below. <strong>Three minutes to read, start to finish.</strong></>, <>Lo que incluye cada sitio, el <strong>precio exacto</strong>, cómo funcionan los cambios — y ejemplos reales que puedes tocar abajo. <strong>Tres minutos de lectura, de principio a fin.</strong></>)}</p>
              <div className="wi-hero-cta">
                <a className="nv-btn nv-btn-primary nv-btn-lg" href="#wi-pricing">{t('See the price', 'Ve el precio')} <Arrow /></a>
                <Link to="/book" className="nv-btn nv-btn-ghost nv-btn-lg">{t('Book a 10-minute call', 'Reserva una llamada de 10 minutos')}</Link>
              </div>
              <div className="wi-spec">
                <div><b>{t('1 week', '1 semana')}</b><span>{t('To launch', 'Para lanzar')}</span></div>
                <div><b>$0</b><span>{t('Owed before approval', 'A pagar antes de aprobar')}</span></div>
                <div><b>{t('7 days', '7 días')}</b><span>{t('Free revisions', 'Revisiones gratis')}</span></div>
              </div>
            </div>
            <div className="wi-deck rv" aria-hidden="true">
              <div className="wi-phone wi-deck-a"><div className="scr"><img src={ironTall} alt="" decoding="async" /></div></div>
              <div className="wi-phone wi-deck-b"><div className="scr"><img src={timberTall} alt="" decoding="async" /></div></div>
              <div className="wi-phone wi-deck-c"><div className="scr"><img src={cabanaTall} alt="" decoding="async" /></div></div>
              <span className="wi-deck-note">{t('Demo sites — tap any below', 'Sitios de demostración — toca cualquiera abajo')}</span>
            </div>
          </div>
        </div></section>

        {/* PROOF RAIL */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="wi-work-head rv">
            <div>
              <div className="nv-kicker">{t('The work', 'El trabajo')}</div>
              <h2 className="nv-h2">{t('Don’t take our word for it. Tap through the real thing.', 'No nos creas solo de palabra. Toca y explora lo real.')}</h2>
            </div>
            <a className="wi-work-link" href="https://websites.nuvion-solutions.com" target="_blank" rel="noopener noreferrer">{t('Full portfolio', 'Portafolio completo')} <ExtLink /></a>
          </div>
          <div className="wi-work-grid">
            {WORK.map((w) => (
              <a className="wi-card rv" key={w.name} href={w.href} target="_blank" rel="noopener noreferrer">
                <Phone img={w.img} alt={w.alt} />
                <div className="wi-card-meta">
                  <div><b>{w.name}</b><span>{t('Demo site', 'Sitio de demostración')}</span></div>
                  <div className="wi-card-arrow" aria-hidden="true"><Arrow /></div>
                </div>
              </a>
            ))}
          </div>
          <p className="wi-work-note rv">{t('These are examples of our work — we don’t put live client sites on our portfolio, for obvious reasons.', 'Estos son ejemplos de nuestro trabajo — no ponemos sitios de clientes en vivo en nuestro portafolio, por razones obvias.')}</p>
        </div></section>

        {/* WHY IT MATTERS */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="rv">
            <div className="nv-kicker">{t('Why it matters', 'Por qué importa')}</div>
            <h2 className="nv-h2">{t('What a site like this does for your business.', 'Lo que un sitio así hace por tu negocio.')}</h2>
            <p className="nv-lead" style={{ maxWidth: '56ch' }}>{t('A website isn’t decoration. Done right, it’s the hardest-working salesperson you’ve got — online 24/7, turning people who’ve never met you into booked jobs.', 'Un sitio web no es decoración. Bien hecho, es el vendedor más trabajador que tienes — en línea las 24 horas, convirtiendo a gente que nunca te ha conocido en trabajos agendados.')}</p>
          </div>
          <div className="wi-why-grid">
            {WHY.map(([t2, d], i) => (
              <div className="wi-why-card rv" key={i}><div className="wi-why-n">0{i + 1}</div><h3>{t2}</h3><p>{d}</p></div>
            ))}
          </div>
        </div></section>

        {/* INCLUDED */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="wi-inc-grid">
            <div className="rv">
              <div className="nv-kicker">{t('Comes standard', 'Viene de serie')}</div>
              <h2 className="nv-h2">{t('Included with every build.', 'Incluido en cada sitio.')}</h2>
              <p className="nv-lead">{t('Not add-ons. Not an upsell later. This is the floor.', 'No son extras. No es una venta adicional más adelante. Este es el mínimo.')}</p>
              <div className="wi-spec-list">
                {SPECS.map(([t2, d], i) => (
                  <div className="wi-spec-row" key={i}><i>0{i + 1}</i><div><b>{t2}</b><span>{d}</span></div></div>
                ))}
              </div>
            </div>
            <div className="wi-inc-stage rv"><Phone img={ironTall} alt={t('Mobile homepage with one-tap calling and a reviews section', 'Página de inicio móvil con llamada de un solo toque y una sección de reseñas')} /></div>
          </div>
        </div></section>

        {/* PROCESS */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="rv">
            <div className="nv-kicker">{t('The process', 'El proceso')}</div>
            <h2 className="nv-h2">{t('From your reply to a live site. Days, not months.', 'De tu respuesta a un sitio en vivo. Días, no meses.')}</h2>
          </div>
          <div className="wi-proc" style={{ marginTop: 40 }}>
            {STEPS.map(([when, title, body], i) => (
              <div className="wi-step rv" key={i}><div className="n">{i + 1}</div><em>{when}</em><h4>{title}</h4><p>{body}</p></div>
            ))}
          </div>
        </div></section>

        {/* PRICING */}
        <section className="nv-sec soft" id="wi-pricing"><div className="nv-wrap">
          <div className="nv-center rv">
            <div className="nv-kicker">{t('The deal', 'La oferta')}</div>
            <h2 className="nv-h2">{t('One build. One price. You own it.', 'Un sitio. Un precio. Es tuyo.')}</h2>
            <p className="nv-lead" style={{ margin: '0 auto' }}>{t(<>${once} builds the whole thing — everything below, every time, no stripped-down tier. Care starts at ${care}/mo and keeps it hosted, secure, and backed up — optional, and recommended.</>, <>${once} construye todo — todo lo de abajo, siempre, sin versiones recortadas. El mantenimiento desde ${care}/mes lo mantiene alojado, seguro y respaldado — opcional y recomendado.</>)}</p>
          </div>
          <div className="wi-plans" style={{ marginTop: 42 }}>
            <div className="wi-plan hot rv">
              <div className="wi-plan-name">{t('The build — everything included', 'La construcción — todo incluido')}</div>
              <div className="wi-price">${once}</div>
              <div className="wi-price-alt">{t('One-time — you own it: design, files, domain, everything', 'Pago único — es tuyo: diseño, archivos, dominio, todo')}</div>
              <ul>{BUILD_INC.map((f, i) => <li key={i}><Check /> <span>{f}</span></li>)}</ul>
            </div>
            <div className="wi-plan rv">
              <div className="wi-plan-name">{t('The care plan — Essential, optional', 'El plan de mantenimiento — Essential, opcional')}</div>
              <div className="wi-price"><small>{t('from', 'desde')} </small>${care}<small>{t('/mo', '/mes')}</small></div>
              <div className="wi-price-alt">{t('Cancel anytime — the site stays yours either way', 'Cancela cuando quieras — el sitio sigue siendo tuyo de cualquier forma')}</div>
              <ul>{CARE_INC.map((f, i) => <li key={i}><Check /> <span>{f}</span></li>)}</ul>
              <p className="wi-care-note">{t('This is Essential. Want more? Plus ($50/mo) adds ongoing revisions; Pro ($149/mo) adds local SEO, content, and your Google Business Profile. Skip it entirely and the site is still 100% yours — you’d just handle hosting and the form on your own. Most owners take it.', 'Este es Essential. ¿Quieres más? Plus ($50/mes) agrega revisiones continuas; Pro ($149/mes) agrega SEO local, contenido y tu Perfil de Empresa de Google. Omítelo por completo y el sitio sigue siendo 100% tuyo — tú solo te encargarías del alojamiento y del formulario por tu cuenta. La mayoría de los dueños lo toman.')}</p>
            </div>
          </div>
          <p className="wi-quote-note rv">{t(<>The price you see is the price — you get it in a <strong>written quote</strong> before you owe a cent.</>, <>El precio que ves es el precio — lo recibes en una <strong>cotización por escrito</strong> antes de que debas un centavo.</>)}</p>
          <p className="wi-quote-note rv" style={{ marginTop: 8 }}>{t(<>Prefer $0 down? We also build for <strong>${monthly}/mo</strong> — hosting &amp; care included, yours to keep after 18 months. Just ask.</>, <>¿Prefieres $0 inicial? También construimos por <strong>${monthly}/mes</strong> — hosting y cuidado incluidos, tuyo después de 18 meses. Solo pregunta.</>)}</p>
        </div></section>

        {/* AFTER LAUNCH */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="rv">
            <div className="nv-kicker">{t('After launch', 'Después del lanzamiento')}</div>
            <h2 className="nv-h2">{t('Changes, ownership, and the exit door.', 'Cambios, propiedad y la puerta de salida.')}</h2>
          </div>
          <div className="wi-after" style={{ marginTop: 38 }}>
            {AFTER.map(([when, title, body], i) => (
              <div className="wi-after-card rv" key={i}><i>{when}</i><h3>{title}</h3><p>{body}</p></div>
            ))}
          </div>
          <div className="wi-honest rv">
            <i>{t('What we won’t promise you', 'Lo que no te vamos a prometer')}</i>
            <p>{t(<>A guaranteed #1 spot on Google. <strong>Nobody can honestly promise that</strong> — anyone who does is selling you something. What we do promise: a site built and SEO’d properly — with ongoing monthly SEO tuning available on the Pro care tier — that makes you the easiest company in town to size up and call. The full plain-English terms are at <Link to="/agreement">nuvion-solutions.com/agreement</Link> — two minutes, no legal wall.</>, <>Un puesto #1 garantizado en Google. <strong>Nadie puede prometer eso con honestidad</strong> — quien lo hace te está vendiendo algo. Lo que sí prometemos: un sitio bien construido y con buen SEO — con optimización SEO mensual continua disponible en el nivel Pro del plan de mantenimiento — que te convierte en la empresa más fácil de evaluar y de llamar del pueblo. Los términos completos en lenguaje sencillo están en <Link to="/agreement">nuvion-solutions.com/agreement</Link> — dos minutos, sin muro legal.</>)}</p>
          </div>
        </div></section>

        {/* FAQ */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Straight answers', 'Respuestas claras')}</div><h2 className="nv-h2">{t('The questions everyone asks.', 'Las preguntas que todos hacen.')}</h2></div>
          <div className="wi-faq">
            {FAQS.map(([q, a], i) => (
              <details className="rv" key={i}><summary>{q}</summary><div className="a">{a}</div></details>
            ))}
          </div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="wi-band rv">
            <h2>{t('Ready when you are.', 'Listos cuando tú lo estés.')}</h2>
            <p>{t('Reply to the message that sent you here — or book a quick call. We’ll build it, show you live, and you decide. Nothing’s owed until you say go.', 'Responde al mensaje que te trajo aquí — o reserva una llamada rápida. Lo construimos, te lo mostramos en vivo y tú decides. No debes nada hasta que tú des el visto bueno.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
            <div className="sub">{t(<>⚡ Live in 1 week or you don’t pay · or call / text <a style={{ color: '#fff', fontWeight: 700 }} href="tel:+17075209179">(707) 520-9179</a></>, <>⚡ En vivo en 1 semana o no pagas · o llama / escribe <a style={{ color: '#fff', fontWeight: 700 }} href="tel:+17075209179">(707) 520-9179</a></>)}</div>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
