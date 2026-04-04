"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We deep-dive into your goals, users, and market. Then we map out a strategy that aligns business objectives with the right technology.",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    desc: "Wireframes, UI concepts, and interactive prototypes — all refined with your feedback before a single line of code is written.",
  },
  {
    num: "03",
    title: "Development & Build",
    desc: "Our engineers build your product using agile sprints, with weekly demos and full transparency throughout the process.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Rigorous testing across devices, browsers, and edge cases. We ship only when it's bulletproof.",
  },
  {
    num: "05",
    title: "Launch & Deploy",
    desc: "Smooth deployment with zero downtime. We handle hosting, domains, integrations, and go-live support.",
  },
  {
    num: "06",
    title: "Growth & Support",
    desc: "Post-launch isn't the end — it's the beginning. We monitor, iterate, and grow your product alongside your business.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span className="text-xs font-bold text-violet-600 tracking-wide">How We Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
            >
              Our Process
            </motion.h2>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-all self-start md:self-auto">
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * i }}
              className="relative p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:border-violet-200 hover:shadow-lg transition-all group"
            >
              <div className="text-[3.5rem] font-black text-gray-100 group-hover:text-violet-100 transition-colors leading-none mb-4 select-none">
                {step.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-base">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
