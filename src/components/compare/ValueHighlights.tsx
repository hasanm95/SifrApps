import { Section } from "@/components/common/Section";
import { TrendingUp, UserRoundCheck, ShieldCheck } from "lucide-react";

export function ValueHighlights() {
  const cards = [
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      title: "SEO Impact",
      desc: "Faster load times and clean semantic HTML lead to better Google rankings and higher organic visibility.",
    },
    {
      icon: <UserRoundCheck className="h-8 w-8 text-emerald-600" />,
      title: "Conversion Impact",
      desc: "Higher accessibility (WCAG 2.1) means your logic doesn't exclude 20% of the world's population.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
      title: "Integrity First",
      desc: "Your data stays yours. Zero-telemetry architecture means we never log personal identifiers.",
    },
  ];

  return (
    <Section className="bg-white py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200 bg-white p-10 transition-all hover:border-emerald-500/30"
            >
              <div className="mb-8 w-fit rounded-2xl bg-emerald-500/10 p-4 transition-colors group-hover:bg-emerald-500/20">
                {/* Clone elements to add aria-hidden */}
                {Object.assign({}, card.icon, {
                  props: { ...card.icon.props, "aria-hidden": true },
                })}
              </div>
              <h4 className="mb-4 text-xl font-black text-slate-900">
                {card.title}
              </h4>
              <p className="leading-relaxed font-medium text-slate-600">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
