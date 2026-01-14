import { Section } from "@/components/common/Section";
import { PRODUCTS } from "@/constants/home-data";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <Section id="apps" className="bg-white">
      <div className="mb-16 flex flex-col items-end justify-between gap-8 md:mb-24 md:flex-row">
        <div className="max-w-2xl">
          <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
            Product Ecosystem
          </span>
          <h2 className="text-5xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-6xl">
            Engineered for
            <br />
            <span className="text-slate-400italic">Performance</span>
          </h2>
        </div>
        <p className="max-w-md text-xl leading-relaxed font-medium text-slate-500">
          Proprietary systems built with technical discipline and a focus on
          measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
