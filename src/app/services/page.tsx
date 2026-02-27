"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  Palette, 
  Code2, 
  ShoppingCart, 
  Search, 
  Settings, 
  Target,
  ArrowRight,
  Sprout,
  Flower2,
  Trees,
  Plus,
  Zap,
  MessageCircle,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CustomSelect from "@/components/CustomSelect";
import ServiceCard from "./components/ServiceCard";
import PricingCard from "./components/PricingCard";
import FAQItem from "./components/FAQItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Web Design",
    description: "We craft beautiful, conversion-focused designs tailored to your brand and audience.",
    deliverables: ["Custom UI design", "Mobile-first approach", "Brand-consistent visuals", "Interactive prototype"]
  },
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: "Web Development",
    description: "Clean, scalable code built with modern technologies that perform under pressure.",
    deliverables: ["Next.js / React build", "Fast load times", "SEO-ready structure", "CMS integration"]
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    title: "E-commerce",
    description: "Online stores designed to make buying simple and turn visitors into loyal customers.",
    deliverables: ["Product catalog setup", "Secure checkout", "Payment gateway", "Inventory management"]
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "SEO & Performance",
    description: "We optimize your site so it ranks higher, loads faster, and reaches more people.",
    deliverables: ["Keyword research", "On-page SEO", "Core Web Vitals", "Monthly reporting"]
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Maintenance & Support",
    description: "Ongoing care so your site stays fast, secure, and always up to date.",
    deliverables: ["Monthly updates", "Security monitoring", "Performance checks", "Priority support"]
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Brand Identity",
    description: "Logos, colors, and visuals that make your brand instantly recognizable and memorable.",
    deliverables: ["Logo design", "Color palette", "Typography system", "Brand guidelines PDF"]
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience"
  },
  {
    number: "02",
    title: "Strategy",
    description: "We map out the sitemap, features, and design direction"
  },
  {
    number: "03",
    title: "Design",
    description: "We craft your visual identity and UI in an interactive prototype"
  },
  {
    number: "04",
    title: "Development",
    description: "We build your site with clean, fast, scalable code"
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "We go live and stay by your side for ongoing support"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    icon: <Sprout className="w-8 h-8 text-[#2563EB]" />,
    oneTimePrice: "1,500",
    monthlyPrice: "299",
    tagline: "Perfect for businesses just getting started",
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month free support"
    ],
    cta: "Get Started",
    popular: false,
    theme: "light"
  },
  {
    name: "Growth",
    icon: <Flower2 className="w-8 h-8 text-white" />,
    oneTimePrice: "3,500",
    monthlyPrice: "599",
    tagline: "For growing businesses ready to scale",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Custom animations",
      "CMS integration",
      "E-commerce ready",
      "3 months free support",
      "Priority response"
    ],
    cta: "Get Started",
    popular: true,
    theme: "dark"
  },
  {
    name: "Premium",
    icon: <Trees className="w-8 h-8 text-[#2563EB]" />,
    oneTimePrice: "7,000",
    monthlyPrice: "999",
    tagline: "Full-scale solution for ambitious brands",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Full brand identity",
      "Advanced SEO & analytics",
      "Custom integrations",
      "6 months free support",
      "Dedicated project manager"
    ],
    cta: "Get Started",
    popular: false,
    theme: "light"
  }
];

const faqs = [
  {
    question: "How long does a website project take?",
    answer: "Most projects take between 4 to 8 weeks depending on scope and complexity. We'll give you a clear timeline during our first call."
  },
  {
    question: "Do I need to provide content and images?",
    answer: "We can work with content you provide, or our team can help with copywriting and sourcing professional images at an additional cost."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely. Every website we build is fully responsive and tested across all major devices and screen sizes."
  },
  {
    question: "Can I update my website myself after launch?",
    answer: "Yes. We integrate a user-friendly CMS so you can update text, images, and content without touching any code."
  },
  {
    question: "What happens after my site goes live?",
    answer: "All plans include a free support period after launch. We also offer ongoing maintenance packages to keep your site secure and up to date."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a satisfaction guarantee. If you're not happy with the initial design concept we'll revise it until you are — no questions asked."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. Redesigns are one of our specialties. We'll audit your current site and build something better."
  },
  {
    question: "Do you work with clients outside the US?",
    answer: "Yes, we work with clients worldwide. Our team is fully remote and comfortable working across time zones."
  },
  {
    question: "What do you need from me to get started?",
    answer: "Just a brief about your business, your goals, and your budget. We handle the rest from there."
  },
  {
    question: "How do payments work?",
    answer: "We typically work with a 50% deposit upfront and 50% on launch. For monthly plans, billing is automatic at the start of each month."
  }
];



const ServicesPage = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: ""
  });

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

  const trustTags = [
    "No templates — fully custom",
    "Built for performance",
    "Ongoing support included",
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-400 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 z-0 pointer-events-none"
      />

      {/* Hero Content */}
      <section className="relative z-10 pt-[140px] pb-[100px] px-4">
        <div className="max-w-[760px] mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-10"
          >
            {/* Pill Badge */}
            <Badge
              variants={itemVariants}
              className="px-5 py-2.5 bg-white border-slate-200"
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wide">
                Our Services
              </span>
            </Badge>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#1E293B] leading-[1.15] tracking-tight"
            >
              Everything your business needs to thrive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">online</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#64748B] font-normal max-w-[600px] leading-relaxed mx-auto"
            >
              From strategy and design to development and growth — we cover every step of your digital journey.
            </motion.p>

            {/* Trust Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {trustTags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-[#64748B]"
                >
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-[13px] font-medium font-sans text-slate-700">
                    {tag}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative z-10 py-24 border-y border-slate-200/50 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Block */}
          <SectionHeader
            badgeText="What's Included"
            badgeClassName="bg-blue-50 border-blue-100 text-blue-600"
            title="Our full range of services"
            className="mb-16"
          />

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                index={index}
                service={service}
              />
            ))}
          </motion.div>

        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Block */}
          <SectionHeader
            badgeText="How We Work"
            badgeClassName="bg-blue-50 border-blue-100 text-blue-600"
            title="A simple, transparent process"
            description="No confusion, no surprises. Just a clear path from idea to launch."
            className="mb-20"
          />

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-8 left-0 w-full h-[2px] hidden lg:block overflow-hidden z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="w-full h-full border-t-2 border-dashed border-slate-300 origin-left"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: [0.8, 1.05, 1] }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeOut", 
                      delay: 0.3 + index * 0.15 
                    }}
                    className="w-16 h-16 bg-white text-[#1E293B] border border-slate-200 shadow-sm rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{step.number}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#1E293B] mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] font-normal leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 bg-white py-24 border-y border-slate-200/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Block */}
          <SectionHeader
            badgeText="Pricing"
            badgeClassName="bg-blue-50 border-blue-100 text-blue-600"
            title="Simple, transparent pricing"
            description="No hidden fees. No surprises. Pick the plan that fits your business."
            className="mb-10"
          />

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={cn("text-sm font-semibold transition-colors duration-300", !isMonthly ? "text-[#1E293B]" : "text-slate-400")}>
              One-time
            </span>
            <button 
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative w-14 h-7 bg-slate-200 rounded-full p-1 transition-colors cursor-pointer focus:outline-none"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 bg-white rounded-full shadow-sm"
                style={{ marginLeft: isMonthly ? 'auto' : '0' }}
              />
            </button>
            <span className={cn("text-sm font-semibold transition-colors duration-300", isMonthly ? "text-[#1E293B]" : "text-slate-400")}>
              Monthly
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 items-stretch mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index} 
                index={index}
                plan={plan}
                isMonthly={isMonthly}
              />
            ))}
          </div>

          {/* Reassurance Line */}
          <div className="text-center">
            <p className="text-[#64748B] font-normal">
              Not sure which plan is right for you?{" "}
              <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                Let&apos;s talk and find out &rarr;
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 bg-[#F8FAFC] py-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Block */}
          <SectionHeader
            badgeText="FAQ"
            badgeClassName="bg-blue-50 border-blue-100 text-blue-600"
            title="Questions we get a lot"
            description="Can't find your answer here? Reach out and we'll get back to you within 24 hours."
            className="mb-16"
          />

          {/* Accordion List */}
          <div className="space-y-4 mb-24">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                index={index}
                faq={faq}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="relative w-full bg-slate-900 py-[120px] overflow-hidden">
        {/* Background Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] z-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/30 to-violet-600/30 rounded-full blur-3xl z-0 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-full blur-3xl z-0 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start space-y-8"
            >
              <Badge className="bg-white/5 backdrop-blur-md border-[white/10] shadow-lg mb-8">
                <span className="text-blue-400 text-sm font-semibold tracking-wide">
                  Start Today
                </span>
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-[480px]">
                Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">great together</span>
              </h2>
              <p className="text-lg text-slate-300 font-normal max-w-[500px] leading-relaxed">
                Whether you have a full brief or just an idea — we&apos;re ready to help you move forward.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { icon: <Zap className="w-5 h-5" />, text: "Fast turnaround" },
                  { icon: <MessageCircle className="w-5 h-5" />, text: "Free first consultation" },
                  { icon: <Lock className="w-5 h-5" />, text: "No commitment required" }
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
              </div>
            </motion.div>

            {/* Right Card / Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="lg:rotate-1"
            >
              <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-w-[500px] mx-auto lg:mx-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1E293B] tracking-tight mb-2">Get a free quote</h3>
                  <p className="text-sm text-[#64748B] font-normal">We&apos;ll respond within 24 hours</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E293B] uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-[12px] text-sm font-normal text-[#1E293B] placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1E293B] uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-[12px] text-sm font-normal text-[#1E293B] placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CustomSelect
                      label="Service Needed"
                      placeholder="Select service"
                      value={formData.service}
                      options={[
                        { label: "Web Design", value: "Web Design" },
                        { label: "Web Development", value: "Web Development" },
                        { label: "E-commerce", value: "E-commerce" },
                        { label: "SEO", value: "SEO" },
                        { label: "Brand Identity", value: "Brand Identity" },
                        { label: "Other", value: "Other" },
                      ]}
                      onChange={(value) => setFormData({ ...formData, service: value })}
                    />
                    <CustomSelect
                      label="Project Budget"
                      placeholder="Select budget"
                      value={formData.budget}
                      options={[
                        { label: "Under $1,000", value: "Under $1,000" },
                        { label: "$1,000–$3,000", value: "$1,000–$3,000" },
                        { label: "$3,000–$7,000", value: "$3,000–$7,000" },
                        { label: "$7,000+", value: "$7,000+" },
                      ]}
                      onChange={(value) => setFormData({ ...formData, budget: value })}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-slate-900 text-white py-4 rounded-full font-bold text-base shadow-lg transition-all mt-4 flex items-center justify-center space-x-2 cursor-pointer relative overflow-hidden group/btn2"
                  >
                    <span className="relative z-10 flex items-center">
                      Send My Request <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-300 z-0"
                    />
                  </motion.button>

                  <p className="flex items-center justify-center space-x-2 text-[12px] text-slate-500 font-normal text-center mt-4">
                    <Lock className="w-3 h-3" />
                    <span>Your information is safe with us</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
