"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const AboutPage = () => {
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

  const facts = [
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "Remote-first team" },
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "Founded in 2020" },
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "50+ Projects delivered" },
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "Passionate about startups" },
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
        <div className="max-w-[780px] mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-8"
          >
            {/* Badge */}
            <Badge
              variants={itemVariants}
              icon={<Sparkles className="w-4 h-4" />}
            >
              About Us
            </Badge>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-slate-900 leading-[1.15] tracking-tight"
            >
              We&apos;re a small team with a big passion for building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                great websites
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 font-normal max-w-[600px] leading-relaxed mx-auto"
            >
              Bloom Invest was built on one simple belief — every small business deserves a website that works as hard as they do.
            </motion.p>

            {/* Fact Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 pt-2"
            >
              {facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-slate-600 text-sm font-medium"
                >
                  {fact.icon}
                  <span>{fact.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative z-10 bg-white py-24 border-t border-slate-100">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Intro Block */}
          <SectionHeader
            badgeText="Our Story"
            badgeIcon={<Sparkles className="w-4 h-4" />}
            badgeClassName="bg-[#F8FAFC]"
            title={
              <>
                How Bloom Invest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  came to be.
                </span>
              </>
            }
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="relative group"
            >
              <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] group-hover:border-blue-200 transition-all duration-500">
                <Image
                  src="/img/about.png"
                  alt="Bloom Invest Story"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-4 left-4 bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg -rotate-2 text-sm">
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
                className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-blue-600 to-violet-600 rounded-full origin-top"
              />
              <div className="space-y-6">
                {storyParagraphs.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="text-[15px] text-slate-600 font-normal leading-relaxed"
                  >
                    <span className="font-bold text-slate-900">{paragraph.heading}</span> {paragraph.body}
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
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-4 border-slate-50 shadow-md">
                  <Image src="/img/team-member.png" alt="Alex Mercer" width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-900 tracking-tight">Alex Mercer</h4>
                  <p className="text-[13px] text-slate-500 font-normal">Founder & Creative Director</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 italic text-base font-semibold" style={{ fontFamily: 'Caveat, cursive' }}>— Alex</p>
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
              className="absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-slate-300 origin-left"
            />
            <div className="flex justify-between relative z-10">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center text-center max-w-[160px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 180, damping: 10, delay: 0.5 + idx * 0.2 }}
                    className="w-4 h-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mt-[-9px]"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 + 0.1 }}
                    className="text-[16px] font-bold text-blue-600 mb-2"
                  >
                    {milestone.year}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 + 0.2 }}
                    className="text-[13px] text-slate-500 font-normal"
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
