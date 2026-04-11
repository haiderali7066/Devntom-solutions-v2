"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Plus, Minus, Mail, MessageCircle, Phone, Database, Settings, BarChart3, ShoppingCart, Users, FileText, Package, Truck, Building2, Clock } from "lucide-react";

// export const metadata = {
//   title: "Business Software Products | CRM, ERP, POS Systems — DEVNTOM Solutions",
//   description: "Custom CRM, ERP, POS, inventory management, HR systems, and business intelligence dashboards built by DEVNTOM Solutions. Purpose-built software for Pakistani and Saudi Arabian businesses.",
//   keywords: "custom CRM Pakistan, ERP system Saudi Arabia, POS software, inventory management system, HR software, business dashboard, custom software development, ERP Pakistan, CRM development",
//   openGraph: { title: "Business Software Products | CRM, ERP, POS — DEVNTOM", url: "https://devntom.com/products" },
// };

// ─── DATA ─────────────────────────────────────────────────────────────────────

const products = [
  {
    id: "crm",
    icon: Users,
    name: "CRM System",
    tagline: "Customer Relationship Management",
    headline: "Know Every Customer. Close Every Deal.",
    desc: "A fully custom CRM built around your sales process — not the other way around. Track leads, manage pipelines, automate follow-ups, and give your sales team the visibility they need to win.",
    color: "bg-violet-600",
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
    usedBy: ["Sales teams", "Real estate agencies", "Financial services", "Healthcare providers", "Recruitment firms"],
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
    color: "bg-indigo-600",
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
    usedBy: ["Manufacturing companies", "Wholesale distributors", "Construction firms", "Healthcare organisations", "Multi-location retail"],
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
    color: "bg-emerald-600",
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
    color: "bg-orange-600",
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
    usedBy: ["Wholesale traders", "Pharmacies", "Manufacturing", "E-commerce warehouses", "Import/export businesses"],
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
    color: "bg-pink-600",
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
    usedBy: ["Companies with 20+ employees", "Healthcare facilities", "Manufacturing plants", "Educational institutions", "Government contractors"],
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
    color: "bg-blue-600",
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
    usedBy: ["Executive teams", "Sales directors", "Finance departments", "Operations managers", "Franchise owners"],
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
    color: "bg-teal-600",
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
    usedBy: ["Courier companies", "Food delivery", "E-commerce fulfilment", "Construction logistics", "Healthcare supply"],
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
    color: "bg-rose-600",
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
    usedBy: ["Clinics and hospitals", "Salons and spas", "Fitness studios", "Legal and consulting firms", "Restaurants"],
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

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${dark ? "border-violet-500/30 bg-violet-500/10" : "bg-white border-gray-200"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400 animate-pulse" : "bg-violet-500"}`} />
      <span className={`text-xs font-bold tracking-wide ${dark ? "text-violet-300" : "text-gray-600"}`}>{children}</span>
    </div>
  );
}

function ProductCard({ p, i }: { p: typeof products[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = i % 2 === 0;

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-violet-200 hover:shadow-xl transition-all">
      <div className={`${p.color} p-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <p.icon size={20} className="text-white" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">{p.tagline}</p>
            <h3 className="text-2xl font-black text-white">{p.name}</h3>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">From</p>
            <p className="text-2xl font-black text-white">{p.startingAt}</p>
            <p className="text-[10px] text-white/50">{p.timeframe}</p>
          </div>
        </div>
        <p className="relative z-10 mt-4 text-white/70 text-sm leading-relaxed font-medium">{p.headline}</p>
      </div>

      <div className="p-7 space-y-5">
        <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>

        <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
          <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
          <p className="text-green-700 text-xs font-semibold">{p.result}</p>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="space-y-5 pt-2">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Key Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {p.keyFeatures.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-violet-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Who Uses This</p>
                  <div className="flex flex-wrap gap-2">
                    {p.usedBy.map((u) => (
                      <span key={u} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-full">{u}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <button onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-violet-600 transition-colors">
            {expanded ? <Minus size={13} /> : <Plus size={13} />}
            {expanded ? "Show less" : "View all features"}
          </button>
          <Link href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-all">
            Get a Quote <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center bg-[#050505] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
          <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(124,58,237,0.3)_45%,rgba(139,92,246,0.2)_55%,transparent_70%)] blur-[80px] transform -rotate-12 scale-150" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-24">
          <div className="max-w-4xl space-y-8">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Pill dark>Business Software Products</Pill>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-white">
              Replace the<br /><span className="text-violet-400">Spreadsheets.</span><br />Run Your Business.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
              className="text-white/50 text-base max-w-2xl leading-relaxed">
              Custom CRM, ERP, POS, HR systems, inventory management, and business intelligence dashboards — built from scratch to fit your exact workflows. No off-the-shelf compromises.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
              {["CRM Systems", "ERP Platforms", "POS Software", "Inventory Management", "HR & Payroll", "BI Dashboards", "Logistics Systems", "Booking Platforms"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/50 text-xs font-semibold rounded-full">{tag}</span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[11vw] font-black text-white/[0.03] leading-none tracking-[-0.04em] select-none whitespace-nowrap text-center">
            BUSINESS SOFTWARE
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
      </section>

      {/* WHY CUSTOM */}
      <section className="py-20 px-6 bg-[#f7f6f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="space-y-5 lg:sticky lg:top-28">
              <Pill>Why Custom Software?</Pill>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                Off-the-Shelf Doesn't Fit Every Business
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Generic software forces your business to adapt to the software. Custom software adapts to your business. The result is faster adoption, higher efficiency, and lower long-term cost.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Built around your workflows",   desc: "Not the other way around. Every field, every step, every report is designed for how your team actually works." },
                { title: "No per-user licensing fees",    desc: "One-time build cost. Add 5 or 500 users without paying more every month to a SaaS vendor." },
                { title: "Full ownership",                desc: "The code is yours. No vendor lock-in, no subscription dependency, no risk of the product being discontinued." },
                { title: "Integrates with your stack",   desc: "Custom APIs that connect your new system to every existing tool — accounting software, payment gateways, communication platforms." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                  className="p-5 bg-white rounded-2xl border border-gray-100 hover:border-violet-200 transition-all">
                  <div className="w-1 h-5 bg-violet-500 rounded-full mb-3" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <Pill>Our Product Range</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">
              Eight Business Systems<br /><span className="text-gray-400">Built to Your Spec</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
              Every system below is custom-built — not a white-label product. Click "View all features" on any card to see full capabilities, or <Link href="/contact" className="text-violet-600 font-bold hover:underline">contact us</Link> to discuss your specific requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f7f6f4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <Pill>FAQ</Pill>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left group">
                  <span className={`text-sm font-bold transition-colors ${openFaq === i ? "text-violet-600" : "text-gray-800 group-hover:text-violet-600"}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${openFaq === i ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {openFaq === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0d0d12] rounded-[48px] p-10 md:p-20 overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-700/15 blur-[100px]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="space-y-6 max-w-xl">
                <Pill dark>Custom Quote</Pill>
                <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                  Ready to Replace Your<br /><span className="text-violet-400">Manual Processes?</span>
                </h2>
                <p className="text-white/50 text-base leading-relaxed">
                  Describe your workflow challenges. We'll scope the right system, give you a fixed price, and build it to your exact specifications — no off-the-shelf compromise.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-lg shadow-violet-900/40 active:scale-95">
                  Get a Free Consultation <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-white/40 text-white font-bold text-sm transition-all">
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
                <div className="pt-1 flex flex-col gap-2">
                  <a href="mailto:devntomsolutions@gmail.com" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                    <Mail size={13} className="text-violet-500" /> devntomsolutions@gmail.com
                  </a>
                  <a href="tel:+923256036838" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                    <Phone size={13} className="text-violet-500" /> +92 325 603 6838
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}