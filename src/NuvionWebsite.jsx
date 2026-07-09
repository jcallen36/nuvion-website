import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import jaedenPhoto from './assets/jaeden-callender.webp';
import davidPhoto from './assets/david-prudhomme.webp';
import bellArt from './assets/art/bell.svg';
import { BASE_CSS } from './pages/shared.js';
import Footer, { FOOTER_CSS } from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

/* ─────────────────────────────────────────────────────────────
   Nuvion Solutions — home. "The Answered Line."
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
html{scroll-padding-top:90px}
*[id]{scroll-margin-top:90px}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:300;transition:background .25s,border-color .25s,box-shadow .25s;border-bottom:1px solid transparent}
.nav.scrolled{background:var(--paper);border-bottom-color:var(--hairline)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:74px;max-width:1280px;margin:0 auto;padding:0 24px;gap:18px}
.nav-links{display:none;list-style:none;gap:4px;align-items:center}
@media(min-width:1020px){.nav-links{display:flex}}
.nav-link{padding:8px 13px;font-size:.9rem;font-weight:500;color:var(--muted-2);border-radius:5px;transition:color .18s,background .18s}
.nav-link:hover{color:var(--ink);background:rgba(20,27,25,.05)}
.nav-right{display:none;align-items:center;gap:20px}
@media(min-width:1020px){.nav-right{display:flex}}
.nav-tel{font-family:var(--mono);font-size:.8rem;color:var(--ink);letter-spacing:.02em;border-bottom:1px solid var(--hairline);padding-bottom:2px;transition:border-color .18s;font-variant-numeric:tabular-nums}
.nav-tel:hover{border-color:var(--petrol)}
.nav-cta{padding:12px 22px;font-size:.88rem}
.nav-burger{display:flex;flex-direction:column;gap:5px;padding:10px;cursor:pointer;border:none;background:transparent;border-radius:6px}
@media(min-width:1020px){.nav-burger{display:none}}
.nav-burger span{display:block;width:22px;height:2px;background:var(--ink);border-radius:2px;transition:all .3s}
.nav-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nav-burger.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.nav-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.mobile-menu{position:fixed;top:74px;left:0;right:0;bottom:0;background:var(--paper);z-index:299;display:flex;flex-direction:column;padding:20px 24px 40px;transform:translateX(102%);transition:transform .38s var(--ease-out);border-top:1px solid var(--hairline);overflow-y:auto}
.mobile-menu.open{transform:translateX(0)}
.mobile-menu a{display:block;padding:18px 0;font-family:var(--serif);font-size:1.5rem;font-weight:700;color:var(--ink);border-bottom:1px solid var(--hairline)}
.mobile-menu a:active{color:var(--petrol)}
.mobile-menu .mm-tel{font-family:var(--mono);font-size:1rem;font-weight:400;color:var(--petrol);border-bottom:1px solid var(--hairline)}
.mobile-menu .btn-ink{margin-top:28px;justify-content:center;font-size:1rem;color:var(--paper);font-family:var(--sans);font-weight:600;border-bottom:none}

/* CONTAINER */
.container{width:100%;max-width:1280px;margin:0 auto;padding:0 24px}
@media(min-width:900px){.container{padding:0 44px}}

/* THE ANSWERED LINE — margin rail */
.rail{display:none}
@media(min-width:1160px){
  .rail{display:block;position:fixed;left:34px;top:0;bottom:0;width:2px;z-index:250;pointer-events:none}
  .rail-track{position:absolute;inset:0;background:var(--hairline)}
  .rail-fill{position:absolute;left:0;top:0;width:100%;height:100%;background:var(--petrol);transform-origin:top;transform:scaleY(0)}
}
.rail-node{position:absolute;left:-4px;width:10px;height:10px;border-radius:50%;background:var(--paper);border:2px solid var(--hairline);transition:border-color .3s,background .3s}
.rail-node.lit{border-color:var(--petrol);background:var(--petrol)}

/* HERO */
.hero{position:relative;padding:150px 0 40px;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1fr;gap:44px;align-items:center}
@media(min-width:960px){.hero-grid{grid-template-columns:7fr 5fr;gap:24px}}
.hero-label{margin-bottom:28px;display:flex;align-items:center;gap:12px}
.hero-label::before{content:'';width:34px;height:1px;background:var(--petrol)}
.hero-h1{font-family:var(--serif);font-weight:700;font-size:clamp(2.1rem,3.75vw,3.55rem);line-height:1.09;letter-spacing:-.022em;margin-bottom:26px;white-space:nowrap}
@media(max-width:520px){.hero-h1{white-space:normal;font-size:clamp(1.9rem,8.4vw,2.4rem)}}
.hero-h1 em{font-style:italic;font-weight:400;color:var(--petrol)}
.hero-sub{font-size:clamp(1rem,1.4vw,1.14rem);color:var(--muted-2);line-height:1.7;max-width:47ch;margin-bottom:38px}
.hero-btns{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:30px}
.hero-tel{font-family:var(--mono);font-size:.8rem;letter-spacing:.05em;color:var(--muted-2)}
.hero-tel a{color:var(--ink);border-bottom:1px solid var(--hairline);padding-bottom:2px;transition:color .18s,border-color .18s;font-variant-numeric:tabular-nums;white-space:nowrap}
.hero-tel a:hover{color:var(--petrol);border-color:var(--petrol)}
.hero-side{display:flex;justify-content:flex-end;padding-right:8px}
.spec-card{width:min(100%,360px);background:var(--card);border:1px solid var(--hairline);border-top:2px solid var(--petrol);border-radius:8px;box-shadow:var(--shadow-2);padding:26px 26px 22px;position:relative}
.spec-title{font-family:var(--mono);font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted-2);padding-bottom:16px;border-bottom:1px solid var(--hairline);margin-bottom:4px}
.spec-row{display:flex;justify-content:space-between;align-items:baseline;gap:18px;padding:13px 0;border-bottom:1px solid var(--hairline)}
.spec-row:last-of-type{border-bottom:none}
.spec-k{font-family:var(--mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2)}
.spec-v{font-size:.9rem;font-weight:600;color:var(--ink);text-align:right}
.spec-v.petrol{color:var(--petrol)}
.spec-status{display:inline-flex;align-items:center;gap:8px}
.spec-status::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--petrol);animation:beat 2.4s ease-in-out infinite}
@keyframes beat{0%,100%{opacity:1}50%{opacity:.35}}
@media(prefers-reduced-motion:reduce){.spec-status::before{animation:none}}
@media(max-width:959px){.hero{padding-top:130px}.hero-side{display:none}}
@media(max-width:599px){.hero-btns{flex-direction:column;align-items:stretch}.hero-btns>*{justify-content:center}}

/* TICKER */
.strip{margin-top:52px;padding:15px 0;overflow:hidden;border-top:1px solid var(--hairline);border-bottom:1px solid var(--hairline)}
.strip-track{display:flex;animation:marquee 34s linear infinite;width:max-content}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.strip-item{padding:0 34px;font-family:var(--mono);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2);display:flex;align-items:center;gap:34px;flex-shrink:0;white-space:nowrap}
.strip-item::after{content:'';width:5px;height:5px;border-radius:50%;background:var(--petrol);opacity:.55}
@media(prefers-reduced-motion:reduce){.strip-track{animation:none}}

/* SECTION SCAFFOLD */
.section{padding:var(--pad-section) 0}
.sec-head{margin-bottom:clamp(40px,5vw,64px);display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:900px){.sec-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.sec-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:14px;display:flex;gap:10px;align-items:baseline}
.sec-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.sec-h2{font-family:var(--serif);font-weight:700;font-size:clamp(2rem,3.8vw,3.1rem);line-height:1.06;letter-spacing:-.02em;max-width:20ch}
.sec-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.sec-sub{font-size:1rem;color:var(--muted-2);line-height:1.7;max-width:52ch;margin-top:14px}

/* SERVICES */
.svc-features{display:grid;grid-template-columns:1fr;gap:22px;margin-bottom:22px}
@media(min-width:820px){.svc-features{grid-template-columns:1fr 1fr}}
.svc-feature{position:relative;display:flex;flex-direction:column;gap:0;padding:30px 34px 28px;background:var(--card);border:1px solid var(--hairline);border-top:2px solid var(--petrol);border-radius:8px;box-shadow:var(--shadow-1);transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out);overflow:hidden}
.svc-feature:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.svc-kicker{display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);padding-bottom:18px;border-bottom:1px solid var(--hairline);margin-bottom:22px}
.svc-feature h3{font-family:var(--serif);font-size:clamp(1.6rem,2.4vw,2rem);font-weight:700;letter-spacing:-.018em;line-height:1.1;margin-bottom:14px}
.svc-feature>p{font-size:.95rem;color:var(--muted-2);line-height:1.68;max-width:50ch;margin-bottom:22px}
.svc-points{list-style:none;margin:0 0 26px;display:flex;flex-direction:column}
.svc-points li{display:flex;align-items:baseline;gap:12px;padding:9px 0;font-size:.88rem;color:var(--ink);border-bottom:1px solid var(--hairline)}
.svc-points li:last-child{border-bottom:none}
.svc-points li::before{content:'—';color:var(--petrol);font-family:var(--mono);font-size:.8rem}
.svc-feature-art{position:absolute;top:24px;right:26px;width:74px;opacity:.85}
.svc-feature-cta{margin-top:auto;display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--petrol)}
.svc-feature-cta::after{content:'→';transition:transform .2s}
.svc-feature:hover .svc-feature-cta::after{transform:translateX(4px)}
.svc-index{border-top:1px solid var(--hairline)}
.svc-row{display:grid;grid-template-columns:44px 1fr auto;align-items:baseline;gap:16px;padding:20px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:720px){.svc-row{grid-template-columns:56px 260px 1fr auto;align-items:center}}
.svc-row:hover{background:var(--card);padding-left:14px}
.svc-num{font-family:var(--mono);font-size:.72rem;color:var(--muted-2);font-variant-numeric:tabular-nums}
.svc-name{font-family:var(--serif);font-size:1.14rem;font-weight:700;letter-spacing:-.01em}
.svc-blurb{display:none;font-size:.88rem;color:var(--muted-2);line-height:1.55;max-width:58ch}
@media(min-width:720px){.svc-blurb{display:block}}
.svc-go{font-size:1rem;color:var(--petrol);transition:transform .2s}
.svc-row:hover .svc-go{transform:translateX(4px)}

/* HOW IT WORKS */
.hiw{background:var(--bone);border-top:1px solid var(--hairline);border-bottom:1px solid var(--hairline)}
.hiw-steps{display:grid;grid-template-columns:1fr;gap:0;border-left:1px solid var(--hairline)}
@media(min-width:880px){.hiw-steps{grid-template-columns:repeat(3,1fr);border-left:none;border-top:1px solid #CFCaba}}
.hiw-step{position:relative;padding:34px 30px 10px 30px}
@media(min-width:880px){.hiw-step{padding:44px 34px 8px 0;border-left:1px solid #CFCABA;padding-left:30px}}
.hiw-num{font-family:var(--serif);font-weight:900;font-size:clamp(4.4rem,7vw,6.8rem);line-height:.9;color:transparent;-webkit-text-stroke:1.5px var(--muted-2);letter-spacing:-.03em;margin-bottom:18px;opacity:.75}
.hiw-step:hover .hiw-num{color:var(--petrol);-webkit-text-stroke:1.5px var(--petrol);opacity:1;transition:all .3s}
.hiw-title{font-family:var(--serif);font-size:1.3rem;font-weight:700;margin-bottom:10px;letter-spacing:-.01em}
.hiw-desc{font-size:.93rem;color:var(--muted-2);line-height:1.68;max-width:34ch}

/* PROMISES — the straight answers */
.promise-list{border-top:1px solid var(--hairline)}
.promise{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:clamp(24px,3.4vw,38px) 6px;border-bottom:1px solid var(--hairline);align-items:baseline;transition:background .2s,padding-left .2s}
@media(min-width:720px){.promise{grid-template-columns:70px 1fr 1fr;gap:24px}}
.promise:hover{background:var(--card);padding-left:14px}
.promise-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums}
.promise-title{font-family:var(--serif);font-weight:700;font-size:clamp(1.4rem,2.6vw,2rem);letter-spacing:-.015em;line-height:1.15}
.promise-body{font-size:.94rem;color:var(--muted-2);line-height:1.68;max-width:48ch}
@media(max-width:719px){.promise-body{grid-column:2}}

/* WHY / RESEARCH PULL */
.why-grid{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:880px){.why-grid{grid-template-columns:repeat(2,1fr)}}
.why-feat{padding:30px;background:var(--card);border:1px solid var(--hairline);border-radius:10px;box-shadow:var(--shadow-1)}
.why-feat .label{margin-bottom:14px;display:block}
.why-title{font-family:var(--serif);font-size:1.28rem;font-weight:700;margin-bottom:10px;letter-spacing:-.01em}
.why-desc{font-size:.92rem;color:var(--muted-2);line-height:1.66}
.pull{margin-top:22px;padding:clamp(34px,5vw,60px);background:var(--ink);color:var(--paper);border-radius:10px;position:relative;overflow:hidden}
.pull-quote{font-family:var(--serif);font-size:clamp(1.4rem,2.7vw,2.1rem);font-weight:400;font-style:italic;line-height:1.3;letter-spacing:-.01em;max-width:34ch}
.pull-quote b{color:#9BC4C1;font-weight:700}
.pull-src{margin-top:22px;font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(244,242,236,.55)}

/* TEAM */
.team-grid{display:grid;grid-template-columns:1fr;gap:20px;max-width:900px}
@media(min-width:680px){.team-grid{grid-template-columns:1fr 1fr}}
.team-card{background:var(--card);border:1px solid var(--hairline);border-radius:10px;overflow:hidden;box-shadow:var(--shadow-1);transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.team-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.team-photo{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:center top;filter:saturate(.88) contrast(1.03) sepia(.06)}
.team-body{padding:22px 24px 26px;border-top:1px solid var(--hairline)}
.team-name{font-family:var(--serif);font-size:1.3rem;font-weight:700;letter-spacing:-.01em;margin-bottom:2px}
.team-role{font-family:var(--mono);font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:12px}
.team-bio{font-size:.9rem;color:var(--muted-2);line-height:1.66}

/* TESTIMONIAL */
.testi{max-width:880px}
.testi-text{font-family:var(--serif);font-size:clamp(1.5rem,3vw,2.3rem);font-weight:400;font-style:italic;line-height:1.3;letter-spacing:-.012em}
.testi-text::before{content:'“';color:var(--petrol)}
.testi-text::after{content:'”';color:var(--petrol)}
.testi-attr{margin-top:26px;display:flex;align-items:center;gap:12px;font-family:var(--mono);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted-2)}
.testi-attr::before{content:'';width:34px;height:1px;background:var(--petrol)}

/* FAQ */
.faq-list{max-width:860px;border-top:1px solid var(--hairline)}
.faq-item{border-bottom:1px solid var(--hairline)}
.faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:24px 6px;background:transparent;border:none;cursor:pointer;text-align:left;font-family:var(--serif);font-size:1.16rem;font-weight:700;color:var(--ink);line-height:1.35;letter-spacing:-.008em;transition:color .18s}
.faq-q:hover{color:var(--petrol)}
.faq-x{flex-shrink:0;width:26px;height:26px;position:relative}
.faq-x::before,.faq-x::after{content:'';position:absolute;background:var(--petrol);transition:transform .3s var(--ease-out)}
.faq-x::before{left:50%;top:4px;bottom:4px;width:1.5px;transform:translateX(-50%)}
.faq-x::after{top:50%;left:4px;right:4px;height:1.5px;transform:translateY(-50%)}
.faq-item.open .faq-x::before{transform:translateX(-50%) rotate(90deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .4s var(--ease-out)}
.faq-item.open .faq-a{max-height:420px}
.faq-a-inner{padding:0 40px 26px 6px;font-size:.95rem;color:var(--muted-2);line-height:1.72;max-width:66ch}

/* FINAL CTA */
.cta{background:var(--ink);color:var(--paper);position:relative;overflow:hidden}
.cta-inner{padding:clamp(80px,10vw,140px) 0;position:relative}
.cta .label{color:rgba(244,242,236,.5)}
.cta-h2{font-family:var(--serif);font-weight:700;font-size:clamp(2.4rem,5.4vw,4.4rem);line-height:1.03;letter-spacing:-.022em;margin:22px 0 26px;max-width:17ch;color:var(--paper)}
.cta-h2 em{font-style:italic;font-weight:400;color:#9BC4C1}
.cta-sub{font-size:1.02rem;color:rgba(244,242,236,.68);line-height:1.7;max-width:46ch;margin-bottom:40px}
.cta-row{display:flex;flex-wrap:wrap;gap:16px;align-items:center}
.cta-tel{font-family:var(--mono);font-size:.8rem;letter-spacing:.05em;color:rgba(244,242,236,.6)}
.cta-tel a{color:var(--paper);border-bottom:1px solid var(--hairline-dark);padding-bottom:2px;font-variant-numeric:tabular-nums;white-space:nowrap}
.cta-tel a:hover{color:#9BC4C1;border-color:#9BC4C1}
.cta-art{position:absolute;right:-30px;bottom:-46px;width:min(30vw,340px);opacity:.14;transform:rotate(-8deg);pointer-events:none;filter:invert(1)}
@media(max-width:719px){.cta-art{display:none}.cta-row{flex-direction:column;align-items:stretch}.cta-row .btn-on-ink{justify-content:center}}

/* Reveal primitives (gsap-driven; visible fallback without JS) */
.will-split .line{overflow:hidden}
`;

/* ── Data ─────────────────────────────────────────────────── */
const FEATURES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    kicker: 'Flagship · 01',
    desc: 'A custom, mobile-first website designed around your brand — fast, SEO-ready, and built to turn visitors into booked work. You see it finished before you pay a dollar.',
    points: ['Custom design, no templates', 'SEO + AI-search ready', 'Wired into your follow-up systems'],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    kicker: 'Flagship · 02',
    desc: 'We map how work moves through your business, then build the automation that removes the manual parts — follow-up, booking, reminders, phones, and the busywork in between.',
    points: ['Built around your exact workflows', 'Connects the tools you already use', 'Runs 24/7 without you touching it'],
  },
];

const SERVICES = [
  { slug: 'ai-receptionist', title: 'Virtual Front Desk', desc: 'A 24/7 AI phone agent trained on your business — answers, books, and triages while you work.' },
  { slug: 'lead-followup', title: 'Lead Follow-Up', desc: 'Every new lead gets a personal text or email within seconds — and smart follow-up until they book.' },
  { slug: 'custom-integrations', title: 'Custom Integrations', desc: 'Your CRM, calendar, billing, and phones — connected into one system that talks to itself.' },
  { slug: 'reminders', title: 'Reminders & Confirmations', desc: 'Automatic sequences that confirm, reschedule, and cut down on no-shows.' },
  { slug: 'reviews-automation', title: 'Reviews Automation', desc: 'After every job, your customer gets a personal review request by text. For every review earned, we donate a meal to a family in need.' },
  { slug: 'social-media-ai', title: 'Social Media AI', desc: 'Content creation, scheduling, and engagement monitoring that keeps your brand active.' },
  { slug: 'seo-aso', title: 'SEO & AI Search', desc: 'Get found on Google — and by the AI assistants your customers are starting to ask instead.' },
  { slug: 'done-for-you-business', title: 'Done-For-You Business', desc: 'The whole build, end to end: strategy, website, phones, automations, and ongoing optimization.' },
];

const PROMISES = [
  { title: 'You’ll know the price before we start.', body: 'Every project is quoted up front, in writing. The number on your quote is the number you pay — it doesn’t change after you approve it.' },
  { title: 'No long-term contracts.', body: 'Monthly services cancel anytime. We’d rather earn next month than lock you into it.' },
  { title: 'You see it working before you pay.', body: 'Websites are shown finished before a dollar changes hands. Phone systems run a free trial on your real line first.' },
  { title: 'You talk to the people doing the work.', body: 'No account managers, no ticket queues. The person who picks up is the person who builds.' },
  { title: 'We’re a young company — on purpose, and honest about it.', body: 'You get senior-level work at a fair price while we build our name. We’ll never invent client counts or reviews to look bigger than we are.' },
];

const WHY = [
  { label: 'Built to fit', title: 'Made for your business specifically', desc: 'No templates, no one-size-fits-all software. Every system is designed around your exact workflows, tools, and team.' },
  { label: 'Speed', title: 'Weeks, not months', desc: 'A typical build goes live in two to three weeks. We build in the open, so you watch it come together.' },
  { label: 'Ownership', title: 'You own everything we build', desc: 'Your systems are yours. No proprietary lock-in, no platform fees you can’t escape.' },
  { label: 'Aftercare', title: 'Support is included', desc: 'We don’t disappear after launch. Every engagement includes support, monitoring, and optimization.' },
];

const STRIP_ITEMS = [
  'Process Automation', 'Virtual Front Desks', 'CRM Integration',
  'Lead Nurturing', 'Custom Workflows', 'No-Show Reduction',
  'Social AI', 'Appointment Booking',
];

const FAQS = [
  {
    q: 'How can I automate my business to save time?',
    a: 'We start with a free strategy call to map how work actually flows through your business — calls, leads, bookings, follow-ups, reminders. Then we build a custom system that handles the repetitive parts automatically. You’ll know exactly what we’d build, and exactly what it costs, before you commit to anything.',
  },
  {
    q: 'What is a Virtual Front Desk and does my business need one?',
    a: 'Our Virtual Front Desk is a 24/7 AI-powered phone agent trained on your business. It answers every inbound call, knows your services, pricing, and service area, books jobs straight to your calendar, triages emergencies, and runs outbound appointment reminders and review requests. If you miss calls after hours or lose leads because nobody followed up fast enough, that’s exactly what it’s built for.',
  },
  {
    q: 'How does automated lead follow-up work?',
    a: 'The moment a new lead comes in — from your website, a missed call, or a form — the system sends a personalized text or email within seconds, then keeps following up on a smart schedule until they respond or book. Nothing slips through the cracks, and you don’t have to lift a finger.',
  },
  {
    q: 'What types of businesses benefit most from AI automation?',
    a: 'Any service business that handles leads, books appointments, or sends recurring communications: plumbers, HVAC and home services, real estate agencies, law firms, medical and dental practices, gyms, and consultants. If your team does the same manual task more than twice a week, it’s probably automatable.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Time savings start the day a task is automated. A typical build goes live in two to three weeks, and you see the system working — calls answered, follow-ups sent — from day one. We build in the open, so you’re never waiting on a black box.',
  },
  {
    q: 'Do I need to change my existing software or tools?',
    a: 'No. We build around your existing stack — your CRM, calendar, email, phone system, and any other tools you already use. Our integrations connect everything together so it works as one system, without forcing you to switch platforms.',
  },
  {
    q: 'How much does business automation cost?',
    a: 'Every system is scoped to your business, so we don’t publish one-size-fits-all prices. What we do promise: you get the price in writing before we start, the number on your quote is the number you pay, and there are no long-term contracts. The strategy call is free, and you’ll leave it knowing exactly what your build would cost.',
  },
];

/* ── Motion ───────────────────────────────────────────────── */
function useAnsweredLine() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      const fill = document.querySelector('.rail-fill');
      if (fill) fill.style.transform = 'scaleY(1)';
      document.querySelectorAll('.rail-node').forEach(n => n.classList.add('lit'));
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 3),
      anchors: { offset: -84 },
    });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const rafCb = time => lenis.raf(time * 1000);
    gsap.ticker.add(rafCb);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // The Answered Line — margin rail scrub
      gsap.to('.rail-fill', {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
      });
      document.querySelectorAll('[data-node]').forEach(node => {
        ScrollTrigger.create({
          trigger: `#${node.dataset.node}`, start: 'top 55%',
          onEnter: () => node.classList.add('lit'),
          onLeaveBack: () => node.classList.remove('lit'),
        });
      });
    });

    // Type reveals wait for fonts so SplitText measures real metrics.
    // ctx.add() keeps async-created tweens revertable; the cancelled flag
    // guards against StrictMode's double-mount racing this promise.
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx.add(() => {
        document.querySelectorAll('.will-split').forEach(el => {
          const split = new SplitText(el, { type: 'lines', linesClass: 'line' });
          gsap.fromTo(split.lines,
            { yPercent: 108, opacity: 0 },
            {
              yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.07, ease: 'power4.out',
              scrollTrigger: { trigger: el, start: 'top 86%', once: true },
            });
        });
        document.querySelectorAll('[data-rise]').forEach(el => {
          gsap.fromTo(el,
            { y: 22, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
              delay: parseFloat(el.dataset.rise || 0),
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            });
        });
        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancelled = true;
      ctx.revert();
      gsap.ticker.remove(rafCb);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}

/* ── Components ──────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#why-us', label: 'Why Nuvion' },
    { href: '#team', label: 'Team' },
    { href: 'https://portfolio.nuvion-solutions.com', label: 'Portfolio', external: true },
    { href: '/audit', label: 'Free Audit' },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="wordmark" aria-label="Nuvion Solutions — home">
            <span className="wm-n">Nuvion</span>
            <span className="wm-s">Solutions</span>
          </Link>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <a href="tel:+17075209179" className="nav-tel">(707) 520-9179</a>
            <Link to="/book" className="btn-ink nav-cta">Book a call</Link>
          </div>
          <button className={`nav-burger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        {links.map(l => (
          <a key={l.href} href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.label}</a>
        ))}
        <a href="tel:+17075209179" className="mm-tel">(707) 520-9179</a>
        <Link to="/book" className="btn-ink">Book a free strategy call</Link>
      </div>
    </>
  );
}

function Rail() {
  return (
    <div className="rail" aria-hidden="true">
      <div className="rail-track" />
      <div className="rail-fill" />
      {[
        { id: 'services', top: '22%' },
        { id: 'how-it-works', top: '38%' },
        { id: 'promises', top: '54%' },
        { id: 'why-us', top: '68%' },
        { id: 'team', top: '82%' },
        { id: 'contact', top: '96%' },
      ].map(n => (
        <span key={n.id} className="rail-node" data-node={n.id} style={{ top: n.top }} />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-label label" data-rise="0">Web design & AI automation · Built in California</div>
            <h1 className="hero-h1 will-split">
              Websites that <em>win work</em>.<br />
              Automation that <em>runs itself</em>.<br />
              Prices that <em>don’t move</em>.
            </h1>
            <p className="hero-sub" data-rise="0.1">
              Nuvion Solutions designs websites and builds AI automation for small
              businesses. One team, one system — custom-built, plainly priced,
              and working before you pay.
            </p>
            <div className="hero-btns" data-rise="0.18">
              <Link to="/book" className="btn-ink">Book a free strategy call</Link>
              <a href="#services" className="btn-line">See what we build</a>
            </div>
            <div className="hero-tel" data-rise="0.26">
              Prefer to talk it through? <a href="tel:+17075209179">(707) 520-9179</a> — call or text.
            </div>
          </div>
          <div className="hero-side" data-rise="0.2">
            <div className="spec-card" role="presentation">
              <div className="spec-title">Work order · Nuvion Solutions</div>
              <div className="spec-row"><span className="spec-k">Scope</span><span className="spec-v">Website + automation</span></div>
              <div className="spec-row"><span className="spec-k">Price</span><span className="spec-v">Fixed. In writing. First.</span></div>
              <div className="spec-row"><span className="spec-k">Contracts</span><span className="spec-v">None — cancel anytime</span></div>
              <div className="spec-row"><span className="spec-k">You pay</span><span className="spec-v">After you see it working</span></div>
              <div className="spec-row"><span className="spec-k">Status</span><span className="spec-v petrol spec-status">Taking on projects</span></div>
            </div>
          </div>
        </div>
        <div className="strip" aria-hidden="true">
          <div className="strip-track">
            {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, i) => (
              <span key={i} className="strip-item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 01 — What we build</div>
          <div>
            <h2 className="sec-h2 will-split">Ten ways we take work <em>off your plate</em>.</h2>
            <p className="sec-sub" data-rise="0.05">
              Two flagship crafts — websites and automation — and eight more systems
              built around them. Each one made for your business, never installed off a shelf.
            </p>
          </div>
        </div>
        <div className="svc-features">
          {FEATURES.map((f, i) => (
            <Link key={f.slug} to={`/services/${f.slug}`} className="svc-feature" data-rise={0.05 * i}>
              <div className="svc-kicker">{f.kicker}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <ul className="svc-points">
                {f.points.map(p => <li key={p}>{p}</li>)}
              </ul>
              <span className="svc-feature-cta">Explore the service</span>
            </Link>
          ))}
        </div>
        <div className="svc-index" role="list">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="svc-row" role="listitem">
              <span className="svc-num">{String(i + 3).padStart(2, '0')}</span>
              <span className="svc-name">{s.title}</span>
              <span className="svc-blurb">{s.desc}</span>
              <span className="svc-go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Discovery call', desc: 'A free, focused strategy session. We learn how calls, leads, and bookings actually move through your business — and where they leak.' },
    { n: '02', title: 'Blueprint & quote', desc: 'You get a written plan of exactly what we’d build, and a fixed quote. The number on the quote is the number you pay.' },
    { n: '03', title: 'Build & launch', desc: 'We build, test, and deploy — in the open, so you watch it come together. A typical build goes live in two to three weeks.' },
  ];
  return (
    <section id="how-it-works" className="section hiw">
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 02 — The process</div>
          <div>
            <h2 className="sec-h2 will-split">Three steps. <em>No mystery.</em></h2>
          </div>
        </div>
        <div className="hiw-steps">
          {steps.map((s, i) => (
            <div key={s.n} className="hiw-step" data-rise={0.07 * i}>
              <div className="hiw-num tnum" aria-hidden="true">{s.n}</div>
              <div className="hiw-title">{s.title}</div>
              <p className="hiw-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promises() {
  return (
    <section id="promises" className="section">
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 03 — The straight answers</div>
          <div>
            <h2 className="sec-h2 will-split">What you can <em>hold us to</em>.</h2>
            <p className="sec-sub" data-rise="0.05">
              We’re a young company earning trust the slow way. These aren’t marketing
              lines — they’re the terms we work under, in plain English.
            </p>
          </div>
        </div>
        <div className="promise-list">
          {PROMISES.map((p, i) => (
            <div key={p.title} className="promise" data-rise={0.04 * i}>
              <span className="promise-num tnum">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="promise-title">{p.title}</h3>
              <p className="promise-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNuvion() {
  return (
    <section id="why-us" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 04 — Why Nuvion</div>
          <div>
            <h2 className="sec-h2 will-split">Built like we’d want it <em>built for us</em>.</h2>
          </div>
        </div>
        <div className="why-grid">
          {WHY.map((f, i) => (
            <div key={f.title} className="why-feat" data-rise={0.05 * i}>
              <span className="label"><b>{f.label}</b></span>
              <div className="why-title">{f.title}</div>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="pull" data-rise="0.1">
          <p className="pull-quote">
            Firms that contacted a lead within an hour were <b>nearly seven times</b> likelier
            to qualify it than those who waited even an hour more.
          </p>
          <div className="pull-src">Harvard Business Review — lead response study. Industry research, not a client claim.</div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    {
      name: 'Jaeden Callender',
      role: 'Co-Founder · Operations',
      bio: 'Jaeden maps the daily bottlenecks that quietly cost businesses time and money, then designs the systems that remove them for good.',
      photo: jaedenPhoto,
    },
    {
      name: 'David Prudhomme',
      role: 'Co-Founder · AI Integration',
      bio: 'David turns disconnected tools and manual processes into unified, intelligent workflows that scale with the business they serve.',
      photo: davidPhoto,
    },
  ];
  return (
    <section id="team" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 05 — The team</div>
          <div>
            <h2 className="sec-h2 will-split">Two people. <em>One number.</em></h2>
            <p className="sec-sub" data-rise="0.05">
              When you call, you get one of us — the same people who design, build,
              and maintain your system. That’s the whole company, and that’s the point.
            </p>
          </div>
        </div>
        <div className="team-grid">
          {members.map((m, i) => (
            <div key={m.name} className="team-card" data-rise={0.06 * i}>
              <img className="team-photo" src={m.photo} alt={`${m.name}, ${m.role}, Nuvion Solutions`} loading="lazy" />
              <div className="team-body">
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <p className="team-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 06 — In their words</div>
        </div>
        <figure className="testi" data-rise="0.05">
          <blockquote className="testi-text">
            Nuvion Solutions exceeded my expectations when it came to creating a professional
            website. With quick turnaround times, easy access to the site and more importantly,
            they designed exactly what I had in mind!
          </blockquote>
          <figcaption className="testi-attr">Angela Ames — Web design client</figcaption>
        </figure>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-index">№ 07 — Common questions</div>
          <div>
            <h2 className="sec-h2 will-split">Asked and <em>answered</em>.</h2>
          </div>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                {item.q}
                <span className="faq-x" aria-hidden="true" />
              </button>
              <div className="faq-a">
                <p className="faq-a-inner">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="cta">
      <img className="cta-art" src={bellArt} alt="" aria-hidden="true" />
      <div className="container">
        <div className="cta-inner">
          <div className="label">№ 08 — Start here</div>
          <h2 className="cta-h2 will-split">Tell us what keeps <em>interrupting</em> your day.</h2>
          <p className="cta-sub">
            A free strategy call: we map your workflows, show you what’s automatable,
            and put a price on it in writing. No pressure, no obligation — and if we’re
            not the right fit, we’ll say so.
          </p>
          <div className="cta-row">
            <Link to="/book" className="btn-on-ink" style={{ padding: '18px 34px', fontSize: '1rem', borderRadius: '6px', display: 'inline-flex', gap: '10px', fontWeight: 600 }}>
              Book a free strategy call
            </Link>
            <span className="cta-tel">or call <a href="tel:+17075209179">(707) 520-9179</a></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Root ─────────────────────────────────────────────────── */
export default function NuvionWebsite() {
  useAnsweredLine();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />
      <Rail />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Promises />
        <WhyNuvion />
        <Team />
        <Testimonial />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
