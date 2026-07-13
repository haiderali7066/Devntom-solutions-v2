"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe, Megaphone, Code2, Smartphone, Palette, Bot,
  ArrowRight, Mail, Phone, MessageCircle, Instagram,
  Facebook, Linkedin, Twitter, MapPin,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const ACCENT = "#0ea5e9";

// Updated with your precise internal service routes
const SERVICES = [
  { icon: Globe,      name: "Website Development",       href: "/services/website-development" },
  { icon: Megaphone,  name: "Digital Marketing",         href: "/services/digital-marketing" },
  { icon: Code2,      name: "Software Development",      href: "/services/software-development" },
  { icon: Smartphone, name: "App Development",           href: "/services/app-development" },
  { icon: Palette,    name: "UI/UX Design",              href: "/services/uiux-design" },
  { icon: Bot,        name: "AI Automation",             href: "/services/ai-automation" },
];

const VALUES = [
  { num: "01", title: "Systems Thinking",   desc: "We don't just build features — we architect systems that scale, adapt, and compound value over time." },
  { num: "02", title: "Radical Clarity",    desc: "No jargon, no smoke and mirrors. You always know what we're building, why, and what it will do for your business." },
  { num: "03", title: "Craft Over Clutter", desc: "We believe less, done exceptionally well, beats more done mediocrely. Every pixel, every function earns its place." },
  { num: "04", title: "Partnership First",  desc: "We're not a vendor. We're the technical co-founder you didn't know you needed — invested in your outcomes." },
];

const STATS = [
  { value: "50+",  label: "Projects Shipped" },
  { value: "30+",  label: "Clients Worldwide" },
  { value: "6",    label: "Core Disciplines" },
  { value: "100%", label: "Remote-Ready" },
];

// Updated to map all your provided social networks and activate the live tags
const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/devntom.solutions", handle: "@devntom.solutions", live: true },
  { icon: Facebook,  label: "Facebook",  href: "https://www.facebook.com/share/18ANCC7uwH/", handle: "DevnTom Solutions", live: true },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/devntom-solutions-6b15293b5", handle: "DevnTom Solutions", live: true },
  { icon: Twitter,   label: "X / Twitter", href: "https://x.com/DevntomS18433", handle: "@DevntomS18433", live: true },
  {
    label: "Pinterest", href: "https://www.pinterest.com/devntomsolutions", handle: "@devntomsolutions", live: true,
    icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "Reddit", href: "https://www.reddit.com/user/Civil_Woodpecker7536/", handle: "u/Civil_Woodpecker", live: true,
    icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
  {
    label: "Medium", href: "https://medium.com/@devntomsolutions", handle: "@devntomsolutions", live: true,
    icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  {
    label: "Stack Overflow", href: "https://stackoverflow.com/users/32455629/devntom-solutions", handle: "devntom-solutions", live: true,
    icon: () => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.751 0z"/>
      </svg>
    ),
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
});

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <main className="bg-[#0a0a0e] font-sans overflow-hidden">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
          {/* Parallax BG */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&auto=format&fit=crop&q=80"
              className="w-full h-full object-cover opacity-15"
              alt="DEVNTOM Solutions Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0e]/50 via-[#0a0a0e]/20 to-[#0a0a0e]" />
          </motion.div>

          {/* Glows */}
          <div className="absolute top-32 left-1/3 w-[700px] h-[500px] rounded-full bg-sky-500/[0.07] blur-[140px] pointer-events-none" />
          <div className="absolute top-48 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-700/[0.08] blur-[120px] pointer-events-none" />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6 pt-44 pb-24 w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-bold text-sky-300 tracking-wide">About DEVNTOM Solutions</span>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
              {/* Headline */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.6 }}
                  className="text-sm font-black tracking-[0.3em] uppercase text-white/20 mb-5"
                >
                  Where Systems Become Strategy
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-[clamp(3.2rem,9vw,8.5rem)] font-black text-white leading-[0.88] tracking-[-0.04em]"
                >
                  Architecting<br />
                  the Future<br />
                  <span style={{ color: ACCENT }}>of Business</span>
                </motion.h1>
              </div>

              {/* Right side tagline + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.55 }}
                className="flex flex-col gap-6 max-w-[300px] lg:pb-4"
              >
                <p className="text-sm text-white/35 leading-relaxed">
                  A modern technology company building scalable software, automation systems, and digital platforms that transform how businesses operate and grow.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white self-start group transition-all hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}cc, #7c3aed)`, boxShadow: `0 8px 28px ${ACCENT}28` }}
                >
                  Work With Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-10 mt-20 pt-10 border-t border-white/[0.05]"
            >
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-white/30 font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── WHO WE ARE ───────────────────────────────────────────────────── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* Left: text */}
            <div className="space-y-7">
              <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                <span className="text-xs font-bold text-white/35 tracking-wide">Who We Are</span>
              </motion.div>

              <motion.h2 {...fadeUp(0.08)} className="text-[clamp(2rem,4vw,3.4rem)] font-black text-white leading-[1.05] tracking-tight">
                We Build Digital<br />Infrastructure<br />
                <span className="text-white/25">For Ambitious Teams</span>
              </motion.h2>

              <motion.div {...fadeUp(0.14)} className="space-y-5 text-[0.95rem] text-white/45 leading-relaxed">
                <p>
                  DEVNTOM Solutions is a modern technology company focused on building scalable software, automation systems, and digital platforms that transform how businesses operate and grow.
                </p>
                <p>
                  We work at the intersection of design, engineering, and strategy — combining technical depth with creative clarity to deliver digital products that are fast, purposeful, and built to last.
                </p>
                <p>
                  From early-stage startups shipping their first product to established companies modernising legacy systems, we bring the same obsessive attention to craft and measurable outcomes.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
                <Link href="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
                  style={{ background: `${ACCENT}20`, border: `1px solid ${ACCENT}35` }}>
                  Our Services <ArrowRight size={13} />
                </Link>
                <Link href="/work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white/50 border border-white/10 hover:border-white/25 hover:text-white transition-all">
                  See Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right: image collage */}
            <motion.div {...fadeUp(0.12)} className="relative h-[520px]">
              <div className="absolute top-0 right-0 w-[72%] h-[58%] rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="DEVNTOM Team" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0a0a0e]/60" />
              </div>
              <div className="absolute bottom-0 left-0 w-[62%] h-[52%] rounded-2xl overflow-hidden border border-white/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="DEVNTOM Work" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#0a0a0e]/50" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-[46%] right-[22%] translate-x-1/2 translate-y-1/2 px-5 py-3 rounded-2xl z-10"
                style={{ background: "rgba(10,10,14,0.85)", border: "1px solid rgba(14,165,233,0.25)", backdropFilter: "blur(16px)" }}>
                <p className="text-2xl font-black" style={{ color: ACCENT }}>50+</p>
                <p className="text-[10px] font-bold text-white/40">Projects Shipped</p>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 70% 30%, ${ACCENT}0a, transparent 60%)` }} />
            </motion.div>
          </div>
        </section>

        {/* ── TAGLINE BREAK ─────────────────────────────────────────────────── */}
        <section className="py-6 px-6 overflow-hidden border-y border-white/[0.04]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 24, ease: "linear" }}
            className="flex items-center gap-12 w-max"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 flex-shrink-0">
                <span className="text-[1.1rem] font-black text-white/[0.06] tracking-[0.1em] uppercase whitespace-nowrap">Where Systems Become Strategy</span>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT, opacity: 0.3 }} />
                <span className="text-[1.1rem] font-black text-white/[0.06] tracking-[0.1em] uppercase whitespace-nowrap">Architecting the Future of Business</span>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#7c3aed", opacity: 0.3 }} />
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────────────────── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
              <motion.div {...fadeUp()} className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span className="text-xs font-bold text-sky-300 tracking-wide">Our Principles</span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-white tracking-tight leading-none">
                  What We<br /><span className="text-white/25">Stand For</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp(0.1)} className="text-sm text-white/35 max-w-xs leading-relaxed lg:text-right lg:mt-2">
                Four principles that shape every project, every decision, and every line of code we write.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {VALUES.map((v, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.07 * i)}
                  whileHover={{ y: -8 }}
                  className="relative p-8 rounded-3xl border border-white/[0.05] bg-white/[0.02] hover:border-sky-500/20 hover:bg-sky-500/[0.03] transition-all group"
                >
                  <div className="text-[3.8rem] font-black text-white/[0.04] group-hover:text-white/[0.07] transition-colors leading-none mb-5 select-none">
                    {v.num}
                  </div>
                  <h3 className="font-black text-white mb-3 text-base">{v.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.07),transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <motion.div {...fadeUp()} className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span className="text-xs font-bold text-violet-300 tracking-wide">What We Do</span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-white tracking-tight leading-none">
                  Our Services
                </h2>
              </motion.div>
              <motion.div {...fadeUp(0.1)}>
                <Link href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                  style={{ color: ACCENT }}>
                  View all services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((svc, i) => {
                const Icon = svc.icon;
                const colors = ["#0ea5e9", "#f59e0b", "#8b5cf6", "#ec4899", "#10b981", "#f97316"];
                const color = colors[i];
                return (
                  <Link href={svc.href} key={i} passHref legacyBehavior>
                    <motion.a
                      {...fadeUp(0.07 * i)}
                      whileHover={{ y: -6 }}
                      className="group flex items-center justify-between p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                          style={{ background: `${color}15`, border: `1px solid ${color}28` }}
                        >
                          <Icon size={19} style={{ color }} />
                        </div>
                        <p className="font-bold text-white/70 text-sm group-hover:text-white transition-colors leading-snug">
                          {svc.name}
                        </p>
                      </div>
                      <ArrowRight size={14} className="text-white/15 group-hover:text-white/50 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                    </motion.a>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LOCATION + CONTACT ────────────────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

            {/* Contact */}
            <div className="space-y-6">
              <motion.div {...fadeUp()} className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                  <span className="text-xs font-bold text-white/35 tracking-wide">Get In Touch</span>
                </div>
                <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-black text-white tracking-tight leading-tight">
                  Let&apos;s Build<br />Something Great
                </h2>
                <p className="text-sm text-white/35 leading-relaxed max-w-sm">
                  Have a project in mind? Want to explore how we can help? Reach out — we respond within 24 hours.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="flex flex-col gap-3">
                <a href="mailto:devntomsolutions@gmail.com"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-sky-500/30 hover:bg-sky-500/[0.04] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center flex-shrink-0">
                    <Mail size={17} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-0.5">Email</p>
                    <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">devntomsolutions@gmail.com</p>
                  </div>
                  <ArrowRight size={13} className="ml-auto text-white/15 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-green-500/30 hover:bg-green-500/[0.04] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={17} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-0.5">WhatsApp / Phone</p>
                    <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">+92 325 603 6838</p>
                  </div>
                  <ArrowRight size={13} className="ml-auto text-white/15 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-0.5">Location</p>
                    <p className="text-sm font-bold text-white/70">Lahore, Pakistan · Remote-First</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <motion.div {...fadeUp(0.08)} className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                  <span className="text-xs font-bold text-white/35 tracking-wide">Find Us Online</span>
                </div>
                <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-black text-white tracking-tight leading-tight">
                  Follow Our<br />Journey
                </h2>
                <p className="text-sm text-white/35 leading-relaxed max-w-sm">
                  We&apos;re building our presence across every platform. Follow along as we grow.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.14)} className="flex flex-col gap-2.5">
                {SOCIALS.map((s, i) => {
                  const Icon = s.icon as React.ElementType;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.45 }}
                    >
                      {s.live ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-sky-500/25 hover:bg-sky-500/[0.04] transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-all">
                              <Icon />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">{s.label}</p>
                              <p className="text-[11px] text-sky-400/70 font-semibold">{s.handle}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-400/70">Live</span>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center justify-between p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] opacity-40 cursor-not-allowed">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/25">
                              <Icon />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white/40">{s.label}</p>
                              <p className="text-[11px] text-white/20 font-semibold">{s.handle}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-white/20 px-2.5 py-1 rounded-full border border-white/[0.08]">Soon</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeUp()}
              className="relative rounded-[40px] p-10 md:p-16 text-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.07), rgba(124,58,237,0.09))", border: "1px solid rgba(14,165,233,0.10)" }}
            >
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full bg-sky-500/10 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-12 right-1/4 w-60 h-40 rounded-full bg-violet-600/10 blur-[70px] pointer-events-none" />

              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-[1.05] tracking-tight">
                  Ready to Build<br />
                  <span style={{ color: ACCENT }}>Something Remarkable?</span>
                </h2>
                <p className="text-sm text-white/40 leading-relaxed">
                  Whether you have a detailed brief or just an idea scribbled on a napkin — let&apos;s talk. We&apos;ll help you figure out the smartest way to build it.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-105 group"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)`, boxShadow: `0 8px 32px ${ACCENT}28` }}>
                    Start a Project <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white/60 border border-white/10 hover:border-white/25 hover:text-white transition-all">
                    <MessageCircle size={15} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}