"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const ContactTeaser = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-slate-900 py-[120px] lg:py-[160px] overflow-hidden">
      
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Modern Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 z-0 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-xl mb-2"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-semibold tracking-wide">
              Let&apos;s Work Together
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl"
          >
            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">extraordinary?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 font-normal max-w-[600px] leading-relaxed"
          >
            Join the forward-thinking brands that trust us to design and develop their digital future.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 w-full sm:w-auto"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xl hover:shadow-blue-500/25 border border-blue-500 hover:border-blue-400"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            </Link>
            
            <Link href="/portfolio" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all cursor-pointer hover:border-white/40"
              >
                View Our Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTeaser;
