// ════════════════════════════════════════════════════════════════════════
// lib/structured-data.ts
// JSON-LD Schema generators for rich search results
// Use with <StructuredData /> component or inline <script> tags
// ════════════════════════════════════════════════════════════════════════

const BASE = "https://devntom.com";

// ─── ORGANIZATION ─────────────────────────────────────────────────────────────
// Use on: every page (already in layout.tsx)

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "DEVNTOM Solutions",
    alternateName: "DEVNTOM",
    url: BASE,
    logo: { "@type": "ImageObject", url: `${BASE}/images/logo.svg`, width: 512, height: 512 },
    description: "Global software & digital agency offering web development, AI automation, custom software, app development, and digital marketing.",
    foundingDate: "2023",
    address: [
      { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      { "@type": "PostalAddress", addressCountry: "SA" },
    ],
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+92-325-6036838", contactType: "customer service", availableLanguage: ["English", "Urdu"] },
      { "@type": "ContactPoint", telephone: "+966-583-408034", contactType: "customer service", areaServed: "SA", availableLanguage: ["English", "Arabic"] },
    ],
    email: "devntomsolutions@gmail.com",
    sameAs: [
      "https://www.instagram.com/devntom.solutions",
      "https://www.facebook.com/share/18ANCC7uwH/",
      "https://www.linkedin.com/in/devntom-solutions-6b15293b5",
      "https://x.com/DevntomS18433",
      "https://www.pinterest.com/devntomsolutions",
      "https://medium.com/@devntomsolutions",
      "https://stackoverflow.com/users/32455629/devntom-solutions",
    ],
    areaServed: "Worldwide",
    knowsAbout: ["Web Development", "Software Development", "AI Automation", "Digital Marketing", "App Development", "UI/UX Design", "E-commerce", "CRM Systems", "ERP Systems"],
  };
}

// ─── LOCAL BUSINESS ───────────────────────────────────────────────────────────
// Use on: homepage, contact page

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "SoftwareApplication"],
    "@id": `${BASE}/#localbusiness`,
    name: "DEVNTOM Solutions",
    url: BASE,
    telephone: "+92-325-6036838",
    email: "devntomsolutions@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    geo: { "@type": "GeoCoordinates", latitude: "31.5204", longitude: "74.3587" },
    hasMap: "https://share.google/AxqEK5a7a34LhaPJ1",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "19:00" },
    ],
    priceRange: "$$",
    currenciesAccepted: "USD, PKR, SAR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    image: `${BASE}/og-image.png`,
    description: "Software house and digital agency in Lahore, Pakistan. Services include web development, AI automation, custom software, and digital marketing.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "80", bestRating: "5", worstRating: "1" },
  };
}

// ─── WEBSITE ──────────────────────────────────────────────────────────────────
// Use on: homepage

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "DEVNTOM Solutions",
    description: "Global software & digital agency",
    publisher: { "@id": `${BASE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── WEB PAGE ─────────────────────────────────────────────────────────────────
// Use on: every static page

export function webPageSchema({ title, description, path, dateModified }: {
  title: string; description: string; path: string; dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE}${path}`,
    url: `${BASE}${path}`,
    name: title,
    description,
    isPartOf: { "@id": `${BASE}/#website` },
    publisher: { "@id": `${BASE}/#organization` },
    dateModified: dateModified || new Date().toISOString(),
    inLanguage: "en-US",
    breadcrumb: breadcrumbSchema(path),
  };
}

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────
// Auto-generates from path like "/services/web-development"

export function breadcrumbSchema(path: string) {
  const segments = path.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    ...segments.map((seg, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: seg.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
      item: `${BASE}/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

// ─── SERVICE PAGE ─────────────────────────────────────────────────────────────
// Use on: each /services/* page

export function serviceSchema({ name, description, path, price }: {
  name: string; description: string; path: string; price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}${path}`,
    name,
    description,
    url: `${BASE}${path}`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: "Worldwide",
    serviceType: name,
    ...(price && { offers: { "@type": "Offer", price, priceCurrency: "USD", availability: "https://schema.org/InStock" } }),
  };
}

// ─── BLOG POST (ARTICLE) ──────────────────────────────────────────────────────
// Use on: /blog/[slug] pages

export function blogPostSchema({ title, description, slug, datePublished, dateModified, authorName, imageUrl }: {
  title: string; description: string; slug: string;
  datePublished: string; dateModified?: string;
  authorName?: string; imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${slug}` },
    headline: title,
    description,
    url: `${BASE}/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName || "DEVNTOM Solutions",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "DEVNTOM Solutions",
      logo: { "@type": "ImageObject", url: `${BASE}/images/logo.svg`, width: 512, height: 512 },
    },
    image: imageUrl ? { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 } : undefined,
    isPartOf: { "@id": `${BASE}/#website` },
    inLanguage: "en-US",
  };
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
// Use on: any page with FAQ section — adds rich FAQ result in Google

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// ─── HOW-TO (PROCESS) ─────────────────────────────────────────────────────────
// Use on: service pages with a process section

export function howToSchema({ name, description, steps }: {
  name: string; description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

// ─── PORTFOLIO / CASE STUDY ───────────────────────────────────────────────────
// Use on: /portfolio/[slug] pages

export function caseStudySchema({ name, description, slug, clientName, result }: {
  name: string; description: string; slug: string; clientName: string; result: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${BASE}/portfolio/${slug}`,
    name,
    description,
    url: `${BASE}/portfolio/${slug}`,
    creator: { "@id": `${BASE}/#organization` },
    about: clientName,
    abstract: result,
  };
}

// ─── REVIEW / AGGREGATE RATING ────────────────────────────────────────────────
// Use on: homepage, about page

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DEVNTOM Solutions",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "80",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// ─── SOFT WARE APPLICATION ────────────────────────────────────────────────────
// Use on: /products page

export function softwareAppSchema({ name, description, applicationCategory, price }: {
  name: string; description: string; applicationCategory: string; price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: price || "Custom", priceCurrency: "USD" },
    creator: { "@id": `${BASE}/#organization` },
  };
}
