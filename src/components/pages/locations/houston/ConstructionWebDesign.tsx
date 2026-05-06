import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Globe, Check,
  Building2, Home, Camera, Star, Zap, FileText,
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
    icon: Camera,
    title: "Portfolio-First Design",
    desc: "Construction is a visual trade — and Houston buyers evaluating premium projects want to see work in neighborhoods they know. We design portfolio galleries organized by project type and Houston neighborhood: custom homes in Katy, Heights renovations, Memorial estates, Medical Center commercial. Relevant, local, credibility-building.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Content Tracks",
    desc: "A River Oaks custom home buyer and a commercial developer in the Energy Corridor are researching entirely different things. We design distinct entry points and content paths for each — so every visitor gets a relevant experience from the first scroll, not a generic contractor overview.",
  },
  {
    icon: FileText,
    title: "Project Type Service Pages",
    desc: "Custom homes, additions, teardown-rebuilds, luxury renovations, commercial buildouts, elevated construction, historic restoration — each gets a dedicated page with Houston-specific context, relevant portfolio work, and keyword optimization for that specific project type.",
  },
  {
    icon: Building2,
    title: "Credentials & Licensing Display",
    desc: "Texas contractor licensing, bonding, insurance, manufacturer certifications, and any association memberships displayed prominently — not buried on a page nobody reads. Houston construction clients at the $300K–$2M+ project level vet contractors carefully. Your site needs to pass that scrutiny.",
  },
  {
    icon: Star,
    title: "Review & Testimonial Integration",
    desc: "Google reviews and project-specific client testimonials woven into service pages, the portfolio, and the homepage. Social proof at the point of decision — not on a separate testimonials page that most visitors never navigate to.",
  },
  {
    icon: Zap,
    title: "Performance Across All Devices",
    desc: "Commercial developers research from laptops. Homeowners research from phones. Both matter in Houston's construction market. We build sites that perform beautifully across all screen sizes and load fast enough that no one abandons before reaching your portfolio.",
  },
];

const deliverables = [
  "Portfolio-first homepage with project galleries by neighborhood and type",
  "Residential and commercial content tracks with distinct entry points",
  "Project type pages: custom homes, additions, teardowns, commercial, elevated",
  "Houston neighborhood pages: Heights, Memorial, Katy, The Woodlands, and more",
  "Credentials, licensing, bonding, and insurance display",
  "Google review integration on service and project pages",
  "Project process and timeline page (what to expect, how long it takes)",
  "About page with team, Houston market history, and company story",
  "Contact and free consultation request forms",
  "Google Analytics and call tracking configuration",
];

const marketStats = [
  { stat: "74%", label: "Of Houston construction clients research contractors online and evaluate website portfolios before making contact" },
  { stat: "53%", label: "Of Houston construction prospects say a contractor's website influences whether they schedule a consultation or look elsewhere" },
  { stat: "$500K+", label: "Average value of a custom home project in Houston's premium markets — the website needs to match the price point it's selling" },
  { stat: "< 3s", label: "Target load time — construction research happens across all devices, including mobile, and slow sites lose prospects before the portfolio loads" },
];

const faqs = [
  {
    q: "What's the most important thing a Houston construction website should accomplish?",
    a: "Build enough trust to earn a consultation request. Construction is a high-consideration purchase — a Houston homeowner planning a $500K custom home or a commercial developer evaluating a general contractor is going to scrutinize your website carefully before reaching out. The site needs to show relevant completed work from Houston-area projects, communicate your credentials clearly, and make the next step easy. Everything else serves those three goals.",
  },
  {
    q: "Should we have separate sections for residential and commercial work?",
    a: "If you do both, yes — and they should be truly distinct, not just different header images. A residential custom home buyer in Katy and a commercial developer in the Medical Center are making completely different decisions with different criteria. One generic site that tries to serve both with the same content won't convert either one effectively. We design clear entry points and distinct content paths for each.",
  },
  {
    q: "How should we present our Houston project portfolio?",
    a: "Organized by project type and Houston neighborhood — not as a chronological gallery dump. A prospective Heights renovation client is more compelled by a dedicated Heights renovation gallery than by browsing through dozens of unrelated projects. Neighborhood-specific project sections also create local SEO value: 'The Heights Home Renovation' and 'Katy Custom Home Builder' pages that rank for those specific searches.",
  },
  {
    q: "Do you write the content for a Houston construction website?",
    a: "Yes. We write all copy — service pages, neighborhood pages, the about page, and project descriptions. We interview you to understand your Houston market history, the types of projects you prefer, the neighborhoods you've worked in, and how you differentiate from competitors. All content is reviewed and approved before going live.",
  },
  {
    q: "How long does it take to build a construction website for Houston?",
    a: "A complete construction website — with project type pages, neighborhood pages, portfolio sections, and full SEO architecture — typically takes 5–7 weeks from kickoff to launch. Construction sites tend to be larger than service trade sites due to portfolio depth and market segmentation. The priority is getting the most important pages and portfolio sections live before entering your busiest lead generation period.",
  },
  {
    q: "How does a website support the longer construction sales cycle?",
    a: "By providing depth of content for buyers who come back multiple times during their research. A Houston homeowner planning a major project may visit your site 4–6 times over several weeks — reviewing your portfolio, reading about your process, checking credentials, and looking at your testimonials each visit. A thin site runs out of credibility-building content quickly. A well-developed site compounds trust every time a serious buyer returns.",
  },
];

export default function HoustonConstructionWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Construction Website Design in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Portfolio-first construction websites built for Houston, TX contractors. Showcase your Houston-area projects, establish credentials, and convert research into consultation requests."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/construction/web-design/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Construction website design for contractors in Houston, TX."
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
                { label: "Texas", href: "/locations/texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "Construction", href: "/locations/texas/houston/construction" },
                { label: "Web Design" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Construction Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Construction Website Design for Houston&nbsp;Contractors
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              A Houston homeowner planning a $600K custom home or an energy-sector executive commissioning a premium renovation will judge your company by your website before they ever call. We build construction sites that show your best Houston-area work and convert research into consultation requests.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="construction" service="web-design" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Construction Websites Fail to Convert in Houston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Most contractor websites have the same problem: they describe services without showing relevant work, and they ask Houston buyers to trust a company before building that trust. A construction website built for conversion solves both.
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
            What We Build Into Every Houston Construction Site
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Designed for the specific way Houston homeowners and developers evaluate construction contractors.
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
            Every Houston construction site we build includes these deliverables as standard — not as add-ons.
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
          Houston Construction Web Design Questions
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
        { name: "Charleston Construction Web Design", to: "/locations/south-carolina/charleston/construction/web-design" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Build a Construction Site That Wins Houston's Best Projects?"
        subtitle="Your website is how premium Houston clients decide whether to call you or a competitor. Fill out the form and we'll show you what your current site is costing you — and what it could be doing instead."
      />
    </Layout>
  );
}
