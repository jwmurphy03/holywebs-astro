
import { MapPin, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const locations = [
  { name: "Houston, TX", to: "/locations/texas/houston" },
  { name: "Waco, TX", to: "/locations/texas/waco" },
  { name: "Dallas, TX", to: "/locations/texas/dallas" },
  { name: "Austin, TX", to: "/locations/texas/austin" },
  { name: "Charleston, SC", to: "/locations/south-carolina/charleston" },
  { name: "Greenville, SC", to: "/locations/south-carolina/greenville" },
];

interface WhereWeServeProps {
  serviceName: string;
}

export default function WhereWeServe({ serviceName }: WhereWeServeProps) {
  return (
    <SectionWrapper variant="muted">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
        Where We Offer {serviceName}
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
        We provide {serviceName.toLowerCase()} services across Texas and South Carolina. See how we can help businesses in your market.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {locations.map((loc) => (
          <a
            key={loc.name}
            href={loc.to}
            className="flex items-center justify-between gap-3 bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-semibold">{loc.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
