import SectionWrapper from "./SectionWrapper";

interface AnswerSummaryItem {
  question: string;
  answer: string;
}

interface AnswerSummaryProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: AnswerSummaryItem[];
  variant?: "light" | "muted" | "muted-v2" | "muted-v3" | "muted-v4" | "dark";
}

export default function AnswerSummary({
  eyebrow = "Quick Answers",
  heading,
  intro,
  items,
  variant = "light",
}: AnswerSummaryProps) {
  return (
    <SectionWrapper variant={variant}>
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm text-center">
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          {heading}
        </h2>
        {intro && (
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            {intro}
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => (
            <article key={item.question} className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
