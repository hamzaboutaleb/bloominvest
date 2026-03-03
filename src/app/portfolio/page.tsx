"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

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

  const stats = [
    { icon: "🏆", label: "50+ Projects" },
    { icon: "⭐", label: "98% Satisfaction" },
    { icon: "🌍", label: "12 Countries" },
    { icon: "🚀", label: "5 Years Experience" },
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
          className="absolute top-[60%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 pt-[140px] pb-[80px] px-4">
        <div className="max-w-[760px] mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-8"
          >
            <Badge
              variants={itemVariants}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Our Portfolio
            </Badge>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-slate-900 leading-[1.15] tracking-tight"
            >
              Work we&apos;re proud to put our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                name on
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 font-normal max-w-[560px] leading-relaxed mx-auto"
            >
              Every project is a partnership. Here&apos;s what we&apos;ve built with some amazing clients.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 pt-2"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700"
                >
                  <span className="text-base">{stat.icon}</span>
                  <span className="text-[13px] font-semibold whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Featured Project"
            badgeIcon={<Sparkles className="w-4 h-4" />}
            badgeClassName="bg-[#F8FAFC]"
            title={
              <>
                A closer look at one of our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  favorites
                </span>
              </>
            }
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="relative group aspect-[16/10] rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-500"
            >
              <Image src="/img/portfolio.png" alt="Launchpad SaaS" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
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
                className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-blue-600 to-violet-600 rounded-full origin-top"
              />
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[13px] font-semibold rounded-full mb-6">
                Web Design + Development
              </div>
              <h3 className="text-[36px] font-bold text-slate-900 mb-6 tracking-tight">Launchpad SaaS</h3>
              <p className="text-[15px] text-slate-600 font-normal leading-relaxed mb-8 max-w-[500px]">
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
                      <span className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">{s.v}</span>
                      <span className="text-[13px] text-slate-500 font-normal">{s.l}</span>
                    </div>
                    {i < 2 && <div className="h-10 w-[1px] bg-slate-200 ml-8" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold text-sm flex items-center space-x-2 transition-all cursor-pointer shadow-lg hover:shadow-slate-900/25"
                >
                  <span className="relative z-10">View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative z-10 bg-white py-24 border-t border-slate-100">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer",
                  activeFilter === c
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
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
                  className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold text-sm hover:bg-white hover:text-slate-900 cursor-pointer transition-all">View Case Study</button>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <div className="inline-block px-3 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-semibold uppercase rounded-full mb-2">{p.category}</div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">{p.name}</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24 overflow-hidden border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Client Love"
            badgeIcon={<Sparkles className="w-4 h-4" />}
            badgeClassName="bg-[#F8FAFC]"
            title={
              <>
                Don&apos;t just take our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  word for it
                </span>
              </>
            }
            description="Here's what our clients say about working with Bloom Invest."
            className="mb-20"
          />

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute top-1/2 -left-4 lg:-left-16 -translate-y-1/2 z-20 hidden sm:block">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevTestimonial} className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -right-4 lg:-right-16 -translate-y-1/2 z-20 hidden sm:block">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextTestimonial} className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer">
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
                          "bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col h-full",
                          offset > 0 ? "hidden md:flex" : "flex"
                        )}
                      >
                        <Quote className="w-10 h-10 text-blue-600 opacity-10 mb-4" />
                        <p className="text-[15px] italic text-slate-600 font-normal leading-relaxed mb-8 flex-grow">&ldquo;{t.text}&rdquo;</p>
                        <div className="mt-auto">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-semibold text-sm">{t.name.charAt(0)}</div>
                            <div className="flex flex-col text-left">
                              <span className="text-sm font-bold text-slate-900 tracking-tight">{t.name}</span>
                              <span className="text-[12px] text-slate-500 font-normal">{t.role}, {t.company}</span>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <motion.div key={s} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + s * 0.05 }}>
                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
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
                    animate={{ width: testimonialIndex === idx ? 24 : 8, backgroundColor: testimonialIndex === idx ? "#1e293b" : "#e2e8f0" }}
                    className="h-2 rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Closing CTA Banner */}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Pill Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-xl mb-2"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm font-semibold tracking-wide">
                Work With Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl"
            >
              Got a project in mind?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Let&apos;s talk.
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-xl text-slate-300 font-normal max-w-[600px] leading-relaxed"
            >
              We take on a limited number of projects each month to ensure every client gets our full attention.
            </motion.p>

            {/* Urgency Line */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center space-x-2 text-sm text-slate-400 font-medium"
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

              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all cursor-pointer hover:border-white/40"
                >
                  View Our Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
