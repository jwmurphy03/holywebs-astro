import SectionWrapper from "../SectionWrapper";

export default function ProblemSection() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
          Most Local Businesses Are Invisible Online.{" "}
          <span className="text-primary">That's Not an Accident — It's a Fixable Problem.</span>
        </h2>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4 text-left">
          <p>
            Your customers are searching Google right now for exactly what you do. The question is whether they're finding you — or your competitor.
          </p>
          <p>
            Most local service businesses have a website. Very few have a digital presence that actually works. A working digital presence means your business shows up when it matters, looks trustworthy when people land on it, and makes it easy for them to call.
          </p>
          <p>
            When all three fire together, your phone rings consistently — not occasionally. That's what we build.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
