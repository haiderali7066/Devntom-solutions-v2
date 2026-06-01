import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getAdjacentPosts,
  formatDate,
  type BlogPost,
} from "@/lib/blogs";

/* ─────────────────────────────────────────────
   Static params
───────────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/* ─────────────────────────────────────────────
   Metadata — SEO/GEO optimised
───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  const url = `https://devntomsolutions.com/blog/${post.slug}`;
  const imageUrl = `https://devntomsolutions.com${post.featuredImage}`;

  return {
    title: `${post.title} | DEVNTOM Solutions`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name, url: "https://devntomsolutions.com" }],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "DEVNTOM Solutions",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate ?? post.publishDate,
      authors: [post.author.name],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.featuredImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: "@devntom",
      site: "@devntom",
    },
  };
}

/* ─────────────────────────────────────────────
   Schema helpers — full GEO signals
───────────────────────────────────────────── */
function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://devntomsolutions.com${post.featuredImage}`,
    datePublished: post.publishDate,
    dateModified: post.updatedDate ?? post.publishDate,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://devntomsolutions.com",
    },
    publisher: {
      "@type": "Organization",
      name: "DEVNTOM Solutions",
      logo: { "@type": "ImageObject", url: "https://devntomsolutions.com/images/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://devntomsolutions.com/blog/${post.slug}` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    about: { "@type": "Thing", name: post.category },
    mentions: post.tags.map((tag) => ({ "@type": "Thing", name: tag })),
  };
}

function buildBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://devntomsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://devntomsolutions.com/blog" },
      { "@type": "ListItem", position: 3, name: post.category, item: `https://devntomsolutions.com/blog?category=${encodeURIComponent(post.category)}` },
      { "@type": "ListItem", position: 4, name: post.title, item: `https://devntomsolutions.com/blog/${post.slug}` },
    ],
  };
}

function buildFaqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

function buildSpeakableSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: post.title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-summary", ".article-content h2"],
    },
    url: `https://devntomsolutions.com/blog/${post.slug}`,
  };
}

/* ─────────────────────────────────────────────
   Markdown renderer
───────────────────────────────────────────── */
function renderMarkdown(md: string): string {
  let html = md.trim();

  html = html.replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
    `<pre class="blog-pre"><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
  );

  html = html.replace(/(\|.+\|\n)+/g, (table) => {
    const rows = table.trim().split("\n");
    const headerCells = rows[0].split("|").filter((c) => c.trim())
      .map((c) => `<th class="blog-th">${c.trim()}</th>`).join("");
    const bodyRows = rows.slice(2)
      .map((row) => {
        const cells = row.split("|").filter((c) => c.trim())
          .map((c) => `<td class="blog-td">${c.trim()}</td>`).join("");
        return `<tr class="blog-tr">${cells}</tr>`;
      }).join("");
    return `<div class="blog-table-wrap"><table class="blog-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
  });

  html = html.replace(/^#### (.+)$/gm, '<h4 class="blog-h4">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="blog-h3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="blog-h2" id="$1">$2</h2>'.replace("$1", (m: string) => m.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/ +/g, "-")).replace("$2", "$1"));

  // Fix h2 id generation properly
  html = html.replace(/<h2 class="blog-h2" id="(.+?)">(.+?)<\/h2>/g, (_, _id, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/ +/g, "-");
    return `<h2 class="blog-h2" id="${id}">${text}</h2>`;
  });

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="blog-strong">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/`([^`]+)`/g, '<code class="blog-code">$1</code>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="blog-link">$1</a>');

  html = html.replace(/(^- .+\n?)+/gm, (block) => {
    const items = block.trim().split("\n")
      .map((line) => `<li class="blog-li-unordered"><span class="blog-bullet">▸</span><span>${line.replace(/^- /, "")}</span></li>`)
      .join("");
    return `<ul class="blog-ul">${items}</ul>`;
  });

  html = html.replace(/(^\d+\. .+\n?)+/gm, (block) => {
    let counter = 0;
    const items = block.trim().split("\n")
      .map((line) => {
        counter++;
        return `<li class="blog-li-ordered"><span class="blog-num">${counter}</span><span>${line.replace(/^\d+\. /, "")}</span></li>`;
      }).join("");
    return `<ol class="blog-ol">${items}</ol>`;
  });

  html = html.replace(/^([^<\n].+)$/gm, '<p class="blog-p">$1</p>');
  html = html.replace(/\n\n+/g, "\n");

  return html;
}

/* ─────────────────────────────────────────────
   Extract headings for ToC
───────────────────────────────────────────── */
function extractHeadings(content: string) {
  return content.split("\n")
    .filter((l) => l.startsWith("## ") || l.startsWith("### "))
    .map((l) => {
      const level = l.startsWith("### ") ? 3 : 2;
      const text = l.replace(/^#{2,3} /, "");
      const id = text.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/ +/g, "-");
      return { level, text, id } as { level: 2 | 3; text: string; id: string };
    });
}

/* ─────────────────────────────────────────────
   Category icon/color helpers
───────────────────────────────────────────── */
const categoryMeta: Record<string, { icon: string; color: string }> = {
  "AI Automation":        { icon: "🤖", color: "from-violet-500 to-purple-600" },
  "Website Development":  { icon: "🌐", color: "from-blue-500 to-cyan-500" },
  "Software Development": { icon: "⚙️", color: "from-indigo-500 to-blue-600" },
  "App Development":      { icon: "📱", color: "from-pink-500 to-rose-500" },
  "UI/UX Design":         { icon: "🎨", color: "from-orange-400 to-pink-500" },
  "Digital Marketing":    { icon: "📈", color: "from-green-500 to-emerald-600" },
};
const getCatMeta = (cat: string) => categoryMeta[cat] ?? { icon: "💼", color: "from-violet-500 to-indigo-600" };

/* ─────────────────────────────────────────────
   Related card component
───────────────────────────────────────────── */
function RelatedCard({ post }: { post: BlogPost }) {
  const { icon, color } = getCatMeta(post.category);
  return (
    <article className="group flex gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-400/30 transition-all duration-300 backdrop-blur-sm">
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-lg`}>
        {icon}
      </div>
      <div className="min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 block mb-1">{post.category}</span>
        <h4 className="text-xs font-semibold text-white/90 group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h4>
        <span className="text-[10px] text-white/40 mt-1 block">{post.readingTime} min read</span>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(slug);
  const headings = extractHeadings(post.content);
  const contentHtml = renderMarkdown(post.content);
  const { icon, color } = getCatMeta(post.category);

  const articleSchema  = buildArticleSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema(post);
  const faqSchema      = post.faq ? buildFaqSchema(post.faq) : null;
  const speakableSchema = buildSpeakableSchema(post);

  return (
    <>
      {/* ── Structured Data / Schema ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* ── Reading Progress Bar ── */}
      <div id="reading-progress" className="fixed top-0 left-0 h-[3px] z-[100] transition-all duration-75"
        style={{ width: "0%", background: "linear-gradient(90deg, #7c3aed, #6366f1, #3b82f6)" }} />
      <script dangerouslySetInnerHTML={{
        __html: `(function(){function u(){var e=document.documentElement,p=e.scrollTop/(e.scrollHeight-e.clientHeight)*100,b=document.getElementById('reading-progress');if(b)b.style.width=Math.min(100,p)+'%'}window.addEventListener('scroll',u,{passive:true})})();`,
      }} />

      {/* ── Global styles injected for markdown content ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-h2{font-size:1.35rem;font-weight:800;color:#fff;margin:2.5rem 0 1rem;padding-bottom:0.6rem;border-bottom:1px solid rgba(124,58,237,0.3);scroll-margin-top:6rem}
        .blog-h3{font-size:1.1rem;font-weight:700;color:#e2d9f3;margin:2rem 0 0.75rem;scroll-margin-top:6rem}
        .blog-h4{font-size:0.95rem;font-weight:700;color:#c4b5fd;margin:1.5rem 0 0.5rem}
        .blog-p{color:rgba(255,255,255,0.72);line-height:1.85;font-size:0.97rem;margin:0.85rem 0}
        .blog-strong{font-weight:700;color:#fff}
        .blog-link{color:#a78bfa;font-weight:500;text-decoration:underline;text-underline-offset:3px;transition:color 0.2s}
        .blog-link:hover{color:#ddd6fe}
        .blog-code{background:rgba(124,58,237,0.18);color:#c4b5fd;border:1px solid rgba(124,58,237,0.3);border-radius:6px;padding:2px 8px;font-family:monospace;font-size:0.83rem}
        .blog-pre{background:rgba(10,10,30,0.8);border:1px solid rgba(124,58,237,0.25);border-radius:16px;padding:1.5rem;overflow-x:auto;margin:1.5rem 0}
        .blog-pre code{color:#c4b5fd;font-family:monospace;font-size:0.85rem}
        .blog-ul{list-style:none;margin:1rem 0;padding:0;space-y:0.5rem}
        .blog-ol{list-style:none;margin:1rem 0;padding:0}
        .blog-li-unordered{display:flex;gap:0.6rem;align-items:flex-start;color:rgba(255,255,255,0.72);font-size:0.93rem;line-height:1.7;margin:0.4rem 0}
        .blog-bullet{color:#7c3aed;font-size:0.65rem;margin-top:0.35rem;flex-shrink:0}
        .blog-li-ordered{display:flex;gap:0.75rem;align-items:flex-start;color:rgba(255,255,255,0.72);font-size:0.93rem;line-height:1.7;margin:0.6rem 0}
        .blog-num{flex-shrink:0;width:1.4rem;height:1.4rem;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#6366f1);color:#fff;font-size:0.7rem;font-weight:800;display:flex;align-items:center;justify-content:center;margin-top:0.15rem}
        .blog-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:14px;border:1px solid rgba(124,58,237,0.25)}
        .blog-table{width:100%;border-collapse:collapse;background:rgba(15,10,40,0.6)}
        .blog-th{padding:0.75rem 1rem;text-align:left;font-weight:700;font-size:0.8rem;color:#c4b5fd;background:rgba(124,58,237,0.2);border-bottom:1px solid rgba(124,58,237,0.2)}
        .blog-td{padding:0.65rem 1rem;font-size:0.82rem;color:rgba(255,255,255,0.65);border-bottom:1px solid rgba(255,255,255,0.05)}
        .blog-tr:hover .blog-td{background:rgba(124,58,237,0.08)}
        .toc-link-active{color:#a78bfa !important;font-weight:600}
      `}} />

      <main className="min-h-screen" style={{ background: "linear-gradient(135deg, #0f0a1e 0%, #0d1340 40%, #0a0f2e 100%)" }}>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0533 0%, #1e1060 50%, #0f1f5c 100%)" }}>

          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />
            <div className="absolute bottom-0 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/40 mb-8 flex-wrap">
              <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
              <span className="text-white/20">›</span>
              <Link href="/blog" className="hover:text-violet-400 transition-colors">Blog</Link>
              <span className="text-white/20">›</span>
              <Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="hover:text-violet-400 transition-colors">
                {post.category}
              </Link>
              <span className="text-white/20">›</span>
              <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="max-w-3xl">
              {/* Category + Featured badges */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${color} text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg`}>
                  <span>{icon}</span> {post.category}
                </span>
                {post.featured && (
                  <span className="inline-flex items-center gap-1 bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    ⭐ Featured
                  </span>
                )}
                <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-white/50 text-xs px-3 py-1.5 rounded-full">
                  ⏱ {post.readingTime} min read
                </span>
              </div>

              {/* H1 — single, keyword-rich, semantic */}
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                {post.title}
              </h1>

              {/* Summary — GEO signal, used by AI models for snippet */}
              <p className="article-summary text-lg text-white/65 leading-relaxed mb-7 max-w-2xl">
                {post.excerpt}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg" style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}>
                    D
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/90">{post.author.name}</div>
                    <div className="text-[10px] text-white/40">{post.author.role}</div>
                  </div>
                </div>

                <span className="w-px h-6 bg-white/10" />

                <time dateTime={post.publishDate} className="text-xs text-white/50">
                  {formatDate(post.publishDate)}
                </time>

                {post.updatedDate && (
                  <>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-white/50">Updated {formatDate(post.updatedDate)}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED IMAGE BANNER ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <div className={`h-52 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${color} flex items-center justify-center shadow-2xl relative`}
            style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.35)" }}>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.3), transparent 50%)"
            }} />
            <span className="text-[120px] opacity-20 select-none">{icon}</span>
            {/* Floating stat chips — visual flair */}
            <div className="absolute top-4 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-xs font-semibold">
              {post.readingTime} min read
            </div>
            <div className="absolute bottom-4 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-xs font-semibold">
              {post.tags.length} topics covered
            </div>
          </div>
        </div>

        {/* ── CONTENT + SIDEBAR ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── ARTICLE ── */}
            <article className="flex-1 min-w-0 article-content">

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag}
                    className="bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-violet-500/20 transition-colors cursor-default">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Prose Card */}
              <div className="rounded-2xl border border-white/8 p-6 lg:p-10 shadow-xl"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>

              {/* ── FAQ Section ── GEO featured snippet optimised */}
              {post.faq && post.faq.length > 0 && (
                <section className="mt-10 rounded-2xl border border-violet-500/20 p-6 lg:p-8 shadow-xl"
                  style={{ background: "rgba(124,58,237,0.06)", backdropFilter: "blur(12px)" }}>
                  <h2 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-sm">❓</span>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {post.faq.map(({ question, answer }) => (
                      <details key={question} className="group rounded-xl border border-white/8 overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none bg-white/5 hover:bg-violet-500/10 transition-colors">
                          <h3 className="font-semibold text-sm text-white pr-4 leading-snug">{question}</h3>
                          <span className="text-violet-400 group-open:rotate-180 transition-transform flex-shrink-0 text-xs">▼</span>
                        </summary>
                        <div className="p-4 bg-white/[0.02]">
                          <p className="text-sm text-white/65 leading-relaxed">{answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* ── Related Service CTA ── */}
              <div className="mt-10 rounded-2xl p-7 lg:p-9 relative overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(135deg, #4c1d95 0%, #3730a3 50%, #1e3a8a 100%)" }}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 80% 20%, rgba(167,139,250,0.4), transparent 50%)"
                }} />
                <div className="relative">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-300 mb-3">Related Service</div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{post.relatedService.name}</h3>
                  <p className="text-violet-100/80 text-sm leading-relaxed mb-6 max-w-lg">
                    {post.relatedService.description}
                  </p>
                  <Link href={post.relatedService.url}
                    className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-violet-50 transition-colors shadow-lg">
                    Explore Service →
                  </Link>
                </div>
              </div>

              {/* ── Services Grid ── */}
              <div className="mt-8 rounded-2xl border border-white/8 p-6 shadow-xl"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)" }}>
                <h3 className="font-bold text-white mb-5 text-sm">Explore All DEVNTOM Services</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Website Development",    url: "/services/website-development",  icon: "🌐", color: "from-blue-500 to-cyan-500" },
                    { name: "Digital Marketing",       url: "/services/digital-marketing",    icon: "📈", color: "from-green-500 to-emerald-600" },
                    { name: "Software Development",    url: "/services/software-development", icon: "⚙️", color: "from-indigo-500 to-blue-600" },
                    { name: "App Development",         url: "/services/app-development",      icon: "📱", color: "from-pink-500 to-rose-500" },
                    { name: "UI/UX Design",            url: "/services/uiux-design",          icon: "🎨", color: "from-orange-400 to-pink-500" },
                    { name: "AI Automation & Chatbots",url: "/services/ai-automation",        icon: "🤖", color: "from-violet-500 to-purple-600" },
                  ].map((s) => (
                    <Link key={s.name} href={s.url}
                      className="group flex items-center gap-2.5 p-3 rounded-xl border border-white/8 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200">
                      <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center text-sm flex-shrink-0 shadow`}>
                        {s.icon}
                      </span>
                      <span className="font-medium text-white/70 group-hover:text-white text-xs leading-tight transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Prev / Next ── */}
              {(prev || next) && (
                <nav aria-label="Article navigation" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prev && (
                    <Link href={`/blog/${prev.slug}`}
                      className="group p-5 rounded-xl border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 flex items-center gap-1">← Previous</div>
                      <div className="text-sm font-semibold text-white/80 group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">{prev.title}</div>
                    </Link>
                  )}
                  {next && (
                    <Link href={`/blog/${next.slug}`}
                      className="group p-5 rounded-xl border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 sm:text-right"
                      style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 flex items-center gap-1 sm:justify-end">Next →</div>
                      <div className="text-sm font-semibold text-white/80 group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">{next.title}</div>
                    </Link>
                  )}
                </nav>
              )}

            </article>

            {/* ── SIDEBAR ── */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-5">

              {/* ToC — sticky */}
              {headings.length > 0 && (
                <div className="lg:sticky lg:top-6 rounded-2xl border border-white/8 p-5 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-[10px]">📋</span>
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest">Table of Contents</h3>
                  </div>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-1">
                      {headings.map(({ level, text, id }) => (
                        <li key={id}>
                          <a href={`#${id}`}
                            className={`toc-link block text-[11px] leading-snug py-1 hover:text-violet-400 transition-colors rounded ${
                              level === 2
                                ? "text-white/70 font-medium"
                                : "text-white/45 pl-3 border-l border-violet-500/20"
                            }`}>
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Related Articles */}
              {related.length > 0 && (
                <div className="rounded-2xl border border-white/8 p-5 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {related.slice(0, 4).map((r) => <RelatedCard key={r.slug} post={r} />)}
                  </div>
                </div>
              )}

              {/* Newsletter */}
              <div className="rounded-2xl p-5 relative overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(135deg, #4c1d95 0%, #3730a3 100%)" }}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 70% 30%, rgba(167,139,250,0.5), transparent 60%)"
                }} />
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-lg mb-3">📬</div>
                  <h3 className="font-bold text-white text-sm mb-1">Weekly Insights</h3>
                  <p className="text-violet-200/70 text-[11px] leading-relaxed mb-4">
                    AI, software, and digital marketing insights — delivered weekly.
                  </p>
                  <form action="/api/newsletter" method="POST" className="space-y-2">
                    <input type="email" name="email" placeholder="Your email address" required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white placeholder-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-400/50 transition" />
                    <button type="submit"
                      className="w-full bg-white text-violet-700 font-bold px-3 py-2.5 rounded-xl text-xs hover:bg-violet-50 transition-colors shadow-lg">
                      Subscribe Free →
                    </button>
                  </form>
                </div>
              </div>

              {/* Consult CTA */}
              <div className="rounded-2xl border border-violet-500/20 p-5 shadow-xl"
                style={{ background: "rgba(124,58,237,0.08)", backdropFilter: "blur(12px)" }}>
                <h3 className="text-sm font-bold text-white mb-2">Ready to get started?</h3>
                <p className="text-[11px] text-white/50 leading-relaxed mb-4">
                  Talk to a DEVNTOM consultant about {post.relatedService.name.toLowerCase()} for your business.
                </p>
                <Link href="/contact"
                  className="block w-full text-center text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-lg hover:shadow-violet-500/30 hover:scale-[1.02] duration-200"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}>
                  Get a Free Consultation
                </Link>
              </div>

            </aside>
          </div>
        </div>

        {/* ── CONTINUE READING ── */}
        {related.length > 0 && (
          <section className="border-t border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-white">Continue Reading</h2>
                <Link href="/blog" className="text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors">
                  View all articles →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.slice(0, 4).map((r) => {
                  const m = getCatMeta(r.category);
                  return (
                    <article key={r.slug}
                      className="group rounded-2xl border border-white/8 p-5 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/30"
                      style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-lg mb-4 shadow-lg`}>
                        {m.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 block mb-2">{r.category}</span>
                      <h3 className="text-sm font-bold text-white mb-2 group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">
                        <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                      </h3>
                      <p className="text-xs text-white/45 leading-relaxed mb-4 line-clamp-2">{r.excerpt}</p>
                      <Link href={`/blog/${r.slug}`}
                        className="text-[11px] font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors">
                        Read article <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── FINAL CTA ── */}
        <section className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0533 0%, #1e1060 50%, #0f1f5c 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-bold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              🚀 Free Consultation
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-5 leading-tight">
              Need help putting this<br />into practice?
            </h2>
            <p className="text-white/55 mb-10 max-w-xl mx-auto leading-relaxed text-[15px]">
              Our senior consultants specialise in {post.relatedService.name.toLowerCase()}. Book a free 30-minute strategy call — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-2xl hover:shadow-violet-500/40 hover:scale-105 duration-200"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}>
                Book a Free Consultation
              </Link>
              <Link href={post.relatedService.url}
                className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all border border-white/15 backdrop-blur-sm">
                Explore {post.relatedService.name} →
              </Link>
            </div>
            {/* Social proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-white/35">
              <span>⭐⭐⭐⭐⭐ Trusted by 500+ businesses</span>
              <span className="hidden sm:block w-px h-4 bg-white/15" />
              <span>🔒 No commitment required</span>
              <span className="hidden sm:block w-px h-4 bg-white/15" />
              <span>⚡ Response within 24 hours</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}