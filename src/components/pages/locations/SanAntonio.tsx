import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Landmark, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import sanAntonioRiverwalk from "@/assets/san-antonio-riverwalk.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Alamo Heights searches for a contractor or a family in Helotes needs an HVAC company, you need to be at the top. We build local SEO strategies tailored to the San Antonio metro — your Google Business Profile, citations, and content built to rank where it counts.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "San Antonio customers decide whether to call you based on your website. We build fast, professional sites that earn trust and make it easy for visitors to reach you — from the Pearl District to the far northwest side.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Bexar County with Google Ads, and generate demand with targeted Facebook and Instagram campaigns reaching homeowners from Stone Oak to Southtown.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI-powered search is changing how San Antonio residents find local businesses. We make sure your business is the answer when someone asks ChatGPT or Google AI Overviews for a recommendation in your area.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "2.5M+", label: "People in the San Antonio-New Braunfels metro area" },
  { stat: "7th", label: "Largest city in the United States by population" },
  { stat: "39M+", label: "Annual visitors — driven by the Alamo, River Walk, and military installations" },
  { stat: "Top 5", label: "Fastest-growing large city in America over the past decade" },
];

const neighborhoods = [
  "Downtown San Antonio", "Alamo Heights", "Stone Oak", "The Pearl",
  "Southtown", "Helotes", "Leon Springs", "Boerne",
  "New Braunfels", "Schertz", "Cibolo", "Converse",
  "Universal City", "Live Oak", "Selma", "Garden Ridge",
];

const nearbyMarkets = [
  { name: "Austin, TX", to: "/locations/texas/austin" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
];

export default function SanAntonio() {
  return (
    <Layout>
      <Helmet>
        <title>San Antonio Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="San Antonio contractors deserve marketing that works as hard as they do. Websites that convert, SEO that ranks, and ads that bring in local leads." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/san-antonio" />
      </Helmet>
      <LocalBusinessSchema
        city="San Antonio"
        state="Texas"
        description="Local digital marketing for service businesses in San Antonio, TX. Web design, SEO, Google Ads, and more for the greater San Antonio area."
        areaServed={["San Antonio", "Alamo Heights", "Stone Oak", "New Braunfels", "Boerne", "Schertz"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sanAntonioRiverwalk}
            alt="San Antonio River Walk with colorful umbrellas and historic architecture"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "San Antonio" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">San Antonio, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for San Antonio Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              San Antonio is a city built on heritage, hospitality, and hard work. With nearly 40 million visitors a year and a metro population pushing past 2.5 million, the demand for local services has never been higher. We help San Antonio businesses get found, build trust, and grow&nbsp;steadily.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in San&nbsp;Antonio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            San Antonio's Growth Is Real — And the Smart Businesses Are&nbsp;Acting
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            San Antonio has quietly become one of the fastest-growing cities in America. Military families at Joint Base San Antonio, tourists along the River Walk, and new residents moving in from across the country are all creating sustained demand for local services. The Pearl District's revitalization, the growth of the medical corridor, and the northward expansion toward Boerne and New Braunfels mean opportunity is everywhere — for the businesses positioned to capture it.
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              San Antonio Has Deep Roots. Your Marketing Should&nbsp;Reflect&nbsp;Them.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This isn't Austin's tech scene or Houston's corporate energy. San Antonio is a military city, a tourism city, and a family city. The HVAC company serving Stone Oak homeowners has different customers than the restaurant trying to stand out near the River Walk. The contractor working new builds in Cibolo needs a different strategy than the CPA in Alamo Heights.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              San Antonio's identity is shaped by its military installations, its cultural heritage, and its community pride. Marketing that works here speaks to San Antonio — not to some generic "big city in Texas."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We build strategies that reflect how San Antonio residents actually search, choose, and buy — because understanding this community is the difference between getting calls and getting overlooked.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Landmark, text: "Joint Base San Antonio brings 80,000+ military personnel and families — creating stable, year-round demand for services" },
              { icon: TrendingUp, text: "The I-35 corridor between San Antonio and Austin is one of the fastest-growing regions in the country" },
              { icon: Users, text: "San Antonio's Hispanic-majority population means culturally aware marketing isn't a nice-to-have — it's essential" },
              { icon: MapPin, text: "From Southtown to Boerne, the metro spans a vast area — hyper-local targeting ensures you reach your actual customers" },
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

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Do for San Antonio Businesses</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Every service is built around the San Antonio market — not a template from another&nbsp;city.</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Areas We Serve Across Greater San&nbsp;Antonio</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">From downtown to the Hill Country suburbs — if you serve customers in the San Antonio metro, we can help you reach&nbsp;them.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{n}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Real Results for Real Local&nbsp;Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">We recently helped a local service company in a competitive Texas market increase their Google Maps visibility by 340% and double their monthly lead volume within six months — using the same strategies we bring to San&nbsp;Antonio.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">San Antonio businesses compete with both local operators and larger companies marketing from Austin and Houston. Our strategies help you win in your backyard, where it matters&nbsp;most.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">San Antonio Is Growing. Is Your Business Getting Its&nbsp;Share?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every military family that transfers to JBSA needs an HVAC company, a moving service, and a trusted contractor. Every tourist walking the River Walk needs restaurants, services, and local recommendations. Every new homeowner in Stone Oak or Boerne needs a roofer, a landscaper, and an electrician they can count on. The demand is there — the question is whether they're finding&nbsp;you.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Let's put your business where San Antonio customers are already&nbsp;looking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the San Antonio market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={nearbyMarkets} />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in San Antonio?" subtitle="San Antonio homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}