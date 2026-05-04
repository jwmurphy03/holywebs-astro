import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Building, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import CityQuickAnswers from "@/components/CityQuickAnswers";
const dallasSkyline = "/assets/dallas-skyline.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Plano searches for an electrician or a business owner in Frisco needs a CPA, you need to be at the top. We build local SEO strategies that target the DFW metroplex — optimizing your Google Business Profile, building local citations, and creating content that ranks for the searches driving your business.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Your website is often the first impression a Dallas customer has of your business. We design fast, professional sites that reflect the quality of your work and make it effortless for visitors to call, book, or request a quote — whether they're in Uptown or out in McKinney.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across the DFW metroplex with Google Ads, and generate new demand with hyper-targeted Facebook and Instagram campaigns. From reaching professionals in the Design District to homeowners in Allen, we put your business in front of the right people.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI-powered search is changing how Dallas residents find local businesses. When someone asks ChatGPT, Google AI Overviews, or Siri for a recommendation in DFW, we make sure your business is part of the answer.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "7.6M+", label: "People in the DFW metroplex — the 4th largest metro area in the&nbsp;U.S." },
  { stat: "23", label: "Fortune 500 companies headquartered in DFW — more than any other Texas metro" },
  { stat: "1M+", label: "New residents added to DFW in the last decade alone" },
  { stat: "#1", label: "Top metro in the U.S. for job growth and corporate relocations" },
];

const neighborhoods = [
  "Downtown Dallas", "Uptown", "Deep Ellum", "Bishop Arts",
  "Plano", "Frisco", "McKinney", "Allen",
  "Richardson", "Garland", "Mesquite", "Irving",
  "Grand Prairie", "Carrollton", "Lewisville", "Denton",
];

const nearbyMarkets = [
  { name: "Arlington, TX", to: "/locations/texas/arlington" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Austin, TX", to: "/locations/texas/austin" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
];

export default function Dallas() {
  return (
    <Layout>
      <Helmet>
        <title>Dallas Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Outrank competitors in the DFW metroplex. High-converting websites, Google Ads, and local SEO for Dallas-area contractors and service businesses." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/dallas" />
      </Helmet>
      <LocalBusinessSchema
        city="Dallas"
        state="Texas"
        description="Local digital marketing for service businesses in Dallas, TX. Web design, SEO, Google Ads, and more for the DFW metroplex."
        areaServed={["Dallas", "Plano", "Frisco", "McKinney", "Richardson", "Irving"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dallasSkyline}
            alt="Dallas Texas downtown skyline aerial view"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Dallas" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Dallas, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Dallas &amp; DFW Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Dallas is one of the most competitive markets in the country — and it's still growing. Whether you've been serving DFW for decades or just opened your doors, we help local service businesses cut through the noise, get found online, and turn searches into booked&nbsp;jobs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Dallas <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CityQuickAnswers city="Dallas" />

      {/* Market Opportunity */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            DFW Is Booming — And the Businesses That Show Up First&nbsp;Win
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            The Dallas-Fort Worth metroplex has added over a million residents in the past decade. Corporate relocations from California and the Northeast are reshaping entire suburbs. New neighborhoods are being built in Frisco, Celina, and Prosper almost overnight. For local service businesses, this means unprecedented demand — but also fierce competition from every direction. The companies investing in their digital presence today are the ones capturing this growth.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((m) => (
              <div key={m.label} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{m.stat}</p>
                <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: m.label }} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Dallas Is Different */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              DFW Isn't One Market. It's&nbsp;Dozens.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A plumber in Plano is competing in a completely different landscape than an HVAC company in Mesquite. A CPA in Uptown has different customers than a contractor in Grand Prairie. The DFW metroplex stretches across 13 counties and dozens of distinct communities — each with its own search patterns, competition, and customer expectations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Generic "Dallas marketing" doesn't work here. You need hyper-local strategies that target your actual service areas — down to the neighborhood and zip code level. That's what separates the businesses getting calls from the ones wondering why their phone isn't ringing.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We build strategies that reflect how DFW residents actually search, choose, and buy — because a one-size-fits-all approach from a national agency won't cut it in a market this complex.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: TrendingUp, text: "DFW added more residents than any other U.S. metro in 2023 — new customers are arriving every single day" },
              { icon: Building, text: "Major corporate relocations (Toyota, Goldman Sachs, Caterpillar) are driving professional service demand across the suburbs" },
              { icon: Users, text: "The metroplex spans 13 counties with wildly different demographics — your marketing needs to match your actual service area" },
              { icon: MapPin, text: "From Deep Ellum to Denton, the DFW sprawl means hyper-local targeting isn't optional — it's the only way to compete" },
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
          What We Do for Dallas Businesses
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is built around the DFW market — not a template recycled from another&nbsp;city.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Areas We Serve */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Areas We Serve Across the DFW Metroplex
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          From downtown Dallas to the northern suburbs — if you serve customers in DFW, we can help you reach&nbsp;them.
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

      {/* Social Proof */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Real Results for Real Local&nbsp;Businesses
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We recently helped a local service company in a competitive Texas market increase their Google Maps visibility by 340% and double their monthly lead volume within six months — using the same local SEO and Google Ads strategies we bring to Dallas. More calls, more booked jobs, and steady growth that compounds over time.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            DFW businesses face a unique challenge — competing with both neighborhood operators and large companies marketing from across the metroplex. Our strategies are built to help you win in your specific service area, where it matters&nbsp;most.
          </p>
        </div>
      </SectionWrapper>

      {/* Dallas CTA */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            DFW Is Growing Faster Than Ever. Is Your Business Keeping&nbsp;Up?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every family that moves to Frisco needs an HVAC company, a roofer, a landscaper. Every business relocating to the Design District needs a CPA, a cleaning service, an IT provider. Every homeowner in Richardson dealing with a plumbing emergency is searching Google right now. The demand is already there — the question is whether they're finding you or your competitor who invested in showing up&nbsp;first.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Let's put your business where DFW customers are already&nbsp;looking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {[
              "No long-term contracts — month-to-month",
              "Built specifically for the DFW market",
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

      <NearbyMarkets markets={nearbyMarkets} />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Dallas?" subtitle="Dallas homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}
