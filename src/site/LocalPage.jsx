import { Link, useParams } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check, LogoWall, WALL_CSS, IconWeb, IconSeo, IconMkt } from './shared.jsx';
import { useLang } from './i18n.jsx';
import { TOWN_INFO } from './towns-data.js';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import workFloors from '../assets/work/floors.webp';
import workDumolin from '../assets/work/dumolin.webp';
import workCalegal from '../assets/work/calegal.webp';

/* Per-town local landing pages: /web-design/:town — the same template,
   parametrized by town, so we own "web designer near me" across Sonoma County. */
export const LOCAL_TOWNS = {
  'santa-rosa': 'Santa Rosa',
  'petaluma': 'Petaluma',
  'rohnert-park': 'Rohnert Park',
  'windsor': 'Windsor',
  'healdsburg': 'Healdsburg',
  'sonoma': 'Sonoma',
  'sebastopol': 'Sebastopol',
  'cotati': 'Cotati',
  'cloverdale': 'Cloverdale',
  'guerneville': 'Guerneville',
  'forestville': 'Forestville',
  'glen-ellen': 'Glen Ellen',
  'kenwood': 'Kenwood',
  'penngrove': 'Penngrove',
  'bodega-bay': 'Bodega Bay',
  'occidental': 'Occidental',
  'geyserville': 'Geyserville',
  'graton': 'Graton',
};

const LP_CSS = `
.lp-hero{padding:64px 0 46px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.82) 45%, rgba(246,249,253,.72)), url(${sonomaHills});background-size:cover;background-position:center 28%}
.lp-h1{font-size:clamp(2.2rem,4.6vw,3.4rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:16px auto 14px;max-width:17ch}
.lp-hero p.sub{font-size:clamp(1.04rem,1.5vw,1.2rem);color:var(--body);max-width:610px;margin:0 auto;line-height:1.6}
.lp-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap;margin:28px 0 14px}
.lp-ticks{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.lp-ticks span{display:inline-flex;align-items:center;gap:7px}.lp-ticks svg{color:var(--brand)}
.lp-grid3{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:820px){.lp-grid3{grid-template-columns:repeat(3,1fr)}}
.lp-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.lp-card .ic{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.lp-card .ic.c1{background:#EAF1FF;color:#2563EB}.lp-card .ic.c2{background:#E2FAF2;color:#0EA47A}.lp-card .ic.c3{background:#FFF1E4;color:#F97316}
.lp-card h3{color:var(--ink);font-size:1.12rem;margin-bottom:7px}.lp-card p{font-size:.94rem}
.lp-why{display:grid;grid-template-columns:1fr;gap:13px;max-width:760px;margin:0 auto}
.lp-why .it{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:13px;padding:16px 18px;box-shadow:var(--shadow-sm)}
.lp-why .it svg{color:var(--brand);flex-shrink:0;margin-top:2px}
.lp-why .it b{color:var(--ink);font-size:.98rem}.lp-why .it span{color:var(--body);font-size:.92rem}
.lp-work{display:grid;grid-template-columns:1fr;gap:18px;margin-bottom:30px}
@media(min-width:760px){.lp-work{grid-template-columns:repeat(3,1fr)}}
.lp-shot{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff;box-shadow:var(--shadow);height:196px}
.lp-shot img{width:100%;height:100%;object-fit:cover;object-position:top}
.lp-band{position:relative;overflow:hidden;border-radius:26px;padding:56px 40px;text-align:center;color:#fff;background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.lp-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.4rem);letter-spacing:-.03em;margin-bottom:12px}
.lp-band p{color:rgba(255,255,255,.82);font-size:1.05rem;margin-bottom:24px}
.lp-faq{max-width:760px;margin:0 auto}
.lp-faq details{border:1px solid var(--line);border-radius:12px;background:#fff;margin-bottom:12px;box-shadow:var(--shadow-sm);overflow:hidden}
.lp-faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:700;color:var(--ink);font-size:1rem;display:flex;justify-content:space-between;gap:12px}
.lp-faq summary::-webkit-details-marker{display:none}
.lp-faq summary::after{content:"+";color:var(--brand);font-weight:800;font-size:1.3rem;line-height:1}
.lp-faq details[open] summary::after{content:"–"}
.lp-faq .a{padding:0 20px 18px;color:var(--body);font-size:.95rem;line-height:1.65}
.lp-local{max-width:730px;margin:0 auto;text-align:center;color:var(--body);font-size:1.1rem;line-height:1.72}
`;

export default function LocalPage() {
  useReveal();
  const { t } = useLang();
  const { town: slug } = useParams();
  const town = LOCAL_TOWNS[slug] || 'Sonoma County';
  const known = !!LOCAL_TOWNS[slug];
  const info = TOWN_INFO[slug];
  const canonical = `https://www.nuvion-solutions.com/web-design/${slug}`;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Nuvion Solutions — Web Design in ${town}`,
    url: canonical,
    telephone: '+1-707-520-9179',
    email: 'team@nuvion-solutions.com',
    image: 'https://www.nuvion-solutions.com/og-image.png',
    priceRange: '$$',
    areaServed: { '@type': 'City', name: town },
    address: { '@type': 'PostalAddress', addressLocality: 'Santa Rosa', addressRegion: 'CA', addressCountry: 'US' },
    knowsAbout: ['Web design', 'Local SEO', 'Website development'],
  };

  const works = [
    { img: workFloors, alt: 'Floors for Sonoma website' },
    { img: workDumolin, alt: 'DuMolin Community Living website' },
    { img: workCalegal, alt: 'California Legal Document Excellence website' },
  ];

  return (
    <>
      <title>{`Web Design in ${town}, CA | Nuvion Solutions`}</title>
      <meta name="description" content={`Custom web design for ${town} businesses — high-converting websites designed one-on-one by a real local team that answers same-day. Live in 1 week, or you don't pay. Serving ${town} and all of Sonoma County.`} />
      <link rel="canonical" href={canonical} />
      {!known && <meta name="robots" content="noindex, follow" />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + LP_CSS + WALL_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="lp-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{t('Web Design', 'Diseño web')} · {town}, CA</span>
          <h1 className="lp-h1">{t(<>Web design in {town} that wins you <span className="nv-grad">more customers</span>.</>, <>Diseño web en {town} que te gana <span className="nv-grad">más clientes</span>.</>)}</h1>
          <p className="sub">{t(`Custom, high-converting websites for ${town} businesses — designed one-on-one by a real local team that answers same-day and builds your exact vision. You own it.`, `Sitios web personalizados y de alta conversión para negocios de ${town} — diseñados uno a uno por un equipo local real que responde el mismo día y construye tu visión exacta. Es tuyo.`)}</p>
          <div className="lp-cta">
            <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
            <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</Link>
          </div>
          <div className="lp-ticks">
            <span><Check /> {t('Live in 1 week — or you don’t pay', 'En vivo en 1 semana — o no pagas')}</span>
            <span><Check /> {t('You own it', 'Es tuyo')}</span>
            <span><Check /> {t('Same-day answers', 'Respuestas el mismo día')}</span>
          </div>
        </div></section>

        {/* UNIQUE LOCAL INTRO (per-town, differentiates each page for SEO) */}
        {info && (
          <section className="nv-sec" style={{ paddingBottom: 0 }}><div className="nv-wrap">
            <p className="lp-local rv">{info.intro}</p>
          </div></section>
        )}

        {/* WHY A LOCAL SITE */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Why it matters', 'Por qué importa')}</div><h2 className="nv-h2">{t(`What a great website does for a ${town} business`, `Lo que un buen sitio web hace por un negocio de ${town}`)}</h2></div>
          <div className="lp-grid3">
            <div className="lp-card rv"><div className="ic c1"><IconSeo /></div><h3>{t(`Found by ${town} customers`, `Que te encuentren en ${town}`)}</h3><p>{t(`Built and SEO’d so the people Googling your service in ${town} land on you — not the competitor down the road.`, `Construido y optimizado para SEO para que quienes buscan tu servicio en ${town} lleguen a ti — no a la competencia de al lado.`)}</p></div>
            <div className="lp-card rv d1"><div className="ic c2"><IconWeb /></div><h3>{t('Contact in one tap', 'Contacto en un toque')}</h3><p>{t('A tappable phone number and a quote form that drops straight into your inbox — no friction, the call comes to you.', 'Un número tocable y un formulario de cotización que llega directo a tu correo — sin fricción, la llamada llega a ti.')}</p></div>
            <div className="lp-card rv d2"><div className="ic c3"><IconMkt /></div><h3>{t('Stand out locally', 'Destaca localmente')}</h3><p>{t(`A custom design built around your brand — not a template every other business in ${town} is using.`, `Un diseño personalizado en torno a tu marca — no una plantilla que usa cualquier otro negocio en ${town}.`)}</p></div>
          </div>
        </div></section>

        {/* LOCAL + HUMAN PITCH */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Local & human', 'Local y humano')}</div><h2 className="nv-h2">{t(`Your ${town} web team — not a faceless AI agency`, `Tu equipo web en ${town} — no una agencia de IA sin rostro`)}</h2></div>
          <div className="lp-why">
            <div className="it rv"><Check /><div><b>{t('A real, local person', 'Una persona real y local')}</b> <span>{t(`Based right here in Sonoma County — we can meet you in ${town} in person, not hide behind a chatbot.`, `Aquí mismo en Sonoma County — podemos vernos en persona en ${town}, no escondernos tras un chatbot.`)}</span></div></div>
            <div className="it rv"><Check /><div><b>{t('Your exact vision, built by hand', 'Tu visión exacta, hecha a mano')}</b> <span>{t('We sit down with you one-on-one and turn your ideas into something real — then refine until it’s exactly right.', 'Nos sentamos contigo uno a uno y convertimos tus ideas en algo real — y lo ajustamos hasta que quede perfecto.')}</span></div></div>
            <div className="it rv"><Check /><div><b>{t('A partner, not a transaction', 'Un aliado, no una transacción')}</b> <span>{t('We answer same-day and stay with you long after launch — text us in two years and we’re still here.', 'Respondemos el mismo día y nos quedamos contigo mucho después del lanzamiento — escríbenos en dos años y seguimos aquí.')}</span></div></div>
            <div className="it rv"><Check /><div><b>{t('You own everything', 'Todo es tuyo')}</b> <span>{t('Your site, files, and domain end up yours to keep — no lock-in, no hostage situations.', 'Tu sitio, archivos y dominio terminan siendo tuyos para siempre — sin ataduras, sin situaciones de rehén.')}</span></div></div>
          </div>
        </div></section>

        {/* WORK */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Recent work', 'Trabajo reciente')}</div><h2 className="nv-h2">{t('Real sites, real Sonoma County businesses', 'Sitios reales, negocios reales de Sonoma County')}</h2></div>
          <div className="lp-work">
            {works.map((w, i) => (
              <div className={`lp-shot rv d${i + 1}`} key={i}><img src={w.img} alt={w.alt} loading="lazy" /></div>
            ))}
          </div>
          <div className="rv"><LogoWall /></div>
          <div style={{ textAlign: 'center', marginTop: 30 }}><Link to="/work" className="nv-btn nv-btn-ghost">{t('See all our work', 'Ve todo nuestro trabajo')} <Arrow /></Link></div>
        </div></section>

        {/* LOCAL FAQ */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">FAQ</div><h2 className="nv-h2">{t(`Web design in ${town} — common questions`, `Diseño web en ${town} — preguntas frecuentes`)}</h2></div>
          <div className="lp-faq">
            {info && <details className="rv"><summary>{t(`What kind of ${town} businesses do you build websites for?`, `¿Para qué tipo de negocios de ${town} construyen sitios?`)}</summary><div className="a">{info.faqA}</div></details>}
            <details className="rv"><summary>{t(`Do you work with ${town} businesses?`, `¿Trabajan con negocios de ${town}?`)}</summary><div className="a">{t(`Yes — we're based in Santa Rosa, right nearby, and we work with businesses across ${town} and all of Sonoma County. We can meet in person or handle everything remotely, whichever you prefer.`, `Sí — estamos en Santa Rosa, muy cerca, y trabajamos con negocios en ${town} y en todo Sonoma County. Podemos vernos en persona o manejar todo de forma remota, como prefieras.`)}</div></details>
            <details className="rv"><summary>{t(`How fast can my ${town} website launch?`, `¿Qué tan rápido puede lanzarse mi sitio en ${town}?`)}</summary><div className="a">{t("One week — guaranteed. Once we have your content and go-ahead, your custom site goes live within a week. If we miss it, you don't pay.", 'Una semana — garantizado. Una vez que tenemos tu contenido y luz verde, tu sitio personalizado se lanza en una semana. Si no lo logramos, no pagas.')}</div></details>
            <details className="rv"><summary>{t('How much does a website cost?', '¿Cuánto cuesta un sitio web?')}</summary><div className="a">{t('Two easy ways. Own it outright from $600 one-time (Launch $600 · Business $900 · Growth from $1,800), or go monthly from $49/mo with $0 down — hosting and care included, and the site is yours to keep after 18 months. Optional care plans start at $29/mo (hosting, security & backups); the $50 plan adds ongoing edits and the $149 plan adds ongoing local SEO. You get a written quote before you owe a cent.', 'Dos formas fáciles. Págalo una vez desde $600 (Launch $600 · Business $900 · Growth desde $1,800), o ve mensual desde $49/mes con $0 inicial — hosting y mantenimiento incluidos, y el sitio es tuyo para siempre después de 18 meses. Los planes de mantenimiento opcionales empiezan en $29/mes (hosting, seguridad y respaldos); el plan de $50 agrega ediciones continuas y el de $149 agrega SEO local continuo. Recibes una cotización por escrito antes de deber un centavo.')}</div></details>
          </div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="lp-band rv">
            <h2>{t(`Ready to grow your ${town} business?`, `¿Listo para hacer crecer tu negocio en ${town}?`)}</h2>
            <p>{t("Book a free vision session — we'll show you exactly what we'd build. No pressure.", 'Reserva una sesión de visión gratis — te mostramos exactamente lo que construiríamos. Sin presión.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
