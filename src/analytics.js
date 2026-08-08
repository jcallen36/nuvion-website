/* ─────────────────────────────────────────────────────────────
   Analytics + ad conversion tracking.
   PASTE YOUR IDs BELOW to turn it on. Until then every function
   no-ops (zero network calls, zero console noise) so the site
   ships clean and you flip it live in one commit later.

   Where to get them:
   - GA4_ID            → analytics.google.com  (Admin → Data Streams → "G-XXXXXXXXXX")
   - META_PIXEL_ID     → business.facebook.com → Events Manager  (a 15-16 digit number)
   - GOOGLE_ADS_ID     → ads.google.com → Tools → Conversions  ("AW-XXXXXXXXX")
   - GOOGLE_ADS_LEAD_LABEL → the conversion "label" for a lead   (e.g. "AbCdEfGhIj")
───────────────────────────────────────────────────────────── */
const GA4_ID = '';
const META_PIXEL_ID = '';
const GOOGLE_ADS_ID = 'AW-18377556298';
const GOOGLE_ADS_LEAD_LABEL = '4MfUCMqjjd4cEMqCjbtE';
const GOOGLE_ADS_CALL_LABEL = '';

let started = false;

export function initAnalytics() {
  if (started || typeof window === 'undefined') return;
  started = true;

  // Google (GA4 + Google Ads share one gtag.js)
  const googleId = GA4_ID || GOOGLE_ADS_ID;
  if (googleId) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${googleId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    if (GA4_ID) window.gtag('config', GA4_ID);
    if (GOOGLE_ADS_ID) window.gtag('config', GOOGLE_ADS_ID);
  }

  // Meta / Facebook Pixel
  if (META_PIXEL_ID) {
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
}

/* Fire on client-side route changes (initial view is auto-tracked above). */
export function trackPageview(path) {
  try { if (window.gtag && GA4_ID) window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href }); } catch { /* noop */ }
  try { if (window.fbq) window.fbq('track', 'PageView'); } catch { /* noop */ }
}

/* A generic custom event (e.g. a CTA click). */
export function track(event, params = {}) {
  try { if (window.gtag) window.gtag('event', event, params); } catch { /* noop */ }
  try { if (window.fbq) window.fbq('trackCustom', event, params); } catch { /* noop */ }
}

/* THE money event — a form submission / new lead. Fires GA4, Meta, and Google Ads conversions. */
export function trackLead(params = {}) {
  try { if (window.gtag && GA4_ID) window.gtag('event', 'generate_lead', params); } catch { /* noop */ }
  try {
    if (window.gtag && GOOGLE_ADS_ID && GOOGLE_ADS_LEAD_LABEL) {
      window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}` });
    }
  } catch { /* noop */ }
  try { if (window.fbq) window.fbq('track', 'Lead', params); } catch { /* noop */ }
}

/* The other money event — someone taps a call/text button. Fires GA4, Meta, and Google Ads call conversions. */
export function trackCall(params = {}) {
  try { if (window.gtag && GA4_ID) window.gtag('event', 'contact', { method: 'phone', ...params }); } catch { /* noop */ }
  try {
    if (window.gtag && GOOGLE_ADS_ID && GOOGLE_ADS_CALL_LABEL) {
      window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CALL_LABEL}` });
    }
  } catch { /* noop */ }
  try { if (window.fbq) window.fbq('track', 'Contact', params); } catch { /* noop */ }
}
