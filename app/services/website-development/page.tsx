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
  Star,
  Quote,
} from "lucide-react";
import Reveal from "./Reveal";

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
    "affordable web development",
    "website redesign services",
    "SaaS website design",
    "startup website development",
  ],
  alternates: {
    canonical: "https://devntomsolutions.com/website-development",
  },
  openGraph: {
    title: "Web Development Company | Custom Next.js & React Websites | DEVNTOM Solutions",
    description:
      "Fast, SEO-optimised, mobile-first websites built with Next.js, React & TypeScript. Custom web development for startups, e-commerce & enterprise businesses.",
    url: "https://devntomsolutions.com/website-development",
    siteName: "DEVNTOM Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://devntomsolutions.com/og/website-development.jpg",
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
    images: ["https://devntomsolutions.com/og/website-development.jpg"],
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

const stats = [
  { value: "50+", label: "Websites Shipped" },
  { value: "90+", label: "Avg. Lighthouse Score" },
  { value: "24hr", label: "First Response Time" },
  { value: "4.9/5", label: "Average Client Rating" },
];

const trustLogos = [
  "Nexora Corp", "ShopSprint", "HealthBridge", "Ajax Global", "Skills Aura", "Hivenox", "AI Solution Technologies", "Nexora Corp", "ShopSprint", "HealthBridge",
];

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
  { name: "Nexora Corp", cat: "Corporate Website", result: "3× increase in inbound leads within 60 days", color: "from-blue-700 to-blue-950" },
  { name: "ShopSprint", cat: "E-Commerce Website", result: "65% revenue growth in first quarter after launch", color: "from-sky-600 to-blue-900" },
  { name: "HealthBridge", cat: "Healthcare Portal", result: "40% drop in bounce rate, 2× session duration", color: "from-indigo-700 to-blue-950" },
];

const testimonials = [
  {
    quote:
      "The new site paid for itself in the first month. Load times dropped, our lead form conversion nearly doubled, and it just feels premium.",
    name: "Founder",
    company: "Nexora Corp",
  },
  {
    quote:
      "DEVNTOM took a vague brief and turned it into a storefront that actually sells. Communication was clear from kickoff to launch.",
    name: "Marketing Lead",
    company: "ShopSprint",
  },
  {
    quote:
      "Technical SEO was handled properly from day one — no plugins duct-taped together. Rankings started moving within weeks.",
    name: "Operations Manager",
    company: "HealthBridge",
  },
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

const relatedLinks = [
  { href: "/services/ui-ux-design", label: "UI/UX Design Services" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/seo", label: "SEO Services" },
  { href: "/portfolio", label: "Our Portfolio" },
  { href: "/blog", label: "Web Development Blog" },
  { href: "/about", label: "About DEVNTOM Solutions" },
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

// ─── SHARED COMPONENTS ─────────────────────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${
        dark ? "border-blue-400/30 bg-blue-500/10" : "bg-white border-blue-100"
      }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-sky-400 animate-pulse" : "bg-blue-600 animate-pulse"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-sky-300" : "text-blue-700"}`}>{children}</span>
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm overflow-hidden transition-all duration-300 shadow-lg shadow-blue-900/40 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
      <span className="relative">{children}</span>
      <ArrowRight size={15} className="relative group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#05070F] overflow-hidden pt-24 sm:pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#05070F]" />
        <div className="animate-blob-a pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="animate-blob-b pointer-events-none absolute bottom-0 -right-24 w-[26rem] h-[26rem] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="animate-blob-c pointer-events-none absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] sm:bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 px-5 sm:px-8 py-20 sm:py-24 mx-auto max-w-7xl lg:px-16">
        <div className="max-w-4xl space-y-7 sm:space-y-8">
          <Reveal>
            <Pill dark>Web Development Services</Pill>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-black leading-[0.97] tracking-tight text-white">
              Websites That
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Work As Hard
              </span>
              <br />
              As You Do
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-white/55">
              DEVNTOM Solutions builds high-performance, responsive, and SEO-optimised websites using{" "}
              <strong className="text-white/80">Next.js, React, and TypeScript</strong> — websites that don&apos;t just
              look great, they convert visitors into customers and grow your business.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <PrimaryButton href="/contact">Start a Project</PrimaryButton>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                View Our Work <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
              {["50+ Websites Built", "90+ Lighthouse Scores", "Next.js & React", "SEO Optimised"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs sm:text-sm text-white/40">
                  <CheckCircle2 size={13} className="text-sky-400 flex-shrink-0" /> {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <h2 className="text-[18vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">
          WEB DEVELOPMENT
        </h2>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#05070F] to-transparent" />
      </div>
    </section>
  );
}

// ─── TRUST MARQUEE ─────────────────────────────────────────────────────────────

function TrustMarquee() {
  return (
    <section className="bg-[#070c1c] border-y border-white/5 py-6 overflow-hidden">
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
        Trusted by growing businesses
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-12 pr-12 animate-marquee whitespace-nowrap">
          {[...trustLogos, ...trustLogos].map((name, i) => (
            <span key={i} className="text-lg font-black tracking-tight text-white/25 hover:text-sky-400/60 transition-colors duration-300">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ─────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="bg-[#05070F] py-14 sm:py-16 px-5 sm:px-6 border-b border-white/5">
      <div className="grid grid-cols-2 gap-6 mx-auto max-w-6xl lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1">
              <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent">{s.value}</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-white/40">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────────────

function Features() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#f4f7fc]">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 sm:mb-16 space-y-4 text-center">
          <Pill>What&apos;s Included</Pill>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-[#05070F] tracking-tight">
            Everything Built In,
            <br />
            <span className="text-blue-900/25">Nothing Left Out</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className="h-full transition-all duration-300 bg-white border border-blue-100 p-6 sm:p-7 rounded-3xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1.5 group">
                <div className="flex items-center justify-center mb-5 transition-all duration-300 w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon size={20} className="transition-colors duration-300 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-base font-bold text-[#05070F]">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="px-5 sm:px-6 py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:flex-row md:items-end">
          <div className="space-y-4">
            <Pill>How We Work</Pill>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-[#05070F] tracking-tight">
              Our Web Development
              <br />
              <span className="text-blue-900/25">Process</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 rounded-full bg-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 md:self-auto"
          >
            Start a Project <ArrowRight size={14} />
          </Link>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className="relative h-full p-7 sm:p-8 transition-all duration-300 border border-blue-100 rounded-3xl bg-[#f4f7fc] hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="text-[3rem] sm:text-[3.5rem] font-black text-blue-900/10 group-hover:text-blue-200 transition-colors duration-300 leading-none mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="mb-2 text-base font-bold text-[#05070F]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                <div className="absolute w-2 h-2 transition-opacity duration-300 rounded-full opacity-0 top-6 right-6 bg-blue-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TECH STACK ───────────────────────────────────────────────────────────────

function TechStack() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#05070F] relative overflow-hidden">
      <div className="animate-blob-a pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="animate-blob-b pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end mb-12 sm:mb-14">
          <div className="space-y-4">
            <Pill dark>Tech Stack</Pill>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-white tracking-tight">
              Built With Modern,
              <br />
              <span className="text-white/30">Battle-Tested Tools</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            We pick the right tool for each job — never a one-size-fits-all approach.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-sky-400/30 hover:bg-white/[0.05] transition-all duration-300">
                <h3 className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-400 mb-4">{s.cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 hover:border-sky-400/40 hover:text-sky-300 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DELIVERABLES ─────────────────────────────────────────────────────────────

function Deliverables() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#f4f7fc]">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <Pill>What You Get</Pill>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-[#05070F] tracking-tight leading-[1.1]">
              Every Project Comes
              <br />
              <span className="text-blue-600">Fully Loaded</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              No hidden extras. Every deliverable listed below is included as standard across all our website
              development projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-[#05070F] rounded-full hover:bg-blue-600 hover:-translate-y-0.5"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="grid gap-3">
            {deliverables.map((d, i) => (
              <Reveal key={i} delay={(i % 5) * 60}>
                <div className="flex items-start gap-3 p-4 transition-all duration-300 bg-white border border-blue-100 rounded-2xl hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-md">
                  <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{d}</span>
                </div>
              </Reveal>
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
    <section className="px-5 sm:px-6 py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 sm:mb-16 space-y-4 text-center">
          <Pill>Pricing</Pill>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-[#05070F] tracking-tight">
            Simple, Transparent
            <br />
            <span className="text-blue-900/25">Pricing</span>
          </h2>
          <p className="max-w-md mx-auto text-sm text-slate-500">
            Every project is unique — prices below are starting points. We&apos;ll give you a precise quote after a
            free discovery call.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={i} delay={i * 100} className={pkg.highlight ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div
                className={`relative h-full rounded-3xl p-7 sm:p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.highlight
                    ? "bg-[#05070F] border-blue-500/30 shadow-2xl shadow-blue-900/30 lg:scale-105"
                    : "bg-[#f4f7fc] border-blue-100 hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -translate-x-1/2 -top-3 left-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-sky-400 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-900/40">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`font-black text-lg mb-1 ${pkg.highlight ? "text-white" : "text-[#05070F]"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-[2.4rem] sm:text-[2.6rem] font-black leading-none mb-3 ${pkg.highlight ? "text-sky-400" : "text-blue-600"}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/50" : "text-slate-500"}`}>
                    {pkg.desc}
                  </p>
                </div>
                <ul className="flex-1 mb-8 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-sky-400" : "text-blue-500"}`} />
                      <span className={`text-sm font-medium ${pkg.highlight ? "text-white/70" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all duration-300 hover:-translate-y-0.5 ${
                    pkg.highlight
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40"
                      : "bg-[#05070F] hover:bg-blue-600 text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#f4f7fc]">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12 sm:mb-14">
          <div className="space-y-4">
            <Pill>Our Work</Pill>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-[#05070F] tracking-tight">
              Websites We&apos;ve <span className="text-blue-900/25">Built</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 text-blue-600 hover:text-blue-500"
          >
            View All Work <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <Link
                href="/portfolio"
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30 block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} transition-transform duration-500 group-hover:scale-105`}>
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
                <div className="absolute flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-full opacity-0 top-5 right-5 bg-white/10 backdrop-blur-md border-white/20 group-hover:opacity-100 group-hover:rotate-45">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#05070F] relative overflow-hidden">
      <div className="animate-blob-c pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-12 sm:mb-16 space-y-4 text-center">
          <Pill dark>Client Results</Pill>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-white tracking-tight">
            Don&apos;t Take Our
            <br />
            <span className="text-white/30">Word For It</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="h-full p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-sky-400/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col">
                <Quote size={22} className="text-blue-500/50 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-sky-400 text-sky-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/70 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ (native details/summary — no JS required) ───────────────────────────

function FAQ() {
  return (
    <section className="px-5 sm:px-6 py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
          <Reveal className="space-y-5">
            <Pill>FAQ</Pill>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-[#05070F] tracking-tight leading-[1.1]">
              Web Development
              <br />
              <span className="text-blue-900/25">Questions Answered</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Still have questions?{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="font-semibold text-blue-600 hover:underline">
                Email us
              </a>{" "}
              or ping us on WhatsApp — we reply fast.
            </p>
          </Reveal>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <details className="group overflow-hidden border border-blue-100 bg-[#f4f7fc] rounded-2xl transition-colors duration-300 hover:border-blue-200 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between w-full px-5 sm:px-6 py-5 text-left cursor-pointer list-none">
                    <span className="text-sm font-bold text-[#05070F] transition-colors duration-300 group-open:text-blue-600 group-hover:text-blue-600">
                      {faq.q}
                    </span>
                    <span className="relative flex-shrink-0 w-7 h-7 ml-4 rounded-full bg-white text-slate-500 border border-blue-100 flex items-center justify-center transition-colors duration-300 group-open:bg-blue-600 group-open:text-white group-open:border-blue-600">
                      <span className="absolute w-3 h-[2px] bg-current rounded-full" />
                      <span className="absolute w-[2px] h-3 bg-current rounded-full transition-transform duration-300 group-open:rotate-90 group-open:scale-0" />
                    </span>
                  </summary>
                  <p className="px-5 sm:px-6 pb-5 text-sm leading-relaxed text-slate-500">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SEO CONTENT + INTERNAL LINKS ─────────────────────────────────────────────

function SEOContent() {
  return (
    <section className="px-5 sm:px-6 py-16 sm:py-20 bg-white border-t border-blue-50">
      <Reveal className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#05070F] tracking-tight">
          Professional Web Development Services Built to Rank and Convert
        </h2>
        <p className="text-sm leading-relaxed text-slate-500">
          DEVNTOM Solutions is a web development company specialising in custom websites built with Next.js, React,
          and TypeScript. Whether you need a corporate website, an e-commerce store, a SaaS marketing site, or a
          full platform redesign, our team combines clean engineering with conversion-focused design to deliver
          websites that load fast, rank well on Google, and turn visitors into customers.
        </p>
        <p className="text-sm leading-relaxed text-slate-500">
          Every website we build is engineered around Core Web Vitals, semantic HTML, and structured data — the
          technical foundations search engines use to evaluate and rank pages. Combined with mobile-first
          responsive design and CMS-driven content management, our clients get websites that are as easy to
          maintain as they are to find. Our web development work often pairs naturally with our{" "}
          <Link href="/services/ui-ux-design" className="font-semibold text-blue-600 hover:underline">
            UI/UX design
          </Link>
          ,{" "}
          <Link href="/services/seo" className="font-semibold text-blue-600 hover:underline">
            SEO
          </Link>
          , and{" "}
          <Link href="/services/mobile-app-development" className="font-semibold text-blue-600 hover:underline">
            mobile app development
          </Link>{" "}
          services for businesses that need a complete digital presence.
        </p>

        <div className="flex flex-wrap gap-2.5 pt-2">
          {relatedLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-100 bg-[#f4f7fc] text-xs font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
            >
              {l.label} <ArrowUpRight size={12} />
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-6 bg-[#f4f7fc]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-blue-900/50 via-[#070c1c] to-[#0b1230] border border-blue-500/20 p-8 sm:p-10 md:p-20 overflow-hidden shadow-2xl">
            <div className="animate-blob-a pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-[100px]" />
            <div className="animate-blob-b pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-sky-500/20 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-10 sm:gap-12 lg:flex-row lg:items-center">
              <div className="max-w-xl space-y-6">
                <Pill dark>Let&apos;s Build Your Website</Pill>
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                  Ready to Get a
                  <br />
                  Website That{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                    Converts?
                  </span>
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-white/50">
                  Tell us about your project and we&apos;ll get back within 24 hours with a clear plan and a
                  transparent quote.
                </p>
              </div>

              <div className="flex flex-col w-full gap-4 lg:w-auto">
                <PrimaryButton href="/contact" className="w-full lg:w-auto">
                  Start a Project
                </PrimaryButton>
                <a
                  href="https://wa.me/923256036838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-300 border rounded-full border-white/15 hover:border-white/40 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href="mailto:devntomsolutions@gmail.com"
                    className="flex items-center gap-2 text-sm transition-colors duration-300 text-white/40 hover:text-white/70"
                  >
                    <Mail size={14} className="text-sky-400" /> devntomsolutions@gmail.com
                  </a>
                  <a
                    href="tel:+923256036838"
                    className="flex items-center gap-2 text-sm transition-colors duration-300 text-white/40 hover:text-white/70"
                  >
                    <Phone size={14} className="text-sky-400" /> +92 325 603 6838
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── STICKY MOBILE CTA ─────────────────────────────────────────────────────────

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      <div className="flex items-center gap-3 px-4 py-3 bg-[#05070F]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.3)]">
        <a
          href="https://wa.me/923256036838"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white hover:border-white/40 transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={17} />
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors duration-300"
        >
          Get a Free Quote <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

// ─── PAGE (Server Component, fully static) ────────────────────────────────────

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="overflow-x-hidden pb-20 lg:pb-0">
        <Hero />
        <TrustMarquee />
        <Stats />
        <Features />
        <Process />
        <TechStack />
        <Deliverables />
        <Packages />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <SEOContent />
        <CTA />
      </main>
      <MobileStickyCTA />
    </>
  );
}