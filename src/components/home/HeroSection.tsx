import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden" style={{ background: "#08101f" }}>

      {/* Radial glow — orange from top-left behind headline, cool blue from bottom-right for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 70% at 80% 90%, rgba(30, 58, 138, 0.35) 0%, transparent 65%)
          `,
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-36">
        <div className="hero-fade-in max-w-3xl">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-white/90 font-medium">4.9 on Google · 200+ Home Service Operators</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
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
        </div>
      </div>
    </section>
  );
}
