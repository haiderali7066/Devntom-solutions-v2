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
const BG_DARK1 = "#080d1a";
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  { n: "01", icon: "◈", title: "Website Development",      sub: "Custom-coded, CMS, SaaS, e-commerce and landing pages — pixel-perfect, performance-first.",       href: "/services/website-development",  c: SKY       },
  { n: "02", icon: "◎", title: "Digital Marketing",         sub: "Google Ads, SEO, social campaigns and analytics frameworks built to drive measurable revenue.",    href: "/services/digital-marketing",    c: "#a78bfa" },
  { n: "03", icon: "◉", title: "Software Development",      sub: "ERP, CRM platforms, inventory systems and business dashboards engineered to scale.",               href: "/services/software-development",  c: "#34d399" },
  { n: "04", icon: "◐", title: "App Development",           sub: "iOS, Android, cross-platform and SaaS mobile apps — from concept through App Store launch.",       href: "/services/app-development",      c: "#f97316" },
  { n: "05", icon: "◑", title: "UI / UX Design",            sub: "Product design, prototyping and design systems — interfaces users love and brands trust.",          href: "/services/ui-ux-design",         c: "#f43f5e" },
  { n: "06", icon: "◍", title: "AI Automation & Chatbots",  sub: "Chatbots, workflow AI, lead bots and intelligent data processing pipelines.",                      href: "/services/ai-automation",        c: "#f59e0b" },
];

function Chip({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE_EXPO }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: light ? "rgba(14,165,233,.16)" : "#dbeafe",
        color: light ? SKY : "#1d4ed8",
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
      {children}
    </motion.span>
  );
}

export default function Services() {
  const [hov, setHov] = useState<number | null>(null);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-heading", {
        x: -60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".svc-heading", start: "top 82%", once: true },
      });
      gsap.from(".svc-row", {
        x: -80, opacity: 0, duration: 0.75, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".svc-list", start: "top 80%", once: true },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      id="services"
      aria-labelledby="services-heading"
      style={{ padding: "7rem 2rem", background: BG_DARK1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 72,
          }}
        >
          <div className="svc-heading">
            <Chip light>— 01 / What We Do</Chip>
            <h2
              id="services-heading"
              style={{ fontFamily: PP, margin: "20px 0 0" }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: 300,
                  fontSize: "clamp(2.4rem,5vw,5rem)",
                  color: "rgba(255,255,255,.5)",
                }}
              >
                Our
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem,5vw,5rem)",
                  color: "white",
                }}
              >
                Services
              </span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_EXPO }}
            style={{
              color: "rgba(255,255,255,.3)",
              fontSize: 14,
              maxWidth: 270,
              lineHeight: 1.78,
              fontFamily: RO,
              fontWeight: 300,
            }}
          >
            End-to-end digital solutions from strategy through launch — one
            team, every discipline.
          </motion.p>
        </div>

        <div
          className="svc-list"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="svc-row"
              style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
            >
              <Link
                href={svc.href}
                aria-label={`Learn about our ${svc.title} service`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  padding: `26px ${hov === i ? "22px" : "4px"}`,
                  textDecoration: "none",
                  transition:
                    "padding .32s cubic-bezier(.16,1,.3,1), background .25s",
                  borderRadius: hov === i ? 12 : 0,
                  background:
                    hov === i ? "rgba(255,255,255,.028)" : "transparent",
                }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  <motion.span
                    animate={
                      hov === i
                        ? { rotate: 360, scale: 1.4 }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.55, ease: "backOut" }}
                    style={{
                      fontSize: 20,
                      color:
                        hov === i ? svc.c : "rgba(255,255,255,.2)",
                      width: 28,
                      textAlign: "center",
                      display: "block",
                      transition: "color .25s",
                    }}
                  >
                    {svc.icon}
                  </motion.span>
                  <span
                    style={{
                      fontFamily: LA,
                      fontSize: 10,
                      color:
                        hov === i ? svc.c : "rgba(255,255,255,.2)",
                      letterSpacing: ".12em",
                      flexShrink: 0,
                      transition: "color .25s",
                    }}
                  >
                    {svc.n}
                  </span>
                  <span
                    style={{
                      fontFamily: PP,
                      fontWeight: 700,
                      fontSize: "clamp(1rem,2vw,1.7rem)",
                      color: hov === i ? svc.c : "white",
                      transition: "color .25s",
                    }}
                  >
                    {svc.title}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <AnimatePresence>
                    {hov === i && (
                      <motion.span
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        style={{
                          color: "rgba(255,255,255,.3)",
                          fontSize: 12,
                          maxWidth: 260,
                          textAlign: "right",
                          lineHeight: 1.55,
                          fontFamily: RO,
                        }}
                      >
                        {svc.sub}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.div
                    animate={
                      hov === i
                        ? { rotate: 45, borderColor: svc.c, color: svc.c }
                        : { rotate: 0 }
                    }
                    transition={{ duration: 0.28 }}
                    style={{
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,.12)",
                      color: "rgba(255,255,255,.24)",
                      fontSize: 14,
                      flexShrink: 0,
                      borderRadius: 8,
                    }}
                  >
                    →
                  </motion.div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
