"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  value?: string;
}

const CustomSelect = ({
  options,
  placeholder = "Select an option...",
  onChange,
  label,
  className,
  value,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleSelect(options[focusedIndex]);
        }
        break;
      case "Escape":
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)} ref={containerRef}>
      {label && (
        <label className="text-[13px] font-bold text-[#1E293B] font-sans uppercase tracking-wide">
          {label}
        </label>
      )}
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={cn(
            "w-full flex items-center justify-between px-4 py-3 bg-white border rounded-[10px] text-sm font-inter transition-all duration-200 outline-none cursor-pointer",
            isOpen 
              ? "border-[#2563EB] shadow-[0_4px_24px_rgba(37,99,235,0.1)]" 
              : "border-[#E2E8F0] hover:border-[#93C5FD]"
          )}
        >
          <span className={cn(
            "truncate",
            selectedOption ? "text-[#1E293B]" : "text-slate-400"
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-[#64748B] shrink-0 ml-2"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-[100] w-full mt-1 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-h-[240px] overflow-y-auto p-1 outline-none"
              role="listbox"
            >
              {options.map((option, index) => {
                const isSelected = value === option.value;
                const isFocused = focusedIndex === index;

                return (
                  <motion.li
                    key={option.value}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => handleSelect(option)}
                    onMouseEnter={() => setFocusedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 my-0.5 text-sm font-inter rounded-[8px] cursor-pointer transition-colors outline-none",
                      isSelected 
                        ? "bg-[#2563EB] text-white" 
                        : isFocused 
                          ? "bg-[#EFF6FF] text-[#2563EB]" 
                          : "text-[#1E293B] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                    )}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 shrink-0 ml-2 text-white" />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomSelect;
