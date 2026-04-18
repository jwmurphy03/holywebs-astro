
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

interface RelatedLinksProps {
  heading?: string;
  subheading?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({
  heading = "You Might Also Be Interested In",
  subheading,
  links,
}: RelatedLinksProps) {
  if (!links.length) return null;

  return (
    <SectionWrapper variant="light">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
          {subheading}
        </p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {link.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {link.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
