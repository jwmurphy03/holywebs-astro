import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Globe, Check,
  Wind, MapPin, Camera, Star, Shield, FileText,
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
    icon: Wind,
    title: "Storm Damage Landing Pages",
    desc: "Dedicated pages for storm damage inspection, hail damage assessment, and emergency tarping convert post-storm searches into calls. These pages need to load fast on mobile, speak to the homeowner's immediate situation, and make scheduling an inspection effortless.",
  },
  {
    icon: Shield,
    title: "Insurance Claim Process Content",
    desc: "Houston homeowners navigating insurance claims are the most valuable leads in the roofing market. Pages that explain your process, what to expect from an adjuster visit, documentation requirements, and your experience with Houston insurance carriers convert at dramatically higher rates than generic service pages.",
  },
  {
    icon: Camera,
    title: "Before & After Project Galleries",
    desc: "Roofing is a visual trade. Before/after photos from Houston-area projects — Katy neighborhoods, Pearland subdivisions, The Woodlands communities — build trust and demonstrate local expertise simultaneously. We design galleries that showcase your work without requiring visitors to dig for it.",
  },
  {
    icon: MapPin,
    title: "Suburb-Specific Service Pages",
    desc: "Katy, Pearland, The Woodlands, Sugar Land, Conroe, and Friendswood each get dedicated pages targeting local search terms. A homeowner in Katy searching for 'roofer near me' gets a page that speaks to Katy's hail history, housing stock, and neighborhood contractors — not generic Houston content.",
  },
  {
    icon: Star,
    title: "Review & Credential Integration",
    desc: "Manufacturer certifications, BBB accreditation, insurance, licensing, and Google reviews are displayed on service pages and the homepage — where they influence the decision, not on a separate 'About' page that most visitors never reach.",
  },
  {
    icon: FileText,
    title: "SEO Architecture for Houston Roofing",
    desc: "Structured data markup for roofing contractors, proper schema for local business, keyword-optimized page structure for storm damage and insurance claim searches, and an internal linking architecture that builds authority across your highest-value pages.",
  },
];

const deliverables = [
  "Homepage with storm damage CTA and above-the-fold phone number",
  "Service pages: storm damage, hail inspection, replacement, repair, emergency",
  "Insurance claim process page — a high-converting asset specific to Houston",
  "Suburb pages: Katy, Pearland, The Woodlands, Sugar Land, Conroe, Friendswood",
  "Before/after project gallery by neighborhood and project type",
  "Manufacturer certifications and licensing display",
  "Review integration on service pages and homepage",
  "About page with company history and team",
  "Contact, scheduling, and free inspection request forms",
  "Google Analytics and call tracking configuration",
];

const marketStats = [
  { stat: "74%", label: "Of Houston homeowners researching roofers visit at least one company website before making contact" },
  { stat: "< 2s", label: "Target load time for roofing sites — post-storm mobile searches have no patience for slow sites" },
  { stat: "4×", label: "Higher conversion on roofing sites with dedicated storm damage and insurance claim pages vs. generic service pages" },
  { stat: "88%", label: "Of post-storm roofing searches in Houston happen on mobile — your site must perform on phone screens under stress" },
];

const faqs = [
  {
    q: "What's the most important page on a Houston roofing website?",
    a: "For most Houston roofing companies, an insurance claim process page is the highest-ROI page you can have. Houston homeowners navigating storm damage are highly motivated, relatively price-insensitive, and actively comparing contractors. A page that explains your process, sets expectations, and demonstrates experience with Houston insurers converts at rates that general roof replacement pages can't match.",
  },
  {
    q: "Should we have suburb-specific pages for Katy, Pearland, and The Woodlands?",
    a: "Yes. Suburb-specific pages are one of the most valuable investments in a roofing website for Houston. Each page can reference the suburb's hail history, housing stock age, common roofing materials, and neighborhood context — content that Google values for local relevance and that homeowners find compelling because it reflects genuine local knowledge.",
  },
  {
    q: "How should we handle before/after photos on a roofing website?",
    a: "Project galleries should be organized by suburb and project type, not dumped onto a single gallery page. A Katy homeowner is more influenced by a 'Katy Roof Replacement' photo set than by a generic gallery. Embedding suburb-specific photos on suburb service area pages creates both SEO value and stronger conversion for those specific communities.",
  },
  {
    q: "Do you write roofing website content for Houston?",
    a: "Yes. We write all copy — service pages, suburb pages, the insurance claims page, the about page, and blog content. We interview you about your Houston-specific experience, the neighborhoods you work most in, the insurance carriers you deal with regularly, and any specific expertise you want to highlight. All content is reviewed and approved before it goes live.",
  },
  {
    q: "How long does a Houston roofing website take to build?",
    a: "A complete roofing website with service pages, suburb pages, and the insurance claims content typically takes 4–6 weeks. If you're approaching hurricane season, we can prioritize getting your storm damage and emergency pages live first — getting indexed before the demand season starts is more important than a perfect simultaneous launch.",
  },
];

export default function HoustonRoofingWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Roofing Website Design in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Roofing website design built for Houston, TX contractors. Storm damage pages, insurance claim content, suburb-specific pages for Katy, Pearland, The Woodlands, and more."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/roofing/web-design/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Roofing website design for contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Pearland", "The Woodlands", "Sugar Land", "Conroe"]}
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
                { label: "Roofing", href: "/locations/texas/houston/roofing" },
                { label: "Web Design" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Roofing Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Roofing Website Design Built for Houston's&nbsp;Storm Market
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Houston homeowner's roof is damaged and they're navigating an insurance claim, the roofer with the most credible, relevant website wins the job. We build roofing sites that convert post-storm searches into calls and insurance claim research into signed contracts.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="roofing" service="web-design" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Roofing Websites Fail in Houston's Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Houston homeowners evaluating roofers after a storm or during an insurance claim are making a high-stakes decision fast. A generic roofing website doesn't have what they need to decide — and they'll find a site that does.
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
            What We Build Into Every Houston Roofing Site
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Designed for Houston's storm market, suburban geography, and insurance claim dynamics.
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
            Every Houston roofing site we build includes these deliverables as standard.
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
          Houston Roofing Web Design Questions
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
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "Houston Roofing SEO", to: "/locations/texas/houston/roofing/seo" },
        { name: "Charleston Roofing Web Design", to: "/locations/south-carolina/charleston/roofing/web-design" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Build a Roofing Website That Wins in Houston?"
        subtitle="Your website is where Houston homeowners decide to call you or a competitor. Fill out the form and we'll show you what your current site is costing you."
      />
    </Layout>
  );
}
