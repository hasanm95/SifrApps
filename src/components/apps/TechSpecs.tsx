import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";

export function TechSpecs() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
            Technical Integrity
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Elite Performance Specs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-100 shadow-xl md:grid-cols-2">
          {MINDFUL_GUARD_DATA.specs.map((spec, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between bg-white p-8 transition-colors hover:bg-slate-50"
            >
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                {spec.label}
              </span>
              <span className="text-lg font-black text-slate-900 transition-colors group-hover:text-[#7C3AED]">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-medium text-slate-400 italic">
          * Verified on native Android systems for minimum power consumption.
        </p>
      </div>
    </Section>
  );
}
