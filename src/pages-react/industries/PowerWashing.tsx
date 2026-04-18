import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, SprayCanIcon, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "Meta Ads", description: "Before-and-after photos make power washing ads irresistible on Facebook and Instagram.", href: "/services/meta-ads" },
  { title: "Google Ads", description: "Capture seasonal demand with targeted search ads for power washing services.", href: "/services/google-ads" },
  { title: "Web Design", description: "A clean, fast website with strong visuals converts power washing leads.", href: "/services/web-design" },
  { title: "Landscaping", description: "Power washing and landscaping often go hand in hand. See our landscaping strategy.", href: "/industries/landscaping" },
  { title: "Roofing", description: "Roof cleaning and exterior washing overlap. See how we market roofing companies.", href: "/industries/roofing" },
  { title: "Construction", description: "Post-construction cleanups are a power washing niche. See our construction marketing.", href: "/industries/construction" },
];
import IndustryPortfolio from "@/components/IndustryPortfolio";
import holyCityImg from "@/assets/portfolio-holy-city-hydroshine.png";
import coastalEliteImg from "@/assets/portfolio-coastal-elite.png";

const powerWashingPortfolio = [
  { image: holyCityImg, name: "Holy City Hydroshine" },
  { image: coastalEliteImg, name: "Coastal Elite Pressure Washing" },
];

const powerWashingFaqs = [
  { question: "How much does power washing marketing cost?", answer: "Most power washing companies start between $800 and $2,500 a month depending on their market and whether they're focusing on residential, commercial, or both. It's one of the more accessible verticals to market because the competition isn't as intense as HVAC or roofing — but that window doesn't stay open forever as more companies figure this out." },
  { question: "How long does SEO take for a power washing company?", answer: "Power washing is actually one of the faster verticals to see results in because the competition is lower in most markets. Some companies start seeing meaningful ranking movement in 60–90 days. That said, building real authority takes 4–6 months, and staying there takes consistent effort." },
  { question: "Is Google Ads or SEO better for power washing companies?", answer: "Both work, but they work differently. Ads are great for getting calls quickly, especially around spring when everyone wants their driveway and house washed. SEO builds the consistent year-round presence that keeps jobs coming in outside of peak season. If you're just getting started and need calls fast, ads make sense as a starting point. If you're thinking long-term, SEO is the foundation." },
  { question: "How do I get power washing customers consistently, not just in bursts?", answer: "The companies that stay busy year-round aren't just running spring ads — they're showing up organically in local search all the time. That means an optimized Google Business Profile, a website with clear service pages, and a steady stream of reviews from recent jobs. Word of mouth still drives a lot of power washing business, but people still Google you before they call, even after a referral." },
  { question: "How do I compete with low-price power washing competitors?", answer: "You don't compete on price — you compete on trust. Most homeowners don't want the cheapest option showing up at their house; they want someone reliable who won't damage their siding or driveway. Reviews, before-and-afters, and a professional-looking web presence all signal that you're the safer choice. The low-price guys win some jobs, but they churn through customers. You want the ones who'll call you back every year." },
  { question: "What should a power washing website include?", answer: "The services you offer — house washing, driveway cleaning, roof soft washing, commercial, etc. — with a page or at least a clear section for each. Before-and-after photos are extremely effective in this business, so use them prominently. A service area. And a way to get a quote quickly — a simple form or a call button. Don't make people work to reach you." },
  { question: "How important are Google reviews for power washing companies?", answer: "Very important, and they're one of the fastest things you can improve. Power washing is a visual business — a job takes a few hours and the results are obvious. That makes it easy to ask for a review right after you finish and get a yes. A consistent flow of recent, specific reviews makes a real difference in both your Map Pack ranking and your conversion rate." },
  { question: "Should I run ads seasonally or year-round?", answer: "Running ads only in peak season means you're spending more because everyone else is advertising at the same time. Running at a lower budget year-round keeps your name in front of people, builds some brand familiarity, and lets you scale up quickly when spring hits without starting from scratch. The year-round approach tends to lower your overall cost per lead." },
  { question: "How do I rank locally for pressure washing searches?", answer: "Your Google Business Profile is where most local searches start and end. Make sure it's fully built out with services, photos of real jobs, and a steady stream of reviews. Your website needs pages targeting the specific searches people use — \"house washing,\" \"driveway cleaning,\" \"soft wash roof\" — not just a generic home page that says you do pressure washing. The more specific you are, the more relevant you look to Google." },
  { question: "How do I know if my power washing marketing is working?", answer: "Track where your calls and quote requests are coming from. If you can't tell whether a new customer found you on Google, from an ad, or from a referral, you don't have a clear picture of what's working. We set up call tracking and form tracking so you always know what's driving leads and what's just spending budget." },
];

const stats = [
  { stat: "$2.3B", label: "U.S. power washing industry market size" },
  { stat: "74K+", label: "Monthly 'pressure washing near me' searches" },
  { stat: "91%", label: "Of customers read online reviews before hiring" },
  { stat: "2.8x", label: "More calls from optimized Google Business Profiles" },
];

const painPoints = [
  { icon: SprayCanIcon, text: "Power washing is one of the most competitive local services online. Dozens of operators in every city are competing for the same 'pressure washing near me' clicks — and most of them look identical." },
  { icon: Clock, text: "Seasonal demand means your phone rings off the hook in spring and goes silent in winter. Without a year-round marketing strategy, you're stuck in feast-or-famine mode." },
  { icon: Users, text: "Low barriers to entry mean new competitors pop up constantly. The operators who invest in professional branding, reviews, and search visibility are the ones who build lasting businesses." },
  { icon: TrendingUp, text: "You're great at the work, but spending hours on Facebook groups and Nextdoor hoping for leads isn't scalable. A real digital presence generates consistent, predictable inbound calls." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A clean, professional website with before-and-after galleries, instant quote forms, and click-to-call buttons. Built to convert visitors into booked jobs — not just page views.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We target the searches that book real jobs: house washing, commercial pressure washing, fleet washing, soft wash roof cleaning. We build your local visibility so you're the first call when a property manager needs 30 buildings cleaned, not just a homeowner with a dirty driveway.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture high-intent searches the moment homeowners are ready to book. Geo-targeted campaigns that put your business at the top of Google for your exact service area — no wasted spend.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Before-and-after transformations stop the scroll. We run targeted campaigns showcasing your best work to homeowners in your service area — generating demand before they even think to search.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization",
    desc: "When homeowners ask AI assistants 'best power washing company near me,' your business needs to be the answer. We optimize your content for the next generation of search.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP listing drives more calls than your website. We optimize photos, reviews, service categories, and posts to help you dominate the local Map Pack and build instant trust.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — not generic 'digital marketing'",
  "No long-term contracts — month-to-month, cancel anytime",
  "We understand seasonal demand and build strategies to smooth out the dips",
  "Every strategy is built for your specific service area, not a template",
  "We focus on booked jobs and phone calls — not vanity metrics",
  "Free visibility audit so you can see exactly where you stand",
];

export default function PowerWashing() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for Power Washing Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and advertising built for pressure washing contractors. Get found locally, book more jobs, and fill your schedule year-round." />
              <link rel="canonical" href="https://holywebs.com/industries/power-washing" />
        <meta property="og:image" content="https://holywebs.com/og/og-power-washing.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Power Washing" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Power Washing Industry</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for Power Washing&nbsp;Companies
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your before-and-after photos sell the work — but only if the right homeowners see them. We help power washing companies dominate local search, build a professional brand, and turn online visibility into a&nbsp;full&nbsp;schedule.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Get a Free Consultation
            </Link>
            <Link
              to="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            The Problem Most Power Washing Companies Face&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You do incredible work — but if homeowners can't find you when they're ready to book, they're calling whoever shows up first on Google.
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
          What We Do for Power Washing Companies
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose power washing providers.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link to={s.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Differentiators */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Why Power Washing Companies Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic marketing agency. We specialize in helping local service businesses — including power washing — build real, measurable online visibility that fills your schedule.
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

      <IndustryPortfolio industry="Power Washing Companies" projects={powerWashingPortfolio} />

      <IndustryFAQ faqs={powerWashingFaqs} canonicalUrl="https://holywebs.com/industries/power-washing" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most Power Washing Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
