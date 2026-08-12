import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

// ─────────────────────────────────────────────────────────────────────────
// SEO METADATA — replace SITE_URL with the live production domain.
// ─────────────────────────────────────────────────────────────────────────
const SITE_URL = 'https://www.devntomsolutions.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'DEVNTOM Solutions | Custom Software, SaaS & AI Automation Company',
  description:
    'DEVNTOM Solutions builds custom software, SaaS platforms, AI automation, and digital products for businesses in Pakistan, Saudi Arabia, and the USA. 150+ projects delivered, 80+ clients worldwide.',
  keywords: [
    'custom software development company',
    'SaaS development company',
    'AI automation agency',
    'web development company Pakistan',
    'software house Lahore',
    'web development company Saudi Arabia',
    'mobile app development company',
    'UI UX design agency',
    'CRM ERP POS development',
    'digital marketing agency',
    'e-commerce development company',
    'custom software development company USA',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'DEVNTOM Solutions | Where Systems Become Strategy',
    description:
      'Custom software, SaaS platforms, AI automation, and digital products for businesses across Pakistan, Saudi Arabia, and the USA.',
    url: SITE_URL,
    siteName: 'DEVNTOM Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: 'DEVNTOM Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEVNTOM Solutions | Where Systems Become Strategy',
    description: 'Custom software, SaaS platforms, AI automation, and digital products for businesses worldwide.',
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'PK, SA, US',
    'geo.placename': 'Lahore, Pakistan; Riyadh, Saudi Arabia; United States',
  },
};

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA — Organization + FAQ + Review schema for local & global SEO
// ─────────────────────────────────────────────────────────────────────────
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DEVNTOM Solutions',
  alternateName: 'Devntom',
  url: SITE_URL,
  description:
    'DEVNTOM Solutions builds scalable software, SaaS platforms, AI automation, and digital products for businesses worldwide.',
  slogan: 'Where Systems Become Strategy',
  email: 'devntomsolutions@gmail.com',
  telephone: '+92-325-6036838',
  areaServed: [
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United States' },
  ],
  sameAs: [
    'https://www.instagram.com/devntom.solutions',
    'https://www.facebook.com/share/18ANCC7uwH/',
    'https://www.linkedin.com/in/devntom-solutions-6b15293b5',
    'https://www.pinterest.com/devntomsolutions',
    'https://x.com/DevntomS18433',
    'https://medium.com/@devntomsolutions',
    'https://stackoverflow.com/users/32455629/devntom-solutions',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      'Web Development',
      'Software Development',
      'Mobile App Development',
      'AI Automation & Chatbots',
      'UI/UX Design',
      'Digital Marketing & SEO',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '80',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does custom software development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends on scope, complexity, and integrations. Most engagements start with a discovery call where we scope requirements and provide a fixed estimate before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a SaaS MVP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical SaaS MVP takes a few weeks to a few months depending on feature scope, integrations, and design complexity. We scope an exact timeline during discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside Pakistan and Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. DEVNTOM Solutions serves clients across 15+ countries, including the United States, with a remote-first delivery model and flexible time-zone coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build for e-commerce, fintech, healthcare, real estate, education, logistics, hospitality, and SaaS startups, among others.',
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────
// CONTENT
// ─────────────────────────────────────────────────────────────────────────
const heroSlides = [
  {
    eyebrow: 'Custom Software & SaaS',
    title: 'Custom software and AI systems built to scale your business.',
    highlight: 'AI systems',
  },
  {
    eyebrow: 'SaaS & Cloud Platforms',
    title: 'High-performance SaaS platforms built to scale.',
    highlight: 'built to scale',
  },
  {
    eyebrow: 'AI Automation',
    title: 'AI automation that eliminates manual overhead.',
    highlight: 'AI automation',
  },
];

const heroDesc =
  'We work as your strategic technology partner — designing SaaS platforms and custom software engineered as the operational backbone of how you run and grow your business.';

// Replace with real client wordmarks/logos once available.
const trustedClients = ['Verdant Stays', 'Quanta Retail', 'Northpeak Analytics', 'BrightLedger', 'Solace Health', 'Meridian Freight'];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Clients Worldwide' },
  { value: '15+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    title: 'Website Development',
    desc: 'Fast, secure, SEO-optimized business websites and Next.js web platforms built to convert visitors into customers.',
    href: '/services/website-development',
    icon: <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  },
  {
    title: 'Software Development',
    desc: 'Custom CRM, ERP, POS, and SaaS systems engineered to streamline operations and scale with your business.',
    href: '/services/software-development',
    icon: (
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="1"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    ),
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS and Android apps with powerful backend systems, built for smooth performance at scale.',
    href: '/services/mobile-app-development',
    icon: <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  },
  {
    title: 'AI Automation & Chatbots',
    desc: 'Intelligent automation pipelines and AI chatbots that cut manual overhead and reduce operational errors.',
    href: '/services/ai-automation-chatbots',
    icon: (
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="1"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Pixel-perfect product design, wireframes, and design systems that pair visual excellence with usability.',
    href: '/services/ui-ux-design',
    icon: (
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="1"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
  },
  {
    title: 'Digital Marketing & SEO',
    desc: 'Technical SEO, local SEO, and performance marketing strategies that grow visibility, traffic, and conversions.',
    href: '/services/digital-marketing',
    icon: (
      <>
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </>
    ),
  },
];

// Replace with verified client quotes as they come in.
const testimonials = [
  {
    quote:
      'Devntom rebuilt our booking platform in ten weeks and cut our page load time in half. Support after launch has been just as sharp as the build.',
    name: 'Sarah Malik',
    role: 'Founder',
    company: 'Verdant Stays',
  },
  {
    quote:
      'Their AI automation pipeline took a two-day manual reconciliation process down to twenty minutes. It paid for itself within the first month.',
    name: 'Omar Al-Sayed',
    role: 'Operations Director',
    company: 'Quanta Retail',
  },
  {
    quote:
      'We came in with a rough idea and left with a production-ready SaaS MVP. The architecture decisions they made early on are still paying off today.',
    name: 'Jordan Reyes',
    role: 'CTO',
    company: 'Northpeak Analytics',
  },
  {
    quote:
      'Clear communication, realistic timelines, and code we could actually hand off to our in-house team without a rewrite.',
    name: 'Amina Farooq',
    role: 'Product Lead',
    company: 'BrightLedger',
  },
  {
    quote:
      "Devntom's team understood our compliance constraints in healthcare better than agencies twice their size.",
    name: 'Michael Chen',
    role: 'VP Engineering',
    company: 'Solace Health',
  },
];

const whyUs = [
  { title: 'Systems Thinking', desc: "We don't deliver isolated features. We design interconnected systems that scale with your business." },
  { title: 'Quality Without Compromise', desc: 'Every line of code, every pixel, every workflow is built to a premium standard.' },
  { title: 'Business-First Approach', desc: 'We understand your goals first, then engineer the right technical solution to achieve them.' },
  { title: 'Global Delivery, Local Understanding', desc: 'Serving clients worldwide with regional expertise in South Asia and the Middle East.' },
];

const techStack = [
  'Next.js', 'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL',
  'AWS', 'Docker', 'TensorFlow', 'OpenAI API', 'Tailwind CSS', 'GraphQL',
];

const industries = [
  'E-Commerce & Retail',
  'Financial Services & Fintech',
  'Healthcare & MedTech',
  'Real Estate & PropTech',
  'Education & EdTech',
  'Logistics & Supply Chain',
  'Hospitality & Travel',
  'Startups & SaaS',
];

const process = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We understand your business goals and technical requirements before writing a single line of code.' },
  { step: '02', title: 'Architecture & Design', desc: 'We plan the system structure and craft pixel-perfect UI/UX prototypes.' },
  { step: '03', title: 'Development & Build', desc: 'Our engineers build with modern, scalable technologies and full transparency.' },
  { step: '04', title: 'Quality Assurance', desc: 'Every deliverable is tested for function, performance, security, and compatibility.' },
  { step: '05', title: 'Launch & Deployment', desc: 'We manage the full deployment pipeline for a smooth, zero-downtime launch.' },
  { step: '06', title: 'Support & Growth', desc: 'We monitor, maintain, and continuously improve your system after launch.' },
];

const caseStudies = [
  { tag: 'SaaS Platform', title: 'Building a multi-tenant dashboard architecture for a data analytics platform.', image: '/images/case-saas.jpg' },
  { tag: 'E-Commerce', title: 'Custom storefront and inventory system for a growing retail brand.', image: '/images/case-ecommerce.jpg' },
  { tag: 'AI Automation', title: 'Workflow automation pipeline cutting manual processing time.', image: '/images/case-ai.jpg' },
  { tag: 'Fintech', title: 'Secure payments dashboard with real-time reporting.', image: '/images/case-fintech.jpg' },
];

const insights = [
  { tag: 'SaaS', title: 'How to Choose a Custom Software Development Partner', image: '/images/blog-partner.jpg' },
  { tag: 'AI Automation', title: 'AI Automation Use Cases That Save Businesses Time', image: '/images/blog-ai.jpg' },
  { tag: 'Fintech', title: 'Best Practices for Fintech App Development', image: '/images/blog-fintech.jpg' },
  { tag: 'Strategy', title: 'In-House vs Outsourced Software Development', image: '/images/blog-strategy.jpg' },
];

const faqs = [
  { q: 'How much does custom software development cost?', a: 'Cost depends on scope, complexity, and integrations. Most engagements start with a discovery call where we scope requirements and provide a fixed estimate before any work begins.' },
  { q: 'How long does it take to build a SaaS MVP?', a: 'A typical SaaS MVP takes a few weeks to a few months depending on feature scope, integrations, and design complexity. We scope an exact timeline during discovery.' },
  { q: 'Do you work with clients outside Pakistan and Saudi Arabia?', a: 'Yes. DEVNTOM Solutions serves clients across 15+ countries, including the United States, with a remote-first delivery model and flexible time-zone coverage.' },
  { q: 'What industries do you specialize in?', a: 'We build for e-commerce, fintech, healthcare, real estate, education, logistics, hospitality, and SaaS startups, among others.' },
  { q: 'Do you offer support after launch?', a: 'Yes. Our delivery process includes a dedicated Support & Growth phase — we monitor, maintain, and continuously improve your system after it goes live.' },
];

// ─────────────────────────────────────────────────────────────────────────
// SERVER ACTION — handles the contact form without any client JS.
// Replace the TODO with your email/CRM integration.
// ─────────────────────────────────────────────────────────────────────────
async function submitContactForm(formData: FormData) {
  'use server';
  const payload = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  };
  // TODO: send `payload` to your email service, CRM, or database.
  console.log('New contact form submission:', payload);
  redirect('/contact/thank-you');
}

export default function DevntomLandingPage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* SEO: structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Global CSS animations — no client JS required, respects reduced motion */}
      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) rotate(12deg) scale(1); }
          33% { transform: translate(30px, -20px) rotate(20deg) scale(1.08); }
          66% { transform: translate(-20px, 25px) rotate(4deg) scale(0.95); }
        }
        @keyframes blobFloatSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.1); }
        }
        @keyframes heroSlideFade {
          0% { opacity: 0; transform: translateY(12px); }
          4% { opacity: 1; transform: translateY(0); }
          29% { opacity: 1; transform: translateY(0); }
          33% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 0; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; width: 8px; }
          4%, 29% { opacity: 1; width: 28px; }
          33% { opacity: 0.3; width: 8px; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-blob { animation: blobFloat 14s ease-in-out infinite; }
        .animate-blob-slow { animation: blobFloatSlow 18s ease-in-out infinite; }
        .hero-slide { animation: heroSlideFade 14s ease-in-out infinite; }
        .hero-slide:nth-child(1) { animation-delay: 0s; }
        .hero-slide:nth-child(2) { animation-delay: 4.67s; }
        .hero-slide:nth-child(3) { animation-delay: 9.34s; }
        .hero-dot { animation: dotPulse 14s ease-in-out infinite; }
        .hero-dot:nth-child(1) { animation-delay: 0s; }
        .hero-dot:nth-child(2) { animation-delay: 4.67s; }
        .hero-dot:nth-child(3) { animation-delay: 9.34s; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out both; }
        .marquee-track { animation: marquee 30s linear infinite; }
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
        details .faq-chevron { transition: transform 0.2s ease; }
        details[open] .faq-chevron { transform: rotate(45deg); }

        /* Testimonial carousel — pure CSS, radio-driven, no client JS */
        .testimonial-input { position: absolute; opacity: 0; pointer-events: none; }
        .testimonial-slide {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }
        .testimonial-dot { background: rgba(255,255,255,0.2); }
        ${testimonials
          .map(
            (_, i) => `
        #testimonial-${i + 1}:checked ~ .testimonial-track .testimonial-slide-${i + 1} {
          opacity: 1;
          pointer-events: auto;
          z-index: 10;
        }
        #testimonial-${i + 1}:checked ~ .testimonial-dots .testimonial-dot-${i + 1} {
          background: #60a5fa;
          width: 26px;
          border-radius: 9999px;
        }`
          )
          .join('')}

        @media (prefers-reduced-motion: reduce) {
          .animate-blob, .animate-blob-slow, .hero-slide, .hero-dot, .fade-in-up, .marquee-track {
            animation: none !important;
          }
          .hero-slide { opacity: 1; position: relative !important; }
          .hero-slide:not(:first-child) { display: none; }
          .testimonial-slide { transition: none; }
        }
      `}</style>

      {/* 1. HERO — 3-slide auto-rotating, pure CSS, bold display headline */}
      <section className="relative w-full pt-28 pb-24 px-6 sm:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">
        {/* animated background shapes */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600 via-blue-400 to-transparent opacity-30 blur-3xl rounded-full animate-blob" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-blue-300 via-blue-500 to-transparent opacity-20 blur-3xl rounded-full animate-blob-slow" />

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-10">
          <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-800 px-4 py-2 uppercase tracking-widest text-[12px] font-medium border border-gray-200 fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Pakistan &middot; Saudi Arabia &middot; USA
          </div>

          {/* rotating slide text — stacked, cross-fading, big + bold */}
          <div className="relative w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[280px]">
            {heroSlides.map((slide, i) => (
              <div key={slide.title} className="hero-slide absolute inset-0 flex flex-col gap-6" style={{ opacity: i === 0 ? 1 : 0 }}>
                <span className="text-[13px] uppercase tracking-widest text-blue-600 font-semibold">{slide.eyebrow}</span>
                <h1 className="text-[40px] sm:text-[60px] lg:text-[72px] font-extrabold leading-[0.98] tracking-tight text-gray-950">
                  {slide.title.split(slide.highlight).map((part, idx, arr) => (
                    <React.Fragment key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">{slide.highlight}</span>
                      )}
                    </React.Fragment>
                  ))}
                </h1>
              </div>
            ))}
          </div>

          <p className="text-[17px] sm:text-[19px] font-light text-gray-600 max-w-xl leading-relaxed">{heroDesc}</p>

          {/* slide indicator dots (visual, synced to same timing) */}
          <div className="flex items-center gap-2 h-2">
            <span className="hero-dot h-2 bg-blue-600 rounded-full" />
            <span className="hero-dot h-2 bg-blue-600 rounded-full" />
            <span className="hero-dot h-2 bg-blue-600 rounded-full" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto fade-in-up">
            <Link
              href="/contact"
              className="text-center bg-blue-600 text-white px-10 py-5 uppercase tracking-widest text-[14px] font-medium hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="text-center bg-white text-gray-900 border border-gray-300 px-10 py-5 uppercase tracking-widest text-[14px] font-medium hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-150"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[460px] sm:h-[560px] relative flex items-center justify-center z-10">
          {/* back accent panel for layered depth */}
          <div className="absolute right-2 sm:right-10 top-6 w-[260px] sm:w-[320px] h-[340px] sm:h-[420px] bg-blue-50 border border-blue-100 -rotate-3" />

          <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-gray-200 p-8 sm:p-10 shadow-2xl w-[300px] sm:w-[380px] rotate-1 group hover:rotate-0 hover:-translate-y-1 hover:shadow-blue-200/60 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 mb-6 flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-semibold text-gray-900 mb-2">Systems Thinking</h3>
            <p className="text-[15px] text-gray-600 font-light mb-6">
              We don&apos;t deliver isolated features — we design interconnected systems that scale with your business over time.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div>
                <span className="block text-[28px] font-extrabold text-blue-600 leading-none">150+</span>
                <span className="text-[11px] uppercase tracking-widest text-gray-400">Projects</span>
              </div>
              <div>
                <span className="block text-[28px] font-extrabold text-blue-600 leading-none">98%</span>
                <span className="text-[11px] uppercase tracking-widest text-gray-400">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR — replace with real client wordmarks/logos when available */}
      <section className="w-full py-10 px-6 sm:px-8 border-y border-gray-100 bg-white">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
          <span className="text-[12px] uppercase tracking-widest text-gray-400 font-medium shrink-0">Trusted by teams at</span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-10 gap-y-4">
            {trustedClients.map((name) => (
              <span key={name} className="text-[17px] sm:text-[19px] font-semibold tracking-tight text-gray-300 hover:text-blue-600 transition-colors duration-200">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="w-full py-16 px-6 sm:px-8 bg-blue-600 text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-500/50 border-l border-blue-500/50">
          {stats.map((s) => (
            <div key={s.label} className="px-6 flex flex-col gap-2">
              <span className="text-[40px] sm:text-[56px] font-light leading-none tracking-tighter">{s.value}</span>
              <span className="text-[13px] uppercase tracking-widest text-blue-200">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT TEASER — image + text */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden bg-gray-100 group">
            <Image
              src="/images/about-team.jpg"
              alt="DEVNTOM Solutions engineering team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[13px] uppercase tracking-widest text-blue-600 font-medium">About Devntom</span>
            <h2 className="text-[32px] sm:text-[44px] font-light leading-tight text-gray-900 mt-4 mb-6">
              Where Systems Become Strategy.
            </h2>
            <p className="text-[16px] font-light text-gray-600 leading-relaxed mb-6">
              DEVNTOM Solutions is a modern technology company building scalable software,
              automation systems, and digital platforms. We engineer digital systems that
              become the strategic backbone of your business — from high-performance SaaS
              platforms to intelligent AI automation pipelines.
            </p>
            <p className="text-[16px] font-light text-gray-600 leading-relaxed mb-8">
              Headquartered across Pakistan and Saudi Arabia and serving clients globally,
              our team of engineers, designers, and strategists is united by one goal: real,
              measurable business impact.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[14px] uppercase tracking-widest font-medium border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-150"
            >
              More about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID — glow icon tiles, elevated cards */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-[13px] uppercase tracking-widest text-blue-600 font-medium">What we do</span>
              <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight mt-4">Our Services</h2>
              <p className="text-[16px] font-light text-gray-500 max-w-xl mt-4">
                End-to-end digital solutions across web, software, mobile, AI, design, and marketing — built for measurable business impact.
              </p>
            </div>
            <Link
              href="/services"
              className="text-[14px] uppercase tracking-widest font-medium border border-gray-300 px-6 py-3 hover:border-blue-600 hover:text-blue-600 transition-colors duration-150 whitespace-nowrap"
            >
              View all services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col bg-white border border-gray-200 p-10 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-16 h-16 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="relative w-16 h-16 bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.icon}
                    </svg>
                  </div>
                </div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-[15px] font-light text-gray-500 leading-relaxed">{service.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-widest text-blue-600 opacity-70 group-hover:opacity-100 group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS — CSS-only carousel (radio-driven), no client JS */}
      <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-blue-700 text-white overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-[1600px] mx-auto">
          <div className="mb-16">
            <span className="text-[13px] uppercase tracking-widest text-blue-400 font-medium">Client Stories</span>
            <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-white tracking-tight mt-4">What Our Clients Say</h2>
          </div>

          <div className="relative max-w-[880px] mx-auto">
            {testimonials.map((_, i) => (
              <input
                key={`radio-${i}`}
                type="radio"
                name="testimonial-nav"
                id={`testimonial-${i + 1}`}
                defaultChecked={i === 0}
                className="testimonial-input"
                aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
              />
            ))}

            <div className="testimonial-track relative min-h-[380px] sm:min-h-[280px]">
              {testimonials.map((t, i) => {
                const prevNum = ((i - 1 + testimonials.length) % testimonials.length) + 1;
                const nextNum = ((i + 1) % testimonials.length) + 1;
                const initials = t.name.split(' ').map((n) => n[0]).join('');
                return (
                  <div key={t.name} className={`testimonial-slide testimonial-slide-${i + 1} absolute inset-0 flex flex-col justify-between`}>
                    <div>
                      <svg className="w-10 h-10 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.5 4C6 4 3 7.5 3 12c0 3.5 2 6 4.5 6 .5 0 1-.5 1-1v-4c0-.5-.5-1-1-1H6c.3-2 2-4 4-4V4zm10 0c-3.5 0-6.5 3.5-6.5 8 0 3.5 2 6 4.5 6 .5 0 1-.5 1-1v-4c0-.5-.5-1-1-1h-1.5c.3-2 2-4 4-4V4z" />
                      </svg>
                      <p className="text-[20px] sm:text-[26px] font-light leading-relaxed text-gray-100 max-w-3xl">{t.quote}</p>
                    </div>
                    <div className="flex items-center justify-between mt-10 flex-wrap gap-6">
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white text-[15px] font-medium shrink-0">
                          {initials}
                        </span>
                        <div>
                          <p className="text-[15px] font-medium text-white">{t.name}</p>
                          <p className="text-[13px] text-gray-400 font-light">
                            {t.role}, {t.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={`testimonial-${prevNum}`}
                          aria-label="Previous testimonial"
                          className="cursor-pointer w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors duration-150"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M11 17l-5-5 5-5M6 12h12" />
                          </svg>
                        </label>
                        <label
                          htmlFor={`testimonial-${nextNum}`}
                          aria-label="Next testimonial"
                          className="cursor-pointer w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors duration-150"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 7l5 5-5 5M18 12H6" />
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="testimonial-dots flex items-center gap-2 mt-10 justify-center">
              {testimonials.map((_, i) => (
                <label
                  key={`dot-${i}`}
                  htmlFor={`testimonial-${i + 1}`}
                  className={`testimonial-dot testimonial-dot-${i + 1} cursor-pointer h-2 w-2 rounded-full transition-all duration-200`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY DEVNTOM */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight mb-16">Why DEVNTOM Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div key={item.title} className="group hover:-translate-y-1 transition-transform duration-200">
                <span className="text-[13px] uppercase tracking-widest text-blue-600 font-medium">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[20px] font-light text-gray-900 mt-3 mb-3 group-hover:text-blue-600 transition-colors duration-200">{item.title}</h3>
                <p className="text-[15px] font-light text-gray-500 leading-relaxed">{item.desc}</p>
                <div className="w-10 h-[2px] bg-gray-200 mt-6 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECH STACK MARQUEE */}
      <section className="w-full py-16 bg-blue-700 border-t border-gray-800 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 mb-8">
          <span className="text-[13px] uppercase tracking-widest text-blue-400 font-medium">Modern Tech Stack</span>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 whitespace-nowrap marquee-track w-max">
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={`${tech}-${i}`} className="text-[24px] sm:text-[32px] font-light hover:text-gray-500 text-white transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight">Industries We Serve</h2>
            <Link href="/industries" className="text-[14px] uppercase tracking-widest font-medium border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-150 whitespace-nowrap">
              Explore all industries
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {industries.map((industry) => (
              <Link key={industry} href="/industries" className="group bg-white p-8 flex items-center justify-between hover:bg-blue-600 transition-colors duration-200">
                <span className="text-[16px] font-light text-gray-800 group-hover:text-white transition-colors duration-200">{industry}</span>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HOW WE WORK */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight mb-16">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((p) => (
              <div key={p.step} className="border border-gray-200 p-8 hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-white">
                <span className="text-[14px] uppercase tracking-widest text-blue-600 font-medium">{p.step}</span>
                <h3 className="text-[20px] font-light text-gray-900 mt-4 mb-3">{p.title}</h3>
                <p className="text-[15px] font-light text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES — image based */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16 gap-8">
            <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight">Featured Work</h2>
            <Link href="/case-studies" className="text-[14px] uppercase tracking-widest font-medium border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-150 whitespace-nowrap">
              View all case studies
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((story) => (
              <Link key={story.title} href="/case-studies" className="group flex flex-col border border-gray-200 overflow-hidden hover:border-blue-600 hover:-translate-y-1 transition-all duration-200">
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image src={story.image} alt={story.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-[11px] uppercase tracking-widest w-fit">{story.tag}</span>
                  <h3 className="text-[16px] font-light leading-snug text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{story.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA BANNER */}
      <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-white flex justify-center overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600 opacity-10 blur-3xl rounded-full animate-blob-slow" />
        <div className="relative max-w-[1600px] w-full bg-gray-900 text-white flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 p-10 sm:p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-[32px] sm:text-[44px] font-light leading-tight mb-6">Ready to architect your next system?</h2>
            <p className="text-[16px] sm:text-[18px] font-light text-gray-400 mb-10 max-w-md">
              Talk to our technical architects about your project — custom software, SaaS, AI automation, or a full digital platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="text-center bg-blue-600 px-8 py-4 uppercase tracking-widest text-[14px] font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-150">
                Get a Free Consultation
              </Link>
              <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer" className="text-center border border-gray-700 px-8 py-4 uppercase tracking-widest text-[14px] font-medium hover:border-blue-500 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-150">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[280px] sm:min-h-[400px] overflow-hidden">
            <Image src="/images/cta-workspace.jpg" alt="Devntom engineering workspace" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-blue-600/70" />
          </div>
        </div>
      </section>

      {/* 13. INSIGHTS / BLOG */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16 gap-8">
            <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight">Insights That Go Beyond the Code</h2>
            <Link href="/blog" className="text-[14px] uppercase tracking-widest font-medium border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-150 whitespace-nowrap">
              View all insights
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((item) => (
              <Link key={item.title} href="/blog" className="relative group aspect-square overflow-hidden flex items-end p-8 bg-gray-200">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-200" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 text-white text-[11px] uppercase tracking-widest mb-4 border border-white/20">{item.tag}</span>
                  <h3 className="text-[18px] font-light text-white leading-snug group-hover:translate-x-1 transition-transform duration-200">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ — native details/summary, zero client JS */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[36px] sm:text-[48px] font-light leading-none text-gray-900 tracking-tight mb-16">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between gap-4">
                  <span className="text-[17px] font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-150">{faq.q}</span>
                  <span className="faq-chevron shrink-0 text-blue-600 text-[22px] leading-none">+</span>
                </summary>
                <p className="text-[15px] font-light text-gray-500 leading-relaxed mt-4 max-w-2xl">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CONTACT FORM — functional server action, no client JS */}
      <section className="w-full max-w-[1600px] mx-auto my-24 sm:my-32 px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row border border-gray-200">
          <div className="w-full lg:w-1/2 bg-blue-600 p-10 sm:p-16 lg:p-24 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-[32px] sm:text-[44px] font-light leading-tight mb-6">
                Power your next
                <br />
                digital transformation.
              </h2>
              <p className="text-[16px] sm:text-[18px] font-light text-blue-100 max-w-md">
                Establish a direct channel with our technical architects to engineer your operational framework.
              </p>
            </div>
            <div className="mt-16 lg:mt-24 pt-10 border-t border-blue-500/50 flex flex-col gap-2">
              <h4 className="text-[13px] uppercase tracking-widest mb-2">DEVNTOM Solutions</h4>
              <a href="mailto:devntomsolutions@gmail.com" className="font-light text-blue-100 hover:text-white transition-colors duration-150 w-fit">devntomsolutions@gmail.com</a>
              <a href="tel:+923256036838" className="font-light text-blue-100 hover:text-white transition-colors duration-150 w-fit">+92 325 6036838 (PK)</a>
              <a href="tel:+966583408034" className="font-light text-blue-100 hover:text-white transition-colors duration-150 w-fit">+966 583 408034 (SA)</a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-10 sm:p-16 lg:p-24">
            <form action={submitContactForm} className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-[12px] uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input id="firstName" name="firstName" type="text" required className="w-full border-b border-gray-300 pb-4 text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors duration-150" />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="block text-[12px] uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input id="lastName" name="lastName" type="text" required className="w-full border-b border-gray-300 pb-4 text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors duration-150" />
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="email" className="block text-[12px] uppercase tracking-widest text-gray-500 mb-2">Business Email</label>
                <input id="email" name="email" type="email" required className="w-full border-b border-gray-300 pb-4 text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors duration-150" />
              </div>

              <div className="w-full">
                <label htmlFor="message" className="block text-[12px] uppercase tracking-widest text-gray-500 mb-2">Project Details</label>
                <textarea id="message" name="message" rows={4} required className="w-full border-b border-gray-300 pb-4 text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors duration-150 resize-none" />
              </div>

              <div className="mt-8">
                <button type="submit" className="bg-blue-600 text-white px-12 py-5 uppercase tracking-widest text-[14px] font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-150 w-full sm:w-auto">
                  Submit Inquiry
                </button>
              </div>

              <p className="text-[12px] text-gray-400 mt-4 leading-relaxed font-light">
                By submitting this form, you acknowledge our data processing procedures tailored for enterprise security.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}