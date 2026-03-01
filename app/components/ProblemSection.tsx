"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, BrainIcon, LayoutGrid, ArrowRight } from 'lucide-react';

const ProblemSection: React.FC = () => {
  // Staggered container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Individual card animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const problemCards = [
    {
      icon: <Search size={20} />,
      title: "Scattered Resources",
      description: "Every semester, students scramble through WhatsApp groups, old PDFs, and blurry photocopies. You waste hours searching instead of actually learning.",
    },
    {
      icon: <BrainIcon size={20} />,
      title: "AI Without Context",
      description: "Generic AI tools don't know your specific course materials. They give broad answers that don't match your lecturer's logic or your PDF's content.",
    },
    {
      icon: <LayoutGrid size={20} />,
      title: "Hidden Patterns",
      description: "Without a system, you miss the recurring topics. You can't see where to study more because you can't see what the examiner prioritizes.",
    },
  ];

  return (
    <section className="bg-[#F1F5F9] py-10 lg:py-20 px-5 lg:px-10 overflow-hidden text-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-3/5"
          >
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.25em] text-[11px] mb-5">
              The Preparation Gap
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
              Studying Isn’t the Problem. <br />
              <span className="text-[#1E293B]/40">Studying Blind Is.</span>
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-[#1E293B]/70 text-sm leading-relaxed border-l-2 border-[#D4AF37] pl-6"
          >
            Effort isn't the issue, it's direction. We stop the guesswork by connecting your materials to intelligent insights.
          </motion.div>
        </div>

        {/* Problem Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#1E293B]/5 group relative transition-all hover:cursor-pointer hover:border-[#D4AF37]"
            >
              <div className='flex flex-row-reverse justify-between items-center mb-10'>
                {/* Decorative Number */}
              <span className=" text-4xl font-black text-[#F1F5F9] group-hover:text-[#D4AF37]/10 transition-colors">
                0{index + 1}
              </span>

              <div className="bg-[#0B1120] text-[#D4AF37] w-12 h-12 rounded-full flex items-center justify-center  shadow-lg shadow-[#0B1120]/20">
                {card.icon}
              </div>

              </div>
              
              <h4 className="text-xl font-bold mb-5 tracking-tight">{card.title}</h4>
              <p className="text-[#1E293B]/60 text-sm leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* The "Impact" Callout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-cover bg-no-repeat bg-center backdrop-blur-md rounded-xl p-12 md:p-20 text-center relative overflow-hidden group "
           style={{ backgroundImage: `url('https://img.freepik.com/free-photo/students-studying-together-medium-shot_23-2148913227.jpg')` }}
        >
          {/* Animated Gradient Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]" 
          />
          <div className='bg-black/70 inset-0 absolute top-0'>

          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="text-[#F1F5F9] text-2xl md:text-4xl font-bold mb-8 leading-tight">
              "Students don't lack effort. <br /> They lack <span className="text-[#D4AF37]">Structure</span>."
            </h4>
            <p className="text-[#F1F5F9]/50 text-sm mb-12 font-light">
              Don't let scattered PDFs and generic AI answers  cost you your grades.  <br /> It's time to study with context.
            </p>
            
            <button className="flex items-center gap-3 bg-[#D4AF37] text-[#0B1120] px-10 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] mx-auto hover:bg-[#F1F5F9] hover:scale-105 transition-all shadow-sm  cursor-pointer">
              Get Started for Free
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;