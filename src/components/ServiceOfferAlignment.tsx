import { ArrowRight, Check } from "lucide-react";

import SectionWrapper from "./SectionWrapper";

interface ServiceOfferAlignmentProps {
  serviceName: string;
  headline?: string;
  intro: string;
  points: string[];
  recommendedPlan: string;
}

export default function ServiceOfferAlignment({
  serviceName,
  headline,
  intro,
  points,
  recommendedPlan,
}: ServiceOfferAlignmentProps) {
  return (
    <SectionWrapper variant="light" className="border-y border-border/70">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-10 items-start">
        <div>
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            How {serviceName} Fits
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
            {headline ?? `${serviceName} Is Part of the Growth System`}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{intro}</p>
          <div className="flex flex-wrap gap-3">
            <a href="/pricing" className="btn-primary">
              View Pricing & Packages
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-4 text-primary font-semibold hover:text-primary/80 transition-colors">
              Talk through fit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">
            Usually included in {recommendedPlan}
          </p>
          <div className="space-y-3">
            {points.map((point) => (
              <div key={point} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-foreground/80 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-muted/60 p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The goal is not to buy another isolated service. It is to build a system that keeps improving your visibility, trust, tracking, and booked opportunities month after month.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
