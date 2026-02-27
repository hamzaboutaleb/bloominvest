"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Code2, 
  ShoppingCart, 
  Search, 
  Settings, 
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "./ui/SectionHeader";

const services = [
  {
    icon: <Palette className="w-5 h-5 text-blue-600" />,
    title: "Web Design",
    description: "Beautiful, conversion-focused designs meticulously tailored to your unique brand identity.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    title: "Web Development",
    description: "Blazing fast, highly scalable websites built from the ground up with modern technologies.",
  },
  {
    icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    title: "E-commerce",
    description: "Intuitive online stores that make browsing simple and driving sales completely seamless.",
  },
  {
    icon: <Search className="w-5 h-5 text-blue-600" />,
    title: "SEO & Performance",
    description: "Technically optimized infrastructure to ensure your site ranks higher and loads instantly.",
  },
  {
    icon: <Settings className="w-5 h-5 text-blue-600" />,
    title: "Maintenance & Support",
    description: "Ongoing proactive care so your digital presence stays fast, secure, and always up to date.",
  },
  {
    icon: <Target className="w-5 h-5 text-blue-600" />,
    title: "Brand Identity",
    description: "Cohesive logos, color palettes, and visual systems that make your brand unforgettable.",
  },
];

const ServiceCard = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-300 group cursor-pointer flex flex-col h-full"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
        {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { 
          className: "w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300"
        })}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-slate-600 font-normal flex-grow">
        {description}
      </p>
      
      {/* Subtle Link Indicator */}
      <div className="mt-8 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </motion.div>
  );
};

const ServicesPreview = () => {
  return (
    <section id="services" className="w-full bg-white pt-24 pb-32 overflow-hidden relative border-t border-slate-100">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Intro Block */}
        <SectionHeader
          badgeText="What We Do"
          badgeIcon={<Sparkles className="w-4 h-4" />}
          badgeClassName="bg-[#F8FAFC]"
          title={
            <>
              Everything you need to <br className="hidden md:block" />
              grow your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">online.</span>
            </>
          }
          description="We provide end-to-end digital solutions, from stunning web design to highly scalable full-stack development."
        />

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-20"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex justify-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#F8FAFC" }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer shadow-sm hover:border-slate-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPreview;
