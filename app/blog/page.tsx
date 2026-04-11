// ════════════════════════════════════════════════════════════════════════
// FILE 1: app/(marketing)/blog/page.tsx
// ════════════════════════════════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";

// export const metadata = {
//   title: "Blog | DEVNTOM Solutions — Web Dev, AI, Marketing Insights",
//   description: "Expert articles on web development, AI automation, digital marketing, software engineering, and business growth from the DEVNTOM Solutions team.",
//   keywords: "devntom blog, web development articles, AI automation tips, digital marketing insights, software development blog, Next.js tutorials, SEO tips Pakistan",
//   openGraph: { title: "DEVNTOM Blog | Tech Insights & Digital Strategy", url: "https://devntom.com/blog" },
// };

const categories = ["All", "Web Development", "AI & Automation", "Digital Marketing", "Software", "App Development", "UI/UX Design", "Business Growth"];

const posts = [
  { slug: "why-nextjs-future-web-development-2025", cat: "Web Development", title: "Why Next.js Is the Future of Web Development in 2025", excerpt: "From server components to edge rendering, Next.js has redefined what's possible on the web. Here's why every serious project should consider it — and what makes it dramatically better than alternatives.", date: "Mar 5, 2025", read: "8 min read", featured: true },
  { slug: "ai-chatbots-cut-support-costs-40-percent", cat: "AI & Automation", title: "How AI Chatbots Are Slashing Customer Support Costs by 40%", excerpt: "Businesses implementing AI-first support strategies are seeing dramatic cost savings alongside higher customer satisfaction scores. We break down exactly how it works.", date: "Feb 20, 2025", read: "6 min read", featured: true },
  { slug: "seo-strategies-that-work-2025", cat: "Digital Marketing", title: "SEO in 2025: What Still Works and What Doesn't", excerpt: "Google's algorithm has evolved dramatically. These are the strategies driving real organic growth right now — and the outdated tactics to abandon immediately.", date: "Feb 10, 2025", read: "7 min read", featured: true },
  { slug: "react-native-vs-flutter-2025", cat: "App Development", title: "React Native vs Flutter in 2025: Which Should You Choose?", excerpt: "Both are excellent cross-platform frameworks — but the right choice depends on your team, product, and long-term roadmap. Here's our honest breakdown.", date: "Jan 28, 2025", read: "9 min read", featured: false },
  { slug: "crm-erp-difference-business-guide", cat: "Software", title: "CRM vs ERP: What's the Difference and Which Does Your Business Need?", excerpt: "Many business owners use these terms interchangeably — they're not the same. Understanding the distinction can save you from a very expensive implementation mistake.", date: "Jan 15, 2025", read: "5 min read", featured: false },
  { slug: "ux-design-mistakes-costing-conversions", cat: "UI/UX Design", title: "7 UX Mistakes That Are Silently Killing Your Conversion Rate", excerpt: "You could have the best product in your market and still lose customers to a competitor with worse technology but better UX. Here's what to fix first.", date: "Jan 5, 2025", read: "7 min read", featured: false },
  { slug: "langchain-n8n-business-automation-guide", cat: "AI & Automation", title: "Building Business Automation with LangChain and n8n: A Practical Guide", excerpt: "A step-by-step walkthrough of how we build production-ready AI automation pipelines for real businesses — tools, architecture, and lessons learned.", date: "Dec 20, 2024", read: "12 min read", featured: false },
  { slug: "ecommerce-conversion-optimisation-tips", cat: "Digital Marketing", title: "10 E-commerce Conversion Optimisation Tactics That Actually Work", excerpt: "Most e-commerce stores convert below 2%. These specific, implementable tactics have consistently moved that needle for our clients.", date: "Dec 12, 2024", read: "8 min read", featured: false },
  { slug: "custom-software-vs-off-the-shelf", cat: "Software", title: "Custom Software vs Off-the-Shelf: How to Make the Right Decision", excerpt: "The answer isn't always 'build custom' — and it isn't always 'buy off the shelf'. Here's the framework we use with every client to make this decision properly.", date: "Dec 1, 2024", read: "6 min read", featured: false },
];

const catColors: Record<string, string> = {
  "Web Development": "text-blue-600 bg-blue-50",
  "AI & Automation": "text-violet-600 bg-violet-50",
  "Digital Marketing": "text-green-600 bg-green-50",
  "Software": "text-orange-600 bg-orange-50",
  "App Development": "text-pink-600 bg-pink-50",
  "UI/UX Design": "text-purple-600 bg-purple-50",
  "Business Growth": "text-emerald-600 bg-emerald-50",
};

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCat === "All" || p.cat === activeCat;
    const matchQuery = query === "" || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-[#050505] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(124,58,237,0.3)_45%,rgba(139,92,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Pill dark>Insights & Blog</Pill>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white">
            Tech Insights for<br /><span className="text-violet-400">Modern Businesses</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
            className="mt-6 text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Practical articles on web development, AI automation, digital marketing, and building better digital products — from our team to yours.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[18vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">
            BLOG
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
      </section>

      {/* FILTER */}
      <section className="py-10 px-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeCat === cat ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..."
              className="pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-violet-300 w-52" />
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-24 px-6 bg-[#f7f6f4]">
        <div className="max-w-7xl mx-auto space-y-16">
          {featured.length > 0 && (
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featured.map((p, i) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                    className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-violet-200 hover:shadow-lg transition-all">
                    <div className={`h-36 relative overflow-hidden ${i === 0 ? "bg-violet-600" : i === 1 ? "bg-[#0d0d12]" : "bg-indigo-600"}`}>
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${catColors[p.cat] || "text-gray-600 bg-gray-100"}`}>{p.cat}</span>
                        <span className="text-[10px] text-gray-400">{p.read}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-violet-600 transition-colors mb-2">{p.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{p.date}</span>
                        <Link href={`/blog/${p.slug}`} className="text-xs font-bold text-violet-600 flex items-center gap-1 hover:gap-2 transition-all">
                          Read <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">All Articles</h2>
              <div className="grid gap-4">
                {rest.map((p, i) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                    <Link href={`/blog/${p.slug}`} className="flex items-center gap-6 p-5 bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all group">
                      <div className={`w-16 h-16 rounded-xl flex-shrink-0 ${i % 3 === 0 ? "bg-violet-600" : i % 3 === 1 ? "bg-indigo-600" : "bg-[#0d0d12]"} relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:8px_8px]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${catColors[p.cat] || "text-gray-600 bg-gray-100"}`}>{p.cat}</span>
                          <span className="text-[10px] text-gray-400">{p.date} · {p.read}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-violet-600 transition-colors line-clamp-1">{p.title}</h3>
                        <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{p.excerpt}</p>
                      </div>
                      <ArrowUpRight size={15} className="text-gray-300 group-hover:text-violet-500 flex-shrink-0 transition-colors" />
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-semibold">No articles found for your search.</p>
              <button onClick={() => { setQuery(""); setActiveCat("All"); }} className="mt-4 text-violet-600 text-sm font-bold">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0d0d12] rounded-[48px] p-10 md:p-16 overflow-hidden text-center">
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[100px]" />
            <div className="relative z-10 max-w-xl mx-auto space-y-5">
              <Pill dark>Stay Updated</Pill>
              <h2 className="text-3xl font-black text-white">Get the Latest Articles in Your Inbox</h2>
              <p className="text-white/50 text-sm">No spam — just practical insights on technology, digital strategy, and business growth, delivered bi-weekly.</p>
              <div className="flex gap-3 max-w-sm mx-auto">
                <input placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder-white/30 focus:outline-none focus:border-violet-400" />
                <button className="px-5 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all flex-shrink-0">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}