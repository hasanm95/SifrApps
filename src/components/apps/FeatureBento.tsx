import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";
import * as Icons from "lucide-react";

export function FeatureBento() {
  return (
    <Section id="features" className="bg-[#FAFBFD]">
      <div className="mb-20">
        <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase">
          Core Systems
        </span>
        <h2 className="text-5xl leading-[0.9] font-bold tracking-tight text-slate-900 md:text-7xl">
          Precision Built.
          <br />
          <span className="text-slate-300">No Compromise.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {MINDFUL_GUARD_DATA.features.map((feature, idx) => {
          const Icon =
            (Icons[
              feature.iconName as keyof typeof Icons
            ] as Icons.LucideIcon) || Icons.HelpCircle;
          return (
            <div
              key={idx}
              className="glass-elite group rounded-[2.5rem] border border-slate-200/20 bg-white p-10 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-100 bg-purple-50 transition-colors duration-500 group-hover:bg-[#7C3AED] group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
                {feature.title}
              </h3>
              <p className="leading-relaxed font-medium text-slate-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
