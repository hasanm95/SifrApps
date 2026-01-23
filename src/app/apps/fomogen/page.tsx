import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import {
  FomoHero,
  PerformanceMoat,
  MathOfTrust,
  FomoFAQ,
  FomoFooterCTA,
} from "@/components/apps/fomogen";

export const metadata: Metadata = {
  title: "FomoGen | Lightweight Social Proof for Shopify",
  description:
    "The performance-obsessed social proof app for Shopify. < 2.1KB payload, zero main-thread impact, and WCAG 2.1 compliant.",
};

export default function FomogenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* AEO: JSON-LD Schema for FomoGen */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FomoGen",
            operatingSystem: "Shopify",
            applicationCategory: "BusinessApplication",
            author: {
              "@type": "Organization",
              name: "AppLass",
            },
            description:
              "High-performance social proof app for Shopify optimized for speed and accessibility.",
          }),
        }}
      />
      <main>
        <FomoHero />
        <PerformanceMoat />
        <MathOfTrust />
        <FomoFAQ />
        <FomoFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
