import { Section } from "@/components/common/Section";
import { X, Zap } from "lucide-react";

interface Way {
  title: string;
  points: string[];
}

interface TechnicalDebtProps {
  legacy: Way;
  sifr: Way;
}

export function TechnicalDebt({ legacy, sifr }: TechnicalDebtProps) {
  return (
    <Section className="bg-white py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-200 shadow-xl lg:grid-cols-2">
          {/* Legacy Column */}
          <div className="bg-white p-12 lg:p-20">
            <h3 className="mb-12 text-sm font-black tracking-[0.2em] text-slate-400 uppercase">
              The Legacy Way
            </h3>
            <ul className="space-y-8">
              {legacy.points.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <X className="h-5 w-5 font-bold text-slate-300" />
                  </div>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Sifr Column */}
          <div className="relative overflow-hidden bg-slate-50 p-12 lg:p-20">
            <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

            <h3 className="mb-12 text-sm font-black tracking-[0.2em] text-emerald-600 uppercase">
              The Sifr Way
            </h3>
            <ul className="relative z-10 space-y-8">
              {sifr.points.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Zap className="h-5 w-5 fill-emerald-500 text-emerald-600" />
                  </div>
                  <p className="text-lg leading-relaxed font-black text-slate-900">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
