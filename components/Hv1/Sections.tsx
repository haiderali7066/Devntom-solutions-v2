"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PP = "'Poppins', sans-serif";
const LA = "'Lato', sans-serif";
const RO = "'Roboto', sans-serif";
const SKY = "#0ea5e9";
const BG_WHITE = "#ffffff";
const BG_OFFWHT = "#f8fafc";
const BG_DARK2 = "#0c1120";
const BG_DARK3 = "#070c18";
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const INDUSTRIES = [
  { icon: "🛍️", name: "E-Commerce" }, { icon: "⚙️", name: "SaaS" },
  { icon: "🏥", name: "Healthcare" }, { icon: "📚", name: "Education" },
  { icon: "💳", name: "FinTech" },    { icon: "🏠", name: "Real Estate" },
  { icon: "🚀", name: "Startups" },   { icon: "🏪", name: "Local Business" },
];

const TESTIMONIALS = [
  { name: "Aram Saffarian",  role: "President, Treaty Health",    img: "https://randomuser.me/api/portraits/men/32.jpg",   text: "Devntom completely transformed our healthcare app. Highly skilled team, clear communication, always on schedule. Our digital presence improved dramatically." },
  { name: "Jeff Moye",       role: "Founder, Moye",               img: "https://randomuser.me/api/portraits/men/45.jpg",   text: "Exceptional work, on time, excellent quality. They've become a trusted long-term engineering partner for our growing business worldwide." },
  { name: "Bill Kilpatrick", role: "CEO, Drive App Suite",        img: "https://randomuser.me/api/portraits/men/56.jpg",   text: "Professional, reliable and highly competent. Executed our platform flawlessly with creative solutions and clear progress updates throughout." },
  { name: "Samantha Lee",    role: "CTO, HealthTech Innovations", img: "https://randomuser.me/api/portraits/women/22.jpg", text: "Innovative, scalable and user-friendly. Their attention to detail makes them the ideal engineering partner for any product team." },
];

const TECH = ["React","Next.js","Node.js","TypeScript","Python","MongoDB","PostgreSQL","AWS","Docker","Tailwind","GraphQL","Redis","Stripe","Firebase"];
const SVC_WORDS = ["Website Development","Digital Marketing","Software Engineering","App Development","UI/UX Design","AI Automation","Cloud Architecture","SEO Strategy"];

const FAQS = [
  { q: "What industries do you work with?",      a: "E-commerce, SaaS, Healthcare, EdTech, FinTech, Real Estate, Startups, and Local Business — shipped across all of them with measurable results." },
  { q: "How long does a typical project take?",  a: "Websites: 4–6 weeks. Mobile apps and custom software: 8–16 weeks. You receive a clear roadmap with milestones before anything begins." },
  { q: "Can you redesign an existing website?",  a: "Absolutely. We audit your current site, identify performance and conversion gaps, and rebuild it while retaining your SEO history." },
  { q: "Do you provide ongoing support?",        a: "Yes. Every project includes post-launch support — from basic maintenance packages to full ongoing engineering retainer plans." },
  { q: "Do you build fully custom software?",    a: "Custom software is a core speciality — ERP, CRM, SaaS platforms, dashboards, internal tools. If you can describe it, we can build it." },
  { q: "How do we get started?",                 a: "Email devntomsolutions@gmail.com or WhatsApp 0325-6036838. We'll schedule a discovery call within 24 hours and send a clear proposal." },
];

function Reveal({ children, delay = 0, y = 40, x = 0 }: {
  children: React.ReactNode; delay?: number; y?: number; x?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.88, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/* ── Industries ── */
export function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      style={{ background: BG_WHITE, padding: "7rem 2rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
          <Reveal x={-28} y={0}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              style={{ display: "inline-flex", alignItems: "center", background: "#dbeafe", color: "#1d4ed8", fontFamily: LA, fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", padding: "5px 16px 5px 14px", borderLeft: `3px solid ${SKY}`, borderRadius: "0 20px 20px 0" }}
            >
              — 07 / Industries
            </motion.span>
            <h2 id="industries-heading" style={{ fontFamily: PP, margin: "20px 0 24px" }}>
              <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "#64748b" }}>Industries we</span>
              <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "#0f172a" }}>understand <span style={{ color: SKY }}>deeply.</span></span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.82, fontFamily: RO, fontWeight: 300, maxWidth: 380 }}>
              From fast-moving startups to regulated healthcare and fintech — each sector requires different architecture, compliance, and UX. We know them all.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: i * 0.06 }}
                whileHover={{ scale: 1.07, y: -5 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "20px 8px", background: BG_OFFWHT, borderBottom: "2px solid transparent", cursor: "default", transition: "background .22s, border-color .22s, box-shadow .22s", borderRadius: 12 }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${SKY}0e`; el.style.borderBottomColor = SKY; el.style.boxShadow = `0 8px 24px ${SKY}1a`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = BG_OFFWHT; el.style.borderBottomColor = "transparent"; el.style.boxShadow = "none"; }}
              >
                <motion.span animate={{ rotate: [0, 6, -6, 0] }} transition={{ duration: 3.2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }} aria-hidden style={{ fontSize: 24, display: "block" }}>{ind.icon}</motion.span>
                <span style={{ color: "#64748b", fontSize: 11, fontFamily: LA, fontWeight: 700, textAlign: "center" }}>{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
export function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="testimonials-heading"
      style={{ padding: "7rem 2rem", background: BG_DARK2, position: "relative", overflow: "hidden" }}
    >
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "58px 58px" }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.22, 1], opacity: [0.44, 0.68, 0.44] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 560, height: 560, background: `radial-gradient(circle,${SKY}0a 0%,transparent 62%)`, filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 56 }}>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              style={{ display: "inline-flex", alignItems: "center", background: "rgba(14,165,233,.16)", color: SKY, fontFamily: LA, fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", padding: "5px 16px 5px 14px", borderLeft: `3px solid ${SKY}`, borderRadius: "0 20px 20px 0" }}
            >
              — 08 / Client Voices
            </motion.span>
            <Reveal y={36} delay={0.1}>
              <h2 id="testimonials-heading" style={{ fontFamily: PP, margin: "20px 0 0" }}>
                <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(1.9rem,3.8vw,3.3rem)", color: "rgba(255,255,255,.5)" }}>Hear from the people</span>
                <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(1.9rem,3.8vw,3.3rem)", color: "white" }}>we <span style={{ color: SKY }}>built for.</span></span>
              </h2>
            </Reveal>
          </div>
          <div style={{ display: "flex", gap: 8 }} role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <motion.button key={i} onClick={() => setActive(i)} role="tab" aria-selected={i === active} aria-label={`View testimonial ${i + 1}`}
                animate={{ width: i === active ? 30 : 8, background: i === active ? SKY : "rgba(255,255,255,.16)" }}
                style={{ height: 8, border: "none", cursor: "pointer", padding: 0, borderRadius: 4 }} />
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.article key={i}
              initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.62, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              onClick={() => setActive(i)}
              aria-label={`Testimonial from ${t.name}, ${t.role}`}
              style={{
                background: i === active ? "rgba(14,165,233,.09)" : "rgba(255,255,255,.03)",
                backdropFilter: "blur(22px) saturate(180%)", WebkitBackdropFilter: "blur(22px) saturate(180%)",
                border: i === active ? "1px solid rgba(14,165,233,.38)" : "1px solid rgba(255,255,255,.07)",
                boxShadow: i === active ? "0 10px 54px rgba(14,165,233,.2),inset 0 1px 0 rgba(255,255,255,.1)" : "0 4px 26px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.05)",
                padding: "26px", cursor: "pointer", position: "relative", transition: "all .35s", borderRadius: 18,
              }}
            >
              <div aria-hidden style={{ position: "absolute", top: 0, left: 16, right: 16, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent)", borderRadius: 1 }} />
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }} aria-label="5 stars">
                {[...Array(5)].map((_, si) => (
                  <motion.svg key={si} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden
                    animate={i === active ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ delay: si * 0.08, duration: 0.3 }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </motion.svg>
                ))}
              </div>
              <blockquote style={{ color: "rgba(255,255,255,.58)", fontSize: 13, lineHeight: 1.75, fontFamily: RO, fontWeight: 300, marginBottom: 20 }}>
                "{t.text}"
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.07)" }}>
                <img src={t.img} alt={t.name} width={38} height={38} loading="lazy" style={{ width: 38, height: 38, objectFit: "cover", outline: `2px solid ${i === active ? SKY : "transparent"}`, outlineOffset: 2, display: "block", borderRadius: 8 }} />
                <div>
                  <p style={{ color: "white", fontFamily: PP, fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{t.name}</p>
                  <p style={{ color: "rgba(255,255,255,.32)", fontFamily: LA, fontSize: 11 }}>{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TechStack ── */
export function TechStack() {
  return (
    <section
      aria-labelledby="tech-heading"
      style={{ background: BG_WHITE, padding: "5rem 2rem", borderTop: "1px solid #f1f5f9" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 28 }}>
          <Reveal x={-20} y={0}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              style={{ display: "inline-flex", alignItems: "center", background: "#dbeafe", color: "#1d4ed8", fontFamily: LA, fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", padding: "5px 16px 5px 14px", borderLeft: `3px solid ${SKY}`, borderRadius: "0 20px 20px 0" }}
            >
              Technologies
            </motion.span>
            <h2 id="tech-heading" style={{ fontFamily: PP, fontWeight: 700, fontSize: "1.4rem", color: "#0f172a", margin: "12px 0 0" }}>
              Our stack is modern by default.
            </h2>
          </Reveal>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
            {TECH.map((t, i) => (
              <li key={i}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.84 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.038 }}
                  whileHover={{ scale: 1.09, y: -3 }}
                  style={{ display: "inline-block", padding: "8px 18px", background: BG_OFFWHT, color: "#475569", fontSize: 13, fontFamily: LA, fontWeight: 700, borderBottom: "2px solid transparent", cursor: "default", transition: "all .2s", borderRadius: 6 }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${SKY}14`; el.style.borderBottomColor = SKY; el.style.color = SKY; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = BG_OFFWHT; el.style.borderBottomColor = "transparent"; el.style.color = "#475569"; }}
                >
                  {t}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── MarqueeBreak ── */
export function MarqueeBreak() {
  const doubled = [...SVC_WORDS, ...SVC_WORDS];
  const doubledRev = [...SVC_WORDS, ...SVC_WORDS];
  return (
    <div style={{ background: BG_DARK3, padding: "22px 0", overflow: "hidden" }} aria-hidden>
      <motion.div style={{ display: "flex", gap: 40, width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: LA, fontSize: 11, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", whiteSpace: "nowrap", color: "rgba(255,255,255,.24)" }}>
            {item} <span style={{ color: SKY, marginLeft: 14 }}>✦</span>
          </span>
        ))}
      </motion.div>
      <div style={{ marginTop: 10 }}>
        <motion.div style={{ display: "flex", gap: 40, width: "max-content" }}
          animate={{ x: ["-50%", "0%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {doubledRev.map((item, i) => (
            <span key={i} style={{ fontFamily: LA, fontSize: 11, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", whiteSpace: "nowrap", color: "rgba(255,255,255,.24)" }}>
              {item} <span style={{ color: SKY, marginLeft: 14 }}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ── CTABanner ── */
export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const { useScroll, useTransform } = require("framer-motion");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);

  return (
    <section ref={ref} aria-labelledby="cta-heading" style={{ position: "relative", padding: "10rem 2rem", overflow: "hidden" }}>
      <motion.div aria-hidden style={{ position: "absolute", inset: "-20%", y: bgY, backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(5,8,18,.8)" }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 55% 60% at 50% 50%,${SKY}1e 0%,transparent 65%)` }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
          style={{ display: "inline-flex", alignItems: "center", background: "rgba(14,165,233,.16)", color: SKY, fontFamily: LA, fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", padding: "5px 16px 5px 14px", borderLeft: `3px solid ${SKY}`, borderRadius: "0 20px 20px 0" }}
        >
          — Your next project starts here
        </motion.span>
        <Reveal y={44} delay={0.1}>
          <h2 id="cta-heading" style={{ fontFamily: PP, margin: "24px 0 0" }}>
            <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(2.2rem,5.2vw,4.4rem)", color: "rgba(255,255,255,.52)", lineHeight: 1.1 }}>Let&apos;s build something</span>
            <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(2.2rem,5.2vw,4.4rem)", color: "white", lineHeight: 1.1 }}>that actually <span style={{ color: SKY }}>works.</span></span>
          </h2>
          <p style={{ color: "rgba(255,255,255,.42)", fontSize: 17, fontFamily: RO, fontWeight: 300, lineHeight: 1.78, maxWidth: 480, margin: "22px auto 0" }}>
            Tell us about your project. We&apos;ll reply within 24 hours with a clear plan and transparent pricing.
          </p>
          <div style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" aria-label="Start your project with DEVNTOM Solutions" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", background: SKY, color: "white", fontFamily: LA, fontWeight: 700, fontSize: 14, letterSpacing: ".1em", textDecoration: "none", borderRadius: 8, boxShadow: `0 20px 64px ${SKY}55` }}>
                START YOUR PROJECT →
              </Link>
            </motion.div>
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.18)", color: "rgba(255,255,255,.65)", fontFamily: LA, fontWeight: 700, fontSize: 14, letterSpacing: ".1em", textDecoration: "none", borderRadius: 8 }}>
              VIEW OUR WORK
            </Link>
          </div>
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
            {[{ h: "mailto:devntomsolutions@gmail.com", l: "devntomsolutions@gmail.com" }, { h: "https://wa.me/923256036838", l: "WhatsApp: 0325-6036838" }].map((item, i) => (
              <a key={i} href={item.h} style={{ color: "rgba(255,255,255,.28)", fontSize: 12, fontFamily: LA, letterSpacing: ".08em", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.28)"; }}>
                {item.l}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── FAQ ── */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      style={{ background: BG_WHITE, padding: "7rem 2rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 56 }}>
          <Reveal x={-24} y={0}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              style={{ display: "inline-flex", alignItems: "center", background: "#dbeafe", color: "#1d4ed8", fontFamily: LA, fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", padding: "5px 16px 5px 14px", borderLeft: `3px solid ${SKY}`, borderRadius: "0 20px 20px 0" }}
            >
              — 09 / FAQ
            </motion.span>
            <h2 id="faq-heading" style={{ fontFamily: PP, margin: "20px 0 20px" }}>
              <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "#64748b" }}>Questions</span>
              <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "#0f172a" }}>we get <span style={{ color: SKY }}>asked.</span></span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.78, fontFamily: RO, fontWeight: 300, maxWidth: 280, marginBottom: 20 }}>
              Can&apos;t find your answer? Reach out — we reply to every message.
            </p>
            <a href="mailto:devntomsolutions@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: SKY, fontFamily: LA, fontWeight: 700, fontSize: 13, letterSpacing: ".12em", textDecoration: "none" }}>
              EMAIL US →
            </a>
          </Reveal>

          <div style={{ borderTop: "1px solid #e8eef5" }} role="list" aria-label="Frequently asked questions">
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e8eef5" }} role="listitem">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 0", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                >
                  <span style={{ fontFamily: PP, fontWeight: 600, fontSize: 15, color: "#1e293b", lineHeight: 1.42 }}>{faq.q}</span>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                    style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${open === i ? SKY : "#e2e8f0"}`, color: open === i ? SKY : "#94a3b8", fontSize: 18, flexShrink: 0, fontFamily: LA, transition: "border-color .25s,color .25s", borderRadius: 8 }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div id={`faq-answer-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p style={{ paddingBottom: 20, color: "#64748b", fontSize: 14, lineHeight: 1.78, fontFamily: RO, fontWeight: 300 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
