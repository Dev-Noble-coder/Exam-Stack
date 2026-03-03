"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  percentage: number;
  label: string;
  color?: string;
}

const ProgressCircle = ({ percentage, label, color = "#D4AF37" }: Props) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-48 h-48 transform -rotate-90">
        {/* Background Circle (The Track) */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-slate-100"
        />
        
        {/* The Animated Progress Stroke */}
        <motion.circle
          cx="96"
          cy="96"
          r={radius}
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeLinecap="round"
          fill="transparent"
          style={{
            filter: `drop-shadow(0 0 8px ${color}50)` // Subtle Golden Glow
          }}
        />
      </svg>

      {/* Center Text Labels */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-black text-[#0B1120] italic"
        >
          {percentage}%
        </motion.span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
          {label}
        </span>
      </div>

      {/* Decorative Dots for "Tech" feel */}
      <div className="absolute inset-0 border-[1px] border-dashed border-slate-200 rounded-full scale-110 opacity-50" />
    </div>
  );
};

export default ProgressCircle;