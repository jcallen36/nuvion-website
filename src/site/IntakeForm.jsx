import { useState } from 'react';
import { Arrow } from './shared.jsx';
import { useLang } from './i18n.jsx';
import { trackLead } from '../analytics.js';

/* Reusable intake form — posts to /api/contact (Resend). Used on /about and /book. */

export const FORM_CSS = `
.nvf-form{background:#fff;border-radius:18px;padding:26px;box-shadow:var(--shadow-lg);border:1px solid var(--line)}
.nvf-form .row{display:grid;grid-template-columns:1fr;gap:12px}
@media(min-width:520px){.nvf-form .row.two{grid-template-columns:1fr 1fr}}
.nvf-form label{display:block;font-size:.8rem;font-weight:700;color:var(--ink);margin:0 0 6px}
.nvf-form input,.nvf-form select,.nvf-form textarea{width:100%;font-family:var(--font);font-size:.95rem;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 13px;outline:none;transition:border-color .15s,box-shadow .15s}
.nvf-form input:focus,.nvf-form select:focus,.nvf-form textarea:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(37,110,247,.14)}
.nvf-form textarea{resize:vertical;min-height:96px}
.nvf-form .fld{margin-bottom:14px}
.nvf-form .submit{width:100%;justify-content:center;margin-top:4px}
.nvf-form .msg{margin-top:12px;font-size:.9rem;font-weight:600}
.nvf-form .msg.err{color:#DC2626}
.nvf-done{text-align:center;padding:26px 10px}
.nvf-done .big{width:56px;height:56px;border-radius:50%;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
.nvf-done h3{color:var(--ink);font-size:1.3rem;margin-bottom:8px}
.nvf-done p{color:var(--body)}
`;

export function IntakeForm({ source = 'website' }) {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', email: '', niche: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [err, setErr] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus('sending'); setErr('');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source, lang }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) { setStatus('done'); trackLead({ source, niche: form.niche || 'unspecified' }); }
      else { setStatus('error'); setErr(j.error || t('Something went wrong. Please call instead.', 'Algo salió mal. Por favor llama en su lugar.')); }
    } catch { setStatus('error'); setErr(t('Network error — please call or text us instead.', 'Error de red — por favor llámanos o escríbenos.')); }
  }

  if (status === 'done') {
    return (
      <div className="nvf-form"><div className="nvf-done">
        <div className="big"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5"/></svg></div>
        <h3>{t('Thanks — we got it.', 'Listo — lo recibimos.')}</h3>
        <p>{t("We'll get back to you the same day — usually within the hour. Talk soon!", 'Te responderemos el mismo día — normalmente dentro de la hora. ¡Hablamos pronto!')}</p>
      </div></div>
    );
  }

  return (
    <form className="nvf-form" onSubmit={submit}>
      <div className="row two" style={{ marginBottom: 14 }}>
        <div><label>{t('Your name', 'Tu nombre')}</label><input value={form.name} onChange={set('name')} required placeholder={t('Jane Smith', 'Juana Pérez')} /></div>
        <div><label>{t('Phone', 'Teléfono')}</label><input value={form.phone} onChange={set('phone')} placeholder="(707) 555-1234" /></div>
      </div>
      <div className="fld"><label>{t('Email', 'Correo electrónico')}</label><input type="email" value={form.email} onChange={set('email')} placeholder={t('you@business.com', 'tu@negocio.com')} /></div>
      <div className="fld"><label>{t('What do you need help with?', '¿En qué necesitas ayuda?')}</label>
        <select value={form.niche} onChange={set('niche')}>
          <option value="">{t('Select one…', 'Selecciona una…')}</option>
          <option>{t('A new website', 'Un sitio web nuevo')}</option>
          <option>{t('Redesign my current site', 'Rediseñar mi sitio actual')}</option>
          <option>{t('SEO / get found on Google', 'SEO / que me encuentren en Google')}</option>
          <option>{t('Marketing & growth', 'Marketing y crecimiento')}</option>
          <option>{t('AI tools / automation', 'Herramientas de IA / automatización')}</option>
          <option>{t('Something else', 'Otra cosa')}</option>
        </select>
      </div>
      <div className="fld"><label>{t('Tell us a bit about your project', 'Cuéntanos un poco sobre tu proyecto')}</label><textarea value={form.message} onChange={set('message')} placeholder={t("What's your business, and what are you hoping to get done?", '¿Cuál es tu negocio y qué te gustaría lograr?')} /></div>
      <button className="nv-btn nv-btn-primary submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('Sending…', 'Enviando…') : t('Send it over', 'Enviar mensaje')} <Arrow />
      </button>
      {status === 'error' && <div className="msg err">{err}</div>}
      <div className="msg" style={{ color: 'var(--muted)', fontWeight: 500 }}>{t('Prefer to talk? Call or text us directly — we answer the same day.', '¿Prefieres hablar? Llámanos o escríbenos directamente — respondemos el mismo día.')}</div>
    </form>
  );
}
