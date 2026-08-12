"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  { label: "Web Development",         href: "/services/web-development" },
  { label: "Web Apps & SaaS",         href: "/services/web-apps-saas" },
  { label: "Digital Marketing & SEO", href: "/services/digital-marketing-seo" },
  { label: "E-commerce Solutions",    href: "/services/ecommerce-solutions" },
  { label: "Custom Software",         href: "/services/custom-software" },
  { label: "App Development",         href: "/services/app-development" },
  { label: "AI Automation",           href: "/services/ai-automation" },
  { label: "UI/UX Design",            href: "/services/ui-ux-design" },
];

const PRODUCTS = [
  { label: "CRM System",           href: "/products#crm" },
  { label: "ERP Platform",         href: "/products#erp" },
  { label: "POS System",           href: "/products#pos" },
  { label: "Inventory Management", href: "/products#inventory" },
  { label: "HR & Payroll",         href: "/products#hrms" },
  { label: "BI Dashboard",         href: "/products#dashboard" },
  { label: "Logistics System",     href: "/products#logistics" },
  { label: "Booking Platform",     href: "/products#booking" },
];

const COMPANY = [
  { label: "About Us",   href: "/about" },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "Blog",       href: "/blog" },
  { label: "Industries", href: "/industries" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
];

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact",   href: "/contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/devntom.solutions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18ANCC7uwH/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devntom-solutions-6b15293b5",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/DevntomS18433",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

// ─── LIVE CLOCK ───────────────────────────────────────────────────────────────

function LiveClock() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-bold text-white tabular-nums inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 min-w-[92px] justify-center">
      <Globe size={12} className="text-blue-400" />
      {time || "--:--:-- --"}
    </span>
  );
}

// ─── ANIMATED BLUE/OCEAN BLOB ─────────────────────────────────────────────────

function BlueOceanBlob({ reduceMotion }: { reduceMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);
  const drewStaticFrame = useRef(false);

  useAnimationFrame((_, delta) => {
    if (reduceMotion && drewStaticFrame.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!reduceMotion) tRef.current += delta * 0.00025;
    const t = tRef.current;
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Deep Blue, Sky Blue, and Cyan palettes
    const blobs = [
      { x: 0.72 + 0.08 * Math.sin(t * 1.0), y: 0.38 + 0.12 * Math.cos(t * 0.7), r: 0.45, a: 0.45, c: "37,99,235" },   // Royal Blue
      { x: 0.82 + 0.05 * Math.cos(t * 0.9), y: 0.55 + 0.09 * Math.sin(t * 1.3), r: 0.35, a: 0.35, c: "14,165,233" },  // Sky Blue
      { x: 0.60 + 0.10 * Math.sin(t * 0.6), y: 0.28 + 0.08 * Math.cos(t * 1.5), r: 0.30, a: 0.30, c: "29,78,216" },   // Deep Blue
      { x: 0.88 + 0.04 * Math.sin(t * 1.2), y: 0.68 + 0.06 * Math.cos(t * 0.8), r: 0.25, a: 0.20, c: "6,182,212" },   // Cyan accent
    ];

    for (const b of blobs) {
      const gx = b.x * W;
      const gy = b.y * H;
      const gr = b.r * Math.max(W, H);
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      grad.addColorStop(0, `rgba(${b.c},${b.a})`);
      grad.addColorStop(0.5, `rgba(${b.c},${b.a * 0.3})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    if (reduceMotion) drewStaticFrame.current = true;
  });

  return (
    <canvas
      ref={canvasRef}
      width={1600}
      height={900}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ objectFit: "cover" }}
    />
  );
}

// ─── FOOTER COMPONENT ─────────────────────────────────────────────────────────

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative bg-[#030712] overflow-hidden font-sans border-t border-white/5">
      <BlueOceanBlob reduceMotion={!!reduceMotion} />

      {/* ── Social / Email Top Bar ── */}
      <div className="relative z-10 border-b border-white/[0.06] bg-black/20 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3.5 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 focus-visible:text-blue-400 transition-colors duration-300 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
              >
                <span className="text-slate-500 group-hover:text-blue-400 transition-colors">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:Info@Devntomsolutions@gmail.com"
            className="text-xs font-semibold text-slate-400 hover:text-blue-400 focus-visible:text-blue-400 transition-colors tracking-tight rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
          >
            Info@Devntomsolutions@gmail.com
          </a>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12">
          
          {/* Col 1: Brand & Nav */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2 w-fit rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]">
              <span className="text-lg font-black tracking-tighter text-white">
                DEVNTOM
              </span>
              <span className="text-lg font-black tracking-tighter text-white">
                SOLUTIONS<span className="text-blue-500">.</span>
              </span>
            </Link>

            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -10 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-2xl font-black leading-snug tracking-tight transition-all duration-300 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] ${
                        i === 0 ? "text-slate-600" : "text-slate-600 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[240px]">
              Engineering high-performance software and bold digital ecosystems for modern enterprises.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-500">Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors leading-tight rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-500">Products</h4>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors leading-tight rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-500">Company</h4>
            <ul className="flex flex-col gap-3">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-6">
            <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-500">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="mailto:Info@Devntomsolutions@gmail.com"
                  className="flex items-start gap-3 group rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-fit"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors leading-snug break-all">
                    Info@Devntomsolutions@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923256036838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-fit"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors leading-snug">
                    +92 325 6036838
                    <br />
                    <span className="text-slate-600 text-xs font-semibold">WhatsApp &amp; PK</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+966583408034"
                  className="flex items-start gap-3 group rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-fit"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors leading-snug">
                    +966 583 408034
                    <br />
                    <span className="text-slate-600 text-xs font-semibold">Saudi Arabia</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-500" />
                <span className="text-sm font-medium text-slate-400 leading-snug">
                  Lahore, Pakistan &amp;
                  <br />
                  Riyadh, Saudi Arabia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Giant "Devntom Solutions" Text ── */}
      <div className="relative z-10 overflow-hidden pt-12 pb-6">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,8.5vw,12rem)] font-black leading-[0.8] tracking-[-0.03em] px-6 lg:px-10 whitespace-normal sm:whitespace-nowrap break-words text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-800"
        >
          Devntom Solutions.
        </motion.h2>
      </div>

      {/* ── CTA Row ── */}
      <div className="relative z-10 px-6 lg:px-10 pb-12">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center  gap-4">
          <a
            href="mailto:Info@Devntomsolutions@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-white transition-all hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] shadow-xl shadow-blue-900/30"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            }}
          >
            Start a Project <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/923256036838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <p className="text-xs text-slate-500 font-semibold">
              DEVNTOM Solutions © {new Date().getFullYear()}
            </p>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <Link href="/privacy-policy" className="text-xs text-slate-400 hover:text-white transition-colors font-semibold rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-slate-400 hover:text-white transition-colors font-semibold rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
            <span>Local Time &rarr;</span>
            <LiveClock />
          </div>
        </div>
      </div>
    </footer>
  );
}