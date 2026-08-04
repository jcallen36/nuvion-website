import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check, ExtLink } from './shared.jsx';
import { IntakeForm, FORM_CSS } from './IntakeForm.jsx';
import { useLang } from './i18n.jsx';
import calegal from '../assets/work/calegal.webp';
import dumolin from '../assets/work/dumolin.webp';
import nexus from '../assets/work/aistartup.webp';
import aviation from '../assets/work/aviation.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';
import sonomaVineyard from '../assets/local/sonoma-vineyard.webp';

/* Corporate / larger-business entry — capability-first, outcomes-framed,
   NO $600 pricing. For established businesses that need custom builds,
   integrations, and automation, reached via referral or targeted ads. */

const Ico = ({ children }) => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
const IApp = () => <Ico><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></Ico>;
const ILink = () => <Ico><path d="M9 15l6-6"/><path d="M10.5 6.5 12 5a4 4 0 0 1 6 6l-1.5 1.5"/><path d="M13.5 17.5 12 19a4 4 0 0 1-6-6l1.5-1.5"/></Ico>;
const IBolt = () => <Ico><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></Ico>;
const IShield = () => <Ico><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="m9 11 2 2 4-4"/></Ico>;

const BZ_CSS = `
.bz-hero{position:relative;overflow:hidden;padding:74px 0 54px;text-align:center;background:linear-gradient(180deg, rgba(9,16,30,.9), rgba(9,16,30,.82) 55%, rgba(9,16,30,.9)), url(${sonomaVineyard});background-size:cover;background-position:center}
.bz-hero .nv-wrap{position:relative}
.bz-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:.76rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#9cc0ff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);padding:7px 15px;border-radius:100px;margin-bottom:20px}
.bz-eyebrow .dot{width:7px;height:7px;border-radius:50%;display:inline-block;flex-shrink:0}
.bz-h1{font-size:clamp(2.1rem,4.6vw,3.4rem);color:#fff;font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:0 auto 18px;max-width:17ch}
.bz-h1 .g{background:linear-gradient(100deg,#6aa0ff,#8fd0ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.bz-sub{font-size:clamp(1.05rem,1.6vw,1.24rem);color:rgba(255,255,255,.82);max-width:640px;margin:0 auto 30px;line-height:1.6}
.bz-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap}
.bz-ticks{display:flex;gap:22px;justify-content:center;flex-wrap:wrap;margin-top:26px;color:rgba(255,255,255,.8);font-size:.9rem;font-weight:600}
.bz-ticks span{display:inline-flex;align-items:center;gap:8px}
.bz-ticks svg{color:#7fd0ff;width:17px;height:17px}

.bz-cap{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:720px){.bz-cap{grid-template-columns:1fr 1fr}}
.bz-cap-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:28px 26px;box-shadow:var(--shadow-sm)}
.bz-cap-card .ic{width:52px;height:52px;border-radius:13px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.bz-cap-card h3{color:var(--ink);font-size:1.2rem;margin-bottom:8px;letter-spacing:-.01em}
.bz-cap-card p{color:var(--body);font-size:.96rem;line-height:1.6}

.bz-work{display:grid;grid-template-columns:1fr;gap:24px;margin-top:8px}
@media(min-width:820px){.bz-work{grid-template-columns:1fr 1fr}}
.bz-work-card{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#fff;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .18s,box-shadow .18s}
.bz-work-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.bz-shot{height:210px;overflow:hidden;background:var(--bg-soft)}
.bz-shot img{width:100%;height:100%;object-fit:cover;object-position:center top;transition:object-position 3.5s ease}
.bz-work-card:hover .bz-shot img{object-position:center bottom}
.bz-work-body{padding:22px 24px;display:flex;flex-direction:column;flex:1}
.bz-work-body .cap{color:var(--brand-strong);font-weight:700;font-size:.72rem;letter-spacing:.05em;text-transform:uppercase;margin-bottom:6px}
.bz-work-body h4{color:var(--ink);font-size:1.14rem;margin-bottom:6px}
.bz-work-body p{color:var(--body);font-size:.92rem;line-height:1.5}
.bz-work-body .lk{margin-top:14px;display:inline-flex;align-items:center;gap:7px;color:var(--brand-strong);font-weight:700;font-size:.88rem}

.bz-why{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:720px){.bz-why{grid-template-columns:1fr 1fr}}
.bz-why-item{display:flex;gap:14px;align-items:flex-start}
.bz-why-item .n{flex-shrink:0;width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;display:flex;align-items:center;justify-content:center}
.bz-why-item h4{color:var(--ink);font-size:1.06rem;margin-bottom:4px}
.bz-why-item p{color:var(--body);font-size:.93rem;line-height:1.55}

.bz-steps{counter-reset:s;display:grid;grid-template-columns:1fr;gap:16px;max-width:760px;margin:0 auto}
@media(min-width:720px){.bz-steps{grid-template-columns:1fr 1fr}}
.bz-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px 26px 24px 62px;box-shadow:var(--shadow-sm)}
.bz-step::before{counter-increment:s;content:counter(s);position:absolute;left:22px;top:24px;width:28px;height:28px;border-radius:8px;background:var(--brand-soft);color:var(--brand-strong);font-weight:800;font-size:.9rem;display:flex;align-items:center;justify-content:center}
.bz-step h4{color:var(--ink);font-size:1.05rem;margin-bottom:4px}
.bz-step p{color:var(--body);font-size:.92rem;line-height:1.5}
.bz-scope-note{text-align:center;color:var(--muted);font-size:.95rem;margin-top:26px}
.bz-scope-note b{color:var(--ink)}

.bz-band{position:relative;overflow:hidden;border-radius:26px;padding:62px 40px;text-align:center;color:#fff;background:linear-gradient(rgba(9,16,30,.8),rgba(9,16,30,.84)), url(${sonomaHills});background-size:cover;background-position:center}
.bz-band h2{color:#fff;font-size:clamp(1.8rem,3.4vw,2.5rem);letter-spacing:-.03em;margin-bottom:12px}
.bz-band p{color:rgba(255,255,255,.82);font-size:1.06rem;margin-bottom:26px;max-width:560px;margin-left:auto;margin-right:auto}
`;

export default function BusinessPage() {
  useReveal();
  const { t } = useLang();

  const caps = [
    { ic: <IApp />, h: t('Custom builds & web apps', 'Desarrollos a medida y web apps'), p: t('Online stores, booking and scheduling, member and client portals, dashboards, quote tools, multi-location sites — functionality built to fit exactly how you operate.', 'Tiendas en línea, reservas y agendamiento, portales de clientes y miembros, paneles, cotizadores, sitios multi-ubicación — funcionalidad a la medida de cómo operas.') },
    { ic: <ILink />, h: t('Integrations', 'Integraciones'), p: t('We connect your site and tools — CRM, ERP, payments, POS, calendars, email, spreadsheets — anything with an API, so your systems finally talk to each other.', 'Conectamos tu sitio y tus herramientas — CRM, ERP, pagos, punto de venta, calendarios, correo, hojas de cálculo — cualquier cosa con API, para que tus sistemas por fin se comuniquen.') },
    { ic: <IBolt />, h: t('Automation', 'Automatización'), p: t('Eliminate double-entry and busywork. Lead routing, follow-up, reminders, reviews, and reporting run themselves — accurately, around the clock.', 'Elimina la doble captura y el trabajo repetitivo. Enrutamiento de leads, seguimiento, recordatorios, reseñas y reportes que corren solos — con precisión, las 24 horas.') },
    { ic: <IShield />, h: t('Reliability & care', 'Confiabilidad y soporte'), p: t('Hardened hosting, security, backups, and uptime monitoring — plus a real person who answers when something needs attention. No ticket queue.', 'Hosting reforzado, seguridad, respaldos y monitoreo — más una persona real que responde cuando algo necesita atención. Sin cola de tickets.') },
  ];

  const work = [
    { img: calegal, cap: t('Legal services · lead-gen system', 'Servicios legales · sistema de leads'), name: 'California Legal Document Excellence', p: t('A lead-generation platform with same-day intake that turns Google searches into booked consultations.', 'Una plataforma de generación de leads con admisión el mismo día que convierte búsquedas de Google en consultas agendadas.'), url: 'https://calegaldocumenthelp.com' },
    { img: dumolin, cap: t('Care operator · multi-location', 'Operador de cuidado · multi-ubicación'), name: 'DuMolin Community Living', p: t('Six licensed care homes unified into one clear, modern system — one brand, one source of truth.', 'Seis casas de cuidado con licencia unificadas en un sistema claro y moderno — una marca, una fuente de verdad.'), url: 'https://dumolin-homes.vercel.app' },
    { img: nexus, cap: t('Technology · product platform', 'Tecnología · plataforma de producto'), name: 'Nexus', p: t('A platform-grade product concept — the kind of polished, technical build larger companies expect.', 'Un concepto de producto a nivel de plataforma — el tipo de desarrollo técnico y pulido que las empresas más grandes esperan.'), url: 'https://ai-startup.nuvion-solutions.com' },
    { img: aviation, cap: t('Premium brand · concept', 'Marca premium · concepto'), name: 'APEX Private Aviation', p: t('A cinematic, high-end brand experience — proof we build at a premium tier, not just template sites.', 'Una experiencia de marca cinematográfica y de alta gama — prueba de que construimos a nivel premium, no solo sitios de plantilla.'), url: 'https://aviation.nuvion-solutions.com' },
  ];

  const why = [
    { h: t('Senior people build it — not juniors', 'Lo construyen personas senior — no juniors'), p: t("You work directly with the founders who design and write the code. Nothing gets handed down to an intern or offshored.", 'Trabajas directamente con los fundadores que diseñan y escriben el código. Nada se pasa a un becario ni se subcontrata al extranjero.') },
    { h: t('A direct line, answered same-day', 'Una línea directa, respondida el mismo día'), p: t('No account managers, no ticket queue. You get the people doing the work, and a real answer the same day.', 'Sin gerentes de cuenta, sin cola de tickets. Tienes a las personas que hacen el trabajo, y una respuesta real el mismo día.') },
    { h: t('Faster, without the agency overhead', 'Más rápido, sin la burocracia de agencia'), p: t('A small senior team moves in weeks where a big agency takes months — and without the bloated retainer.', 'Un equipo senior pequeño avanza en semanas donde una gran agencia tarda meses — y sin el retainer inflado.') },
    { h: t('You own everything — code, data, no lock-in', 'Todo es tuyo — código, datos, sin ataduras'), p: t('Your site, your integrations, your data — yours to keep and host anywhere. We build partners, not hostages.', 'Tu sitio, tus integraciones, tus datos — tuyos para conservar y alojar donde quieras. Creamos socios, no rehenes.') },
  ];

  const steps = [
    { h: t('Discovery call', 'Llamada de descubrimiento'), p: t('We learn your operation, your tools, and what you actually need the system to do.', 'Conocemos tu operación, tus herramientas y lo que de verdad necesitas que el sistema haga.') },
    { h: t('Written scope & proposal', 'Alcance y propuesta por escrito'), p: t('A clear, fixed scope and proposal — so you know exactly what you get and what it costs, before you commit.', 'Un alcance y una propuesta claros y fijos — para que sepas exactamente qué recibes y cuánto cuesta, antes de comprometerte.') },
    { h: t('Build & integrate', 'Construcción e integración'), p: t('We build in tight, visible milestones and connect it to the tools you already run on.', 'Construimos en hitos ajustados y visibles, y lo conectamos con las herramientas que ya usas.') },
    { h: t('Launch & support', 'Lanzamiento y soporte'), p: t('We go live, then stay on as a real partner — not a vendor who disappears after the invoice.', 'Lanzamos y nos quedamos como un socio real — no un proveedor que desaparece después de la factura.') },
  ];

  return (
    <>
      <title>{t('Custom Builds, Integrations & Automation for Businesses | Nuvion Solutions', 'Desarrollos a medida, integraciones y automatización para empresas | Nuvion Solutions')}</title>
      <meta name="description" content={t('For established Sonoma County businesses that need more than a website — custom web apps, integrations, and automation, built by a senior team that answers same-day. Book a scoping call.', 'Para empresas establecidas de Sonoma County que necesitan más que un sitio web — web apps a medida, integraciones y automatización, por un equipo senior que responde el mismo día. Reserva una llamada de alcance.')} />
      <link rel="canonical" href="https://nuvion-solutions.com/for-business" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + BZ_CSS + FORM_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="bz-hero"><div className="nv-wrap">
          <span className="bz-eyebrow"><span className="dot" style={{ background: '#7fd0ff' }} />{t('For established & growing businesses', 'Para empresas establecidas y en crecimiento')}</span>
          <h1 className="bz-h1">{t(<>When you need more than a website — <span className="g">a system that runs your business</span>.</>, <>Cuando necesitas más que un sitio web — <span className="g">un sistema que maneja tu negocio</span>.</>)}</h1>
          <p className="bz-sub">{t('Custom builds, integrations, and automation — designed and built by a small senior team that answers the same day and stays with you. The technical depth of an agency, without the agency runaround.', 'Desarrollos a medida, integraciones y automatización — diseñados y construidos por un equipo senior pequeño que responde el mismo día y se queda contigo. La profundidad técnica de una agencia, sin sus vueltas.')}</p>
          <div className="bz-cta">
            <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a scoping call', 'Reserva una llamada de alcance')} <Arrow /></Link>
            <a href="#bz-work" className="nv-btn nv-btn-white nv-btn-lg">{t('See the work', 'Ve el trabajo')}</a>
          </div>
          <div className="bz-ticks">
            <span><Check /> {t('Senior team, not juniors', 'Equipo senior, no juniors')}</span>
            <span><Check /> {t('Direct access', 'Acceso directo')}</span>
            <span><Check /> {t('You own it', 'Es tuyo')}</span>
            <span><Check /> {t('Scoped to you', 'A tu medida')}</span>
          </div>
        </div></section>

        {/* CAPABILITIES */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('What we build', 'Lo que construimos')}</div><h2 className="nv-h2">{t('The depth most local shops can’t offer', 'La profundidad que la mayoría de los estudios locales no ofrece')}</h2></div>
          <div className="bz-cap">
            {caps.map((c, i) => (
              <div className="bz-cap-card rv" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="ic">{c.ic}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* FEATURED WORK */}
        <section className="nv-sec soft" id="bz-work"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Selected work', 'Trabajo seleccionado')}</div><h2 className="nv-h2">{t('Built for businesses that needed it to perform', 'Hecho para negocios que necesitaban que rindiera')}</h2></div>
          <div className="bz-work">
            {work.map((w, i) => (
              <div className="bz-work-card rv" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="bz-shot"><img src={w.img} alt={`${w.name} — Nuvion Solutions`} loading="lazy" /></div>
                <div className="bz-work-body">
                  <div className="cap">{w.cap}</div>
                  <h4>{w.name}</h4>
                  <p>{w.p}</p>
                  {w.url && <a className="lk" href={w.url} target="_blank" rel="noreferrer">{t('View live', 'Ver en vivo')} <ExtLink /></a>}
                </div>
              </div>
            ))}
          </div>
          <div className="nv-center rv" style={{ marginTop: 34 }}>
            <Link to="/work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See all our work', 'Ve todo nuestro trabajo')} <Arrow /></Link>
          </div>
        </div></section>

        {/* WHY A STUDIO */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Why us', 'Por qué nosotros')}</div><h2 className="nv-h2">{t('A senior studio beats a big agency — for work like this', 'Un estudio senior le gana a una gran agencia — para trabajo como este')}</h2></div>
          <div className="bz-why">
            {why.map((w, i) => (
              <div className="bz-why-item rv" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="n"><Check /></div>
                <div><h4>{w.h}</h4><p>{w.p}</p></div>
              </div>
            ))}
          </div>
        </div></section>

        {/* HOW WE SCOPE */}
        <section className="nv-sec soft"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('How it works', 'Cómo funciona')}</div><h2 className="nv-h2">{t('Every project is scoped to you', 'Cada proyecto se cotiza a tu medida')}</h2></div>
          <div className="bz-steps">
            {steps.map((s, i) => (
              <div className="bz-step rv" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <h4>{s.h}</h4><p>{s.p}</p>
              </div>
            ))}
          </div>
          <p className="bz-scope-note rv">{t(<>No off-the-shelf price tag — because this isn’t off-the-shelf work. You get a <b>written proposal before you owe a cent</b>.</>, <>Sin precio de catálogo — porque esto no es trabajo de catálogo. Recibes una <b>propuesta por escrito antes de deber un centavo</b>.</>)}</p>
        </div></section>

        {/* SCOPING FORM (ad-ready lead capture, routes to David as a business lead) */}
        <section className="nv-sec" id="scope"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('Let’s talk', 'Hablemos')}</div><h2 className="nv-h2">{t('Let’s scope your project', 'Coticemos tu proyecto')}</h2><p className="nv-lead" style={{ margin: '0 auto' }}>{t('Tell us what you’re trying to build or automate. We’ll map it out with you and send a clear proposal — no pressure, no jargon.', 'Cuéntanos qué intentas construir o automatizar. Lo trazamos contigo y te enviamos una propuesta clara — sin presión, sin tecnicismos.')}</p></div>
          <div className="rv" style={{ maxWidth: 640, margin: '30px auto 0' }}><IntakeForm source="business" /></div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
