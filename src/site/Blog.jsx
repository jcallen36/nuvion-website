import { Link, useParams } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, ExtLink } from './shared.jsx';
import { useLang } from './i18n.jsx';
import { ARTICLES } from './blog-data.js';
import sonomaHills from '../assets/local/sonoma-hills.webp';

/* Guides / resource engine — the content layer for organic + AI-answer SEO.
   Each post renders BlogPosting + FAQPage + BreadcrumbList JSON-LD.
   Articles are English for now (chrome stays bilingual); ES translation next. */

const BASE_URL = 'https://nuvion-solutions.com';

const BLOG_CSS = `
.bg-hero{padding:60px 0 16px;text-align:center;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.86) 50%, rgba(246,249,253,.78)), url(${sonomaHills});background-size:cover;background-position:center 24%}
.bg-h1{font-size:clamp(2.1rem,4.4vw,3.2rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.07;margin:16px auto 14px;max-width:17ch}
.bg-hero p.sub{font-size:clamp(1.02rem,1.5vw,1.18rem);color:var(--body);max-width:600px;margin:0 auto;line-height:1.6}

.bg-grid{display:grid;grid-template-columns:1fr;gap:22px}
@media(min-width:640px){.bg-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.bg-grid{grid-template-columns:repeat(3,1fr)}}
.bg-card{display:flex;flex-direction:column;background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 26px 24px;box-shadow:var(--shadow-sm);transition:transform .16s,box-shadow .16s;text-align:left}
.bg-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:#d4deef}
.bg-cat{color:var(--brand-strong);font-weight:800;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:12px}
.bg-card h3{color:var(--ink);font-size:1.16rem;line-height:1.28;letter-spacing:-.01em;margin-bottom:9px}
.bg-card p{color:var(--body);font-size:.93rem;line-height:1.55;flex:1}
.bg-meta{margin-top:16px;color:var(--muted);font-size:.82rem;display:flex;align-items:center;gap:8px}
.bg-readmore{margin-top:14px;color:var(--brand-strong);font-weight:700;font-size:.9rem;display:inline-flex;align-items:center;gap:7px}
.bg-card-cta{background:linear-gradient(160deg,#EAF1FF,#F5F8FC 70%);border-color:#cddcf7}
.bg-card-cta h3{color:var(--ink)}

/* article */
.bg-art{max-width:740px;margin:0 auto;padding:0 4px}
.bg-crumbs{font-size:.84rem;color:var(--muted);margin-bottom:18px;display:flex;gap:8px;flex-wrap:wrap}
.bg-crumbs a{color:var(--brand-strong);font-weight:600}
.bg-art-cat{color:var(--brand-strong);font-weight:800;font-size:.74rem;letter-spacing:.06em;text-transform:uppercase}
.bg-art h1{color:var(--ink);font-size:clamp(1.9rem,4vw,2.7rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin:10px 0 14px;text-wrap:balance}
.bg-art-meta{color:var(--muted);font-size:.9rem;margin-bottom:30px;display:flex;gap:10px;align-items:center;border-bottom:1px solid var(--line);padding-bottom:22px}
.bg-body>p{color:var(--body);font-size:1.06rem;line-height:1.75;margin:0 0 20px}
.bg-body h2{color:var(--ink);font-size:clamp(1.35rem,2.4vw,1.7rem);font-weight:780;letter-spacing:-.02em;margin:38px 0 14px}
.bg-body ul{margin:0 0 20px;padding-left:4px;list-style:none;display:flex;flex-direction:column;gap:11px}
.bg-body ul li{display:flex;gap:11px;align-items:flex-start;color:var(--body);font-size:1.02rem;line-height:1.6}
.bg-body ul li::before{content:'';flex-shrink:0;width:8px;height:8px;border-radius:50%;background:var(--brand);margin-top:9px}
.bg-lead{color:var(--body);font-size:1.16rem;line-height:1.7;margin:0 0 24px;font-weight:500}
.bg-faq{margin:44px 0 0;border-top:1px solid var(--line);padding-top:30px}
.bg-faq h2{color:var(--ink);font-size:1.5rem;font-weight:780;letter-spacing:-.02em;margin-bottom:18px}
.bg-faq details{border:1px solid var(--line);border-radius:12px;padding:4px 18px;margin-bottom:10px;background:#fff}
.bg-faq summary{cursor:pointer;font-weight:700;color:var(--ink);padding:14px 0;list-style:none;font-size:1.02rem}
.bg-faq summary::-webkit-details-marker{display:none}
.bg-faq summary::after{content:'+';float:right;color:var(--brand-strong);font-weight:700}
.bg-faq details[open] summary::after{content:'\\2212'}
.bg-faq details p{color:var(--body);font-size:.98rem;line-height:1.65;padding:0 0 16px}
.bg-cta{margin:46px 0 0;border-radius:22px;padding:40px 34px;text-align:center;background:linear-gradient(160deg,#F4F8FF,#fff 70%);border:1px solid #dbe6fb}
.bg-cta h3{color:var(--ink);font-size:1.4rem;font-weight:800;letter-spacing:-.02em;margin-bottom:8px}
.bg-cta p{color:var(--body);font-size:1rem;margin-bottom:20px}
.bg-cta .row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.bg-related{margin:48px 0 0;border-top:1px solid var(--line);padding-top:30px}
.bg-related h2{color:var(--ink);font-size:1.3rem;font-weight:780;margin-bottom:16px}
.bg-related-grid{display:grid;grid-template-columns:1fr;gap:14px}
@media(min-width:680px){.bg-related-grid{grid-template-columns:1fr 1fr}}
.bg-related a{display:block;background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;transition:border-color .16s,transform .16s}
.bg-related a:hover{border-color:#c7d3e6;transform:translateY(-2px)}
.bg-related a .c{color:var(--brand-strong);font-weight:800;font-size:.68rem;letter-spacing:.05em;text-transform:uppercase}
.bg-related a h4{color:var(--ink);font-size:1rem;margin-top:6px;line-height:1.3}
`;

function crumbLd(items) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

/* ── Guides index ─────────────────────────────────────────── */
export function BlogIndex() {
  useReveal();
  const { t } = useLang();
  const sorted = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <title>{t('Guides & Resources — Web Design, SEO & Getting Found | Nuvion Solutions', 'Guías y recursos — Diseño web, SEO y cómo aparecer | Nuvion Solutions')}</title>
      <meta name="description" content={t('Straight answers on websites, pricing, ownership, and local SEO for Sonoma County businesses — from the team at Nuvion Solutions.', 'Respuestas claras sobre sitios web, precios, propiedad y SEO local para negocios de Sonoma County — del equipo de Nuvion Solutions.')} />
      <link rel="canonical" href={`${BASE_URL}/guides`} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd([{ name: 'Home', url: `${BASE_URL}/` }, { name: 'Guides', url: `${BASE_URL}/guides` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Blog', name: 'Nuvion Solutions Guides',
        description: 'Straight answers on websites, pricing, ownership, and local SEO for Sonoma County businesses.',
        url: `${BASE_URL}/guides`, inLanguage: 'en-US',
        publisher: { '@type': 'Organization', name: 'Nuvion Solutions', url: BASE_URL },
        blogPost: sorted.map((a) => ({ '@type': 'BlogPosting', headline: a.title, description: a.metaDesc, url: `${BASE_URL}/guides/${a.slug}`, datePublished: a.date })),
      }) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + BLOG_CSS }} />
      <Nav />
      <main>
        <section className="bg-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{t('Guides & resources', 'Guías y recursos')}</span>
          <h1 className="bg-h1">{t('Straight answers on getting your business online', 'Respuestas claras para llevar tu negocio en línea')}</h1>
          <p className="sub">{t('No jargon, no sales pitch — real guidance on websites, pricing, ownership, and getting found in Sonoma County.', 'Sin tecnicismos, sin discurso de venta — orientación real sobre sitios web, precios, propiedad y cómo te encuentren en Sonoma County.')}</p>
        </div></section>
        <section className="nv-sec" style={{ paddingTop: 40 }}><div className="nv-wrap">
          <div className="bg-grid">
            {sorted.map((a) => (
              <Link key={a.slug} to={`/guides/${a.slug}`} className="bg-card rv">
                <div className="bg-cat">{a.category}</div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <div className="bg-meta">{a.readMins} {t('min read', 'min de lectura')}</div>
                <span className="bg-readmore">{t('Read the guide', 'Leer la guía')} <Arrow /></span>
              </Link>
            ))}
            <Link to="/book" className="bg-card bg-card-cta rv">
              <div className="bg-cat">{t('Still have questions?', '¿Aún tienes preguntas?')}</div>
              <h3>{t('Get a straight answer for your business', 'Recibe una respuesta clara para tu negocio')}</h3>
              <p>{t('Book a free call and we’ll answer it directly — no jargon, no pressure.', 'Reserva una llamada gratis y te respondemos directamente — sin tecnicismos, sin presión.')}</p>
              <span className="bg-readmore" style={{ marginTop: 'auto' }}>{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></span>
            </Link>
          </div>
        </div></section>
        <section className="nv-sec soft" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="bg-cta rv">
            <h3>{t('Not sure where to start?', '¿No sabes por dónde empezar?')}</h3>
            <p>{t('Answer a few quick questions and get a tailored plan for your business in 60 seconds.', 'Responde unas preguntas rápidas y recibe un plan a la medida de tu negocio en 60 segundos.')}</p>
            <div className="row">
              <Link to="/plan" className="nv-btn nv-btn-primary nv-btn-lg">{t('Get your instant plan', 'Recibe tu plan al instante')} <Arrow /></Link>
              <Link to="/book" className="nv-btn nv-btn-ghost nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')}</Link>
            </div>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}

/* ── Single guide ─────────────────────────────────────────── */
export function BlogPost() {
  useReveal();
  const { t } = useLang();
  const { slug } = useParams();
  const a = ARTICLES.find((x) => x.slug === slug);

  if (!a) {
    return (
      <>
        <title>{t('Guide not found | Nuvion Solutions', 'Guía no encontrada | Nuvion Solutions')}</title>
        <meta name="robots" content="noindex, follow" />
        <style dangerouslySetInnerHTML={{ __html: BASE_CSS + BLOG_CSS }} />
        <Nav />
        <main><section className="nv-sec"><div className="nv-wrap" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h1 className="bg-h1">{t('That guide moved or never existed.', 'Esa guía se movió o nunca existió.')}</h1>
          <Link to="/guides" className="nv-btn nv-btn-primary nv-btn-lg">{t('See all guides', 'Ve todas las guías')} <Arrow /></Link>
        </div></section></main>
        <Footer />
      </>
    );
  }

  const url = `${BASE_URL}/guides/${a.slug}`;
  const articleLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: a.title, description: a.metaDesc, datePublished: a.date, dateModified: a.date,
    author: { '@type': 'Organization', name: 'Nuvion Solutions' },
    publisher: { '@type': 'Organization', name: 'Nuvion Solutions', url: BASE_URL },
    mainEntityOfPage: url, inLanguage: 'en-US',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.bg-lead', '.bg-faq'] },
  };
  const faqLd = a.faqs && a.faqs.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: a.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null;
  const related = (a.related || []).map((s) => ARTICLES.find((x) => x.slug === s)).filter(Boolean);

  return (
    <>
      <title>{a.metaTitle}</title>
      <meta name="description" content={a.metaDesc} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={a.title} />
      <meta property="og:description" content={a.metaDesc} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd([{ name: 'Home', url: `${BASE_URL}/` }, { name: 'Guides', url: `${BASE_URL}/guides` }, { name: a.title, url }])) }} />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + BLOG_CSS }} />
      <Nav />
      <main>
        <section className="nv-sec" style={{ paddingTop: 44 }}><div className="nv-wrap">
          <article className="bg-art rv">
            <nav className="bg-crumbs"><Link to="/">{t('Home', 'Inicio')}</Link> › <Link to="/guides">{t('Guides', 'Guías')}</Link> › <span>{a.category}</span></nav>
            <div className="bg-art-cat">{a.category}</div>
            <h1>{a.title}</h1>
            <div className="bg-art-meta">{a.readMins} {t('min read', 'min de lectura')} · {t('by the Nuvion team', 'por el equipo de Nuvion')}</div>
            <div className="bg-body">
              {a.intro.map((p, i) => <p key={i} className={i === 0 ? 'bg-lead' : ''}>{p}</p>)}
              {a.sections.map((s, i) => (
                <div key={i}>
                  <h2>{s.h}</h2>
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                  {s.list && <ul>{s.list.map((li, k) => <li key={k}>{li}</li>)}</ul>}
                </div>
              ))}
            </div>

            {a.faqs && a.faqs.length > 0 && (
              <div className="bg-faq">
                <h2>{t('Frequently asked', 'Preguntas frecuentes')}</h2>
                {a.faqs.map((f, i) => (
                  <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>
                ))}
              </div>
            )}

            <div className="bg-cta">
              <h3>{t('Want a straight answer for your business?', '¿Quieres una respuesta clara para tu negocio?')}</h3>
              <p>{t('Book a free call or get an instant plan — no pressure, no jargon.', 'Reserva una llamada gratis o recibe un plan al instante — sin presión, sin tecnicismos.')}</p>
              <div className="row">
                <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
                <Link to="/plan" className="nv-btn nv-btn-ghost nv-btn-lg">{t('Get your instant plan', 'Recibe tu plan al instante')}</Link>
              </div>
            </div>

            {related.length > 0 && (
              <div className="bg-related">
                <h2>{t('Keep reading', 'Sigue leyendo')}</h2>
                <div className="bg-related-grid">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/guides/${r.slug}`}>
                      <span className="c">{r.category}</span>
                      <h4>{r.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
