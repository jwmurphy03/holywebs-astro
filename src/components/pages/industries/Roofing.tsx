import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, Home, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import IndustrySeoMarketLinks from "@/components/IndustrySeoMarketLinks";

const relatedLinks = [
  { title: "Roofing Marketing in Charleston, SC", description: "How we grow roofing companies in a market shaped by hurricane season, salt air, and Peninsula aging homes.", href: "/locations/south-carolina/charleston/roofing" },
  { title: "Roofing Marketing in Houston, TX", description: "Roofing marketing strategy for a market hit by hurricanes and hail — where storm chasers flood in after every major event.", href: "/locations/texas/houston/roofing" },
  { title: "Construction", description: "Many roofers also do general construction. See how we market both.", href: "/industries/construction" },
  { title: "Power Washing", description: "Roof cleaning and power washing overlap. See our marketing approach.", href: "/industries/power-washing" },
  { title: "HVAC", description: "HVAC and roofing companies both rely on seasonal search demand. See our strategy.", href: "/industries/hvac" },
  { title: "All Locations", description: "See every market where we build roofing visibility — and what makes each one different.", href: "/locations" },
];
import IndustryPortfolio from "@/components/IndustryPortfolio";
const refinedImg = "/assets/portfolio-refined-roofing.png";
const woodysImg = "/assets/portfolio-woodys-roofing.png";
const tidewaterImg = "/assets/portfolio-tidewater.png";

const roofingPortfolio = [
  { image: refinedImg, name: "Refined Roofing Co." },
  { image: woodysImg, name: "Woody's Roofing" },
  { image: tidewaterImg, name: "Tidewater Roofing" },
];

const roofingFaqs = [
  { question: "How much does roofing company marketing cost?", answer: "Roofing is one of the more competitive verticals for digital marketing, and budgets reflect that. Most roofing companies invest between $2,000 and $6,000 a month for a serious strategy that includes SEO, Google Ads, and website management. The math usually works in your favor given average job values — one or two extra jobs a month typically covers the investment." },
  { question: "How long does SEO take for a roofing company?", answer: "Expect 4–6 months before you see significant ranking movement. Roofing is competitive almost everywhere because the lead value is high and a lot of companies are investing. The good news is that most of your competitors aren't doing SEO well — they're paying for ads and hoping the algorithm handles the rest. Consistent SEO over 6–12 months puts you ahead of most of them." },
  { question: "Is Google Ads or SEO better for roofers?", answer: "For storm damage leads that need to convert fast, Google Ads are hard to beat — the intent is high and timing matters. SEO builds the foundation that keeps your pipeline full in the off-season when everyone else's ad budgets are drying up. The roofing companies that dominate their markets are typically doing both and using ads to supplement the organic visibility SEO is building." },
  { question: "How do I get more storm damage leads?", answer: "Storm damage leads are almost entirely a speed-and-visibility game. When a storm hits, searches spike within hours. If you have strong organic rankings and an active Google Ads campaign ready to scale, you capture the surge. If you're starting from zero the day after the storm, you're already behind. The preparation happens before the weather does." },
  { question: "How do I compete with out-of-town storm chasers?", answer: "Storm chasers can outspend you on ads short-term, but they can't beat you on local trust. Your reviews, your Google Business Profile, your years of jobs in the community — that's what separates you from a company that blew in from two states away. Homeowners who do a little research almost always choose the local company with a track record. Make that trust visible and easy to find." },
  { question: "What should a roofing company website include?", answer: "Service pages for each type of work you do — storm damage, replacement, repairs, gutters, commercial. A clear service area. Financing information if you offer it. Before-and-after photos of real jobs. And reviews — lots of them, prominently placed. Roofing is a big purchase and homeowners want to see evidence that other people have trusted you before they pick up the phone." },
  { question: "How important are reviews for roofing companies?", answer: "They're probably the single biggest conversion factor. A homeowner looking at three roofing companies in the Map Pack is going to call the one with the most credible, recent reviews. It's not always the most reviews — it's the most convincing ones. Getting a consistent review process running is one of the first things we address with roofing clients." },
  { question: "How do I market my roofing company after a storm hits?", answer: "Scale your ads immediately, make sure your GBP is updated with storm damage language and current photos, and if you have an email or SMS list of past customers, reach out. Speed matters — most homeowners make a decision within a few days. Having your digital presence storm-ready before the weather hits is what makes the difference." },
  { question: "Should roofers use Local Service Ads?", answer: "LSAs can work for roofing because the job values support the cost-per-lead. The challenge is that Google's automated credit determination has made them harder to manage profitably. We recommend them as part of a broader ads strategy, not as a standalone channel, and we approach them with a one-time setup fee rather than ongoing management." },
  { question: "How do I know if my roofing marketing is working?", answer: "Track where your calls are coming from and what they're converting to. If you're running ads, cost-per-call and cost-per-booked-job are the numbers that matter. For SEO, watch your Map Pack position for your core service keywords and your organic call volume month over month. Revenue is the ultimate report card, but those leading indicators tell you whether you're heading in the right direction." },
];

const stats = [
  { stat: "$56B+", label: "U.S. roofing market size (2024)" },
  { stat: "110K+", label: "Monthly 'roofing company near me' searches" },
  { stat: "72%", label: "Of homeowners get only 1–2 quotes before choosing a roofer" },
  { stat: "$8K–$15K", label: "Average residential roof replacement cost" },
];

const painPoints = [
  { icon: Home, text: "After every major storm, hundreds of roofing companies flood the market with door-knocking and yard signs. If you don't have a strong online presence, you're fighting for scraps against storm chasers." },
  { icon: Clock, text: "Roofing is one of the highest-ticket home services. Homeowners are cautious — they check reviews, compare websites, and look for proof of quality before they call. Your digital presence has to close the deal before your salesperson even shows up." },
  { icon: Users, text: "Insurance restoration keywords are gold — but most roofers aren't targeting them. 'Roof insurance claim,' 'storm damage repair,' and 'hail damage roof' are high-intent searches your competitors are ignoring." },
  { icon: TrendingUp, text: "Seasonal demand swings make roofing a feast-or-famine business. A consistent marketing strategy fills your pipeline during slow months so you're not laying off crews in winter." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A roofing website that builds trust and converts. Before-and-after galleries, financing options, insurance claim guidance, and service area pages — designed to turn browsers into booked inspections.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We focus on the searches that drive real revenue: full roof replacements, storm damage claims, commercial roofing projects. We build your local authority so you dominate the Map Pack when homeowners are choosing between you and the guy quoting half your price.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture high-intent roofing searches with geo-targeted campaigns. Storm-responsive ad strategies that scale up when demand spikes and pull back during slow periods — so you're never wasting budget.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Generate demand before storm season. Roof maintenance tips, free inspection offers, and financing promotions — targeted to homeowners in your service area with roofs approaching their replacement window.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "AI Search Optimization",
    desc: "When homeowners ask AI assistants about roof repair costs, insurance claims, or finding a roofer, your company needs to be the recommended answer. We optimize your content for AI-powered search.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP listing is where homeowners decide whether to call you or your competitor. We optimize photos, reviews, service categories, and posts to keep you at the top of the local Map Pack.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We understand storm-driven demand and build strategies for seasonal surges",
  "No long-term contracts — performance earns your business every month",
  "Insurance restoration and hail damage keyword strategies built in",
  "Before-and-after portfolio strategies that sell your work visually",
  "Hyper-local targeting for your actual service area and neighborhoods",
  "Free visibility audit so you see where you rank vs. local competitors",
];

export default function Roofing() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for Roofing Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and digital advertising built for roofing contractors. Get found for roof repair, replacement, and storm damage searches in your service area." />
              <link rel="canonical" href="https://holywebs.com/industries/roofing/" />
        <meta property="og:image" content="https://holywebs.com/og/og-roofing.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Roofing" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Roofing Industry</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for Roofing&nbsp;Companies
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            A hailstorm hits and suddenly every roofer in town is competing for the same homeowners. The companies that win aren't the ones knocking on doors — they're the ones already ranking on Google. We help roofing companies build the online presence that captures high-ticket jobs year&#8209;round.
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
            Why Most Roofing Companies Lose Jobs to Their&nbsp;Competitors
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You do quality work and stand behind it. But if homeowners can't find you — or don't trust what they see online — they'll call someone else.
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
          What We Do for Roofing Companies
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose a roofing company.
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
            Why Roofing Companies Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic agency. We understand high-ticket, storm-driven industries like roofing — and we build strategies that match.
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

      <IndustryPortfolio industry="Roofing Companies" projects={roofingPortfolio} />

      {/* Markets We Serve */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Roofing Marketing by Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Storm patterns, housing age, and contractor competition vary dramatically by market. See how we approach roofing marketing in the specific cities we serve.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                city: "Charleston, SC",
                desc: "Our home market. Hurricane season, salt air corrosion, aging Peninsula housing, and explosive Lowcountry growth create one of the most active roofing markets in the Southeast.",
                href: "/locations/south-carolina/charleston/roofing",
                tag: "Established market · Storm-season specialists",
              },
              {
                city: "Houston, TX",
                desc: "Hail storms, hurricanes, and extreme heat cycles mean Houston roofs have some of the shortest replacement cycles in the country. Massive housing density and year-round demand.",
                href: "/locations/texas/houston/roofing",
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

      <IndustryFAQ faqs={roofingFaqs} canonicalUrl="https://holywebs.com/industries/roofing" />

      <IndustrySeoMarketLinks industry="roofing" label="Roofing" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most Roofing Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
