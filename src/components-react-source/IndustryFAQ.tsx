import SectionWrapper from "@/components/SectionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryFAQProps {
  faqs: FAQ[];
  headline?: string;
  subheadline?: string;
  canonicalUrl: string;
  variant?: "light" | "muted" | "dark";
}

export default function IndustryFAQ({ faqs, headline = "Frequently Asked Questions", subheadline, canonicalUrl, variant = "light" }: IndustryFAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SectionWrapper variant={variant}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
              {subheadline}
            </p>
          )}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground font-semibold text-base hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
