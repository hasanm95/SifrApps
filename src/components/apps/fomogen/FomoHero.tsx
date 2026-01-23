"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FomoHero() {
  return (
    <section className="bg-dot-grid relative min-h-[90vh] pt-32">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            Shopify Social Proof
          </span>

          {/* H1 Headline */}
          <h1 className="mb-8 text-5xl leading-tight font-black tracking-tight text-slate-900 md:text-7xl">
            FomoGen: Social Proof Engineered for the{" "}
            <span className="text-emerald-600">Micro-second.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
            Stop choosing between conversion and site speed. FomoGen delivers
            real-time social proof with a{" "}
            <span className="font-bold text-slate-900">&lt; 2.1KB payload</span>
            —keeping your Shopify Core Web Vitals green while your sales grow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-16 rounded-2xl bg-emerald-600 px-10 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-700"
              asChild
            >
              <Link
                href="https://apps.shopify.com/fomogen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Shopify — It&apos;s Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-16 rounded-2xl px-10 text-lg font-bold text-slate-600 transition-all hover:bg-slate-100"
              asChild
            >
              <Link href="#">
                View the Speed Audit
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
