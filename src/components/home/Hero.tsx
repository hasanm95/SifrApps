"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { useMagnetic } from "@/hooks/useMagnetic";
import { rafThrottle } from "@/lib/utils";

const HERO_LAYERS = [
  { selector: ".parallax-badge", factor: 5, rotateFactor: 2 },
  { selector: ".parallax-headline", factor: 15, rotateFactor: 5 },
  { selector: ".parallax-subtext", factor: 10, rotateFactor: 3 },
  { selector: ".parallax-cta", factor: 8, rotateFactor: 2 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, HERO_LAYERS);
  useMagnetic(containerRef, ".magnetic-btn");

  useEffect(() => {
    const handleMouseMove = rafThrottle((e: MouseEvent) => {
      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-dot-grid perspective-1000 relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      {/* Interactive Light Follower */}
      <div
        ref={lightRef}
        className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-40 transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 112, 243, 0.1) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Decorative Elite Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in-up">
          {/* Elite Badge */}
          <div className="parallax-badge mb-12 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/50 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            Sasswave Software Studio
          </div>

          {/* Massive Display Headline */}
          <h1 className="parallax-headline text-display mb-10">
            Software Engineered with
            <br />
            <span className="animate-scanline group relative inline-block text-slate-300">
              Logical Precision.
              <div className="absolute -bottom-4 left-0 h-[6px] w-full rounded-full bg-blue-600/20 blur-sm transition-colors group-hover:bg-blue-600/40" />
            </span>
          </h1>

          {/* Subtext with Elite Contrast */}
          <p className="parallax-subtext mx-auto mt-12 max-w-3xl text-xl leading-tight font-medium tracking-tight text-balance text-slate-500 md:text-2xl">
            At Sasswave, we bridge the gap between{" "}
            <span className="border-b-2 border-blue-600/30 text-slate-900">
              complex mathematics
            </span>{" "}
            and{" "}
            <span className="text-slate-900 italic">
              human-centric software
            </span>
            .
          </p>

          {/* Elite CTAs */}
          <div className="parallax-cta mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Button
              size="lg"
              className="magnetic-btn h-16 w-full rounded-2xl bg-slate-900 px-12 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-blue-600 active:scale-95 sm:w-auto"
              asChild
            >
              <Link href="/apps">View Portfolio</Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="magnetic-btn group h-16 w-full rounded-2xl px-12 text-lg font-bold text-slate-900 backdrop-blur-sm transition-all hover:bg-white/50 sm:w-auto"
              asChild
            >
              <Link href="/about">
                Our Methodology
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements (Parallax) */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-80 w-80 animate-pulse rounded-full bg-blue-100/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-80 w-80 animate-pulse rounded-full bg-blue-100/5 blur-[120px] delay-700" />
    </section>
  );
}
