
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay — solid left/top fading to semi-transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 40%, rgba(15,23,42,0.65) 100%)",
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-white/90 font-medium">4.9 Stars · 73 Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground leading-[1.1] mb-6">
            Stop{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))",
              }}
            >
              Hiding
            </span>{" "}
            From the People Who Need You.
          </h1>

          <p className="text-primary font-semibold text-lg md:text-xl mb-4">
            Digital Marketing & SEO for Local Service Businesses
          </p>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Your customers are searching for exactly what you offer. We make sure they find you first, trust you immediately, and call you instead of your competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="btn-primary text-base">
              Let's Talk
            </a>
            <a
              href="/resources/free-visibility-audit"
              className="btn-outline-light text-base"
            >
              Get a Free Visibility Audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
