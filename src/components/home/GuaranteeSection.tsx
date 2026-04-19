export default function GuaranteeSection() {
  return (
    <section className="section-dark relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">

        {/* Statement headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground leading-tight mb-8">
          No Results.{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))" }}
          >
            No Reason
          </span>{" "}
          To Stay.
        </h2>

        {/* Supporting copy */}
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Month-to-month, always. No 12-month lock-ins, no cancellation fees,
          no long-term contracts. If we're not moving the needle, you
          shouldn't have to stay — and we're confident enough in our work
          that we've never needed to trap anyone into a contract to keep them.
        </p>

        {/* CTA */}
        <a href="/contact" className="btn-primary text-base">
          Let's Talk →
        </a>

      </div>
    </section>
  );
}
