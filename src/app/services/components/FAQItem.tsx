"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FAQItem = ({ faq, isOpen, onToggle, index }: { faq: any, isOpen: boolean, onToggle: () => void, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "bg-white/80 backdrop-blur-xl rounded-[20px] border transition-all duration-500 overflow-hidden",
        isOpen ? "border-blue-200 shadow-[0_8px_32px_rgba(0,0,0,0.06)] scale-[1.01]" : "border-slate-200/60 hover:border-slate-300 shadow-sm"
      )}
    >
      <button 
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
      >
        <span className={cn(
          "text-[17px] font-semibold tracking-tight transition-colors duration-300",
          isOpen ? "text-blue-600" : "text-[#1E293B] group-hover:text-blue-600"
        )}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
            isOpen ? "bg-blue-50 text-blue-600" : "bg-[#F8FAFC] text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
          )}
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-[#64748B] font-normal">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;
