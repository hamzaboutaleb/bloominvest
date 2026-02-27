"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react"; // Reusing Check icon for general purpose

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AboutPage = () => {
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
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const facts = [
    { icon: "🌍", label: "Remote-first team" },
    { icon: "📅", label: "Founded in 2020" },
    { icon: "💼", label: "50+ Projects delivered" },
    { icon: "❤️", label: "Passionate about startups" },
  ];

  const storyParagraphs = [
    {
      heading: "Bloom Invest started in 2020 when our founder Alex Mercer left a large digital agency frustrated by one thing — small businesses were being underserved.",
      body: "They were being sold template solutions, slow timelines, and confusing pricing. He knew there was a better way."
    },
    {
      heading: "Starting from a small home office in New York, Alex began taking on small business clients one by one —",
      body: "handling everything from strategy and design to development and launch. Word spread fast. Within a year the team had grown to four, and the projects kept coming."
    },
    {
      heading: "Today Bloom Invest is a boutique web agency with a fully remote team, clients across 12 countries, and a simple mission —",
      body: "help small businesses compete online with websites that are beautiful, fast, and built to convert."
    },
  ];

  const milestones = [
    { year: "2020", text: "Bloom Invest founded in New York" },
    { year: "2021", text: "First 10 clients — word of mouth only" },
    { year: "2023", text: "Team grows to 4 — first international client" },
    { year: "2025", text: "50+ projects delivered across 12 countries" },
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      {/* Decorative Warm Blobs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
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
        className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#FFEDD5] opacity-12 z-0"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          borderRadius: [
            "60% 40% 70% 30% / 50% 60% 40% 50%",
            "70% 30% 50% 50% / 40% 60% 60% 40%",
            "60% 40% 70% 30% / 50% 60% 40% 50%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#BFDBFE] opacity-10 z-0"
      />

      {/* Hero Content */}
      <section className="relative z-10 pt-[140px] pb-[80px] px-4">
        <div className="max-w-[780px] mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-8"
            >
              <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#1E293B] leading-[1.15] mb-8"
            >
              We&apos;re a small team with a big passion for building great websites
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#64748B] font-inter max-w-[600px] leading-relaxed mx-auto mb-12"
            >
              Bloom Invest was built on one simple belief — every small business deserves a website that works as hard as they do.
            </motion.p>

            {/* Fact Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {facts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  variants={pillVariants}
                  className="flex items-center space-x-2 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-full shadow-sm shadow-slate-200/50"
                >
                  <span className="text-base">{fact.icon}</span>
                  <span className="text-[13px] font-bold text-[#1E293B] whitespace-nowrap">
                    {fact.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative z-10 bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <div className="px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-6">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E293B] mb-6 font-sans">
              How Bloom Invest came to be
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="relative group"
            >
              <div className="rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                <Image 
                  src="/img/about.png" 
                  alt="Bloom Invest Story" 
                  width={600} 
                  height={400} 
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-4 left-4 bg-[#F97316] text-white font-bold px-4 py-2 rounded-[10px] shadow-lg -rotate-2">
                Est. 2020
              </div>
            </motion.div>

            {/* Right Side: Story Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="relative pl-8 flex flex-col justify-center"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute left-0 top-0 w-[3px] h-full bg-[#2563EB] rounded-full origin-top"
              />
              <div className="space-y-6">
                {storyParagraphs.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="text-[16px] text-[#64748B] font-inter leading-relaxed"
                  >
                    <span className="font-bold text-[#1E293B]">{paragraph.heading}</span> {paragraph.body}
                  </motion.p>
                ))}
              </div>

              {/* Founder Signature Block */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: storyParagraphs.length * 0.12 + 0.5 }}
                className="flex items-center space-x-4 mt-10"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <Image src="/img/team-member.png" alt="Alex Mercer" width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#1E293B] font-sans">Alex Mercer</h4>
                  <p className="text-[13px] text-slate-500 font-inter">Founder & Creative Director</p>
                  <p className="text-[#2563EB] italic text-base" style={{ fontFamily: 'Caveat, cursive' }}>— Alex</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Strip */}
          <div className="mt-24 relative overflow-hidden">
            {/* Dashed Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-[#E2E8F0] origin-left"
            />
            <div className="flex justify-between relative z-10">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center text-center max-w-[160px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 180, damping: 10, delay: 0.5 + idx * 0.2 }}
                    className="w-4 h-4 bg-[#2563EB] rounded-full mt-[-9px]"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 + 0.1 }}
                    className="text-[16px] font-bold text-[#2563EB] mb-2"
                  >
                    {milestone.year}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 + 0.2 }}
                    className="text-[13px] text-slate-500"
                  >
                    {milestone.text}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
