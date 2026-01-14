import { Section } from "@/components/common/Section";

export function BlogHero() {
  return (
    <Section className="bg-white pt-16 pb-12">
      <div className="flex flex-col items-center text-center">
        <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
          The Logic Lab
        </span>
        <h1 className="text-display mb-8 text-slate-900">
          Insights for the
          <br />
          <span className="text-slate-300">Modern Engineer.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Deep dives into software engineering, mathematics, and digital
          productivity. We explore the systems that drive successful founders.
        </p>
      </div>
    </Section>
  );
}
