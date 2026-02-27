"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/Badge";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Framer motion variants for clean text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100svh] bg-[#F8FAFC] flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-blue-200/40 to-violet-200/40 blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            style={{ y: yText, opacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-8"
          >
            {/* Pill Badge */}
            <Badge
              variants={itemVariants}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Premium Design & Development
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-slate-900 tracking-tight leading-[1.1]"
              >
                We build digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  experiences
                </span> that convert.
              </motion.h1>
              
              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 max-w-[540px] leading-relaxed font-normal"
              >
                Bloom Invest is a creative studio partnering with ambitious brands to design and build websites that drive massive growth.
              </motion.p>
            </div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center space-x-2 text-slate-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Fast & accessible</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg hover:shadow-slate-900/25"
              >
                <span className="relative z-10 w-max">Start a Project</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Illustration */}
          <motion.div 
            style={{ y: yImage, opacity }}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end items-center relative"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3] flex items-center justify-center filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <Image
                src="/img/hero-illustration.png"
                alt="Clean SaaS Web Design Illustration"
                fill
                priority
                className="object-contain scale-105 hover:scale-[1.08] transition-transform duration-700 ease-out origin-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
