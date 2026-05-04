import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MousePointerClick, Check, TrendingUp,
  Droplets, Clock, Phone, Target, DollarSign, BarChart3,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const adFeatures = [
  {
    icon: Phone,
    title: "Call-Only Ads for Emergency Intent",
    desc: "'Emergency plumber near me' and 'burst pipe repair' searches happen on mobile — and homeowners want to call, not fill out a form. Call-only ads surface your phone number directly in the search result, removing every barrier between the search and the call.",
  },
  {
    icon: Target,
    title: "Suburb-Level Geo-Targeting",
    desc: "Houston's plumbing market spans hundreds of square miles. We build distinct campaigns for Katy, Sugar Land, The Woodlands, Pearland, Friendswood, and your other service zones — with messaging and bids calibrated to each community's job values and competition level.",
  },
  {
    icon: Droplets,
    title: "High-Ticket Service Campaigns",
    desc: "Slab leak detection, full repiping, sewer line replacement, and water heater installation have much higher value profiles than drain cleaning. We build separate campaigns for these services with bidding strategies calibrated to what those jobs are actually worth.",
  },
  {
    icon: DollarSign,
    title: "Storm-Event Surge Activation",
    desc: "When Houston flooding events hit — as they do regularly — plumbing search volume spikes for drain backups, sewer issues, and water damage assessment. We pre-build storm-related ad groups ready to activate quickly when demand surges.",
  },
  {
    icon: BarChart3,
    title: "Budget Optimization by Job Value",
    desc: "Not every plumbing search is worth the same bid. Emergency slab leak calls justify far higher bids than routine drain cleaning inquiries. We structure bidding to maximize your return on high-value searches without overpaying for low-margin work.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Tracking & ROI Reporting",
    desc: "We track which keywords, ads, and landing pages generate actual phone calls — not just clicks. Monthly reporting ties ad spend to inbound calls so you know exactly what your campaigns are returning.",
  },
];

const marketStats = [
  { stat: "68%", label: "Of plumbing searches have emergency intent — the highest of any home service trade" },
  { stat: "$500–$5K+", label: "Range of plumbing job values in Houston, from drain service to full repiping — high enough that ads pay for themselves on a single job" },
  { stat: "24 hrs", label: "The response window that matters most for emergency plumbing — contractors with live campaigns capture same-day demand" },
  { stat: "7M+", label: "Houston metro residents generating plumbing searches year-round across a sprawling suburban geography" },
];

const faqs = [
  {
    q: "How fast can Google Ads go live for a Houston plumbing company?",
    a: "A new campaign can go live in 3–5 business days. For plumbing, there's no off-season in Houston — it's worth having campaigns live year-round and scaling budget for storm events and seasonal spikes rather than trying to build campaigns reactively when demand has already peaked.",
  },
  {
    q: "What does a plumbing Google Ads campaign cost in Houston?",
    a: "Most plumbing campaigns in the Houston market start at $1,500–$3,000/month in ad spend plus management. Emergency and high-ticket service campaigns may warrant higher budgets. Given that a single slab leak or repiping job can run $2,000–$8,000, the ROI math works strongly in favor of well-managed paid campaigns.",
  },
  {
    q: "How do you target slab leak searches in Houston?",
    a: "Slab leak searches are among the highest-value keyword categories in the Houston plumbing market. We build dedicated campaigns targeting these searches with ads that speak directly to homeowners with suspected or confirmed slab issues — emphasizing expertise, response time, and the ability to work with insurance if needed.",
  },
  {
    q: "What's the difference between Google Ads and LSA for plumbers?",
    a: "Google Local Services Ads (LSA) show above standard paid ads and are pay-per-lead rather than pay-per-click. They require a Google verification process but can deliver high-quality calls. Standard Google Ads give more control over targeting, messaging, and landing pages. Most plumbing companies that dominate Houston search run both — LSA for the top position and Google Ads for broader keyword coverage.",
  },
  {
    q: "How do storm events affect plumbing ad spend in Houston?",
    a: "Significant rain events and flooding drive immediate spikes in drain, sewer, and water damage-related plumbing searches. We pre-build campaigns for these scenarios so we can activate them quickly when demand spikes — rather than building from scratch under pressure while competitors are already capturing calls.",
  },
];

export default function HoustonPlumbingGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for Plumbing Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Ads campaigns for Houston plumbers. Emergency call-only ads, suburb-level targeting, slab leak campaigns, and storm-surge activation for the Houston plumbing market."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/plumbing/google-ads/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Ads management for plumbing contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Friendswood"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "Texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "Plumbing", href: "/locations/texas/houston/plumbing" },
                { label: "Google Ads" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Plumbing Google Ads
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Ads for Plumbing Contractors in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Emergency plumbing searches happen around the clock in a city of 7 million. The plumber at the top of Google when the pipe bursts gets the call. Paid search gets you there immediately — before your organic rankings have time to build.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free Consultation
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Houston" state="Texas" industry="plumbing" service="google-ads" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Plumbing Has the Highest Emergency Search Rate of Any Trade
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            In Houston's market — with clay soil, aging inner-loop pipes, and regular storm events — emergency plumbing demand is constant. The contractor at the top of paid search captures calls the moment they happen.
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

      {/* Features */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What's in Our Houston Plumbing Ad Campaigns
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for Houston's sprawling suburbs, high-value plumbing market, and storm-event demand patterns.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adFeatures.map((f) => (
              <div key={f.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Checklist */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
            Built to Capture Houston's Emergency Demand
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Plumbing emergencies don't follow a schedule. Campaign infrastructure built for round-the-clock Houston demand means you're capturing calls whenever they happen — not just during business hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Call-only campaigns targeting emergency plumbing searches",
              "Suburb-specific ad groups for Katy, Sugar Land, Pearland, The Woodlands",
              "High-ticket service campaigns: slab leak, repiping, sewer line",
              "Storm-event ad groups pre-built and ready to activate",
              "Negative keywords eliminating out-of-service-area waste",
              "Monthly ROI reporting tied to actual inbound calls",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white/80 text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Houston Plumbing Google Ads Questions
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

            <NearbyMarkets markets={[
        { name: "Houston Plumbing Marketing", to: "/locations/texas/houston/plumbing" },
        { name: "Houston Plumbing SEO", to: "/locations/texas/houston/plumbing/seo" },
        { name: "Charleston Plumbing Google Ads", to: "/locations/south-carolina/charleston/plumbing/google-ads" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Capture Houston's Plumbing Demand?"
        subtitle="Emergency plumbing calls are happening in Houston right now. Fill out the form and we'll show you what a paid search strategy built for this market looks like."
      />
    </Layout>
  );
}
