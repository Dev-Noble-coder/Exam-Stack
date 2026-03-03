"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface Props {
  data: { id: number; question: string; icon: string; options: string[] };
  index: number;
  total: number;
  onSelect: (id: number, option: string) => void;
}

const PersonalizationCard = ({ data, index, total, onSelect }: Props) => {
  const isTopCard = index === 0;
  const yOffset = index * 15;
  const scale = 1 - index * 0.05;
  const zIndex = total - index;

  // Add "as const" at the end of the object or the transition type
  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    animate: {
      opacity: 1,
      y: yOffset,
      scale: scale,
      zIndex: zIndex,
      transition: { 
        type: "spring" as const, // Fixes the 'string' is not assignable error
        stiffness: 300, 
        damping: 30, 
        delay: index * 0.1 
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      rotate: 15,
      scale: 0.9,
      transition: { duration: 0.4, ease: "easeInOut" as const }, // Fixes ease as well
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ transformOrigin: "top center" }}
      className={`
        absolute top-0 w-full  rounded-lg p-5 lg:p-8 shadow-2xl transition-shadow duration-500
        ${isTopCard 
          ? 'bg-[#0B1120] text-white border border-gray-700' 
          : 'bg-[#1E293B] text-white/70 border border-[#F1F5F9]/5 pointer-events-none shadow-black/20'}
      `}
    >
      {/* Card Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-lg">
          {data.icon}
        </div>
        {isTopCard && (
          <div className="flex items-center gap-2 text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            <Zap size={14} /> Step {total - data.id + 1} of {total}
          </div>
        )}
      </div>

      {/* Question */}
      <h3 className={`text-lg font-bold leading-tight ${isTopCard ? 'text-white' : 'text-white/50'}`}>
        {data.question}
      </h3>

      {/* Options List */}
      <div className="mt-5 space-y-3">
        {data.options.map((option) => (
          <motion.button
            key={option}
            onClick={() => isTopCard && onSelect(data.id, option)}
            whileHover={isTopCard ? { scale: 1.02, backgroundColor: "#D4AF37", color: "#0B1120" } : {}}
            whileTap={isTopCard ? { scale: 0.98 } : {}}
            className={`
              w-full text-left p-3.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer
              ${isTopCard 
                ? 'bg-[#1E293B] hover:shadow-lg' 
                : 'bg-[#0B1120]/50 text-white/30 border border-white/5'}
            `}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default PersonalizationCard;