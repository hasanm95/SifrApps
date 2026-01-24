import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { FomoGenHero } from "@/components/apps/fomogen/FomoGenHero";
import { CoreFeatures } from "@/components/apps/fomogen/CoreFeatures";
import { LivePreviewSection } from "@/components/apps/fomogen/LivePreviewSection";
import { DisplayOptions } from "@/components/apps/fomogen/DisplayOptions";
import { PricingSection } from "@/components/apps/fomogen/PricingSection";
import { FomoGenCTA } from "@/components/apps/fomogen/FomoGenCTA";

export const metadata: Metadata = {
  title: "FomoGen | Elite Social Proof for Shopify",
  description:
    "Drive conversions with authentic social proof and urgency. Lightweight, WCAG 2.1 compliant, and performance-optimized for elite Shopify brands.",
  keywords: [
    "Shopify social proof",
    "FOMO notifications",
    "conversion optimization",
    "e-commerce",
    "FomoGen",
    "sales notifications",
    "urgency marketing",
  ],
  openGraph: {
    title: "FomoGen | Elite Social Proof for Shopify",
    description:
      "Drive conversions with real-time purchase notifications, urgency timers, and elite smart automation.",
    images: ["/apps/fomogen-og.png"],
    url: "https://applass.com/apps/fomogen",
  },
};

export default function FomogenPage() {
  return (
    <div className="bg-white">
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
              "High-performance social proof app for Shopify. Professional purchase notifications, urgency timers, and trust badges.",
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <main className="flex-1 overflow-x-hidden">
        <FomoGenHero />
        <LivePreviewSection />
        <CoreFeatures />
        <DisplayOptions />
        <PricingSection />
        <FomoGenCTA />
      </main>

      <Footer />
    </div>
  );
}
