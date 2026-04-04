"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Digital Marketing",   href: "/services/digital-marketing" },
  { label: "Software Development",href: "/services/software-development" },
  { label: "App Development",     href: "/services/app-development" },
  { label: "UI/UX Design",        href: "/services/ui-ux-design" },
  { label: "AI Automation & Chatbots", href: "/services/ai-automation" },
];

const pages = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Work",    href: "/work" },
  { label: "Blog",    href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/devntom.solutions",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/devntomsolutions",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/devntom",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/devntom",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/devntom",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "https://reddit.com/u/devntom",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/devntom",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.751 0z"/>
      </svg>
    ),
  },
];

// ─── Live Clock ───────────────────────────────────────────────────────────────
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-black text-white">{time}</span>;
}

// ─── Animated Red Blob (canvas) ───────────────────────────────────────────────
function RedBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);

  useAnimationFrame((_, delta) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    tRef.current += delta * 0.00035;
    const t = tRef.current;
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const blobs = [
      { x: 0.64 + 0.09 * Math.sin(t * 1.1), y: 0.42 + 0.13 * Math.cos(t * 0.7), r: 0.40, a: 0.80 },
      { x: 0.76 + 0.06 * Math.cos(t * 0.9), y: 0.58 + 0.10 * Math.sin(t * 1.4), r: 0.28, a: 0.55 },
      { x: 0.52 + 0.11 * Math.sin(t * 0.6), y: 0.30 + 0.09 * Math.cos(t * 1.6), r: 0.22, a: 0.42 },
      { x: 0.82 + 0.05 * Math.sin(t * 1.3), y: 0.70 + 0.07 * Math.cos(t * 0.8), r: 0.18, a: 0.35 },
    ];

    for (const b of blobs) {
      const gx = b.x * W;
      const gy = b.y * H;
      const gr = b.r * Math.max(W, H);
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      grad.addColorStop(0, `rgba(220,28,18,${b.a})`);
      grad.addColorStop(0.35, `rgba(180,12,8,${b.a * 0.5})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={1600}
      height={900}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ objectFit: "cover" }}
    />
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative bg-[#080808] overflow-hidden font-sans">
      <RedBlob />

      {/* ── Top social/email bar ─────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12.5px] font-semibold text-white/40 hover:text-white transition-colors duration-200"
              >
                <span className="text-white/30">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:devntomsolutions@gmail.com"
            className="text-[12.5px] font-semibold text-white/40 hover:text-white transition-colors duration-200 tracking-tight"
          >
            devntomsolutions@gmail.com
          </a>
        </div>
      </div>

      {/* ── Main content grid ────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="max-w-[1400px] mx-auto px-8 py-14 grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-8">

          {/* Col 1: Brand + nav + tagline */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            {/* Logo */}
            <div className="flex items-center gap-1.5">
              <span className="text-[1.15rem] font-black text-white tracking-tight">DEVNTOM</span>
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500 mb-3.5" />
            </div>

            {/* Stacked nav */}
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    href={link.href}
                    className={`block text-[1.45rem] font-bold leading-snug tracking-tight transition-colors duration-200 ${
                      i === 0 ? "text-white" : "text-white/30 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <p className="text-[12px] text-white/25 font-medium leading-relaxed max-w-[200px]">
              Building bold digital products for businesses that want to lead, not follow.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10.5px] font-black tracking-[0.2em] uppercase text-white/25">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[13px] font-semibold text-white/45 hover:text-white transition-colors duration-200 leading-tight"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Pages */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10.5px] font-black tracking-[0.2em] uppercase text-white/25">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[13px] font-semibold text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[10.5px] font-black tracking-[0.2em] uppercase text-white/25">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:devntomsolutions@gmail.com"
                  className="flex items-start gap-2.5 group"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0 text-violet-500" />
                  <span className="text-[12.5px] font-semibold text-white/45 group-hover:text-white transition-colors leading-snug">
                    devntomsolutions@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923256036838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group"
                >
                  <Phone size={13} className="mt-0.5 flex-shrink-0 text-violet-500" />
                  <span className="text-[12.5px] font-semibold text-white/45 group-hover:text-white transition-colors leading-snug">
                    +92 325 603 6838
                    <br />
                    <span className="text-white/25 font-medium">WhatsApp & Phone</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-violet-500" />
                <span className="text-[12.5px] font-semibold text-white/45 leading-snug">
                  Lahore, Pakistan
                </span>
              </li>
            </ul>

            {/* Social icon grid */}
            <div className="flex flex-wrap gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-violet-500 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Giant "Get in Touch" headline ─────────────────────────────────────── */}
      <div className="relative z-10 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4.5rem,13.5vw,13.5rem)] font-black text-white leading-[0.85] tracking-[-0.03em] px-6 pt-8 pb-3 whitespace-nowrap"
        >
          Get in Touch
        </motion.h2>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <p className="text-[11.5px] text-white/25 font-medium">
            Devntom Solutions © {new Date().getFullYear()}
          </p>
          <Link href="/privacy" className="text-[11.5px] text-white/20 hover:text-white/50 transition-colors font-medium">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[11.5px] text-white/20 hover:text-white/50 transition-colors font-medium">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center gap-1.5 text-[11.5px] text-white/25 font-medium">
          <span>Lahore &nbsp;</span>
          <LiveClock />
        </div>
      </div>
    </footer>
  );
}