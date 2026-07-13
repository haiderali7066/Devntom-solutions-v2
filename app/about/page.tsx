import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About DEVNTOM Solutions | Custom Software, AI & Digital Solutions Company",

  description:
    "Learn about DEVNTOM Solutions, a software development company specializing in custom software, web development, mobile app development, AI automation, UI/UX design, SaaS platforms, and digital marketing solutions for businesses worldwide.",

  keywords: [
    "DEVNTOM Solutions",
    "software development company",
    "custom software development",
    "web development company",
    "website development services",
    "mobile app development",
    "app development company",
    "AI automation",
    "AI chatbot development",
    "business automation",
    "digital transformation",
    "SaaS development",
    "ERP development",
    "CRM development",
    "UI UX design",
    "digital marketing agency",
    "SEO services",
    "Next.js development",
    "React development",
    "Node.js development",
    "MERN stack development",
    "ecommerce development",
    "software company Pakistan",
  ],

  authors: [
    {
      name: "DEVNTOM Solutions",
    },
  ],

  creator: "DEVNTOM Solutions",

  publisher: "DEVNTOM Solutions",

  category: "Technology",

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

  alternates: {
    canonical: "https://devntomsolutions.com/about",
  },

  openGraph: {
    title: "About DEVNTOM Solutions | Software, AI & Digital Innovation",

    description:
      "Discover DEVNTOM Solutions and learn how we help businesses grow through custom software, websites, mobile applications, AI automation, SaaS platforms, and digital transformation.",

    url: "https://devntomsolutions.com/about",

    siteName: "DEVNTOM Solutions",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/og/about-og.PNG", // Recommended: Use your own branded OG image
        width: 1200,
        height: 630,
        alt: "About DEVNTOM Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About DEVNTOM Solutions",
    description:
      "Learn more about DEVNTOM Solutions, a software development company delivering web, mobile, AI, SaaS, and digital transformation solutions.",
    creator: "@DevntomS18433",
    site: "@DevntomS18433",
    images: ["/images/og/about-og.jpg"],
  },

  metadataBase: new URL("https://devntomsolutions.com"),
};

export default function AboutPage() {
  return <AboutClient />;
}