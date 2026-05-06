import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Clock, Check, AlertCircle, Flame, Wrench, HardHat, Droplets, Zap, TreePine, Calculator, SprayCan, ArrowRight } from "lucide-react";

import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import IndustryFAQ from "@/components/IndustryFAQ";
import { postToGHL } from "@/lib/ghl";

const serviceOptions = [
  "Web Design",
  "SEO",
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "Social Media Management",
  "AI Search (AI Search Optimization)",
  "Multiple Services",
  "Not sure yet, help me figure it out",
];

const expectations = [
  "No pressure, no hard sell. Just an honest conversation",
  "We'll review your current online presence before the call",
  "You'll get real recommendations — whether you work with us or not",
  "Typical response time: within 24 hours",
];

const contactFaqs = [
  {
    question: "How much does it cost to work with Holy Webs?",
    answer: "It depends on your goals, your market, and the services you need, so we don't publish one-size-fits-all pricing. Most of our clients invest between $1,500 and $5,000 per month depending on whether they need web design, SEO, paid ads, or a combination. We'll give you a clear, honest quote after learning about your business, and we'll never recommend services you don't actually need.",
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We don't lock anyone into long-term contracts. Most of our services run on a month-to-month basis after an initial onboarding period. That said, digital marketing is a long game. SEO, for example, typically takes 6-9 months to gain real traction. We'll always be transparent about realistic timelines so you can make informed decisions.",
  },
  {
    question: "How long before I start seeing results?",
    answer: "It varies by service. Google Ads and Meta Ads can start generating leads within the first few weeks once campaigns are dialed in. SEO and AI Search are longer-term investments. Most clients start seeing meaningful movement in organic rankings within 6-9 months. We set clear expectations upfront and provide regular reporting so you always know where things stand.",
  },
  {
    question: "What's the onboarding process like?",
    answer: "After our initial call, we'll send you a simple onboarding questionnaire to gather key details about your business, your competitors, and your goals. From there, we conduct a thorough audit of your current online presence, build a custom strategy, and present it to you for approval before any work begins. The whole process typically takes 1-2 weeks, and you'll have a dedicated point of contact throughout.",
  },
  {
    question: "Do you work with businesses outside Texas and South Carolina?",
    answer: "Our core focus is on local service businesses in Texas and South Carolina because that's where we have the deepest market knowledge and the strongest track record. However, we do occasionally take on clients in other states if we believe we can deliver great results. Reach out and let's talk. We'll be honest about whether we're the right fit.",
  },
  {
    question: "Can you help if I already have a website?",
    answer: "Absolutely. In fact, most of our clients come to us with an existing website that isn't performing the way they need it to. We'll audit your current site, identify what's working and what isn't, and recommend whether it makes more sense to optimize what you have or start fresh. Either way, you'll end up with a site that actually generates leads.",
  },
  {
    question: "What makes you different from other marketing agencies?",
    answer: "We only work with local service businesses, contractors, trades, and home service companies. That specialization means we understand your customers, your competition, and the specific challenges of marketing in your industry. We're also a small, hands-on team. You won't get passed off to a junior account manager or buried in a roster of 200 clients. When you work with us, you get direct access to the people doing the work.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer: "That's completely normal, and it's exactly what our initial consultation is for. We'll review your current online presence, ask about your goals, and recommend a strategy based on what will actually move the needle for your business. There's no obligation, and you'll walk away with a clear understanding of your options even if you decide not to work with us.",
  },
];

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await postToGHL({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        businessName: formData.get("businessName") as string,
        websiteUrl: formData.get("websiteUrl") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
        source: "contact-page",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Holy Webs — Get a Free Marketing Consultation | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Ready to grow your service business? Contact Holy Webs to discuss web design, SEO, and digital marketing. Serving contractors across Texas and South Carolina." />
        <link rel="canonical" href="https://holywebs.com/contact/" />
      </Helmet>
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Let's See if We're a Good&nbsp;Fit
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            We'd love to learn about your business, understand your goals, and see how we can help. Fill out the form below and we'll be in touch, usually within 24&nbsp;hours.
          </p>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-extrabold text-foreground mb-4">Message Sent.</h2>
                <p className="text-muted-foreground text-lg mb-2">Thanks for reaching out — we'll be in touch soon.</p>
                <p className="text-muted-foreground">In the meantime, feel free to check out our <a href="/resources/free-visibility-audit" className="text-primary hover:text-primary/80 font-semibold transition-colors">free visibility audit</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>Something went wrong. Please try again or email us at <a href="mailto:hello@holywebs.com" className="font-semibold underline">hello@holywebs.com</a>.</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                    <input
                      required
                      name="name"
                      type="text"
                      maxLength={100}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input
                      required
                      name="email"
                      type="email"
                      maxLength={255}
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      maxLength={20}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Business Name</label>
                    <input
                      name="businessName"
                      type="text"
                      maxLength={150}
                      placeholder="Your business name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Website URL</label>
                  <input
                    name="websiteUrl"
                    type="text"
                    maxLength={255}
                    placeholder="https://yourbusiness.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">What service are you interested in? *</label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Tell us a little about your business and what you're looking for *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    placeholder="What does your business do? What are your goals? Any specific challenges you're facing?"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center text-base disabled:opacity-50">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">What to Expect</h3>
              <div className="space-y-3">
                {expectations.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Email</span>
              </div>
              <a href="mailto:hello@holywebs.com" className="text-muted-foreground hover:text-primary transition-colors">
                hello@holywebs.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Phone</span>
              </div>
              <a href="tel:843-847-0181" className="text-muted-foreground hover:text-primary transition-colors">
                (843) 847-0181
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Locations</span>
              </div>
              <p className="text-muted-foreground">Texas (Houston, Waco, Dallas, Austin)</p>
              <p className="text-muted-foreground">South Carolina (Charleston, Greenville, Columbia)</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Response Time</span>
              </div>
              <p className="text-muted-foreground">Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Work With Holy Webs */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Work With Holy&nbsp;Webs
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We're a small, focused team, not a faceless agency with hundreds of clients and a rotating cast of account managers. When you work with Holy Webs, you talk directly to the people building your strategy and doing the work. We know your business by name, not by account number.
            </p>
            <p>
              We made a deliberate choice to specialize in local service businesses — contractors, tradespeople, and home service companies. That means we understand the realities you deal with every day: seasonal demand swings, emergency service calls at odd hours, neighborhood-level competition where reputation is everything, and customers who need to trust you before they'll pick up the phone. We don't need a crash course in your industry because we've been living in it for years.
            </p>
            <p>
              Every strategy we build is custom. We don't sell packages off a menu or recycle the same template for every client. Your market, your competition, your service area, and your growth goals are all different from the company down the street, and your marketing strategy should reflect that. We take the time to understand what makes your business unique and build around it.
            </p>
            <p>
              We also measure success differently than most agencies. We don't send you reports full of impressions, click-through rates, and other metrics that don't pay your bills. We care about leads, booked jobs, and revenue. If your phone isn't ringing more and your schedule isn't filling up, we're not doing our job, and we'll be the first ones to tell&nbsp;you.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <IndustryFAQ
        faqs={contactFaqs}
        headline="Frequently Asked Questions"
        subheadline="Common questions from business owners before they reach out."
        canonicalUrl="https://holywebs.com/contact"
      />

      {/* Who We Work With */}
      <SectionWrapper variant="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
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
    </Layout>
  );
}
