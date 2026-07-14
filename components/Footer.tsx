"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/devntomsolutions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/Civil_Woodpecker7536/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@devntomsolutions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/32455629/devntom-solutions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.751 0z" />
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
  // Reserve width so the layout doesn't jump once the client-side time mounts.
  return (
    <span className="font-black text-white tabular-nums inline-block min-w-[92px] text-right sm:text-left">
      {time || "--:--:-- --"}
    </span>
  );
}

// ─── ANIMATED VIOLET/SKY BLOB ─────────────────────────────────────────────────

function VioletBlob({ reduceMotion }: { reduceMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);
  const drewStaticFrame = useRef(false);

  useAnimationFrame((_, delta) => {
    if (reduceMotion && drewStaticFrame.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!reduceMotion) tRef.current += delta * 0.0003;
    const t = tRef.current;
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const blobs = [
      { x: 0.72 + 0.08 * Math.sin(t * 1.0), y: 0.38 + 0.12 * Math.cos(t * 0.7), r: 0.42, a: 0.55, c: "124,58,237" }, // violet
      { x: 0.82 + 0.05 * Math.cos(t * 0.9), y: 0.55 + 0.09 * Math.sin(t * 1.3), r: 0.3, a: 0.4, c: "14,165,233" }, // sky
      { x: 0.6 + 0.1 * Math.sin(t * 0.6), y: 0.28 + 0.08 * Math.cos(t * 1.5), r: 0.24, a: 0.3, c: "99,102,241" }, // indigo
      { x: 0.88 + 0.04 * Math.sin(t * 1.2), y: 0.68 + 0.06 * Math.cos(t * 0.8), r: 0.18, a: 0.25, c: "14,165,233" }, // sky accent
    ];

    for (const b of blobs) {
      const gx = b.x * W;
      const gy = b.y * H;
      const gr = b.r * Math.max(W, H);
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      grad.addColorStop(0, `rgba(${b.c},${b.a})`);
      grad.addColorStop(0.4, `rgba(${b.c},${b.a * 0.45})`);
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

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative bg-[#080810] overflow-hidden font-sans">
      <VioletBlob reduceMotion={!!reduceMotion} />

      {/* ── Social / email top bar ── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-wrap items-center justify-center sm:justify-between gap-x-5 gap-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-semibold text-white/35 hover:text-white focus-visible:text-white transition-colors duration-200 rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
              >
                <span className="text-white/25">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:devntomsolutions@gmail.com"
            className="text-[12px] font-semibold text-white/35 hover:text-white focus-visible:text-white transition-colors tracking-tight rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
          >
            devntomsolutions@gmail.com
          </a>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-x-6 gap-y-10 sm:gap-8">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-7">
            {/* Logo */}
            <Link href="/logosign.PNG" className="flex items-center gap-2 group w-fit rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]">
              
              <span className="text-base font-black tracking-tight text-white">
                DEVNTOM
              </span><span className="text-base font-black tracking-tight text-white">
                SOLUTIONS<span className="text-sky-400">.</span>
              </span>
            </Link>

            {/* Stacked nav links */}
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -10 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-[1.4rem] font-bold leading-snug tracking-tight transition-colors duration-200 rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
                        i === 0 ? "text-white" : "text-white/25 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <p className="text-[11.5px] text-white/20 font-medium leading-relaxed max-w-[220px]">
              Building bold digital products for businesses that want to lead, not follow.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[12.5px] font-semibold text-white/40 hover:text-white transition-colors leading-tight rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25">Products</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[12.5px] font-semibold text-white/40 hover:text-white transition-colors leading-tight rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[12.5px] font-semibold text-white/40 hover:text-white transition-colors rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-5">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:devntomsolutions@gmail.com"
                  className="flex items-start gap-2.5 group rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 w-fit"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0 text-sky-500" />
                  <span className="text-[12px] font-semibold text-white/40 group-hover:text-white transition-colors leading-snug break-all">
                    devntomsolutions@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923256036838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 w-fit"
                >
                  <Phone size={13} className="mt-0.5 flex-shrink-0 text-sky-500" />
                  <span className="text-[12px] font-semibold text-white/40 group-hover:text-white transition-colors leading-snug">
                    +92 325 6036838
                    <br />
                    <span className="text-white/20 font-medium">WhatsApp &amp; PK</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+966583408034"
                  className="flex items-start gap-2.5 group rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400 w-fit"
                >
                  <Phone size={13} className="mt-0.5 flex-shrink-0 text-sky-500" />
                  <span className="text-[12px] font-semibold text-white/40 group-hover:text-white transition-colors leading-snug">
                    +966 583 408034
                    <br />
                    <span className="text-white/20 font-medium">Saudi Arabia</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-sky-500" />
                <span className="text-[12px] font-semibold text-white/40 leading-snug">
                  Lahore, Pakistan &amp;
                  <br />
                  Saudi Arabia
                </span>
              </li>
            </ul>

            {/* Social icon grid */}
            <div className="flex flex-wrap gap-2 mt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Giant "Get in Touch" ── */}
      <div className="relative z-10 overflow-hidden">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 60 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.25rem,9vw,11rem)] font-black text-white leading-[0.9] sm:leading-[0.85] tracking-[-0.02em] sm:tracking-[-0.03em] px-4 sm:px-6 lg:px-10 pt-8 pb-3 whitespace-normal sm:whitespace-nowrap break-words"
        >
          Devntom Solutions
        </motion.h2>
      </div>

      {/* ── CTA row ── */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 pb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="mailto:devntomsolutions@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.03] outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
            style={{
              background: "linear-gradient(135deg, rgba(14,165,233,0.8), rgba(124,58,237,0.8))",
              boxShadow: "0 6px 24px rgba(14,165,233,0.25)",
            }}
          >
            Email Us <ArrowRight size={13} />
          </a>
          <a
            href="https://wa.me/923256036838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition-all outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/[0.05] text-center sm:text-left">
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
          <p className="text-[11px] text-white/20 font-medium">DEVNTOM Solutions © {new Date().getFullYear()}</p>
          <Link href="/privacy-policy" className="text-[11px] text-white/15 hover:text-white/40 transition-colors font-medium rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-[11px] text-white/15 hover:text-white/40 transition-colors font-medium rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-white/20 font-medium">
          <span>Lahore, Pakistan&nbsp;</span>
          <LiveClock />
        </div>
      </div>
    </footer>
  );
}