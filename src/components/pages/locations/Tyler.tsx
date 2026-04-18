import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Heart, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import tylerTheater from "@/assets/tyler-theater.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Whitehouse searches for a contractor or a family in Lindale needs an electrician, you need to be at the top. We build local SEO strategies tailored to the Tyler area — optimizing your Google Business Profile and creating content that ranks for East Texas searches.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Your website is the first impression most Tyler customers will have of your business. We design fast, professional sites that earn trust and make it easy for visitors to call or book — whether they're in the Rose Garden District or out in Bullard.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Smith County with Google Ads, and generate demand with targeted social campaigns reaching homeowners from Whitehouse to Lindale to Flint.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI search is changing how East Texas residents find local businesses. We make sure your business shows up when someone asks ChatGPT or voice assistants for a recommendation in Tyler.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "230K+", label: "People in the Tyler metro — the economic hub of East Texas" },
  { stat: "#1", label: "Healthcare center in East Texas — UT Health and CHRISTUS drive major economic activity" },
  { stat: "100K+", label: "Annual visitors to the Texas Rose Festival and Tyler's cultural attractions" },
  { stat: "Growing", label: "Tyler is attracting new residents and businesses seeking quality of life outside DFW" },
];

const neighborhoods = [
  "Downtown Tyler", "South Tyler", "Whitehouse", "Lindale",
  "Bullard", "Flint", "Noonday", "Troup",
  "Chandler", "Mineola", "Canton", "Jacksonville",
];

const nearbyMarkets = [
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Huntsville, TX", to: "/locations/texas/huntsville" },
];

export default function Tyler() {
  return (
    <Layout>
      <Helmet>
        <title>Tyler Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Be the first call in East Texas. Custom websites, local SEO strategies, and targeted advertising that help Tyler contractors dominate local search." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/tyler" />
      </Helmet>
      <LocalBusinessSchema
        city="Tyler"
        state="Texas"
        description="Local digital marketing for service businesses in Tyler, TX. Web design, SEO, Google Ads, and more for the East Texas market."
        areaServed={["Tyler", "Whitehouse", "Lindale", "Bullard", "Flint", "Jacksonville"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tylerTheater}
            alt="Historic Tyler Theater sign in downtown Tyler, Texas"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Tyler" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Tyler, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Tyler &amp; East Texas Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Tyler is the heart of East Texas — a growing market where healthcare, community, and small business drive the economy. We help Tyler service businesses get found online and turn local searches into steady&nbsp;revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Tyler <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Tyler Is East Texas' Growth Engine — And Smart Businesses Are&nbsp;Acting</h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Tyler has evolved from a quiet East Texas town into a regional economic hub. UT Health Tyler and CHRISTUS anchor a massive healthcare corridor. The Texas Rose Festival draws visitors from across the state. And increasingly, families are choosing Tyler's quality of life over the congestion and cost of DFW. For local service businesses, this means growing demand — and the chance to establish yourself before the market gets crowded.
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
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Tyler Is a Relationship Market. Your Marketing Should&nbsp;Reflect&nbsp;That.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tyler isn't Dallas or Houston — and that's exactly what makes it special. In East Texas, trust is earned through relationships, reputation, and showing up consistently. But even in a relationship-driven market, the first place people look is Google. The contractor who shows up at the top of search results with a professional website and strong reviews is the one getting the call — even when the referral comes from a neighbor.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Tyler market has its own rhythm: seasonal demand driven by weather, steady healthcare-related services, and a community that values local businesses over national chains. Your marketing should speak to Tyler — not sound like it was written for a bigger city.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">We build strategies that work in East Texas because we understand how smaller markets think, search, and buy.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Heart, text: "Tyler's healthcare corridor employs thousands — creating stable demand for professional and home services year-round" },
              { icon: TrendingUp, text: "Families are choosing Tyler over DFW for quality of life — new residents mean new customers for local businesses" },
              { icon: Users, text: "East Texas is a trust-driven market — your online presence needs to reinforce the reputation you've built in the community" },
              { icon: MapPin, text: "From Whitehouse to Lindale to Canton — hyper-local targeting helps you dominate your specific service area" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><item.icon className="w-5 h-5 text-primary" /></div>
                <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Do for Tyler Businesses</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Every service is built around the East Texas market — not a template from a bigger&nbsp;city.</p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><s.icon className="w-5 h-5 text-primary" /></div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href={s.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">Learn more <ArrowRight className="w-3.5 h-3.5" /></a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Areas We Serve Across East&nbsp;Texas</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">From downtown Tyler to the surrounding communities — if you serve customers in Smith County and beyond, we can help you reach&nbsp;them.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-foreground text-sm font-medium">{n}</span></div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Real Results for Real Local&nbsp;Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">We recently helped a local service company in a competitive Texas market increase their Google Maps visibility by 340% and double their monthly lead volume within six months — using the same strategies we bring to Tyler.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">In a market like Tyler, being the most visible local option can define your business for years. Our strategies help you build that position before your competitors do.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Tyler Is Growing. Is Your Business Positioned to&nbsp;Win?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every family that moves to Tyler from DFW needs a contractor, a plumber, a financial advisor. Every patient at UT Health needs services nearby. Every homeowner in Whitehouse dealing with a storm-damaged roof is searching Google right now. The demand is there — the question is whether they're finding you or the competitor who got there&nbsp;first.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Let's put your business where East Texas customers are already&nbsp;looking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the Tyler market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={nearbyMarkets} />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Tyler?" subtitle="Tyler homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}