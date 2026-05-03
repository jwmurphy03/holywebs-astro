import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, TrendingUp, Check, Wind, CloudRain, Flame,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import AnswerSummary from "@/components/AnswerSummary";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Rank for high-value searches like \"roof replacement Houston TX,\" \"hail damage roof repair Katy,\" and \"emergency roofing contractor Sugar Land.\" Build the organic presence that generates calls through storm season and beyond.",
    href: "/locations/texas/houston/roofing/seo",
    cta: "Roofing SEO in Houston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Houston hail storms and hurricanes create 72-hour search surges worth more than entire months of normal volume. Storm-ready campaigns that go live the moment the weather clears — not two days after your competitors already captured the calls.",
    href: "/locations/texas/houston/roofing/google-ads",
    cta: "Roofing Google Ads in Houston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack is where most Houston roofing jobs originate. We optimize every GBP signal to put you in the top 3 for storm damage, replacement, and repair searches across the communities you serve.",
    href: "/locations/texas/houston/roofing/google-business-profile",
    cta: "Roofing GBP in Houston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, trust-first roofing website with storm damage contact front and center, insurance claim resources, and the credibility signals that convert worried homeowners into signed estimates.",
    href: "/locations/texas/houston/roofing/web-design",
    cta: "Roofing Web Design in Houston",
  },
];

const marketStats = [
  { stat: "7M+", label: "People in the Houston metro — one of the highest-volume roofing markets in North America" },
  { stat: "4–6", label: "Significant hail events affecting Greater Houston annually, each generating insurance claim searches" },
  { stat: "76%", label: "Of roofing leads in Houston originate from Google search — primarily emergency and storm-intent" },
  { stat: "8–10 yr", label: "Average Houston roof replacement cycle — shorter than the national average due to extreme heat" },
];

const whyHouston = [
  {
    icon: Wind,
    text: "Hurricane Harvey, Ike, and multiple tropical systems have caused billions in roofing damage across Greater Houston. Insurance claim roofing searches spike dramatically after every major storm event — contractors with live campaigns capture those calls.",
  },
  {
    icon: CloudRain,
    text: "Houston experiences some of the most frequent and intense hail activity in the United States. Katy, Sugar Land, and The Woodlands are regularly hit by hail storms large enough to warrant full roof replacement — creating a secondary demand spike separate from hurricane season.",
  },
  {
    icon: Flame,
    text: "Extreme heat cycles with 90°F+ temperatures for 4+ months annually accelerate shingle degradation and UV damage. Houston roofs have significantly shorter service lives than the national average — driving consistent non-emergency replacement demand.",
  },
  {
    icon: TrendingUp,
    text: "Katy, Pearland, Sugar Land, and The Woodlands are among the fastest-growing suburban markets in America. New construction roofing installs and post-warranty service calls represent a major parallel opportunity alongside storm and replacement work.",
  },
];

const faqs = [
  {
    q: "What's the single most important thing a Houston roofer can do to get more calls?",
    a: "Get into the Google Maps top 3. When a hail storm or tropical system moves through Houston, hundreds of homeowners search for roofers within 24–72 hours. The contractors in the map pack capture the majority of those calls. That requires a fully optimized GBP with the right categories, recent reviews, and storm-damage services explicitly listed.",
  },
  {
    q: "How competitive is the Houston roofing market?",
    a: "Extremely competitive at the metro level — national restoration companies flood Houston after every major storm. But that competition is concentrated in certain neighborhoods and certain search terms. The most competitive searches are 'roof repair Houston' and 'roofing company Houston.' Community-level searches — 'hail damage roof Katy,' 'roof replacement Sugar Land' — are significantly more achievable for a local contractor with strong fundamentals.",
  },
  {
    q: "How do storm-chaser companies affect our digital marketing strategy?",
    a: "Storm chasers are a real factor in Houston. They come in with large ad budgets for 2–3 weeks after a major event, then disappear. Local contractors who have existing map pack rankings and SEO presence are more resilient — organic rankings and GBP positions aren't immediately displaced by temporary ad spend the way pure paid strategies are.",
  },
  {
    q: "Should we focus on insurance claim work or retail replacement?",
    a: "Both — but they require separate content tracks and different search targeting. Insurance claim searches ('hail damage roof claim Houston') and retail replacement searches ('roof replacement cost Pearland') have different intent, different landing pages, and different conversion paths. Most roofing companies in Houston are under-optimized for at least one of these.",
  },
];

const answerSummary = [
  {
    question: "What is the best digital marketing strategy for Houston roofers?",
    answer: "The strongest strategy combines Google Business Profile optimization, storm-ready Google Ads, local SEO for roof repair and replacement searches, and a fast website with insurance-claim trust signals. Houston roofers need both year-round visibility and surge capacity after hail, wind, and hurricane events.",
  },
  {
    question: "Which Houston roofing searches matter most?",
    answer: "The highest-intent searches include roof repair Houston, roof replacement Houston, hail damage roof repair, storm damage roof inspection, roofing contractor near me, and neighborhood terms like Katy roofer, Sugar Land roof replacement, and The Woodlands roof repair.",
  },
  {
    question: "Why is Houston different from other roofing markets?",
    answer: "Houston combines hurricane exposure, frequent hail, extreme heat, fast suburban growth, and a huge metro population. That creates constant replacement demand plus short bursts of emergency search volume after major weather events.",
  },
  {
    question: "What should a roofer fix first if they are not getting calls?",
    answer: "Start with the Google Business Profile: categories, storm-damage services, photos, reviews, and service areas. Then fix website speed, local landing pages, conversion paths, and Google Ads readiness before the next storm window.",
  },
];

const neighborhoods = [
  "Katy", "Sugar Land", "The Woodlands", "Pearland",
  "Cypress", "Spring", "League City", "Friendswood",
  "Humble", "Missouri City", "Conroe", "Baytown",
];

export default function HoustonRoofingHub() {
  return (
    <Layout>
      <Helmet>
        <title>Roofing Digital Marketing in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for roofing contractors in Houston, TX. Built for Greater Houston roofers who want to dominate storm-season search and book more estimates."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/roofing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Roofing Digital Marketing — Houston, TX",
            description: "Digital marketing for roofing contractors in Houston, TX.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Sugar Land" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Digital marketing for roofing contractors in Houston, TX. Local SEO, Google Ads, GBP optimization, and web design."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress"]}
      />

      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[
              { label: "Locations", href: "/locations" },
              { label: "Texas" },
              { label: "Houston", href: "/locations/texas/houston" },
              { label: "Roofing" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Houston, TX — Roofing Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Roofers in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Every hail storm and hurricane that moves through Greater Houston is worth millions in roofing work. The contractors who are visible in search before the storm capture the calls after it. We build the rankings, campaigns, and credibility that get you there.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston Is One of the Most Active Roofing Markets in North&nbsp;America
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Hurricanes, hail, extreme heat, and explosive suburban growth. Houston's roofing market generates demand from multiple directions simultaneously — and the contractors who dominate search own the lion's share of it.
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            What Makes Roofing Marketing in Houston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                No roofing market in the country has the combination of weather events that Houston sees. Hurricanes, tropical storms, and hail — often multiple events per year — create search demand spikes that local roofing contractors either capture or miss entirely based on their digital presence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Beyond storm work, Houston's extreme heat creates a shorter-than-average roof lifecycle. Homeowners replacing roofs that are only 10–12 years old are searching for contractors and comparing options — a different kind of search intent that requires different content and different keywords.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We build roofing marketing strategies that perform in the calm months and surge during storm season — built for the specific weather patterns and competitive dynamics of the Houston market.
              </p>
            </div>
            <div className="space-y-4">
              {whyHouston.map((item) => (
                <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <AnswerSummary
        heading="Houston Roofing Marketing: Direct Answers"
        intro="These answers are written for homeowners, business owners, Google, and AI search systems that need a clear summary of the opportunity."
        items={answerSummary}
        variant="light"
      />

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Houston Roofers Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Houston homeowners find and choose a roofing contractor.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={s.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                {s.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Storm-Ready Strategy for the Houston Market.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Storm chasers flood Houston after every major event — but they don't have local rankings, local reviews, or local trust. We build the digital presence that makes you the obvious choice before a storm chaser ever knocks on a door.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Month-to-month — no long-term contracts", "Storm-ready campaigns built before season starts", "You talk to the person doing the work", "Free visibility audit before you spend a dollar"].map((item) => (
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Roofers Across Greater Houston</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community in your service area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Houston Roofers</h2>
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
        { name: "Charleston Roofing Marketing", to: "/locations/south-carolina/charleston/roofing" },
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston Plumbing Marketing", to: "/locations/texas/houston/plumbing" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Be the Go-To Roofer in Houston?"
        subtitle="Houston homeowners are searching for roofers right now — and every storm season, thousands more are searching in an emergency. Fill out the form and we'll show you where you rank and what it'll take to get to the top."
      />
    </Layout>
  );
}
