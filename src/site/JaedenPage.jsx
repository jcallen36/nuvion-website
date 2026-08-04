import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer, useReveal, Arrow, Check } from './shared.jsx';
import { IntakeForm, FORM_CSS } from './IntakeForm.jsx';
import { useLang } from './i18n.jsx';
import jaedenHero from '../assets/team/jaeden-hero.webp';
import sonomaHills from '../assets/local/sonoma-hills.webp';

const JD_CSS = `
.jd-hero{padding:64px 0 40px;background:linear-gradient(180deg, rgba(246,249,253,.95), rgba(246,249,253,.84) 44%, rgba(246,249,253,.72)), url(${sonomaHills});background-size:cover;background-position:center 26%}
.jd-hero-in{display:grid;grid-template-columns:1fr;gap:44px;align-items:center}
@media(min-width:900px){.jd-hero-in{grid-template-columns:1.1fr .9fr}}
.jd-h1{font-size:clamp(2.2rem,4.4vw,3.3rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.07;margin:18px 0 18px}
.jd-hero p.sub{font-size:clamp(1.05rem,1.5vw,1.2rem);color:var(--body);line-height:1.6;max-width:520px}
.jd-cta{display:flex;gap:13px;flex-wrap:wrap;margin:28px 0 16px}
.jd-ticks{display:flex;gap:18px;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.jd-ticks span{display:inline-flex;align-items:center;gap:7px}.jd-ticks svg{color:var(--brand)}
.jd-photo{position:relative;justify-self:center;max-width:360px;width:100%}
.jd-photo img{width:100%;border-radius:22px;box-shadow:var(--shadow-lg);border:1px solid var(--line)}
.jd-note{max-width:720px;margin:0 auto;text-align:center;background:var(--brand-soft);border:1px solid #d7e3fb;border-radius:14px;padding:16px 20px;color:var(--brand-strong);font-size:.9rem;font-weight:600}
.jd-do{display:grid;grid-template-columns:1fr;gap:16px;max-width:760px;margin:0 auto}
@media(min-width:640px){.jd-do{grid-template-columns:1fr 1fr}}
.jd-do-item{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;box-shadow:var(--shadow-sm)}
.jd-do-item .ck{width:26px;height:26px;border-radius:8px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.jd-do-item b{color:var(--ink);display:block;font-size:.98rem}.jd-do-item span{color:var(--body);font-size:.9rem}
.jd-contact{background:radial-gradient(120% 130% at 50% -20%, #12203c, #0A1222 75%);border-radius:26px;padding:clamp(30px,5vw,54px);color:#fff}
.jd-contact-in{display:grid;grid-template-columns:1fr;gap:34px}
@media(min-width:860px){.jd-contact-in{grid-template-columns:.9fr 1.1fr}}
.jd-contact h2{color:#fff;font-size:clamp(1.7rem,3vw,2.3rem);letter-spacing:-.02em;margin-bottom:12px}
.jd-contact .lead{color:rgba(255,255,255,.76);font-size:1.02rem;line-height:1.6}
.jd-next{list-style:none;margin-top:28px;display:flex;flex-direction:column;gap:15px;padding:0}
.jd-next li{display:flex;gap:13px;align-items:flex-start;color:rgba(255,255,255,.85);font-size:.98rem;line-height:1.5}
.jd-next li b{color:#fff;font-weight:700}
.jd-next li span{flex-shrink:0;width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.12);color:#fff;font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;margin-top:1px}
.jd-callbtn{margin-top:22px;display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--brand-strong);font-weight:800;padding:15px 24px;border-radius:12px;font-size:1.05rem}
`;

export default function JaedenPage() {
  useReveal();
  const { t } = useLang();
  return (
    <>
      <title>Meet Jaeden — Co-founder | Nuvion Solutions</title>
      <meta name="description" content="Meet Jaeden Callender of Nuvion Solutions — making sure every client gets exactly what they need. Get in touch to talk about your project." />
      <link rel="canonical" href="https://nuvion-solutions.com/jaeden" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + JD_CSS + FORM_CSS }} />
      <Nav />
      <main>
        {/* HERO */}
        <section className="jd-hero"><div className="nv-wrap jd-hero-in">
          <div className="rv">
            <span className="nv-eyebrow"><span className="dot" />{t('Co-founder · Client Success', 'Cofundador · Éxito del cliente')}</span>
            <h1 className="jd-h1">{t("Hi, I'm Jaeden.", 'Hola, soy Jaeden.')}</h1>
            <p className="sub">{t('I make sure every Nuvion client gets exactly what they need — on time, done right, and with a real person in their corner the whole way.', 'Me aseguro de que cada cliente de Nuvion reciba exactamente lo que necesita — a tiempo, bien hecho y con una persona real de su lado en todo momento.')}</p>
            <div className="jd-cta">
              <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Get in touch', 'Ponte en contacto')} <Arrow /></Link>
              <a href="tel:+17075209179" className="nv-btn nv-btn-ghost nv-btn-lg">{t('Call / text', 'Llama / escribe')}</a>
            </div>
            <div className="jd-ticks">
              <span><Check /> {t('Same-day answers', 'Respuestas el mismo día')}</span>
              <span><Check /> {t('Sonoma County local', 'Local de Sonoma County')}</span>
            </div>
          </div>
          <div className="jd-photo rv d1"><img src={jaedenHero} alt="Jaeden Callender, Nuvion Solutions" /></div>
        </div></section>

        {/* HOW I HELP */}
        <section className="nv-sec"><div className="nv-wrap">
          <div className="nv-center rv"><div className="nv-kicker">{t('How I help', 'Cómo ayudo')}</div><h2 className="nv-h2">{t('Your project, handled', 'Tu proyecto, resuelto')}</h2></div>
          <div className="jd-do">
            {[
              [t('I keep things moving', 'Mantengo todo en marcha'), t('Clear communication and steady progress — you always know where your project stands.', 'Comunicación clara y avance constante — siempre sabes en qué punto está tu proyecto.')],
              [t('I sweat the details', 'Cuido los detalles'), t('Making sure what we build matches exactly what you had in mind.', 'Me aseguro de que lo que construimos coincida exactamente con lo que tenías en mente.')],
              [t('I’m easy to reach', 'Soy fácil de contactar'), t('A real person who answers the same day — no tickets, no runaround.', 'Una persona real que responde el mismo día — sin tickets, sin vueltas.')],
              [t('I’ve got your back', 'Te respaldo'), t('From first call through launch and beyond, I make sure you’re taken care of.', 'Desde la primera llamada hasta el lanzamiento y más allá, me aseguro de que estés bien atendido.')],
            ].map(([t, d]) => (
              <div className="jd-do-item rv" key={t}><span className="ck"><Check /></span><div><b>{t}</b><span>{d}</span></div></div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <Link to="/work" className="nv-btn nv-btn-ghost">{t('See our work', 'Ve nuestro trabajo')} <Arrow /></Link>
            {' '}
            <Link to="/david" className="nv-btn nv-btn-ghost">{t('Meet David', 'Conoce a David')} <Arrow /></Link>
          </div>
        </div></section>

        {/* CONTACT */}
        <section className="nv-sec" id="contact" style={{ paddingTop: 0 }}><div className="nv-wrap">
          <div className="jd-contact rv"><div className="jd-contact-in">
            <div>
              <h2>{t("Let's talk about your project", 'Hablemos de tu proyecto')}</h2>
              <p className="lead">{t("Tell me a bit about your business and I'll make sure you get taken care of — same day.", 'Cuéntame un poco sobre tu negocio y me aseguraré de que te atiendan bien — el mismo día.')}</p>
              <a className="jd-callbtn" href="tel:+17075209179">📞 (707) 520-9179</a>
              <ul className="jd-next">
                <li><span>1</span>{t(<><b>You send the form</b> — I read it the same day.</>, <><b>Envías el formulario</b> — lo leo el mismo día.</>)}</li>
                <li><span>2</span>{t(<><b>We talk</b> — usually within the hour, no pressure.</>, <><b>Hablamos</b> — normalmente dentro de la hora, sin presión.</>)}</li>
                <li><span>3</span>{t(<><b>You get a plan</b> — exactly what we'd build, and the cost.</>, <><b>Recibes un plan</b> — exactamente lo que construiríamos y el costo.</>)}</li>
              </ul>
            </div>
            <IntakeForm source="jaeden" />
          </div></div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
