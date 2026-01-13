import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FOMOgen | Social Proof for Modern Shopify Brands",
  description:
    "Lightweight, high-conversion tools for direct-to-consumer brands that prioritize speed over flashy bloat.",
};

export default function FomogenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-emerald-800 uppercase">
              Shopify Ecosystem
            </span>
            <h1 className="text-display mb-8 max-w-4xl text-slate-900">
              FOMO<span className="text-slate-300">gen.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
              Sales simplified through social proof automation. Lightweight,
              logical, and conversion-focused.
            </p>
            <div className="mt-12">
              <Button
                size="lg"
                className="h-16 rounded-2xl bg-slate-900 px-12 text-lg font-bold text-white transition-all hover:bg-emerald-600"
              >
                Optimize My Store
              </Button>
            </div>
          </div>
        </Section>

        <Section className="py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-4xl font-black text-slate-900">
              Conversion Engineering.
            </h2>
            <p className="text-xl leading-relaxed font-medium text-slate-600">
              FOMOgen was built to solve the technical debt that slows down
              growth. Instead of heavy scripts, we provide a micro-second
              optimized solution that builds trust without compromising
              performance.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
