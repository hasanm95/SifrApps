export const FOMOGEN_DATA = {
  hero: {
    tagline: "High-Performance Social Proof",
    headline: "Drive Conversions with",
    headlineAccent: "Trustworthy Tools",
    subheadline:
      "The performance-obsessed social proof app for Shopify. Under 2.1KB payload, zero main-thread impact, and WCAG 2.1 compliant. Real data. Real results.",
    primaryCTA: "Install on Shopify — Free",
    secondaryCTA: "Explore the Logic",
    shopifyUrl: "https://apps.shopify.com/fomogen",
    stats: [
      { value: "<2.1KB", label: "Payload" },
      { value: "0ms", label: "Main Thread" },
      { value: "WCAG 2.1", label: "Compliant" },
      { value: "Mobile", label: "Optimized" },
    ],
  },

  // Premium Features Grid
  features: [
    {
      id: "purchase-notifications",
      title: "Real-Time Purchase Popups",
      description:
        "Build instant trust by showing real buyers from your store. Display product, name, and location with privacy-first controls.",
      iconName: "ShoppingCart",
      highlight: "Build Trust",
    },
    {
      id: "countdown-timers",
      title: "Tactical Countdown Timers",
      description:
        "Drive urgency with sale countdowns, flash sale timers, and shipping cut-offs. Engineered for higher click-through rates.",
      iconName: "Timer",
      highlight: "Drive Urgency",
    },
    {
      id: "stock-alerts",
      title: "Dynamic Stock Alerts",
      description:
        'Show "Low stock" and "Only X left" warnings when inventory gets low. Real-time inventory tracking from your Shopify store.',
      iconName: "Package",
      highlight: "Scarcity",
    },
    {
      id: "exit-intent",
      title: "Exit-Intent Capture",
      description:
        "Recover abandoned carts with targeted popups that trigger only when a user is about to leave. Zero impact on page speed.",
      iconName: "MousePointer",
      highlight: "Capture Visitors",
    },
    {
      id: "trust-badges",
      title: "Verified Trust Badges",
      description:
        "Display professional security badges and payment icons. Build confidence in your checkout flow with verified visual cues.",
      iconName: "ShieldCheck",
      highlight: "Build Confidence",
    },
    {
      id: "progress-indicators",
      title: "Progress Indicators",
      description:
        "Motivate larger purchases with free shipping progress bars. Real-time updates as customers add items to their cart.",
      iconName: "TrendingUp",
      highlight: "Increase AOV",
    },
    {
      id: "social-proof-badges",
      title: "Social Proof Badges",
      description:
        '"X people bought this recently" badges. Leverage crowd psychology to validate your products in seconds.',
      iconName: "Award",
      highlight: "Show Popularity",
    },
    {
      id: "sticky-cart",
      title: "Frictionless Sticky Cart",
      description:
        "Keep the buy button visible at all times. Reduce friction and ensure your customers can checkout instantly.",
      iconName: "ShoppingBag",
      highlight: "Reduce Friction",
    },
    {
      id: "customization",
      title: "Elite Customization",
      description:
        "Full control over colors, fonts, and positions. Use custom CSS for pixel-perfect integration with your unique theme.",
      iconName: "Palette",
      highlight: "Your Brand",
    },
  ],

  pricing: {
    title: "Proprietary Pricing Tiers",
    subtitle: "Scale Logically",
    tiers: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Essential social proof for new brands.",
        features: [
          "1 Active Campaign",
          "100 Display Impressions/mo",
          "Basic Customization",
          "Up to 3 Trust Badges",
          "Community Support",
        ],
        cta: "Install Free",
        highlighted: false,
      },
      {
        name: "Starter",
        price: "$9.99",
        period: "/month",
        description: "Everything needed to start scaling.",
        features: [
          "3 Active Campaigns",
          "2,500 Display Impressions/mo",
          "Full Color & Font Control",
          "Unlimited Trust Badges",
          "Priority Email Support",
        ],
        cta: "Start 7-Day Trial",
        highlighted: true,
      },
      {
        name: "Growth",
        price: "$19.99",
        period: "/month",
        description: "Advanced targeting for high-volume stores.",
        features: [
          "10 Active Campaigns",
          "10,000 Display Impressions/mo",
          "Geo-Targeting Controls",
          "Device-Specific Rules",
          "Advanced Analytics",
        ],
        cta: "Start 7-Day Trial",
        highlighted: false,
      },
      {
        name: "Elite",
        price: "$39.99",
        period: "/month",
        description: "Unlimited scale with dedicated support.",
        features: [
          "Unlimited Campaigns",
          "Unlimited Impressions",
          "Custom CSS Integration",
          "Early Beta Access",
          "30-min Strategy Call",
        ],
        cta: "Start 7-Day Trial",
        highlighted: false,
      },
    ],
  },

  livePreview: {
    notification: {
      name: "Sarah from New York",
      action: "just purchased",
      product: "Premium Focus Gear",
      time: "2 minutes ago",
    },
    progress: {
      current: 85,
      target: 100,
      message: "You're $15 away from FREE shipping!",
    },
  },

  displayOptions: {
    title: "Customization Architecture",
    subtitle: "Make It Yours",
    categories: [
      {
        title: "Display Modalities",
        items: [
          "Dynamic Pop-ups",
          "Sticky Banners",
          "Announcement Bars",
          "Inline Widgets",
          "Cart Page Proof",
          "Product Anchors",
        ],
      },
      {
        title: "Timing Logic",
        items: [
          "Fixed End Dates",
          "Recurring Cycles",
          "Per-Visit Resets",
          "Fixed Minute Delays",
          "One-Time Sessions",
          "Shipping Thresholds",
        ],
      },
      {
        title: "Styling Components",
        items: [
          "Proprietary CSS",
          "Green-Teal Gradients",
          "Tactile Typography",
          "Custom Positions",
          "Elite Animations",
          "Mobile-First Rendering",
        ],
      },
    ],
  },

  cta: {
    title: "Ready to Boost Conversions?",
    subtitle: "Get Started Today",
    description:
      "Join 5,000+ Shopify brands using FomoGen to build trust. Set up in under 5 minutes with zero technical debt.",
    highlights: [
      "Zero-Battening Payload",
      "No Coding Required",
      "7-Day Free Trial",
      "24/7 Elite Support",
    ],
    primaryCTA: "Install on Shopify — Free",
    shopifyUrl: "https://apps.shopify.com/fomogen",
  },
};
