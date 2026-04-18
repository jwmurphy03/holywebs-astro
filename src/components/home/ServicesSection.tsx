
import { Globe, Search, MousePointerClick, Share2, Bot, MapPin, ArrowRight } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "Your website is your hardest-working employee. We build sites that look sharp, load fast, and turn visitors into calls — not just clicks.",
    link: "/services/web-design",
    cta: "Learn About Web Design",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "We build SEO strategies for local service businesses that move the needle in your market, not just improve a report.",
    link: "/services/seo",
    cta: "Learn About SEO",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Get in front of buyers the moment they're searching. Campaigns built around your margins, not your impressions.",
    link: "/services/google-ads",
    cta: "Learn About Google Ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Put your business in front of ideal customers on Facebook and Instagram with hyper-targeted campaigns that generate real leads.",
    link: "/services/meta-ads",
    cta: "Learn About Meta Ads",
  },
  {
    icon: Bot,
    title: "AEO",
    desc: "AI search is changing how customers find businesses. We make sure you show up when ChatGPT and Google AI answer questions in your market.",
    link: "/services/aeo",
    cta: "Learn About AEO",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Your GBP is the front door for local search. We optimize it so you show up in the map pack and earn trust before the click.",
    link: "/services/google-business-profile",
    cta: "Learn About GBP Management",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper variant="muted">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-14">
        What We Do
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href={s.link} className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              {s.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
