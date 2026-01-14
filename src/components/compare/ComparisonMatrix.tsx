import { Section } from "@/components/common/Section";
import { Check } from "lucide-react";
import { ComparisonFeature } from "@/lib/compare";

interface ComparisonMatrixProps {
  competitorName: string;
  productName: string;
  features: ComparisonFeature[];
}

export function ComparisonMatrix({
  competitorName,
  productName,
  features,
}: ComparisonMatrixProps) {
  return (
    <Section className="bg-white py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900">
            Logical Superiority
          </h2>
          <p className="mt-4 font-medium text-slate-500">
            Quantifiable metrics don&apos;t lie. See the difference in
            architecture.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th
                  scope="col"
                  className="p-8 text-xs font-black tracking-widest text-slate-500 uppercase"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="p-8 text-xs font-black tracking-widest text-slate-500 uppercase"
                >
                  {competitorName}
                </th>
                <th
                  scope="col"
                  className="bg-blue-50/5 p-8 text-xs font-black tracking-widest text-blue-800 uppercase"
                >
                  {productName}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-50 transition-colors last:border-0 hover:bg-slate-50/50"
                >
                  <th
                    scope="row"
                    className="p-8 text-sm font-bold text-slate-600"
                  >
                    {feature.label}
                  </th>
                  <td className="p-8 text-sm font-medium text-slate-500">
                    {feature.competitorValue}
                  </td>
                  <td className="bg-blue-500/[0.02] p-8 text-sm font-black text-slate-900">
                    <div className="flex items-center gap-3">
                      <Check
                        className="h-4 w-4 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.sasswaveValue}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="mb-4 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                {feature.label}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between opacity-70">
                  <span className="text-xs font-bold text-slate-500">
                    {competitorName}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {feature.competitorValue}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-black text-blue-800">
                    {productName}
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    {feature.sasswaveValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
