"use client";

import { motion } from "framer-motion";
import { Layers, Star, Zap, Shield, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    desc: "From frontend to backend, mobile to cloud — our team handles every layer of your digital product with precision.",
  },
  {
    icon: Star,
    title: "Tailored Solutions",
    desc: "No templates, no shortcuts. Every solution is custom-built around your specific goals, users, and business model.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We move fast without breaking things. Agile sprints, clear timelines, and on-time delivery — every time.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    desc: "We build with security and scalability baked in — your product grows safely as your user base does.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    desc: "From ideation to post-launch, we're your long-term partner. Maintenance, updates, and growth are all covered.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 px-6 bg-[#0d0d12] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.1),transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-xs font-bold text-violet-300 tracking-wide">Why Devntom</span>
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight">
              Why Businesses<br />
              <span className="text-white/40">Choose Us</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-base leading-relaxed lg:text-right">
            We help businesses scale, innovate, and stay ahead — whether it's custom software, SaaS platforms, or AI-driven solutions built for the future.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-between min-h-[280px] hover:border-violet-500/30 transition-all"
            >
              <item.icon className="text-violet-400" size={28} />
              <div className="space-y-3">
                <h4 className="text-base font-bold leading-tight">{item.title}</h4>
                <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
