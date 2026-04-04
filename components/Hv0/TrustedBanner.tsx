"use client";

import { motion } from "framer-motion";

const clients = ["TechVentures", "Nexora", "Buildfast", "Clarise", "Orbitly", "Stackline", "Ventura", "Primepath"];

export default function TrustedBanner() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">Trusted by growing businesses</p>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <span key={i} className="text-lg font-black text-gray-200 tracking-tight whitespace-nowrap flex-shrink-0 hover:text-gray-400 transition-colors cursor-default">
              {name}
            </span>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
