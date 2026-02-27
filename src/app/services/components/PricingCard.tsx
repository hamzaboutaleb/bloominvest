"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PricingCard = ({ plan, index, isMonthly }: { plan: any, index: number, isMonthly: boolean }) => {
  const isDark = plan.theme === "dark";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: plan.popular ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.05 : 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-[32px] p-[1px] group transition-all duration-500 hover:-translate-y-2",
        isDark ? "z-20 shadow-2xl shadow-blue-900/20" : "z-10 shadow-xl shadow-slate-200/50"
      )}
    >
      {/* Animated Gradient Border for Popular Plan */}
      {plan.popular && (
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-400 via-violet-500 to-blue-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
      )}
      
      {/* Subtle border for light cards */}
      {!plan.popular && (
        <div className="absolute inset-0 rounded-[32px] bg-slate-200/80 group-hover:bg-slate-300 transition-colors duration-500" />
      )}

      {/* Card Content Container */}
      <div className={cn(
        "relative flex flex-col h-full p-8 md:p-10 rounded-[31px] overflow-hidden",
        isDark 
          ? "bg-slate-900 text-white" 
          : "bg-white/90 backdrop-blur-xl text-slate-900"
      )}>
        
        {/* Ambient Dark Card Glow */}
        {isDark && (
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/30 blur-[80px] rounded-full pointer-events-none" />
        )}

        {/* Popular Badge */}
        {plan.popular && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2 rounded-b-2xl shadow-lg"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Most Popular</span>
          </motion.div>
        )}

        <div className="flex flex-col items-center text-center mt-6 mb-8 relative z-10">
          <div className={cn(
            "mb-6 flex items-center justify-center w-20 h-20 rounded-[20px] transition-transform duration-500 group-hover:scale-110",
            isDark ? "bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]" : "bg-slate-50 border border-slate-100 shadow-md group-hover:bg-blue-50 group-hover:border-blue-100"
          )}>
            {React.cloneElement(plan.icon, { 
              className: cn("w-10 h-10", isDark ? "text-white" : "text-blue-600") 
            })}
          </div>
          <h3 className="text-3xl font-extrabold mb-3 tracking-tight">{plan.name}</h3>
          
          <p className={cn("text-[15px] font-medium leading-relaxed max-w-[240px]", isDark ? "text-slate-300" : "text-slate-500")}>
            {plan.tagline}
          </p>

          <div className="flex items-baseline justify-center mt-8 h-20 overflow-hidden">
            <span className={cn("text-5xl font-bold translate-y-2", isDark ? "text-white/80" : "text-slate-400")}>
              $
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn("text-7xl font-black tracking-tighter mx-1", isDark ? "text-white" : "text-slate-900")}
              >
                {isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
              </motion.span>
            </AnimatePresence>
            <span className={cn("text-base font-semibold translate-y-2", isDark ? "text-slate-400" : "text-slate-500")}>
              {isMonthly ? "/mo" : " flat"}
            </span>
          </div>
        </div>

        <div className={cn("w-full h-px mb-8 relative z-10", isDark ? "bg-gradient-to-r from-transparent via-white/20 to-transparent" : "bg-gradient-to-r from-transparent via-slate-200 to-transparent")} />

        <ul className="space-y-4 mb-12 flex-grow relative z-10">
          {plan.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start space-x-4 text-base font-medium">
              <div className={cn("mt-1 shrink-0 rounded-full p-0.5", isDark ? "bg-white/20" : "bg-blue-100")}>
                <Check className={cn("w-3.5 h-3.5", isDark ? "text-white" : "text-blue-600")} strokeWidth={3} />
              </div>
              <span className={isDark ? "text-slate-200" : "text-slate-700"}>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full py-4 px-8 rounded-full font-bold text-[17px] transition-all cursor-pointer relative z-10 overflow-hidden group/btn shadow-lg",
            isDark 
              ? "bg-white text-slate-900 hover:shadow-white/25 hover:shadow-xl" 
              : "bg-slate-900 text-white hover:shadow-slate-900/20"
          )}
        >
          <span className="relative z-10">{plan.cta}</span>
          {!isDark && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0"
            />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
