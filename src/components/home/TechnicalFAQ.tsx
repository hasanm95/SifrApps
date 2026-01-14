import { Section } from "@/components/common/Section";

export function TechnicalFAQ() {
  const faqs = [
    {
      question: "Is FomoGen accessible?",
      answer:
        "Yes, FomoGen is built on WCAG 2.1 guidelines to ensure radical inclusion for all users. We leverage semantic HTML and keyboard-navigable patterns by default.",
    },
    {
      question: "How does Sasswave optimize performance?",
      answer:
        "Sasswave apps are developed using mathematical optimization techniques to minimize JavaScript execution time. We prioritize critical rendering paths and maintain a sub-2.1KB payload for core utilities.",
    },
    {
      question: "Does Sasswave track user data?",
      answer:
        "No. Our zero-telemetry architecture ensures that we never log personal identifiers. We prioritize privacy-first engineering as a core technical requirement.",
    },
    {
      question: "What is the technical moat of Sasswave?",
      answer:
        "We don't build bloat. We build waves of efficiency through first-principles engineering and mathematical precision, ensuring maximum impact with minimum browser overhead.",
    },
  ];

  return (
    <Section className="border-t border-slate-100 bg-slate-50 py-24">
      <div className="section-container">
        <div className="mb-16">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
            Technical FAQ
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Engineered Clarity.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <h3 className="mb-4 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {faq.question}
              </h3>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
