import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { Section } from "@/components/common/Section";
import { PILLARS } from "@/constants/home-data";
import { Zap, Calculator, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About | The Sifr Methodology",
  description:
    "Founder-led development derived from first principles. Mathematical integrity meets high-end digital craft.",
};

const iconMap = {
  Zap: Zap,
  Calculator: Calculator,
  Globe: Globe,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-emerald-800 uppercase">
              Our Methodology
            </span>
            <h1 className="text-display mb-8 max-w-4xl text-slate-900">
              The <span className="text-slate-300">Methodology.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
              Founder-led development where mathematical integrity meets
              high-end digital craft. We build from zero-trust and first
              principles to ensure your software is elite.
            </p>
          </div>
        </Section>

        <Section className="py-24">
          <div className="mb-24 flex flex-col items-start gap-16 md:flex-row">
            <div className="flex-1">
              <h2 className="text-5xl font-black text-slate-900">
                Built Different by Logic.
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed font-medium text-slate-600">
                SifrApps was founded on the belief that software should be a
                derivation of logical truth. We avoid the
                &quot;feature-first&quot; trap and focus on systemic integrity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {PILLARS.map((pillar, idx) => {
              const Icon = iconMap[pillar.iconName as keyof typeof iconMap];
              return (
                <div
                  key={idx}
                  className="group rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12 transition-all hover:border-emerald-500/20"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={32} />
                  </div>
                  <span className="mb-4 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    {pillar.label}
                  </span>
                  <h3 className="mb-6 text-2xl font-black text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
