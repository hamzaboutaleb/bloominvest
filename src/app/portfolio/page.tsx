"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronDown, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const categories = ["All", "Web Design", "Web Development", "E-commerce", "Branding"];

const projects = [
  { 
    id: 1, 
    name: "Brevo Coffee", 
    category: "Web Design", 
    tags: ["Web Design"],
    clientType: "Coffee Shop", 
    image: "/img/portfolio.png" 
  },
  { 
    id: 2, 
    name: "FlexCore Studio", 
    category: "Web Development", 
    tags: ["Web Development"],
    clientType: "Fitness Studio", 
    image: "/img/portfolio.png" 
  },
  { 
    id: 3, 
    name: "Launchpad SaaS", 
    category: "Web Design + Dev", 
    tags: ["Web Design", "Web Development"],
    clientType: "SaaS Startup", 
    image: "/img/portfolio.png" 
  },
  { 
    id: 4, 
    name: "Lumière Skincare", 
    category: "Branding + Web", 
    tags: ["Branding", "Web Design"],
    clientType: "Skincare Brand", 
    image: "/img/portfolio.png" 
  },
  { 
    id: 5, 
    name: "Casa Verde", 
    category: "E-commerce", 
    tags: ["E-commerce"],
    clientType: "Restaurant", 
    image: "/img/portfolio.png" 
  },
  { 
    id: 6, 
    name: "Nestly Realty", 
    category: "Web Design", 
    tags: ["Web Design"],
    clientType: "Real Estate", 
    image: "/img/portfolio.png" 
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Brevo Coffee",
    text: "Working with Bloom Invest was a game changer for our business. They took our rough idea and turned it into a website we're genuinely proud of. Sales through our site have doubled since launch.",
    avatar: "/img/avatar-1.png"
  },
  {
    id: 2,
    name: "James Okafor",
    role: "CEO",
    company: "Nestly Realty",
    text: "Professional, fast, and incredibly talented. They delivered our full real estate platform in just 6 weeks and the quality blew us away. Highly recommend to any business serious about their online presence.",
    avatar: "/img/avatar-2.png"
  },
  {
    id: 3,
    name: "Mei Lin",
    role: "Marketing Director",
    company: "Launchpad SaaS",
    text: "We'd worked with other agencies before but none came close to the level of care and detail Bloom Invest brought. Our conversion rate jumped 40% in the first month after launch.",
    avatar: "/img/avatar-3.png"
  },
  {
    id: 4,
    name: "Carlos Ruiz",
    role: "Owner",
    company: "Casa Verde",
    text: "I was nervous about investing in a new website but Bloom Invest made the whole process easy and transparent. The result speaks for itself — our online orders have tripled.",
    avatar: "/img/avatar-4.png"
  }
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const statPillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const stats = [
    { icon: "🏆", label: "50+ Projects" },
    { icon: "⭐", label: "98% Satisfaction" },
    { icon: "🌍", label: "12 Countries" },
    { icon: "🚀", label: "5 Years Experience" },
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      {/* Decorative Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          borderRadius: [
            "60% 40% 70% 30% / 50% 60% 40% 50%",
            "40% 60% 30% 70% / 60% 40% 50% 50%",
            "60% 40% 70% 30% / 50% 60% 40% 50%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#BFDBFE] opacity-12 z-0"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          borderRadius: [
            "60% 40% 70% 30% / 50% 60% 40% 50%",
            "70% 30% 50% 50% / 40% 60% 60% 40%",
            "60% 40% 70% 30% / 50% 60% 40% 50%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-[#FFEDD5] opacity-10 z-0"
      />

      {/* Hero Content */}
      <section className="relative z-10 pt-[140px] pb-[80px] px-4">
        <div className="max-w-[760px] mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div
              variants={itemVariants}
              className="px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-8"
            >
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wider">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#1E293B] leading-[1.15] mb-8"
            >
              Work we&apos;re proud to put our name on
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#64748B] font-inter max-w-[560px] leading-relaxed mx-auto mb-12"
            >
              Every project is a partnership. Here&apos;s what we&apos;ve built with some amazing clients.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={statPillVariants}
                  className="flex items-center space-x-2 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-full shadow-sm shadow-slate-200/50"
                >
                  <span className="text-base">{stat.icon}</span>
                  <span className="text-[13px] font-bold text-[#1E293B] whitespace-nowrap">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24 border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <div className="px-4 py-1.5 bg-[#FFF7ED] rounded-full mb-6">
              <span className="text-[#F97316] text-xs font-bold uppercase tracking-wider">
                Featured Project
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              A closer look at one of our favorites
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="relative group aspect-[16/10] rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <Image src="/img/portfolio.png" alt="Launchpad SaaS" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="relative pl-8 flex flex-col items-start"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute left-0 top-0 w-[3px] h-full bg-[#2563EB] rounded-full origin-top"
              />
              <div className="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[13px] font-bold rounded-full mb-6">
                Web Design + Development
              </div>
              <h3 className="text-[36px] font-bold text-[#1E293B] mb-6">Launchpad SaaS</h3>
              <p className="text-[16px] text-[#64748B] font-inter leading-relaxed mb-8 max-w-[500px]">
                Launchpad needed a high-converting marketing site that could grow with their product. We designed and built a fully custom Next.js website with dynamic animations and a seamless onboarding flow.
              </p>
              <div className="flex items-center space-x-8 mb-10">
                {[
                  { v: "+320%", l: "Organic traffic" },
                  { v: "1.8s", l: "Avg load time" },
                  { v: "4.7★", l: "Client rating" }
                ].map((s, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col">
                      <span className="text-[28px] font-bold text-[#2563EB]">{s.v}</span>
                      <span className="text-[13px] text-[#64748B] font-inter">{s.l}</span>
                    </div>
                    {i < 2 && <div className="h-10 w-[1px] bg-[#E2E8F0] ml-8" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-[#2563EB] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg hover:bg-blue-700 transition-all cursor-pointer">
                  View Full Case Study &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative z-10 bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer",
                  activeFilter === c ? "bg-[#2563EB] text-white shadow-lg" : "bg-white border border-[#E2E8F0] text-[#1E293B] hover:bg-[#EFF6FF]"
                )}
              >
                {c}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-[16px] shadow-sm border border-[#E2E8F0] overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#1E3A5F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-bold text-sm hover:bg-white hover:text-[#1E3A5F] cursor-pointer transition-all">View Case Study</button>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <div className="px-2 py-0.5 bg-[#DBEAFE] text-[#2563EB] text-[10px] font-bold uppercase rounded-full inline-block mb-2">{p.category}</div>
                      <h3 className="text-base font-bold text-[#1E293B]">{p.name}</h3>
                    </div>
                    <ArrowRight className="text-[#2563EB] w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24 overflow-hidden border-t border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 flex flex-col items-center"
          >
            <div className="px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-6">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-wider">Client Love</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">Don&apos;t just take our word for it</h2>
            <p className="text-lg text-[#64748B] font-inter max-w-[480px]">Here&apos;s what our clients say about working with Bloom Invest.</p>
          </motion.div>

          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute top-1/2 -left-4 lg:-left-16 -translate-y-1/2 z-20 hidden sm:block">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevTestimonial} className="w-11 h-11 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center text-[#2563EB] shadow-sm hover:bg-[#2563EB] hover:text-white transition-all cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -right-4 lg:-right-16 -translate-y-1/2 z-20 hidden sm:block">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextTestimonial} className="w-11 h-11 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center text-[#2563EB] shadow-sm hover:bg-[#2563EB] hover:text-white transition-all cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {[0, 1, 2].map((offset) => {
                    const idx = (testimonialIndex + offset) % testimonials.length;
                    const t = testimonials[idx];
                    return (
                      <div 
                        key={`${t.id}-${offset}`}
                        className={cn(
                          "bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-all duration-300 flex flex-col h-full",
                          offset > 0 ? "hidden md:flex" : "flex"
                        )}
                      >
                        <Quote className="w-10 h-10 text-[#2563EB] opacity-10 mb-4" />
                        <p className="text-[15px] italic text-[#64748B] font-inter leading-relaxed mb-8 flex-grow">&ldquo;{t.text}&rdquo;</p>
                        <div className="mt-auto">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#94A3B8] font-bold text-sm">{t.name.charAt(0)}</div>
                            <div className="flex flex-col text-left">
                              <span className="text-sm font-bold text-[#1E293B]">{t.name}</span>
                              <span className="text-[12px] text-[#64748B] font-inter">{t.role}, {t.company}</span>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <motion.div key={s} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + s * 0.05 }}>
                                <Star className="w-3.5 h-3.5 text-[#F97316] fill-[#F97316]" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-12">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setTestimonialIndex(idx)} className="p-2 focus:outline-none cursor-pointer">
                  <motion.div
                    animate={{ width: testimonialIndex === idx ? 24 : 8, backgroundColor: testimonialIndex === idx ? "#2563EB" : "#E2E8F0" }}
                    className="h-2 rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Closing CTA Banner */}
      <section className="relative w-full bg-[#1E3A5F] py-[120px] overflow-hidden">
        {/* Background Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] z-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Decorative Rotating Circle Outline */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0"
        />

        {/* Decorative Pulsing Circle */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#2563EB]/8 rounded-full blur-3xl z-0"
        />

        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="px-4 py-1.5 bg-white/12 rounded-full mb-8"
            >
              <span className="text-white text-xs font-bold uppercase tracking-wider font-sans">
                Work With Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] font-sans mb-8"
            >
              Got a project in mind? Let&apos;s talk.
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg text-white/75 font-inter max-w-[560px] leading-relaxed mb-6"
            >
              We take on a limited number of projects each month to ensure every client gets our full attention.
            </motion.p>

            {/* Urgency Line */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center space-x-2 text-sm text-white/60 font-inter mb-12"
            >
              <span className="text-green-400">🟢</span>
              <span>Currently accepting new projects for Q2 2025</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto bg-[#F97316] text-white px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-[#F97316]/20 transition-all cursor-pointer"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto border border-white text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white hover:text-[#1E3A5F] transition-all duration-300 cursor-pointer"
                >
                  View Our Services
                </motion.button>
              </Link>
            </motion.div>

            {/* Reassurance Row */}
            <div className="flex flex-wrap justify-center items-center gap-y-2">
              {[
                "Free first consultation",
                "No long-term contracts",
                "Results guaranteed"
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  transition={{ delay: 0.8 + idx * 0.08 }}
                  className="flex items-center"
                >
                  <span className="text-white/60 text-[13px] font-inter">
                    <span className="mr-1">✓</span> {text}
                  </span>
                  {idx < 2 && <div className="h-3 w-[1px] bg-white/20 mx-4 hidden sm:block" />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>

  );
};

export default PortfolioPage;
