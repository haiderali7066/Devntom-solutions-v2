

import { MetadataRoute } from "next";

const BASE = "https://devntomsolutions.com";

// Static pages with their priority and change frequency
const STATIC_PAGES: { url: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
  { url: "",                              priority: 1.0,  changeFrequency: "weekly"  }, // homepage
  { url: "/about",                        priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services",                     priority: 0.9,  changeFrequency: "monthly" },
  { url: "/portfolio",                    priority: 0.85, changeFrequency: "weekly"  },
  { url: "/products",                     priority: 0.85, changeFrequency: "monthly" },
  { url: "/industries",                   priority: 0.8,  changeFrequency: "monthly" },
  { url: "/blog",                         priority: 0.8,  changeFrequency: "daily"   },
  { url: "/contact",                      priority: 0.9,  changeFrequency: "monthly" },
  { url: "/privacy-policy",              priority: 0.3,  changeFrequency: "yearly"  },
  { url: "/terms-of-service",            priority: 0.3,  changeFrequency: "yearly"  },
  // Service pages
  { url: "/services/web-development",    priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/web-apps-saas",       priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/digital-marketing-seo", priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/ecommerce-solutions", priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/custom-software",    priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/app-development",    priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/ai-automation",      priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/ui-ux-design",       priority: 0.85, changeFrequency: "monthly" },
];

// Blog post slugs — replace with your CMS/MDX slugs or fetch from API
const BLOG_SLUGS = [
  "why-nextjs-future-web-development-2025",
  "ai-chatbots-cut-support-costs-40-percent",
  "seo-strategies-that-work-2025",
  "react-native-vs-flutter-2025",
  "crm-erp-difference-business-guide",
  "ux-design-mistakes-costing-conversions",
  "langchain-n8n-business-automation-guide",
  "ecommerce-conversion-optimisation-tips",
  "custom-software-vs-off-the-shelf",
];

// Portfolio slugs
const PORTFOLIO_SLUGS = [
  "nexora-erp",
  "shopsprint",
  "clarise-app",
  "growthbase-seo",
  "retailpro-pos",
  "delivernow",
  "supportbot-ai",
  "nexora-web",
  "healthbridge-portal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${BASE}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogEntries = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioEntries = PORTFOLIO_SLUGS.map((slug) => ({
    url: `${BASE}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries, ...portfolioEntries];
}


