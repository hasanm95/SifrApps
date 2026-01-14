import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

export interface Solution {
  title: string;
  description: string;
  iconName: string;
}

export function SolutionItem({ solution }: { solution: Solution }) {
  const Icon =
    (Icons[solution.iconName as keyof typeof Icons] as Icons.LucideIcon) ||
    Icons.HelpCircle;

  return (
    <div className="tilt-card glass-elite group rounded-[2.5rem] border border-slate-200/20 p-10 shadow-xl transition-all duration-500 hover:shadow-2xl">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
        {solution.title}
      </h3>
      <p className="mb-6 leading-relaxed font-medium text-slate-500">
        {solution.description}
      </p>

      <div className="relative h-px w-full overflow-hidden bg-slate-100">
        <div className="absolute top-0 left-0 h-full w-full -translate-x-full bg-blue-600 transition-transform duration-700 ease-in-out group-hover:translate-x-0" />
      </div>
    </div>
  );
}
