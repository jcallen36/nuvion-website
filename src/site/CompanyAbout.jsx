import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check, LogoWall, WALL_CSS, IconWeb, IconSeo, IconMkt } from './shared.jsx';
import { useLang } from './i18n.jsx';
import davidHero from '../assets/team/david.webp';
import jaedenHero from '../assets/team/jaeden.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import sonomaVineyard from '../assets/local/sonoma-vineyard.webp';

const CA_CSS = `
.ca-hero{padding:66px 0 48px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.84) 45%, rgba(246,249,253,.72)), url(${sonomaHills});background-size:cover;background-position:center 26%}
.ca-h1{font-size:clamp(2.2rem,4.6vw,3.4rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:18px auto 16px;max-width:16ch}
.ca-hero p.sub{font-size:clamp(1.04rem,1.5vw,1.22rem);color:var(--body);max-width:620px;margin:0 auto;line-height:1.6}
.ca-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap;margin-top:28px}

.ca-do{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:820px){.ca-do{grid-template-columns:repeat(3,1fr)}}
.ca-do-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.ca-do-card .ic{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.ca-do-card .ic.c1{background:#EAF1FF;color:#2563EB}.ca-do-card .ic.c2{background:#E2FAF2;color:#0EA47A}.ca-do-card .ic.c3{background:#FFF1E4;color:#F97316}
.ca-do-card h3{color:var(--ink);font-size:1.14rem;margin-bottom:7px}
.ca-do-card p{font-size:.94rem}

.ca-story{max-width:720px;margin:0 auto;text-align:center}
.ca-story p{color:var(--body);font-size:1.08rem;line-height:1.75;margin-bottom:16px}
.ca-story p strong{color:var(--ink)}
.ca-mission{max-width:760px;margin:36px auto 0;text-align:center;background:linear-gradient(180deg,#F4F8FF,#fff 72%);border:1px solid #dbe6fb;border-radius:20px;padding:34px 30px}
.ca-mission .lab{font-weight:800;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand);margin-bottom:12px}
.ca-mission p{color:var(--ink);font-size:clamp(1.15rem,2vw,1.45rem);font-weight:700;line-height:1.35;letter-spacing:-.01em}

.ca-team{display:grid;grid-template-columns:1fr;gap:24px;max-width:900px;margin:0 auto}
@media(min-width:720px){.ca-team{grid-template-columns:1fr 1fr}}
.ca-mem{background:#fff;border:1px solid var(--line);border-radius:18px;padding:30px;text-align:center;box-shadow:var(--shadow);transition:transform .16s,box-shadow .16s}
.ca-mem:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.ca-mem img{width:108px;height:108px;border-radius:50%;object-fit:cover;object-position:center top;margin:0 auto 16px;border:3px solid var(--brand-soft)}
.ca-mem .role{color:var(--brand-strong);font-weight:700;font-size:.84rem;margin-bottom:4px}
.ca-mem h3{color:var(--ink);font-size:1.3rem;margin-bottom:10px}
.ca-mem p{color:var(--body);font-size:.96rem;margin-bottom:18px}
.ca-mem .nv-btn{width:100%;justify-content:center}

.ca-band{position:relative;overflow:hidden;border-radius:26px;padding:62px 40px;text-align:center;color:#fff;background:linear-gradient(rgba(9,16,30,.78),rgba(9,16,30,.82)), url(${sonomaVineyard});background-size:cover;background-position:center}
.ca-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.5rem);letter-spacing:-.03em;margin-bottom:12px}
.ca-band p{color:rgba(255,255,255,.82);font-size:1.06rem;margin-bottom:26px}
`;

export default function CompanyAbout() {
  useReveal();
  const { t } = useLang();
  return (
    <>
      <title>About Nuvion Solutions — Web Design in Sonoma County</title>
      <meta name="description" content="Nuvion Solutions is a Sonoma County web design studio — two real people who design, build, and care for your website, and actually answer. Meet the team." />
      <link rel="canonical" href="https://www.nuvion-solutions.com/about" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Organization', name: 'Nuvion Solutions',
        url: 'https://www.nuvion-solutions.com', telephone: '+1-707-520-9179', email: 'team@nuvion-solutions.com',
        areaServed: 'Sonoma County, California',
        founder: [
          { '@type': 'Person', name: 'Jaeden Callender', jobTitle: 'Co-founder', worksFor: { '@type': 'Organization', name: 'Nuvion Solutions' } },
        ],
        employee: [
          { '@type': 'Person', name: 'David Prudhomme', jobTitle: 'Sales & Business Development', worksFor: { '@type': 'Organization', name: 'Nuvion Solutions' } },
        ],
      }) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + CA_CSS + WALL_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="ca-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{t('About Nuvion · Santa Rosa, CA', 'Sobre Nuvion · Santa Rosa, CA')}</span>
          <h1 className="ca-h1">{t('The real people behind your website.', 'Las personas reales detrás de tu sitio web.')}</h1>
          <p className="sub">{t('Nuvion Solutions is a small Sonoma County web-design studio. No account managers, no offshore team — just two people who design, build, and stay with you.', 'Nuvion Solutions es un pequeño estudio de diseño web en Sonoma County. Sin gerentes de cuenta, sin equipos en el extranjero — solo dos personas que diseñan, construyen y se quedan contigo.')}</p>
          <div className="ca-cta">
            <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
            <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</Link>
          </div>
        </div></section>

        {/* WHAT WE DO */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('What we do', 'Lo que hacemos')}</div><h2 className="nv-h2">{t('Web design, done right — and handled for you', 'Diseño web, bien hecho — y del que nos encargamos por ti')}</h2></div>
          <div className="ca-do">
            <div className="ca-do-card rv"><div className="ic c1"><IconWeb /></div><h3>{t('Web Design', 'Diseño web')}</h3><p>{t('Custom, high-converting websites built around your brand and your customers.', 'Sitios web personalizados y de alta conversión, construidos en torno a tu marca y tus clientes.')}</p></div>
            <div className="ca-do-card rv d1"><div className="ic c2"><IconSeo /></div><h3>{t('SEO', 'SEO')}</h3><p>{t('Get found on Google by the local customers who need you, month after month.', 'Que los clientes locales que te necesitan te encuentren en Google, mes tras mes.')}</p></div>
            <div className="ca-do-card rv d2"><div className="ic c3"><IconMkt /></div><h3>{t('Marketing & AI', 'Marketing e IA')}</h3><p>{t("Reviews, follow-up, and AI tools when you're ready to scale — all optional.", 'Reseñas, seguimiento y herramientas de IA cuando estés listo para crecer — todo opcional.')}</p></div>
          </div>
        </div></section>

        {/* STORY */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Our story', 'Nuestra historia')}</div><h2 className="nv-h2">{t('Why we do what we do', 'Por qué hacemos lo que hacemos')}</h2></div>
          <div className="ca-story rv">
            <p>{t('We were tired of watching local businesses get burned — overcharged for a website, then left on read the moment they needed a change.', 'Estábamos cansados de ver a negocios locales salir perjudicados: que les cobraran de más por un sitio web y luego los dejaran en visto en el momento en que necesitaban un cambio.')}</p>
            <p>{t(<><strong>So we built the opposite.</strong> A studio where you work directly with the people building your site, get answers the same day, and never get stuck in a ticket queue. We're based in Santa Rosa and proud to serve Sonoma County and beyond.</>, <><strong>Así que construimos lo contrario.</strong> Un estudio donde trabajas directamente con las personas que construyen tu sitio, obtienes respuestas el mismo día y nunca te quedas atrapado en una cola de tickets. Estamos en Santa Rosa y con orgullo servimos a Sonoma County y más allá.</>)}</p>
          </div>
          <div className="ca-mission rv">
            <div className="lab">{t('Our mission', 'Nuestra misión')}</div>
            <p>{t("To give every local business a website they're genuinely proud of — and a real partner who stays in their corner long after launch.", 'Darle a cada negocio local un sitio web del que se sienta genuinamente orgulloso — y un aliado real que se queda a su lado mucho después del lanzamiento.')}</p>
          </div>
        </div></section>

        {/* TEAM */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('The team', 'El equipo')}</div><h2 className="nv-h2">{t("Who you'll work with", 'Con quién trabajarás')}</h2></div>
          <div className="ca-team">
            <div className="ca-mem rv">
              <img src={davidHero} alt="David Prudhomme" loading="lazy" />
              <div className="role">{t('Sales & Business Development', 'Ventas y Desarrollo de Negocios')}</div>
              <h3>David Prudhomme</h3>
              <p>{t('Your main point of contact — makes sure your project runs smoothly and you get exactly what you need, start to finish.', 'Tu punto de contacto principal — se asegura de que tu proyecto avance sin problemas y obtengas exactamente lo que necesitas, de principio a fin.')}</p>
              <Link to="/david" className="nv-btn nv-btn-ghost">{t('Meet David', 'Conoce a David')} <Arrow /></Link>
            </div>
            <div className="ca-mem rv d1">
              <img src={jaedenHero} alt="Jaeden Callender" loading="lazy" />
              <div className="role">{t('Co-founder · Client Success', 'Cofundador · Éxito del cliente')}</div>
              <h3>Jaeden Callender</h3>
              <p>{t('Makes sure every client gets exactly what they need, exactly when they need it.', 'Se asegura de que cada cliente reciba exactamente lo que necesita, justo cuando lo necesita.')}</p>
              <Link to="/jaeden" className="nv-btn nv-btn-ghost">{t('Meet Jaeden', 'Conoce a Jaeden')} <Arrow /></Link>
            </div>
          </div>
        </div></section>

        {/* TRUSTED BY */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Trusted by', 'Nos respaldan')}</div><h2 className="nv-h2">{t('Businesses across Sonoma County & beyond', 'Negocios en Sonoma County y más allá')}</h2></div>
          <div className="rv"><LogoWall /></div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="ca-band rv">
            <h2>{t("Let's build something great together.", 'Construyamos algo grandioso juntos.')}</h2>
            <p>{t("Book a free call — we'll show you exactly what we'd build for you.", 'Reserva una llamada gratis y te mostraremos exactamente lo que construiríamos para ti.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
