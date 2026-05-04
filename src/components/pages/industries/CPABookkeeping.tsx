import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, Calculator, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "Rank for searches like 'CPA near me' and 'bookkeeping services' in your local market.", href: "/services/seo" },
  { title: "Google Business Profile", description: "A polished GBP builds trust with potential clients before they ever visit your website.", href: "/services/google-business-profile" },
  { title: "Web Design", description: "Professional service firms need websites that reflect their expertise and build credibility.", href: "/services/web-design" },
  { title: "Multi-Location", description: "CPA firms with multiple offices need consistent visibility in every market.", href: "/industries/multi-location" },
  { title: "Electrical", description: "Trades and professional services face similar local search challenges. See our approach.", href: "/industries/electrical" },
  { title: "HVAC", description: "HVAC companies rely on the same local marketing strategies. See how we help them.", href: "/industries/hvac" },
];
const snapbooksImg = "/assets/portfolio-snapbooks-full.png";


const cpaFaqs = [
  { question: "How much does marketing cost for a CPA or bookkeeping firm?", answer: "Most accounting firms invest between $1,000 and $3,500 a month for a solid local digital marketing strategy. The range depends on how competitive your market is, how many services you offer, and whether you're targeting individuals, small businesses, or both. CPA marketing has a strong ROI because client lifetime value is high — one good client often stays for years." },
  { question: "How long does SEO take for a CPA or bookkeeping firm?", answer: "Four to six months is a realistic timeline, with some earlier movement if the competition in your area isn't doing SEO well — which is common in smaller markets. Accounting is one of the more relationship-driven searches, meaning people often compare several firms before deciding. That makes content and trust signals especially important alongside rankings." },
  { question: "Is Google Ads or SEO better for accounting firms?", answer: "Tax season creates a window where ads work really well — searches spike in February through April and people are actively looking for help right now. SEO builds the year-round visibility that catches people when they're looking for a bookkeeper, a small business CPA, or help with payroll outside of tax season. The strongest approach layers both, using ads to capture the seasonal surge and SEO to stay visible the rest of the year." },
  { question: "How do I attract small business clients as a CPA?", answer: "Small business owners search differently than individuals looking for a personal tax return. They're looking for someone who understands their industry, their structure, and their specific situation. Your website needs to speak to that directly — service pages built around what small businesses actually need, testimonials from business clients, and clear communication about what working with you looks like. Generic \"we do taxes\" language doesn't convert them." },
  { question: "What should a CPA firm's website include?", answer: "A clear breakdown of the services you offer, written for the client — not for accountants. Who you work with, what the engagement looks like, and how to get started. Social proof from real clients, especially if you specialize in specific industries or business types. And a contact option that's easy to use — a lot of accounting firm websites make it harder than it needs to be to start a conversation." },
  { question: "How important are reviews for accounting firms?", answer: "More important than most accountants realize. People choosing a CPA are making a significant trust decision — they're handing over their financial information. Recent, specific reviews from real clients go a long way toward making that trust decision easier. They also directly improve your visibility in local search, which is where most people start looking." },
  { question: "How do I market my firm in the weeks before tax season?", answer: "The window opens earlier than most people think — people start looking for CPAs in January. Email campaigns to past clients, an active Google Ads campaign running through April, and updated GBP posts around tax-related topics are all high-value moves during that window. If you wait until March to ramp up, you're already behind the firms that planned ahead." },
  { question: "How do I differentiate my firm from competitors online?", answer: "Most CPA websites look almost identical — same stock photos, same list of services, same about page. Differentiation comes from specificity. If you specialize in a specific industry, say it loud. If you have a particular approach or philosophy about how you work with clients, explain it. People aren't just looking for technical competence — they're looking for someone they feel like they can work with long-term." },
  { question: "Should CPAs use social media?", answer: "LinkedIn is worth maintaining for professional credibility, especially if you work with business owners. Facebook can work for local visibility and for staying in front of past clients. Neither is where most CPA leads come from — search is. But an active social presence gives people a second place to verify you're real and credible after they find you on Google." },
  { question: "How do I know if my accounting firm marketing is working?", answer: "Track new client inquiries by source. Accounting firm growth can be slow to show up in the numbers because the sales cycle is longer and clients don't always convert quickly. The leading indicators to watch are organic traffic, keyword rankings for the services you offer, and the volume of inbound inquiries month over month. We report on all of it in plain terms." },
];

const stats = [
  { stat: "$160B+", label: "U.S. accounting services market size" },
  { stat: "135K+", label: "Monthly 'CPA near me' and 'bookkeeper near me' searches" },
  { stat: "68%", label: "Of small businesses search online when choosing a CPA" },
  { stat: "5.1x", label: "Higher conversion rate from organic search vs. paid directories" },
];

const painPoints = [
  { icon: Calculator, text: "Most CPA and bookkeeping websites look like they haven't been updated since 2015. In a profession built on trust and precision, an outdated website sends exactly the wrong signal to potential clients." },
  { icon: Clock, text: "Tax season drives a massive spike in demand — but if your marketing only kicks in during Q1, you're already too late. The firms winning new clients are visible year-round." },
  { icon: Users, text: "Small business owners and individuals choosing a CPA care about credibility, specialization, and reviews. If your online presence doesn't communicate expertise, they'll move on to a firm that does." },
  { icon: TrendingUp, text: "Referrals are great, but they don't scale. Building a consistent pipeline of inbound leads from search and content marketing is how modern accounting firms grow beyond word-of-mouth." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A polished, professional website that communicates trust and expertise. Service pages for tax prep, bookkeeping, payroll, and advisory — with clear CTAs that make it easy to schedule a consultation.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We target the searches that bring in retainer clients: small business CPA, tax planning for LLCs, outsourced CFO services, QuickBooks setup. We build your local authority so business owners find you when they're ready for a real financial partner, not just someone to file a 1040.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture business owners and individuals actively searching for accounting help. Our campaigns target high-intent keywords with precise geo-targeting — delivering qualified leads, not random clicks.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Build awareness and trust with business owners in your area before tax season hits. Educational content, client success stories, and seasonal promotions that position your firm as the obvious choice.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization",
    desc: "When business owners ask AI assistants 'best CPA for small business near me,' your firm needs to be the answer. We optimize your content for AI-powered search and voice queries.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP listing is where potential clients check reviews, hours, and services before they call. We optimize every detail to build trust and make your firm stand out in local search results.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — not generic 'digital marketing'",
  "No long-term contracts — month-to-month, cancel anytime",
  "We understand tax seasonality and build strategies around demand cycles",
  "Every strategy is built for your specific market, not a template",
  "We focus on qualified client inquiries — not vanity metrics",
  "Free visibility audit so you can see exactly where you stand",
];

export default function CPABookkeeping() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for CPA & Bookkeeping Firms | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and advertising built for accounting firms, CPAs, and bookkeeping services. Attract more clients and grow your practice online." />
              <link rel="canonical" href="https://holywebs.com/industries/cpa-bookkeeping/" />
        <meta property="og:image" content="https://holywebs.com/og/og-cpa-bookkeeping.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "CPA & Bookkeeping" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">CPA & Bookkeeping</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for CPAs &amp;&nbsp;Bookkeepers
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your clients trust you with their finances — but they have to find you first. We help accounting firms and bookkeepers build a professional online presence that attracts qualified clients and positions your firm as the trusted expert in your&nbsp;market.
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
            The Problem Most Accounting Firms Face&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You're exceptional at what you do. But if potential clients can't find you — or your website doesn't inspire confidence — they'll choose a competitor who looks more established online.
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
          What We Do for CPAs &amp; Bookkeepers
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how business owners and individuals actually search for and choose accounting professionals.
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
            Why Accounting Firms Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic marketing agency. We specialize in helping local service businesses and professional firms build real, measurable online visibility that generates qualified client inquiries.
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

      {/* Case Study */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">Case Study</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              How We Launched SnapBooks Into a Competitive&nbsp;Market
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              SnapBooks needed a brand identity, a high-converting website, and a digital strategy to compete with established bookkeeping firms from day one. Here's what we delivered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { stat: "2 Weeks", label: "From concept to a fully launched website and brand" },
              { stat: "1,200+", label: "Organic impressions in the first 30 days" },
              { stat: "Top 10", label: "Google ranking for target keywords within 60 days" },
              { stat: "3x", label: "More consultation requests than projected at launch" },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 bg-muted rounded-xl border border-border">
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{s.stat}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-xl border border-border p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">The Challenge</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  SnapBooks was entering a market dominated by established firms with years of reviews and referral networks. They needed to look credible from day one, rank for competitive local keywords quickly, and convert visitors into booked consultations without an existing reputation to lean on.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">What We Built</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We designed a conversion-focused website with service pages targeting specific bookkeeping needs, optimized their Google Business Profile before launch day, built a local SEO foundation around high-intent keywords, and created a content strategy that positioned SnapBooks as a modern alternative to traditional accounting firms.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border border-border shadow-lg">
            <img
              src={snapbooksImg}
              alt="SnapBooks website designed by Holy Webs"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      <IndustryFAQ faqs={cpaFaqs} canonicalUrl="https://holywebs.com/industries/cpa-bookkeeping" variant="muted" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most CPA & Bookkeeping Firms Are Losing Leads They Don't Even Know About" subtitle="Your clients are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
