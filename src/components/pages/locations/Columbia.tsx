import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Landmark, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import columbiaSkyline from "@/assets/columbia-skyline.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Irmo searches for an electrician or a family in Lexington needs a plumber, you need to be at the top. We build local SEO strategies tailored to the Columbia metro — optimizing your Google Business Profile and creating content that ranks for Midlands searches.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Columbia customers judge your business by your website before they call. We build fast, professional sites that reflect your work and make it easy for visitors to reach you — from the Vista to Northeast Columbia to the growing suburbs of Lexington.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Richland and Lexington counties with Google Ads, and generate demand with targeted social campaigns reaching homeowners from Forest Acres to Chapin.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI search is changing how Midlands residents find local businesses. We position your business to show up when ChatGPT, Google AI Overviews, and voice assistants answer questions about services in the Columbia area.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "850K+", label: "People in the Columbia metro — the largest metro area in South Carolina" },
  { stat: "50K+", label: "University of South Carolina students and staff driving year-round economic activity" },
  { stat: "Capital", label: "As the state capital, Columbia is the center of government, military, and healthcare" },
  { stat: "Growing", label: "Lexington County is one of the fastest-growing counties in South Carolina" },
];

const neighborhoods = [
  "Downtown Columbia", "The Vista", "Five Points", "Forest Acres",
  "Lexington", "Irmo", "Chapin", "West Columbia",
  "Cayce", "Northeast Columbia", "Blythewood", "Elgin",
  "Lugoff", "Camden", "Harbison", "Dutch Fork",
];

const nearbyMarkets = [
  { name: "Charleston, SC", to: "/locations/south-carolina/charleston" },
  { name: "Greenville, SC", to: "/locations/south-carolina/greenville" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
];

export default function Columbia() {
  return (
    <Layout>
      <Helmet>
        <title>Columbia Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Columbia's Midlands market has opportunity — if you show up online. Websites, Google profile optimization, and ads that help SC service businesses win local customers." />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/columbia" />
      </Helmet>
      <LocalBusinessSchema
        city="Columbia"
        state="South Carolina"
        description="Local digital marketing for service businesses in Columbia, SC. Web design, SEO, Google Ads, and more for the Midlands."
        areaServed={["Columbia", "Lexington", "Irmo", "Chapin", "West Columbia", "Blythewood"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={columbiaSkyline}
            alt="Aerial view of downtown Columbia, South Carolina skyline"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "South Carolina", href: "/locations" }, { label: "Columbia" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Columbia, South Carolina</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Columbia &amp; Midlands Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Columbia is the heart of South Carolina — the state capital, home to the University of South Carolina, and the economic engine of the Midlands. We help Columbia service businesses build the online presence they need to compete and&nbsp;grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Columbia <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Columbia Is the Midlands' Economic Center — And It's&nbsp;Growing</h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            As the state capital, Columbia anchors an economy driven by government, military (Fort Jackson), healthcare (Prisma Health), and the University of South Carolina. Lexington County has become one of the fastest-growing counties in the state, with new subdivisions and commercial development transforming the western suburbs. For local service businesses, the opportunity is clear — and the businesses investing in digital visibility now are the ones building lasting market position.
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Columbia Isn't Charleston or Greenville. It's Its Own&nbsp;Market.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Columbia often gets overlooked between Charleston's tourism appeal and Greenville's trendy revival — but the Midlands is where 850,000+ people live, work, and need local services every day. The contractor in Lexington competing for homeowners has different customers than the same trade in Mount Pleasant. The CPA near Fort Jackson serving military families has unique needs that a generic strategy will miss entirely.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              USC's academic calendar creates predictable demand cycles. Fort Jackson's troop rotations bring new families who need every kind of service. The growth of Lexington, Chapin, and Irmo means new neighborhoods full of homeowners who don't have a go-to contractor yet. Your marketing needs to reflect these realities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">We build strategies that work in the Midlands because we understand what drives this market.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Landmark, text: "Fort Jackson processes 50,000+ soldiers annually — military families constantly arriving and needing local services" },
              { icon: TrendingUp, text: "Lexington County is one of SC's fastest-growing — new neighborhoods mean new customers without established loyalties" },
              { icon: Users, text: "USC's 50,000+ students and staff create consistent, year-round demand for services across the metro" },
              { icon: MapPin, text: "From the Vista to Chapin to Blythewood — the Midlands spans distinct communities that require targeted approaches" },
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Do for Columbia Businesses</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Every service is built around the Midlands market — not a template from another&nbsp;city.</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Areas We Serve Across the&nbsp;Midlands</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">From downtown Columbia to the growing suburbs — if you serve customers in the Midlands, we can help you reach&nbsp;them.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-foreground text-sm font-medium">{n}</span></div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Real Results for Real Local&nbsp;Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">We've helped local service companies increase their Google Maps visibility by 340% and double their monthly lead volume — using the same strategies we bring to Columbia.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Columbia businesses compete with operators across the Midlands and beyond. Our strategies help you establish dominance in your specific service area.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">The Midlands Is Growing. Is Your Business Positioned to&nbsp;Lead?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every military family arriving at Fort Jackson needs local services. Every new homeowner in Lexington needs a contractor, a roofer, an electrician. Every USC student needs services near campus. Every state government employee in Forest Acres needs a trusted local professional. The demand is there — the question is whether they're finding&nbsp;you.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Let's put your business where Midlands customers are already&nbsp;looking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the Columbia market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={nearbyMarkets} />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Columbia?" subtitle="Columbia homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}