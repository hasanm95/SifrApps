import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { MindfulHero } from "@/components/apps/MindfulHero";
import { ScienceSection } from "@/components/apps/ScienceSection";
import { FeatureBento } from "@/components/apps/FeatureBento";
import { TechSpecs } from "@/components/apps/TechSpecs";
import { FAQSection } from "@/components/apps/FAQSection";

export const metadata: Metadata = {
  title: "Mindful Guard | Privacy-First Android App Blocker",
  description:
    "Precision-engineered focus for Android. Reclaim your digital sovereignty with zero ads, zero tracking, and mathematical discipline.",
  keywords: [
    "Productivity",
    "Digital Wellness",
    "Android App Blocker",
    "Focus Tools",
    "Mindful Guard",
  ],
  openGraph: {
    title: "Mindful Guard | Reclaim Your Focus",
    description:
      "Precision-engineered focus for Android. Zero ads. Zero tracking.",
    images: ["/apps/mindful-guard-og.png"],
    url: "https://applass.com/apps/mindful-guard",
  },
};

export default function MindfulGuardPage() {
  return (
    <>
      <Navbar />
      {/* SoftwareApplication Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Mindful Guard by AppLass",
            operatingSystem: "ANDROID",
            applicationCategory: "ProductivityApplication",
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
            description:
              "Mindful Guard is a precision-engineered Android utility designed to break the loop of digital distraction.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "1024",
            },
          }),
        }}
      />
      <main className="flex-1">
        <MindfulHero />
        <ScienceSection />
        <FeatureBento />
        <TechSpecs />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
