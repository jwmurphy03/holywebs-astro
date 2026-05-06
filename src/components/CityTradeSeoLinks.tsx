import { ArrowRight, Flame, Droplet, Home } from "lucide-react";

import SectionWrapper from "./SectionWrapper";

interface CityTradeSeoLinksProps {
  city: string;
  basePath: string;
}

const tradeLinks = [
  {
    title: "HVAC SEO",
    hrefSuffix: "/hvac/seo",
    icon: Flame,
    description: "Rank for AC repair, replacement, maintenance, and emergency HVAC searches.",
  },
  {
    title: "Plumbing SEO",
    hrefSuffix: "/plumbing/seo",
    icon: Droplet,
    description: "Show up for emergency plumbing, drain cleaning, water heater, and leak repair searches.",
  },
  {
    title: "Roofing SEO",
    hrefSuffix: "/roofing/seo",
    icon: Home,
    description: "Build visibility for roof replacement, storm damage, inspections, and roof repair searches.",
  },
];

export default function CityTradeSeoLinks({ city, basePath }: CityTradeSeoLinksProps) {
  return (
    <SectionWrapper variant="muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Trade SEO Pages</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Local SEO Pages for {city} Service Businesses
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Different trades win different searches. These pages show how we approach local SEO for the highest-value service categories in {city}.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tradeLinks.map((link) => (
            <a
              key={link.title}
              href={`${basePath}${link.hrefSuffix}`}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary">
                {city} {link.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{link.description}</p>
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
