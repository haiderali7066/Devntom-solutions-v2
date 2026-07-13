import { Metadata } from "next";
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
  Cpu 
} from "lucide-react";

// ==========================================
// 1. SEO & METADATA (Server-Side)
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

const projects = [
  { slug: "nexora-erp", name: "Nexora ERP", client: "Nexora Corp", cat: "Custom Software", servicePath: "/services/software-development", tags: ["ERP", "Node.js", "PostgreSQL"], result: "40% reduction in operational overhead within 90 days", challenge: "6 disconnected tools replaced by one unified platform", color: "bg-violet-600", featured: true },
  { slug: "shopsprint", name: "ShopSprint", client: "ShopSprint Ltd", cat: "Web Development", servicePath: "/services/website-development", tags: ["Next.js", "Stripe", "Shopify API"], result: "65% revenue increase in the first quarter post-launch", challenge: "Complete e-commerce rebuild with custom checkout system", color: "bg-indigo-600", featured: true },
  { slug: "clarise-app", name: "Clarise App", client: "Clarise Health", cat: "App Development", servicePath: "/services/app-development", tags: ["React Native", "Firebase", "iOS"], result: "10,000+ downloads in 30 days — App Store featured", challenge: "Healthcare app with telemedicine and booking features", color: "bg-emerald-600", featured: true },
  { slug: "growthbase-seo", name: "GrowthBase SEO", client: "GrowthBase Ltd", cat: "Digital Marketing", servicePath: "/services/digital-marketing", tags: ["SEO", "Content", "Google Ads"], result: "Organic traffic tripled — 18k to 54k monthly visitors", challenge: "Brand with zero domain authority and no content strategy", color: "bg-blue-600", featured: false },
  { slug: "retailpro-pos", name: "RetailPro POS", client: "RetailPro Group", cat: "Custom Software", servicePath: "/services/software-development", tags: ["POS", "Inventory", "Python"], result: "Real-time inventory sync across 12 stores — zero manual work", challenge: "Paper-based POS system failing at scale across locations", color: "bg-orange-600", featured: false },
  { slug: "delivernow", name: "DeliverNow", client: "DeliverNow Ltd", cat: "App Development", servicePath: "/services/app-development", tags: ["React Native", "GPS", "Stripe"], result: "5,000+ daily active users — 4.8★ App Store rating", challenge: "Real-time delivery tracking app with driver interfaces", color: "bg-pink-600", featured: false },
  { slug: "supportbot-ai", name: "SupportBot AI", client: "Clarise Health", cat: "AI Automation", servicePath: "/services/ai-automation", tags: ["GPT-4o", "LangChain", "n8n"], result: "70% of support tickets automated — 35% cost reduction", challenge: "Support team overwhelmed with repetitive queries 24/7", color: "bg-violet-700", featured: false },
  { slug: "nexora-web", name: "Nexora Corporate", client: "Nexora Corp", cat: "Web Development", servicePath: "/services/website-development", tags: ["Next.js", "Framer Motion", "SEO"], result: "3× increase in inbound leads — 92 Lighthouse score", challenge: "Outdated website with poor Core Web Vitals", color: "bg-slate-700", featured: false },
  { slug: "healthbridge-portal", name: "HealthBridge Portal", client: "HealthBridge", cat: "Web Apps & SaaS", servicePath: "/services/software-development", tags: ["React", "Node.js", "Auth"], result: "40% drop in bounce rate, patient bookings up 120%", challenge: "Manual appointment booking causing high no-show rates", color: "bg-teal-600", featured: false },
];

const faqs = [
  { q: "What technologies do you use for web and app development?", a: "We specialize in modern, scalable stacks. For web development, we heavily utilize Next.js, React, Node.js, and Tailwind CSS. For mobile app development, we rely on React Native to deliver high-performance cross-platform applications for iOS and Android." },
  { q: "Do you offer post-launch support and marketing?", a: "Yes. Launching is just the beginning. We provide ongoing software maintenance, UI/UX design updates, and comprehensive digital marketing services including technical SEO, Google Ads, and conversion rate optimization to guarantee ROI." },
  { q: "How long does a typical custom software project take?", a: "Depending on complexity, a standard MVP (Minimum Viable Product) for web apps or custom enterprise software takes between 8 to 16 weeks. We use agile methodologies to ensure rapid, iterative delivery." },
];

// ==========================================
// 3. UI COMPONENTS
// ==========================================
function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>
        {children}
      </span>
    </div>
  );
}

// ==========================================
// 4. MAIN SERVER PAGE
// ==========================================
export default function PortfolioPage({ searchParams }: { searchParams: { category?: string } }) {
  const activeCat = searchParams.category || "All";

  // Filter Logic
  const filtered = activeCat === "All" ? projects : projects.filter((p) => p.cat === activeCat || (activeCat === "Web Development" && p.cat === "Web Apps & SaaS"));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  // Structured Data Gen
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
        { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://devntomsolutions.com/portfolio" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    }
  ];

  return (
    <main className="overflow-x-hidden bg-[#050505] text-gray-100 min-h-screen font-sans selection:bg-violet-500/30">
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Pure CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
          .animate-fade-in { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
          .delay-100 { animation-delay: 100ms; } .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; }
          .stagger-item { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        `
      }} />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#050505]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/15 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="animate-fade-in">
            <Pill dark>Proven Digital Transformation</Pill>
          </div>

          <h1 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.95] animate-fade-in delay-100">
            Real Projects. <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Measurable Results.
            </span>
          </h1>

          <p className="mt-8 text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            We don't just write code; we solve complex business problems. Browse our portfolio to see how we leverage <Link href="/services/website-development" className="text-gray-200 hover:text-violet-400 border-b border-violet-500/30 transition-colors">enterprise web development</Link>, <Link href="/services/ai-automation" className="text-gray-200 hover:text-violet-400 border-b border-violet-500/30 transition-colors">AI automation</Link>, and <Link href="/services/digital-marketing" className="text-gray-200 hover:text-violet-400 border-b border-violet-500/30 transition-colors">data-driven marketing</Link> to scale brands globally.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl animate-fade-in delay-300">
            {resultsData.map((r, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl sm:text-5xl font-black text-violet-400 tracking-tight">{r.metric}</p>
                <p className="text-gray-400 text-sm mt-2 font-medium">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE EXPERTISE INTERNAL LINKS (SEO Goldmine) */}
      <section className="border-y border-white/5 bg-[#0a0a0f] py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between gap-6 min-w-max">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-4">Core Capabilities:</span>
            {servicesLinks.map((service, idx) => (
              <Link 
                key={idx} 
                href={service.path}
                className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-violet-400 transition-colors"
              >
                <span className="p-1.5 rounded-md bg-white/5 group-hover:bg-violet-500/20 transition-colors">{service.icon}</span>
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTER BAR (SSR Based via Links) */}
      <section className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/10 py-5 px-6">
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
                  className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-violet-600 text-white border-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
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

      {/* 4. FEATURED PROJECTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {featured.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse" />
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-violet-400">Featured Case Studies</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featured.map((p, i) => (
                <article
                  key={p.slug}
                  style={{ animationDelay: `${i * 150}ms` }}
                  className="stagger-item group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0c0c12] hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-500 shadow-2xl flex flex-col justify-between"
                >
                  {/* Visual Image/Block Container */}
                  <div className={`relative h-64 w-full ${p.color} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                      <span className="text-9xl font-black text-white/10 select-none drop-shadow-2xl">{p.name[0]}</span>
                    </div>

                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-gray-200 tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Link href={p.servicePath} className="text-[11px] font-bold text-violet-400 uppercase tracking-widest hover:text-violet-300 transition-colors">
                          {p.cat}
                        </Link>
                        <span className="text-xs text-gray-500 font-medium">{p.client}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                        <Link href={`/portfolio/${p.slug}`} className="before:absolute before:inset-0">{p.name}</Link>
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        <strong className="text-gray-200 font-medium">The Challenge:</strong> {p.challenge}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/5 flex items-start gap-3 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-emerald-300/90 leading-snug">{p.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 5. ALL PROJECTS GRID */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">More Client Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((p, i) => (
                <article
                  key={p.slug}
                  style={{ animationDelay: `${i * 75}ms` }}
                  className="stagger-item group bg-[#0c0c12] border border-white/10 rounded-[1.5rem] overflow-hidden hover:border-violet-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`h-40 ${p.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                        <span className="text-7xl font-black text-white/10 select-none">{p.name[0]}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">
                        <Link href={p.servicePath} className="hover:text-violet-400 transition-colors z-10 relative">{p.cat}</Link>
                        <span>{p.client}</span>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2 group-hover:text-violet-400 transition-colors">
                        <Link href={`/portfolio/${p.slug}`} className="before:absolute before:inset-0">{p.name}</Link>
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {p.result}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-violet-400 text-sm font-bold group-hover:text-violet-300 transition-colors">
                      Read full case study 
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 6. CONTENT-RICH SEO SECTION (Methodology / Why Us) */}
      <section className="py-24 border-y border-white/5 bg-[#08080c] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">How We Ensure <span className="text-violet-400">Digital Success</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            A beautiful portfolio is only half the story. At DEVNTOM Solutions, our approach integrates <Link href="/services/uiux-design" className="text-violet-300 hover:text-white underline decoration-violet-500/30 underline-offset-4">user-centric UI/UX design</Link> with scalable <Link href="/services/software-development" className="text-violet-300 hover:text-white underline decoration-violet-500/30 underline-offset-4">custom software engineering</Link>. We don't just launch products; we partner with you to fuel continuous growth through <Link href="/services/digital-marketing" className="text-violet-300 hover:text-white underline decoration-violet-500/30 underline-offset-4">data-driven digital marketing</Link>. From native <Link href="/services/app-development" className="text-violet-300 hover:text-white underline decoration-violet-500/30 underline-offset-4">iOS and Android apps</Link> to integrating advanced <Link href="/services/ai-automation" className="text-violet-300 hover:text-white underline decoration-violet-500/30 underline-offset-4">AI automation</Link> workflows, our code is written to scale your revenue.
          </p>
        </div>
      </section>

      {/* 7. FAQ SECTION FOR SEO RICH SNIPPETS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Common questions about our development process and capabilities.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0c0c12] border border-white/5 p-6 rounded-2xl hover:border-violet-500/30 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-violet-500 mt-0.5">Q.</span> {faq.q}
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto mb-10">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-violet-900/40 via-[#0d0d14] to-[#0c0c12] border border-violet-500/20 p-10 md:p-16 overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-5 text-center lg:text-left max-w-2xl">
              <Pill dark>Let's Build Something Great</Pill>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to turn your vision into our next success story?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Whether you need a full-stack web application, a multi-platform mobile app, or to automate your entire business with AI — we have the team to deliver it.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-wide transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-[1.02]"
              >
                Discuss Your Project 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}