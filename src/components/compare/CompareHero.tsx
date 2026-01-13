import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

interface CompareHeroProps {
  headline: string;
  subheadline: string;
}

export function CompareHero({ headline, subheadline }: CompareHeroProps) {
  return (
    <Section className="bg-iridescent border-b border-slate-100 pt-32 pb-20">
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-emerald-800 uppercase">
          Analytical Choice
        </span>
        <h1 className="text-display mb-8 max-w-5xl text-slate-900">
          {headline}
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          {subheadline}
        </p>
        <Button className="h-14 rounded-xl bg-slate-900 px-8 text-lg font-bold text-white hover:bg-slate-800">
          Make the Switch — Get Started Free
        </Button>
      </div>
    </Section>
  );
}
