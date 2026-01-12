import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  platform: string;
  tagline: string;
  description: string;
  metrics: string[];
  color: string;
  cta: string;
  featured: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  const isEmerald = product.color === "emerald";

  return (
    <div
      className={cn(
        "group glass-elite relative rounded-[2.5rem] border border-slate-200/20 p-10 transition-all duration-500 hover:shadow-2xl",
        product.featured ? "md:col-span-1" : ""
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-1.5 w-full rounded-t-full transition-all duration-500",
          isEmerald
            ? "bg-emerald-500 group-hover:h-3"
            : "bg-blue-500 group-hover:h-3"
        )}
      />

      <div className="flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <span className="mb-2 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
              {product.platform}
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              {product.name}
            </h3>
          </div>
          <div
            className={cn(
              "rounded-full border px-4 py-1 text-[10px] font-bold",
              isEmerald
                ? "border-emerald-100 bg-emerald-50 text-emerald-600"
                : "border-blue-100 bg-blue-50 text-blue-600"
            )}
          >
            Active Deploy
          </div>
        </div>

        <h4 className="mb-4 text-lg font-semibold text-slate-700">
          {product.tagline}
        </h4>
        <p className="mb-10 flex-grow leading-relaxed text-slate-500">
          {product.description}
        </p>

        <div className="mb-10 grid grid-cols-2 gap-4">
          {product.metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100/50 bg-slate-50/50 p-4"
            >
              <span className="text-xs font-black tracking-tight text-slate-900">
                {metric}
              </span>
            </div>
          ))}
        </div>

        <Button
          className={cn(
            "h-14 w-full rounded-2xl font-bold transition-all duration-500",
            isEmerald
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700"
              : "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
          )}
        >
          {product.cta}
        </Button>
      </div>
    </div>
  );
}
