"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Plus,
  Minus,
  Mail,
  MessageCircle,
  Phone,
  Globe,
  Zap,
  Search,
  ShieldCheck,
  Smartphone,
  BarChart3,
  Code2,
} from "lucide-react";

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
  { cat: "Framework",  items: ["Next.js 14", "React 18", "TypeScript"] },
  { cat: "Styling",    items: ["Tailwind CSS", "Framer Motion", "GSAP"] },
  { cat: "CMS",        items: ["Sanity", "Contentful", "Strapi", "WordPress"] },
  { cat: "Deployment", items: ["Vercel", "AWS", "Cloudflare", "Docker"] },
  { cat: "Database",   items: ["PostgreSQL", "Supabase", "PlanetScale"] },
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
  { num: "01", title: "Discovery Call",       desc: "We learn your brand, goals, target audience, and competitors. We leave with a clear brief." },
  { num: "02", title: "Wireframes & Design",  desc: "We create low-fi wireframes, then high-fidelity UI mockups in Figma for your approval." },
  { num: "03", title: "Development",          desc: "We build in Next.js with clean, maintainable code. Weekly progress updates throughout." },
  { num: "04", title: "QA & Testing",         desc: "Cross-browser, cross-device, performance, and accessibility testing before any launch." },
  { num: "05", title: "Launch",               desc: "Zero-downtime deployment with full DNS, SSL, and monitoring configured." },
  { num: "06", title: "Support & Growth",     desc: "30-day free support then flexible maintenance plans. We grow the site with your business." },
];

const portfolioItems = [
  { name: "Nexora Corp",    cat: "Corporate Website",   result: "3× increase in inbound leads within 60 days",      color: "bg-violet-600" },
  { name: "ShopSprint",     cat: "E-Commerce Website",  result: "65% revenue growth in first quarter after launch",  color: "bg-indigo-600" },
  { name: "HealthBridge",   cat: "Healthcare Portal",   result: "40% drop in bounce rate, 2× session duration",      color: "bg-emerald-600" },
];

const faqs = [
  { q: "How long does a website take to build?",            a: "A standard informational website takes 2–4 weeks. Larger sites or those with custom animations, CMS integrations, or complex features typically take 4–8 weeks." },
  { q: "Do you build on WordPress?",                        a: "Yes. We build on Next.js (our recommendation for performance and SEO) as well as WordPress, Webflow, and headless CMS setups — whatever fits your team and workflow best." },
  { q: "Will I be able to update the site myself?",         a: "Absolutely. We integrate a CMS so you can edit pages, blogs, team members, and other content without touching code." },
  { q: "Do you redesign existing websites?",                a: "Yes — redesigns are a big part of our work. We audit your current site, preserve what's working, and rebuild the rest to a modern standard." },
  { q: "Is hosting included?",                              a: "We configure and deploy to your preferred host (Vercel, AWS, etc.). Hosting costs are paid directly to the provider — we help you choose the most cost-effective option." },
  { q: "What if I need changes after launch?",              a: "Every project includes 30 days of free post-launch support. After that, we offer affordable monthly maintenance retainers." },
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
    desc: "The most popular choice for growing businesses that need more pages, animations, and custom features.",
    features: ["Up to 12 pages", "Advanced animations", "Blog / CMS", "Full SEO optimisation", "Analytics setup", "A/B testing ready", "60-day support"],
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

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${
      dark
        ? "border-violet-500/30 bg-violet-500/10"
        : "bg-white border-gray-200"
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_20%,rgba(124,58,237,0.3)_45%,rgba(139,92,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
        </div>
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 px-8 py-24 mx-auto max-w-7xl lg:px-16">
        <div className="max-w-4xl space-y-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Pill dark>Web Development</Pill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white"
          >
            Websites That
            <br />
            <span className="text-violet-400">Work As Hard</span>
            <br />
            As You Do
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
            className="max-w-xl text-base font-medium leading-relaxed text-white/50"
          >
            We build high-performance, responsive, and SEO-optimised websites that don't just look great — they convert visitors into customers and grow your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-violet-900/40 active:scale-95">
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/50 text-white font-bold text-sm rounded-full transition-all">
              View Our Work <ArrowUpRight size={15} />
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            {["50+ Websites Built", "90+ Lighthouse Scores", "Next.js & React", "SEO Optimised"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/40">
                <CheckCircle2 size={13} className="text-violet-400" /> {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wordmark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <motion.h2
          initial={{ y: "100%" }} animate={{ y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-[16vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center"
        >
          WEB DEVELOPMENT
        </motion.h2>
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
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Pill>What's Included</Pill>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
          >
            Everything Built In,<br /><span className="text-gray-400">Nothing Left Out</span>
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              whileHover={{ y: -6 }}
              className="transition-all bg-white border border-gray-100 p-7 rounded-3xl hover:border-violet-200 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center mb-5 transition-colors w-11 h-11 rounded-xl bg-violet-50 group-hover:bg-violet-600">
                <f.icon size={20} className="transition-colors text-violet-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </motion.div>
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
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Pill>How We Work</Pill>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
            >
              Our Web Development<br /><span className="text-gray-400">Process</span>
            </motion.h2>
          </div>
          <Link href="/contact"
            className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-full bg-violet-600 hover:bg-violet-500 md:self-auto">
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              className="relative p-8 transition-all border border-gray-100 rounded-3xl bg-gray-50 hover:border-violet-200 hover:shadow-lg group"
            >
              <div className="text-[3.5rem] font-black text-gray-100 group-hover:text-violet-100 transition-colors leading-none mb-4 select-none">
                {step.num}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
              <div className="absolute w-2 h-2 transition-opacity rounded-full opacity-0 top-6 right-6 bg-violet-500 group-hover:opacity-100" />
            </motion.div>
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
              Built With Modern,<br /><span className="text-white/30">Battle-Tested Tools</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            We pick the right tool for each job — never a one-size-fits-all approach.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-violet-500/30 transition-all"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-400 mb-4">{s.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 hover:border-violet-400/40 hover:text-violet-300 transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
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
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Pill>What You Get</Pill>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              Every Project Comes<br /><span className="text-violet-600">Fully Loaded</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500"
            >
              No hidden extras. Every deliverable listed below is included as standard across all our website projects.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all bg-gray-900 rounded-full hover:bg-violet-600">
                Get a Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="grid gap-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.04 * i }}
                className="flex items-start gap-3 p-4 transition-all bg-white border border-gray-100 rounded-2xl hover:border-violet-200"
              >
                <CheckCircle2 size={16} className="text-violet-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">{d}</span>
              </motion.div>
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
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Pill>Pricing</Pill>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
          >
            Simple, Transparent<br /><span className="text-gray-400">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="max-w-md mx-auto text-sm text-gray-500"
          >
            Every project is unique — prices below are starting points. We'll give you a precise quote after a free discovery call.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 * i }}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all ${
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
                <h3 className={`font-black text-lg mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
                <div className={`text-[2.6rem] font-black leading-none mb-3 ${pkg.highlight ? "text-violet-400" : "text-violet-600"}`}>
                  {pkg.price}
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/50" : "text-gray-500"}`}>{pkg.desc}</p>
              </div>
              <ul className="flex-1 mb-8 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-violet-400" : "text-violet-500"}`} />
                    <span className={`text-sm font-medium ${pkg.highlight ? "text-white/70" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all ${
                  pkg.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40"
                    : "bg-gray-900 hover:bg-violet-600 text-white"
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
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
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Pill>Our Work</Pill>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
            >
              Websites We've <span className="text-gray-400">Built</span>
            </motion.h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-violet-600 hover:text-violet-500">
            View All Work <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 * i }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
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
              <div className="absolute flex items-center justify-center w-8 h-8 transition-opacity border rounded-full opacity-0 top-5 right-5 bg-white/10 backdrop-blur-md border-white/20 group-hover:opacity-100">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Pill>FAQ</Pill>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              Web Dev<br /><span className="text-gray-400">Questions Answered</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500"
            >
              Still have questions?{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="font-semibold text-violet-600 hover:underline">
                Email us
              </a>{" "}
              or ping us on WhatsApp — we reply fast.
            </motion.p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden border border-gray-100 bg-gray-50 rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left group"
                >
                  <span className={`text-sm font-bold transition-colors ${open === i ? "text-violet-600" : "text-gray-800 group-hover:text-violet-600"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${open === i ? "bg-violet-600 text-white" : "bg-white text-gray-500 border border-gray-200"}`}>
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
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
              <Pill dark>Let's Build Your Website</Pill>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to Get a<br />
                Website That <span className="text-violet-400">Converts?</span>
              </h2>
              <p className="text-base leading-relaxed text-white/50">
                Tell us about your project and we'll get back within 24 hours with a clear plan and a transparent quote.
              </p>
            </div>

            <div className="flex flex-col w-full gap-4 lg:w-auto">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full shadow-lg bg-violet-600 hover:bg-violet-500 shadow-violet-900/40 active:scale-95">
                Start a Project <ArrowRight size={15} />
              </Link>
              <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all border rounded-full border-white/15 hover:border-white/40">
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <a href="mailto:devntomsolutions@gmail.com" className="flex items-center gap-2 text-sm transition-colors text-white/40 hover:text-white/70">
                  <Mail size={14} className="text-violet-500" /> devntomsolutions@gmail.com
                </a>
                <a href="tel:+923256036838" className="flex items-center gap-2 text-sm transition-colors text-white/40 hover:text-white/70">
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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Process />
      <TechStack />
      <Deliverables />
      <Packages />
      <Portfolio />
      <FAQ />
      <CTA />
    </main>
  );
}