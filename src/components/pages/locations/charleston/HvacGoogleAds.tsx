import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, MousePointerClick, TrendingUp, Phone,
  BarChart3, DollarSign, Zap, Target, Check, Clock,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const marketStats = [
  { stat: "Day 1", label: "Google Ads can put your HVAC company at the top of search results the same day you launch" },
  { stat: "80%+", label: "Of emergency HVAC searches happen on mobile — call-only ads capture them instantly" },
  { stat: "$250–$400", label: "Typical value of a single HVAC service call — making per-click costs easy to justify" },
  { stat: "3×", label: "Average HVAC search volume increase in Charleston from April to July" },
];

const adFeatures = [
  {
    icon: Zap,
    title: "Emergency & High-Intent Campaigns",
    desc: "We build campaigns around searches like \"AC repair emergency Charleston\" and \"HVAC not working Mount Pleasant\" — the calls that book immediately and pay well. No wasted spend on tire-kickers.",
  },
  {
    icon: Phone,
    title: "Call-Only & Call Extension Ads",
    desc: "When a homeowner's AC dies in July, they want to call — not browse a website. We run call-only campaigns that put your phone number front and center, skipping the click entirely.",
  },
  {
    icon: Target,
    title: "Tri-County Geographic Targeting",
    desc: "We target Charleston, Berkeley, and Dorchester counties precisely — and can dial down to neighborhoods or zip codes if your service area has limits. Every dollar stays in your territory.",
  },
  {
    icon: Clock,
    title: "Seasonal Budget Management",
    desc: "Charleston HVAC demand surges from May through September and dips in winter. We adjust your bids and budget with the seasons so you're aggressive when it matters and conservative when it doesn't.",
  },
  {
    icon: DollarSign,
    title: "Cost-Per-Lead Optimization",
    desc: "We track every call, every form fill, every booked job back to the keyword that generated it. If a campaign isn't producing calls at a profitable cost, we cut it. Simple.",
  },
  {
    icon: BarChart3,
    title: "Transparent Monthly Reporting",
    desc: "Clicks, calls, cost-per-call, estimated job value. You'll know exactly what your ads produced every month — not impressions and click-through rates that don't pay the bills.",
  },
];

const charlestonAngles = [
  {
    icon: TrendingUp,
    text: "Charleston summers routinely hit 90°F+ with high humidity — HVAC breakdowns spike hard in June and July. Google Ads lets you capture that surge from day one, before SEO rankings have time to build.",
  },
  {
    icon: MapPin,
    text: "The tri-county area is spread out — Mount Pleasant, Summerville, West Ashley, and James Island each have their own competitive landscape. We target each zone with the right bid strategy.",
  },
  {
    icon: Clock,
    text: "Hurricane prep season (May–June) drives a secondary wave of HVAC tune-up and maintenance searches. Smart campaign timing captures both the storm prep window and the peak summer emergency wave.",
  },
  {
    icon: Zap,
    text: "New construction is booming in Summerville, Nexton, and Carnes Crossroads — installation-intent searches in those ZIP codes are high-value and often underpriced by local competitors.",
  },
];

const process = [
  {
    step: "01",
    title: "Market & Competitor Audit",
    desc: "We analyze what your Charleston HVAC competitors are bidding on, what they're spending, and where they're leaving money on the table. Your campaigns start with that intelligence built in.",
  },
  {
    step: "02",
    title: "Campaign Build & Launch",
    desc: "We build tightly organized campaigns — emergency calls, maintenance, installations, seasonal offers — each with its own ad copy, extensions, and landing page. No throwing everything into one campaign.",
  },
  {
    step: "03",
    title: "Optimize for Calls, Not Clicks",
    desc: "We connect call tracking, import conversions, and optimize bids toward actual phone calls — not clicks that bounce. Your ad spend goes toward the metric that matters: someone calling your number.",
  },
  {
    step: "04",
    title: "Monthly Review & Refinement",
    desc: "We meet with you monthly to review what keywords drove calls, what the cost-per-call looked like, and what we're adjusting going into the next month. You're always in the loop.",
  },
];

const comparison = [
  { topic: "Campaign setup", them: "Generic contractor template, basic keywords", us: "HVAC-specific structure with emergency, maintenance, and install splits" },
  { topic: "Targeting", them: "Broad metro area, wasted spend in your non-service zones", us: "Zip-code level targeting matched to your actual service territory" },
  { topic: "Seasonality", them: "Same budget year-round", us: "Budget adjusted with Charleston's HVAC demand cycle" },
  { topic: "Conversion tracking", them: "Clicks only — no call attribution", us: "Every call tracked back to the keyword and campaign that generated it" },
  { topic: "Reporting", them: "Impressions, click-through rates, quality scores", us: "Calls, cost-per-call, and estimated job value" },
];

const faqs = [
  {
    q: "How quickly can Google Ads start generating calls for my HVAC business?",
    a: "Campaigns can go live in 2–3 business days after we complete the build. You can be getting calls within the first week. This is the key advantage over SEO — there's no waiting period. If it's peak season in Charleston and you need calls now, Google Ads is the lever to pull.",
  },
  {
    q: "What does it cost to run Google Ads for an HVAC company in Charleston?",
    a: "It depends on your service area and competition level. Most Charleston HVAC companies we work with spend $1,500–$4,000/month on ad spend during peak season, scaling down in winter. We can give you a specific estimate after auditing your market and competitors.",
  },
  {
    q: "Should I run Google Ads and SEO at the same time?",
    a: "Yes — they're complementary. Ads give you immediate visibility while SEO builds long-term organic rankings. Many of our clients use ads heavily in year one while their SEO gains traction, then gradually shift budget as organic calls increase.",
  },
  {
    q: "What makes HVAC Google Ads different from other industries?",
    a: "The emergency intent is unique. A homeowner with no AC in July is not comparing prices — they're calling the first number they see. Your ads need to capture that urgency with the right headlines, call extensions, and landing pages. Generic contractor ad templates miss this entirely.",
  },
  {
    q: "How do you measure ROI on Google Ads for HVAC?",
    a: "We track every inbound call back to the keyword and ad that drove it. You'll see cost-per-call by campaign, and we'll work with you to estimate job close rate and average job value. That gives you a real picture of what your ad spend is returning.",
  },
  {
    q: "Do you manage both Google Ads and SEO for HVAC companies?",
    a: "Yes — and we recommend running both if budget allows. Clients who pair paid and organic search dominate the results page at two different levels. We coordinate the strategy between both channels so they reinforce each other.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonHvacGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for HVAC Companies in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Get your HVAC company to the top of Google search in Charleston, SC with targeted pay-per-click campaigns. Call-only ads, emergency targeting, and seasonal budget management for Lowcountry contractors."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/hvac/google-ads/" />
        <meta property="og:title" content="Google Ads for HVAC Companies in Charleston, SC | Holy Webs" />
        <meta
          property="og:description"
          content="Capture high-intent HVAC searches in Charleston with Google Ads campaigns built for emergency calls, seasonal surges, and tri-county targeting."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Ads for HVAC Companies — Charleston, SC",
            description: "Google Ads management for HVAC contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Charleston" },
              { "@type": "City", name: "Mount Pleasant" },
              { "@type": "City", name: "Summerville" },
              { "@type": "City", name: "North Charleston" },
            ],
            serviceType: "Google Ads",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Ads management for HVAC contractors in Charleston, SC. Emergency call campaigns, seasonal targeting, and full tri-county coverage."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={charlestonWaterfront}
            alt="Charleston South Carolina waterfront at sunset"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "South Carolina", href: "/locations/south-carolina" },
                { label: "Charleston", href: "/locations/south-carolina/charleston" },
                { label: "HVAC" },
                { label: "Google Ads" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Charleston, SC — HVAC Google Ads
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              HVAC Google Ads That Fill Your Schedule in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              SEO takes months. When you need calls this week — or you need to dominate the summer surge — Google Ads is the lever. We build HVAC campaigns around emergency intent and seasonal demand so every dollar goes toward jobs that book.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free Campaign Audit
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free visibility audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="hvac" service="google-ads" />

      {/* Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Google Ads Works Especially Well for Charleston&nbsp;HVAC
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Most industries have a slow sales cycle — homeowners research, compare, delay. HVAC emergency calls are the opposite. The AC dies, they search, they call. The company that shows up at the top gets the job. Google Ads puts you there the moment someone needs you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((m) => (
              <div key={m.label} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{m.stat}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Charleston-Specific Angles */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Charleston's HVAC Market Has a Window. Here's How to&nbsp;Use&nbsp;It.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Lowcountry's heat and humidity create a predictable demand pattern that smart HVAC contractors can use to their advantage. When the first real heat wave of the year hits Charleston — usually late April or May — emergency searches spike overnight. The companies with campaigns already running capture that surge. The ones who wait until June are paying higher CPCs into an already-crowded auction.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We've seen Charleston HVAC searches triple from April to July. That window is worth planning around. We pre-build your campaigns, test ad copy, and get conversion tracking in place before the season starts — so when the heat hits, your campaigns are already tuned to convert.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We started Holy Webs in Charleston. We know when the first 90-degree days hit, how homeowners respond, and which neighborhoods have the highest concentration of older HVAC systems that are one summer away from failing.
              </p>
            </div>
            <div className="space-y-4">
              {charlestonAngles.map((item) => (
                <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in HVAC Google Ads Management
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Full-service campaign management built around HVAC-specific intent and Charleston market dynamics.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {adFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Comparison */}
      <SectionWrapper variant="dark">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
          How We Manage HVAC Ads Differently
        </h2>
        <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-14">
          Most agencies run the same generic contractor campaign for every client. We don't.
        </p>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
            <span className="text-sm font-bold text-dark-foreground"></span>
            <span className="text-sm font-bold text-white/50 text-center">Typical Agency</span>
            <span className="text-sm font-bold text-primary text-center">Holy Webs</span>
          </div>
          {comparison.map((row, i) => (
            <div key={row.topic} className={`grid grid-cols-3 p-4 items-center ${i < comparison.length - 1 ? "border-b border-white/10" : ""}`}>
              <span className="text-sm font-semibold text-dark-foreground">{row.topic}</span>
              <span className="text-white/50 text-xs text-center leading-relaxed px-2">{row.them}</span>
              <span className="text-white/80 text-xs text-center font-medium leading-relaxed px-2">{row.us}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          From audit to first call — here's how we get your HVAC ads running in Charleston.
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

      {/* Service Area */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            HVAC Ad Campaigns Across the Lowcountry
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We target your exact service territory — not a broad metro estimate that wastes clicks outside your reach.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Questions About HVAC Google Ads in Charleston
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

      {/* Cross-links */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            Explore More for Charleston HVAC Companies
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Local SEO for HVAC in Charleston",
                desc: "Build long-term organic rankings alongside paid search so you own page one from multiple angles.",
                href: "/locations/south-carolina/charleston/hvac/seo",
              },
              {
                title: "Google Business Profile for HVAC",
                desc: "Your GBP is the first thing homeowners see in maps. We optimize it to convert more searchers into callers.",
                href: "/locations/south-carolina/charleston/hvac/google-business-profile",
              },
              {
                title: "HVAC Digital Marketing",
                desc: "See our full approach to digital marketing for HVAC contractors — all channels, all strategy.",
                href: "/industries/hvac",
              },
            ].map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

            <NearbyMarkets markets={[
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Charleston HVAC SEO", to: "/locations/south-carolina/charleston/hvac/seo" },
        { name: "Houston HVAC Google Ads", to: "/locations/texas/houston/hvac/google-ads" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Ready to Fill Your HVAC Schedule This Season?"
        subtitle="Charleston homeowners need HVAC help year-round — but especially in summer. Let's make sure they find you first. Fill out the form and we'll audit your current ad presence for free."
      />
    </Layout>
  );
}
