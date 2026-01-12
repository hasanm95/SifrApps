import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SifrApps | Logic-Driven Software Studio",
  description:
    "From Shopify conversion tools to mindful mobile experiences, we build software where mathematical precision meets human-centric design. Founded by a mathematician with 7 years of full-stack expertise.",
  keywords: [
    "software studio",
    "Shopify apps",
    "digital wellness",
    "accessibility",
    "WCAG",
    "web development",
  ],
  authors: [{ name: "SifrApps" }],
  creator: "SifrApps",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sifrapps.com",
    siteName: "SifrApps",
    title: "SifrApps | Logic-Driven Software Studio",
    description:
      "Mathematical precision meets human-centric design. We build high-performance apps for the modern web.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SifrApps - Logic-Driven Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SifrApps | Logic-Driven Software Studio",
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
              name: "SifrApps",
              url: "https://sifrapps.com",
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
