import { Helmet } from "react-helmet-async";

import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroImg from "@/assets/guide-hero-google-ads.jpg";

const tocItems = [
  { id: "why-google-ads", label: "Why Google Ads for Service Businesses" },
  { id: "how-it-works", label: "How Google Ads Actually Works" },
  { id: "campaign-types", label: "Choosing the Right Campaign Type" },
  { id: "keyword-strategy", label: "Keyword Strategy for Service Businesses" },
  { id: "ad-copy", label: "Writing Ads That Convert" },
  { id: "landing-pages", label: "Landing Pages That Close" },
  { id: "budgeting-bidding", label: "Budgeting & Bidding" },
  { id: "tracking-optimization", label: "Tracking & Optimization" },
  { id: "common-mistakes", label: "Mistakes to Avoid" },
  { id: "conclusion", label: "DIY vs. Hiring an Agency" },
];

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 border-primary pl-6 py-2">
      <p className="text-xl md:text-2xl font-bold text-foreground leading-snug italic">
        {children}
      </p>
    </blockquote>
  );
}

function InlineCTA() {
  return (
    <div className="my-12 rounded-xl bg-dark p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary blur-[100px]" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
          Want Us to Manage Your Google Ads for&nbsp;You?
        </h3>
        <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
          We build and manage Google Ads campaigns for local service businesses across Texas and the Southeast. If you'd rather focus on running your business, let's&nbsp;talk.
        </p>
        <a
          href="/contact"
          className="btn-primary text-sm !px-6 !py-3"
        >
          Let's Talk <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function GoogleAdsGuide() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>The Complete Google Ads Guide for Local Service Businesses (2026) | Holy Webs</title>
        <meta
          name="description"
          content="The definitive 2026 guide to Google Ads for local service businesses. Learn campaign setup, keyword strategy, ad copy, bidding, and how to stop wasting money on clicks that never convert."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://holywebs.com/resources/google-ads-guide-contractors" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Complete Google Ads Guide for Local Service Businesses (2026)",
            description: "The definitive 2026 guide to Google Ads for local service businesses.",
            author: { "@type": "Organization", name: "Holy Webs" },
            publisher: { "@type": "Organization", name: "Holy Webs" },
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/75" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Google Ads Guide" }]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Pillar Guide</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 30 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            The Complete Google Ads Guide for Local Service Businesses (2026)
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">
            Everything you need to know about running Google Ads that actually generate calls, booked jobs, and real revenue for your service business.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky TOC */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Table of Contents
                </h2>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-1.5 pl-3 border-l-2 transition-colors ${
                        activeSection === item.id
                          ? "border-primary text-primary font-semibold"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="flex-1 min-w-0 prose prose-lg max-w-none [&>p+p]:mt-4 [&>ul+p]:mt-4 [&>p+ul]:mt-4">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Google Ads is the fastest way to get your phone ringing. But for most service businesses, it's also the fastest way to burn through money with nothing to show for it. The difference between a campaign that prints money and one that drains your bank account comes down to strategy, structure, and knowing what levers to pull.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                This guide covers everything you need to know to run profitable Google Ads campaigns as a local service business. Whether you're spending $500 a month or $5,000, the principles are the same. We'll walk through campaign types, keyword research, ad copy, landing pages, budgeting, tracking, and the mistakes that cost business owners thousands every month.
              </p>

              {/* Section 1 */}
              <h2 id="why-google-ads" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Why Google Ads Works for Local Service Businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When someone searches "emergency plumber near me" or "roof repair in Dallas," they're not browsing. They have a problem right now and they're looking for someone to solve it. Google Ads puts your business at the very top of that search results page, above the organic results, above the Map Pack, above everything.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's the fundamental advantage of Google Ads for service businesses: <strong className="text-foreground">you're reaching people with active intent</strong>. They're not scrolling social media and stumbling across your ad. They typed a specific query because they need a specific service. And they need it now.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Consider the numbers. Google processes over <strong className="text-foreground">8.5 billion searches per day</strong>. For local service searches, the top three ad positions capture roughly 40% of all clicks. Because these searchers have high purchase intent, Google Ads typically delivers the highest return on ad spend of any digital advertising channel for service businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                SEO is critical for long-term visibility. But it takes months to build momentum. Google Ads can generate leads on day one. The businesses that grow fastest use both, SEO for the long game and Google Ads for immediate revenue while SEO compounds in the background.
              </p>

              <PullQuote>
                "Google Ads doesn't create demand. It captures demand that already exists. Your customers are searching right now. The only question is whether they find you or your competitor."
              </PullQuote>

              {/* Section 2 */}
              <h2 id="how-it-works" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                How Google Ads Actually Works
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Before you spend a dollar, you need to understand the mechanics. Google Ads operates on an auction system. Every time someone types a search query, Google runs an instant auction among all advertisers bidding on keywords relevant to that query.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Auction System</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your position in the search results is determined by your <strong className="text-foreground">Ad Rank</strong>, which is calculated by multiplying your maximum bid by your Quality Score. This means you don't necessarily need the highest bid to win the top spot. A well-optimized ad with a high Quality Score can outrank a competitor who's bidding more.
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Max CPC Bid:</strong> The maximum amount you're willing to pay per click. You'll often pay less than this because you only need to beat the next advertiser's Ad Rank.</li>
                <li><strong className="text-foreground">Quality Score:</strong> Google's 1–10 rating of your ad's relevance, based on three factors: expected click-through rate, ad relevance, and landing page experience.</li>
                <li><strong className="text-foreground">Ad Rank:</strong> Max Bid x Quality Score. Higher Ad Rank = better position = lower actual cost per click.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                This is why Quality Score matters so much. A business with a Quality Score of 8 bidding $10 per click (Ad Rank: 80) will outrank a competitor with a Quality Score of 4 bidding $15 per click (Ad Rank: 60), and pay less for every click.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Key Metrics You Need to Know</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">CPC (Cost Per Click):</strong> What you actually pay each time someone clicks your ad.</li>
                <li><strong className="text-foreground">CTR (Click-Through Rate):</strong> The percentage of people who see your ad and click it. A higher CTR signals relevance and improves your Quality Score.</li>
                <li><strong className="text-foreground">Conversion Rate:</strong> The percentage of clicks that result in a desired action, a phone call, form submission, or booked appointment.</li>
                <li><strong className="text-foreground">Cost Per Lead (CPL):</strong> Your total ad spend divided by the number of leads generated. This is the metric that actually matters for your bottom line.</li>
                <li><strong className="text-foreground">ROAS (Return on Ad Spend):</strong> Revenue generated divided by ad spend. If you spend $2,000 and generate $20,000 in booked jobs, your ROAS is 10x.</li>
              </ul>

              <InlineCTA />

              {/* Section 3 */}
              <h2 id="campaign-types" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Choosing the Right Campaign Type
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Google offers several campaign types. Not all of them make sense for local service businesses. Here's what you need to know about each one and which ones to prioritize.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Google Local Services Ads (LSAs)</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you run a local service business and you're not running LSAs, start here. Local Services Ads appear at the very top of search results, even above traditional Google Ads. They display your business name, star rating, hours, and a "Google Guaranteed" or "Google Screened" badge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The biggest advantage: <strong className="text-foreground">you pay per lead, not per click</strong>. If someone calls you through your LSA, you only pay for that call. If they click your ad but don't call, you pay nothing. And if you receive a spam call or a call for a service you don't offer, you can dispute the charge.
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Best for:</strong> All local service businesses, from plumbers and roofers to accountants and law firms.</li>
                <li><strong className="text-foreground">Typical cost per lead:</strong> $15–$75 depending on your trade and market.</li>
                <li><strong className="text-foreground">Requirements:</strong> Background check, license verification, proof of insurance.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Search Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional search campaigns are the bread and butter of Google Ads for service businesses. Your text ads appear when someone searches for specific keywords you're targeting. You choose the keywords, write the ad copy, set the budget, and pay per click.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Search campaigns give you the most control over targeting and messaging. You can target specific services ("AC repair"), specific locations ("plumber in Arlington TX"), and even specific situations ("emergency water heater replacement"). Because you're targeting people actively searching for your services, conversion rates tend to be high.
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Best for:</strong> High-intent lead generation with precise targeting.</li>
                <li><strong className="text-foreground">Typical CPC:</strong> $5–$50+ depending on trade, market, and competition.</li>
                <li><strong className="text-foreground">Pro tip:</strong> Start with exact match and phrase match keywords only. Broad match will drain your budget on irrelevant searches.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Performance Max Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                Performance Max (PMax) is Google's AI-driven campaign type that runs ads across all Google properties: Search, Display, YouTube, Gmail, and Maps. Google's algorithm decides where and when to show your ads based on the conversion signals it collects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                PMax can work well for service businesses, but with a major caveat: <strong className="text-foreground">you lose visibility into where your budget is being spent</strong>. Google might be showing your ads on YouTube or the Display Network where conversion rates are much lower. We recommend running PMax only after you have a well-performing Search campaign with strong conversion data.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Display and YouTube Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                Display ads (banner ads on websites) and YouTube ads are awareness tools, not lead generation tools for service businesses. They can be useful for retargeting (showing ads to people who already visited your website), but as primary campaigns they rarely produce a positive return for service businesses. Save these for later once your search campaigns are profitable.
              </p>

              <PullQuote>
                "Start with Local Services Ads and Search campaigns. Everything else is a distraction until those two are profitable."
              </PullQuote>

              {/* Section 4 */}
              <h2 id="keyword-strategy" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Keyword Strategy for Service Businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your keyword strategy determines who sees your ads. Get this wrong and you'll pay for clicks from people who will never become customers. Get it right and every dollar spent drives qualified leads to your phone.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Three Match Types</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google offers three keyword match types, and understanding them is critical:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Exact Match [keyword]:</strong> Your ad shows only when someone searches for that exact term or very close variations. Example: [plumber in dallas] will trigger for "plumber in dallas" but not "cheap plumber in dallas." This gives you the tightest control and typically the highest conversion rates.</li>
                <li><strong className="text-foreground">Phrase Match "keyword":</strong> Your ad shows when someone's search includes your keyword phrase in order. Example: "AC repair" will trigger for "AC repair near me" and "emergency AC repair cost" but not "repair my AC unit." Good balance of reach and relevance.</li>
                <li><strong className="text-foreground">Broad Match keyword:</strong> Your ad shows for searches Google considers related to your keyword. Example: plumber could trigger for "how to fix a leaky faucet" or "plumbing school near me." This is where most businesses waste money. Avoid broad match unless you have extensive negative keyword lists and solid conversion tracking.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Building Your Keyword List</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start with your core services and build outward. For each service, create variations that include:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Service + location:</strong> "roof repair dallas," "plumber arlington tx," "hvac installation waco"</li>
                <li><strong className="text-foreground">Service + modifier:</strong> "emergency plumber," "affordable roof replacement," "licensed electrician"</li>
                <li><strong className="text-foreground">Service + intent:</strong> "hire a plumber," "get a roofing estimate," "AC repair cost"</li>
                <li><strong className="text-foreground">Problem-based:</strong> "water heater not working," "AC blowing warm air," "roof leaking"</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Group related keywords into tightly themed ad groups. Don't throw "AC repair," "AC installation," and "AC maintenance" into the same ad group. Each service deserves its own ad group with tailored ad copy. Tight ad groups improve Quality Score and lower your cost per click.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Negative Keywords: Your Budget's Best Friend</h3>
              <p className="text-muted-foreground leading-relaxed">
                Negative keywords prevent your ads from showing on irrelevant searches. This is where most campaigns leak money. Without a solid negative keyword list, you'll pay for clicks from people searching for DIY tutorials, job openings, product reviews, and services you don't offer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every service business should start with these negative keywords on day one:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">DIY/educational:</strong> how to, tutorial, DIY, course, class, school, training, certification</li>
                <li><strong className="text-foreground">Employment:</strong> jobs, hiring, salary, career, apprentice, indeed, glassdoor</li>
                <li><strong className="text-foreground">Products/parts:</strong> parts, supplies, wholesale, depot, lowes, amazon</li>
                <li><strong className="text-foreground">Non-service areas:</strong> Cities and states you don't serve</li>
                <li><strong className="text-foreground">Irrelevant modifiers:</strong> free, cheap (if you don't compete on price), used</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Review your Search Terms Report weekly for the first 30 days, then bi-weekly after that. Every time you see an irrelevant search that triggered your ad, add it as a negative keyword. This ongoing hygiene is what separates profitable campaigns from money pits.
              </p>

              <InlineCTA />

              {/* Section 5 */}
              <h2 id="ad-copy" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Writing Ads That Actually Convert
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your ad copy has one job: convince a searcher to click your ad instead of the three others next to it. You have about 2 seconds to make your case. Every word needs to earn its place.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Responsive Search Ads (RSAs)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google now uses Responsive Search Ads as the default format. You provide up to 15 headlines and 4 descriptions, and Google tests different combinations to find the best performers. Here's how to approach them strategically:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Include your primary keyword in at least 3 headlines.</strong> If you're targeting "AC repair in Houston," make sure several headlines include that phrase or close variations.</li>
                <li><strong className="text-foreground">Lead with your strongest differentiator.</strong> Pin your best headline to position 1. This could be "Licensed & Insured Since 2008" or "Same-Day Emergency Service."</li>
                <li><strong className="text-foreground">Include specific numbers.</strong> "500+ 5-Star Reviews," "Serving Houston for 15 Years," "$0 Diagnostic Fee." Specificity builds trust and stands out from generic competitor ads.</li>
                <li><strong className="text-foreground">Use a clear call to action.</strong> "Call Now for a Free Estimate," "Book Your Appointment Today," "Get a Quote in 60 Seconds."</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Ad Extensions (Assets)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ad extensions (now called Assets in Google's interface) add extra information below your ad and increase your ad's visual footprint on the page. More real estate means higher click-through rates. Use all of these:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Sitelinks:</strong> Link to specific service pages, your about page, and your contact page. "AC Repair," "Furnace Installation," "About Our Team," "Free Estimates."</li>
                <li><strong className="text-foreground">Callout extensions:</strong> Short phrases highlighting benefits. "Licensed & Insured," "24/7 Emergency Service," "Family Owned Since 2010."</li>
                <li><strong className="text-foreground">Call extensions:</strong> Display your phone number directly in the ad. Essential for mobile searchers who want to call immediately.</li>
                <li><strong className="text-foreground">Location extensions:</strong> Show your business address. Connects to your Google Business Profile and builds local trust.</li>
                <li><strong className="text-foreground">Structured snippets:</strong> List specific services: "Services: AC Repair, Furnace Installation, Duct Cleaning, Maintenance Plans."</li>
              </ul>

              <PullQuote>
                "The best Google Ads don't try to be clever. They clearly communicate what you do, why you're the best choice, and what to do next."
              </PullQuote>

              {/* Section 6 */}
              <h2 id="landing-pages" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Landing Pages That Close the Deal
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Here's a mistake we see every week: business owners spend serious money on Google Ads and send all that traffic to their homepage. Your homepage is designed to serve multiple audiences with multiple messages. A landing page has one job: <strong className="text-foreground">convert the click into a call or form submission</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every ad group should have a dedicated landing page that matches the searcher's intent. Someone who searched "emergency AC repair" should land on a page specifically about emergency AC repair, not your general HVAC services page.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Anatomy of a High-Converting Landing Page</h3>
              <ol className="text-muted-foreground space-y-2 leading-relaxed list-decimal pl-6">
                <li><strong className="text-foreground">Headline that mirrors the search query.</strong> If someone searched "roof repair in Arlington," the page headline should be "Fast, Reliable Roof Repair in Arlington, TX." This confirms they're in the right place.</li>
                <li><strong className="text-foreground">Clear phone number above the fold.</strong> Make it clickable on mobile. This is your primary conversion point, don't bury it.</li>
                <li><strong className="text-foreground">Trust signals immediately visible.</strong> Licenses, insurance, years in business, review count, and any Google Guaranteed badges. Stack these near the top.</li>
                <li><strong className="text-foreground">Social proof.</strong> Embed 3–5 real Google reviews. Include the customer's first name and the specific service. "John replaced our entire roof in one day. Professional crew, fair price, excellent cleanup."</li>
                <li><strong className="text-foreground">Simple contact form.</strong> Name, phone, email, brief description of the issue. That's it. Every additional field reduces conversions. Don't ask for their address, budget, or preferred appointment time on the first contact.</li>
                <li><strong className="text-foreground">Service area mention.</strong> Explicitly state the cities and neighborhoods you serve. This reinforces local relevance and improves Quality Score.</li>
              </ol>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Mobile Optimization is Non-Negotiable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over <strong className="text-foreground">70% of local service searches happen on mobile devices</strong>. If your landing page doesn't load fast, display correctly, and have a prominent click-to-call button on mobile, you're throwing away the majority of your ad spend. Test every landing page on a real phone before launching your campaign.
              </p>

              <InlineCTA />

              {/* Section 7 */}
              <h2 id="budgeting-bidding" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Budgeting & Bidding Strategy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                One of the first questions business owners ask is "How much should I spend?" The honest answer depends on your market, your industry, and your revenue goals. But we can give you a framework to work from.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Setting Your Budget</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work backward from your revenue goal. If your average job is worth $5,000, and you close 40% of your leads, you need about 2.5 leads per closed job. If your cost per lead is $50, each closed job costs you $125 in ad spend, a 40:1 return. Now scale that to your capacity.
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Minimum viable budget:</strong> $1,500–$2,000/month for a single-service business in a mid-sized market. This generates enough data for optimization and enough leads to see real results.</li>
                <li><strong className="text-foreground">Competitive markets (Houston, Dallas, Austin):</strong> $3,000–$5,000+/month. Higher CPCs require higher budgets to maintain impression share.</li>
                <li><strong className="text-foreground">Multi-service or multi-location businesses:</strong> $5,000–$15,000+/month. Each service and location needs its own campaign with dedicated budget.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A common mistake is setting the budget too low and then concluding "Google Ads doesn't work." If your budget only generates 3–4 clicks per day, Google's algorithm doesn't have enough data to optimize. You'll get inconsistent results and misleading performance data. Better to start with an adequate budget for 30 days, evaluate results, and then decide whether to scale up or adjust.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Bidding Strategies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google offers several automated bidding strategies. For service businesses just starting out, here's what we recommend:
              </p>
              <ol className="text-muted-foreground space-y-2 leading-relaxed list-decimal pl-6">
                <li><strong className="text-foreground">Start with Manual CPC</strong> for the first 2–4 weeks. This gives you full control over bids and lets you see actual CPC data for your keywords.</li>
                <li><strong className="text-foreground">Switch to Maximize Conversions</strong> once you have at least 15–20 conversions in a 30-day period. This tells Google's AI to optimize bids for the actions that matter (calls and form submissions).</li>
                <li><strong className="text-foreground">Graduate to Target CPA</strong> once you know your ideal cost per lead. Set your target CPA to 80–90% of what you're willing to pay, and Google will optimize bids to hit that number while maximizing volume.</li>
              </ol>

              <PullQuote>
                "Don't judge your Google Ads spend by the cost per click. Judge it by the cost per booked job. A $30 click that turns into a $10,000 roofing job is the best money you'll ever spend."
              </PullQuote>

              {/* Section 8 */}
              <h2 id="tracking-optimization" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Tracking & Optimization
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Running Google Ads without proper tracking is like driving with your eyes closed. You might be spending $3,000 a month and have no idea which keywords, which ads, or which campaigns are actually generating phone calls and booked jobs. Without conversion tracking, you're guessing, and guessing is expensive.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">What to Track</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Phone calls from ads:</strong> Use Google's call tracking or a third-party call tracking number. Track which keywords and ads generate calls, and ideally, which calls turn into booked jobs.</li>
                <li><strong className="text-foreground">Form submissions:</strong> Track when someone fills out your contact form. Use Google Tag Manager to fire a conversion event on the thank-you page.</li>
                <li><strong className="text-foreground">Click-to-call from your website:</strong> Track when someone clicks your phone number on your landing page. This is different from calls directly from the ad.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Optimization Cycle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google Ads is not a set-it-and-forget-it channel. The best campaigns are actively managed and optimized weekly. Here's what ongoing optimization looks like:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Weekly:</strong> Review Search Terms Report, add negative keywords, check conversion rates by ad group, adjust bids on underperforming keywords, pause keywords with high spend and zero conversions.</li>
                <li><strong className="text-foreground">Bi-weekly:</strong> Test new ad copy variations, review Quality Scores, check impression share to identify budget constraints, analyze device and location performance.</li>
                <li><strong className="text-foreground">Monthly:</strong> Evaluate cost per lead by campaign and service, compare month-over-month trends, review landing page performance (bounce rates, conversion rates), adjust budgets based on seasonal demand.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Most business owners who run their own ads skip this optimization work, and it shows. Their cost per lead creeps up, they bleed money on irrelevant clicks, and eventually they conclude "Google Ads doesn't work for my business." It does work. It just requires consistent attention.
              </p>

              <InlineCTA />

              {/* Section 9 */}
              <h2 id="common-mistakes" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Common Google Ads Mistakes That Drain Your Budget
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We audit Google Ads accounts for service businesses every week. These are the mistakes we see most often, and any one of them can destroy your return on investment:
              </p>
              <ol className="text-muted-foreground space-y-4 leading-relaxed list-decimal pl-6">
                <li>
                  <strong className="text-foreground">Using broad match keywords without negative keywords.</strong> This is the number one budget killer. Broad match "plumber" will trigger your ad for "plumber salary," "plumbing school," and "plumber costume." You'll burn through your daily budget on clicks that will never convert.
                </li>
                <li>
                  <strong className="text-foreground">Sending traffic to your homepage.</strong> Your homepage serves multiple purposes for multiple audiences. A paid click needs a focused landing page with one clear call to action. Homepage bounce rates from paid traffic are typically 60–80%. Dedicated landing pages convert at 2–5x the rate.
                </li>
                <li>
                  <strong className="text-foreground">Not setting up conversion tracking.</strong> If you can't measure which clicks become calls and which calls become customers, you're flying blind. Without conversion data, Google's algorithm can't optimize, and you can't make informed decisions about where to spend more or less.
                </li>
                <li>
                  <strong className="text-foreground">Targeting too large a geographic area.</strong> A single-location plumber doesn't need to target a 50-mile radius. Focus your budget on the zip codes and cities where you actually want to work. Tighter geo-targeting means higher relevance and lower wasted spend.
                </li>
                <li>
                  <strong className="text-foreground">Running one campaign for all services.</strong> "AC repair" and "AC installation" are completely different customer intents with different keyword costs, different ad copy needs, and different landing pages. Lumping everything together tanks your Quality Score and inflates your costs.
                </li>
                <li>
                  <strong className="text-foreground">Ignoring the Search Terms Report.</strong> This report shows you the actual queries that triggered your ads. If you're not reviewing it weekly, you're guaranteed to be paying for irrelevant clicks. We've seen businesses spending 30–40% of their budget on searches that have nothing to do with their services.
                </li>
                <li>
                  <strong className="text-foreground">Not adjusting for time of day and day of week.</strong> Most service businesses get their best leads during business hours. If your ads run 24/7 with the same bids, you're paying the same amount for a 2 AM click (that nobody will answer) as a 10 AM click from a motivated homeowner. Use ad scheduling to increase bids during peak hours and reduce or pause them overnight.
                </li>
              </ol>

              <PullQuote>
                "The businesses wasting the most money on Google Ads aren't the ones spending too much. They're the ones spending without a strategy."
              </PullQuote>

              {/* Section 10 */}
              <h2 id="conclusion" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                DIY vs. Hiring an Agency
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Can you manage Google Ads yourself? Yes. Everything in this guide is actionable without any technical background. If you have 3–5 hours per week to dedicate to campaign management, keyword research, ad copywriting, landing page optimization, and ongoing analysis, you can run profitable campaigns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's a realistic breakdown of what ongoing Google Ads management looks like:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Weekly:</strong> Review Search Terms Report, add negative keywords, check conversion data, adjust bids, monitor budget pacing (1–2 hours).</li>
                <li><strong className="text-foreground">Bi-weekly:</strong> Write and test new ad copy, review Quality Scores, analyze device and location splits (1 hour).</li>
                <li><strong className="text-foreground">Monthly:</strong> Full performance review, landing page optimization, budget reallocation, competitive analysis, seasonal strategy adjustments (2–3 hours).</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                But most business owners we work with don't have that time. You're on job sites, managing teams, writing estimates, and handling customer calls. Google Ads management falls to the bottom of the priority list, and your cost per lead climbs while your competitors optimize daily.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's where we come in. At Holy Webs, we build and manage Google Ads campaigns specifically for local service businesses across Texas and the Southeast. We handle the keyword research, ad copy, landing pages, conversion tracking, and ongoing optimization so you can focus on what you do best: running your business and serving your customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you go the DIY route or bring in help, the important thing is to start with a clear strategy. Google Ads can be the single most profitable marketing channel for a local service business. But only if it's set up correctly, tracked properly, and optimized consistently. The strategies in this guide work. The question is whether you have the time and discipline to execute them every single week.
              </p>

              <InlineCTA />

              {/* Bottom Nav */}
              <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="/resources"
                  className="text-muted-foreground hover:text-primary text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Resources
                </a>
                <a
                  href="/resources/free-visibility-audit"
                  className="btn-primary text-sm !px-6 !py-3"
                >
                  Get Your Free Visibility Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
