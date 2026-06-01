"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const ROTATING_WORDS = ["Web", "Digital", "Software", "SEO", "Creative", "Growth"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.7], [-7, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 0.7], [0.72, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 0.7], [0.55, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.7], ["10%", "0%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 1900);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400&display=swap');
      `}</style>

      <div ref={containerRef} className="relative min-h-[250vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Heading — sits above video via z-index */}
          <div className="absolute top-0 left-0 right-0 z-30 px-10 pt-20 md:px-16 md:pt-24 pointer-events-none">
            <h1
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200, letterSpacing: "-0.03em" }}
              className="text-[clamp(2.6rem,6.5vw,6rem)] leading-[1.07] text-black"
            >
              Leading Full-Service
              <br />
              <span className="inline-flex items-baseline gap-[0.22em]">

                {/* Rotating adjective */}
                <span className="relative inline-block overflow-hidden" style={{ minWidth: "3.2ch" }}>
                  <span className="invisible select-none" aria-hidden>
                    {ROTATING_WORDS.reduce((a, b) => (a.length >= b.length ? a : b))}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`word-${wordIndex}`}
                      className="absolute inset-0 flex items-center"
                      style={{ color: "#D400FF" }}
                      initial={{ y: "110%", skewY: 6, opacity: 0 }}
                      animate={{ y: "0%", skewY: 0, opacity: 1 }}
                      exit={{ y: "-110%", skewY: -6, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>

                {/* "Agency" animates in sync — same key so it re-triggers together */}
                <span className="relative inline-block overflow-hidden">
                  <span className="invisible select-none" aria-hidden style={{ fontWeight: 200 }}>Agency</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`agency-${wordIndex}`}
                      className="absolute inset-0 flex items-center text-black"
                      style={{ fontWeight: 200 }}
                      initial={{ y: "110%", skewY: 6, opacity: 0 }}
                      animate={{ y: "0%", skewY: 0, opacity: 1 }}
                      exit={{ y: "-110%", skewY: -6, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      Agency
                    </motion.span>
                  </AnimatePresence>
                </span>

              </span>
            </h1>
          </div>

          {/* Video box — z-20, above bg but below heading text */}
          <motion.div
            style={{
              rotate,
              scaleX,
              scaleY,
              borderRadius,
              y: translateY,
              transformOrigin: "center center",
              position: "absolute",
              inset: 0,
              zIndex: 20,
              willChange: "transform",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src="/v3.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                background:
                  "linear-gradient(135deg, #0a0a0a 0%, #160020 45%, #D400FF 100%)",
                display: "block",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
              }}
            />
          </motion.div>

        </div>

       
      </div>
    </>
  );
}