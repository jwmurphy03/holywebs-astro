import { ArrowRight, MapPin } from "lucide-react";

import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import RelatedLinks from "@/components/RelatedLinks";

type StateKey = "texas" | "south-carolina";

interface StateConfig {
  slug: string;
  name: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  markets: Array<{ name: string; href: string; description: string }>;
  related: Array<{ title: string; description: string; href: string }>;
}

const configs: Record<StateKey, StateConfig> = {
  texas: {
    slug: "/locations/texas",
    name: "Texas",
    eyebrow: "Texas Markets",
    metaTitle: "Texas Digital Marketing for Local Service Businesses | Holy Webs",
    metaDescription:
      "Digital marketing, local SEO, web design, Google Ads, and Google Business Profile strategy for service businesses across Texas markets.",
    h1: "Digital Marketing for Texas Service Businesses",
    intro:
      "Texas is not one local market. Houston, Dallas, Austin, San Antonio, Waco, Tyler, Huntsville, and Arlington all have different search behavior, competition, and customer expectations.",
    image: "/assets/houston-skyline.jpg",
    imageAlt: "Houston Texas skyline at sunset",
    markets: [
      {
        name: "Houston",
        href: "/locations/texas/houston",
        description: "A massive, competitive metro where service-area clarity and local proof matter.",
      },
      {
        name: "Waco",
        href: "/locations/texas/waco",
        description: "A growing Central Texas market shaped by Baylor, tourism, and local relationships.",
      },
      {
        name: "Dallas",
        href: "/locations/texas/dallas",
        description: "A broad DFW market where suburbs and service areas need their own strategy.",
      },
      {
        name: "Austin",
        href: "/locations/texas/austin",
        description: "A research-heavy market where reviews, speed, and trust signals carry extra weight.",
      },
      {
        name: "San Antonio",
        href: "/locations/texas/san-antonio",
        description: "A distinct local market with military families, tourism, and fast-growing suburbs.",
      },
      {
        name: "Tyler",
        href: "/locations/texas/tyler",
        description: "An East Texas market where reputation, local proof, and search visibility work together.",
      },
      {
        name: "Huntsville",
        href: "/locations/texas/huntsville",
        description: "A smaller Texas market where focused local visibility can create an outsized advantage.",
      },
      {
        name: "Arlington",
        href: "/locations/texas/arlington",
        description: "A core DFW city with strong local service demand and heavy nearby competition.",
      },
    ],
    related: [
      {
        title: "Houston SEO",
        description: "Build local search visibility across Greater Houston.",
        href: "/locations/texas/houston/seo",
      },
      {
        title: "Houston Web Design",
        description: "Create a local website that helps Houston visitors become leads.",
        href: "/locations/texas/houston/web-design",
      },
      {
        title: "Local SEO Guide",
        description: "Read the broader guide to local search for service businesses.",
        href: "/resources/local-seo-guide-service-businesses",
      },
    ],
  },
  "south-carolina": {
    slug: "/locations/south-carolina",
    name: "South Carolina",
    eyebrow: "South Carolina Markets",
    metaTitle: "South Carolina Digital Marketing for Service Businesses | Holy Webs",
    metaDescription:
      "Digital marketing, local SEO, web design, Google Ads, and Google Business Profile strategy for service businesses across South Carolina markets.",
    h1: "Digital Marketing for South Carolina Service Businesses",
    intro:
      "Charleston, Columbia, and Greenville each work differently. The Lowcountry, Midlands, and Upstate have different buyers, search patterns, seasons, and competitive pressures.",
    image: "/assets/charleston-waterfront.jpg",
    imageAlt: "Charleston South Carolina waterfront at sunset",
    markets: [
      {
        name: "Charleston",
        href: "/locations/south-carolina/charleston",
        description: "Lowcountry marketing built around trust, neighborhoods, seasonality, and local search.",
      },
      {
        name: "Columbia",
        href: "/locations/south-carolina/columbia",
        description: "Midlands strategy shaped by USC, Fort Jackson, healthcare, government, and growing suburbs.",
      },
      {
        name: "Greenville",
        href: "/locations/south-carolina/greenville",
        description: "Upstate visibility for service businesses competing across Greenville, Greer, Simpsonville, and beyond.",
      },
    ],
    related: [
      {
        title: "Charleston SEO",
        description: "Build local search visibility across the Lowcountry.",
        href: "/locations/south-carolina/charleston/seo",
      },
      {
        title: "Charleston Web Design",
        description: "Create a site that helps Charleston visitors trust and contact you.",
        href: "/locations/south-carolina/charleston/web-design",
      },
      {
        title: "Google Business Profile Guide",
        description: "Learn how service businesses can improve map visibility.",
        href: "/resources/google-business-profile-guide",
      },
    ],
  },
};

export default function StateHubPage({ stateKey }: { stateKey: StateKey }) {
  const page = configs[stateKey];

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={page.image} alt={page.imageAlt} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: page.name }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {page.h1}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">{page.intro}</p>
            <a href="/resources/free-visibility-audit" className="btn-primary text-lg">
              Start with a Free Visibility Audit
            </a>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Explore {page.name} Markets
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Each market page is written around how local customers actually search, compare, and choose service businesses.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {page.markets.map((market) => (
            <a
              key={market.href}
              href={market.href}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{market.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{market.description}</p>
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                View market
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </SectionWrapper>

      <RelatedLinks
        heading={`Helpful ${page.name} Resources`}
        subheading="Use these pages to move from broad market context into the service or guide that matches your next problem."
        links={page.related}
      />

      <FinalCTASection
        headline={`Need a Clearer ${page.name} Growth Plan?`}
        subtitle="We will review your visibility, website, Google profile, and highest-value service areas so you know what to fix first."
      />
    </Layout>
  );
}
