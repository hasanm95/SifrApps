import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { FomoGenHero } from "@/components/apps/fomogen/FomoGenHero";
import { CoreFeatures } from "@/components/apps/fomogen/CoreFeatures";
import { SpeedBenefitSection } from "@/components/apps/fomogen/SpeedBenefitSection";
import { TestimonialsSection } from "@/components/apps/fomogen/TestimonialsSection";
import { PricingSection } from "@/components/apps/fomogen/PricingSection";
import { FomoGenCTA } from "@/components/apps/fomogen/FomoGenCTA";

export const metadata: Metadata = {
  title: "FOMO Gen | #1 Free Social Proof, Urgency & Trust App for Shopify",
  description:
    "Skyrocket your Shopify sales with FOMO Gen. The all-in-one app for Sales Popups, Stock Countdowns, Sticky Cart, and Trust Badges. Install for Free today!",
  keywords: [
    "shopify social proof",
    "sales pop",
    "countdown timer",
    "stock alert",
    "trust badges",
    "sticky cart",
  ],
  openGraph: {
    title: "Boost Your Shopify Sales with FOMO Gen",
    description:
      "The all-in-one app for Sales Popups, Stock Countdowns, Sticky Cart, and Trust Badges. Install for Free today!",
    images: ["/apps/fomogen-og.png"],
    url: "https://applass.com/apps/fomogen",
  },
};

export default function FomogenPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Structured SEO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FOMO Gen",
            operatingSystem: "Shopify",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "12",
              bestRating: "5",
              worstRating: "1",
            },
            featureList:
              "Social Proof Notifications, Stock Countdown Timer, Sticky Add-to-Cart, Free Shipping Bar",
            screenshot: "https://applass.com/images/fomogen-dashboard.jpg",
            description:
              "FOMO Gen is an all-in-one Shopify app for social proof, urgency, and trust signals.",
            author: {
              "@type": "Organization",
              name: "Applass",
              url: "https://applass.com",
            },
          }),
        }}
      />

      <main className="flex-1 overflow-x-hidden">
        <FomoGenHero />
        <SpeedBenefitSection />
        <CoreFeatures />
        <TestimonialsSection />
        <PricingSection />
        <FomoGenCTA />
      </main>

      <Footer />
    </div>
  );
}
