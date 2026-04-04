"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import gsap from "gsap";

const PP = "'Poppins', sans-serif";
const LA = "'Lato', sans-serif";
const RO = "'Roboto', sans-serif";
const SKY = "#0ea5e9";
const BG_DARK1 = "#080d1a";

function Clock() {
  const [t, setT] = require("react").useState("");
  useEffect(() => {
    const tick = () =>
      setT(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      style={{
        fontFamily: LA,
        fontSize: 10,
        color: "rgba(255,255,255,.32)",
        letterSpacing: ".14em",
      }}
    >
      LIVE · {t}
    </span>
  );
}

export default function Hero() {
  const secRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const imgX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), {
    stiffness: 55,
    damping: 18,
  });
  const imgY = useSpring(useTransform(mouseY, [0, 1], [-12, 12]), {
    stiffness: 55,
    damping: 18,
  });
  const glowX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), {
    stiffness: 35,
    damping: 22,
  });

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start start", "end start"],
  });
  const bigY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bigO = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const imgPY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width);
      mouseY.set((e.clientY - r.top) / r.height);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.25 })
        .from(".h-bar", { y: -28, opacity: 0, duration: 0.65, ease: "power3.out" })
        .from(".h-tag", { x: -28, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=.35")
        .from(".h-line", { y: 60, opacity: 0, duration: 0.95, ease: "power3.out", stagger: 0.07 }, "-=.45")
        .from(".h-sub", { y: 22, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=.4")
        .from(".h-cta", { y: 18, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.12 }, "-=.35")
        .from(".h-big", { y: 72, opacity: 0, duration: 1.1, ease: "power3.out" }, "-=.65");
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      onMouseMove={onMove}
      aria-label="Hero — DEVNTOM Solutions digital agency"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 640,
        overflow: "hidden",
        background: BG_DARK1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* dark side radial */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 68% 72% at 22% 44%, rgba(4,14,40,.92) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* chromatic glow */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          right: "-6%",
          top: "4%",
          width: "46%",
          height: "92%",
          x: glowX,
          pointerEvents: "none",
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(150deg,rgba(14,165,233,.42) 0%,rgba(139,92,246,.32) 28%,rgba(249,115,22,.22) 60%,rgba(52,211,153,.16) 100%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* ambient blob */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-8%",
          left: "-4%",
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle,rgba(139,92,246,.18) 0%,transparent 65%)",
          filter: "blur(66px)",
          pointerEvents: "none",
        }}
      />

      {/* dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.055) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
          pointerEvents: "none",
        }}
      />

      {/* person image */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "55%",
          height: "100%",
          y: imgPY,
          pointerEvents: "none",
        }}
      >
        <motion.div style={{ width: "100%", height: "100%", x: imgX, y: imgY }}>
          <div
            role="img"
            aria-label="DEVNTOM team member working"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=900&auto=format&fit=crop&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              opacity: 0.78,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,transparent 24%,rgba(8,13,26,.94) 100%)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom,rgba(8,13,26,.22) 0%,transparent 24%,rgba(8,13,26,.6) 84%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* top bar */}
      <div
        className="h-bar"
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 36px",
          borderBottom: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              width: 22,
              height: 22,
              border: `1.5px solid ${SKY}`,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: 8, height: 8, background: SKY, borderRadius: 2 }}
            />
          </motion.div>
          <span
            style={{
              fontFamily: PP,
              fontWeight: 800,
              fontSize: 14,
              color: "white",
              letterSpacing: ".06em",
            }}
          >
            DEVNTOM<span style={{ color: SKY }}>®</span>
          </span>
        </div>
        <nav aria-label="Hero navigation">
          <div style={{ display: "flex", gap: 4 }}>
            {["ABOUT", "SERVICES", "WORK", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{
                  fontFamily: LA,
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(255,255,255,.42)",
                  letterSpacing: ".16em",
                  padding: "7px 12px",
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,.42)";
                }}
              >
                [{item}]
              </Link>
            ))}
          </div>
        </nav>
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <Clock />
          <span
            style={{
              fontFamily: LA,
              fontSize: 9,
              fontWeight: 700,
              color: "rgba(255,255,255,.22)",
              letterSpacing: ".12em",
            }}
          >
            PKR · GLOBAL
          </span>
        </div>
      </div>

      {/* left role tag */}
      <div
        className="h-tag"
        style={{
          position: "absolute",
          left: 36,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              background: SKY,
              borderRadius: 1,
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: LA,
              fontSize: 9,
              fontWeight: 700,
              color: SKY,
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            ®DEVNTOM
          </span>
        </div>
        <p
          style={{
            fontFamily: LA,
            fontSize: 9,
            fontWeight: 700,
            color: "rgba(255,255,255,.45)",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          DIGITAL AGENCY &amp;<br />SYSTEMS ARCHITECT
        </p>
      </div>

      {/* bottom left tagline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        style={{
          position: "absolute",
          left: 36,
          bottom: "22%",
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontFamily: LA,
            fontSize: 9,
            fontWeight: 700,
            color: "rgba(255,255,255,.28)",
            letterSpacing: ".24em",
            textTransform: "uppercase",
          }}
        >
          [ THE BOLD · PRECISE · VISIONARY ]
        </span>
      </motion.div>

      {/* right main content */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: "52%",
          maxWidth: 620,
          padding: "0 52px 0 36px",
        }}
      >
        <div className="h-line" style={{ marginBottom: 10 }}>
          <span
            style={{
              fontFamily: LA,
              fontSize: 10,
              fontWeight: 700,
              color: SKY,
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            ®DEVNTOM SOLUTIONS
          </span>
        </div>
        <h1 style={{ fontFamily: PP, lineHeight: 1.13, letterSpacing: "-.015em", margin: "0 0 24px" }}>
          {[
            { w: 300, c: "rgba(255,255,255,.75)", t: "IS A DIGITAL AGENCY" },
            { w: 900, c: "#ffffff", t: "BUILDING SCALABLE," },
            { w: 300, c: "rgba(255,255,255,.75)", t: "HIGH-PERFORMANCE" },
            { w: 900, c: SKY, t: "SYSTEMS FOR BRANDS." },
          ].map((line, i) => (
            <span
              key={i}
              className="h-line"
              style={{
                display: "block",
                fontWeight: line.w,
                fontSize: "clamp(1.45rem,2.9vw,2.65rem)",
                color: line.c,
                textTransform: "uppercase",
                textShadow:
                  line.c === "white"
                    ? "0 0 48px rgba(14,165,233,.22)"
                    : "none",
              }}
            >
              {line.t}
            </span>
          ))}
        </h1>
        <p
          className="h-sub"
          style={{
            fontFamily: RO,
            fontSize: 14,
            fontWeight: 300,
            color: "rgba(255,255,255,.65)",
            lineHeight: 1.8,
            maxWidth: 400,
            margin: "0 0 32px",
          }}
        >
          From brand identity to enterprise software — each system is engineered
          to connect, convert, and scale. Always focused on solutions that
          perform in the real world.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 16,
          }}
        >
          <motion.div
            className="h-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              aria-label="Start a project with DEVNTOM Solutions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 28px",
                background: "white",
                color: "#0f172a",
                fontFamily: LA,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: ".1em",
                textDecoration: "none",
                borderRadius: 8,
                boxShadow: "0 16px 48px rgba(255,255,255,.1)",
                transition: "background .25s,color .25s,box-shadow .25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = SKY;
                el.style.color = "#fff";
                el.style.boxShadow = `0 16px 48px ${SKY}55`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#fff";
                el.style.color = "#0f172a";
                el.style.boxShadow = "0 16px 48px rgba(255,255,255,.1)";
              }}
            >
              START A PROJECT ↗
            </Link>
          </motion.div>
          <Link
            className="h-cta"
            href="#work"
            style={{
              fontFamily: LA,
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(255,255,255,.42)",
              letterSpacing: ".16em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,.42)";
            }}
          >
            VIEW WORK →
          </Link>
        </div>
        <p
          className="h-cta"
          style={{
            marginTop: 22,
            fontFamily: LA,
            fontSize: 9,
            fontWeight: 700,
            color: "rgba(255,255,255,.2)",
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Based in Pakistan · Serving Globally
        </p>
      </div>

      {/* giant bottom text */}
      <motion.div
        className="h-big"
        style={{
          position: "absolute",
          bottom: -22,
          left: 0,
          right: 0,
          zIndex: 10,
          y: bigY,
          opacity: bigO,
          pointerEvents: "none",
        }}
      >
        <h2
          aria-hidden
          style={{
            fontFamily: PP,
            fontWeight: 900,
            fontSize: "clamp(5.5rem,18vw,15rem)",
            margin: 0,
            lineHeight: 0.88,
            letterSpacing: "-.045em",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,.18) 0%, rgba(255,255,255,.05) 55%, transparent 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textTransform: "uppercase",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          DEVNTOM
        </h2>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        style={{
          position: "absolute",
          bottom: 28,
          right: 44,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: LA,
            fontSize: 8,
            color: "rgba(255,255,255,.24)",
            letterSpacing: ".22em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: `linear-gradient(${SKY},transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
}
