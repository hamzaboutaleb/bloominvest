import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-[24px] border border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-slate-300/80 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
    >
      <div className="flex items-center space-x-4 mb-6 relative z-10">
        <div className="relative w-14 h-14 rounded-[16px] bg-[#F8FAFC] flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:border-transparent transition-all duration-500 overflow-hidden">
          {/* Gradient Hover Background for Icon */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 text-[#334155] group-hover:text-white transition-colors duration-300">
            {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#1E293B] tracking-tight transition-colors duration-300">
          {service.title}
        </h3>
      </div>
      
      <div className="w-full h-[1px] bg-slate-100 mb-6 relative z-10" />

      <p className="text-[15px] text-[#64748B] font-normal leading-relaxed mb-8 relative z-10">
        {service.description}
      </p>

      <ul className="space-y-4 mb-10 flex-grow relative z-10">
        {service.deliverables.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start space-x-3 text-sm text-[#64748B] font-medium">
            <Check className="w-4 h-4 text-[#1E293B] group-hover:text-blue-600 transition-colors duration-300 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="inline-flex items-center mt-auto w-fit group/link relative z-10">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden bg-[#1E293B] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center">
            Learn more <ArrowRight className="ml-2 w-4 h-4" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 z-0"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
