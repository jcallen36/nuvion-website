import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, BrandRibbon, useReveal, Arrow, ExtLink, LogoWall, WALL_CSS } from './shared.jsx';
import PreviewsFeed from './PreviewsFeed.jsx';
import { useLang } from './i18n.jsx';
import workDumolin from '../assets/work/dumolin.webp';
import workCalegal from '../assets/work/calegal.webp';
import workArpkd from '../assets/work/arpkd.webp';
import workBayarea from '../assets/work/bayarea.webp';
import workDenise from '../assets/work/denise.webp';
import workFloors from '../assets/work/floors.webp';
import workAviation from '../assets/work/aviation.webp';
import workSupercars from '../assets/work/supercars.webp';
import workRestaurant from '../assets/work/restaurant.webp';
import workMedspa from '../assets/work/medspa.webp';
import workTide from '../assets/work/nonprofit.webp';
import workHargrove from '../assets/work/lawfirm.webp';
import workIronclad from '../assets/work/homeservices.webp';
import workNexus from '../assets/work/aistartup.webp';
import workLuminary from '../assets/work/rarefoundation.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';

/* Data-driven portfolio — add a project by adding an object here. */
const PROJECTS = [
  // ── Real client work (lead with the most system-like builds) ──
  { key: 'calegal', name: 'California Legal Document Excellence', category: 'Legal Services · Sonoma County', group: 'business', img: workCalegal, url: 'https://calegaldocumenthelp.com', result: 'Lead-gen platform with same-day intake — turns searches into booked consults.', tags: ['Web Design', 'SEO', 'Lead-gen system'], featured: true },
  { key: 'dumolin', name: 'DuMolin Community Living', category: 'Care Facilities · Santa Rosa', group: 'business', img: workDumolin, url: 'https://dumolin-homes.vercel.app', result: 'Six licensed care homes, unified under one modern, multi-location site.', tags: ['Web Design', 'Local SEO', 'Multi-location'], featured: true },
  { key: 'floors', name: 'Floors for Sonoma', category: 'Flooring Studio · Sonoma', group: 'business', img: workFloors, url: 'https://floors-for-sonoma.vercel.app', result: 'An editorial, high-end site for a Sonoma Valley flooring studio.', tags: ['Web Design', 'Local SEO'], featured: true },
  { key: 'denise', name: 'Denise Kramer Weddings', category: 'Weddings · Wine Country', group: 'business', img: workDenise, url: 'https://demo-wedding-iota.vercel.app', result: 'An elegant wedding-planning site for Sonoma & Napa couples.', tags: ['Web Design'] },
  { key: 'arpkd', name: 'ARPKD / CHF Alliance', category: 'Nonprofit · National', group: 'nonprofit', img: workArpkd, url: '', result: 'A 25-year rare-disease nonprofit, fully modernized.', tags: ['Web Design', 'Nonprofit'] },
  { key: 'bayarea', name: 'Bay Area 2nd Mom', category: 'Nanny Agency · Bay Area', group: 'business', img: workBayarea, url: 'https://nanny-agency-website-alpha.vercel.app', result: '40+ years of trusted care, freshly branded online.', tags: ['Web Design'] },
  // ── Concept builds (demos showing our range) ──
  { key: 'aviation', name: 'APEX Private Aviation', category: 'Concept · Luxury Aviation', group: 'concept', img: workAviation, url: 'https://aviation.nuvion-solutions.com', result: 'A cinematic concept for a private-jet brand.', tags: ['Concept'] },
  { key: 'supercars', name: 'Velocity Motors', category: 'Concept · Automotive', group: 'concept', img: workSupercars, url: 'https://supercars.nuvion-solutions.com', result: 'A bold automotive concept — motion, depth, drama.', tags: ['Concept'] },
  { key: 'restaurant', name: 'Verdant', category: 'Concept · Fine Dining', group: 'concept', img: workRestaurant, url: 'https://restaurant.nuvion-solutions.com', result: 'A refined fine-dining concept with an AI sommelier.', tags: ['Concept'] },
  { key: 'medspa', name: 'Lumina Aesthetics', category: 'Concept · Med Spa', group: 'concept', img: workMedspa, url: 'https://medspa.nuvion-solutions.com', result: 'A luxe, calming concept for a modern med spa.', tags: ['Concept'] },
  { key: 'tide', name: 'TIDE Foundation', category: 'Concept · Ocean Conservation', group: 'concept', img: workTide, url: 'https://nonprofit.nuvion-solutions.com', result: 'A high-impact concept for an ocean-conservation nonprofit.', tags: ['Concept'] },
  { key: 'hargrove', name: 'Hargrove & Associates', category: 'Concept · Law Firm', group: 'concept', img: workHargrove, url: 'https://lawfirm.nuvion-solutions.com', result: 'A trust-forward concept for a personal-injury firm.', tags: ['Concept'] },
  { key: 'ironclad', name: 'Ironclad Home Services', category: 'Concept · Home Services', group: 'concept', img: workIronclad, url: 'https://homeservices.nuvion-solutions.com', result: 'A bold, high-urgency concept for a home-services company.', tags: ['Concept'] },
  { key: 'nexus', name: 'Nexus', category: 'Concept · AI Platform', group: 'concept', img: workNexus, url: 'https://ai-startup.nuvion-solutions.com', result: 'A futuristic concept for an AI-agents startup.', tags: ['Concept'] },
  { key: 'luminary', name: 'Luminary Foundation', category: 'Concept · Nonprofit', group: 'concept', img: workLuminary, url: 'https://rare-foundation.nuvion-solutions.com', result: 'A warm, human concept for a rare-disease foundation.', tags: ['Concept'] },
];


const FILTERS = [
  { key: 'all', label: 'All work' },
  { key: 'business', label: 'Local business' },
  { key: 'nonprofit', label: 'Nonprofit' },
  { key: 'concept', label: 'Concept builds' },
];

/* Spanish translations for the data-driven content, keyed to match the arrays above.
   Applied with t() at render so the module data (names, URLs, images) stays untouched. */
const FILTER_ES = {
  all: 'Todo el trabajo',
  business: 'Negocio local',
  nonprofit: 'Sin fines de lucro',
  concept: 'Conceptos',
};

const CAT_ES = {
  dumolin: 'Centros de cuidado · Santa Rosa',
  calegal: 'Servicios legales · Sonoma County',
  floors: 'Estudio de pisos · Sonoma',
  denise: 'Bodas · Wine Country',
  arpkd: 'Sin fines de lucro · Nacional',
  bayarea: 'Agencia de niñeras · Bay Area',
  aviation: 'Concepto · Aviación de lujo',
  supercars: 'Concepto · Automotriz',
  restaurant: 'Concepto · Alta cocina',
  medspa: 'Concepto · Spa médico',
  tide: 'Concepto · Conservación oceánica',
  hargrove: 'Concepto · Bufete de abogados',
  ironclad: 'Concepto · Servicios para el hogar',
  nexus: 'Concepto · Plataforma de IA',
  luminary: 'Concepto · Sin fines de lucro',
};

const RESULT_ES = {
  dumolin: 'Seis casas de cuidado con licencia, unidas en un sitio cálido y moderno.',
  calegal: 'Sitio de generación de leads con admisión el mismo día: convierte búsquedas en consultas.',
  floors: 'Un sitio editorial y de alta gama para un estudio de pisos de Sonoma Valley.',
  denise: 'Un elegante sitio de planificación de bodas para parejas de Sonoma y Napa.',
  arpkd: 'Una organización sin fines de lucro de enfermedades raras con 25 años, totalmente modernizada.',
  bayarea: 'Más de 40 años de cuidado de confianza, con una nueva imagen en línea.',
  aviation: 'Un concepto cinematográfico para una marca de jets privados.',
  supercars: 'Un concepto automotriz atrevido: movimiento, profundidad, drama.',
  restaurant: 'Un concepto refinado de alta cocina con un sommelier de IA.',
  medspa: 'Un concepto lujoso y relajante para un spa médico moderno.',
  tide: 'Un concepto de alto impacto para una organización de conservación oceánica.',
  hargrove: 'Un concepto que inspira confianza para un bufete de lesiones personales.',
  ironclad: 'Un concepto atrevido y de alta urgencia para una empresa de servicios para el hogar.',
  nexus: 'Un concepto futurista para una startup de agentes de IA.',
  luminary: 'Un concepto cálido y humano para una fundación de enfermedades raras.',
};

const TAG_ES = {
  'Web Design': 'Diseño web',
  'Local SEO': 'SEO local',
  'SEO': 'SEO',
  'Lead-gen': 'Generación de leads',
  'Lead-gen system': 'Sistema de generación de leads',
  'Multi-location': 'Multi-ubicación',
  'Nonprofit': 'Sin fines de lucro',
  'Concept': 'Concepto',
};

const WORK_CSS = `
.wk-hero{padding:64px 0 8px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.86) 50%, rgba(246,249,253,.78)), url(${sonomaHills});background-size:cover;background-position:center 24%}
.wk-h1{font-size:clamp(2.2rem,4.6vw,3.4rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:18px auto 16px;max-width:16ch}
.wk-hero p{font-size:clamp(1.02rem,1.5vw,1.2rem);color:var(--body);max-width:600px;margin:0 auto}
.wk-hero .stats{display:flex;gap:34px;justify-content:center;flex-wrap:wrap;margin-top:30px}
.wk-hero .stats b{color:var(--ink);font-size:1.5rem;font-weight:800;display:block;letter-spacing:-.02em}
.wk-hero .stats span{color:var(--muted);font-size:.82rem;font-weight:600}

.wk-feat{display:grid;grid-template-columns:1fr;gap:26px;margin-top:44px}
@media(min-width:900px){.wk-feat{grid-template-columns:1fr 1fr}}
.wk-feat-card{border:1px solid var(--line);border-radius:20px;overflow:hidden;background:#fff;box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s;display:flex;flex-direction:column}
.wk-feat-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.wk-bar{height:30px;background:#F1F4F9;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:5px;padding:0 12px}
.wk-bar i{width:8px;height:8px;border-radius:50%;background:#CBD4E1}
.wk-shot{overflow:hidden;background:var(--bg-soft)}
.wk-feat-card .wk-shot{height:300px}
.wk-shot img{width:100%;height:100%;object-fit:cover;object-position:center;transition:object-position 3.5s ease}
.wk-feat-card:hover .wk-shot img{object-position:center bottom}
.wk-feat-body{padding:24px 26px}
.wk-cat{color:var(--brand-strong);font-weight:700;font-size:.78rem;letter-spacing:.05em;text-transform:uppercase}
.wk-feat-body h3{color:var(--ink);font-size:1.4rem;font-weight:700;margin:8px 0 8px;letter-spacing:-.01em}
.wk-feat-body p{color:var(--body);font-size:.98rem}
.wk-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
.wk-tag{background:var(--brand-soft);color:var(--brand-strong);font-weight:700;font-size:.74rem;padding:5px 11px;border-radius:100px}
.wk-links{display:flex;gap:16px;align-items:center;margin-top:18px}
.wk-links a{display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:.9rem;color:var(--brand-strong)}
.wk-links a.muted{color:var(--muted)}

.wk-filter{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:36px}
.wk-filter button{font-family:var(--font);font-weight:700;font-size:.9rem;padding:9px 18px;border-radius:100px;border:1px solid var(--line);background:#fff;color:var(--body);cursor:pointer;transition:all .16s}
.wk-filter button:hover{border-color:#c7d3e6}
.wk-filter button.on{background:var(--ink);color:#fff;border-color:var(--ink)}

.wk-grid{display:grid;grid-template-columns:1fr;gap:24px}
@media(min-width:640px){.wk-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.wk-grid{grid-template-columns:repeat(3,1fr)}}
.wk-card{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s;display:flex;flex-direction:column}
.wk-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.wk-card .wk-shot{height:196px}
.wk-card:hover .wk-shot img{object-position:center bottom}
.wk-card-body{padding:16px 18px;display:flex;flex-direction:column;flex:1}
.wk-card-body h4{color:var(--ink);font-size:1.05rem;margin:2px 0 4px}
.wk-card-body .wk-cat{font-size:.72rem}
.wk-card-body .wk-links{margin-top:auto;padding-top:14px}

/* client logo wall */
.wk-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:12px}
@media(min-width:720px){.wk-wall{grid-template-columns:repeat(4,1fr)}}
.wk-logo{height:86px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:var(--shadow-sm);display:flex;align-items:center;justify-content:center;text-align:center;padding:14px;color:var(--ink);font-weight:800;font-size:.92rem;letter-spacing:-.01em;transition:transform .16s,box-shadow .16s}
.wk-logo:hover{transform:translateY(-3px);box-shadow:var(--shadow)}

.wk-band{position:relative;overflow:hidden;border-radius:26px;padding:60px 40px;text-align:center;color:#fff;background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.wk-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.5rem);letter-spacing:-.03em;margin-bottom:12px}
.wk-band p{color:rgba(255,255,255,.8);font-size:1.06rem;margin-bottom:26px}
`;

function ProjectCard({ p }) {
  const { t } = useLang();
  return (
    <div className="wk-card rv">
      <div className="wk-bar"><i/><i/><i/></div>
      <div className="wk-shot"><img src={p.img} alt={`${p.name} website`} loading="lazy" /></div>
      <div className="wk-card-body">
        <div className="wk-cat">{t(p.category, CAT_ES[p.key])}</div>
        <h4>{p.name}</h4>
        <p style={{ color: 'var(--body)', fontSize: '.9rem' }}>{t(p.result, RESULT_ES[p.key])}</p>
        <div className="wk-links">
          {p.url && <a href={p.url} target="_blank" rel="noreferrer">{t('View live', 'Ver en vivo')} <ExtLink /></a>}
          {!p.url && <span style={{ color: 'var(--muted)', fontSize: '.85rem', fontWeight: 600 }}>{t('Private client build', 'Proyecto privado para cliente')}</span>}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  useReveal();
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => (filter === 'all' ? true : p.group === filter));

  return (
    <>
      <title>Our Work — Websites We've Built | Nuvion Solutions</title>
      <meta name="description" content="Real websites built by Nuvion Solutions for local businesses and nonprofits across Sonoma County and beyond — plus concept builds showing our range." />
      <link rel="canonical" href="https://nuvion-solutions.com/work" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Our Work — Nuvion Solutions',
        url: 'https://nuvion-solutions.com/work',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: PROJECTS.map((p, i) => ({
            '@type': 'ListItem', position: i + 1, name: p.name,
            ...(p.url ? { url: p.url } : {}),
          })),
        },
      }) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + WORK_CSS + WALL_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="wk-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{t('Our Work', 'Nuestro trabajo')}</span>
          <h1 className="wk-h1">{t(<>Real websites. <span className="nv-grad">Real businesses.</span></>, <>Sitios reales. <span className="nv-grad">Negocios reales.</span></>)}</h1>
          <p>{t("Every build below is a real business we partnered with — designed one-on-one, live in a week, and theirs to own. Plus a few concept builds that show our range.", 'Cada proyecto de abajo es un negocio real con el que trabajamos de la mano — diseñado uno a uno, en vivo en una semana, y suyo. Además de algunos conceptos que muestran nuestro alcance.')}</p>
          <div className="stats">
            <div><b>40+</b><span>{t('Sites designed', 'Sitios diseñados')}</span></div>
            <div><b>6</b><span>{t('Local clients', 'Clientes locales')}</span></div>
            <div><b>1 wk</b><span>{t('To launch — guaranteed', 'Para lanzar — garantizado')}</span></div>
          </div>
        </div></section>

        <BrandRibbon />

        {/* FEATURED */}
        <section className="nv-sec" style={{ paddingTop: 40 }}><div className="nv-wrap">
          <div className="nv-kicker">{t('Featured projects', 'Proyectos destacados')}</div>
          <div className="wk-feat">
            {featured.map((p) => (
              <div className="wk-feat-card rv" key={p.key}>
                <div className="wk-bar"><i/><i/><i/></div>
                <div className="wk-shot"><img src={p.img} alt={`${p.name} website`} /></div>
                <div className="wk-feat-body">
                  <div className="wk-cat">{t(p.category, CAT_ES[p.key])}</div>
                  <h3>{p.name}</h3>
                  <p>{t(p.result, RESULT_ES[p.key])}</p>
                  <div className="wk-tags">{p.tags.map((tag, i) => <span className="wk-tag" key={i}>{t(tag, TAG_ES[tag])}</span>)}</div>
                  <div className="wk-links">
                    {p.url && <a href={p.url} target="_blank" rel="noreferrer">{t('View live site', 'Ver sitio en vivo')} <ExtLink /></a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div></section>

        {/* ALL WORK + FILTER */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv" style={{ marginBottom: 32 }}>
            <div className="nv-kicker">{t('The full portfolio', 'El portafolio completo')}</div>
            <h2 className="nv-h2">{t('All our work', 'Todo nuestro trabajo')}</h2>
          </div>
          <div className="wk-filter">
            {FILTERS.map((f) => (
              <button key={f.key} className={filter === f.key ? 'on' : ''} onClick={() => setFilter(f.key)}>{t(f.label, FILTER_ES[f.key])}</button>
            ))}
          </div>
          <div className="wk-grid">
            {rest.map((p) => <ProjectCard p={p} key={p.key} />)}
          </div>
        </div></section>

        {/* LIVE TRADES FEED (auto-updates from previews.json) */}
        <PreviewsFeed />

        {/* CLIENT LOGO WALL */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv">
            <div className="nv-kicker">{t('Trusted by', 'Nos respaldan')}</div>
            <h2 className="nv-h2">{t('Businesses that trust Nuvion', 'Negocios que confían en Nuvion')}</h2>
            <p className="nv-lead">{t('Local businesses and nonprofits across Sonoma County and beyond.', 'Negocios locales y organizaciones sin fines de lucro en Sonoma County y más allá.')}</p>
          </div>
          <div className="rv"><LogoWall /></div>
        </div></section>

        {/* CTA */}
        <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="wk-band rv">
            <h2>{t('Want your business to look like this?', '¿Quieres que tu negocio se vea así?')}</h2>
            <p>{t("Book a free call — we'll show you exactly what we'd build for you.", 'Reserva una llamada gratis y te mostraremos exactamente lo que construiríamos para ti.')}</p>
            <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
