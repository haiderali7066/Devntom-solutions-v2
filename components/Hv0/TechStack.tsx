"use client";

import { motion } from "framer-motion";

const stacks = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Laravel", "Django", "Express"],
  },
  {
    category: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Database",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Firebase"],
  },
  {
    category: "AI & Automation",
    techs: ["OpenAI", "LangChain", "n8n", "Make", "Zapier"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span className="text-xs font-bold text-violet-600 tracking-wide">Our Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
          >
            Built With the Best Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed"
          >
            We use battle-tested, modern technologies to deliver fast, secure, and scalable digital products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * i }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-violet-600 mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:border-violet-300 hover:text-violet-700 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
