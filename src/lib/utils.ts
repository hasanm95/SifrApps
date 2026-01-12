import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Throttles a function based on frame rate for better performance in animations.
 */
export function rafThrottle<T extends (...args: unknown[]) => void>(fn: T) {
  let locked = false;
  return function (this: unknown, ...args: Parameters<T>) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn.apply(this, args);
      locked = false;
    });
  };
}
