import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Phone, Zap, Target, DollarSign,
  BarChart3, Clock, Check, Droplets, AlertTriangle,
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
  { stat: "Day 1", label: "Google Ads can generate plumbing calls the same week your campaign goes live" },
  { stat: "85%+", label: "Of emergency plumbing searches happen on mobile — call-only ads capture them in one tap" },
  { stat: "$300–$600", label: "Typical value of a single plumbing service call — making CPC costs easy to justify" },
  { stat: "#1", label: "Emergency plumbing has the fastest decision cycle of any home service — speed of response wins the job" },
];

const features = [
  {
    icon: Zap,
    title: "Emergency Intent Campaigns",
    desc: "We build campaigns around the searches that convert immediately: \"burst pipe repair Charleston,\" \"emergency plumber near me,\" \"slab leak repair Mount Pleasant.\" High urgency, high value, high close rate.",
  },
  {
    icon: Phone,
    title: "Call-Only & Call Extension Ads",
    desc: "When a homeowner has water coming through the ceiling, they want to call — not visit a website. Call-only campaigns put your number front and center and skip the click entirely.",
  },
  {
    icon: Target,
    title: "Service-Specific Campaign Structure",
    desc: "Emergency repairs, water heater replacement, slab leak detection, drain cleaning, new installation — each with its own campaign, keywords, and messaging. No bundling everything into one undifferentiated campaign.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Ad Scheduling",
    desc: "Plumbing emergencies don't happen on a schedule. We can run your emergency campaigns around the clock with bid adjustments that increase during peak call hours — nights, weekends, and post-storm windows.",
  },
  {
    icon: DollarSign,
    title: "Cost-Per-Call Optimization",
    desc: "Every campaign is tracked to the call. We see which keywords, ads, and landing pages produce calls at the lowest cost — and continuously optimize toward that metric.",
  },
  {
    icon: BarChart3,
    title: "Monthly ROI Reporting",
    desc: "Calls generated, cost-per-call, estimated job value. You know exactly what your ad investment produced every month — no impressions, no click-through rates, no metrics that don't translate to revenue.",
  },
];

const charlestonAngles = [
  {
    icon: AlertTriangle,
    text: "Hurricane season and heavy rain events create overnight spikes in emergency plumbing calls. Pre-built campaigns with emergency ad copy mean you capture that surge before competitors even know it's happening.",
  },
  {
    icon: Droplets,
    text: "Slab leak detection and repair is a high-ticket plumbing service with strong Google Ads conversion rates. Charleston's soil conditions make this a high-frequency search — and most plumbers in the area aren't running targeted campaigns for it.",
  },
  {
    icon: MapPin,
    text: "The tri-county area spans very different communities. We target each with precise geographic parameters so your ad spend stays within your service territory and doesn't bleed into areas you don't cover.",
  },
  {
    icon: Clock,
    text: "New construction in Summerville and Nexton generates installation project searches — higher-value, longer-timeline jobs that require different campaign messaging than emergency repair. We build both.",
  },
];

const process = [
  {
    step: "01",
    title: "Competitor & Market Audit",
    desc: "We analyze what Charleston plumbing companies are bidding on, what they're spending, and where the gaps are. Your campaigns start with that intelligence baked in.",
  },
  {
    step: "02",
    title: "Campaign Build & Launch",
    desc: "Emergency calls, water heater, slab leaks, drain cleaning — each service gets its own campaign with tight keyword match types, ad copy that matches intent, and call tracking in place from day one.",
  },
  {
    step: "03",
    title: "Optimize Toward Calls",
    desc: "We connect call tracking, import conversions, and optimize bids toward actual phone calls. Your spend goes toward the metric that matters — not clicks that bounce.",
  },
  {
    step: "04",
    title: "Monthly Review & Refinement",
    desc: "Monthly review of what keywords drove calls, what the cost-per-call looks like, and what we're adjusting. We scale what works and kill what doesn't.",
  },
];

const faqs = [
  {
    q: "How fast can Google Ads generate plumbing calls in Charleston?",
    a: "Campaigns can go live in 2–3 business days after the build. Most clients see their first calls within the first week. If you need calls now — during peak season, after a storm event, or while your SEO rankings are still building — Google Ads is the fastest lever to pull.",
  },
  {
    q: "What does Google Ads cost for a plumbing company in Charleston?",
    a: "Most Charleston plumbing companies we work with spend $1,000–$3,000/month on ad spend, depending on how many services they're promoting and how aggressively they want to compete. We manage the campaigns for a monthly fee on top of that. We'll give you a specific estimate after reviewing your market and service area.",
  },
  {
    q: "Should I run ads for emergency calls only, or all services?",
    a: "Emergency repair campaigns typically have the highest ROI because of the speed of the decision cycle — but water heater replacement and slab leak repair are also strong performers. We'll recommend a campaign structure based on which services have the best margins and search volume in your market.",
  },
  {
    q: "How do you track whether ads are actually booking jobs?",
    a: "Every inbound call is tracked back to the specific keyword and ad that generated it. You'll see call counts, call duration, and cost-per-call for each campaign. From there, we work with you on close rate and average job value to calculate actual ROI on your ad spend.",
  },
  {
    q: "Can you run ads for a plumbing company that also does HVAC?",
    a: "Yes — we run multi-service campaigns regularly. We build separate campaign structures for each service so the budget, keywords, and messaging stay clean and each service gets properly optimized.",
  },
  {
    q: "Do I need a good website for Google Ads to work?",
    a: "For call-only campaigns, less so — the homeowner calls directly from the ad without visiting your site. For standard search campaigns with landing pages, your site's speed and conversion design matter significantly. We'll tell you honestly if your current site is going to hurt your campaign performance.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonPlumbingGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for Plumbers in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Capture emergency plumbing calls in Charleston, SC with Google Ads campaigns built for high-intent searches. Call-only ads, service-specific campaigns, and full tri-county targeting."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/plumbing/google-ads/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Ads for Plumbers — Charleston, SC",
            description: "Google Ads management for plumbing contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }, { "@type": "City", name: "Summerville" }],
            serviceType: "Google Ads",
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Ads for plumbing contractors in Charleston, SC. Emergency call campaigns, service-specific targeting, and full tri-county coverage."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={charlestonWaterfront} alt="Charleston South Carolina waterfront" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[
              { label: "Locations", href: "/locations" },
              { label: "South Carolina" },
              { label: "Charleston", href: "/locations/south-carolina/charleston" },
              { label: "Plumbing", href: "/locations/south-carolina/charleston/plumbing" },
              { label: "Google Ads" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Plumbing Google Ads</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Plumbing Google Ads That Book Emergency Jobs in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              A burst pipe in Charleston doesn't wait for SEO to build. Google Ads puts your plumbing company in front of homeowners the moment they search — before your competitor picks up the call.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Campaign Audit</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="plumbing" service="google-ads" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Plumbing Has the Fastest Decision Cycle of Any Home Service Trade
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            When something goes wrong with plumbing, homeowners don't comparison shop. They search, they scan the top results, and they call. The plumber at the top of the page gets the call. Google Ads puts you there instantly.
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

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Charleston's Plumbing Market Creates Specific Ad Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Most plumbing ad campaigns are built around the same generic keywords — "plumber near me," "plumbing company." That works, but it leaves money on the table in a market like Charleston where specific local conditions create high-value search patterns.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hurricane and storm events spike emergency plumbing searches overnight. Slab leak repair is a high-ticket service with dedicated search volume. New construction in Summerville creates installation demand. Each of these represents a campaign opportunity most plumbing companies in the market haven't built.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Holy Webs in Charleston. We know when storm season hits, how quickly search behavior shifts, and how to have your campaigns ready for those windows before they open.
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

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What's Included in Plumbing Google Ads Management</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Full-service campaign management built around plumbing-specific intent and Charleston market dynamics.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Our Process</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">From audit to first call — here's how we get your plumbing ads running in Charleston.</p>
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

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Plumbing Ad Campaigns Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">We target your exact service territory — not a broad metro estimate that wastes spend outside your reach.</p>
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

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Questions About Plumbing Google Ads in Charleston</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">Explore More for Charleston Plumbers</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Local SEO for Plumbers in Charleston", desc: "Build organic rankings that generate calls without paying per click.", href: "/locations/south-carolina/charleston/plumbing/seo" },
              { title: "Google Business Profile for Plumbers", desc: "Optimize your map pack presence — where most emergency plumbing calls originate.", href: "/locations/south-carolina/charleston/plumbing/google-business-profile" },
              { title: "Plumbing Digital Marketing", desc: "See our complete approach to digital marketing for plumbing contractors.", href: "/industries/plumbing" },
            ].map((link) => (
              <a key={link.title} href={link.href} className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

            <NearbyMarkets markets={[
        { name: "Charleston Plumbing Marketing", to: "/locations/south-carolina/charleston/plumbing" },
        { name: "Charleston Plumbing SEO", to: "/locations/south-carolina/charleston/plumbing/seo" },
        { name: "Houston Plumbing Google Ads", to: "/locations/texas/houston/plumbing/google-ads" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Book More Emergency Plumbing Jobs in Charleston?"
        subtitle="Charleston homeowners are searching for plumbers right now. Fill out the form and we'll audit your current ad presence — and show you what you're missing."
      />
    </Layout>
  );
}
