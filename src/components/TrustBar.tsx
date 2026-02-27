"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: " Years", label: "Industry Experience" },
];

const logos = [
  "Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6"
];

const StatItem = ({ value, suffix, label, showDivider }: { value: number; suffix: string; label: string; showDivider: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return (
    <div className="flex flex-col items-center flex-1 relative group" ref={ref}>
      <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2 font-sans">
        {displayValue}{suffix}
      </div>
      <div className="text-sm md:text-base text-[#64748B] font-medium text-center font-inter uppercase tracking-wider">
        {label}
      </div>
      {showDivider && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#E2E8F0] hidden md:block" />
      )}
    </div>
  );
};

// Helper to avoid issues with useMotionValue in the scope
import { useMotionValue } from "framer-motion";

const TrustBar = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white border-y border-[#E2E8F0] py-[60px]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Stats Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 mb-16">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
              showDivider={index !== stats.length - 1}
            />
          ))}
        </div>

        {/* Part 2: Client Logos Strip */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold text-[#64748B] uppercase tracking-[0.2em] mb-8">
            Trusted by growing businesses
          </p>
          
          <div className="w-full overflow-hidden relative">
            {/* Gradient masks for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex whitespace-nowrap animate-scroll-left">
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center justify-center w-40 h-16 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] mx-4 text-[#94A3B8] font-bold text-sm"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default TrustBar;
