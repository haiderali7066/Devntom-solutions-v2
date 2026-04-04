"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PP = "'Poppins', sans-serif";
const LA = "'Lato', sans-serif";
const RO = "'Roboto', sans-serif";
const SKY = "#0ea5e9";
const BG_DARK2 = "#0c1120";
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const FEATURES = [
  { icon: "⚡", title: "Custom-coded at every layer",    desc: "No page builders. Architected from scratch for performance, scalability and full control.",    c: SKY       },
  { icon: "🔗", title: "Seamless API integrations",      desc: "Payment gateways, CRMs, ERPs, analytics — every system connected into one coherent stack.",    c: "#a78bfa" },
  { icon: "🤖", title: "AI chatbots & automation",       desc: "Intelligent assistants that qualify leads, handle support and run operations 24/7.",            c: "#34d399" },
  { icon: "📊", title: "Real-time data dashboards",      desc: "Custom analytics surfaces that turn raw data into decisions your team can act on.",            c: "#f97316" },
  { icon: "📱", title: "Mobile-first responsive design", desc: "Built for the smallest screen first, then refined beautifully for every device.",              c: "#f43f5e" },
  { icon: "🚀", title: "SEO-optimized architecture",     desc: "Semantic HTML, Core Web Vitals, structured data and technical SEO built in from day one.",    c: SKY       },
  { icon: "🔐", title: "Security & compliance-ready",    desc: "HTTPS, secure auth, GDPR-aware builds and penetration-tested deployments — by default.",      c: "#f59e0b" },
  { icon: "♾️",  title: "24/7 support & maintenance",    desc: "We don't disappear post-launch. Ongoing care plans keep your product fast and secure.",       c: "#a78bfa" },
];

export default function GlassFeatures() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feat-card", {
        y: 60, opacity: 0, scale: 0.92, duration: 0.72, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".feat-grid", start: "top 78%", once: true },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      aria-labelledby="features-heading"
      style={{ padding: "7rem 2rem", background: BG_DARK2, position: "relative", overflow: "hidden" }}
    >
      {/* ambient orbs */}
      {[
        { c: `${SKY}0e`, x: "50%", y: "50%", s: 700 },
        { c: "rgba(139,92,246,.08)", x: "86%", y: "14%", s: 420 },
        { c: "rgba(52,211,153,.07)", x: "14%", y: "80%", s: 380 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={{
            scale: [1, 1 + 0.15 * (i + 1), 1],
            x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, -14 * (i + 1), 0],
          }}
          transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: orb.y,
            left: orb.x,
            transform: "translate(-50%,-50%)",
            width: orb.s,
            height: orb.s,
            background: `radial-gradient(circle,${orb.c} 0%,transparent 62%)`,
            filter: "blur(64px)",
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(14,165,233,.16)",
              color: SKY,
              fontFamily: LA,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              padding: "5px 16px 5px 14px",
              borderLeft: `3px solid ${SKY}`,
              borderRadius: "0 20px 20px 0",
            }}
          >
            — 02 / What You Get
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.88, delay: 0.1, ease: EASE_EXPO }}
          >
            <h2
              id="features-heading"
              style={{ fontFamily: PP, margin: "20px 0 0" }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: 300,
                  fontSize: "clamp(1.9rem,4.2vw,3.5rem)",
                  color: "rgba(255,255,255,.5)",
                }}
              >
                Everything your business
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem,4.2vw,3.5rem)",
                  color: "white",
                }}
              >
                actually <span style={{ color: SKY }}>needs.</span>
              </span>
            </h2>
          </motion.div>
        </div>

        <div
          className="feat-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {FEATURES.map((f, i) => (
            <motion.article
              key={i}
              className="feat-card"
              whileHover={{ y: -8, scale: 1.03 }}
              aria-label={f.title}
              style={{
                background: "rgba(255,255,255,.038)",
                backdropFilter: "blur(22px) saturate(160%)",
                WebkitBackdropFilter: "blur(22px) saturate(160%)",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow: "0 4px 28px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06)",
                padding: "26px",
                position: "relative",
                cursor: "default",
                borderRadius: 16,
                transition: "box-shadow .3s",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: 16,
                  right: 16,
                  height: 1,
                  background: "linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)",
                  borderRadius: 1,
                }}
              />
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.8 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: 26, display: "block", marginBottom: 14 }}
                aria-hidden
              >
                {f.icon}
              </motion.span>
              <h3 style={{ fontFamily: PP, fontWeight: 600, fontSize: 13, color: "white", lineHeight: 1.42, margin: "0 0 8px" }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: RO, fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.68, margin: 0 }}>
                {f.desc}
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: f.c,
                  transformOrigin: "left",
                  borderRadius: "0 0 16px 16px",
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
