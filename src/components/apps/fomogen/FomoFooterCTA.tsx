import Link from "next/link";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function FomoFooterCTA() {
  return (
    <Section className="py-24">
      <div className="section-container">
        <div className="rounded-[3rem] bg-slate-900 px-8 py-16 text-center md:px-20 md:py-24">
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[3rem]">
            <div className="absolute -top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10">
            <h3 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Ready to Scale Without the Speed Tax?
            </h3>
            <p className="mx-auto mb-12 max-w-xl text-lg font-medium text-slate-400">
              Join thousands of Shopify merchants who prioritize performance
              over feature bloat.
            </p>

            <Button
              size="lg"
              className="h-16 rounded-2xl bg-emerald-600 px-12 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-500"
              asChild
            >
              <Link
                href="https://apps.shopify.com/fomogen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install FomoGen on Shopify
              </Link>
            </Button>

            {/* Trust Badge */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-[10px] font-black tracking-widest text-slate-500 uppercase md:gap-8">
              <span>7 Years of Full-Stack Excellence</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 md:block" />
              <span>Math-Led Logic</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 md:block" />
              <span>100% Privacy Focused</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
