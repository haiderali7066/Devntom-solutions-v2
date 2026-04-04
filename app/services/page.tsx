"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Globe, Megaphone, Code2, Smartphone, Palette, Bot,
  ArrowRight, CheckCircle2, ChevronRight, Star,
  Zap, Shield, Users, BarChart3, MessageCircle,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const ACCENT = "#0ea5e9";

const SERVICES = [
  {
    id: "website-development",
    icon: Globe,
    label: "01",
    name: "Website Development",
    tagline: "Built to perform. Designed to convert.",
    desc: "From landing pages and CMS-powered marketing sites to complex SaaS platforms and e-commerce stores — we build websites that are fast, accessible, and engineered to grow with your business.",
    features: [
      "Custom Website Design & Development",
      "CMS — WordPress, Webflow, Sanity",
      "E-Commerce (Shopify, WooCommerce)",
      "Web Application Development",
      "SaaS Platform Engineering",
      "Website Maintenance & Support",
      "SEO-Ready Architecture",
      "Performance & Core Web Vitals Optimization",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Shopify", "WordPress"],
    color: "#0ea5e9",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&q=80",
    href: "/services/website-development",
    stat: { value: "65%", label: "avg. conversion lift" },
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    label: "02",
    name: "Digital Marketing",
    tagline: "Grow visibility. Drive revenue.",
    desc: "Data-first digital marketing across every channel — Google Ads, Meta, SEO, content strategy, and full social media management — engineered to put your brand in front of the right people at the right time.",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta & Instagram Ads",
      "Search Engine Optimization (SEO)",
      "Content Strategy & Creation",
      "Social Media Management",
      "Email Marketing Campaigns",
      "Analytics & Conversion Tracking",
      "Brand Identity & Design",
    ],
    tech: ["Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "Mailchimp", "Canva Pro", "GA4"],
    color: "#f59e0b",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=80",
    href: "/services/digital-marketing",
    stat: { value: "3×", label: "avg. organic traffic growth" },
  },
  {
    id: "software-development",
    icon: Code2,
    label: "03",
    name: "Software Development",
    tagline: "Enterprise systems. Built for scale.",
    desc: "Custom enterprise software built to replace fragmented workflows — ERP systems, CRMs, internal tools, and complex automation platforms that save time, cut costs, and grow with your organisation.",
    features: [
      "Custom ERP Systems",
      "CRM Development & Integration",
      "Internal Business Tools",
      "Workflow Automation Platforms",
      "Third-Party API Integrations",
      "Legacy System Modernisation",
      "Cloud Infrastructure & DevOps",
      "Security Audits & Compliance",
    ],
    tech: ["Python", "Node.js", "PostgreSQL", "Docker", "AWS", "Laravel", "GraphQL"],
    color: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=80",
    href: "/services/software-development",
    stat: { value: "40%", label: "avg. overhead reduction" },
  },
  {
    id: "app-development",
    icon: Smartphone,
    label: "04",
    name: "App Development",
    tagline: "iOS. Android. Loved by users.",
    desc: "Native and cross-platform mobile apps — from polished consumer experiences to complex enterprise apps. We take you from zero to App Store, handling everything from UX through deployment.",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "Cross-Platform (React Native, Flutter)",
      "MVP Development & Rapid Prototyping",
      "App Store & Play Store Submission",
      "Push Notifications & Real-time Features",
      "Offline-First Architecture",
      "App Maintenance & Version Updates",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Supabase"],
    color: "#10b981",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80",
    href: "/services/app-development",
    stat: { value: "10k+", label: "downloads on first launch" },
  },
  {
    id: "uiux-design",
    icon: Palette,
    label: "05",
    name: "UI/UX Design",
    tagline: "Interfaces users remember.",
    desc: "User research, information architecture, wireframing, and pixel-perfect design systems — we craft interfaces that feel effortless to use, look unmistakably yours, and perform on every screen.",
    features: [
      "User Research & Personas",
      "Information Architecture",
      "Wireframing & Low-fi Prototyping",
      "High-Fidelity UI Design",
      "Interactive Prototypes",
      "Design Systems & Component Libraries",
      "Usability Testing",
      "Handoff to Development (Figma tokens)",
    ],
    tech: ["Figma", "FigJam", "Framer", "Principle", "Maze", "Lottie", "Zeroheight"],
    color: "#ec4899",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80",
    href: "/services/uiux-design",
    stat: { value: "4.9★", label: "avg. client design rating" },
  },
  {
    id: "ai-automation",
    icon: Bot,
    label: "06",
    name: "AI Automation & Chatbots",
    tagline: "Automate the work. Scale the results.",
    desc: "Intelligent chatbots, LLM-powered tools, and no-code/pro-code automation workflows that eliminate repetitive tasks, reduce support costs, and run your business backend around the clock.",
    features: [
      "AI Chatbot Design & Development",
      "LLM Integration (OpenAI, Claude, Gemini)",
      "Workflow Automation (n8n, Make, Zapier)",
      "RAG — Knowledge Base Chatbots",
      "CRM & Helpdesk AI Assistants",
      "Lead Qualification Bots",
      "Voice AI & IVR Systems",
      "Custom AI Dashboard & Analytics",
    ],
    tech: ["OpenAI", "LangChain", "n8n", "Make", "Pinecone", "Supabase", "Python"],
    color: "#f97316",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop&q=80",
    href: "/services/ai-automation",
    stat: { value: "70%", label: "of queries automated" },
  },
];

const WHY = [
  { icon: Zap,        title: "Fast Delivery",        desc: "Agile sprints, weekly demos, on-time launches — every time." },
  { icon: Shield,     title: "Secure by Default",    desc: "Security isn't a feature. It's woven into every line we write." },
  { icon: Users,      title: "Dedicated Team",       desc: "A single point of contact. A whole team behind every project." },
  { icon: BarChart3,  title: "Results-Driven",       desc: "KPIs defined upfront. We measure what matters to your business." },
  { icon: Star,       title: "Quality Obsessed",     desc: "We don't ship until we're proud of it. No exceptions." },
  { icon: CheckCircle2, title: "Full-Stack Coverage", desc: "From design to DevOps, we cover every layer of your product." },
];

const PROCESS = [
  { num: "01", title: "Discovery", desc: "We deep-dive into your goals, users, and market to map the right strategy." },
  { num: "02", title: "Design",    desc: "Wireframes, UI concepts, and interactive prototypes — refined with your feedback." },
  { num: "03", title: "Build",     desc: "Agile development with weekly demos and full transparency throughout." },
  { num: "04", title: "Launch",    desc: "Zero-downtime deployment with full post-launch monitoring and support." },
];

const STATS = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "30+",  label: "Happy Clients" },
  { value: "6",    label: "Core Services" },
  { value: "24/7", label: "Support" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
});

// ─── Service Card (expandable) ────────────────────────────────────────────────
function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = svc.icon;

  return (
    <motion.div
      {...fadeUp(0.06 * index)}
      className="group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500"
    >
      {/* Top image strip */}
      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svc.img}
          alt={svc.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#0a0a0e]/95" />

        {/* Number label */}
        <span
          className="absolute top-4 left-5 text-[11px] font-black tracking-[0.22em] opacity-50"
          style={{ color: svc.color }}
        >
          {svc.label}
        </span>

        {/* Stat badge */}
        <div
          className="absolute top-4 right-5 px-3 py-1.5 rounded-full text-[10px] font-black"
          style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}35`, color: svc.color }}
        >
          {svc.stat.value} {svc.stat.label}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}
          >
            <Icon size={18} style={{ color: svc.color }} />
          </div>
          <div>
            <h3 className="text-base font-black text-white leading-tight">{svc.name}</h3>
            <p className="text-[11px] font-semibold mt-0.5" style={{ color: svc.color }}>{svc.tagline}</p>
          </div>
        </div>

        <p className="text-[13px] text-white/45 leading-relaxed">{svc.desc}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {svc.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white/35 border border-white/[0.07] bg-white/[0.03]">
              {t}
            </span>
          ))}
        </div>

        {/* Expandable features */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-2 text-xs font-bold transition-colors mt-1"
          style={{ color: open ? svc.color : "rgba(255,255,255,0.3)" }}
        >
          {open ? "Hide details" : "See what's included"}
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.22 }}>
            <ChevronRight size={13} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden space-y-2"
            >
              {svc.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-white/50">
                  <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: svc.color }} />
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA row */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] mt-1">
          <Link
            href={svc.href}
            className="inline-flex items-center gap-1.5 text-xs font-bold group/btn transition-colors"
            style={{ color: svc.color }}
          >
            Learn more
            <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full text-xs font-bold text-white transition-all hover:scale-105"
            style={{ background: `${svc.color}22`, border: `1px solid ${svc.color}35` }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Horizontal scrolling service strip (hero) ───────────────────────────────
function ServiceStrip() {
  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
      >
        {[...SERVICES, ...SERVICES].map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] flex-shrink-0">
              <Icon size={13} style={{ color: svc.color }} />
              <span className="text-xs font-bold text-white/40 whitespace-nowrap">{svc.name}</span>
            </div>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0e] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0e] to-transparent" />
    </div>
  );
}

// ─── Big horizontal service list (alternate layout) ──────────────────────────
function ServiceRow({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = svc.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      {...fadeUp(0.05 * index)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/[0.05] hover:border-white/[0.10] transition-all duration-500"
      style={{ background: hovered ? `${svc.color}05` : "rgba(255,255,255,0.01)" }}
    >
      {/* Image side */}
      <div className={`relative h-[300px] lg:h-auto overflow-hidden ${!isEven ? "lg:order-2" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svc.img}
          alt={svc.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: isEven
              ? `linear-gradient(to right, transparent 50%, #0a0a0e 100%)`
              : `linear-gradient(to left, transparent 50%, #0a0a0e 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0e]/80 lg:hidden" />

        {/* Stat overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl"
          style={{ background: `${svc.color}22`, border: `1px solid ${svc.color}40`, backdropFilter: "blur(12px)" }}
        >
          <p className="text-2xl font-black" style={{ color: svc.color }}>{svc.stat.value}</p>
          <p className="text-[10px] font-bold text-white/50">{svc.stat.label}</p>
        </motion.div>
      </div>

      {/* Content side */}
      <div className={`flex flex-col justify-center gap-6 p-8 lg:p-12 ${!isEven ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}35` }}
          >
            <Icon size={20} style={{ color: svc.color }} />
          </div>
          <span
            className="text-[10px] font-black tracking-[0.2em] uppercase"
            style={{ color: svc.color }}
          >
            {svc.label} / {svc.name}
          </span>
        </div>

        <div>
          <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white leading-[1.08] tracking-tight mb-3">
            {svc.tagline}
          </h3>
          <p className="text-sm text-white/45 leading-relaxed max-w-md">{svc.desc}</p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {svc.features.slice(0, 6).map((f) => (
            <div key={f} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: svc.color }} />
              <span className="text-[12px] text-white/45 leading-snug">{f}</span>
            </div>
          ))}
        </div>

        {/* Tech row */}
        <div className="flex flex-wrap gap-1.5">
          {svc.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-[10px] font-bold text-white/30 border border-white/[0.07] bg-white/[0.02]">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Link
            href={svc.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all hover:scale-105 group/btn"
            style={{ background: `${svc.color}25`, border: `1px solid ${svc.color}45`, boxShadow: `0 4px 16px ${svc.color}18` }}
          >
            View Service <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="text-xs font-bold text-white/30 hover:text-white/70 transition-colors">
            Get a Quote →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [view, setView] = useState<"cards" | "detailed">("cards");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <main className="bg-[#0a0a0e] min-h-screen font-sans overflow-hidden">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
          {/* BG image with parallax */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&auto=format&fit=crop&q=80"
              className="w-full h-full object-cover opacity-20"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0e]/60 via-[#0a0a0e]/30 to-[#0a0a0e]" />
          </motion.div>

          {/* Ambient glows */}
          <div className="absolute top-24 left-1/4 w-[600px] h-[400px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-32 right-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-bold text-sky-300 tracking-wide">What We Do</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                className="text-[clamp(3rem,9vw,8rem)] font-black text-white leading-[0.88] tracking-[-0.04em]"
              >
                Six Ways<br />
                We Build<br />
                <span style={{ color: ACCENT }}>Your Future</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col gap-5 max-w-xs lg:pb-3"
              >
                <p className="text-sm text-white/40 leading-relaxed">
                  From pixel-perfect interfaces to enterprise software and AI-powered automation — Devntom Solutions covers every digital discipline your business needs to grow.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white self-start transition-all hover:scale-105 group"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}cc, #7c3aed)`, boxShadow: `0 8px 28px ${ACCENT}30` }}
                >
                  Start a Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/[0.06]"
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="text-3xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-white/35 font-semibold">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Service name strip */}
        <ServiceStrip />

        {/* ── VIEW TOGGLE + SERVICES ───────────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section header + toggle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <motion.div {...fadeUp()} className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="text-xs font-bold text-white/40 tracking-wide">All Services</span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-white tracking-tight leading-none">
                  Everything We Offer
                </h2>
              </motion.div>

              {/* View toggle */}
              <motion.div {...fadeUp(0.1)} className="flex items-center gap-1 p-1 rounded-xl border border-white/[0.07] bg-white/[0.02]">
                {(["cards", "detailed"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className="relative px-4 py-2 rounded-lg text-xs font-bold transition-colors capitalize"
                  >
                    {view === v && (
                      <motion.div
                        layoutId="view-toggle"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors ${view === v ? "text-white" : "text-white/30"}`}>
                      {v === "cards" ? "Card View" : "Detailed View"}
                    </span>
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Services grid */}
            <AnimatePresence mode="wait">
              {view === "cards" ? (
                <motion.div
                  key="cards"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {SERVICES.map((svc, i) => (
                    <ServiceCard key={svc.id} svc={svc} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="detailed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  {SERVICES.map((svc, i) => (
                    <ServiceRow key={svc.id} svc={svc} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── WHY DEVNTOM ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_65%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">

            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
              <motion.div {...fadeUp()} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span className="text-xs font-bold text-sky-300 tracking-wide">Why Choose Us</span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-white tracking-tight leading-none">
                  The Devntom<br />
                  <span className="text-white/30">Difference</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp(0.1)} className="text-sm text-white/40 max-w-sm leading-relaxed lg:text-right">
                We&apos;ve built software for startups racing to launch and enterprises managing millions of users. Here&apos;s what makes working with us different.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHY.map((w, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.06 * i)}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-sky-500/20 hover:bg-sky-500/[0.03] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 group-hover:bg-sky-500/15 transition-colors">
                    <w.icon size={18} className="text-sky-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{w.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp()} className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="text-xs font-bold text-white/40 tracking-wide">How We Work</span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-white tracking-tight">
                Our Process
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.08 * i)}
                  className="relative p-7 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-white/10 transition-all group"
                >
                  {/* Connector line */}
                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-4 h-px bg-white/10 translate-x-full z-10" />
                  )}
                  <div className="text-[3rem] font-black text-white/[0.04] group-hover:text-white/[0.07] transition-colors leading-none mb-4 select-none">
                    {step.num}
                  </div>
                  <h3 className="font-black text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <section className="py-12 px-6 border-y border-white/[0.04]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
            <motion.p {...fadeUp()} className="text-sm text-white/25 font-semibold">
              Trusted by businesses in 10+ industries
            </motion.p>
            <div className="flex flex-wrap items-center gap-8">
              {["E-Commerce", "Healthcare", "FinTech", "EdTech", "Real Estate", "Logistics"].map((ind, i) => (
                <motion.span
                  key={ind}
                  {...fadeUp(0.05 * i)}
                  className="text-sm font-bold text-white/20 hover:text-white/45 transition-colors cursor-default"
                >
                  {ind}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative rounded-[40px] p-10 md:p-16 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))",
                border: "1px solid rgba(14,165,233,0.12)",
              }}
            >
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-sky-500/10 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-violet-600/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="space-y-4 max-w-xl">
                  <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-[1.05] tracking-tight">
                    Not Sure Which<br />
                    Service You Need?
                  </h2>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Tell us about your business and goals — we&apos;ll recommend the right stack of services and build you a custom proposal, free of charge.
                  </p>
                </div>

                <div className="flex flex-col gap-3 flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-105 group"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)`, boxShadow: `0 8px 32px ${ACCENT}30` }}
                  >
                    Book a Free Discovery Call
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/923256036838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white/70 border border-white/10 hover:border-white/25 hover:text-white transition-all"
                  >
                    <MessageCircle size={15} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}