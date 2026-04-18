
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const guides = [
  {
    label: "PILLAR GUIDE",
    title: "The Ultimate Local SEO Guide for Service Businesses (2026)",
    description: "The complete playbook for dominating Google Maps and local search in your market.",
    to: "/resources/local-seo-guide-service-businesses",
  },
  {
    label: "PILLAR GUIDE",
    title: "The Ultimate Website Guide for Service Businesses (2026)",
    description: "Everything you need to know to build a website that actually generates leads.",
    to: "/resources/website-guide-service-businesses",
  },
  {
    label: "PILLAR GUIDE",
    title: "The Complete Google Business Profile Guide (2026)",
    description: "Step-by-step instructions for dominating the local map pack with your GBP listing.",
    to: "/resources/google-business-profile-guide",
  },
  {
    label: "PILLAR GUIDE",
    title: "The Complete Google Ads Guide for Contractors (2026)",
    description: "How to run Google Ads that generate real calls and booked jobs, not wasted clicks.",
    to: "/resources/google-ads-guide-contractors",
  },
  {
    label: "PILLAR GUIDE",
    title: "The Local Service Business Guide to Online Reviews & Reputation",
    description: "How to generate consistent reviews and turn your reputation into a competitive advantage.",
    to: "/resources/online-reviews-reputation-guide",
  },
];

export default function ResourcesSection() {
  return (
    <SectionWrapper variant="muted">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Free Resources for Local Business Owners
        </h2>
        <p className="text-muted-foreground text-lg max-w-none mx-auto whitespace-nowrap">
          Practical guides written for contractors and service businesses — not marketers.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto [&>a]:w-full [&>a]:md:w-[calc(50%-12px)] [&>a]:lg:w-[calc(33.333%-16px)]">
        {guides.map((guide) => (
          <a
            key={guide.title}
            href={guide.to}
            className="group bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <span className="text-xs font-bold tracking-widest text-primary mb-3">
              {guide.label}
            </span>
            <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {guide.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              {guide.description}
            </p>
            <span className="text-primary font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
              Read the Guide <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/resources"
          className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          View all free resources <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </SectionWrapper>
  );
}
