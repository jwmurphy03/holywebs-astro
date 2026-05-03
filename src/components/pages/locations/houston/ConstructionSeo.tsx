import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, TrendingUp, Star, BarChart3,
  Building2, Home, DollarSign, Check, FileText, Gauge,
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
  { stat: "7M+", label: "Houston metro population — one of the largest and wealthiest construction markets in the southern United States" },
  { stat: "Top 3", label: "Search result positions capture the majority of construction contractor inquiries — clients doing serious research rarely go further" },
  { stat: "$1T+", label: "Annual energy sector output in Texas — the primary driver of Houston's high-net-worth homeowner base fueling premium residential construction" },
  { stat: "4 of 10", label: "Fastest-growing cities in America are Houston suburbs (Katy, Sugar Land, The Woodlands, Pearland) — generating enormous construction demand" },
];

const features = [
  {
    icon: MapPin,
    title: "Google Maps Visibility for Construction",
    desc: "Construction clients search Google when they're serious — and they evaluate map pack results as a credibility filter before visiting websites. We optimize your GBP and local signals to ensure you appear for construction searches across the Houston metro.",
  },
  {
    icon: Search,
    title: "High-Value Keyword Targeting",
    desc: "We build around searches that attract serious buyers: 'custom home builder Houston TX', 'home addition contractor Katy', 'commercial construction Sugar Land', 'general contractor The Woodlands', 'Heights teardown builder'. Intent-driven, high-ticket, profitable.",
  },
  {
    icon: FileText,
    title: "Neighborhood & Market-Specific Pages",
    desc: "The Heights, Montrose, Midtown, River Oaks, Memorial, Katy, The Woodlands — each market has its own construction dynamics. We build pages that speak to each community's specific demand: teardowns in Heights, luxury estates in Memorial, new construction in Katy.",
  },
  {
    icon: Star,
    title: "Review & Portfolio Strategy",
    desc: "Construction clients do more due diligence than any other buyer type. Reviews, completed project photos, and testimonials are the social proof they're looking for. We build a review generation process and help you systematically document and display your portfolio.",
  },
  {
    icon: Building2,
    title: "Commercial & Residential Segmentation",
    desc: "Houston's commercial construction market — driven by the Medical Center, the Energy Corridor, and ongoing downtown development — has entirely different search patterns than residential. We build separate strategies for each when your business serves both.",
  },
  {
    icon: BarChart3,
    title: "Long-Cycle Reporting & Attribution",
    desc: "Construction has a longer sales cycle than HVAC or plumbing. We track rankings, website engagement, and lead quality over longer windows — helping you understand how SEO investment is building the pipeline even when jobs don't close immediately.",
  },
];

const houstonAngles = [
  {
    icon: DollarSign,
    text: "Houston's energy sector wealth — concentrated in neighborhoods like River Oaks, Memorial, and the Energy Corridor — creates a premium residential construction market with average custom home budgets that exceed most other Texas metros. These clients search carefully and choose based on reputation and portfolio.",
  },
  {
    icon: Home,
    text: "The Heights, Montrose, and Midtown are experiencing some of the most active gentrification and teardown-rebuild activity in Houston. Homeowners and investors in these neighborhoods are actively searching for contractors familiar with the area's deed restrictions, aesthetic norms, and lot characteristics.",
  },
  {
    icon: TrendingUp,
    text: "Katy, Sugar Land, Pearland, and The Woodlands are consistently among the fastest-growing suburbs in America. New land, new developments, and an influx of energy-sector relocations drive new construction demand — and first-time Houston homeowners searching for contractors to build custom or spec homes.",
  },
  {
    icon: Building2,
    text: "Post-Harvey, Houston's construction market absorbed a wave of elevation projects, rebuilds, and infrastructure upgrades. Contractors with flood mitigation and elevated construction expertise serve a segment of the market that continues to grow as homeowners in flood-prone areas pursue permanent solutions.",
  },
];

const process = [
  {
    step: "01",
    title: "Houston Construction Market Audit",
    desc: "We audit your current search presence, Google Business Profile, and competitor positioning across the Houston neighborhoods and suburbs where you want to grow. You see exactly where qualified buyers are searching — and why they're finding competitors instead of you.",
  },
  {
    step: "02",
    title: "Foundation Build",
    desc: "We optimize your GBP for construction-specific categories and attributes, build or restructure your website's page architecture, and establish the citation consistency that local search rankings require. Your profile needs to reflect the quality of work you do.",
  },
  {
    step: "03",
    title: "Content, Portfolio & Reviews",
    desc: "We create neighborhood-specific content for the Houston communities you target, help you structure your portfolio for maximum SEO and conversion impact, and implement a review generation system calibrated to construction's longer job cycle.",
  },
  {
    step: "04",
    title: "Pipeline Tracking & Growth",
    desc: "Construction SEO is a long game — rankings compound over months. We track keyword positions, website engagement, and lead quality continuously, adjusting strategy based on which Houston neighborhoods and project types are generating the best pipeline.",
  },
];

const faqs = [
  {
    q: "How long does SEO take for a construction company in Houston?",
    a: "Construction SEO operates on a longer timeline than service trades — plan for 4–6 months for meaningful organic traction and 6–12 months for consistent pipeline impact. The sales cycle for construction projects is also longer, so the attribution window needs to match. That said, map pack visibility for construction searches can improve meaningfully in 60–90 days.",
  },
  {
    q: "What construction keywords should I be targeting in Houston?",
    a: "The highest-value searches segment by project type: 'custom home builder Houston', 'home addition contractor Katy', 'commercial contractor Sugar Land', 'Heights teardown builder', 'general contractor The Woodlands', 'elevated home construction Houston'. We also target affluent neighborhood names specifically — River Oaks, Memorial, West University — where construction search intent correlates with premium budgets.",
  },
  {
    q: "How important is the Houston energy sector to construction marketing?",
    a: "Very important for premium residential and commercial. Energy sector professionals have above-average disposable income and tend to invest heavily in their homes. In Houston's market, ranking for construction searches in the Energy Corridor, Tanglewood, and Memorial areas means reaching buyers with larger budgets than most residential construction markets anywhere in the country.",
  },
  {
    q: "How do we market to Heights and Montrose teardown buyers specifically?",
    a: "The Heights and Montrose teardown market has specific dynamics: deed restrictions, lot dimensions, neighborhood aesthetic standards, and buyer profiles (typically affluent urban professionals) that require hyper-targeted content. We build neighborhood-specific pages that address these characteristics directly — which both ranks better locally and converts at higher rates with this specific buyer profile.",
  },
  {
    q: "Should we focus on residential, commercial, or both for Houston SEO?",
    a: "It depends on where your company's strongest differentiation lies. Houston's commercial construction market — Medical Center expansion, Energy Corridor development, industrial — is large and distinct from residential. If you compete in both, we build separate content tracks so residential prospects in Katy and commercial prospects in the Medical Center Center both find a relevant experience.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We work month-to-month. Construction SEO takes time to compound, and we'll be transparent about timelines, but we never lock you in. We keep clients because the pipeline results justify the investment.",
  },
];

const neighborhoods = [
  "The Heights", "Montrose", "Midtown", "River Oaks",
  "Memorial", "Katy", "Sugar Land", "The Woodlands",
  "Pearland", "West University", "Bellaire", "Tanglewood",
  "Energy Corridor", "Cypress", "Conroe", "League City",
];

export default function HoustonConstructionSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for Construction Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank higher on Google for construction searches in Houston, TX. Local SEO for Houston general contractors and home builders — Heights, Memorial, Katy, Sugar Land, The Woodlands."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/construction/seo" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO for Construction Contractors — Houston, TX",
            description: "Local SEO for general contractors and home builders in Houston, Texas.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Houston" },
              { "@type": "City", name: "Katy" },
              { "@type": "City", name: "Sugar Land" },
              { "@type": "City", name: "The Woodlands" },
            ],
            serviceType: "Local SEO",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Local SEO for construction contractors and home builders in Houston, TX."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "The Heights"]}
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
                { label: "Construction", href: "/locations/texas/houston/construction" },
                { label: "Local SEO" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Construction Local SEO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your Construction Company to the Top of Google in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston's construction market generates billions annually — driven by energy-sector wealth, gentrifying inner-loop neighborhoods, and fast-growing suburbs that are among the fastest-developing in the country. The contractors who dominate search capture the most valuable projects.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="construction" service="seo" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston's Construction Market Is One of the Largest in the Country
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Energy-sector wealth, consistent suburban growth, and ongoing inner-loop gentrification create a construction market that rewards the contractors who are visible when buyers are searching. Local SEO is how you capture that visibility.
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
            Houston's Construction Market Demands a Different SEO Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston isn't a homogeneous construction market. The premium custom home buyer in River Oaks has different criteria than the new construction buyer in Katy — and both are completely different from the commercial developer expanding in the Medical Center.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Heights and Montrose teardown market, the post-Harvey elevation and rebuild segment, the energy-sector executive who wants a custom estate in Memorial — these are distinct buyer profiles with distinct search behaviors. A construction SEO strategy that doesn't differentiate by neighborhood and project type misses the most valuable buyers in this market.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Houston's construction market generates enormous revenue for the contractors who are positioned correctly in search. The opportunity is real — and most Houston construction companies haven't invested in the local SEO that would capture it.
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
          What's Included in Construction Local SEO
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A full-stack local SEO strategy built for construction contractors across the Houston metro.
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
          How we approach construction SEO in the Houston market.
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
            Construction SEO Across the Houston Metro
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build neighborhood and suburb-specific rankings for the Houston communities where your best projects live.
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
          Questions About Construction SEO in Houston
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
            Explore More for Houston Construction Companies
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Google Ads for Construction in Houston", desc: "Generate qualified construction leads immediately with targeted paid search campaigns.", href: "/locations/texas/houston/construction/google-ads" },
              { title: "Google Business Profile for Construction", desc: "Build credibility in local search with a fully optimized construction GBP.", href: "/locations/texas/houston/construction/google-business-profile" },
              { title: "Construction Digital Marketing", desc: "Our complete approach to digital marketing for Houston construction contractors.", href: "/industries/construction" },
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
        { name: "Houston Construction Marketing", to: "/locations/texas/houston/construction" },
        { name: "Houston Construction Google Ads", to: "/locations/texas/houston/construction/google-ads" },
        { name: "Charleston Construction SEO", to: "/locations/south-carolina/charleston/construction/seo" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Dominate Construction Search in Houston?"
        subtitle="Houston's construction market generates more revenue than most entire regional markets. Fill out the form and we'll show you where you rank — and how to reach the buyers who matter most."
      />
    </Layout>
  );
}
