import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { Check } from "lucide-react";

export function FomoGenCTA() {
  return (
    <Section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[800px] w-[1400px] -translate-x-1/2 opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #21C45D 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-[10px] font-black tracking-widest text-green-700 uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          {FOMOGEN_DATA.cta.subtitle}
        </div>

        <h2 className="text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-8xl">
          {FOMOGEN_DATA.cta.title.split(" ").slice(0, 3).join(" ")} <br />
          <span className="text-slate-300">
            {FOMOGEN_DATA.cta.title.split(" ").slice(3).join(" ")}
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
          {FOMOGEN_DATA.cta.description}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-20 md:gap-6">
          {FOMOGEN_DATA.cta.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-full border border-green-100 bg-green-50/50 px-4 py-1.5 text-xs font-bold text-green-900 shadow-sm backdrop-blur-md md:px-6 md:py-2 md:text-sm"
            >
              <Check className="h-3.5 w-3.5 text-green-600 md:h-4 md:w-4" />
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <Button
            size="lg"
            className="h-16 rounded-2xl bg-[#131111] px-12 text-lg font-bold text-white shadow-2xl shadow-slate-200 transition-all duration-500 hover:scale-110 hover:bg-black active:scale-95 md:h-20 md:rounded-[2rem] md:px-16 md:text-xl"
            asChild
          >
            <a href={FOMOGEN_DATA.cta.shopifyUrl}>
              {FOMOGEN_DATA.cta.primaryCTA}
            </a>
          </Button>

          <p className="mt-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
            No Credit Card Required • Beta Access
          </p>
        </div>
      </div>
    </Section>
  );
}
