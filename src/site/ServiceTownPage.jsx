import { Link, useParams } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check, LogoWall, WALL_CSS } from './shared.jsx';
import { useLang } from './i18n.jsx';
import { SERVICES } from './service-town-data.js';
import { LOCAL_TOWNS } from './LocalPage.jsx';
import { TOWN_INFO } from './towns-data.js';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import workFloors from '../assets/work/floors.webp';
import workCalegal from '../assets/work/calegal.webp';
import workDumolin from '../assets/work/dumolin.webp';

/* Service × town landing pages: /:service/:town (e.g. /seo/petaluma).
   Combines per-SERVICE content (service-town-data) with the UNIQUE per-town
   content (towns-data) so every page is substantively different, not a
   doorway/thin page.

   INDEXING POLICY: web design / SEO / marketing have real "[service] [town]"
   local search demand, so those are indexed. Automation and custom builds
   don't get searched by town — kept live + internally linked, but noindex,
   so Google isn't asked to index low-demand pages (quality-forward). */
const NOINDEX_SERVICES = new Set(['automation', 'custom-builds']);

const ST_CSS = `
.st-hero{padding:64px 0 46px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.82) 45%, rgba(246,249,253,.72)), url(${sonomaHills});background-size:cover;background-position:center 28%}
.st-h1{font-size:clamp(2.1rem,4.4vw,3.2rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.07;margin:16px auto 14px;max-width:18ch}
.st-hero p.sub{font-size:clamp(1.04rem,1.5vw,1.18rem);color:var(--body);max-width:640px;margin:0 auto;line-height:1.6}
.st-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap;margin:28px 0 14px}
.st-ticks{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.st-ticks span{display:inline-flex;align-items:center;gap:7px}.st-ticks svg{color:var(--brand)}
.st-lead{max-width:730px;margin:0 auto;color:var(--body);font-size:1.08rem;line-height:1.72}
.st-lead p+p{margin-top:16px}
.st-local{max-width:730px;margin:18px auto 0;padding:20px 24px;background:var(--brand-soft);border:1px solid #d7e3fb;border-radius:16px;color:var(--body);font-size:1rem;line-height:1.66}
.st-grid3{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:820px){.st-grid3{grid-template-columns:repeat(3,1fr)}}
.st-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 24px;box-shadow:var(--shadow-sm)}
.st-card .n{width:34px;height:34px;border-radius:10px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;font-weight:800;margin-bottom:14px}
.st-card h3{color:var(--ink);font-size:1.1rem;margin-bottom:7px}.st-card p{font-size:.94rem}
.st-feat{display:grid;grid-template-columns:1fr;gap:12px;max-width:760px;margin:0 auto}
@media(min-width:640px){.st-feat{grid-template-columns:1fr 1fr}}
.st-feat .it{display:flex;gap:11px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:12px;padding:15px 17px;box-shadow:var(--shadow-sm)}
.st-feat .it svg{color:var(--brand);flex-shrink:0;margin-top:2px}.st-feat .it span{color:var(--ink);font-size:.95rem;font-weight:600}
.st-band{position:relative;overflow:hidden;border-radius:26px;padding:56px 40px;text-align:center;color:#fff;background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.st-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.4rem);letter-spacing:-.03em;margin-bottom:12px}
.st-band p{color:rgba(255,255,255,.82);font-size:1.05rem;margin-bottom:24px}
.st-faq{max-width:760px;margin:0 auto}
.st-faq details{border:1px solid var(--line);border-radius:12px;background:#fff;margin-bottom:12px;box-shadow:var(--shadow-sm);overflow:hidden}
.st-faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:700;color:var(--ink);font-size:1rem;display:flex;justify-content:space-between;gap:12px}
.st-faq summary::-webkit-details-marker{display:none}
.st-faq summary::after{content:"+";color:var(--brand);font-weight:800;font-size:1.3rem;line-height:1}
.st-faq details[open] summary::after{content:"–"}
.st-faq .a{padding:0 20px 18px;color:var(--body);font-size:.95rem;line-height:1.65}
.st-other{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:820px;margin:0 auto}
.st-other a{font-size:.88rem;font-weight:600;color:var(--brand-strong);background:var(--brand-soft);border:1px solid #d7e3fb;border-radius:100px;padding:8px 16px}
.st-other a:hover{background:#dfeaff}
`;

export default function ServiceTownPage({ service }) {
  useReveal();
  const { t } = useLang();
  const { town: slug } = useParams();
  const svc = SERVICES[service];
  const town = LOCAL_TOWNS[slug];
  const info = TOWN_INFO[slug];

  // Unknown service or town → soft fallback, noindex (avoids indexing junk combos).
  if (!svc || !town) {
    return (
      <>
        <title>Web Services in Sonoma County | Nuvion Solutions</title>
        <meta name="robots" content="noindex, follow" />
        <style dangerouslySetInnerHTML={{ __html: BASE_CSS }} />
        <Nav />
        <main><section className="nv-sec"><div className="nv-wrap nv-center">
          <h1 className="nv-h2">{t('Web design, SEO & more across Sonoma County', 'Diseño web, SEO y más en Sonoma County')}</h1>
          <div style={{ marginTop: 20 }}><Link to="/services/web-design" className="nv-btn nv-btn-primary">{t('See our services', 'Ve nuestros servicios')} <Arrow /></Link></div>
        </div></section></main>
        <Footer />
      </>
    );
  }

  const fill = (s) => (s || '').replaceAll('{town}', town);
  const canonical = `https://www.nuvion-solutions.com/${service}/${slug}`;
  const otherServices = Object.values(SERVICES).filter((s) => s.slug !== service);

  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: `${svc.metaLead} in ${town}`, serviceType: svc.metaLead, areaServed: { '@type': 'City', name: town }, url: canonical,
      provider: { '@type': 'ProfessionalService', name: 'Nuvion Solutions', telephone: '+1-707-520-9179', url: 'https://www.nuvion-solutions.com', address: { '@type': 'PostalAddress', addressLocality: 'Santa Rosa', addressRegion: 'CA', addressCountry: 'US' } },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: svc.faqs.map((f) => ({ '@type': 'Question', name: fill(f.q), acceptedAnswer: { '@type': 'Answer', text: fill(f.a) } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nuvion-solutions.com/' },
      { '@type': 'ListItem', position: 2, name: svc.name, item: canonical },
    ] },
  ];

  const works = [
    { img: workFloors, alt: 'Floors for Sonoma website' },
    { img: workCalegal, alt: 'California Legal Document Excellence website' },
    { img: workDumolin, alt: 'DuMolin Community Living website' },
  ];

  return (
    <>
      <title>{`${svc.metaLead} in ${town}, CA | Nuvion Solutions`}</title>
      <meta name="description" content={fill(svc.metaDescTpl)} />
      <link rel="canonical" href={canonical} />
      {NOINDEX_SERVICES.has(service) && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={`${svc.metaLead} in ${town}, CA | Nuvion Solutions`} />
      <meta property="og:description" content={fill(svc.metaDescTpl)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + ST_CSS + WALL_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="st-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{svc.name} · {town}, CA</span>
          <h1 className="st-h1">{svc.h1a} <span className="nv-grad">{town}</span> {svc.h1b}.</h1>
          <p className="sub">{fill(svc.sub)}</p>
          <div className="st-cta">
            <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
            <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</Link>
          </div>
          <div className="st-ticks">
            <span><Check /> {t('Real local team', 'Equipo local real')}</span>
            <span><Check /> {t('No long-term contract', 'Sin contrato a largo plazo')}</span>
            <span><Check /> {t('Plain-English reporting', 'Reportes claros')}</span>
          </div>
        </div></section>

        {/* LEAD + UNIQUE LOCAL CONTEXT */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="st-lead rv"><p>{fill(svc.lead)}</p></div>
          {info && <div className="st-local rv">📍 {info.intro}</div>}
        </div></section>

        {/* BENEFITS */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Why it works', 'Por qué funciona')}</div><h2 className="nv-h2">{`${svc.name} ${t('that moves the needle in', 'que mueve la aguja en')} ${town}`}</h2></div>
          <div className="st-grid3">
            {svc.benefits.map((b, i) => (
              <div className={`st-card rv d${i}`} key={i}><div className="n">{i + 1}</div><h3>{fill(b.h)}</h3><p>{fill(b.p)}</p></div>
            ))}
          </div>
        </div></section>

        {/* FEATURES */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('What you get', 'Lo que incluye')}</div><h2 className="nv-h2">{t("What's included", 'Lo que incluye')}</h2></div>
          <div className="st-feat">
            {svc.features.map((f, i) => (<div className="it rv" key={i}><Check /><span>{fill(f)}</span></div>))}
          </div>
        </div></section>

        {/* PROOF */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Recent work', 'Trabajo reciente')}</div><h2 className="nv-h2">{t('Real Sonoma County businesses', 'Negocios reales de Sonoma County')}</h2></div>
          <div className="rv"><LogoWall /></div>
          <div style={{ textAlign: 'center', marginTop: 30 }}><Link to="/work" className="nv-btn nv-btn-ghost">{t('See all our work', 'Ve todo nuestro trabajo')} <Arrow /></Link></div>
        </div></section>

        {/* FAQ */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">FAQ</div><h2 className="nv-h2">{svc.name} {t('in', 'en')} {town} — {t('common questions', 'preguntas frecuentes')}</h2></div>
          <div className="st-faq">
            {info && <details className="rv"><summary>{t(`Do you work with ${town} businesses?`, `¿Trabajan con negocios de ${town}?`)}</summary><div className="a">{info.faqA}</div></details>}
            {svc.faqs.map((f, i) => (<details className="rv" key={i}><summary>{fill(f.q)}</summary><div className="a">{fill(f.a)}</div></details>))}
          </div>
        </div></section>

        {/* INTERNAL LINKS: other services in this town + web design in this town */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('More for', 'Más para')} {town}</div><h2 className="nv-h2">{t('Everything we do for', 'Todo lo que hacemos para')} {town}</h2></div>
          <div className="st-other rv">
            <Link to={`/web-design/${slug}`}>{t('Web design in', 'Diseño web en')} {town}</Link>
            {otherServices.map((s) => (<Link key={s.slug} to={`/${s.slug}/${slug}`}>{s.name} {t('in', 'en')} {town}</Link>))}
          </div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="st-band rv">
            <h2>{`${svc.h1a} ${town} ${svc.h1b}?`}</h2>
            <p>{t("Book a free call — we'll show you exactly what we'd do. No pressure.", 'Reserva una llamada gratis — te mostramos exactamente lo que haríamos. Sin presión.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
