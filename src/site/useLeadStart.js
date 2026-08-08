import { useEffect, useRef } from 'react';

/* Form-activity heads-up (parity with the CLDE site).
   - onStart(): call from the form's onInput — fires ONE "someone started" ping per session.
   - markSubmitted(): call on a successful submit — suppresses the abandonment ping (the real
     lead email covers it).
   - On page-hide / tab-hidden, if they started + entered contact info but never submitted, it
     beacons an "abandoned" ping so David can chase the partial lead.
   All fire-and-forget to /api/lead-start; failures are swallowed so this never affects the visitor.

   getSnapshot() must return the current { name, phone, email, niche, message } from the form. */
export function useLeadStart(source, getSnapshot) {
  const started = useRef(false);
  const submitted = useRef(false);
  const snapRef = useRef(getSnapshot);
  snapRef.current = getSnapshot; // keep latest without re-running the effect

  function post(stage, useBeacon) {
    try {
      const s = (snapRef.current && snapRef.current()) || {};
      const payload = JSON.stringify({ stage, source, name: s.name, phone: s.phone, email: s.email, niche: s.niche, message: s.message });
      if (useBeacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
        navigator.sendBeacon('/api/lead-start', new Blob([payload], { type: 'application/json' }));
      } else {
        fetch('/api/lead-start', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {});
      }
    } catch { /* noop */ }
  }

  function onStart() {
    if (started.current || submitted.current) return;
    started.current = true;
    post('started', false);
  }

  function markSubmitted() {
    submitted.current = true;
  }

  useEffect(() => {
    function onHide() {
      if (typeof document !== 'undefined' && document.visibilityState !== 'hidden') return;
      if (!started.current || submitted.current) return;
      const s = (snapRef.current && snapRef.current()) || {};
      if (!s.phone && !s.email && !s.name) return; // nothing worth chasing
      submitted.current = true; // one shot — don't double-fire on the next hide
      post('abandoned', true);
    }
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onHide);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onHide);
    };
  }, []);

  return { onStart, markSubmitted };
}
