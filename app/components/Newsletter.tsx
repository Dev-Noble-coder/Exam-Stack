"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#F1F5F9] py-10 lg:py-20 px-5 lg:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-[#0B1120]/90 backdrop-blur-md rounded-xl px-7 py-10 md:p-20 relative overflow-hidden "
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px] -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E293B]/20 rounded-full blur-[80px] -z-0" />

        <div className="relative z-10 flex flex-col items-center text-center">

          <h3 className="text-[#F1F5F9] text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Don't Study <span className="text-[#D4AF37]">Harder.</span> <br />
            Stay Smarter.
          </h3>
          
          <p className="text-[#F1F5F9]/60 text-sm mb-10 max-w-xl font-light">
            Get weekly exam strategies, recurring pattern alerts, and early access to new AI features delivered straight to your inbox.
          </p>

       <form 
  onSubmit={(e) => e.preventDefault()}
  className="w-full max-w-lg relative group"
>
  {/* The Input Field */}
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full bg-[#1E293B] border border-[#F1F5F9]/10 rounded-full pl-8 pr-40 py-4.5 text-[#F1F5F9] text-xs focus:outline-none focus:border-[#D4AF37] transition-all duration-300 shadow-inner"
  />

  {/* The Button Inside */}
  <button className="absolute right-2 top-2 bottom-2 bg-[#D4AF37] text-[#0B1120] px-6 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F1F5F9] transition-all active:scale-95 shadow-md cursor-pointer">
    <span className="hidden sm:inline">Join Now</span>
    <Send size={14} />
  </button>
</form>

          <p className="mt-6 text-[#F1F5F9]/30 text-[10px] uppercase tracking-[0.2em]">
            Zero Spam. Just A-grade insights.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;