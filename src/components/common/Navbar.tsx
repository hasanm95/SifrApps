"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trapping logic for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent scroll when menu is open

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const isDark = variant === "dark";

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
        isScrolled || isMenuOpen
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
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 font-bold text-white transition-colors group-hover:bg-blue-700">
                S
              </div>
              {!customBranding && (
                <span
                  className={cn(
                    "text-xl font-bold tracking-tight",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  Sasswave
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

          {/* Navigation Links (Desktop) */}
          {!customBranding && (
            <div className="hidden items-center gap-10 md:flex">
              <NavLink href="/apps" isDark={isDark}>
                Ecosystem
              </NavLink>
              <NavLink href="/solutions" isDark={isDark}>
                Expertise
              </NavLink>
              <NavLink href="/about" isDark={isDark}>
                Philosophy
              </NavLink>
            </div>
          )}

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
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
                  <Link href="/about">Get in Touch</Link>
                </Button>
              )}
            </div>

            {/* Mobile Toggle Button */}
            <button
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
              className={cn(
                "focus-ring flex h-10 w-10 items-center justify-center rounded-xl md:hidden",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className={cn(
              "animate-in fade-in slide-in-from-top-4 fixed inset-0 top-[72px] z-40 flex flex-col p-8 shadow-inner duration-300 md:hidden",
              isDark ? "bg-[#020617]" : "bg-white"
            )}
          >
            <div className="flex flex-col gap-8">
              {!customBranding && (
                <>
                  <MobileNavLink
                    href="/apps"
                    isDark={isDark}
                    onClick={toggleMenu}
                  >
                    Ecosystem
                  </MobileNavLink>
                  <MobileNavLink
                    href="/solutions"
                    isDark={isDark}
                    onClick={toggleMenu}
                  >
                    Expertise
                  </MobileNavLink>
                  <MobileNavLink
                    href="/about"
                    isDark={isDark}
                    onClick={toggleMenu}
                  >
                    Philosophy
                  </MobileNavLink>
                </>
              )}

              <div className="border-t border-slate-100 pt-8">
                {customCTA ? (
                  <div onClick={toggleMenu}>{customCTA}</div>
                ) : (
                  <Button
                    asChild
                    size="lg"
                    onClick={toggleMenu}
                    className={cn(
                      "h-14 w-full rounded-2xl text-lg font-bold transition-all",
                      isDark
                        ? "bg-white text-slate-900 hover:bg-slate-100"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    )}
                  >
                    <Link href="/about">Get in Touch</Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="mt-auto flex justify-center pb-12">
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
                Sasswave Logic System
              </span>
            </div>
          </div>
        )}
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
          : "text-slate-600 hover:text-slate-900"
      )}
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  isDark,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-4xl font-black tracking-tighter transition-all hover:translate-x-2",
        isDark ? "text-white" : "text-slate-900"
      )}
    >
      {children}
    </a>
  );
}
