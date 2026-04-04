"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "6", label: "Core Services" },
  { value: "24/7", label: "Support Available" },
];

export default function Overview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span className="text-xs font-bold text-violet-600 tracking-wide">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-gray-900"
            >
              We Turn Ideas Into
              <br />
              <span className="text-violet-600">Scalable Digital</span>
              <br />
              Products
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-[0.95rem] text-gray-500 leading-relaxed max-w-lg"
            >
              Devntom Solutions is a full-service digital agency helping businesses build powerful online presences. From sleek websites and mobile apps to intelligent AI automations and results-driven marketing — we cover everything your business needs to grow in the digital era.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="text-[0.95rem] text-gray-500 leading-relaxed max-w-lg"
            >
              We don't just deliver projects — we build long-term partnerships grounded in transparency, performance, and real business outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-violet-600 text-white text-sm font-bold transition-all">
                About Us <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all"
              >
                <p className="text-[2.8rem] font-black text-violet-600 leading-none">{s.value}</p>
                <p className="text-sm font-semibold text-gray-500 mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
