import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, TrendingUp, TreePine, Clock, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "Meta Ads", description: "Visual services like landscaping thrive on Facebook and Instagram. See our paid social strategy.", href: "/services/meta-ads" },
  { title: "Social Media Management", description: "Showcase your projects with consistent, professional social content.", href: "/services/social-media" },
  { title: "Web Design", description: "A portfolio-driven website converts browsers into booked consultations.", href: "/services/web-design" },
  { title: "Power Washing", description: "Many landscapers also offer power washing. See our marketing approach.", href: "/industries/power-washing" },
  { title: "Construction", description: "Hardscaping and outdoor construction projects need targeted marketing.", href: "/industries/construction" },
  { title: "Multi-Location", description: "Growing into new markets? See how we scale visibility for multi-location businesses.", href: "/industries/multi-location" },
];
import IndustryPortfolio from "@/components/IndustryPortfolio";
import dnaImg from "@/assets/portfolio-dna-landscape.png";
import willshireImg from "@/assets/portfolio-willshire.png";

const landscapingPortfolio = [
  { image: dnaImg, name: "DNA Landscape" },
  { image: willshireImg, name: "Willshire Farms Inc." },
];

const landscapingFaqs = [
  { question: "How much does landscaping marketing cost?", answer: "Most landscaping companies invest between $1,000 and $3,500 a month depending on their service mix — lawn maintenance, design and installation, irrigation, commercial contracts — and how competitive their local market is. Landscaping has strong seasonal dynamics, so we build budgets that reflect that rather than a flat monthly spend regardless of the time of year." },
  { question: "How long does SEO take for a landscaping company?", answer: "You'll typically see early movement in the first 60–90 days, with stronger results building through months 4–6. Landscaping is a solid vertical for SEO because searches are consistent and local, and a lot of competitors aren't investing in it seriously. Companies that get in early tend to hold their positions for a long time." },
  { question: "Is Google Ads or SEO better for landscaping companies?", answer: "Ads are great for capturing high-intent searches during peak season — spring cleanup, sod installation, landscape design projects. SEO builds the year-round presence that keeps you in front of people even when you're not running ads. For recurring maintenance clients especially, organic visibility is worth a lot because those customers stay for years." },
  { question: "How do I get more landscaping customers consistently?", answer: "Consistent inbound leads in landscaping come from three places: strong organic rankings, an active Google Business Profile with recent reviews, and a website that's clear about what you offer and who you serve. Most landscaping businesses rely too heavily on word of mouth, which is great when it's working but unpredictable. A digital foundation gives you leads that aren't dependent on who someone ran into last week." },
  { question: "How do I handle the slow season as a landscaping company?", answer: "A few things work well: email campaigns to past customers about fall cleanup, mulching, or spring prep services; a Google Ads campaign targeting the jobs that do happen in slower months; and content on your website that targets off-season searches. The companies that use the slower months to strengthen their digital presence come out of spring in a much stronger position than the ones who coast." },
  { question: "What should a landscaping company website include?", answer: "Pages for each major service you offer — not just a single \"services\" page with a list. A photo gallery of real work you've done. A clear service area. Testimonials from real clients. And a simple way to request a quote or start a conversation. If you do both residential and commercial, those audiences should probably be segmented — what a homeowner wants to see is different from what a property manager needs to know." },
  { question: "How important are reviews for landscaping companies?", answer: "Very. Landscaping is a visual, trust-based decision. Homeowners and property managers want to see that other people have been happy with your work before they commit. Reviews that mention specific services — \"they did our full yard redesign\" or \"we've used them for maintenance for three years\" — are especially persuasive. Getting a review system in place so you're collecting them consistently is one of the highest-leverage things a landscaping company can do." },
  { question: "How do I rank locally for landscaping searches?", answer: "Your Google Business Profile is the starting point. It needs to be fully built out with service categories, real job photos, and a steady stream of recent reviews. Your website needs to have dedicated pages for the services people actually search for — \"lawn care,\" \"landscape design,\" \"sod installation,\" \"sprinkler repair\" — with content that clearly connects those services to your service area. The more specific the page, the more relevant you look for that search." },
  { question: "Should I run ads year-round or just seasonally?", answer: "A light year-round presence is usually more cost-effective than going dark and coming back loud in spring. Staying visible at a lower budget through slower months keeps your name in front of people and lowers your overall cost-per-lead by the time you factor in the full year. When spring hits, you can scale up quickly instead of spending the first few weeks of prime season rebuilding your ad account." },
  { question: "How do I know if my landscaping marketing is working?", answer: "Track where your new customers are coming from — whether that's calls, form fills, or quote requests. Know your cost per lead by channel so you can see whether ads are pulling their weight and whether your organic presence is growing. Revenue is the bottom line, but the channel-level data is what tells you where to put more investment and where to pull back." },
];

const stats = [
  { stat: "$176B+", label: "U.S. landscaping & lawn care market size" },
  { stat: "135K+", label: "Monthly 'landscaping near me' searches" },
  { stat: "78%", label: "Of homeowners research landscapers online before hiring" },
  { stat: "4.1x", label: "More leads from page-one rankings vs. page two" },
];

const painPoints = [
  { icon: TreePine, text: "Every landscaper in your area has a truck wrap and a Facebook page. That's not marketing — that's blending in. You need a strategy that makes you the obvious choice." },
  { icon: Clock, text: "Spring and summer drive massive demand, but your pipeline dries up in the off-season. A real digital strategy keeps leads flowing year-round with services like leaf removal, holiday lighting, and hardscaping." },
  { icon: Users, text: "National franchise operations are flooding your market with ad spend. But they can't match your local reputation, your crew, or your community roots — you just need to show up where it matters." },
  { icon: TrendingUp, text: "Landscaping is highly visual and trust-driven. If your online presence doesn't showcase your best work and make it easy to request a quote, you're leaving money on the table." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A stunning, fast-loading landscaping website that showcases your best projects. Before-and-after galleries, service area maps, seasonal service highlights, and instant quote request forms — built to convert browsers into booked jobs.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We rank you for the work that builds your business: landscape design, hardscaping, irrigation installation, commercial maintenance contracts. We build local search authority that attracts homeowners planning $10K+ projects, not just someone looking for a one-time mow.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture homeowners actively searching for landscaping services right now. Geo-targeted campaigns down to the zip code so you're not paying for clicks outside your territory.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Landscaping is one of the most visual trades — and social ads are your showroom. Seasonal campaigns for spring cleanups, patio installations, and outdoor living projects that stop the scroll and generate leads.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization",
    desc: "When homeowners ask ChatGPT or Google AI 'best landscaper near me,' your business needs to be the answer. We optimize your content for the next generation of search.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP listing drives Map Pack visibility. We optimize your categories, photos, review responses, seasonal posts, and service descriptions to keep you at the top of local search.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — not generic 'digital marketing'",
  "No long-term contracts — month-to-month, cancel anytime",
  "We understand seasonal landscaping demand and build strategies around it",
  "Every strategy is built for your specific service area, not a template",
  "We focus on calls and booked jobs — not vanity metrics",
  "Free visibility audit so you can see exactly where you stand",
];

export default function Landscaping() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for Landscaping Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and digital advertising built for landscaping contractors. Get found when homeowners search for lawn care, hardscaping, and landscaping services." />
        <link rel="canonical" href="https://holywebs.com/industries/landscaping" />
        <meta property="og:image" content="https://holywebs.com/og/og-landscaping.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Landscaping" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Landscaping Industry</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for Landscaping&nbsp;Companies
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your next customer is scrolling through photos of dream backyards right now. If they're not finding your work, they're hiring your competitor. We help landscaping companies build an online presence that turns curb appeal into&nbsp;booked&nbsp;jobs.
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
            The Problem Most Landscaping Companies Face&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You transform outdoor spaces for a living. But if homeowners can't find you when they're planning their next project, none of that craftsmanship matters.
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
          What We Do for Landscaping Companies
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose landscaping providers.
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
            Why Landscaping Companies Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic marketing agency. We specialize in helping local service businesses — including landscaping — build real, measurable online visibility.
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

      <IndustryPortfolio industry="Landscaping Companies" projects={landscapingPortfolio} />

      <IndustryFAQ faqs={landscapingFaqs} canonicalUrl="https://holywebs.com/industries/landscaping" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most Landscaping Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
