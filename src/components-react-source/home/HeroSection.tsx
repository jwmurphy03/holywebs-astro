import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Search, Star } from "lucide-react";

export default function HeroSection() {
  const proofPoints = [
    { icon: MapPin, label: "Google Maps visibility" },
    { icon: Search, label: "Local SEO + paid search" },
    { icon: PhoneCall, label: "Booked-job websites" },
  ];

  return (
    <section className="section-dark relative overflow-hidden">
      <img
        src="/assets/blog/roofing-not-showing-google-thumb.jpg"
        alt=""
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-35 mix-blend-luminosity lg:w-[58%] lg:opacity-50"
        loading="eager"
        decoding="async"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, #08101f 0%, rgba(8, 16, 31, 0.96) 42%, rgba(8, 16, 31, 0.66) 68%, rgba(8, 16, 31, 0.86) 100%),
            linear-gradient(180deg, rgba(8, 16, 31, 0.72) 0%, rgba(8, 16, 31, 0.44) 48%, rgba(8, 16, 31, 0.92) 100%)
          `,
        }}
      />

      {/* Film grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 md:py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Social proof badge */}
          <div className="inline-flex max-w-full items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-full px-4 py-2 mb-5">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-white/90 font-medium leading-snug">Home service marketing for contractors, trades, and local operators</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground leading-[1.05] mb-5 max-w-3xl">
            More Calls From Homeowners Who Are{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))",
              }}
            >
              Ready to Hire.
            </span>
          </h1>

          <p className="text-primary font-semibold text-lg md:text-xl mb-4">
            Home Services Digital Marketing, SEO & Lead Generation
          </p>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-6 leading-relaxed">
            Holy Webs helps HVAC, plumbing, roofing, electrical, landscaping, and other service companies show up in Google, earn trust fast, and turn local searches into booked jobs.
          </p>

          <div className="grid gap-3 sm:grid-cols-3 max-w-3xl mb-6">
            {proofPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
                <point.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-white/85">{point.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-base">
              Talk About My Market
            </Link>
            <Link
              to="/resources/free-visibility-audit"
              className="btn-outline-light text-base"
            >
              Get a Free Visibility Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
