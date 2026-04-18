import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, GraduationCap, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
const huntsvilleStatue = "/assets/huntsville-statue.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Huntsville searches for a contractor or a Sam Houston State student needs a local service, you need to be at the top. We build local SEO strategies tailored to the Huntsville and Walker County area.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Your website is the first impression most Huntsville customers will have of your business. We design fast, professional sites that earn trust and convert — whether visitors are long-time residents or students looking for services near campus.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Walker County with Google Ads, and generate demand with targeted social campaigns reaching homeowners and students across the Huntsville area.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI search is changing how people find local businesses — even in smaller markets. We position your business to show up when someone asks ChatGPT or voice assistants for a recommendation in Huntsville.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "45K+", label: "People in Huntsville — anchored by Sam Houston State University and TDCJ" },
  { stat: "22K+", label: "Sam Houston State students creating year-round demand for local services" },
  { stat: "I-45", label: "Strategic location on the I-45 corridor between Houston and Dallas" },
  { stat: "Top 10", label: "Fastest-growing small cities near Houston attracting new residents and businesses" },
];

const neighborhoods = [
  "Downtown Huntsville", "SHSU Campus Area", "Elkins Lake", "Eastham",
  "New Waverly", "Riverside", "Dodge", "Phelps",
  "Willis", "Conroe", "Madisonville", "Crockett",
];

const nearbyMarkets = [
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Tyler, TX", to: "/locations/texas/tyler" },
  { name: "Austin, TX", to: "/locations/texas/austin" },
];

export default function Huntsville() {
  return (
    <Layout>
      <Helmet>
        <title>Huntsville Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Put your Huntsville business on the map. Web design, SEO, and digital ads tailored for Walker County contractors looking to grow their local customer base." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/huntsville" />
      </Helmet>
      <LocalBusinessSchema
        city="Huntsville"
        state="Texas"
        description="Local digital marketing for service businesses in Huntsville, TX. Web design, SEO, Google Ads, and more for the Walker County market."
        areaServed={["Huntsville", "New Waverly", "Willis", "Conroe", "Madisonville"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={huntsvilleStatue}
            alt="Sam Houston statue in Huntsville, Texas"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Huntsville" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Huntsville, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Huntsville &amp; Walker County Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Huntsville is a university town with small-town values and growing ambition. With Sam Houston State driving year-round activity and the I-45 corridor bringing new residents, we help Huntsville businesses build the online presence they need to&nbsp;grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Huntsville <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Huntsville May Be Small — But the Opportunity Is&nbsp;Real</h2>
          <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Huntsville sits at the intersection of university energy, state infrastructure, and small-town community. Sam Houston State brings 22,000+ students and their families. TDCJ is one of the largest employers in the region. And the I-45 corridor between Houston and Dallas is drawing new residents who want affordability without isolation. For local service businesses, the competition is still manageable — but the window to establish dominance is closing.
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">In a Small Market, Being First Matters&nbsp;Most.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In Huntsville, most local service businesses don't have a real digital marketing strategy. That's not a criticism — it's an opportunity. While your competitors rely on word-of-mouth alone, the business that shows up first on Google, has a professional website, and maintains a strong Google Business Profile captures a disproportionate share of the market.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The dynamics here are different from a big city. SHSU's academic calendar creates predictable demand cycles. The TDCJ workforce provides stable, year-round economic activity. And the community's preference for local businesses means that showing up as a trusted local option — not a faceless company from Houston — gives you a real competitive edge.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">We understand how smaller Texas markets work, and we build strategies that match.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: GraduationCap, text: "Sam Houston State's 22,000+ students create consistent demand for services — from dining and housing to auto repair and healthcare" },
              { icon: TrendingUp, text: "The I-45 corridor is bringing new residents seeking affordability near Houston — new customers arriving steadily" },
              { icon: Users, text: "In a relationship-driven market, your online presence reinforces the trust you've already built in the community" },
              { icon: MapPin, text: "From Elkins Lake to New Waverly — local targeting in a smaller market means you can dominate your service area quickly" },
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Do for Huntsville Businesses</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Every service is built for the Huntsville market — practical, affordable, and designed to&nbsp;perform.</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Areas We Serve Across Walker&nbsp;County</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">From downtown Huntsville to the surrounding communities — if you serve customers in Walker County and beyond, we can help you reach&nbsp;them.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-foreground text-sm font-medium">{n}</span></div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Real Results for Real Local&nbsp;Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">We've helped local service companies across Texas increase their Google Maps visibility by 340% and double their monthly lead volume — using the same strategies we bring to Huntsville. In a smaller market, these results can be transformative.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">When you're the first business to invest in showing up online in a market like Huntsville, the returns compound faster than in a crowded metro.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">In a Market Like Huntsville, the First Mover&nbsp;Wins.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every SHSU student who needs a local service is searching Google. Every homeowner in Elkins Lake dealing with a maintenance issue is looking for a trusted professional online. Every new family moving to Huntsville from Houston is comparing their options before they even unpack. The demand is there — the question is whether they're finding&nbsp;you.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Let's put your business where Huntsville customers are already&nbsp;looking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the Huntsville market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={nearbyMarkets} variant="light" />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Huntsville?" subtitle="Huntsville homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}