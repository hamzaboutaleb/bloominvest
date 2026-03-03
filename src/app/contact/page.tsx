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
  CheckCircle2,
  Sparkles,
  Zap,
  MessageCircle,
  Lock,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CustomSelect from "@/components/CustomSelect";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

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

  const promises = [
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "We reply within 24h" },
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "Free first consultation" },
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "No commitment needed" },
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden font-sans">
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
              <p className="font-bold text-slate-900 text-sm">Message Sent!</p>
              <p className="text-slate-500 text-xs">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
        <div className="max-w-[700px] mx-auto text-center">
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
              Contact Us
            </Badge>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-slate-900 leading-[1.15] tracking-tight"
            >
              Let&apos;s start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                conversation
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 font-normal max-w-[540px] leading-relaxed mx-auto"
            >
              Whether you have a project in mind or just want to explore what&apos;s possible — we&apos;d love to hear from you.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 pt-2"
            >
              {promises.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-slate-600 text-sm font-medium"
                >
                  {p.icon}
                  <span>{p.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Split Form Section */}
      <section id="contact-form" className="relative z-10 bg-white py-24 border-t border-slate-100">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex flex-col items-start"
            >
              <div className="mb-10 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/img/young-man.png"
                  alt="Contact Representative"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>

              <h2 className="text-[28px] font-bold text-slate-900 tracking-tight mb-4">
                We&apos;d love to hear about your project
              </h2>
              <p className="text-[15px] text-slate-600 font-normal leading-relaxed mb-6 max-w-[440px]">
                Fill in the form and we&apos;ll get back to you within 24 hours. Prefer to talk? Book a free call directly.
              </p>

              <Link href="#" className="group flex items-center text-blue-600 font-semibold text-base hover:underline mb-8 transition-all">
                Book a Free Call
                <motion.span whileHover={{ x: 4 }} className="ml-2">
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>

              <div className="w-full h-[1px] bg-slate-200 mb-10" />

              <div className="space-y-8 mb-12 w-full">
                {[
                  { icon: <Mail />, label: "Email", value: "hello@bloominvest.com" },
                  { icon: <Phone />, label: "Phone", value: "+1 (555) 000-0000" },
                  { icon: <MapPin />, label: "Location", value: "New York, NY — Remote Worldwide" },
                  { icon: <Clock />, label: "Hours", value: "Mon–Fri, 9am–6pm EST" },
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {React.cloneElement(detail.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-5 h-5" })}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">{detail.label}</span>
                      <span className="text-[15px] font-semibold text-slate-900 tracking-tight">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-5">
                {[Linkedin, Twitter, Instagram, Dribbble].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
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
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.06)] transition-shadow duration-500">
                <div className="grid grid-cols-1 gap-6">
                  {/* Row 1: Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-slate-900 uppercase tracking-wide">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className={cn(
                          "w-full px-4 py-3 bg-[#F8FAFC] border rounded-xl text-sm font-normal text-slate-900 placeholder:text-slate-400 transition-all outline-none",
                          errors.firstName ? "border-red-500" : "border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
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
                      <label className="text-[13px] font-bold text-slate-900 uppercase tracking-wide">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className={cn(
                          "w-full px-4 py-3 bg-[#F8FAFC] border rounded-xl text-sm font-normal text-slate-900 placeholder:text-slate-400 transition-all outline-none",
                          errors.lastName ? "border-red-500" : "border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
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
                    <label className="text-[13px] font-bold text-slate-900 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={cn(
                        "w-full px-4 py-3 bg-[#F8FAFC] border rounded-xl text-sm font-normal text-slate-900 placeholder:text-slate-400 transition-all outline-none",
                        errors.email ? "border-red-500" : "border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
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
                    <label className="text-[13px] font-bold text-slate-900 uppercase tracking-wide">Phone <span className="text-slate-400 capitalize font-medium">(optional)</span></label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all"
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
                    <label className="text-[13px] font-bold text-slate-900 uppercase tracking-wide">Tell us about your project</label>
                    <textarea
                      placeholder="Hey, we're looking to build a new..."
                      className={cn(
                        "w-full px-4 py-3 bg-[#F8FAFC] border rounded-xl text-sm font-normal text-slate-900 placeholder:text-slate-400 transition-all outline-none min-h-[140px] resize-y",
                        errors.message ? "border-red-500" : "border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
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
                          "w-5 h-5 border-2 rounded-[4px] transition-all duration-200 peer-checked:bg-blue-600 peer-checked:border-blue-600",
                          errors.agree ? "border-red-500" : "border-slate-300"
                        )}>
                          {formData.agree && <CheckCircle2 className="w-4 h-4 text-white p-0.5" />}
                        </div>
                      </div>
                      <span className="text-[13px] text-slate-600 font-normal leading-tight select-none">
                        I agree to the <Link href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link> and <Link href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</Link>
                      </span>
                    </label>
                    {errors.agree && <p className="text-red-500 text-xs font-medium ml-8">{errors.agree}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className={cn(
                      "group relative overflow-hidden w-full py-4 rounded-full font-semibold text-base shadow-lg transition-all flex items-center justify-center space-x-3 cursor-pointer",
                      status === "success"
                        ? "bg-green-500 text-white"
                        : "bg-slate-900 text-white hover:shadow-slate-900/25",
                      status === "loading" && "opacity-80 cursor-not-allowed"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send My Message</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        />
                      </>
                    )}
                  </motion.button>
                  <p className="flex items-center justify-center space-x-2 text-[12px] text-slate-500 font-normal text-center">
                    <Lock className="w-3 h-3" />
                    <span>Your information is safe with us</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Office Info Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Block */}
          <SectionHeader
            badgeText="Find Us"
            badgeIcon={<Sparkles className="w-4 h-4" />}
            badgeClassName="bg-[#F8FAFC]"
            title={
              <>
                We&apos;re based in New York — but we work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  everywhere
                </span>
              </>
            }
            description="Our team is fully remote-friendly. Wherever you are in the world, we're just a message away."
            className="mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Side: Interactive Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex flex-col space-y-4"
            >
              <p className="text-slate-500 text-[13px] font-normal text-center lg:text-left">
                📍 New York, NY — Our home base
              </p>
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-sm border-2 border-blue-600">
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
                className="text-blue-600 text-sm font-semibold hover:underline self-center lg:self-start transition-all"
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
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-5 group hover:border-blue-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(card.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-slate-900 mb-1 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 font-normal leading-relaxed">
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
            className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 hover:shadow-[0_12px_40px_rgba(37,99,235,0.06)] transition-shadow duration-500"
          >
            <div className="flex flex-col space-y-1">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Prefer a face-to-face meeting?
              </h3>
              <p className="text-[15px] text-slate-500 font-normal">
                We offer virtual meetings via Zoom, Google Meet, or your preferred platform.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Book a Free Call &rarr;</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA Banner */}
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
                Let&apos;s Do This
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
              Your next great website starts with a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                conversation
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
              We&apos;re selective about the projects we take on because we give each one everything we&apos;ve got. If you&apos;re serious about growing online — so are we.
            </motion.p>

            {/* Founder Promises */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              {[
                { icon: <Zap className="w-5 h-5" />, text: "We treat your business like our own" },
                { icon: <MessageCircle className="w-5 h-5" />, text: "Every solution is custom built" },
                { icon: <Lock className="w-5 h-5" />, text: "We measure success by your growth" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-2 text-slate-300 text-sm font-medium"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 w-full sm:w-auto"
            >
              <Link href="#contact-form" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xl hover:shadow-blue-500/25 border border-blue-500 hover:border-blue-400"
                >
                  <span className="relative z-10">Start Your Project Today</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 ml-2">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </Link>
              <Link href="#contact-form" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all cursor-pointer hover:border-white/40"
                >
                  Send Us a Message
                </motion.button>
              </Link>
            </motion.div>

            {/* Warm Sign-off */}
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 1.2 }}
              className="text-slate-500 text-sm italic font-normal pt-4"
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
