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
const BG_DARK1 = "#080d1a";
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  { name: "TreatyHealth",      cat: "Healthcare SaaS",  result: "+30% user retention",   img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop", accent: SKY       },
  { name: "DriveApp Suite",    cat: "SaaS Platform",    result: "5× active-user growth",  img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop", accent: "#a78bfa" },
  { name: "NextGen Marketing", cat: "Marketing System", result: "−40% ad spend",          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop", accent: "#34d399" },
  { name: "HealthTech App",    cat: "Mobile App",       result: "50K+ downloads",         img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop", accent: "#f97316" },
];

const PROCESS = [
  { n: "01", icon: "🔭", title: "Discovery & Strategy", desc: "Deep dive into your goals, users, and competitive landscape — before a single pixel is designed."       },
  { n: "02", icon: "📐", title: "Design & Planning",    desc: "Wireframes, high-fidelity UI and a detailed project roadmap — fully signed off before coding begins."    },
  { n: "03", icon: "⚡", title: "Build & Test",          desc: "Engineering sprints with daily updates, peer code reviews, QA and performance optimization throughout."   },
  { n: "04", icon: "🚀", title: "Launch & Scale",        desc: "Deployment, SEO, analytics and a post-launch care plan — so your product keeps improving after go-live." },
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

/* ── Projects ── */
export function Projects() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      style={{ background: BG_WHITE, padding: "7rem 2rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 56 }}>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              style={{
                display: "inline-flex", alignItems: "center",
                background: "#dbeafe", color: "#1d4ed8",
                fontFamily: LA, fontSize: 10, fontWeight: 700,
                letterSpacing: ".22em", textTransform: "uppercase",
                padding: "5px 16px 5px 14px",
                borderLeft: `3px solid ${SKY}`,
                borderRadius: "0 20px 20px 0",
              }}
            >
              — 05 / Selected Work
            </motion.span>
            <Reveal y={36} delay={0.1}>
              <h2 id="projects-heading" style={{ fontFamily: PP, margin: "20px 0 0" }}>
                <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(2rem,4.2vw,3.7rem)", color: "#64748b" }}>Projects that</span>
                <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(2rem,4.2vw,3.7rem)", color: "#0f172a" }}>moved the <span style={{ color: SKY }}>needle.</span></span>
              </h2>
            </Reveal>
          </div>
          <Link href="/case-studies" style={{ color: SKY, fontFamily: LA, fontWeight: 700, fontSize: 13, letterSpacing: ".12em", textDecoration: "none" }}>
            ALL CASE STUDIES →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {PROJECTS.map((p, i) => {
            const wide = i === 0 || i === 3;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE_EXPO }}
                style={{ gridColumn: wide ? "span 2" : "span 1", height: wide ? 375 : 300, position: "relative", overflow: "hidden", cursor: "pointer", borderRadius: 18, boxShadow: "0 8px 32px rgba(15,23,42,.1)" }}
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                aria-label={`${p.name} — ${p.cat}`}
              >
                <motion.img
                  src={p.img}
                  alt={`${p.name} project screenshot`}
                  width={900}
                  height={500}
                  loading="lazy"
                  animate={hov === i ? { scale: 1.09 } : { scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
                />
                <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(15,23,42,.06) 0%,rgba(15,23,42,.88) 100%)" }} />
                <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.accent},transparent)` }} />
                <div style={{ position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 10 }}>
                  <span style={{ alignSelf: "flex-start", fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", padding: "5px 12px", background: `${p.accent}28`, color: p.accent, border: `1px solid ${p.accent}44`, fontFamily: LA, borderRadius: 20 }}>{p.cat}</span>
                  <div>
                    <p style={{ color: "rgba(255,255,255,.44)", fontSize: 11, fontFamily: LA, marginBottom: 4 }}>{p.result}</p>
                    <h3 style={{ fontFamily: PP, fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: 10 }}>{p.name}</h3>
                    <AnimatePresence>
                      {hov === i && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>
                          <span style={{ fontFamily: LA, fontSize: 11, fontWeight: 700, color: p.accent, letterSpacing: ".12em" }}>VIEW CASE STUDY →</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Process ── */
export function Process() {
  const [active, setActive] = useState<number | null>(null);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proc-card", {
        y: 50, opacity: 0, duration: 0.75, stagger: 0.13, ease: "power3.out",
        scrollTrigger: { trigger: ".proc-grid", start: "top 78%", once: true },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      aria-labelledby="process-heading"
      style={{ padding: "7rem 2rem", background: BG_DARK1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 72 }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            style={{
              display: "inline-flex", alignItems: "center",
              background: "rgba(14,165,233,.16)", color: SKY,
              fontFamily: LA, fontSize: 10, fontWeight: 700,
              letterSpacing: ".22em", textTransform: "uppercase",
              padding: "5px 16px 5px 14px",
              borderLeft: `3px solid ${SKY}`,
              borderRadius: "0 20px 20px 0",
            }}
          >
            — 06 / How We Work
          </motion.span>
          <Reveal y={40} delay={0.1}>
            <h2 id="process-heading" style={{ fontFamily: PP, margin: "20px 0 0" }}>
              <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(2.2rem,4.5vw,4rem)", color: "rgba(255,255,255,.5)" }}>Our process is</span>
              <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(2.2rem,4.5vw,4rem)", color: "white" }}>deliberate <span style={{ color: SKY }}>&</span> precise.</span>
            </h2>
          </Reveal>
        </div>

        <div className="proc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
          {PROCESS.map((p, i) => (
            <article
              key={i}
              className="proc-card"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              aria-label={p.title}
              style={{ padding: "32px 26px", background: "rgba(255,255,255,.034)", border: "1px solid rgba(255,255,255,.065)", borderTop: `2px solid ${active === i ? SKY : "rgba(255,255,255,.06)"}`, cursor: "default", transition: "border-color .3s, box-shadow .3s, transform .3s", borderRadius: 14, transform: active === i ? "translateY(-4px)" : "translateY(0)", boxShadow: active === i ? "0 20px 50px rgba(0,0,0,.25)" : "none" }}
            >
              <motion.span
                animate={active === i ? { y: [-3, 3, -3] } : { y: 0 }}
                transition={{ duration: 1.4, repeat: active === i ? Infinity : 0 }}
                aria-hidden
                style={{ fontSize: 30, display: "block", marginBottom: 18 }}
              >
                {p.icon}
              </motion.span>
              <span aria-hidden style={{ fontFamily: PP, fontWeight: 800, fontSize: "3rem", color: `${SKY}18`, lineHeight: 1, display: "block", marginBottom: 10 }}>{p.n}</span>
              <h3 style={{ fontFamily: PP, fontWeight: 700, fontSize: "1.1rem", color: active === i ? "white" : "rgba(255,255,255,.68)", marginBottom: 12, transition: "color .3s" }}>{p.title}</h3>
              <p style={{ fontFamily: RO, fontSize: 13, color: "rgba(255,255,255,.36)", lineHeight: 1.72, fontWeight: 300 }}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
