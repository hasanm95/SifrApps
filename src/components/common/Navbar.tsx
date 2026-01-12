"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "glass-elite border-b border-slate-200/20 py-4 shadow-2xl"
          : "bg-transparent py-8"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="section-container"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group focus-ring flex items-center gap-2 rounded-lg px-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white transition-colors group-hover:bg-emerald-700">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              SifrApps
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-10 md:flex">
            <NavLink href="#apps">Ecosystem</NavLink>
            <NavLink href="#solutions">Expertise</NavLink>
            <NavLink href="#about">Philosophy</NavLink>
          </div>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="h-10 rounded-xl bg-slate-900 px-6 font-semibold text-white transition-all hover:bg-slate-800"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="focus-ring rounded-md py-1 text-sm font-bold text-slate-500 transition-all hover:text-slate-900"
    >
      {children}
    </a>
  );
}
