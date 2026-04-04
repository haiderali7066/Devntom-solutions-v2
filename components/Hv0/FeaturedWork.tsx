"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Nexora ERP",
    cat: "Software Development",
    result: "Reduced operational overhead by 40% in 3 months",
    tags: ["ERP System", "Custom Software"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
    color: "bg-violet-500",
  },
  {
    name: "ShopSprint",
    cat: "Website Development",
    result: "E-commerce revenue increased 65% in first quarter",
    tags: ["E-Commerce", "Next.js", "Stripe"],
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop",
    color: "bg-indigo-500",
  },
  {
    name: "Clarise App",
    cat: "App Development",
    result: "10k+ downloads in first 30 days after launch",
    tags: ["iOS & Android", "React Native"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop",
    color: "bg-emerald-500",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span className="text-xs font-bold text-gray-600 tracking-wide">Our Work</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              Featured{" "}
              <span className="text-gray-400">Projects</span>
            </h2>
          </div>
          <Link href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-500 transition-colors">
            View All Work <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">{p.cat}</p>
                <h3 className="text-xl font-black text-white mb-2">{p.name}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{p.result}</p>
              </div>

              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
