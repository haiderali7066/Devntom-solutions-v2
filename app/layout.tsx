import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/schema";
import LenisProvider from "@/components/LenisProvider";

// ─────────────────────────────────────────────────────────
// Fonts
// ─────────────────────────────────────────────────────────

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ─────────────────────────────────────────────────────────
// Viewport
// ─────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#080810",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
  ],
  colorScheme: "dark",
};

// ─────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://devntomsolutions.com"),

  title: {
    default:
      "DEVNTOM Solutions | Web Development, AI Automation & Software Solutions",
    template: "%s | DEVNTOM Solutions",
  },

  description:
    "DEVNTOM Solutions is a global software and digital solutions company specializing in web development, SaaS applications, AI automation, custom software, mobile apps, branding, UI/UX, SEO, and digital transformation.",

  applicationName: "DEVNTOM Solutions",

  referrer: "origin-when-cross-origin",

  keywords: [
    "DEVNTOM Solutions",
    "Web Development Company",
    "Software House Pakistan",
    "Software Company Saudi Arabia",
    "AI Automation",
    "AI Agency",
    "Custom CRM Development",
    "ERP Software",
    "POS Software",
    "Next.js Agency",
    "React Development",
    "Node.js Development",
    "SEO Services",
    "Digital Marketing Agency",
    "Branding Agency",
    "UI UX Design",
    "Mobile App Development",
    "SaaS Development",
    "Ecommerce Development",
    "Website Development Pakistan",
  ],

  authors: [
    {
      name: "DEVNTOM Solutions",
      url: "https://devntomsolutions.com",
    },
  ],

  creator: "DEVNTOM Solutions",
  publisher: "DEVNTOM Solutions",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "https://devntomsolutions.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devntomsolutions.com",

    siteName: "DEVNTOM Solutions",

    title: "DEVNTOM Solutions | Where Systems Become Strategy",

    description:
      "Global software & digital solutions company specializing in web development, AI automation, SaaS, custom software, mobile apps, branding, UI/UX, and digital marketing.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "DEVNTOM Solutions | Web Development & AI Automation",

    description:
      "Web Development, SaaS, AI Automation, CRM/ERP Systems, Mobile Apps, SEO & Digital Marketing.",

    creator: "@DevntomS18433",
    site: "@DevntomS18433",

    images: ["/og-image.png"],
  },

  appleWebApp: {
    capable: true,
    title: "DEVNTOM Solutions",
    statusBarStyle: "black-translucent",
  },

  category: "Technology",
};

// ─────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <SchemaMarkup />

        {/* Local SEO */}
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi" />
        <meta name="language" content="English" />

        {/* Global Business */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* Theme */}
        <meta name="theme-color" content="#080810" />
      </head>

      <body className="font-sans antialiased overflow-x-hidden">
        {/* Smooth Scroll */}
        <LenisProvider />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}