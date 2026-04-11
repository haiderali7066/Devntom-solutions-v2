import { Metadata } from "next";

// ════════════════════════════════════════════════════════════════════════
// lib/metadata.ts
// Shared metadata generator — use in every page's generateMetadata()
// ════════════════════════════════════════════════════════════════════════

const SITE_URL  = "https://devntomsolutions.com";
const SITE_NAME = "DEVNTOM Solutions";
const DEFAULT_OG_IMAGE = "/og-image.png";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;           // e.g. "/services/web-development"
  ogImage?: string;        // Override default OG image
  noIndex?: boolean;       // Set true for admin/private pages
  type?: "website" | "article";
  publishedTime?: string;  // ISO date for blog posts
  modifiedTime?: string;
  authors?: string[];
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors = ["DEVNTOM Solutions"],
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "devntom solutions",
      "software house Pakistan",
      "digital agency",
    ],
    authors: authors.map((name) => ({ name, url: SITE_URL })),
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@DevntomS18433",
      creator: "@DevntomS18433",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
}

// ─── Pre-built metadata for every page ────────────────────────────────────────
// Import and export directly from each page file

export const HOME_META = generatePageMetadata({
  title: "DEVNTOM Solutions | Web Development, AI Automation & Digital Marketing",
  description:
    "DEVNTOM Solutions is a global software & digital agency. We build scalable websites, AI automation systems, custom software (CRM/ERP), mobile apps, and digital marketing strategies for businesses worldwide.",
  keywords: ["web development company", "AI automation agency", "software house Lahore", "digital marketing Pakistan"],
  path: "/",
});

export const ABOUT_META = generatePageMetadata({
  title: "About DEVNTOM Solutions | Modern Software & Digital Agency",
  description:
    "Learn about DEVNTOM Solutions — a modern technology company building scalable software, AI automation, and digital platforms for 80+ clients across 15+ countries. Based in Pakistan & Saudi Arabia.",
  keywords: ["about devntom", "software company Pakistan", "digital agency Saudi Arabia", "who is devntom"],
  path: "/about",
});

export const SERVICES_META = generatePageMetadata({
  title: "Our Services | Web Dev, AI Automation, App Development & More",
  description:
    "DEVNTOM Solutions offers 7 core digital services: web development, web apps & SaaS, digital marketing, e-commerce, custom software, app development, and AI automation.",
  keywords: ["web development services", "AI automation services", "software development services Pakistan"],
  path: "/services",
});

export const PORTFOLIO_META = generatePageMetadata({
  title: "Portfolio | Case Studies & Client Work — DEVNTOM Solutions",
  description:
    "Explore DEVNTOM Solutions' portfolio of web development, app development, AI automation, custom software, and digital marketing case studies with real results.",
  keywords: ["devntom portfolio", "web development case studies", "software projects Pakistan", "client work"],
  path: "/portfolio",
});

export const PRODUCTS_META = generatePageMetadata({
  title: "Business Software Products | CRM, ERP, POS Systems — DEVNTOM",
  description:
    "Custom CRM, ERP, POS, inventory management, HR systems, and business intelligence dashboards built by DEVNTOM Solutions for businesses in Pakistan, Saudi Arabia, and worldwide.",
  keywords: ["custom CRM Pakistan", "ERP system Saudi Arabia", "POS software", "inventory management", "HR payroll system"],
  path: "/products",
});

export const INDUSTRIES_META = generatePageMetadata({
  title: "Industries We Serve | DEVNTOM Solutions",
  description:
    "DEVNTOM Solutions serves businesses across e-commerce, healthcare, education, fintech, real estate, hospitality, logistics, and SaaS industries worldwide.",
  keywords: ["industries devntom", "e-commerce development", "healthcare software", "fintech development Pakistan"],
  path: "/industries",
});

export const BLOG_META = generatePageMetadata({
  title: "Blog | Tech Insights & Digital Strategy — DEVNTOM Solutions",
  description:
    "Expert articles on web development, AI automation, digital marketing, software engineering, and business growth from the DEVNTOM Solutions team.",
  keywords: ["devntom blog", "web development articles", "AI automation tips", "digital marketing insights", "Next.js tutorials", "SEO Pakistan"],
  path: "/blog",
});

export const CONTACT_META = generatePageMetadata({
  title: "Contact DEVNTOM Solutions | Free Project Consultation & Quote",
  description:
    "Contact DEVNTOM Solutions for web development, AI automation, digital marketing, and custom software projects. Get a free quote within 24 hours. Pakistan: +92 325 6036838 | Saudi Arabia: +966 583 408034.",
  keywords: ["contact devntom", "hire web developer Pakistan", "software agency contact", "get quote web development"],
  path: "/contact",
});

// ─── Service page metadata ─────────────────────────────────────────────────────

export const WEB_DEV_META = generatePageMetadata({
  title: "Web Development Services | Fast, SEO-Optimised Websites",
  description:
    "DEVNTOM Solutions builds high-performance, responsive, and SEO-optimised websites using Next.js, React, and modern web technologies. Get a free quote today.",
  keywords: ["web development Pakistan", "Next.js development", "responsive website design", "SEO website development", "website design Lahore"],
  path: "/services/web-development",
});

export const DIGITAL_MARKETING_META = generatePageMetadata({
  title: "Digital Marketing & SEO Services | Grow Your Business Online",
  description:
    "Data-driven digital marketing — SEO, Google Ads, Meta Ads, social media management, and content marketing that drives traffic, leads, and revenue growth.",
  keywords: ["digital marketing Pakistan", "SEO agency Lahore", "Google Ads management", "Meta Ads Pakistan", "social media marketing"],
  path: "/services/digital-marketing-seo",
});

export const CUSTOM_SOFTWARE_META = generatePageMetadata({
  title: "Custom Software Development | CRM, ERP, POS & Business Systems",
  description:
    "Custom CRM, ERP, POS, and enterprise software built for your exact workflows. Replaces disconnected tools with one powerful, scalable business platform.",
  keywords: ["custom software development Pakistan", "CRM development", "ERP software Pakistan", "POS system development", "business software"],
  path: "/services/custom-software",
});

export const APP_DEV_META = generatePageMetadata({
  title: "App Development | iOS, Android & Cross-Platform Mobile Apps",
  description:
    "We build iOS, Android, and React Native apps from MVPs to full-scale consumer and enterprise applications. App Store ready with backend included.",
  keywords: ["app development Pakistan", "iOS app development", "Android app development", "React Native Pakistan", "mobile app design"],
  path: "/services/app-development",
});

export const AI_AUTO_META = generatePageMetadata({
  title: "AI Automation & Chatbots | Intelligent Business Automation",
  description:
    "Custom AI chatbots and automation systems built with GPT-4o, LangChain, n8n, and Make. Handle 70%+ of customer queries automatically, 24/7.",
  keywords: ["AI chatbot development", "workflow automation Pakistan", "GPT chatbot", "n8n automation", "AI automation business", "LangChain development"],
  path: "/services/ai-automation",
});

export const UIUX_META = generatePageMetadata({
  title: "UI/UX Design Services | Figma Design & Design Systems",
  description:
    "User research, wireframing, prototyping, and pixel-perfect UI design that converts visitors into customers. Full design system and developer handoff included.",
  keywords: ["UI UX design Pakistan", "Figma design agency", "product design", "user experience design", "design system"],
  path: "/services/ui-ux-design",
});
