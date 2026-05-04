import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, Video, CheckCircle, AlertTriangle, Timer, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { postToGHL } from "@/lib/ghl";
import { toast } from "sonner";
const jeremyPhoto = "/assets/jeremy-workshop.jpeg";

const WORKSHOP_DATE = new Date("2026-05-07T19:00:00Z"); // 2 PM Central = 7 PM UTC

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const businessTypes = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Other Home Service",
];

const learnings = [
  "Why your competitors are showing up on Google and you're not — and the exact reason most contractor websites fail to generate calls",
  "The 3-part local visibility system we use to get contractors ranked on Google Maps without running ads",
  "How to turn your Google Business Profile into your #1 lead source (most businesses are leaving this completely unoptimized)",
  "A live action plan built around your specific market so you leave the workshop knowing exactly what to do first",
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="mt-3 text-white/70 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function Workshop() {
  const countdown = useCountdown(WORKSHOP_DATE);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.businessType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await postToGHL({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        source: "Workshop Registration",
        form_source: "Workshop Registration",
        service: form.businessType,
      });
      setSubmitted(true);
      toast.success("You're registered! Check your email for the Zoom link.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("workshop-register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Helmet>
        <title>Free Workshop: Stop Being Invisible | Holy Webs</title>
        <meta
          name="description"
          content="Free live workshop for HVAC, plumbing & home service contractors. Learn the exact system to get found on Google and start generating calls."
        />
        <link rel="canonical" href="https://holywebs.com/workshop/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Stop Being Invisible: Free Live Training for Home Service Contractors",
          "description": "Free live workshop for HVAC, plumbing & home service contractors. Learn the 3-part local visibility system to get found on Google and generate more calls without paid ads.",
          "startDate": "2026-05-07T19:00:00Z",
          "endDate": "2026-05-07T20:30:00Z",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
          "location": { "@type": "VirtualLocation", "url": "https://holywebs.com/workshop" },
          "organizer": { "@type": "Organization", "name": "Holy Webs", "url": "https://holywebs.com" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://holywebs.com/workshop" },
          "image": "https://holywebs.com/og/og-seo.jpg"
        })}</script>
      </Helmet>

      <div className="bg-black text-white">
        {/* ── Section 1: Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(19_100%_62%/0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left column — copy */}
              <div className="text-center lg:text-left">
                <span className="inline-block text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-primary bg-white/5 border border-white/10 rounded-xl px-6 py-3 mb-8">
                  Free Live Training — May 7th, 2026
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
                  Stop Being<br />
                  <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                    Invisible
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed lg:mx-0 mx-auto">
                  The live training for HVAC, plumbing &amp; home service contractors who are tired of
                  losing jobs to competitors they should be beating.
                </p>

                {/* Event details */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-10 text-sm sm:text-base text-white/80">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" /> Thursday, May 7th, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> 2:00 PM Central
                  </span>
                  <span className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-primary" /> 90-Min Session
                  </span>
                  <span className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" /> Live on Zoom
                  </span>
                </div>

                {/* Countdown */}
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-5">
                  {[
                    { value: countdown.days, label: "Days" },
                    { value: countdown.hours, label: "Hours" },
                    { value: countdown.minutes, label: "Minutes" },
                    { value: countdown.seconds, label: "Seconds" },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="bg-white/5 border border-white/10 rounded-xl w-20 sm:w-24 py-4 text-center"
                    >
                      <span className="block text-3xl sm:text-4xl font-black text-primary tabular-nums">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 mt-1">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-white/70 text-center lg:text-left mt-8">
                  Trusted by home service contractors across Texas and South Carolina.
                </p>
              </div>

              {/* Right column — registration form */}
              <div id="workshop-register" className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
                <h2 className="text-2xl font-black text-center mb-2">
                  Register for Free
                </h2>
                <p className="text-white/50 text-center mb-8">Takes 30 seconds.</p>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">You're In!</h3>
                    <p className="text-white/60">
                      Check your email for a confirmation with your Zoom link.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white/60 mb-1.5">First Name *</label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/60 mb-1.5">Last Name</label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-1.5">Business Type *</label>
                      <select
                        required
                        value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Select your trade</option>
                        {businessTypes.map((t) => (
                          <option key={t} value={t} className="bg-black">{t}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                      {loading ? "Registering..." : "Save My Spot →"}
                    </button>
                    <p className="text-xs text-white/40 text-center">
                      You'll receive a confirmation email with your Zoom link immediately after
                      registering.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: What You'll Learn ── */}
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-14">
              What You'll Walk Away With
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {learnings.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-white/80 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Host Bio ── */}
        <section className="border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <img
                src={jeremyPhoto}
                alt="Jeremy Murphy, Founder of Holy Webs"
                className="w-52 h-52 sm:w-64 sm:h-64 rounded-full border-2 border-primary/40 object-cover shrink-0"
              />
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-1">Jeremy Murphy</h3>
                <p className="text-primary font-semibold mb-4">Founder, Holy Webs</p>
                <p className="text-white/70 text-lg leading-relaxed">
                  I've spent years helping HVAC, plumbing, and home service contractors get found
                  online and turn that visibility into real revenue. I'm not going to waste your time
                  with theory — this workshop is built around what's actually working right now in
                  local markets across Texas and South Carolina. Come ready to take notes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3.5: FAQ ── */}
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Common Questions</h2>
            <div className="max-w-3xl mx-auto divide-y divide-white/10">
              {[
                {
                  q: "Is this actually free?",
                  a: "Yes, completely free. No credit card, no upsell during the session. This is a live training where I share the exact systems we use with paying clients. My goal is to give you enough value that you want to work with us — but there's zero obligation."
                },
                {
                  q: "Do I need to be tech-savvy?",
                  a: "Not at all. This workshop is designed for business owners who run HVAC, plumbing, roofing, and home service companies — not marketers or tech people. If you can use your phone, you'll follow everything we cover."
                },
                {
                  q: "What if I can't make it live?",
                  a: "Register anyway and we'll send you the full replay. That said, live attendees get to ask questions in real time and receive a personalized action plan during the session."
                },
                {
                  q: "How long is it?",
                  a: "90 minutes. We cover a lot of ground, but every minute is practical — no fluff, no slides full of buzzwords."
                },
                {
                  q: "Will you try to sell me something?",
                  a: "I'll mention that Holy Webs offers done-for-you services at the end, but the first 85 minutes are pure teaching. If what I share resonates and you want help implementing it, great. If not, you still leave with an action plan."
                },
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Urgency Block ── */}
        <section className="bg-white/5 border-y border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-14 text-center">
            <AlertTriangle className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Space Is Limited — This Is a Live Interactive Session.
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              We keep this workshop small on purpose so every attendee gets real value. Register now
              to secure your spot — can't make it live? We'll send you the replay.
            </p>
          </div>
        </section>

        {/* ── Section 5: Bottom CTA ── */}
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Ready to Stop Losing Jobs<br className="hidden sm:block" /> to Inferior Competitors?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Register in 30 seconds — it's completely free and you'll get the replay if you can't attend live.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors"
            >
              Save My Spot →
            </button>
            <p className="text-white/30 text-sm mt-4">Thursday, May 7th · 2:00 PM Central · Live on Zoom · 90 Minutes</p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
