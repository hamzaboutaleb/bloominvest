"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Dribbble,
  ArrowRight,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CustomSelect from "@/components/CustomSelect";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    agree: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.firstName.length < 2) newErrors.firstName = "First name is too short";
    if (formData.lastName.length < 2) newErrors.lastName = "Last name is too short";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email";
    
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.budget) newErrors.budget = "Please select a budget";
    
    if (formData.message.length < 20) newErrors.message = "Please tell us a bit more (min 20 chars)";
    
    if (!formData.agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      
      // Auto-dismiss toast
      setTimeout(() => setShowToast(false), 4000);
    }, 2000);
  };

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

  const promises = [
    { icon: "💬", label: "We reply within 24h" },
    { icon: "📞", label: "Free first consultation" },
    { icon: "🤝", label: "No commitment needed" },
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      <style jsx global>{`
        @keyframes drift-up {
          from { background-position: 0 0; }
          to { background-position: 0 -24px; }
        }
        .animate-drift-up {
          animation: drift-up 4s linear infinite;
        }
      `}</style>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-24 right-6 z-[100] bg-white border-l-4 border-green-500 shadow-2xl rounded-lg p-4 flex items-center space-x-4 min-w-[300px]"
          >
            <CheckCircle2 className="text-green-500 w-6 h-6" />
            <div>
              <p className="font-bold text-[#1E293B] text-sm">Message Sent!</p>
              <p className="text-slate-500 text-xs">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#FFEDD5] opacity-15 z-0"
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
        <div className="max-w-[700px] mx-auto text-center">
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
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#1E293B] leading-[1.15] mb-8"
            >
              Let&apos;s start a conversation
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#64748B] font-inter max-w-[540px] leading-relaxed mx-auto mb-12"
            >
              Whether you have a project in mind or just want to explore what&apos;s possible — we&apos;d love to hear from you.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {promises.map((p, idx) => (
                <motion.div
                  key={idx}
                  variants={pillVariants}
                  className="flex items-center space-x-2 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-full shadow-sm shadow-slate-200/50"
                >
                  <span className="text-base">{p.icon}</span>
                  <span className="text-[13px] font-bold text-[#1E293B] whitespace-nowrap">
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Split Form Section */}
      <section id="contact-form" className="relative z-10 bg-white py-24 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex flex-col items-start"
            >
              <div className="mb-10 relative">
                <Image 
                  src="/img/young-man.png" 
                  alt="Contact Representative" 
                  width={320} 
                  height={320} 
                  className="rounded-2xl object-cover"
                />
              </div>
              
              <h2 className="text-[28px] font-bold text-[#1E293B] font-sans mb-4">
                We&apos;d love to hear about your project
              </h2>
              <p className="text-[15px] text-[#64748B] font-inter leading-relaxed mb-6 max-w-[440px]">
                Fill in the form and we&apos;ll get back to you within 24 hours. Prefer to talk? Book a free call directly.
              </p>
              
              <Link href="#" className="group flex items-center text-[#F97316] font-bold text-base hover:underline mb-8 transition-all">
                Book a Free Call 
                <motion.span whileHover={{ x: 4 }} className="ml-2">
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>

              <div className="w-full h-[1px] bg-[#E2E8F0] mb-10" />

              <div className="space-y-8 mb-12 w-full">
                {[
                  { icon: <Mail />, label: "Email", value: "hello@bloominvest.com" },
                  { icon: <Phone />, label: "Phone", value: "+1 (555) 000-0000" },
                  { icon: <MapPin />, label: "Location", value: "New York, NY — Remote Worldwide" },
                  { icon: <Clock />, label: "Hours", value: "Mon–Fri, 9am–6pm EST" },
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(detail.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-5 h-5" })}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{detail.label}</span>
                      <span className="text-[15px] font-bold text-[#1E293B] font-sans">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-5">
                {[Linkedin, Twitter, Instagram, Dribbble].map((Icon, idx) => (
                  <motion.a 
                    key={idx}
                    href="#" 
                    whileHover={{ scale: 1.15 }}
                    className="text-slate-400 hover:text-[#2563EB] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#E2E8F0]">
                <div className="grid grid-cols-1 gap-6">
                  {/* Row 1: Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-[#1E293B] font-sans uppercase tracking-wide">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John"
                        className={cn(
                          "w-full px-4 py-3 bg-white border rounded-[10px] text-[15px] font-inter placeholder:text-slate-400 transition-all outline-none",
                          errors.firstName ? "border-red-500" : "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
                        )}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                      <AnimatePresence>
                        {errors.firstName && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-medium">{errors.firstName}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-[#1E293B] font-sans uppercase tracking-wide">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe"
                        className={cn(
                          "w-full px-4 py-3 bg-white border rounded-[10px] text-[15px] font-inter placeholder:text-slate-400 transition-all outline-none",
                          errors.lastName ? "border-red-500" : "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
                        )}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                      <AnimatePresence>
                        {errors.lastName && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-medium">{errors.lastName}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E293B] font-sans uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className={cn(
                        "w-full px-4 py-3 bg-white border rounded-[10px] text-[15px] font-inter placeholder:text-slate-400 transition-all outline-none",
                        errors.email ? "border-red-500" : "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
                      )}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-medium">{errors.email}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E293B] font-sans uppercase tracking-wide">Phone <span className="text-slate-400 capitalize font-medium">(optional)</span></label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-[10px] text-[15px] font-inter placeholder:text-slate-400 focus:border-[#2563EB] outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Selects */}
                  <CustomSelect 
                    label="Service Needed"
                    placeholder="Select a service"
                    value={formData.service}
                    options={[
                      { label: "Web Design", value: "Web Design" },
                      { label: "Web Development", value: "Web Development" },
                      { label: "E-commerce", value: "E-commerce" },
                      { label: "SEO & Performance", value: "SEO & Performance" },
                      { label: "Brand Identity", value: "Brand Identity" },
                      { label: "Maintenance", value: "Maintenance" },
                      { label: "Other", value: "Other" },
                    ]}
                    onChange={(val) => setFormData({ ...formData, service: val })}
                  />
                  {errors.service && <p className="text-red-500 text-xs font-medium -mt-4">{errors.service}</p>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <CustomSelect 
                      label="Project Budget"
                      placeholder="Select budget"
                      value={formData.budget}
                      options={[
                        { label: "Under $1,000", value: "Under $1,000" },
                        { label: "$1,000–$3,000", value: "$1,000–$3,000" },
                        { label: "$3,000–$7,000", value: "$3,000–$7,000" },
                        { label: "$7,000–$15,000", value: "$7,000–$15,000" },
                        { label: "$15,000+", value: "$15,000+" },
                        { label: "Not Sure Yet", value: "Not Sure Yet" },
                      ]}
                      onChange={(val) => setFormData({ ...formData, budget: val })}
                    />
                    <CustomSelect 
                      label="Project Timeline"
                      placeholder="Select timeline"
                      value={formData.timeline}
                      options={[
                        { label: "ASAP", value: "ASAP" },
                        { label: "1–2 Months", value: "1–2 Months" },
                        { label: "3–6 Months", value: "3–6 Months" },
                        { label: "6+ Months", value: "6+ Months" },
                        { label: "Just Exploring", value: "Just Exploring" },
                      ]}
                      onChange={(val) => setFormData({ ...formData, timeline: val })}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E293B] font-sans uppercase tracking-wide">Tell us about your project</label>
                    <textarea 
                      placeholder="Hey, we're looking to build a new..."
                      className={cn(
                        "w-full px-4 py-3 bg-white border rounded-[10px] text-[15px] font-inter placeholder:text-slate-400 transition-all outline-none min-h-[140px] resize-y",
                        errors.message ? "border-red-500" : "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
                      )}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-medium">{errors.message}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Agree Checkbox */}
                  <div className="flex flex-col space-y-2">
                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input 
                          type="checkbox" 
                          className="peer absolute opacity-0 w-5 h-5 cursor-pointer"
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        />
                        <div className={cn(
                          "w-5 h-5 border-2 rounded-[4px] transition-all duration-200 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB]",
                          errors.agree ? "border-red-500" : "border-[#E2E8F0]"
                        )}>
                          {formData.agree && <CheckCircle2 className="w-4 h-4 text-white p-0.5" />}
                        </div>
                      </div>
                      <span className="text-[13px] text-[#64748B] font-inter leading-tight select-none">
                        I agree to the <Link href="#" className="text-[#2563EB] hover:underline">Privacy Policy</Link> and <Link href="#" className="text-[#2563EB] hover:underline">Terms of Service</Link>
                      </span>
                    </label>
                    {errors.agree && <p className="text-red-500 text-xs font-medium ml-8">{errors.agree}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    className={cn(
                      "w-full py-4 rounded-full font-bold text-base shadow-lg transition-all flex items-center justify-center space-x-3 cursor-pointer",
                      status === "success" ? "bg-green-500 text-white" : "bg-[#F97316] text-white hover:brightness-110 shadow-[#F97316]/20",
                      status === "loading" && "opacity-80 cursor-not-allowed"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send My Message</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-[12px] text-slate-400 font-inter text-center">
                    🔒 Your information is safe with us
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Office Info Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 flex flex-col items-center"
          >
            <div className="px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-6">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                Find Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E293B] mb-6 font-sans">
              We&apos;re based in New York — but we work everywhere
            </h2>
            <p className="text-lg text-[#64748B] max-w-[520px] font-inter leading-relaxed">
              Our team is fully remote-friendly. Wherever you are in the world, we&apos;re just a message away.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Side: Interactive Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex flex-col space-y-4"
            >
              <p className="text-slate-500 text-[13px] font-inter text-center lg:text-left">
                📍 New York, NY — Our home base
              </p>
              <div className="relative w-full h-[420px] rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)] border-2 border-[#2563EB]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <Link 
                href="https://www.google.com/maps/dir//New+York,+NY" 
                target="_blank"
                className="text-[#2563EB] text-sm font-bold hover:underline self-center lg:self-start transition-all"
              >
                Get Directions &rarr;
              </Link>
            </motion.div>

            {/* Right Side: Office Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                {
                  icon: <MapPin />,
                  title: "Our Location",
                  detail: "123 Design Street, Manhattan New York, NY 10001, United States"
                },
                {
                  icon: <Clock />,
                  title: "Working Hours",
                  detail: "Monday to Friday: 9:00am – 6:00pm EST Saturday: 10:00am – 2:00pm EST"
                },
                {
                  icon: <Mail />,
                  title: "Email Us",
                  detail: "hello@bloominvest.com support@bloominvest.com"
                },
                {
                  icon: <Phone />,
                  title: "Call Us",
                  detail: "+1 (555) 000-0000 Mon–Fri during business hours only"
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="bg-white p-6 rounded-[14px] border border-[#E2E8F0] shadow-sm flex items-start space-x-5 group hover:border-[#2563EB] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    {React.cloneElement(card.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#1E293B] mb-1 font-sans">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 font-inter leading-relaxed">
                      {card.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
            className="w-full bg-[#EFF6FF] rounded-[16px] border border-[#BFDBFE] p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8"
          >
            <div className="flex flex-col space-y-1">
              <h3 className="text-xl font-bold text-[#1E293B] font-sans">
                Prefer a face-to-face meeting?
              </h3>
              <p className="text-[15px] text-slate-500 font-inter">
                We offer virtual meetings via Zoom, Google Meet, or your preferred platform.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#2563EB] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-blue-200 cursor-pointer whitespace-nowrap"
            >
              Book a Free Call &rarr;
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#2563EB] to-[#F97316] py-[140px] overflow-hidden">
        {/* Background Dot Pattern (Drifting) */}
        <div 
          className="absolute inset-0 opacity-[0.04] z-0 animate-drift-up"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Pulsing Ripple Circles */}
        {[800, 500, 300].map((size, idx) => (
          <motion.div
            key={size}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: idx * 0.8 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full z-0 pointer-events-none"
            style={{ width: size, height: size }}
          />
        ))}

        {/* Drifting Blobs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/6 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/6 rounded-full blur-3xl z-0"
        />

        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-4 py-1.5 bg-white/15 rounded-full mb-8"
            >
              <span className="text-white text-xs font-bold uppercase tracking-wider font-sans">
                Let&apos;s Do This
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] font-sans mb-8 max-w-[680px]"
            >
              Your next great website starts with a conversation
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-white/80 font-inter max-w-[580px] leading-relaxed mb-8"
            >
              We&apos;re selective about the projects we take on because we give each one everything we&apos;ve got. If you&apos;re serious about growing online — so are we.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }}
              className="w-[60px] h-[1px] bg-white/15 mb-8"
            />

            {/* Founder Promises */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="flex flex-wrap justify-center items-center gap-y-2 mb-12"
            >
              {[
                "🤝 We treat your business like our own",
                "💡 Every solution is custom built",
                "📈 We measure success by your growth"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-white/75 text-[15px] font-inter">{text}</span>
                  {idx < 2 && <div className="w-1 h-1 bg-white/30 rounded-full mx-4 hidden sm:block" />}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
              <Link href="#contact-form" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto bg-white text-[#2563EB] px-10 py-4.5 rounded-full font-bold text-base shadow-xl transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  Start Your Project Today
                </motion.button>
              </Link>
              <Link href="#contact-form" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto border-2 border-white text-white px-10 py-4.5 rounded-full font-bold text-base hover:bg-white hover:text-[#2563EB] transition-all duration-300 cursor-pointer"
                >
                  Send Us a Message
                </motion.button>
              </Link>
            </div>

            {/* Warm Sign-off */}
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 1.2 }}
              className="text-white/50 text-sm italic font-inter"
            >
              — The Bloom Invest Team 🌸
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
