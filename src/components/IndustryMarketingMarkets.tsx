import { ArrowRight } from "lucide-react";

import SectionWrapper from "./SectionWrapper";

type Industry = "hvac" | "plumbing" | "roofing";

interface IndustryMarketingMarketsProps {
  industry: Industry;
  label: string;
  intro: string;
}

const marketCopy: Record<Industry, Record<string, string>> = {
  hvac: {
    Charleston: "Hurricane season, coastal humidity, fast Lowcountry growth, and long cooling seasons make HVAC visibility especially valuable.",
    Houston: "Extreme heat, humidity, and a massive service area create year-round HVAC demand across one of the most competitive markets in the country.",
    Dallas: "DFW is spread across dozens of suburbs, each with its own search behavior, review patterns, and competitor mix.",
    Austin: "Fast growth, high customer expectations, and nearby markets like Round Rock and Georgetown make local relevance matter.",
    "San Antonio": "A wide metro footprint and surrounding communities create strong demand for practical, trust-driven HVAC marketing.",
    Greenville: "Upstate growth, nearby suburbs, and seasonal demand make Greenville a strong market for local HVAC search visibility.",
    Columbia: "Columbia and nearby markets like Lexington and Irmo need clear service-area signals and a website that converts mobile searchers.",
  },
  plumbing: {
    Charleston: "Older housing, flood risk, clay soil, and fast suburban growth create steady demand for emergency and installation searches.",
    Houston: "A massive housing base, storm events, slab issues, and high search volume make Houston one of the largest plumbing markets online.",
    Dallas: "DFW plumbing searches vary heavily by suburb, from emergency repair in Dallas to water heater and drain demand in fast-growing communities.",
    Austin: "Austin plumbing customers compare quickly, so strong reviews, clear service pages, and local trust signals carry real weight.",
    "San Antonio": "San Antonio plumbing demand stretches across the city and surrounding communities, making service-area clarity important.",
    Greenville: "Greenville plumbing companies can win more calls by building local relevance across the Upstate instead of relying on one city page.",
    Columbia: "Columbia, Lexington, Irmo, and nearby communities create a practical local SEO opportunity for plumbing companies.",
  },
  roofing: {
    Charleston: "Hurricane season, salt air, older housing, and Lowcountry growth create a strong roofing market with high trust requirements.",
    Houston: "Hail, hurricanes, heat cycles, and housing density make Houston a large, competitive roofing market with constant demand.",
    Dallas: "DFW storm patterns, hail risk, and suburban expansion create high-value roofing searches across many local markets.",
    Austin: "Austin roofing search depends on trust, project proof, and visibility in nearby markets like Round Rock and Cedar Park.",
    "San Antonio": "San Antonio roofing demand reaches into nearby communities where homeowners still want a local-feeling contractor.",
    Greenville: "Greenville roofing companies benefit from strong local proof, service-area clarity, and Upstate-specific content.",
    Columbia: "Columbia roofing search should support the city plus nearby markets like Lexington, Irmo, and Blythewood.",
  },
};

const markets = [
  { city: "Charleston", state: "SC", hrefBase: "/locations/south-carolina/charleston", hasHub: true },
  { city: "Houston", state: "TX", hrefBase: "/locations/texas/houston", hasHub: true },
  { city: "Dallas", state: "TX", hrefBase: "/locations/texas/dallas", hasHub: true },
  { city: "Austin", state: "TX", hrefBase: "/locations/texas/austin", hasHub: true },
  { city: "San Antonio", state: "TX", hrefBase: "/locations/texas/san-antonio", hasHub: true },
  { city: "Greenville", state: "SC", hrefBase: "/locations/south-carolina/greenville", hasHub: false },
  { city: "Columbia", state: "SC", hrefBase: "/locations/south-carolina/columbia", hasHub: false },
];

export default function IndustryMarketingMarkets({ industry, label, intro }: IndustryMarketingMarketsProps) {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          {label} Marketing by Market
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          {intro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => {
            const href = market.hasHub
              ? `${market.hrefBase}/${industry}`
              : `${market.hrefBase}/${industry}/seo`;

            return (
              <a
                key={`${market.city}-${industry}`}
                href={href}
                className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {market.city}, {market.state}
                  </h3>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {marketCopy[industry][market.city]}
                </p>
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                  {market.hasHub ? "Market guide" : "Local SEO guide"}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
