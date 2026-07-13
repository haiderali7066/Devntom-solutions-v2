import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Globe,
  Zap,
  Search,
  ShieldCheck,
  Smartphone,
  BarChart3,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Web Development Company | Custom Next.js & React Websites | DEVNTOM Solutions",
  description:
    "DEVNTOM Solutions builds fast, SEO-optimised, mobile-first websites using Next.js, React & TypeScript. Custom web development for startups, e-commerce & enterprise — from $800. Get a free quote today.",
  keywords: [
    "web development company",
    "Next.js website development",
    "React web development",
    "custom website design",
    "SEO optimised websites",
    "e-commerce website development",
    "business website design Pakistan",
    "Next.js developer",
    "responsive website design",
    "professional web design agency",
    "DEVNTOM Solutions",
    "TypeScript web development",
    "fast loading website design",
    "CMS website integration",
  ],
  alternates: {
    canonical: "https://devntomsolutions.com/web-development",
  },
  openGraph: {
    title: "Web Development Company | Custom Next.js & React Websites | DEVNTOM Solutions",
    description:
      "Fast, SEO-optimised, mobile-first websites built with Next.js, React & TypeScript. Custom web development for startups, e-commerce & enterprise businesses.",
    url: "https://devntomsolutions.com/web-development",
    siteName: "DEVNTOM Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://devntomsolutions.com/og/web-development.jpg",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions - Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | Custom Next.js & React Websites",
    description:
      "Fast, SEO-optimised, mobile-first websites built with Next.js, React & TypeScript.",
    images: ["https://devntomsolutions.com/og/web-development.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Globe,
    title: "Responsive Design",
    desc: "Pixel-perfect layouts that look flawless on every screen — from mobile to ultrawide desktop.",
  },
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    desc: "Core Web Vitals optimised. Sub-second load times via SSR, ISR, edge caching, and image optimisation.",
  },
  {
    icon: Search,
    title: "SEO-Optimised Architecture",
    desc: "Built-in technical SEO: semantic HTML, structured data, sitemaps, canonical tags, and Open Graph.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    desc: "HTTPS, CSRF protection, rate limiting, secure headers, and vulnerability-hardened deployments.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    desc: "Every project is designed mobile-first, then progressively enhanced for larger viewports.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion",
    desc: "Integrated analytics, heatmaps, and A/B testing hooks so you can measure and optimise from day one.",
  },
];

const techStack = [
  { cat: "Framework", items: ["Next.js 14", "React 18", "TypeScript"] },
  { cat: "Styling", items: ["Tailwind CSS", "Framer Motion", "GSAP"] },
  { cat: "CMS", items: ["Sanity", "Contentful", "Strapi", "WordPress"] },
  { cat: "Deployment", items: ["Vercel", "AWS", "Cloudflare", "Docker"] },
  { cat: "Database", items: ["PostgreSQL", "Supabase", "PlanetScale"] },
  { cat: "Auth & API", items: ["NextAuth", "Stripe", "REST", "GraphQL"] },
];

const deliverables = [
  "Fully responsive website (mobile + tablet + desktop)",
  "SEO-optimised page structure and metadata",
  "Performance audit — 90+ Lighthouse score target",
  "CMS integration for content management",
  "Contact forms with email notifications",
  "Google Analytics / Tag Manager setup",
  "Sitemap.xml and robots.txt",
  "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
  "30-day post-launch support",
  "Full source code handover",
];

const process = [
  { num: "01", title: "Discovery Call", desc: "We learn your brand, goals, target audience, and competitors. We leave with a clear brief." },
  { num: "02", title: "Wireframes & Design", desc: "We create low-fi wireframes, then high-fidelity UI mockups in Figma for your approval." },
  { num: "03", title: "Development", desc: "We build in Next.js with clean, maintainable code. Weekly progress updates throughout." },
  { num: "04", title: "QA & Testing", desc: "Cross-browser, cross-device, performance, and accessibility testing before any launch." },
  { num: "05", title: "Launch", desc: "Zero-downtime deployment with full DNS, SSL, and monitoring configured." },
  { num: "06", title: "Support & Growth", desc: "30-day free support then flexible maintenance plans. We grow the site with your business." },
];

const portfolioItems = [
  { name: "Nexora Corp", cat: "Corporate Website", result: "3× increase in inbound leads within 60 days", color: "bg-violet-600" },
  { name: "ShopSprint", cat: "E-Commerce Website", result: "65% revenue growth in first quarter after launch", color: "bg-indigo-600" },
  { name: "HealthBridge", cat: "Healthcare Portal", result: "40% drop in bounce rate, 2× session duration", color: "bg-emerald-600" },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "A standard informational website takes 2–4 weeks. Larger sites or those with custom animations, CMS integrations, or complex features typically take 4–8 weeks, depending on scope and content readiness.",
  },
  {
    q: "Do you build on WordPress or only Next.js?",
    a: "We build primarily on Next.js — our recommendation for performance, SEO, and long-term maintainability — but we also work with WordPress, Webflow, and headless CMS setups depending on your team's workflow and technical needs.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Absolutely. We integrate a CMS such as Sanity, Contentful, Strapi, or WordPress so you can edit pages, blog posts, team members, and other content without touching any code.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes — website redesigns are a significant part of our work. We audit your current site's performance and SEO health, preserve what's working, and rebuild the rest to a modern, conversion-focused standard.",
  },
  {
    q: "Is website hosting included in the price?",
    a: "We configure and deploy your website to your preferred host — Vercel, AWS, or Cloudflare are our top recommendations. Hosting costs are paid directly to the provider, and we help you choose the most cost-effective option for your traffic needs.",
  },
  {
    q: "What happens if I need changes after the website launches?",
    a: "Every project includes 30 days of free post-launch support for bug fixes and minor adjustments. After that, we offer affordable monthly maintenance retainers for ongoing updates, new features, and content changes.",
  },
  {
    q: "Do you optimise websites for search engines (SEO)?",
    a: "Yes. Every website we build ships with technical SEO baked in: semantic HTML, structured data (JSON-LD), optimised meta tags, XML sitemaps, fast Core Web Vitals, and clean URL structures designed to rank well on Google.",
  },
  {
    q: "Can you build an e-commerce website?",
    a: "Yes. We build custom e-commerce storefronts as well as integrations with Shopify, WooCommerce, and headless commerce platforms — including product catalogues, cart/checkout flows, and payment gateway integration via Stripe or similar providers.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$800",
    desc: "Perfect for startups and personal brands that need a fast, professional online presence.",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "CMS integration", "30-day support"],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "$1,800",
    desc: "The most popular choice for growing businesses that need more pages, richer content, and custom features.",
    features: ["Up to 12 pages", "Advanced page layouts", "Blog / CMS", "Full SEO optimisation", "Analytics setup", "A/B testing ready", "60-day support"],
    highlight: true,
    cta: "Start a Project",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organisations that need complex integrations, multilingual support, or bespoke functionality.",
    features: ["Unlimited pages", "Custom integrations", "Multilingual support", "Advanced analytics", "Priority support", "Dedicated developer", "SLA guarantee"],
    highlight: false,
    cta: "Talk to Us",
  },
];

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://devntomsolutions.com/web-development#service",
      name: "Web Development Services",
      serviceType: "Web Development",
      provider: {
        "@type": "Organization",
        name: "DEVNTOM Solutions",
        url: "https://devntomsolutions.com",
        email: "devntomsolutions@gmail.com",
        telephone: "+92-325-603-6838",
      },
      areaServed: "Worldwide",
      description:
        "Custom Next.js, React, and TypeScript web development including responsive design, SEO optimisation, CMS integration, and e-commerce solutions.",
      offers: packages.map((pkg) => ({
        "@type": "Offer",
        name: `${pkg.name} Website Package`,
        price: pkg.price.replace(/[^0-9.]/g, "") || undefined,
        priceCurrency: "USD",
        description: pkg.desc,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://devntomsolutions.com/web-development#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://devntomsolutions.com" },
        { "@type": "ListItem", position: 2, name: "Web Development", item: "https://devntomsolutions.com/web-development" },
      ],
    },
  ],
};

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${
        dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"
      }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_20%,rgba(124,58,237,0.3)_45%,rgba(139,92,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 px-8 py-24 mx-auto max-w-7xl lg:px-16">
        <div className="max-w-4xl space-y-8">
          <Pill dark>Web Development services</Pill>

          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white">
            Websites That
            <br />
            <span className="text-violet-400">Work As Hard</span>
            <br />
            As You Do
          </h1>

          <p className="max-w-xl text-base font-medium leading-relaxed text-white/50">
            DEVNTOM Solutions builds high-performance, responsive, and SEO-optimised websites using{" "}
            <strong className="text-white/70">Next.js, React, and TypeScript</strong> — websites that don&apos;t just
            look great, they convert visitors into customers and grow your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-full transition-all duration-300 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 active:scale-95"
            >
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold text-sm rounded-full transition-all duration-300"
            >
              View Our Work <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            {["50+ Websites Built", "90+ Lighthouse Scores", "Next.js & React", "SEO Optimised"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/40">
                <CheckCircle2 size={13} className="text-violet-400" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <h2 className="text-[16vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">
          WEB DEVELOPMENT
        </h2>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────────────

function Features() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <Pill>What&apos;s Included</Pill>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
            Everything Built In,
            <br />
            <span className="text-gray-400">Nothing Left Out</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="transition-all duration-300 bg-white border border-gray-100 p-7 rounded-3xl hover:border-violet-200 hover:shadow-lg hover:-translate-y-1.5 group"
            >
              <div className="flex items-center justify-center mb-5 transition-colors duration-300 w-11 h-11 rounded-xl bg-violet-50 group-hover:bg-violet-600">
                <f.icon size={20} className="transition-colors duration-300 text-violet-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row md:items-end">
          <div className="space-y-4">
            <Pill>How We Work</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              Our Web Development
              <br />
              <span className="text-gray-400">Process</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 rounded-full bg-violet-600 hover:bg-violet-500 md:self-auto"
          >
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <div
              key={i}
              className="relative p-8 transition-all duration-300 border border-gray-100 rounded-3xl bg-gray-50 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="text-[3.5rem] font-black text-gray-100 group-hover:text-violet-100 transition-colors duration-300 leading-none mb-4 select-none">
                {step.num}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
              <div className="absolute w-2 h-2 transition-opacity duration-300 rounded-full opacity-0 top-6 right-6 bg-violet-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TECH STACK ───────────────────────────────────────────────────────────────

function TechStack() {
  return (
    <section className="py-24 px-6 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-14">
          <div className="space-y-4">
            <Pill dark>Tech Stack</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight">
              Built With Modern,
              <br />
              <span className="text-white/30">Battle-Tested Tools</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            We pick the right tool for each job — never a one-size-fits-all approach.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-violet-500/30 transition-all duration-300"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-400 mb-4">{s.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 hover:border-violet-400/40 hover:text-violet-300 transition-colors duration-300 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DELIVERABLES ─────────────────────────────────────────────────────────────

function Deliverables() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <Pill>What You Get</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Every Project Comes
              <br />
              <span className="text-violet-600">Fully Loaded</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              No hidden extras. Every deliverable listed below is included as standard across all our website
              development projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-violet-600"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-3">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:border-violet-200 hover:-translate-y-0.5"
              >
                <CheckCircle2 size={16} className="text-violet-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PACKAGES ─────────────────────────────────────────────────────────────────

function Packages() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <Pill>Pricing</Pill>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
            Simple, Transparent
            <br />
            <span className="text-gray-400">Pricing</span>
          </h2>
          <p className="max-w-md mx-auto text-sm text-gray-500">
            Every project is unique — prices below are starting points. We&apos;ll give you a precise quote after a
            free discovery call.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlight
                  ? "bg-[#0d0d12] border-violet-500/30 shadow-2xl shadow-violet-900/20"
                  : "bg-gray-50 border-gray-100 hover:border-violet-200 hover:shadow-lg"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -translate-x-1/2 -top-3 left-1/2">
                  <span className="px-4 py-1 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-black text-lg mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <div className={`text-[2.6rem] font-black leading-none mb-3 ${pkg.highlight ? "text-violet-400" : "text-violet-600"}`}>
                  {pkg.price}
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/50" : "text-gray-500"}`}>
                  {pkg.desc}
                </p>
              </div>
              <ul className="flex-1 mb-8 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-violet-400" : "text-violet-500"}`} />
                    <span className={`text-sm font-medium ${pkg.highlight ? "text-white/70" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40"
                    : "bg-gray-900 hover:bg-violet-600 text-white"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <div className="space-y-4">
            <Pill>Our Work</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              Websites We&apos;ve <span className="text-gray-400">Built</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 text-violet-600 hover:text-violet-500"
          >
            View All Work <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.map((p, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 ${p.color}`}>
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[6rem] font-black text-white/10 select-none">{p.name[0]}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">{p.cat}</p>
                <h3 className="mb-2 text-xl font-black text-white">{p.name}</h3>
                <p className="text-xs leading-relaxed text-white/60">{p.result}</p>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transition-opacity duration-300 border rounded-full opacity-0 top-5 right-5 bg-white/10 backdrop-blur-md border-white/20 group-hover:opacity-100">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ (native details/summary — no JS required) ───────────────────────────

function FAQ() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <Pill>FAQ</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Web Development
              <br />
              <span className="text-gray-400">Questions Answered</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              Still have questions?{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="font-semibold text-violet-600 hover:underline">
                Email us
              </a>{" "}
              or ping us on WhatsApp — we reply fast.
            </p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden border border-gray-100 bg-gray-50 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer list-none">
                  <span className="text-sm font-bold text-gray-800 transition-colors duration-300 group-open:text-violet-600 group-hover:text-violet-600">
                    {faq.q}
                  </span>
                  <span className="relative flex-shrink-0 w-7 h-7 ml-4 rounded-full bg-white text-gray-500 border border-gray-200 flex items-center justify-center transition-colors duration-300 group-open:bg-violet-600 group-open:text-white group-open:border-violet-600">
                    <span className="absolute w-3 h-[2px] bg-current rounded-full" />
                    <span className="absolute w-[2px] h-3 bg-current rounded-full transition-transform duration-300 group-open:rotate-90 group-open:scale-0" />
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SEO CONTENT BLOCK ────────────────────────────────────────────────────────

function SEOContent() {
  return (
    <section className="px-6 py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Professional Web Development Services Built to Rank and Convert
        </h2>
        <p className="text-sm leading-relaxed text-gray-500">
          DEVNTOM Solutions is a web development company specialising in custom websites built with Next.js, React,
          and TypeScript. Whether you need a corporate website, an e-commerce store, a SaaS marketing site, or a
          full platform redesign, our team combines clean engineering with conversion-focused design to deliver
          websites that load fast, rank well on Google, and turn visitors into customers.
        </p>
        <p className="text-sm leading-relaxed text-gray-500">
          Every website we build is engineered around Core Web Vitals, semantic HTML, and structured data — the
          technical foundations search engines use to evaluate and rank pages. Combined with mobile-first
          responsive design and CMS-driven content management, our clients get websites that are as easy to
          maintain as they are to find.
        </p>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-20 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-[#0d0d12] rounded-[48px] p-10 md:p-20 overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-700/15 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-6">
              <Pill dark>Let&apos;s Build Your Website</Pill>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to Get a
                <br />
                Website That <span className="text-violet-400">Converts?</span>
              </h2>
              <p className="text-base leading-relaxed text-white/50">
                Tell us about your project and we&apos;ll get back within 24 hours with a clear plan and a
                transparent quote.
              </p>
            </div>

            <div className="flex flex-col w-full gap-4 lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-violet-600 hover:bg-violet-500 shadow-violet-900/40 active:scale-95"
              >
                Start a Project <ArrowRight size={15} />
              </Link>
              <a 
                href="https://wa.me/923256036838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-300 border rounded-full border-white/15 hover:border-white/40"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <a 
                  href="mailto:devntomsolutions@gmail.com"
                  className="flex items-center gap-2 text-sm transition-colors duration-300 text-white/40 hover:text-white/70"
                >
                  <Mail size={14} className="text-violet-500" /> devntomsolutions@gmail.com
                </a>
                <a 
                  href="tel:+923256036838"
                  className="flex items-center gap-2 text-sm transition-colors duration-300 text-white/40 hover:text-white/70"
                >
                  <Phone size={14} className="text-violet-500" /> +92 325 603 6838
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE (Server Component) ─────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <Process />
        <TechStack />
        <Deliverables />
        <Packages />
        <Portfolio />
        <FAQ />
        <SEOContent />
        <CTA />
      </main>
    </>
  );
}