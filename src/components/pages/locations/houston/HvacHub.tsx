import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, TrendingUp, Check, Flame, Droplets, Wind,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import AnswerSummary from "@/components/AnswerSummary";

const houstonSkyline = "/assets/houston-skyline.jpg";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Rank in the top 3 of Google Maps for searches like \"AC repair Houston,\" \"HVAC replacement Katy TX,\" and \"emergency heating service The Woodlands.\" Organic rankings that generate calls year after year.",
    href: "/locations/texas/houston/hvac/seo",
    cta: "HVAC SEO in Houston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Houston summers are brutal. When an AC fails in July, homeowners are calling the first company that appears. Call-only campaigns and emergency-intent ads that capture those high-urgency searches the moment they happen.",
    href: "/locations/texas/houston/hvac/google-ads",
    cta: "HVAC Google Ads in Houston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack is where Houston HVAC jobs originate. We optimize every GBP signal — categories, services, reviews, photos, seasonal posts — to put you in the top 3 and keep you there through peak season and off-season alike.",
    href: "/locations/texas/houston/hvac/google-business-profile",
    cta: "HVAC GBP in Houston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, mobile-first HVAC website with emergency contact front and center, service pages for every offering, and financing options that convert summer emergency calls into signed system replacements.",
    href: "/locations/texas/houston/hvac/web-design",
    cta: "HVAC Web Design in Houston",
  },
];

const marketStats = [
  { stat: "7M+", label: "People in the Houston metro — the 4th largest city in America and one of the fastest-growing" },
  { stat: "4+ mo.", label: "Of 90°F+ temperatures annually — Houston HVAC demand runs longer than nearly any U.S. market" },
  { stat: "80%", label: "Of HVAC calls in Houston originate from Google search, primarily maps and organic" },
  { stat: "2×", label: "Higher HVAC system failure rate in extreme Gulf Coast heat vs. moderate climate markets" },
];

const whyHouston = [
  {
    icon: Flame,
    text: "Houston summers are among the most extreme in the country — sustained heat and humidity that run from May through September. AC failure isn't a minor inconvenience; it's a health emergency. That urgency drives immediate, high-intent searches.",
  },
  {
    icon: Droplets,
    text: "Gulf Coast humidity means HVAC systems work harder than anywhere else in the country. Systems that might last 15 years in a dry climate fail in 10–12 years in Houston — creating a consistent, high-volume replacement cycle year after year.",
  },
  {
    icon: Wind,
    text: "Hurricane Harvey and subsequent storm seasons created massive HVAC replacement demand across Greater Houston. Water intrusion, power surge damage, and prolonged outages accelerated system failures across hundreds of thousands of homes.",
  },
  {
    icon: TrendingUp,
    text: "Katy, Sugar Land, The Woodlands, Pearland, and Cypress are among the fastest-growing suburbs in America. New construction installs and warranty-period service calls represent a massive opportunity for contractors with strong online presence.",
  },
];

const faqs = [
  {
    q: "What digital marketing should a Houston HVAC company invest in first?",
    a: "Google Business Profile optimization, because that's where most AC repair calls originate. Houston summers are so extreme that most homeowners call the first company they see in the map pack — there's no time to comparison shop when it's 98°F inside. Once your GBP is optimized, Google Ads fills in during peak demand and organic SEO builds long-term rankings.",
  },
  {
    q: "How competitive is the HVAC market in Houston?",
    a: "Highly competitive — national franchises like Trane, Lennox dealers, and large regional chains spend heavily on ads. But the map pack still rewards local relevance, proximity, and reviews over raw ad spend. Independent contractors consistently outrank national brands for hyper-local searches when their GBP and SEO fundamentals are strong.",
  },
  {
    q: "How quickly can we start getting more HVAC calls from Google in Houston?",
    a: "GBP optimization typically shows map pack movement in 4–8 weeks. Google Ads can generate calls within a week of launch. Organic SEO takes 3–6 months to build real traction — but in a market with 7M people and year-round demand, the long-term ROI is significant. We'll tell you what to prioritize based on where you stand right now.",
  },
  {
    q: "Is Houston too competitive for a smaller HVAC company to rank well?",
    a: "No — but the strategy matters. Competing for 'HVAC Houston' city-wide is hard. Competing for 'AC repair Katy TX,' 'HVAC replacement Sugar Land,' or 'emergency heating Cypress TX' is far more achievable and often just as profitable. Houston's size is an advantage — there are thousands of high-value local searches across dozens of communities where the competition is much thinner.",
  },
];

const answerSummary = [
  {
    question: "What is the best digital marketing strategy for a Houston HVAC company?",
    answer: "Houston HVAC companies should prioritize Google Business Profile optimization first, then pair local SEO with emergency-intent Google Ads. The website needs fast mobile performance, AC repair and replacement pages, financing calls to action, and service-area pages for the communities the company actually serves.",
  },
  {
    question: "Which HVAC searches are most valuable in Houston?",
    answer: "The highest-value searches include AC repair Houston, emergency AC repair near me, HVAC replacement Houston, air conditioning repair Katy, AC installation Sugar Land, and HVAC company The Woodlands. These searches usually come from homeowners ready to call.",
  },
  {
    question: "Why is Houston HVAC search so competitive?",
    answer: "Houston has a massive population, months of extreme heat, high humidity, and a shorter equipment replacement cycle than milder markets. Demand is high, but so is competition from national brands, franchises, and aggressive local contractors.",
  },
  {
    question: "What should an HVAC contractor fix first online?",
    answer: "Fix the Google Business Profile first: categories, services, review velocity, photos, and service areas. Then tighten website conversion, launch peak-season Google Ads, and build SEO pages for AC repair, replacement, maintenance, financing, and major suburbs.",
  },
];

const neighborhoods = [
  "The Woodlands", "Katy", "Sugar Land", "Pearland",
  "Cypress", "Spring", "Humble", "League City",
  "Friendswood", "Missouri City", "Conroe", "Baytown",
];

export default function HoustonHvacHub() {
  return (
    <Layout>
      <Helmet>
        <title>HVAC Digital Marketing in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for HVAC contractors in Houston, TX. Built for Greater Houston HVAC companies who want to dominate local search and book more jobs."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/hvac" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "HVAC Digital Marketing — Houston, TX",
            description: "Digital marketing for HVAC contractors in Houston, TX.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Sugar Land" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Digital marketing for HVAC contractors in Houston, TX. Local SEO, Google Ads, GBP optimization, and web design."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress"]}
      />

      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[
              { label: "Locations", href: "/locations" },
              { label: "Texas" },
              { label: "Houston", href: "/locations/texas/houston" },
              { label: "HVAC" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Houston, TX — HVAC Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for HVAC Contractors in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Houston AC fails in July, homeowners don't browse — they call the first company Google shows them. We make sure your HVAC business is the one they find, from The Woodlands to Sugar Land to Pearland.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston Is the Most Demanding HVAC Market in&nbsp;America
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Seven million people, extreme Gulf Coast heat that runs half the year, and a humid climate that burns through HVAC systems faster than anywhere else. The contractors who dominate search in Houston own one of the highest-value service markets in the country.
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            What Makes HVAC Marketing in Houston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston's climate creates HVAC demand patterns unlike any other U.S. market. The cooling season runs from May through September — five months where AC failure is a genuine emergency and search intent spikes to its peak. But even outside those months, Houston's mild winters and high humidity keep maintenance and repair calls coming year-round.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The geographic scale of the market adds another dimension. Houston's metro spans hundreds of square miles across dozens of independent communities — each with its own search patterns and competitive landscape. An HVAC contractor strong in Katy may have zero visibility in Pearland or Conroe.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We build HVAC marketing strategies that account for Houston's unique climate, scale, and competitive dynamics — not a template designed for a smaller, more moderate market.
              </p>
            </div>
            <div className="space-y-4">
              {whyHouston.map((item) => (
                <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <AnswerSummary
        heading="Houston HVAC Marketing: Direct Answers"
        intro="Compact answers help buyers make faster decisions and help AI search tools understand exactly why this page exists."
        items={answerSummary}
        variant="light"
      />

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Houston HVAC Contractors Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Greater Houston homeowners find and choose an HVAC company.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={s.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                {s.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Houston-Scale Strategy. Local Market Expertise.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Houston's size means the opportunity is enormous — and so is the complexity. We build HVAC marketing strategies that scale across the full metro while targeting the specific communities where your business is strongest.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Month-to-month — no long-term contracts", "HVAC-specific strategy, not a generic contractor template", "You talk to the person doing the work", "Free visibility audit before you spend a dollar"].map((item) => (
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

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving HVAC Contractors Across Greater Houston</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community you serve across the Houston metro.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Houston HVAC Contractors</h2>
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
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Houston Plumbing Marketing", to: "/locations/texas/houston/plumbing" },
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Ready to Be the Go-To HVAC Company in Houston?"
        subtitle="Greater Houston homeowners are searching for HVAC contractors right now. Fill out the form and we'll show you where you rank — and exactly what it'll take to get to the top."
      />
    </Layout>
  );
}
