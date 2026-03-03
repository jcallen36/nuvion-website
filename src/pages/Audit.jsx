import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NICHES } from './audit-data.js';
import { BASE_CSS } from './shared.js';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';
import nuvionLogo from '../assets/nuvion-logo.png';

/* ─────────────────────────────────────────────────────────────
   MONEY / NUMBER FORMATTERS
───────────────────────────────────────────────────────────── */
const $$ = (n) => {
  if (!n || isNaN(n)) return '$0';
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};
const nn = (n) => (n ? Math.round(n).toLocaleString() : '0');

/* ─────────────────────────────────────────────────────────────
   NICHE GROUPS
───────────────────────────────────────────────────────────── */
const NICHE_GROUPS = [
  { label: 'Home Services', emoji: '🏠', ids: ['hvac', 'roofing', 'plumbing-electrical', 'landscaping', 'cleaning'] },
  { label: 'Real Estate & Property', emoji: '🏡', ids: ['real-estate', 'property-mgmt', 'mortgage'] },
  { label: 'Healthcare & Wellness', emoji: '🏥', ids: ['medical', 'dental', 'chiro-pt', 'veterinary', 'gyms'] },
  { label: 'Legal, Finance & Insurance', emoji: '⚖️', ids: ['law-firms', 'financial-advisors', 'insurance', 'accounting'] },
  { label: 'Automotive & Retail', emoji: '🛒', ids: ['auto-dealers', 'ecommerce'] },
  { label: 'Professional Services', emoji: '💼', ids: ['marketing-agencies', 'coaching'] },
  { label: 'Hospitality & Lifestyle', emoji: '🍽️', ids: ['restaurants', 'salons-spas', 'events', 'photography'] },
  { label: "Don't See Your Industry?", emoji: '🔧', ids: ['other'] },
];

/* ─────────────────────────────────────────────────────────────
   CSS
───────────────────────────────────────────────────────────── */
const AUDIT_CSS = `
/* define --primary2 not in BASE_CSS */
:root { --primary2: #3B5BDB; }

.aud { font-family: var(--font); background: var(--bg); color: var(--text); min-height: 100vh; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

/* CTA button used in results header */
.an-cta { padding: 10px 22px; border-radius: 9px; background: linear-gradient(135deg, var(--primary), var(--primary2)); color: #fff; font-family: var(--font); font-size: 0.88rem; font-weight: 700; text-decoration: none; transition: all 0.25s; }
.an-cta:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(79,110,247,0.45); }

/* ── INTRO ───────────────────────────────────────────── */
.ai-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 100px 24px 60px; position: relative; overflow: hidden; }
.ai-orb1 { position: absolute; width: 600px; height: 600px; top: -150px; left: -200px; border-radius: 50%; background: radial-gradient(circle, rgba(79,110,247,0.18), transparent 68%); filter: blur(70px); pointer-events: none; }
.ai-orb2 { position: absolute; width: 500px; height: 500px; bottom: -100px; right: -150px; border-radius: 50%; background: radial-gradient(circle, rgba(0,220,255,0.1), transparent 68%); filter: blur(70px); pointer-events: none; }
.ai-inner { max-width: 740px; text-align: center; position: relative; z-index: 1; }
.ai-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 18px; border-radius: 100px; border: 1px solid rgba(79,110,247,0.3); background: rgba(79,110,247,0.08); font-size: 0.82rem; font-weight: 600; color: var(--cyan); margin-bottom: 30px; }
.ai-h1 { font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 22px; }
.ag { background: linear-gradient(130deg, var(--cyan) 0%, var(--primary) 50%, var(--violet) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.ai-sub { font-size: 1.12rem; color: var(--muted); line-height: 1.75; max-width: 580px; margin: 0 auto 44px; }
.ai-stats { display: flex; justify-content: center; gap: 48px; margin-bottom: 48px; flex-wrap: wrap; }
.ai-stat-val { font-size: 1.7rem; font-weight: 800; }
.ai-stat-lbl { font-size: 0.78rem; color: var(--muted); margin-top: 3px; }
.ai-btn { display: inline-flex; align-items: center; gap: 10px; padding: 18px 48px; border-radius: 12px; background: linear-gradient(135deg, var(--primary), var(--primary2)); color: #fff; font-family: var(--font); font-size: 1.08rem; font-weight: 700; cursor: pointer; border: none; box-shadow: 0 6px 30px rgba(79,110,247,0.42); transition: all 0.25s; }
.ai-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 44px rgba(79,110,247,0.58); }
.ai-note { margin-top: 18px; font-size: 0.82rem; color: var(--dim); }
.ai-trust { display: flex; justify-content: center; gap: 28px; margin-top: 44px; flex-wrap: wrap; }
.ai-trust-item { display: flex; align-items: center; gap: 7px; font-size: 0.82rem; color: var(--muted); }
.ai-trust-item span:first-child { color: #34D399; }

/* ── NICHE GRID ──────────────────────────────────────── */
.ang-wrap { min-height: 100vh; padding: 100px 24px 80px; }
.ang-inner { max-width: 1100px; margin: 0 auto; }
.ang-head { text-align: center; margin-bottom: 52px; }
.ang-head h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; margin-bottom: 10px; }
.ang-head p { color: var(--muted); font-size: 1rem; }
.ang-tier-lbl { font-size: 0.71rem; font-weight: 700; letter-spacing: 0.11em; text-transform: uppercase; color: #4F6EF7; margin: 36px 0 14px; padding-left: 2px; }
.ang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 12px; }
@media (min-width: 640px) { .ang-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 900px) { .ang-grid { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1100px) { .ang-grid { grid-template-columns: repeat(5, 1fr); } }
.ang-card { padding: 20px 14px 18px; border-radius: 14px; cursor: pointer; border: 1px solid var(--border); background: var(--surface); transition: all 0.22s; text-align: center; position: relative; overflow: hidden; }
.ang-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(79,110,247,0.07), rgba(0,220,255,0.04)); opacity: 0; transition: opacity 0.22s; }
.ang-card:hover { border-color: rgba(79,110,247,0.45); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(79,110,247,0.2); }
.ang-card:hover::after { opacity: 1; }
.ang-icon { font-size: 1.85rem; margin-bottom: 10px; display: block; }
.ang-label { font-size: 0.89rem; font-weight: 700; margin-bottom: 4px; color: #F1F5F9; }
.ang-tag { font-size: 0.71rem; color: #8B99B5; line-height: 1.35; }

/* ── QUESTIONS ───────────────────────────────────────── */
.aq-wrap { min-height: 100vh; display: flex; flex-direction: column; padding: 90px 24px 48px; }
.aq-prog-outer { max-width: 680px; margin: 0 auto 52px; width: 100%; }
.aq-prog-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.aq-prog-niche { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; font-weight: 600; color: var(--muted); }
.aq-prog-count { font-size: 0.85rem; color: var(--dim); }
.aq-prog-track { height: 4px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden; }
.aq-prog-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--primary), var(--cyan)); transition: width 0.45s cubic-bezier(0.4,0,0.2,1); }
.aq-inner { max-width: 680px; margin: 0 auto; width: 100%; flex: 1; display: flex; flex-direction: column; }
.aq-q { font-size: clamp(1.22rem, 2.5vw, 1.65rem); font-weight: 700; line-height: 1.4; margin-bottom: 10px; }
.aq-sub { font-size: 0.9rem; color: var(--muted); margin-bottom: 32px; line-height: 1.6; }
.aq-opts { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
.aq-opt { padding: 16px 20px; border-radius: 12px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font-family: var(--font); font-size: 0.97rem; font-weight: 500; cursor: pointer; text-align: left; transition: all 0.2s; width: 100%; position: relative; overflow: hidden; }
.aq-opt::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0; background: linear-gradient(90deg, rgba(79,110,247,0.14), transparent); transition: width 0.3s; }
.aq-opt:hover:not(:disabled) { border-color: rgba(79,110,247,0.4); }
.aq-opt:hover:not(:disabled)::before { width: 100%; }
.aq-opt.sel { border-color: var(--primary); background: rgba(79,110,247,0.13); color: #fff; }
.aq-opt:disabled { cursor: default; }
.aq-src { display: flex; align-items: flex-start; gap: 9px; padding: 11px 14px; border-radius: 10px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); font-size: 0.77rem; color: var(--dim); line-height: 1.55; margin-bottom: 28px; }
.aq-src-ico { flex-shrink: 0; font-size: 0.75rem; margin-top: 1px; opacity: 0.6; }
.aq-back { background: none; border: none; color: var(--muted); font-family: var(--font); font-size: 0.87rem; cursor: pointer; padding: 8px 0; display: flex; align-items: center; gap: 6px; transition: color 0.2s; align-self: flex-start; margin-top: auto; }
.aq-back:hover { color: var(--text); }

/* ── EMAIL GATE ──────────────────────────────────────── */
.ae-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 100px 24px 60px; }
.ae-card { max-width: 520px; width: 100%; padding: 48px; border-radius: 20px; border: 1px solid rgba(79,110,247,0.22); background: var(--surface); }
@media (max-width: 480px) { .ae-card { padding: 32px 22px; } }
.ae-icon { font-size: 2.6rem; margin-bottom: 18px; display: block; text-align: center; }
.ae-h2 { font-size: 1.75rem; font-weight: 800; text-align: center; margin-bottom: 10px; }
.ae-sub { font-size: 0.94rem; color: var(--muted); text-align: center; line-height: 1.65; margin-bottom: 28px; }
.ae-preview { display: flex; gap: 10px; margin-bottom: 28px; }
.ae-prev-item { flex: 1; padding: 14px 10px; border-radius: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); text-align: center; }
.ae-prev-val { font-size: 1.05rem; font-weight: 800; }
.ae-prev-val.r { color: #FF6B6B; }
.ae-prev-val.g { color: #34D399; }
.ae-prev-val.c { color: var(--cyan); }
.ae-prev-lbl { font-size: 0.7rem; color: var(--muted); margin-top: 4px; line-height: 1.3; }
.ae-lbl { font-size: 0.82rem; font-weight: 600; color: var(--muted); margin-bottom: 7px; display: block; }
.ae-inp { width: 100%; padding: 13px 16px; border-radius: 10px; border: 1px solid var(--border); background: rgba(255,255,255,0.04); color: var(--text); font-family: var(--font); font-size: 0.95rem; outline: none; transition: border-color 0.2s; margin-bottom: 14px; }
.ae-inp:focus { border-color: rgba(79,110,247,0.55); }
.ae-inp::placeholder { color: var(--dim); }
.ae-err { color: #FF6B6B; font-size: 0.83rem; margin-bottom: 10px; }
.ae-submit { width: 100%; padding: 16px; border-radius: 12px; background: linear-gradient(135deg, var(--primary), var(--primary2)); color: #fff; font-family: var(--font); font-size: 1.02rem; font-weight: 700; border: none; cursor: pointer; box-shadow: 0 6px 24px rgba(79,110,247,0.35); transition: all 0.25s; margin-top: 4px; }
.ae-submit:hover { transform: translateY(-2px); box-shadow: 0 10px 38px rgba(79,110,247,0.52); }
.ae-privacy { font-size: 0.76rem; color: var(--dim); text-align: center; margin-top: 14px; }

/* ── LOADING ─────────────────────────────────────────── */
.al-wrap { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 24px; text-align: center; }
@keyframes aud-spin { to { transform: rotate(360deg); } }
@keyframes aud-pulse { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
.al-spinner { width: 60px; height: 60px; border-radius: 50%; border: 3px solid rgba(79,110,247,0.15); border-top-color: var(--primary); animation: aud-spin 0.85s linear infinite; margin-bottom: 30px; }
.al-h { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; }
.al-stage { font-size: 0.92rem; color: var(--muted); margin-bottom: 38px; min-height: 22px; }
.al-steps { display: flex; flex-direction: column; gap: 10px; max-width: 380px; width: 100%; }
.al-step { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; text-align: left; color: var(--muted); transition: all 0.5s; }
.al-step.active { background: rgba(79,110,247,0.09); border-color: rgba(79,110,247,0.22); color: var(--text); }
.al-step.done { color: var(--text); border-color: rgba(34,197,94,0.22); background: rgba(34,197,94,0.05); }
.al-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--dim); flex-shrink: 0; transition: all 0.3s; }
.al-step.active .al-dot { background: var(--primary); animation: aud-pulse 1s ease-in-out infinite; }
.al-step.done .al-dot { background: #34D399; }
.al-check { margin-left: auto; color: #34D399; font-size: 0.88rem; }

/* ── RESULTS ─────────────────────────────────────────── */
.ar-wrap { padding-top: 68px; padding-bottom: 100px; }
.ar-header { background: linear-gradient(180deg, rgba(79,110,247,0.09) 0%, transparent 100%); border-bottom: 1px solid var(--border); padding: 52px 24px 44px; text-align: center; }
.ar-biz { font-size: 0.83rem; color: var(--muted); margin-bottom: 8px; font-weight: 500; letter-spacing: 0.04em; }
.ar-title { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 800; margin-bottom: 14px; letter-spacing: -0.02em; }
.ar-sub { font-size: 0.97rem; color: var(--muted); max-width: 600px; margin: 0 auto; line-height: 1.68; }
.ar-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* Summary cards */
.ar-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 52px; }
@media (max-width: 700px) { .ar-cards { grid-template-columns: 1fr; } }
.ar-card { padding: 28px 22px; border-radius: 16px; border: 1px solid; text-align: center; }
.ar-card.red { border-color: rgba(255,77,77,0.25); background: rgba(255,77,77,0.06); }
.ar-card.grn { border-color: rgba(34,197,94,0.25); background: rgba(34,197,94,0.06); }
.ar-card.cyn { border-color: rgba(0,220,255,0.25); background: rgba(0,220,255,0.06); }
.ar-card-ico { font-size: 1.4rem; margin-bottom: 10px; }
.ar-card-val { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; margin-bottom: 6px; }
.ar-card.red .ar-card-val { color: #FF6B6B; }
.ar-card.grn .ar-card-val { color: #34D399; }
.ar-card.cyn .ar-card-val { color: var(--cyan); }
.ar-card-lbl { font-size: 0.81rem; color: var(--muted); line-height: 1.4; }

/* Annual banner */
.ar-banner { margin-top: 22px; padding: 24px 28px; border-radius: 14px; background: linear-gradient(135deg, rgba(79,110,247,0.1), rgba(0,220,255,0.06)); border: 1px solid rgba(79,110,247,0.25); display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.ar-banner-val { font-size: 2.1rem; font-weight: 800; color: var(--cyan); white-space: nowrap; }
.ar-banner-txt { font-size: 0.94rem; color: var(--muted); line-height: 1.65; }
.ar-banner-txt strong { color: var(--text); }

/* Section heads */
.ar-section { margin-top: 68px; }
.ar-sec-title { font-size: 1.4rem; font-weight: 800; margin-bottom: 7px; }
.ar-sec-sub { font-size: 0.9rem; color: var(--muted); margin-bottom: 28px; line-height: 1.55; }

/* Before / After */
.bav-grid { display: grid; grid-template-columns: 1fr 56px 1fr; gap: 0; align-items: center; }
@media (max-width: 600px) { .bav-grid { grid-template-columns: 1fr; gap: 16px; } .bav-arrow-wrap { display: none; } }
.bav-panel { padding: 28px 24px; border-radius: 16px; border: 1px solid; height: 100%; }
.bav-panel.bef { border-color: rgba(255,77,77,0.22); background: rgba(255,77,77,0.04); }
.bav-panel.aft { border-color: rgba(34,197,94,0.22); background: rgba(34,197,94,0.04); }
.bav-head { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 22px; }
.bav-panel.bef .bav-head { color: #FF6B6B; }
.bav-panel.aft .bav-head { color: #34D399; }
.bav-metric { margin-bottom: 22px; }
.bav-metric:last-child { margin-bottom: 0; }
.bav-metric-lbl { font-size: 0.77rem; color: var(--muted); margin-bottom: 5px; }
.bav-metric-val { font-size: 1.4rem; font-weight: 800; margin-bottom: 8px; }
.bav-panel.bef .bav-metric-val { color: #FF6B6B; }
.bav-panel.aft .bav-metric-val { color: #34D399; }
.bav-bar-track { height: 5px; background: rgba(255,255,255,0.06); border-radius: 5px; overflow: hidden; }
.bav-bar-fill { height: 100%; border-radius: 5px; }
.bav-bar-fill.bef { background: linear-gradient(90deg, #EF4444, #FF6B6B); }
.bav-bar-fill.aft { background: linear-gradient(90deg, #16A34A, #34D399); }
.bav-arrow-wrap { display: flex; align-items: center; justify-content: center; }
.bav-arrow { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--cyan)); display: flex; align-items: center; justify-content: center; font-size: 1.05rem; color: #fff; font-weight: 700; box-shadow: 0 4px 20px rgba(79,110,247,0.38); }

/* Pain points */
.pp-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .pp-grid { grid-template-columns: repeat(2, 1fr); } }
.pp-card { padding: 24px; border-radius: 14px; border: 1px solid var(--border); background: var(--surface); position: relative; overflow: hidden; }
.pp-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, var(--primary), var(--cyan)); }
.pp-label { font-size: 0.79rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: var(--primary); margin-bottom: 12px; }
.pp-vals { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
.pp-cur { font-size: 0.97rem; font-weight: 700; color: #FF6B6B; }
.pp-gain { font-size: 0.97rem; font-weight: 700; color: #34D399; }
.pp-arr { color: var(--dim); }
.pp-desc { font-size: 0.87rem; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }
.pp-fix { font-size: 0.83rem; padding: 11px 14px; border-radius: 9px; background: rgba(79,110,247,0.08); border: 1px solid rgba(79,110,247,0.14); color: var(--text); line-height: 1.55; }
.pp-fix-lbl { font-weight: 700; color: var(--primary); margin-bottom: 4px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.07em; }

/* Automation plan */
.ap-cards { display: flex; flex-direction: column; gap: 20px; }
.ap-card { border-radius: 16px; border: 1px solid var(--border); background: var(--surface); overflow: hidden; }
.ap-card-head { padding: 16px 22px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--border); }
.ap-card-head.critical { background: rgba(251,146,60,0.07); border-bottom-color: rgba(251,146,60,0.18); }
.ap-card-head.high { background: rgba(79,110,247,0.07); border-bottom-color: rgba(79,110,247,0.14); }
.ap-card-head.medium { background: rgba(0,220,255,0.05); border-bottom-color: rgba(0,220,255,0.1); }
.ap-priority { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; white-space: nowrap; }
.ap-priority.critical { background: rgba(251,146,60,0.2); color: #FB923C; }
.ap-priority.high { background: rgba(79,110,247,0.2); color: var(--primary); }
.ap-priority.medium { background: rgba(0,220,255,0.15); color: var(--cyan); }
.ap-name { font-size: 1.0rem; font-weight: 700; }
.ap-body { padding: 24px; }
.ap-trigger-lbl { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--dim); margin-bottom: 5px; }
.ap-trigger { font-size: 0.88rem; color: var(--muted); margin-bottom: 22px; font-style: italic; line-height: 1.5; }
.ap-steps-lbl { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--dim); margin-bottom: 10px; }
.ap-steps-list { display: flex; flex-direction: column; gap: 7px; margin-bottom: 22px; }
.ap-step-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.86rem; color: var(--muted); line-height: 1.5; }
.ap-step-num { width: 22px; height: 22px; border-radius: 50%; background: rgba(79,110,247,0.15); border: 1px solid rgba(79,110,247,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--primary); flex-shrink: 0; margin-top: 1px; }
.ap-tools { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 18px; }
.ap-tool { font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: var(--muted); }
.ap-impact { padding: 14px 18px; border-radius: 10px; background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.15); font-size: 0.88rem; color: var(--text); line-height: 1.55; }
.ap-impact-lbl { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #34D399; margin-bottom: 5px; }

/* Sources */
.src-section { margin-top: 52px; }
.src-toggle { background: none; border: 1px solid var(--border); border-radius: 10px; color: var(--muted); font-family: var(--font); font-size: 0.85rem; padding: 10px 18px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
.src-toggle:hover { border-color: rgba(79,110,247,0.3); color: var(--text); }
.src-list { margin-top: 14px; padding: 18px 20px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border); display: flex; flex-direction: column; gap: 0; }
.src-item { font-size: 0.81rem; color: var(--dim); padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.03); line-height: 1.5; }
.src-item:last-child { border-bottom: none; }

/* CTA */
.cta-section { margin-top: 72px; padding: 60px 40px; border-radius: 20px; background: linear-gradient(135deg, rgba(79,110,247,0.1), rgba(0,220,255,0.06), rgba(167,139,250,0.07)); border: 1px solid rgba(79,110,247,0.22); text-align: center; }
@media (max-width: 480px) { .cta-section { padding: 44px 24px; } }
.cta-h2 { font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 800; margin-bottom: 16px; }
.cta-sub { font-size: 0.97rem; color: var(--muted); line-height: 1.72; max-width: 560px; margin: 0 auto 36px; }
.cta-pills { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px; }
.cta-pill { display: flex; align-items: center; gap: 7px; font-size: 0.84rem; color: var(--muted); font-weight: 500; }
.cta-pill span { color: #34D399; }
.cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 18px 52px; border-radius: 12px; background: linear-gradient(135deg, var(--primary), var(--primary2)); color: #fff; font-family: var(--font); font-size: 1.08rem; font-weight: 700; text-decoration: none; box-shadow: 0 8px 34px rgba(79,110,247,0.46); transition: all 0.25s; }
.cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 52px rgba(79,110,247,0.62); }
.cta-note { margin-top: 16px; font-size: 0.81rem; color: var(--dim); }

/* Chatbot */
@keyframes aud-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
.chat-fab { position: fixed; bottom: 28px; right: 28px; z-index: 500; width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--cyan)); border: none; cursor: pointer; box-shadow: 0 6px 28px rgba(79,110,247,0.5); display: flex; align-items: center; justify-content: center; font-size: 1.45rem; transition: all 0.25s; animation: aud-float 3s ease-in-out infinite; }
.chat-fab:hover { transform: scale(1.1); box-shadow: 0 10px 42px rgba(79,110,247,0.68); animation: none; }
.chat-panel { position: fixed; bottom: 98px; right: 28px; z-index: 500; width: 360px; max-height: 500px; border-radius: 18px; overflow: hidden; background: var(--surface); border: 1px solid rgba(79,110,247,0.25); box-shadow: 0 20px 60px rgba(0,0,0,0.65); display: flex; flex-direction: column; transform: scale(0.9) translateY(20px); opacity: 0; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); pointer-events: none; }
.chat-panel.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }
@media (max-width: 480px) { .chat-panel { width: calc(100vw - 40px); right: 20px; } }
.chat-hdr { padding: 14px 18px; background: rgba(79,110,247,0.09); border-bottom: 1px solid rgba(79,110,247,0.14); display: flex; align-items: center; justify-content: space-between; }
.chat-hdr-info { display: flex; align-items: center; gap: 10px; }
.chat-avatar { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--cyan)); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.chat-name { font-size: 0.91rem; font-weight: 700; }
.chat-status { font-size: 0.71rem; color: #34D399; display: flex; align-items: center; gap: 5px; margin-top: 1px; }
.chat-dot { width: 6px; height: 6px; border-radius: 50%; background: #34D399; }
.chat-close { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 1rem; padding: 4px 6px; border-radius: 6px; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
.chat-close:hover { color: var(--text); background: rgba(255,255,255,0.06); }
.chat-msgs { flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 13px; }
.chat-msg { max-width: 88%; }
.chat-msg.ai { align-self: flex-start; }
.chat-msg.user { align-self: flex-end; }
.chat-bubble { padding: 11px 15px; border-radius: 13px; font-size: 0.86rem; line-height: 1.55; }
.chat-msg.ai .chat-bubble { background: rgba(255,255,255,0.06); color: var(--text); border-radius: 4px 13px 13px 13px; }
.chat-msg.user .chat-bubble { background: rgba(79,110,247,0.22); color: var(--text); border-radius: 13px 4px 13px 13px; }
.chat-footer { padding: 12px 14px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; gap: 9px; align-items: center; }
.chat-input { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 14px; color: var(--text); font-family: var(--font); font-size: 0.87rem; outline: none; transition: border-color 0.2s; }
.chat-input:focus { border-color: rgba(79,110,247,0.4); }
.chat-input::placeholder { color: var(--dim); }
.chat-send { width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, var(--primary), var(--primary2)); border: none; cursor: pointer; color: #fff; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.chat-send:hover { transform: scale(1.05); }
.chat-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 0.7rem; color: var(--muted); padding: 5px 10px; border-radius: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); margin-top: 4px; }

/* Animations */
@keyframes aud-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
.anim { opacity: 0; animation: aud-fadeUp 0.6s ease forwards; }
.d1 { animation-delay: 0.05s; } .d2 { animation-delay: 0.15s; } .d3 { animation-delay: 0.25s; } .d4 { animation-delay: 0.35s; } .d5 { animation-delay: 0.45s; } .d6 { animation-delay: 0.55s; } .d7 { animation-delay: 0.65s; }

/* Restart button */
.restart-btn { background: none; border: 1px solid var(--border); border-radius: 8px; color: var(--muted); font-family: var(--font); font-size: 0.82rem; padding: 8px 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
.restart-btn:hover { border-color: rgba(79,110,247,0.3); color: var(--text); }
.ar-header-actions { display: flex; justify-content: center; padding: 16px 24px; gap: 12px; border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.015); }
`;

const CSS = BASE_CSS + FOOTER_CSS + AUDIT_CSS;

/* ─────────────────────────────────────────────────────────────
   INTRO SCREEN
───────────────────────────────────────────────────────────── */
function IntroScreen({ onStart }) {
  return (
    <div className="ai-wrap">
      <div className="ai-orb1" />
      <div className="ai-orb2" />
      <div className="ai-inner">
        <div className="ai-badge">🔍 Free AI Business Audit — 2 Minutes</div>
        <h1 className="ai-h1">
          Find Out Exactly How Much<br />
          <span className="ag">Automation Could Add to Your Business</span>
        </h1>
        <p className="ai-sub">
          Answer 10–15 questions about how your business runs today. We'll show you exactly
          where you're losing revenue, how many hours you're wasting, and give you a
          step-by-step plan to fix it — built specifically for your industry.
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
            <div className="ai-stat-lbl">Personalized</div>
          </div>
        </div>
        <button className="ai-btn" onClick={onStart}>
          Start My Free Audit →
        </button>
        <div className="ai-note">No credit card. No spam. Takes about 2 minutes.</div>
        <div className="ai-trust">
          <div className="ai-trust-item"><span>✓</span> Real industry data & research</div>
          <div className="ai-trust-item"><span>✓</span> Numbers based on your answers</div>
          <div className="ai-trust-item"><span>✓</span> Custom automation roadmap</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NICHE SELECTION GRID — grouped by industry category
───────────────────────────────────────────────────────────── */
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
            <div className="ang-tier-lbl">{group.emoji} {group.label}</div>
            <div className="ang-grid">
              {group.ids.map(id => nicheMap[id] ? <NicheCard key={id} n={nicheMap[id]} /> : null)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   QUESTION STEP (auto-advances on selection)
───────────────────────────────────────────────────────────── */
function QuestionStep({ niche, qIndex, onAnswer, onBack }) {
  const [selected, setSelected] = useState(null);
  const question = niche.questions[qIndex];
  const total = niche.questions.length;

  // Reset selected state when qIndex changes
  useEffect(() => { setSelected(null); }, [qIndex]);

  const handleSelect = (i) => {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(() => onAnswer(i), 420);
  };

  const pct = Math.round((qIndex / total) * 100);

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
          <div className="aq-prog-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="aq-inner">
        <h2 className="aq-q">{question.text}</h2>
        <p className="aq-sub">{question.sub}</p>

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

        <div className="aq-src">
          <span className="aq-src-ico">📊</span>
          <span>{question.source}</span>
        </div>

        <button className="aq-back" onClick={onBack}>
          ← {qIndex === 0 ? 'Change Industry' : 'Previous Question'}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   EMAIL GATE (shows blurred preview of results)
───────────────────────────────────────────────────────────── */
function EmailGate({ previewResults, niche, onSubmit }) {
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');

  const { monthlyRevenueLost = 0, monthlyRevenueGained = 0, weeklyHoursSaved = 0 } = previewResults || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) { setErr('Please enter your name.'); return; }
    if (!biz.trim()) { setErr('Please enter your business name.'); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr('Please enter a valid email address.'); return;
    }
    onSubmit({ name: name.trim(), biz: biz.trim(), email: email.trim() });
  };

  return (
    <div className="ae-wrap">
      <div className="ae-card">
        <span className="ae-icon">📊</span>
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
          {err && <div className="ae-err">{err}</div>}
          <button type="submit" className="ae-submit">Reveal My Full Automation Plan →</button>
        </form>

        <div className="ae-privacy">🔒 Your information is never sold or shared with third parties.</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   LOADING SCREEN
───────────────────────────────────────────────────────────── */
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
            {stage > i && <span className="al-check">✓</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   RESULTS VIEW
───────────────────────────────────────────────────────────── */
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

  const maxRev = Math.max(monthlyRevenueLost, monthlyRevenueGained, 1);
  const maxHrs = Math.max(weeklyHoursWasted, weeklyHoursSaved, 1);

  // Initialize chat with context-aware first message
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setMsgs([{
        role: 'ai',
        text: `Hi ${firstName}! I've reviewed your ${niche.label} audit results. You're potentially losing ${$$(monthlyRevenueLost)}/month and ${weeklyHoursWasted} hours/week to manual processes. What would you like to know more about — your automation plan, how we work, or what results to expect?`,
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
    // Phase 3 will wire this to n8n → Claude with full audit context
    setTimeout(() => {
      setChatTyping(false);
      setMsgs(prev => [...prev, {
        role: 'ai',
        text: `Great question. For your ${niche.label} business specifically, the best way to get a precise answer is on a quick strategy call — we'll go through your audit results together and build out the exact plan. Want to book that?`,
      }]);
    }, 1400);
  };

  const handleDownload = () => {
    const fmt = (n) => {
      if (!n || isNaN(n)) return '$0';
      if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
      if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
      return `$${Math.round(n).toLocaleString()}`;
    };
    const qList = niche?.questions || [];
    const answerPairs = qList.map((q, i) => {
      const val = (answers || [])[i];
      const idx = Array.isArray(q.values) ? q.values.indexOf(val) : -1;
      const label = (idx >= 0 && Array.isArray(q.options)) ? q.options[idx] : (val !== undefined ? String(val) : 'N/A');
      return { question: q.text || '', answer: label };
    });
    const donutTotal = Math.max(monthlyRevenueLost + monthlyRevenueGained, 1);
    const lossPct = Math.round((monthlyRevenueLost / donutTotal) * 100);
    const gainPct = 100 - lossPct;

    const answersRows = answerPairs.map((p, i) => `
      <tr style="background:${i % 2 === 0 ? '#0D1221' : '#111829'}">
        <td style="padding:12px 16px;color:#8B99B5;font-size:13px;border-bottom:1px solid #1a2540;width:60%">${p.question}</td>
        <td style="padding:12px 16px;color:#F1F5F9;font-size:13px;font-weight:600;border-bottom:1px solid #1a2540">${p.answer}</td>
      </tr>`).join('');

    const painRows = painPoints.map(pp => `
      <div style="background:#111829;border-radius:10px;border-left:3px solid #4F6EF7;padding:16px 20px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
          <span style="color:#F1F5F9;font-weight:700;font-size:14px">${pp.label || ''}</span>
          <span style="color:#EF4444;font-size:13px;font-weight:600;margin-left:16px;white-space:nowrap">${pp.currentValue || ''}</span>
        </div>
        <p style="color:#8B99B5;font-size:13px;line-height:1.6;margin:0 0 8px">${pp.description || ''}</p>
        <div style="color:#34D399;font-size:12px;font-weight:600">Fix: ${pp.fix || ''}</div>
        ${pp.gainValue ? `<div style="color:#34D399;font-size:12px;font-weight:700;margin-top:4px">${pp.gainValue}</div>` : ''}
      </div>`).join('');

    const sourcesHtml = sources.length > 0 ? `
      <div style="margin-top:40px;padding-top:24px;border-top:1px solid #1a2540">
        <div style="color:#404860;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px">Research Sources</div>
        ${sources.map(s => `<div style="color:#8B99B5;font-size:11px;line-height:1.6;padding:4px 0;border-bottom:1px solid #0D1221">${s}</div>`).join('')}
      </div>` : '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${biz || firstName} — AI Automation Audit Report</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #07090F; color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; padding: 40px 20px; min-height: 100vh; }
    .wrap { max-width: 760px; margin: 0 auto; }
    .top-bar { height: 4px; background: linear-gradient(90deg, #4F6EF7, #00DCFF, #A78BFA); border-radius: 4px; margin-bottom: 0; }
    .card { background: #0D1221; border: 1px solid #1a2540; border-top: none; border-radius: 0 0 14px 14px; padding: 36px 40px 40px; margin-bottom: 24px; }
    .brand { color: #8B99B5; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 16px; }
    h1 { color: #F1F5F9; font-size: 28px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 8px; }
    h1 span { background: linear-gradient(135deg, #4F6EF7, #00DCFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .sub { color: #8B99B5; font-size: 14px; line-height: 1.6; margin-bottom: 28px; }
    .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
    .metrics-3 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .metric { background: #111829; border-radius: 10px; padding: 20px; text-align: center; }
    .metric-lbl { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px; }
    .metric-val { font-size: 30px; font-weight: 800; letter-spacing: -0.02em; line-height: 1; }
    .metric-note { font-size: 12px; color: #8B99B5; margin-top: 6px; }
    .red-lbl { color: #EF4444; } .grn-lbl { color: #34D399; } .cyn-lbl { color: #00DCFF; } .vio-lbl { color: #A78BFA; }
    .banner { background: linear-gradient(135deg, rgba(79,110,247,0.12), rgba(0,220,255,0.08)); border: 1px solid rgba(79,110,247,0.2); border-radius: 12px; padding: 24px 28px; margin-bottom: 24px; display: flex; align-items: center; gap: 24px; }
    .banner-val { font-size: 36px; font-weight: 800; background: linear-gradient(135deg, #4F6EF7, #00DCFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; white-space: nowrap; }
    .banner-txt { color: #8B99B5; font-size: 13px; line-height: 1.6; }
    .banner-txt strong { color: #F1F5F9; }
    .sec-card { background: #0D1221; border: 1px solid #1a2540; border-radius: 14px; padding: 28px 32px; margin-bottom: 20px; }
    .sec-title { color: #F1F5F9; font-size: 16px; font-weight: 700; margin-bottom: 4px; }
    .sec-sub { color: #8B99B5; font-size: 13px; margin-bottom: 20px; }
    .bar-wrap { margin-bottom: 20px; }
    .bar-track { height: 28px; border-radius: 8px; overflow: hidden; display: flex; margin-bottom: 16px; }
    .bar-loss { background: #EF4444; }
    .bar-gain { background: #34D399; }
    .bar-legend { display: flex; gap: 32px; }
    .leg-item-val { font-size: 22px; font-weight: 800; }
    .leg-item-lbl { color: #8B99B5; font-size: 11px; margin-top: 2px; }
    .answers-table { width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid #1a2540; }
    .answers-table th { padding: 10px 16px; background: #111829; color: #8B99B5; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; text-align: left; border-bottom: 1px solid #1a2540; }
    .cta-box { text-align: center; padding: 36px; background: #0D1221; border: 1px solid #1a2540; border-radius: 14px; margin-bottom: 20px; }
    .cta-box h2 { color: #F1F5F9; font-size: 20px; font-weight: 700; margin-bottom: 8px; }
    .cta-box p { color: #8B99B5; font-size: 14px; margin-bottom: 24px; }
    .cta-link { display: inline-block; background: linear-gradient(135deg, #4F6EF7, #6366F1); color: #fff; font-weight: 700; font-size: 15px; text-decoration: none; padding: 14px 36px; border-radius: 10px; }
    .footer { text-align: center; color: #404860; font-size: 12px; padding: 20px; }
    .footer a { color: #4F6EF7; text-decoration: none; }
    @media print { body { background: #07090F !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
  </style>
</head>
<body>
<div class="wrap">
  <div class="top-bar"></div>
  <div class="card">
    <div class="brand">Nuvion Solutions · AI Automation Audit</div>
    <h1>Your AI Automation Report, <span>${firstName}</span></h1>
    <p class="sub">Personalized for <strong style="color:#4F6EF7">${biz || firstName}</strong>${niche?.label ? ` · ${niche.label}` : ''}<br>
    Every number below is based on your specific answers, cross-referenced against verified industry research.</p>

    <div class="metrics">
      <div class="metric">
        <div class="metric-lbl red-lbl">Revenue at Risk / Month</div>
        <div class="metric-val" style="color:#F1F5F9">${fmt(monthlyRevenueLost)}</div>
        <div class="metric-note">from slow follow-up &amp; missed leads</div>
      </div>
      <div class="metric">
        <div class="metric-lbl grn-lbl">Hours Wasted / Week</div>
        <div class="metric-val" style="color:#F1F5F9">${weeklyHoursWasted}</div>
        <div class="metric-note">on tasks AI can handle for you</div>
      </div>
    </div>
    <div class="metrics-3">
      <div class="metric">
        <div class="metric-lbl cyn-lbl">Recovery Potential / Month</div>
        <div class="metric-val" style="color:#F1F5F9">+${fmt(monthlyRevenueGained)}</div>
      </div>
      <div class="metric">
        <div class="metric-lbl vio-lbl">Hours Freed / Year</div>
        <div class="metric-val" style="color:#F1F5F9">${annualHoursSaved}</div>
      </div>
    </div>
  </div>

  <div class="banner">
    <div class="banner-val">+${fmt(yearlyRevenueGained)}</div>
    <div class="banner-txt"><strong>12-month revenue opportunity for ${biz || firstName}.</strong><br>
    Conservative estimate based on your answers and verified ${niche?.label || 'industry'} research.</div>
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
          <div class="leg-item-val" style="color:#EF4444">${fmt(monthlyRevenueLost)}/mo</div>
          <div class="leg-item-lbl">Currently Losing</div>
        </div>
        <div>
          <div class="leg-item-val" style="color:#34D399">+${fmt(monthlyRevenueGained)}/mo</div>
          <div class="leg-item-lbl">Recoverable with Nuvion</div>
        </div>
      </div>
    </div>
  </div>

  ${answerPairs.length > 0 ? `
  <div class="sec-card">
    <div class="sec-title">Your Answers</div>
    <div class="sec-sub">Exactly what you told us — every result above flows from these</div>
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
    <div class="sec-sub">Every issue below was identified directly from your answers — not generic assumptions</div>
    ${painRows}
  </div>` : ''}

  <div class="cta-box">
    <h2>Ready to capture ${fmt(monthlyRevenueGained)}/month?</h2>
    <p>Book a free 30-minute strategy call. We'll walk through your audit and build a step-by-step roadmap.</p>
    <a href="https://nuvion-solutions.com/book" class="cta-link">Book Your Free Strategy Call</a>
  </div>

  ${sourcesHtml}

  <div class="footer">
    Nuvion Solutions · AI Automation for Growing Businesses ·
    <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
  </div>
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(biz || firstName).replace(/[^a-z0-9]/gi, '-').toLowerCase()}-audit-report.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ar-wrap">
      {/* Header */}
      <div className="ar-header">
        <div className="ar-biz">{biz} · {niche.label} · Automation Impact Audit</div>
        <h1 className="ar-title">
          Here's What We Found,{' '}
          <span className="ag">{firstName}</span>
        </h1>
        <p className="ar-sub">
          Every number below is based on your specific answers, cross-referenced against
          verified industry research. These aren't averages — they reflect your business.
        </p>
      </div>

      <div className="ar-header-actions">
        <button className="restart-btn" onClick={onRestart}>↺ Start Over</button>
        <button className="restart-btn" onClick={handleDownload} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1v7M6.5 8l-3-3M6.5 8l3-3M1 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Report
        </button>
        <Link to="/book" className="an-cta">Book a Strategy Call</Link>
      </div>

      <div className="ar-inner">

        {/* ── SUMMARY CARDS ──────────────────────────────────── */}
        <div className="ar-cards anim d1">
          <div className="ar-card red">
            <div className="ar-card-ico">📉</div>
            <div className="ar-card-val">{$$(monthlyRevenueLost)}</div>
            <div className="ar-card-lbl">Revenue Slipping Away Each Month</div>
          </div>
          <div className="ar-card grn">
            <div className="ar-card-ico">📈</div>
            <div className="ar-card-val">+{$$(monthlyRevenueGained)}</div>
            <div className="ar-card-lbl">Revenue You Could Add Each Month</div>
          </div>
          <div className="ar-card cyn">
            <div className="ar-card-ico">⏱</div>
            <div className="ar-card-val">{weeklyHoursSaved} hrs</div>
            <div className="ar-card-lbl">Hours Reclaimed Every Week</div>
          </div>
        </div>

        {/* Annual banner */}
        <div className="ar-banner anim d2">
          <div className="ar-banner-val">{$$(yearlyRevenueGained)}</div>
          <div className="ar-banner-txt">
            <strong>12-month revenue opportunity for {biz}.</strong><br />
            This is a conservative estimate based on your specific answers and verified {niche.label} industry research.
            Implementing the plan below is how you capture it.
          </div>
        </div>

        {/* ── BEFORE / AFTER ─────────────────────────────────── */}
        <div className="ar-section anim d3">
          <div className="ar-sec-title">Before vs. After Automation</div>
          <div className="ar-sec-sub">Your current state compared to what's possible with the right systems in place</div>
          <div className="bav-grid">
            <div className="bav-panel bef">
              <div className="bav-head">❌ Without Automation (Today)</div>
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
              <div className="bav-arrow">→</div>
            </div>

            <div className="bav-panel aft">
              <div className="bav-head">✅ With Automation</div>
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

        {/* ── PAIN POINTS ────────────────────────────────────── */}
        {painPoints.length > 0 && (
          <div className="ar-section anim d4">
            <div className="ar-sec-title">Where You're Losing Revenue Right Now</div>
            <div className="ar-sec-sub">
              Each issue below was identified from your specific answers — not generic assumptions
            </div>
            <div className="pp-grid">
              {painPoints.map((pp, i) => (
                <div key={i} className="pp-card">
                  <div className="pp-label">{pp.label}</div>
                  <div className="pp-vals">
                    <span className="pp-cur">{pp.currentValue}</span>
                    <span className="pp-arr">→</span>
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

        {/* ── AUTOMATION PLAN ────────────────────────────────── */}
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
                      {wf.priority === 'critical' ? '🔴 Critical' : wf.priority === 'high' ? '🔵 High Priority' : '🟢 Medium Priority'}
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

        {/* ── SOURCES ─────────────────────────────────────────── */}
        {sources.length > 0 && (
          <div className="src-section anim d6">
            <button className="src-toggle" onClick={() => setShowSrc(s => !s)}>
              <span>📚</span>
              {showSrc ? 'Hide' : 'View'} Data Sources ({sources.length})
            </button>
            {showSrc && (
              <div className="src-list">
                {sources.map((s, i) => (
                  <div key={i} className="src-item">· {s}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="cta-section anim d7">
          <h2 className="cta-h2">Ready to Put This Plan Into Action?</h2>
          <p className="cta-sub">
            Book a free 30-minute strategy call with our team. We'll walk through your audit results,
            answer every question, and show you exactly how we'd build this for your business.
            No pressure. No generic proposals. Just a real plan built for {niche.label} businesses like yours.
          </p>
          <div className="cta-pills">
            <div className="cta-pill"><span>✓</span> Free 30-minute call</div>
            <div className="cta-pill"><span>✓</span> No generic pitches</div>
            <div className="cta-pill"><span>✓</span> Built for {niche.label}</div>
            <div className="cta-pill"><span>✓</span> Pricing discussed on the call</div>
          </div>
          <Link to="/book" className="cta-btn">
            Book My Free Strategy Call →
          </Link>
          <div className="cta-note">
            We take on a limited number of new clients each month to ensure quality. Spots fill quickly.
          </div>
        </div>

      </div>{/* end ar-inner */}

      <Footer />

      {/* ── CHATBOT SHELL ──────────────────────────────────── */}
      <button
        className="chat-fab"
        onClick={() => setChatOpen(o => !o)}
        title="Ask about your automation plan"
        aria-label="Open chat"
      >
        {chatOpen ? '✕' : '💬'}
      </button>

      <div className={`chat-panel${chatOpen ? ' open' : ''}`} role="dialog" aria-label="Nuvion AI Chat">
        <div className="chat-hdr">
          <div className="chat-hdr-info">
            <div className="chat-avatar">🤖</div>
            <div>
              <div className="chat-name">Nuvion AI</div>
              <div className="chat-status">
                <div className="chat-dot" /> Online
              </div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setChatOpen(false)} aria-label="Close chat">✕</button>
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
                              'Tell me about the plan': `Your plan has ${niche.automationPlan?.length || 3} key workflows, prioritized by impact. The most critical one is "${niche.automationPlan?.[0]?.name}" — this one alone addresses your biggest revenue leak. Want me to break down how it works specifically for your situation?`,
                              'How long does setup take?': `For most ${niche.label} businesses, we typically have the core systems running within 2–3 weeks. The exact timeline depends on your current tools and what we're integrating. We can map this out on a strategy call.`,
                              'What does it cost?': `We structure every engagement differently based on what each business actually needs — we don't believe in one-size-fits-all pricing. The best way to get a real number is a 30-minute call where we understand your situation. Want to book that?`,
                            };
                            setMsgs(prev => [...prev, { role: 'ai', text: responses[text] || `Great question. Let's go through that on a strategy call — I want to give you a specific answer for your ${niche.label} business, not a generic one.` }]);
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
              <div className="chat-bubble" style={{ color: 'var(--dim)' }}>Typing...</div>
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
          <button className="chat-send" onClick={handleChatSend} aria-label="Send">→</button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN — STATE MACHINE
   Steps: intro → niche → questions → email → loading → results
───────────────────────────────────────────────────────────── */
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

  const handleAnswer = (optIdx) => {
    const val = niche.questions[qIndex].values[optIdx];
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);

    if (qIndex + 1 < niche.questions.length) {
      setQIndex(qIndex + 1);
    } else {
      // All questions answered — compute results now, show email gate
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
    fetch('https://nuvionsolutions.zeabur.app/webhook/audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
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
        <title>Free AI Business Audit — Nuvion Solutions</title>
        <meta name="description" content="Find out exactly how much automation could add to your business. Answer 10–15 questions about your industry and get a personalized revenue impact report and automation roadmap." />
      </Helmet>

      <div className="aud">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <nav className="sp-nav">
          <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
          <Link to="/" className="sp-back">← Back to Home</Link>
        </nav>

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
