"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Badge } from "./Badge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeaderProps extends Omit<HTMLMotionProps<"div">, "title"> {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  badgeClassName?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeader = ({
  badgeText,
  badgeIcon,
  badgeClassName,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) => {
  
  // Base staggered animation behavior
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-col mb-16", alignmentClasses[align], className)}
      {...props}
    >
      {/* Badge */}
      {badgeText && (
        <Badge 
          icon={badgeIcon} 
          className={cn("mb-6", badgeClassName)}
          variants={itemVariants}
        >
          {badgeText}
        </Badge>
      )}

      {/* Main Headline */}
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-[52px] font-bold text-[#1E293B] mb-6 tracking-tight leading-[1.15] max-w-2xl"
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#64748B] font-normal leading-relaxed max-w-[580px]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
