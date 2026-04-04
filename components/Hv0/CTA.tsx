"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MessageCircle, ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0d0d12] rounded-[48px] p-10 md:p-20 overflow-hidden">

          {/* Glows */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-700/15 blur-[100px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

            {/* Left */}
            <div className="space-y-6 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-xs font-bold text-violet-300">Let&apos;s Build Together</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white"
              >
                Ready To Build
                <br />
                Something{" "}
                <span className="text-violet-400">Amazing?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-white/50 leading-relaxed"
              >
                Whether you have a clear vision or just an idea — we&apos;ll help you figure out the best way to build it. Get in touch and let&apos;s talk.
              </motion.p>
            </div>

            {/* Right: actions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="flex flex-col gap-4 w-full lg:w-auto"
            >
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-lg shadow-violet-900/40 active:scale-95">
                Start a Project <ArrowRight size={15} />
              </Link>

              <a href="https://wa.me/923256036838"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-white/40 text-white font-bold text-sm transition-all backdrop-blur-sm">
                <MessageCircle size={15} /> WhatsApp Us
              </a>

              <div className="pt-2 flex flex-col gap-2">
                <a href="mailto:devntomsolutions@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <Mail size={14} className="text-violet-500" />
                  devntomsolutions@gmail.com
                </a>
                <a href="tel:+923256036838"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <Phone size={14} className="text-violet-500" />
                  +92 325 603 6838
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
