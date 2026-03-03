// ─────────────────────────────────────────────────────────────
// NUVION SOLUTIONS — AI AUDIT DATA ENGINE
// 25 niches · niche-specific questions · real data sources
// ─────────────────────────────────────────────────────────────

const q = (id, text, sub, opts, vals, src) => ({ id, text, sub, options: opts, values: vals, source: src });

const wf = (name, priority, trigger, steps, tools, impact) => ({ name, priority, trigger, steps, tools, impact });

const pp = (label, cur, gain, desc, fix) => ({ label, currentValue: cur, gainValue: gain, description: desc, fix });

// ─── SHARED CALCULATION HELPERS ─────────────────────────────
const fmt = (n) => Math.round(n).toLocaleString();

const baseRevenue = (leads, responseRate, avgTicket, followup, afterHours) => {
  const missedLeads = leads * (1 - responseRate);
  const afterHoursMissed = leads * 0.33 * (1 - afterHours);
  const followupGap = 1 - followup;
  const revLost = (missedLeads * avgTicket * 0.05) + (afterHoursMissed * avgTicket * 0.04) + (leads * followupGap * 0.08 * avgTicket * 0.03);
  const revGained = (missedLeads * 0.85 * avgTicket * 0.11) + (afterHoursMissed * 0.9 * avgTicket * 0.09) + (leads * followupGap * 0.8 * avgTicket * 0.055);
  return { revLost, revGained };
};

const baseTime = (adminHrs, schedulingHrs, followupHrs = 3) => {
  const wasted = adminHrs + schedulingHrs + followupHrs;
  const saved = (adminHrs * 0.68) + (schedulingHrs * 0.82) + (followupHrs * 0.90);
  return { wasted, saved };
};

// ─────────────────────────────────────────────────────────────
// NICHES
// ─────────────────────────────────────────────────────────────
export const NICHES = [

  // ══════════════════════════════════════════════════════════
  // TIER 1 — HIGHEST VALUE LEADS
  // ══════════════════════════════════════════════════════════

  {
    id: 'real-estate',
    label: 'Real Estate',
    icon: '🏡',
    tier: 1,
    tagline: 'Agents, Brokers & Teams',
    questions: [
      q('leads','How many inbound leads or inquiries do you receive per month?','Include calls, web forms, Zillow, Realtor.com, social media, and referrals',['Under 10','10 – 25','25 – 50','50 – 100','100+'],[5,17,37,75,150],'NAR 2023 Member Profile: Average agent receives 12–15 leads/month; top producers handle 50+'),
      q('response','What percentage of new leads receive a personal response within 5 minutes?','Be honest — this single metric has the biggest impact on your close rate',['Less than 10%','10 – 25%','25 – 50%','50 – 75%','75% or more'],[0.05,0.17,0.37,0.62,0.87],'MIT/InsideSales.com: Leads contacted within 5 minutes are 9× more likely to convert than those reached after 30 minutes'),
      q('commission','What is your average gross commission per closed transaction?','Estimate based on your typical price range and market',['Under $3,000','$3,000 – $6,000','$6,000 – $10,000','$10,000 – $20,000','Over $20,000'],[2000,4500,8000,15000,28000],'NAR 2023: Median agent income $56,400/yr; commission varies widely by market and price point'),
      q('admin','How many hours per week do you spend on administrative tasks?','Emails, CRM updates, paperwork, data entry — anything not directly client-facing',['Under 5','5 – 10','10 – 20','20 – 30','30+'],[3,7,15,25,38],'ActivePipe 2022: Real estate agents spend an average of 35–40% of their working hours on administrative tasks'),
      q('followup','How automated is your follow-up system for leads that didn\'t immediately convert?','Manual = you personally reach out; automated = software does it on a schedule',['No system at all','Occasional manual outreach','Basic CRM reminders','Mostly automated','Fully automated sequences'],[0,0.1,0.3,0.65,0.92],'Marketing Donut: 80% of sales require 5+ follow-up contacts; 44% of agents give up after just 1 attempt'),
      q('afterhours','How do you currently handle leads that come in after business hours?','After 6pm, weekends, and holidays',['They go unanswered','I check in the morning','I try to respond same-day','Automated text response sent','24/7 AI coverage in place'],[0,0.1,0.3,0.75,0.97],'Zillow 2022: ~35% of all buyer inquiries are submitted outside normal business hours'),
      q('scheduling','How many hours per week do you spend coordinating showings and managing your calendar?','Scheduling, confirming, rescheduling — back-and-forth with buyers and sellers',['Under 2','2 – 5','5 – 10','10 – 20','20+'],[1,3.5,7.5,15,25],'Lone Wolf Technologies 2023: Agents spend 8–12 hours/week on scheduling-related tasks'),
      q('sphere','What percentage of your past clients do you proactively contact at least once per quarter?','Calls, texts, emails, market updates — any intentional outreach to your sphere',['Less than 10%','10 – 25%','25 – 50%','50 – 75%','Over 75%'],[0.05,0.17,0.37,0.62,0.85],'NAR: 88% of buyers say they\'d use the same agent again — only 12% do. Lack of follow-up is the #1 reason.'),
      q('nurtures','How many active buyers or sellers are in your pipeline who haven\'t transacted yet?','People who need 3–12 more months before they\'re ready to act',['Under 5','5 – 15','15 – 30','30 – 60','60+'],[2,10,22,45,80],'Industry avg: Most agents have 15–25 people in their pipeline who could close within 12 months with consistent nurturing'),
      q('txnhours','How many hours does transaction coordination take per deal?','Paperwork, deadline tracking, lender comms, status updates to clients',['Under 5 hours','5 – 10 hours','10 – 20 hours','20 – 30 hours','30+ hours'],[3,7,15,25,40],'Real Trends 2022: Average real estate transaction requires 15–20 hours of coordination work'),
      q('closings','How many transactions do you close per month on average?','Divide quarterly total by 3 if easier',['Less than 1','1 – 2','2 – 4','4 – 8','8+'],[0.5,1.5,3,6,10],'NAR 2023: Median agent closes 12 transactions/year (1/month); top 10% close 3+ per month'),
      q('referrals','How many referrals do you receive from past clients per month?','People who called specifically because someone recommended you',['0','1 – 2','3 – 5','6 – 10','10+'],[0,1.5,4,8,14],'NAR: 41% of buyers found their agent through a referral; systematic referral programs produce 3–5× more referral business'),
    ],
    calculate: (a) => {
      const [leads,response,commission,adminHrs,followup,afterHours,schedulingHrs,sphereRate,nurtures,txnHrs,closings,referrals] = a;
      const missed = leads*(1-response); const ahMissed = leads*0.35*(1-afterHours); const fGap=1-followup;
      const revLost = (missed*commission*0.05)+(ahMissed*commission*0.04)+(leads*fGap*0.08*commission*0.03)+(nurtures*(1-sphereRate)*commission*0.12/12);
      const revGained = (missed*0.85*commission*0.12)+(ahMissed*0.9*commission*0.09)+(leads*fGap*0.8*commission*0.06)+(nurtures*(1-sphereRate)*0.75*commission*0.16/12)+(referrals*0.4*commission*0.08);
      const wasted = adminHrs+schedulingHrs+(txnHrs*closings/4.3)+3;
      const saved = (adminHrs*0.68)+(schedulingHrs*0.85)+(txnHrs*closings/4.3*0.62)+(3*0.90);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Slow Lead Response',`$${fmt(missed*commission*0.05)}/mo lost`,`+$${fmt(missed*0.85*commission*0.12)}/mo recovered`,`${Math.round(missed)} leads/month aren't getting a 5-minute response. MIT research shows this single fix improves conversion 9×.`,'AI Receptionist responds to every lead within 30 seconds, 24/7, qualifies them, and books showings automatically'),
          pp('After-Hours Lead Loss',`$${fmt(ahMissed*commission*0.04)}/mo lost`,`+$${fmt(ahMissed*0.9*commission*0.09)}/mo recovered`,`35% of real estate inquiries come after hours. Without an instant response system, these leads call the next agent.`,'24/7 AI captures every after-hours inquiry, sends personalized responses, and schedules follow-up automatically'),
          pp('Weak Follow-Up System',`$${fmt(leads*fGap*0.08*commission*0.03)}/mo lost`,`+$${fmt(leads*fGap*0.8*commission*0.06)}/mo recovered`,`80% of real estate sales require 5+ touchpoints. With only ${Math.round(followup*100)}% automation, deals are dying in your pipeline.`,'Multi-channel automated sequences (email, SMS, voicemail drops) run indefinitely until the lead responds or opts out'),
          pp('Sphere of Influence Gap',`$${fmt(nurtures*(1-sphereRate)*commission*0.12/12)}/mo lost`,`+$${fmt(nurtures*(1-sphereRate)*0.75*commission*0.16/12)}/mo recovered`,`88% of past clients say they'd use you again — only 12% do. You're currently in contact with ${Math.round(sphereRate*100)}% of your sphere.`,'Automated annual check-ins, neighborhood market updates, and birthday messages keep you top-of-mind year-round'),
        ],
        sources:['MIT/InsideSales.com: Leads contacted within 5 minutes are 9× more likely to convert vs. 30 minutes','NAR 2023: 88% of buyers say they\'d use the same agent again — only 12% do','Marketing Donut: 80% of sales require 5+ follow-ups; 44% of agents give up after 1 attempt','Zillow 2022: ~35% of buyer inquiries submitted outside normal business hours','ActivePipe 2022: Agents spend 35–40% of their time on administrative tasks','HBR: 50% of all sales go to the vendor who makes first contact']
      };
    },
    automationPlan:[
      wf('Instant Lead Capture & Qualification','critical','New lead from any source (Zillow, web form, call, social, referral)',['Lead detected in real-time from all connected sources','Personalized SMS + email sent within 30 seconds','AI asks 3–5 qualification questions (timeline, budget, area)','Buyer/seller profile automatically built from responses','Hot leads instantly scheduled for a showing or call; cold leads enter nurture'],['AI Receptionist','CRM Integration','SMS + Email Automation','Lead Routing Logic'],'Capture 85% of leads currently going unanswered or responding too slowly — the #1 conversion lever in real estate'),
      wf('Long-Term Nurture Sequences','high','Lead enters pipeline but isn\'t ready to transact immediately',['Lead tagged by timeline (30/60/90/180/365 days)','Automated touchpoints sent on smart schedule','Market updates personalized to their target neighborhood and price range','Engagement tracked — active leads flagged for personal follow-up call','Sequence runs indefinitely until response, booking, or opt-out'],['Email Sequences','SMS Automation','Market Data Integration','CRM Tagging'],'Convert 6–8% of long-term pipeline nurtures into closings over 12 months with zero additional manual effort'),
      wf('Sphere of Influence Engine','high','Past client anniversary, birthday, or 90-day check-in trigger',['Annual touchpoint calendar built for every past client','Neighborhood market updates delivered monthly','Home purchase anniversary and birthday messages sent automatically','Referral ask sequence triggered at optimal timing (6-month and 12-month post-close)','Review request sent 30 days post-anniversary'],['CRM Automation','Email + SMS','Market Data API','Review Platform Integration'],'Increase repeat and referral business by 40–60% within 12 months — the highest-ROI automation a real estate agent can implement'),
      wf('Transaction Coordination Automation','medium','Offer accepted / deal goes under contract',['All parties (client, lender, title, co-agent) notified with full timeline','Deadline reminders sent 7 days, 3 days, and 1 day in advance','Document request sequences triggered automatically','Client status update sent at every milestone','Post-close review request + referral ask deployed automatically'],['Transaction Management Integration','Email Automation','Document Workflows','Calendar Sync'],'Reduce per-deal coordination time by 60% and eliminate missed deadlines — reclaim 10–15 hours per transaction'),
    ]
  },

  {
    id: 'hvac',
    label: 'HVAC & Home Services',
    icon: '🔧',
    tier: 1,
    tagline: 'HVAC, Plumbing, Electrical & Trades',
    questions: [
      q('calls','How many inbound calls or service requests do you receive per month?','Include phone calls, web form submissions, and online bookings',['Under 30','30 – 60','60 – 120','120 – 250','250+'],[15,45,90,185,350],'IBIS World 2023: Average HVAC company handles 60–120 service calls/month; larger companies 300+'),
      q('missed','What percentage of inbound calls go unanswered or to voicemail?','Include after-hours calls, peak-season overflow, and lunch hours',['Under 5%','5 – 15%','15 – 30%','30 – 50%','Over 50%'],[0.02,0.1,0.22,0.4,0.6],'Forbes: 80% of callers who reach voicemail don\'t leave a message — they call a competitor instead'),
      q('ticket','What is your average job ticket value?','Estimate across all service types (repairs, installs, maintenance)',['Under $200','$200 – $400','$400 – $800','$800 – $2,000','Over $2,000'],[125,300,600,1400,3200],'HomeAdvisor 2023: Average HVAC repair $150–$500; new system installation $3,000–$12,000; service average $400–$800'),
      q('admin','How many hours per week does your office/dispatch team spend on administrative tasks?','Scheduling, invoicing, customer follow-up, job notes, data entry',['Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'ServiceTitan 2022: Home service businesses spend avg 30% of operational hours on scheduling and administrative tasks'),
      q('estimates','How many estimates or quotes go uncontacted after being sent each month?','Customers who received an estimate but you never followed up with',['0 – 2','3 – 7','8 – 15','15 – 30','30+'],[1,5,11,22,40],'Service business data: 60% of estimates that aren\'t followed up within 48 hours go to a competitor'),
      q('afterhours','How do you handle emergency service calls after business hours?','Evenings, weekends, holidays',['We don\'t — they go to voicemail','We have an on-call tech but slow to respond','We have an answering service','AI or automated triage in place','24/7 live coverage'],[0,0.2,0.45,0.78,0.97],'Angi 2023: 28% of HVAC service requests are submitted outside business hours; emergency calls convert at 2× the rate of standard calls'),
      q('maintenance','Do you have a recurring maintenance plan or membership program?','Monthly or annual memberships for tune-ups and priority service',['No maintenance plan','Less than 25 members','25 – 100 members','100 – 300 members','300+ members'],[0,12,62,200,450],'ServiceTitan 2023: Companies with maintenance programs have 3× higher customer retention and 40% more revenue per customer'),
      q('followup','Do you have an automated system to follow up with customers after job completion?','For reviews, referrals, maintenance reminders, and repeat business',['No follow-up system','Occasional manual calls','Email-only follow-up','Multi-step automated sequences','Full retention automation'],[0,0.1,0.3,0.65,0.92],'Podium 2022: Businesses that follow up within 24 hours of service completion receive 5× more reviews and 30% more referrals'),
      q('scheduling','How many hours per week does your team spend on scheduling, dispatch, and rescheduling?','Back-and-forth with techs and customers to coordinate jobs',['Under 3','3 – 7','7 – 15','15 – 25','25+'],[2,5,11,20,32],'ServiceTitan: Dispatching and scheduling accounts for 25–35% of office staff time in field service businesses'),
      q('seasonal','How prepared is your business for seasonal call surges (summer AC, winter heat)?','Ability to handle 2–3× normal call volume without dropping calls',['Not prepared — we get overwhelmed','Somewhat — we hire seasonally','Mostly — we manage but miss some','Well prepared — minimal missed calls','Fully automated surge handling'],[0,0.2,0.45,0.75,0.97],'ACCA 2022: HVAC companies lose avg 18–35% of peak-season call revenue due to call overflow and slow response times'),
      q('reviews','How many online reviews do you receive per month on average?','Google, Yelp, Facebook, Angi',['0 – 2','3 – 7','8 – 15','15 – 30','30+'],[1,5,11,22,40],'BrightLocal 2023: 98% of consumers read online reviews for local businesses; businesses with 50+ reviews earn 4.6× more revenue than those with fewer than 10'),
    ],
    calculate: (a) => {
      const [calls,missedPct,ticket,adminHrs,estimatesMissed,afterHours,members,followup,schedulingHrs,seasonal] = a;
      const missedCalls = calls*missedPct; const estimateLoss = estimatesMissed*ticket*0.35;
      const afterHoursLoss = calls*0.28*(1-afterHours)*ticket*0.6;
      const revLost = (missedCalls*ticket*0.55)+(estimateLoss)+(afterHoursLoss);
      const revGained = (missedCalls*0.88*ticket*0.55)+(estimatesMissed*0.75*ticket*0.45)+(calls*0.28*(1-afterHours)*0.85*ticket*0.6)+(members*ticket*0.3/12);
      const wasted = adminHrs+schedulingHrs+4;
      const saved = (adminHrs*0.65)+(schedulingHrs*0.80)+(4*0.88);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Missed & Unanswered Calls',`$${fmt(missedCalls*ticket*0.55)}/mo lost`,`+$${fmt(missedCalls*0.88*ticket*0.55)}/mo recovered`,`${Math.round(missedCalls)} calls/month go to voicemail. 80% of those callers immediately call your competitor.`,'AI Receptionist answers every call 24/7, books the job, and sends the tech details — no voicemail, no lost leads'),
          pp('Uncontacted Estimates',`$${fmt(estimateLoss)}/mo lost`,`+$${fmt(estimatesMissed*0.75*ticket*0.45)}/mo recovered`,`${Math.round(estimatesMissed)} estimates/month sent but never followed up. 60% of those go to whoever follows up first.`,'Automated estimate follow-up sequences trigger within 2 hours of sending — SMS + email until they respond'),
          pp('After-Hours Emergency Calls',`$${fmt(afterHoursLoss)}/mo lost`,`+$${fmt(calls*0.28*(1-afterHours)*0.85*ticket*0.6)}/mo recovered`,`28% of service requests come after hours. Emergency jobs convert at 2× the rate — and you\'re losing them.`,'24/7 AI triage captures emergency calls, qualifies urgency, dispatches on-call tech, and confirms with customer'),
          pp('No Maintenance Revenue',`$${fmt(members*ticket*0.3/12)}/mo missed`,`+$${fmt(members*ticket*0.3/12*3)}/mo potential`,`Maintenance plan members generate 3× more revenue and refer at 5× the rate. You currently have ${Math.round(members)} members.`,'Automated membership enrollment campaigns convert past service customers into recurring monthly revenue'),
        ],
        sources:['Forbes: 80% of callers who reach voicemail don\'t leave a message — they call a competitor','ServiceTitan 2023: Maintenance plan businesses have 3× higher customer retention','Angi 2023: 28% of service requests submitted outside business hours; emergency calls convert at 2× standard rate','ACCA 2022: HVAC companies lose 18–35% of peak-season revenue to call overflow','BrightLocal 2023: Businesses with 50+ reviews earn 4.6× more revenue than those with fewer than 10','HomeAdvisor 2023: 60% of estimates not followed up within 48 hours go to a competitor']
      };
    },
    automationPlan:[
      wf('24/7 Call Answering & Instant Booking','critical','Inbound call or web form submission — any time, any day',['AI Receptionist answers within 2 rings','Customer describes issue — AI qualifies (emergency vs standard)','Available time slots offered and job booked on the spot','Tech assigned and dispatched automatically','Confirmation SMS sent to customer and tech with job details'],['AI Phone Receptionist','Scheduling Integration','Tech Dispatch System','SMS Confirmations'],'Capture 88% of calls currently going to voicemail — the single highest-ROI change for any home service business'),
      wf('Estimate Follow-Up Automation','high','Estimate sent to customer',['Automated SMS sent 2 hours after estimate: "Any questions?"','Email follow-up at 24 hours with social proof (reviews, photos)','Final check-in at 72 hours with urgency and availability','If no response, lead tagged for monthly re-engagement','If accepted, job auto-scheduled and deposit link sent'],['SMS Automation','Email Sequences','CRM Tagging','Online Payment Integration'],'Convert 40–50% of uncontacted estimates into booked jobs — the easiest revenue sitting on the table'),
      wf('Post-Job Retention & Review Engine','high','Job marked complete in field service software',['Thank-you SMS sent within 1 hour of job completion','Review request sent 24 hours later with direct Google link','Seasonal maintenance reminder sent at 6 months','Membership upsell sequence triggered at 30 days post-service','Referral ask sent at 60 days with incentive'],['CRM Automation','SMS + Email','Review Platform Integration','Referral Tracking'],'Generate 5× more reviews, 30% more referrals, and increase repeat visit rate by 45%'),
      wf('Seasonal Surge Management','medium','30 days before peak season (June/December)',['Past customers contacted with pre-season tune-up offers','Priority booking slots reserved for maintenance members','AI call routing handles overflow during surge periods','Waitlist system manages excess demand without dropping calls','Post-season outreach captures delayed demand'],['Campaign Automation','Call Routing AI','Waitlist Management','CRM Segmentation'],'Handle 2–3× normal call volume without missing a single lead during your highest-revenue months'),
    ]
  },

  {
    id: 'law-firms',
    label: 'Law Firms',
    icon: '⚖️',
    tier: 1,
    tagline: 'Attorneys, Practices & Legal Services',
    questions: [
      q('inquiries','How many new client inquiries or consultation requests do you receive per month?','Calls, web forms, referrals, and walk-ins',['Under 10','10 – 25','25 – 50','50 – 100','100+'],[5,17,37,75,150],'Clio Legal Trends Report 2023: Average law firm receives 25–40 new client inquiries per month'),
      q('response','What percentage of inquiries receive a response within the same business day?','Calls returned, emails replied to, forms acknowledged',['Less than 25%','25 – 50%','50 – 75%','75 – 90%','90%+'],[0.12,0.37,0.62,0.82,0.95],'Clio 2023: 42% of legal consumers hired the first attorney who responded to them — response speed is the #1 conversion factor'),
      q('casevalue','What is your average case or retainer value?','Estimate across all matter types you handle',['Under $1,500','$1,500 – $3,500','$3,500 – $8,000','$8,000 – $20,000','Over $20,000'],[800,2500,5750,14000,30000],'Clio Legal Trends 2023: Average legal matter value ranges from $1,200 (family) to $35,000+ (business litigation)'),
      q('billable','How many hours per week does your staff spend on non-billable administrative tasks?','Intake, scheduling, document prep, client updates, billing admin',['Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'Clio 2023: Attorneys bill only 2.5 hours of an 8-hour day on average — the rest is non-billable admin and overhead'),
      q('intake','How long does it take to complete client intake from first contact to signed retainer?','Calendar days from inquiry to signed agreement',['Same day','1 – 3 days','3 – 7 days','1 – 2 weeks','Over 2 weeks'],[0.5,2,5,10,18],'LawPay 2022: Every extra day in the intake process reduces conversion rate by approximately 8%'),
      q('followup','Do you have an automated follow-up system for consultation no-shows or unconverted inquiries?','People who showed interest but didn\'t retain',['No system','Occasional manual follow-up','Basic email reminders','Mostly automated','Fully automated multi-step'],[0,0.1,0.3,0.65,0.92],'Legal marketing data: 60% of law firm leads that don\'t convert immediately would hire within 3 months with consistent follow-up'),
      q('noshow','What percentage of scheduled consultations result in no-shows or cancellations?','Without re-booking',['Under 5%','5 – 15%','15 – 25%','25 – 40%','Over 40%'],[0.03,0.1,0.2,0.32,0.5],'Clio 2022: Law firm no-show rates average 18–22%; automated reminders reduce no-shows by up to 80%'),
      q('admin','How many hours per week do attorneys spend on tasks that don\'t require a law degree?','Client status updates, scheduling, basic document generation, billing follow-up',['Under 3','3 – 7','7 – 15','15 – 25','25+'],[2,5,11,20,32],'McKinsey 2023: 23% of a lawyer\'s work is automatable — primarily document review, contract generation, and client communications'),
      q('billing','What percentage of invoices are paid within 30 days without follow-up?','No calls or reminders needed',['Less than 25%','25 – 50%','50 – 75%','75 – 90%','90%+'],[0.12,0.37,0.62,0.82,0.95],'LawPay 2023: Firms using automated billing reminders collect 35% faster and reduce outstanding receivables by 40%'),
      q('referrals','How many referrals do you receive from past clients per month on average?','Clients who called specifically because someone sent them',['0','1 – 2','3 – 5','6 – 10','10+'],[0,1.5,4,8,14],'Clio 2023: 62% of legal consumers choose their attorney based on referrals — firms with post-case follow-up systems get 3× more referrals'),
      q('reviews','How many new online reviews does your firm receive per month?','Google, Avvo, Martindale, Facebook',['0','1 – 2','3 – 5','6 – 10','10+'],[0,1.5,4,8,14],'BrightLocal 2023: 87% of consumers read reviews for local services including legal; firms with 50+ reviews convert 4× more website visitors'),
    ],
    calculate: (a) => {
      const [inq,response,caseVal,billableWaste,intakeDays,followup,noshow,attyAdmin,billingRate,referrals] = a;
      const missedInq = inq*(1-response); const noshowLoss = inq*noshow*caseVal*0.3;
      const slowIntakeLoss = inq*response*(intakeDays*0.08)*caseVal*0.15;
      const revLost = (missedInq*caseVal*0.25)+(noshowLoss)+(slowIntakeLoss);
      const revGained = (missedInq*0.8*caseVal*0.35)+(inq*noshow*0.75*caseVal*0.3)+(inq*response*(Math.max(0,intakeDays-1)*0.08)*caseVal*0.12)+(referrals*0.5*caseVal*0.3);
      const wasted = billableWaste+attyAdmin+4; const saved = (billableWaste*0.62)+(attyAdmin*0.70)+(4*0.88);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Slow Inquiry Response',`$${fmt(missedInq*caseVal*0.25)}/mo lost`,`+$${fmt(missedInq*0.8*caseVal*0.35)}/mo recovered`,`42% of legal consumers hire the first attorney who responds. ${Math.round(missedInq)} inquiries/month aren\'t getting same-day responses.`,'Automated inquiry acknowledgment within minutes, intake questionnaire sent instantly, consultation booked automatically'),
          pp('Consultation No-Shows',`$${fmt(noshowLoss)}/mo lost`,`+$${fmt(inq*noshow*0.75*caseVal*0.3)}/mo recovered`,`${Math.round(noshow*100)}% of your scheduled consultations no-show without re-booking. Automated reminders cut this by 80%.`,'Multi-channel reminder sequences (SMS, email, voicemail) at 48hr, 24hr, and 2hr before consultation'),
          pp('Slow Intake Process',`$${fmt(slowIntakeLoss)}/mo lost`,`+$${fmt(inq*response*(Math.max(0,intakeDays-1)*0.08)*caseVal*0.12)}/mo recovered`,`Your intake takes ~${Math.round(intakeDays)} days. Every additional day reduces conversion by 8%. Prospects shop around while waiting.`,'Automated intake questionnaire, e-signature, and retainer agreement delivered within minutes of first contact'),
          pp('Missed Referral Revenue',`$${fmt(referrals*0.3*caseVal*0.3)}/mo missed`,`+$${fmt(referrals*0.5*caseVal*0.3)}/mo potential`,`62% of legal clients choose based on referrals. Automated post-case follow-up generates 3× more referrals from satisfied clients.`,'Post-case check-in sequences, review requests, and referral asks deployed at 30, 90, and 180 days post-close'),
        ],
        sources:['Clio Legal Trends 2023: 42% of legal consumers hired the first attorney who responded','Clio 2023: Attorneys bill only 2.5 hours of an average 8-hour day on non-billable work','LawPay 2022: Every extra intake day reduces conversion rate by ~8%','Clio 2022: Automated reminders reduce law firm no-shows by up to 80%','McKinsey 2023: 23% of lawyer tasks are automatable','LawPay 2023: Automated billing firms collect 35% faster and reduce receivables by 40%']
      };
    },
    automationPlan:[
      wf('Instant Inquiry Response & Intake','critical','New inquiry via call, web form, email, or referral',['Inquiry acknowledged within 60 seconds via SMS + email','Practice area questionnaire sent automatically','Conflict check triggered in case management system','Consultation booked based on attorney availability','Retainer and intake documents sent for e-signature before consultation'],['AI Intake Bot','Case Management Integration','E-Signature Platform','Scheduling Automation'],'Cut intake time from days to hours — the single biggest driver of legal conversion rate'),
      wf('Consultation No-Show Prevention','high','Consultation scheduled',['Confirmation SMS + email immediately after booking','Reminder sent 48 hours before with preparation instructions','Day-before reminder with office location and what to bring','2-hour reminder with direct call-in number','No-show: re-booking sequence fires automatically within 30 minutes'],['SMS Automation','Email Sequences','Calendar Integration','CRM Workflows'],'Reduce no-shows by 75–80% and recapture 60% of those who do miss with automatic re-booking'),
      wf('Post-Case Referral & Review Engine','high','Matter closed / case concluded',['Thank-you message sent within 24 hours of case conclusion','Google review request sent at 30 days','6-month check-in: "How are things going? Know anyone who needs help?"','Annual legal health check-in (estate planning, business legal needs)','Referral incentive program managed automatically'],['Email Automation','Review Integration','CRM Segmentation','Referral Tracking'],'Generate 3× more referrals and 5× more reviews from the same number of closed cases'),
      wf('Automated Billing & Collections','medium','Invoice generated or payment overdue',['Invoice sent immediately upon matter milestone','Payment reminder at 15, 30, and 45 days','Payment plan offer triggered at 45 days','Collections escalation path managed automatically','Payment received: thank-you + next service prompt sent'],['Billing Platform Integration','Payment Automation','Email + SMS Sequences','CRM Workflows'],'Collect 35% faster and reduce outstanding receivables by 40% — without a single uncomfortable collection call'),
    ]
  },

  {
    id: 'medical',
    label: 'Medical Practices',
    icon: '🏥',
    tier: 1,
    tagline: 'Primary Care, Specialists & Clinics',
    questions: [
      q('patients','How many patient appointments do you schedule per month?','Across all providers in your practice',['Under 50','50 – 150','150 – 400','400 – 800','800+'],[25,100,275,600,1100],'MGMA 2023: Average primary care physician sees 18–22 patients/day; specialists 12–18/day'),
      q('noshow','What is your current patient no-show or same-day cancellation rate?','Appointments that happen without advance rescheduling',['Under 5%','5 – 10%','10 – 20%','20 – 35%','Over 35%'],[0.03,0.07,0.15,0.27,0.45],'MGMA 2023: Average medical practice no-show rate is 18–23%; automated reminders reduce this by 55–80%'),
      q('visitvalue','What is your average revenue per patient visit?','Include all billing codes, co-pays, and ancillary services',['Under $100','$100 – $200','$200 – $400','$400 – $800','Over $800'],[60,150,300,600,1200],'CMS 2023: Average primary care visit reimbursement $150–$300; specialist visits $300–$800+ depending on specialty'),
      q('newpatients','How many new patient inquiries do you receive per month that don\'t convert to a first appointment?','People who called or filled out a form but never booked',['Under 5','5 – 15','15 – 30','30 – 60','60+'],[2,10,22,45,85],'Healthcare marketing data: 45% of new patient inquiries don\'t convert due to slow response or difficult booking process'),
      q('admin','How many staff hours per week are spent on phone-based scheduling and administrative tasks?','Appointment booking, rescheduling, insurance verification, reminder calls',['Under 10','10 – 20','20 – 40','40 – 60','60+'],[5,15,30,50,80],'MGMA 2022: Front desk staff spend 40–55% of their time on scheduling-related phone calls'),
      q('recall','What percentage of patients due for follow-up or preventive care actually return on schedule?','Annual physicals, chronic disease management, post-procedure follow-ups',['Under 20%','20 – 40%','40 – 60%','60 – 80%','Over 80%'],[0.1,0.3,0.5,0.7,0.88],'CDC/AHRQ: Patient recall programs that use automated outreach achieve 40–60% higher adherence rates than manual systems'),
      q('afterhours','How are after-hours patient inquiries and appointment requests handled?','New patient inquiries or scheduling requests after office hours',['Go to voicemail until morning','Answering service only','Online booking available','AI triage available','Full 24/7 scheduling coverage'],[0,0.2,0.55,0.78,0.97],'Accenture 2021: 68% of patients prefer self-scheduling; 30% of online scheduling happens outside business hours'),
      q('insurance','How many hours per week does your staff spend on insurance verification and pre-authorization?','Including denials, re-submissions, and follow-ups',['Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'MGMA 2023: Prior authorization and insurance admin costs practices avg $14.30 per physician per hour spent'),
      q('reviews','How many new online reviews does your practice receive per month?','Google, Healthgrades, Yelp, ZocDoc',['0 – 1','2 – 4','5 – 10','10 – 20','20+'],[0.5,3,7,15,28],'Software Advice 2023: 94% of patients use online reviews to evaluate physicians; practices with 50+ reviews see 30% more new patient conversions'),
      q('satisfaction','How do you currently measure and collect patient satisfaction feedback?','Post-visit surveys, NPS, or similar',['We don\'t collect it','Occasional paper surveys','Email survey after visit','Automated digital survey','Real-time automated NPS system'],[0,0.1,0.3,0.65,0.9],'HCAHPS/Press Ganey: Practices with systematic satisfaction collection and response see 15–25% higher patient retention'),
    ],
    calculate: (a) => {
      const [patients,noshow,visitVal,newPtMissed,adminHrs,recall,afterHours,insuranceHrs,reviews,satisfaction] = a;
      const noshowLoss = patients*noshow*visitVal; const newPtLoss = newPtMissed*visitVal*6*0.4;
      const recallGap = patients*(1-recall)*visitVal*0.5;
      const revLost = noshowLoss+(newPtLoss/6)+recallGap/6;
      const revGained = (patients*noshow*0.72*visitVal)+(newPtMissed*0.6*visitVal)+(patients*(1-recall)*0.45*visitVal*0.5/6);
      const wasted = adminHrs+insuranceHrs+3; const saved = (adminHrs*0.60)+(insuranceHrs*0.45)+(3*0.88);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Patient No-Shows & Cancellations',`$${fmt(noshowLoss)}/mo lost`,`+$${fmt(patients*noshow*0.72*visitVal)}/mo recovered`,`${Math.round(patients*noshow)} appointments/month are no-shows. At $${Math.round(visitVal)}/visit, that\'s real revenue walking out the door.`,'Multi-channel automated reminders at 72hr, 24hr, and 2hr before appointment reduce no-shows by 55–80%'),
          pp('New Patient Inquiry Drop-Off',`$${fmt(newPtLoss/6)}/mo lost`,`+$${fmt(newPtMissed*0.6*visitVal)}/mo recovered`,`${Math.round(newPtMissed)} new patient inquiries/month don\'t convert. 45% of those fail due to slow response or difficult booking.`,'Instant online booking, automated insurance pre-check, and same-day response convert 60% more new patient inquiries'),
          pp('Low Patient Recall Rate',`$${fmt(recallGap/6)}/mo lost`,`+$${fmt(patients*(1-recall)*0.45*visitVal*0.5/6)}/mo recovered`,`Only ${Math.round(recall*100)}% of your patients return for follow-up care on schedule. Automated recall programs increase adherence by 40–60%.`,'AI-driven patient recall sequences via SMS and email bring back lapsed patients automatically — no staff calls needed'),
          pp('Administrative Time Drain',`${Math.round(adminHrs+insuranceHrs)} hrs/wk wasted`,`${Math.round((adminHrs*0.60)+(insuranceHrs*0.45))} hrs/wk recovered`,`Front desk staff spend 40–55% of their time on scheduling calls. That time should be spent on patient experience.`,'AI handles scheduling, reminders, and insurance pre-verification — freeing staff for high-value patient interactions'),
        ],
        sources:['MGMA 2023: Average medical practice no-show rate 18–23%; reminders reduce by 55–80%','Accenture 2021: 68% of patients prefer self-scheduling; 30% of scheduling happens after hours','MGMA 2023: Front desk staff spend 40–55% of time on scheduling-related calls','CDC/AHRQ: Automated recall programs achieve 40–60% higher adherence rates','Software Advice 2023: 94% of patients use reviews to evaluate physicians','MGMA 2022: Prior auth admin costs practices $14.30/physician-hour spent']
      };
    },
    automationPlan:[
      wf('Patient No-Show Prevention System','critical','Appointment scheduled',['Confirmation SMS + email immediately after booking','Pre-appointment form sent automatically (insurance, reason for visit)','72-hour reminder with easy reschedule link','24-hour reminder with office directions and parking info','2-hour day-of reminder','No-show: re-engagement sequence fires within 2 hours with rebooking options'],['SMS/Email Automation','EHR Integration','Online Scheduling','Patient Portal'],'Reduce no-show rate by 55–80% — the highest ROI automation for any medical practice'),
      wf('24/7 New Patient Intake & Booking','high','New patient inquiry via call, web, or referral',['Inquiry acknowledged within 2 minutes 24/7','New patient form sent automatically with insurance info request','Insurance eligibility verified automatically in real-time','Appointment booked in first available slot by specialty/provider','Welcome sequence sent with what to expect, forms, and directions'],['AI Receptionist','EHR Integration','Insurance Verification API','Patient Onboarding Automation'],'Convert 60% more new patient inquiries and reduce first-visit paperwork time by 70%'),
      wf('Patient Recall & Preventive Care Engine','high','Patient due for annual, follow-up, or chronic care visit',['Recall campaign triggered 30 days before due date','Multi-channel outreach: SMS → Email → Phone (in order of response)','Easy online scheduling link included in every message','Non-responders re-engaged at 45 and 60 days','Care gap dashboard updated automatically'],['EHR/EMR Integration','SMS + Email Automation','Online Scheduling','Care Gap Analytics'],'Increase preventive care adherence by 40–60% and recover 45% of lapsed patients annually'),
      wf('Post-Visit Review & Satisfaction Loop','medium','Appointment completed / checked out',['Satisfaction survey sent within 2 hours of visit','Positive responders directed to Google/Healthgrades review','Negative responders flagged for immediate manager review','Review responses monitored and auto-drafted for approval','Monthly satisfaction report generated automatically'],['Survey Automation','Review Platform Integration','CRM','Practice Analytics'],'Build a systematic 5-star reputation and identify patient experience issues before they become public complaints'),
    ]
  },

  {
    id: 'dental',
    label: 'Dental Practices',
    icon: '🦷',
    tier: 1,
    tagline: 'General Dentistry, Orthodontics & Specialties',
    questions: [
      q('patients','How many patient appointments do you schedule per month?','New patients plus recall/hygiene plus treatment',['Under 50','50 – 150','150 – 300','300 – 600','600+'],[25,100,225,450,850],'ADA 2023: Average general dental practice sees 10–18 patients/day; specialty practices vary widely'),
      q('noshow','What is your patient no-show and same-day cancellation rate?','Appointments that block time but produce no revenue',['Under 5%','5 – 10%','10 – 20%','20 – 30%','Over 30%'],[0.03,0.07,0.15,0.25,0.4],'ADA Health Policy Institute 2023: Dental no-show rates average 14–19%; automated reminders reduce this by up to 75%'),
      q('visitvalue','What is your average revenue per patient visit?','Include all procedures; estimate across all appointment types',['Under $150','$150 – $300','$300 – $600','$600 – $1,200','Over $1,200'],[80,225,450,900,1800],'ADA 2023: Average dental procedure revenue $300–$500/visit; treatment plan cases $800–$5,000+'),
      q('recall','What percentage of your active patients return for their 6-month hygiene recall on schedule?','Without your team having to chase them repeatedly',['Under 30%','30 – 50%','50 – 65%','65 – 80%','Over 80%'],[0.15,0.4,0.57,0.72,0.88],'ADA: Only 47% of dental patients return for recall appointments on schedule without automated outreach'),
      q('treatmentplans','What percentage of presented treatment plans are accepted and scheduled within 30 days?','Cases where patient said yes and booked',['Under 20%','20 – 40%','40 – 60%','60 – 80%','Over 80%'],[0.1,0.3,0.5,0.7,0.88],'Dental consulting data: Average treatment plan acceptance rate is 30–40%; practices with follow-up automation see 55–65% acceptance'),
      q('newpatients','How many new patient inquiries don\'t convert to a first appointment each month?','Calls or forms that never resulted in a booking',['0 – 3','3 – 8','8 – 20','20 – 40','40+'],[1.5,5.5,14,30,55],'Dental marketing data: 40% of new patient inquiries don\'t book due to slow response or difficult scheduling process'),
      q('admin','How many staff hours per week are spent on phone-based scheduling, reminders, and admin?','Including recall calls, appointment reminders, insurance verification',['Under 10','10 – 20','20 – 35','35 – 50','50+'],[5,15,27,42,65],'ADA 2022: Dental front desk staff spend avg 35–45% of their time on scheduling and reminder phone calls'),
      q('insurance','How many hours per week does your team spend on insurance billing and follow-up?','Claims, pre-authorizations, denials, and patient billing questions',['Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'ADAA 2023: Insurance billing admin consumes 15–25% of dental practice overhead costs'),
      q('reviews','How many new online reviews does your practice receive per month?','Google, Yelp, Healthgrades',['0 – 1','2 – 4','5 – 10','10 – 20','20+'],[0.5,3,7,15,28],'Software Advice 2023: 72% of patients check online reviews before choosing a dentist; practices with 50+ reviews see significantly more new patients'),
      q('afterhours','How are after-hours patient calls and new patient inquiries handled?','Evenings, weekends',['Voicemail only','Answering service','Online booking available','AI receptionist','24/7 full coverage'],[0,0.2,0.55,0.78,0.97],'DentistryIQ: 35% of dental appointment requests happen outside business hours — most go to practices with 24/7 online booking'),
    ],
    calculate: (a) => {
      const [patients,noshow,visitVal,recall,treatAccept,newPtMissed,adminHrs,insuranceHrs] = a;
      const noshowLoss = patients*noshow*visitVal;
      const recallGap = patients*(1-recall)*2*visitVal*0.5;
      const treatGap = patients*0.15*(1-treatAccept)*visitVal*3;
      const newPtLoss = newPtMissed*visitVal*0.5;
      const revLost = noshowLoss+(recallGap/12)+(treatGap/12)+newPtLoss;
      const revGained = (patients*noshow*0.72*visitVal)+(patients*(1-recall)*2*0.45*visitVal*0.5/12)+(patients*0.15*(1-treatAccept)*0.35*visitVal*3/12)+(newPtMissed*0.6*visitVal);
      const wasted = adminHrs+insuranceHrs; const saved = (adminHrs*0.62)+(insuranceHrs*0.42);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('No-Shows Blocking Chair Time',`$${fmt(noshowLoss)}/mo lost`,`+$${fmt(patients*noshow*0.72*visitVal)}/mo recovered`,`${Math.round(patients*noshow)} no-shows/month at $${Math.round(visitVal)}/chair-hour. That\'s empty chairs that cost you the same whether filled or not.`,'Automated SMS + email reminders at 72hr, 24hr, and 2hr reduce dental no-shows by 70–75%'),
          pp('Recall Falloff',`$${fmt(recallGap/12)}/mo lost`,`+$${fmt(patients*(1-recall)*2*0.45*visitVal*0.5/12)}/mo recovered`,`Only ${Math.round(recall*100)}% of your patients return for 6-month recall on schedule. The ADA average is 47% without automation.`,'AI-powered recall sequences via SMS and email bring patients back without a single staff phone call'),
          pp('Unscheduled Treatment Plans',`$${fmt(treatGap/12)}/mo lost`,`+$${fmt(patients*0.15*(1-treatAccept)*0.35*visitVal*3/12)}/mo recovered`,`${Math.round((1-treatAccept)*100)}% of presented treatment plans aren\'t scheduled within 30 days. That revenue is sitting in your ledger unbooked.`,'Automated treatment plan follow-up sequences remind patients, answer financing questions, and make it easy to say yes'),
          pp('New Patient Inquiry Drop-Off',`$${fmt(newPtLoss)}/mo lost`,`+$${fmt(newPtMissed*0.6*visitVal)}/mo recovered`,`${Math.round(newPtMissed)} new patient inquiries/month don\'t convert. 40% fail because of slow response or hard scheduling.`,'24/7 AI receptionist, instant online booking, and automated insurance pre-check convert 60% more new patient inquiries'),
        ],
        sources:['ADA Health Policy 2023: Dental no-show rates avg 14–19%; reminders reduce by up to 75%','ADA: Only 47% of patients return for recall without automated outreach','Dental consulting: Average treatment acceptance 30–40%; automation pushes this to 55–65%','DentistryIQ: 35% of appointment requests happen outside business hours','Software Advice 2023: 72% of patients check reviews before choosing a dentist','ADA 2022: Front desk staff spend 35–45% of time on scheduling and reminder calls']
      };
    },
    automationPlan:[
      wf('No-Show Prevention & Recall Automation','critical','Appointment scheduled or recall date reached',['Booking confirmation sent instantly via SMS + email','Pre-appointment form with insurance and health update sent 5 days prior','72hr reminder with easy reschedule option','24hr reminder with office info','2hr same-day confirmation','No-show: immediate rebooking sequence triggered'],['SMS + Email Automation','Dental Practice Software Integration','Online Scheduling','Patient Portal'],'Reduce no-shows by 70–75% and increase recall adherence by 40–50% — fills your schedule without hiring more front desk staff'),
      wf('Treatment Plan Follow-Up System','high','Treatment plan presented but not scheduled',['Thank-you message sent same day with treatment plan summary','Financial options and CareCredit/financing info sent at 24 hours','FAQ response to common objections at 72 hours','Final follow-up with "your spot is available" urgency at 7 days','Accepted: instant scheduling + deposit link sent'],['CRM Automation','Email + SMS Sequences','Financing Integration','Scheduling Automation'],'Convert 35% more presented treatment plans into scheduled appointments — without a single sales conversation'),
      wf('New Patient Experience Automation','high','New patient inquiry via any channel',['Inquiry acknowledged within 2 minutes — 24/7','New patient forms and insurance info sent immediately','Insurance verified before first visit automatically','Welcome package sent: what to expect, forms, parking, team bios','Post-first-visit check-in and review request at 24 hours'],['AI Receptionist','Dental Software Integration','Insurance Verification','Email Automation'],'Convert 60% more inquiries and create a first impression that earns 5-star reviews before they even leave the chair'),
      wf('Review & Reputation Engine','medium','Appointment completed / patient checked out',['Satisfaction text sent within 1 hour of visit','Positive: direct link to Google review with 1-click option','Negative: flagged for immediate doctor review and personal call','Monthly review report generated automatically','Competitive review tracking vs. nearby practices'],['Review Platform Integration','SMS Automation','CRM','Practice Analytics'],'Build a systematically 5-star reputation that drives 30% more new patient conversions from Google search'),
    ]
  },

  // ── Niches 6–25 use parametric approach ────────────────────

  {
    id: 'roofing',
    label: 'Roofing & Contractors',
    icon: '🏗️',
    tier: 1,
    tagline: 'Roofing, Siding, Windows & General Contractors',
    questions: [
      q('leads','How many inbound leads or estimate requests do you receive per month?','Calls, web forms, referrals, storm-chasing leads, HomeAdvisor/Angi',['Under 15','15 – 35','35 – 75','75 – 150','150+'],[7,25,55,112,200],'IBISWorld 2023: Average roofing contractor receives 30–60 leads/month; storm-season surge can triple this'),
      q('missed','What percentage of inbound calls go unanswered or to voicemail?','',[' Under 5%','5 – 15%','15 – 30%','30 – 50%','Over 50%'],[0.02,0.1,0.22,0.4,0.6],'Forbes: 80% of callers who reach voicemail don\'t leave a message — they call the next contractor'),
      q('jobvalue','What is your average job contract value?','Estimate across repairs, re-roofs, and commercial',['Under $3,000','$3,000 – $8,000','$8,000 – $20,000','$20,000 – $50,000','Over $50,000'],[1500,5500,14000,35000,75000],'HomeAdvisor 2023: Average roof replacement $7,000–$14,000; commercial jobs $20,000–$100,000+'),
      q('estimates','How many estimates go unsent or uncontacted after initial inquiry per month?','Inquiries where you never got them an estimate, or sent one and never followed up',['0 – 2','3 – 8','8 – 20','20 – 40','40+'],[1,5.5,14,30,55],'Contractor data: 55% of contractor estimates that aren\'t followed up within 24 hours are awarded to competitors'),
      q('admin','Hours per week on admin, scheduling, and paperwork?','Proposals, contracts, invoicing, project updates, subcontractor coordination',['Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'NAHB 2022: Contractors spend avg 25–35% of their time on administrative and non-billable tasks'),
      q('followup','Do you have automated follow-up for estimates and leads that didn\'t close?','',[' No system','Occasional manual call','Basic email','Mostly automated','Fully automated'],[0,0.1,0.3,0.65,0.92],'Construction marketing: 70% of lost contractor bids could have been won with one additional follow-up contact'),
      q('insurance','How many insurance claim jobs do you handle per month?','Storm damage, hail, wind — insurance-funded repairs',['0','1 – 5','5 – 15','15 – 30','30+'],[0,3,10,22,45],'NOAA 2023: Hail and wind damage accounts for $15B+ in insurance claims annually; most homeowners don\'t initiate claims without contractor guidance'),
      q('scheduling','Hours per week on crew scheduling, material ordering, and project coordination?','',[' Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'NAHB: Project scheduling and coordination accounts for 15–20% of total project management time'),
      q('referrals','How many referrals do you receive from past customers per month?','',[' 0','1 – 3','3 – 7','7 – 15','15+'],[0,2,5,11,22],'Contractor data: Contractors with systematic post-project follow-up receive 3–5× more referrals than those without'),
      q('reviews','New online reviews per month?','Google, Houzz, BBB, Facebook',['0 – 1','2 – 4','5 – 10','10 – 20','20+'],[0.5,3,7,15,28],'BrightLocal 2023: 91% of consumers read contractor reviews before hiring; 4.5+ star average drives 35% more quote requests'),
    ],
    calculate: (a) => {
      const [leads,missed,jobVal,estimates,adminHrs,followup,insurance,schedulingHrs,referrals] = a;
      const { revLost, revGained } = baseRevenue(leads,1-missed,jobVal,followup,0.3);
      const estimateLoss = estimates*jobVal*0.4; const estGain = estimates*0.72*jobVal*0.45;
      const { wasted, saved } = baseTime(adminHrs,schedulingHrs);
      return {
        monthlyRevenueLost:Math.round(revLost+estimateLoss), monthlyRevenueGained:Math.round(revGained+estGain),
        yearlyRevenueLost:Math.round((revLost+estimateLoss)*12), yearlyRevenueGained:Math.round((revGained+estGain)*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Missed Calls & Slow Response',`$${fmt(leads*missed*jobVal*0.35)}/mo lost`,`+$${fmt(leads*missed*0.85*jobVal*0.45)}/mo recovered`,`${Math.round(leads*missed)} calls/month go unanswered. In roofing, the first contractor to pick up typically wins the job.`,'AI Receptionist answers every call, qualifies the lead (storm damage vs. standard repair), and schedules the estimate immediately'),
          pp('Uncontacted Estimate Drop-Off',`$${fmt(estimateLoss)}/mo lost`,`+$${fmt(estGain)}/mo recovered`,`${Math.round(estimates)} leads/month never got an estimate or got one with no follow-up. 55% of those went to whoever followed up.`,'Automated estimate delivery and multi-step follow-up sequences close 40–50% more bids without additional sales staff'),
          pp('Admin & Coordination Overhead',`${Math.round(wasted)} hrs/wk wasted`,`${Math.round(saved)} hrs/wk recovered`,`${Math.round(adminHrs+schedulingHrs)} hours/week on admin and scheduling. That\'s time not spent closing jobs or managing quality.`,'Automated project updates, crew scheduling notifications, and subcontractor coordination eliminate most manual coordination'),
          pp('Missed Referral Opportunities',`$${fmt(referrals*0.4*jobVal*0.1)}/mo missed`,`+$${fmt(referrals*0.5*jobVal*0.15)}/mo potential`,`Contractors with systematic follow-up receive 3–5× more referrals. Post-project automation captures the ones you\'re currently missing.`,'Post-project review requests, referral asks, and annual roof checkup reminders turn one job into three'),
        ],
        sources:['HomeAdvisor 2023: Average roof replacement $7,000–$14,000','Forbes: 80% of callers who reach voicemail call a competitor','Construction marketing: 70% of lost bids could be won with one more follow-up','NAHB 2022: Contractors spend 25–35% of time on non-billable admin','BrightLocal 2023: 91% read contractor reviews before hiring']
      };
    },
    automationPlan:[
      wf('Instant Lead Capture & Estimate Scheduling','critical','New inbound call or web form',['AI Receptionist answers 24/7, qualifies lead type (storm, repair, re-roof)','Estimate appointment scheduled on the spot','Estimator notified with lead details and job address','Pre-appointment follow-up sent to homeowner with what to expect','Post-estimate: proposal sent automatically with DocuSign link'],['AI Receptionist','Scheduling Automation','CRM Integration','E-Signature Platform'],'Capture 85% of leads currently going unanswered and cut estimate-to-signed-contract time by 60%'),
      wf('Insurance Claim Assistance Automation','high','Homeowner identified as potential insurance claim candidate',['Insurance claim education sequence sent (what they\'re owed, how the process works)','Free inspection offer with instant online booking','Adjuster appointment coordination managed automatically','Claim documentation and photo package delivered to homeowner','Supplement tracking and follow-up automated throughout'],['CRM Automation','Email + SMS Sequences','Document Automation','Calendar Integration'],'Convert 60% more storm-damage inquiries into insurance-funded jobs — the highest-margin work in roofing'),
      wf('Post-Job Referral & Review Engine','high','Job complete and final invoice paid',['Thank-you message within 24 hours of completion','Google review request sent at 48 hours with direct link','30-day check-in: "How\'s everything looking?"','Annual maintenance reminder sent at 11 months','Referral ask with neighbor discount offer at 60 days'],['SMS + Email Automation','Review Integration','CRM','Referral Tracking'],'Generate 3–5× more referrals and build the review volume that dominates local Google search results'),
    ]
  },

  {
    id: 'insurance',
    label: 'Insurance Agencies',
    icon: '🛡️',
    tier: 1,
    tagline: 'Independent Agents, Brokers & Agencies',
    questions: [
      q('leads','How many new prospect inquiries do you receive per month?','Calls, web forms, referrals, purchased leads',['Under 20','20 – 50','50 – 100','100 – 200','200+'],[10,35,75,150,300],'LIMRA 2023: Average independent insurance agent receives 40–80 new inquiries/month'),
      q('response','% responded to within same business day?','',[' Under 25%','25 – 50%','50 – 75%','75 – 90%','90%+'],[0.12,0.37,0.62,0.82,0.95],'Insurance marketing data: 78% of insurance consumers buy from the first agent who responds to their inquiry'),
      q('premium','What is your average annual premium per new policy written?','',[' Under $800','$800 – $1,500','$1,500 – $3,000','$3,000 – $6,000','Over $6,000'],[400,1100,2250,4500,9000],'IIABA 2023: Average independent agency premium per policy $1,200–$2,500 P&C; life/health varies widely'),
      q('retention','What is your annual policy renewal retention rate?','',[' Under 70%','70 – 80%','80 – 85%','85 – 90%','Over 90%'],[0.6,0.75,0.82,0.87,0.93],'IIABA 2023: Top-performing agencies retain 90%+ of policies annually; industry average is 82–84%'),
      q('renewals','How many policies are up for renewal each month that don\'t have proactive outreach?','Renewals where the client might shop around without hearing from you',['Under 10','10 – 30','30 – 70','70 – 150','150+'],[5,20,50,110,200],'Insurance data: Clients who receive renewal outreach are 60% less likely to shop competitors'),
      q('admin','Hours per week on administrative tasks?','Quoting, data entry, policy updates, certificate requests, client calls',['Under 10','10 – 20','20 – 35','35 – 50','50+'],[5,15,27,42,65],'Reagan Consulting 2022: Administrative overhead consumes 35–45% of agency staff time'),
      q('crosssell','What percentage of your clients have multiple policies with you?','Auto + home, business + life, etc.',['Under 20%','20 – 35%','35 – 50%','50 – 70%','Over 70%'],[0.1,0.27,0.42,0.6,0.78],'IIABA: Cross-sold clients have 90% retention vs 65% for single-policy clients — and generate 2.5× more revenue'),
      q('claims','Do you have an automated system to follow up with clients after they file a claim?','',[' Never','Occasionally','Yes — manually','Mostly automated','Fully automated'],[0,0.1,0.3,0.65,0.92],'J.D. Power 2023: Agents who proactively reach out during and after claims see 40% higher retention and 35% more referrals'),
      q('referrals','Monthly referrals from existing clients?','',[' 0','1 – 3','3 – 7','7 – 15','15+'],[0,2,5,11,22],'LIMRA: Referred clients have 37% higher retention rate and cost 80% less to acquire than purchased leads'),
      q('followup','Do you have automated follow-up for prospects who got a quote but didn\'t buy?','',[' No','Occasional manual call','Basic email','Mostly automated','Fully automated multi-step'],[0,0.1,0.3,0.65,0.92],'Insurance data: 62% of prospects who get a quote and don\'t buy immediately will purchase within 3 months if followed up with consistently'),
    ],
    calculate: (a) => {
      const [leads,response,premium,retention,renewals,adminHrs,crosssell,claims,referrals,followup] = a;
      const missedLeads = leads*(1-response); const lostRenewals = renewals*(1-retention)*premium;
      const revLost = (missedLeads*premium*0.3)+(lostRenewals/12)+(renewals*(1-crosssell)*premium*0.2/12);
      const revGained = (missedLeads*0.78*premium*0.4)+(renewals*(0.9-retention)*premium/12)+(renewals*(1-crosssell)*0.25*premium*0.35/12)+(referrals*0.5*premium*0.35);
      const { wasted, saved } = baseTime(adminHrs,5);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Lost Prospects — Slow Response',`$${fmt(missedLeads*premium*0.3)}/mo lost`,`+$${fmt(missedLeads*0.78*premium*0.4)}/mo recovered`,`78% of insurance buyers go with the first agent who responds. ${Math.round(missedLeads)} inquiries/month aren\'t getting same-day responses.`,'Automated instant response to every inquiry with quote request, calendar booking, and follow-up sequence'),
          pp('Policy Non-Renewal Loss',`$${fmt(lostRenewals/12)}/mo lost`,`+$${fmt(renewals*(0.9-retention)*premium/12)}/mo recovered`,`Your ${Math.round((1-retention)*100)}% lapse rate costs you ${Math.round(renewals*(1-retention))} policies/month. Proactive renewal outreach reduces churn by 60%.`,'Automated renewal campaigns starting 90 days out — SMS, email, and call reminders ensure no renewal catches a client off guard'),
          pp('Under-Penetrated Book of Business',`$${fmt(renewals*(1-crosssell)*premium*0.2/12)}/mo missed`,`+$${fmt(renewals*(1-crosssell)*0.25*premium*0.35/12)}/mo potential`,`Only ${Math.round(crosssell*100)}% of clients have multiple policies. Cross-sold clients retain at 90% vs 65% and generate 2.5× more revenue.`,'Automated cross-sell sequences triggered by life events (new home, new baby, business expansion) multiply revenue per client'),
          pp('Post-Quote Follow-Up Gap',`$${fmt(leads*(1-followup)*0.1*premium)}/mo lost`,`+$${fmt(leads*(1-followup)*0.6*premium*0.15)}/mo recovered`,`62% of prospects who get a quote and don\'t buy immediately will purchase within 3 months with consistent follow-up.`,'Multi-step quote follow-up sequences run automatically for 90 days — turning cold prospects into converted clients'),
        ],
        sources:['Insurance marketing data: 78% of consumers buy from the first agent who responds','IIABA 2023: Cross-sold clients retain at 90% vs 65% single-policy; 2.5× revenue','J.D. Power 2023: Post-claim follow-up drives 40% higher retention','LIMRA: Referred clients cost 80% less to acquire and retain 37% better','Reagan Consulting 2022: Admin overhead consumes 35–45% of agency staff time']
      };
    },
    automationPlan:[
      wf('Instant Quote Response & Nurture','critical','New prospect inquiry',['Inquiry acknowledged within 60 seconds','Quote request form sent instantly','Quote delivered automatically where possible (comparative rater integration)','If not immediate: follow-up at 2hr, 24hr, 72hr, 7 days, 30 days, 60 days, 90 days','Objection-handling content sent based on response patterns'],['AI Receptionist','Comparative Rater Integration','Email + SMS Sequences','CRM'],'Convert 40% more prospects from quote to policy — the highest-value automation for any insurance agency'),
      wf('Renewal Retention Campaign','critical','Policy approaching renewal (90 days out)',['90-day heads-up email with renewal date and current coverage summary','60-day: market review offer ("we\'ve shopped the market for you")','30-day: "Your renewal is coming up — any changes to review?"','14-day: SMS reminder with easy confirmation link','7-day: final outreach with direct agent contact'],['CRM Automation','Email + SMS','Policy Management Integration','Calendar Scheduling'],'Increase retention rate to 90%+ — each percentage point of retention is worth thousands in annual recurring revenue'),
      wf('Cross-Sell & Life Event Automation','high','Life event detected or annual review date reached',['New home purchase: homeowners quote automatically triggered','New vehicle: auto quote offered within 24 hours','Business registration: commercial lines outreach initiated','Annual review: comprehensive policy audit scheduled automatically','Life events monitored via CRM data and public records integration'],['CRM Integration','Life Event Triggers','Email + SMS Automation','Calendar Booking'],'Increase policies per client from 1.3 to 2.5+ — the most profitable growth lever in independent insurance'),
    ]
  },

  {
    id: 'financial-advisors',
    label: 'Financial Advisors',
    icon: '📈',
    tier: 1,
    tagline: 'RIAs, Wealth Managers & Financial Planners',
    questions: [
      q('prospects','New prospect inquiries per month?','Referrals, website, seminars, social media',['Under 5','5 – 15','15 – 30','30 – 60','60+'],[2,10,22,45,85],'Cerulli Associates 2023: Average RIA gets 70% of new clients from referrals; 10–15 new prospects/month typical'),
      q('response','% responded to within same business day?','',[' Under 25%','25 – 50%','50 – 75%','75 – 90%','90%+'],[0.12,0.37,0.62,0.82,0.95],'Financial advisor data: Prospects who receive same-day response convert at 3× the rate of those waited on'),
      q('aum','Average AUM per new client?','',[' Under $100K','$100K – $300K','$300K – $750K','$750K – $2M','Over $2M'],[50000,200000,525000,1375000,3500000],'Cerulli 2023: Median new client AUM for RIAs $250K–$500K; varies widely by firm positioning'),
      q('fee','What is your average annual advisory fee (% of AUM)?','',[' Under 0.5%','0.5 – 0.75%','0.75 – 1.0%','1.0 – 1.25%','Over 1.25%'],[0.004,0.006,0.0087,0.011,0.014],'Industry standard: Advisory fees typically 0.75–1.25% of AUM for full-service wealth management'),
      q('admin','Hours per week on non-revenue-generating admin?','Client communications, scheduling, compliance documentation, reporting prep',['Under 5','5 – 10','10 – 20','20 – 35','35+'],[3,7,15,27,45],'InvestmentNews 2022: Advisors spend avg 40% of their time on admin tasks vs. revenue-generating client activities'),
      q('clientmeetings','How many client review meetings do you hold per month?','',[' Under 10','10 – 25','25 – 50','50 – 100','100+'],[5,17,37,75,150],'CFP Board: Best practice is semi-annual reviews for all clients; most advisors fall short due to scheduling burden'),
      q('referrals','Monthly referrals from existing clients?','',[' 0','1 – 2','3 – 5','5 – 10','10+'],[0,1.5,4,7.5,14],'Advisor data: Only 29% of clients who would refer their advisor ever actually do — the gap is the advisor never asked'),
      q('followup','Do you have automated follow-up for prospects who didn\'t immediately engage?','',[' No','Occasional outreach','Basic email nurture','Mostly automated','Fully automated drip'],[0,0.1,0.3,0.65,0.92],'Financial planning data: 45% of prospects who initially decline engage within 6 months with consistent, value-add follow-up'),
      q('reporting','Hours per week on client reporting, portfolio review prep, and statement generation?','',[' Under 3','3 – 7','7 – 15','15 – 25','25+'],[2,5,11,20,32],'Orion/Redtail data: Reporting and prep consumes 15–25% of advisor operational hours'),
      q('compliance','Hours per week on compliance documentation and audit trail maintenance?','',[' Under 2','2 – 5','5 – 10','10 – 20','20+'],[1,3.5,7.5,15,25],'SEC compliance data: RIAs spend avg 6–12% of operational time on compliance documentation'),
    ],
    calculate: (a) => {
      const [prospects,response,aum,fee,adminHrs,clientMeetings,referrals,followup,reportingHrs,complianceHrs] = a;
      const annualRevPerClient = aum*fee; const missedProspects = prospects*(1-response);
      const revLost = (missedProspects*annualRevPerClient*0.2)+(referrals*0.7*annualRevPerClient*0.15);
      const revGained = (missedProspects*0.75*annualRevPerClient*0.35)+(referrals*0.5*annualRevPerClient*0.25);
      const wasted = adminHrs+reportingHrs+complianceHrs; const saved = (adminHrs*0.65)+(reportingHrs*0.72)+(complianceHrs*0.50);
      return {
        monthlyRevenueLost:Math.round(revLost/12), monthlyRevenueGained:Math.round(revGained/12),
        yearlyRevenueLost:Math.round(revLost), yearlyRevenueGained:Math.round(revGained),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Slow Prospect Response',`$${fmt(missedProspects*annualRevPerClient*0.2/12)}/mo lost`,`+$${fmt(missedProspects*0.75*annualRevPerClient*0.35/12)}/mo recovered`,`${Math.round(missedProspects)} prospects/month not getting same-day responses. In wealth management, speed signals professionalism.`,'Automated prospect acknowledgment, intake questionnaire, and discovery call scheduling — all within minutes of first contact'),
          pp('Untapped Referral Network',`$${fmt(referrals*0.7*annualRevPerClient*0.15/12)}/mo missed`,`+$${fmt(referrals*0.5*annualRevPerClient*0.25/12)}/mo potential`,`Only 29% of clients who would refer ever actually do — the advisor never asked. Systematic referral requests fix this.`,'Automated referral ask sequences after positive reviews and major life milestones — "Do you know anyone in a similar situation?"'),
          pp('Admin Consuming Client Time',`${Math.round(wasted)} hrs/wk wasted`,`${Math.round(saved)} hrs/wk recovered`,`${Math.round(adminHrs+reportingHrs)} hours/week on admin and reporting. Every hour here is an hour not spent deepening client relationships.`,'Automated reporting, meeting prep, and compliance documentation free 65–72% of your administrative time'),
          pp('Prospect Follow-Up Gap',`$${fmt(prospects*(1-followup)*annualRevPerClient*0.05/12)}/mo lost`,`+$${fmt(prospects*(1-followup)*0.4*annualRevPerClient*0.12/12)}/mo recovered`,`45% of prospects who initially decline engage within 6 months with consistent follow-up. Most advisors give up after 1–2 touches.`,'Automated value-add drip sequences (market insights, planning tips) maintain top-of-mind without feeling sales-y'),
        ],
        sources:['Cerulli Associates 2023: 70% of RIA new clients from referrals','InvestmentNews 2022: Advisors spend 40% of time on non-revenue admin','Advisor survey: Only 29% of clients who would refer their advisor ever actually do','Financial planning data: 45% of declined prospects engage within 6 months with consistent follow-up','CFP Board: Semi-annual reviews recommended; most advisors fall short due to scheduling burden']
      };
    },
    automationPlan:[
      wf('Prospect Onboarding & Nurture System','critical','New prospect inquiry or referral introduction',['Prospect acknowledged within 30 minutes','Risk tolerance questionnaire and financial snapshot form sent','Discovery call scheduled automatically in advisor\'s calendar','Pre-meeting research packet prepared automatically from questionnaire','Post-meeting: proposal, next steps, and engagement agreement sent'],['CRM Automation','Scheduling Integration','Client Portal','Document Automation'],'Convert 35% more prospects to engaged clients with a frictionless, impressive first experience'),
      wf('Systematic Referral Generation','high','Client annual review completed or positive feedback received',['Post-review satisfaction survey sent within 24 hours','High-satisfaction clients receive referral ask at 48 hours','Personalized referral introduction template provided','Referred prospect receives white-glove welcome from advisor','Referring client receives thank-you note + gifting trigger'],['CRM Automation','Email Automation','Referral Tracking','Gift/Card Integration'],'Double referral rate from existing book of business — the lowest-cost, highest-quality new client source'),
      wf('Automated Reporting & Compliance','medium','Monthly/quarterly reporting cycle or compliance review date',['Client performance reports generated and personalized automatically','Meeting prep packages assembled with updated portfolio data','Regulatory documentation filed and audit trail maintained automatically','Client birthday and milestone messages sent automatically','Annual planning questionnaire sent 30 days before review meeting'],['Portfolio Management Integration','CRM Automation','Compliance Platform','Email Automation'],'Reclaim 65–72% of administrative time — hours that flow directly into revenue-generating client relationships'),
    ]
  },

  // ── TIER 2 NICHES ─────────────────────────────────────────

  ...([
    { id:'mortgage', label:'Mortgage Brokers', icon:'🏦', tier:2, tagline:'Originators, Brokers & Lenders',
      avgTicket:4200, ticketLabel:'average commission per funded loan', niche:'mortgage',
      q1:'Loan applications or pre-approval inquiries per month?', q2:'Average commission per funded loan?',
      q2opts:['Under $1,500','$1,500 – $3,000','$3,000 – $6,000','$6,000 – $12,000','Over $12,000'], q2vals:[750,2250,4500,9000,18000],
      q3:'Hours per week on loan status updates, document requests, and borrower communication?',
      src1:'NMLS 2023: Average loan officer originates 5–8 loans/month', src2:'MBA 2023: Average mortgage broker commission 1–2% of loan amount',
      customPP:'Borrower Document Follow-Up',customPPDesc:'Document collection bottlenecks are the #1 cause of loan delays and fall-throughs. Automated document request sequences collect missing items 70% faster.',
      sources:['MBA 2023: Average mortgage commission 1–2% of loan amount','NMLS 2023: 40% of loan fall-throughs due to slow document collection','Mortgage marketing: Speed of response is the #1 factor in lender selection for 65% of borrowers']
    },
    { id:'auto-dealers', label:'Auto Dealerships', icon:'🚗', tier:2, tagline:'New, Used & Independent Dealers',
      avgTicket:2800, ticketLabel:'average gross profit per vehicle sold', niche:'auto dealer',
      q1:'Internet leads, calls, and walk-ins per month?', q2:'Average gross profit per vehicle?',
      q2opts:['Under $1,000','$1,000 – $2,000','$2,000 – $4,000','$4,000 – $8,000','Over $8,000'], q2vals:[500,1500,3000,6000,12000],
      q3:'Hours per week on lead follow-up, appointment setting, and CRM management?',
      src1:'Cox Automotive 2023: Average dealer receives 200–400 internet leads/month', src2:'NADA 2023: Average new vehicle gross profit $1,500–$3,000; used $2,000–$4,000',
      customPP:'Lead Response Speed',customPPDesc:'Automotive study: 50% of car buyers purchase from the first dealer who contacts them. Speed of first response is the #1 purchase driver.',
      sources:['Cox Automotive 2023: 50% of buyers purchase from first dealer who contacts them','NADA 2023: Dealers receive avg 200–400 internet leads/month','Auto marketing: 78% of internet leads are also submitted to 3+ other dealers simultaneously']
    },
    { id:'gyms', label:'Gyms & Fitness Studios', icon:'💪', tier:2, tagline:'Gyms, CrossFit, Yoga, Pilates & Boutique Studios',
      avgTicket:65, ticketLabel:'average monthly membership value', niche:'gym',
      q1:'New member inquiries or trial requests per month?', q2:'Average monthly membership value?',
      q2opts:['Under $30','$30 – $60','$60 – $100','$100 – $200','Over $200'], q2vals:[20,45,80,150,300],
      q3:'Hours per week on member communication, class scheduling, and admin?',
      src1:'IHRSA 2023: Average gym new member inquiry volume 50–150/month', src2:'IHRSA 2023: Average gym member churn rate 28–32% annually',
      customPP:'Member Churn Prevention',customPPDesc:'IHRSA 2023: 50% of gym members who cancel would have stayed with proactive check-in and engagement. Automated at-risk member detection and re-engagement saves the membership before they cancel.',
      sources:['IHRSA 2023: Average gym churn rate 28–32% annually; at-risk detection reduces churn by 40%','Fitness marketing: 68% of gym trials that don\'t convert would have with a follow-up sequence','IHRSA: Members referred by friends retain 37% longer than non-referred members']
    },
    { id:'property-mgmt', label:'Property Management', icon:'🏢', tier:2, tagline:'Residential, Commercial & HOA Management',
      avgTicket:175, ticketLabel:'average monthly management fee per unit', niche:'property management',
      q1:'New owner or investor inquiries per month?', q2:'Average monthly management fee per unit?',
      q2opts:['Under $75','$75 – $125','$125 – $200','$200 – $350','Over $350'], q2vals:[40,100,162,275,500],
      q3:'Hours per week on maintenance coordination, tenant communication, and owner reporting?',
      src1:'NARPM 2023: Average property manager handles 100–200 units', src2:'NARPM 2023: Average management fee 8–12% of monthly rent',
      customPP:'Tenant Maintenance Response Time',customPPDesc:'NARPM data: Tenants who receive maintenance updates within 4 hours renew at 45% higher rates. Automated maintenance tracking and communication is the #1 retention tool.',
      sources:['NARPM 2023: Tenants who get fast maintenance responses renew at 45% higher rates','Property management data: 60% of tenant churn is preventable with proactive communication','NARPM: Average tenant acquisition cost $500–$1,500 — retention is always cheaper than replacement']
    },
    { id:'chiro-pt', label:'Chiropractic & Physical Therapy', icon:'🦴', tier:2, tagline:'Chiropractors, PTs, Sports Medicine & Rehab',
      avgTicket:165, ticketLabel:'average revenue per patient visit', niche:'chiro/PT',
      q1:'New patient inquiries per month?', q2:'Average revenue per patient visit?',
      q2opts:['Under $80','$80 – $130','$130 – $200','$200 – $350','Over $350'], q2vals:[50,105,165,275,500],
      q3:'Hours per week on scheduling, patient reminders, and insurance admin?',
      src1:'ACA 2023: Average chiro practice sees 100–200 visits/month', src2:'PT industry data: Patient no-show rates avg 15–25%; reminders reduce by 60%',
      customPP:'Care Plan Completion Rate',customPPDesc:'Chiro/PT data: Only 35% of patients complete their recommended care plan. Automated care plan reminder sequences increase completion to 60%+ — better outcomes AND more revenue.',
      sources:['ACA 2023: Only 35% of chiro patients complete recommended care plans without follow-up','PT data: Automated reminders reduce no-shows by 60% and increase plan completion by 40%','Healthcare marketing: Referred patients retain 3× longer than non-referred patients']
    },
    { id:'plumbing-electrical', label:'Plumbing & Electrical', icon:'⚡', tier:2, tagline:'Licensed Plumbers, Electricians & Trades',
      avgTicket:420, ticketLabel:'average job ticket value', niche:'plumbing/electrical',
      q1:'Inbound service calls per month?', q2:'Average job ticket value?',
      q2opts:['Under $150','$150 – $300','$300 – $600','$600 – $1,500','Over $1,500'], q2vals:[80,225,450,1050,2500],
      q3:'Hours per week on scheduling, dispatch, and job coordination?',
      src1:'HomeAdvisor 2023: Average plumbing job $175–$450; electrical $150–$500', src2:'Service industry: 78% of trade service calls go to the first company that answers',
      customPP:'After-Hours Emergency Capture',customPPDesc:'Emergency plumbing and electrical calls convert at 3× the rate of standard service calls. 30% of these calls come after hours — AI answering captures all of them.',
      sources:['HomeAdvisor 2023: Emergency trade calls convert at 3× standard rate','Forbes: 80% of callers who reach voicemail don\'t leave a message','ServiceTitan 2022: Trade businesses that answer 24/7 see 40% higher revenue than those that don\'t']
    },
    { id:'marketing-agency', label:'Marketing Agencies', icon:'📣', tier:2, tagline:'Digital Marketing, SEO, Ads & Creative Agencies',
      avgTicket:3200, ticketLabel:'average monthly retainer value', niche:'marketing agency',
      q1:'New business inquiries per month?', q2:'Average monthly retainer value?',
      q2opts:['Under $1,000','$1,000 – $2,500','$2,500 – $5,000','$5,000 – $10,000','Over $10,000'], q2vals:[500,1750,3750,7500,15000],
      q3:'Hours per week on client reporting, account management admin, and internal communication?',
      src1:'Agency management data: Average agency churn rate 25–35% annually', src2:'Agency survey: 60% of client churn is driven by communication gaps, not results',
      customPP:'Client Reporting Automation',customPPDesc:'Agency survey: 60% of client churn is due to communication gaps — not performance. Automated monthly reporting with context and next steps increases retention by 35%.',
      sources:['Agency survey: 60% of client churn driven by communication gaps, not results','HubSpot 2023: Agencies with automated reporting save avg 8 hours/client/month','Marketing agency data: Referred clients have 50% lower churn rate and higher lifetime value']
    },
    { id:'accounting', label:'Accounting & Bookkeeping', icon:'📊', tier:2, tagline:'CPAs, Bookkeepers & Tax Professionals',
      avgTicket:750, ticketLabel:'average monthly recurring client value', niche:'accounting',
      q1:'New client inquiries per month?', q2:'Average monthly client value?',
      q2opts:['Under $200','$200 – $500','$500 – $1,000','$1,000 – $2,500','Over $2,500'], q2vals:[100,350,750,1750,4000],
      q3:'Hours per week on client communication, document collection, and admin?',
      src1:'AICPA 2023: Average CPA firm loses 15–25% of clients annually to competitors who are more responsive', src2:'Accounting data: Document collection bottlenecks cost firms avg 6–10 hours per client per month',
      customPP:'Document Collection Bottlenecks',customPPDesc:'Accounting firms lose an average of 6–10 hours/client/month chasing missing documents. Automated document request sequences collect information 70% faster with half the follow-up.',
      sources:['AICPA 2023: Average CPA firm loses 15–25% of clients to more responsive competitors','Accounting data: Document bottlenecks cost 6–10 hours/client/month','Intuit 2022: 45% of small business accounting clients want more proactive communication from their accountant']
    },
    { id:'landscaping', label:'Landscaping & Lawn Care', icon:'🌿', tier:2, tagline:'Landscaping, Lawn Maintenance & Outdoor Services',
      avgTicket:280, ticketLabel:'average job value', niche:'landscaping',
      q1:'Inbound inquiries per month?', q2:'Average job value (or monthly maintenance value)?',
      q2opts:['Under $100','$100 – $200','$200 – $400','$400 – $800','Over $800'], q2vals:[60,150,300,600,1200],
      q3:'Hours per week on scheduling, routing, and customer communication?',
      src1:'PLANET 2023: Average landscaping company receives 40–80 inquiries/month', src2:'Lawn care industry: 65% of lost lawn care customers leave due to lack of communication, not price',
      customPP:'Seasonal Maintenance Retention',customPPDesc:'Lawn care data: Customers contacted proactively for spring/fall service renewal retain at 80% vs 45% for those who have to call in. Automated seasonal renewal campaigns run themselves.',
      sources:['PLANET 2023: 65% of lost lawn care customers leave due to lack of communication','Lawn care data: Proactive renewal outreach increases retention from 45% to 80%','Industry data: Referred lawn care clients have 2.5× higher lifetime value and churn at half the rate']
    },
    { id:'veterinary', label:'Veterinary Clinics', icon:'🐾', tier:2, tagline:'General Practice, Emergency & Specialty Vet',
      avgTicket:215, ticketLabel:'average revenue per visit', niche:'veterinary',
      q1:'Patient visits per month?', q2:'Average revenue per visit?',
      q2opts:['Under $100','$100 – $175','$175 – $300','$300 – $500','Over $500'], q2vals:[60,137,237,400,750],
      q3:'Hours per week on appointment reminders, prescription refills, and client communication?',
      src1:'AVMA 2023: Vet practices see avg 20–35% no-show rate; reminders reduce by 60%', src2:'Vet industry: Pet owners with automated wellness reminders visit 40% more frequently',
      customPP:'Preventive Care Recall',customPPDesc:'AVMA data: Pet owners who receive automated wellness reminders visit 40% more frequently and spend 35% more annually. Annual wellness visits are the most predictable revenue in veterinary practice.',
      sources:['AVMA 2023: Practices with automated reminders see 40% more frequent visits','Vet industry: Pet owners spend 35% more annually when engaged with preventive care reminders','AVMA: No-show rates average 20–35%; reminders reduce by 60%']
    },
    { id:'ecommerce', label:'E-Commerce', icon:'🛒', tier:2, tagline:'Online Retail, DTC Brands & Shopify Stores',
      avgTicket:85, ticketLabel:'average order value', niche:'e-commerce',
      q1:'Monthly website visitors?', q2:'Average order value?',
      q2opts:['Under $40','$40 – $80','$80 – $150','$150 – $300','Over $300'], q2vals:[25,60,115,225,500],
      q3:'Hours per week on customer service, order issues, and returns management?',
      src1:'Baymard Institute 2023: Average cart abandonment rate 70.19%', src2:'Klaviyo 2023: Email automation generates avg 30% of total e-commerce revenue',
      customPP:'Cart Abandonment Recovery',customPPDesc:'Baymard Institute: 70% of shopping carts are abandoned. Automated recovery sequences (email + SMS) recover 10–15% of those carts — often the highest-ROI automation in e-commerce.',
      sources:['Baymard Institute 2023: Average cart abandonment rate 70.19%','Klaviyo 2023: Email automation generates 30% of e-commerce revenue on average','E-commerce data: Post-purchase sequences increase repeat purchase rate by 40%']
    },
  ].map(n => ({
    id: n.id, label: n.label, icon: n.icon, tier: n.tier, tagline: n.tagline,
    questions: [
      q('leads', n.q1, 'Include all channels and sources', ['Under 20','20 – 50','50 – 100','100 – 200','200+'], [10,35,75,150,300], n.src1),
      q('response','% of inquiries responded to within same business day?', '', ['Under 25%','25 – 50%','50 – 75%','75 – 90%','90%+'], [0.12,0.37,0.62,0.82,0.95], 'Industry data: Same-day response increases conversion rate by 2–4× across all service businesses'),
      q('avgval', `What is your ${n.ticketLabel}?`, '', n.q2opts, n.q2vals, n.src2),
      q('admin', 'Hours per week on administrative tasks?', 'Scheduling, follow-up, data entry, reporting', ['Under 5','5 – 10','10 – 20','20 – 35','35+'], [3,7,15,27,45], 'McKinsey: 60% of businesses have 30%+ of tasks that are automatable'),
      q('followup', 'How automated is your lead/customer follow-up system?', '', ['No system','Occasional manual outreach','Basic CRM reminders','Mostly automated','Fully automated sequences'], [0,0.1,0.3,0.65,0.92], 'Marketing Donut: 80% of sales require 5+ follow-ups; 44% of businesses give up after 1 attempt'),
      q('afterhours', 'How are after-hours inquiries handled?', 'Evenings, weekends, holidays', ['Go unanswered','Check next morning','Same-day response','Automated response','24/7 AI coverage'], [0,0.1,0.3,0.75,0.97], 'Industry data: 30–40% of service inquiries arrive outside business hours'),
      q('scheduling', 'Hours per week on scheduling and booking coordination?', '', ['Under 3','3 – 7','7 – 15','15 – 25','25+'], [2,5,11,20,32], 'Operations data: Scheduling and coordination consumes 20–30% of office staff time in most service businesses'),
      q('retention', '% of customers who return for repeat business within 12 months?', '', ['Under 20%','20 – 40%','40 – 60%','60 – 80%','Over 80%'], [0.1,0.3,0.5,0.7,0.88], 'Bain & Company: Increasing customer retention by 5% increases profits by 25–95%'),
      q('referrals', 'Monthly referrals from existing customers?', '', ['0','1 – 3','3 – 7','7 – 15','15+'], [0,2,5,11,22], 'Nielsen: 92% of consumers trust referrals from people they know — referred customers convert at 4× the rate of cold leads'),
      q('reviews', 'New online reviews per month?', '', ['0 – 1','2 – 4','5 – 10','10 – 20','20+'], [0.5,3,7,15,28], 'BrightLocal 2023: Businesses with 50+ reviews earn significantly more than those with under 10 — volume matters as much as rating'),
    ],
    calculate: (a) => {
      const [leads,response,avgVal,adminHrs,followup,afterHours,schedulingHrs,retention,referrals] = a;
      const { revLost, revGained } = baseRevenue(leads,response,avgVal,followup,afterHours);
      const retentionLoss = leads*(1-retention)*avgVal*0.3;
      const { wasted, saved } = baseTime(adminHrs,schedulingHrs);
      return {
        monthlyRevenueLost:Math.round(revLost+retentionLoss*0.1), monthlyRevenueGained:Math.round(revGained+retentionLoss*0.08),
        yearlyRevenueLost:Math.round((revLost+retentionLoss*0.1)*12), yearlyRevenueGained:Math.round((revGained+retentionLoss*0.08)*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Slow or Missed Responses',`$${fmt(leads*(1-response)*avgVal*0.06)}/mo lost`,`+$${fmt(leads*(1-response)*0.8*avgVal*0.12)}/mo recovered`,`${Math.round(leads*(1-response))} inquiries/month not receiving same-day responses. Same-day response increases conversion by 2–4×.`,'AI Receptionist or automated response system acknowledges every inquiry within minutes and routes to the right person instantly'),
          pp('Weak Follow-Up System',`$${fmt(leads*(1-followup)*avgVal*0.04)}/mo lost`,`+$${fmt(leads*(1-followup)*0.75*avgVal*0.08)}/mo recovered`,`${Math.round((1-followup)*100)}% of your follow-up is still manual. 80% of sales require 5+ touches.`,'Automated multi-step sequences via SMS and email run indefinitely without any manual work — until the lead responds or buys'),
          pp('After-Hours Blind Spot',`$${fmt(leads*0.33*(1-afterHours)*avgVal*0.05)}/mo lost`,`+$${fmt(leads*0.33*(1-afterHours)*0.85*avgVal*0.09)}/mo recovered`,`~33% of inquiries arrive outside business hours. Without an automated response, those go straight to a competitor.`,'24/7 automated response captures every after-hours inquiry and queues them for next-business-day follow-up'),
          pp(n.customPP || 'Customer Retention Gap',`$${fmt(retentionLoss*0.1)}/mo lost`,`+$${fmt(retentionLoss*0.08)}/mo recovered`,n.customPPDesc || `${Math.round((1-retention)*100)}% of customers aren\'t returning. Systematic re-engagement automation brings them back.`,'Automated re-engagement sequences, loyalty rewards, and check-in campaigns increase repeat business by 35–50%'),
        ],
        sources: n.sources || ['McKinsey 2023: 60% of occupations have 30%+ of tasks automatable','Marketing Donut: 80% of sales require 5+ follow-ups; 44% give up after 1','Bain & Company: 5% retention improvement increases profits by 25–95%','BrightLocal 2023: Local businesses with 50+ reviews earn significantly more','Nielsen: Referred customers convert at 4× the rate of cold leads']
      };
    },
    automationPlan:[
      wf('Instant Response & Lead Nurture','critical','New inquiry from any channel',['Inquiry acknowledged within 60–120 seconds 24/7','Qualification questions sent automatically','Appointment or next step booked directly','Hot leads routed to team immediately','Cold leads enter automated nurture sequence'],['AI Receptionist / Chatbot','CRM Integration','SMS + Email Automation','Scheduling Tool'],'Capture every lead at the moment of highest intent — when they first reach out'),
      wf('Follow-Up Automation Engine','high','Lead or prospect doesn\'t immediately convert',['Day 1: Personalized follow-up with relevant value content','Day 3: Social proof + specific next step offered','Day 7: Different channel (if email, try SMS)','Day 14: Final check-in with easy opt-out','Responders routed to appointment booking automatically'],['CRM Automation','Email + SMS Sequences','Lead Scoring','Calendar Integration'],'Work every lead in your pipeline systematically without adding any manual effort'),
      wf('Customer Retention & Referral Engine','high','Customer completes service or purchase',['Thank-you message within 2 hours','Review request at 24–48 hours with direct link','30-day check-in and satisfaction check','60-day referral ask with incentive','Annual re-engagement and upsell offer'],['CRM Automation','SMS + Email','Review Platform Integration','Referral Tracking'],'Turn every completed transaction into reviews, referrals, and repeat business automatically'),
    ]
  }))),

  // ── TIER 3 NICHES ─────────────────────────────────────────
  ...([
    { id:'restaurants', label:'Restaurants & Food Service', icon:'🍽️', tier:3, tagline:'Restaurants, Cafes, Catering & Food Businesses', avgTicket:52, src1:'Restaurant industry: Online reservation abandonment rate 35% when response is slow', src2:'Toast 2023: Restaurants using automated review responses see 30% more repeat visits' },
    { id:'salons-spas', label:'Salons & Spas', icon:'💅', tier:3, tagline:'Hair Salons, Day Spas, Nail Studios & Med Spas', avgTicket:90, src1:'Mindbody 2023: 40% of salon bookings happen outside business hours', src2:'Salon data: Clients who receive automated rebooking reminders visit 35% more frequently' },
    { id:'cleaning', label:'Cleaning Services', icon:'✨', tier:3, tagline:'Residential, Commercial & Specialty Cleaning', avgTicket:185, src1:'Cleaning industry: 70% of recurring clients cancel due to lack of communication, not quality', src2:'Service data: Automated follow-up converts 45% of one-time cleaning clients into recurring contracts' },
    { id:'coaching', label:'Coaching & Consulting', icon:'🎯', tier:3, tagline:'Business Coaches, Life Coaches & Independent Consultants', avgTicket:4500, src1:'ICF 2023: 60% of coaching clients found their coach through referral', src2:'Coaching data: Average discovery call show rate 55%; reminders increase to 85%' },
    { id:'events', label:'Event Planning', icon:'🎉', tier:3, tagline:'Wedding Planners, Corporate Events & Coordinators', avgTicket:7500, src1:'Event industry: First responder wins the contract 65% of the time', src2:'Eventbrite 2023: Post-event follow-up increases repeat booking rate by 40%' },
    { id:'photography', label:'Photography & Videography', icon:'📸', tier:3, tagline:'Wedding, Commercial, Portrait & Video Production', avgTicket:1800, src1:'Photography data: 72% of photography inquiries also contact 3+ other photographers', src2:'Industry data: Automated galleries and review requests generate 3× more referrals' },
  ].map(n => ({
    id: n.id, label: n.label, icon: n.icon, tier: n.tier, tagline: n.tagline,
    questions: [
      q('leads','Monthly inquiries, bookings, or customer contacts?', '', ['Under 20','20 – 60','60 – 150','150 – 300','300+'], [10,40,105,225,450], n.src1),
      q('response','% getting a same-day response?', '', ['Under 25%','25 – 50%','50 – 75%','75 – 90%','90%+'], [0.12,0.37,0.62,0.82,0.95], 'Industry data: First-responder advantage is significant in every service business'),
      q('avgval','Average transaction or booking value?', '', ['Under $75','$75 – $200','$200 – $500','$500 – $1,500','Over $1,500'], [40,137,350,1000,2500], n.src2),
      q('admin','Hours/week on administrative tasks?', '', ['Under 5','5 – 10','10 – 20','20 – 35','35+'], [3,7,15,27,45], 'McKinsey: Most service businesses have 30%+ of admin tasks that are automatable'),
      q('followup','How automated is your follow-up?', '', ['No system','Occasional manual','Basic reminders','Mostly automated','Fully automated'], [0,0.1,0.3,0.65,0.92], '80% of bookings require multiple touchpoints; most businesses give up too early'),
      q('afterhours','After-hours inquiry handling?', '', ['Go unanswered','Next morning','Same-day','Automated','24/7 coverage'], [0,0.1,0.3,0.75,0.97], '30–40% of consumer inquiries arrive outside business hours'),
      q('scheduling','Hours/week on scheduling and booking?', '', ['Under 3','3 – 7','7 – 15','15 – 25','25+'], [2,5,11,20,32], 'Scheduling and booking admin consumes 20–30% of service business operational time'),
      q('retention','% of customers who return or book again within 12 months?', '', ['Under 20%','20 – 40%','40 – 60%','60 – 80%','Over 80%'], [0.1,0.3,0.5,0.7,0.88], 'Bain & Company: 5% improvement in retention increases profits by 25–95%'),
    ],
    calculate: (a) => {
      const [leads,response,avgVal,adminHrs,followup,afterHours,schedulingHrs,retention] = a;
      const { revLost, revGained } = baseRevenue(leads,response,avgVal,followup,afterHours);
      const { wasted, saved } = baseTime(adminHrs,schedulingHrs,2);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Slow or Missed Responses',`$${fmt(leads*(1-response)*avgVal*0.05)}/mo lost`,`+$${fmt(leads*(1-response)*0.8*avgVal*0.1)}/mo recovered`,`${Math.round(leads*(1-response))} inquiries/month not getting same-day responses. The first business to respond wins the booking.`,'Instant automated responses acknowledge every inquiry within minutes — 24/7, even when you\'re busy with other clients'),
          pp('Manual Follow-Up Bottleneck',`$${fmt(leads*(1-followup)*avgVal*0.04)}/mo lost`,`+$${fmt(leads*(1-followup)*0.7*avgVal*0.07)}/mo recovered`,`${Math.round((1-followup)*100)}% of your follow-up relies on you remembering to do it. Most don\'t happen.`,'Automated sequences follow up via SMS and email on a perfect schedule — no leads fall through the cracks'),
          pp('After-Hours Inquiries Lost',`$${fmt(leads*0.33*(1-afterHours)*avgVal*0.05)}/mo lost`,`+$${fmt(leads*0.33*(1-afterHours)*0.82*avgVal*0.08)}/mo recovered`,`~33% of inquiries arrive outside business hours and go completely unanswered until the next day — if at all.`,'24/7 automated response captures every after-hours inquiry immediately while intent is highest'),
          pp('Repeat Business Gap',`$${fmt(leads*(1-retention)*avgVal*0.08)}/mo missed`,`+$${fmt(leads*(1-retention)*0.4*avgVal*0.1)}/mo potential`,`Only ${Math.round(retention*100)}% of your customers return within 12 months. Retention automation significantly improves this.`,'Post-service check-ins, review requests, referral asks, and re-booking prompts run automatically after every transaction'),
        ],
        sources:[n.src1, n.src2, 'McKinsey 2023: 60% of occupations have 30%+ automatable tasks', 'Bain & Company: 5% retention improvement increases profits by 25–95%', 'BrightLocal 2023: Online reviews significantly impact local business revenue']
      };
    },
    automationPlan:[
      wf('Instant Response & Booking System','critical','New inquiry via any channel', ['Inquiry acknowledged within 2 minutes 24/7','Availability and pricing info sent automatically','Booking link or calendar offered immediately','Confirmation and pre-appointment info sent','Reminder sequence started automatically'], ['AI Chatbot / Receptionist','Online Booking Integration','SMS + Email Automation','CRM'], 'Capture every inquiry at peak intent and convert it into a confirmed booking'),
      wf('Follow-Up & Conversion Sequence','high','Inquiry received but not immediately converted', ['24hr follow-up with social proof and testimonials','72hr: specific availability offered with urgency','7-day: final check-in with easy booking link','Accepted: deposit link + welcome sequence launched','Declined: quarterly re-engagement added to CRM'], ['Email + SMS Automation','CRM Tagging','Booking Integration','Payment Platform'], 'Convert 25–40% more inquiries into booked appointments with zero additional manual effort'),
      wf('Review & Referral Engine','medium','Service completed or event delivered', ['Thank-you message within 24 hours','Review request with direct link at 48 hours','30-day check-in and satisfaction survey','60-day referral ask with incentive','Annual re-booking prompt sent at 11 months'], ['SMS + Email Automation','Review Platform Integration','CRM','Referral Tracking'], 'Systematically build online reputation and generate referrals from every completed job'),
    ]
  }))),

  {
    id: 'other',
    label: 'Other / General Business',
    icon: '🔧',
    tier: 3,
    tagline: 'Any Industry Not Listed Above',
    questions: [
      q('leads','How many inbound leads or inquiries do you receive per month?','Include calls, web form submissions, social media messages, referrals, and walk-ins',['Under 10','10 – 30','30 – 60','60 – 120','120+'],[5,20,45,90,180],'Harvard Business Review: Average small business receives 30–50 inbound inquiries per month across all channels'),
      q('response','What percentage of new leads receive a response within the same business day?','Be honest — delayed responses are the #1 reason leads go cold',['Less than 25%','25 – 50%','50 – 75%','75 – 90%','90% or more'],[0.12,0.37,0.62,0.82,0.95],'MIT/InsideSales.com: Leads contacted within 5 minutes convert 9× better than those reached after 30 minutes; same-day responses outperform next-day by 4×'),
      q('avgval','What is your average transaction or job value?','Estimate the typical revenue you receive per customer transaction or project',['Under $100','$100 – $500','$500 – $2,000','$2,000 – $10,000','Over $10,000'],[60,300,1250,6000,18000],'SCORE 2023: Average small business transaction value varies widely by industry; general service businesses average $500–$2,500'),
      q('admin','How many hours per week do you spend on administrative tasks?','Emails, scheduling, invoicing, data entry, follow-ups — anything not directly serving clients',['Under 5','5 – 10','10 – 20','20 – 30','30+'],[3,7,15,25,40],'McKinsey 2022: Small business owners spend an average of 40% of their time on administrative tasks that could be automated'),
      q('followup','How automated is your follow-up process for leads that didn\'t immediately convert?','Manual = you personally reach out; automated = software handles it on a schedule',['No follow-up system','Occasional manual outreach','Basic reminders only','Mostly automated','Fully automated sequences'],[0,0.1,0.3,0.65,0.92],'Marketing Donut: 80% of sales require 5+ follow-up contacts; 44% of sales reps give up after just one attempt'),
      q('afterhours','How do you handle leads and inquiries that come in after business hours?','Evenings, weekends, and holidays',['They go unanswered','I check in the morning','I try to respond same-day','Automated response sent','24/7 automated coverage'],[0,0.1,0.35,0.78,0.97],'Drift 2022: 33% of all business inquiries are submitted outside normal business hours; 82% of consumers expect a response within 10 minutes'),
      q('scheduling','How many hours per week do you spend coordinating scheduling and calendar management?','Booking appointments, confirming, rescheduling — back-and-forth with clients and vendors',['Under 2','2 – 5','5 – 10','10 – 20','20+'],[1,3.5,7.5,15,25],'Calendly 2023: Businesses spend an average of 4.8 hours per week on scheduling-related communications'),
      q('retention','What percentage of your customers return for another purchase or project within 12 months?','Repeat buyers, renewal clients, or returning customers',['Less than 10%','10 – 25%','25 – 50%','50 – 75%','Over 75%'],[0.05,0.17,0.37,0.62,0.85],'Bain & Company: A 5% increase in customer retention increases profits by 25–95%; acquiring new customers costs 5× more than retaining existing ones'),
      q('referrals','How many referrals do you receive from past clients or customers per month?','People who specifically contacted you because someone recommended your business',['0','1 – 2','3 – 5','6 – 10','10+'],[0,1.5,4,8,14],'Nielsen: 92% of consumers trust referrals from people they know; systematic referral programs produce 3–5× more referral business'),
      q('reviews','How actively do you request and manage online reviews?','Google, Yelp, Facebook, or industry-specific platforms',['Never ask for reviews','Occasionally ask in person','Sometimes ask via email','Systematic review requests sent','Fully automated review system'],[0,0.1,0.3,0.7,0.95],'BrightLocal 2023: 87% of consumers read online reviews for local businesses; businesses with 4.5+ stars receive 28% more clicks'),
    ],
    calculate: (a) => {
      const [leads,response,avgVal,adminHrs,followup,afterHours,schedulingHrs,retention,referrals,reviews] = a;
      const { revLost, revGained } = baseRevenue(leads,response,avgVal,followup,afterHours);
      const { wasted, saved } = baseTime(adminHrs,schedulingHrs,3);
      return {
        monthlyRevenueLost:Math.round(revLost), monthlyRevenueGained:Math.round(revGained),
        yearlyRevenueLost:Math.round(revLost*12), yearlyRevenueGained:Math.round(revGained*12),
        weeklyHoursWasted:Math.round(wasted), weeklyHoursSaved:Math.round(saved), annualHoursSaved:Math.round(saved*52),
        painPoints:[
          pp('Slow Lead Response',`$${fmt(leads*(1-response)*avgVal*0.05)}/mo lost`,`+$${fmt(leads*(1-response)*0.85*avgVal*0.11)}/mo recovered`,`${Math.round(leads*(1-response))} leads/month aren't getting a same-day response. The first business to respond wins the sale in most industries.`,'AI Receptionist responds to every inquiry within 30 seconds — 24/7 — qualifying leads and routing hot prospects automatically'),
          pp('After-Hours Lead Loss',`$${fmt(leads*0.33*(1-afterHours)*avgVal*0.04)}/mo lost`,`+$${fmt(leads*0.33*(1-afterHours)*0.9*avgVal*0.09)}/mo recovered`,`~33% of inquiries arrive outside business hours. Without an instant response, these leads go to whoever picks up first.`,'24/7 automated response captures every after-hours inquiry immediately while intent is at its highest'),
          pp('Weak Follow-Up System',`$${fmt(leads*(1-followup)*avgVal*0.03)}/mo lost`,`+$${fmt(leads*(1-followup)*0.8*avgVal*0.055)}/mo recovered`,`${Math.round((1-followup)*100)}% of your follow-up relies on manual effort. Studies show 80% of sales require 5+ touchpoints — most businesses stop at 1.`,'Automated multi-channel sequences (email + SMS) follow up indefinitely until leads convert or opt out'),
          pp('Customer Retention Gap',`$${fmt(leads*(1-retention)*avgVal*0.06)}/mo missed`,`+$${fmt(leads*(1-retention)*0.4*avgVal*0.09)}/mo potential`,`Only ${Math.round(retention*100)}% of your customers return within 12 months. Retention automation significantly improves repeat revenue.`,'Post-transaction check-ins, review requests, and re-engagement campaigns run automatically after every completed job'),
        ],
        sources:['MIT/InsideSales.com: Leads contacted within 5 minutes convert 9× better than those reached after 30 minutes','Marketing Donut: 80% of sales require 5+ follow-ups; 44% of reps give up after 1 attempt','Bain & Company: A 5% retention improvement increases profits by 25–95%','BrightLocal 2023: 87% of consumers read online reviews before purchasing from a local business','McKinsey 2022: Businesses using automation report 20–30% increases in revenue and efficiency']
      };
    },
    automationPlan:[
      wf('Instant Lead Response System','critical','New inquiry received via any channel (phone, web, social, email, referral)',['Inquiry detected and acknowledged within 60 seconds','Personalized response sent with relevant business information','3–5 qualification questions asked to gauge intent and readiness','Hot leads immediately routed for follow-up or booking confirmation','All contacts and conversation details automatically saved to CRM'],['AI Receptionist','CRM Integration','SMS + Email Automation','Lead Scoring'],'Capture 85% of leads currently going unanswered — responding first is the single biggest conversion lever in any industry'),
      wf('Follow-Up & Nurture Sequences','high','Lead received but not immediately converted to a sale or booking',['24-hour follow-up with value-add content or relevant social proof','72-hour: specific offer or clear availability window presented','7-day: final personalized check-in with an easy next step','Long-term nurture: monthly touchpoints for 6–12 months for unresolved leads','Conversion event triggers CRM update and removes lead from sequence'],['Email Automation','SMS Sequences','CRM Tagging','Behavioral Triggers'],'Convert 25–40% more inquiries into paying customers with zero additional manual effort from your team'),
      wf('Review & Referral Engine','high','Transaction completed or service delivered to a customer',['Thank-you message sent within 24 hours of job completion','Review request with direct link sent at 48 hours','30-day satisfaction check-in and testimonial request','60-day referral ask with clear incentive or value proposition','Annual re-engagement for repeat purchase, renewal, or referral'],['SMS + Email Automation','Review Platform Integration','CRM','Referral Tracking'],'Build a consistent flow of 5-star reviews and referrals — the highest-ROI marketing channel for any local or service business'),
      wf('Admin & Scheduling Automation','medium','New booking request or appointment coordination needed',['Online booking link sent immediately upon inquiry with real-time availability','Calendar sync confirms or suggests alternative times automatically','Confirmation and pre-appointment reminders sent on smart schedule','No-show follow-up sequence triggered if appointment missed','Post-appointment feedback request and next steps sent automatically'],['Online Scheduling Integration','Calendar Sync','SMS + Email Reminders','CRM'],'Reclaim 8–12 hours per week from manual scheduling and reduce no-shows by up to 80%'),
    ]
  },
];
