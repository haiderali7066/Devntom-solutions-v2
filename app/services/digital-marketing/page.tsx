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
  Search,
  BarChart3,
  TrendingUp,
  Target,
  Share2,
  PenTool,
  Globe,
  Users,
  Megaphone,
  LineChart,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    desc: "Technical SEO audits, on-page optimisation, backlink building, and content strategy to rank you higher and keep you there.",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads (PPC)",
    desc: "Data-driven paid campaigns across Google Search, Display, YouTube, Facebook, and Instagram — built to convert, not just click.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Content creation, community management, scheduling, and growth strategy across Instagram, LinkedIn, Facebook, X, and TikTok.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    desc: "Blog posts, landing pages, email sequences, and long-form content that builds authority and drives organic traffic.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    desc: "Custom dashboards, GA4 setup, conversion tracking, and monthly performance reports so you always know what's working.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimisation",
    desc: "A/B testing, heatmaps, user journey analysis, and landing page optimisation to turn more visitors into customers.",
  },
];

const results = [
  { metric: "3×",    label: "Average organic traffic increase in 6 months" },
  { metric: "40%",   label: "Average reduction in cost-per-lead via PPC" },
  { metric: "65%",   label: "Average improvement in conversion rates" },
  { metric: "5×",    label: "Average ROI on social media ad spend" },
];

const process = [
  { num: "01", title: "Audit & Research",       desc: "We analyse your current performance, competitors, target audience, and market — building a clear picture of where you are and where you need to be." },
  { num: "02", title: "Strategy & Planning",    desc: "We craft a data-backed digital marketing strategy with clear KPIs, channel priorities, budget allocation, and a 90-day roadmap." },
  { num: "03", title: "Campaign Setup",         desc: "We build and configure all campaigns — ad accounts, tracking pixels, UTM structures, and creative assets — before going live." },
  { num: "04", title: "Launch & Execution",     desc: "Campaigns go live with continuous monitoring. We optimise daily in the first two weeks to ensure strong early performance." },
  { num: "05", title: "Optimise & Scale",       desc: "We test, iterate, and scale what's working — cutting underperforming spend and doubling down on channels driving real ROI." },
  { num: "06", title: "Report & Grow",          desc: "Monthly performance reports with plain-English insights, plus strategy reviews to keep your marketing ahead of the competition." },
];

const channels = [
  { cat: "SEO Tools",       items: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Moz"] },
  { cat: "Paid Ads",        items: ["Google Ads", "Meta Ads", "YouTube Ads", "LinkedIn Ads", "TikTok Ads"] },
  { cat: "Social Media",    items: ["Instagram", "Facebook", "LinkedIn", "X (Twitter)", "TikTok", "Pinterest"] },
  { cat: "Analytics",       items: ["GA4", "Google Tag Manager", "Hotjar", "Clarity", "Looker Studio"] },
  { cat: "Email & CRM",     items: ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign", "Zapier"] },
  { cat: "Content",         items: ["WordPress", "Webflow", "Notion", "Jasper", "Canva Pro"] },
];

const deliverables = [
  "Full digital marketing audit & competitor analysis",
  "Custom marketing strategy & 90-day roadmap",
  "SEO technical audit & on-page optimisation",
  "Google Ads & Meta Ads campaign setup",
  "Social media content calendar (30 days)",
  "GA4 + conversion tracking setup",
  "Monthly performance report & insights",
  "Dedicated account manager",
  "Bi-weekly strategy calls",
  "Creative assets & ad copy",
];

const portfolioItems = [
  { name: "GrowthBase",   cat: "SEO & Content",        result: "Organic traffic tripled in 4 months — 18k to 54k monthly visitors", color: "bg-violet-600" },
  { name: "ShopSprint",   cat: "Google & Meta Ads",     result: "Cost-per-acquisition dropped 42% while revenue grew 65%",          color: "bg-indigo-600" },
  { name: "Clarise App",  cat: "Social Media & Ads",    result: "10k app downloads in 30 days driven entirely by paid social",      color: "bg-emerald-600" },
];

const packages = [
  {
    name: "Starter",
    price: "$600",
    period: "/ month",
    desc: "For startups and small businesses taking their first steps into digital marketing.",
    features: ["SEO audit & on-page fixes", "Google Ads management", "Monthly reporting", "GA4 setup", "2 social media platforms", "Email support"],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,400",
    period: "/ month",
    desc: "Our most popular plan for businesses ready to scale traffic and conversions aggressively.",
    features: ["Full SEO strategy & content", "Google + Meta Ads", "4 social media platforms", "Content creation (8 posts/mo)", "CRO & A/B testing", "Bi-weekly strategy calls", "Custom dashboard"],
    highlight: true,
    cta: "Start Growing",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Full-funnel marketing for established businesses with larger budgets and ambitious goals.",
    features: ["Full-funnel strategy", "All ad platforms", "All social channels", "Weekly content production", "Dedicated team", "Weekly calls + reporting", "Advanced attribution"],
    highlight: false,
    cta: "Talk to Us",
  },
];

const faqs = [
  { q: "How long before I see results from SEO?",            a: "SEO is a long-term channel — you'll typically see meaningful movement in 3–6 months. Paid ads deliver results much faster, often within the first 2–4 weeks of launch." },
  { q: "Do you manage the ad budget or do I?",              a: "You control the ad budget directly through your own Google and Meta accounts. We manage the strategy, setup, and optimisation — you never lose visibility or control of your spend." },
  { q: "What makes your agency different?",                  a: "We're a technical team first. Unlike traditional marketing agencies, we combine data engineering, analytics, and performance marketing — every decision is backed by data, not guesswork." },
  { q: "Do you create the ad creatives and copy?",           a: "Yes. Our team handles copywriting, static ad creative design, and basic video editing. For brands with specific guidelines, we work within your brand identity." },
  { q: "What's the minimum ad spend you recommend?",         a: "For Google Ads, we recommend a minimum of $500/month in ad spend. For Meta, $300/month minimum. Below these thresholds, the data sample is too small to optimise effectively." },
  { q: "Do you sign long-term contracts?",                   a: "We offer month-to-month agreements after an initial 3-month onboarding period. Marketing takes time — the 3-month minimum ensures we can deliver meaningful results before any evaluation." },
];

// ─── SHARED ───────────────────────────────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"}`}>
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
        <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-center">

          {/* Left */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Pill dark>Digital Marketing & SEO</Pill>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white"
            >
              Grow Faster.<br />
              <span className="text-violet-400">Rank Higher.</span><br />
              Convert More.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
              className="max-w-xl text-base font-medium leading-relaxed text-white/50"
            >
              We build and execute data-driven digital marketing strategies — SEO, paid ads, social media, and content — that drive real traffic, qualified leads, and measurable revenue growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-violet-900/40 active:scale-95">
                Get a Free Audit <ArrowRight size={15} />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/50 text-white font-bold text-sm rounded-full transition-all">
                View Results <ArrowUpRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              {["SEO & Content", "Google & Meta Ads", "Social Media", "Analytics & CRO"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-white/40">
                  <CheckCircle2 size={13} className="text-violet-400" /> {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — results preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden grid-cols-2 gap-3 lg:grid"
          >
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all"
              >
                <p className="mb-2 text-3xl font-black text-violet-400">{r.metric}</p>
                <p className="text-xs leading-relaxed text-white/40">{r.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wordmark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <motion.h2
          initial={{ y: "100%" }} animate={{ y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-[13vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center"
        >
          DIGITAL MARKETING
        </motion.h2>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </section>
  );
}

// ─── RESULTS BAR ──────────────────────────────────────────────────────────────

function ResultsBar() {
  return (
    <section className="py-14 bg-violet-600">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 * i }}
              className="text-center"
            >
              <p className="mb-1 text-4xl font-black text-white md:text-5xl">{r.metric}</p>
              <p className="text-sm leading-snug text-violet-200">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Pill>What We Do</Pill>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
          >
            Every Channel.<br /><span className="text-gray-400">One Strategy.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="max-w-lg mx-auto text-sm leading-relaxed text-gray-500"
          >
            We don't pick one channel and hope for the best. We build integrated strategies across every platform that matters to your audience.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              whileHover={{ y: -6 }}
              className="transition-all bg-white border border-gray-100 p-7 rounded-3xl hover:border-violet-200 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center mb-5 transition-colors w-11 h-11 rounded-xl bg-violet-50 group-hover:bg-violet-600">
                <s.icon size={20} className="transition-colors text-violet-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
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
              From Audit<br /><span className="text-gray-400">to Results</span>
            </motion.h2>
          </div>
          <Link href="/contact"
            className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-full bg-violet-600 hover:bg-violet-500 md:self-auto">
            Start Today <ArrowRight size={14} />
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

// ─── CHANNELS / TOOLS ─────────────────────────────────────────────────────────

function Channels() {
  return (
    <section className="py-24 px-6 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-14">
          <div className="space-y-4">
            <Pill dark>Tools & Platforms</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight">
              Platforms We<br /><span className="text-white/30">Master</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            We're certified across every major platform — so your campaigns are always in expert hands.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((s, i) => (
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
              Full-Funnel Marketing,<br /><span className="text-violet-600">Fully Managed</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500"
            >
              Every plan includes these deliverables as standard. No extras, no surprises — just clear, consistent work every month.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all bg-gray-900 rounded-full hover:bg-violet-600">
                Get a Free Audit <ArrowRight size={14} />
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
            Flexible Monthly<br /><span className="text-gray-400">Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="max-w-md mx-auto text-sm text-gray-500"
          >
            All plans are month-to-month after an initial 3-month onboarding period. Ad spend is billed separately and goes directly to the platforms.
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
                <div className="flex items-baseline gap-1">
                  <span className={`text-[2.6rem] font-black leading-none ${pkg.highlight ? "text-violet-400" : "text-violet-600"}`}>{pkg.price}</span>
                  {pkg.period && <span className={`text-sm font-semibold ${pkg.highlight ? "text-white/40" : "text-gray-400"}`}>{pkg.period}</span>}
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${pkg.highlight ? "text-white/50" : "text-gray-500"}`}>{pkg.desc}</p>
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
              <Pill>Case Studies</Pill>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
            >
              Real Results.<br /><span className="text-gray-400">Real Businesses.</span>
            </motion.h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-violet-600 hover:text-violet-500">
            All Case Studies <ArrowUpRight size={16} />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
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
              Marketing Questions<br /><span className="text-gray-400">Answered</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500"
            >
              Still have questions?{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="font-semibold text-violet-600 hover:underline">Email us</a>{" "}
              or message us on WhatsApp.
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
              <Pill dark>Free Audit — No Commitment</Pill>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to Grow<br />
                Your Business <span className="text-violet-400">Online?</span>
              </h2>
              <p className="text-base leading-relaxed text-white/50">
                Book a free 30-minute strategy call. We'll audit your current marketing, identify your biggest growth opportunities, and show you exactly what we'd do — no fluff, no hard sell.
              </p>
            </div>

            <div className="flex flex-col w-full gap-4 lg:w-auto">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full shadow-lg bg-violet-600 hover:bg-violet-500 shadow-violet-900/40 active:scale-95">
                Get a Free Audit <ArrowRight size={15} />
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

export default function DigitalMarketingPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ResultsBar />
      <Services />
      <Process />
      <Channels />
      <Deliverables />
      <Packages />
      <Portfolio />
      <FAQ />
      <CTA />
    </main>
  );
}