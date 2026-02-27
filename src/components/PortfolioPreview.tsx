"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

const projects = [
  {
    name: "Aura Living Checkout",
    client: "E-Commerce Experience",
    image: "/img/portfolio.jpeg",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    name: "Apex Logistics Platform",
    client: "SaaS Dashboard Flow",
    image: "/img/portfolio-2.png",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    name: "Creative Minds Studio",
    client: "Digital Art Portfolio",
    image: "/img/portfolio-3.png",
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    name: "HarvestLink Mobile App",
    client: "Direct-to-Consumer UI",
    image: "/img/portfolio-4.png",
    color: "bg-green-50 text-green-600 border-green-200",
  },
];

const ProjectCard = ({ name, client, image, index, color }: { name: string, client: string, image: string, index: number, color: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-200 mb-6 bg-slate-50 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] group-hover:-translate-y-2 group-hover:border-blue-200 flex items-center justify-center p-8">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 rounded-3xl" />
      </div>

      {/* Project Meta Info */}
      <div className="flex flex-col space-y-3 px-2">
        <div className="flex items-center justify-between">
          <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${color}`}>
            {client}
          </div>
          
          {/* Animated Arrow */}
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-blue-600">
          {name}
        </h3>
      </div>
    </motion.div>
  );
};

const PortfolioPreview = () => {
  return (
    <section id="portfolio" className="w-full bg-[#F8FAFC] pt-24 pb-32 overflow-hidden relative border-t border-slate-100">
      
      {/* Ambient background blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -translate-y-[40%] translate-x-[20%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Intro Block */}
        <SectionHeader
          badgeText="Selected Work"
          badgeIcon={<Sparkles className="w-4 h-4" />}
          badgeClassName="border-blue-100"
          title={
            <>
              Digital experiences <br className="hidden md:block" />
              that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">results.</span>
            </>
          }
          description="A curated selection of stunning tech platforms, conversion-optimized interfaces, and premium brand identities."
        />

        {/* Portfolio Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-24"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              index={index}
              name={project.name} 
              client={project.client} 
              image={project.image}
              color={project.color}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-slate-500 font-medium tracking-wide">
            Want to see our full design archive?
          </p>
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg hover:shadow-slate-900/25"
            >
              <span className="relative z-10 w-max">View Full Portfolio</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300 ml-2">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioPreview;
