'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        // Scale 105% prevents slight border anti-aliasing issues on some browsers
      >
        <source src="/5mbhv.mp4" type="video/mp4" />
      </video>

      {/* Upgraded Gradient Overlay for better depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge/Eyebrow text */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs md:text-sm font-medium backdrop-blur-md uppercase tracking-wider">
              Welcome to the Innovation
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.variants variants={itemVariants}>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
              Devntom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Solutions</span>
            </h1>
          </motion.variants>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="mt-6 text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Building modern, scalable, and high-performance digital solutions designed to accelerate your business growth.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <button className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button (Glassmorphism) */}
            <button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md text-sm md:text-base font-semibold hover:bg-white/20 transition-all duration-300">
              <PlayCircle className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;