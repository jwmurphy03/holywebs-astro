import { Helmet } from "react-helmet-async";
import { ArrowRight, BarChart3, CheckCircle2, Globe, MapPin, Search, Star } from "lucide-react";

import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FAQSchema from "@/components/FAQSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import RelatedLinks from "@/components/RelatedLinks";
import FinalCTASection from "@/components/home/FinalCTASection";

type Industry = "hvac" | "plumbing" | "roofing";
type StateSlug = "texas" | "south-carolina";

interface TradeCityHubPageProps {
  city: string;
  state: string;
  stateSlug: StateSlug;
  citySlug: string;
  industry: Industry;
  nearby: string[];
}

const stateLabels: Record<StateSlug, string> = {
  texas: "Texas",
  "south-carolina": "South Carolina",
};

const industryConfig = {
  hvac: {
    label: "HVAC",
    plural: "HVAC companies",
    singular: "HVAC company",
    customerProblem: "AC repair, HVAC replacement, seasonal maintenance, and emergency service calls",
    revenueMoment: "when the system stops working and the homeowner needs help now",
    serviceFocus: ["AC repair", "HVAC replacement", "Maintenance plans", "Emergency service", "Financing-ready replacement pages"],
  },
  plumbing: {
    label: "Plumbing",
    plural: "plumbing companies",
    singular: "plumbing company",
    customerProblem: "emergency plumbing, drain cleaning, water heater work, leak repair, and sewer line jobs",
    revenueMoment: "when a leak, clog, water heater failure, or sewer issue turns into a same-day decision",
    serviceFocus: ["Emergency plumbing", "Drain cleaning", "Water heaters", "Leak repair", "Sewer and repipe pages"],
  },
  roofing: {
    label: "Roofing",
    plural: "roofing companies",
    singular: "roofing company",
    customerProblem: "roof replacement, storm damage, inspections, leak repair, and insurance-related estimates",
    revenueMoment: "when a homeowner needs to trust the company before booking an inspection or estimate",
    serviceFocus: ["Roof replacement", "Storm damage", "Roof inspections", "Leak repair", "Project proof and photo pages"],
  },
};

const cityConfig: Record<string, {
  surrounding: string;
  marketNote: string;
  strategyNote: string;
}> = {
  dallas: {
    surrounding: "Plano, Frisco, Irving, Garland, McKinney, and Richardson",
    marketNote: "Dallas is really a cluster of local search markets. Visibility in the city does not automatically create visibility across the DFW suburbs.",
    strategyNote: "The strategy needs strong Dallas positioning, suburb-level relevance, clean GBP signals, and service pages that match how homeowners search across the metro.",
  },
  austin: {
    surrounding: "Round Rock, Georgetown, Cedar Park, Pflugerville, and San Marcos",
    marketNote: "Austin customers compare quickly and expect a business to look credible before they call. The surrounding cities also create separate pockets of search demand.",
    strategyNote: "The strategy needs a clean website, strong local proof, GBP consistency, and content that speaks to the Austin metro without sounding like a copied city page.",
  },
  "san-antonio": {
    surrounding: "New Braunfels, Boerne, Schertz, Cibolo, and Converse",
    marketNote: "San Antonio has valuable searches in the city and in the communities around it. Many service businesses leave that surrounding demand underbuilt.",
    strategyNote: "The strategy needs practical service pages, location-specific trust signals, GBP work, and nearby-market content that helps customers feel like you serve their area.",
  },
};

export default function TradeCityHubPage({ city, state, stateSlug, citySlug, industry, nearby }: TradeCityHubPageProps) {
  const config = industryConfig[industry];
  const local = cityConfig[citySlug];
  const statePath = `/locations/${stateSlug}`;
  const cityPath = `${statePath}/${citySlug}`;
  const hubPath = `${cityPath}/${industry}`;
  const seoPath = `${hubPath}/seo`;
  const canonical = `https://holywebs.com${hubPath}/`;
  const title = `${config.label} Digital Marketing in ${city}, ${state} | Holy Webs`;
  const description = `Digital marketing for ${config.plural} in ${city}, ${state}. Website, local SEO, Google Business Profile, tracking, and monthly growth plans for local service businesses.`;

  const faqs = [
    {
      q: `What should ${city} ${config.plural} focus on first?`,
      a: `Start with the pieces closest to booked work: local SEO, Google Business Profile, service pages, reviews, tracking, and a website that makes it easy to call. Paid ads can help later, but the foundation should be able to convert demand first.`,
    },
    {
      q: `Do you build pages for nearby markets like ${nearby.slice(0, 2).join(" and ")}?`,
      a: `Yes, when those markets are part of the growth strategy. We would rather build fewer useful local pages than publish a pile of thin city-name pages that do not help visitors or rankings.`,
    },
    {
      q: `Can we hire Holy Webs only for ads?`,
      a: "No. Paid ads are only part of our Market Leader plan because ads work best when the website, SEO, GBP, tracking, and conversion paths are already being improved together.",
    },
    {
      q: `Which plan fits a ${city} ${config.singular}?`,
      a: "Local Growth fits a company focused mainly on one market. Local Authority fits a company that wants more content, more citations, and a stronger push into nearby markets. Market Leader adds paid ads management on top of that foundation.",
    },
  ];

  const serviceCards = [
    {
      icon: Search,
      title: `${config.label} Local SEO`,
      text: `Build visibility for high-intent searches around ${config.customerProblem}, with pages and signals that support ${city} and nearby markets.`,
      href: seoPath,
      cta: `View ${city} ${config.label} SEO`,
    },
    {
      icon: Star,
      title: "Google Business Profile",
      text: "Improve categories, services, photos, posts, reviews, service areas, and local relevance so the map pack supports real call volume.",
      href: "/services/google-business-profile",
      cta: "See GBP service",
    },
    {
      icon: Globe,
      title: "Website and Conversion",
      text: "Give visitors a fast, clear place to understand your services, trust your company, and contact you without digging.",
      href: "/services/web-design",
      cta: "See web design",
    },
    {
      icon: BarChart3,
      title: "Plans and Tracking",
      text: "Package the work into monthly execution with call tracking, form tracking, reporting, and ongoing improvements after launch.",
      href: "/pricing",
      cta: "View pricing",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${canonical}#service`,
            name: `${config.label} Digital Marketing in ${city}, ${state}`,
            description,
            url: canonical,
            serviceType: "Digital Marketing",
            category: `${config.label} Marketing`,
            provider: {
              "@type": "Organization",
              name: "Holy Webs",
              url: "https://holywebs.com",
            },
            areaServed: [city, ...nearby.slice(0, 6)].map((name) => ({
              "@type": "City",
              name,
              addressRegion: state,
              addressCountry: "US",
            })),
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema city={city} state={state} description={description} areaServed={[city, ...nearby.slice(0, 5)]} />

      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: stateLabels[stateSlug], href: statePath },
                { label: city, href: cityPath },
                { label: config.label },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              {city}, {state} {config.label} Marketing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for {config.label} Companies in {city}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              We help {city} {config.plural} turn search visibility into booked work with local SEO, Google Business Profile optimization, website improvements, tracking, and monthly execution.
            </p>
            <p className="text-white/60 text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
              {local.marketNote}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/pricing" className="btn-primary text-lg">
                View Monthly Plans
              </a>
              <a href={seoPath} className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                See the SEO plan for this market
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 items-start">
            <div>
              <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Market Strategy</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
                {city} {config.label} Marketing Needs More Than a Pretty Website
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  The revenue moment usually happens {config.revenueMoment}. If your business is not easy to find, easy to trust, and easy to call at that moment, another company gets the opportunity.
                </p>
                <p>{local.strategyNote}</p>
                <p>
                  Holy Webs packages the website, local SEO, Google Business Profile, tracking, and monthly improvement into one system so the work supports the same goal: more qualified opportunities from the markets you actually want.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Markets to Build Around</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">
                For {city}, that often means building useful visibility around {local.surrounding}.
              </p>
              <div className="flex flex-wrap gap-2">
                {[city, ...nearby].slice(0, 7).map((area) => (
                  <span key={area} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
            The Core Growth System
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            These pieces should not fight each other. They should point customers and search engines toward the same clear local offer.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCards.map((item) => (
              <a key={item.title} href={item.href} className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.text}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm text-center">Service Focus</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-8">
            What the Website and SEO Need to Support
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {config.serviceFocus.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-background p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10">
            Common Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <RelatedLinks
        heading="Useful Next Pages"
        subheading={`These pages connect the broader ${city} ${config.label} marketing strategy.`}
        links={[
          { title: `${city} ${config.label} SEO`, description: "See the local SEO page built for this city and trade.", href: seoPath },
          { title: "Pricing", description: "Compare the monthly plans for local growth, authority, and market leadership.", href: "/pricing" },
          { title: "Google Business Profile", description: "See how GBP work supports local calls and map visibility.", href: "/services/google-business-profile" },
          { title: "Website Design", description: "A stronger website makes local search traffic easier to convert.", href: "/services/web-design" },
          { title: `${city} Digital Marketing`, description: `See the broader local marketing page for ${city}.`, href: cityPath },
          { title: config.label, description: `Explore how we market ${config.plural} across web, SEO, GBP, and ads.`, href: `/industries/${industry === "plumbing" ? "plumbing" : industry}` },
        ]}
      />

      <FinalCTASection
        headline={`Want a Clearer Growth Plan for Your ${city} ${config.label} Company?`}
        subtitle="Tell us where you work, which jobs matter most, and what your current marketing looks like. We will show you the most practical next move."
      />
    </Layout>
  );
}
