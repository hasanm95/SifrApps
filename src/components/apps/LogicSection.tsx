import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";

export function LogicSection() {
  return (
    <Section id="logic" className="border-y border-slate-100/50 bg-white">
      <div className="flex flex-col items-center gap-20 lg:flex-row">
        <div className="flex-1">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase">
            The Logic
          </span>
          <h2 className="mb-8 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {MINDFUL_GUARD_DATA.logic.title}
          </h2>
          <p className="mb-10 text-xl leading-relaxed font-medium text-slate-500">
            {MINDFUL_GUARD_DATA.logic.description}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-[#7C3AED]" />
              <p className="font-bold text-slate-900">
                Intercepts Distractions at System Level
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
              <p className="font-bold text-slate-900">
                Depletes Zero Willpower
              </p>
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
              {/* Split Visual Concept */}
              <div className="flex h-full w-full gap-4 overflow-hidden rounded-2xl">
                {/* Left: Chaotic Doomscrolling */}
                <div className="relative flex flex-1 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/20 p-6">
                  <div className="mb-4 text-5xl opacity-60">📱</div>
                  <div className="space-y-2">
                    <div className="h-2 w-16 animate-pulse rounded-full bg-red-300/50" />
                    <div className="h-2 w-12 animate-pulse rounded-full bg-red-300/40 delay-100" />
                    <div className="h-2 w-14 animate-pulse rounded-full bg-red-300/30 delay-200" />
                  </div>
                  <p className="mt-4 text-[9px] font-black tracking-widest text-red-600/70 uppercase">
                    Doomscrolling
                  </p>
                </div>

                {/* Right: Calm Deep Work */}
                <div className="relative flex flex-1 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED]/5 to-[#7C3AED]/15 p-6">
                  <div className="mb-4 text-5xl">🧠</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED]/20">
                    <div className="h-4 w-4 rounded-full bg-[#7C3AED]" />
                  </div>
                  <p className="mt-4 text-[9px] font-black tracking-widest text-[#7C3AED] uppercase">
                    Deep Work: Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
