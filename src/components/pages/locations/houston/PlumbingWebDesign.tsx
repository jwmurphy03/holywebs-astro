import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Globe, Check,
  Droplets, MapPin, Phone, Star, Zap, FileText,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const designFeatures = [
  {
    icon: Phone,
    title: "Emergency-First Design",
    desc: "The majority of high-value plumbing searches happen on mobile under stress. Your phone number is displayed prominently above the fold, click-to-call is one tap, and the page loads in under 2 seconds. When someone's pipe is bursting, every second of friction costs you a job.",
  },
  {
    icon: Droplets,
    title: "Service-Specific Landing Pages",
    desc: "Slab leak detection, emergency repairs, drain cleaning, water heater replacement, repiping, and sewer work each get dedicated pages. Generic 'Services' pages can't rank for high-value keyword categories like 'slab leak repair Houston TX' — and can't convert the homeowner who needs that specific service.",
  },
  {
    icon: MapPin,
    title: "Suburb Service Area Pages",
    desc: "Katy, Sugar Land, The Woodlands, Pearland, Friendswood — each suburb gets a dedicated page targeting local search terms. A plumber who shows up for 'plumber in Katy TX' with a page specifically about Katy-area service beats the one with a generic service area paragraph every time.",
  },
  {
    icon: Star,
    title: "Trust-Building Elements",
    desc: "Licensing, insurance, bonding, warranty information, and Google reviews displayed where they matter most — on service pages, not buried on an About page. Plumbing requires strangers to let you into their home. Your site needs to remove that hesitation fast.",
  },
  {
    icon: Zap,
    title: "Speed-Optimized for Mobile",
    desc: "Houston plumbing searches are overwhelmingly mobile. We build sites with sub-2-second load times, optimized images, and minimal render-blocking resources. Slow sites lose emergency calls before the homeowner even sees your phone number.",
  },
  {
    icon: FileText,
    title: "SEO Architecture Built In",
    desc: "Proper URL structure, schema markup for plumbing businesses, keyword-optimized page titles and meta descriptions, and an internal linking structure that passes authority from high-traffic pages to your highest-value service pages.",
  },
];

const deliverables = [
  "Emergency-first homepage with above-the-fold phone number",
  "Service pages: slab leak, drain cleaning, water heater, repiping, emergency",
  "Suburb pages: Katy, Sugar Land, The Woodlands, Pearland, Friendswood, and more",
  "Hard water and Houston-specific content pages",
  "Licensing, insurance, and warranty display",
  "Google review integration on service and homepage",
  "Contact form and emergency callback request",
  "About page with team, licenses, and company history",
  "Blog section for seasonal plumbing tips and storm prep",
  "Google Analytics and call tracking configuration",
];

const marketStats = [
  { stat: "85%", label: "Of Houston plumbing emergency searches happen on mobile — your site must perform perfectly on phone screens" },
  { stat: "< 2s", label: "Target load time — sites slower than this lose mobile visitors before the first interaction" },
  { stat: "71%", label: "Of Houston homeowners research plumbers online before making contact — your site is often the deciding factor" },
  { stat: "3×", label: "Higher conversion rates on plumbing sites with service-specific landing pages vs. generic service descriptions" },
];

const faqs = [
  {
    q: "What's the most important design decision for a Houston plumbing website?",
    a: "Mobile speed and phone number visibility. The majority of high-value plumbing searches in Houston happen on phones under stress — a pipe is leaking, a drain is backed up, something is wrong right now. Your site needs to load instantly and your phone number needs to be the first thing a homeowner sees. Everything else is secondary.",
  },
  {
    q: "Should we have separate pages for slab leak repair and general plumbing?",
    a: "Yes. Slab leak searches are among the highest-value and highest-intent in Houston's plumbing market — and they deserve a dedicated page that addresses the homeowner's specific situation, demonstrates your expertise, and is optimized for that exact search query. Lumping it in with general services dilutes both the SEO value and the conversion potential.",
  },
  {
    q: "How do suburb-specific pages help a Houston plumbing website?",
    a: "They help in two ways. First, they give Google clear signals about where you serve — helping you rank in suburb-level searches like 'plumber Katy TX'. Second, they give homeowners in those communities content that feels relevant to them. A page mentioning Clay soil issues, post-Harvey foundation damage, or aging Heights-area pipes resonates with a Houston homeowner in a way that generic content never does.",
  },
  {
    q: "Do you write the content for a plumbing website?",
    a: "Yes. We write all copy — service pages, suburb pages, the about page, and any blog content. We interview you to capture your service specialties, the areas you prioritize, your process, and your voice. You review and approve everything before it goes live.",
  },
  {
    q: "How long does it take to build a plumbing website for Houston?",
    a: "A complete plumbing website with service pages, suburb pages, and SEO foundations takes 4–6 weeks from kickoff to launch. If you're working toward a specific timeline — like getting indexed before a storm season — we can discuss priority sequencing to get your most important pages live first.",
  },
];

export default function HoustonPlumbingWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Plumbing Website Design in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Plumbing website design built for Houston, TX contractors. Emergency-first mobile design, slab leak pages, and suburb-specific pages for Katy, Sugar Land, Pearland, and beyond."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/plumbing/web-design" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Plumbing website design for contractors in Houston, TX."
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
                { label: "Web Design" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Plumbing Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Plumbing Website Design Built for Houston's&nbsp;Market
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              A Houston homeowner with a burst pipe searches on their phone and calls the first plumber they trust. Your website needs to load fast, rank in their suburb, and make the decision easy. We build plumbing sites that do all three.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="plumbing" service="web-design" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Most Plumbing Websites Fail in Houston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            In a city of 7 million people with constant plumbing demand, a slow or hard-to-use website isn't just underperforming — it's actively losing jobs to competitors with better digital presence.
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
            What We Build Into Every Houston Plumbing Site
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Designed for Houston's specific market — emergency mobile searches, suburban geography, and high-value plumbing services.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designFeatures.map((f) => (
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

      {/* Deliverables */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Everything Included
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            Every Houston plumbing site we build includes these deliverables as standard.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {deliverables.map((item) => (
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
          Houston Plumbing Web Design Questions
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
        { name: "Charleston Plumbing Web Design", to: "/locations/south-carolina/charleston/plumbing/web-design" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Build a Plumbing Website That Wins in Houston?"
        subtitle="Your website is where Houston homeowners decide whether to call you or a competitor. Fill out the form and we'll show you what your current site is costing you."
      />
    </Layout>
  );
}
