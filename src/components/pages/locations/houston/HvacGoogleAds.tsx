import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MousePointerClick, Check, TrendingUp,
  Thermometer, Clock, Phone, Target, DollarSign, BarChart3,
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
    icon: Thermometer,
    title: "Summer Surge Campaign Architecture",
    desc: "Houston's cooling season is among the longest in the country — May through October at minimum. We build campaigns with pre-staged budget scaling for peak months and automated bid adjustments tied to temperature thresholds and time-of-day patterns.",
  },
  {
    icon: Phone,
    title: "Call-Only Ads for Emergency Intent",
    desc: "'Emergency AC repair' and 'AC not working' searches happen on mobile — homeowners want to call, not fill out a form. Call-only ads put your phone number directly in the search result, removing friction when urgency is highest.",
  },
  {
    icon: Target,
    title: "Suburb-Level Geo-Targeting",
    desc: "Houston's suburban geography is too large and varied for a single campaign. We build distinct ad groups for Katy, Sugar Land, The Woodlands, Pearland, Cypress, Friendswood, and your other service zones — with messaging tuned to each community.",
  },
  {
    icon: DollarSign,
    title: "High-Ticket Service Bidding",
    desc: "Full system replacements, high-efficiency installs, and commercial HVAC contracts have entirely different value profiles than tune-ups. We build separate campaigns for high-value services with bid strategies calibrated to the actual job revenue.",
  },
  {
    icon: BarChart3,
    title: "Year-Round Budget Optimization",
    desc: "Houston HVAC demand is seasonal but never zero. We scale budgets aggressively for peak summer months, maintain a strategic base campaign in shoulder seasons, and never let your Quality Scores decay from extended pauses.",
  },
  {
    icon: MousePointerClick,
    title: "Competitor Conquest Campaigns",
    desc: "Homeowners searching for large HVAC franchises in the Houston market are ready to spend. Conquest campaigns put your name in front of high-intent buyers who don't yet have a strong preference — and show them a local alternative.",
  },
];

const marketStats = [
  { stat: "4+ mo.", label: "Months of 90°F+ heat in Houston — the longest sustained peak HVAC demand window of any major Texas market" },
  { stat: "$3K–$12K", label: "Typical value of a residential HVAC replacement in the Houston suburbs — high enough that paid campaigns pay for themselves quickly" },
  { stat: "3–5×", label: "Spike in HVAC search volume during Houston's first heat wave of the season — early positioning wins the surge" },
  { stat: "24 hrs", label: "The response window for emergency HVAC calls — contractors with live campaigns capture same-day demand that direct mail never can" },
];

const faqs = [
  {
    q: "How fast can Google Ads go live for a Houston HVAC company?",
    a: "A new campaign can go live in 3–5 business days. For seasonal surge campaigns, we recommend having infrastructure built before Memorial Day weekend — that's typically when Houston's first significant heat wave hits and HVAC search volume spikes. Building the campaign in advance means activating existing, optimized campaigns rather than building from scratch under pressure.",
  },
  {
    q: "What does an HVAC Google Ads campaign cost in Houston?",
    a: "Most HVAC campaigns in the Houston market start at $2,000–$4,000/month in ad spend plus management. Summer months may call for higher budgets given increased competition. Given that a single HVAC replacement job can run $5,000–$12,000, the ROI math works even at modest conversion rates — and most well-managed campaigns generate multiple jobs per month.",
  },
  {
    q: "Should I run Google Ads year-round or just in summer?",
    a: "Year-round, with seasonal scaling. Houston has two heating seasons worth addressing, year-round humidity maintenance calls, and a shoulder season where planned replacement and efficiency upgrade searches happen. Pausing entirely in off-peak months degrades your Quality Scores and increases costs when you restart. We maintain a base campaign year-round and scale significantly for the May–October peak.",
  },
  {
    q: "How do you target Katy, Sugar Land, and The Woodlands separately?",
    a: "We use radius and zip-code-level geo-targeting combined with suburb-specific ad copy and landing pages. A homeowner in Katy responds to different messaging than a homeowner in The Woodlands — different demographics, different housing stock, different average job values. Segment-specific campaigns outperform a single metro-wide approach on every metric.",
  },
  {
    q: "What's the difference between Google Ads and SEO for Houston HVAC?",
    a: "Google Ads delivers calls immediately — you're buying visibility at the top of search results today. SEO builds organic rankings that generate calls without a cost-per-click, but takes 4–6 months to produce meaningful results. Most HVAC companies that are serious about growth run both: ads to fill the gap while SEO builds, then SEO to reduce ad spend dependency over time.",
  },
];

export default function HoustonHvacGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for HVAC Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Ads campaigns built for Houston HVAC contractors. Suburb-level geo-targeting, summer surge scaling, and call-only ads for emergency intent. Capture Houston's year-round HVAC demand."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/hvac/google-ads" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Ads management for HVAC contractors in Houston, TX."
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
                { label: "HVAC", href: "/locations/texas/houston/hvac" },
                { label: "Google Ads" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — HVAC Google Ads
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Ads for HVAC Contractors in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When an AC unit fails during a Houston summer, a homeowner isn't comparing options — they're calling the first HVAC company that shows up. Paid search puts you at the top of those results before your competitors have time to respond.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="hvac" service="google-ads" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston's HVAC Demand Window Is Unlike Any Other Texas Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Four-plus months of extreme heat, year-round humidity, and 7 million residents create a paid search opportunity that compounds — if you're positioned before the surge hits.
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
            What's in Our Houston HVAC Ad Campaigns
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for Houston's suburban geography and year-round heat market — not a generic contractor template.
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
            Ready Before the Summer Surge
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Houston's peak HVAC demand arrives fast and rewards whoever is already positioned at the top of search results. Campaign infrastructure built before May means capturing demand from day one of the surge — not scrambling to catch up.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Suburb-specific ad groups for Katy, Sugar Land, The Woodlands, Pearland, and more",
              "Call tracking on every campaign so you know which ads are booking jobs",
              "Negative keyword lists eliminating non-service-area and low-intent waste",
              "Monthly budget scaling tied to Houston's seasonal search volume patterns",
              "Dedicated landing pages for high-ticket services like full system replacement",
              "Performance reporting tied to calls and conversions — not impressions",
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
          Houston HVAC Google Ads Questions
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
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston HVAC SEO", to: "/locations/texas/houston/hvac/seo" },
        { name: "Charleston HVAC Google Ads", to: "/locations/south-carolina/charleston/hvac/google-ads" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Don't Miss Houston's Peak HVAC Season"
        subtitle="Every week of summer in Houston is worth thousands in HVAC jobs. Fill out the form and we'll show you what it takes to capture that demand with paid search."
      />
    </Layout>
  );
}
