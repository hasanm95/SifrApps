import { Section } from "@/components/common/Section";
import { PILLARS } from "@/constants/home-data";
import { PillarItem } from "./PillarItem";

export function FoundersMoat() {
  return (
    <Section
      id="about"
      className="perspective-1000 relative overflow-visible bg-[#FAFBFD]"
    >
      {/* Elite Background Decorative Grid */}
      <div
        className="mask-radial pointer-events-none absolute inset-x-0 top-0 h-96 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mb-24 flex flex-col items-end gap-12 md:mb-32 md:flex-row">
        <div className="flex-1">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
            Internal Architecture
          </span>
          <h2 className="text-5xl leading-tight font-black tracking-tight text-slate-900 md:text-6xl">
            Built Different by{" "}
            <span className="text-slate-300 italic">Logic.</span>
          </h2>
        </div>
        <div className="max-w-sm flex-none">
          <p className="border-l-4 border-blue-600/20 pl-6 text-lg leading-relaxed font-medium text-slate-500 italic">
            &quot;AppLass apps are developed using mathematical optimization
            techniques to minimize JavaScript execution time.&quot; We engineer
            waves of efficiency through first-principles.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-3">
        {PILLARS.map((pillar, index) => (
          <PillarItem key={index} pillar={pillar} />
        ))}
      </div>
    </Section>
  );
}
