"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description: "Custom websites, CMS platforms, web apps, SaaS products — built fast, built right. From landing pages to full-scale platforms.",
    href: "/services/website-development",
  },
  {
    title: "Digital Marketing",
    description: "Google & Meta ads, SEO, content strategy, social media management, and brand-building campaigns that drive measurable ROI.",
    href: "/services/digital-marketing",
  },
  {
    title: "Software Development",
    description: "Enterprise-grade custom software — ERP, CRM, internal tools, and complex business systems built for scale and longevity.",
    href: "/services/software-development",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android. From MVPs to full-featured consumer and enterprise applications.",
    href: "/services/app-development",
  },
  {
    title: "UI/UX Design",
    description: "User research, wireframing, prototyping, and pixel-perfect design systems that make products intuitive and unforgettable.",
    href: "/services/ui-ux-design",
  },
  {
    title: "AI Automation & Chatbots",
    description: "Intelligent chatbots, workflow automation, and AI integrations that save time, cut costs, and improve customer experience 24/7.",
    href: "/services/ai-automation",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f7f6f4] w-full px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT */}
        <div className="lg:w-[42%] flex-shrink-0 flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-sm bg-violet-500" />
            </div>
            <span className="text-sm font-semibold text-gray-400">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.08] tracking-tight text-gray-900"
          >
            Everything You Need
            <br />
            To Grow{" "}
            <span className="text-violet-600">Digitally</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-sm text-gray-500 leading-relaxed max-w-[320px]"
          >
            We combine smart strategy, cutting-edge tech, and creative execution to help your business thrive online — end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            <Link href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 active:scale-95 transition-all px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-300/30">
              View all services <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: accordion */}
        <div className="flex-1 flex flex-col divide-y divide-gray-200 border-t border-gray-200">
          {services.map((svc, i) => {
            const isOpen = active === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className={`text-[1.05rem] font-bold tracking-tight transition-colors duration-200 ${isOpen ? "text-violet-600" : "text-gray-900 group-hover:text-violet-500"}`}>
                    {svc.title}
                  </span>
                  <span className={`transition-colors duration-200 flex-shrink-0 ${isOpen ? "text-violet-600" : "text-gray-400 group-hover:text-violet-400"}`}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronRight size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 flex items-start justify-between gap-4">
                        <p className="text-sm text-gray-500 leading-relaxed max-w-lg">{svc.description}</p>
                        <Link href={svc.href}
                          className="flex-shrink-0 w-8 h-8 rounded-full border border-violet-200 bg-violet-50 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white transition-all">
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
