import { Section } from "@/components/common/Section";
import { SOLUTIONS } from "@/constants/home-data";
import { SolutionItem } from "./SolutionItem";

export function SolutionsSection() {
  return (
    <Section
      id="solutions"
      className="diagonal-stripe perspective-1000 border-y border-slate-100/50 bg-[#FFFFFF] pb-24"
    >
      <div className="mb-24 flex flex-col items-start gap-16 md:mb-32 md:flex-row">
        <div className="flex-1">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase">
            Execution Vectors
          </span>
          <h2 className="text-5xl leading-[0.9] font-bold tracking-tight text-slate-900 md:text-7xl">
            Logical
            <br />
            <span className="text-slate-300">Solutions.</span>
          </h2>
        </div>
        <div className="flex-1 pt-8 md:pt-16">
          <p className="text-xl leading-tight font-medium text-balance text-slate-500 md:text-2xl">
            We don't just build features; we engineer{" "}
            <span className="border-b-2 border-emerald-500/30 text-slate-900">
              systemic improvements
            </span>{" "}
            that solve core business logic bottlenecks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {SOLUTIONS.map((solution, index) => (
          <SolutionItem key={index} solution={solution} />
        ))}
      </div>
    </Section>
  );
}
