import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Share2, Calendar, Image, BarChart3, Palette, Users, X, MessageSquare, Target, Repeat } from "lucide-react";

import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "Meta Ads", description: "Amplify your organic social content with targeted paid campaigns on Facebook and Instagram.", href: "/services/meta-ads" },
  { title: "Web Design", description: "Drive social traffic to a website built to convert visitors into customers.", href: "/services/web-design" },
  { title: "Google Business Profile", description: "Your social presence and GBP should tell the same story. We align both.", href: "/services/google-business-profile" },
  { title: "Landscaping", description: "Landscapers build trust through visual storytelling. See how we manage their social presence.", href: "/industries/landscaping" },
  { title: "Multi-Location", description: "Managing social across multiple locations requires a system. Here is how we do it.", href: "/industries/multi-location" },
  { title: "Construction", description: "Project showcases and behind-the-scenes content build authority for construction companies.", href: "/industries/construction" },
];

const features = [
  {
    icon: Calendar,
    title: "Consistent Posting Schedule",
    desc: "We create and publish content on a consistent cadence so your brand stays top-of-mind with your audience — without you lifting a finger.",
  },
  {
    icon: Image,
    title: "Custom Graphics & Branded Content",
    desc: "Every post is designed with your brand in mind. Professional graphics, on-brand colors, and copy that speaks directly to your ideal customers.",
  },
  {
    icon: Share2,
    title: "Multi-Platform Publishing",
    desc: "We post across the platforms that matter for your business — Facebook, Instagram, LinkedIn, Google Business Profile, and more.",
  },
  {
    icon: Palette,
    title: "Brand Awareness Campaigns",
    desc: "Strategic content designed to increase your visibility in your local market, build trust, and position your business as the go-to&nbsp;choice.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    desc: "Know exactly how your social presence is performing with clear, easy-to-read reports covering engagement, reach, and audience growth.",
  },
  {
    icon: Users,
    title: "Audience Growth & Engagement",
    desc: "We don't just post — we build an engaged community around your brand through strategic content and consistent interaction.",
  },
];

const stats = [
  { value: "73%", label: "of consumers follow brands on social media" },
  { value: "90%", label: "of people buy from brands they follow" },
  { value: "54%", label: "use social to research products & services" },
  { value: "2x", label: "more leads from consistent social posting" },
];

const whatWeHandle = [
  { icon: Calendar, title: "Content Calendar & Scheduling", desc: "A structured posting calendar tailored to your business goals, seasonal trends, and local market opportunities." },
  { icon: Image, title: "Professional Graphic Design", desc: "Custom-designed visuals for every post — no generic stock photos or cookie-cutter templates." },
  { icon: MessageSquare, title: "Copywriting & Captions", desc: "Compelling captions written in your brand voice that drive engagement and encourage action from your audience." },
  { icon: Target, title: "Platform-Specific Strategy", desc: "Each platform has its own algorithm and audience behavior. We tailor content and format to maximize performance on every channel." },
];

const comparison = [
  { topic: "Content", them: "Generic stock photos with recycled captions", us: "Custom graphics and copy built for your brand" },
  { topic: "Strategy", them: "Post and pray — no real plan", us: "Data-driven content calendar tied to your goals" },
  { topic: "Consistency", them: "Sporadic posting with gaps and excuses", us: "Reliable, on-schedule publishing every week" },
  { topic: "Reporting", them: "Vanity metrics or no reporting at all", us: "Clear monthly reports with actionable insights" },
  { topic: "Communication", them: "Outsourced overseas with slow response", us: "U.S.-based team that knows your business" },
  { topic: "Contracts", them: "Long-term lock-in contracts", us: "Month-to-month — we earn your business" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Brand Alignment",
    desc: "We learn your business, your voice, and your audience. We identify the platforms, content themes, and posting frequency that will move the needle for you.",
  },
  {
    step: "02",
    title: "Content Creation & Approval",
    desc: "Our team designs custom graphics and writes engaging copy for each post. You review and approve before anything goes live.",
  },
  {
    step: "03",
    title: "Publishing & Distribution",
    desc: "We handle scheduling and publishing across all your platforms — optimized for the best days and times to reach your audience.",
  },
  {
    step: "04",
    title: "Report & Refine",
    desc: "Every month you get a performance report covering what worked, what we learned, and how we're adjusting strategy to keep improving results.",
  },
];

const faqs = [
  {
    q: "Which social media platforms do you manage?",
    a: "We manage Facebook, Instagram, LinkedIn, and Google Business Profile. We'll recommend the best combination based on your industry and target audience.",
  },
  {
    q: "How many posts per month are included?",
    a: "Posting frequency is tailored to your plan and goals. We'll work with you to find the right cadence — whether that's a few posts per week or daily content.",
  },
  {
    q: "Do I get to approve posts before they go live?",
    a: "Absolutely. We create content in advance and send it for your review. Nothing gets published without your approval.",
  },
  {
    q: "Can you match our existing brand guidelines?",
    a: "Yes. We design all content to align with your brand colors, fonts, tone, and visual identity. If you don't have brand guidelines yet, we'll help establish them.",
  },
  {
    q: "Do you handle responses and comments?",
    a: "Our core service focuses on content creation and publishing. Community management and response handling can be added based on your needs.",
  },
  {
    q: "How soon will I see results?",
    a: "Social media is a long game. You'll start seeing engagement and audience growth within the first few weeks, but real brand momentum builds over 3–6 months of consistent posting.",
  },
  {
    q: "Do you run paid social media ads?",
    a: "This service focuses on organic social media management. If you're interested in paid social advertising, check out our Meta Ads service for targeted ad campaigns.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. We work on a month-to-month basis. We keep clients because we deliver results — not because of a contract.",
  },
];

export default function SocialMedia() {
  return (
    <Layout>
      <Helmet>
        <title>Social Media Management for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Professional social media management for contractors and service businesses. Custom content, consistent posting, and brand growth on Facebook, Instagram, and LinkedIn." />
        <link rel="canonical" href="https://holywebs.com/services/social-media" />
        <meta property="og:image" content="https://holywebs.com/og/og-social-media.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Social Media Management",
            description: "Professional social media management for contractors and service businesses. Custom content, consistent posting, and brand growth on Facebook, Instagram, and LinkedIn.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "State", name: "South Carolina" }]
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1729]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.12] mix-blend-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Social Media" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Social Media Management</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Stay Visible. Stay Relevant. Stay&nbsp;Booked.
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your customers are scrolling every day. If your business isn't showing up with professional, consistent content — your competitors are filling that&nbsp;space. We handle everything so you can focus on running your&nbsp;business.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary text-lg">
              Get Started
            </a>
            <a
              href="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Or start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Your Customers Are on Social Media. Are&nbsp;You?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most local businesses know they should be posting on social media — but between running jobs, managing crews, and handling customers, it falls to the bottom of the list. Weeks go by. Your page goes quiet. And potential customers scroll right&nbsp;past.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Meanwhile, the businesses that show up consistently — with professional content, clear branding, and a steady presence — are the ones customers remember when they need a service provider. Social media isn't optional anymore. It's how people decide who to&nbsp;trust.
          </p>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            We take social media completely off your plate so your brand stays active, professional, and visible — every single&nbsp;week.
          </p>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Our Social Media&nbsp;Service
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A done-for-you social media presence that builds brand awareness and keeps your business top-of-mind.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* What We Handle */}
      <SectionWrapper variant="dark">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
          What We Handle for You
        </h2>
        <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-14">
          From strategy to publishing — we manage every step of your social media presence.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whatWeHandle.map((item) => (
            <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark-foreground mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Them vs Us Comparison */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Not All Social Media Management Is the&nbsp;Same
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Here's how we stack up against the typical agency experience.
        </p>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-3 bg-muted/50 p-4 border-b border-border">
            <span className="text-sm font-bold text-foreground"></span>
            <span className="text-sm font-bold text-muted-foreground text-center">Typical Agency</span>
            <span className="text-sm font-bold text-primary text-center">Holy Webs</span>
          </div>
          {comparison.map((row, i) => (
            <div key={row.topic} className={`grid grid-cols-3 p-4 items-center ${i < comparison.length - 1 ? "border-b border-border" : ""}`}>
              <span className="text-sm font-semibold text-foreground">{row.topic}</span>
              <div className="flex items-start gap-2 justify-center text-center">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-xs leading-relaxed">{row.them}</span>
              </div>
              <div className="flex items-start gap-2 justify-center text-center">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-xs font-medium leading-relaxed">{row.us}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A clear, repeatable system that keeps your social media running smoothly.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((p) => (
            <div key={p.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-extrabold text-lg">{p.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Us */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Local Businesses Trust Holy Webs With Social&nbsp;Media
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Custom content designed for your brand — no templates",
              "Consistent posting schedule you can count on",
              "Multi-platform management from one team",
              "Transparent reporting with real engagement metrics",
              "Month-to-month — no long-term contracts",
              "U.S.-based team that understands local markets",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <WhereWeServe serviceName="Social Media Management" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
