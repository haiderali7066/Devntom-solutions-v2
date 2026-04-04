// import type { Metadata } from "next";
"use client";
import Hero from "@/components/Hv1/Hero";
import { TrustStrip, FirstImpression } from "@/components/Hv1/TrustAndImpression";
import Services from "@/components/Hv1/Services";
import GlassFeatures from "@/components/Hv1/GlassFeatures";
import { AboutBanner, Stats } from "@/components/Hv1/AboutAndStats";
import { Projects, Process } from "@/components/Hv1/ProjectsAndProcess";
import {
  Industries,
  Testimonials,
  TechStack,
  MarqueeBreak,
  CTABanner,
  FAQ,
} from "@/components/Hv1/Sections";

/* ─── SEO Metadata ─────────────────────────────────────────── */
// export const metadata: Metadata = {
//   title: "DEVNTOM Solutions — Digital Agency & Software Development in Pakistan",
//   description:
//     "DEVNTOM Solutions builds scalable websites, mobile apps, custom software, and AI-powered systems. Expert digital marketing, UI/UX design, and SEO services — based in Pakistan, serving globally.",
//   keywords: [
//     "digital agency Pakistan",
//     "web development Pakistan",
//     "software development",
//     "app development",
//     "UI UX design",
//     "digital marketing",
//     "AI automation",
//     "Next.js development",
//     "custom software Pakistan",
//     "DEVNTOM",
//   ],
//   authors: [{ name: "DEVNTOM Solutions", url: "https://devntom.com" }],
//   creator: "DEVNTOM Solutions",
//   publisher: "DEVNTOM Solutions",
//   metadataBase: new URL("https://devntom.com"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://devntom.com",
//     siteName: "DEVNTOM Solutions",
//     title: "DEVNTOM Solutions — Digital Agency & Software Development",
//     description:
//       "Custom websites, apps, software and AI automation. Serving businesses globally from Pakistan.",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "DEVNTOM Solutions — Digital Agency",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "DEVNTOM Solutions — Digital Agency & Software Development",
//     description:
//       "Custom websites, apps, software and AI automation. Serving businesses globally from Pakistan.",
//     images: ["/og-image.jpg"],
//     creator: "@devntom",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

/* ─── Structured Data (JSON-LD) ────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://devntom.com/#organization",
      name: "DEVNTOM Solutions",
      url: "https://devntom.com",
      logo: {
        "@type": "ImageObject",
        url: "https://devntom.com/logo.png",
        width: 200,
        height: 60,
      },
      description:
        "DEVNTOM Solutions is a digital agency and software development company based in Pakistan, specialising in websites, mobile apps, custom software, digital marketing, UI/UX design, and AI automation.",
      foundingDate: "2019",
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-325-6036838",
        contactType: "customer service",
        email: "devntomsolutions@gmail.com",
        availableLanguage: ["English", "Urdu"],
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      sameAs: [
        "https://instagram.com/Devntom.solutions",
        "https://facebook.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://devntom.com/#website",
      url: "https://devntom.com",
      name: "DEVNTOM Solutions",
      publisher: { "@id": "https://devntom.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://devntom.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://devntom.com/#webpage",
      url: "https://devntom.com",
      name: "DEVNTOM Solutions — Digital Agency & Software Development in Pakistan",
      isPartOf: { "@id": "https://devntom.com/#website" },
      about: { "@id": "https://devntom.com/#organization" },
      description:
        "Custom websites, mobile apps, software, AI automation, and digital marketing — built to scale.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://devntom.com",
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://devntom.com/#service",
      name: "DEVNTOM Solutions",
      url: "https://devntom.com",
      description: "Full-service digital agency offering web development, app development, software engineering, digital marketing, UI/UX design, and AI automation.",
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "Custom Software Development",
        "Digital Marketing",
        "UI/UX Design",
        "AI Automation",
        "SEO Services",
      ],
      areaServed: "Worldwide",
      priceRange: "$$",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "E-commerce, SaaS, Healthcare, EdTech, FinTech, Real Estate, Startups, and Local Business — shipped across all of them with measurable results.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Websites: 4–6 weeks. Mobile apps and custom software: 8–16 weeks. You receive a clear roadmap with milestones before anything begins.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide ongoing support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every project includes post-launch support — from basic maintenance packages to full ongoing engineering retainer plans.",
          },
        },
        {
          "@type": "Question",
          name: "How do we get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email devntomsolutions@gmail.com or WhatsApp 0325-6036838. We'll schedule a discovery call within 24 hours and send a clear proposal.",
          },
        },
      ],
    },
  ],
};

/* ─── Global styles (injected once at page level) ──────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { cursor: auto; overflow-x: hidden; }
  ::selection { background: rgba(14,165,233,.28); color: #fff; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: #0ea5e9; border-radius: 3px; }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: .45; transform: scale(.78); }
  }
  @keyframes scanln {
    0%   { top: -3px; }
    100% { top: 101%; }
  }
  @keyframes grain {
    0%,100% { transform: translate(0,0); }
    10%     { transform: translate(-2%,-3%); }
    30%     { transform: translate(3%,-1%); }
    50%     { transform: translate(-1%,3%); }
    70%     { transform: translate(-3%,1%); }
    90%     { transform: translate(2%,-2%); }
  }
  .grain-layer::after {
    content: '';
    position: fixed;
    inset: -50%;
    width: 200%;
    height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E");
    animation: grain .8s steps(2) infinite;
    pointer-events: none;
    z-index: 9990;
    opacity: .4;
  }
`;

/* ─── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global styles */}
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      {/* Film-grain overlay */}
      <div
        className="grain-layer"
        aria-hidden
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9989 }}
      />

      <main id="main-content">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          style={{
            position: "absolute",
            left: "-9999px",
            top: 0,
            zIndex: 99999,
            background: "#0ea5e9",
            color: "white",
            padding: "8px 16px",
            fontWeight: 700,
            textDecoration: "none",
          }}
          onFocus={(e) => { (e.currentTarget as HTMLElement).style.left = "0"; }}
          onBlur={(e) => { (e.currentTarget as HTMLElement).style.left = "-9999px"; }}
        >
          Skip to main content
        </a>

        <Hero />
        <TrustStrip />
        <FirstImpression />
        <Services />
        <GlassFeatures />
        <AboutBanner />
        <Stats />
        <Projects />
        <Process />
        <Industries />
        <Testimonials />
        <TechStack />
        <MarqueeBreak />
        <CTABanner />
        <FAQ />
      </main>
    </>
  );
}
