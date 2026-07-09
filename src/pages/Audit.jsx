import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NICHES } from './audit-data.js';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MONEY / NUMBER FORMATTERS
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const $$ = (n) => {
  if (!n || isNaN(n)) return '$0';
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};
const nn = (n) => (n ? Math.round(n).toLocaleString() : '0');

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   NICHE GROUPS
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const NICHE_GROUPS = [
  { label: 'Home Services', ids: ['hvac', 'roofing', 'plumbing-electrical', 'landscaping', 'cleaning'] },
  { label: 'Real Estate & Property', ids: ['real-estate', 'property-mgmt', 'mortgage'] },
  { label: 'Healthcare & Wellness', ids: ['medical', 'dental', 'chiro-pt', 'veterinary', 'gyms'] },
  { label: 'Legal, Finance & Insurance', ids: ['law-firms', 'financial-advisors', 'insurance', 'accounting'] },
  { label: 'Automotive & Retail', ids: ['auto-dealers', 'ecommerce'] },
  { label: 'Professional Services', ids: ['marketing-agency', 'coaching'] },
  { label: 'Hospitality & Lifestyle', ids: ['restaurants', 'salons-spas', 'events', 'photography'] },
  { label: "Don't See Your Industry?", ids: ['other'] },
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   CSS
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const AUDIT_CSS = `
/* Loss semantics: muted brick. Petrol stays the only accent. */
:root { --loss: #8A4B42; }

.aud { font-family: var(--sans); background: var(--paper); color: var(--ink); min-height: 100vh; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

/* Petrol emphasis inside serif headings */
.ag { color: var(--petrol); font-style: italic; font-weight: 400; }

/* CTA button used in results header */
.an-cta { display: inline-flex; align-items: center; padding: 10px 20px; border-radius: 6px; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); font-family: var(--sans); font-size: 0.85rem; font-weight: 600; text-decoration: none; transition: background 0.18s var(--ease-out), border-color 0.18s var(--ease-out), transform 0.18s var(--ease-out); }
.an-cta:hover { background: var(--petrol-deep); border-color: var(--petrol-deep); transform: translateY(-1px); }

/* â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.ai-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 100px 24px 60px; position: relative; }
.ai-inner { max-width: 740px; text-align: center; position: relative; z-index: 1; }
.ai-badge { display: inline-flex; align-items: center; gap: 12px; font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--petrol); margin-bottom: 30px; }
.ai-badge::before, .ai-badge::after { content: ''; width: 26px; height: 1px; background: var(--petrol); }
.ai-h1 { font-family: var(--serif); font-size: clamp(2.1rem, 5vw, 3.4rem); font-weight: 700; line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 22px; }
.ai-sub { font-size: 1.08rem; color: var(--muted-2); line-height: 1.75; max-width: 580px; margin: 0 auto 44px; }
.ai-stats { display: flex; justify-content: center; gap: 48px; margin-bottom: 48px; flex-wrap: wrap; }
.ai-stat-val { font-family: var(--mono); font-size: 1.5rem; color: var(--ink); font-variant-numeric: tabular-nums; }
.ai-stat-lbl { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted-2); margin-top: 7px; }
.ai-btn { display: inline-flex; align-items: center; gap: 10px; padding: 18px 44px; border-radius: 6px; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); font-family: var(--sans); font-size: 1.02rem; font-weight: 600; cursor: pointer; box-shadow: var(--shadow-1); transition: background 0.18s var(--ease-out), border-color 0.18s var(--ease-out), transform 0.18s var(--ease-out), box-shadow 0.18s var(--ease-out); }
.ai-btn:hover { background: var(--petrol-deep); border-color: var(--petrol-deep); transform: translateY(-1px); box-shadow: var(--shadow-2); }
.ai-note { margin-top: 18px; font-size: 0.82rem; color: var(--muted-2); }
.ai-trust { display: flex; justify-content: center; gap: 28px; margin-top: 44px; flex-wrap: wrap; }
.ai-trust-item { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--muted-2); }
.ai-trust-item span:first-child { color: var(--petrol); }

/* â”€â”€ NICHE GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.ang-wrap { min-height: 100vh; padding: 100px 24px 80px; }
.ang-inner { max-width: 1100px; margin: 0 auto; }
.ang-head { text-align: center; margin-bottom: 52px; }
.ang-head h2 { font-family: var(--serif); font-size: clamp(1.7rem, 3.5vw, 2.4rem); font-weight: 700; letter-spacing: -0.015em; margin-bottom: 10px; }
.ang-head p { color: var(--muted-2); font-size: 1rem; }
.ang-tier-lbl { display: flex; align-items: center; gap: 12px; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--petrol); margin: 36px 0 14px; }
.ang-tier-lbl::after { content: ''; flex: 1; height: 1px; background: var(--hairline); }
.ang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 12px; }
@media (min-width: 640px) { .ang-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 900px) { .ang-grid { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1100px) { .ang-grid { grid-template-columns: repeat(5, 1fr); } }
.ang-card { padding: 20px 14px 18px; border-radius: 8px; cursor: pointer; border: 1px solid var(--hairline); background: var(--card); box-shadow: var(--shadow-1); font-family: var(--sans); transition: border-color 0.22s var(--ease-out), transform 0.22s var(--ease-out), box-shadow 0.22s var(--ease-out); text-align: center; }
.ang-card:hover { border-color: var(--petrol); transform: translateY(-2px); box-shadow: var(--shadow-2); }
.ang-icon { font-size: 1.85rem; margin-bottom: 10px; display: block; }
.ang-label { font-size: 0.89rem; font-weight: 600; margin-bottom: 4px; color: var(--ink); }
.ang-tag { font-size: 0.71rem; color: var(--muted-2); line-height: 1.35; }

/* â”€â”€ QUESTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.aq-wrap { min-height: 100vh; display: flex; flex-direction: column; padding: 90px 24px 48px; }
.aq-prog-outer { max-width: 680px; margin: 0 auto 52px; width: 100%; }
.aq-prog-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.aq-prog-niche { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-2); }
.aq-prog-count { font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.08em; color: var(--muted-2); font-variant-numeric: tabular-nums; }
.aq-prog-track { height: 3px; background: var(--hairline); overflow: hidden; }
.aq-prog-fill { height: 100%; background: var(--petrol); transition: width 0.45s var(--ease-out); }
.aq-inner { max-width: 680px; margin: 0 auto; width: 100%; flex: 1; display: flex; flex-direction: column; }
.aq-q { font-family: var(--serif); font-size: clamp(1.3rem, 2.6vw, 1.7rem); font-weight: 700; letter-spacing: -0.012em; line-height: 1.35; margin-bottom: 10px; }
.aq-sub { font-size: 0.9rem; color: var(--muted-2); margin-bottom: 32px; line-height: 1.6; }
.aq-opts { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
.aq-opt { padding: 16px 20px; border-radius: 8px; border: 1px solid var(--hairline); background: var(--card); color: var(--ink); font-family: var(--sans); font-size: 0.97rem; font-weight: 500; cursor: pointer; text-align: left; transition: border-color 0.2s, background 0.2s; width: 100%; }
.aq-opt:hover:not(:disabled) { border-color: var(--petrol); }
.aq-opt.sel { border-color: var(--petrol); background: rgba(14,95,99,0.08); color: var(--ink); }
.aq-opt:disabled { cursor: default; }
.aq-src { display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: 8px; background: var(--bone); border: 1px solid var(--hairline); font-size: 0.78rem; color: var(--muted-2); line-height: 1.55; margin-bottom: 28px; }
.aq-src-ico { flex-shrink: 0; font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--petrol); margin-top: 3px; }
.aq-back { background: none; border: none; color: var(--muted-2); font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; padding: 8px 0; display: flex; align-items: center; gap: 6px; transition: color 0.2s; align-self: flex-start; margin-top: auto; }
.aq-back:hover { color: var(--ink); }

/* â”€â”€ EMAIL GATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.ae-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 100px 24px 60px; }
.ae-card { max-width: 520px; width: 100%; padding: 44px 48px; border-radius: 10px; border: 1px solid var(--hairline); border-top: 2px solid var(--petrol); background: var(--card); box-shadow: var(--shadow-2); }
@media (max-width: 480px) { .ae-card { padding: 32px 22px; } }
.ae-kicker { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--petrol); text-align: center; margin-bottom: 16px; }
.ae-h2 { font-family: var(--serif); font-size: 1.7rem; font-weight: 700; letter-spacing: -0.015em; text-align: center; margin-bottom: 10px; }
.ae-sub { font-size: 0.94rem; color: var(--muted-2); text-align: center; line-height: 1.65; margin-bottom: 28px; }
.ae-preview { display: flex; gap: 10px; margin-bottom: 28px; }
.ae-prev-item { flex: 1; padding: 14px 10px; border-radius: 8px; background: var(--paper); border: 1px solid var(--hairline); text-align: center; }
.ae-prev-val { font-family: var(--mono); font-size: 1rem; font-variant-numeric: tabular-nums; }
.ae-prev-val.r { color: var(--loss); }
.ae-prev-val.g { color: var(--petrol); }
.ae-prev-val.c { color: var(--ink); }
.ae-prev-lbl { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted-2); margin-top: 6px; line-height: 1.4; }
.ae-lbl { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted-2); margin-bottom: 7px; display: block; }
.ae-inp { width: 100%; padding: 13px 16px; border-radius: 6px; border: 1px solid var(--hairline); background: var(--paper); color: var(--ink); font-family: var(--sans); font-size: 16px; outline: none; transition: border-color 0.2s; margin-bottom: 14px; }
.ae-inp:focus { border-color: var(--petrol); }
.ae-inp::placeholder { color: var(--muted-2); opacity: 0.7; }
.ae-consent { display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border: 1px solid var(--hairline); border-radius: 6px; background: var(--paper); margin: 2px 0 14px; cursor: pointer; }
.ae-consent input { margin-top: 3px; flex-shrink: 0; accent-color: var(--petrol); cursor: pointer; }
.ae-consent span { font-size: 0.76rem; color: var(--muted-2); line-height: 1.55; }
.ae-err { color: var(--loss); font-size: 0.83rem; margin-bottom: 10px; }
.ae-submit { width: 100%; padding: 16px; border-radius: 6px; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); font-family: var(--sans); font-size: 1rem; font-weight: 600; cursor: pointer; box-shadow: var(--shadow-1); transition: background 0.18s var(--ease-out), border-color 0.18s var(--ease-out), transform 0.18s var(--ease-out), box-shadow 0.18s var(--ease-out), opacity 0.18s; margin-top: 4px; }
.ae-submit:hover:not(:disabled) { background: var(--petrol-deep); border-color: var(--petrol-deep); transform: translateY(-1px); box-shadow: var(--shadow-2); }
.ae-submit:disabled { opacity: 0.45; cursor: default; box-shadow: none; }
.ae-privacy { font-size: 0.74rem; color: var(--muted-2); text-align: center; margin-top: 14px; }

/* â”€â”€ LOADING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.al-wrap { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 24px; text-align: center; }
@keyframes aud-spin { to { transform: rotate(360deg); } }
@keyframes aud-pulse { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
.al-spinner { width: 56px; height: 56px; border-radius: 50%; border: 2px solid var(--hairline); border-top-color: var(--petrol); animation: aud-spin 0.85s linear infinite; margin-bottom: 30px; }
.al-h { font-family: var(--serif); font-size: 1.55rem; font-weight: 700; letter-spacing: -0.012em; margin-bottom: 8px; }
.al-stage { font-size: 0.92rem; color: var(--muted-2); margin-bottom: 38px; min-height: 22px; }
.al-steps { display: flex; flex-direction: column; gap: 10px; max-width: 380px; width: 100%; }
.al-step { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; background: var(--card); border: 1px solid var(--hairline); font-size: 0.88rem; text-align: left; color: var(--muted-2); transition: all 0.5s; }
.al-step.active { background: rgba(14,95,99,0.05); border-color: var(--petrol); color: var(--ink); }
.al-step.done { color: var(--ink); background: var(--bone); }
.al-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--hairline); flex-shrink: 0; transition: all 0.3s; }
.al-step.active .al-dot { background: var(--petrol); animation: aud-pulse 1s ease-in-out infinite; }
.al-step.done .al-dot { background: var(--petrol); }
.al-check { margin-left: auto; color: var(--petrol); font-size: 0.88rem; }

/* â”€â”€ RESULTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.ar-wrap { padding-top: 68px; padding-bottom: 100px; }
.ar-header { max-width: 1000px; margin: 0 auto; padding: 52px 24px 8px; text-align: left; }
.ar-biz { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted-2); margin-bottom: 14px; }
.ar-title { font-family: var(--serif); font-size: clamp(1.8rem, 3.4vw, 2.7rem); font-weight: 700; margin-bottom: 14px; letter-spacing: -0.02em; }
.ar-sub { font-size: 0.97rem; color: var(--muted-2); max-width: 62ch; line-height: 1.68; }
.ar-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* Summary cards */
.ar-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 44px; }
@media (max-width: 700px) { .ar-cards { grid-template-columns: 1fr; } }
.ar-card { padding: 24px 22px; border-radius: 8px; border: 1px solid var(--hairline); background: var(--card); box-shadow: var(--shadow-1); text-align: left; }
.ar-card.red { border-top: 2px solid var(--loss); }
.ar-card.grn { border-top: 2px solid var(--petrol); }
.ar-card.cyn { border-top: 2px solid var(--ink); }
.ar-card-val { font-family: var(--mono); font-size: clamp(1.5rem, 2.8vw, 1.9rem); letter-spacing: -0.01em; margin-bottom: 8px; font-variant-numeric: tabular-nums; }
.ar-card.red .ar-card-val { color: var(--loss); }
.ar-card.grn .ar-card-val { color: var(--petrol); }
.ar-card.cyn .ar-card-val { color: var(--ink); }
.ar-card-lbl { font-family: var(--mono); font-size: 0.64rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-2); line-height: 1.5; }

/* Annual banner (ink band) */
.ar-banner { margin-top: 22px; padding: 26px 30px; border-radius: 10px; background: var(--ink); color: var(--paper); display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.ar-banner-val { font-family: var(--serif); font-size: 2.3rem; font-weight: 700; letter-spacing: -0.02em; color: #9BC4C1; white-space: nowrap; }
.ar-banner-txt { font-size: 0.93rem; color: rgba(244,242,236,0.72); line-height: 1.65; flex: 1; min-width: 240px; }
.ar-banner-txt strong { color: var(--paper); }

/* Section heads */
.ar-section { margin-top: 68px; }
.ar-sec-title { font-family: var(--serif); font-size: 1.45rem; font-weight: 700; letter-spacing: -0.012em; margin-bottom: 7px; }
.ar-sec-sub { font-size: 0.9rem; color: var(--muted-2); margin-bottom: 28px; line-height: 1.55; }

/* Before / After */
.bav-grid { display: grid; grid-template-columns: 1fr 56px 1fr; gap: 0; align-items: center; }
@media (max-width: 600px) { .bav-grid { grid-template-columns: 1fr; gap: 16px; } .bav-arrow-wrap { display: none; } }
.bav-panel { padding: 28px 24px; border-radius: 8px; border: 1px solid var(--hairline); background: var(--card); box-shadow: var(--shadow-1); height: 100%; }
.bav-panel.bef { border-top: 2px solid var(--loss); }
.bav-panel.aft { border-top: 2px solid var(--petrol); }
.bav-head { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 22px; }
.bav-panel.bef .bav-head { color: var(--loss); }
.bav-panel.aft .bav-head { color: var(--petrol); }
.bav-metric { margin-bottom: 22px; }
.bav-metric:last-child { margin-bottom: 0; }
.bav-metric-lbl { font-size: 0.77rem; color: var(--muted-2); margin-bottom: 5px; }
.bav-metric-val { font-family: var(--mono); font-size: 1.3rem; font-variant-numeric: tabular-nums; }
.bav-panel.bef .bav-metric-val { color: var(--loss); }
.bav-panel.aft .bav-metric-val { color: var(--petrol); }
.bav-arrow-wrap { display: flex; align-items: center; justify-content: center; }
.bav-arrow { width: 40px; height: 40px; border-radius: 50%; background: var(--ink); display: flex; align-items: center; justify-content: center; font-size: 1rem; color: var(--paper); box-shadow: var(--shadow-1); }

/* Pain points */
.pp-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .pp-grid { grid-template-columns: repeat(2, 1fr); } }
.pp-card { padding: 24px; border-radius: 8px; border: 1px solid var(--hairline); background: var(--card); box-shadow: var(--shadow-1); position: relative; overflow: hidden; }
.pp-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--petrol); }
.pp-label { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--petrol); margin-bottom: 12px; }
.pp-vals { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
.pp-cur { font-family: var(--mono); font-size: 0.9rem; color: var(--loss); }
.pp-gain { font-family: var(--mono); font-size: 0.9rem; color: var(--petrol); }
.pp-arr { color: var(--muted-2); }
.pp-desc { font-size: 0.87rem; color: var(--muted-2); line-height: 1.6; margin-bottom: 12px; }
.pp-fix { font-size: 0.83rem; padding: 12px 14px; border-radius: 6px; background: var(--bone); border: 1px solid var(--hairline); color: var(--ink); line-height: 1.55; }
.pp-fix-lbl { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--petrol); margin-bottom: 4px; }

/* Automation plan */
.ap-cards { display: flex; flex-direction: column; gap: 20px; }
.ap-card { border-radius: 8px; border: 1px solid var(--hairline); background: var(--card); box-shadow: var(--shadow-1); overflow: hidden; }
.ap-card-head { padding: 16px 22px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--hairline); background: var(--bone); }
.ap-priority { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 10px; border-radius: 4px; white-space: nowrap; border: 1px solid transparent; }
.ap-priority.critical { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.ap-priority.high { background: transparent; color: var(--petrol); border-color: var(--petrol); }
.ap-priority.medium { background: transparent; color: var(--muted-2); border-color: var(--hairline); }
.ap-name { font-family: var(--serif); font-size: 1.05rem; font-weight: 700; letter-spacing: -0.008em; }
.ap-body { padding: 24px; }
.ap-trigger-lbl { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-2); margin-bottom: 5px; }
.ap-trigger { font-family: var(--serif); font-size: 0.95rem; color: var(--muted-2); margin-bottom: 22px; font-style: italic; line-height: 1.5; }
.ap-steps-lbl { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-2); margin-bottom: 10px; }
.ap-steps-list { display: flex; flex-direction: column; gap: 7px; margin-bottom: 22px; }
.ap-step-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.86rem; color: var(--muted-2); line-height: 1.5; }
.ap-step-num { width: 22px; height: 22px; border-radius: 50%; background: var(--paper); border: 1px solid var(--hairline); display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 0.66rem; color: var(--petrol); flex-shrink: 0; margin-top: 1px; }
.ap-tools { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 18px; }
.ap-tool { font-family: var(--mono); font-size: 0.68rem; padding: 5px 12px; border-radius: 4px; background: var(--paper); border: 1px solid var(--hairline); color: var(--muted-2); }
.ap-impact { padding: 14px 18px; border-radius: 6px; background: rgba(14,95,99,0.06); border: 1px solid rgba(14,95,99,0.18); font-size: 0.88rem; color: var(--ink); line-height: 1.55; }
.ap-impact-lbl { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--petrol); margin-bottom: 5px; }

/* Sources */
.src-section { margin-top: 52px; }
.src-toggle { background: none; border: 1px solid var(--hairline); border-radius: 6px; color: var(--muted-2); font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
.src-toggle:hover { border-color: var(--ink); color: var(--ink); }
.src-list { margin-top: 14px; padding: 18px 20px; border-radius: 8px; background: var(--card); border: 1px solid var(--hairline); display: flex; flex-direction: column; gap: 0; }
.src-item { font-size: 0.8rem; color: var(--muted-2); padding: 7px 0; border-bottom: 1px solid var(--hairline); line-height: 1.5; }
.src-item:last-child { border-bottom: none; }

/* CTA (ink band) */
.cta-section { margin-top: 72px; padding: 60px 40px; border-radius: 10px; background: var(--ink); color: var(--paper); text-align: center; }
@media (max-width: 480px) { .cta-section { padding: 44px 24px; } }
.cta-h2 { font-family: var(--serif); font-size: clamp(1.7rem, 3vw, 2.3rem); font-weight: 700; letter-spacing: -0.015em; margin-bottom: 16px; color: var(--paper); }
.cta-sub { font-size: 0.97rem; color: rgba(244,242,236,0.7); line-height: 1.72; max-width: 560px; margin: 0 auto 36px; }
.cta-pills { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px; }
.cta-pill { display: flex; align-items: center; gap: 7px; font-size: 0.84rem; color: rgba(244,242,236,0.72); font-weight: 500; }
.cta-pill span { color: #9BC4C1; }
.cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 17px 44px; border-radius: 6px; background: var(--paper); color: var(--ink); font-family: var(--sans); font-size: 1.02rem; font-weight: 600; text-decoration: none; transition: transform 0.18s var(--ease-out), box-shadow 0.18s var(--ease-out); }
.cta-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 34px rgba(0,0,0,0.3); }
.cta-note { margin-top: 18px; font-size: 0.82rem; color: rgba(244,242,236,0.55); max-width: 520px; margin-left: auto; margin-right: auto; line-height: 1.6; }

/* Chatbot */
@keyframes aud-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
.chat-fab { position: fixed; bottom: 28px; right: 28px; z-index: 500; width: 56px; height: 56px; border-radius: 50%; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); cursor: pointer; box-shadow: var(--shadow-2); display: flex; align-items: center; justify-content: center; font-size: 1.15rem; transition: background 0.25s, border-color 0.25s, transform 0.25s; animation: aud-float 3s ease-in-out infinite; }
.chat-fab:hover { background: var(--petrol-deep); border-color: var(--petrol-deep); transform: scale(1.06); animation: none; }
.chat-panel { position: fixed; bottom: 96px; right: 28px; z-index: 500; width: 360px; max-height: 500px; border-radius: 10px; overflow: hidden; background: var(--card); border: 1px solid var(--hairline); box-shadow: var(--shadow-2); display: flex; flex-direction: column; transform: scale(0.9) translateY(20px); opacity: 0; transition: all 0.3s var(--ease-out); pointer-events: none; }
.chat-panel.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }
@media (max-width: 480px) { .chat-panel { width: calc(100vw - 40px); right: 20px; } }
.chat-hdr { padding: 14px 18px; background: var(--bone); border-bottom: 1px solid var(--hairline); display: flex; align-items: center; justify-content: space-between; }
.chat-hdr-info { display: flex; align-items: center; gap: 10px; }
.chat-avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--ink); color: var(--paper); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-size: 1rem; font-weight: 700; flex-shrink: 0; }
.chat-name { font-size: 0.91rem; font-weight: 600; }
.chat-status { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted-2); display: flex; align-items: center; gap: 5px; margin-top: 2px; }
.chat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--petrol); }
.chat-close { background: none; border: none; color: var(--muted-2); cursor: pointer; font-size: 1rem; padding: 4px 6px; border-radius: 6px; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
.chat-close:hover { color: var(--ink); background: rgba(20,27,25,0.05); }
.chat-msgs { flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 13px; }
.chat-msg { max-width: 88%; }
.chat-msg.ai { align-self: flex-start; }
.chat-msg.user { align-self: flex-end; }
.chat-bubble { padding: 11px 15px; border-radius: 10px; font-size: 0.86rem; line-height: 1.55; }
.chat-msg.ai .chat-bubble { background: var(--bone); color: var(--ink); border-radius: 4px 10px 10px 10px; }
.chat-msg.user .chat-bubble { background: rgba(14,95,99,0.1); color: var(--ink); border-radius: 10px 4px 10px 10px; }
.chat-footer { padding: 12px 14px; border-top: 1px solid var(--hairline); display: flex; gap: 9px; align-items: center; }
.chat-input { flex: 1; background: var(--paper); border: 1px solid var(--hairline); border-radius: 6px; padding: 10px 14px; color: var(--ink); font-family: var(--sans); font-size: 16px; outline: none; transition: border-color 0.2s; }
.chat-input:focus { border-color: var(--petrol); }
.chat-input::placeholder { color: var(--muted-2); opacity: 0.7; }
.chat-send { width: 38px; height: 38px; border-radius: 6px; background: var(--ink); border: none; cursor: pointer; color: var(--paper); font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
.chat-send:hover { background: var(--petrol-deep); }
.chat-badge { display: inline-flex; align-items: center; gap: 5px; font-family: var(--mono); font-size: 0.66rem; color: var(--muted-2); padding: 6px 10px; border-radius: 4px; background: var(--paper); border: 1px solid var(--hairline); margin-top: 4px; cursor: pointer; transition: border-color 0.2s, color 0.2s; }
.chat-badge:hover { border-color: var(--ink); color: var(--ink); }

/* Animations */
@keyframes aud-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
.anim { opacity: 0; animation: aud-fadeUp 0.6s var(--ease-out) forwards; }
.d1 { animation-delay: 0.05s; } .d2 { animation-delay: 0.15s; } .d3 { animation-delay: 0.25s; } .d4 { animation-delay: 0.35s; } .d5 { animation-delay: 0.45s; } .d6 { animation-delay: 0.55s; } .d7 { animation-delay: 0.65s; }

/* Restart / download buttons */
.restart-btn { background: none; border: 1px solid var(--hairline); border-radius: 6px; color: var(--muted-2); font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 9px 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
.restart-btn:hover { border-color: var(--ink); color: var(--ink); }
.ar-header-actions { max-width: 1000px; margin: 0 auto; display: flex; flex-wrap: wrap; padding: 20px 24px; gap: 12px; }

/* Report scroll arrow */
.report-scroll-arrow { display: flex; justify-content: center; align-items: center; padding: 24px 0 24px; color: var(--petrol); }
@keyframes arrowCascade {
  0%   { opacity: 0.15; transform: translateY(-4px); }
  50%  { opacity: 1;    transform: translateY(4px);  }
  100% { opacity: 0.15; transform: translateY(-4px); }
}
.report-scroll-arrow .arr-ch1 { animation: arrowCascade 1.6s ease-in-out infinite 0s;    }
.report-scroll-arrow .arr-ch2 { animation: arrowCascade 1.6s ease-in-out infinite 0.22s; }
.report-scroll-arrow .arr-ch3 { animation: arrowCascade 1.6s ease-in-out infinite 0.44s; }

/* â”€â”€ NUMBER INPUT (for numeric questions) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.aq-num-wrap { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
.aq-num-row { display: flex; align-items: center; gap: 12px; }
.aq-num-prefix { font-family: var(--mono); font-size: 1.5rem; color: var(--muted-2); line-height: 1; }
.aq-num-inp { flex: 0 1 66%; min-width: 80px; padding: 16px 20px; border-radius: 8px; border: 1px solid var(--hairline); background: var(--card); color: var(--ink); font-family: var(--mono); font-size: 1.4rem; font-variant-numeric: tabular-nums; outline: none; transition: border-color 0.2s; -moz-appearance: textfield; }
.aq-num-inp::-webkit-outer-spin-button, .aq-num-inp::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.aq-num-inp:focus { border-color: var(--petrol); }
.aq-num-inp::placeholder { color: var(--muted-2); opacity: 0.6; font-size: 1.1rem; }
.aq-num-unit { font-size: 0.9rem; color: var(--muted-2); font-weight: 500; white-space: nowrap; }
.aq-num-err { color: var(--loss); font-size: 0.83rem; }
.aq-continue { padding: 16px 36px; border-radius: 6px; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); font-family: var(--sans); font-size: 1rem; font-weight: 600; cursor: pointer; box-shadow: var(--shadow-1); transition: background 0.18s var(--ease-out), border-color 0.18s var(--ease-out), transform 0.18s var(--ease-out), box-shadow 0.18s var(--ease-out), opacity 0.18s; align-self: flex-start; }
.aq-continue:hover:not(:disabled) { background: var(--petrol-deep); border-color: var(--petrol-deep); transform: translateY(-1px); box-shadow: var(--shadow-2); }
.aq-continue:disabled { opacity: 0.4; cursor: default; box-shadow: none; }
`;

const CSS = BASE_CSS + FOOTER_CSS + AUDIT_CSS;

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   INTRO SCREEN
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function IntroScreen({ onStart }) {
  return (
    <div className="ai-wrap">
      <div className="ai-inner">
        <div className="ai-badge">Free AI Business Audit â€” 2 Minutes</div>
        <h1 className="ai-h1">
          Find Out Exactly How Much<br />
          <span className="ag">Automation Could Add to Your Business</span>
        </h1>
        <p className="ai-sub">
          Answer 10â€“15 questions about how your business runs today. We'll show you exactly
          where you're losing revenue, how many hours you're wasting, and give you a
          step-by-step plan to fix it â€” built specifically for your industry.
        </p>
        <div className="ai-stats">
          <div>
            <div className="ai-stat-val">26</div>
            <div className="ai-stat-lbl">Industries covered</div>
          </div>
          <div>
            <div className="ai-stat-val">~2 min</div>
            <div className="ai-stat-lbl">To complete</div>
          </div>
          <div>
            <div className="ai-stat-val">100%</div>
            <div className="ai-stat-lbl">Calculated from your answers</div>
          </div>
        </div>
        <button className="ai-btn" onClick={onStart}>
          Start My Free Audit â†’
        </button>
        <div className="ai-note">No credit card. No spam. Takes about 2 minutes.</div>
        <div className="ai-trust">
          <div className="ai-trust-item"><span>âœ“</span> Built on published industry benchmarks</div>
          <div className="ai-trust-item"><span>âœ“</span> Numbers based on your answers</div>
          <div className="ai-trust-item"><span>âœ“</span> Custom automation roadmap</div>
        </div>
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   NICHE SELECTION GRID â€” grouped by industry category
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function NicheGrid({ onSelect }) {
  const nicheMap = Object.fromEntries(NICHES.map(n => [n.id, n]));

  const NicheCard = ({ n }) => (
    <button className="ang-card" onClick={() => onSelect(n)}>
      <span className="ang-icon">{n.icon}</span>
      <div className="ang-label">{n.label}</div>
      <div className="ang-tag">{n.tagline}</div>
    </button>
  );

  return (
    <div className="ang-wrap">
      <div className="ang-inner">
        <div className="ang-head">
          <h2>What Type of Business Do You Run?</h2>
          <p>Select your industry to get questions and results specific to your situation</p>
        </div>

        {NICHE_GROUPS.map(group => (
          <div key={group.label}>
            <div className="ang-tier-lbl">{group.label}</div>
            <div className="ang-grid">
              {group.ids.map(id => nicheMap[id] ? <NicheCard key={id} n={nicheMap[id]} /> : null)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   QUESTION STEP (auto-advances on selection)
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function QuestionStep({ niche, qIndex, onAnswer, onBack }) {
  const [selected, setSelected] = useState(null);
  const [numVal, setNumVal] = useState('');
  const [numErr, setNumErr] = useState('');
  const question = niche.questions[qIndex];
  const total = niche.questions.length;
  const isNum = question.type === 'number';

  // No reset effect needed: the parent renders <QuestionStep key={qIndex}>,
  // so every question change remounts this component with fresh state.

  // Multiple-choice handler (legacy, kept for safety)
  const handleSelect = (i) => {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(() => onAnswer(question.values[i]), 420);
  };

  // Numeric input handler
  const handleNumSubmit = () => {
    const v = parseFloat(numVal);
    if (isNaN(v) || v < 0) { setNumErr('Please enter a valid number.'); return; }
    if (question.pct && v > 100) { setNumErr('Please enter a percentage between 0 and 100.'); return; }
    onAnswer(question.pct ? v / 100 : v);
  };

  const progress = Math.round((qIndex / total) * 100);

  return (
    <div className="aq-wrap">
      <div className="aq-prog-outer">
        <div className="aq-prog-meta">
          <div className="aq-prog-niche">
            <span>{niche.icon}</span>
            <span>{niche.label}</span>
          </div>
          <div className="aq-prog-count">{qIndex + 1} / {total}</div>
        </div>
        <div className="aq-prog-track">
          <div className="aq-prog-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="aq-inner">
        <h2 className="aq-q">{question.text}</h2>
        {question.sub && <p className="aq-sub">{question.sub}</p>}

        {isNum ? (
          <div className="aq-num-wrap">
            <div className="aq-num-row">
              {question.unit === '$' && <span className="aq-num-prefix">$</span>}
              <input
                type="number"
                className="aq-num-inp"
                placeholder={question.placeholder || '0'}
                value={numVal}
                onChange={e => { setNumVal(e.target.value); setNumErr(''); }}
                onKeyDown={e => e.key === 'Enter' && handleNumSubmit()}
                min="0"
                max={question.pct ? '100' : undefined}
                autoFocus
              />
              {question.unit && question.unit !== '$' && (
                <span className="aq-num-unit">{question.unit}</span>
              )}
            </div>
            {numErr && <p className="aq-num-err">{numErr}</p>}
            <button
              className="aq-continue"
              onClick={handleNumSubmit}
              disabled={numVal === '' || numVal === null}
            >
              Continue â†’
            </button>
          </div>
        ) : (
          <div className="aq-opts">
            {question.options.map((opt, i) => (
              <button
                key={i}
                className={`aq-opt${selected === i ? ' sel' : ''}`}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        <div className="aq-src">
          <span className="aq-src-ico">Source</span>
          <span>{question.source}</span>
        </div>

        <button className="aq-back" onClick={onBack}>
          â† {qIndex === 0 ? 'Change Industry' : 'Previous Question'}
        </button>
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   EMAIL GATE (shows blurred preview of results)
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EmailGate({ previewResults, niche, onSubmit }) {
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [err, setErr] = useState('');

  const { monthlyRevenueLost = 0, monthlyRevenueGained = 0, weeklyHoursSaved = 0 } = previewResults || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) { setErr('Please enter your name.'); return; }
    if (!biz.trim()) { setErr('Please enter your business name.'); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr('Please enter a valid email address.'); return;
    }
    if (!consent) { setErr('Please check the consent box to continue.'); return; }
    onSubmit({ name: name.trim(), biz: biz.trim(), email: email.trim() });
  };

  return (
    <div className="ae-wrap">
      <div className="ae-card">
        <div className="ae-kicker">Audit complete</div>
        <h2 className="ae-h2">Your Results Are Ready</h2>
        <p className="ae-sub">
          We've crunched the numbers for your {niche.label} business. Enter your info below
          to unlock your full personalized automation plan.
        </p>

        <div className="ae-preview">
          <div className="ae-prev-item">
            <div className="ae-prev-val r">{$$(monthlyRevenueLost)}</div>
            <div className="ae-prev-lbl">Lost Monthly</div>
          </div>
          <div className="ae-prev-item">
            <div className="ae-prev-val g">+{$$(monthlyRevenueGained)}</div>
            <div className="ae-prev-lbl">Could Add Monthly</div>
          </div>
          <div className="ae-prev-item">
            <div className="ae-prev-val c">{weeklyHoursSaved}h</div>
            <div className="ae-prev-lbl">Reclaimed/Week</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="ae-lbl">Your Name</label>
          <input className="ae-inp" type="text" placeholder="First and last name" value={name} onChange={e => setName(e.target.value)} />
          <label className="ae-lbl">Business Name</label>
          <input className="ae-inp" type="text" placeholder="Your company name" value={biz} onChange={e => setBiz(e.target.value)} />
          <label className="ae-lbl">Email Address</label>
          <input className="ae-inp" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <label className="ae-consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => { setConsent(e.target.checked); setErr(''); }}
            />
            <span>
              I agree that Nuvion Solutions may contact me about my audit results by email
              or phone (including automated technology) at the contact details I provided.
              Consent is not a condition of purchase. Reply STOP to opt out of texts.
            </span>
          </label>
          {err && <div className="ae-err">{err}</div>}
          <button type="submit" className="ae-submit" disabled={!consent}>Reveal My Full Automation Plan â†’</button>
        </form>

        <div className="ae-privacy">Your information is never sold or shared with third parties.</div>
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   LOADING SCREEN
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function LoadingScreen({ niche, onDone }) {
  const [stage, setStage] = useState(0);

  const ANALYSIS_STEPS = [
    `Reviewing your ${niche.label} business data`,
    'Calculating revenue impact by pain point',
    'Comparing against industry benchmarks',
    'Mapping your automation workflows',
    'Computing 12-month revenue opportunity',
  ];
  const STAGES = [
    `Analyzing your ${niche.label} business...`,
    'Calculating revenue impact...',
    'Building your automation roadmap...',
    'Finalizing your personalized report...',
    'Done.',
  ];

  useEffect(() => {
    let s = 0;
    const iv = setInterval(() => {
      s++;
      setStage(s);
      if (s >= ANALYSIS_STEPS.length) {
        clearInterval(iv);
        setTimeout(onDone, 600);
      }
    }, 700);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="al-wrap">
      <div className="al-spinner" />
      <h2 className="al-h">Analyzing Your Business</h2>
      <div className="al-stage">{STAGES[Math.min(stage, STAGES.length - 1)]}</div>
      <div className="al-steps">
        {ANALYSIS_STEPS.map((s, i) => (
          <div key={i} className={`al-step${stage === i ? ' active' : stage > i ? ' done' : ''}`}>
            <div className="al-dot" />
            <span>{s}</span>
            {stage > i && <span className="al-check">âœ“</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   RESULTS VIEW
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function ResultsView({ results, niche, name, biz, answers, onRestart }) {
  const [showSrc, setShowSrc] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatTyping, setChatTyping] = useState(false);
  const chatEndRef = useRef(null);

  const firstName = name ? name.split(' ')[0] : 'there';

  const {
    monthlyRevenueLost = 0, monthlyRevenueGained = 0,
    yearlyRevenueLost = 0, yearlyRevenueGained = 0,
    weeklyHoursWasted = 0, weeklyHoursSaved = 0,
    annualHoursSaved = 0,
    painPoints = [],
    sources = [],
  } = results || {};

  // Initialize chat with context-aware first message
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setMsgs([{
        role: 'ai',
        text: `Hi ${firstName}! I've reviewed your ${niche.label} audit results. You're potentially losing ${$$(monthlyRevenueLost)}/month and ${weeklyHoursWasted} hours/week to manual processes. What would you like to know more about â€” your automation plan, how we work, or what results to expect?`,
      }]);
    }, 800);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, chatTyping]);

  const handleChatSend = () => {
    const text = chatInput.trim();
    if (!text) return;
    setChatInput('');
    setMsgs(prev => [...prev, { role: 'user', text }]);
    setChatTyping(true);
    // Phase 3 will wire this to n8n â†’ Claude with full audit context
    setTimeout(() => {
      setChatTyping(false);
      setMsgs(prev => [...prev, {
        role: 'ai',
        text: `Great question. For your ${niche.label} business specifically, the best way to get a precise answer is on a quick strategy call â€” we'll go through your audit results together and build out the exact plan. Want to book that?`,
      }]);
    }, 1400);
  };

  const handleDownload = async () => {
    const fmt = (n) => {
      if (!n || isNaN(n)) return '$0';
      if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
      if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
      return `$${Math.round(n).toLocaleString()}`;
    };
    const qList = niche?.questions || [];
    const answerPairs = qList.map((q, i) => {
      const val = (answers || [])[i];
      let label;
      if (q.type === 'number') {
        if (q.pct) {
          label = `${Math.round((val || 0) * 100)}%`;
        } else if (q.unit === '$') {
          label = `$${Math.round(val || 0).toLocaleString()}`;
        } else {
          label = q.unit ? `${val ?? 'N/A'} ${q.unit}` : String(val ?? 'N/A');
        }
      } else {
        const idx = Array.isArray(q.values) ? q.values.indexOf(val) : -1;
        label = (idx >= 0 && Array.isArray(q.options)) ? q.options[idx] : (val !== undefined ? String(val) : 'N/A');
      }
      return { question: q.text || '', answer: label };
    });
    const donutTotal = Math.max(monthlyRevenueLost + monthlyRevenueGained, 1);
    const lossPct = Math.round((monthlyRevenueLost / donutTotal) * 100);
    const gainPct = 100 - lossPct;

    const answersRows = answerPairs.map((p, i) => `
      <tr style="background:${i % 2 === 0 ? '#FBFAF7' : '#F4F2EC'}">
        <td style="padding:12px 16px;color:#57605C;font-size:13px;border-bottom:1px solid #DAD6CA;width:60%">${p.question}</td>
        <td style="padding:12px 16px;color:#141B19;font-size:13px;font-weight:600;border-bottom:1px solid #DAD6CA">${p.answer}</td>
      </tr>`).join('');

    const painRows = painPoints.map(pp => `
      <div style="background:#F4F2EC;border:1px solid #DAD6CA;border-radius:8px;border-left:3px solid #0E5F63;padding:16px 20px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
          <span style="color:#141B19;font-weight:700;font-size:14px">${pp.label || ''}</span>
          <span style="color:#8A4B42;font-size:13px;font-weight:600;margin-left:16px;white-space:nowrap">${pp.currentValue || ''}</span>
        </div>
        <p style="color:#57605C;font-size:13px;line-height:1.6;margin:0 0 8px">${pp.description || ''}</p>
        <div style="color:#0E5F63;font-size:12px;font-weight:600">Fix: ${pp.fix || ''}</div>
        ${pp.gainValue ? `<div style="color:#0E5F63;font-size:12px;font-weight:700;margin-top:4px">${pp.gainValue}</div>` : ''}
      </div>`).join('');

    const sourcesHtml = sources.length > 0 ? `
      <div style="margin-top:40px;padding-top:24px;border-top:1px solid #DAD6CA">
        <div style="color:#8B928D;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px">Research Sources</div>
        ${sources.map(s => `<div style="color:#57605C;font-size:11px;line-height:1.6;padding:4px 0;border-bottom:1px solid #EBE8DF">${s}</div>`).join('')}
      </div>` : '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${biz || firstName} â€” AI Automation Audit Report</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #F4F2EC; color: #141B19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; padding: 40px 20px; min-height: 100vh; }
    .wrap { max-width: 760px; margin: 0 auto; }
    .top-bar { height: 4px; background: #0E5F63; border-radius: 4px 4px 0 0; margin-bottom: 0; }
    .card { background: #FBFAF7; border: 1px solid #DAD6CA; border-top: none; border-radius: 0 0 10px 10px; padding: 36px 40px 40px; margin-bottom: 24px; }
    .brand { color: #57605C; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 16px; }
    h1 { font-family: Georgia, 'Times New Roman', serif; color: #141B19; font-size: 28px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; }
    h1 span { color: #0E5F63; font-style: italic; }
    .sub { color: #57605C; font-size: 14px; line-height: 1.6; margin-bottom: 28px; }
    .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
    .metrics-3 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .metric { background: #F4F2EC; border: 1px solid #DAD6CA; border-radius: 8px; padding: 20px; text-align: center; }
    .metric-lbl { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px; }
    .metric-val { font-size: 30px; font-weight: 700; letter-spacing: -0.02em; line-height: 1; }
    .metric-note { font-size: 12px; color: #57605C; margin-top: 6px; }
    .red-lbl { color: #8A4B42; } .grn-lbl { color: #8A4B42; } .cyn-lbl { color: #0E5F63; } .vio-lbl { color: #0E5F63; }
    .banner { background: #141B19; border-radius: 10px; padding: 24px 28px; margin-bottom: 24px; display: flex; align-items: center; gap: 24px; }
    .banner-val { font-family: Georgia, 'Times New Roman', serif; font-size: 36px; font-weight: 700; color: #9BC4C1; white-space: nowrap; }
    .banner-txt { color: rgba(244,242,236,0.75); font-size: 13px; line-height: 1.6; }
    .banner-txt strong { color: #F4F2EC; }
    .sec-card { background: #FBFAF7; border: 1px solid #DAD6CA; border-radius: 10px; padding: 28px 32px; margin-bottom: 20px; }
    .sec-title { font-family: Georgia, 'Times New Roman', serif; color: #141B19; font-size: 17px; font-weight: 700; margin-bottom: 4px; }
    .sec-sub { color: #57605C; font-size: 13px; margin-bottom: 20px; }
    .bar-wrap { margin-bottom: 20px; }
    .bar-track { height: 28px; border-radius: 6px; overflow: hidden; display: flex; margin-bottom: 16px; }
    .bar-loss { background: #8A4B42; }
    .bar-gain { background: #0E5F63; }
    .bar-legend { display: flex; gap: 32px; }
    .leg-item-val { font-size: 22px; font-weight: 700; }
    .leg-item-lbl { color: #57605C; font-size: 11px; margin-top: 2px; }
    .answers-table { width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid #DAD6CA; }
    .answers-table th { padding: 10px 16px; background: #EBE8DF; color: #57605C; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; text-align: left; border-bottom: 1px solid #DAD6CA; }
    .cta-box { text-align: center; padding: 36px; background: #FBFAF7; border: 1px solid #DAD6CA; border-radius: 10px; margin-bottom: 20px; }
    .cta-box h2 { font-family: Georgia, 'Times New Roman', serif; color: #141B19; font-size: 20px; font-weight: 700; margin-bottom: 8px; }
    .cta-box p { color: #57605C; font-size: 14px; margin-bottom: 24px; }
    .cta-link { display: inline-block; background: #141B19; color: #F4F2EC; font-weight: 700; font-size: 15px; text-decoration: none; padding: 14px 36px; border-radius: 6px; }
    .footer { text-align: center; color: #8B928D; font-size: 12px; padding: 20px; }
    .footer a { color: #0E5F63; text-decoration: none; }
    @media print { body { background: #F4F2EC !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
  </style>
</head>
<body>
<div class="wrap">
  <div class="top-bar"></div>
  <div class="card">
    <div class="brand">Nuvion Solutions Â· AI Automation Audit</div>
    <h1>Your AI Automation Report, <span>${firstName}</span></h1>
    <p class="sub">Personalized for <strong style="color:#0E5F63">${biz || firstName}</strong>${niche?.label ? ` Â· ${niche.label}` : ''}<br>
    Every number below is an estimate calculated from your answers, using published industry benchmarks. Treat them as directional, not a guarantee.</p>

    <div class="metrics">
      <div class="metric">
        <div class="metric-lbl red-lbl">Revenue at Risk / Month</div>
        <div class="metric-val" style="color:#141B19">${fmt(monthlyRevenueLost)}</div>
        <div class="metric-note">from slow follow-up &amp; missed leads</div>
      </div>
      <div class="metric">
        <div class="metric-lbl grn-lbl">Hours Wasted / Week</div>
        <div class="metric-val" style="color:#141B19">${weeklyHoursWasted}</div>
        <div class="metric-note">on tasks AI can handle for you</div>
      </div>
    </div>
    <div class="metrics-3">
      <div class="metric">
        <div class="metric-lbl cyn-lbl">Recovery Potential / Month</div>
        <div class="metric-val" style="color:#141B19">+${fmt(monthlyRevenueGained)}</div>
      </div>
      <div class="metric">
        <div class="metric-lbl vio-lbl">Hours Freed / Year</div>
        <div class="metric-val" style="color:#141B19">${annualHoursSaved}</div>
      </div>
    </div>
  </div>

  <div class="banner">
    <div class="banner-val">+${fmt(yearlyRevenueGained)}</div>
    <div class="banner-txt"><strong>12-month revenue opportunity for ${biz || firstName}.</strong><br>
    Estimate based on your answers and published industry benchmarks.</div>
  </div>

  <div class="sec-card">
    <div class="sec-title">Revenue Recovery Breakdown</div>
    <div class="sec-sub">How your current losses compare to what's recoverable</div>
    <div class="bar-wrap">
      <div class="bar-track">
        <div class="bar-loss" style="width:${lossPct}%"></div>
        <div class="bar-gain" style="width:${gainPct}%"></div>
      </div>
      <div class="bar-legend">
        <div>
          <div class="leg-item-val" style="color:#8A4B42">${fmt(monthlyRevenueLost)}/mo</div>
          <div class="leg-item-lbl">Currently Losing</div>
        </div>
        <div>
          <div class="leg-item-val" style="color:#0E5F63">+${fmt(monthlyRevenueGained)}/mo</div>
          <div class="leg-item-lbl">Estimated recoverable</div>
        </div>
      </div>
    </div>
  </div>

  ${answerPairs.length > 0 ? `
  <div class="sec-card">
    <div class="sec-title">Your Answers</div>
    <div class="sec-sub">Exactly what you told us â€” every result above flows from these</div>
    <table class="answers-table">
      <thead><tr>
        <th>Question</th>
        <th>Your Answer</th>
      </tr></thead>
      <tbody>${answersRows}</tbody>
    </table>
  </div>` : ''}

  ${painPoints.length > 0 ? `
  <div class="sec-card">
    <div class="sec-title">Issues Identified in Your Business</div>
    <div class="sec-sub">Every issue below was identified directly from your answers â€” not generic assumptions</div>
    ${painRows}
  </div>` : ''}

  <div class="cta-box">
    <h2>Ready to capture ${fmt(monthlyRevenueGained)}/month?</h2>
    <p>Book a free 30-minute strategy call. We'll walk through your audit and build a step-by-step roadmap.</p>
    <a href="https://nuvion-solutions.com/book" class="cta-link">Book Your Free Strategy Call</a>
  </div>

  ${sourcesHtml}

  <div class="footer">
    Nuvion Solutions Â· AI Automation for Growing Businesses Â·
    <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
  </div>
</div>
</body>
</html>`;

    const filename = `${(biz || firstName).replace(/[^a-z0-9]/gi, '-').toLowerCase()}-audit-report.html`;
    const blob = new Blob([html], { type: 'text/html' });

    // Mobile (iOS/Android): trigger native share sheet â€” Save to Files, Drive, AirDrop, etc.
    if (navigator.canShare) {
      const file = new File([blob], filename, { type: 'text/html' });
      if (navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: `${biz || firstName} â€” AI Automation Audit Report`,
            files: [file],
          });
          return;
        } catch (e) {
          if (e.name === 'AbortError') return; // user dismissed the sheet â€” do nothing
          // unexpected error â€” fall through to desktop download
        }
      }
    }

    // Desktop: direct file download via anchor
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="ar-wrap">
      {/* Header */}
      <div className="ar-header">
        <div className="ar-biz">{biz} Â· {niche.label} Â· Automation Impact Audit</div>
        <h1 className="ar-title">
          Here's What We Found,{' '}
          <span className="ag">{firstName}</span>
        </h1>
        <p className="ar-sub">
          Every number below is an estimate calculated from your answers, using published
          industry benchmarks. Treat them as directional, not a guarantee.
        </p>
      </div>

      <div className="ar-header-actions">
        <button className="restart-btn" onClick={onRestart}>â†º Start Over</button>
        <button className="restart-btn" onClick={handleDownload} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1v7M6.5 8l-3-3M6.5 8l3-3M1 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Report
        </button>
        <Link to="/book" className="an-cta">Book a Strategy Call</Link>
      </div>

      {/* â”€â”€ SCROLL-DOWN ARROW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="report-scroll-arrow">
        <svg width="32" height="60" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Three staggered chevrons cascading downward */}
          <path className="arr-ch1" d="M6 5 L16 15 L26 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="arr-ch2" d="M6 21 L16 31 L26 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="arr-ch3" d="M6 37 L16 47 L26 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="ar-inner">

        {/* â”€â”€ SUMMARY CARDS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="ar-cards anim d1">
          <div className="ar-card red">
            <div className="ar-card-val">{$$(monthlyRevenueLost)}</div>
            <div className="ar-card-lbl">Revenue Slipping Away Each Month</div>
          </div>
          <div className="ar-card grn">
            <div className="ar-card-val">+{$$(monthlyRevenueGained)}</div>
            <div className="ar-card-lbl">Revenue You Could Add Each Month</div>
          </div>
          <div className="ar-card cyn">
            <div className="ar-card-val">{weeklyHoursSaved} hrs</div>
            <div className="ar-card-lbl">Hours Reclaimed Every Week</div>
          </div>
        </div>

        {/* Annual banner */}
        <div className="ar-banner anim d2">
          <div className="ar-banner-val">{$$(yearlyRevenueGained)}</div>
          <div className="ar-banner-txt">
            <strong>12-month revenue opportunity for {biz}.</strong><br />
            Estimate based on your answers and published industry benchmarks.
            Implementing the plan below is how you capture it.
          </div>
        </div>

        {/* â”€â”€ BEFORE / AFTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="ar-section anim d3">
          <div className="ar-sec-title">Before vs. After Automation</div>
          <div className="ar-sec-sub">Your current state compared to what's possible with the right systems in place</div>
          <div className="bav-grid">
            <div className="bav-panel bef">
              <div className="bav-head">Without Automation (Today)</div>
              <div className="bav-metric">
                <div className="bav-metric-lbl">Monthly revenue escaping</div>
                <div className="bav-metric-val">{$$(monthlyRevenueLost)}</div>
              </div>
              <div className="bav-metric">
                <div className="bav-metric-lbl">Weekly hours burned on manual work</div>
                <div className="bav-metric-val">{weeklyHoursWasted} hours</div>
              </div>
              <div className="bav-metric">
                <div className="bav-metric-lbl">Annual revenue at risk</div>
                <div className="bav-metric-val">{$$(yearlyRevenueLost)}</div>
              </div>
            </div>

            <div className="bav-arrow-wrap">
              <div className="bav-arrow">â†’</div>
            </div>

            <div className="bav-panel aft">
              <div className="bav-head">With Automation</div>
              <div className="bav-metric">
                <div className="bav-metric-lbl">Monthly revenue recovered and added</div>
                <div className="bav-metric-val">+{$$(monthlyRevenueGained)}</div>
              </div>
              <div className="bav-metric">
                <div className="bav-metric-lbl">Weekly hours reclaimed from automation</div>
                <div className="bav-metric-val">{weeklyHoursSaved} hours</div>
              </div>
              <div className="bav-metric">
                <div className="bav-metric-lbl">Annual hours given back to your life</div>
                <div className="bav-metric-val">{nn(annualHoursSaved)} hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* â”€â”€ PAIN POINTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {painPoints.length > 0 && (
          <div className="ar-section anim d4">
            <div className="ar-sec-title">Where You're Losing Revenue Right Now</div>
            <div className="ar-sec-sub">
              Each issue below was identified from your specific answers â€” not generic assumptions
            </div>
            <div className="pp-grid">
              {painPoints.map((pp, i) => (
                <div key={i} className="pp-card">
                  <div className="pp-label">{pp.label}</div>
                  <div className="pp-vals">
                    <span className="pp-cur">{pp.currentValue}</span>
                    <span className="pp-arr">â†’</span>
                    <span className="pp-gain">{pp.gainValue}</span>
                  </div>
                  <div className="pp-desc">{pp.description}</div>
                  <div className="pp-fix">
                    <div className="pp-fix-lbl">The Fix</div>
                    {pp.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* â”€â”€ AUTOMATION PLAN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {niche.automationPlan && niche.automationPlan.length > 0 && (
          <div className="ar-section anim d5">
            <div className="ar-sec-title">Your Custom Automation Plan</div>
            <div className="ar-sec-sub">
              Implement these workflows in priority order for maximum ROI. Each one builds on the last.
            </div>
            <div className="ap-cards">
              {niche.automationPlan.map((wf, i) => (
                <div key={i} className="ap-card">
                  <div className={`ap-card-head ${wf.priority}`}>
                    <div className={`ap-priority ${wf.priority}`}>
                      {wf.priority === 'critical' ? 'Critical' : wf.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                    </div>
                    <div className="ap-name">{wf.name}</div>
                  </div>
                  <div className="ap-body">
                    <div className="ap-trigger-lbl">Trigger</div>
                    <div className="ap-trigger">{wf.trigger}</div>

                    {/* Steps list */}
                    <div className="ap-steps-lbl">How It Works</div>
                    <div className="ap-steps-list">
                      {wf.steps.map((s, j) => (
                        <div key={j} className="ap-step-item">
                          <div className="ap-step-num">{j + 1}</div>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools */}
                    <div className="ap-tools">
                      {wf.tools.map((t, j) => (
                        <span key={j} className="ap-tool">{t}</span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="ap-impact">
                      <div className="ap-impact-lbl">Expected Impact</div>
                      {wf.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* â”€â”€ SOURCES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {sources.length > 0 && (
          <div className="src-section anim d6">
            <button className="src-toggle" onClick={() => setShowSrc(s => !s)}>
              {showSrc ? 'Hide' : 'View'} Data Sources ({sources.length})
            </button>
            {showSrc && (
              <div className="src-list">
                {sources.map((s, i) => (
                  <div key={i} className="src-item">Â· {s}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="cta-section anim d7">
          <h2 className="cta-h2">Ready to Put This Plan Into Action?</h2>
          <p className="cta-sub">
            Book a free 30-minute strategy call with our team. We'll walk through your audit results,
            answer every question, and show you exactly how we'd build this for your business.
            No pressure. No generic proposals. Just a real plan built for {niche.label} businesses like yours.
          </p>
          <div className="cta-pills">
            <div className="cta-pill"><span>âœ“</span> Free 30-minute call</div>
            <div className="cta-pill"><span>âœ“</span> No generic pitches</div>
            <div className="cta-pill"><span>âœ“</span> Built for {niche.label}</div>
            <div className="cta-pill"><span>âœ“</span> Pricing discussed on the call</div>
          </div>
          <Link to="/book" className="cta-btn">
            Book My Free Strategy Call â†’
          </Link>
          <div className="cta-note">
            Bring the report to a free strategy call and we'll tell you, in plain English,
            what we'd build and what it would cost â€” in writing.
          </div>
        </div>

      </div>{/* end ar-inner */}

      <Footer />

      {/* â”€â”€ CHATBOT SHELL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <button
        className="chat-fab"
        onClick={() => setChatOpen(o => !o)}
        title="Ask about your automation plan"
        aria-label="Open chat"
      >
        {chatOpen ? 'âœ•' : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H8l-4 3.5V4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <div className={`chat-panel${chatOpen ? ' open' : ''}`} role="dialog" aria-label="Nuvion AI Chat">
        <div className="chat-hdr">
          <div className="chat-hdr-info">
            <div className="chat-avatar">N</div>
            <div>
              <div className="chat-name">Nuvion AI</div>
              <div className="chat-status">
                <div className="chat-dot" /> Scripted guide
              </div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setChatOpen(false)} aria-label="Close chat">âœ•</button>
        </div>

        <div className="chat-msgs">
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              <div className="chat-bubble">{m.text}</div>
              {m.role === 'ai' && i === 0 && (
                <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Tell me about the plan', 'How long does setup take?', 'What does it cost?'].map((q, j) => (
                    <button
                      key={j}
                      className="chat-badge"
                      onClick={() => {
                        setChatInput(q);
                        setTimeout(() => {
                          const text = q;
                          setChatInput('');
                          setMsgs(prev => [...prev, { role: 'user', text }]);
                          setChatTyping(true);
                          setTimeout(() => {
                            setChatTyping(false);
                            const responses = {
                              'Tell me about the plan': `Your plan has ${niche.automationPlan?.length || 3} key workflows, prioritized by impact. The most critical one is "${niche.automationPlan?.[0]?.name}" â€” this one alone addresses your biggest revenue leak. Want me to break down how it works specifically for your situation?`,
                              'How long does setup take?': `For most ${niche.label} businesses, we typically have the core systems running within 2â€“3 weeks. The exact timeline depends on your current tools and what we're integrating. We can map this out on a strategy call.`,
                              'What does it cost?': `We structure every engagement differently based on what each business actually needs â€” we don't believe in one-size-fits-all pricing. The best way to get a real number is a 30-minute call where we understand your situation. Want to book that?`,
                            };
                            setMsgs(prev => [...prev, { role: 'ai', text: responses[text] || `Great question. Let's go through that on a strategy call â€” I want to give you a specific answer for your ${niche.label} business, not a generic one.` }]);
                          }, 1200);
                        }, 50);
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {chatTyping && (
            <div className="chat-msg ai">
              <div className="chat-bubble" style={{ color: 'var(--muted-2)' }}>Typing...</div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-footer">
          <input
            className="chat-input"
            placeholder="Ask about your automation plan..."
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleChatSend()}
          />
          <button className="chat-send" onClick={handleChatSend} aria-label="Send">â†’</button>
        </div>
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MAIN â€” STATE MACHINE
   Steps: intro â†’ niche â†’ questions â†’ email â†’ loading â†’ results
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function Audit() {
  const [step, setStep] = useState('intro');
  const [niche, setNiche] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [results, setResults] = useState(null);
  const [userData, setUserData] = useState({ name: '', biz: '', email: '' });

  // Scroll to top on every step change
  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const handleNicheSelect = (n) => {
    setNiche(n);
    setAnswers([]);
    setQIndex(0);
    setStep('questions');
  };

  const handleAnswer = (val) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);

    if (qIndex + 1 < niche.questions.length) {
      setQIndex(qIndex + 1);
    } else {
      // All questions answered â€” compute results now, show email gate
      try {
        const r = niche.calculate(newAnswers);
        setResults(r);
      } catch (e) {
        console.error('Calculation error:', e);
        setResults({ monthlyRevenueLost: 0, monthlyRevenueGained: 0, yearlyRevenueLost: 0, yearlyRevenueGained: 0, weeklyHoursWasted: 0, weeklyHoursSaved: 0, annualHoursSaved: 0, painPoints: [], sources: [] });
      }
      setStep('email');
    }
  };

  const handleBack = () => {
    if (step === 'questions') {
      if (qIndex === 0) {
        setStep('niche');
      } else {
        setAnswers(prev => prev.slice(0, -1));
        setQIndex(qIndex - 1);
      }
    } else if (step === 'niche') {
      setStep('intro');
    }
  };

  const handleEmailSubmit = (data) => {
    setUserData(data);
    fetch('https://nuvion-n8n.zeabur.app/webhook/audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        tcpa_consent: true,
        niche: niche.id,
        nicheLabel: niche.label,
        answers,
        questions: niche.questions.map(q => ({ text: q.text, options: q.options, values: q.values })),
        results
      })
    }).catch(() => {});
    setStep('loading');
  };

  const handleRestart = () => {
    setStep('intro');
    setNiche(null);
    setAnswers([]);
    setQIndex(0);
    setResults(null);
    setUserData({ name: '', biz: '', email: '' });
  };

  return (
    <>
      <Helmet>
        <title>Free AI Business Audit â€” Nuvion Solutions</title>
        <meta name="description" content="Find out exactly how much automation could add to your business. Answer 10â€“15 questions about your industry and get a personalized revenue impact report and automation roadmap." />
      </Helmet>

      <div className="aud">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="grain" aria-hidden="true" />

        <SiteNav />

        {step === 'intro' && (
          <IntroScreen onStart={() => setStep('niche')} />
        )}

        {step === 'niche' && (
          <NicheGrid onSelect={handleNicheSelect} />
        )}

        {step === 'questions' && niche && (
          <QuestionStep
            key={qIndex}
            niche={niche}
            qIndex={qIndex}
            answers={answers}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        )}

        {step === 'email' && results && (
          <EmailGate
            niche={niche}
            previewResults={results}
            onSubmit={handleEmailSubmit}
          />
        )}

        {step === 'loading' && niche && (
          <LoadingScreen
            niche={niche}
            onDone={() => setStep('results')}
          />
        )}

        {step === 'results' && results && (
          <ResultsView
            results={results}
            niche={niche}
            name={userData.name}
            biz={userData.biz}
            email={userData.email}
            answers={answers}
            onRestart={handleRestart}
          />
        )}
      </div>
    </>
  );
}
