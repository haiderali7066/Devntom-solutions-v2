"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services does Devntom Solutions offer?",
    a: "We offer end-to-end digital services including website development, mobile app development, software development (ERP/CRM), digital marketing, UI/UX design, and AI automation & chatbots.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard informational website takes 2–4 weeks. E-commerce sites or web apps typically take 6–12 weeks depending on complexity and feature requirements.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "We work with both! From early-stage startups building their first MVP to established enterprises looking to scale or modernize their tech stack.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via our contact form, email (devntomsolutions@gmail.com), or WhatsApp (+92 325 603 6838). We'll schedule a free discovery call to understand your goals.",
  },
  {
    q: "What industries do you have experience in?",
    a: "We've worked across e-commerce, healthcare, education, fintech, real estate, food & hospitality, logistics, and more.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer flexible maintenance and support plans covering bug fixes, updates, performance monitoring, and feature enhancements after launch.",
  },
  {
    q: "Can you integrate AI into our existing systems?",
    a: "Absolutely. We can integrate AI chatbots, automation workflows, and machine learning features into your existing platforms using APIs from OpenAI, custom models, and automation tools like n8n or Make.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span className="text-xs font-bold text-gray-600 tracking-wide">FAQ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              Everything You<br />
              <span className="text-gray-400">Need To Know</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-sm text-gray-500 leading-relaxed max-w-sm"
            >
              Have a question that&apos;s not here? Reach us at{" "}
              <a href="mailto:devntomsolutions@gmail.com" className="text-violet-600 font-semibold hover:underline">
                devntomsolutions@gmail.com
              </a>{" "}
              or ping us on WhatsApp.
            </motion.p>
          </div>

          {/* Right */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className={`text-sm font-bold transition-colors ${open === i ? "text-violet-600" : "text-gray-800 group-hover:text-violet-600"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${open === i ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
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
