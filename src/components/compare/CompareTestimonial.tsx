import { Section } from "@/components/common/Section";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function CompareTestimonial({ quote, author, role }: TestimonialProps) {
  return (
    <Section className="bg-white py-24">
      <div className="section-container">
        <div className="relative mx-auto max-w-4xl rounded-[3rem] border border-emerald-100 bg-emerald-50 p-12 text-center md:p-20">
          <Quote className="absolute top-12 left-1/2 h-12 w-12 -translate-x-1/2 text-emerald-200" />
          <p className="relative z-10 mb-12 text-2xl leading-tight font-black text-slate-900 italic md:text-3xl">
            &quot;{quote}&quot;
          </p>
          <div className="flex flex-col items-center">
            <div className="mb-6 h-0.5 w-12 bg-emerald-500" />
            <p className="text-lg font-black text-slate-900">{author}</p>
            <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">
              {role}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
