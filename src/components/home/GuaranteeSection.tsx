export default function GuaranteeSection() {
  return (
    <section className="section-dark relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">

        {/* Big stacked statement */}
        <div className="mb-10 lg:mb-12">
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-[-0.03em] uppercase">
            No Results.
          </p>
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-[-0.03em] uppercase bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))" }}
          >
            No Reason
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-[-0.03em] uppercase">
            To Stay.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        {/* Supporting copy + CTA */}
        <div className="flex flex-col sm:flex-row items-start gap-8 max-w-3xl">
          <p className="text-white/70 text-lg leading-relaxed flex-1">
            Month-to-month, always. No 12-month lock-ins, no cancellation fees,
            no long-term contracts. If we're not moving the needle, you
            shouldn't have to stay — and we're confident enough in our work
            that we've never needed to trap anyone into a contract to keep them.
          </p>
          <div className="flex-shrink-0">
            <a href="/contact" className="btn-primary text-base whitespace-nowrap">
              Let's Talk →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
