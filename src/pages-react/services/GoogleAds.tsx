import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Search, MousePointerClick, BarChart3, Settings, Shield, DollarSign, Target, TrendingUp } from "lucide-react";
import googleAdsSearchImg from "@/assets/google-ads-search.png";
import googleAdsAnalyticsImg from "@/assets/google-ads-analytics.jpg";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "Pair paid search with organic SEO to dominate page one and reduce your cost per lead over time.", href: "/services/seo" },
  { title: "Meta Ads", description: "Expand your reach beyond Google with targeted Facebook and Instagram campaigns.", href: "/services/meta-ads" },
  { title: "Web Design", description: "Your ads are only as good as the page they land on. We build websites that convert ad traffic into calls.", href: "/services/web-design" },
  { title: "HVAC", description: "See how we use Google Ads to help HVAC companies fill their schedule year-round.", href: "/industries/hvac" },
  { title: "Electrical", description: "Electricians compete in tight local markets. See how paid search gives them an edge.", href: "/industries/electrical" },
  { title: "Plumbing", description: "Emergency plumbing searches convert fast. Learn how we capture that demand.", href: "/industries/plumbing" },
];

const features = [
  {
    icon: Search,
    title: "Keyword Research & Strategy",
    desc: "We don't guess at keywords — we research what your customers are actually searching for, analyze the competition, and build a keyword strategy around high-intent terms that drive real leads. Not traffic. Leads.",
  },
  {
    icon: MousePointerClick,
    title: "High-Converting Ad Copy",
    desc: "Your ad copy is your first impression. We write ads that speak directly to the searcher's problem, differentiate you from competitors, and compel action. Every headline and description is crafted with conversion in mind.",
  },
  {
    icon: Target,
    title: "Geo-Targeting & Local Focus",
    desc: "We target your exact service area — cities, zip codes, radius targeting — so every dollar goes toward reaching people who can actually hire you. No wasted spend on clicks from people three hours away.",
  },
  {
    icon: Shield,
    title: "Negative Keyword Management",
    desc: "Just as important as choosing the right keywords is blocking the wrong ones. We continuously build and refine negative keyword lists to prevent your budget from bleeding on irrelevant searches.",
  },
  {
    icon: Settings,
    title: "Landing Page Optimization",
    desc: "Clicks mean nothing if your landing page doesn't convert. We optimize (or build) dedicated landing pages that match search intent, load fast, and make it dead simple for visitors to take action.",
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking & Reporting",
    desc: "We set up proper conversion tracking — calls, form submissions, bookings — so you know exactly which keywords and ads are generating business. No guessing. No vanity metrics. Just real data tied to real revenue.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "We start by understanding your business, your market, and your goals. If you have existing campaigns, we audit them top to bottom. Then we build a strategy — keyword targets, budget allocation, campaign structure, and landing page plan — before touching a single setting.",
  },
  {
    step: "02",
    title: "Build & Launch",
    desc: "We build your campaigns from scratch with proper structure: tightly themed ad groups, compelling ad copy, precise geo-targeting, and conversion tracking. Everything is set up for clean data and fast optimization from day one.",
  },
  {
    step: "03",
    title: "Optimize & Scale",
    desc: "Once data flows in, we optimize relentlessly — adjusting bids, refining keywords, testing ad copy, expanding what works, and cutting what doesn't. The goal is always more qualified leads at a lower cost per acquisition.",
  },
];

const campaignTypes = [
  {
    title: "Search Campaigns",
    desc: "The bread and butter. Your ads appear when someone searches for your service on Google. This is the highest-intent traffic you can buy — people actively looking for what you offer, right now.",
    highlight: true,
  },
  {
    title: "Local Services Ads (LSAs)",
    desc: "Google's pay-per-lead ad format that appears at the very top of search results with your Google Business Profile. You only pay when a potential customer contacts you directly. Great for service businesses that want maximum visibility with minimal risk.",
    highlight: false,
  },
  {
    title: "Performance Max",
    desc: "Google's AI-driven campaign type that runs ads across Search, Display, YouTube, Gmail, and Maps from a single campaign. We use this strategically — not as a set-it-and-forget-it solution, but as a complement to well-structured search campaigns.",
    highlight: false,
  },
  {
    title: "Remarketing / Display",
    desc: "Someone visited your site but didn't convert? Remarketing keeps your business in front of them as they browse other websites. It's the digital equivalent of a follow-up — and it works because most people don't convert on the first visit.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How much should I budget for Google Ads?",
    a: "For most local service businesses, we recommend a minimum of $1,500–$3,000/month in ad spend to be competitive. Some industries with higher cost-per-click (legal, HVAC, medical) may need more. We'll analyze your market and give you a realistic budget recommendation based on your goals and competition — not a number pulled from thin air.",
  },
  {
    q: "How quickly will I see results from Google Ads?",
    a: "Unlike SEO, Google Ads can generate leads almost immediately — often within the first week. But the first 30 days are a learning phase where we're gathering data, testing, and optimizing. Expect real performance gains in months two and three as we refine targeting, copy, and bidding strategies based on actual conversion data.",
  },
  {
    q: "What's the difference between Google Ads and SEO?",
    a: "SEO is a long-term investment that builds organic visibility over time — it's slower but compounds. Google Ads gives you immediate visibility at the top of search results, but you pay for every click. The best strategy uses both: Google Ads for immediate lead flow while SEO builds your long-term foundation. They're complementary, not competing.",
  },
  {
    q: "How do you measure success with Google Ads?",
    a: "We track the metrics that actually matter: cost per lead, cost per acquisition, conversion rate, and return on ad spend (ROAS). Not impressions. Not clicks. We set up conversion tracking for calls, form submissions, and bookings so every dollar is accountable. You'll get clear monthly reports showing exactly what your investment produced.",
  },
  {
    q: "Will I be locked into a long-term contract?",
    a: "No. We work month-to-month because we believe our results should earn your business, not a contract. That said, Google Ads performs best with consistent optimization over time. Clients who commit to at least 3–6 months see significantly better results than those who start and stop.",
  },
  {
    q: "I've tried Google Ads before and it didn't work. Why would this be different?",
    a: "Most failed Google Ads campaigns share the same problems: broad keywords burning budget on irrelevant clicks, no negative keywords, weak ad copy, no conversion tracking, and landing pages that don't convert. We fix all of that. Proper campaign structure, tight keyword targeting, continuous optimization, and actual conversion tracking change everything.",
  },
  {
    q: "Do you manage the Google Business Profile too?",
    a: "While our core Google Ads service focuses on paid campaigns, we understand that your Google Business Profile is a critical part of your local presence — especially for Local Services Ads. We can advise on GBP optimization and integrate it into your overall strategy.",
  },
];

export default function GoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads Management for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="PPC campaigns built for contractors and service businesses. Targeted Google Ads that put you in front of ready-to-buy customers searching for your services." />
        <link rel="canonical" href="https://holywebs.com/services/google-ads" />
        <meta property="og:image" content="https://holywebs.com/og/og-google-ads.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Ads Management",
            description: "PPC campaigns built for contractors and service businesses. Targeted Google Ads that put you in front of ready-to-buy customers searching for your services.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "State", name: "South Carolina" }]
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Google Ads" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Google Ads Management</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Capture Demand the Moment Someone Searches for&nbsp;You
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            When someone types your service into Google, they're telling you exactly what they need — right now. Google Ads puts your business at the top of that search. We build and manage campaigns that turn those searches into phone calls, form submissions, and booked&nbsp;jobs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Get a Free Google Ads Consultation
            </Link>
            <Link
              to="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Or start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              You're Paying for Clicks. Are You Getting&nbsp;Customers?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Here's the uncomfortable truth about most Google Ads accounts: they're leaking money. Broad match keywords pulling in irrelevant traffic. No negative keyword lists. Generic ad copy that looks like every other competitor. Landing pages that send paid traffic to a homepage and hope for the best. No conversion tracking — so you don't even know what's working.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Google makes it easy to spend money. They don't make it easy to spend it well. That "Smart Campaign" Google set up for you? It's optimized for Google's revenue, not yours.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Effective Google Ads management isn't about spending more. It's about spending smarter — capturing the highest-intent searches in your area and converting them into real business at a cost that makes sense.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg h-full">
            <img src={googleAdsSearchImg} alt="Person searching on Google — capturing high-intent demand" loading="lazy" width={800} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </SectionWrapper>

      {/* Why Google Ads */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Google Ads Is Non-Negotiable for Local&nbsp;Businesses
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            No other advertising channel captures demand like Google. Here's&nbsp;why.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Highest-Intent Traffic Available</h3>
              <p className="text-muted-foreground leading-relaxed">
                When someone searches "emergency plumber near me" or "best divorce attorney in [city]," they're not browsing — they're buying. Google Ads puts you directly in front of people at the exact moment they need your service. No other platform gives you access to this level of intent.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Measurable, Accountable Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional advertising where you're guessing at impact, Google Ads gives you precise data on every dollar. You know exactly how many people saw your ad, clicked it, and converted into a lead. When managed properly, you can calculate your exact cost per customer acquisition and scale with confidence.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Precision Local Targeting</h3>
              <p className="text-muted-foreground leading-relaxed">
                You don't need to reach the whole internet — just the people in your service area who need what you offer. Google Ads lets us target by city, zip code, radius, and even specific neighborhoods. Every dollar goes toward reaching potential customers who can actually hire you.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Immediate Visibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                SEO takes months to build. Google Ads can put you at the top of search results today. For new businesses, businesses entering new markets, or anyone who needs lead flow now — Google Ads delivers immediate visibility while your organic strategy builds in the background.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Campaign Types */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Campaign Types We Manage
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Different goals require different campaign structures. We deploy the right mix for your business.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {campaignTypes.map((c) => (
            <div
              key={c.title}
              className="bg-background rounded-xl p-8 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-default"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Our Google Ads Management
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          End-to-end campaign management — not just someone checking in once a&nbsp;month.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md cursor-default">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Structured for clean data and fast optimization.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((p) => (
            <div key={p.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-extrabold text-lg">{p.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Google Ads + SEO */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg order-2 md:order-1">
            <img src={googleAdsAnalyticsImg} alt="Performance analytics dashboard showing Google Ads conversion metrics" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Google Ads + SEO: The Complete Search&nbsp;Strategy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Google Ads gives you immediate visibility. SEO builds lasting organic authority. Together, they dominate the search results page — your business appears in the paid ads at the top and the organic results below. That kind of presence builds trust and captures more clicks than either channel alone.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We recommend running both in parallel: Google Ads for immediate lead flow while SEO compounds over time. As your organic rankings grow, you can strategically reduce ad spend on keywords where you already rank — lowering your overall cost per lead while maintaining total volume.
            </p>
            <Link to="/services/seo" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
              Learn about our SEO services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Us */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Local Businesses Trust Holy Webs With Google&nbsp;Ads
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "We focus on leads and revenue — not clicks and impressions",
              "Proper conversion tracking from day one: calls, forms, and bookings",
              "Continuous negative keyword management to eliminate wasted spend",
              "Landing page strategy included — not just campaign management",
              "Month-to-month — no long-term contracts required",
              "We pair Google Ads with SEO and Meta Ads for businesses that want full-channel coverage",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <WhereWeServe serviceName="Google Ads" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
