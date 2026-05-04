import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, Star, TrendingUp, FileText,
  BarChart3, Gauge, Check, Droplets, Home, AlertTriangle,
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
  { stat: "Top 3", label: "Map pack positions capture the vast majority of clicks on local plumbing searches" },
  { stat: "68%", label: "Of plumbing searches have emergency intent — the highest of any home service trade" },
  { stat: "12×", label: "Average ROI on local SEO vs. outbound marketing for service businesses" },
  { stat: "0¢", label: "Cost per click on organic rankings — unlike ads, SEO traffic doesn't stop when you stop paying" },
];

const features = [
  {
    icon: MapPin,
    title: "Google Maps Pack Rankings",
    desc: "We optimize every local signal — GBP completeness, review velocity, citation consistency, engagement metrics — to put your plumbing company in the top 3 for searches across the tri-county area.",
  },
  {
    icon: Search,
    title: "High-Value Keyword Targeting",
    desc: "We go after the searches that book jobs: \"slab leak repair Charleston,\" \"emergency plumber Mount Pleasant,\" \"water heater replacement West Ashley,\" \"drain cleaning Summerville.\" Buyer-intent, location-specific, profitable.",
  },
  {
    icon: FileText,
    title: "Service Area Page Strategy",
    desc: "We build dedicated pages for every community you serve — each optimized for that neighborhood's search behavior. Mount Pleasant homeowners search differently than Summerville homeowners. We capture both.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    desc: "Reviews are a direct ranking factor and the primary trust signal for plumbing — you're asking strangers to let you into their home. We build a consistent review generation process that runs on autopilot.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal & Emergency Optimization",
    desc: "Plumbing search volume spikes after storms, cold snaps, and flooding events. We optimize for the keywords that surge during these windows so you're positioned when demand peaks.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting That Ties to Jobs",
    desc: "Keyword rankings, map pack position, traffic trends, call volume. Plain-language reports focused on what's moving — not a dashboard full of impressions that don't pay the bills.",
  },
];

const charlestonAngles = [
  {
    icon: Home,
    text: "The Peninsula's historic housing stock means aging cast iron and galvanized pipes — one of the highest per-capita plumbing repair rates in the region. These are high-value jobs that go to whoever ranks first.",
  },
  {
    icon: Droplets,
    text: "Charleston's clay soil and high water table create above-average slab leak frequency. \"Slab leak repair Charleston\" is a high-ticket keyword most plumbers in this market haven't specifically targeted.",
  },
  {
    icon: AlertTriangle,
    text: "Post-storm flooding generates emergency drain and sewage backup calls that spike overnight. Being in the map pack and ranking for those searches means capturing demand your competitors miss.",
  },
  {
    icon: TrendingUp,
    text: "Short-term rental properties on the coast need reliable plumbers that show up in search when guests call with problems — a growing, recurring client segment unique to the Charleston market.",
  },
];

const process = [
  {
    step: "01",
    title: "Plumbing SEO Audit",
    desc: "We audit your current rankings, GBP, and competitor profiles across the Charleston tri-county area. You see exactly where you're losing jobs to competitors — and where the fastest wins are.",
  },
  {
    step: "02",
    title: "Foundation Build",
    desc: "We optimize your GBP, fix technical SEO issues on your site, build out service area pages, and establish the citation consistency that local search rankings depend on.",
  },
  {
    step: "03",
    title: "Content, Citations & Reviews",
    desc: "We create targeted local content, build high-quality citations, and implement your review generation system. The combination compounds your authority month over month.",
  },
  {
    step: "04",
    title: "Track & Improve",
    desc: "Monthly ranking reviews, GBP performance monitoring, and continuous strategy refinement. We stay ahead of algorithm changes and competitor moves so you don't lose ground you've earned.",
  },
];

const faqs = [
  {
    q: "How long does SEO take for a plumbing company in Charleston?",
    a: "Map pack movement typically appears in 60–90 days with a solid foundation in place. Meaningful organic ranking gains take 4–6 months. Plumbing is competitive in Charleston but most local companies have weak SEO fundamentals, which means the barrier to breaking into the top 3 is lower than it looks.",
  },
  {
    q: "What plumbing keywords should I be ranking for in Charleston?",
    a: "The highest-value searches are emergency and high-intent: \"emergency plumber Charleston SC,\" \"slab leak repair Mount Pleasant,\" \"water heater replacement West Ashley,\" \"drain cleaning near me.\" We also build out long-tail neighborhood variations for every community you serve.",
  },
  {
    q: "Is local SEO or Google Ads better for plumbers in Charleston?",
    a: "They serve different purposes. Google Ads gets you calls immediately. SEO builds the organic rankings that generate calls without paying per click. Most plumbing companies that are serious about growth run both — ads to fill the gap while SEO builds, then SEO to reduce ad dependency long-term.",
  },
  {
    q: "How important are reviews for plumbing SEO?",
    a: "Critical on two levels. Reviews are a direct local ranking signal — more recent, relevant reviews help your map pack position. And reviews are the #1 trust factor for plumbing specifically, because homeowners are making a fast decision to let a stranger into their home. We build a consistent review generation process as part of every plumbing SEO engagement.",
  },
  {
    q: "Can you help us rank for slab leak repair in Charleston?",
    a: "Yes — and this is one of the highest-opportunity keyword categories in the Charleston plumbing market. Most plumbers in the area haven't specifically targeted slab leak searches with dedicated content and local optimization. It's a high-ticket service with strong search volume and relatively low competition.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We work month-to-month. SEO takes time to build, and we'll be honest about the timeline, but we never lock you in. We keep clients because the results justify the investment.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonPlumbingSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for Plumbers in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank higher on Google Maps for plumbing searches in Charleston, SC. Local SEO strategies for Lowcountry plumbers — slab leaks, emergency repairs, water heaters, and more."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/plumbing/seo/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO for Plumbers — Charleston, SC",
            description: "Local SEO for plumbing contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }, { "@type": "City", name: "Summerville" }],
            serviceType: "Local SEO",
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Local SEO for plumbing contractors in Charleston, SC. Google Maps optimization, keyword rankings, and review strategy."
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
              { label: "Local SEO" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Plumbing Local SEO</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your Plumbing Company to the Top of Google in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Charleston homeowner has a burst pipe, a slab leak, or a backed-up drain, they search Google and call the first plumber they see. We build the local SEO presence that makes sure that plumber is you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free SEO Audit</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="plumbing" service="seo" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Charleston Plumbing Market Rewards the Company That Shows Up First
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Plumbing has the highest emergency-intent search rate of any home service trade. When something goes wrong, homeowners aren't comparison shopping — they're calling. Local SEO puts you in that first position when the search happens.
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
            Charleston's Unique Plumbing SEO Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Charleston is not a generic market. The combination of historic Peninsula housing, clay soil conditions, coastal salt air, and an explosive new construction wave creates plumbing search patterns that a cookie-cutter SEO strategy misses entirely.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Slab leak searches in Charleston are significantly higher than the national average — and most local plumbing companies haven't targeted that keyword specifically. Water heater replacement searches spike after storms. Emergency drain calls follow flood events. We build around these patterns.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Holy Webs in Charleston and have been working with local service businesses here from the start. When we say we know this market, we mean it — and that knowledge changes how we approach your SEO strategy.
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What's Included in Plumbing Local SEO</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">A full-stack local SEO strategy built for plumbing contractors in the Charleston tri-county area.</p>
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
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">No smoke and mirrors — here's exactly how we approach plumbing SEO in Charleston.</p>
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Plumbing SEO Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">We build hyper-local rankings targeting every community you serve.</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Questions About Plumbing SEO in Charleston</h2>
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
              { title: "Google Ads for Plumbers in Charleston", desc: "Capture emergency plumbing calls immediately while your SEO rankings build.", href: "/locations/south-carolina/charleston/plumbing/google-ads" },
              { title: "Google Business Profile for Plumbers", desc: "The map pack is where most plumbing jobs originate. We optimize your GBP to own it.", href: "/locations/south-carolina/charleston/plumbing/google-business-profile" },
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
        { name: "Charleston Plumbing Google Ads", to: "/locations/south-carolina/charleston/plumbing/google-ads" },
        { name: "Houston Plumbing SEO", to: "/locations/texas/houston/plumbing/seo" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Dominate Plumbing Search in Charleston?"
        subtitle="Charleston homeowners are searching for plumbers right now. Fill out the form and we'll show you exactly where you rank — and what it'll take to get to the top."
      />
    </Layout>
  );
}
