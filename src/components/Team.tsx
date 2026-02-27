"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Sparkles, Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Mercer",
    role: "Founder & Creative Director",
    bio: "Visionary leader turning ambitious ideas into stunning digital experiences.",
    avatar: "/img/avatar-1.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Sara Linn",
    role: "Lead Full-Stack Developer",
    bio: "Architecture expert building blazing fast, clean, and scalable codebases.",
    avatar: "/img/avatar-2.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Omar Tarek",
    role: "Lead UI/UX Designer",
    bio: "Crafting intuitive interfaces with deep empathy and pixel-perfect precision.",
    avatar: "/img/avatar-3.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Mia Chen",
    role: "Growth & SEO Strategist",
    bio: "Data-driven marketer helping ambitious brands get found and scale rapidly.",
    avatar: "/img/avatar-4.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
];

const TeamCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-blue-500/5 blur-3xl rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

      {/* Avatar Container */}
      <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-md group-hover:border-blue-50 transition-colors duration-500 z-10 flex-shrink-0">
        <Image 
          src={member.avatar} 
          alt={member.name} 
          fill 
          sizes="112px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
      </div>

      {/* Info */}
      <div className="flex-grow flex flex-col items-center z-10">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-blue-600">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-blue-600 mt-1 mb-4 uppercase tracking-wider">
          {member.role}
        </p>
        <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
          {member.bio}
        </p>
      </div>

      {/* Socials Divider */}
      <div className="w-full h-px bg-slate-100 my-6 group-hover:bg-blue-50 transition-colors duration-300 z-10" />

      {/* Socials Icons */}
      <div className="flex items-center space-x-5 mt-auto z-10">
        <a 
          href={member.socials.linkedin} 
          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a 
          href={member.socials.twitter} 
          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
          aria-label={`${member.name}'s Twitter`}
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a 
          href={member.socials.mail} 
          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/20"
          aria-label={`Email ${member.name}`}
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="w-full bg-white pt-24 pb-32 overflow-hidden relative border-t border-slate-100">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Intro Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-20 flex flex-col items-center"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-200 bg-[#F8FAFC] shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-semibold tracking-wide">
              Our Talented Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight max-w-2xl leading-[1.15]">
            The experts behind <br className="hidden md:block" />
            your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">big launch.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-[580px] leading-relaxed font-normal">
            We are a tight-knit squad of designers, developers, and strategists relentlessly focused on your success.
          </p>
        </motion.div>

        {/* Team Grid */}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index} 
              index={index}
              member={member}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
