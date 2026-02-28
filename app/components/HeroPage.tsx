"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { BookOpen, GraduationCap, Search, Star, Rocket } from 'lucide-react';

const HeroPage: React.FC = () => {
  // Type-safe animation function for vertical floating
  const floatVariants = (duration: number = 3, delay: number = 0): Variants => ({
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  });

  return (
    <section className="bg-[#0B1120] text-[#F1F5F9] min-h-screen flex  justify-around   items-end  overflow-hidden relative  gap-10 max-w-7xl mx-auto pt-16">
      
      {/* Left Content Area */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 z-10 text-center md:text-left self-center"
      >
        <div className="mb-6 inline-block px-4 py-1 rounded-full border border-[#D4AF37] text-[#D4AF37] text-[10px] font-medium uppercase tracking-widest">
          Smartest way to study
        </div>

        <h1 className="text-4xl font-extrabold mb-6 max-w-4xl leading-tight">
          Master Your Exams. <br /> 
          <span className="text-[#D4AF37]">Stack Your A's.</span>
        </h1>

        <p className="text-[#F1F5F9]/80 text-sm max-w-lg mb-10 font-light mx-auto md:mx-0">
          Access organized past questions, uncover recurring patterns, and get 
          <span className="font-bold text-[#D4AF37]"> AI-powered</span> explanations 
          tailored to your department materials.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center md:justify-start">
          <Link href="/search" className="bg-[#D4AF37] text-[#0B1120] px-8 py-2.5 rounded-full font-semibold transition-all hover:bg-[#F1F5F9] active:scale-95">
            Find Past Questions
          </Link>
          <Link href="/how-it-works" className="bg-transparent border border-[#F1F5F9]/30 hover:border-[#F1F5F9] px-8 py-2.5 rounded-full font-semibold transition-all">
            See How It Works
          </Link>
        </div>
      </motion.div>

      {/* Right Content: Image & Floating Elements */}
      <div className="relative flex justify-center items-end ">
        
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4AF37]/10 rounded-full blur-[100px] -z-10" />

        {/* Floating SVG Icons */}
        <motion.div 
          variants={floatVariants(4, 0)}
          initial="initial"
          animate="animate"
          className="absolute top-10 left-15  bg-[#1E293B] p-3 rounded-full border border-[#D4AF37]/20 shadow-2xl z-20"
        >
          <GraduationCap size={18} className="text-[#D4AF37]" />
        </motion.div>

        <motion.div 
          variants={floatVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="absolute top-40 right-10  bg-[#D4AF37] p-3 rounded-full shadow shadow-[#D4AF37]/30 z-20"
        >
          <Rocket size={16} className="text-[#0B1120]" />
        </motion.div>

        <motion.div 
          variants={floatVariants(5, 1)}
          initial="initial"
          animate="animate"
          className="absolute middle-left top-1/2 -left-2 bg-[#0F172A] p-3 rounded-full border border-[#F1F5F9]/10 shadow-2xl z-20 hidden md:block"
        >
          <Search size={18} className="text-[#F1F5F9]" />
        </motion.div>

        {/* The Main Student Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image 
            src="https://res.cloudinary.com/drhfrgahv/image/upload/v1772141428/indoor-shot-stupefied-dark-skinned-guy-keeps-jaw-dropped-wears-red-clothes-spectacles-carries-textbooks-writes-scientific-report_meaaek.png" 
            alt="Exam Stack Hero" 
            width={550} 
            height={600}
            priority
            className="relative z-0 object-contain max-w-[90vw] md:max-w-none"
          />
        </motion.div>

        {/* Dynamic Badge */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute  right-5 bottom-5 bg-[#F1F5F9] text-[#0B1120] py-2 px-5 rounded-full text-[10px] font-bold shadow-2xl flex items-center gap-2"
        >
          <Star size={16} fill="#D4AF37" color="#D4AF37" />
          <span>500+ Past Questions</span>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroPage;