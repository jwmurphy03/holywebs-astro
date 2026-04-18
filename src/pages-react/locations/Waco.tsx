import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, GraduationCap, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import wacoSkyline from "@/assets/waco-bridge.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Woodway searches for a plumber or a Baylor parent looks for a local restaurant, you need to be at the top. We build local SEO strategies that target the Waco metro — optimizing your Google Business Profile, building local citations, and creating content that ranks for the searches that matter most to your business.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Your website is the first impression most Waco customers will have of your business. We design fast, professional sites that reflect the quality of your work and make it effortless for visitors to call, book, or request a quote — whether they're on their phone at Magnolia Market or at home in Hewitt.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across McLennan County with Google Ads, and generate new demand with hyper-targeted Facebook and Instagram campaigns. From reaching Baylor students to homeowners in China Spring, we put your business in front of the right people at the right time.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI-powered search is changing how Waco residents find local businesses. When someone asks ChatGPT, Google AI Overviews, or Siri for a recommendation in Waco, we make sure your business is part of the answer — not just a link buried on page two.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "280K+", label: "People in the Waco metro — and growing steadily with new development" },
  { stat: "20K+", label: "Baylor University students creating year-round demand for local services" },
  { stat: "4M+", label: "Annual visitors to Magnolia Market and Waco's growing tourism attractions" },
  { stat: "Top 10", label: "Waco ranks among the fastest-growing mid-size Texas metros by job growth" },
];

const neighborhoods = [
  "Downtown Waco", "Woodway", "Hewitt", "Robinson",
  "China Spring", "Bellmead", "Lacy Lakeview", "McGregor",
  "Lorena", "Beverly Hills", "Bruceville-Eddy", "West",
];

const nearbyMarkets = [
  { name: "Houston", to: "/locations/texas/houston" },
  { name: "Dallas", to: "/locations/texas/dallas" },
  { name: "Austin", to: "/locations/texas/austin" },
  { name: "Tyler", to: "/locations/texas/tyler" },
];

export default function Waco() {
  return (
    <Layout>
      <Helmet>
        <title>Waco Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Help your Waco business stand out in Central Texas. Custom websites, local SEO, and Google Ads that bring in more calls from the Waco–Temple–Killeen corridor." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/waco" />
      </Helmet>
      <LocalBusinessSchema
        city="Waco"
        state="Texas"
        description="Local digital marketing for service businesses in Waco, TX. Web design, SEO, Google Ads, and more for the Central Texas market."
        areaServed={["Waco", "Woodway", "Hewitt", "Robinson", "China Spring", "Bellmead"]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={wacoSkyline}
            alt="Waco Texas skyline with Brazos River at sunset"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Waco" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Waco, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              SEO &amp; Digital Marketing for Waco, Texas&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Waco is no longer a hidden gem — it's a thriving market where tourism, education, and entrepreneurship are fueling real growth. Whether you've been here for decades or launched last year, we help Waco service businesses get found online, build trust, and turn local searches into booked&nbsp;jobs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-lg">
                Get a Free Consultation
              </Link>
              <Link
                to="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Get a free visibility audit in&nbsp;Waco
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Waco's Growth Is Creating Real Opportunity — For the Businesses That Show&nbsp;Up
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            A decade ago, most people drove through Waco on I-35 without stopping. Today, Magnolia Market draws millions of visitors a year, Baylor University continues to expand, and new restaurants, shops, and service businesses are opening across McLennan County. The Brazos River corridor is seeing development that would have been unthinkable ten years ago. For local service businesses, the opportunity has never been greater — but neither has the competition. The businesses investing in their online presence now are the ones that will own this market for years to come.
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

      {/* Why Waco Is Different */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Waco Has Its Own Rhythm. Your Marketing Should&nbsp;Reflect&nbsp;It.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Waco isn't Houston. It isn't Dallas. It's a mid-size Texas market with a unique blend of university energy, small-town values, and a tourism boom that's reshaping the local economy. The HVAC company in Woodway competing for homeowners' attention needs a different strategy than the restaurant downtown trying to capture Magnolia tourists on a Saturday afternoon.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From the Dr Pepper Museum to Cameron Park Zoo to the Texas Ranger Hall of Fame, Waco's identity is deeply rooted in its landmarks and its community. Marketing that works here speaks to Waco — not to some generic "small city in Texas." We understand the seasonal rhythms: the surge when Baylor students return in the fall, the tourism peak in spring and summer, and the steady local demand from families in Hewitt, Robinson, and China Spring year-round.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We build strategies that reflect how Waco residents actually search, choose, and buy — because a one-size-fits-all approach from a national agency won't cut it in a market this specific.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: GraduationCap, text: "Baylor University brings 20,000+ students and their families — creating year-round demand for services from dining to auto repair to healthcare" },
              { icon: TrendingUp, text: "Waco's tourism economy has exploded thanks to Magnolia Market, driving 4M+ annual visitors and massive seasonal opportunity" },
              { icon: Users, text: "The entrepreneurial spirit in Waco is thriving — new businesses are opening across downtown, along the Brazos, and in surrounding communities" },
              { icon: MapPin, text: "McLennan County stretches from West to Lorena — hyper-local targeting ensures you reach customers in your actual service area" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What We Do for Waco Businesses
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is built around the Waco market — not a template recycled from a bigger city.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Areas We Serve */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Areas We Serve Across the Waco Metro
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          From downtown Waco to the surrounding communities — if you serve customers in McLennan County, we can help you reach&nbsp;them.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{n}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Social Proof / Case Study */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Real Results for Real Local&nbsp;Businesses
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We recently helped a local service company in a similar Texas market increase their Google Maps visibility by 340% and double their monthly lead volume within six months — using the same local SEO and Google Ads strategies we bring to Waco. No fluff, no vanity metrics. Just more calls, more booked jobs, and steady growth that compounds over time.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Waco businesses face unique challenges — competing with both local operators and larger companies marketing from Dallas and Austin. Our strategies are built to help you win in your backyard, where it matters most.
          </p>
        </div>
      </SectionWrapper>

      {/* Waco-Specific CTA */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Waco Is Growing. Is Your Business Getting Its Share of the&nbsp;Market?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every tourist who walks through Magnolia Market needs somewhere to eat, somewhere to stay, and services they can trust. Every Baylor student moving into an apartment needs an AC company, a locksmith, a cleaning service. Every family in Hewitt upgrading their home needs a contractor, a roofer, a landscaper. The demand is already there — the question is whether they're finding you or your competitor who invested in showing up&nbsp;first.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We build digital marketing strategies that reflect how Waco actually works — the seasonal patterns, the community connections, and the search behaviors that drive real business in McLennan County and&nbsp;beyond.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Let's put your business where Waco customers are already&nbsp;looking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {[
              "No long-term contracts — month-to-month",
              "Built specifically for the Waco market",
              "We serve trades and professional services",
              "Free visibility audit to start",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Nearby Markets */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            Explore Our Other Texas Markets
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We serve local service businesses across the Lone Star State with market-specific strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyMarkets.map((m) => (
              <Link
                key={m.name}
                to={m.to}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-primary" />
                {m.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FinalCTASection headline="Ready to Be the Go-To Service Company in Waco?" subtitle="Waco homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}
