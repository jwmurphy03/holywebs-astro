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

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const designFeatures = [
  {
    icon: Camera,
    title: "Portfolio-First Design",
    desc: "Construction is a visual business — completed projects should be the hero of your website, not a page buried three clicks deep. We design around your portfolio, with high-quality project galleries by type and location.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Segmentation",
    desc: "Residential homeowners and commercial clients have entirely different decision criteria. We design distinct entry points and content tracks for each — so every visitor gets a relevant experience from the first scroll.",
  },
  {
    icon: FileText,
    title: "Project Type Service Pages",
    desc: "Dedicated pages for custom homes, additions, renovations, commercial build-outs, and historic restoration — each optimized for its own keyword set and buyer intent. One generic 'Services' page can't rank for all of them.",
  },
  {
    icon: Building2,
    title: "Credentials & Licensing Display",
    desc: "SC contractor's license, bonding, insurance, manufacturer certifications, and any association memberships — displayed prominently without requiring a visitor to dig. Construction clients vet harder than almost any other buyer.",
  },
  {
    icon: Star,
    title: "Review & Testimonial Integration",
    desc: "Google reviews and project-specific testimonials woven into the site — on service pages, in the portfolio, and on the homepage. Social proof at the point of decision, not just on one reviews page.",
  },
  {
    icon: Zap,
    title: "Fast, Mobile-Optimized Performance",
    desc: "Commercial clients and developers often research from mobile while on job sites. A slow or hard-to-use mobile experience loses those prospects before they reach your contact form. We build sites that perform everywhere.",
  },
];

const deliverables = [
  "Portfolio-first homepage with project galleries",
  "Residential and commercial service tracks",
  "Project type pages: custom homes, additions, renovations, commercial",
  "Historic restoration and Peninsula renovation page",
  "Service area pages for Charleston, Mount Pleasant, Summerville, and more",
  "Credentials, licensing, and bonding display",
  "Google review integration",
  "Project process and timeline page (what to expect)",
  "About page with team and company story",
  "Contact and free consultation request forms",
];

const marketStats = [
  { stat: "68%", label: "Of construction clients research contractors online before making first contact" },
  { stat: "53%", label: "Of prospects say a contractor's website influences whether they call or look elsewhere" },
  { stat: "< 3s", label: "Maximum load time before mobile visitors abandon — and construction clients are often mobile" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — credibility we build into every site we design" },
];

const faqs = [
  {
    q: "What's the most important thing a construction website should do?",
    a: "Build enough trust to earn a consultation request. Construction is a high-consideration, high-stakes purchase. A visitor who finds your site after a Google search is evaluating whether to trust you with $100K or more. The site needs to show relevant completed work, communicate your credentials and track record, and make it easy to take the next step — without friction or skepticism-inducing gaps.",
  },
  {
    q: "Should we have one website for residential and commercial projects?",
    a: "One site with distinct sections for each is the right structure for most contractors. Completely separate domains dilute your SEO authority. But one generic site that tries to serve both audiences from the same content doesn't convert either one well. We design with clear entry points and content paths for each — so a custom homeowner and a commercial developer both find a relevant experience.",
  },
  {
    q: "How do we show our portfolio effectively online?",
    a: "Project gallery pages organized by type and location, with real photos, brief project descriptions, and — where clients allow — measurable outcomes. Neighborhood context matters for local SEO too: 'Daniel Island custom home' and 'West Ashley renovation' create location signals that help your pages rank in those communities. A well-structured portfolio is both a sales tool and an SEO asset.",
  },
  {
    q: "Do you handle content writing for a construction website?",
    a: "Yes. We write all copy — service pages, area pages, the about page, and the portfolio descriptions. We interview you to capture your voice, your project types, and the details that differentiate you from other contractors in the market. You review and approve before anything goes live.",
  },
];

export default function CharlestonConstructionWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Construction Website Design in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Portfolio-first construction websites built for Charleston, SC contractors. Showcase your projects, communicate your credentials, and convert the clients planning the biggest projects in the Lowcountry."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/construction/web-design" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Construction website design for contractors in Charleston, SC."
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
              { label: "Construction", href: "/locations/south-carolina/charleston/construction" },
              { label: "Web Design" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Construction Web Design</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Construction Website Design for Charleston&nbsp;Contractors
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              A homeowner planning a $400K addition or a developer scoping a commercial build-out will judge your company by what your website says about your work. We build construction sites that show your best projects, establish your credibility, and convert research into consultation requests.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Construction Websites Fail to Convert
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Most contractor websites have the same problem: they describe services without showing the work, and they ask visitors to trust a company they've never heard of before building that trust. A construction website built for conversion does both.
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What We Build Into Every Construction Site
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Designed for the specific way Charleston homeowners and developers evaluate contractors — not a generic template.
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

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Everything Included
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            Every construction site we build includes these deliverables as standard — not as add-ons.
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

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Construction Web Design Questions</h2>
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
        { name: "Charleston Construction Marketing", to: "/locations/south-carolina/charleston/construction" },
        { name: "Charleston Construction SEO", to: "/locations/south-carolina/charleston/construction/seo" },
        { name: "Houston Construction Web Design", to: "/locations/texas/houston/construction/web-design" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Build a Site That Wins the Projects You Want?"
        subtitle="Your website is often the first impression you make on your best potential clients. Fill out the form and we'll show you what your current site is costing you — and what it could be doing instead."
      />
    </Layout>
  );
}
