import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";
import * as Icons from "lucide-react";

export function DifferentiatorsSection() {
  return (
    <Section id="differentiators" className="bg-[#FAFBFD]">
      <div className="mb-20">
        <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase">
          The Moat
        </span>
        <h2 className="text-4xl leading-[0.9] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
          Technical Advantages.
          <br />
          <span className="text-slate-300">No Fluff.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {MINDFUL_GUARD_DATA.differentiators.map((feature, idx) => {
          const Icon =
            (Icons[
              feature.iconName as keyof typeof Icons
            ] as Icons.LucideIcon) || Icons.HelpCircle;
          return (
            <div
              key={idx}
              className="glass-elite group rounded-[2.5rem] border border-slate-200/20 bg-white p-10 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-100 bg-purple-50 text-3xl transition-colors duration-500 group-hover:bg-[#7C3AED] group-hover:text-white">
                {feature.icon ? (
                  <span className="group-hover:hidden">{feature.icon}</span>
                ) : null}
                <Icon className="hidden h-8 w-8 group-hover:block" />
                {!feature.icon && (
                  <Icon className="h-8 w-8 group-hover:hidden" />
                )}
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
