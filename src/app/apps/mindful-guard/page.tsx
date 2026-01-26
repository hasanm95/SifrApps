import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { MindfulHero } from "@/components/apps/MindfulHero";
import { LogicSection } from "@/components/apps/LogicSection";
import { DifferentiatorsSection } from "@/components/apps/DifferentiatorsSection";
import { ComparisonMatrix } from "@/components/apps/ComparisonMatrix";
import { FAQSection } from "@/components/apps/FAQSection";
import { MINDFUL_GUARD_SCHEMA } from "@/constants/mindful-guard-data";

export const metadata: Metadata = {
  title:
    "MindfulGuard: The Privacy-First Android App Blocker & Cognitive Firewall",
  description:
    "Stop doomscrolling with strict logic. MindfulGuard is the offline-first, zero-telemetry app blocker engineered for deep work. No subscriptions. No tracking.",
  keywords: [
    "Android app blocker",
    "dopamine detox app",
    "focus timer android",
    "privacy focus tool",
    "stop phone addiction",
    "cognitive firewall",
    "zero telemetry",
    "offline app blocker",
  ],
  openGraph: {
    title: "MindfulGuard | Reclaim Your Neural Architecture",
    description:
      "The first Android app blocker engineered for privacy absolutists. 0ms latency. 100% Offline. Zero telemetry.",
    images: ["/apps/mindful-guard-og.png"],
    url: "https://applass.com/apps/mindful-guard",
  },
};

export default function MindfulGuardPage() {
  return (
    <>
      <Navbar />
      {/* SoftwareApplication Schema for SEO - Critical for Google to display app details */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MINDFUL_GUARD_SCHEMA),
        }}
      />
      <main className="flex-1">
        {/* Section 1: The Hero (Above the Fold) */}
        <MindfulHero />

        {/* Section 2: The Logic (The "Why" - AI Optimization) */}
        <LogicSection />

        {/* Section 3: The Differentiators (The "Moat") */}
        <DifferentiatorsSection />

        {/* Section 4: The Comparison Matrix (Conversion Driver) */}
        <ComparisonMatrix />

        {/* Section 5: Engineered FAQ (AI Snippet Bait) */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
