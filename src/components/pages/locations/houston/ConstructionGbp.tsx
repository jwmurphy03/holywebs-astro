import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Star, Check, TrendingUp,
  Building2, Camera, MessageSquare, Globe, BarChart3, Home,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";

const gbpFeatures = [
  {
    icon: MapPin,
    title: "Construction Category Optimization",
    desc: "General Contractor, Home Builder, Custom Home Builder, Remodeling Contractor, Commercial Contractor — the right category selections determine which construction searches you're eligible for. Most contractors under-select dramatically. We audit and optimize every eligible category and attribute.",
  },
  {
    icon: Camera,
    title: "Portfolio Photo Strategy",
    desc: "Construction is a visual business — and GBP photos are the first visual impression searchers get. We develop a systematic approach to adding completed project photos from your Houston-area work: custom homes in Katy, renovations in The Heights, commercial projects in the Medical Center area. Location context matters.",
  },
  {
    icon: Star,
    title: "Review Generation for Long Cycles",
    desc: "Construction projects have longer cycles than service trades — which means review generation needs a different process. We build a post-project review request workflow that systematically captures reviews from your completed jobs, keeping your velocity competitive over time.",
  },
  {
    icon: Building2,
    title: "Project Type Services List",
    desc: "We build out your GBP services list with keyword-rich descriptions for every project type you offer: custom homes, additions, renovations, commercial buildouts, historic restoration, elevated construction. Each service is a potential ranking signal for specific searches.",
  },
  {
    icon: MessageSquare,
    title: "Posts, Q&A & Market Updates",
    desc: "Regular GBP posts tied to Houston construction seasons and market conditions signal an active, engaged business. We pre-answer Q&A questions about licensing, timelines, project minimums, and the types of projects you specialize in — reducing friction for serious buyers researching your company.",
  },
  {
    icon: BarChart3,
    title: "Competitive Monitoring & Reporting",
    desc: "Monthly GBP Insights reporting covering searches, views, and engagement. We monitor competitor profiles in your target Houston neighborhoods to identify gaps and opportunities — especially in fast-moving communities like The Heights, Katy, and The Woodlands where construction GBP competition is active.",
  },
];

const marketStats = [
  { stat: "68%", label: "Of Houston construction clients research contractors online and visit GBPs before making any contact" },
  { stat: "2.7×", label: "More profile visits for construction companies with complete GBPs vs. partially filled profiles" },
  { stat: "Top 3", label: "Map pack positions capture the majority of contractor research clicks — where serious buyers start evaluating their options" },
  { stat: "4 mo.", label: "Average time to meaningful map pack ranking improvement for construction GBP optimization in competitive Houston neighborhoods" },
];

const gbpChecklist = [
  "Full category audit: general contractor, home builder, remodeling contractor, commercial",
  "Service area configuration covering the Houston neighborhoods you serve",
  "Services list: custom homes, additions, renovations, commercial, elevated construction",
  "Photo strategy: completed Houston projects by neighborhood and project type",
  "Post-project review generation workflow",
  "Q&A: licensing, project minimums, timelines, specializations",
  "Regular GBP posts tied to Houston construction market activity",
  "Monthly GBP Insights reporting with competitive analysis",
];

const faqs = [
  {
    q: "Does a Google Business Profile matter for construction companies in Houston?",
    a: "Yes — significantly. Most construction clients begin their contractor search on Google, and the map pack is the first thing they see. For a construction company, GBP is less about emergency call capture and more about credibility establishment — a fully optimized GBP with photos, reviews, and complete project information filters your company in as a serious option before a client ever visits your website.",
  },
  {
    q: "What GBP categories should a Houston construction company use?",
    a: "The right combination depends on your work mix, but typically includes 'General Contractor', 'Home Builder', and 'Remodeling Contractor' at minimum. If you do commercial work, 'Commercial Contractor' should be added. Custom home specialists should add 'Custom Home Builder'. Each additional relevant category expands the set of searches you're eligible to appear in.",
  },
  {
    q: "How do we build reviews for a construction business in Houston?",
    a: "Construction reviews require a process calibrated to longer project cycles. We build a post-project review request workflow that triggers at project completion and 30 days post-handover — when the client is most satisfied and the results are fresh. We also create templates for text and email requests that make it easy for clients to leave a review without friction.",
  },
  {
    q: "How important are GBP photos for Houston construction companies?",
    a: "More important than for most industries. Construction clients are evaluating visual work quality before they decide to contact a contractor. GBP photos are the first portfolio impression — and a company with 20 high-quality photos of completed Houston projects will consistently outperform one with 3 stock images. We develop a systematic photo addition strategy tied to project completions.",
  },
  {
    q: "Can a construction company show up in multiple Houston neighborhoods with one GBP?",
    a: "Yes. Service-area GBP configuration allows you to define a service radius or a list of specific areas you serve. We configure this carefully to ensure your profile appears across the full range of Houston communities you target — from The Heights and Montrose to Katy and The Woodlands — without triggering spam or duplicate listing issues.",
  },
];

export default function HoustonConstructionGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for Construction Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Business Profile optimization for construction contractors in Houston, TX. Build credibility in local search for Heights, Memorial, Katy, The Woodlands, and the full Houston metro."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/construction/google-business-profile" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Business Profile optimization for construction contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "The Heights", "Memorial"]}
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
                { label: "Google Business Profile" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Construction Google Business Profile
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Build Credibility in Houston's Construction Search Market
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston construction clients start their contractor search on Google — and they filter by what your GBP shows before they ever visit your website. A fully optimized profile with photos, reviews, and complete project information is the difference between being considered and being skipped.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free GBP Audit
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

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston Construction Clients Research Carefully Before Contacting Anyone
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Unlike plumbing or HVAC, construction isn't an emergency purchase. Clients spend weeks researching. Your GBP is one of the first places they evaluate you — and most construction GBPs in Houston leave major credibility gaps.
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
            What We Optimize in Your Construction GBP
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every element of your GBP signals credibility and relevance to both Google and the serious buyers evaluating your company.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gbpFeatures.map((f) => (
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Everything We Do to Your Construction GBP
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            A complete construction GBP optimization — not a one-time setup, but an ongoing strategy.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {gbpChecklist.map((item) => (
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
          Houston Construction GBP Questions
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
        { name: "Houston Construction Marketing", to: "/locations/texas/houston/construction" },
        { name: "Houston Construction SEO", to: "/locations/texas/houston/construction/seo" },
        { name: "Charleston Construction GBP", to: "/locations/south-carolina/charleston/construction/google-business-profile" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Build Your Construction Credibility in Houston Search?"
        subtitle="Houston construction clients are researching contractors online right now. Fill out the form and we'll audit your GBP and show you what serious buyers are — and aren't — finding."
      />
    </Layout>
  );
}
