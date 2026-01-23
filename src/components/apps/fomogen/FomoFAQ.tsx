"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "How does FomoGen affect my Shopify store speed?",
    answer:
      "FomoGen is built with mathematical optimization to ensure a sub-2.1KB payload. This makes it the lightest social proof app on the market, ensuring zero impact on your Google PageSpeed Insights score.",
  },
  {
    question: "Is FomoGen ADA and WCAG compliant?",
    answer:
      "Yes. Unlike many apps that use non-semantic overlays, FomoGen is engineered for radical accessibility, meeting WCAG 2.1 standards for inclusive e-commerce.",
  },
  {
    question: "Does FomoGen track my customers?",
    answer:
      "No. FomoGen operates with zero telemetry. We don't store cookies or track personal data. Privacy is not a feature—it's our architecture.",
  },
  {
    question: "Can I customize the notification design?",
    answer:
      "Absolutely. FomoGen provides a clean, high-contrast default design, but you can customize colors, positions, and animations to match your brand.",
  },
];

export function FomoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="border-t border-slate-100 bg-[#FAFBFD] py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Frequently Asked Questions about Shopify Social Proof
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="border-b border-slate-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-bold text-slate-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-slate-400 transition-transform",
                    openIndex === idx && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === idx ? "max-h-96 pb-6" : "max-h-0"
                )}
              >
                <p className="text-lg leading-relaxed font-medium text-slate-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
