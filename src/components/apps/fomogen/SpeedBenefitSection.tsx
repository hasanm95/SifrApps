import { Section } from "@/components/common/Section";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { Zap, AlertTriangle, ShieldCheck } from "lucide-react";

export function SpeedBenefitSection() {
  const { speedBenefit } = FOMOGEN_DATA;

  return (
    <Section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* Subtle Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-[10px] font-black tracking-widest text-red-600 uppercase">
              <AlertTriangle className="h-3 w-3" />
              Efficiency Warning
            </div>

            <h2 className="text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
              {speedBenefit.title}
            </h2>

            <p className="mt-8 text-xl leading-relaxed font-medium text-slate-500">
              {speedBenefit.body}
            </p>

            <div className="mt-10 rounded-2xl border border-red-100 bg-red-50/30 p-8 md:p-10">
              <p className="text-lg font-black text-red-700 italic">
                {speedBenefit.fact}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass-elite relative z-10 flex flex-col gap-6 rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    The Struggle
                  </h4>
                  <p className="mt-2 font-medium text-slate-500">
                    {speedBenefit.struggle}
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-slate-100" />

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    The Solution
                  </h4>
                  <p className="mt-2 font-medium text-green-700 text-slate-500">
                    {speedBenefit.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Pulse */}
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/30 blur-3xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}
