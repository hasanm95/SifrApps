export interface ComparisonFeature {
  label: string;
  competitorValue: string;
  sifrValue: string;
  isPositive?: boolean;
}

export interface ComparisonData {
  slug: string;
  competitorName: string;
  productName: string;
  heroHeadline: string;
  heroSubheadline: string;
  matrix: ComparisonFeature[];
  legacyWay: {
    title: string;
    points: string[];
  };
  sifrWay: {
    title: string;
    points: string[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const comparisons: ComparisonData[] = [
  {
    slug: "fomogen-vs-nudgify",
    competitorName: "Nudgify",
    productName: "FomoGen",
    heroHeadline: "The Logical Alternative to Nudgify.",
    heroSubheadline:
      "Why elite Shopify merchants are switching from bloated legacy social proof tools to FomoGen's logic-first architecture.",
    matrix: [
      {
        label: "Load Speed",
        competitorValue: "1.2s+",
        sifrValue: "< 100ms",
        isPositive: true,
      },
      {
        label: "Privacy",
        competitorValue: "Cookies & Tracking",
        sifrValue: "Zero Telemetry",
        isPositive: true,
      },
      {
        label: "Accessibility",
        competitorValue: "Partial WCAG",
        sifrValue: "100% Compliant",
        isPositive: true,
      },
      {
        label: "Script Size",
        competitorValue: "450KB+",
        sifrValue: "4.2KB",
        isPositive: true,
      },
      {
        label: "Pricing",
        competitorValue: "Strict Tiers",
        sifrValue: "Logical Flat Rate",
        isPositive: true,
      },
    ],
    legacyWay: {
      title: "The Legacy Way",
      points: [
        "Heavy JavaScript payloads that slow down storefronts.",
        "Aggressive user tracking that compromises trust.",
        "Complex dashboards with unnecessary feature bloat.",
      ],
    },
    sifrWay: {
      title: "The Sifr Way",
      points: [
        "Mathematical precision for maximum performance.",
        "Zero-telemetry privacy by default.",
        "Clean, minimalist logic that just works.",
      ],
    },
    testimonial: {
      quote:
        "We shaved 2 seconds off our Shopify load time just by switching from Nudgify to FomoGen. The math doesn't lie.",
      author: "Alex Rivera",
      role: "E-commerce Director",
    },
  },
  {
    slug: "mindful-guard-vs-forest",
    competitorName: "Forest",
    productName: "Mindful Guard",
    heroHeadline: "The Logical Alternative to Forest.",
    heroSubheadline:
      "Why elite developers are switching from gamified distractions to Mindful Guard's system-level discipline.",
    matrix: [
      {
        label: "Method",
        competitorValue: "Gamified / Visual",
        sifrValue: "Logical Friction",
        isPositive: true,
      },
      {
        label: "Battery Impact",
        competitorValue: "6-8% Daily",
        sifrValue: "< 0.5% Daily",
        isPositive: true,
      },
      {
        label: "Privacy",
        competitorValue: "Cloud-Synced",
        sifrValue: "100% Local",
        isPositive: true,
      },
      {
        label: "Focus Logic",
        competitorValue: "Suggestive",
        sifrValue: "Absolute Guardrails",
        isPositive: true,
      },
      {
        label: "Philosophy",
        competitorValue: "Growth",
        sifrValue: "Elimination",
        isPositive: true,
      },
    ],
    legacyWay: {
      title: "The Legacy Way",
      points: [
        "Using a 'game' to stop phone use is counter-intuitive.",
        "Constant background sync drains device resources.",
        "Features optimized for retention, not productivity.",
      ],
    },
    sifrWay: {
      title: "The Sifr Way",
      points: [
        "Intentional friction switches brain to System 2 thinking.",
        "Native C++ implementation for zero battery lag.",
        "Absolute focus sessions with no 'exit' logic.",
      ],
    },
    testimonial: {
      quote:
        "Mindful Guard is the first app that actually works. It doesn't ask me to be better; it forces me to be logical.",
      author: "Sarah Chen",
      role: "Lead Software Architect",
    },
  },
];

export function getComparisonBySlug(slug: string): ComparisonData | null {
  return comparisons.find((c) => c.slug === slug) || null;
}
