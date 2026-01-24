"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { ShoppingCart } from "lucide-react";

export function FomoGenHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, [
    { selector: ".parallax-fomo-headline", factor: 20, rotateFactor: 5 },
    { selector: ".parallax-fomo-subtext", factor: 10, rotateFactor: 3 },
    { selector: ".parallax-fomo-cta", factor: 5, rotateFactor: 2 },
    { selector: ".parallax-fomo-notification", factor: 30, rotateFactor: -5 },
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
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-green-50/50 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-teal-50/30 blur-[120px]" />

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-100 bg-white/50 px-4 py-2 text-[10px] font-black tracking-[0.2em] text-green-700 uppercase shadow-sm backdrop-blur-md md:mb-8">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            ⚡ {FOMOGEN_DATA.hero.tagline}
          </div>

          {/* Reduced font sizes: xl -> 5xl -> 6xl -> 7xl */}
          <h1 className="parallax-fomo-headline mb-8 text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mb-10 lg:text-7xl">
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-12 md:gap-8 lg:justify-start">
            {FOMOGEN_DATA.hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-xl font-black text-slate-900 md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase md:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview Floating UI */}
        <div className="perspective-1000 relative hidden h-[500px] items-center justify-center lg:flex lg:h-[600px]">
          <div className="parallax-fomo-notification absolute top-1/2 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2">
            <div className="glass-elite tilt-card overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/60 p-8 shadow-[0_40px_100px_-20px_rgba(33,196,93,0.15)] backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 shadow-lg shadow-green-100">
                  <ShoppingCart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {FOMOGEN_DATA.livePreview.notification.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    {FOMOGEN_DATA.livePreview.notification.action}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <p className="font-bold text-green-600">
                  {FOMOGEN_DATA.livePreview.notification.product}
                </p>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
                  {FOMOGEN_DATA.livePreview.notification.time}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between text-xs font-black tracking-widest text-slate-400 uppercase">
                  <span>Shipping Progress</span>
                  <span className="text-green-600">
                    {FOMOGEN_DATA.livePreview.progress.current}%
                  </span>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-200/50 p-0.5 backdrop-blur-sm">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_15px_rgba(33,196,93,0.3)] transition-all duration-1000"
                    style={{
                      width: `${FOMOGEN_DATA.livePreview.progress.current}%`,
                    }}
                  />
                </div>
                <p className="mt-4 text-center text-xs font-bold text-slate-500 italic">
                  &quot;{FOMOGEN_DATA.livePreview.progress.message}&quot;
                </p>
              </div>
            </div>

            {/* Smaller decorative bubbles */}
            <div className="absolute -top-12 -right-12 h-24 w-24 animate-bounce rounded-full border border-white/50 bg-green-100/30 backdrop-blur-md" />
            <div className="absolute -bottom-16 -left-16 h-32 w-32 animate-pulse rounded-full border border-white/50 bg-emerald-100/20 backdrop-blur-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
