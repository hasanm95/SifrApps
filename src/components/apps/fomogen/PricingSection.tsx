import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <Section className="relative bg-white py-24 md:py-32">
      {/* Background Vignette */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-full bg-gradient-to-t from-green-50/50 to-transparent" />

      <div className="section-container relative z-10">
        <div className="mb-16 text-center md:mb-20">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-600 uppercase">
            {FOMOGEN_DATA.pricing.subtitle}
          </span>
          <h2 className="mb-10 text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-8xl">
            Logical <span className="text-slate-300">Pricing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {FOMOGEN_DATA.pricing.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-elite group relative flex flex-col rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:rounded-[2.5rem] md:p-10 ${
                tier.highlighted
                  ? "border-green-400 bg-white shadow-[0_40px_100px_-20px_rgba(33,196,93,0.1)] ring-4 ring-green-50"
                  : "border-white/40 bg-white/40 shadow-xl backdrop-blur-md"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-6 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-lg shadow-green-100">
                  Proprietary
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {tier.description}
                </p>
              </div>

              <div className="mb-10">
                <span className="text-4xl font-black text-slate-900 md:text-5xl">
                  {tier.price}
                </span>
                <span className="ml-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  {tier.period}
                </span>
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`h-14 w-full rounded-xl text-base font-bold transition-all duration-300 active:scale-95 md:h-16 md:rounded-2xl md:text-lg ${
                  tier.highlighted
                    ? "bg-[#131111] text-white shadow-xl shadow-slate-200 hover:bg-black"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
                asChild
              >
                <a href={FOMOGEN_DATA.cta.shopifyUrl}>{tier.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
