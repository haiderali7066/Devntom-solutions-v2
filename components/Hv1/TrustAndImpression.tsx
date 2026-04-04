"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PP = "'Poppins', sans-serif";
const LA = "'Lato', sans-serif";
const RO = "'Roboto', sans-serif";
const SKY = "#0ea5e9";
const BG_DARK3 = "#070c18";
const BG_WHITE = "#ffffff";
const BG_OFFWHT = "#f8fafc";
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const CLIENTS = [
  "TreatyHealth","DriveApp","NextGen Co.","HealthTech",
  "Moye Corp","Vertex Labs","EcoSmart","Waverio","PulseData","OmniScale",
];

function Reveal({
  children, delay = 0, y = 40, x = 0, className,
}: {
  children: React.ReactNode; delay?: number; y?: number; x?: number; className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.88, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <Reveal y={10}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#dbeafe",
          color: "#1d4ed8",
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
      </span>
    </Reveal>
  );
}

/* ── TrustStrip ── */
export function TrustStrip() {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <div
      aria-label="Clients we have worked with"
      style={{
        background: BG_DARK3,
        borderTop: "1px solid rgba(255,255,255,.05)",
        borderBottom: "1px solid rgba(255,255,255,.05)",
        padding: "15px 0",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: 40,
          width: "max-content",
          alignItems: "center",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: LA,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: "rgba(255,255,255,.24)",
            }}
          >
            {item}{" "}
            <span style={{ color: SKY, marginLeft: 14 }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── FirstImpression ── */
export function FirstImpression() {
  return (
    <section
      style={{ background: BG_WHITE, padding: "7rem 2rem", overflow: "hidden" }}
      aria-labelledby="first-impression-heading"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Chip>— Why it matters</Chip>
        <div style={{ marginTop: 24 }}>
          <Reveal y={52}>
            <h2
              id="first-impression-heading"
              style={{ fontFamily: PP, lineHeight: 1.08, letterSpacing: "-.02em" }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: 300,
                  fontSize: "clamp(2rem,4.4vw,3.8rem)",
                  color: "#64748b",
                }}
              >
                You only get one chance
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "clamp(2rem,4.4vw,3.8rem)",
                  color: "#0f172a",
                }}
              >
                to make a{" "}
                <span style={{ color: SKY }}>great</span> first impression.
              </span>
            </h2>
          </Reveal>
        </div>

        <div
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 56,
            alignItems: "end",
          }}
        >
          <Reveal delay={0.15} x={-28} y={0}>
            <p
              style={{
                color: "#475569",
                fontSize: 17,
                lineHeight: 1.82,
                fontFamily: RO,
                fontWeight: 300,
                marginBottom: 16,
              }}
            >
              Your website is your most powerful salesperson. DEVNTOM builds
              digital experiences that convert visitors into clients — fast,
              beautifully designed, and engineered to rank.
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 15,
                lineHeight: 1.82,
                fontFamily: RO,
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              We combine engineering precision with strategic design thinking —
              every product we ship is visually sharp and wired for measurable
              business growth.
            </p>
            <Link
              href="/contact"
              aria-label="Start your project with DEVNTOM"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: SKY,
                fontFamily: LA,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: ".12em",
                textDecoration: "none",
                transition: "letter-spacing .25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.letterSpacing = ".22em";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.letterSpacing = ".12em";
              }}
            >
              START YOUR PROJECT →
            </Link>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {[
              { n: "120+", l: "Projects delivered across 10+ industries", c: SKY },
              { n: "6+", l: "Years building scalable digital products", c: "#a78bfa" },
              { n: "50+", l: "Clients worldwide — and growing", c: "#34d399" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: EASE_EXPO } },
                }}
              >
                <motion.div
                  whileHover={{ x: 7 }}
                  transition={{ type: "spring", stiffness: 380 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "18px 20px",
                    background: BG_OFFWHT,
                    borderLeft: `3px solid ${item.c}`,
                    marginBottom: 14,
                    borderRadius: "0 12px 12px 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: PP,
                      fontWeight: 800,
                      fontSize: "2.1rem",
                      color: item.c,
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {item.n}
                  </span>
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: 13.5,
                      fontFamily: RO,
                      lineHeight: 1.45,
                    }}
                  >
                    {item.l}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
