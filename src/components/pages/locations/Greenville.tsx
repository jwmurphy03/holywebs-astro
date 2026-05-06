import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Mountain, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import CityQuickAnswers from "@/components/CityQuickAnswers";
import CityTradeSeoLinks from "@/components/CityTradeSeoLinks";
const greenvilleSkyline = "/assets/greenville-skyline.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Simpsonville searches for a contractor or a family in Greer needs an HVAC company, you need to be at the top. We build local SEO strategies tailored to the Greenville-Spartanburg metro — your Google Business Profile, citations, and content built to rank in the Upstate.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Greenville customers are discerning — your website needs to match the quality of your work. We build fast, professional sites that earn trust and convert visitors into calls, whether they're downtown on Main Street or out in Travelers Rest.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Greenville, Spartanburg, and Anderson counties with Google Ads, and generate demand with targeted social campaigns reaching homeowners from Simpsonville to Easley.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AI Search Optimization",
    desc: "AI search is changing how Upstate residents find local businesses. We position your business to show up when ChatGPT, Google AI Overviews, and voice assistants answer questions about services in the Greenville area.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "920K+", label: "People in the Greenville-Spartanburg-Anderson metro area" },
  { stat: "#1", label: "Greenville ranked among the best places to live in the U.S. by multiple publications" },
  { stat: "50%", label: "Population growth in the Greenville metro over the past two decades" },
  { stat: "250+", label: "International companies with operations in the Upstate — including BMW and Michelin" },
];

const neighborhoods = [
  "Downtown Greenville", "Simpsonville", "Mauldin", "Greer",
  "Travelers Rest", "Taylors", "Five Forks", "Easley",
  "Spartanburg", "Anderson", "Powdersville", "Fountain Inn",
  "Woodruff", "Clemson", "Seneca", "Pickens",
];

const nearbyMarkets = [
  { name: "Charleston, SC", to: "/locations/south-carolina/charleston" },
  { name: "Columbia, SC", to: "/locations/south-carolina/columbia" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
];

export default function Greenville() {
  return (
    <Layout>
      <Helmet>
        <title>Greenville Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Upstate SC service businesses trust Holy Webs for results-driven marketing. Web design, local SEO, and paid search that help Greenville contractors get found and hired." />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/greenville/" />
      </Helmet>
      <LocalBusinessSchema
        city="Greenville"
        state="South Carolina"
        description="Local digital marketing for service businesses in Greenville, SC. Web design, SEO, Google Ads, and more for the Upstate."
        areaServed={["Greenville", "Simpsonville", "Mauldin", "Greer", "Spartanburg", "Anderson"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={greenvilleSkyline}
            alt="Aerial view of downtown Greenville, South Carolina with Blue Ridge Mountains"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "South Carolina", href: "/locations/south-carolina" }, { label: "Greenville" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Greenville, South Carolina</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Greenville &amp; Upstate Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Greenville's transformation from a quiet textile town to one of the most desirable cities in the Southeast has been remarkable. We help Upstate service businesses capitalize on this growth with digital marketing that actually drives&nbsp;results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Greenville <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CityQuickAnswers city="Greenville" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">The Upstate Is Thriving — And Competition Is&nbsp;Heating&nbsp;Up</h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Greenville has become one of the hottest markets in the Southeast. BMW, Michelin, and 250+ international companies have operations here. Downtown's revival along Main Street and Falls Park has become a national model for urban renewal. New residents are arriving from the Northeast, the Midwest, and across the South — bringing demand for every kind of local service. The businesses investing in their digital presence now are the ones positioning themselves to lead this market.
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

      <CityTradeSeoLinks city="Greenville" basePath="/locations/south-carolina/greenville" />

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">The Upstate Isn't Charleston. Your Marketing Shouldn't Be&nbsp;Either.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Greenville has its own identity — rooted in manufacturing heritage, outdoor culture, and a community that takes pride in supporting local businesses. The plumber in Simpsonville is competing in a different landscape than the same trade in Charleston. The CPA in Greer has different customers than the one on King Street. The Upstate's blend of blue-collar industry, growing tech presence, and family-oriented suburbs creates a market that demands a specific approach.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From the Swamp Rabbit Trail to Falls Park to the sprawling suburbs of Five Forks and Powdersville, Greenville's communities are distinct. Marketing that works here speaks to the Upstate — not to some generic "South Carolina" audience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">We build strategies that reflect how Upstate residents actually search, choose, and buy.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Mountain, text: "The Upstate's outdoor culture and quality of life are drawing new residents from across the country — every one of them needs local services" },
              { icon: TrendingUp, text: "250+ international companies and a growing tech sector create diverse demand for both trade and professional services" },
              { icon: Users, text: "The GSA metro spans three counties with distinct communities — from urban Greenville to suburban Simpsonville to rural Pickens" },
              { icon: MapPin, text: "From downtown to Travelers Rest to Spartanburg — hyper-local targeting ensures you reach your actual customers" },
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Do for Greenville Businesses</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Every service is built around the Upstate market — not a template from another&nbsp;city.</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Areas We Serve Across the&nbsp;Upstate</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">From downtown Greenville to the surrounding counties — if you serve customers in the Upstate, we can help you reach&nbsp;them.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-foreground text-sm font-medium">{n}</span></div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Real Results for Real Local&nbsp;Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">We've helped local service companies increase their Google Maps visibility by 340% and double their monthly lead volume — using the same strategies we bring to Greenville. In a market growing this fast, visibility compounds.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Upstate businesses compete with both local operators and larger companies marketing from Charlotte and Atlanta. Our strategies help you win in your backyard.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">The Upstate Is Growing. Is Your Business Capturing Its&nbsp;Share?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every family that moves to Simpsonville needs a plumber, an electrician, a landscaper. Every BMW employee buying a house in Greer needs a contractor, a roofer, a CPA. Every homeowner in Five Forks upgrading their home is searching Google right now. The demand is there — the question is whether they're finding you or your competitor who invested in showing up&nbsp;first.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Let's put your business where Upstate customers are already&nbsp;looking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the Upstate market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={nearbyMarkets} />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Greenville?" subtitle="Greenville homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}
