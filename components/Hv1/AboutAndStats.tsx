"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PP = "'Poppins', sans-serif";
const LA = "'Lato', sans-serif";
const RO = "'Roboto', sans-serif";
const SKY = "#0ea5e9";
const BG_WHITE = "#ffffff";
const BG_OFFWHT = "#f8fafc";
const BG_DARK3 = "#070c18";
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { v: 120, s: "+",  l: "Projects\nDelivered",  c: SKY       },
  { v: 50,  s: "+",  l: "Clients\nWorldwide",   c: "#a78bfa" },
  { v: 6,   s: "+",  l: "Years of\nExperience", c: "#34d399" },
  { v: 100, s: "K+", l: "Dev Hours\nLogged",    c: "#f97316" },
];

function CountUp({ to, suffix = "", duration = 2.2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current, start: "top 82%", once: true,
        onEnter: () => {
          if (triggered.current) return;
          triggered.current = true;
          gsap.fromTo(ref.current, { innerText: 0 }, {
            innerText: to, duration, ease: "power3.out",
            snap: { innerText: 1 },
            onUpdate() { if (ref.current) ref.current.innerText = Math.floor(+ref.current.innerText) + ""; },
            onComplete() { if (ref.current) ref.current.innerText = to + ""; },
          });
        },
      });
    });
    return () => ctx.revert();
  }, [to, duration]);
  return <><span ref={ref}>0</span>{suffix}</>;
}

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

/* ── AboutBanner ── */
export function AboutBanner() {
  return (
    <section
      style={{ background: BG_WHITE, padding: "7rem 2rem", overflow: "hidden" }}
      aria-labelledby="about-heading"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
          <Reveal x={-44} y={0}>
            <div style={{ position: "relative" }}>
              <motion.div
                whileHover={{ scale: 1.018 }}
                transition={{ duration: 0.6 }}
                style={{ height: 500, overflow: "hidden", position: "relative", borderRadius: 20, boxShadow: "0 32px 80px rgba(15,23,42,.14)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                  alt="DEVNTOM team collaborating on a digital project"
                  width={900}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.04) saturate(.88)", display: "block" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", bottom: 20, left: 20, right: 20,
                  background: "rgba(5,8,18,.76)",
                  backdropFilter: "blur(22px) saturate(180%)",
                  WebkitBackdropFilter: "blur(22px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 8px 42px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.07)",
                  padding: "18px 22px", borderRadius: 14,
                }}>
                  <div aria-hidden style={{ position: "absolute", top: 0, left: 14, right: 14, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)" }} />
                  <p style={{ color: "rgba(255,255,255,.34)", fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", fontFamily: LA, marginBottom: 6 }}>DEVNTOM Solutions</p>
                  <p style={{ color: "white", fontFamily: PP, fontWeight: 700, fontSize: 13, lineHeight: 1.45, marginBottom: 16 }}>Building digital systems that scale businesses.</p>
                  <div style={{ display: "flex", gap: 28 }}>
                    {[{ v: "120+", l: "Projects" }, { v: "50+", l: "Clients" }, { v: "6+", l: "Years" }].map((x, i) => (
                      <div key={i}>
                        <div style={{ color: SKY, fontFamily: PP, fontWeight: 800, fontSize: 18 }}>{x.v}</div>
                        <div style={{ color: "rgba(255,255,255,.32)", fontFamily: LA, fontSize: 10 }}>{x.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-7, 7, -7] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
                style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, background: SKY, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, borderRadius: 16, boxShadow: `0 12px 36px ${SKY}55` }}
              >
                <span style={{ fontFamily: PP, fontWeight: 800, fontSize: 11, color: "white", letterSpacing: ".06em", textAlign: "center", lineHeight: 1.35 }}>EST.<br />2019</span>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.15} x={40} y={0}>
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
              — 03 / Who We Are
            </motion.span>
            <h2 id="about-heading" style={{ fontFamily: PP, margin: "20px 0 24px" }}>
              <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(1.7rem,3.4vw,3rem)", color: "#64748b" }}>A technology partner</span>
              <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(1.7rem,3.4vw,3rem)", color: "#0f172a" }}>built for <span style={{ color: SKY }}>ambitious</span> businesses.</span>
            </h2>
            <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.82, fontFamily: RO, fontWeight: 300, marginBottom: 14 }}>
              DEVNTOM Solutions is a technology company that helps businesses grow through modern software, websites, marketing systems, and AI automation.
            </p>
            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.82, fontFamily: RO, fontWeight: 300, marginBottom: 32 }}>
              We combine engineering expertise with strategic thinking to deliver scalable digital products that improve efficiency, visibility, and revenue.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
              {["Custom built solutions","Scalable architecture","Performance-optimized","SEO-ready builds","Business-focused strategy","Long-term support"].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 18, height: 18, background: `${SKY}16`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: 5 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={SKY} strokeWidth="3" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span style={{ color: "#475569", fontSize: 13, fontFamily: RO }}>{item}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: SKY, fontFamily: LA, fontWeight: 700, fontSize: 13, letterSpacing: ".12em", textDecoration: "none" }}>
              OUR STORY →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ── */
export function Stats() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 55, opacity: 0, scale: 0.85, duration: 0.82, stagger: 0.14, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".stats-grid", start: "top 78%", once: true },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      aria-labelledby="stats-heading"
      style={{ padding: "7rem 2rem", background: BG_DARK3 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 56, alignItems: "center" }}>
          <Reveal x={-36} y={0}>
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
              — 04 / Our Impact
            </motion.span>
            <h2 id="stats-heading" style={{ fontFamily: PP, margin: "20px 0 20px" }}>
              <span style={{ display: "block", fontWeight: 300, fontSize: "clamp(1.9rem,3.8vw,3.2rem)", color: "rgba(255,255,255,.5)" }}>Numbers that</span>
              <span style={{ display: "block", fontWeight: 800, fontSize: "clamp(1.9rem,3.8vw,3.2rem)", color: "white" }}>speak for <span style={{ color: SKY }}>themselves.</span></span>
            </h2>
            <p style={{ color: "rgba(255,255,255,.35)", fontSize: 15, lineHeight: 1.78, fontFamily: RO, fontWeight: 300, maxWidth: 340, marginBottom: 28 }}>
              Every metric represents a real business we helped grow, a deadline we hit, and a team that trusted us.
            </p>
            <Link href="/about" style={{ color: SKY, fontFamily: LA, fontWeight: 700, fontSize: 13, letterSpacing: ".12em", textDecoration: "none" }}>
              OUR STORY →
            </Link>
          </Reveal>

          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                className="stat-card"
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)", borderTop: `3px solid ${s.c}`, padding: "24px 20px", borderRadius: 14 }}
              >
                <div style={{ display: "flex", alignItems: "flex-end", gap: 2, lineHeight: 1 }}>
                  <span style={{ fontFamily: PP, fontWeight: 800, fontSize: "clamp(2.6rem,4.8vw,4rem)", color: "white" }}>
                    <CountUp to={s.v} suffix={s.s} />
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,.32)", fontSize: 11.5, marginTop: 10, lineHeight: 1.6, whiteSpace: "pre-line", fontFamily: LA, fontWeight: 400 }}>{s.l}</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  aria-hidden
                  style={{ height: 2, background: s.c, marginTop: 14, transformOrigin: "left", opacity: 0.35, borderRadius: 1 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
