"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SERVICES = [
  {
    title: "Web Development",
    items: [
      "Business Websites",
      "Landing Pages",
      "Corporate Websites",
      "Next.js Development",
      "Custom Web Solutions",
    ],
  },
  {
    title: "Web Apps & SaaS",
    items: [
      "SaaS Platforms",
      "Admin Dashboards",
      "Customer Portals",
      "API Integrations",
      "Cloud Deployment",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "AI Agents",
      "AI Chatbots",
      "Workflow Automation",
      "OCR Solutions",
      "Custom AI Systems",
    ],
  },
  {
    title: "Mobile Development",
    items: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "Backend Integration",
      "App Maintenance",
    ],
  },
  {
    title: "E-Commerce",
    items: [
      "Online Stores",
      "Shopify Development",
      "Payment Integration",
      "Inventory Systems",
      "Custom Ecommerce",
    ],
  },
  {
    title: "Digital Marketing & SEO",
    items: [
      "Technical SEO",
      "Local SEO",
      "Content Strategy",
      "Performance Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Software Solutions",
    items: [
      "CRM Systems",
      "ERP Solutions",
      "POS Systems",
      "Business Automation",
      "Custom Software",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "Website Design",
      "App Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
];

function MobileServices() {
  return (
    <div
      className="md:hidden px-5 py-14"
      style={{
        background:
          "radial-gradient(ellipse at 70% 30%, #93c5fd 0%, #60a5fa 18%, #dbeafe 50%, #eff6ff 75%, #ffffff 100%)",
      }}
    >
      {/* Label */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
        <span
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}
          className="text-xs uppercase tracking-widest text-black/40"
        >
          Our Services
        </span>
      </div>

      {/* Heading */}
      <h2
        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.06 }}
        className="text-[2rem] text-black mb-3"
      >
        We're a digital &amp; tech agency making brands people remember
      </h2>

      {/* Tagline */}
      <p
        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
        className="text-sm text-black/50 leading-relaxed mb-8"
      >
        Big ideas. Loud design. Real results.<br />
        You bring the vision. We'll wire it into reality.
      </p>

      <div className="h-px bg-black/10 mb-8" />

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-5">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-md p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}
                className="text-[1.1rem] text-black"
              >
                {service.title}
              </h3>
              <span className="text-[#2563EB] text-xl leading-none">↗</span>
            </div>
            <div className="h-px bg-black/8 mb-4" />
            <ul className="flex flex-col gap-1">
              {service.items.map((item) => (
                <li
                  key={item}
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
                  className="text-[0.9rem] text-black/60 py-1.5 border-b border-black/6 last:border-0 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/50 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Adding a spring for buttery smooth scrolling instead of linear tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Increased the translation distance to accommodate wider cards
  const stripX = useTransform(smoothProgress, [0, 1], ["0px", "-1400px"]);

  return (
    <div ref={containerRef} className="hidden md:block relative" style={{ minHeight: "400vh" }}>
      <div
        className="sticky top-0 h-screen flex flex-col overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 60%, #93c5fd 0%, #60a5fa 18%, #dbeafe 50%, #eff6ff 75%, #ffffff 100%)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-12 xl:px-16 pt-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}
              className="text-xs uppercase tracking-widest text-black/40"
            >
              Our Services
            </span>
          </div>
          <span
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
            className="text-xs text-black/35 tracking-wide"
          >
            Scroll to explore →
          </span>
        </div>

        {/* Heading */}
        <div className="px-12 xl:px-16 mt-6">
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
            }}
            className="text-[clamp(2rem,4.2vw,4.4rem)] text-black"
          >
            We're a digital &amp; tech agency
            <br />
            making brands people remember
          </h2>
        </div>

        {/* Divider */}
        <div className="px-12 xl:px-16 mt-6">
          <div className="h-px w-full bg-black/10" />
        </div>

        {/* Bottom: tagline + cards */}
        <div className="flex flex-1 min-h-0 mt-0">

          {/* Tagline column */}
          <div className="px-12 xl:px-16 flex flex-col justify-end pb-16 flex-shrink-0 w-[260px] xl:w-[300px]">
            <p
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
              className="text-[0.85rem] leading-relaxed text-black/60 mb-8"
            >
              Big ideas. Loud design.
              <br />
              Real results. You bring the
              <br />
              vision. We'll wire it into reality.
            </p>
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-baseline gap-2">
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }} className="text-3xl text-black">120+</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }} className="text-sm text-black/45">Projects delivered</span>
              </div>
              <div className="inline-flex items-baseline gap-2">
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }} className="text-3xl text-black">5★</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }} className="text-sm text-black/45">Avg. client rating</span>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-px bg-black/10 my-8 flex-shrink-0" />

          {/* Cards strip */}
          <div className="flex-1 min-w-0 overflow-hidden flex items-end pb-16 pl-8">
            <motion.div style={{ x: stripX }} className="flex gap-6 pr-10">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex-shrink-0 w-[340px] xl:w-[380px] rounded-3xl border border-black/10 bg-white/60 backdrop-blur-md p-8 flex flex-col gap-6 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}
                      className="text-[1.25rem] text-black leading-snug"
                    >
                      {service.title}
                    </h3>
                    <span className="text-[#2563EB] text-2xl leading-none mt-0.5">↗</span>
                  </div>
                  <div className="h-px bg-black/8" />
                  <ul className="flex flex-col">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
                        className="text-[0.95rem] text-black/60 py-2.5 border-b border-black/6 last:border-0 flex items-center gap-3 group cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/30 flex-shrink-0 group-hover:bg-[#2563EB] group-hover:scale-125 transition-all duration-300" />
                        <span className="group-hover:text-black transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');
      `}</style>
      <MobileServices />
      <DesktopServices />
    </>
  );
}