import { Search, Wrench, Phone, BarChart3 } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "We Audit Your Visibility",
    desc: "We analyze your website, Google rankings, ad accounts, and competitors to find exactly where you're losing leads — and where the biggest opportunities are.",
  },
  {
    icon: Wrench,
    num: "02",
    title: "We Build the Infrastructure",
    desc: "From a high-converting website to SEO, Google Ads, and social media — we build out the systems your business needs to dominate your local market.",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "We Optimize & Scale",
    desc: "We track every metric that matters, cut what's not working, and double down on what is — so your cost per lead drops and your pipeline grows.",
  },
  {
    icon: Phone,
    num: "04",
    title: "Your Phone Starts Ringing",
    desc: "Consistently, not occasionally. Real leads from real customers in your service area who are actively searching for what you offer.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper variant="light">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center leading-tight mb-6">
        How It Works
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
        Every engagement starts the same way — we figure out what's broken, fix the foundation, and build from there.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="text-center bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-primary font-extrabold text-sm tracking-widest">{s.num}</span>
            <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
