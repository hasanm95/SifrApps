import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppLass | High-Performance Software Engineering",
  description:
    "At AppLass, we bridge the gap between complex mathematics and human-centric software. Stop letting bloated software slow down your growth. We build elite-tier Shopify and Mobile tools driven by mathematical precision.",
  keywords: [
    "software studio",
    "Shopify apps",
    "digital wellness",
    "accessibility",
    "WCAG",
    "web development",
    "AppLass",
  ],
  authors: [{ name: "AppLass" }],
  creator: "AppLass",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://applass.com",
    siteName: "AppLass",
    title: "AppLass | Logic-Driven Software Studio",
    description:
      "Mathematical precision meets human-centric design. We build the Next Wave of digital performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AppLass - Logic-Driven Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppLass | Logic-Driven Software Studio",
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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CKXH2GPBN3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CKXH2GPBN3');
            `,
          }}
        />
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AppLass",
              url: "https://applass.com",
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
