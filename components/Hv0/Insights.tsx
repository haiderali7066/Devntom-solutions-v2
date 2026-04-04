"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Web Development",
    title: "Why Next.js Is the Future of Web Development in 2025",
    excerpt: "From server components to edge rendering, Next.js has redefined what's possible on the web. Here's why every serious project should consider it.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80",
    date: "Mar 5, 2025",
    readTime: "5 min read",
  },
  {
    tag: "AI & Automation",
    title: "How AI Chatbots Are Slashing Customer Support Costs by 40%",
    excerpt: "Businesses that implement AI-first support strategies are seeing dramatic cost savings. We break down how it works and what to expect.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80",
    date: "Feb 20, 2025",
    readTime: "6 min read",
  },
  {
    tag: "Digital Marketing",
    title: "SEO in 2025: What Still Works and What Doesn't",
    excerpt: "Google's algorithm has evolved dramatically. Here are the strategies that are driving real organic growth right now.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80",
    date: "Feb 10, 2025",
    readTime: "7 min read",
  },
];

export default function Insights() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span className="text-xs font-bold text-gray-600 tracking-wide">Insights & Blog</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
            >
              Latest from{" "}
              <span className="text-gray-400">Our Blog</span>
            </motion.h2>
          </div>
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-500 transition-colors">
            All Articles <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.09 * i }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-violet-600">{post.tag}</span>
                  <span className="text-[10px] text-gray-400">{post.date} · {post.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 leading-snug group-hover:text-violet-600 transition-colors text-base">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
