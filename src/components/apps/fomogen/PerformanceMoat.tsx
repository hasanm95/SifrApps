import { Section } from "@/components/common/Section";
import { Zap, ShieldCheck, Eye } from "lucide-react";

const MOAT_ITEMS = [
  {
    icon: Zap,
    title: "Logic Over Bloat",
    description:
      "Built by a math-led engineering team. Our scripts are 90% lighter than legacy social proof apps.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Main-Thread Blocking",
    description:
      "We use asynchronous, non-blocking logic to ensure your store's interactive elements never lag.",
  },
  {
    icon: Eye,
    title: "Radical Accessibility",
    description:
      "Fully WCAG 2.1 compliant. Every notification is screen-reader friendly and high-contrast by design.",
  },
];

export function PerformanceMoat() {
  return (
    <Section className="border-t border-slate-100 bg-[#FAFBFD] py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Why FomoGen Wins on Every Metric.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-medium text-slate-500">
            Performance isn&apos;t a feature. It&apos;s the foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {MOAT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-[2rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/30 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h3 className="mb-4 text-xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed font-medium text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
