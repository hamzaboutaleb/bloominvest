"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Dribbble, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full bg-slate-950 pt-24 pb-12 overflow-hidden relative border-t border-slate-800">
      
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >
          {/* Column 1: Brand (Takes up more space) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                B
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                Bloom<span className="text-slate-400 font-normal">Invest</span>
              </div>
            </Link>
            <p className="text-[15px] text-slate-400 leading-relaxed font-normal max-w-[280px]">
              We help ambitious businesses scale digitally with stunning design, robust engineering, and strategic marketing.
            </p>
            <div className="flex items-center space-x-3 pt-4">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
                { icon: <Dribbble className="w-4 h-4" />, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Company
            </h4>
            <div className="flex flex-col space-y-4">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((link) => (
                <Link 
                  key={link} 
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="text-[15px] text-slate-400 hover:text-white transition-colors duration-200 block w-fit"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Services
            </h4>
            <div className="flex flex-col space-y-4">
              {[
                "Web Design", 
                "Web Development", 
                "E-commerce", 
                "SEO & Performance", 
                "Brand Identity", 
                "Maintenance"
              ].map((service) => (
                <Link 
                  key={service} 
                  href="/services"
                  className="text-[15px] text-slate-400 hover:text-white transition-colors duration-200 block w-fit"
                >
                  {service}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 lg:col-span-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-5">
              <a href="mailto:hello@bloominvest.com" className="group flex items-center space-x-3 text-[15px] text-slate-400 hover:text-white transition-colors w-fit">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>hello@bloominvest.com</span>
              </a>
              <a href="tel:+15550000000" className="group flex items-center space-x-3 text-[15px] text-slate-400 hover:text-white transition-colors w-fit">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+1 (555) 000-0000</span>
              </a>
              <div className="flex items-center space-x-3 text-[15px] text-slate-400 w-fit">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>New York, NY</span>
              </div>
            </div>
            
            <motion.div className="pt-4">
              <Link 
                href="/contact"
                className="group inline-flex items-center space-x-2 text-[15px] font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-blue-400/10 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-slate-900 transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-slate-500 font-normal">
            © {new Date().getFullYear()} Bloom Invest. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[14px] text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
