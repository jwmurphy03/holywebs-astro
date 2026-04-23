import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, Droplets, TrendingUp, Check, Home, AlertTriangle,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Rank in the top 3 of Google Maps for high-value searches like \"emergency plumber Charleston SC,\" \"slab leak repair Mount Pleasant,\" and \"drain cleaning Summerville.\" Organic rankings that compound over time.",
    href: "/locations/south-carolina/charleston/plumbing/seo",
    cta: "Plumbing SEO in Charleston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Plumbing emergencies don't wait. Call-only campaigns and emergency-intent ads that put your number in front of homeowners the moment a pipe bursts, a drain backs up, or the water heater fails.",
    href: "/locations/south-carolina/charleston/plumbing/google-ads",
    cta: "Plumbing Google Ads in Charleston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack is where most local plumbing jobs originate. We optimize every GBP signal — categories, services, reviews, photos, posts — to put you in the top 3 and keep you there.",
    href: "/locations/south-carolina/charleston/plumbing/google-business-profile",
    cta: "Plumbing GBP in Charleston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, mobile-first plumbing website with emergency contact front and center, service pages for every offering, and trust signals that convert panicked homeowners into booked jobs.",
    href: "/locations/south-carolina/charleston/plumbing/web-design",
    cta: "Plumbing Web Design in Charleston",
  },
];

const marketStats = [
  { stat: "850K+", label: "People in the Charleston metro — and thousands more move in every year needing plumbers" },
  { stat: "#1", label: "Most urgent home service need — plumbing emergencies don't get deferred like paint or landscaping" },
  { stat: "76%", label: "Of plumbing calls are generated from Google search — primarily maps and organic" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we know what builds trust in this market" },
];

const whyCharleston = [
  {
    icon: Home,
    text: "The Peninsula and historic neighborhoods have homes 50–150 years old — aging galvanized pipes, corroded fittings, and outdated plumbing systems that fail regularly. High repair frequency = high search volume.",
  },
  {
    icon: Droplets,
    text: "Charleston's clay soil and high water table create ideal conditions for slab leaks. 'Slab leak repair Charleston' is one of the highest-value plumbing searches in the market — and most contractors ignore it.",
  },
  {
    icon: AlertTriangle,
    text: "Flooding from hurricanes and heavy rain creates emergency drain and sewage calls that spike overnight. Being in the map pack when those searches happen can book a week's worth of jobs in a day.",
  },
  {
    icon: TrendingUp,
    text: "New construction in Summerville, Nexton, and Carnes Crossroads means constant installation demand alongside repair work. Plumbers who show up online capture both ends of the market.",
  },
];

const faqs = [
  {
    q: "What digital marketing should a Charleston plumber invest in first?",
    a: "Start with your Google Business Profile. For most plumbers in Charleston, that single profile — when fully optimized with the right categories, services, and a consistent review stream — is the fastest path to more calls. From there, local SEO builds long-term organic rankings, and Google Ads fills gaps during peak demand or while rankings grow.",
  },
  {
    q: "How competitive is the plumbing market in Charleston?",
    a: "Competitive, but winnable. Most local plumbing companies in Charleston have incomplete GBP profiles, inconsistent review generation, and websites that are slow on mobile. That's a gap a properly optimized digital presence closes quickly. The national franchises have budgets you can't match on ads, but local SEO and reviews are where independent plumbers consistently win.",
  },
  {
    q: "How quickly can we start getting more plumbing calls from Google?",
    a: "GBP optimization starts showing map pack movement in 4–8 weeks. Google Ads can generate calls within a week of launch. Organic SEO takes 3–6 months to build real traction. We'll tell you which lever makes the most sense based on where you stand right now.",
  },
  {
    q: "Do you work with plumbers exclusively or other trades too?",
    a: "We work with plumbers, HVAC, roofing, construction, and other local service industries. We don't take competing clients in the same market — if a Charleston plumber is already working with us, we'll tell you before we go further.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
];

export default function CharlestonPlumbingHub() {
  return (
    <Layout>
      <Helmet>
        <title>Plumbing Digital Marketing in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for plumbers in Charleston, SC. Built for Lowcountry plumbing contractors who want to dominate local search and book more jobs."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/plumbing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Plumbing Digital Marketing — Charleston, SC",
            description: "Digital marketing for plumbing contractors in Charleston, SC.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }, { "@type": "City", name: "Summerville" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Digital marketing for plumbing contractors in Charleston, SC. Local SEO, Google Ads, GBP optimization, and web design."
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
              { label: "Plumbing" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Plumbing Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Plumbers in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a pipe bursts or a drain backs up, Charleston homeowners go straight to Google. We make sure your plumbing company is the one they find — and the one they call.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Charleston Is One of the Strongest Plumbing Markets in the&nbsp;Southeast
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Old housing stock, a high water table, rapid population growth, and a climate that accelerates corrosion — Charleston generates consistent, year-round plumbing demand. The contractors who show up in search own that demand.
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
            What Makes Plumbing Marketing in Charleston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Charleston's plumbing market has characteristics that no cookie-cutter strategy accounts for. The Peninsula has some of the oldest residential plumbing in the Southeast — cast iron and galvanized pipes that are decades past their service life. Every year, more of those systems fail and generate emergency calls.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At the same time, the Lowcountry's growth is creating installation demand in new neighborhoods that didn't exist five years ago. Plumbers who can capture both the emergency repair market and the new construction market have an enormous runway here.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Holy Webs in Charleston. We know this market — and we build plumbing marketing strategies around how this market actually works, not a template from somewhere else.
              </p>
            </div>
            <div className="space-y-4">
              {whyCharleston.map((item) => (
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Charleston Plumbers Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Charleston homeowners find and choose a plumber.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={s.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                {s.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Built in Charleston. Built for Charleston.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            We're not a national agency running your campaign from another state. We started here, we know this market, and we apply the same local expertise to your plumbing business that we've used to build our own 73-review Google presence in South Carolina.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Month-to-month — no long-term contracts", "Plumbing-specific strategy, not a generic contractor template", "You talk to the person doing the work", "Free visibility audit before you spend a dollar"].map((item) => (
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

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Plumbers Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community you serve across the tri-county area.
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

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Charleston Plumbers</h2>
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
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Charleston Roofing Marketing", to: "/locations/south-carolina/charleston/roofing" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Be the Go-To Plumber in Charleston?"
        subtitle="Charleston homeowners are searching for plumbers right now. Fill out the form and we'll show you where you rank — and exactly what it'll take to get to the top."
      />
    </Layout>
  );
}
