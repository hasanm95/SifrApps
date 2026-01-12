import Link from "next/link";

const footerLinks = {
  solutions: [
    { label: "E-commerce Growth", href: "#solutions" },
    { label: "Digital Productivity", href: "#solutions" },
    { label: "Accessibility Consulting", href: "#solutions" },
  ],
  resources: [
    { label: "Comparison Guides", href: "#" },
    { label: "Support", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-border bg-background border-t">
      <div className="section-container py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-foreground inline-flex items-center gap-2 text-lg font-semibold"
            >
              <SifrLogoSmall />
              <span>SifrApps</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">
              Logic-driven software where mathematical precision meets
              human-centric design.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SifrApps. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with{" "}
            <span className="text-primary" aria-label="precision">
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground focus:ring-ring focus:ring-offset-background rounded-sm text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
    >
      {children}
    </Link>
  );
}

function SifrLogoSmall() {
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
        className="text-primary"
      />
    </svg>
  );
}
