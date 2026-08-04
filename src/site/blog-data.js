// Guides / blog content for the Nuvion Solutions website.
// English only — the site translates to Spanish at render time.
// Schema per article: slug, metaTitle, title, metaDesc, excerpt, category,
// date, readMins, intro[], sections[{ h, body[], list? }], faqs[{ q, a }], related[].
// Prose uses template literals so apostrophes never need escaping.

export const ARTICLES = [
  {
    slug: 'website-cost-sonoma-county',
    metaTitle: 'How Much Does a Website Cost in Sonoma County? (2026) | Nuvion Solutions',
    title: 'How Much Does a Website Cost in Sonoma County?',
    metaDesc: `A straight, no-hype answer on what a website really costs in Sonoma County in 2026 — DIY, freelancers, agencies, and transparent one-time vs. monthly pricing.`,
    excerpt: `Real local price ranges, what actually drives the cost, and how to pay for a site you actually own — one-time or monthly with $0 down.`,
    category: 'Pricing',
    date: '2026-07-30',
    readMins: 7,
    intro: [
      `Most business websites in Sonoma County land somewhere between free-but-DIY and about $10,000. A polished do-it-yourself site on a builder like Wix or Squarespace runs a few hundred dollars a year in subscriptions and a lot of your own weekends. A freelancer typically charges $1,000 to $3,000 for a small site. A local agency building a full marketing website usually quotes $3,000 to $10,000, and sometimes more once you add copywriting, photography, and integrations.`,
      `That is a wide range because "a website" can mean very different things. Below is a plain-English breakdown of what each option really costs, what actually drives the price up or down, and where our own pricing sits — on purpose — as the honest middle.`,
    ],
    sections: [
      {
        h: `The real price ranges in 2026`,
        body: [
          `Here is what local business owners in Santa Rosa, Petaluma, and around the county actually pay, depending on who does the work:`,
        ],
        list: [
          `DIY website builders (Wix, Squarespace, GoDaddy): roughly $150 to $400 a year in subscriptions, plus your time. Cheapest on paper, most expensive in hours.`,
          `Freelancers and part-timers: usually $1,000 to $3,000 for a small business site. Quality and availability vary a lot from person to person.`,
          `Local design agencies: commonly $3,000 to $10,000 for a marketing website, and $10,000+ once you get into e-commerce, custom features, or booking systems.`,
          `Rent-a-site subscriptions: $50 to $300 a month forever, where you never actually own the finished site.`,
        ],
      },
      {
        h: `What actually drives the cost`,
        body: [
          `Two websites that look similar can be priced thousands of dollars apart. The difference usually comes down to a handful of things, not the number of pages.`,
          `The biggest cost drivers are custom design versus a template, how much writing and photography is included, and whether the site needs to do something — take payments, book appointments, sync with a calendar, or connect to software you already use. A five-page site that just needs to look professional and load fast is far cheaper than one that runs part of your business.`,
          `Content is the quiet budget-eater. If you hand over your text and photos, the build moves fast. If someone has to interview you, write every page, and source images, that is real work and it shows up in the price.`,
        ],
      },
      {
        h: `One-time or monthly — and why it matters`,
        body: [
          `There are two honest ways to pay for a website, and the right one depends on your cash flow, not on a sales pitch.`,
          `Paying once means you own the finished site outright from day one. Our one-time website pricing is $600, $900, or from $1,800 depending on how much you need, and that is yours to keep — design, files, and code.`,
          `Paying monthly spreads the cost so you are not out a lump sum up front. Our monthly plans are $49, $89, or $149 a month with $0 down, and hosting plus ongoing care are included. The important part: after 18 months the site is yours to keep. It is rent-to-own, not rent-forever. Be careful with any offer that keeps charging you monthly but never hands you the finished site.`,
        ],
      },
      {
        h: `Where Nuvion sits — the honest middle`,
        body: [
          `We are a small, senior team in Santa Rosa, so you get agency-level work without the agency overhead. That is why a professional site with us starts well below the $3,000-to-$10,000 range most local agencies quote.`,
          `We also guarantee your site goes live in one week once we have your content — or you do not pay. And every plan, one-time or monthly, ends with you owning everything. No lock-in.`,
          `If you want ongoing help after launch, our care plans are optional and separate: Essential at $29 a month covers hosting, backups, security, and monitoring; Plus at $50 adds revisions; Pro at $149 adds local SEO, content, Google Business Profile management, and reviews. You are never required to buy them to keep your site.`,
        ],
      },
      {
        h: `So what should you budget?`,
        body: [
          `If you are a solo operator or brand-new business testing an idea, a clean one-time site around $600 is plenty to look credible. If your website is a real part of how you get customers — a contractor, a clinic, a shop, a restaurant in Healdsburg or Sonoma — budget for the $900-to-$1,800 range or a monthly plan, and treat ongoing care as a small line item, not an afterthought.`,
          `The number that should worry you is not the highest quote or the lowest. It is the vague one. A fair website price comes with a clear list of what you get and a plain answer to one question: at the end, do you own it?`,
        ],
      },
    ],
    faqs: [
      {
        q: `How much does a small business website cost in Sonoma County?`,
        a: `Most small business sites here cost between $1,000 and $10,000 depending on who builds it. Freelancers tend to be $1,000 to $3,000, and local agencies $3,000 to $10,000. Our own one-time pricing starts at $600, or $49 a month with $0 down.`,
      },
      {
        q: `Is it cheaper to build my own website?`,
        a: `On paper, yes — a DIY builder costs a few hundred dollars a year. But you pay for it in time, and the result often looks and performs like a template. If your site needs to bring in customers, hiring help usually pays for itself.`,
      },
      {
        q: `What is the difference between paying once and paying monthly?`,
        a: `Paying once means you own the site outright from day one. Paying monthly spreads the cost with $0 down and includes hosting and care, and after 18 months the site is still yours to keep. Both end in ownership — the difference is cash flow.`,
      },
      {
        q: `Are there ongoing costs after the website is built?`,
        a: `You will always need hosting and a domain, which are small. Beyond that, ongoing costs are optional. Our care plans start at $29 a month for hosting, backups, security, and monitoring, but you are never required to buy one to keep your site running.`,
      },
    ],
    related: ['do-i-own-my-website', 'choose-web-designer-santa-rosa'],
  },

  {
    slug: 'do-i-own-my-website',
    metaTitle: 'Do You Actually Own Your Website? What to Check | Nuvion Solutions',
    title: `Do You Actually Own Your Website? What to Check Before You Hire Anyone`,
    metaDesc: `Many businesses rent their website without realizing it. Here is how to tell owned from rented, spot lock-in traps, and verify real ownership before you sign.`,
    excerpt: `Owned vs. rented, the subscription traps to watch for, and exactly what to check in a contract so the website you pay for is actually yours.`,
    category: 'Before you hire',
    date: '2026-07-28',
    readMins: 6,
    intro: [
      `You own your website when you own three things: the finished code and design files, your domain name, and the ability to host it anywhere you want. If any one of those stays in someone else's hands, you are renting — even if it does not feel like it.`,
      `A lot of business owners in Sonoma County only discover this when they try to leave a provider and find out they cannot take their site with them. Here is how to tell the difference before you hire anyone, and how to verify ownership in writing.`,
    ],
    sections: [
      {
        h: `Owned vs. rented — the real difference`,
        body: [
          `An owned website is like buying a house. You paid for it, the files are yours, and you can move to a new host, hire a new designer, or make changes without asking permission. A rented website is like an apartment: it may be a very nice apartment, but the day you stop paying, you walk away with nothing.`,
          `Renting is not automatically bad. Some monthly plans are genuinely rent-to-own, where the site becomes yours after a set period. The problem is the plans that look like ownership but never actually transfer it.`,
          `The reason this catches so many local businesses is that everything feels fine until the day you want to leave. The site is up, it looks good, the bill is small — and then you try to switch designers or hosts and discover the files were never yours to take. That is the moment to prevent, and you prevent it before you sign, not after.`,
        ],
      },
      {
        h: `The lock-in traps to watch for`,
        body: [
          `Most lock-in is not a scam — it is just how some builders and agencies are set up. But the effect on you is the same, so watch for these:`,
        ],
        list: [
          `Proprietary platforms you cannot export from, so your site only works on that one company's system.`,
          `The provider owning your domain name instead of registering it in your name.`,
          `"Free website" offers that require an expensive monthly plan forever and hand you nothing if you cancel.`,
          `No access to your own files, hosting login, or content management system.`,
          `Cancellation terms that take your site offline immediately with no way to keep a copy.`,
        ],
      },
      {
        h: `What real ownership means`,
        body: [
          `Real ownership is specific, and you should be able to point to each piece:`,
          `You own the design and the code — the actual files that make up your site. You own your domain, registered in your name or your business's name. And you can host the site anywhere, so if you ever want to switch providers, you download your files and go. No permission required, no ransom.`,
          `This is how we build every site at Nuvion. Whether you pay once or monthly, you end up owning your design, files, domain, and code. There is no lock-in and no rentals-forever.`,
        ],
      },
      {
        h: `How to verify it in a contract`,
        body: [
          `Do not rely on a handshake. Before you sign, ask for these things in writing and read the answers:`,
        ],
        list: [
          `"Do I own the finished website files and design outright?" — you want a clear yes.`,
          `"Is the domain registered in my name, and can I take it with me?"`,
          `"Can I host this site somewhere else if I leave?"`,
          `"What exactly happens to my site if I cancel or stop paying?"`,
          `"Are there any ongoing fees required just to keep my site online?"`,
        ],
      },
      {
        h: `Rent-to-own, done honestly`,
        body: [
          `Monthly pricing is a great fit when you would rather not pay a lump sum up front — but it should still lead to ownership. Our monthly plans are $49, $89, or $149 a month with $0 down, and they include hosting and care. After 18 months, the site is yours to keep.`,
          `That is the honest version of rent-to-own: you are paying toward something you will actually own, not renting it indefinitely. If a monthly offer never ends in ownership, treat it as rent — and price it accordingly, because you will be paying it for as long as you have the site.`,
        ],
      },
    ],
    faqs: [
      {
        q: `How do I know if I own my website?`,
        a: `You own it if you have the design and code files, your domain is registered in your name, and you can host the site anywhere you choose. If your provider holds any of those, you are effectively renting, even on a paid plan.`,
      },
      {
        q: `What happens to my website if I stop paying a monthly plan?`,
        a: `It depends entirely on the contract. With honest rent-to-own plans like ours, the site becomes yours after 18 months. With rent-forever plans, the site can go offline the moment you cancel and you keep nothing — so always ask this question before signing.`,
      },
      {
        q: `Should my web designer own my domain name?`,
        a: `No. Your domain should always be registered in your name or your business's name. It is fine for a designer to help set it up, but you should hold the account and be able to move the domain whenever you want.`,
      },
      {
        q: `Is a monthly website plan a bad deal?`,
        a: `Not if it ends in ownership. Monthly plans are a smart way to avoid a big up-front cost, as long as the site becomes yours after a set period. The plans to avoid are the ones that charge forever and never hand you the finished site.`,
      },
    ],
    related: ['website-cost-sonoma-county', 'choose-web-designer-santa-rosa'],
  },

  {
    slug: 'choose-web-designer-santa-rosa',
    metaTitle: 'How to Choose a Web Designer in Santa Rosa: 7 Checks | Nuvion',
    title: `How to Choose a Web Designer in Santa Rosa: 7 Things to Check First`,
    metaDesc: `A practical 7-point checklist for hiring a web designer in Santa Rosa — from real portfolios and ownership to timelines, pricing, and who actually answers the phone.`,
    excerpt: `Seven specific things to check before you hire a web designer in Sonoma County, so you end up with a site you own and a partner who picks up the phone.`,
    category: 'Before you hire',
    date: '2026-08-01',
    readMins: 7,
    intro: [
      `Choosing a web designer in Santa Rosa comes down to seven things: are they local and reachable, do they have a real portfolio, who actually builds your site, do you own it at the end, is the timeline realistic, is the pricing transparent, and what does ongoing support look like. Get clear answers to those and you will avoid almost every common regret.`,
      `Here is the full checklist, with what a good answer sounds like for each one.`,
    ],
    sections: [
      {
        h: `1. Are they local and reachable?`,
        body: [
          `You do not strictly need someone in Sonoma County, but you do need someone who answers. A designer who understands the difference between marketing to Healdsburg wine-country visitors and to year-round Rohnert Park residents will build you a better site. And when something breaks the week of a big sale, a local phone number beats a support ticket that gets answered in three days.`,
          `Ask how you will reach them after launch, and how fast they typically respond. We are based in Santa Rosa and you can call us directly at (707) 520-9179.`,
        ],
      },
      {
        h: `2. Do they have a real portfolio?`,
        body: [
          `Look for live websites you can actually visit, not just polished mockups. Click through them on your phone. Do they load fast? Are they easy to use? Ideally, ask to see work for businesses a bit like yours.`,
          `A portfolio of real, working sites tells you far more than a slick sales page. If a designer cannot show you anything live, that is worth a pause.`,
        ],
      },
      {
        h: `3. Who actually builds it?`,
        body: [
          `This one catches people. Some agencies sell you on a friendly local rep, then send the work offshore to whoever is cheapest that month. That is not always bad, but you deserve to know.`,
          `Ask who will design and build your site, and who you will talk to when you need a change. We are a small, senior team — the people you talk to are the people doing the work.`,
        ],
      },
      {
        h: `4. Do you own it when it is done?`,
        body: [
          `Before anything else is agreed, get a clear answer: at the end, do you own the design, the files, the code, and your domain? Can you host it anywhere and switch providers if you ever want to?`,
          `With us the answer is always yes — you own everything, whether you pay once or monthly, with no lock-in. If a designer is vague here, treat it as a red flag.`,
        ],
      },
      {
        h: `5. Is the timeline realistic — and specific?`,
        body: [
          `"A few weeks" with no commitment often turns into a few months. Ask for a real timeline and what it depends on. Almost always, the thing that slows a build down is content — your text and photos.`,
          `We guarantee your site goes live in one week once we have your content, or you do not pay. A specific, committed timeline protects you; a vague one protects the vendor.`,
        ],
      },
      {
        h: `6. Is the pricing transparent?`,
        body: [
          `You should be able to see prices before a sales call, and understand exactly what is and is not included. Watch for surprise add-ons — extra pages, revisions, "SEO," a content fee — that were not in the original quote.`,
          `Our website pricing is public: $600, $900, or from $1,800 one-time, or $49, $89, or $149 a month with $0 down. Care plans are separate and optional, starting at $29 a month. No mystery, no pressure.`,
        ],
      },
      {
        h: `7. What does support look like after launch?`,
        body: [
          `A website is not a set-it-and-forget-it project. Things need updating — hours, prices, a new service, a security patch. Ask what help is available after you go live, what it costs, and whether it is required.`,
          `Good support should be optional and clearly priced. Our care plans handle hosting, backups, security, and monitoring from $29 a month, with higher tiers that add revisions, local SEO, and Google Business Profile management — but you are free to manage the site yourself, because you own it.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Do I need a local web designer in Sonoma County?`,
        a: `Not strictly, but it helps. A local designer understands the area and is easier to reach when something needs fixing fast. What matters most is that whoever you hire is responsive and gives you a real way to contact them after launch.`,
      },
      {
        q: `What questions should I ask a web designer before hiring?`,
        a: `Ask who actually builds the site, whether you own it when it is done, how long it will take, what the total price includes, and what ongoing support costs. Clear answers to those five questions filter out most bad fits.`,
      },
      {
        q: `How can I tell if a web designer is any good?`,
        a: `Look at live sites they have built, not just mockups, and visit them on your phone to check speed and ease of use. Real, working examples for businesses like yours tell you far more than a sales pitch.`,
      },
      {
        q: `How long should it take to build a small business website?`,
        a: `A focused small business site can go live in about a week once the content is ready — we guarantee exactly that, or you do not pay. Bigger projects with e-commerce or custom features take longer, but you should always get a specific timeline, not a vague one.`,
      },
    ],
    related: ['do-i-own-my-website', 'website-cost-sonoma-county'],
  },

  {
    slug: 'local-seo-sonoma-county',
    metaTitle: 'Local SEO for Sonoma County: Show Up on Google | Nuvion',
    title: `Local SEO for Sonoma County Businesses: How to Actually Show Up on Google`,
    metaDesc: `A practical, honest guide to local SEO for Sonoma County businesses — Google Business Profile, reviews, local pages, and on-page basics that help you get found.`,
    excerpt: `What local SEO really is, the handful of things that move the needle in Sonoma County, and the honest truth about how long it takes.`,
    category: 'Local SEO',
    date: '2026-07-29',
    readMins: 7,
    intro: [
      `Local SEO is the work that helps your business show up when someone nearby searches for what you do — "plumber near me," "Santa Rosa dentist," "Petaluma taco shop." The biggest levers are your Google Business Profile, your reviews, and having real pages on your website about your services and the towns you serve.`,
      `None of it is magic, and anyone promising you the #1 spot on Google is not being straight with you. What follows is the honest version: what actually helps, in roughly the order it matters, for a business in Sonoma County.`,
    ],
    sections: [
      {
        h: `What local SEO actually is`,
        body: [
          `Regular SEO is about ranking for searches anywhere. Local SEO is about ranking for searches near you — the map results and the "near me" listings that show up when someone in Windsor or Sebastopol is looking for a business like yours right now.`,
          `That distinction matters because local search rewards different things: a complete, accurate Google Business Profile, genuine reviews from nearby customers, and a website that clearly says what you do and where you do it. You are not competing with the whole internet — you are competing with the other shops across town.`,
        ],
      },
      {
        h: `Your Google Business Profile comes first`,
        body: [
          `For most local businesses, the Google Business Profile does more than the website itself for local visibility. It is the free listing that shows your hours, location, photos, and reviews right in Google Maps and search.`,
          `Get the fundamentals right and keep them current:`,
        ],
        list: [
          `Claim and fully complete your profile — correct category, hours, service area, and phone number.`,
          `Add real photos and update them now and then; fresh, real images beat stock every time.`,
          `Keep your name, address, and phone number identical everywhere they appear online.`,
          `Post updates and respond to questions — an active profile signals a real, open business.`,
        ],
      },
      {
        h: `Reviews are your local reputation`,
        body: [
          `Reviews do two jobs at once: they help you rank in local results, and they are often the deciding factor when a customer is choosing between you and a competitor. A steady flow of recent, honest reviews matters more than a pile of old ones.`,
          `The best system is simple: ask every happy customer, make it easy with a direct link, and reply to the reviews you get — the good ones and the critical ones. A calm, professional reply to a bad review can win over the next person reading it. Never buy fake reviews; it violates Google's rules and customers can usually smell them.`,
        ],
      },
      {
        h: `Local content and service pages`,
        body: [
          `Google needs to understand what you do and where. A single vague "Services" page does not cut it. Give each core service its own page, and where it is genuine, create pages for the specific towns you serve — Santa Rosa, Petaluma, Rohnert Park, Windsor, Healdsburg, Sonoma, Sebastopol.`,
          `The key word is genuine. A real page about "emergency plumbing in Petaluma" with useful, specific information helps. Ten thin copy-paste pages that just swap the town name can hurt you. Write for the customer first, and the search benefit follows.`,
        ],
      },
      {
        h: `On-page basics that still matter`,
        body: [
          `A few technical fundamentals quietly support everything above. They are not glamorous, but skipping them holds you back:`,
        ],
        list: [
          `Fast loading and a site that works cleanly on phones — most local searches happen on a phone.`,
          `Clear page titles and headings that say what you do and where.`,
          `Your contact info and service area easy to find on every page.`,
          `A simple, logical structure so both people and Google can navigate it.`,
        ],
      },
      {
        h: `The honest truth about timing`,
        body: [
          `Local SEO compounds. You will not see much in week one. Over a few months of a complete profile, steady reviews, and real local pages, you climb — and the effect builds on itself. It is closer to tending a garden than flipping a switch.`,
          `And to be clear, nobody can guarantee you the #1 spot on Google. Any honest provider will tell you that. What we can do is handle the pieces that reliably help — our Pro care plan at $149 a month includes local SEO, content, Google Business Profile management, and reviews — and be straight with you about what it takes.`,
        ],
      },
    ],
    faqs: [
      {
        q: `How long does local SEO take to work?`,
        a: `Usually a few months before you see meaningful movement, and it keeps compounding after that. It rewards consistency — a complete Google Business Profile, steady reviews, and real local pages — rather than a one-time push. Anyone promising overnight results is overpromising.`,
      },
      {
        q: `Can anyone guarantee I will rank #1 on Google?`,
        a: `No, and you should be cautious of anyone who does. Google's rankings depend on many factors outside any provider's control. An honest partner focuses on the things that reliably help you get found, not on promising a specific position.`,
      },
      {
        q: `What is the most important thing for local SEO?`,
        a: `For most local businesses, a complete and active Google Business Profile does the heavy lifting, closely followed by genuine customer reviews. Get those two right before worrying about anything more advanced.`,
      },
      {
        q: `Do I need a separate page for each town I serve?`,
        a: `It helps if the pages are genuinely useful and specific to each town you truly serve. Thin, copy-paste pages that only swap the town name can hurt more than help, so write real content for the customer first.`,
      },
    ],
    related: ['choose-web-designer-santa-rosa', 'website-cost-sonoma-county'],
  },

  {
    slug: 'ai-website-builder-vs-real-designer',
    metaTitle: 'AI Website Builder vs. a Real Web Designer | Nuvion Solutions',
    title: `AI Website Builders vs. a Real Web Designer: Which Is Right for You?`,
    metaDesc: `An honest comparison of AI and DIY website builders versus hiring a real web designer — the pros, the cons, when each makes sense, and what AI still cannot do.`,
    excerpt: `A fair look at AI and DIY builders versus a real designer — when each is the smart choice, and what AI cannot do for a business that depends on its site.`,
    category: 'Getting started',
    date: '2026-08-02',
    readMins: 6,
    intro: [
      `AI and DIY website builders are genuinely good now, and for some people they are the right call. If you need a simple site fast, you are on a tight budget, and your website is not central to how you make money, a builder can absolutely get you online. If your website is a real part of your business, a designer is usually the better investment.`,
      `We build websites for a living, so we have a stake here — but we would rather be honest than talk you into something you do not need. Here is the fair version of the trade-off.`,
    ],
    sections: [
      {
        h: `Where AI and DIY builders genuinely shine`,
        body: [
          `Modern builders like Wix, Squarespace, and the AI tools bolted onto them are fast, cheap, and surprisingly capable. Credit where it is due:`,
        ],
        list: [
          `Low cost — usually a few hundred dollars a year.`,
          `Speed — you can have something online in an afternoon.`,
          `Full control — you can log in and change things whenever you want.`,
          `Good enough templates — for a simple brochure site, they often look clean out of the box.`,
        ],
      },
      {
        h: `Where they fall short`,
        body: [
          `The catch with a DIY builder is that the easy part is easy and the hard part is still hard. AI can generate a page, but it cannot make the judgment calls that make a site actually work for your business.`,
          `The common frustrations show up later:`,
        ],
        list: [
          `The time cost is real — the "afternoon" often becomes many evenings once you fuss over details.`,
          `Sites end up looking like their template, so you blend in with everyone using the same one.`,
          `Custom features — a specific booking flow, a payment integration, a connection to software you already use — get difficult or impossible.`,
          `You are often locked into that platform, so the site is hard to move later.`,
          `When something breaks, there is no one to call who knows your business.`,
        ],
      },
      {
        h: `What a real designer actually adds`,
        body: [
          `Hiring a designer is not about pushing pixels around. The value is the thinking and the accountability around the site.`,
          `A good designer brings strategy — what your site should say, who it is for, and what you want a visitor to do. They handle the custom pieces AI struggles with, make sure the site is fast and works on phones, and set it up so you actually own it. Just as important, there is a real person who answers when you need a change or something goes wrong.`,
          `That is how we work at Nuvion. We are a small, senior team in Santa Rosa, you own everything we build, and we guarantee your site goes live in one week once we have your content, or you do not pay.`,
        ],
      },
      {
        h: `What AI still cannot do`,
        body: [
          `AI is a great assistant and a poor owner. It can draft copy and lay out a page, but it cannot sit down with you and understand your business, weigh a trade-off, or take responsibility when something needs to be right.`,
          `Specifically, AI still cannot handle custom integrations that connect your site to the rest of how you operate, make real strategic decisions about your business, or be a person who answers the phone when it counts. For a site your livelihood depends on, those are not small gaps.`,
        ],
      },
      {
        h: `A simple way to decide`,
        body: [
          `Use this rough test. If your website is a business card — nice to have, not how you get customers — a DIY or AI builder is a reasonable, budget-friendly choice, and we will tell you so.`,
          `If your website is a storefront — where customers find you, judge you, and decide to call or buy — hire a partner. And if the reason you are eyeing a builder is cost, look closely at real pricing before you assume a designer is out of reach. Our sites start at $600 one-time or $49 a month with $0 down, which is not far from what a builder costs over a couple of years, and you get a professional and a site you own at the end.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Are AI website builders good enough for a small business?`,
        a: `For a simple brochure site on a tight budget, yes — they can look clean and get you online quickly. They fall short when you need custom features, a distinctive design, or someone to call when something breaks. It depends on how much your business relies on the site.`,
      },
      {
        q: `Is it worth paying a web designer instead of using AI?`,
        a: `If your website is central to getting customers, usually yes. A designer brings strategy, handles custom work AI cannot, sets you up to own the site, and gives you a real person to reach. If the site is just a simple placeholder, a builder may be enough.`,
      },
      {
        q: `What can a web designer do that AI cannot?`,
        a: `A designer can understand your specific business, make strategic decisions, build custom integrations with the tools you use, and take responsibility for getting it right. AI can draft and lay out pages, but it cannot own the outcome or answer the phone.`,
      },
      {
        q: `Is a designer much more expensive than a DIY builder?`,
        a: `Less than most people assume. Over a couple of years, builder subscriptions add up, and our sites start at $600 one-time or $49 a month with $0 down. For not much more than a DIY tool, you get a professional build and a site you actually own.`,
      },
    ],
    related: ['website-cost-sonoma-county', 'choose-web-designer-santa-rosa'],
  },

  {
    slug: 'do-i-need-a-website-small-business',
    metaTitle: 'Do I Need a Website for My Small Business? (2026) | Nuvion Solutions',
    title: 'Do I Need a Website for My Small Business in 2026?',
    metaDesc: `Not sure a small business still needs a website in 2026? An honest look at when a site pays off, when social media is enough, and what to build first if you do.`,
    excerpt: `When a website genuinely earns its keep, when you can wait, and what to build first if your small business is still on the fence.`,
    category: 'Getting started',
    date: '2026-07-10',
    readMins: 7,
    intro: [
      `If you run a small business in 2026, the honest answer is almost always yes — but with a caveat. You need a website when customers look you up before they decide to call, book, or buy, and today that describes nearly every kind of business, from a Petaluma bakery to a Santa Rosa electrician. What you may not need is a big, expensive one.`,
      `A website is the one piece of your online presence that you actually own and fully control. Everything else — your Instagram, your Yelp listing, your Google profile — lives on someone else's platform, subject to their rules and their algorithm. This guide walks through when a website genuinely earns its keep, when you can wait, and what to build first if you decide to move forward.`,
    ],
    sections: [
      {
        h: `The short answer, and the honest caveat`,
        body: [
          `Yes, most small businesses need a website — because most buying decisions now start with a search. Someone hears about you from a friend, then quietly checks you out online before they ever pick up the phone. If there is nothing to find, or what they find looks abandoned, you have lost them before you knew they existed.`,
          `The caveat is scale. Needing a website does not mean needing a ten-page, custom-built site with online ordering and a blog. A clean, fast, three-to-five-page site that answers the basic questions is often all a small business needs to look credible and win the call. The mistake is not skipping the website — it is over-building it before you know what your customers actually want.`,
        ],
      },
      {
        h: `When you genuinely need a website`,
        body: [
          `Some businesses can limp along on a phone number and word of mouth. Most cannot anymore. You almost certainly need a website if any of these describe you:`,
        ],
        list: [
          `Customers research before they buy — contractors, dentists, lawyers, consultants, anyone people vet before trusting.`,
          `You want to be found on Google Maps and in "near me" searches, which lean heavily on having a real website behind your listing.`,
          `You sell or book online, or you want to cut down on the phone tag of scheduling.`,
          `You are competing with businesses that already have polished sites — a customer comparing two Rohnert Park gyms will lean toward the one that looks established.`,
          `You have ever lost a lead who said they could not find anything about you online.`,
        ],
      },
      {
        h: `When social media alone might be enough — for now`,
        body: [
          `There are real cases where a website can wait. If you are just testing an idea, selling at farmers markets while you figure things out, or running a hobby that pays for itself, an active Instagram or Facebook page can carry you for a while.`,
          `But treat that as a starting point, not a destination. Social platforms are rented land: they change the rules, bury your posts, or suspend accounts with no warning and no appeal. The day Instagram tweaks its algorithm, your reach can drop overnight through no fault of your own. A website is the address that stays put while everything around it shifts.`,
        ],
      },
      {
        h: `What a website does that a profile can't`,
        body: [
          `A social profile is great at reach and personality. It is poor at the jobs a website quietly does every day.`,
          `Your own site controls the whole first impression — no competitor ads next to your content, no platform branding, no distractions. It ranks in Google searches in a way a Facebook page rarely does. It holds the details customers actually need — services, pricing, hours, service area, how to reach you — organized so they find them in seconds. And it does not disappear if a platform decides to change course.`,
        ],
      },
      {
        h: `What it costs to get one`,
        body: [
          `The reason a lot of owners put this off is a fear that a real website means thousands of dollars. It does not have to. Our one-time pricing starts at $600 for a clean launch site, $900 for a fuller business site, and from $1,800 for a larger growth build.`,
          `If a lump sum is the sticking point, monthly plans run $49, $89, or $149 a month with $0 down, and the site becomes yours to keep after 18 months — it is rent-to-own, not rent-forever. Either way, we guarantee your site goes live in one week once we have your content, or you do not pay. The cost of a simple, credible site is lower than most people assume, and far lower than the customers you quietly lose without one.`,
        ],
      },
      {
        h: `Start small, but start`,
        body: [
          `If you are on the fence, here is the practical move: build the smallest honest version of a website — home, services, about, contact — and grow it as you learn what customers ask for. You do not need every feature on day one. You need to exist, look trustworthy, and be easy to reach.`,
          `The businesses that regret their website are almost always the ones that over-thought it into never happening. Getting a simple site live beats planning a perfect one forever.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Does a small business really still need a website in 2026?`,
        a: `For almost all of them, yes. Most customers check you out online before they call or buy, and a website is the one place you control that whole first impression. A profile on someone else's platform is not a substitute, because you do not own it or control how it is seen.`,
      },
      {
        q: `Can I just use Facebook or Instagram instead of a website?`,
        a: `You can start there if you are just testing an idea, but treat it as temporary. Social platforms can change their rules or bury your posts overnight, and they rarely rank in Google the way your own site does. A website is the address that stays put.`,
      },
      {
        q: `How much does a simple small business website cost?`,
        a: `Less than most owners expect. Our one-time sites start at $600, or $49 a month with $0 down that becomes yours after 18 months. A clean three-to-five-page site is usually enough to look credible and win the call.`,
      },
      {
        q: `What pages does a basic small business website need?`,
        a: `For most, four pages do the job: a home page, a services or menu page, an about page, and a clear contact page with your phone, hours, and service area. Start there and add more only as customers show you what they want.`,
      },
    ],
    related: ['website-vs-facebook-page', 'small-business-website-checklist', 'website-cost-sonoma-county'],
  },

  {
    slug: 'how-long-to-build-a-website',
    metaTitle: 'How Long Does It Take to Build a Website? (2026) | Nuvion Solutions',
    title: 'How Long Does It Take to Build a Website?',
    metaDesc: `How long does a website really take to build? A realistic timeline for small business sites, what actually causes delays, and why content is almost always the holdup.`,
    excerpt: `A realistic build timeline for a small business site, the one thing that causes almost every delay, and how a site can go live in a week.`,
    category: 'Getting started',
    date: '2026-07-12',
    readMins: 6,
    intro: [
      `A focused small business website can go live in about a week — sometimes less — once the content is ready. Bigger, more complex sites take longer, from a few weeks to a couple of months. But the single biggest factor in how long your website takes has almost nothing to do with the designer and everything to do with one thing: your content.`,
      `Most people assume the design and coding are the slow part. In practice, those move quickly for an experienced team. What stretches a "few weeks" into "a few months" is waiting on text, photos, and decisions from the business owner. Understand that, and you can control your own timeline.`,
    ],
    sections: [
      {
        h: `The realistic timeline by project size`,
        body: [
          `Every project is different, but here is roughly what to expect once work actually begins and content is in hand:`,
        ],
        list: [
          `A simple brochure site (three to six pages, template-based, your content ready): about one week.`,
          `A standard small business site with custom design and some copywriting help: two to four weeks.`,
          `A larger site with e-commerce, booking systems, or many pages: one to two months.`,
          `A complex custom project with integrations and lots of content: two to three months or more.`,
        ],
      },
      {
        h: `Why content is almost always the holdup`,
        body: [
          `The one-week end of that range is real — we guarantee a live site in one week once we have your content, or you do not pay. The catch, and the reason for that "once we have your content" clause, is simple: ask any web designer what slows projects down and you will hear the same answer, waiting on the client's content.`,
          `The design can be finished and sitting ready while the whole project stalls for weeks because the "about" text is still a draft in someone's head and the photos are still on a phone. This is not a criticism — running a business is busy, and writing about yourself is genuinely hard. But it is the truth, and knowing it changes how you approach the project. Gather your content before the build starts and a one-week launch is realistic. Gather it as you go and the same site can take two months.`,
        ],
      },
      {
        h: `What content you'll need`,
        body: [
          `Here is what to have ready to keep your build moving. Rough drafts are fine — a good designer will polish them:`,
        ],
        list: [
          `Your text — what you do, who you serve, your story, and your services or menu.`,
          `Photos — real images of your work, your space, your team, or your products. Real beats stock every time.`,
          `Your logo and any brand colors, if you have them.`,
          `A list of your services with short descriptions and, where you are comfortable, pricing.`,
          `Contact details — phone, email, hours, service area, and links to your social profiles.`,
        ],
      },
      {
        h: `The stages of a typical build`,
        body: [
          `Knowing the steps helps you see where time goes and where you can help it along:`,
        ],
        list: [
          `Kickoff — a conversation about your business, your goals, and who the site is for.`,
          `Content gathering — you provide text and photos; this is the stage you control.`,
          `Design and build — the site is designed and built, usually the fastest part with an experienced team.`,
          `Review — you look it over and request changes.`,
          `Launch — the site goes live and you are set up to own it.`,
        ],
      },
      {
        h: `How to make it go faster`,
        body: [
          `Notice that the two stages that depend on you — content and review — are usually where delays live. The design and build itself rarely is. So the levers to move quickly are almost all on your side of the table.`,
          `Gather your content before the project starts rather than during it. Give feedback in one clear pass instead of a trickle of small notes over three weeks. And resist the urge to keep adding "just one more thing," which is the quiet killer of timelines. A good partner helps too — we can write from a quick interview if putting your story into words is the sticking point, and we will tell you honestly what will speed things up.`,
        ],
      },
      {
        h: `Fast, but not rushed`,
        body: [
          `A one-week launch does not mean cutting corners. It means an experienced team, a clear process, and a client who has their content ready. The speed comes from removing the waiting, not from skipping the work.`,
          `If someone quotes you "a few weeks" with no commitment and no explanation of what it depends on, ask what would make it faster or slower. A vague timeline usually means a slow one. A specific, guaranteed timeline — like a week once your content is in — tells you they have done this many times before.`,
        ],
      },
    ],
    faqs: [
      {
        q: `How long does it take to build a small business website?`,
        a: `A focused small business site can go live in about a week once your content is ready — we guarantee exactly that, or you do not pay. Larger sites with e-commerce or custom features take a few weeks to a couple of months. The size of the project and the readiness of your content decide the timeline.`,
      },
      {
        q: `Why do websites take so long to build?`,
        a: `Usually it is not the design or coding — it is waiting on the client's content. Text and photos are the most common holdup, so a project can stall for weeks with the design finished and ready. Gathering your content before the build starts is the single best way to keep it fast.`,
      },
      {
        q: `What do I need to have ready before my website is built?`,
        a: `Your text (rough drafts are fine), real photos, your logo and brand colors if you have them, a list of services, and your contact details and hours. Having these ready before work begins is what makes a one-week launch possible.`,
      },
      {
        q: `Can a website really be built in a week?`,
        a: `Yes, for a focused small business site when your content is ready and the team is experienced. The speed comes from a clear process and no waiting, not from cutting corners. We guarantee a one-week launch once we have your content, or you do not pay.`,
      },
    ],
    related: ['small-business-website-checklist', 'choose-web-designer-santa-rosa', 'website-cost-sonoma-county'],
  },

  {
    slug: 'website-vs-facebook-page',
    metaTitle: 'Website vs. a Facebook or Instagram Page (2026) | Nuvion Solutions',
    title: 'Website vs. a Facebook or Instagram Page: What a Small Business Really Needs',
    metaDesc: `A website or a Facebook and Instagram page — which does a small business actually need? An honest comparison of what each is good at, and why you want both.`,
    excerpt: `What a website does that a social page can't, what social does better, and why the smart answer for most small businesses is both — with the site at the center.`,
    category: 'Getting started',
    date: '2026-07-14',
    readMins: 7,
    intro: [
      `Here is the honest answer up front: it is not either-or. A website and a social media page do different jobs, and most small businesses are best served by having both. But if you can only invest in one right now, the website is the foundation — because it is the only piece you actually own.`,
      `A lot of Sonoma County business owners run a busy Instagram or Facebook page and wonder if that is enough. Sometimes it feels like it. The trouble shows up later, and by then it can be expensive. Let's compare what each one is genuinely good at, and where a social-only approach quietly costs you.`,
    ],
    sections: [
      {
        h: `What a social page is genuinely good at`,
        body: [
          `Give social media its due — it does things a website simply cannot. It is where you build personality, show your day-to-day, and stay top of mind.`,
        ],
        list: [
          `Reach and discovery — people find you through shares, hashtags, and the algorithm without searching for you first.`,
          `Personality and trust — behind-the-scenes posts and stories make you feel like a real, human business.`,
          `Speed and cost — it is free to start and takes minutes to post.`,
          `Engagement — comments, messages, and reshares create a two-way relationship.`,
        ],
      },
      {
        h: `What a social page is bad at`,
        body: [
          `For a bakery in Petaluma showing off the morning's croissants, or a tattoo artist sharing new work, social is perfect. It is the front porch where people hang out. But the same platform that is great for reach is surprisingly weak at the jobs that actually turn interest into customers.`,
        ],
        list: [
          `You don't own it — the platform can change the rules, suppress your reach, or suspend your account with no warning and no appeal.`,
          `It barely ranks on Google — when someone searches "electrician near me," your Facebook page rarely shows up the way a real website does.`,
          `Information is buried — your hours, services, and prices are scattered across old posts instead of laid out clearly.`,
          `The algorithm decides who sees you — you might have 2,000 followers and reach 80 of them on a given post.`,
          `It looks like everyone else — every business's profile uses the same template, so it is hard to stand out or look established.`,
        ],
      },
      {
        h: `What a website does that social can't`,
        body: [
          `A website is the opposite: quieter than social, but it owns the jobs that matter when someone is deciding whether to trust you and reach out.`,
          `It is yours — no algorithm, no platform rules, no risk of losing it overnight. It ranks in Google searches, which is where a huge share of buying decisions begin. It presents your information the way you want, organized so a customer finds hours, services, and contact details in seconds. And it controls the whole first impression, with no competitor ads and no platform branding wrapped around your content.`,
        ],
      },
      {
        h: `The real cost of social-only`,
        body: [
          `Relying only on a Facebook or Instagram page feels free, but it carries a hidden bill. The most common way it shows up: a potential customer hears about you, searches your name on Google, finds no real website, and quietly assumes you are either tiny, closed, or not quite legitimate. You never hear from them, so you never even know it happened.`,
          `The other risk is the one nobody plans for. Accounts get hacked, suspended by mistake, or hit by a rule change, and businesses that built everything on a single platform can lose years of work overnight with no way to get it back. A website is the insurance policy that keeps your presence standing no matter what a platform decides.`,
        ],
      },
      {
        h: `The smart setup: both, with the site at the center`,
        body: [
          `The businesses that get this right do not choose. They use social media for what it is good at — reach, personality, staying visible — and a website for what it is good at — owning their presence, ranking on Google, and closing the deal. The two feed each other.`,
          `In practice that looks like this: your social posts draw people in, then point them to your website to book, buy, or get the details. Your website anchors your Google presence and lives at the center of it all. Social is the porch; the website is the house. You want both, and you want to own the house.`,
        ],
      },
      {
        h: `If you can only do one thing first`,
        body: [
          `If your time and budget only stretch to one move right now, build the website. You can keep posting on social for free, but you cannot rank on Google, control your first impression, or protect yourself from a platform's whims without a site you own.`,
          `And the site does not need to be big. A clean, fast four-page site — home, services, about, contact — is enough to anchor everything else. Our one-time sites start at $600, or $49 a month with $0 down, and go live in a week once we have your content. That is a small price for the one piece of your presence no algorithm can take away.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Do I need a website if I already have a Facebook or Instagram page?`,
        a: `In almost all cases, yes. Social pages are great for reach and personality, but you do not own them, they barely rank on Google, and they can change the rules or suspend your account overnight. A website is the one piece of your presence you control, and it is where a lot of buying decisions actually happen.`,
      },
      {
        q: `Is a Facebook page enough for a small business?`,
        a: `For a while, maybe — but it is risky. Customers who search your name may not find you, your hours and prices are buried in old posts, and a single rule change or account suspension can wipe out years of work. Treat social as a starting point, not a permanent home.`,
      },
      {
        q: `Should I put my money into social media or a website?`,
        a: `Ideally both, since they do different jobs. But if you can only do one first, build the website — it is the piece you own, it ranks on Google, and it controls your first impression. You can keep posting on social for free alongside it.`,
      },
      {
        q: `Why doesn't my Facebook page show up on Google?`,
        a: `Social pages are built for their own platform, not for search, so they rarely rank the way a real website does. When someone searches for a business like yours, a proper website is far more likely to appear — which is a big reason social alone is not enough.`,
      },
    ],
    related: ['do-i-need-a-website-small-business', 'get-found-on-google-maps', 'small-business-website-checklist'],
  },

  {
    slug: 'get-found-on-google-maps',
    metaTitle: 'How to Get Your Business Found on Google Maps (2026) | Nuvion Solutions',
    title: 'How to Get Your Business Found on Google Maps',
    metaDesc: `A step-by-step guide to getting your business found on Google Maps — claiming your profile, the ranking factors that matter, reviews, and the mistakes to avoid.`,
    excerpt: `How Google Maps rankings actually work, the profile steps that move the needle, and how to show up when nearby customers search for what you do.`,
    category: 'Local SEO',
    date: '2026-07-16',
    readMins: 8,
    intro: [
      `When someone in Santa Rosa pulls out their phone and searches "coffee near me" or "plumber near me," the handful of businesses in that little map pack get most of the calls. Getting your business into those results comes down to one thing above all: a complete, active, and accurate Google Business Profile, backed by genuine reviews and a real website.`,
      `Google Maps is not a mystery, and it is not pay-to-win. It rewards businesses that give it clear, consistent, up-to-date information and that customers actually engage with. Here is how it works and exactly what to do, in the order that matters.`,
    ],
    sections: [
      {
        h: `Start with your Google Business Profile`,
        body: [
          `Everything on Google Maps runs through your Google Business Profile — the free listing that shows your name, hours, location, photos, and reviews. If you have not claimed it, that is step one, and it is free. Search your business name; if a listing already exists, claim it, and if not, create one.`,
          `Then complete every field. A half-finished profile is the most common reason good businesses stay invisible on Maps. Fill in all of it:`,
        ],
        list: [
          `Your exact business name, address, and phone number.`,
          `The right primary category — be specific, because "Mexican restaurant" ranks differently than just "restaurant."`,
          `Complete hours, including holidays, so you never show as closed when you are open.`,
          `Your service area if you travel to customers, or your address if they come to you.`,
          `A real description of what you do and what makes you worth choosing.`,
        ],
      },
      {
        h: `How Google decides who ranks`,
        body: [
          `Google has said it weighs three main things for local results, and understanding them tells you where to put your effort:`,
        ],
        list: [
          `Relevance — how well your profile matches what someone searched, which is why your category and description matter.`,
          `Distance — how close you are to the searcher, which you cannot change but which rewards being genuinely local.`,
          `Prominence — how established and active you appear, based on reviews, engagement, and your presence across the web.`,
        ],
      },
      {
        h: `Reviews move the needle`,
        body: [
          `You cannot move your building, but you have real control over relevance and prominence — and after a complete profile, reviews are the biggest lever you control. They influence your ranking and they are often the deciding factor when a customer is choosing between you and the business listed right below you.`,
          `Build a simple, steady habit around them: ask every happy customer, make it effortless with a direct review link, and reply to the reviews you receive — the glowing ones and the critical ones. A calm, professional response to a rough review often wins over the next person reading it. Recent reviews carry more weight than old ones, so a slow, steady trickle beats a one-time flood. Never buy fake reviews — Google removes them and customers can usually tell.`,
        ],
      },
      {
        h: `Photos, posts, and staying active`,
        body: [
          `Google favors profiles that look alive. A business that added photos last week reads as open and thriving; one whose last update was three years ago reads as maybe-closed, and customers feel the same way.`,
          `Add real photos of your work, your space, your team, and your products, and refresh them now and then. Use Google Posts to share updates, offers, or news. Answer the questions people ask on your profile. None of this takes long, but the cumulative signal — to both Google and customers — is that you are a real, active business worth showing.`,
        ],
      },
      {
        h: `Your website still matters`,
        body: [
          `A common myth is that if you have a Google Business Profile, you do not need a website. In fact, they work together. Your profile links to your website, and having a real, fast, relevant site strengthens the prominence signal that helps you rank on Maps.`,
          `Your website is also where a curious customer goes after they find you on Maps — to see your full services, your prices, and more of your work before they call. A strong profile gets you found; a good website closes the deal. Skipping the site leaves prominence and conversions on the table.`,
        ],
      },
      {
        h: `The mistakes that keep you invisible`,
        body: [
          `Most businesses that struggle on Google Maps are tripping over the same avoidable errors:`,
        ],
        list: [
          `An unclaimed or half-empty profile — the number-one reason good businesses do not show up.`,
          `Inconsistent name, address, or phone number across your website, Yelp, Facebook, and other listings, which confuses Google.`,
          `Few or no reviews, or reviews you never respond to.`,
          `A wrong or too-broad primary category.`,
          `A profile that has not been touched in years, with stale photos and outdated hours.`,
        ],
      },
    ],
    faqs: [
      {
        q: `How do I get my business to show up on Google Maps?`,
        a: `Claim and fully complete your Google Business Profile with an accurate name, address, phone, category, and hours, then build a steady stream of genuine reviews and keep the profile active with fresh photos and posts. A complete, active profile backed by a real website is what gets you into the local results.`,
      },
      {
        q: `Why is my business not showing up on Google Maps?`,
        a: `The most common reasons are an unclaimed or incomplete profile, inconsistent contact information across the web, few or no reviews, or the wrong category. A profile that has not been updated in years also fades. Completing and actively maintaining your profile fixes most of these.`,
      },
      {
        q: `How important are reviews for Google Maps ranking?`,
        a: `Very. After a complete profile, reviews are the biggest lever you control — they influence your ranking and often decide which business a customer calls. Recent, genuine reviews matter most, so ask every happy customer and reply to the reviews you get.`,
      },
      {
        q: `Do I need a website to rank on Google Maps?`,
        a: `You can appear without one, but a real website strengthens the prominence signal Google uses to rank you, and it is where customers go to learn more after they find you. The profile and the website work together — skipping the site leaves rankings and customers on the table.`,
      },
    ],
    related: ['local-seo-sonoma-county', 'why-my-website-gets-no-customers', 'website-vs-facebook-page'],
  },

  {
    slug: 'why-my-website-gets-no-customers',
    metaTitle: `Why Isn't My Website Bringing In Customers? (2026) | Nuvion Solutions`,
    title: `Why Isn't My Website Bringing In Customers?`,
    metaDesc: `Your website is live but the phone isn't ringing? Here are the real reasons a site brings in no customers — from traffic to trust to a missing call to action.`,
    excerpt: `The real reasons a live website brings in no customers — nobody's finding it, it's not built to convert, or it quietly kills trust — and how to fix each.`,
    category: 'Getting started',
    date: '2026-07-18',
    readMins: 8,
    intro: [
      `A website that brings in no customers is failing at one of two things, and usually you can tell which. Either not enough of the right people are finding it, or the people who do find it are not taking action once they land. Almost every "my website does nothing" problem traces back to one of those two buckets — traffic or conversion — and each has clear, fixable causes.`,
      `The frustrating part is that a site can look perfectly nice and still bring in nothing. Pretty is not the same as effective. Let's walk through the real reasons, roughly in the order worth checking, so you can find out which one is quietly costing you.`,
    ],
    sections: [
      {
        h: `First, which problem do you have?`,
        body: [
          `Before fixing anything, figure out which bucket you are in, because the fixes are completely different. The quick way: check whether anyone is actually visiting. If you have analytics or your host shows visitor numbers, look at how many people land on the site each week.`,
          `If almost nobody is visiting, your problem is traffic — nobody can hire a business they cannot find. If plenty of people visit but nobody contacts you, your problem is conversion — something on the site is stopping them from taking the next step. Guessing wrong here wastes months, so start with this question.`,
        ],
      },
      {
        h: `Nobody's finding it (the traffic problem)`,
        body: [
          `If your site gets little traffic, it usually comes down to a handful of causes. The good news is that they are all addressable:`,
        ],
        list: [
          `You're invisible on Google — no local SEO, a thin or missing Google Business Profile, and no pages targeting what people actually search.`,
          `Nobody is being pointed to it — the site is not linked from your social profiles, your email signature, your business cards, or your Google listing.`,
          `The site is brand new — search visibility takes a few months to build, and a site launched last week has not had time.`,
          `It only ranks for your business name — which means only people who already know you can find it, not new customers searching for what you do.`,
        ],
      },
      {
        h: `They find it but don't act (the conversion problem)`,
        body: [
          `This one stings more, because you are paying for traffic in attention or ads and watching it leak away. People arrive and leave without calling, booking, or buying. Common culprits:`,
        ],
        list: [
          `No clear next step — the site never plainly tells the visitor what to do, so they do nothing.`,
          `The call to action is buried — your phone number or booking button is hidden in a footer instead of front and center.`,
          `It's slow — if a page takes more than a few seconds to load, a big share of visitors leave before they see it.`,
          `It's confusing on a phone — most visitors are on mobile, and a site that is hard to use on a phone loses them instantly.`,
          `It doesn't answer their questions — no clear pricing, services, hours, or service area, so they bounce to a competitor who is upfront.`,
        ],
      },
      {
        h: `The quiet trust-killers`,
        body: [
          `Sometimes the site is found and easy to use, but something subtle makes visitors not trust you enough to reach out. Trust is fragile online, and small signals do a lot of the deciding.`,
          `The usual suspects: a design that looks dated or thrown together, stock photos instead of real images of your work, no reviews or testimonials, outdated information like last year's hours, spelling and grammar mistakes, or missing basics like a real address and phone number. Any one of these plants a seed of doubt. A customer who is not quite sure you are legitimate simply moves on to someone who feels safer.`,
        ],
      },
      {
        h: `The missing call to action`,
        body: [
          `This deserves its own section because it is the single most common conversion mistake. A website can be beautiful, fast, and full of good information and still fail because it never actually asks the visitor to do anything.`,
          `Every page should make the next step obvious: call this number, book here, get a quote, visit us. Your phone number belongs at the top of the page, not buried at the bottom. A visitor should never have to hunt for how to become a customer. If your site is getting traffic but no calls, this is the first thing to fix — and often the fastest.`,
        ],
      },
      {
        h: `How to diagnose and fix it`,
        body: [
          `Work through it in order. First, check your visitor numbers to learn whether you have a traffic problem or a conversion problem. If it is traffic, focus on your Google Business Profile, local SEO, and pointing every channel you have back to the site. If it is conversion, pull up your site on your own phone and try to become a customer — you will feel exactly where it goes wrong.`,
          `Often the fixes are small and fast: move the phone number up, add real photos, clarify your services, speed up the pages, add a clear button. If it feels like too much to untangle alone, that is fixable too — we help local businesses turn quiet sites into ones that actually bring in work, and we are happy to take an honest look. You can reach us at (707) 520-9179.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Why is my website not getting any customers?`,
        a: `It is almost always one of two things: not enough of the right people are finding it, or the people who find it are not taking action. Check your visitor numbers first — low traffic is a findability problem, while decent traffic with no calls is a conversion problem. Each has different, fixable causes.`,
      },
      {
        q: `Why does my website get visitors but no calls or sales?`,
        a: `That is a conversion problem. Common causes are no clear call to action, a phone number buried at the bottom, slow pages, a site that is hard to use on a phone, or missing information like pricing and hours. Pull the site up on your own phone and try to become a customer — you will spot the friction fast.`,
      },
      {
        q: `My website looks nice but doesn't work — why?`,
        a: `Because looking good and working are different jobs. A pretty site can still fail if nobody finds it, if it loads slowly, if it never asks the visitor to take a next step, or if small trust signals are missing. Effectiveness comes from clarity and conversion, not just appearance.`,
      },
      {
        q: `How do I get more customers from my website?`,
        a: `Diagnose which problem you have first. For traffic, complete your Google Business Profile, add real service pages, gather reviews, and point every channel back to the site. For conversion, make the next step obvious, put your phone number up top, speed up the pages, and make sure it works cleanly on a phone.`,
      },
    ],
    related: ['get-found-on-google-maps', 'what-makes-a-website-look-professional', 'local-seo-sonoma-county'],
  },

  {
    slug: 'what-makes-a-website-look-professional',
    metaTitle: 'What Makes a Website Look Professional (2026) | Nuvion Solutions',
    title: 'What Makes a Website Look Professional and Trustworthy',
    metaDesc: `What makes a website look professional and trustworthy? The specific design, speed, and content signals that earn a visitor's trust — and the ones that break it.`,
    excerpt: `The concrete signals that make a site feel professional and trustworthy — clean design, speed, real photos, and the small details that quietly earn a customer's trust.`,
    category: 'Getting started',
    date: '2026-07-21',
    readMins: 7,
    intro: [
      `A professional-looking website is not about flashy design or expensive animations. It comes down to a handful of concrete things: a clean and consistent look, fast loading, real photos, clear and error-free writing, easy navigation, and the small trust signals that tell a visitor you are a real, established business. Get those right and even a simple site looks credible.`,
      `This matters because visitors judge fast — studies put it at well under a second — and most of that snap judgment is about whether they trust you enough to keep reading. A customer comparing two Santa Rosa contractors will lean toward the one whose site feels solid, often without being able to say why. Here is what actually creates that feeling.`,
    ],
    sections: [
      {
        h: `Clean, consistent design`,
        body: [
          `The single biggest driver of a professional look is consistency. Amateur sites tend to mix three fonts, five colors, and photos of every size. Professional sites pick a small, deliberate palette and stick to it everywhere.`,
        ],
        list: [
          `Two fonts at most — one for headings, one for body text.`,
          `A tight color palette, usually two or three colors plus neutrals, used consistently.`,
          `Generous white space so the page can breathe instead of cramming everything in.`,
          `Consistent spacing, button styles, and image sizes from page to page.`,
        ],
      },
      {
        h: `Speed and mobile — the invisible essentials`,
        body: [
          `You do not need a "designed" look so much as a disciplined one. Restraint reads as professional; clutter reads as amateur. But a site can be beautiful and still feel broken if it is slow or awkward on a phone. These two are invisible when they are right and glaring when they are wrong.`,
          `Most visitors are on mobile, so a professional site works flawlessly on a phone first — readable text, tappable buttons, no sideways scrolling. And it loads fast; when a page takes more than a few seconds, a large share of people leave before they ever see how nice it looks. Speed and mobile are not design flourishes. They are the floor, and a lot of otherwise-decent sites fall through it.`,
        ],
      },
      {
        h: `Real photos beat stock every time`,
        body: [
          `Nothing signals "real business" like real images, and nothing signals "template" like obvious stock photos. That smiling headset call-center photo everyone recognizes actively erodes trust, because visitors have seen it on a hundred other sites.`,
          `Use genuine photos of your work, your space, your team, and your products. They do not need to be shot by a professional — a clean, well-lit phone photo of your actual work beats a glossy generic stock image every time. For a Sonoma County business, real local photos also quietly reinforce that you are actually here, actually doing the work.`,
        ],
      },
      {
        h: `Clear, error-free writing`,
        body: [
          `Writing does more for credibility than most owners realize, in both directions. Clear, confident, mistake-free copy builds trust. Typos, broken grammar, and vague filler quietly destroy it — if the site is sloppy, a visitor wonders whether the work will be too.`,
          `You do not need to sound like a marketing brochure. In fact, plain and specific beats clever and vague. Say exactly what you do, who you help, and what to do next, in normal language, with the spelling and grammar tidy. Proofread every page, or have someone do it for you. It is the cheapest credibility upgrade there is.`,
        ],
      },
      {
        h: `The small trust signals`,
        body: [
          `Beyond design and content, a set of small details tells visitors you are legitimate and safe to contact. Individually minor, together they decide whether someone reaches out:`,
        ],
        list: [
          `A real phone number and address, easy to find on every page.`,
          `Genuine reviews or testimonials from real customers.`,
          `A secure connection — the padlock and https, not a "Not Secure" warning in the browser.`,
          `Current information — this year's hours, current services, nothing visibly outdated.`,
          `An "about" page with real faces and a real story, so visitors know who they are dealing with.`,
        ],
      },
      {
        h: `Easy to navigate`,
        body: [
          `A professional site is one a visitor never has to think about using. The menu is simple and obvious, the important things — services, contact, pricing — are one click away, and the path to becoming a customer is clear from any page.`,
          `Confusing navigation reads as unprofessional even when the design is nice, because it makes the visitor work. The test is simple: can a first-time visitor find what they need and figure out how to contact you within a few seconds, on their phone, without scrolling around lost? If yes, the site feels professional. If they have to hunt, it does not — no matter how pretty it is.`,
        ],
      },
    ],
    faqs: [
      {
        q: `What makes a website look professional?`,
        a: `Consistency more than anything: a small, deliberate set of fonts and colors, generous white space, fast loading, real photos instead of stock, clear and error-free writing, and simple navigation. Even a basic site looks credible when those fundamentals are handled with discipline.`,
      },
      {
        q: `Why does my website look unprofessional or cheap?`,
        a: `Usually it is a few common culprits: too many fonts and colors, obvious stock photos, cramped layouts with no white space, slow loading, typos, or a site that is awkward on a phone. Fixing those — often small changes — does more for a professional look than any flashy feature.`,
      },
      {
        q: `Do real photos really matter that much?`,
        a: `Yes. Real images of your work, space, and team signal a genuine business, while recognizable stock photos signal a template and quietly erode trust. A clean phone photo of your actual work beats a glossy generic image every time.`,
      },
      {
        q: `How quickly do visitors judge a website?`,
        a: `Almost instantly — research puts the first impression at well under a second, and much of that judgment is about whether they trust you enough to keep reading. That is why clean design, speed, and real photos matter so much: they do their work before a visitor reads a single word.`,
      },
    ],
    related: ['why-my-website-gets-no-customers', 'small-business-website-checklist', 'choose-web-designer-santa-rosa'],
  },

  {
    slug: 'move-website-off-wix-squarespace',
    metaTitle: 'How to Move Your Website Off Wix or Squarespace (2026) | Nuvion Solutions',
    title: 'How to Move Your Website Off Wix or Squarespace (and Why)',
    metaDesc: `Thinking of leaving Wix or Squarespace? Why businesses move off builders, what you can and can't take with you, and how to switch without losing your site or SEO.`,
    excerpt: `Why businesses outgrow Wix and Squarespace, what you actually own on those platforms, and how to move to a site you control without losing your Google rankings.`,
    category: 'Before you hire',
    date: '2026-07-24',
    readMins: 7,
    intro: [
      `People move off Wix and Squarespace for a mix of reasons — rising monthly fees, hitting the ceiling of what the platform can do, slow load times, or the growing realization that they are renting forever and will never actually own their site. If any of that sounds familiar, the good news is that moving is very doable, and it usually leaves you with a faster, cheaper-to-run site you truly own.`,
      `The catch is that these platforms are built to keep you in. You cannot simply export your Wix or Squarespace site and drop it somewhere else — they are closed systems. But your content, your domain, and your Google presence are all yours, and with the right approach the move is smooth and your rankings come through intact. Here is how it works.`,
    ],
    sections: [
      {
        h: `Why businesses leave the builders`,
        body: [
          `Wix and Squarespace are fine places to start, and for a simple site they can be enough. Businesses tend to outgrow them for consistent, practical reasons:`,
        ],
        list: [
          `The monthly fees add up — a few hundred dollars a year, forever, with nothing owned at the end.`,
          `You hit a wall — a custom feature, integration, or design change the platform simply will not allow.`,
          `Speed — builder sites often carry heavy code that slows load times, which hurts both visitors and Google.`,
          `You don't own it — you are renting the platform indefinitely, and leaving means starting over unless you plan for it.`,
          `Support is a ticket queue — when something breaks, there is no one who knows your business to call.`,
        ],
      },
      {
        h: `What you can and can't take with you`,
        body: [
          `This is the part that surprises people, so it is worth being precise. On a closed platform, some things are yours and some are locked in:`,
        ],
        list: [
          `Your domain name — yours, and it moves with you, as long as it is registered in your name (check this).`,
          `Your content — your text, images, and logo are yours to take, even if you have to copy them out manually.`,
          `Your Google rankings and reviews — tied to your domain and Google Business Profile, not to the platform, so they carry over.`,
          `The actual design and code — this generally does NOT come with you, because it only works inside that platform.`,
        ],
      },
      {
        h: `How the move actually works`,
        body: [
          `In other words, you keep what matters — your domain, your content, and your search presence — and you rebuild the site itself on a foundation you own. That rebuild is also your chance to fix everything that was holding the old site back. A migration is not as scary as it sounds when it is done in the right order:`,
        ],
        list: [
          `Confirm your domain is registered in your name and that you can access it — this is the one thing you must control.`,
          `Save your content — copy out your text, download your images and logo, and note your current pages.`,
          `Build the new site on a platform you own, using your existing content as the starting point.`,
          `Map your old pages to the new ones so links and rankings transfer cleanly.`,
          `Point your domain to the new site and go live, then keep the old subscription just long enough to confirm everything moved.`,
        ],
      },
      {
        h: `Protecting your Google rankings`,
        body: [
          `Done carefully, visitors never notice a gap — they type your same web address and land on the new, better site. Still, the biggest and most legitimate worry about moving is losing the search rankings you have built. It is a real risk if the move is careless, and a non-issue if it is done right.`,
          `The key is redirects. When a page's address changes, a "301 redirect" tells Google the page has permanently moved, so the ranking follows to the new location. Map every important old page to its new home, keep your content and structure recognizable, and keep your domain the same. Do that and your rankings transfer. Skip it and you can drop out of search overnight — which is exactly why the migration order matters and why it is worth doing deliberately.`,
        ],
      },
      {
        h: `What you gain by owning it`,
        body: [
          `Once you are off the builder and on a site you own, a few things change for the better. There is no monthly platform rent for the site itself — you only pay for hosting, which is small — and you are free to host anywhere. You can make any change you want without hitting a platform's limits. And when you need help, there is a real person who knows your site.`,
          `That is exactly how we build. Whether you pay once — $600, $900, or from $1,800 — or monthly at $49, $89, or $149 with $0 down, you own your design, files, domain, and code with no lock-in. Optional care plans start at $29 a month for hosting, backups, security, and monitoring, and you can cancel those anytime because the site is already yours.`,
        ],
      },
      {
        h: `Is it worth the switch?`,
        body: [
          `If your builder site is simple, cheap enough, and doing everything you need, there is no urgency — do not fix what is not broken. But if you are frustrated by the fees, blocked by the limits, or uneasy that you will be renting forever, moving is usually worth it. The one-time cost of a site you own is often close to a couple of years of builder subscriptions, and after that you are not paying platform rent at all.`,
          `The best time to move is before you have built five more years of content and rankings on rented ground. If you are weighing it, we are happy to look at your current site and give you a straight answer about whether switching makes sense for you. Call us at (707) 520-9179.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Can I move my website off Wix or Squarespace?`,
        a: `Yes, though not by simply exporting it — those are closed platforms, so the site itself has to be rebuilt. But your domain, your content, and your Google rankings are all yours and carry over. Done in the right order, the move is smooth and visitors never notice a gap.`,
      },
      {
        q: `Will I lose my Google rankings if I move off Wix?`,
        a: `Not if the move is done carefully. The key is mapping every old page to its new address with 301 redirects and keeping your domain and content recognizable, which tells Google the pages have permanently moved. Rankings transfer when this is done right and can drop if it is skipped, so it is worth doing deliberately.`,
      },
      {
        q: `Why should I leave Squarespace or Wix?`,
        a: `Common reasons are ongoing monthly fees with nothing owned at the end, hitting the limits of what the platform allows, slow load times, and the realization that you are renting forever. If your builder site does everything you need, there is no rush — but if any of those frustrate you, owning your own site usually pays off.`,
      },
      {
        q: `Do I own my domain if I built my site on Wix?`,
        a: `You should, but check. If you registered the domain in your own name it is yours and moves with you. If the platform registered it for you, make sure it is in your name and that you can access it before you plan any move — your domain is the one piece you must control.`,
      },
    ],
    related: ['do-i-own-my-website', 'website-cost-sonoma-county', 'ai-website-builder-vs-real-designer'],
  },

  {
    slug: 'small-business-website-checklist',
    metaTitle: 'The Small Business Website Checklist (2026) | Nuvion Solutions',
    title: 'The Small Business Website Checklist: What Every Site Needs',
    metaDesc: `The practical checklist of what every small business website needs — essential pages, contact details, trust signals, and the basics that turn visitors into customers.`,
    excerpt: `A practical, no-jargon checklist of what every small business website needs to look credible, get found, and turn visitors into customers.`,
    category: 'Getting started',
    date: '2026-07-27',
    readMins: 8,
    intro: [
      `Every effective small business website covers the same fundamentals, no matter the industry. It has a few essential pages, makes your contact information impossible to miss, earns trust with real photos and reviews, loads fast, works on phones, and gives every visitor an obvious next step. Miss those and even a good-looking site underperforms; nail them and a simple site does its job.`,
      `This is the checklist we walk through for every build, boiled down to plain language. Use it to plan a new site, or to audit the one you already have — go down the list and see where yours falls short. Most struggling small business sites are missing three or four of these, and fixing them is often quick.`,
    ],
    sections: [
      {
        h: `The essential pages`,
        body: [
          `You do not need many pages — you need the right ones, each doing a clear job. For most small businesses, these cover it:`,
        ],
        list: [
          `Home — who you are, what you do, who you serve, and an immediate next step, all visible without scrolling.`,
          `Services (or menu, or products) — what you offer, clearly laid out, ideally with pricing where you are comfortable.`,
          `About — the real people and story behind the business, which builds trust more than owners expect.`,
          `Contact — phone, email, hours, service area, and an easy way to reach you or book.`,
        ],
      },
      {
        h: `Contact info that's impossible to miss`,
        body: [
          `That is a complete site for many businesses — add more, like a portfolio, testimonials, or an FAQ, only as you have a real reason to. But of everything on the site, contact information is the most common thing done wrong, and the most costly.`,
          `The entire point of the site is to turn a visitor into a customer, and they cannot become one if they have to hunt for how to reach you. Put your phone number at the top of every page, not buried in the footer. Make it tappable on a phone so one touch dials you. Include your hours, your service area or address, and an obvious way to get in touch on every page. If a first-time visitor cannot find how to contact you within a few seconds, the site is leaking customers no matter how nice it looks.`,
        ],
      },
      {
        h: `The trust signals`,
        body: [
          `Visitors decide whether you are legitimate in seconds, based on signals more than words. Make sure yours are all present:`,
        ],
        list: [
          `Real photos of your work, space, team, or products — not stock images.`,
          `Genuine reviews or testimonials from actual customers.`,
          `A secure connection (the padlock and https), so browsers never warn visitors away.`,
          `Current, accurate information — this year's hours, current services, nothing stale.`,
          `A real business name, address, and phone number that match your other listings.`,
        ],
      },
      {
        h: `The technical must-haves`,
        body: [
          `These are invisible when they work and fatal when they do not. None are glamorous, and skipping any of them undercuts everything else:`,
        ],
        list: [
          `Mobile-friendly — most visitors are on a phone, so the site must work flawlessly there first.`,
          `Fast loading — more than a few seconds and a large share of visitors leave before the page appears.`,
          `Clear navigation — a simple menu where the important pages are one click away.`,
          `Basic SEO — honest page titles and headings that say what you do and where, so you can be found.`,
          `Secure hosting with backups — so the site stays up and a problem never wipes it out.`,
        ],
      },
      {
        h: `The conversion pieces`,
        body: [
          `A site can have every page and still bring in nothing if it never asks the visitor to act. These are the elements that turn a nice brochure into a working site:`,
        ],
        list: [
          `A clear call to action on every page — call, book, get a quote, visit — so the next step is never a mystery.`,
          `An obvious primary action, usually your phone number or a booking button, front and center.`,
          `A short, painless contact form for people who would rather type than call.`,
          `Reasons to choose you — what makes you different, stated plainly, not left for the visitor to guess.`,
        ],
      },
      {
        h: `Bonus points`,
        body: [
          `Once the essentials are handled, a few extras separate a good site from a great one. None are required, and none matter until the fundamentals above are solid — but when they are, these help:`,
        ],
        list: [
          `A connected, complete Google Business Profile, so you show up on Google Maps.`,
          `Local pages or content for the towns you serve, where it is genuine and useful.`,
          `A simple way to collect reviews from happy customers.`,
          `A blog or guides section, if you will actually keep it updated, to help you get found.`,
        ],
      },
    ],
    faqs: [
      {
        q: `What does every small business website need?`,
        a: `The essentials are a few clear pages (home, services, about, contact), contact information that is impossible to miss, trust signals like real photos and reviews, fast mobile-friendly performance, and an obvious call to action on every page. Those fundamentals matter more than any fancy feature.`,
      },
      {
        q: `What pages should a small business website have?`,
        a: `For most, four pages do the job: a home page, a services or menu page, an about page, and a contact page with your phone, hours, and service area. Add extras like a portfolio, testimonials, or a blog only when you have a real reason, not to pad the count.`,
      },
      {
        q: `What is the most important thing on a small business website?`,
        a: `Contact information that is impossible to miss, paired with a clear next step. The whole point is to turn a visitor into a customer, so your phone number belongs at the top of every page, tappable on a phone, with an obvious way to reach you. Many sites bury this and quietly lose customers.`,
      },
      {
        q: `How do I know if my website is missing something?`,
        a: `Go down this checklist and audit your own site, ideally on your phone: are the essential pages there, is your contact info obvious, are the trust signals present, does it load fast, and does every page ask the visitor to act? Most struggling sites are missing three or four items, and fixing them is usually quick.`,
      },
    ],
    related: ['do-i-need-a-website-small-business', 'what-makes-a-website-look-professional', 'how-long-to-build-a-website'],
  },
];
