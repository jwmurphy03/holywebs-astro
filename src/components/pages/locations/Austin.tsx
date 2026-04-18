import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Zap, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
const austinSkyline = "/assets/austin-skyline.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When someone in Round Rock searches for an electrician or a homeowner in Lakeway needs a landscaper, you need to be at the top. We build local SEO strategies that target the Austin metro — optimizing your Google Business Profile, building citations, and creating content that ranks for the searches driving your revenue.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Austin customers expect quality and authenticity. We build fast, professional websites that reflect your work and make it effortless for visitors to call or book — whether they're in East Austin or out in Cedar Park.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Travis, Williamson, and Hays counties with Google Ads, and generate demand with targeted social campaigns reaching homeowners from Pflugerville to Dripping Springs.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "Austin is a tech-forward city where AI search adoption is ahead of the curve. We position your business to show up when ChatGPT, Google AI Overviews, and voice assistants answer questions about local services.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "2.3M+", label: "People in the Austin-Round Rock-Georgetown metro area" },
  { stat: "#1", label: "Fastest-growing large metro in the U.S. for most of the past decade" },
  { stat: "53%", label: "Population growth in the Austin metro over the last 10 years" },
  { stat: "180+", label: "People moving to Austin every single day — creating constant new demand" },
];

const neighborhoods = [
  "Downtown Austin", "East Austin", "South Congress", "Mueller",
  "Round Rock", "Cedar Park", "Georgetown", "Pflugerville",
  "Lakeway", "Bee Cave", "Kyle", "Buda",
  "Leander", "Dripping Springs", "Manor", "Bastrop",
];

const nearbyMarkets = [
  { name: "San Antonio, TX", to: "/locations/texas/san-antonio" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
];

export default function Austin() {
  return (
    <Layout>
      <Helmet>
        <title>Austin Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Austin is booming — make sure your service business grows with it. Local SEO, fast-loading websites, and paid ads that capture demand across greater Austin." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/austin" />
      </Helmet>
      <LocalBusinessSchema
        city="Austin"
        state="Texas"
        description="Local digital marketing for service businesses in Austin, TX. Web design, SEO, Google Ads, and more for the greater Austin area."
        areaServed={["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville", "Lakeway"]}
      />

      {/* Hero with Austin Skyline */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={austinSkyline}
            alt="Austin Texas skyline at sunset with Lady Bird Lake and Congress Avenue Bridge"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Austin" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Austin, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Austin &amp; Central Texas Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Austin's explosive growth has created massive opportunity for local service businesses — but the competition is growing just as fast. We help Austin businesses get found online, build trust, and turn local searches into booked&nbsp;jobs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Austin <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Austin's Growth Is Unprecedented — And It's Creating Real&nbsp;Opportunity
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Austin has grown by over 50% in the last decade. Tesla, Samsung, Apple, and Oracle have all made major investments in the area. New master-planned communities are popping up in Georgetown, Leander, and Dripping Springs. Every new resident needs local services — from HVAC and plumbing to accounting and landscaping. The businesses that invest in being visible now are the ones that will own this market.
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

      {/* Why Austin Is Different */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Austin Moves Fast. Your Marketing Should&nbsp;Too.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Austin isn't like other Texas markets. It's a tech-savvy city where consumers research more, compare more, and expect more from the businesses they hire. A roofer in Round Rock competing for attention needs a different approach than the same trade in a smaller market — because Austin homeowners are reading reviews, comparing websites, and checking credentials before they ever pick up the phone.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The metro stretches from Georgetown in the north to San Marcos in the south, and the communities along that corridor couldn't be more different. Marketing that works in East Austin won't resonate in Lakeway. The family in Pflugerville has different priorities than the tech executive in Westlake Hills.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We build strategies that match the way Austin residents actually find and choose local services — because this market demands precision.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: TrendingUp, text: "180+ people move to Austin every day — creating constant, compounding demand for local services" },
              { icon: Zap, text: "Austin is one of the most tech-savvy metros in the U.S. — consumers here research heavily before choosing a service provider" },
              { icon: Users, text: "The metro spans three counties with distinct demographics — your marketing needs to target your actual customers" },
              { icon: MapPin, text: "From downtown to Georgetown to Dripping Springs — hyper-local targeting is essential in a metro this spread out" },
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
          What We Do for Austin Businesses
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is built around the Austin market — not a template from another&nbsp;city.
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

      {/* Areas */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Areas We Serve Across Greater Austin
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          From downtown to the Hill Country — if you serve customers in the Austin metro, we can help you reach&nbsp;them.
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
            We recently helped a local service company in a competitive Texas market increase their Google Maps visibility by 340% and double their monthly lead volume within six months — using the same local SEO and Google Ads strategies we bring to Austin.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Austin businesses face the unique challenge of competing in one of the fastest-growing markets in the country. Our strategies are built to help you capture that growth — not just keep up with&nbsp;it.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Austin Isn't Slowing Down. Is Your Business Ready for What's&nbsp;Next?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every family that moves to Georgetown needs a plumber, an electrician, a financial advisor. Every tech worker buying a house in Dripping Springs needs a contractor, a roofer, a landscaper. Every small business opening on South Congress needs a website that actually drives customers through the door. The demand is already here — the question is whether they're finding you.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Let's put your business where Austin customers are already&nbsp;looking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the Austin market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
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
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Austin?" subtitle="Austin homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}