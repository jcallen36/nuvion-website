import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

// ── n8n booking backend (webhooks live under this base) ──────────────────────
const BOOKING_API = 'https://nuvion-n8n.zeabur.app/webhook';
const DURATION_MINUTES = 30;
const CONTACT_EMAIL = 'team@nuvion-solutions.com';

// Slugs MUST match the n8n Prepare Data SERVICE_COPY map so the confirmation
// email is tailored and the admin email shows the right labels.
const SERVICES = [
  { slug: 'web-design', label: 'Web Design' },
  { slug: 'reviews-automation', label: 'Reviews Automation' },
  { slug: 'virtual-front-desk', label: 'Virtual Front Desk' },
  { slug: 'lead-followup', label: 'Lead Follow-Up' },
  { slug: 'reminders-and-confirmations', label: 'Reminders & Confirmations' },
  { slug: 'social-media-ai', label: 'Social Media AI' },
  { slug: 'seo', label: 'SEO' },
  { slug: 'ai-automation', label: 'AI Automation' },
  { slug: 'other', label: 'Something else' },
];

const CSS = BASE_CSS + FOOTER_CSS + `
.bk-hero{padding:clamp(48px,7vw,84px) 32px 26px;max-width:820px;margin:0 auto;text-align:left}
.bk-hero .sp-eyebrow{margin-bottom:20px}
.bk-hero h1{font-family:var(--serif);font-size:clamp(2rem,4.4vw,3.2rem);font-weight:700;letter-spacing:-.02em;line-height:1.05;margin-bottom:16px}
.bk-hero h1 .grad{font-style:italic;font-weight:400}
.bk-hero p{color:var(--muted-2);font-size:1rem;line-height:1.7;max-width:56ch}

.bk-book{max-width:820px;margin:0 auto;padding:18px 32px 88px}
.bk-card{background:var(--card);border:1px solid var(--hairline);border-top:2px solid var(--petrol);border-radius:8px;box-shadow:var(--shadow-1);padding:30px 28px}

/* step heads */
.bk-step-label{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:18px}
.bk-step-num{width:22px;height:22px;border-radius:50%;border:1px solid var(--petrol);color:var(--petrol);display:inline-flex;align-items:center;justify-content:center;font-size:.7rem}

/* loading */
.bk-loading{display:flex;flex-direction:column;align-items:center;gap:16px;padding:44px 0;color:var(--muted-2);font-size:.9rem}
.bk-spin{width:34px;height:34px;border-radius:50%;border:2px solid var(--hairline);border-top-color:var(--petrol);animation:bkspin .8s linear infinite}
@keyframes bkspin{to{transform:rotate(360deg)}}

/* state message (empty / error) */
.bk-msg{text-align:center;padding:34px 8px}
.bk-msg h3{font-family:var(--serif);font-size:1.25rem;font-weight:700;margin-bottom:10px}
.bk-msg p{color:var(--muted-2);font-size:.92rem;line-height:1.7;margin-bottom:20px}
.bk-msg a{color:var(--petrol);font-weight:600;border-bottom:1px solid var(--hairline)}

/* day selector */
.bk-days{display:flex;gap:9px;overflow-x:auto;padding:2px 2px 8px;scrollbar-width:thin}
.bk-days::-webkit-scrollbar{height:6px}
.bk-days::-webkit-scrollbar-thumb{background:var(--hairline);border-radius:6px}
.bk-day{flex:0 0 auto;min-width:82px;padding:11px 10px;border-radius:6px;border:1px solid var(--hairline);background:var(--paper);color:var(--ink);cursor:pointer;text-align:center;transition:all .18s;font-family:inherit}
.bk-day:hover{border-color:var(--ink)}
.bk-day.sel{border-color:var(--petrol);background:var(--card);box-shadow:inset 0 2px 0 var(--petrol)}
.bk-day .bk-dow{display:block;font-family:var(--mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted-2);margin-bottom:3px}
.bk-day.sel .bk-dow{color:var(--petrol)}
.bk-day .bk-dnum{display:block;font-family:var(--serif);font-size:1.15rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}
.bk-day .bk-dmon{display:block;font-size:.66rem;color:var(--muted-2);margin-top:3px}

/* time grid */
.bk-times{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px;margin-top:20px}
.bk-slot{padding:12px 8px;border-radius:6px;border:1px solid var(--hairline);background:var(--paper);color:var(--ink);cursor:pointer;font-size:.9rem;font-weight:600;transition:all .16s;font-family:inherit;font-variant-numeric:tabular-nums}
.bk-slot:hover{border-color:var(--ink);transform:translateY(-1px)}
.bk-slot.sel{background:var(--ink);border-color:var(--ink);color:var(--paper)}
.bk-tz{margin-top:16px;font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;color:var(--muted-2);text-align:center}

/* selected-time banner */
.bk-selbar{display:flex;align-items:center;gap:12px;background:var(--paper);border:1px solid var(--hairline);border-left:2px solid var(--petrol);border-radius:6px;padding:13px 16px;margin-bottom:22px}
.bk-selbar .bk-check{flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:var(--petrol);display:flex;align-items:center;justify-content:center;color:var(--paper);font-size:.8rem}
.bk-selbar .bk-seltime{font-weight:600;font-size:.92rem}
.bk-selbar .bk-seltime span{display:block;font-size:.74rem;font-weight:400;color:var(--muted-2);margin-top:2px}
.bk-selbar .bk-change{margin-left:auto;font-family:var(--mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--petrol);background:none;border:none;cursor:pointer;padding:6px}
.bk-selbar .bk-change:hover{color:var(--petrol-deep)}

/* form */
.bk-form{display:flex;flex-direction:column;gap:16px}
.bk-field{display:flex;flex-direction:column;gap:7px}
.bk-field label{font-size:.85rem;font-weight:600;color:var(--ink)}
.bk-field label .req{color:var(--petrol);margin-left:2px}
.bk-field label .opt{color:var(--muted-2);font-weight:400}
.bk-input,.bk-textarea{width:100%;background:#182220;border:1px solid var(--hairline);border-radius:6px;padding:12px 14px;color:var(--ink);font-family:inherit;font-size:16px;transition:border-color .16s,box-shadow .16s}
.bk-input::placeholder,.bk-textarea::placeholder{color:#6E7873}
.bk-input:focus,.bk-textarea:focus{outline:none;border-color:var(--petrol);box-shadow:0 0 0 3px rgba(86,188,177,.14)}
.bk-input.err{border-color:#D08A7E}
.bk-textarea{resize:vertical;min-height:88px}
.bk-err{font-size:.76rem;color:#D08A7E}
.bk-row2{display:grid;grid-template-columns:1fr 1fr;gap:16px}

/* service chips */
.bk-services{display:flex;flex-wrap:wrap;gap:9px}
.bk-chip{padding:9px 14px;border-radius:6px;border:1px solid var(--hairline);background:var(--paper);color:var(--ink);cursor:pointer;font-size:.85rem;font-weight:500;transition:all .16s;font-family:inherit}
.bk-chip:hover{border-color:var(--ink)}
.bk-chip.sel{background:var(--ink);border-color:var(--ink);color:var(--paper)}

/* TCPA consent */
.bk-consent{display:flex;align-items:flex-start;gap:11px;padding:14px 16px;background:var(--paper);border:1px solid var(--hairline);border-radius:6px}
.bk-consent input{margin-top:3px;width:16px;height:16px;flex:0 0 auto;accent-color:var(--petrol);cursor:pointer}
.bk-consent label{font-size:.78rem;color:var(--muted-2);line-height:1.6;cursor:pointer}
.bk-consent.err{border-color:#D08A7E}

/* honeypot */
.bk-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none}

/* submit */
.bk-submit{width:100%;margin-top:4px;background:var(--ink);color:var(--paper);font-weight:600;font-size:.96rem;padding:15px;border-radius:6px;border:1px solid var(--ink);cursor:pointer;transition:background .18s,transform .18s;font-family:inherit}
.bk-submit:hover:not(:disabled){background:#fff;border-color:#fff;transform:translateY(-1px)}
.bk-submit:disabled{opacity:.45;cursor:not-allowed}
.bk-submit-err{margin-top:12px;font-size:.82rem;color:#D08A7E;text-align:center}

/* success */
.bk-success{text-align:center;padding:20px 8px}
.bk-success .bk-big-check{width:58px;height:58px;border-radius:50%;background:var(--petrol);display:flex;align-items:center;justify-content:center;color:var(--paper);font-size:1.7rem;margin:0 auto 20px}
.bk-success h2{font-family:var(--serif);font-size:1.6rem;font-weight:700;margin-bottom:10px}
.bk-success .bk-when{font-size:1rem;font-weight:600;color:var(--ink);margin-bottom:6px;font-variant-numeric:tabular-nums}
.bk-success .bk-note{color:var(--muted-2);font-size:.9rem;line-height:1.7;max-width:420px;margin:0 auto 22px}
.bk-meet{display:inline-flex;align-items:center;gap:9px;background:var(--paper);border:1px solid var(--hairline);border-radius:6px;padding:12px 18px;color:var(--ink);font-weight:600;font-size:.9rem;transition:border-color .18s}
.bk-meet:hover{border-color:var(--petrol)}
.bk-meet .bk-meet-dot{width:8px;height:8px;border-radius:50%;background:var(--petrol)}

@media(max-width:680px){
  .bk-hero{padding:36px 20px 18px}
  .bk-book{padding:8px 16px 56px}
  .bk-card{padding:22px 18px}
  .bk-row2{grid-template-columns:1fr}
}
`;

// ── time helpers (all display in the visitor's local IANA timezone) ──────────
function dayKey(iso, tz) {
  // en-CA yields YYYY-MM-DD, a stable per-day grouping key in the given tz
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date(iso));
}
function fmtTime(iso, tz) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hour: 'numeric', minute: '2-digit',
  }).format(new Date(iso));
}
function fmtDayParts(iso, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, weekday: 'short', month: 'short', day: 'numeric',
  }).formatToParts(new Date(iso));
  const get = (t) => parts.find((p) => p.type === t)?.value || '';
  return { dow: get('weekday'), mon: get('month'), day: get('day') };
}
function tzAbbr(iso, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, timeZoneName: 'short',
  }).formatToParts(new Date(iso));
  return parts.find((p) => p.type === 'timeZoneName')?.value || '';
}
function fmtFull(iso, tz) {
  const d = fmtDayParts(iso, tz);
  return `${d.dow}, ${d.mon} ${d.day} · ${fmtTime(iso, tz)} ${tzAbbr(iso, tz)}`;
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Book() {
  const visitorTz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Los_Angeles',
    [],
  );

  const [status, setStatus] = useState('loading'); // loading | ready | empty | error
  const [slots, setSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [hp, setHp] = useState(''); // honeypot
  const [services, setServices] = useState([]);
  const [consent, setConsent] = useState(false); // required TCPA consent
  const [showErrors, setShowErrors] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(null); // { display_time, meeting_link }

  useEffect(() => { window.scrollTo(0, 0); }, []);

  async function loadAvailability() {
    setStatus('loading');
    try {
      const res = await fetch(`${BOOKING_API}/booking-availability`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timezone: visitorTz, days: 14 }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      // Backend trouble is an error, not "we're fully booked" — only a
      // healthy response with genuinely zero slots earns the empty state.
      if (!data?.ok || !Array.isArray(data.slots)) throw new Error('bad availability response');
      const list = [...data.slots].sort();
      if (list.length === 0) {
        setSlots([]);
        setStatus('empty');
        return;
      }
      setSlots(list);
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }

  useEffect(() => { loadAvailability(); /* eslint-disable-next-line */ }, []);

  // group open slots by local day, preserving chronological order
  const days = useMemo(() => {
    const map = new Map();
    for (const iso of slots) {
      const key = dayKey(iso, visitorTz);
      if (!map.has(key)) map.set(key, { key, iso, times: [] });
      map.get(key).times.push(iso);
    }
    return [...map.values()];
  }, [slots, visitorTz]);

  useEffect(() => {
    if (days.length && !days.some((d) => d.key === selectedDay)) {
      setSelectedDay(days[0].key);
    }
  }, [days, selectedDay]);

  const activeDay = days.find((d) => d.key === selectedDay);

  const emailValid = EMAIL_RE.test(email.trim());
  const nameValid = name.trim().length > 0;

  function toggleService(slug) {
    setServices((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setShowErrors(true);
    if (!selectedSlot) return;

    // honeypot tripped → silently succeed without booking
    if (hp.trim() !== '') {
      setSuccess({ display_time: fmtFull(selectedSlot, visitorTz), meeting_link: '' });
      return;
    }
    if (!nameValid || !emailValid || !consent) return;

    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(`${BOOKING_API}/booking-create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'website',
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          start_iso: selectedSlot,
          duration_minutes: DURATION_MINUTES,
          timezone: visitorTz,
          services,
          other_service_text: null,
          notes: notes.trim() || null,
          business_name: null,
          hp: '',
          tcpa_consent: true,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data?.ok) throw new Error('Booking failed');
      setSuccess({
        display_time: data.display_time || fmtFull(selectedSlot, visitorTz),
        meeting_link: data.meeting_link || '',
      });
      window.scrollTo(0, 0);
    } catch {
      setSubmitError("Something went wrong booking that time. Please try again, or email us at " + CONTACT_EMAIL + ".");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Book a Free Strategy Call | Nuvion Solutions</title>
        <meta name="description" content="Book a free strategy call with Nuvion Solutions. We'll map your workflows, show you what's automatable, and put a price on it in writing — no obligation." />
        <link rel="canonical" href="https://nuvion-solutions.com/book" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <div className="bk-hero">
        <div className="sp-eyebrow">Free strategy call · 30 minutes</div>
        <h1>Pick a time. <span className="grad">We’ll do the rest.</span></h1>
        <p>We’ll walk through your business, identify what’s automatable, and outline exactly what we’d build for you — with the price in writing. No commitment required.</p>
      </div>

      <div className="bk-book">
        <div className="bk-card">
          {success ? (
            <div className="bk-success">
              <div className="bk-big-check" aria-hidden="true">✓</div>
              <h2>You’re booked!</h2>
              <div className="bk-when">{success.display_time}</div>
              <p className="bk-note">
                Check your email — a calendar invite is on its way and will be added to your
                Google Calendar automatically. We look forward to speaking with you.
              </p>
              {success.meeting_link && (
                <a className="bk-meet" href={success.meeting_link} target="_blank" rel="noopener noreferrer">
                  <span className="bk-meet-dot" aria-hidden="true" />
                  Join Google Meet
                </a>
              )}
            </div>
          ) : (
            <>
              {status === 'loading' && (
                <div className="bk-loading">
                  <div className="bk-spin" aria-hidden="true" />
                  <span>Finding open times…</span>
                </div>
              )}

              {status === 'error' && (
                <div className="bk-msg">
                  <h3>We couldn’t load the calendar</h3>
                  <p>Something went wrong reaching our scheduler. Please try again in a moment.</p>
                  <button className="sp-back" onClick={loadAvailability}>Try again</button>
                </div>
              )}

              {status === 'empty' && (
                <div className="bk-msg">
                  <h3>No open times right now</h3>
                  <p>
                    We don’t have any open times in the next two weeks. Email us at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we’ll find a time that works.
                  </p>
                  <button className="sp-back" onClick={loadAvailability}>Refresh times</button>
                </div>
              )}

              {status === 'ready' && (
                <>
                  {!selectedSlot ? (
                    <>
                      <div className="bk-step-label">
                        <span className="bk-step-num">1</span> Pick a time
                      </div>
                      <div className="bk-days" role="tablist" aria-label="Choose a day">
                        {days.map((d) => {
                          const p = fmtDayParts(d.iso, visitorTz);
                          const sel = d.key === selectedDay;
                          return (
                            <button
                              key={d.key}
                              type="button"
                              role="tab"
                              aria-selected={sel}
                              className={`bk-day${sel ? ' sel' : ''}`}
                              onClick={() => setSelectedDay(d.key)}
                            >
                              <span className="bk-dow">{p.dow}</span>
                              <span className="bk-dnum">{p.day}</span>
                              <span className="bk-dmon">{p.mon}</span>
                            </button>
                          );
                        })}
                      </div>

                      {activeDay && (
                        <div className="bk-times" role="group" aria-label="Available times">
                          {activeDay.times.map((iso) => (
                            <button
                              key={iso}
                              type="button"
                              className="bk-slot"
                              aria-pressed={selectedSlot === iso}
                              onClick={() => setSelectedSlot(iso)}
                            >
                              {fmtTime(iso, visitorTz)}
                            </button>
                          ))}
                        </div>
                      )}
                      <div className="bk-tz">Times shown in your timezone ({visitorTz.replace('_', ' ')})</div>
                    </>
                  ) : (
                    <>
                      <div className="bk-selbar">
                        <span className="bk-check" aria-hidden="true">✓</span>
                        <span className="bk-seltime">
                          {fmtFull(selectedSlot, visitorTz)}
                          <span>{DURATION_MINUTES}-minute video call</span>
                        </span>
                        <button
                          type="button"
                          className="bk-change"
                          onClick={() => { setSelectedSlot(null); setSubmitError(''); }}
                        >
                          Change
                        </button>
                      </div>

                      <div className="bk-step-label">
                        <span className="bk-step-num">2</span> Your details
                      </div>

                      <form className="bk-form" onSubmit={handleSubmit} noValidate>
                        <div className="bk-field">
                          <label>What are you interested in? <span className="opt">(optional — pick any)</span></label>
                          <div className="bk-services" role="group" aria-label="Services you're interested in">
                            {SERVICES.map((s) => {
                              const sel = services.includes(s.slug);
                              return (
                                <button
                                  key={s.slug}
                                  type="button"
                                  className={`bk-chip${sel ? ' sel' : ''}`}
                                  aria-pressed={sel}
                                  onClick={() => toggleService(s.slug)}
                                >
                                  {s.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="bk-field">
                          <label htmlFor="bk-name">Name<span className="req">*</span></label>
                          <input
                            id="bk-name"
                            className={`bk-input${showErrors && !nameValid ? ' err' : ''}`}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            autoComplete="name"
                            aria-invalid={showErrors && !nameValid}
                          />
                          {showErrors && !nameValid && <span className="bk-err">Please enter your name.</span>}
                        </div>

                        <div className="bk-row2">
                          <div className="bk-field">
                            <label htmlFor="bk-email">Email<span className="req">*</span></label>
                            <input
                              id="bk-email"
                              className={`bk-input${showErrors && !emailValid ? ' err' : ''}`}
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@company.com"
                              autoComplete="email"
                              aria-invalid={showErrors && !emailValid}
                            />
                            {showErrors && !emailValid && <span className="bk-err">Enter a valid email.</span>}
                          </div>
                          <div className="bk-field">
                            <label htmlFor="bk-phone">Phone <span className="opt">(optional)</span></label>
                            <input
                              id="bk-phone"
                              className="bk-input"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+1 (555) 000-0000"
                              autoComplete="tel"
                            />
                          </div>
                        </div>

                        <div className="bk-field">
                          <label htmlFor="bk-notes">Anything you'd like us to know before the call? <span className="opt">(optional)</span></label>
                          <textarea
                            id="bk-notes"
                            className="bk-textarea"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="A sentence or two about your business, your goals, or anything you'd like us to prep for."
                          />
                        </div>

                        {/* honeypot — hidden from humans; bots that fill it are silently dropped */}
                        <div className="bk-hp" aria-hidden="true">
                          <label htmlFor="bk-hp-field">Leave this field empty</label>
                          <input
                            id="bk-hp-field"
                            name="hp"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={hp}
                            onChange={(e) => setHp(e.target.value)}
                          />
                        </div>

                        <div className={`bk-consent${showErrors && !consent ? ' err' : ''}`}>
                          <input
                            id="bk-consent"
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            aria-invalid={showErrors && !consent}
                          />
                          <label htmlFor="bk-consent">
                            I agree that Nuvion Solutions may contact me about this request by
                            email, phone, or text message (including automated technology) at the
                            contact details I provided. Consent is not a condition of purchase;
                            message and data rates may apply. Reply STOP to opt out of texts.
                          </label>
                        </div>
                        {showErrors && !consent && <span className="bk-err">Please check the consent box so we're allowed to contact you about your booking.</span>}

                        <button className="bk-submit" type="submit" disabled={submitting}>
                          {submitting ? 'Booking…' : 'Confirm booking'}
                        </button>
                        {submitError && <div className="bk-submit-err">{submitError}</div>}
                      </form>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
