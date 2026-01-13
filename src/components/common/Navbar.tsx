"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  variant?: "light" | "dark";
  customBranding?: React.ReactNode;
  customCTA?: React.ReactNode;
}

export function Navbar({
  variant = "light",
  customBranding,
  customCTA,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
        isScrolled
          ? cn(
              "glass-elite py-4 shadow-2xl",
              isDark
                ? "border-white/10 bg-[#020617]/80"
                : "border-slate-200/20 bg-white/80"
            )
          : "bg-transparent py-8"
      )}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="section-container"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Custom Branding */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group focus-ring flex items-center gap-2 rounded-lg px-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white transition-colors group-hover:bg-emerald-700">
                S
              </div>
              {!customBranding && (
                <span
                  className={cn(
                    "text-xl font-bold tracking-tight",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  SifrApps
                </span>
              )}
            </Link>

            {customBranding && (
              <div className="hidden h-6 w-px bg-white/10 md:block" />
            )}

            {customBranding && (
              <div className="flex items-center">{customBranding}</div>
            )}
          </div>

          {/* Navigation Links */}
          {!customBranding && (
            <div className="hidden items-center gap-10 md:flex">
              <NavLink href="#apps" isDark={isDark}>
                Ecosystem
              </NavLink>
              <NavLink href="#solutions" isDark={isDark}>
                Expertise
              </NavLink>
              <NavLink href="#about" isDark={isDark}>
                Philosophy
              </NavLink>
            </div>
          )}

          {/* CTA / Custom CTA */}
          <div className="flex items-center gap-4">
            {customCTA ? (
              customCTA
            ) : (
              <Button
                asChild
                size="sm"
                className={cn(
                  "h-10 rounded-xl px-6 font-semibold transition-all",
                  isDark
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  isDark,
}: {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "focus-ring rounded-md py-1 text-sm font-bold transition-all",
        isDark
          ? "text-slate-400 hover:text-white"
          : "text-slate-500 hover:text-slate-900"
      )}
    >
      {children}
    </a>
  );
}
