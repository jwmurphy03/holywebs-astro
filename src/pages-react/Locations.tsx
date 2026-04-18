import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
const texasOutline = "/assets/texas-outline.svg";
const scOutline = "/assets/south-carolina-outline.svg";

interface CityLink {
  name: string;
  to: string;
  tagline?: string;
  highlights?: string[];
  featured?: boolean;
}

interface StateRegion {
  state: string;
  abbrev: string;
  cities: CityLink[];
}

const regions: StateRegion[] = [
  {
    state: "Texas",
    abbrev: "TX",
    cities: [
      {
        name: "Houston",
        to: "/locations/texas/houston",
        tagline: "Everything's bigger — including the opportunity.",
        highlights: ["7M+ metro population", "670K+ small businesses", "Fastest-growing large metro"],
        featured: true,
      },
      { name: "Dallas", to: "/locations/texas/dallas" },
      { name: "Austin", to: "/locations/texas/austin" },
      { name: "San Antonio", to: "/locations/texas/san-antonio" },
      { name: "Arlington", to: "/locations/texas/arlington" },
      { name: "Waco", to: "/locations/texas/waco" },
      { name: "Tyler", to: "/locations/texas/tyler" },
      { name: "Huntsville", to: "/locations/texas/huntsville" },
    ],
  },
  {
    state: "South Carolina",
    abbrev: "SC",
    cities: [
      {
        name: "Charleston",
        to: "/locations/south-carolina/charleston",
        tagline: "Where it all started.",
        highlights: ["850K+ metro population", "35% growth in 10 years", "20M+ annual tourists"],
        featured: true,
      },
      { name: "Greenville", to: "/locations/south-carolina/greenville" },
      { name: "Columbia", to: "/locations/south-carolina/columbia" },
    ],
  },
];

export default function Locations() {
  return (
    <Layout>
      <Helmet>
        <title>Service Areas — Texas & South Carolina | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Holy Webs serves contractors and service businesses across Texas and South Carolina with market-specific digital marketing, SEO, and web design strategies." />
        <link rel="canonical" href="https://holywebs.com/locations" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Where We Work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Regional Markets
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            We serve local service businesses across Texas and South Carolina — with market-specific strategy that national agencies can't match.
          </p>
        </div>
      </section>

      {/* Regions */}
      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto space-y-20">
          {regions.map((region) => {
            const featured = region.cities.filter((c) => c.featured);
            const other = region.cities.filter((c) => !c.featured);

            return (
              <div key={region.state}>
                {/* State heading */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={region.state === "Texas" ? texasOutline : scOutline}
                    alt={`${region.state} state outline`}
                    className="w-14 h-14 object-contain"
                  />
                  <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
                    {region.state}
                  </h2>
                </div>

                {/* Featured cities */}
                {featured.map((city) => (
                  <Link
                    key={city.name}
                    to={city.to}
                    className="group block rounded-xl border border-border bg-background p-8 mb-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-1">
                          {city.tagline}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                          {city.name}, {region.abbrev}
                        </h3>
                        {city.highlights && (
                          <div className="flex flex-wrap gap-3">
                            {city.highlights.map((h) => (
                              <span
                                key={h}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-muted px-3 py-1.5 rounded-full"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300 shrink-0">
                        Explore {city.name}
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Other cities grid */}
                {other.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {other.map((city) => (
                      <Link
                        key={city.name}
                        to={city.to}
                        className="group flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                        <span className="text-sm font-semibold text-foreground">
                          {city.name}, {region.abbrev}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
