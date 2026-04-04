"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Plus, Minus, Mail, MessageCircle, Phone, Database, Settings, BarChart3, Shield, RefreshCw, Layers, GitBranch, Server, Lock } from "lucide-react";

const services = [
  { icon: Settings,   title: "CRM Systems",             desc: "Custom customer relationship management platforms with pipelines, contact management, automations, and reporting dashboards built for your exact workflow." },
  { icon: Layers,     title: "ERP Solutions",            desc: "Enterprise resource planning systems that connect your finance, HR, inventory, procurement, and operations into one unified platform." },
  { icon: BarChart3,  title: "Business Dashboards",     desc: "Real-time analytics dashboards pulling data from all your systems — giving leadership the visibility to make faster, smarter decisions." },
  { icon: Database,   title: "POS Systems",              desc: "Point-of-sale systems for retail, restaurants, and service businesses — with inventory sync, staff management, and multi-location support." },
  { icon: RefreshCw,  title: "Workflow Automation",     desc: "Custom internal tools and automation systems that eliminate repetitive manual tasks and connect your existing software stack." },
  { icon: Server,     title: "API & Integrations",      desc: "Custom APIs, webhooks, and third-party integrations that make all your business tools talk to each other seamlessly." },
];

const stats = [
  { metric: "40%", label: "Average reduction in operational overhead" },
  { metric: "3×",  label: "Faster internal processes post-implementation" },
  { metric: "60%", label: "Reduction in manual data entry errors" },
  { metric: "99%", label: "Uptime SLA on delivered systems" },
];

const process = [
  { num: "01", title: "Requirements Gathering",  desc: "We map every workflow, user role, and data requirement through deep discovery sessions with your team before writing a single spec." },
  { num: "02", title: "System Architecture",     desc: "We design the database schema, system architecture, and integration points — building a technical blueprint approved before development begins." },
  { num: "03", title: "Iterative Development",   desc: "Built in 2-week sprints with live demos after every sprint. You see real progress and can give feedback continuously throughout the build." },
  { num: "04", title: "Testing & QA",            desc: "Unit tests, integration tests, UAT sessions with your team, and security audits — all completed before any system touches production data." },
  { num: "05", title: "Migration & Deployment",  desc: "We handle data migration from your existing systems, staff training, and a phased rollout plan to minimise business disruption." },
  { num: "06", title: "Ongoing Maintenance",     desc: "Post-launch support, performance monitoring, feature updates, and a dedicated point of contact for anything that comes up." },
];

const techStack = [
  { cat: "Backend",      items: ["Node.js", "Python", "Laravel", "Django", "NestJS"] },
  { cat: "Frontend",     items: ["React", "Next.js", "Vue.js", "TypeScript"] },
  { cat: "Database",     items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] },
  { cat: "Cloud",        items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
  { cat: "Auth & Sec",   items: ["OAuth 2.0", "JWT", "RBAC", "2FA", "SSL/TLS"] },
  { cat: "Integrations", items: ["Stripe", "Twilio", "Zapier", "REST APIs", "GraphQL"] },
];

const deliverables = [
  "Full system requirements document & technical spec",
  "Database schema design & architecture diagram",
  "Role-based access control (RBAC) system",
  "Admin dashboard with full CRUD operations",
  "API documentation (Swagger/Postman)",
  "Data migration from existing systems",
  "User acceptance testing (UAT) sessions",
  "Staff training & onboarding guide",
  "Source code with full documentation",
  "3-month post-launch support",
];

const portfolioItems = [
  { name: "Nexora ERP",     cat: "ERP System",          result: "Replaced 6 disconnected tools with one platform — 40% overhead reduction", color: "bg-violet-600" },
  { name: "RetailPro POS",  cat: "POS System",          result: "Multi-location POS with live inventory sync across 12 stores",              color: "bg-indigo-600" },
  { name: "HRFlow CRM",     cat: "CRM Platform",        result: "Sales pipeline visibility increased deal close rate by 38%",                color: "bg-emerald-600" },
];

const packages = [
  { name: "Starter",    price: "$3,000",  period: "", desc: "For small businesses needing a focused internal tool or simple CRM.", features: ["Up to 5 user roles", "Core CRUD system", "Basic reporting", "Admin dashboard", "3-month support"], highlight: false, cta: "Get Started" },
  { name: "Business",   price: "$8,000",  period: "+", desc: "Full-featured business system with integrations, automation, and advanced reporting.", features: ["Unlimited user roles", "Advanced workflow automation", "Third-party integrations", "Custom reporting", "Data migration", "API access", "6-month support"], highlight: true, cta: "Start a Project" },
  { name: "Enterprise", price: "Custom",  period: "", desc: "Complex enterprise-grade systems with multi-tenancy, compliance, and SLA guarantees.", features: ["Multi-tenant architecture", "SSO & enterprise auth", "Compliance (GDPR, HIPAA)", "SLA guarantee", "Dedicated developer", "Priority support"], highlight: false, cta: "Talk to Us" },
];

const faqs = [
  { q: "How long does custom software take to build?",     a: "A focused internal tool takes 6–10 weeks. A full ERP or CRM system typically takes 3–6 months depending on complexity, number of modules, and integrations required." },
  { q: "Do you build on top of existing platforms?",       a: "Yes — we can extend existing systems like Salesforce, HubSpot, or Odoo with custom modules. We also build fully custom from scratch when off-the-shelf doesn't fit." },
  { q: "Who owns the code?",                               a: "You do. 100%. Upon project completion and final payment, full source code ownership transfers to you with no recurring licensing fees." },
  { q: "How do you handle data migration?",                a: "We write custom migration scripts that map, clean, and validate your existing data before importing it into the new system. Your data is never lost or corrupted." },
  { q: "Can the system scale as we grow?",                 a: "Every system we build is designed to scale. We use cloud infrastructure, proper database indexing, and modular architecture so adding users or features never requires a rebuild." },
  { q: "Do you offer ongoing maintenance?",                a: "Yes. All projects include 3 months of post-launch support. After that, we offer affordable monthly retainers covering bug fixes, updates, and feature additions." },
];

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

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
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Pill dark>Custom Software Solutions</Pill>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white">
              Software Built<br /><span className="text-violet-400">Around Your</span><br />Business
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
              className="max-w-xl text-base font-medium leading-relaxed text-white/50">
              CRM, ERP, POS, and custom business systems built from scratch to fit your exact workflows — replacing spreadsheets, disconnected tools, and manual processes with one powerful platform.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }} className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-violet-900/40 active:scale-95">
                Discuss Your Project <ArrowRight size={15} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/50 text-white font-bold text-sm rounded-full transition-all">
                View Case Studies <ArrowUpRight size={15} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-6 pt-2">
              {["CRM & ERP Systems", "POS Platforms", "Business Dashboards", "Custom APIs"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-white/40">
                  <CheckCircle2 size={13} className="text-violet-400" /> {t}
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden grid-cols-2 gap-3 lg:grid">
            {stats.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all">
                <p className="mb-2 text-3xl font-black text-violet-400">{r.metric}</p>
                <p className="text-xs leading-relaxed text-white/40">{r.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <motion.h2 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-[13vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">
          CUSTOM SOFTWARE
        </motion.h2>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="py-14 bg-violet-600">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="text-center">
              <p className="mb-1 text-4xl font-black text-white md:text-5xl">{r.metric}</p>
              <p className="text-sm leading-snug text-violet-200">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>What We Build</Pill></motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
            Systems That Replace<br /><span className="text-gray-400">The Spreadsheet Chaos</span>
          </motion.h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              whileHover={{ y: -6 }} className="transition-all bg-white border border-gray-100 p-7 rounded-3xl hover:border-violet-200 hover:shadow-lg group">
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

function Process() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row md:items-end">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>How We Build</Pill></motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              Our Development<br /><span className="text-gray-400">Process</span>
            </motion.h2>
          </div>
          <Link href="/contact" className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-full bg-violet-600 hover:bg-violet-500 md:self-auto">
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              className="relative p-8 transition-all border border-gray-100 rounded-3xl bg-gray-50 hover:border-violet-200 hover:shadow-lg group">
              <div className="text-[3.5rem] font-black text-gray-100 group-hover:text-violet-100 transition-colors leading-none mb-4 select-none">{step.num}</div>
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

function TechStack() {
  return (
    <section className="py-24 px-6 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-14">
          <div className="space-y-4">
            <Pill dark>Tech Stack</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight">Enterprise-Grade<br /><span className="text-white/30">Technologies</span></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">Every stack decision is driven by your scalability requirements, not what's trendy.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-violet-500/30 transition-all">
              <h3 className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-400 mb-4">{s.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 hover:border-violet-400/40 hover:text-violet-300 transition-colors cursor-default">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Deliverables() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>What You Get</Pill></motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Delivered Complete.<br /><span className="text-violet-600">Documented. Yours.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500">
              Every project includes full documentation, source code ownership, and training — so your team is never dependent on us.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all bg-gray-900 rounded-full hover:bg-violet-600">
                Get a Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
          <div className="grid gap-3">
            {deliverables.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * i }}
                className="flex items-start gap-3 p-4 transition-all bg-white border border-gray-100 rounded-2xl hover:border-violet-200">
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

function Packages() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>Pricing</Pill></motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
            Project-Based<br /><span className="text-gray-400">Pricing</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="max-w-md mx-auto text-sm text-gray-500">
            All prices are starting points. Every custom software project gets a detailed scope and fixed-price quote after a discovery call.
          </motion.p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all ${pkg.highlight ? "bg-[#0d0d12] border-violet-500/30 shadow-2xl shadow-violet-900/20" : "bg-gray-50 border-gray-100 hover:border-violet-200 hover:shadow-lg"}`}>
              {pkg.highlight && (
                <div className="absolute -translate-x-1/2 -top-3 left-1/2">
                  <span className="px-4 py-1 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Most Popular</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-black text-lg mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-[2.6rem] font-black leading-none ${pkg.highlight ? "text-violet-400" : "text-violet-600"}`}>{pkg.price}</span>
                  {pkg.period && <span className={`text-sm ${pkg.highlight ? "text-white/40" : "text-gray-400"}`}>{pkg.period}</span>}
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
              <Link href="/contact" className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all ${pkg.highlight ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40" : "bg-gray-900 hover:bg-violet-600 text-white"}`}>
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>Case Studies</Pill></motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              Systems We've <span className="text-gray-400">Built</span>
            </motion.h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-violet-600 hover:text-violet-500">All Case Studies <ArrowUpRight size={16} /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
              whileHover={{ y: -8 }} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
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

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>FAQ</Pill></motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Software Questions<br /><span className="text-gray-400">Answered</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500">
              More questions?{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="font-semibold text-violet-600 hover:underline">Email us</a> — we reply within 24 hours.
            </motion.p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden border border-gray-100 bg-gray-50 rounded-2xl">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex items-center justify-between w-full px-6 py-5 text-left group">
                  <span className={`text-sm font-bold transition-colors ${open === i ? "text-violet-600" : "text-gray-800 group-hover:text-violet-600"}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${open === i ? "bg-violet-600 text-white" : "bg-white text-gray-500 border border-gray-200"}`}>
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
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

function CTA() {
  return (
    <section className="py-20 px-6 bg-[#f7f6f4]">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-[#0d0d12] rounded-[48px] p-10 md:p-20 overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-700/15 blur-[100px]" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-6">
              <Pill dark>Let's Build Your System</Pill>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to Replace the<br /><span className="text-violet-400">Spreadsheet Chaos?</span>
              </h2>
              <p className="text-base leading-relaxed text-white/50">Tell us about your workflow challenges. We'll map out the right system architecture and give you a clear, fixed-price quote.</p>
            </div>
            <div className="flex flex-col w-full gap-4 lg:w-auto">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full shadow-lg bg-violet-600 hover:bg-violet-500 shadow-violet-900/40 active:scale-95">
                Discuss Your Project <ArrowRight size={15} />
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

export default function CustomSoftwarePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <StatsBar />
      <Services />
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