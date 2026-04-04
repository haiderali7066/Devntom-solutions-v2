"use client"

import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80',
    title: 'INNOVATIVE',
    subtitle: 'SOFTWARE SOLUTIONS'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80',
    title: 'SCALABLE',
    subtitle: 'DIGITAL SYSTEMS'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&auto=format&fit=crop&q=80',
    title: 'SECURE',
    subtitle: 'ENTERPRISE TECH'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#050505]">

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroSlides[currentSlide].image}
              className="w-full h-full object-cover opacity-60"
              alt="Hero Background"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

            {/* Rainbow Streak Effect */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_20%,rgba(255,0,0,0.15)_30%,rgba(255,165,0,0.15)_35%,rgba(255,255,0,0.15)_40%,rgba(0,128,0,0.15)_45%,rgba(0,0,255,0.15)_50%,rgba(75,0,130,0.15)_55%,rgba(238,130,238,0.15)_60%,transparent_70%)] blur-[100px] transform -rotate-12 scale-150" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 pt-12 px-12 flex justify-between items-start w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-0.5"
        >
          {/* <p className="text-[11px] font-black tracking-[0.4em] text-white uppercase">M.J8®</p> */}
        </motion.div>

        {/* <div className="hidden md:flex items-center gap-12">
          {['ABOUT', 'SERVICES', 'WORK', 'CONTACT'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[10px] font-bold tracking-[0.3em] text-white/60 hover:text-white transition-colors uppercase"
            >
              [{item}]
            </Link>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-right space-y-0.5"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Designing digital</p>
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">experiences for</p>
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">modern brands</p>
        </motion.div>
      </div>

      {/* Middle Content */}
      <div className="relative z-10 px-12 grid lg:grid-cols-12 gap-8 items-center w-full max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-3 hidden lg:block"
        >
          <div className="space-y-1 border-l border-white/10 pl-6">
            <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">#DEVNTOM</p>
            <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">DIGITAL DESIGNER &</p>
            <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">BRAND ARCHITECT</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-6 text-center lg:text-left space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight max-w-2xl">
              ®DEVNTOM IS A DIGITAL DESIGNER <br />
              <span className="text-white/90">CREATING CLEAN, IMPACTFUL VISUAL EXPERIENCES FOR MODERN BRANDS.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              From brand identity to interactive web design, each detail is shaped to connect, communicate, and convert. The focus is always on creating experiences that not only look great, but leave a lasting impression.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 pt-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>

        <div className="lg:col-span-3 hidden lg:block text-right space-y-1">
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Based in Europe</p>
          <p className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Live 12:40 AM</p>
        </div>
      </div>

      {/* Bottom Giant Text + Slide Indicators */}
      <div className="relative z-10 w-full flex flex-col items-center pb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[10px] font-bold tracking-[0.8em] text-white/30 uppercase mb-4"
        >
          [ THE BOLD PRECISE VISIONARY ]
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-center"
          >
            <h1 className="text-[22vw] font-black text-white leading-[0.8] tracking-[-0.05em] select-none mix-blend-difference">
              DEVNTOM
            </h1>
          </motion.div>
          {/* Bottom fade mask */}
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#050505] to-transparent z-20" />
        </div>

        <div className="flex justify-center gap-3 mt-8 relative z-30">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "w-16 h-[2px] transition-all duration-700",
                currentSlide === i ? "bg-white" : "bg-white/10"
              )}
            />
          ))}
        </div>
      </div>

    </section>
  );
}