import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, TrendingUp, Check, HardHat, Building2, Home,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import AnswerSummary from "@/components/AnswerSummary";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Rank for searches like \"general contractor Houston TX,\" \"custom home builder The Woodlands,\" and \"commercial contractor Katy.\" Build organic presence that reaches both the residential and commercial clients driving Houston's construction boom.",
    href: "/locations/texas/houston/construction/seo",
    cta: "Construction SEO in Houston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Houston's construction market is massive and competitive. Targeted paid campaigns that reach developers, homeowners, and investors planning major projects — at the moment they're actively searching for a contractor.",
    href: "/locations/texas/houston/construction/google-ads",
    cta: "Construction Google Ads in Houston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "Construction clients use the map pack to shortlist contractors. A fully optimized GBP with portfolio photos, completed project categories, and a strong review profile puts you in the conversation before you ever get a call.",
    href: "/locations/texas/houston/construction/google-business-profile",
    cta: "Construction GBP in Houston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A portfolio-first construction website that showcases your completed projects, communicates your scale and capabilities, and converts the large-project clients who vet contractors more carefully before making contact.",
    href: "/locations/texas/houston/construction/web-design",
    cta: "Construction Web Design in Houston",
  },
];

const marketStats = [
  { stat: "7M+", label: "People in Greater Houston — one of the largest construction markets in North America" },
  { stat: "$37B+", label: "Annual Houston area construction volume across residential and commercial sectors" },
  { stat: "71%", label: "Of construction clients research contractors on Google before making contact" },
  { stat: "#1", label: "Houston ranked as the top U.S. market for new home construction starts for multiple consecutive years" },
];

const whyHouston = [
  {
    icon: Building2,
    text: "Houston's energy sector drives some of the highest concentrations of high-income households in America. Energy corridor clients, medical center expansion, and downtown redevelopment create premium commercial and high-end residential demand unlike most U.S. markets.",
  },
  {
    icon: Home,
    text: "The Heights, Montrose, Midtown, and EaDo are experiencing rapid gentrification — teardowns and full renovations in walkable urban neighborhoods where lots are worth more than the structures. Renovation contractors who rank for these neighborhoods capture premium urban projects.",
  },
  {
    icon: TrendingUp,
    text: "Katy, Sugar Land, Pearland, and The Woodlands are consistently among the top 10 fastest-growing communities in America. New home construction, commercial development, and community infrastructure projects are running simultaneously at scale.",
  },
  {
    icon: HardHat,
    text: "Post-Harvey reconstruction continues to generate work across neighborhoods that sustained repeated flooding. Elevation projects, foundation work, and gut renovations in flood-affected areas like Meyerland and Friendswood represent ongoing multi-year demand.",
  },
];

const faqs = [
  {
    q: "Is Houston's construction market too competitive for digital marketing to work?",
    a: "The opposite — Houston's size means there are high-value construction searches happening in dozens of communities with varying levels of competition. 'General contractor Houston' is competitive. 'Custom home builder Sugar Land TX' or 'renovation contractor The Woodlands' are much more achievable for a contractor with strong fundamentals. The key is targeting your actual service area, not the metro as a whole.",
  },
  {
    q: "How do we reach commercial construction clients specifically?",
    a: "Commercial clients search differently than homeowners — they use vendor-style language ('commercial general contractor,' 'tenant improvement Houston') and they vet more carefully before contact. We build separate content tracks targeting commercial keywords, optimize for commercial service categories in your GBP, and design your website to speak to both audiences without diluting either message.",
  },
  {
    q: "Can we use our completed projects as a marketing asset?",
    a: "Yes — and this is one of the biggest underutilized opportunities in construction marketing. Project portfolio pages with real photos, neighborhood context, and project descriptions rank for location-specific searches ('custom home Katy TX,' 'Heights renovation Houston') while serving as proof for prospects evaluating your capabilities. We build this infrastructure as part of both the website and SEO strategy.",
  },
  {
    q: "How should we market for post-Harvey rebuild and elevation projects?",
    a: "With dedicated content targeting the specific searches these homeowners use: 'home elevation Houston,' 'flood mitigation contractor Meyerland,' 'Harvey rebuild contractor Friendswood.' These are lower-volume but high-value searches with clients who are motivated to act. Most construction websites in Houston have no content targeting this demand.",
  },
];

const answerSummary = [
  {
    question: "What should Houston contractors show online?",
    answer: "Houston construction clients want proof before they call. A strong site should show completed projects, neighborhoods served, project types, licensing or credentials, realistic capability statements, and clear next steps for homeowners, developers, or commercial clients.",
  },
  {
    question: "Which Houston construction searches are most valuable?",
    answer: "The money is usually in specific searches: custom home builder The Woodlands, general contractor Katy, commercial contractor Houston, tenant improvement contractor Houston, home addition Sugar Land, and renovation contractor Heights. Broad metro keywords matter, but the project-type and neighborhood searches usually convert better.",
  },
  {
    question: "Why does construction SEO need portfolio content?",
    answer: "Construction buyers vet more carefully than emergency service customers. Project pages give Google local context and give prospects confidence. A page about a Heights renovation or a Katy custom build can rank, support internal linking, and act as sales proof at the same time.",
  },
  {
    question: "How do we avoid attracting the wrong project types?",
    answer: "The content has to qualify the lead before the form fill. Your pages should name the project sizes, locations, specialties, and client types you want. That helps Google understand relevance and helps tire-kickers self-select out.",
  },
];

const neighborhoods = [
  "The Woodlands", "Katy", "Sugar Land", "Pearland",
  "Cypress", "Spring", "The Heights", "Montrose",
  "League City", "Friendswood", "Conroe", "Missouri City",
];

export default function HoustonConstructionHub() {
  return (
    <Layout>
      <Helmet>
        <title>Construction Digital Marketing in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for general contractors and construction companies in Houston, TX. Built for Greater Houston contractors who want to win more bids and bigger projects."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/construction/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Digital Marketing — Houston, TX",
            description: "Digital marketing for construction contractors in Houston, TX.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Sugar Land" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Digital marketing for construction contractors in Houston, TX. Local SEO, Google Ads, GBP optimization, and web design."
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
              { label: "Construction" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Houston, TX — Construction Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Contractors in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston is one of the largest and most active construction markets in North America. The homeowners, developers, and commercial clients planning projects here are searching Google for contractors. We make sure your company is the one they find.
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
            Houston's Construction Market Is One of the Largest in&nbsp;America
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            New construction in the suburbs, urban infill and renovation demand, energy sector commercial development, and post-storm rebuild cycles — Houston generates construction demand at a scale that rewards contractors with strong digital presence.
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
            What Makes Construction Marketing in Houston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston's construction market has several distinct demand streams running simultaneously. The suburban growth corridor generates massive new construction volume. The urban core — Heights, Montrose, Midtown — is gentrifying rapidly, creating premium renovation and teardown/rebuild opportunities. The energy sector creates commercial development demand that doesn't exist in most other markets.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Each of these segments requires different search keywords, different landing pages, and different conversion approaches. A contractor trying to capture all three from a single generic homepage is underperforming in all three.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We build construction marketing strategies built around Houston's specific demand dynamics — not a template designed for a smaller, less complex market.
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
        heading="Houston Construction Marketing: Practical Answers"
        intro="Construction leads are higher-ticket and slower to choose. The page needs to do more than rank; it needs to build confidence quickly."
        items={answerSummary}
        variant="light"
      />

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Houston Contractors Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Houston homeowners and developers find and choose a contractor.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Built for Houston's Scale and Opportunity.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Houston's size means there's enormous opportunity — and real complexity in capturing it. We build construction marketing strategies that reach the right clients in the right communities at the right stage of their project.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Month-to-month — no long-term contracts", "Separate strategies for residential and commercial", "You talk to the person doing the work", "Free visibility audit before you spend a dollar"].map((item) => (
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Contractors Across Greater Houston</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community in your service area.
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Houston Contractors</h2>
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
        { name: "Charleston Construction Marketing", to: "/locations/south-carolina/charleston/construction" },
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Win More Construction Projects in Houston?"
        subtitle="Houston's construction boom shows no signs of slowing. Fill out the form and we'll show you where your digital presence stands — and what it'll take to capture the projects your company is built for."
      />
    </Layout>
  );
}
