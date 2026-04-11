"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Globe, Megaphone, Code2, Smartphone, Palette, Bot,
  ChevronRight, Package, ShoppingBag, Layers, BarChart2, ShieldCheck,
  Briefcase, Building2, HeartPulse, GraduationCap, Truck,
  LayoutGrid, Eye, Star, Award,
  Info, BookOpen, Users,
} from "lucide-react";

const ACCENT = "#0ea5e9";

// ─── Nav Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  { name: "Website Development",    href: "/services/website-development",  icon: Globe,       short: "Custom websites, CMS, SaaS & web apps",       desc: "We build fast, scalable websites — from landing pages to full SaaS platforms tailored to your business.", tags: ["Custom Websites", "CMS", "Web Apps", "SaaS", "E-Commerce"],        img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80" },
  { name: "Digital Marketing",       href: "/services/digital-marketing",    icon: Megaphone,   short: "SEO, ads, social media & content",            desc: "Results-driven marketing — Google & Meta ads, SEO strategies, content creation and social media management.", tags: ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content"],          img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80" },
  { name: "Software Development",    href: "/services/software-development", icon: Code2,       short: "ERP, CRM, enterprise & custom systems",        desc: "Enterprise-grade custom software — ERP systems, CRMs, internal tools and workflow automation built to scale.", tags: ["ERP Systems", "CRM", "Internal Tools", "Automation", "APIs"],        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80" },
  { name: "App Development",         href: "/services/app-development",      icon: Smartphone,  short: "iOS, Android & cross-platform apps",           desc: "From MVPs to fully-featured consumer and enterprise apps — native iOS, Android and cross-platform mobile apps.", tags: ["iOS", "Android", "React Native", "Flutter", "MVP"],                  img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80" },
  { name: "UI/UX Design",            href: "/services/uiux-design",          icon: Palette,     short: "Research, wireframes & pixel-perfect UI",      desc: "User research, wireframing, prototyping and pixel-perfect design systems that make your product unforgettable.", tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"],     img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80" },
  { name: "AI Automation & Chatbots",href: "/services/ai-automation",        icon: Bot,         short: "Intelligent chatbots & workflow automation",   desc: "Automate repetitive work with AI-powered chatbots, smart workflow engines and LLM integrations that run 24/7.", tags: ["AI Chatbots", "Workflow Automation", "OpenAI", "n8n / Make"],        img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80" },
];

const PRODUCTS = [
  { name: "Analytics Dashboard",  href: "/products/analytics",    icon: BarChart2,   short: "Real-time data & business intelligence",    desc: "A powerful analytics dashboard giving you real-time visibility into KPIs, user behavior and revenue metrics.", tags: ["Real-Time", "BI", "KPIs", "Reports", "Dashboards"],            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
  { name: "E-Commerce Suite",     href: "/products/ecommerce",    icon: ShoppingBag, short: "Full-featured online store platform",        desc: "End-to-end e-commerce platform with inventory management, payment gateways, and order tracking built in.", tags: ["Storefront", "Payments", "Inventory", "Orders", "Multi-vendor"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80" },
  { name: "CRM Platform",         href: "/products/crm",          icon: Users,       short: "Manage leads, deals & customer journeys",   desc: "A fully customizable CRM to track leads, manage pipelines and automate follow-ups across your sales team.", tags: ["Leads", "Pipeline", "Automation", "Sales", "Contacts"],         img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80" },
  { name: "Inventory Manager",    href: "/products/inventory",    icon: Package,     short: "Stock tracking & supply chain tools",       desc: "Track stock levels, automate reordering and manage suppliers with a unified inventory management system.", tags: ["Stock", "Suppliers", "Reordering", "Warehousing", "SKUs"],      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80" },
  { name: "Compliance Hub",       href: "/products/compliance",   icon: ShieldCheck, short: "Regulatory compliance & audit management",  desc: "Stay compliant with automated regulatory tracking, audit trails, document management and risk reporting.", tags: ["Audits", "Risk", "Documents", "Regulatory", "Tracking"],        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80" },
  { name: "Project Management",   href: "/products/pm",           icon: Layers,      short: "Tasks, timelines & team collaboration",     desc: "Keep projects on track with task boards, Gantt timelines, team chat and workload management in one place.", tags: ["Tasks", "Gantt", "Timelines", "Teams", "Kanban"],               img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80" },
];

const PORTFOLIO = [
  { name: "Featured Work",      href: "/portfolio/featured",   icon: Star,       short: "Handpicked best projects",                  desc: "Our finest work handpicked across industries — showcasing design excellence, technical depth and business impact.", tags: ["Best Projects", "Case Studies", "Design", "Engineering"],     img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&auto=format&fit=crop&q=80" },
  { name: "Web Projects",       href: "/portfolio/web",        icon: Globe,      short: "Websites & web application showcases",       desc: "From marketing websites to complex SaaS platforms — explore our web development portfolio and outcomes achieved.", tags: ["Websites", "SaaS", "Web Apps", "CMS", "Landing Pages"],       img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80" },
  { name: "Mobile Apps",        href: "/portfolio/mobile",     icon: Smartphone, short: "iOS & Android app case studies",             desc: "Consumer and enterprise mobile apps built by our team — from MVP validation to App Store launch and beyond.", tags: ["iOS", "Android", "React Native", "Flutter", "MVPs"],          img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80" },
  { name: "UI/UX Designs",      href: "/portfolio/design",     icon: Palette,    short: "Design system & brand experience work",      desc: "Pixel-perfect UI and brand experience design work — wireframes, prototypes and production-ready design systems.", tags: ["Design Systems", "Branding", "Figma", "Prototypes", "UI"],    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80" },
  { name: "Enterprise Software", href: "/portfolio/enterprise", icon: Building2,  short: "Large-scale ERP & platform builds",          desc: "Complex enterprise solutions delivered — ERP implementations, multi-tenant platforms and business automation.", tags: ["ERP", "CRM", "Automation", "B2B", "Integrations"],             img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80" },
  { name: "All Projects",       href: "/portfolio",            icon: LayoutGrid, short: "Browse the complete portfolio",              desc: "Browse our complete body of work across every service area, industry and technology stack we've delivered in.", tags: ["All Projects", "Filter by Industry", "Filter by Service"],    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80" },
];

const INDUSTRIES = [
  { name: "Healthcare",        href: "/industries/healthcare",    icon: HeartPulse,    short: "Digital health & patient experience",       desc: "Secure, HIPAA-aware platforms for clinics, telehealth providers and health-tech startups improving patient care.", tags: ["Telehealth", "HIPAA", "EHR", "Patient Portals", "Health-Tech"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" },
  { name: "Education",         href: "/industries/education",     icon: GraduationCap, short: "EdTech platforms & learning systems",       desc: "LMS platforms, e-learning apps, student portals and admin tools built for schools, universities and edtech startups.", tags: ["LMS", "E-Learning", "Student Apps", "EdTech", "Admin"],        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80" },
  { name: "E-Commerce",        href: "/industries/ecommerce",     icon: ShoppingBag,   short: "Online retail & marketplace platforms",     desc: "High-converting storefronts, multi-vendor marketplaces and headless commerce builds that scale with your catalog.", tags: ["Retail", "Marketplace", "Headless", "D2C", "Subscriptions"],   img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80" },
  { name: "Finance & FinTech", href: "/industries/fintech",       icon: Briefcase,     short: "Banking, payments & financial tools",       desc: "Secure fintech solutions — payment gateways, banking dashboards, crypto platforms and regulatory-ready tools.", tags: ["Payments", "Banking", "FinTech", "Crypto", "RegTech"],         img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80" },
  { name: "Logistics",         href: "/industries/logistics",     icon: Truck,         short: "Supply chain & fleet management tools",     desc: "Real-time fleet tracking, route optimization, warehouse management and supply chain visibility platforms.", tags: ["Fleet", "Route Optimization", "WMS", "Last-Mile", "Tracking"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80" },
  { name: "Real Estate",       href: "/industries/real-estate",   icon: Building2,     short: "PropTech & property management systems",    desc: "PropTech platforms — property listing portals, tenant management systems and real estate CRM tools built to scale.", tags: ["PropTech", "Listings", "CRM", "Tenant Portals", "Agents"],     img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80" },
];

const COMPANY = [
  { name: "About Us",   href: "/about",   icon: Info,     short: "Our story, team & mission",                desc: "Learn about who we are, the values that drive us and the talented team behind every project we deliver.",    tags: ["Our Story", "Mission", "Values", "Team"],              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" },
  { name: "Blog",       href: "/blog",    icon: BookOpen, short: "Insights, tutorials & industry news",      desc: "Expert articles, technical tutorials and industry insights from our team — published weekly to your feed.",  tags: ["Insights", "Tutorials", "News", "Case Studies"],        img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80" },
  { name: "Careers",    href: "/careers", icon: Award,    short: "Join our team — open roles worldwide",     desc: "We're hiring passionate designers, engineers and strategists. Explore open roles and grow your career with us.", tags: ["Open Roles", "Remote", "Benefits", "Culture"],          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80" },
  { name: "Portfolio",  href: "/portfolio",icon: Eye,     short: "See our work across industries",            desc: "Browse our complete portfolio of delivered projects spanning multiple industries and technology stacks.",    tags: ["Projects", "Case Studies", "Industries"],               img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&auto=format&fit=crop&q=80" },
];

// ─── Types ─────────────────────────────────────────────────────────────────────

type MenuItem = {
  name: string; href: string; icon: React.ElementType;
  short: string; desc: string; tags: string[]; img: string;
};

const NAV_ITEMS: { label: string; href?: string; items?: MenuItem[]; allHref?: string; allLabel?: string }[] = [
  { label: "Services",   items: SERVICES,   allHref: "/services",   allLabel: "View all services" },
  { label: "Products",   items: PRODUCTS,   allHref: "/products",   allLabel: "View all products" },
  { label: "Portfolio",  items: PORTFOLIO,  allHref: "/portfolio",  allLabel: "Browse all work" },
  { label: "Industries", items: INDUSTRIES, allHref: "/industries", allLabel: "All industries" },
  { label: "Company",    items: COMPANY,    allHref: "/about",      allLabel: "Learn more about us" },
];

// ─── Mega Menu (shared, consistent size) ──────────────────────────────────────

function MegaMenu({ items, allHref, allLabel, onClose }: {
  items: MenuItem[]; allHref: string; allLabel: string; onClose: () => void;
}) {
  const [hovered, setHovered] = useState(0);
  const active = items[hovered];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      /* Fixed width so every dropdown is identical */
      className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 overflow-hidden rounded-3xl z-50"
      style={{
        width: "min(96vw, 1100px)",
        background: "rgba(10,10,14,0.78)",
        backdropFilter: "blur(48px) saturate(180%)",
        WebkitBackdropFilter: "blur(48px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(14,165,233,0.06), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      <div className="grid grid-cols-[1fr_420px]">

        {/* LEFT — list ───────────────────────────────────────────────────────── */}
        <div className="py-4 px-3 border-r border-white/[0.05]">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/25 px-4 mb-3 pt-2">
            Navigation
          </p>
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = hovered === i;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => setHovered(i)}
                className="group relative flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-200"
              >
                {isActive && (
                  <motion.div
                    layoutId="mega-pill"
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: "rgba(14,165,233,0.10)", border: "1px solid rgba(14,165,233,0.18)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div
                  className="relative z-10 flex items-center justify-center flex-shrink-0 w-9 h-9 rounded-xl transition-all duration-200"
                  style={{
                    background: isActive ? "rgba(14,165,233,0.18)" : "rgba(255,255,255,0.04)",
                    border: isActive ? "1px solid rgba(14,165,233,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon size={15} style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.35)" }} />
                </div>
                <div className="relative z-10 min-w-0">
                  <p className={`text-sm font-bold leading-none mb-1 transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                    {item.name}
                  </p>
                  <p className="text-[11px] text-white/30 truncate">{item.short}</p>
                </div>
                <ChevronRight
                  size={13}
                  className={`ml-auto flex-shrink-0 relative z-10 transition-all duration-200 ${isActive ? "text-sky-400 translate-x-0.5" : "text-white/15"}`}
                />
              </Link>
            );
          })}

          <div className="px-4 pt-3 pb-2 border-t border-white/[0.05] mt-2">
            <Link
              href={allHref}
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-bold transition-colors text-sky-400/70 hover:text-sky-400 group"
            >
              {allLabel}
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT — preview ───────────────────────────────────────────────────── */}
        <div className="relative flex flex-col overflow-hidden">
          {/* Fixed-height image area so panel height never shifts */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 208 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.img}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={active.img} alt={active.name} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[rgba(10,10,14,0.95)]" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)`, boxShadow: `0 4px 16px ${ACCENT}50` }}
              >
                <active.icon size={16} className="text-white" />
              </div>
              <span className="text-xs font-black tracking-tight text-white">{active.name}</span>
            </div>
          </div>

          {/* Fixed-height content area */}
          <div style={{ height: 200 }} className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col gap-4 px-6 pt-5 pb-6"
              >
                <p className="text-[13px] text-white/50 leading-relaxed line-clamp-3">{active.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold text-sky-300/70 border"
                      style={{ background: "rgba(14,165,233,0.07)", borderColor: "rgba(14,165,233,0.15)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={active.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all self-start group"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}22, rgba(124,58,237,0.18))`,
                    border: `1px solid ${ACCENT}33`,
                    boxShadow: `0 4px 16px ${ACCENT}18`,
                  }}
                >
                  Learn more
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        navRef.current && !navRef.current.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeItem = NAV_ITEMS.find((n) => n.label === activeMenu);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-0 mx-auto md:top-4 md:px-6 max-w-7xl"
    >
      {/* ── Main bar ─────────────────────────────────────────────────────────── */}
      <div
        ref={navRef}
        className="relative flex items-center justify-between h-16 px-5 mx-auto transition-all duration-500 md:px-6 md:rounded-full"
        style={{
          background: scrolled ? "rgba(10,10,14,0.55)" : "transparent",
          backdropFilter: scrolled ? "blur(48px) saturate(200%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(48px) saturate(200%)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          boxShadow: scrolled
            ? "0 8px 40px -8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 0 1px rgba(14,165,233,0.05)"
            : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group z-50 flex-shrink-0">
          <div
            className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-xl group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)`,
              boxShadow: `0 4px 18px ${ACCENT}45, inset 0 1px 1px rgba(255,255,255,0.25)`,
            }}
          >
            <span className="text-sm font-black text-white">D</span>
          </div>
          <span className="text-base font-black tracking-tight text-white">DEVNTOM</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="relative items-center hidden gap-0.5 md:flex">
          {NAV_ITEMS.map((nav) => {
            const isOpen = activeMenu === nav.label;
            const isHov  = hoveredLink === nav.label;
            return (
              <div key={nav.label} className="relative">
                <button
                  onMouseEnter={() => { setHoveredLink(nav.label); setActiveMenu(nav.label); }}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setActiveMenu(isOpen ? null : nav.label)}
                  className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full cursor-pointer"
                >
                  <span className={`relative z-10 transition-colors duration-200 ${isOpen || isHov ? "text-white" : "text-white/55 hover:text-white/80"}`}>
                    {nav.label}
                  </span>
                  <motion.svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`relative z-10 transition-colors duration-200 ${isOpen ? "text-sky-400" : "text-white/30"}`}
                  >
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.svg>
                  {(isOpen || isHov) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.05)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="items-center flex-shrink-0 hidden gap-3 md:flex">
          <Link
            href="/contact"
            className="relative px-5 py-2.5 text-sm font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] group"
            style={{
              background: `linear-gradient(135deg, ${ACCENT}cc, #7c3aed)`,
              boxShadow: `0 6px 24px ${ACCENT}35, inset 0 1px 0 rgba(255,255,255,0.25)`,
            }}
          >
            <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 duration-400" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="relative z-10 flex items-center gap-1.5">
              Start a Project
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 p-2 md:hidden text-white/80 hover:text-white"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-left ${mobileOpen ? "rotate-45 translate-x-[2px]" : ""}`} />
            <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-left ${mobileOpen ? "-rotate-45 translate-x-[2px]" : ""}`} />
          </div>
        </button>

        {/* Desktop Mega Menu wrapper */}
        <AnimatePresence>
          {activeMenu && activeItem?.items && (
            <div
              ref={menuRef}
              onMouseLeave={() => { setActiveMenu(null); setHoveredLink(null); }}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              className="absolute left-0 right-0 top-full"
              style={{ zIndex: 60 }}
            >
              <MegaMenu
                items={activeItem.items}
                allHref={activeItem.allHref!}
                allLabel={activeItem.allLabel!}
                onClose={() => setActiveMenu(null)}
              />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-[72px] left-3 right-3 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,10,14,0.82)",
              backdropFilter: "blur(48px) saturate(200%)",
              WebkitBackdropFilter: "blur(48px) saturate(200%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map((nav, idx) => {
                const isExpanded = mobileExpanded === nav.label;
                return (
                  <div key={nav.label}>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : nav.label)}
                      className="flex items-center justify-between w-full px-2 py-3 text-base font-semibold transition-colors text-white/70 hover:text-white"
                    >
                      {nav.label}
                      <motion.svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 pb-2 flex flex-col gap-0.5">
                            {nav.items?.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/55 hover:text-white hover:bg-white/[0.04] transition-all text-sm font-medium"
                                >
                                  <Icon size={14} className="flex-shrink-0 text-sky-400/60" />
                                  {item.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {idx < NAV_ITEMS.length - 1 && <div className="border-t border-white/[0.05]" />}
                  </div>
                );
              })}

              <div className="pt-2 mt-1 border-t border-white/[0.05]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 text-center text-white font-bold rounded-xl text-sm transition-all"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}cc, #7c3aed)`, boxShadow: `0 6px 24px ${ACCENT}35` }}
                >
                  Start a Project <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}