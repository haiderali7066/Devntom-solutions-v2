"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Megaphone, Code2, Smartphone, Palette, Bot, ChevronRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name: "Website Development",
    href: "/services/website-development",
    icon: Globe,
    short: "Custom websites, CMS, SaaS & web apps",
    desc: "We build fast, scalable websites and web applications — from landing pages and CMS-powered sites to full SaaS platforms and web apps tailored to your business.",
    tags: ["Custom Websites", "CMS / WordPress", "Web Apps", "SaaS", "E-Commerce"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    icon: Megaphone,
    short: "SEO, ads, social media & content",
    desc: "Results-driven digital marketing — Google & Meta ads, SEO strategies, content creation, and full social media management to grow your brand and fill your pipeline.",
    tags: ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content Strategy"],
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Software Development",
    href: "/services/software-development",
    icon: Code2,
    short: "ERP, CRM, enterprise & custom systems",
    desc: "Enterprise-grade custom software built to last — ERP systems, CRMs, internal tools, workflow automation platforms, and complex business logic engineered for scale.",
    tags: ["ERP Systems", "CRM", "Internal Tools", "Automation", "APIs"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "App Development",
    href: "/services/app-development",
    icon: Smartphone,
    short: "iOS, Android & cross-platform apps",
    desc: "From MVPs to fully-featured consumer and enterprise apps — we design and build native iOS, Android, and cross-platform mobile applications that users love.",
    tags: ["iOS", "Android", "React Native", "Flutter", "MVP"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "UI/UX Design",
    href: "/services/uiux-design",
    icon: Palette,
    short: "Research, wireframes & pixel-perfect UI",
    desc: "User research, wireframing, prototyping, and pixel-perfect design systems that make your product intuitive, beautiful, and unforgettable — on every screen.",
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Figma"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "AI Automation & Chatbots",
    href: "/services/ai-automation",
    icon: Bot,
    short: "Intelligent chatbots & workflow automation",
    desc: "Automate repetitive work and enhance customer experience with AI-powered chatbots, smart workflow engines, and LLM integrations that run 24/7 without breaking a sweat.",
    tags: ["AI Chatbots", "Workflow Automation", "OpenAI", "n8n / Make", "LLM Integration"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80",
  },
];

const NAV_LINKS = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "contact",     href: "/contact" },
  { label: "About",    href: "/about" },
  { label: "Blog",     href: "/blog" },
];

const ACCENT = "#0ea5e9"; // sky-500

// ─── Mega Menu ────────────────────────────────────────────────────────────────
function MegaMenu({ onClose }: { onClose: () => void }) {
  const [hovered, setHovered] = useState(0);
  const active = SERVICES[hovered];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[min(96vw,1100px)] overflow-hidden rounded-3xl z-50"
      style={{
        background: "rgba(10,10,14,0.75)",
        backdropFilter: "blur(48px) saturate(180%)",
        WebkitBackdropFilter: "blur(48px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(14,165,233,0.06), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      <div className="grid grid-cols-[1fr_420px]">

        {/* LEFT — service list ─────────────────────────────────────────────── */}
        <div className="py-4 px-3 border-r border-white/[0.05]">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/25 px-4 mb-3 pt-2">
            Our Services
          </p>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            const isActive = hovered === i;
            return (
              <Link
                key={svc.name}
                href={svc.href}
                onClick={onClose}
                onMouseEnter={() => setHovered(i)}
                className="group relative flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-200"
              >
                {/* Active bg */}
                {isActive && (
                  <motion.div
                    layoutId="svc-pill"
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "rgba(14,165,233,0.10)",
                      border: "1px solid rgba(14,165,233,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <div
                  className="relative z-10 flex items-center justify-center flex-shrink-0 transition-all duration-200 w-9 h-9 rounded-xl"
                  style={{
                    background: isActive ? "rgba(14,165,233,0.18)" : "rgba(255,255,255,0.04)",
                    border: isActive ? "1px solid rgba(14,165,233,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon size={15} style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.35)" }} />
                </div>

                {/* Text */}
                <div className="relative z-10 min-w-0">
                  <p className={`text-sm font-bold leading-none mb-1 transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                    {svc.name}
                  </p>
                  <p className="text-[11px] text-white/30 truncate">{svc.short}</p>
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={13}
                  className={`ml-auto flex-shrink-0 relative z-10 transition-all duration-200 ${isActive ? "text-sky-400 translate-x-0.5" : "text-white/15"}`}
                />
              </Link>
            );
          })}

          {/* All services CTA */}
          <div className="px-4 pt-3 pb-2 border-t border-white/[0.05] mt-2">
            <Link
              href="/services"
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-bold transition-colors text-sky-400/70 hover:text-sky-400 group"
            >
              View all services
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT — dynamic preview ─────────────────────────────────────────── */}
        <div className="relative flex flex-col overflow-hidden">
          {/* Image with crossfade */}
          <div className="relative flex-shrink-0 overflow-hidden h-52">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.img}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.img}
                  alt={active.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[rgba(10,10,14,0.95)]" />
              </motion.div>
            </AnimatePresence>

            {/* Icon badge over image */}
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

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4 px-6 pt-5 pb-6"
            >
              <p className="text-[13px] text-white/50 leading-relaxed">{active.desc}</p>

              {/* Tags */}
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

              {/* CTA */}
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
    </motion.div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current && !megaRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-0 mx-auto md:top-4 md:px-6 max-w-7xl"
    >
      <div
        className="relative flex items-center justify-between h-16 px-5 mx-auto transition-all duration-500 md:px-6 md:rounded-full"
        style={{
          background: scrolled ? "rgba(10,10,14,0.55)" : "transparent",
          backdropFilter: scrolled ? "blur(48px) saturate(200%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(48px) saturate(200%)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 40px -8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 0 1px rgba(14,165,233,0.05)" : "none",
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
          <span className="text-base font-black tracking-tight text-white">DEVNTOM SOLUTIONS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="relative items-center hidden gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.hasMega ? (
              <div key={link.label} ref={triggerRef} className="relative">
                <button
                  onMouseEnter={() => { setHoveredLink(link.label); setMegaOpen(true); }}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setMegaOpen((p) => !p)}
                  className="relative flex items-center gap-1 px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full cursor-pointer"
                >
                  <span className={`relative z-10 transition-colors duration-200 ${megaOpen || hoveredLink === link.label ? "text-white" : "text-white/55 hover:text-white/80"}`}>
                    {link.label}
                  </span>
                  <motion.svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    animate={{ rotate: megaOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`relative z-10 transition-colors duration-200 ${megaOpen ? "text-sky-400" : "text-white/30"}`}
                  >
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </motion.svg>
                  {(megaOpen || hoveredLink === link.label) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.05)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full"
              >
                <span className={`relative z-10 transition-colors duration-200 ${hoveredLink === link.label ? "text-white" : "text-white/55 hover:text-white/80"}`}>
                  {link.label}
                </span>
                {hoveredLink === link.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.05)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          )}
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
            <div
              className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 duration-400"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
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

        {/* Mega Menu (desktop) */}
        <AnimatePresence>
          {megaOpen && (
            <div
              ref={megaRef}
              onMouseLeave={() => { setMegaOpen(false); setHoveredLink(null); }}
              onMouseEnter={() => setMegaOpen(true)}
              className="absolute left-0 right-0 pt-0 top-full"
              style={{ zIndex: 60 }}
            >
              <MegaMenu onClose={() => setMegaOpen(false)} />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
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
              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((p) => !p)}
                  className="flex items-center justify-between w-full px-2 py-3 text-base font-semibold transition-colors text-white/70 hover:text-white"
                >
                  Services
                  <motion.svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pb-2 flex flex-col gap-0.5">
                        {SERVICES.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/55 hover:text-white hover:bg-white/[0.04] transition-all text-sm font-medium"
                            >
                              <Icon size={14} className="flex-shrink-0 text-sky-400/60" />
                              {svc.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-white/[0.05]" />

              {NAV_LINKS.filter((l) => !l.hasMega).map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-3 text-base font-semibold transition-colors text-white/70 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-2 mt-1 border-t border-white/[0.05]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-sky-500 flex items-center justify-center gap-2 py-3.5 text-center text-white font-bold rounded-xl text-sm transition-all"
                  style={{
                    boxShadow: `0 6px 24px ${ACCENT}35`,
                  }}
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