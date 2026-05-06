import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, TrendingUp, Star, BarChart3,
  Droplets, Home, AlertTriangle, Check, FileText, Gauge,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const marketStats = [
  { stat: "68%", label: "Of plumbing searches have emergency intent — the highest rate of any home service trade" },
  { stat: "Top 3", label: "Map pack positions capture the majority of plumbing clicks in Houston — position 4 and below rarely rings" },
  { stat: "7M+", label: "Houston metro residents across a geography that spans hundreds of square miles of plumbing demand" },
  { stat: "0¢", label: "Cost per click on organic rankings — unlike paid ads, SEO traffic compounds without ongoing ad spend" },
];

const features = [
  {
    icon: MapPin,
    title: "Google Maps Pack Rankings",
    desc: "We optimize every local signal — GBP completeness, review velocity, citation consistency, engagement metrics — to put your plumbing company in the top 3 for searches across Houston and its fast-growing suburbs.",
  },
  {
    icon: Search,
    title: "High-Value Keyword Targeting",
    desc: "We go after the searches that book jobs: 'slab leak repair Houston TX', 'emergency plumber Katy', 'water heater replacement Sugar Land', 'drain cleaning The Woodlands', 'sewer line repair Pearland'. Buyer-intent, suburb-specific, profitable.",
  },
  {
    icon: FileText,
    title: "Service Area Page Strategy",
    desc: "We build dedicated pages for every Houston suburb you serve — each optimized for that community's search behavior. A homeowner in Friendswood searches differently than one in Spring. We capture both.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    desc: "Reviews are a direct ranking factor and the primary trust signal for plumbing — you're asking strangers to let you into their home. We build a consistent review generation process that runs on autopilot and keeps your velocity competitive.",
  },
  {
    icon: TrendingUp,
    title: "Post-Harvey & Storm Optimization",
    desc: "Houston's storm history creates ongoing plumbing demand — Harvey-era pipe damage, slab movement from waterlogged soil, and aging infrastructure in older inner-loop neighborhoods. We build around these patterns.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting That Ties to Jobs",
    desc: "Keyword rankings, map pack position, traffic trends, call volume. Plain-language reports focused on what's moving the needle — not a dashboard full of metrics that don't translate to booked work.",
  },
];

const houstonAngles = [
  {
    icon: AlertTriangle,
    text: "Hurricane Harvey caused widespread plumbing damage across the Houston metro — flooded foundations, contaminated lines, and pressure damage that continued revealing itself for years. Homeowners in affected areas are still searching for qualified plumbers to assess and repair lingering issues.",
  },
  {
    icon: Home,
    text: "Houston's expansive clay soil swells and contracts dramatically with moisture changes — a major driver of slab movement and pipe cracking. Slab leak searches in the Houston market are significantly above national averages, and most plumbers haven't specifically targeted this high-value keyword category.",
  },
  {
    icon: Droplets,
    text: "The Heights, Montrose, Midtown, and older Houston neighborhoods feature aging galvanized and cast iron plumbing with above-average failure rates. These are high-ticket repair and repiping jobs concentrated in dense, high-income urban neighborhoods.",
  },
  {
    icon: TrendingUp,
    text: "New construction in Katy, Sugar Land, Pearland, and Conroe is ongoing — and new homeowners in fast-growth suburbs are searching for plumbers they can trust for maintenance and first-time issues in recently built homes.",
  },
];

const process = [
  {
    step: "01",
    title: "Houston Plumbing Market Audit",
    desc: "We audit your current rankings, GBP, and competitor profiles across the specific Houston suburbs where you want to grow. You see exactly where you're losing jobs to competitors — and where the fastest wins are.",
  },
  {
    step: "02",
    title: "Foundation Build",
    desc: "We optimize your GBP, fix technical SEO issues on your site, build out suburb-specific service area pages, and establish the citation consistency that local search rankings depend on.",
  },
  {
    step: "03",
    title: "Content, Citations & Reviews",
    desc: "We create targeted local content around Houston's specific plumbing demand patterns — slab leaks, hard water, aging pipes — build high-quality citations, and implement your review generation system.",
  },
  {
    step: "04",
    title: "Track & Improve",
    desc: "Monthly ranking reviews, GBP performance monitoring, and continuous strategy refinement. Houston's plumbing market is competitive and evolving — we stay ahead of competitor moves so you don't lose ground you've earned.",
  },
];

const faqs = [
  {
    q: "How long does SEO take for a plumbing company in Houston?",
    a: "Map pack movement typically appears in 60–90 days with a solid foundation in place. Meaningful organic ranking gains take 4–6 months. Houston is a large and competitive market, but most local plumbing companies have weak SEO fundamentals — so the barrier to breaking into the top 3 in many suburbs is lower than the market size suggests.",
  },
  {
    q: "What plumbing keywords should I be targeting in Houston?",
    a: "The highest-value searches are emergency and high-intent: 'emergency plumber Houston TX', 'slab leak repair Katy', 'water heater replacement Sugar Land', 'drain cleaning near me The Woodlands', 'repiping Houston'. We also build suburb-specific long-tail variations for every community you serve.",
  },
  {
    q: "Are slab leak searches really that significant in Houston?",
    a: "Yes. Houston's clay soil conditions create some of the highest slab leak frequencies in the country. When you combine that with the aging housing stock in inner-loop neighborhoods and post-Harvey foundation issues in the suburbs, slab leak searches are a disproportionately high-value keyword category for the Houston market. Most plumbing companies haven't specifically targeted it.",
  },
  {
    q: "Is local SEO or Google Ads better for plumbers in Houston?",
    a: "They serve different purposes. Google Ads gets you calls immediately. SEO builds organic rankings that generate calls without a cost-per-click. Most plumbing companies serious about growth run both — ads to fill the gap while SEO builds, then SEO to reduce ad spend dependency long-term.",
  },
  {
    q: "Can you help us rank in Houston's suburbs like Katy and Sugar Land?",
    a: "Yes — and this is where the opportunity is. Katy, Sugar Land, Pearland, The Woodlands, Friendswood, and League City all have substantial plumbing search volume and are growing fast. Suburb-specific service area pages and GBP optimization for these locations is how you capture demand in communities your competitors haven't fully targeted.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We work month-to-month. SEO takes time to build, and we'll be transparent about the timeline, but we never lock you in. We keep clients because the results justify the investment.",
  },
];

const neighborhoods = [
  "Katy", "Sugar Land", "The Woodlands", "Pearland",
  "Friendswood", "League City", "Spring", "Conroe",
  "Cypress", "Heights", "Montrose", "Midtown",
  "Pasadena", "Baytown", "Missouri City", "Stafford",
];

export default function HoustonPlumbingSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for Plumbing Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank higher on Google Maps for plumbing searches in Houston, TX. Local SEO strategies for Houston plumbers — slab leaks, emergency repairs, water heaters, repiping, and more."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/plumbing/seo/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO for Plumbing Contractors — Houston, TX",
            description: "Local SEO for plumbing contractors in Houston, Texas.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Houston" },
              { "@type": "City", name: "Katy" },
              { "@type": "City", name: "Sugar Land" },
              { "@type": "City", name: "Pearland" },
            ],
            serviceType: "Local SEO",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Local SEO for plumbing contractors in Houston, TX. Google Maps optimization, keyword rankings, and review strategy for the Houston metro."
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
                { label: "Texas", href: "/locations/texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "Plumbing", href: "/locations/texas/houston/plumbing" },
                { label: "Local SEO" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Plumbing Local SEO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your Plumbing Company to the Top of Google in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Houston homeowner has a burst pipe, a slab leak, or a backed-up drain, they search Google and call the first plumber they see. Houston's plumbing market generates enormous search volume — and the company in the top 3 of Google Maps captures the majority of it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free SEO Audit
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Houston" state="Texas" industry="plumbing" service="seo" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston's Plumbing Market Rewards the Company That Shows Up First
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Plumbing has the highest emergency-intent search rate of any home service trade. In a city of 7 million people with clay soil, aging inner-loop infrastructure, and ongoing storm recovery, that means constant demand for the plumber who shows up at the top of search.
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

      {/* Houston-Specific Angles */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Houston's Unique Plumbing SEO Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston is not a generic market. The combination of expansive clay soils, post-Harvey foundation damage, aging inner-loop housing stock, and relentless new construction creates plumbing search patterns that a cookie-cutter SEO strategy misses entirely.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Slab leak searches in Houston are significantly higher than the national average — and most local plumbing companies haven't specifically targeted those keywords with dedicated content. Hard water scale, pressure damage from flood events, and first-time homeowners in fast-growth suburbs all create distinct search demand that a well-built SEO strategy can capture.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Houston's plumbing market generates substantial revenue annually. The plumbing contractors who dominate search capture a disproportionate share of that revenue — and local SEO is the most cost-efficient path to that position.
              </p>
            </div>
            <div className="space-y-4">
              {houstonAngles.map((item) => (
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

      {/* Features */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Plumbing Local SEO
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A full-stack local SEO strategy built for plumbing contractors across the Houston metro.
        </p>
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

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Our Process</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          No smoke and mirrors — here's exactly how we approach plumbing SEO in Houston.
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

      {/* Areas Served */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Plumbing SEO Across the Houston Metro
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local rankings targeting every Houston suburb and community you serve.
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
          Questions About Plumbing SEO in Houston
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
            Explore More for Houston Plumbers
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Google Ads for Plumbers in Houston", desc: "Capture emergency plumbing calls immediately while your SEO rankings build.", href: "/locations/texas/houston/plumbing/google-ads" },
              { title: "Google Business Profile for Plumbers", desc: "The map pack is where most plumbing jobs originate. We optimize your GBP to own it.", href: "/locations/texas/houston/plumbing/google-business-profile" },
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
        { name: "Houston Plumbing Marketing", to: "/locations/texas/houston/plumbing" },
        { name: "Houston Plumbing Google Ads", to: "/locations/texas/houston/plumbing/google-ads" },
        { name: "Charleston Plumbing SEO", to: "/locations/south-carolina/charleston/plumbing/seo" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Dominate Plumbing Search in Houston?"
        subtitle="Houston homeowners are searching for plumbers right now. Fill out the form and we'll show you exactly where you rank — and what it'll take to get to the top."
      />
    </Layout>
  );
}
