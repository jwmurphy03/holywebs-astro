import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Building, Check, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HOUSTON_PHONE = "(713) 487-7332";
const HOUSTON_PHONE_HREF = "tel:+17134877332";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import houstonSkyline from "@/assets/houston-skyline.jpg";
import houstonBeSomeone from "@/assets/houston-be-someone.jpg";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "Houston customers judge your business by your website before they ever call. We build fast, professional sites that reflect the quality of your work and make it easy for Houstonians to reach you.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "When someone in Katy, Sugar Land, or the Heights searches for your service, you need to show up. We build local SEO strategies that dominate the Houston metro — Google Business Profile, local citations, and content that ranks.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across the Greater Houston Area with Google Ads, and generate new demand with targeted Facebook and Instagram campaigns reaching your ideal customers by zip code.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI-powered search is changing how Houstonians find local businesses. We make sure your business shows up when ChatGPT, Google AI Overviews, and voice assistants answer questions about services in your area.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "7M+", label: "People in the Greater Houston metro — the 4th largest metro in the U.S." },
  { stat: "92%", label: "Of Houston consumers search online before choosing a local service provider" },
  { stat: "670K+", label: "Small businesses operating in the Houston-The Woodlands-Sugar Land MSA" },
  { stat: "#1", label: "Fastest-growing large metro in the U.S. by population growth (2023–2024)" },
];

const neighborhoods = [
  "Downtown Houston", "The Heights", "Montrose", "Midtown",
  "River Oaks", "Memorial", "Galleria / Uptown", "Katy",
  "Sugar Land", "The Woodlands", "Pearland", "Cypress",
  "Spring", "Humble", "League City", "Missouri City",
];

export default function Houston() {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <Helmet>
        <title>Houston Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Houston's competitive market demands more than a basic website. SEO, web design, and targeted ads that help Greater Houston contractors rank higher and generate leads." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston" />
      </Helmet>
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Local digital marketing for service businesses in Houston, TX. Web design, SEO, Google Ads, and more for the Greater Houston Area."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress", "Spring"]}
      />
      {/* Hero with Houston Skyline */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={houstonSkyline}
            alt="Houston Texas skyline at sunset"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Houston" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Houston, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Houston Local Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston is one of the most competitive local markets in the country. With over 7 million people across the metro, opportunity is everywhere — but so is your competition. We help Houston service businesses cut through the noise and win the customers searching for them right&nbsp;now.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
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
            <a
              href={HOUSTON_PHONE_HREF}
              className="inline-flex items-center gap-2.5 text-white/90 hover:text-primary transition-colors text-lg font-semibold"
            >
              <Phone className="w-5 h-5 text-primary" />
              {HOUSTON_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Houston Market Opportunity */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Houston Market Is Massive — And Most Businesses Are Leaving Money on the&nbsp;Table
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Houston isn't just big — it's one of the fastest-growing metros in the nation. New residents are pouring in, new neighborhoods are developing, and the demand for local services is relentless. From AC repair in Katy to financial planning in The Woodlands to plumbing in Pearland, people are searching every single day. The question is whether they're finding you — or your competitor.
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

      {/* Why Houston Is Different */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              A Market This Big Demands a Strategy Built&nbsp;for&nbsp;It
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A plumber in Cypress is competing with 200+ other plumbing companies. A CPA in Sugar Land needs to rank for the specific communities they serve — not just "CPA near me." Houston's size is your biggest opportunity and your biggest challenge.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The metro stretches across Harris, Fort Bend, Montgomery, Brazoria, and Galveston counties. Generic marketing doesn't cut it here — you need hyper-local strategies that target your actual service areas down to the neighborhood level.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We build marketing strategies that reflect how Houstonians actually search, browse, and buy — because we know this market inside and out.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: TrendingUp, text: "150,000+ new residents in 2023–2024 — new customers arriving every day" },
              { icon: Building, text: "Energy, healthcare, and construction drive massive demand for trade and professional services" },
              { icon: Users, text: "The most ethnically diverse large metro in the U.S. — your marketing should reflect the communities you serve" },
              { icon: MapPin, text: "10,000+ square miles of metro area — hyper-local targeting isn't optional, it's essential" },
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

      {/* Mid-page phone CTA */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <p className="text-primary-foreground font-bold text-lg">Ready to grow your Houston business?</p>
          <a
            href={HOUSTON_PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-5 py-2.5 text-primary-foreground font-bold text-lg"
          >
            <Phone className="w-5 h-5" />
            Call {HOUSTON_PHONE}
          </a>
        </div>
      </div>

      {/* Services */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What We Do for Houston Businesses
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is built around the Houston market — not a one-size-fits-all template.
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

      {/* Be Someone Image Bar */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={houstonBeSomeone}
          alt="Houston's iconic BE SOMEONE graffiti bridge with downtown skyline at night"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      {/* Areas We Serve */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Areas We Serve Across Greater Houston
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          From inside the Loop to the outer suburbs — if you serve customers in the Houston metro, we can help you reach them.
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

      {/* Houston-Specific CTA */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Your Competitors in Houston Are Already Investing in Digital Marketing. Are&nbsp;You?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            In a market this size, the businesses that show up first win. Whether it's the homeowner in Memorial searching for a roofer after a storm, or the business owner in Midtown looking for a CPA before tax season — the company at the top of Google gets the call. Not the best company. The most visible one.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Houston rewards the businesses that invest in being found. Like the Astros building a championship roster or the Texans investing in a franchise quarterback — winning takes commitment, strategy, and the right team behind you.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We're ready to be that team.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {[
              "No long-term contracts — month-to-month",
              "Built specifically for the Houston market",
              "We serve trades and professional services",
              "Free visibility audit to start",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground font-medium text-base">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link to="/contact" className="btn-primary text-lg">
              Get a Free Consultation
            </Link>
            <span className="text-muted-foreground">or call us directly</span>
            <a
              href={HOUSTON_PHONE_HREF}
              className="inline-flex items-center gap-2.5 text-foreground hover:text-primary transition-colors text-2xl font-extrabold"
            >
              <Phone className="w-6 h-6 text-primary" />
              {HOUSTON_PHONE}
            </a>
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets
        markets={[
          { name: "Waco, TX", to: "/locations/texas/waco" },
          { name: "Dallas, TX", to: "/locations/texas/dallas" },
          { name: "Austin, TX", to: "/locations/texas/austin" },
          { name: "Charleston, SC", to: "/locations/south-carolina/charleston" },
        ]}
      />

      <FinalCTASection headline="Ready to Be the Go-To Service Company in Houston?" subtitle="Houston homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />

      {/* Sticky mobile click-to-call bar */}
      {isMobile && (
        <a
          href={HOUSTON_PHONE_HREF}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary flex items-center justify-center gap-2.5 py-3.5 text-primary-foreground font-bold text-lg shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Call {HOUSTON_PHONE}
        </a>
      )}
    </Layout>
  );
}
