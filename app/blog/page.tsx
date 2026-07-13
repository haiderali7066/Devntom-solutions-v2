import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  getAllPosts,
  getFeaturedPosts,
  getPopularPosts,
  getPostsByCategory,
  BLOG_CATEGORIES,
  TOPIC_CLUSTERS,
  type BlogCategory,
  type BlogPost,
} from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog & Resources | DEVNTOM Solutions — AI, Software & Digital Marketing Insights",
  description:
    "Expert insights on AI automation, custom software development, website development, app development, UI/UX design, and digital marketing. Practical guides, cost breakdowns, and strategy for growing businesses.",
  alternates: {
    canonical: "https://devntomsolutions.com/blog",
  },
  openGraph: {
    title: "Blog & Resources | DEVNTOM Solutions",
    description:
      "Expert insights on AI automation, custom software, website development, and digital marketing for growing businesses.",
    url: "https://devntomsolutions.com/blog",
    siteName: "DEVNTOM Solutions",
    type: "website",
    images: [
      {
        url: "https://devntomsolutions.com/images/og/blog.jpg",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Resources | DEVNTOM Solutions",
    description:
      "Expert insights on AI automation, software development, and digital marketing.",
    images: ["https://devntomsolutions.com/images/og/blog.jpg"],
  },
};

// --- SEO SCHEMAS ---
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DEVNTOM Solutions",
  url: "https://devntomsolutions.com",
  logo: "https://devntomsolutions.com/images/logo.png",
  sameAs: ["https://linkedin.com/company/devntom", "https://twitter.com/devntom"],
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "DEVNTOM Solutions Blog",
  description: "Expert insights on AI automation, custom software development, website development, and digital marketing.",
  url: "https://devntomsolutions.com/blog",
  publisher: {
    "@type": "Organization",
    name: "DEVNTOM Solutions",
    logo: { "@type": "ImageObject", url: "https://devntomsolutions.com/images/logo.png" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI automation uses artificial intelligence to perform repetitive tasks — answering customer inquiries, qualifying leads, processing documents, generating reports — without human intervention. It allows businesses to scale operations without proportional headcount growth.",
      },
    },
    {
      "@type": "Question",
      name: "What does a software development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A software development company designs, builds, and maintains custom software systems — CRM platforms, ERP systems, web applications, mobile apps, and internal tools — tailored to a specific business's processes and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software costs range from $25,000 for a simple MVP to $500,000+ for enterprise platforms. Most small-to-mid business software projects cost $40,000–$150,000. The investment typically delivers 3–5x ROI within three years through operational savings and revenue growth.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Next.js for a business website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js delivers server-side rendering, static generation, built-in image optimization, and excellent Core Web Vitals performance. These features make it significantly better for SEO and page speed than plain React — which is why it's the industry standard for business websites in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Why invest in UI/UX design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poor UX design costs businesses revenue every day — slow pages, confusing navigation, and weak calls-to-action drive visitors away before they convert. Professional UI/UX design typically improves conversion rates by 30–200%, delivering significant ROI on the design investment.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing builds a measurable pipeline of qualified leads at predictable cost. SEO delivers compounding organic traffic. Paid search delivers immediate results. Email marketing generates $36 per $1 spent. Together, digital marketing channels replace unpredictable referral-dependent growth with a scalable customer acquisition system.",
      },
    },
  ],
};

const SERVICES = [
  { name: "Website Development", url: "/services/website-development", description: "Fast, SEO-optimized websites and web applications built for business growth." },
  { name: "Digital Marketing", url: "/services/digital-marketing", description: "SEO, content marketing, and paid acquisition that drives qualified leads." },
  { name: "Software Development", url: "/services/software-development", description: "Custom CRM, ERP, and business software tailored to your workflows." },
  { name: "App Development", url: "/services/app-development", description: "Cross-platform iOS and Android apps from MVP to enterprise scale." },
  { name: "UI/UX Design", url: "/services/uiux-design", description: "Conversion-focused design that reduces friction and drives action." },
  { name: "AI Automation & Chatbots", url: "/services/ai-automation", description: "AI-powered automation, chatbots, and workflow engines that scale your team." },
];

const RESOURCES = [
  { title: "AI ROI Calculator", description: "Estimate the annual savings your business can achieve through AI automation.", href: "/tools/ai-roi-calculator", type: "Calculator" },
  { title: "Website Cost Calculator", description: "Get an instant estimate for your website project based on features and scale.", href: "/tools/website-cost-calculator", type: "Calculator" },
  { title: "CRM Planning Guide", description: "A step-by-step framework for planning, scoping, and evaluating a CRM project.", href: "/guides/crm-planning-guide", type: "Guide" },
  { title: "SEO Audit Checklist", description: "A 50-point technical and content SEO checklist for business websites.", href: "/guides/seo-audit-checklist", type: "Checklist" },
];

// High-quality relevant CDN fallbacks via Unsplash
function getCategoryFallbackImage(category: string): string {
  const map: Record<string, string> = {
    "AI Automation": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop", // Neural networks/AI
    "Website Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop", // Code/Laptop
    "Software Development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", // Server room/Backend
    "App Development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", // Mobile device
    "UI/UX Design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop", // Design wireframes/color
    "Digital Marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", // Charts/Analytics
  };
  return map[category] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"; // Earth/Global tech
}

// --- REFACTORED COMPONENT CARD ---
function ArticleCard({ post, variant = "default" }: { post: BlogPost; variant?: "default" | "featured" | "compact" }) {
  const coverImage = post.coverImage || getCategoryFallbackImage(post.category);

  if (variant === "featured") {
    return (
      <article className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 flex flex-col h-full">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
          <Image
            src={coverImage}
            alt={post.title}
            fill
            unoptimized // Bypasses next.config.js domain restriction for external CDN links
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1 bg-neutral-900 relative z-10">
          <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400 mb-4 uppercase tracking-wider">
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
            </time>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>{post.readingTime} min read</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-3 leading-snug">
            <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
              {post.title}
            </Link>
          </h3>
          <p className="text-sm text-neutral-400 mb-8 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">
              Access Document <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-5 py-4 items-center border-b border-neutral-200 dark:border-neutral-800 last:border-0 relative">
        <div className="relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={coverImage}
            alt={post.title}
            fill
            unoptimized
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1.5">
            {post.category}
          </span>
          <h4 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">{post.title}</Link>
          </h4>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-neutral-200/50 hover:border-neutral-300 transition-all duration-300 flex flex-col h-full relative">
      <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
        <Image
          src={coverImage}
          alt={post.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-neutral-100 text-neutral-700 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
            {post.category}
          </span>
          <span className="text-[11px] font-mono text-neutral-400">{post.readingTime} min read</span>
        </div>
        <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">{post.title}</Link>
        </h3>
        <p className="text-sm text-neutral-500 line-clamp-3 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
          <time dateTime={post.publishDate}>
            {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
          </time>
          <span className="font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 transition-colors">
            Read <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </article>
  );
}

// --- MAIN SERVER COMPONENT PAGE ---
export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const popularPosts = getPopularPosts();
  const latestPosts = allPosts.slice(0, 8);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen antialiased bg-neutral-50 selection:bg-blue-500 selection:text-white">

        {/* SECTION 1: CENTERED HERO (DEEP DARK INDUSTRIAL) */}
        <section className="relative bg-neutral-950 text-white border-b border-neutral-900 overflow-hidden py-24 lg:py-36 flex flex-col items-center justify-center text-center">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_center,transparent_20%,#0a0a0a_100%)] pointer-events-none" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full px-4 py-1.5 text-[11px] font-mono uppercase text-neutral-300 mb-8 tracking-widest shadow-xl">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              {allPosts.length} Industrial Intelligence Deep-Dives
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 max-w-4xl mx-auto">
              Insights for Businesses Building with Technology
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              Practical blueprint guides mapping AI automation frameworks, modern bespoke software, systems performance, and conversion engineering.
            </p>

            {/* Centered Search Bar */}
            <form action="/blog/search" method="GET" className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto mb-12 shadow-2xl">
              <input
                type="search"
                name="q"
                required
                placeholder="Search architectures, tooling, or metrics..."
                className="flex-1 bg-neutral-900 border border-neutral-700 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                Search
              </button>
            </form>

            {/* Centered Filters */}
            <div className="flex flex-wrap justify-center gap-2.5 items-center max-w-3xl mx-auto">
              <Link href="/blog" className="bg-white text-neutral-950 text-[11px] font-mono uppercase font-bold tracking-widest px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors shadow-lg">
                All Feed
              </Link>
              {BLOG_CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className="bg-neutral-900/50 backdrop-blur-md border border-neutral-700 text-neutral-300 text-[11px] font-mono uppercase font-semibold tracking-widest px-5 py-2 rounded-full hover:bg-neutral-800 hover:border-neutral-500 hover:text-white transition-all shadow-lg"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURED ARTICLES (DARK BACKGROUND CONTINUED) */}
        <section className="bg-neutral-950 text-white pb-24 lg:pb-32 border-b border-neutral-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-[11px] font-mono font-bold tracking-widest text-blue-500 uppercase mb-2">01 / Editorial Selections</h2>
                <p className="text-3xl font-black text-white tracking-tight">Featured Architecture Manuals</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} variant="featured" />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: DOMAINS/CATEGORIES GRID (CRISP LIGHT MODE) */}
        <section className="bg-white text-neutral-900 border-b border-neutral-200 py-24 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">02 / Segregated Modules</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900">Browse Capability Domains</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {BLOG_CATEGORIES.map((cat) => {
                const count = getPostsByCategory(cat).length;
                return (
                  <Link
                    key={cat}
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-center items-center text-center h-40"
                  >
                    <div className="font-bold text-sm text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                      {cat}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold bg-white px-3 py-1 rounded border border-neutral-200 group-hover:border-blue-200 group-hover:text-blue-500 transition-colors">
                      {count} Docs
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: MAIN FEED + SIDEBAR (LIGHT TEXTURED BACKGROUND) */}
        <section className="bg-neutral-50 text-neutral-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Main Feed Column */}
              <div className="lg:col-span-8">
                <div className="mb-10 border-b border-neutral-200 pb-6">
                  <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">03 / Continuous Feed</h2>
                  <h3 className="text-3xl font-black tracking-tight text-neutral-900">Latest Intelligence Docs</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {latestPosts.map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>

              {/* Sidebar Components */}
              <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-10">
                {/* Popular Read Block */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-6 border-b border-neutral-100 pb-4">High-Velocity Artifacts</h3>
                  <div className="flex flex-col gap-2">
                    {popularPosts.map((post) => (
                      <ArticleCard key={post.slug} post={post} variant="compact" />
                    ))}
                  </div>
                </div>

                {/* Technical Newsletter Inset */}
                <div className="bg-neutral-950 text-white rounded-2xl p-6 md:p-8 border border-neutral-900 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m3 15 2 2 4-4" /></svg>
                  </div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 mb-3 relative z-10">Systems Briefings</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 relative z-10 font-medium">
                    Receive programmatic technology analysis directly to your communication loop. Weekly frequency.
                  </p>
                  <form action="/api/newsletter" method="POST" className="space-y-3 relative z-10">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter corporate email"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button type="submit" className="w-full bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors">
                      Subscribe Terminal
                    </button>
                  </form>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* SECTION 5: TOPIC CLUSTERS (DEEP DARK MATRIX STYLE) */}
        <section className="bg-neutral-950 text-white border-y border-neutral-900 py-24 lg:py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-500 mb-2">04 / Structured Matrices</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">Topic Network Vaults</h3>
              <p className="text-lg text-neutral-400 font-medium">
                Comprehensive structural directories evaluating programmatic system components holistically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TOPIC_CLUSTERS.map((cluster) => {
                const posts = cluster.slugs
                  .map((slug) => allPosts.find((p) => p.slug === slug))
                  .filter(Boolean) as BlogPost[];
                return (
                  <div key={cluster.name} className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <h4 className="font-bold text-xl text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{cluster.name}</h4>
                      <p className="text-sm text-neutral-400 mb-8 leading-relaxed line-clamp-2">{cluster.description}</p>
                      <ul className="space-y-4 mb-8">
                        {posts.slice(0, 3).map((p) => (
                          <li key={p.slug} className="border-b border-neutral-800/80 pb-3 last:border-0 last:pb-0">
                            <Link href={`/blog/${p.slug}`} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-start gap-3">
                              <span className="text-blue-500 font-mono text-xs mt-0.5">↳</span>
                              <span className="leading-snug line-clamp-2">{p.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={cluster.serviceUrl} className="inline-flex items-center justify-between w-full text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 hover:text-blue-400 transition-colors pt-5 border-t border-neutral-800">
                      Examine Blueprint <span className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: FREE RESOURCES (CLEAN LIGHT CARDS) */}
        <section className="bg-white text-neutral-900 py-24 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">05 / Calculators & Checklists</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900">Functional Utilities</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESOURCES.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-8 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex-1">
                    <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-5">
                      {resource.type}
                    </span>
                    <h4 className="font-bold text-neutral-900 text-lg mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                      Initialize
                    </span>
                    <span className="text-neutral-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: LONG-FORM SEO DEEP ARCHITECTURE PANEL (LIGHT SPLIT LAYOUT) */}
        <section className="bg-neutral-50 text-neutral-900 py-24 lg:py-32 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">Strategic Dossier</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 mb-6">Enterprise Automation & Tech Architectures</h3>
              <p className="text-lg text-neutral-600 leading-relaxed font-medium">Core infrastructural principles governing modern digital enterprise scalability.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-4 border-l-2 border-blue-500 pl-4">Bespoke Systems Optimization</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Off-the-shelf SaaS infrastructures introduces architecture compromises. Bespoke systems integration honors explicitly mapped corporate procedures, transactional safety constraints, and distinct user environments. Scalability functions natively without subscription tax penalties.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-4 border-l-2 border-blue-500 pl-4">Agentic Workflow Automation</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Deep intelligence deployment models isolate bottlenecks inside standard manual data handling sequences. Offloading repeatable pipelines to containerized orchestrators expands transactional bandwidth capacity tenfold without expanding systemic administrative overhead constraints.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-4 border-l-2 border-blue-500 pl-4">Modern Core Vitals Strategy</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Web structures execute as performance-first client engines built upon pre-rendered nodes. Decoupled frameworks like Next.js facilitate rapid rendering speeds, native semantic markup indexing patterns, and instantaneous data layer distribution configurations globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ ACCORDIONS (CLEAN WHITE BLOCK) */}
        <section className="bg-white text-neutral-900 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">Knowledge Query Base</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900">Frequently Examined Elements</h3>
            </div>
            <div className="space-y-4">
              {[
                { q: "What is AI automation?", a: "AI automation uses artificial intelligence to perform repetitive tasks — answering customer inquiries, qualifying leads, processing documents, generating reports — without human intervention. It allows businesses to scale operations without proportional headcount growth." },
                { q: "What does a software development company do?", a: "A software development company designs, builds, tests, and maintains custom software systems — including CRM platforms, ERP systems, web applications, mobile apps, customer portals, and internal tools." },
                { q: "How much does custom software cost?", a: "Custom software costs range from $25,000 for a simple MVP to $500,000+ for enterprise platforms. Most small-to-mid business software projects cost $40,000–$150,000. Development timeline is typically 3–9 months." },
                { q: "Why choose Next.js for a business website?", a: "Next.js delivers server-side rendering, static generation, built-in image optimization, and excellent Core Web Vitals performance. These features make it significantly better for SEO and page speed than plain client-side rendering models." }
              ].map(({ q, a }) => (
                <details key={q} className="group bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-300">
                  <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none select-none font-bold text-neutral-900 text-base md:text-lg">
                    <span>{q}</span>
                    <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300 bg-blue-50 w-8 h-8 flex items-center justify-center rounded-full">▼</span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-200/50 pt-4 bg-white">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: CAPABILITIES ROUTING (DARK INDUSTRIAL PLATES) */}
        <section className="bg-neutral-950 text-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-500 mb-2">System Execution Engines</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Core Capability Outposts</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <Link
                  key={service.name}
                  href={service.url}
                  className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300 flex flex-col justify-between min-h-[180px]"
                >
                  <div>
                    <h4 className="font-bold text-white text-lg mb-3 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-800/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-500 group-hover:text-blue-400 transition-colors">
                      Access Module
                    </span>
                    <span className="text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: END TERMINAL CALL TO ACTION (CENTERED, DEEP ACCENT) */}
        <section className="relative bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-900 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Synchronize Architectures
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed mb-10 font-medium">
              Join enterprise executives receiving technical distribution files and performance audits directly to their terminal pipelines.
            </p>
            <form action="/api/newsletter" method="POST" className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto shadow-2xl">
              <input
                type="email"
                name="email"
                required
                placeholder="Secure institutional email input"
                className="flex-1 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button type="submit" className="bg-white hover:bg-neutral-200 text-neutral-950 text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Initialize
              </button>
            </form>
            <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest mt-6">Zero noise transmission. Revocation accessible continuously.</p>
          </div>
        </section>

      </main>
    </>
  );
}