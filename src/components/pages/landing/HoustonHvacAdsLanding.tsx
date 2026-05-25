import { useCallback, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  Flame,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  ThermometerSun,
} from "lucide-react";
import Turnstile, { isTurnstileEnabled } from "@/components/Turnstile";
import { postToGHL } from "@/lib/ghl";

const logoWhite = "/assets/logo-white.png";

const proofPoints = [
  "See what’s stopping more Houston homeowners from finding and choosing your HVAC company",
  "Find the fastest fixes across your website, Google Maps visibility, reviews, ads, and call path",
  "Get a clear next step whether you’re starting from scratch or already spending on marketing",
];

const auditItems = [
  {
    icon: Search,
    title: "Can Homeowners Find You?",
    text: "We review your Google visibility for AC repair, replacement, tune-ups, emergency service, and suburb searches across Greater Houston.",
  },
  {
    icon: BarChart3,
    title: "Does Your Website Turn Visitors Into Leads?",
    text: "We look for the conversion gaps that cost calls: unclear offers, buried phone numbers, weak trust signals, slow mobile pages, and forms that create friction.",
  },
  {
    icon: Phone,
    title: "What Should You Fix First?",
    text: "We identify the highest-leverage next move: Google Business Profile, website, SEO, paid ads, reviews, tracking, or follow-up process.",
  },
];

const qualifiers = [
  "You serve Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, or nearby markets",
  "You want more AC repair, replacement, maintenance, or emergency service calls",
  "You’re not sure whether to fix your website, Google profile, SEO, ads, or all of the above",
  "You care about booked jobs and lead quality, not just traffic or rankings",
];

const conversionSignals = [
  { label: "Free audit", detail: "Know what to fix before you invest more" },
  { label: "24-hour follow-up", detail: "Fast review from a real strategist" },
  { label: "Month-to-month", detail: "No long-term management contract" },
  { label: "Call-focused", detail: "Built around qualified calls and booked jobs" },
];

const faqs = [
  {
    q: "What will I actually get from the free audit?",
    a: "You’ll get a plain-English read on where your Houston HVAC lead system is weak, what’s most likely costing you calls, and which fixes would have the biggest impact on lead volume and quality.",
  },
  {
    q: "Can this help if I’m not doing much marketing yet?",
    a: "Yes. This is often the best time to get clarity. We’ll help you see whether your first move should be your website, Google Business Profile, reviews, SEO, paid ads, or tracking.",
  },
  {
    q: "Can this help if I already have a website or ads?",
    a: "Yes. We look for the common leaks: weak mobile conversion, confusing messaging, poor local visibility, wasted ad spend, missing tracking, and gaps between the searcher’s problem and what your page says.",
  },
  {
    q: "Are you going to just recommend ads?",
    a: "No. Ads are only useful when they’re the right lever. Sometimes the smartest first move is fixing the website, Google profile, reviews, local pages, or call tracking before buying traffic.",
  },
];

export default function HoustonHvacAdsLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);

    try {
      await postToGHL({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phone: fd.get("phone") as string,
        businessName: fd.get("businessName") as string,
        websiteUrl: fd.get("websiteUrl") as string,
        service: "Multiple Services",
        message: `Houston HVAC Lead Growth Landing Page\nMonthly marketing budget: ${fd.get("marketingBudget") || "Not provided"}\nMain challenge: ${fd.get("challenge") || "Not provided"}`,
        turnstileToken,
        source: "houston-hvac-lead-growth-landing",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07101f] text-white">
      <header className="border-b border-white/10 bg-[#07101f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <img src={logoWhite} alt="Holy Webs" className="h-8 w-auto" width={160} height={32} />
          <a
            href="tel:713-487-7332"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-bold text-white transition-colors hover:border-primary hover:text-primary sm:px-4"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(713) 487-7332</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hero-bg-signal" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
                <ThermometerSun className="h-4 w-4" />
                Free Houston HVAC Lead Audit
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Find out why your Houston HVAC company isn’t getting more calls.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
                Whether you have no real marketing yet or you’re already paying for leads, we’ll show you where your website, Google presence, reviews, ads, or follow-up path may be costing you booked AC jobs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#audit-form" className="btn-primary justify-center text-base">
                  Get My Free Audit <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:713-487-7332" className="btn-outline-light justify-center text-base">
                  Call Now
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-white/70">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="audit-form" className="rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-7">
              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">Request sent.</h2>
                  <p className="mt-3 max-w-sm text-white/65">
                    We’ll review your Houston HVAC visibility and follow up with next steps within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-white">Find the biggest leak in your lead flow</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      Tell us where you are now. We’ll review your website, Google visibility, market position, and fastest path to better leads.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-red-300">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <p>Something went wrong. Please try again or email <a href="mailto:hello@holywebs.com" className="font-semibold underline">hello@holywebs.com</a>.</p>
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name *" name="name" required placeholder="Your name" />
                      <Field label="Email *" name="email" type="email" required placeholder="you@email.com" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Phone *" name="phone" type="tel" required placeholder="(555) 123-4567" />
                      <Field label="Business Name *" name="businessName" required placeholder="Company name" />
                    </div>
                    <Field label="Website URL" name="websiteUrl" placeholder="https://yourbusiness.com" />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <SelectField
                        label="Monthly marketing budget"
                        name="marketingBudget"
                        options={["Not investing yet", "Under $1K", "$1K-$3K", "$3K-$5K", "$5K-$10K", "$10K+"]}
                      />
                      <SelectField
                        label="Main challenge"
                        name="challenge"
                        options={["Not getting enough calls", "Website is not converting", "Not showing up on Google", "Ads are not working", "Need better lead quality", "Not sure yet"]}
                      />
                    </div>

                    <Turnstile onVerify={setTurnstileToken} onExpire={handleTurnstileExpire} theme="dark" />

                    <button
                      type="submit"
                      disabled={submitting || (isTurnstileEnabled && !turnstileToken)}
                      className="btn-primary w-full justify-center text-base disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Show Me What To Fix"}
                    </button>
                    <p className="text-center text-xs font-medium text-white/45">
                      No pressure. No long-term contract. Just a clear read on what would move more qualified calls.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b1424] py-6">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {conversionSignals.map((signal) => (
              <div key={signal.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  <p className="text-sm font-extrabold text-white">{signal.label}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{signal.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 text-foreground lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-primary">What we’ll look for</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                The fastest conversion wins are usually hiding in plain sight.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Before you spend another dollar, we’ll look at the things that decide whether homeowners can find you, trust you, and contact you.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {auditItems.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-extrabold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Why Houston HVAC marketing is unforgiving</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                In Houston, “good enough online” quietly hands jobs to competitors.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Search demand is huge, but homeowners still choose the company that is easiest to find, easiest to trust, and easiest to contact. If your site, Google profile, reviews, tracking, or ads are weak, the lead goes somewhere else.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Flame, stat: "4+ mo.", label: "Of intense heat creating urgent AC repair searches" },
                { icon: MapPin, stat: "7M+", label: "People spread across dozens of distinct service areas" },
                { icon: Clock, stat: "24 hrs", label: "Typical decision window when an AC fails in summer" },
                { icon: ShieldCheck, stat: "$3K-$12K", label: "Common replacement value worth tracking carefully" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-background p-5">
                  <item.icon className="mb-4 h-6 w-6 text-primary" />
                  <p className="text-3xl font-extrabold text-foreground">{item.stat}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 text-foreground lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                Built for HVAC owners who want better calls, not prettier reports.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We’ll tell you what we’d fix first, what we would avoid spending money on, and which marketing lever is most likely to produce better calls in the Houston service areas you actually want to win.
              </p>
              <a href="#audit-form" className="btn-primary mt-7">
                Get My Free Audit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="mb-5 text-xl font-extrabold">This audit is a fit if:</h3>
              <div className="space-y-4">
                {qualifiers.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#07101f] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-white md:text-4xl">Questions Before You Ask For The Audit</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
                  <h3 className="text-lg font-extrabold text-white">{faq.q}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#audit-form" className="btn-primary justify-center">
                Get My Free Audit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

function Field({ label, name, placeholder, required, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-white/70">{label}</label>
      <input
        required={required}
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-primary/60 focus:outline-none"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-white/70">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition-colors focus:border-primary/60 focus:outline-none"
      >
        <option value="" disabled>Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
