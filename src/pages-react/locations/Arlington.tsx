import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Trophy, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
const arlingtonBackyard = "/assets/arlington-backyard.png";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "When a homeowner in Mansfield searches for a plumber or a family in Pantego needs an HVAC company, you need to be at the top. We build local SEO strategies tailored to Arlington and the Mid-Cities — optimizing your Google Business Profile and creating content that ranks locally.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Arlington residents judge your business by your website before they call. We build fast, professional sites that reflect your work and convert visitors into leads — whether they're near the Entertainment District or in the neighborhoods around UTA.",
    link: "/services/web-design",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Arlington and the Mid-Cities with Google Ads, and generate new demand with targeted social campaigns reaching homeowners from Mansfield to Grand Prairie.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI search is changing how Arlington residents find local businesses. We position your business to show up when ChatGPT, Google AI Overviews, and voice assistants answer questions about services in your area.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "394K+", label: "People in Arlington — the largest city in the U.S. without public transit" },
  { stat: "60K+", label: "UT Arlington students and staff creating year-round demand for local services" },
  { stat: "15M+", label: "Annual visitors to AT&T Stadium, Globe Life Field, and the Entertainment District" },
  { stat: "Central", label: "Positioned between Dallas and Fort Worth — serving the heart of DFW" },
];

const neighborhoods = [
  "Downtown Arlington", "Entertainment District", "Pantego", "Dalworthington Gardens",
  "Mansfield", "Grand Prairie", "Kennedale", "Midlothian",
  "South Arlington", "East Arlington", "North Arlington", "West Arlington",
];

const nearbyMarkets = [
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Austin, TX", to: "/locations/texas/austin" },
];

export default function Arlington() {
  return (
    <Layout>
      <Helmet>
        <title>Arlington Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Grow your Arlington service business with marketing built for the Mid-Cities. Web design, local SEO, and Google Ads that drive real calls and booked jobs." />
        <link rel="canonical" href="https://holywebs.com/locations/texas/arlington/" />
      </Helmet>
      <LocalBusinessSchema
        city="Arlington"
        state="Texas"
        description="Local digital marketing for service businesses in Arlington, TX. Web design, SEO, Google Ads, and more for Arlington and the Mid-Cities."
        areaServed={["Arlington", "Mansfield", "Grand Prairie", "Pantego", "Kennedale"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={arlingtonBackyard}
            alt="Arlington Backyard entertainment district near Globe Life Field"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "Texas", href: "/locations" }, { label: "Arlington" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Arlington, Texas</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Arlington &amp; Mid-Cities Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Arlington sits at the center of DFW — home to world-class stadiums, a major university, and nearly 400,000 residents who need local services every day. We help Arlington businesses get found online and turn local searches into&nbsp;revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-lg">Get a Free Consultation</Link>
              <Link to="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Get a free visibility audit in&nbsp;Arlington <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Arlington Is DFW's Center of Gravity — And It's Full of&nbsp;Opportunity</h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Arlington draws 15 million visitors a year to its entertainment district, hosts 60,000+ UT Arlington students, and serves as home to nearly 400,000 residents. Unlike Dallas or Fort Worth, Arlington's identity is distinctly its own — a blend of suburban neighborhoods, a growing downtown, and an entertainment corridor that rivals any in the state. For local service businesses, the opportunity is massive.
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Arlington Isn't Dallas. It Isn't Fort&nbsp;Worth. It's Its Own&nbsp;Market.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Arlington businesses often get lumped into "DFW marketing" — but that's a mistake. The homeowner in South Arlington looking for a roofer isn't searching for "Dallas roofer." They're searching for someone local. The family in Mansfield choosing between HVAC companies wants to know you understand their neighborhood, not that you serve "the entire metroplex."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Game days at AT&T Stadium and Globe Life Field create massive spikes in local search activity. UT Arlington's academic calendar drives seasonal demand. The neighborhoods from Pantego to Kennedale each have their own character. Your marketing needs to reflect these realities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">We build strategies that treat Arlington as what it is — a major city with its own identity, not just a suburb between two bigger ones.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Trophy, text: "AT&T Stadium and Globe Life Field draw 15M+ visitors a year — creating massive seasonal demand for local services" },
              { icon: TrendingUp, text: "UT Arlington is the largest university in DFW — 60,000+ students and staff driving year-round economic activity" },
              { icon: Users, text: "Arlington's diverse population means marketing needs to resonate across different communities and demographics" },
              { icon: MapPin, text: "From Mansfield to Grand Prairie to Pantego — hyper-local targeting ensures you reach your actual service area" },
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Do for Arlington Businesses</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Every service is built around the Arlington market — not a generic DFW&nbsp;template.</p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><s.icon className="w-5 h-5 text-primary" /></div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link to={s.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">Learn more <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Areas We Serve Across Arlington &amp; the&nbsp;Mid-Cities</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">From the Entertainment District to the surrounding communities — if you serve customers in Arlington, we can help you reach&nbsp;them.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-foreground text-sm font-medium">{n}</span></div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Real Results for Real Local&nbsp;Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">We recently helped a local service company in a competitive Texas market increase their Google Maps visibility by 340% and double their monthly lead volume within six months — using the same strategies we bring to Arlington.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Arlington businesses compete with operators across all of DFW. Our strategies are built to help you win in your specific service area, where it matters&nbsp;most.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Arlington Has the Demand. Does Your Business Have the&nbsp;Visibility?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every Cowboys game brings 80,000+ people searching for restaurants, services, and things to do. Every UT Arlington semester brings thousands of students needing housing services, food, and local professionals. Every homeowner in Mansfield dealing with a broken AC unit is searching Google right now. The demand is already there — the question is whether they're finding&nbsp;you.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Let's put your business where Arlington customers are already&nbsp;looking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {["No long-term contracts — month-to-month", "Built specifically for the Arlington market", "We serve trades and professional services", "Free visibility audit to start"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={nearbyMarkets} />
      <FinalCTASection headline="Ready to Be the Go-To Service Company in Arlington?" subtitle="Arlington homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}