"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AGENCIES = [
  "Digital Agency",
  "Branding Agency",
  "SEO Agency",
  "Dev Agency",
  "Design Agency",
];

export default function Hero() {
  const [introFinished, setIntroFinished] = useState(false);
  const [agencyIndex, setAgencyIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Cycle agency words */
  useEffect(() => {
    if (!introFinished) return;
    const iv = setInterval(
      () => setAgencyIndex((i) => (i + 1) % AGENCIES.length),
      2200,
    );
    return () => clearInterval(iv);
  }, [introFinished]);

  /* Scroll progress */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Video card ──────────────────────────────────────────────────────── */
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.58]);
  const videoRotateX = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const videoRotateZ = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "44px"]);

  /* ── Heading: center → top-left ─────────────────────────────────────── */
  const headingTop = useTransform(scrollYProgress, [0, 1], ["50%", "13%"]);
  const headingLeft = useTransform(scrollYProgress, [0, 1], ["50%", "5%"]);
  const headingX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  /* White over dark card → deep navy over light bg */
  const headingColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#ffffff", "#06102b"],
  );

  /* ── Bottom bar fades in as card shrinks ────────────────────────────── */
  const bottomOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  /* Lock scroll during intro */
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setIntroFinished(true);
      document.body.style.overflow = "";
    }, 3600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: auto; }
      `}</style>

      {/* ════════════════════════════════════════════════
          INTRO  (Logo Ring → Name Reveal → Curtain Lift)
      ════════════════════════════════════════════════ */}
      {!introFinished && (
        <div 
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none"
          aria-hidden="true"
        >
          {/* 4 Staggered Curtain Panels */}
          <div className="absolute inset-0 flex">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: 1.1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 2.8 + i * 0.08,
                }}
                className="h-full flex-1 bg-white border-r border-slate-800/20 last:border-r-0"
              />
            ))}
          </div>

          {/* Intro Content Container */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
            transition={{ duration: 0.5, delay: 2.6, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-7 bg-slate-950 text-white"
          >
            {/* Ambient Backlight Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.4, 0.25], scale: [0.5, 1.2, 1] }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-3xl"
            />

            {/* Logo Wrapper with SVG Loading Ring */}
            <div className="relative flex items-center justify-center">
              {/* Rotating Outer Glow Arc */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-20 blur-sm"
              />

              {/* Animated Progress Ring */}
              <svg 
                className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] -rotate-90 pointer-events-none" 
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="logoRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>

                {/* Subtle Track Path */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  stroke="#1E293B" 
                  strokeWidth="2.5" 
                  fill="none" 
                />

                {/* Animated Draw Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#logoRingGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                />
              </svg>

              {/* Center Logo Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-slate-900 ring-1 ring-white/10 shadow-2xl overflow-hidden"
              >
                <img
                  src="/logosign.PNG"
                  alt="DEVNTOM Solutions"
                  className="h-full w-full object-cover rounded-full select-none"
                />
              </motion.div>
            </div>

            {/* Brand Title with Gradient Text */}
            <div className="overflow-hidden pb-1 px-4">
              <motion.h1
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300
                  text-[clamp(1.3rem,3.2vw,2.3rem)]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-center
                "
              >
                DEVNTOM SOLUTIONS
              </motion.h1>
            </div>

            {/* Subtitle Tagline */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3"
              >
                <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-blue-500/50" />
                <p className="
                  text-slate-400
                  text-[10px] sm:text-[11px]
                  uppercase
                  tracking-[0.38em]
                  font-light
                  text-center
                ">
                  Where Systems Become Strategy
                </p>
                <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-blue-500/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ════════════════════════════════════════════════
          HERO SCROLL SECTION  (250vh)
      ════════════════════════════════════════════════ */}
      <div
        ref={containerRef}
        className="relative h-[250vh]"
        style={{ background: "#eef1fa" }}
      >
        <div
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          {/* Soft bg glow — visible once card shrinks */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 72% 58% at 50% 46%, rgba(59,93,255,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Decorative grid — fades in after scroll starts */}
          <FloatingGrid progress={scrollYProgress} />

          {/* ── VIDEO CARD ───────────────────────────────────────────── */}
          <motion.div
            style={{
              scale: videoScale,
              rotateX: videoRotateX,
              rotateZ: videoRotateZ,
              y: videoY,
              borderRadius: videoRadius,
              transformStyle: "preserve-3d",
            }}
            className="absolute z-0 w-full h-full overflow-hidden bg-[#04081a]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
            >
              <source src="/5mbv.mp4" type="video/mp4" />
            </video>

            {/* <PlaceholderBg /> */}

            {/* Card gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, rgba(4,8,26,0.75) 0%, rgba(8,16,48,0.28) 50%, rgba(0,24,100,0.1) 100%)",
              }}
            />

            <CornerAccents />
          </motion.div>

         <motion.div
  style={{
    top: headingTop,
    left: headingLeft,
    x: headingX,
    y: headingY,
    color: headingColor, // white → black animation
    zIndex: 10,
  }}
  className="absolute pointer-events-none"
>
  {/* Eyebrow */}
  <p className="mb-4 text-[10px] sm:text-xs md:text-sm font-extralight uppercase tracking-[0.28em] text-blue-300/80">
    Software &amp; Digital Solutions
  </p>

  {/* Static word */}
  <div
    className="
      whitespace-nowrap
      text-[clamp(2.25rem,10vw,7.5rem)]
      font-light
      leading-none
      tracking-[-0.045em]
    "
  >
    Full Service Leading
  </div>

  {/* Animated Word */}
  <div className="flex h-[clamp(2.5rem,10vw,8rem)] items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={agencyIndex}
        initial={{ y: '65%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-65%', opacity: 0 }}
        transition={{
          duration: 0.52,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          whitespace-nowrap
          text-[clamp(2.25rem,10vw,7.5rem)]
          font-semibold
          leading-none
          tracking-[-0.045em]
          bg-[linear-gradient(115deg,#5b8aff_0%,#98b8ff_55%,#c4d4ff_100%)]
          bg-clip-text
          text-transparent
        "
      >
        {AGENCIES[agencyIndex]}
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>

          {/* ── BOTTOM BAR: left text + center CTA ───────────────────── */}
          <motion.div
            style={{ opacity: bottomOpacity }}
            className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between pointer-events-none"
            // px-8 pb-8 matches inner padding
          >
            {/* Left: company name + tagline stacked */}
            <div style={{ padding: "0 2rem 2rem 2rem" }}>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(59,93,255,0.5)",
                  margin: "0 0 0.3rem 0",
                }}
              >
                Devntom Solutions
              </p>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(59,93,255,0.28)",
                  margin: 0,
                }}
              >
                Build · Scale · Innovate
              </p>
            </div>

            {/* Center: Let's Talk CTA */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "2rem",
                transform: "translateX(-50%)",
                pointerEvents: "auto",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, #2c5af5 0%, #4a7cff 100%)",
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.7rem 1.8rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow:
                    "0 4px 24px rgba(59,93,255,0.28), 0 1px 4px rgba(0,0,0,0.15)",
                }}
              >
                Let&apos;s Talk
                <ArrowRight />
              </motion.button>
            </div>

            {/* Right: scroll progress dots */}
            <div
              style={{
                padding: "0 2rem 2.2rem 2rem",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 0 ? 20 : 5,
                    height: 5,
                    borderRadius: 3,
                    background: i === 0 ? "#3b5dff" : "rgba(59,93,255,0.2)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ─── Logo mark ────────────────────────────────────────────────────────────── */
function LogoMark({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="#3b5dff"
        strokeWidth="1"
        opacity="0.25"
      />
      <circle
        cx="32"
        cy="32"
        r="21"
        stroke="#5b8aff"
        strokeWidth="0.6"
        opacity="0.18"
      />
      <path
        d="M24 22 L15 32 L24 42"
        stroke="#5b8aff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 22 L49 32 L40 42"
        stroke="#98b8ff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 19 L29 45"
        stroke="#5b8aff"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
      <circle cx="32" cy="32" r="2.5" fill="#5b8aff" opacity="0.7" />
    </svg>
  );
}

/* ─── Corner bracket accents on video card ─────────────────────────────────── */
function CornerAccents() {
  const s: React.CSSProperties = {
    position: "absolute",
    width: 44,
    height: 44,
    opacity: 0.4,
  };
  const pathStyle = {
    stroke: "#5b8aff",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    fill: "none",
  };
  return (
    <>
      <svg style={{ ...s, top: 22, left: 22 }} viewBox="0 0 44 44">
        <path d="M0 18 L0 0 L18 0" style={pathStyle} />
      </svg>
      <svg style={{ ...s, top: 22, right: 22 }} viewBox="0 0 44 44">
        <path d="M44 18 L44 0 L26 0" style={pathStyle} />
      </svg>
      <svg style={{ ...s, bottom: 22, left: 22 }} viewBox="0 0 44 44">
        <path d="M0 26 L0 44 L18 44" style={pathStyle} />
      </svg>
      <svg style={{ ...s, bottom: 22, right: 22 }} viewBox="0 0 44 44">
        <path d="M44 26 L44 44 L26 44" style={pathStyle} />
      </svg>
    </>
  );
}

/* ─── Floating grid (fades in after scroll start) ─────────────────────────── */
function FloatingGrid({ progress }: { progress: any }) {
  const opacity = useTransform(progress, [0.08, 0.35], [0, 1]);
  return (
    <motion.div
      style={{ opacity, position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {[15, 30, 50, 70, 85].map((x) => (
          <line
            key={x}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke="#3b5dff"
            strokeWidth="0.3"
            opacity="0.07"
          />
        ))}
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="#3b5dff"
            strokeWidth="0.3"
            opacity="0.07"
          />
        ))}
        {Array.from({ length: 18 }, (_, i) => ({
          cx: (i * 137.5) % 100,
          cy: (i * 97.3) % 100,
          r: 0.8 + (i % 3) * 0.5,
        })).map((d, i) => (
          <circle
            key={i}
            cx={`${d.cx}%`}
            cy={`${d.cy}%`}
            r={d.r}
            fill="#3b5dff"
            opacity="0.15"
          />
        ))}
      </svg>
    </motion.div>
  );
}

/* ─── Placeholder BG ──────────────────────────────────────────────────────── */
function PlaceholderBg() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 82% 66% at 44% 52%, #0c1a50 0%, #04081a 72%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 900 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.1 }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="500"
            stroke="#4a7cff"
            strokeWidth="0.7"
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 100}
            x2="900"
            y2={i * 100}
            stroke="#4a7cff"
            strokeWidth="0.7"
          />
        ))}
        <line
          x1="0"
          y1="500"
          x2="900"
          y2="0"
          stroke="#3b5dff"
          strokeWidth="0.4"
          opacity="0.35"
        />
      </svg>
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(74,124,255,0.14) 0%,transparent 70%)",
          top: "50%",
          left: "38%",
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(120,160,255,0.1) 0%,transparent 70%)",
          top: "25%",
          left: "66%",
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(0,200,255,0.07) 0%,transparent 70%)",
          top: "72%",
          left: "18%",
          transform: "translate(-50%,-50%)",
        }}
      />
      {/* Watermark logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.1,
        }}
      >
        <LogoMark size={80} />
      </div>
      <p
        style={{
          position: "absolute",
          bottom: "1.4rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 200,
          fontSize: "0.62rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(147,174,255,0.18)",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        Replace with your video
      </p>
    </div>
  );
}

/* ─── Arrow icon ──────────────────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M1 6.5h10M7 2.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
