import { Section } from "@/components/common/Section";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";

export function DisplayOptions() {
  return (
    <Section className="relative bg-[#FAFBFD] py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="mb-16 md:mb-20">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-600 uppercase">
            {FOMOGEN_DATA.displayOptions.subtitle}
          </span>
          <h2 className="text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
            Customization <span className="text-slate-300">Architecture.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {FOMOGEN_DATA.displayOptions.categories.map((category, idx) => (
            <div
              key={idx}
              className="glass-elite group rounded-[2rem] border border-white bg-white/60 p-8 backdrop-blur-md transition-all duration-500 hover:bg-white hover:shadow-2xl md:rounded-[2.5rem] md:p-10"
            >
              <h3 className="mb-6 text-xl font-bold tracking-tight text-slate-900 md:mb-8 md:text-2xl">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, iidx) => (
                  <li
                    key={iidx}
                    className="flex items-center gap-3 text-sm font-medium text-slate-600 md:text-base"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-sm shadow-green-100" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
