"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Plus, Minus, Mail, MessageCircle, Phone, Bot, Zap, Brain, RefreshCw, BarChart3, Shield, Workflow, Cpu, Database } from "lucide-react";

const services = [
  { icon: Bot,       title: "AI Chatbots & Virtual Assistants",  desc: "Custom GPT-powered chatbots for customer support, sales, onboarding, and internal helpdesks — trained on your data and brand voice." },
  { icon: Workflow,  title: "Workflow Automation",               desc: "End-to-end automation of repetitive business processes using n8n, Make, and Zapier — eliminating manual work across your entire stack." },
  { icon: Brain,     title: "AI-Powered Data Processing",        desc: "Intelligent document parsing, data extraction, classification, and summarisation pipelines that turn unstructured data into actionable insights." },
  { icon: Cpu,       title: "LLM Integration & Fine-Tuning",     desc: "Integrating OpenAI, Claude, Gemini, and open-source LLMs into your products and workflows — with fine-tuning on your proprietary data." },
  { icon: RefreshCw, title: "CRM & Helpdesk Automation",         desc: "Automated lead scoring, ticket routing, follow-up sequences, and response generation integrated directly into your CRM and support tools." },
  { icon: BarChart3, title: "AI Analytics & Reporting",          desc: "Natural language interfaces for your data — let your team ask questions in plain English and get instant charts, summaries, and forecasts." },
];

const stats = [
  { metric: "70%",  label: "Of customer queries handled automatically by our chatbots" },
  { metric: "35%",  label: "Average reduction in support costs post-AI implementation" },
  { metric: "10×",  label: "Faster document processing with AI extraction pipelines" },
  { metric: "24/7", label: "Uptime — AI never sleeps, takes breaks, or calls in sick" },
];

const process = [
  { num: "01", title: "Use Case Discovery",     desc: "We map every manual, repetitive process in your business to identify which tasks deliver the highest ROI when automated." },
  { num: "02", title: "Data & Integration Audit", desc: "We audit your existing data sources, APIs, and tools to understand what's available and what needs to be connected." },
  { num: "03", title: "Prototype & Test",        desc: "We build a working prototype in 2 weeks — real outputs with your data — so you can validate the solution before full build." },
  { num: "04", title: "Build & Train",           desc: "Full development of your automation system, with AI models trained or fine-tuned on your specific data and use cases." },
  { num: "05", title: "Integration & Deploy",   desc: "We connect everything to your existing tools — CRM, helpdesk, Slack, email, databases — with zero disruption to current workflows." },
  { num: "06", title: "Monitor & Improve",       desc: "Ongoing monitoring of model performance, hallucination rates, and accuracy — with regular retraining as your data grows." },
];

const techStack = [
  { cat: "LLMs & AI",        items: ["OpenAI GPT-4o", "Claude 3.5", "Gemini", "Llama 3", "Mistral"] },
  { cat: "Frameworks",       items: ["LangChain", "LlamaIndex", "Haystack", "CrewAI"] },
  { cat: "Automation",       items: ["n8n", "Make (Integromat)", "Zapier", "Pipedream"] },
  { cat: "Vector Databases", items: ["Pinecone", "Weaviate", "Chroma", "Supabase pgvector"] },
  { cat: "Infrastructure",   items: ["AWS Lambda", "Vercel", "Docker", "FastAPI", "Redis"] },
  { cat: "Integrations",     items: ["Slack", "WhatsApp", "HubSpot", "Salesforce", "Zendesk"] },
];

const deliverables = [
  "Use case discovery report & ROI estimate",
  "Custom AI chatbot trained on your data",
  "Automated workflow setup (n8n / Make)",
  "Integration with your CRM / helpdesk",
  "Human handoff system for complex queries",
  "Admin dashboard for conversation monitoring",
  "AI performance analytics & reporting",
  "Prompt engineering documentation",
  "Staff training & onboarding guide",
  "90-day monitoring & optimisation support",
];

const portfolioItems = [
  { name: "SupportBot AI",  cat: "Customer Support Chatbot",   result: "Handles 70%+ of tickets — support costs cut by 35% in 60 days", color: "bg-violet-600" },
  { name: "DocParser Pro",  cat: "Document Automation",         result: "10× faster invoice processing — zero manual data entry",          color: "bg-indigo-600" },
  { name: "SalesFlow AI",   cat: "CRM Automation & AI",        result: "Automated lead scoring increased deal close rate by 42%",         color: "bg-emerald-600" },
];

const packages = [
  { name: "Starter",    price: "$2,500",  period: "", desc: "A focused AI chatbot or single automation workflow for one use case.", features: ["1 AI chatbot or workflow", "Up to 3 integrations", "Basic analytics", "WhatsApp or web widget", "30-day support"], highlight: false, cta: "Get Started" },
  { name: "Growth",     price: "$6,000",  period: "+", desc: "A full AI automation system covering multiple workflows and channels.", features: ["Up to 5 chatbots / flows", "Unlimited integrations", "Custom LLM fine-tuning", "Analytics dashboard", "CRM integration", "Human handoff system", "90-day support"], highlight: true, cta: "Build My AI System" },
  { name: "Enterprise", price: "Custom",  period: "", desc: "Company-wide AI transformation with bespoke models, compliance, and SLA.", features: ["Unlimited automations", "Private LLM deployment", "RAG pipeline on your data", "GDPR / HIPAA compliance", "Dedicated AI engineer", "SLA guarantee"], highlight: false, cta: "Talk to Us" },
];

const faqs = [
  { q: "Will the chatbot actually understand our customers?",   a: "Yes — we train your chatbot on your product documentation, FAQs, past support tickets, and brand tone. It won't give generic answers; it'll respond as an expert on your specific business." },
  { q: "What if the AI gives a wrong answer?",                  a: "We build confidence thresholds and human handoff triggers into every system. When the AI is unsure or encounters a query outside its training, it escalates to a human automatically." },
  { q: "Do you use OpenAI or can we use open-source models?",   a: "Both. For most use cases, GPT-4o or Claude gives the best results. For privacy-sensitive deployments, we can run open-source models (Llama, Mistral) on your own infrastructure." },
  { q: "Is our data safe and private?",                         a: "Yes. We implement strict data handling — your conversation data and documents are never used to train public models. For enterprise clients, we support fully private, on-premise deployments." },
  { q: "How quickly can a chatbot go live?",                    a: "A basic chatbot with your data can be live in 2–3 weeks. A full multi-channel system with CRM integration typically takes 6–10 weeks." },
  { q: "What if our processes change after launch?",            a: "AI systems need maintenance as your business evolves. All projects include 90 days of post-launch support, and we offer ongoing retainers to retrain models and update workflows as needed." },
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
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}><Pill dark>AI Automation & Chatbots</Pill></motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white">
              Automate the<br /><span className="text-violet-400">Repetitive.</span><br />Scale the Human.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
              className="max-w-xl text-base font-medium leading-relaxed text-white/50">
              We build intelligent AI chatbots and automation systems that handle your repetitive workflows 24/7 — so your team can focus on the work that actually requires a human.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }} className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-violet-900/40 active:scale-95">
                Automate My Business <ArrowRight size={15} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/50 text-white font-bold text-sm rounded-full transition-all">
                See Results <ArrowUpRight size={15} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-6 pt-2">
              {["GPT-4o & Claude", "n8n & Make", "WhatsApp & Web", "24/7 Operation"].map((t) => (
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
          className="text-[12vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">
          AI AUTOMATION
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
            AI Solutions for<br /><span className="text-gray-400">Every Business Function</span>
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
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Pill>Our Approach</Pill></motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              How We Build<br /><span className="text-gray-400">AI Systems</span>
            </motion.h2>
          </div>
          <Link href="/contact" className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-full bg-violet-600 hover:bg-violet-500 md:self-auto">
            Start Automating <ArrowRight size={14} />
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
            <Pill dark>AI Stack</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight">The AI Tools<br /><span className="text-white/30">We Deploy</span></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">We work with every major LLM and automation platform — choosing the right combination for your use case and budget.</p>
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
              A Complete AI System.<br /><span className="text-violet-600">Not Just a Chatbot.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500">
              Every AI project includes monitoring, analytics, and human fallback — because an AI system without oversight isn't production-ready.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all bg-gray-900 rounded-full hover:bg-violet-600">
                Get a Free Consultation <ArrowRight size={14} />
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
            AI Solutions for<br /><span className="text-gray-400">Every Scale</span>
          </motion.h2>
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
              AI We've <span className="text-gray-400">Deployed</span>
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
              AI Questions<br /><span className="text-gray-400">Answered Honestly</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="max-w-sm text-sm leading-relaxed text-gray-500">
              AI can be confusing. We'll give you straight answers —{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="font-semibold text-violet-600 hover:underline">email us</a> with anything not covered here.
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
              <Pill dark>Free AI Consultation</Pill>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to Let AI<br /><span className="text-violet-400">Do the Heavy Lifting?</span>
              </h2>
              <p className="text-base leading-relaxed text-white/50">Tell us which processes are eating your team's time. We'll show you exactly how to automate them — free consultation, no commitment.</p>
            </div>
            <div className="flex flex-col w-full gap-4 lg:w-auto">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full shadow-lg bg-violet-600 hover:bg-violet-500 shadow-violet-900/40 active:scale-95">
                Get Free Consultation <ArrowRight size={15} />
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

export default function AIAutomationPage() {
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