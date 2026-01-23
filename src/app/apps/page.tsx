import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/common";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/constants/home-data";
import { Section } from "@/components/common/Section";

export const metadata: Metadata = {
  title: "Our Apps | AppLass Ecosystem",
  description:
    "Explore our suite of logic-driven applications designed for elite performance and digital discipline.",
};

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-800 uppercase">
              AppLass Ecosystem
            </span>
            <h1 className="text-display mb-8 max-w-4xl text-slate-900">
              Our <span className="text-slate-300">Ecosystem.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
              Proprietary systems built with technical discipline and a focus on
              measurable impact. Every tool is a derivation of logic.
            </p>
          </div>
        </Section>

        <Section className="py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-[3rem] border border-slate-200 bg-white transition-all hover:border-blue-500/30 hover:shadow-2xl"
              >
                <div className="aspect-[16/9] bg-slate-50 p-12">
                  {/* Placeholder for screenshot */}
                  <div className="flex h-full w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 text-sm font-bold tracking-widest text-slate-300 uppercase">
                    {product.name} Interface
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-10 lg:p-12">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-blue-800 uppercase">
                      {product.platform}
                    </span>
                    <div className="flex gap-2">
                      {product.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-500"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="mb-4 text-4xl font-black text-slate-900">
                    {product.name}
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed font-medium text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <Button
                      asChild
                      className="h-14 w-full rounded-2xl bg-slate-900 text-lg font-bold text-white transition-all hover:bg-blue-600"
                    >
                      <Link
                        href={`/apps/${product.id === "mindful" ? "mindful-guard" : product.id}`}
                      >
                        View Product Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
