import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";

export function FAQSection() {
  return (
    <Section id="faq" className="border-t border-slate-100/50 bg-[#FAFBFD]">
      <div className="mb-20 text-center">
        <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase">
          Engineered FAQ
        </span>
        <h3 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Technical Clarifications
        </h3>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {MINDFUL_GUARD_DATA.faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
          >
            <h4 className="mb-4 text-lg font-bold text-slate-900">
              {faq.question}
            </h4>
            <p className="leading-relaxed font-medium text-slate-500">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* FAQ Schema for SEO - AI Snippet Bait */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: MINDFUL_GUARD_DATA.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </Section>
  );
}
