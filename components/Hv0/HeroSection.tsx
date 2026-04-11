"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80",
    tag: "Web & App Development",
    headline: ["Build Digital", "Products That", "Actually Work"],
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&auto=format&fit=crop&q=80",
    tag: "AI Automation & Chatbots",
    headline: ["Automate. Scale.", "Lead With", "Intelligence"],
  },
 {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop&q=80",
    tag: "Digital Marketing",
    headline: ["Grow Your Brand.", "Dominate Your", "Market"],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#050505]">

      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slides[current].image} className="object-cover w-full h-full opacity-50" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_20%,rgba(124,58,237,0.3)_45%,rgba(139,92,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-start justify-between px-8 pt-20 lg:px-16">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-2">
          </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="hidden text-right md:block">
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">Full-Service</p>
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">Digital Agency</p>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-8 mx-auto lg:px-16 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300">{slides[current].tag}</span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight text-white">
              {slides[current].headline.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            <p className="max-w-md text-base font-medium leading-relaxed text-white/50">
              We design, build, and grow digital products — from custom websites and mobile apps to AI-powered automation — for businesses that want to lead, not follow.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-violet-900/40 active:scale-95">
                Start a Project <ArrowRight size={15} />
              </Link>
              <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/50 text-white font-bold text-sm rounded-full transition-all backdrop-blur-sm">
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom area */}
      <div className="relative z-10 flex flex-col items-center w-full pb-6">
        {/* Giant wordmark */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <h2 className="text-[18vw] font-black text-white/[0.04] leading-none tracking-[-0.04em] select-none whitespace-nowrap">
              DEVNTOM
            </h2>
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* Slide indicators */}
        <div className="relative z-10 flex gap-3 mt-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-500 ${i === current ? "w-12 bg-violet-400" : "w-6 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
