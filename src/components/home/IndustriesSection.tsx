import { Flame, Wrench, HardHat, Droplets, Zap, TreePine, Calculator, SprayCan, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const industries = [
  { name: "HVAC", slug: "/industries/hvac", icon: Flame, description: "Heating, cooling, and air quality companies ready to own their local market." },
  { name: "Plumbing", slug: "/industries/plumbing", icon: Droplets, description: "Plumbing companies looking to stop relying on word-of-mouth alone." },
  { name: "Roofing", slug: "/industries/roofing", icon: HardHat, description: "Roofing contractors who want a steady pipeline beyond storm season." },
  { name: "Construction", slug: "/industries/construction", icon: Wrench, description: "General contractors and builders ready to attract higher-value projects." },
  { name: "Electrical", slug: "/industries/electrical", icon: Zap, description: "Electricians looking to stand out in a crowded local market." },
  { name: "Landscaping", slug: "/industries/landscaping", icon: TreePine, description: "Landscaping and lawn care companies ready to scale beyond referrals." },
  { name: "Power Washing", slug: "/industries/power-washing", icon: SprayCan, description: "Pressure washing businesses that want consistent, year-round leads." },
  { name: "CPA & Bookkeeping", slug: "/industries/cpa-bookkeeping", icon: Calculator, description: "Accounting firms ready to grow beyond their existing client base." },
];

export default function IndustriesSection() {
  return (
    <SectionWrapper variant="dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-4">
            Who We Work&nbsp;With
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We specialize in local service businesses across these industries.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <a
              key={industry.slug}
              href={industry.slug}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300"
            >
              <industry.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-dark-foreground mb-2 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {industry.description}
              </p>
              <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
