"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import Image from "next/image";

export function FomoGenHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, [
    { selector: ".parallax-fomo-headline", factor: 20, rotateFactor: 5 },
    { selector: ".parallax-fomo-subtext", factor: 10, rotateFactor: 3 },
    { selector: ".parallax-fomo-cta", factor: 5, rotateFactor: 2 },
    { selector: ".parallax-fomo-image", factor: 15, rotateFactor: -2 },
  ]);

  return (
    <section
      ref={containerRef}
      className="perspective-1000 relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-white pt-24 pb-16 md:min-h-[90vh] md:pt-32 md:pb-20"
    >
      {/* Premium Shopify-Brand Green Radial Glows */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 opacity-15 blur-[120px] md:h-[800px] md:w-[1200px]"
        style={{
          background:
            "radial-gradient(circle, #21C45D 20%, #4ADE80 40%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-100 bg-white/50 px-4 py-2 text-[10px] font-black tracking-[0.2em] text-green-700 uppercase shadow-sm backdrop-blur-md md:mb-8">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            ⚡ {FOMOGEN_DATA.hero.tagline}
          </div>

          <h1 className="parallax-fomo-headline mb-8 text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mb-10 lg:text-[4.5rem]">
            {FOMOGEN_DATA.hero.headline}
            <br />
            <span className="group relative text-green-600 italic">
              {FOMOGEN_DATA.hero.headlineAccent}
              <div className="absolute -bottom-2 left-0 h-[4px] w-full rounded-full bg-green-200/40 blur-md transition-colors group-hover:bg-green-300/60 md:-bottom-4 md:h-[6px]" />
            </span>
          </h1>

          <p className="parallax-fomo-subtext mx-auto mt-8 max-w-xl text-lg leading-tight font-medium tracking-tight text-balance text-slate-500 md:mt-12 md:max-w-2xl md:text-xl lg:mx-0 lg:max-w-xl">
            {FOMOGEN_DATA.hero.subheadline}
          </p>

          <div className="parallax-fomo-cta mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-16 md:gap-6 lg:justify-start">
            <Button
              size="lg"
              className="h-14 w-full rounded-xl bg-[#131111] px-10 text-base font-bold text-white shadow-2xl shadow-slate-200 transition-all duration-500 hover:scale-105 hover:bg-black active:scale-95 sm:w-auto md:h-16 md:rounded-2xl md:px-12 md:text-lg"
              asChild
            >
              <a href={FOMOGEN_DATA.hero.shopifyUrl}>
                {FOMOGEN_DATA.hero.primaryCTA}
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="group h-14 w-full rounded-xl px-10 text-base font-bold text-slate-900 transition-all hover:bg-slate-50 sm:w-auto md:h-16 md:rounded-2xl md:px-12 md:text-lg"
              asChild
            >
              <a href="#features">
                {FOMOGEN_DATA.hero.secondaryCTA}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm font-bold text-slate-400 lg:mt-10">
            {FOMOGEN_DATA.hero.subtext}
          </p>
        </div>

        {/* Before/After Comparison Image */}
        <div className="parallax-fomo-image relative mx-auto w-full max-w-2xl lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] lg:rounded-[3rem]">
            <Image
              src="/v1/apps/fomogen/comparison-hero.png"
              alt="Shopify store conversion rate optimization before and after using FOMO Gen"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle Overlay Label */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent p-8 text-center text-xs font-black tracking-widest text-white uppercase opacity-0 transition-opacity duration-500 hover:opacity-100">
              The FOMO Gen Advantage
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 h-20 w-20 animate-bounce rounded-2xl bg-green-500 p-4 shadow-xl shadow-green-200">
            <div className="h-full w-full rounded-lg bg-white/20" />
          </div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 animate-pulse rounded-full bg-green-100/50 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
