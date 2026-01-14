"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { MINDFUL_GUARD_DATA } from "@/constants/mindful-guard-data";

export function MindfulHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, [
    { selector: ".parallax-mindful-headline", factor: 20, rotateFactor: 5 },
    { selector: ".parallax-mindful-subtext", factor: 10, rotateFactor: 3 },
    { selector: ".parallax-mindful-cta", factor: 5, rotateFactor: 2 },
  ]);

  return (
    <section
      ref={containerRef}
      className="perspective-1000 relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#FAFBFD] pt-32 pb-20"
    >
      {/* Dynamic Focus Purple Gradient */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-purple-100 bg-purple-50/50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#7C3AED] uppercase shadow-sm backdrop-blur-md">
            Productivity Science
          </div>

          <h1 className="parallax-mindful-headline text-display mb-10 text-slate-900">
            Reclaim Your Focus with
            <br />
            <span className="group relative text-[#7C3AED] italic">
              Logical Guardrails
              <div className="absolute -bottom-4 left-0 h-[6px] w-full rounded-full bg-[#7C3AED]/20 blur-sm transition-colors group-hover:bg-[#7C3AED]/40" />
            </span>
          </h1>

          <p className="parallax-mindful-subtext mx-auto mt-12 max-w-3xl text-xl leading-tight font-medium tracking-tight text-balance text-slate-500 md:text-2xl">
            {MINDFUL_GUARD_DATA.hero.subheadline}
          </p>

          <div className="parallax-mindful-cta mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Button
              size="lg"
              className="h-16 w-full rounded-2xl bg-[#7C3AED] px-12 text-lg font-bold text-white shadow-2xl shadow-purple-200 transition-all duration-500 hover:scale-110 hover:bg-[#6D28D9] active:scale-95 sm:w-auto"
              asChild
            >
              <a href={MINDFUL_GUARD_DATA.hero.playStoreUrl}>
                {MINDFUL_GUARD_DATA.hero.primaryCTA}
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="group h-16 w-full rounded-2xl px-12 text-lg font-bold text-slate-900 backdrop-blur-sm transition-all hover:bg-white/80 sm:w-auto"
              asChild
            >
              <a href="#science">
                Explore the Logic
                <span className="ml-2 inline-block transition-transform group-hover:translate-y-2">
                  ↓
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-80 w-80 animate-pulse rounded-full bg-purple-100/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-80 w-80 animate-pulse rounded-full bg-blue-100/10 blur-[100px] delay-700" />
    </section>
  );
}
