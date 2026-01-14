import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/common";
import { Section } from "@/components/common/Section";
import { comparisons } from "@/lib/compare";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Comparison Guides | Sasswave Analysis",
  description:
    "Logic-first product comparisons. Why elite teams choose Sasswave over legacy alternatives.",
};

export default function CompareIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-800 uppercase">
              Analytical Logic
            </span>
            <h1 className="text-display mb-8 max-w-4xl text-slate-900">
              Technical <span className="text-slate-300">Analysis.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
              Why elite teams are switching to our ecosystem. A cold,
              logic-first derivation of technical superiority.
            </p>
          </div>
        </Section>

        <Section className="py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group flex items-center justify-between rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 transition-all hover:border-blue-500/20 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <span className="mb-2 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    Product Comparison
                  </span>
                  <h2 className="text-3xl font-black text-slate-900">
                    {c.productName} <span className="text-slate-300">vs</span>{" "}
                    {c.competitorName}
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-24 rounded-[3rem] border border-slate-900 bg-slate-900 p-12 text-center text-white md:p-20">
            <h3 className="mb-8 text-4xl font-black md:text-5xl">
              Experience Logical Superiority.
            </h3>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-slate-400">
              Stop settling for technical debt. Switch to a foundation built on
              first principles.
            </p>
            <Link
              href="/apps"
              className="inline-flex h-16 items-center justify-center rounded-2xl bg-blue-600 px-12 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-blue-500"
            >
              Explore Ecosystem
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
