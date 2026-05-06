import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, TrendingUp, Check, Droplets, AlertTriangle, Home,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import AnswerSummary from "@/components/AnswerSummary";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Rank for searches like \"plumber Houston TX,\" \"water heater replacement Katy,\" and \"sewer repair Sugar Land.\" In a metro with 7M people, the contractors who rank locally capture demand that never stops.",
    href: "/locations/texas/houston/plumbing/seo",
    cta: "Plumbing SEO in Houston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Houston plumbing emergencies don't wait. Call-only campaigns built around burst pipe, flooding, and water heater failure intent — capturing the high-urgency searches that generate immediate calls.",
    href: "/locations/texas/houston/plumbing/google-ads",
    cta: "Plumbing Google Ads in Houston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack is where most plumbing calls in Houston originate. We optimize every GBP signal to put you in the top 3 for the specific communities you serve across the metro.",
    href: "/locations/texas/houston/plumbing/google-business-profile",
    cta: "Plumbing GBP in Houston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, mobile-first plumbing website with emergency access front and center, service pages for every offering, and trust signals that convert Houston homeowners into booked jobs.",
    href: "/locations/texas/houston/plumbing/web-design",
    cta: "Plumbing Web Design in Houston",
  },
];

const marketStats = [
  { stat: "7M+", label: "People in the Greater Houston metro — one of the highest plumbing search volume markets in America" },
  { stat: "$2.3B", label: "Annual Houston plumbing market size — driven by aging housing stock and relentless growth" },
  { stat: "78%", label: "Of plumbing calls in Houston originate from Google search — primarily maps and organic results" },
  { stat: "60%", label: "Of Houston's residential housing stock is 20+ years old and entering a high-repair cycle" },
];

const whyHouston = [
  {
    icon: AlertTriangle,
    text: "Hurricane Harvey flooded over 200,000 homes across Greater Houston — contaminating plumbing systems, damaging water heaters, and creating a multi-year repair and replacement cycle that continues today.",
  },
  {
    icon: Droplets,
    text: "Houston's clay soil expands and contracts dramatically with rainfall cycles, creating ideal conditions for slab movement and pipe cracking. Slab leak repair is one of the most searched plumbing terms in the market.",
  },
  {
    icon: Home,
    text: "The Heights, Montrose, Midtown, and Meyerland neighborhoods have homes 40–80 years old with aging galvanized and cast iron plumbing that fails regularly. High repair frequency drives consistent search volume.",
  },
  {
    icon: TrendingUp,
    text: "Katy, Sugar Land, The Woodlands, and Pearland are among the fastest-growing suburbs in America. New construction plumbing installs and service calls represent a massive parallel opportunity alongside the repair market.",
  },
];

const faqs = [
  {
    q: "What digital marketing should a Houston plumber invest in first?",
    a: "Google Business Profile optimization — it's the fastest path to more calls in this market. Houston's plumbing GBPs are, on average, incomplete and outdated. A fully optimized profile with the right categories, consistent reviews, and clear service areas can move you into the map pack within 4–8 weeks. Google Ads fills in while organic rankings build.",
  },
  {
    q: "Is the Houston plumbing market too competitive for a smaller company to rank?",
    a: "Not if you're targeting the right geography. 'Plumber Houston' is competitive. 'Plumber Katy TX,' 'slab leak repair Sugar Land,' or 'water heater replacement Pearland' are achievable for a local contractor with strong fundamentals. Houston's size is an advantage — there are high-value local searches across dozens of communities where the competition is much thinner than it looks at the metro level.",
  },
  {
    q: "How does post-Harvey demand affect Houston plumbing marketing?",
    a: "Harvey's impact on Houston's plumbing infrastructure is still playing out years later. Flood-damaged systems that weren't fully repaired are now failing at higher rates. Water heaters and water lines installed as temporary repairs post-Harvey are hitting the end of their service life. There's a steady stream of replacement demand that's separate from normal emergency call volume — and it's concentrated in the neighborhoods that flooded.",
  },
  {
    q: "Do you work with plumbers outside the 610 loop or just in central Houston?",
    a: "The suburbs are where a lot of the opportunity is. Katy, Sugar Land, The Woodlands, Pearland, League City, Friendswood — these communities have their own search ecosystems with their own keyword volumes. We build strategies that cover your entire service area, not just the core city.",
  },
];

const answerSummary = [
  {
    question: "What actually gets Houston plumbers more calls?",
    answer: "For most plumbing companies, the first lift comes from a cleaner Google Business Profile: correct categories, emergency services, real job photos, recent reviews, and service areas that match where you actually want calls. Then the website and ads need to back that up with pages for slab leaks, water heaters, drain cleaning, sewer repair, and emergency plumbing.",
  },
  {
    question: "Which Houston plumbing searches are worth chasing?",
    answer: "The best searches are usually urgent or problem-specific: emergency plumber Houston, slab leak repair Houston, water heater replacement Katy, sewer line repair Sugar Land, drain cleaning Pearland, and plumber near me. Those are not casual research terms. They usually come from someone trying to solve a problem today.",
  },
  {
    question: "Why does Houston need a different plumbing SEO plan?",
    answer: "Houston has clay soil, flood history, aging inner-loop homes, and explosive suburban growth. A plumber serving Meyerland, Katy, and The Woodlands is really competing in several local markets at once, each with its own search behavior and map pack competition.",
  },
  {
    question: "Where should a smaller plumbing company start?",
    answer: "Do not start by trying to rank for the entire metro. Start with the neighborhoods and suburbs where you already win jobs. Build your GBP, reviews, service pages, and ad campaigns around those areas first, then expand once the core markets are producing.",
  },
];

const neighborhoods = [
  "The Woodlands", "Katy", "Sugar Land", "Pearland",
  "Cypress", "Spring", "League City", "Friendswood",
  "Humble", "Missouri City", "Conroe", "Baytown",
];

export default function HoustonPlumbingHub() {
  return (
    <Layout>
      <Helmet>
        <title>Plumbing Digital Marketing in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for plumbers in Houston, TX. Built for Greater Houston plumbing contractors who want to dominate local search and book more jobs."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/plumbing/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Plumbing Digital Marketing — Houston, TX",
            description: "Digital marketing for plumbing contractors in Houston, TX.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Sugar Land" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Digital marketing for plumbing contractors in Houston, TX. Local SEO, Google Ads, GBP optimization, and web design."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress"]}
      />

      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[
              { label: "Locations", href: "/locations" },
              { label: "Texas", href: "/locations/texas" },
              { label: "Houston", href: "/locations/texas/houston" },
              { label: "Plumbing" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Houston, TX — Plumbing Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Plumbers in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Houston homeowner has a plumbing emergency, they grab their phone and call the first result they see. We make sure your plumbing company is that result — across the entire Greater Houston metro.
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
            Houston Is One of the Highest-Volume Plumbing Markets in&nbsp;America
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Seven million people, clay soil that cracks pipes, post-Harvey infrastructure damage still playing out, and one of the fastest-growing suburban housing markets in the country. Houston generates plumbing demand year-round at a scale most markets can't match.
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
            What Makes Plumbing Marketing in Houston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston's plumbing market is shaped by forces unique to this geography. The clay soil creates a slab movement problem that affects homes across the metro — slab leak repair is one of the highest-value and most-searched plumbing terms in the market, and most contractors don't optimize for it specifically.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Harvey's long tail is still generating calls. Flood-damaged systems that received temporary repairs are now failing at higher rates. Neighborhoods like Meyerland, Friendswood, and parts of the Energy Corridor that flooded multiple times have elevated replacement demand that isn't going away.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We build plumbing marketing strategies grounded in how this specific market works — the geography, the soil conditions, the storm history, and the growth patterns driving demand across the suburbs.
              </p>
            </div>
            <div className="space-y-4">
              {whyHouston.map((item) => (
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

      <AnswerSummary
        heading="Houston Plumbing Marketing: What Matters First"
        intro="Houston plumbing searches are urgent, local, and often expensive. These are the answers a business owner needs before spending another dollar."
        items={answerSummary}
        variant="light"
      />

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Houston Plumbers Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Houston homeowners find and choose a plumber.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Built for Houston's Scale and Complexity.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Houston isn't one market — it's dozens of communities with distinct search patterns. We build plumbing marketing strategies that cover your full service area, not just the city proper.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Plumbers Across Greater Houston</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community in your service area.
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Houston Plumbers</h2>
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
        { name: "Charleston Plumbing Marketing", to: "/locations/south-carolina/charleston/plumbing" },
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Be the Go-To Plumber in Greater Houston?"
        subtitle="Houston homeowners are searching for plumbers right now. Fill out the form and we'll show you where you rank — and exactly what it'll take to get to the top."
      />
    </Layout>
  );
}
