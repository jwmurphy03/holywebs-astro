
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
const texasSkyline = "/assets/texas-skyline.png";
const scSkyline = "/assets/south-carolina-skyline.png";

const locations = [
  {
    state: "South Carolina",
    tagline: "Charleston · Greenville · Columbia",
    description: "From the Lowcountry to the Upstate, we help South Carolina service businesses own their local market. Whether you're a roofer in Charleston or a plumber in Greenville, our strategies are built for real communities — not cookie-cutter campaigns.",
    bullets: ["Hyper-local SEO targeting SC metro areas", "Google Business Profile optimization", "Websites built to convert local traffic"],
    to: "/locations",
    icon: scSkyline,
  },
  {
    state: "Texas",
    tagline: "Houston · Dallas · Austin · San Antonio & More",
    description: "Across the Lone Star State's fastest-growing metros, we bring market-specific strategy that national agencies can't match. From the energy corridor in Houston to the booming tech scene in Austin, we know these markets inside and out.",
    bullets: ["Serving 8+ Texas metros and growing", "Industry-specific campaigns for TX businesses", "Boots-on-the-ground market knowledge"],
    to: "/locations",
    icon: texasSkyline,
  },
];

export default function LocationsSection() {
  return (
    <SectionWrapper variant="light">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
        Where We Serve
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Two markets. One mission. Helping local businesses dominate online.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {locations.map((loc) => (
          <a
            key={loc.state}
            href={loc.to}
            className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden flex items-center justify-center">
              <img src={loc.icon} alt={`${loc.state} skyline`} className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${loc.state === "South Carolina" ? "object-[center_25%]" : ""}`} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/60 to-dark/60" />
              <h3 className="absolute text-white text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">{loc.state}</h3>
            </div>
            <div className="p-10 pt-6">
            
            <p className="text-primary font-semibold text-sm mb-4">{loc.tagline}</p>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{loc.description}</p>
            <ul className="space-y-2 mb-6">
              {loc.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Market <ArrowRight className="w-4 h-4" />
            </span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
