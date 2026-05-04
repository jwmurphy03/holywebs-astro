import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, Zap, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "Google Ads", description: "Capture high-intent electrical searches with paid campaigns that generate calls immediately.", href: "/services/google-ads" },
  { title: "SEO", description: "Rank for 'electrician near me' and service-specific terms in your local market.", href: "/services/seo" },
  { title: "Google Business Profile", description: "Your GBP drives map pack visibility for local electrical searches. We optimize every detail.", href: "/services/google-business-profile" },
  { title: "HVAC", description: "HVAC and electrical contractors share similar marketing challenges. See our HVAC strategy.", href: "/industries/hvac" },
  { title: "Plumbing", description: "Plumbing companies compete in the same local search landscape. See how we help them rank.", href: "/industries/plumbing" },
  { title: "Construction", description: "Electrical contractors working in new construction need a targeted marketing approach.", href: "/industries/construction" },
];

const electricalFaqs = [
  { question: "How much does electrical contractor marketing cost?", answer: "Most electrical contractors invest between $1,000 and $4,000 a month depending on whether they're focused on residential, commercial, or both, and how competitive their local market is. You don't need to run every channel at once — we'll look at where you are and tell you what's going to move the needle fastest for what you're trying to build." },
  { question: "How long does SEO take for an electrical company?", answer: "Four to six months for meaningful results, with some early movement in the first 60–90 days. Electrical is competitive in most metros because the search volume is consistent year-round. The companies that start now are the ones ranking on page one when the ones waiting finally decide to invest." },
  { question: "Is Google Ads or SEO better for electricians?", answer: "Ads are better for capturing immediate, high-intent jobs — panel upgrades, troubleshooting calls, installation work where someone needs help now. SEO builds the long-term visibility that earns you calls without paying for each one. If your budget allows for both, that's the strongest position to be in. If you have to pick one to start, it depends on how quickly you need leads versus how patient you can be." },
  { question: "How do I get more residential electrical jobs?", answer: "Most residential electrical searches happen in Google's local results — the Map Pack. If you're not showing up there, you're not getting those calls regardless of how good your website is. That means your Google Business Profile needs to be fully built out and actively maintained, and your website needs to clearly list the residential services you offer with pages built around how homeowners actually search." },
  { question: "How do I compete with larger electrical companies online?", answer: "Bigger companies have bigger budgets, but they're often not doing the local fundamentals well. Hyper-local content, a strong review profile, and a Google Business Profile that's consistently updated can outperform a larger competitor that's relying on brand recognition alone. Local trust beats corporate size in most residential search results." },
  { question: "What should an electrician's website include?", answer: "Clear service pages for each major service you offer — panel upgrades, EV charger installation, troubleshooting, new construction wiring, etc. A service area that's specific to your actual coverage zone. A phone number that's visible without scrolling. And proof that you're licensed and insured, because that's one of the first things homeowners look for before they call." },
  { question: "How important are reviews for electricians?", answer: "Very. Electrical work isn't something most homeowners know how to evaluate — they rely on reviews to tell them who to trust. A steady flow of recent reviews on your Google Business Profile directly influences both your Map Pack ranking and your conversion rate once someone finds you. Getting a review process in place is one of the highest-ROI things an electrical contractor can do." },
  { question: "How do I rank in the Map Pack for electrical services?", answer: "Map Pack rankings come down to three things: how relevant your Google Business Profile is to the search, how close you are to the searcher, and how much authority your profile and website have built up over time. You can't control proximity, but you can control everything else. We optimize your GBP, build local citations, and make sure your website is sending the right signals." },
  { question: "Should electricians use Local Service Ads?", answer: "LSAs can work well for electrical contractors because electrical jobs often carry high ticket values — the cost-per-lead math works out. That said, the credit process and ongoing management has gotten more complicated. We typically recommend a one-time setup and then let LSAs run alongside your SEO and standard Google Ads rather than treating them as a standalone strategy." },
  { question: "How do I know if my electrical marketing is working?", answer: "Track call volume and lead source. If you're running ads, you should know exactly what you're paying per call and whether those calls are converting to booked jobs. If you're doing SEO, watch your Map Pack position and organic traffic month over month. Rankings are a lagging indicator — the leading indicator is always calls." },
];

const stats = [
  { stat: "$225B+", label: "U.S. electrical contracting industry size" },
  { stat: "165K+", label: "Monthly 'electrician near me' searches" },
  { stat: "82%", label: "Of homeowners search online before hiring an electrician" },
  { stat: "5x", label: "More calls from top-3 Google Map Pack positions" },
];

const painPoints = [
  { icon: Zap, text: "Most electricians rely on word-of-mouth and HomeAdvisor leads they're sharing with five other contractors. You're paying for leads that were never yours to begin with." },
  { icon: Clock, text: "When a homeowner's power goes out or they smell burning wires, they're calling whoever shows up first on Google — not flipping through a stack of business cards." },
  { icon: Users, text: "National franchises like Mr. Electric are pouring money into digital marketing in your backyard. But they can't match your local reputation — if people can actually find you." },
  { icon: TrendingUp, text: "New construction, EV charger installations, and smart home wiring are exploding. If your online presence doesn't reflect these services, you're leaving money on the table." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A professional electrician website that converts visitors into calls. Emergency service banners, service area pages, licensing credentials, and click-to-call — built for homeowners who need a trusted electrician fast.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We rank you for the jobs worth showing up for: panel upgrades, EV charger installations, whole-house rewires, generator installs. We build the local search presence that keeps your schedule full with profitable work, not $75 outlet swaps.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture emergency electrical searches the moment they happen. Our campaigns target high-intent, geo-specific keywords so every dollar goes toward real leads in your service area — not wasted clicks.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Stay top-of-mind with homeowners before they need an electrician. Promote panel upgrades, whole-home rewiring, EV charger installs, and seasonal safety inspections to generate demand before the emergency.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization",
    desc: "When homeowners ask ChatGPT or Google AI 'best electrician near me,' your business needs to be the answer. We optimize your content for AI-powered search results and voice assistants.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP listing drives Map Pack rankings and local trust. We optimize service categories, photos, review responses, and posts to make your electrical business the obvious choice in local search.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — not generic 'digital marketing'",
  "No long-term contracts — month-to-month, cancel anytime",
  "We understand the electrical trade and speak your customers' language",
  "Every strategy is built for your specific service area, not a template",
  "We focus on calls and booked jobs — not vanity metrics",
  "Free visibility audit so you can see exactly where you stand",
];

export default function Electrical() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for Electrical Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and advertising built for electrical contractors. Dominate local search for electrical repair, panel upgrades, and installation services." />
              <link rel="canonical" href="https://holywebs.com/industries/electrical/" />
        <meta property="og:image" content="https://holywebs.com/og/og-electrical.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Electrical" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Electrical Industry</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for Electrical&nbsp;Contractors
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your next customer is searching for an electrician right now. If they're not finding you, they're finding your competitor — and once they make that call, that job is gone. We help electrical contractors show up first, build trust fast, and turn searches into booked&nbsp;jobs.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{s.stat}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pain Points */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Problem Most Electricians Face&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You're a licensed professional who does excellent work. But if homeowners can't find you when they need electrical help, none of that matters.
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
          What We Do for Electrical Contractors
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose electricians.
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
            Why Electricians Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic marketing agency. We specialize in helping local service businesses — including electrical contractors — build real, measurable online visibility.
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

      <IndustryFAQ faqs={electricalFaqs} canonicalUrl="https://holywebs.com/industries/electrical" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most Electrical Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
