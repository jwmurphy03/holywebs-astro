import { ArrowRight, MapPin } from "lucide-react";

import SectionWrapper from "./SectionWrapper";

interface IndustrySeoMarketLinksProps {
  industry: "hvac" | "plumbing" | "roofing";
  label: string;
}

const markets = [
  { city: "Dallas", path: "/locations/texas/dallas" },
  { city: "Austin", path: "/locations/texas/austin" },
  { city: "San Antonio", path: "/locations/texas/san-antonio" },
  { city: "Greenville", path: "/locations/south-carolina/greenville" },
  { city: "Columbia", path: "/locations/south-carolina/columbia" },
];

export default function IndustrySeoMarketLinks({ industry, label }: IndustrySeoMarketLinksProps) {
  return (
    <SectionWrapper variant="muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Local SEO by Market</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {label} SEO Pages by City
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Each market has different search behavior, competitors, suburbs, and service demand. These pages go deeper on how we build local SEO for {label.toLowerCase()} companies in priority markets.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((market) => (
            <a
              key={market.path}
              href={`${market.path}/${industry}/seo`}
              className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-2 text-primary">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">{market.city}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary">
                {label} SEO in {market.city}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View page
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
