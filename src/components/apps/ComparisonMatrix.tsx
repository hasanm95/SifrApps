import { Section } from "@/components/common/Section";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";
import { Check, X, Minus } from "lucide-react";

export function ComparisonMatrix() {
  const { comparison } = MINDFUL_GUARD_DATA;

  const getIndicator = (value: string, isMindfulGuard: boolean) => {
    if (isMindfulGuard) {
      return (
        <span className="flex items-center gap-2 font-bold text-[#7C3AED]">
          <Check className="h-5 w-5" />
          {value}
        </span>
      );
    }
    if (value.includes("High") || value.includes("$99")) {
      return (
        <span className="flex items-center gap-2 text-red-500">
          <X className="h-5 w-5" />
          {value}
        </span>
      );
    }
    return (
      <span className="flex items-center gap-2 text-slate-500">
        <Minus className="h-5 w-5" />
        {value}
      </span>
    );
  };

  return (
    <Section id="comparison" className="bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase">
            Competitive Analysis
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            {comparison.title}
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-6 text-left text-sm font-bold tracking-wider text-slate-500 uppercase">
                  Specification
                </th>
                <th className="bg-[#7C3AED]/5 p-6 text-left text-sm font-bold tracking-wider text-[#7C3AED] uppercase">
                  MindfulGuard
                </th>
                <th className="p-6 text-left text-sm font-bold tracking-wider text-slate-500 uppercase">
                  Opal
                </th>
                <th className="p-6 text-left text-sm font-bold tracking-wider text-slate-500 uppercase">
                  Freedom
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.specs.map((spec, idx) => (
                <tr
                  key={idx}
                  className="border-t border-slate-100 transition-colors hover:bg-slate-50"
                >
                  <td className="p-6 font-bold text-slate-900">{spec.label}</td>
                  <td className="bg-[#7C3AED]/5 p-6">
                    {getIndicator(spec.mindfulGuard, true)}
                  </td>
                  <td className="p-6">{getIndicator(spec.opal, false)}</td>
                  <td className="p-6">{getIndicator(spec.freedom, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 md:hidden">
          {comparison.specs.map((spec, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="border-b border-slate-100 bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">{spec.label}</h4>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="flex items-center justify-between bg-[#7C3AED]/5 p-4">
                  <span className="text-sm font-bold text-[#7C3AED]">
                    MindfulGuard
                  </span>
                  {getIndicator(spec.mindfulGuard, true)}
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-slate-500">Opal</span>
                  {getIndicator(spec.opal, false)}
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-slate-500">Freedom</span>
                  {getIndicator(spec.freedom, false)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
