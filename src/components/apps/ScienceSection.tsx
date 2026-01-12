import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";

export function ScienceSection() {
  return (
    <Section id="science" className="border-y border-slate-100/50 bg-white">
      <div className="flex flex-col items-center gap-20 lg:flex-row">
        <div className="flex-1">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase">
            First Principles
          </span>
          <h2 className="mb-8 text-5xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-6xl">
            The Science of
            <br />
            <span className="text-slate-400">Intentional Friction.</span>
          </h2>
          <p className="mb-10 text-xl leading-relaxed font-medium text-slate-500">
            {MINDFUL_GUARD_DATA.science.description}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-[#7C3AED]" />
              <p className="font-bold text-slate-900">
                Interrupt Reflexive Neuropathways
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500" />
              <p className="font-bold text-slate-900">Enable Cognitive Reset</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl flex-1">
          <div className="glass-elite relative aspect-square overflow-hidden rounded-[3rem] border border-slate-200/50 p-1 shadow-2xl">
            {/* Blueprint Decorative Overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="flex h-full w-full items-center justify-center rounded-[2.8rem] bg-[#FAFBFD] p-12">
              <div className="group relative flex h-full w-full items-center justify-center rounded-2xl border-2 border-dashed border-[#7C3AED]/20">
                {/* Intellectual Visualization Placeholder */}
                <div className="text-center transition-transform duration-700 group-hover:scale-105">
                  <div className="mb-6 text-6xl">∫</div>
                  <p className="text-[10px] font-black tracking-widest text-[#7C3AED] uppercase">
                    Optimization Logic
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="h-1.5 w-12 rounded-full bg-[#7C3AED]" />
                    <div className="h-1.5 w-6 rounded-full bg-slate-200" />
                  </div>
                </div>

                {/* Floating Nodes */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white font-black text-[#7C3AED] shadow-lg">
                  P1
                </div>
                <div className="absolute -right-4 -bottom-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white font-black text-emerald-500 shadow-lg">
                  P2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
