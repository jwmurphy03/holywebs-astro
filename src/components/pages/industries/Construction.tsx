import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, HardHat, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "Construction Marketing in Charleston, SC", description: "How we grow construction companies in a market defined by Peninsula historic renovation and rapid Lowcountry expansion.", href: "/locations/south-carolina/charleston/construction" },
  { title: "Construction Marketing in Houston, TX", description: "Construction marketing for a market fueled by energy-sector wealth, post-Harvey rebuilding, and non-stop suburban development.", href: "/locations/texas/houston/construction" },
  { title: "Roofing", description: "Roofing is a natural extension of construction. See how we market roofing companies.", href: "/industries/roofing" },
  { title: "Electrical", description: "Electrical contractors in construction need specialized marketing. See our strategy.", href: "/industries/electrical" },
  { title: "Plumbing", description: "New construction plumbing marketing requires a different approach. See how we help.", href: "/industries/plumbing" },
  { title: "All Locations", description: "See every market where we build construction visibility — and what makes each one different.", href: "/locations" },
];
import IndustryPortfolio from "@/components/IndustryPortfolio";
const blackCreekImg = "/assets/portfolio-black-creek.png";
const carolinaConcreteImg = "/assets/portfolio-carolina-concrete.png";
const qualityFenceImg = "/assets/portfolio-quality-fence.png";
const southeastUtilityImg = "/assets/portfolio-southeast-utility.png";
const greatSouthernImg = "/assets/portfolio-great-southern.png";

const constructionPortfolio = [
  { image: blackCreekImg, name: "Black Creek Installations" },
  { image: carolinaConcreteImg, name: "Carolina Concrete" },
  { image: qualityFenceImg, name: "Quality Fence & Custom Outdoors" },
  { image: southeastUtilityImg, name: "Southeast Utility Contractors" },
  { image: greatSouthernImg, name: "Great Southern Builders" },
];

const constructionFaqs = [
  { question: "How much does marketing cost for a construction company?", answer: "It depends heavily on what you build and who you're trying to reach. Custom home builders typically invest between $1,500 and $5,000 a month for a strategy built around attracting qualified buyers — not just leads. The goal isn't volume; it's attracting the right clients at the right project size. We build strategies around that distinction." },
  { question: "How long does SEO take for a construction or home building company?", answer: "Four to six months is a reasonable expectation for meaningful results. Custom home building and general contracting are less searched than emergency services like HVAC or plumbing, which actually makes it easier to rank — there's less competition fighting for those terms. The companies that invest in SEO now tend to own their niche locally within a year." },
  { question: "Is Google Ads or SEO better for construction companies?", answer: "For custom home builders, SEO usually performs better over time because the buying cycle is long and buyers do a lot of research before they ever fill out a form. They want to see a portfolio, read about your process, and get a feel for whether you're the right fit. SEO and a well-built website give you the space to build that trust. Ads can work for specific services, but they're harder to convert at high price points." },
  { question: "How do I attract higher-end custom home clients online?", answer: "Your website and your portfolio are doing most of the heavy lifting. High-end buyers are evaluating your taste, your process, and your professionalism before they ever call. That means quality photography of completed projects, clear communication about how you work, and a website that reflects the caliber of what you build. Generic contractor websites lose those buyers to competitors who look the part." },
  { question: "What should a custom home builder's website include?", answer: "A portfolio of real completed work — with photos that show the quality, not just the square footage. A clear explanation of your process so buyers know what working with you actually looks like. Testimonials from past clients. A service area and the types of projects you take on. And a simple, low-friction way to start a conversation — not a 10-field form." },
  { question: "How important are reviews for construction companies?", answer: "Very, but they work differently than in trades. In construction, a few detailed, credible reviews from real clients carry more weight than a high number of short ones. One review that walks through the whole experience — design, timeline, communication, the finished product — does more for a prospective buyer than twenty five-star ratings with no context." },
  { question: "How do I stand out from other builders in my market?", answer: "Most builder websites look the same — a stock photo hero, a list of services, and a contact form. Differentiation comes from showing your actual work, your actual process, and who you actually are. Buyers at higher price points are choosing a relationship, not just a contractor. Your digital presence should reflect that." },
  { question: "How do I generate leads for a construction company?", answer: "For custom home builders, organic search and referral tend to be the highest-quality channels. SEO targets people actively researching builders in your area. A well-optimized Google Business Profile surfaces you in local map results. And a clear, professional website gives your referral sources something to send people to that closes the deal instead of losing it." },
  { question: "Should construction companies use social media?", answer: "Yes, but use it to show work — not to post tips or inspirational quotes. Completed projects, in-progress shots, before-and-afters. Buyers who are already considering you will check your social pages as part of their research. An active, visually strong profile reinforces your credibility. An inactive one raises doubts." },
  { question: "How do I know if my construction marketing is working?", answer: "In construction, the metric that matters is qualified inquiry volume — not just form fills or calls. You want to track how many conversations you're starting with buyers who are serious and in your project range. Over time, you want to know which channels those conversations are coming from so you can put more behind what's working." },
];

const stats = [
  { stat: "$1.8T", label: "U.S. construction industry annual revenue" },
  { stat: "72%", label: "Of homeowners research builders online before contacting" },
  { stat: "110K+", label: "Monthly 'home builder near me' searches" },
  { stat: "4.7x", label: "ROI on SEO vs. paid directories for contractors" },
];

const painPoints = [
  { icon: HardHat, text: "Most contractor websites look like they were built in 2012. Your work is high-end — your online presence should match. A weak portfolio page is costing you six-figure projects." },
  { icon: Clock, text: "Custom home builds and large renovations have long sales cycles. If you're not staying visible through search and social during that decision window, someone else will close the deal." },
  { icon: Users, text: "Homeowners spend weeks comparing builders online. Reviews, project galleries, and professional branding are what separate you from the handyman with a pickup truck and a business card." },
  { icon: TrendingUp, text: "Referrals built your business, but they won't scale it. A predictable pipeline of qualified leads from search and paid media is how you grow without being at the mercy of word-of-mouth." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A portfolio-driven website that showcases your best projects with stunning imagery, client testimonials, and clear calls-to-action. Built to convert browsers into consultation requests.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We target the high-value searches that land real projects: custom home builds, kitchen and bath remodels, commercial tenant buildouts. We position you as the established contractor in your market so property owners call you first, not the lowball competitor on page two.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture homeowners actively searching for builders and contractors. Our campaigns target high-intent keywords with geo-targeting to deliver qualified leads — not tire kickers looking for handyman quotes.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Showcase completed projects to homeowners in your target demographics. Before-and-after transformations, virtual tours, and testimonial-driven ads that build desire and generate consultation requests.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization",
    desc: "When homeowners ask AI assistants 'best home builder in [your city],' your company needs to be the recommendation. We structure your content to win in AI-powered search.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP is where homeowners check reviews, view project photos, and decide whether to call. We optimize every element to build trust and dominate the local Map Pack.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — not generic 'digital marketing'",
  "No long-term contracts — month-to-month, cancel anytime",
  "We understand long sales cycles and high-ticket project marketing",
  "Every strategy is built for your specific market, not a template",
  "We focus on qualified leads and booked consultations — not vanity metrics",
  "Free visibility audit so you can see exactly where you stand",
];

export default function Construction() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for Construction Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and advertising built for general contractors and construction companies. Build a digital presence that wins more projects and bids." />
              <link rel="canonical" href="https://holywebs.com/industries/construction/" />
        <meta property="og:image" content="https://holywebs.com/og/og-construction.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Construction" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Construction & Home Building</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for Builders &amp;&nbsp;Contractors
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your best work speaks for itself — but only if the right people see it. We help construction companies and custom home builders get found online, showcase their portfolio, and turn high-intent searches into booked&nbsp;consultations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary text-lg">
              Get a Free Consultation
            </a>
            <a
              href="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper variant="light">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{s.stat}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pain Points */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Problem Most Contractors Face&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You build incredible things. But if your online presence doesn't reflect the quality of your work, you're losing projects to competitors with better marketing — not better craftsmanship.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What We Do for Builders &amp; Contractors
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose construction professionals.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href={s.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Differentiators */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Why Builders Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic marketing agency. We specialize in helping local service businesses — including construction and home building — generate qualified leads and build lasting online authority.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <IndustryPortfolio industry="Construction Companies" projects={constructionPortfolio} />

      {/* Markets We Serve */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Construction Marketing by Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Construction demand is shaped by local housing stock, growth patterns, and economic conditions. See how we approach construction marketing in the specific markets we serve.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                city: "Charleston, SC",
                desc: "Our home market. Rapid suburban growth, historic Peninsula renovation demand, coastal STR investor build-outs, and post-storm reconstruction cycles make Charleston one of the strongest construction markets in the Southeast.",
                href: "/locations/south-carolina/charleston/construction",
                tag: "Established market · Multiple demand streams",
              },
              {
                city: "Houston, TX",
                desc: "The largest city in Texas with massive new construction, commercial development, and post-hurricane rebuild cycles. A construction market that runs year-round at scale with strong search demand across all project types.",
                href: "/locations/texas/houston/construction",
                tag: "High-volume market · Competitive landscape",
              },
            ].map((m) => (
              <a
                key={m.city}
                href={m.href}
                className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{m.city}</h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{m.desc}</p>
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">{m.tag}</span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <IndustryFAQ faqs={constructionFaqs} canonicalUrl="https://holywebs.com/industries/construction" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most Construction Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
