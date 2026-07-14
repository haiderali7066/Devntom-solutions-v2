import { Metadata, Viewport } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Smartphone,
  BrainCircuit,
  TrendingUp,
  PenTool,
  Cpu,
  Sparkles,
} from "lucide-react";

// ==========================================
// 1. SEO & METADATA (Server-Side, Static)
// ==========================================
export const metadata: Metadata = {
  title: "Portfolio & Case Studies | DEVNTOM Solutions",
  description:
    "Explore DEVNTOM Solutions' portfolio of enterprise web applications, mobile apps, AI automation, custom software, and digital marketing projects. Real results for real businesses.",
  keywords: [
    "DEVNTOM portfolio",
    "web development case studies",
    "software projects Pakistan",
    "app development portfolio",
    "digital marketing results",
    "AI automation case studies",
    "SaaS development portfolio",
    "UI/UX design projects",
    "Next.js development portfolio",
    "React Native app case studies",
    "custom ERP development case study",
    "web development agency Pakistan",
  ],
  authors: [{ name: "DEVNTOM Solutions", url: "https://devntomsolutions.com" }],
  creator: "DEVNTOM Solutions",
  metadataBase: new URL("https://devntomsolutions.com"),
  alternates: {
    canonical: "https://devntomsolutions.com/portfolio",
  },
  openGraph: {
    title: "DEVNTOM Portfolio | Proven Digital Transformation",
    description:
      "From e-commerce stores to enterprise software and AI automation systems — explore our work and measurable client results.",
    url: "https://devntomsolutions.com/portfolio",
    siteName: "DEVNTOM Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions Project Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVNTOM Portfolio | Proven Digital Transformation",
    description:
      "Real projects, measurable results — web, software, app, and AI automation case studies from DEVNTOM Solutions.",
    images: ["/og-portfolio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Matches the dark navy hero background in mobile browser chrome
export const viewport: Viewport = {
  themeColor: "#05070F",
};

// ==========================================
// 2. DATA SOURCES
// ==========================================
const categories = [
  "All",
  "Web Development",
  "Web Apps & SaaS",
  "E-Commerce",
  "App Development",
  "Custom Software",
  "AI Automation",
  "Digital Marketing",
];

const resultsData = [
  { metric: "100+", label: "Projects Delivered" },
  { metric: "80+", label: "Happy Clients" },
  { metric: "15+", label: "Countries Served" },
  { metric: "98%", label: "Client Retention" },
];

const servicesLinks = [
  { name: "Website Development", path: "/services/website-development", icon: <Code2 size={16} /> },
  { name: "Software Development", path: "/services/software-development", icon: <Cpu size={16} /> },
  { name: "App Development", path: "/services/app-development", icon: <Smartphone size={16} /> },
  { name: "AI Automation", path: "/services/ai-automation", icon: <BrainCircuit size={16} /> },
  { name: "UI/UX Design", path: "/services/uiux-design", icon: <PenTool size={16} /> },
  { name: "Digital Marketing", path: "/services/digital-marketing", icon: <TrendingUp size={16} /> },
];

// Each project now carries a two-stop gradient (cobalt/navy family)
// instead of one flat color — richer, still on-brand, still distinct per card.
const projects = [
  { slug: "nexora-erp", name: "Nexora ERP", client: "Nexora Corp", cat: "Custom Software", servicePath: "/services/software-development", tags: ["ERP", "Node.js", "PostgreSQL"], result: "40% reduction in operational overhead within 90 days", challenge: "6 disconnected tools replaced by one unified platform", gradient: "from-blue-600 to-indigo-800", featured: true },
  { slug: "shopsprint", name: "ShopSprint", client: "ShopSprint Ltd", cat: "Web Development", servicePath: "/services/website-development", tags: ["Next.js", "Stripe", "Shopify API"], result: "65% revenue increase in the first quarter post-launch", challenge: "Complete e-commerce rebuild with custom checkout system", gradient: "from-cyan-500 to-blue-800", featured: true },
  { slug: "clarise-app", name: "Clarise App", client: "Clarise Health", cat: "App Development", servicePath: "/services/app-development", tags: ["React Native", "Firebase", "iOS"], result: "10,000+ downloads in 30 days — App Store featured", challenge: "Healthcare app with telemedicine and booking features", gradient: "from-sky-500 to-blue-700", featured: true },
  { slug: "growthbase-seo", name: "GrowthBase SEO", client: "GrowthBase Ltd", cat: "Digital Marketing", servicePath: "/services/digital-marketing", tags: ["SEO", "Content", "Google Ads"], result: "Organic traffic tripled — 18k to 54k monthly visitors", challenge: "Brand with zero domain authority and no content strategy", gradient: "from-emerald-500 to-teal-700", featured: false },
  { slug: "retailpro-pos", name: "RetailPro POS", client: "RetailPro Group", cat: "Custom Software", servicePath: "/services/software-development", tags: ["POS", "Inventory", "Python"], result: "Real-time inventory sync across 12 stores — zero manual work", challenge: "Paper-based POS system failing at scale across locations", gradient: "from-indigo-600 to-blue-900", featured: false },
  { slug: "delivernow", name: "DeliverNow", client: "DeliverNow Ltd", cat: "App Development", servicePath: "/services/app-development", tags: ["React Native", "GPS", "Stripe"], result: "5,000+ daily active users — 4.8★ App Store rating", challenge: "Real-time delivery tracking app with driver interfaces", gradient: "from-rose-500 to-red-700", featured: false },
  { slug: "supportbot-ai", name: "SupportBot AI", client: "Clarise Health", cat: "AI Automation", servicePath: "/services/ai-automation", tags: ["GPT-4o", "LangChain", "n8n"], result: "70% of support tickets automated — 35% cost reduction", challenge: "Support team overwhelmed with repetitive queries 24/7", gradient: "from-blue-700 to-slate-900", featured: false },
  { slug: "nexora-web", name: "Nexora Corporate", client: "Nexora Corp", cat: "Web Development", servicePath: "/services/website-development", tags: ["Next.js", "Tailwind CSS", "SEO"], result: "3× increase in inbound leads — 92 Lighthouse score", challenge: "Outdated website with poor Core Web Vitals", gradient: "from-slate-600 to-slate-900", featured: false },
  { slug: "healthbridge-portal", name: "HealthBridge Portal", client: "HealthBridge", cat: "Web Apps & SaaS", servicePath: "/services/software-development", tags: ["React", "Node.js", "Auth"], result: "40% drop in bounce rate, patient bookings up 120%", challenge: "Manual appointment booking causing high no-show rates", gradient: "from-cyan-600 to-blue-800", featured: false },
];

const faqs = [
  { q: "What technologies do you use for web and app development?", a: "We specialize in modern, scalable stacks. For web development, we heavily utilize Next.js, React, Node.js, and Tailwind CSS. For mobile app development, we rely on React Native to deliver high-performance cross-platform applications for iOS and Android." },
  { q: "Do you offer post-launch support and marketing?", a: "Yes. Launching is just the beginning. We provide ongoing software maintenance, UI/UX design updates, and comprehensive digital marketing services including technical SEO, Google Ads, and conversion rate optimization to guarantee ROI." },
  { q: "How long does a typical custom software project take?", a: "Depending on complexity, a standard MVP (Minimum Viable Product) for web apps or custom enterprise software takes between 8 to 16 weeks. We use agile methodologies to ensure rapid, iterative delivery." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes. We've delivered projects for clients in over 15 countries. Our team works across time zones with async updates, weekly calls, and shared project boards so distance never slows a project down." },
  { q: "Can I see more case studies than what's shown here?", a: "This page highlights a representative sample of our work. Get in touch and we'll walk you through additional case studies most relevant to your industry and project type." },
];

// ==========================================
// 3. SHARED UI HELPERS
// ==========================================

// Pure CSS keyframes — no framer-motion, no client JS. Runs before hydration
// and is fully disabled for users who prefer reduced motion.
function AnimationStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
        @keyframes floatSlow { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(24px, -18px) scale(1.06); } }
        @keyframes floatSlowReverse { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-20px, 16px) scale(1.04); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

        .animate-fade-in { animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .stagger-item { animation: fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; } .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; } .delay-400 { animation-delay: 400ms; }
        .blob-float-a { animation: floatSlow 14s ease-in-out infinite; }
        .blob-float-b { animation: floatSlowReverse 17s ease-in-out infinite; }
        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 6s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in, .animate-scale-in, .stagger-item { animation: none; opacity: 1; }
          .blob-float-a, .blob-float-b, .shimmer-text { animation: none; }
        }
      `,
      }}
    />
  );
}

function Pill({
  children,
  tone = "dark",
  accent = "blue",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  accent?: "blue" | "cyan";
}) {
  const dot = accent === "cyan" ? "bg-cyan-400" : "bg-blue-400";
  if (tone === "light") {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white border-slate-200 shadow-sm">
        <div className={`w-1.5 h-1.5 rounded-full ${accent === "cyan" ? "bg-cyan-600" : "bg-blue-600"}`} />
        <span className="text-xs font-bold tracking-wide text-slate-600">{children}</span>
      </div>
    );
  }
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${
        accent === "cyan" ? "border-cyan-400/30 bg-cyan-400/10" : "border-blue-500/30 bg-blue-500/10"
      }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${dot}`} />
      <span className={`text-xs font-bold tracking-wide ${accent === "cyan" ? "text-cyan-300" : "text-blue-300"}`}>{children}</span>
    </div>
  );
}

// A thin gradient seam used at a few section transitions as a recurring
// signature motif that ties the dark and light sections together.
function SeamDivider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />;
}

// ==========================================
// 4. MAIN SERVER PAGE
// ==========================================
export default function PortfolioPage({ searchParams }: { searchParams: { category?: string } }) {
  const activeCat = searchParams.category || "All";

  const filtered = activeCat === "All" ? projects : projects.filter((p) => p.cat === activeCat || (activeCat === "Web Development" && p.cat === "Web Apps & SaaS"));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "DEVNTOM Solutions Case Studies & Portfolio",
      description: "Showcase of web, software, and AI automation projects.",
      url: "https://devntomsolutions.com/portfolio",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((p, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: p.name,
            description: p.result,
            url: `https://devntomsolutions.com/portfolio/${p.slug}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://devntomsolutions.com" },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://devntomsolutions.com/portfolio" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[#05070F] text-gray-100 min-h-screen font-sans selection:bg-blue-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimationStyles />

      {/* 1. HERO — dark, layered gradient + slow-floating aurora blobs (single H1) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-[#070b1a] via-[#05070F] to-[#05070F]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#05070F]" />
          <div className="blob-float-a absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="blob-float-b absolute top-1/3 right-1/4 w-[500px] h-[320px] bg-cyan-500/10 blur-[110px] rounded-full mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <div className="animate-fade-in">
            <Pill accent="cyan">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={12} aria-hidden="true" /> Proven Digital Transformation
              </span>
            </Pill>
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] animate-fade-in delay-100">
            Real Projects. <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text text-transparent shimmer-text">
              Measurable Results.
            </span>
          </h1>

          <p className="mt-8 text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            We don&apos;t just write code; we solve complex business problems. Browse our
            portfolio to see how we leverage{" "}
            <Link href="/services/website-development" className="text-gray-200 hover:text-blue-400 border-b border-blue-500/30 transition-colors">
              enterprise web development
            </Link>
            ,{" "}
            <Link href="/services/ai-automation" className="text-gray-200 hover:text-blue-400 border-b border-blue-500/30 transition-colors">
              AI automation
            </Link>
            , and{" "}
            <Link href="/services/digital-marketing" className="text-gray-200 hover:text-blue-400 border-b border-blue-500/30 transition-colors">
              data-driven marketing
            </Link>{" "}
            to scale brands globally.
          </p>

          <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-4xl mx-auto p-6 sm:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl animate-scale-in delay-300">
            {resultsData.map((r, i) => (
              <div key={i} className="text-center">
                <p className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${i % 2 === 0 ? "text-blue-400" : "text-sky-300"}`}>
                  {r.metric}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 font-medium">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE EXPERTISE INTERNAL LINKS */}
      <section className="border-y border-white/5 bg-[#080d1f] py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 min-w-max">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2 sm:mr-4">Core Capabilities:</span>
            {servicesLinks.map((service, idx) => (
              <Link
                key={idx}
                href={service.path}
                className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span className="p-1.5 rounded-md bg-white/5 group-hover:bg-blue-500/20 transition-colors">{service.icon}</span>
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTER BAR */}
      <section className="sticky top-0 z-40 bg-[#05070F]/90 backdrop-blur-2xl border-b border-white/10 py-5 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCat === cat;
              const href = cat === "All" ? "/portfolio" : `/portfolio?category=${encodeURIComponent(cat)}`;
              return (
                <Link
                  key={cat}
                  href={href}
                  scroll={false}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.35)]"
                      : "bg-white/[0.03] text-gray-400 border-white/5 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SeamDivider />

      {/* 4. FEATURED PROJECTS — light section: the page's big black/white contrast beat */}
      <section className="py-20 sm:py-24 px-5 sm:px-6 bg-gradient-to-b from-[#F6F8FC] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Featured Case Studies</h2>
          </div>

          {featured.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {featured.map((p, i) => (
                <article
                  key={p.slug}
                  style={{ animationDelay: `${i * 150}ms` }}
                  className="stagger-item group relative rounded-[2rem] overflow-hidden border border-slate-200 bg-white hover:border-blue-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 shadow-lg flex flex-col justify-between"
                >
                  <div className={`relative h-56 sm:h-64 w-full bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                      <span className="text-8xl sm:text-9xl font-black text-white/15 select-none drop-shadow-2xl">{p.name[0]}</span>
                    </div>

                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-3 py-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white text-[10px] font-black uppercase tracking-widest text-[#05070F] shadow-lg">
                      Featured
                    </div>

                    <div className="absolute flex items-center justify-center w-9 h-9 transition-all opacity-0 bottom-5 right-5 rounded-full bg-white/90 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                      <ArrowUpRight size={16} className="text-[#05070F]" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3 gap-2">
                        <Link href={p.servicePath} className="text-[11px] font-bold text-blue-700 uppercase tracking-widest hover:text-blue-600 transition-colors">
                          {p.cat}
                        </Link>
                        <span className="text-xs text-slate-400 font-medium">{p.client}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B1226] mb-4 group-hover:text-blue-700 transition-colors">
                        <Link href={`/portfolio/${p.slug}`} className="before:absolute before:inset-0">
                          {p.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        <strong className="text-slate-700 font-medium">The Challenge:</strong> {p.challenge}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-slate-100 flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm font-semibold text-blue-800 leading-snug">{p.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm">No featured projects in this category yet — see all matching projects below.</p>
          )}
        </div>
      </section>

      {/* 5. MORE PROJECTS — back to dark for rhythm */}
      {rest.length > 0 && (
        <section className="py-20 sm:py-24 px-5 sm:px-6 bg-gradient-to-b from-[#05070F] to-[#080d1f]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">More Client Success Stories</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {rest.map((p, i) => (
                <article
                  key={p.slug}
                  style={{ animationDelay: `${i * 75}ms` }}
                  className="stagger-item group bg-[#0b1230] border border-white/10 rounded-[1.5rem] overflow-hidden hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`h-36 sm:h-40 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                        <span className="text-6xl sm:text-7xl font-black text-white/15 select-none">{p.name[0]}</span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 gap-2">
                        <Link href={p.servicePath} className="hover:text-blue-400 transition-colors z-10 relative">
                          {p.cat}
                        </Link>
                        <span>{p.client}</span>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                        <Link href={`/portfolio/${p.slug}`} className="before:absolute before:inset-0">
                          {p.name}
                        </Link>
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{p.result}</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0 mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-bold group-hover:text-blue-300 transition-colors">
                      Read full case study
                      <ArrowRight size={14} aria-hidden="true" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. METHODOLOGY / WHY US — light editorial statement section */}
      <section className="py-20 sm:py-24 px-5 sm:px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <Pill tone="light" accent="cyan">Our Approach</Pill>
          <h2 className="mt-6 text-3xl md:text-5xl font-black text-[#0B1226] mb-6 tracking-tight">
            How We Ensure <span className="text-blue-600">Digital Success</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            A beautiful portfolio is only half the story. At DEVNTOM Solutions, our approach
            integrates{" "}
            <Link href="/services/uiux-design" className="text-blue-700 hover:text-[#0B1226] underline decoration-blue-300 underline-offset-4">
              user-centric UI/UX design
            </Link>{" "}
            with scalable{" "}
            <Link href="/services/software-development" className="text-blue-700 hover:text-[#0B1226] underline decoration-blue-300 underline-offset-4">
              custom software engineering
            </Link>
            . We don&apos;t just launch products; we partner with you to fuel continuous growth
            through{" "}
            <Link href="/services/digital-marketing" className="text-blue-700 hover:text-[#0B1226] underline decoration-blue-300 underline-offset-4">
              data-driven digital marketing
            </Link>
            . From native{" "}
            <Link href="/services/app-development" className="text-blue-700 hover:text-[#0B1226] underline decoration-blue-300 underline-offset-4">
              iOS and Android apps
            </Link>{" "}
            to integrating advanced{" "}
            <Link href="/services/ai-automation" className="text-blue-700 hover:text-[#0B1226] underline decoration-blue-300 underline-offset-4">
              AI automation
            </Link>{" "}
            workflows, our code is written to scale your revenue.
          </p>
        </div>
      </section>

      {/* 7. FAQ — dark, closes out the case-study narrative before the CTA */}
      <section className="py-20 sm:py-24 px-5 sm:px-6 bg-[#05070F]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <Pill accent="blue">FAQ</Pill>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Common questions about our development process and capabilities.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#0b1230] border border-white/5 p-5 sm:p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-7 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION — dark, richest gradient + slow-floating blobs */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 max-w-7xl mx-auto mb-10">
        <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-blue-900/50 via-[#070c1c] to-[#0b1230] border border-blue-500/20 p-8 sm:p-10 md:p-16 overflow-hidden shadow-2xl">
          <div className="blob-float-a pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/30 blur-[120px]" />
          <div className="blob-float-b pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-500/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
            <div className="space-y-5 text-center lg:text-left max-w-2xl">
              <Pill accent="cyan">Let&apos;s Build Something Great</Pill>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to turn your vision into our next success story?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Whether you need a full-stack web application, a multi-platform mobile app, or
                to automate your entire business with AI — we have the team to deliver it.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-[#05070F] font-black text-sm uppercase tracking-wide transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.45)] hover:scale-[1.02]"
              >
                Discuss Your Project
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}