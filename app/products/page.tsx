import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
  Mail,
  MessageCircle,
  Phone,
  BarChart3,
  ShoppingCart,
  Users,
  FileText,
  Package,
  Truck,
  Building2,
  Clock,
  ChevronDown
} from "lucide-react";

// ─── 1. SEO, AEO & GEO METADATA ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Business Software Products | CRM, ERP, POS Systems — DEVNTOM Solutions",
  description:
    "Custom CRM, ERP, POS, inventory management, HR systems, and business intelligence dashboards built by DEVNTOM Solutions. Purpose-built software for Pakistani, Saudi Arabian, and US businesses.",
  keywords: [
    "custom CRM Pakistan",
    "ERP system Saudi Arabia",
    "POS software",
    "inventory management system",
    "HR software",
    "business dashboard",
    "custom software development",
    "ERP Pakistan",
    "CRM development",
    "Enterprise software solutions"
  ].join(", "),
  alternates: {
    canonical: "https://devntomsolutions.com/products",
  },
  openGraph: {
    title: "Enterprise Software Products | CRM, ERP, POS — DEVNTOM",
    description: "Scale your business with custom-engineered CRM, ERP, and POS systems. Zero per-user licensing fees. Full ownership.",
    url: "https://devntomsolutions.com/products",
    siteName: "DEVNTOM Solutions",
    images: [
      {
        url: "https://devntomsolutions.com/og-products.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "DEVNTOM Software Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Software Products | CRM, ERP, POS Systems",
    description: "Custom-engineered business software with zero ongoing license fees.",
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

// ─── 2. DATA (Colors Updated to Blue Theme) ─────────────────────────────────

const products = [
  {
    id: "crm",
    icon: Users,
    name: "CRM System",
    tagline: "Customer Relationship Management",
    headline: "Know Every Customer. Close Every Deal.",
    desc: "A fully custom CRM built around your sales process — not the other way around. Track leads, manage pipelines, automate follow-ups, and give your sales team the visibility they need to win.",
    color: "bg-blue-700",
    keyFeatures: [
      "Visual sales pipeline with drag-and-drop",
      "Lead scoring and qualification automation",
      "Email and WhatsApp integration",
      "Custom deal stages and fields",
      "Activity tracking and reminders",
      "Performance reports and forecasting",
      "Role-based access for teams",
      "Mobile app for sales teams",
    ],
    usedBy: ["Sales teams", "Real estate agencies", "Financial services", "Healthcare providers"],
    result: "38% average increase in deal close rate",
    timeframe: "8–12 weeks",
    startingAt: "$4,000",
  },
  {
    id: "erp",
    icon: Building2,
    name: "ERP System",
    tagline: "Enterprise Resource Planning",
    headline: "One System. Every Department.",
    desc: "Connect your finance, HR, inventory, procurement, and operations into one powerful platform that gives leadership real-time visibility across the entire business.",
    color: "bg-blue-800",
    keyFeatures: [
      "Financial management and accounting",
      "HR and payroll module",
      "Inventory and warehouse management",
      "Purchase order and supplier management",
      "Production and manufacturing tracking",
      "Multi-branch and multi-currency support",
      "Automated reporting and compliance",
      "Custom approval workflows",
    ],
    usedBy: ["Manufacturing companies", "Wholesale distributors", "Construction firms", "Multi-location retail"],
    result: "40% reduction in operational overhead",
    timeframe: "12–20 weeks",
    startingAt: "$10,000",
  },
  {
    id: "pos",
    icon: ShoppingCart,
    name: "POS System",
    tagline: "Point of Sale",
    headline: "Fast Checkout. Smart Inventory. Happy Customers.",
    desc: "A custom POS system built for your business model — whether you're a single-location café or a 20-branch retail chain. Handles sales, inventory, staff, and reporting in real time.",
    color: "bg-sky-700",
    keyFeatures: [
      "Touchscreen and barcode scanner support",
      "Real-time inventory sync across locations",
      "Staff management and permissions",
      "Multiple payment methods (cash, card, QR)",
      "Customer loyalty and discount system",
      "End-of-day reports and reconciliation",
      "Kitchen display system (for restaurants)",
      "Multi-branch dashboard",
    ],
    usedBy: ["Retail stores", "Restaurants and cafés", "Pharmacies", "Supermarkets", "Service businesses"],
    result: "Zero inventory discrepancies across 12 branches",
    timeframe: "6–10 weeks",
    startingAt: "$3,500",
  },
  {
    id: "inventory",
    icon: Package,
    name: "Inventory Management",
    tagline: "Stock & Warehouse Management",
    headline: "Always Know What You Have. Never Run Out.",
    desc: "A real-time inventory system that tracks stock levels, purchase orders, supplier deliveries, and product movements — eliminating manual spreadsheets and stockout crises.",
    color: "bg-blue-600",
    keyFeatures: [
      "Real-time stock level tracking",
      "Low-stock alerts and auto-reorder",
      "Barcode and QR code scanning",
      "Multi-warehouse support",
      "Supplier and purchase order management",
      "Batch and expiry date tracking",
      "Stock movement history and audit trail",
      "Integration with existing POS or ERP",
    ],
    usedBy: ["Wholesale traders", "Pharmacies", "Manufacturing", "E-commerce warehouses"],
    result: "60% reduction in stockout incidents",
    timeframe: "6–10 weeks",
    startingAt: "$3,000",
  },
  {
    id: "hrms",
    icon: FileText,
    name: "HR Management System",
    tagline: "Human Resources & Payroll",
    headline: "Manage People. Simplify Payroll.",
    desc: "An end-to-end HR platform covering employee records, attendance, leave management, payroll calculation, and performance reviews — built to your company's specific policies.",
    color: "bg-slate-800",
    keyFeatures: [
      "Employee database and document storage",
      "Attendance and biometric integration",
      "Leave management with approval workflows",
      "Automated payroll calculation",
      "Overtime, deductions, and tax handling",
      "Performance review and KPI tracking",
      "Onboarding and offboarding workflows",
      "Payslip generation and email delivery",
    ],
    usedBy: ["Companies with 20+ employees", "Healthcare facilities", "Manufacturing plants", "Educational institutions"],
    result: "80% reduction in payroll processing time",
    timeframe: "8–14 weeks",
    startingAt: "$5,000",
  },
  {
    id: "dashboard",
    icon: BarChart3,
    name: "Business Intelligence Dashboard",
    tagline: "Analytics & Reporting",
    headline: "Data You Can Act On. Instantly.",
    desc: "A custom analytics dashboard that pulls data from all your business systems and presents it in clear, actionable visualisations — giving leadership the insights to make faster, smarter decisions.",
    color: "bg-indigo-600", // Replaced with a deep blue tone via Tailwind config, safely mapped to standard colors
    keyFeatures: [
      "Real-time KPI tracking and alerts",
      "Multi-source data integration",
      "Custom charts and visualisations",
      "Revenue, cost, and margin analysis",
      "Sales performance by team and region",
      "Automated scheduled reports",
      "Role-based dashboard views",
      "Export to PDF and Excel",
    ],
    usedBy: ["Executive teams", "Sales directors", "Finance departments", "Operations managers"],
    result: "Decision speed increased by 3× for leadership teams",
    timeframe: "4–8 weeks",
    startingAt: "$2,500",
  },
  {
    id: "logistics",
    icon: Truck,
    name: "Logistics & Delivery System",
    tagline: "Fleet & Order Management",
    headline: "Track Every Order. Optimise Every Route.",
    desc: "A custom logistics platform for businesses managing deliveries, fleet operations, or supply chains — with real-time tracking, route optimisation, and driver management.",
    color: "bg-cyan-700",
    keyFeatures: [
      "Real-time GPS vehicle tracking",
      "Order dispatch and driver assignment",
      "Route optimisation",
      "Customer delivery notifications (SMS/WhatsApp)",
      "Proof of delivery (photo and signature)",
      "Driver performance reporting",
      "Fuel and maintenance tracking",
      "Customer self-service tracking portal",
    ],
    usedBy: ["Courier companies", "Food delivery", "E-commerce fulfilment", "Construction logistics"],
    result: "25% improvement in on-time delivery rate",
    timeframe: "8–14 weeks",
    startingAt: "$5,000",
  },
  {
    id: "booking",
    icon: Clock,
    name: "Booking & Scheduling System",
    tagline: "Appointments & Reservations",
    headline: "Zero No-Shows. Full Calendars.",
    desc: "A custom booking system tailored to your service business — online appointment scheduling, automated reminders, staff calendar management, and payment collection in one platform.",
    color: "bg-blue-900",
    keyFeatures: [
      "Online booking via website or app",
      "Staff and resource calendar management",
      "Automated SMS and WhatsApp reminders",
      "Online payments at booking",
      "Waitlist management",
      "Multi-location support",
      "Customer booking history",
      "No-show and cancellation policies",
    ],
    usedBy: ["Clinics and hospitals", "Salons and spas", "Fitness studios", "Legal and consulting firms"],
    result: "45% reduction in no-shows after automated reminders",
    timeframe: "5–8 weeks",
    startingAt: "$2,500",
  },
];

const faqs = [
  { q: "Can you integrate these systems with my existing software?",  a: "Yes. Every system we build includes API integration with your existing tools — accounting software, payment gateways, email platforms, and more. We assess your current stack in discovery and plan integrations from day one." },
  { q: "Are these systems cloud-based or installed on-premise?",       a: "We build both. Cloud-based systems are our default recommendation for accessibility and maintenance ease. For businesses with strict data security requirements, we can deploy on your own servers or a private cloud." },
  { q: "Do you train our team on how to use the system?",             a: "Yes — all projects include a training programme. We deliver video walkthroughs, user documentation, and live training sessions with your team before handover." },
  { q: "What if we need changes after the system is launched?",       a: "All projects include 3 months of post-launch support. After that, we offer affordable monthly retainers for updates, new features, and ongoing development as your business grows." },
  { q: "Can the system scale as our business grows?",                  a: "Absolutely. Every system is architected for scale from the start — cloud infrastructure, proper database design, and modular code so adding users, locations, or features never requires a rebuild." },
  { q: "Do you offer demos before committing to a project?",          a: "Yes. For all product types, we can arrange a live demo of similar systems we've built. Book a call and we'll show you what's possible for your specific use case." },
];

// ─── 3. GOOGLE STRUCTURED DATA (JSON-LD) ────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://devntomsolutions.com/products/#webpage",
      "url": "https://devntomsolutions.com/products",
      "name": "Enterprise Business Software Products by DEVNTOM Solutions",
      "isPartOf": { "@id": "https://devntomsolutions.com/#website" },
      "about": {
        "@type": "ItemList",
        "itemListElement": products.map((p, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": p.name,
            "operatingSystem": "Web, Cloud, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "description": p.desc,
            "offers": {
              "@type": "Offer",
              "price": p.startingAt.replace(/[^0-9.]/g, ""),
              "priceCurrency": "USD"
            }
          }
        }))
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://devntomsolutions.com/products/#faq",
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
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-blue-500/30 bg-blue-500/10" : "bg-white border-gray-200"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-blue-400 animate-pulse" : "bg-blue-600"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-blue-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

function ProductCard({ p }: { p: typeof products[0] }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
      <div className={`${p.color} p-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <p.icon size={20} className="text-white" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">{p.tagline}</p>
            <h3 className="text-2xl font-black text-white">{p.name}</h3>
          </div>
          <div className="sm:text-right flex-shrink-0 bg-black/20 px-4 py-2 rounded-xl backdrop-blur-sm">
            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">From</p>
            <p className="text-xl font-black text-white">{p.startingAt}</p>
            <p className="text-[10px] text-white/70">{p.timeframe}</p>
          </div>
        </div>
        <p className="relative z-10 mt-4 text-white/90 text-sm leading-relaxed font-medium">{p.headline}</p>
      </div>

      <div className="p-7 space-y-5">
        <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>

        <div className="flex items-start sm:items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl">
          <CheckCircle2 size={16} className="text-blue-700 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-blue-900 text-xs font-bold">{p.result}</p>
        </div>

        {/* Server-Side HTML5 Accordion for Features */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer list-none py-2 border-t border-gray-100 mt-2">
            <span className="text-xs font-bold text-gray-500 group-hover:text-blue-700 transition-colors flex items-center gap-2">
              <Plus size={14} className="group-open:hidden" />
              <Minus size={14} className="hidden group-open:block" />
              <span className="group-open:hidden">View all features</span>
              <span className="hidden group-open:inline">Hide features</span>
            </span>
          </summary>
          
          <div className="space-y-5 pt-4 pb-2 animate-fade-in">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Key Features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {p.keyFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600 leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Who Uses This</p>
              <div className="flex flex-wrap gap-2">
                {p.usedBy.map((u) => (
                  <span key={u} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold rounded-full">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </details>

        <div className="pt-4 border-t border-gray-100">
          <Link href="/contact" className="flex items-center justify-center w-full gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
            Request System Demo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── 5. MAIN PAGE COMPONENT ─────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <>
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Inline Styles for Pure CSS SSR Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      <main className="overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center bg-[#05070F] overflow-hidden pt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#05070F]/80 to-[#05070F]" />
            <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
              {/* Blue Glow Replacement */}
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(29,78,216,0.3)_45%,rgba(59,130,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full">
            <div className="max-w-4xl space-y-8">
              <div className="animate-fade-in-up">
                <Pill dark>Business Software Products</Pill>
              </div>
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white animate-fade-in-up delay-100">
                Replace the <span className="text-blue-500">Spreadsheets.</span><br />Run Your Business.
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed animate-fade-in-up delay-200 font-medium">
                Custom CRM, ERP, POS, HR systems, inventory management, and business intelligence dashboards — built from scratch to fit your exact workflows. No off-the-shelf compromises.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300 pt-4">
                {["CRM Systems", "ERP Platforms", "POS Software", "Inventory Management", "HR & Payroll", "BI Dashboards", "Logistics Systems", "Booking Platforms"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors text-slate-300 text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
            <div className="text-[11vw] font-black text-white/[0.02] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center animate-fade-in-up delay-300">
              ENTERPRISE SOFTWARE
            </div>
          </div>
        </section>

        {/* WHY CUSTOM SECTION */}
        <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="space-y-6 lg:sticky lg:top-28 animate-fade-in-up">
                <Pill>Why Custom Software?</Pill>
                <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-black text-slate-900 tracking-tight leading-[1.1]">
                  Off-the-Shelf Doesn&apos;t Fit Every Business
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Generic software forces your business to adapt to the software. Custom software adapts to your business. The result is faster adoption, higher efficiency, and lower long-term cost.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { title: "Built around your workflows",   desc: "Not the other way around. Every field, every step, every report is designed for how your team actually works." },
                  { title: "No per-user licensing fees",    desc: "One-time build cost. Add 5 or 500 users without paying more every month to a SaaS vendor." },
                  { title: "Full ownership & Codebase",     desc: "The code is yours. No vendor lock-in, no subscription dependency, no risk of the product being discontinued." },
                  { title: "Integrates with your stack",    desc: "Custom APIs that connect your new system to every existing tool — accounting software, payment gateways, communication platforms." },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-1.5 h-6 bg-blue-600 rounded-full mb-4 group-hover:scale-y-125 transition-transform origin-bottom" />
                    <h4 className="font-black text-slate-900 text-base mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID SECTION */}
        <section className="py-24 px-6 bg-white" id="software-catalog">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-5 animate-fade-in-up">
              <Pill>Our Product Range</Pill>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight">
                Eight Business Systems<br />
                <span className="text-blue-600/40">Built to Your Spec</span>
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-medium">
                Every system below is custom-built — not a white-label product. Expand the cards to see full capabilities, or <Link href="/contact" className="text-blue-700 font-extrabold hover:underline">contact us</Link> to discuss your specific operational requirements.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* SEO / AEO FAQ SECTION (Native HTML Accordion for SSR) */}
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <Pill>Knowledge Base</Pill>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight">System Implementation FAQ</h2>
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
                  <div className="px-8 pb-6 pt-2 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 animate-fade-in">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-[#05070F] rounded-[3rem] p-10 sm:p-16 lg:p-24 overflow-hidden shadow-2xl">
              {/* Background ambient glows updated to Blue */}
              <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-[120px]" />
              <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-sky-600/15 blur-[120px]" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                <div className="space-y-8 max-w-2xl">
                  <Pill dark>Start Your Build</Pill>
                  <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-white">
                    Ready to Replace Your<br />
                    <span className="text-blue-400">Manual Processes?</span>
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Describe your workflow challenges. We&apos;ll scope the right system, give you a fixed price, and build it to your exact specifications — no off-the-shelf compromise.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 w-full lg:w-auto flex-shrink-0">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-wide uppercase transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-1">
                    Get a Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/10 hover:border-white/30 text-white font-bold text-sm transition-all hover:bg-white/5">
                    <MessageCircle size={16} className="text-green-400" /> WhatsApp Tech Team
                  </a>
                  
                  <div className="pt-6 flex flex-col gap-3 border-t border-white/10 mt-2">
                    <a href="mailto:devntomsolutions@gmail.com" className="flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Mail size={14} className="text-blue-400" /></div> 
                      info@devntomsolutions@gmail.com
                    </a>
                    <a href="tel:+923256036838" className="flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Phone size={14} className="text-blue-400" /></div> 
                      +92 325 603 6838
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