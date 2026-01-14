import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sasswave | High-Performance Software Engineering",
  description:
    "At Sasswave, we bridge the gap between complex mathematics and human-centric software. Stop letting bloated software slow down your growth. We build elite-tier Shopify and Mobile tools driven by mathematical precision.",
  keywords: [
    "software studio",
    "Shopify apps",
    "digital wellness",
    "accessibility",
    "WCAG",
    "web development",
    "Sasswave",
  ],
  authors: [{ name: "Sasswave" }],
  creator: "Sasswave",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sasswave.com",
    siteName: "Sasswave",
    title: "Sasswave | Logic-Driven Software Studio",
    description:
      "Mathematical precision meets human-centric design. We build the Next Wave of digital performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sasswave - Logic-Driven Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasswave | Logic-Driven Software Studio",
    description:
      "Mathematical precision meets human-centric design. We build high-performance apps for the modern web.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sasswave",
              url: "https://sasswave.com",
              description:
                "Logic-driven software studio building high-performance apps with mathematical precision.",
              foundingDate: "2019",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content" className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
