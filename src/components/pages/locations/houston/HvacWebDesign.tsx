import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Globe, Check,
  Thermometer, MapPin, Camera, Star, Zap, FileText,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const designFeatures = [
  {
    icon: Thermometer,
    title: "Service-Specific Landing Pages",
    desc: "AC repair, heating, installation, maintenance plans, and emergency service each get dedicated pages with Houston-specific content. One generic 'Services' page can't rank for all of them — and can't convert a homeowner who needs emergency AC repair vs. a scheduled tune-up.",
  },
  {
    icon: MapPin,
    title: "Suburb-Specific Service Area Pages",
    desc: "Katy, Sugar Land, The Woodlands, Pearland, Friendswood, League City — each suburb gets a dedicated page built for local search. These pages rank for suburb-level HVAC searches and give homeowners in each community a locally relevant experience.",
  },
  {
    icon: Zap,
    title: "Mobile-First for Emergency Searches",
    desc: "When an AC fails in August in Houston, homeowners search on their phone and call immediately. Your site needs to load in under 2 seconds, display your phone number prominently above the fold, and enable one-tap calling. We build for this exact user scenario.",
  },
  {
    icon: Star,
    title: "Review & Trust Integration",
    desc: "Google reviews, manufacturer certifications, NATE credentials, and financing options woven into service pages and the homepage — at the point of decision, not buried on a separate page. Houston homeowners vet contractors carefully before letting someone into their home.",
  },
  {
    icon: Camera,
    title: "Equipment & Installation Showcase",
    desc: "Photos of completed installs, equipment your company services, and your service vehicles build immediate credibility. We design layouts that showcase your work quality without requiring a portfolio section nobody clicks on.",
  },
  {
    icon: FileText,
    title: "SEO Foundation Built In",
    desc: "Structured data markup for HVAC businesses, proper page hierarchy, keyword-optimized page titles and meta descriptions, and internal linking structure — all built in from day one, not retrofitted later.",
  },
];

const deliverables = [
  "Mobile-first homepage with above-the-fold phone number and emergency CTA",
  "Service pages: AC repair, heating, installation, maintenance, emergency service",
  "Suburb pages: Katy, Sugar Land, The Woodlands, Pearland, Friendswood, and more",
  "Equipment and installation photo galleries",
  "Credentials, certifications, and financing display",
  "Review integration on service pages and homepage",
  "Blog/resource section for seasonal HVAC content",
  "About page with team and licensing information",
  "Contact and scheduling forms optimized for conversion",
  "Google Analytics and call tracking setup",
];

const marketStats = [
  { stat: "71%", label: "Of Houston homeowners research HVAC companies online before making contact" },
  { stat: "< 2s", label: "Target load time — sites that miss this threshold lose mobile visitors before the page renders" },
  { stat: "3×", label: "Higher conversion rate on HVAC sites with suburb-specific landing pages vs. generic service area descriptions" },
  { stat: "85%", label: "Of HVAC emergency searches happen on mobile — your site must perform perfectly on phone screens" },
];

const faqs = [
  {
    q: "What makes a good HVAC website for the Houston market specifically?",
    a: "Two things matter most: speed and suburb specificity. Houston homeowners searching for HVAC contractors are often doing it under stress — AC has failed, it's August, and they need someone now. Your site needs to load instantly on mobile, display your phone number prominently, and give homeowners in Katy or Sugar Land content that speaks to their specific area. A site that's fast and suburb-specific outperforms a generic but well-designed site in both SEO and conversion.",
  },
  {
    q: "Should we have separate pages for different Houston suburbs?",
    a: "Yes. Suburb-specific service area pages are one of the highest-ROI investments in an HVAC website. A page for 'HVAC Service in Katy TX' that mentions Katy-area neighborhoods, references local housing patterns, and is optimized for Katy-specific search queries will rank in Katy in a way that a generic 'Service Areas' list never will. We build these pages for every suburb you actively serve.",
  },
  {
    q: "How important is mobile performance for HVAC companies in Houston?",
    a: "Critical. Emergency HVAC searches — the highest-value calls in your market — happen on mobile. A homeowner with a failed AC in August searches from their phone and calls immediately. If your site takes more than 2 seconds to load or your phone number isn't immediately visible, you lose that call. We build HVAC sites mobile-first, with load time and click-to-call as primary design constraints.",
  },
  {
    q: "Do you write the content for our HVAC website?",
    a: "Yes. We write all copy — service pages, suburb pages, the about page, and blog content. We interview you to understand your specialties, the equipment brands you work with, your service area priorities, and the voice you want to project. All content is reviewed and approved by you before anything goes live.",
  },
  {
    q: "How long does it take to build an HVAC website?",
    a: "A full HVAC website with service pages, suburb pages, and proper SEO foundations typically takes 4–6 weeks from kickoff to launch. We can prioritize a faster timeline if you're approaching Houston's peak season. The most important deadline is getting your site live and indexed before May — when HVAC search volume begins its seasonal climb.",
  },
];

export default function HoustonHvacWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>HVAC Website Design in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="HVAC website design built for Houston, TX contractors. Mobile-first, suburb-specific pages for Katy, Sugar Land, The Woodlands, and beyond. Convert emergency searches into calls."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/hvac/web-design/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="HVAC website design for contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Friendswood"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "Texas", href: "/locations/texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "HVAC", href: "/locations/texas/houston/hvac" },
                { label: "Web Design" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — HVAC Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              HVAC Website Design Built for Houston's&nbsp;Market
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Houston homeowner's AC fails in August, they search on their phone and call the first contractor they trust. Your website needs to load fast, show up in their suburb, and give them enough confidence to dial. We build HVAC sites that do all three.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free Consultation
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Houston" state="Texas" industry="hvac" service="web-design" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why HVAC Websites Fail in Houston's Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Most HVAC websites are built to exist, not to convert. In Houston — with a 7-million-person metro and emergency searches happening every hour — a website that doesn't convert is a direct cost to your business.
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

      {/* Features */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What We Build Into Every Houston HVAC Site
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Designed for Houston's specific market conditions — year-round heat, suburban geography, and high mobile usage.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designFeatures.map((f) => (
              <div key={f.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Deliverables */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Everything Included
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            Every Houston HVAC site we build includes these deliverables as standard.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white/80 text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Houston HVAC Web Design Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

            <NearbyMarkets markets={[
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston HVAC SEO", to: "/locations/texas/houston/hvac/seo" },
        { name: "Charleston HVAC Web Design", to: "/locations/south-carolina/charleston/hvac/web-design" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Ready to Build an HVAC Website That Wins in Houston?"
        subtitle="Your website is often the first impression you make on a homeowner who needs you. Fill out the form and we'll show you what your current site is costing you — and what it could be doing instead."
      />
    </Layout>
  );
}
