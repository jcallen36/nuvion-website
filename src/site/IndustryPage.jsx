import { Link, useParams } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check, LogoWall, WALL_CSS } from './shared.jsx';
import { useLang } from './i18n.jsx';
import { INDUSTRIES } from './industries-data.js';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import workFloors from '../assets/work/floors.webp';
import workDumolin from '../assets/work/dumolin.webp';
import workCalegal from '../assets/work/calegal.webp';

/* Industry landing pages: /web-design-for/:industry — captures
   "[industry] web design" searches, each with unique industry content. */

const IND_CSS = `
.ind-hero{padding:64px 0 46px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.82) 45%, rgba(246,249,253,.72)), url(${sonomaHills});background-size:cover;background-position:center 28%}
.ind-h1{font-size:clamp(2.2rem,4.6vw,3.4rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:16px auto 14px;max-width:18ch}
.ind-hero p.sub{font-size:clamp(1.04rem,1.5vw,1.2rem);color:var(--body);max-width:640px;margin:0 auto;line-height:1.6}
.ind-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap;margin:28px 0 14px}
.ind-ticks{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.ind-ticks span{display:inline-flex;align-items:center;gap:7px}.ind-ticks svg{color:var(--brand)}
.ind-intro{max-width:720px;margin:0 auto;text-align:center;color:var(--body);font-size:1.1rem;line-height:1.75}
.ind-grid3{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:820px){.ind-grid3{grid-template-columns:repeat(3,1fr)}}
.ind-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.ind-card .n{width:34px;height:34px;border-radius:10px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;font-weight:800;margin-bottom:14px}
.ind-card h3{color:var(--ink);font-size:1.12rem;margin-bottom:7px}.ind-card p{font-size:.94rem}
.ind-feat{display:grid;grid-template-columns:1fr;gap:12px;max-width:760px;margin:0 auto}
@media(min-width:640px){.ind-feat{grid-template-columns:1fr 1fr}}
.ind-feat .it{display:flex;gap:11px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:12px;padding:15px 17px;box-shadow:var(--shadow-sm)}
.ind-feat .it svg{color:var(--brand);flex-shrink:0;margin-top:2px}.ind-feat .it span{color:var(--ink);font-size:.95rem;font-weight:600}
.ind-work{display:grid;grid-template-columns:1fr;gap:18px;margin-bottom:30px}
@media(min-width:760px){.ind-work{grid-template-columns:repeat(3,1fr)}}
.ind-shot{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff;box-shadow:var(--shadow);aspect-ratio:16/9}
.ind-shot img{width:100%;height:100%;object-fit:cover;object-position:center bottom}
.ind-band{position:relative;overflow:hidden;border-radius:26px;padding:56px 40px;text-align:center;color:#fff;background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.ind-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.4rem);letter-spacing:-.03em;margin-bottom:12px}
.ind-band p{color:rgba(255,255,255,.82);font-size:1.05rem;margin-bottom:24px}
.ind-faq{max-width:760px;margin:0 auto}
.ind-faq details{border:1px solid var(--line);border-radius:12px;background:#fff;margin-bottom:12px;box-shadow:var(--shadow-sm);overflow:hidden}
.ind-faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:700;color:var(--ink);font-size:1rem;display:flex;justify-content:space-between;gap:12px}
.ind-faq summary::-webkit-details-marker{display:none}
.ind-faq summary::after{content:"+";color:var(--brand);font-weight:800;font-size:1.3rem;line-height:1}
.ind-faq details[open] summary::after{content:"–"}
.ind-faq .a{padding:0 20px 18px;color:var(--body);font-size:.95rem;line-height:1.65}
.ind-other{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:820px;margin:0 auto}
.ind-other a{font-size:.88rem;font-weight:600;color:var(--brand-strong);background:var(--brand-soft);border:1px solid #d7e3fb;border-radius:100px;padding:8px 16px}
.ind-other a:hover{background:#dfeaff}
`;

export default function IndustryPage() {
  useReveal();
  const { t } = useLang();
  const { industry: slug } = useParams();
  const cfg = INDUSTRIES[slug];

  // Unknown slug → soft 404-ish (noindex) fallback pointing back to services.
  if (!cfg) {
    return (
      <>
        <title>Industry Web Design | Nuvion Solutions</title>
        <meta name="robots" content="noindex, follow" />
        <style dangerouslySetInnerHTML={{ __html: BASE_CSS }} />
        <Nav />
        <main><section className="nv-sec"><div className="nv-wrap nv-center">
          <h1 className="nv-h2">{t('Web design for your industry', 'Diseño web para tu industria')}</h1>
          <p className="nv-lead">{t('Tell us about your business and we’ll build a site tailored to it.', 'Cuéntanos sobre tu negocio y construiremos un sitio a tu medida.')}</p>
          <div style={{ marginTop: 20 }}><Link to="/services/web-design" className="nv-btn nv-btn-primary">{t('See web design', 'Ver diseño web')} <Arrow /></Link></div>
        </div></section></main>
        <Footer />
      </>
    );
  }

  const canonical = `https://nuvion-solutions.com/web-design-for/${slug}`;
  const others = Object.values(INDUSTRIES).filter((i) => i.slug !== slug);

  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: `${cfg.name} Web Design`, serviceType: `Web design for ${cfg.name.toLowerCase()}`,
      areaServed: 'Sonoma County, CA', url: canonical,
      provider: { '@type': 'ProfessionalService', name: 'Nuvion Solutions', telephone: '+1-707-520-9179', url: 'https://nuvion-solutions.com' },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: cfg.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nuvion-solutions.com/' },
      { '@type': 'ListItem', position: 2, name: 'Web Design', item: 'https://nuvion-solutions.com/services/web-design' },
      { '@type': 'ListItem', position: 3, name: `${cfg.name} Web Design`, item: canonical },
    ] },
  ];

  const works = [
    { img: workFloors, alt: 'Floors for Sonoma website' },
    { img: workDumolin, alt: 'DuMolin Community Living website' },
    { img: workCalegal, alt: 'California Legal Document Excellence website' },
  ];

  return (
    <>
      <title>{cfg.metaTitle}</title>
      <meta name="description" content={cfg.metaDesc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={cfg.metaTitle} />
      <meta property="og:description" content={cfg.metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + IND_CSS + WALL_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="ind-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{cfg.name} · {t('Sonoma County', 'Sonoma County')}</span>
          <h1 className="ind-h1">{cfg.h1a} <span className="nv-grad">{cfg.h1b}</span>.</h1>
          <p className="sub">{cfg.sub}</p>
          <div className="ind-cta">
            <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
            <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</Link>
          </div>
          <div className="ind-ticks">
            <span><Check /> {t('Live in 1 week — or you don’t pay', 'En vivo en 1 semana — o no pagas')}</span>
            <span><Check /> {t('You own it', 'Es tuyo')}</span>
            <span><Check /> {t('Real local team', 'Equipo local real')}</span>
          </div>
        </div></section>

        {/* INTRO */}
        <section className="nv-sec"><div className="nv-wrap">
          <p className="ind-intro rv">{cfg.intro}</p>
        </div></section>

        {/* WHAT THE SITE DOES FOR THIS INDUSTRY */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Built for you', 'Hecho para ti')}</div><h2 className="nv-h2">{t(`What a great ${cfg.name.toLowerCase()} website does`, `Lo que hace un gran sitio para ${cfg.name.toLowerCase()}`)}</h2></div>
          <div className="ind-grid3">
            {cfg.solves.map((s, i) => (
              <div className={`ind-card rv d${i}`} key={i}><div className="n">{i + 1}</div><h3>{s.h}</h3><p>{s.p}</p></div>
            ))}
          </div>
        </div></section>

        {/* FEATURES */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Included', 'Incluido')}</div><h2 className="nv-h2">{t('What comes with your site', 'Lo que incluye tu sitio')}</h2></div>
          <div className="ind-feat">
            {cfg.features.map((f, i) => (
              <div className="it rv" key={i}><Check /><span>{f}</span></div>
            ))}
          </div>
        </div></section>

        {/* PROOF */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Recent work', 'Trabajo reciente')}</div><h2 className="nv-h2">{t('Real sites, real Sonoma County businesses', 'Sitios reales, negocios reales de Sonoma County')}</h2></div>
          <div className="ind-work">
            {works.map((w, i) => (
              <div className={`ind-shot rv d${i + 1}`} key={i}><img src={w.img} alt={w.alt} loading="lazy" /></div>
            ))}
          </div>
          <div className="rv"><LogoWall /></div>
          <div style={{ textAlign: 'center', marginTop: 30 }}><Link to="/work" className="nv-btn nv-btn-ghost">{t('See all our work', 'Ve todo nuestro trabajo')} <Arrow /></Link></div>
        </div></section>

        {/* FAQ */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">FAQ</div><h2 className="nv-h2">{cfg.name} {t('web design — common questions', 'diseño web — preguntas frecuentes')}</h2></div>
          <div className="ind-faq">
            {cfg.faqs.map((f, i) => (
              <details className="rv" key={i}><summary>{f.q}</summary><div className="a">{f.a}</div></details>
            ))}
          </div>
        </div></section>

        {/* OTHER INDUSTRIES (internal links) */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Also for', 'También para')}</div><h2 className="nv-h2">{t('Web design for every kind of business', 'Diseño web para todo tipo de negocio')}</h2></div>
          <div className="ind-other rv">
            {others.map((o) => (
              <Link key={o.slug} to={`/web-design-for/${o.slug}`}>{o.name}</Link>
            ))}
          </div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="ind-band rv">
            <h2>{t(`Ready for a ${cfg.name.toLowerCase()} site that works?`, `¿Listo para un sitio de ${cfg.name.toLowerCase()} que funcione?`)}</h2>
            <p>{t("Book a free vision session — we'll show you exactly what we'd build. No pressure.", 'Reserva una sesión de visión gratis — te mostramos exactamente lo que construiríamos. Sin presión.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
