import { Section } from "@/components/common/Section";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import * as Icons from "lucide-react";

export function CoreFeatures() {
  return (
    <Section id="features" className="relative bg-white py-24 md:py-32">
      {/* Background Glows for Depth */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-green-50/50 blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="mb-16 md:mb-20">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-600 uppercase">
            Proprietary Systems
          </span>
          <h2 className="mb-10 text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-8xl">
            Precision Built.
            <br />
            <span className="text-slate-300">Driven by Logic.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {FOMOGEN_DATA.features.map((feature, idx) => {
            const Icon =
              (Icons[
                feature.iconName as keyof typeof Icons
              ] as Icons.LucideIcon) || Icons.HelpCircle;
            return (
              <div
                key={idx}
                className="glass-elite group tilt-card rounded-[2.5rem] border border-white/40 bg-white/40 p-8 shadow-[0_20px_50px_-10px_rgba(33,196,93,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(33,196,93,0.1)] md:rounded-[3rem] md:p-10"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-green-600 transition-all duration-500 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-100 md:h-16 md:w-16">
                  <Icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>

                <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed font-medium text-slate-500 md:text-base">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
