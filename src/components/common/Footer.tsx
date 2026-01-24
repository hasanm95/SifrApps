import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
  solutions: [
    { label: "Fomogen", href: "/apps/fomogen" },
    { label: "Mindful Guard", href: "/apps/mindful-guard" },
  ],
  resources: [
    { label: "Our Ecosystem", href: "/apps" },
    { label: "The Methodology", href: "/about" },
    { label: "Comparison Guides", href: "/compare" },
    { label: "The Logic Lab (Blog)", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/about" }, // Placeholder until legal pages are created
    { label: "Terms of Service", href: "/about" },
  ],
};

interface FooterProps {
  variant?: "light" | "dark";
}

export function Footer({ variant = "light" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const isDark = variant === "dark";

  return (
    <footer
      role="contentinfo"
      className={cn(
        "border-t",
        isDark ? "border-white/5 bg-[#020617]" : "border-slate-200 bg-white"
      )}
    >
      <div className="section-container py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 text-lg font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              <AppLassLogoSmall />
              <span>AppLass</span>
            </Link>
            <p
              className={cn(
                "mt-4 max-w-xs text-sm",
                isDark ? "text-slate-400" : "text-slate-600"
              )}
            >
              Logic-driven software where mathematical precision meets
              human-centric design.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isDark={isDark}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isDark={isDark}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isDark={isDark}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row",
            isDark ? "border-white/5" : "border-slate-200"
          )}
        >
          <p
            className={cn(
              "text-sm",
              isDark ? "text-slate-500" : "text-slate-600"
            )}
          >
            © {currentYear} AppLass. All rights reserved.
          </p>
          <p
            className={cn(
              "text-xs",
              isDark ? "text-slate-600" : "text-slate-400"
            )}
          >
            Built with{" "}
            <span className="text-blue-600" aria-label="precision">
              ∞
            </span>{" "}
            logical precision
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  isDark,
}: {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-sm text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
        isDark
          ? "text-slate-400 hover:text-white focus:ring-blue-600 focus:ring-offset-[#020617]"
          : "text-slate-600 hover:text-slate-900 focus:ring-slate-400 focus:ring-offset-white"
      )}
    >
      {children}
    </Link>
  );
}

function AppLassLogoSmall() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="16"
        cy="16"
        r="4"
        fill="currentColor"
        className="text-blue-600"
      />
    </svg>
  );
}
