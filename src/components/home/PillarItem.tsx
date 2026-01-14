import * as Icons from "lucide-react";

export interface Pillar {
  title: string;
  label: string;
  description: string;
  iconName: string;
}

export function PillarItem({ pillar }: { pillar: Pillar }) {
  const Icon =
    (Icons[pillar.iconName as keyof typeof Icons] as Icons.LucideIcon) ||
    Icons.HelpCircle;

  return (
    <div className="tilt-card group flex flex-col items-start rounded-[2.5rem] border border-slate-100 bg-white p-12 shadow-sm transition-all duration-500 hover:border-blue-200/50 hover:shadow-2xl">
      <div className="mb-10 rounded-3xl border border-blue-100/50 bg-blue-50 p-5 text-blue-600 shadow-inner transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <span className="mb-3 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
        {pillar.label}
      </span>
      <h3 className="mb-6 text-3xl leading-tight font-black text-slate-900">
        {pillar.title}
      </h3>
      <p className="text-sm leading-relaxed font-semibold text-slate-500">
        {pillar.description}
      </p>
    </div>
  );
}
