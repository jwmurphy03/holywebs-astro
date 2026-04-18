import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Globe, Search, MousePointerClick, Share2, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";

const locationData: Record<string, { city: string; state: string; area: string }> = {
  houston: { city: "Houston", state: "TX", area: "Greater Houston Area" },
  charleston: { city: "Charleston", state: "SC", area: "Greater Charleston / Lowcountry" },
};

const services = [
  { icon: Globe, title: "Web Design", desc: "Custom websites built for local service businesses that turn visitors into calls." },
  { icon: Search, title: "Local SEO", desc: "Dominate your local market with SEO strategies built for your service area." },
  { icon: MousePointerClick, title: "Google Ads", desc: "Targeted ad campaigns that put you in front of ready-to-buy customers." },
  { icon: Share2, title: "Social Media", desc: "Stay visible and build trust with consistent social media management." },
];

export default function LocationPage() {
  const { city } = useParams();
  const data = locationData[city || ""] || locationData.houston;

  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing in {data.city}, {data.state} | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={`Local digital marketing services for service businesses in ${data.city}, ${data.state}. Web design, SEO, Google Ads, and more.`} />
      </Helmet>
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-6">
            Digital Marketing for {data.city}, {data.state} Local Service Businesses
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">
            We help local service businesses in the {data.area} get found online, build trust, and grow consistently.
          </p>
          <Link to="/contact" className="btn-primary">Let's Talk</Link>
        </div>
      </section>

      <SectionWrapper variant="light">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
          Our Services in {data.city}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">Local Trust Signals</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            Trusted by local service businesses across the {data.area}. Reviews and case studies coming soon.
          </p>
        </div>
      </SectionWrapper>

      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
