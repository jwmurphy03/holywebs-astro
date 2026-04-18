import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const logoWhite = "/assets/logo-white.png";
const bookCover = "/assets/book-cover.png";
import {
  CheckCircle2,
  Star,
  ArrowRight,
  Eye,
  Search,
  Globe,
  MessageSquareText,
  ShieldCheck,
  Target,
  Zap,
  MapPin,
  BookOpen,
  Phone,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const chapters = [
  "Why most local businesses are invisible online (and don't know it)",
  "The three pillars of local visibility: Found, Trusted, Chosen",
  "How Google actually decides who shows up first",
  "Your Google Business Profile: the free tool most businesses ignore",
  "Getting reviews without begging, bribing, or being awkward",
  "What your website needs to do in the first five seconds",
  "Local SEO basics that don't require a marketing degree",
  "When to use Google Ads vs. SEO (and how to avoid wasting money on both)",
  "How to evaluate a marketing agency before you write a check",
  "The 90-day visibility plan you can start this week",
];

const bulletPoints = [
  {
    icon: Search,
    text: "Why your competitors keep showing up above you on Google, even when your work is better",
  },
  {
    icon: Globe,
    text: "The exact steps to claim and optimize your Google Business Profile so you show up in the Map Pack",
  },
  {
    icon: Star,
    text: "A simple, non-awkward system for getting more five-star reviews consistently",
  },
  {
    icon: Eye,
    text: "What your website must do in the first five seconds or visitors leave and call someone else",
  },
  {
    icon: Target,
    text: "How to tell if your marketing agency is actually delivering results or just sending reports",
  },
  {
    icon: Zap,
    text: "The difference between SEO and Google Ads, and when each one makes sense for your budget",
  },
  {
    icon: MessageSquareText,
    text: "Why most local business websites get traffic but zero phone calls, and how to fix it",
  },
  {
    icon: MapPin,
    text: "A 90-day visibility plan you can start this week without hiring anyone",
  },
];

const objections = [
  {
    q: "I'm not tech-savvy. Will I understand this?",
    a: "This book was written specifically for business owners, not marketers. No jargon, no fluff. If you can read a quote sheet, you can follow this book.",
  },
  {
    q: "I already have a website. Do I still need this?",
    a: "Having a website and having a website that generates calls are two very different things. This book shows you how to bridge that gap.",
  },
  {
    q: "Is this just a pitch for your agency?",
    a: "No. Every strategy in this book can be executed on your own. We do offer services for business owners who want help, but the book stands completely on its own.",
  },
  {
    q: "I don't have time to read a long book.",
    a: "It's designed to be read in a weekend. Short chapters, actionable steps, zero filler. Most readers finish it in two to three hours.",
  },
  {
    q: "Nineteen dollars? What's the catch?",
    a: "No catch. We priced it low enough that any business owner can afford it, because the real cost is staying invisible while your competitors take your jobs.",
  },
];

export default function BookSalesPage() {
  return (
    <>
      <Helmet>
        <title>Stop Being Invisible | The Book for Local Service Businesses</title>
        <meta
          name="description"
          content="The no-nonsense guide to getting found online, building trust fast, and winning more local jobs. Written for contractors, tradespeople, and local service businesses. Just $19."
        />
        <link rel="canonical" href="https://holywebs.com/book" />
      </Helmet>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[160px]" />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/90 font-medium">
                  New Book by Jeremy Murphy
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground leading-[1.08] mb-5">
                Stop Being{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))",
                  }}
                >
                  Invisible
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4 max-w-xl">
                The No-Nonsense Guide to Getting Found Online, Building Trust
                Fast, and Winning More Local&nbsp;Jobs.
              </p>

              <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
                Written for contractors, tradespeople, and local service business
                owners who are tired of watching competitors with worse work get
                more&nbsp;calls.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <Link
                  to="/book/checkout"
                  className="btn-primary text-lg !px-10 !py-4"
                >
                  Get the Book for $19 <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-1.5 text-white/50 text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Instant digital download</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/40 text-sm">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>
                <span>
                  Written by the founder of Holy Webs, a team that's helped
                  hundreds of local businesses get&nbsp;found.
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Reflective surface beneath the book */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[110%] h-24 bg-gradient-to-t from-transparent via-white/[0.07] to-white/[0.03] rounded-full blur-md" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-1 bg-white/10 rounded-full blur-sm" />
                <img
                  src={bookCover}
                  alt="Stop Being Invisible book cover"
                  className="relative w-72 md:w-80 lg:w-96 rounded-lg shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)]"
                  width={384}
                  height={614}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEM AGITATION ═══════════════ */}
      <section className="section-light py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 lg:px-8 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 text-center leading-tight">
            You Do Great Work.{" "}
            <span className="text-primary">
              So Why Is Your Phone Not&nbsp;Ringing?
            </span>
          </h2>

          <div className="text-muted-foreground text-lg leading-relaxed space-y-5">
            <p>
              You know your trade. You show up on time, do quality work, and
              treat your customers right. But when someone in your area searches
              Google for exactly what you do, they find your competitor instead.
            </p>
            <p>
              And it's not because that competitor is better. It's because
              they're more visible.
            </p>
            <p>
              Maybe you've tried paying for ads and didn't see results. Maybe you
              hired a marketing company that sent monthly reports full of numbers
              that meant nothing. Maybe you've got a website you paid good money
              for, and it just sits there collecting dust.
            </p>
            <p>
              You're not alone. Most local service businesses are leaving
              thousands of dollars on the table every month because their online
              presence isn't working. And the worst part? They don't even know
              it's happening.
            </p>
            <p className="text-foreground font-semibold text-xl">
              This book was written to change that.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ WHAT YOU'LL LEARN ═══════════════ */}
      <section className="section-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Here's What You'll Learn Inside
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every chapter is built around one question: what do you actually
              need to know to start getting more calls this&nbsp;month?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {bulletPoints.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fade}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background rounded-xl p-6 border border-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO THIS IS FOR ═══════════════ */}
      <section className="section-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-10 text-center">
              This Book Is For&nbsp;You&nbsp;If…
            </h2>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto">
              {[
                "You run an HVAC, plumbing, roofing, electrical, landscaping, or other local service business",
                "You've been relying on word of mouth and it's not enough anymore",
                "You have a website but it doesn't generate leads",
                "You've been burned by a marketing agency that over-promised",
                "You want to understand digital marketing well enough to make smart decisions",
                "You're ready to stop guessing and start building real visibility",
                "You're a CPA, bookkeeper, or professional service firm that needs more local clients",
                "You manage multiple locations and need a scalable marketing foundation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CHAPTER PREVIEW ═══════════════ */}
      <section className="section-dark py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-foreground mb-4">
              What's Inside the Book
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ten focused chapters. Zero filler. Every one ends with a clear
              action step you can take&nbsp;today.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {chapters.map((chapter, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fade}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg px-5 py-4"
              >
                <span className="text-primary font-extrabold text-lg leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/80 leading-relaxed">
                  {chapter}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT THE AUTHOR ═══════════════ */}
      <section className="section-light py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 lg:px-8 max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
            Who Wrote This?
          </h2>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-5 text-left">
            <p>
              Jeremy Murphy is the founder of{" "}
              <a
                href="https://holywebs.com"
                className="text-primary font-semibold hover:underline"
              >
                Holy Webs
              </a>
              , a digital marketing agency built specifically for local service
              businesses. His team has helped hundreds of contractors,
              tradespeople, and professional service firms get found online, earn
              trust, and turn clicks into&nbsp;calls.
            </p>
            <p>
              Before starting Holy Webs, Jeremy spent years working inside
              service businesses and saw the same pattern over and over: great
              companies doing great work, losing jobs to competitors who were
              simply more visible online.
            </p>
            <p>
              This book is everything he wishes he could sit down and tell every
              business owner he meets. No fluff, no upsell, no jargon. Just the
              truth about what it takes to stop being invisible.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ OBJECTION HANDLING ═══════════════ */}
      <section className="section-muted-v2 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              You Might Be Thinking…
            </h2>
          </motion.div>

          <div className="space-y-5">
            {objections.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fade}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background rounded-xl border border-border p-6"
              >
                <p className="font-bold text-foreground text-lg mb-2">
                  "{item.q}"
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RISK REVERSAL + VALUE STACK ═══════════════ */}
      <section className="section-light py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 lg:px-8 max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
            All of This for{" "}
            <span className="text-primary">Less Than a&nbsp;Coffee</span>
          </h2>

          <div className="text-muted-foreground text-lg leading-relaxed space-y-5 text-left mb-10">
            <p>
              Let's be honest. You've probably spent more than $19 on a lunch
              you don't remember. This book could change how your business
              shows up for the next decade.
            </p>
            <p>Inside you get:</p>
          </div>

          <div className="text-left space-y-3 max-w-lg mx-auto mb-10">
            {[
              "The complete Stop Being Invisible ebook (10 chapters)",
              "Actionable steps at the end of every chapter",
              "The 90-day visibility plan framework",
              "Access to reader-only templates and resources",
              "A clear understanding of what's working and what's wasting your money",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl border border-border p-8 max-w-md mx-auto">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold mb-2">
              Total Price
            </p>
            <p className="text-5xl font-extrabold text-foreground mb-1">$19</p>
            <p className="text-muted-foreground text-sm mb-6">
              Instant digital download. Read it today.
            </p>
            <Link
              to="/book/checkout"
              className="btn-primary w-full justify-center text-lg"
            >
              Get the Book Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section
        id="get-the-book"
        className="section-dark py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[180px]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Your Competitors Are Getting Found.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))",
              }}
            >
              It's Your&nbsp;Turn.
            </span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Every day you wait is another day your ideal customers are calling
            someone else. For $19, you can start changing that today.
          </p>

          <p className="text-white/40 text-base mb-10 max-w-xl mx-auto">
            This isn't theory. It's a step-by-step playbook written by someone
            who's helped hundreds of businesses like yours get found, get
            trusted, and get&nbsp;chosen.
          </p>

          <Link
            to="/book/checkout"
            className="btn-primary text-lg !px-12 !py-5 mb-6"
          >
            Get Stop Being Invisible for $19{" "}
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-white/30 text-sm">
            Instant digital download. Start reading in the next two&nbsp;minutes.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="section-dark py-10 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <a href="https://holywebs.com">
            <img
              src={logoWhite}
              alt="Holy Webs"
              className="h-8"
              width={160}
              height={32}
            />
          </a>
          <p>
            &copy; {new Date().getFullYear()} Holy Webs. All rights reserved.
          </p>
          <a
            href="https://holywebs.com"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            holywebs.com
          </a>
        </div>
      </footer>
    </>
  );
}
