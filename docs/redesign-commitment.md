# Redesign commitment — "The Answered Line" (branch: redesign-2026-07)

## Concept
Nuvion Solutions is the steady, unbroken line between a small business and its customers.
The design language is print-grade editorial: ink on porcelain paper, set like premium
stationery and kept promises — the opposite of AI-startup dark-gradient hype. Honesty is
the aesthetic: numbered plain-spoken commitments, real people, a real phone number treated
as a design element.

A small-business owner should feel within seconds: these people are careful, they answer
the phone, and they won't surprise me on price.

## Palette (all named, checked against every existing Nuvion site)
| Token | Hex | Role |
|---|---|---|
| porcelain | #F4F2EC | page background (cool-gray paper — NOT the cream/parchment family) |
| bone | #EBE8DF | secondary plane |
| card | #FBFAF7 | raised cards |
| ink | #141B19 | text, dark bands (green-undertone near-black) |
| ink-2 | #1D2724 | dark surface 2 |
| petrol | #0E5F63 | THE accent: CTAs, links, the Line, focus |
| petrol-deep | #0A474B | hover/active |
| muted | #57605C | secondary text |
| hairline | #DAD6CA | borders on light |

Nearest portfolio neighbors and why they don't collide: Blue Cabana is bright tropical
aqua + coral on yellow-cream (different hue register and value); the restaurant demo is a
dark forest-green field (mine is a light field with a petrol accent). No violet, no amber,
no gradient-on-dark anywhere.

## Type (zero overlap with any Nuvion site)
- Display: **Zodiak** (Fontshare) 400/700/900 + italics — editorial serif with conviction
- Body/UI: **General Sans** (Fontshare) 400/500/600
- Labels: **Fragment Mono** (Google) 400 — spec-tag labels, tabular figures
- Scale ratio 1.30. Display tracking −0.02…−0.035em, line-height 0.95–1.05.
  Body 1.65, 62ch max. Labels 11–13px, +0.14em tracking, uppercase.
- Kills Plus Jakarta Sans entirely.

## Layout
Editorial asymmetry with a mono "margin rail" (№ 01 — section indices) like a well-set
document. 55/45 and 60/40 splits, never centered-stack heroes. At least two container
breaks per page (full-bleed ink band; the Line crossing section boundaries; an oversized
numeral bleeding off-grid). One almost-empty section: a single huge Zodiak sentence on
open paper. Section rhythm varies: full-bleed → dense → pause.

## Signature interaction (exactly one)
**The Answered Line** — a single continuous SVG path that starts at the hero phone number
and draws itself down the homepage as you scroll (GSAP ScrollTrigger, scrubbed
stroke-dashoffset), weaving between sections — call comes in → answered → booked →
followed up — and plugs into the final CTA. Engineering-style line work, not illustration.
prefers-reduced-motion: the line renders fully drawn, static.

## Motion
Lenis smooth scroll. Masked line-rise headline reveals (SplitText, 600–800ms,
cubic-bezier(0.16,1,0.3,1), 60ms stagger, ≤24px travel). Micro-hovers 180ms with designed
color+transform+shadow. The scrubbed Line is the scroll-driven moment. Everything honors
prefers-reduced-motion.

## Art pipeline
No hand-coded illustration. Recraft style-locked engraved-line icon set (one hand, petrol
ink) for the 10 services + UI glyphs. Paper grain at ~4% opacity. Real team photos with
one unified neutral-warm grade. The existing white-on-black logo PNG stays in dark
contexts (footer ink band, og-image); light nav uses a typographic lockup of the same
wordmark (NUVION / letterspaced SOLUTIONS). New favicon. New og-image composed to match.

## Voice / honesty (non-negotiable)
Plain, verifiable sentences only: "You'll know the price before we start." "No contracts —
cancel anytime." "You see it working before you pay." Drop every invented stat
(30–40% conversion, 80% no-shows, 10–20 hrs/week, ROI-in-60-days, false scarcity,
"satisfied clients" plural framing). Third-party stats only with named sources, framed as
industry research — never as our client results. Client-facing copy says "Nuvion
Solutions". Every lead form ends with a required TCPA consent checkbox.

## Functionality contract (from the inventory — must survive unchanged)
- All 16 routes and exact slugs; homepage anchors #services #how-it-works #why-us #team #contact
- n8n webhooks byte-compatible: booking-availability {timezone, days:14}; booking-create
  exact payload incl. source:'website', duration_minutes:30, hp honeypot fake-success;
  audit webhook fire-and-forget; demo-call widget POST {phone:'+1'+10digits, niche} with
  VITE_DEMO_WEBHOOK_URL override + all 5 error-code branches
- Book.jsx 9 service-chip slugs verbatim (n8n SERVICE_COPY contract)
- AIReceptionist: DEMO_NICHES flags, PLANS pricing ($297/$397/$597 + trial copy), phone
  mock component (restyled to new palette — concept kept: frame, transcript, badges)
- Audit: full state machine, calculate() contract, downloadable report, chat shell
- Legal pages: price-neutrality verbatim, LLC name, dates, cross-links
- Footer: tel:+17075209179 shown as (707) 520-9179, team@nuvion-solutions.com, all 10
  service links, /privacy /terms, dynamic year
- vercel.json SPA rewrite, robots.txt AI-crawler allows, /og-image.png path
- Helmet blocks per page with exact canonicals

## Deliberate fixes riding along
- Delete ~4.7MB duplicated/dead base64 in NuvionWebsite.jsx; compress logo/team images
- Add favicon (currently 404s); extend sitemap.xml with the 7 missing routes
- Fix audit 'marketing-agencies' → 'marketing-agency' id so the 26th niche renders
- Add TCPA consent checkboxes to all three lead forms
- Standardize contact email on team@nuvion-solutions.com (JSON-LD previously said
  support@nuvionsolutions.us — flagged for Jaede)
