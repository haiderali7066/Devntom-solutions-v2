import type { Metadata } from "next";

// import HeroSection from "@/components/Hero";
import HeroSection from "@/components/Hero2";
import TrustedBanner from "@/components/Hv0/TrustedBanner";
import Services from "@/components/services";
import Overview from "@/components/Hv0/Overview";
import ServicesSection from "@/components/Hv0/ServicesSection";
import WhyUs from "@/components/Hv0/WhyUs";
import TechStack from "@/components/Hv0/TechStack";
import FeaturedWork from "@/components/Hv0/FeaturedWork";
import Industries from "@/components/Hv0/Industries";
import Testimonials from "@/components/Hv0/Testimonials";
import Process from "@/components/Hv0/Process";
import Insights from "@/components/Hv0/Insights";
import FAQ from "@/components/Hv0/FAQ";
import CTA from "@/components/Hv0/CTA";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://devntomsolutions.com"),

  title:
    "DEVNTOM Solutions | Custom Software, Web Development, Mobile Apps & AI Automation",

  description:
    "DEVNTOM Solutions helps businesses build custom software, modern websites, mobile applications, AI automation, UI/UX design, digital marketing, ERP, CRM, SaaS platforms, and scalable digital solutions.",

  keywords: [
    "DEVNTOM Solutions",
    "software development company",
    "custom software development",
    "web development company",
    "website development",
    "mobile app development",
    "app development company",
    "AI automation",
    "AI chatbot development",
    "artificial intelligence solutions",
    "business automation",
    "digital transformation",
    "ERP development",
    "CRM development",
    "SaaS development",
    "UI UX design",
    "digital marketing agency",
    "SEO services",
    "Next.js development",
    "React development",
    "Node.js development",
    "MERN stack development",
    "ecommerce website development",
    "enterprise software development",
    "technology company",
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
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://devntomsolutions.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devntomsolutions.com",
    siteName: "DEVNTOM Solutions",

    title:
      "DEVNTOM Solutions | Custom Software, AI & Digital Transformation",

    description:
      "Transform your business with custom software, web development, mobile applications, AI automation, ERP, CRM, SaaS platforms, and digital marketing services.",

    images: [
      {
        url: "/images/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DevntomS18433",
    creator: "@DevntomS18433",

    title:
      "DEVNTOM Solutions | Software Development & AI Automation",

    description:
      "Helping businesses grow through custom software, websites, mobile apps, AI automation, and digital transformation.",

    images: ["/images/og/home-og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <TrustedBanner />

      <Services />

      <Overview />

      <ServicesSection />

      <WhyUs />

      <TechStack />

      <FeaturedWork />

      <Industries />

      <Testimonials />

      <Process />

      <Insights />

      <FAQ />

      <CTA />

      <ContactForm />
    </>
  );
}