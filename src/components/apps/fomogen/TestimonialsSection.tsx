import { Section } from "@/components/common/Section";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <Section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      {/* Dark theme accents */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] bg-green-500/10 blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="mb-20 text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-500 uppercase">
            Social Proof
          </span>
          <h2 className="text-4xl leading-[0.95] font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
            Trusted by <br />
            <span className="font-italic text-slate-500">Smart Merchants.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">
          {FOMOGEN_DATA.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:border-green-500/30 hover:bg-white/[0.07] md:p-12"
            >
              <Quote className="absolute top-10 right-10 h-12 w-12 text-green-500/20" />

              <p className="relative z-10 text-2xl leading-relaxed font-medium text-slate-200 lg:text-3xl">
                &quot;{t.quote}&quot;
              </p>

              <div className="mt-12">
                <p className="text-sm font-black tracking-widest text-green-500 uppercase">
                  {t.author}
                </p>
                <p className="mt-1 text-xs font-bold tracking-widest text-slate-500 uppercase">
                  {t.niche}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-slate-600 uppercase">
            Join 5,000+ Shopify Brands using AppLass tools.
          </p>
        </div>
      </div>
    </Section>
  );
}
