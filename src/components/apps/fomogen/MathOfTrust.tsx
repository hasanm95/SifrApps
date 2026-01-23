import { Section } from "@/components/common/Section";
import { Check, X } from "lucide-react";

const COMPARISON_DATA = [
  {
    feature: "Script Weight",
    legacy: "50KB+",
    fomogen: "2.1KB",
  },
  {
    feature: "Performance Impact",
    legacy: "High",
    fomogen: "Near-Zero",
  },
  {
    feature: "Mobile UX",
    legacy: "Clunky",
    fomogen: "Fluid",
  },
  {
    feature: "WCAG Compliance",
    legacy: "Partial",
    fomogen: "100%",
  },
  {
    feature: "Privacy",
    legacy: "Tracking",
    fomogen: "Zero Telemetry",
  },
];

export function MathOfTrust() {
  return (
    <Section className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase">
            The Data Speaks
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            The Math of Trust.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="p-6 text-sm font-black tracking-widest text-slate-500 uppercase">
                  Feature
                </th>
                <th className="p-6 text-sm font-black tracking-widest text-slate-400 uppercase">
                  Legacy Apps
                </th>
                <th className="bg-emerald-50/50 p-6 text-sm font-black tracking-widest text-emerald-700 uppercase">
                  FomoGen
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-50 last:border-0"
                >
                  <td className="p-6 text-sm font-bold text-slate-600">
                    {row.feature}
                  </td>
                  <td className="p-6 text-sm font-medium text-slate-400">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-slate-300" />
                      {row.legacy}
                    </div>
                  </td>
                  <td className="bg-emerald-50/30 p-6 text-sm font-black text-slate-900">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      {row.fomogen}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
