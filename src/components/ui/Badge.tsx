"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, icon, className, ...props }: BadgeProps) => {
  // Extract text and tracking/transform utility classes from the provided className
  // to apply them directly to the text span instead of the wrapper div
  const wrapperClasses = className?.split(' ').filter(c => !c.startsWith('text-') && !c.includes('uppercase') && !c.includes('tracking-')) || [];
  const textClasses = className?.split(' ').filter(c => c.startsWith('text-') || c.includes('uppercase') || c.includes('tracking-')) || [];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      className={cn(
        "inline-flex items-center space-x-2 px-4 py-2 rounded-full border shadow-sm",
        !className?.includes('border-') && "border-slate-200", // Fallback border
        !className?.includes('bg-') && "bg-white", // Fallback background
        wrapperClasses.join(' ')
      )}
      {...props}
    >
      {icon && (
        <span className="shrink-0 text-blue-600">
          {icon}
        </span>
      )}
      <span className={cn(
        "text-[13px] md:text-sm font-semibold tracking-wide",
        textClasses.length === 0 && "text-slate-700", // Fallback color
        textClasses.join(' ')
      )}>
        {children}
      </span>
    </motion.div>
  );
};
