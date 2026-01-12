"use client";

import { useEffect, type RefObject } from "react";
import { rafThrottle } from "@/lib/utils";

export function useMagnetic(
  containerRef: RefObject<HTMLDivElement | null>,
  selector: string,
  pullFactor: number = 0.3,
  radius: number = 120
) {
  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    const handleMouseMove = rafThrottle((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const magneticBtns = containerRef.current?.querySelectorAll(selector);

      magneticBtns?.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
        );

        if (distance < radius) {
          const pullX = (clientX - centerX) * pullFactor;
          const pullY = (clientY - centerY) * pullFactor;
          (btn as HTMLElement).style.transform =
            `translate3d(${pullX}px, ${pullY}px, 0)`;
        } else {
          (btn as HTMLElement).style.transform = `translate3d(0, 0, 0)`;
        }
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef, selector, pullFactor, radius]);
}
