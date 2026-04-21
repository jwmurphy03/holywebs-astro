import { Check } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const bullets = [
  "We only take clients we know we can help",
  "You talk directly to the person doing the work",
  "We build systems, not just websites",
  "Unapologetically Christian — it shapes how we work, not who we'll work with",
];

export default function WhySection() {
  return (
    <SectionWrapper variant="muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-2">
            We're Not an Agency.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
            We're Your Digital Team.
          </h2>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-2xl mx-auto mb-12">
          Most agencies hand you off to a coordinator after the sale. We stay in it. We're a small, faith-driven team that operates with integrity you'll notice from the first conversation — in how we communicate, how we build, and how we treat your business like it's our own.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
