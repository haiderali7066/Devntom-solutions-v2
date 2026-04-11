"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// export const metadata = {
//   title: "Portfolio | DEVNTOM Solutions — Case Studies & Client Work",
//   description: "Explore DEVNTOM Solutions' portfolio of web development, app development, AI automation, custom software, and digital marketing projects. Real results for real businesses.",
//   keywords: "devntom portfolio, web development case studies, software projects Pakistan, app development portfolio, digital marketing results, client work devntom",
//   openGraph: { title: "DEVNTOM Portfolio | Proven Digital Transformation", url: "https://devntom.com/portfolio" },
// };

const categories = ["All", "Web Development", "Web Apps & SaaS", "E-Commerce", "App Development", "Custom Software", "AI Automation", "Digital Marketing", "UI/UX Design"];

const projects = [
  { slug: "nexora-erp", name: "Nexora ERP", client: "Nexora Corp", cat: "Custom Software", tags: ["ERP", "Node.js", "PostgreSQL", "React"], result: "40% reduction in operational overhead within 90 days of launch", challenge: "6 disconnected tools replaced by one unified platform", color: "bg-violet-600", featured: true },
  { slug: "shopsprint", name: "ShopSprint", client: "ShopSprint Ltd", cat: "E-Commerce", tags: ["Next.js", "Stripe", "Shopify API", "Tailwind"], result: "65% revenue increase in the first quarter post-launch", challenge: "Complete e-commerce rebuild with custom checkout and inventory system", color: "bg-indigo-600", featured: true },
  { slug: "clarise-app", name: "Clarise App", client: "Clarise Health", cat: "App Development", tags: ["React Native", "Firebase", "iOS", "Android"], result: "10,000+ downloads in 30 days — featured by the App Store", challenge: "iOS & Android healthcare app with telemedicine and booking features", color: "bg-emerald-600", featured: true },
  { slug: "growthbase-seo", name: "GrowthBase SEO", client: "GrowthBase Ltd", cat: "Digital Marketing", tags: ["SEO", "Content", "Google Ads", "Analytics"], result: "Organic traffic tripled in 4 months — 18k to 54k monthly visitors", challenge: "Brand with zero domain authority and no content strategy", color: "bg-blue-600", featured: false },
  { slug: "retailpro-pos", name: "RetailPro POS", client: "RetailPro Group", cat: "Custom Software", tags: ["POS", "Multi-location", "Inventory", "Python"], result: "Real-time inventory sync across 12 stores — zero manual reconciliation", challenge: "Paper-based POS system failing at scale across multiple locations", color: "bg-orange-600", featured: false },
  { slug: "delivernow", name: "DeliverNow", client: "DeliverNow Ltd", cat: "App Development", tags: ["React Native", "Real-time", "GPS", "Stripe"], result: "5,000+ daily active users — 4.8★ App Store rating", challenge: "Real-time delivery tracking app with driver and customer interfaces", color: "bg-pink-600", featured: false },
  { slug: "supportbot-ai", name: "SupportBot AI", client: "Clarise Health", cat: "AI Automation", tags: ["GPT-4o", "LangChain", "WhatsApp", "n8n"], result: "70% of support tickets automated — 35% cost reduction in 60 days", challenge: "Support team overwhelmed with repetitive customer queries 24/7", color: "bg-violet-700", featured: false },
  { slug: "nexora-web", name: "Nexora Corporate", client: "Nexora Corp", cat: "Web Development", tags: ["Next.js", "Framer Motion", "CMS", "SEO"], result: "3× increase in inbound leads — 92 Lighthouse performance score", challenge: "Outdated website with poor Core Web Vitals and zero SEO presence", color: "bg-slate-700", featured: false },
  { slug: "healthbridge-portal", name: "HealthBridge Portal", client: "HealthBridge", cat: "Web Apps & SaaS", tags: ["React", "Node.js", "PostgreSQL", "Auth"], result: "40% drop in bounce rate, patient bookings up 120% in 3 months", challenge: "Manual appointment booking via phone causing high no-show rates", color: "bg-teal-600", featured: false },
];

const results = [
  { metric: "100+", label: "Projects Delivered" },
  { metric: "80+",  label: "Happy Clients" },
  { metric: "15+",  label: "Countries Served" },
  { metric: "98%",  label: "Client Satisfaction" },
];

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" ? projects : projects.filter((p) => p.cat === activeCat);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-[#050505] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(124,58,237,0.3)_45%,rgba(139,92,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-24 text-center">
         
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white">
            Real Projects.<br /><span className="text-violet-400">Real Results.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
            className="mt-6 text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            From e-commerce stores to enterprise software and AI automation systems — here's the work we're proud of and the results that prove it.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {results.map((r, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-violet-400">{r.metric}</p>
                <p className="text-white/40 text-xs mt-0.5">{r.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[16vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">PORTFOLIO</motion.div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
      </section>

      {/* FILTER */}
      <section className="py-8 px-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeCat === cat ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="py-16 px-6 bg-[#f7f6f4]">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Featured Projects</p>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -8 }} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <div className={`absolute inset-0 ${p.color}`}>
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[6rem] font-black text-white/10 select-none">{p.name[0]}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white">{t}</span>
                    ))}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">{p.cat}</p>
                    <h3 className="text-xl font-black text-white mb-1">{p.name}</h3>
                    <p className="text-xs text-white/50 mb-2">{p.client}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{p.result}</p>
                  </div>
                  <Link href={`/portfolio/${p.slug}`} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} className="text-white" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL PROJECTS GRID */}
      {rest.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">All Projects</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-violet-200 hover:shadow-lg transition-all">
                  <div className={`h-40 ${p.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-black text-white/10 select-none">{p.name[0]}</span>
                    </div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-[9px] font-bold text-white">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{p.cat} · {p.client}</p>
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-violet-600 transition-colors">{p.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.result}</p>
                    <Link href={`/portfolio/${p.slug}`} className="inline-flex items-center gap-1 text-violet-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study <ArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-[#f7f6f4]">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0d0d12] rounded-[48px] p-10 md:p-16 overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[100px]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <Pill dark>Your Project Next</Pill>
                <h2 className="text-3xl md:text-4xl font-black text-white">Want Results Like These?</h2>
                <p className="text-white/50 text-sm leading-relaxed">Every project in this portfolio started with a conversation. Tell us about yours.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all">
                  Start a Project <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}