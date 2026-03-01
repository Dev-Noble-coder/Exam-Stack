"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Database, Brain, BarChart3, CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const solutions = [
    {
      title: "The Centralized Vault",
      subtitle: "No More Scavenger Hunts",
      description: "We aggregate and organize every past question for your department into one searchable, high-resolution database. Access what you need in seconds, not hours.",
      icon: <Database className="text-[#D4AF37]" size={20} />,
      align: "left"
    },
    {
      title: "Context-Aware AI",
      subtitle: "Studying with Your Materials",
      description: "Unlike generic AI, our LLM is trained specifically on your uploaded course PDFs. It answers questions based on your lecturer's definitions and your textbook's logic.",
      icon: <Brain className="text-[#D4AF37]" size={20} />,
      align: "right"
    },
    {
      title: "Pattern Recognition",
      subtitle: "See the Invisible",
      description: "Our analytics engine spots recurring topics and flags high-frequency questions. We tell you exactly where the examiner is likely to strike next.",
      icon: <BarChart3 className="text-[#D4AF37]" size={20} />,
      align: "left"
    }
  ];

  return (
    <section className="bg-[#0B1120] py-10 lg:py-20 px-5 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-15 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            The Exam Stack Solution
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#F1F5F9] text-3xl lg:text-4xl font-extrabold"
          >
            A Smarter Way to <span className="text-[#D4AF37]">Stack Your A's.</span>
          </motion.h3>
        </div>

        {/* Solutions "Stack" */}
        <div className="space-y-10 lg:space-y-20 relative">
          {/* Vertical line connector (visible on desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#D4AF37]/50 via-[#1E293B] to-transparent hidden md:block" />

          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              variants={sol.align === "left" ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                sol.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                   <div className="p-3 rounded-full bg-[#1E293B] border border-[#D4AF37]/20 shadow-xl mb-2">
                    {sol.icon}
                   </div>
                </div>
                <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">{sol.subtitle}</h4>
                <h5 className="text-[#F1F5F9] text-3xl font-bold">{sol.title}</h5>
                <p className="text-[#F1F5F9]/60 leading-relaxed max-w-md mx-auto md:mx-0 text-sm">
                  {sol.description}
                </p>
                <div className="flex items-center gap-2 justify-center md:justify-start text-[#D4AF37] text-xs font-bold pt-2">
                  <CheckCircle2 size={14} />
                  <span>Verified Success Strategy</span>
                </div>
              </div>

              {/* Visual Side (The "Stack" element) */}
              <div className="flex-1 flex justify-center relative">
                <div className="w-full max-w-[400px] aspect-video bg-[#0F172A] rounded-lg border border-[#F1F5F9]/10 relative overflow-hidden shadow-2xl group">
                   {/* Background Glow inside the box */}
                   <div className="absolute -inset-1 bg-linear-to-tr from-[#D4AF37]/10 to-transparent opacity-50" />
                   
                   {/* Abstract UI representation */}
                   <div className="absolute inset-0 p-6 flex flex-col gap-3">
                      <div className="h-2 w-1/2 bg-[#D4AF37]/20 rounded-full animate-pulse" />
                      <div className="h-2 w-full bg-[#F1F5F9]/5 rounded-full" />
                      <div className="h-2 w-3/4 bg-[#F1F5F9]/5 rounded-full" />
                      <div className="mt-auto h-8 w-full bg-[#1E293B] rounded-lg border border-[#F1F5F9]/10" />
                   </div>
                   
                   {/* Subtle hover effect */}
                   <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA for the section */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-16lg:mt-32 text-center"
        >
          <p className="text-[#F1F5F9]/40 text-sm mb-6 uppercase tracking-widest">Ready to change how you study?</p>
          <button className="bg-[#D4AF37] text-[#0B1120] px-10 py-2.5 rounded-full text-sm font-medium transition-all shadow cursor-pointer ">
            BUILD YOUR STACK NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;