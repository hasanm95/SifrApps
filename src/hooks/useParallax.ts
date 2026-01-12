"use client";

import { useEffect, type RefObject } from "react";
import { rafThrottle } from "@/lib/utils";

interface ParallaxLayer {
  selector: string;
  factor: number;
  rotateFactor: number;
}

export function useParallax(
  containerRef: RefObject<HTMLDivElement | null>,
  layers: ParallaxLayer[]
) {
  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    const handleMouseMove = rafThrottle((e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const relX = clientX / innerWidth - 0.5;
      const relY = clientY / innerHeight - 0.5;

      layers.forEach(({ selector, factor, rotateFactor }) => {
        const elements = containerRef.current?.querySelectorAll(selector);
        elements?.forEach((el) => {
          const x = relX * factor;
          const y = relY * factor;
          const rx = -relY * rotateFactor;
          const ry = relX * rotateFactor;
          (el as HTMLElement).style.transform =
            `translate3d(${x}px, ${y}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef, layers]);
}
