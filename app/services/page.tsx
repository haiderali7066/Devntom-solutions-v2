import { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Layout,
  Megaphone,
  ShoppingBag,
  Server,
  Smartphone,
  Bot,
  Palette,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu,
  Mail,
  Phone,
  MessageCircle,
  Globe
} from "lucide-react";

// ─── 1. SEO, AEO & GEO METADATA ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Digital & Software Development Services | DEVNTOM Solutions",
  description:
    "End-to-end digital services: Web Development, Mobile Apps, Custom Enterprise Software (CRM/ERP), AI Automation, UI/UX Design, and Digital Marketing. Serving PK, SA, and global markets.",
  keywords: [
    "software development services",
    "web development agency Pakistan",
    "mobile app development Saudi Arabia",
    "custom software development US",
    "AI automation services",
    "UI UX design agency",
    "SaaS app development",
    "digital marketing agency"
  ].join(", "),
  alternates: {
    canonical: "https://devntomsolutions.com/services",
  },
  openGraph: {
    title: "Engineering Enterprise Digital Solutions | DEVNTOM Solutions",
    description: "Architecting high-performance websites, mobile apps, custom software, and AI pipelines built to scale your business.",
    url: "https://devntomsolutions.com/services",
    siteName: "DEVNTOM Solutions",
    images: [
      {
        url: "https://devntomsolutions.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions Digital Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Digital Services | DEVNTOM Solutions",
    description: "Custom Web, Mobile, AI, and Software Engineering tailored for enterprise growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "PK, SA, US",
    "geo.placename": "Lahore, Riyadh",
  },
};

// ─── 2. DATA (8 Core Practice Areas) ─────────────────────────────────────────

const services = [
  {
    id: "web-development",
    slug: "/services/website-development",
    icon: Code2,
    title: "Web Development",
    subtitle: "High-Performance Digital Platforms",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    desc: "Stunning, responsive, and blazingly fast websites built with modern frameworks. We deliver secure, SEO-optimized, and conversion-ready web presences.",
    deliverables: [
      "Custom Next.js & React Architectures",
      "Headless CMS & Dynamic Dashboards",
      "Core Web Vitals & Speed Optimization",
      "Enterprise Security & SSL Infrastructure"
    ],
    badge: "Core Service"
  },
  {
    id: "software-development",
    slug: "/services/software-development",
    icon: Server,
    title: "Custom Software Solutions",
    subtitle: "CRM, ERP & Business Systems",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    desc: "Bespoke internal tools, CRMs, ERPs, and management platforms engineered to replace manual spreadsheets and streamline complex business operations.",
    deliverables: [
      "Custom Enterprise ERP & CRM Build",
      "Inventory & POS System Integration",
      "HRMS & Automated Payroll Portals",
      "Database Optimization & Cloud Hosting"
    ],
    badge: "Enterprise"
  },
  {
    id: "mobile-app-development",
    slug: "/services/mobile-app-development",
    icon: Smartphone,
    title: "App Development",
    subtitle: "iOS, Android & Cross-Platform",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    desc: "Native and cross-platform mobile apps built with React Native and Flutter. Smooth performance, offline capability, and intuitive user experiences.",
    deliverables: [
      "iOS & Android Mobile Applications",
      "Cross-Platform Flutter & React Native",
      "Push Notifications & Real-Time Sync",
      "App Store & Google Play Publishing"
    ],
    badge: "Mobile"
  },
  {
    id: "ai-automation",
    slug: "/services/ai-automation-chatbots",
    icon: Bot,
    title: "AI Automation & Chatbots",
    subtitle: "Intelligent Workflow Pipelines",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    desc: "Empower your business with custom LLM integrations, automated customer support bots, data-scraping pipelines, and predictive workflow automation.",
    deliverables: [
      "WhatsApp & Web AI Chatbots",
      "Custom LLM & OpenAI Integrations",
      "Automated Document Processing",
      "Business Process Workflow Automation"
    ],
    badge: "Next-Gen AI"
  },
  {
    id: "ui-ux-design",
    slug: "/services/ui-ux-design",
    icon: Palette,
    title: "Branding & UI/UX Design",
    subtitle: "Product Design & Brand Identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    desc: "Crafting intuitive digital user experiences and memorable corporate identities. From user journey mapping to high-fidelity Figma design systems.",
    deliverables: [
      "User Research & Wireframing",
      "Interactive Figma Prototypes",
      "Design Systems & Component Libraries",
      "Brand Identity & Visual Guidelines"
    ],
    badge: "Creative"
  },
  {
    id: "web-apps-saas",
    slug: "/services/software-development",
    icon: Layout,
    title: "Web Apps & SaaS Solutions",
    subtitle: "Cloud-Native Platforms",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    desc: "Scalable software-as-a-service products built for multi-tenant architectures, subscription handling, complex user permissions, and global uptime.",
    deliverables: [
      "Multi-Tenant Cloud Architectures",
      "Stripe & Payment Gateway Integrations",
      "User Tier & License Management",
      "Microservices & REST/GraphQL APIs"
    ],
    badge: "Cloud SaaS"
  },
  {
    id: "ecommerce-solutions",
    slug: "/services/website-development",
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    subtitle: "High-Converting Online Stores",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHqnUNvQco4t201iW3W650f3fustEVOQTtPT7g3P9Fg&s=10",
    desc: "Custom storefronts and Shopify/WooCommerce builds featuring seamless checkout flows, localized payment gateways, and automated order fulfillment.",
    deliverables: [
      "Custom Headless E-commerce Stores",
      "Shopify / WooCommerce Customization",
      "Local & International Payment Options",
      "Real-time Inventory & Shipping Sync"
    ],
    badge: "E-Commerce"
  },
  {
    id: "digital-marketing",
    slug: "/services/digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    subtitle: "Growth & Search Engine Dominance",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
    desc: "Data-driven marketing campaigns, technical SEO, and Answer Engine Optimization (AEO) designed to capture organic search and convert leads.",
    deliverables: [
      "Technical SEO & Content Strategy",
      "Search Engine & AI Search (AEO) Optimization",
      "Pay-Per-Click (PPC) Campaign Management",
      "Social Media Growth & Lead Generation"
    ],
    badge: "Growth"
  }
];

const faqs = [
  { q: "How do we choose the right service for our business?", a: "We begin with a complimentary technical discovery call to review your current setup, goals, and operational friction points. We then recommend an end-to-end strategy aligned with your timeline and budget." },
  { q: "Do you offer full post-launch support and maintenance?", a: "Yes. Every project includes post-launch monitoring and bug-fix coverage. Additionally, we provide monthly retainer agreements for continuous updates, feature scaling, and cloud server management." },
  { q: "Can your custom software integrate with our existing tools?", a: "Absolutely. We specialize in building custom API adapters to link new software with existing legacy systems, CRMs, accounting tools, payment gateways, and databases." },
  { q: "How long does a typical custom software or web application take?", a: "Project timelines vary by scope: core websites take 3 to 6 weeks, while complex SaaS or custom enterprise ERP/CRM builds typically range from 8 to 16 weeks." },
];

// ─── 3. GOOGLE STRUCTURED DATA (JSON-LD) ────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": "https://devntomsolutions.com/services/#itemlist",
      "name": "Digital & Software Engineering Services",
      "itemListElement": services.map((s, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
          "provider": {
            "@type": "Organization",
            "name": "DEVNTOM Solutions",
            "url": "https://devntomsolutions.com"
          },
          "url": `https://devntomsolutions.com${s.slug}`
        }
      }))
    },
    {
      "@type": "FAQPage",
      "@id": "https://devntomsolutions.com/services/#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
};

// ─── 4. REUSABLE SERVER COMPONENTS ──────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border ${dark ? "border-blue-500/30 bg-blue-500/10" : "bg-white border-slate-200 shadow-sm"}`}>
      <div className={`w-2 h-2 rounded-full ${dark ? "bg-blue-400 animate-pulse" : "bg-blue-600"}`} />
      <span className={`text-xs font-black uppercase tracking-widest ${dark ? "text-blue-300" : "text-slate-600"}`}>{children}</span>
    </div>
  );
}

// ─── 5. MAIN PAGE COMPONENT ─────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Pure CSS SSR Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      <main className="overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white bg-slate-50">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex flex-col justify-center bg-[#05070F] overflow-hidden pt-24 pb-20 rounded-b-[3rem] sm:rounded-b-[5rem] shadow-2xl z-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
            <div className="flex justify-center mb-6 animate-fade-in-up">
              <Pill dark>End-to-End Capabilities</Pill>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white animate-fade-in-up delay-100 mb-6">
              Building Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                Ecosystems That Scale.
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-medium mb-10">
              From web applications and AI workflows to custom enterprise software (CRM & ERP), we deliver future-proof tech systems built to create measurable business impact.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs tracking-wider uppercase transition-all shadow-xl shadow-blue-900/50 hover:-translate-y-0.5 flex items-center gap-2">
                Get Service Estimate <ArrowRight size={16} />
              </Link>
              <a href="#services-grid" className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-black text-xs tracking-wider uppercase transition-all backdrop-blur-md">
                Browse All Services
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES GRID SECTION */}
        <section id="services-grid" className="py-24 px-6 relative z-0 -mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <Pill>Our Core Practice Areas</Pill>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-slate-900 tracking-tight">
                Solutions Engineered For Modern Growth
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, idx) => (
                <div 
                  key={s.id} 
                  className="group bg-white rounded-[2.5rem] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 flex flex-col justify-between animate-fade-in-up"
                  style={{ animationDelay: `${(idx % 3) * 100}ms` }}
                >
                  <div>
                    {/* Card Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Top Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-wider">
                          {s.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:bg-blue-500 transition-colors">
                        <s.icon size={22} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 pt-7">
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 mb-1">{s.subtitle}</p>
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">{s.desc}</p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-100">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Key Deliverables</p>
                        {s.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-700 leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="p-8 pt-0">
                    <Link 
                      href={s.slug} 
                      className="w-full py-3.5 px-6 rounded-2xl bg-slate-50 hover:bg-blue-600 text-slate-900 hover:text-white font-extrabold text-xs transition-all duration-300 flex items-center justify-between border border-slate-200/80 group-hover:border-blue-600 shadow-sm"
                    >
                      <span>Explore {s.title}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE OUR SERVICES */}
        <section className="py-24 px-6 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Pill>Engineering Excellence</Pill>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-slate-900 tracking-tight leading-[1.1]">
                  Why Global Brands Partner With DEVNTOM
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  We don&apos;t just complete task tickets — we engineer systems designed for scalability, zero downtime, and strategic market advantage.
                </p>
                <div className="pt-2 grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "No Vendor Lock-In", desc: "Full ownership of source code and architecture." },
                    { title: "Zero Fluff Code", desc: "Clean, high-speed Next.js and Cloud infrastructures." },
                    { title: "Global Delivery", desc: "Dedicated teams in Pakistan, Saudi Arabia & US." },
                    { title: "24/7 Deployment Support", desc: "Continuous monitoring and proactive updates." }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">{feat.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic Feature Box */}
              <div className="bg-[#05070F] rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="space-y-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                    <Sparkles size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black">
                    Looking for a Tailored Enterprise Contract?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    Need a dedicated engineering squad or multi-system transformation across logistics, CRM, and mobile? We structure custom SLAs tailored for medium-to-large enterprises.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-blue-50 font-black text-xs uppercase tracking-wider transition-all">
                    Schedule Executive Call <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION (Native HTML5 Accordion for SSR) */}
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <Pill>Knowledge Base</Pill>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight">Services FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-blue-300 transition-colors shadow-sm">
                  <summary className="w-full px-8 py-6 flex items-center justify-between cursor-pointer list-none">
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors pr-4">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-open:bg-blue-700 group-open:text-white group-hover:bg-blue-100 transition-all text-blue-700">
                      <ChevronDown size={18} className="group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="px-8 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 animate-fade-in">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-[#05070F] rounded-[3rem] p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-[120px]" />
              <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-sky-600/15 blur-[120px]" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                <div className="space-y-6 max-w-2xl">
                  <Pill dark>Start Execution</Pill>
                  <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.05] tracking-tight text-white">
                    Have a Project in Mind?<br />
                    <span className="text-blue-400">Let&apos;s Build It Right.</span>
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-medium">
                    Discuss your requirements directly with our technical leads in Pakistan, Saudi Arabia, or the US.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 w-full lg:w-auto flex-shrink-0">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-1">
                    Book Discovery Call <ArrowRight size={16} />
                  </Link>
                  <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/10 hover:border-white/30 text-white font-bold text-xs transition-all hover:bg-white/5">
                    <MessageCircle size={16} className="text-green-400" /> Instant WhatsApp Chat
                  </a>
                  
                  <div className="pt-4 flex flex-col gap-2 border-t border-white/10 mt-2">
                    <a href="mailto:info@devntomsolutions@gmail.com" className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
                      <Mail size={14} className="text-blue-400" /> info@devntomsolutions@gmail.com
                    </a>
                    <a href="tel:+923256036838" className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
                      <Phone size={14} className="text-blue-400" /> +92 325 603 6838 / +966 583 408034
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}