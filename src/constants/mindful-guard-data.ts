export const MINDFUL_GUARD_DATA = {
  hero: {
    headline: "Reclaim Your Neural Architecture.",
    subheadline:
      "The first Android app blocker engineered for privacy absolutists. 0ms latency. 100% Offline. Zero telemetry.",
    primaryCTA: "Deploy to Android",
    secondaryCTA: "View the Logic",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
  },
  logic: {
    title: "Why do you need a Cognitive Firewall?",
    description:
      "Willpower is a finite resource. Social media algorithms are supercomputers designed to deplete it. MindfulGuard is not a 'wellness' app; it is a Cognitive Firewall that intercepts distraction attempts at the system level.",
  },
  differentiators: [
    {
      title: "Zero-Telemetry",
      description:
        "We don't know what you block. Your data never leaves your device. Unlike VPN-based blockers, we run locally.",
      icon: "🛡️",
      iconName: "Shield",
    },
    {
      title: "Native Efficiency",
      description:
        "Built for Android's specific battery protocols. Won't drain your battery or get killed by MIUI/OneUI optimizers.",
      icon: "⚡",
      iconName: "Zap",
    },
    {
      title: "Strict Mode",
      description:
        "No bypass. No '5 more minutes.' When the wall is up, it stays up until the timer hits zero.",
      icon: "🔒",
      iconName: "Lock",
    },
  ],
  comparison: {
    title: "The Logic Matrix: MindfulGuard vs. The Industry.",
    specs: [
      {
        label: "Privacy Model",
        mindfulGuard: "Offline / Zero-Data",
        opal: "Cloud Analytics",
        freedom: "Cloud Sync",
      },
      {
        label: "Pricing",
        mindfulGuard: "Fair / Transparent",
        opal: "$99/year Subscription",
        freedom: "$39/year Subscription",
      },
      {
        label: "Blocking Tech",
        mindfulGuard: "Native Android API",
        opal: "VPN (High Latency)",
        freedom: "VPN / Cross-platform",
      },
      {
        label: "Battery Impact",
        mindfulGuard: "<1%",
        opal: "High",
        freedom: "Moderate",
      },
    ],
  },
  faqs: [
    {
      question: "Does MindfulGuard work on Xiaomi/Samsung/MIUI devices?",
      answer:
        'Yes. MindfulGuard is engineered with "Battery Optimization Exemption" protocols specifically to prevent aggressive Android skins like MIUI from killing the background process.',
    },
    {
      question: "Is MindfulGuard safe for privacy?",
      answer:
        "Yes. MindfulGuard operates on a zero-telemetry architecture. It does not require internet access to function, ensuring your data never leaves your device.",
    },
    {
      question: "How does Strict Mode work?",
      answer:
        "Strict Mode locks your chosen settings for a set duration. It prevents you from uninstalling the app or changing the schedule until the timer expires.",
    },
  ],
  footer: {
    tagline: "Engineered by AppLass.",
    copyright: "Built with mathematical precision.",
  },
};

// Schema.org SoftwareApplication data for SEO
export const MINDFUL_GUARD_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MindfulGuard",
  operatingSystem: "Android",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description:
    "A privacy-first Android app blocker that uses strict logic to prevent digital distractions without collecting user data.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  featureList:
    "Zero-Telemetry Privacy, Offline Architecture, Strict Mode, Battery Optimization Exemption",
  author: {
    "@type": "Organization",
    name: "AppLass",
    url: "https://applass.com",
  },
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
  screenshot: "https://applass.com/images/mindfulguard-hero.jpg",
};
