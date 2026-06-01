import Link from "next/link";
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DEVNTOM Solutions",
  url: "https://devntomsolutions.com",
  logo: "https://devntomsolutions.com/images/logo.png",
  sameAs: [
    "https://linkedin.com/company/devntom",
    "https://twitter.com/devntom",
  ],
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "DEVNTOM Solutions Blog",
  description:
    "Expert insights on AI automation, custom software development, website development, and digital marketing.",
  url: "https://devntomsolutions.com/blog",
  publisher: {
    "@type": "Organization",
    name: "DEVNTOM Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://devntomsolutions.com/images/logo.png",
    },
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
  {
    name: "Website Development",
    url: "/services/website-development",
    description:
      "Fast, SEO-optimized websites and web applications built for business growth.",
    icon: "🌐",
  },
  {
    name: "Digital Marketing",
    url: "/services/digital-marketing",
    description:
      "SEO, content marketing, and paid acquisition that drives qualified leads.",
    icon: "📈",
  },
  {
    name: "Software Development",
    url: "/services/software-development",
    description:
      "Custom CRM, ERP, and business software tailored to your workflows.",
    icon: "⚙️",
  },
  {
    name: "App Development",
    url: "/services/app-development",
    description:
      "Cross-platform iOS and Android apps from MVP to enterprise scale.",
    icon: "📱",
  },
  {
    name: "UI/UX Design",
    url: "/services/uiux-design",
    description:
      "Conversion-focused design that reduces friction and drives action.",
    icon: "🎨",
  },
  {
    name: "AI Automation & Chatbots",
    url: "/services/ai-automation",
    description:
      "AI-powered automation, chatbots, and workflow engines that scale your team.",
    icon: "🤖",
  },
];

const RESOURCES = [
  {
    title: "AI ROI Calculator",
    description:
      "Estimate the annual savings your business can achieve through AI automation.",
    href: "/tools/ai-roi-calculator",
    type: "Calculator",
  },
  {
    title: "Website Cost Calculator",
    description:
      "Get an instant estimate for your website project based on features and scale.",
    href: "/tools/website-cost-calculator",
    type: "Calculator",
  },
  {
    title: "CRM Planning Guide",
    description:
      "A step-by-step framework for planning, scoping, and evaluating a CRM project.",
    href: "/guides/crm-planning-guide",
    type: "Guide",
  },
  {
    title: "SEO Audit Checklist",
    description:
      "A 50-point technical and content SEO checklist for business websites.",
    href: "/guides/seo-audit-checklist",
    type: "Checklist",
  },
];

function ArticleCard({ post, variant = "default" }: { post: BlogPost; variant?: "default" | "featured" | "compact" }) {
  if (variant === "featured") {
    return (
      <article className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20">{
              post.category === "AI Automation" ? "🤖" :
              post.category === "Website Development" ? "🌐" :
              post.category === "Software Development" ? "⚙️" :
              post.category === "App Development" ? "📱" :
              post.category === "UI/UX Design" ? "🎨" :
              post.category === "Digital Marketing" ? "📈" : "💼"
            }</span>
          </div>
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
          >
            Read article <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-2xl">
          {post.category === "AI Automation" ? "🤖" :
           post.category === "Website Development" ? "🌐" :
           post.category === "Software Development" ? "⚙️" :
           post.category === "App Development" ? "📱" :
           post.category === "UI/UX Design" ? "🎨" :
           post.category === "Digital Marketing" ? "📈" : "💼"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{post.category}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{post.readingTime} min</span>
          </div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`} className="line-clamp-2">{post.title}</Link>
          </h4>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-200">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readingTime} min read</span>
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const popularPosts = getPopularPosts();
  const latestPosts = allPosts.slice(0, 9);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

        {/* ── HERO ── */}
        <section className="relative bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 dark:from-blue-950/20 dark:via-gray-900 dark:to-indigo-950/10 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                {allPosts.length} Articles Published
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
                Insights for Businesses That Build with Technology
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
                Practical guides on AI automation, custom software, website development, app development, UI/UX design, and digital marketing — written by DEVNTOM's senior consultants.
              </p>

              {/* Search */}
              <form action="/blog/search" method="GET" className="flex gap-3 max-w-xl mb-8">
                <input
                  type="search"
                  name="q"
                  placeholder="Search articles, topics, technologies…"
                  className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  Search
                </button>
              </form>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog"
                  className="bg-blue-600 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  All
                </Link>
                {BLOG_CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 dark:hover:border-blue-800 hover:text-blue-700 dark:hover:text-blue-300 transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED ARTICLES ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">High-impact guides handpicked by our editorial team</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} variant="featured" />
            ))}
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Browse by Category</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Deep expertise across every dimension of technology and growth</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {BLOG_CATEGORIES.map((cat) => {
                const count = getPostsByCategory(cat).length;
                const icon =
                  cat === "AI Automation" ? "🤖" :
                  cat === "Website Development" ? "🌐" :
                  cat === "Software Development" ? "⚙️" :
                  cat === "App Development" ? "📱" :
                  cat === "UI/UX Design" ? "🎨" :
                  cat === "Digital Marketing" ? "📈" :
                  cat === "Business Growth" ? "🚀" : "📊";
                return (
                  <Link
                    key={cat}
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="group p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all"
                  >
                    <div className="text-3xl mb-3">{icon}</div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors mb-1">
                      {cat}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {count} {count === 1 ? "article" : "articles"}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LATEST + POPULAR (2-column layout) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Latest Articles */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {latestPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            {/* Popular + Newsletter */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Popular Articles</h2>
                {popularPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} variant="compact" />
                ))}
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <div className="text-2xl mb-3">📬</div>
                <h3 className="text-lg font-bold mb-2">Stay ahead of the curve</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Weekly insights on AI, software development, and digital marketing delivered to your inbox. No spam, unsubscribe anytime.
                </p>
                <form action="/api/newsletter" method="POST" className="space-y-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 font-bold px-4 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                  >
                    Subscribe Free
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPIC CLUSTERS ── */}
        <section className="bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Topic Clusters</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We've organized our content into deep topic clusters — so you can explore every angle of a subject you care about.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOPIC_CLUSTERS.map((cluster) => {
                const posts = cluster.slugs
                  .map((slug) => allPosts.find((p) => p.slug === slug))
                  .filter(Boolean) as BlogPost[];
                return (
                  <div key={cluster.name} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{cluster.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{cluster.description}</p>
                    <ul className="space-y-2 mb-5">
                      {posts.slice(0, 4).map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-start gap-1.5"
                          >
                            <span className="text-gray-300 dark:text-gray-600 mt-0.5">→</span>
                            <span className="leading-snug">{p.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={cluster.serviceUrl}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View service →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── RESOURCES ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Free Resources</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Practical tools and guides to help you make better technology and marketing decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCES.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all"
              >
                <div className="inline-block bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold px-2.5 py-1 rounded-lg mb-3">
                  {resource.type}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── LONG-FORM SEO CONTENT ── */}
        <section className="bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
              Technology Strategy for Growing Businesses
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Why Businesses Invest in Custom Software
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Off-the-shelf SaaS products are built for the average business. Custom software is built for your business — your workflows, your data, your customers, your competitive advantage. For companies with genuinely unique processes, custom software delivers efficiency gains that no subscription tool can match.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  The ROI case is compelling: a $100,000 custom software investment that saves 3 staff-hours per day pays back in under 18 months. Beyond cost savings, custom software becomes an asset — an owned system that scales with the business and compounds in value year over year.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  The most successful custom software projects start with a well-scoped MVP, validate with real users, and expand iteratively. DEVNTOM's <Link href="/services/software-development" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">software development services</Link> follow this approach for every engagement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Benefits of AI Automation for Operations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  AI automation removes the bottleneck between business volume and team capacity. Without automation, growth requires proportional hiring. With it, the same team handles 3x–10x the volume with higher accuracy and lower cost per transaction.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  In customer support, AI handles 50–80% of inbound inquiries without human escalation. In sales, AI qualifies leads, updates CRM records, and drafts follow-ups — giving reps hours back for actual selling. In operations, AI processes invoices, generates reports, and manages scheduling at machine speed.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  The companies that implement <Link href="/services/ai-automation" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">AI automation solutions</Link> in 2026 will have a permanent structural cost advantage over those that don't.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Modern Website Development Strategies
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  A business website in 2026 is a sales and marketing system, not a digital brochure. The best business websites are built on performance-first frameworks like Next.js, optimized for Core Web Vitals, structured for semantic SEO, and instrumented with analytics that tie page performance to pipeline.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Technical architecture decisions made at build time determine SEO ceiling for years. Server-side rendering, clean URL structure, schema markup, and image optimization are not afterthoughts — they are the foundation of organic traffic growth.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Our <Link href="/services/website-development" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">website development services</Link> include technical SEO architecture, performance optimization, and conversion rate design as standard deliverables.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Digital Marketing for Predictable Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Most businesses rely on referrals for growth — which is unpredictable and unscalable. Digital marketing replaces referral dependency with a systematic customer acquisition engine: SEO drives organic traffic, content builds trust at scale, paid search captures high-intent buyers, and email nurtures leads to close.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  The compounding nature of SEO means that investment made today pays dividends for years. A page that ranks #1 for a commercial keyword generates leads every day with zero incremental spend.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  DEVNTOM's <Link href="/services/digital-marketing" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">digital marketing services</Link> build integrated systems that deliver predictable, scalable pipeline.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Mobile App Development Trends in 2026
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Cross-platform frameworks (React Native, Flutter) now dominate mobile app development for business applications. The performance gap with native development has narrowed significantly — most B2B apps achieve full feature parity with cross-platform approaches at 60–70% of the cost of dual native development.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  AI-native mobile apps — apps with embedded AI features like natural language search, predictive recommendations, and intelligent automation — are becoming the standard expectation. Our <Link href="/services/app-development" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">app development services</Link> include AI feature integration as a core capability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  UI/UX Design Best Practices
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Good UI/UX design is measurable. Conversion rates, task completion rates, time-on-page, bounce rates, and support ticket volume are all directly impacted by design decisions. The best design teams work from behavior data, not aesthetic opinion.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Mobile-first design, clear visual hierarchy, accessible typography, and friction-minimized conversion flows are not optional in 2026 — they are baseline requirements for any competitive business website or application. Explore our <Link href="/services/uiux-design" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">UI/UX design services</Link> to see how design drives measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
              Common questions about AI automation, software development, website development, and digital marketing.
            </p>
            <div className="space-y-5">
              {[
                {
                  q: "What is AI automation?",
                  a: "AI automation uses artificial intelligence to perform repetitive tasks — answering customer inquiries, qualifying leads, processing documents, generating reports — without human intervention. It allows businesses to scale operations without proportional headcount growth. Modern AI automation can handle complex, multi-step workflows and make nuanced decisions based on context.",
                },
                {
                  q: "What does a software development company do?",
                  a: "A software development company designs, builds, tests, and maintains custom software systems — including CRM platforms, ERP systems, web applications, mobile apps, customer portals, and internal tools. The goal is software precisely tailored to your business's unique processes, integrations, and growth requirements.",
                },
                {
                  q: "How much does custom software cost?",
                  a: "Custom software costs range from $25,000 for a simple MVP to $500,000+ for enterprise platforms. Most small-to-mid business software projects (CRM, client portal, workflow tool) cost $40,000–$150,000. Development timeline is typically 3–9 months. The investment typically delivers 3–5x ROI within three years through operational savings and revenue growth.",
                },
                {
                  q: "Why choose Next.js for a business website?",
                  a: "Next.js delivers server-side rendering, static generation, built-in image optimization, and excellent Core Web Vitals performance. These features make it significantly better for SEO and page speed than plain React, which relies on client-side rendering that search engines index more slowly. Next.js is the professional standard for business websites in 2026.",
                },
                {
                  q: "Why invest in UI/UX design?",
                  a: "Poor UX design loses revenue every day. Slow pages, confusing navigation, and weak calls-to-action drive visitors away before they convert. Professional UI/UX design typically improves conversion rates by 30–200%. For a website generating 100 leads/month, even a 30% improvement means 30 additional leads per month — often worth $30,000–$300,000 in additional pipeline annually.",
                },
                {
                  q: "What are the benefits of digital marketing?",
                  a: "Digital marketing builds a measurable, scalable pipeline of qualified leads. SEO delivers compounding organic traffic that grows month over month. Paid search delivers immediate, attributable results. Email marketing generates $36 per $1 spent. Together, digital marketing channels replace unpredictable referral-dependent growth with a systematic customer acquisition engine.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm pr-4">{q}</h3>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Explore DEVNTOM Services</h2>
              <p className="text-gray-500 dark:text-gray-400">
                From strategy to execution — we build technology that drives measurable business results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service) => (
                <Link
                  key={service.name}
                  href={service.url}
                  className="group p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md bg-gray-50 dark:bg-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Get Weekly Technology Insights
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of business leaders who get our weekly insights on AI automation, software strategy, and digital growth.
            </p>
            <form action="/api/newsletter" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your work email"
                required
                className="flex-1 bg-white/10 border border-white/25 rounded-xl px-4 py-3.5 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
              />
              <button
                type="submit"
                className="bg-white text-blue-700 font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
            <p className="text-blue-200 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </section>

      </main>
    </>
  );
}