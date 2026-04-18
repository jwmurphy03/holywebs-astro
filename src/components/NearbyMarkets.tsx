
import { MapPin, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Market {
  name: string;
  to: string;
}

interface NearbyMarketsProps {
  heading?: string;
  markets: Market[];
  variant?: "light" | "muted" | "dark";
}

export default function NearbyMarkets({ heading = "Nearby Markets We Serve", markets, variant = "muted" }: NearbyMarketsProps) {
  return (
    <SectionWrapper variant={variant}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
        {heading}
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
        We serve businesses across multiple markets. Explore our coverage in nearby areas.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {markets.map((m) => (
          <a
            key={m.name}
            href={m.to}
            className="flex items-center justify-between gap-3 bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-semibold">{m.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
