"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Upload, BookCheck, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "1",
      icon: <UserPlus size={22} className="" />,
      title: "Onboard",
      description: "Click the sign-in button to join our community of smart learners.",
    },
    {
      id: "2",
      icon: <Upload size={22} className="" />,
      title: "Upload & Label",
      description: "Upload any past questions and label them to be able to access other resources.",
    },
    {
      id: "3",
      icon: <BookCheck size={22} className="" />,
      title: "Access",
      description: "Browse a wide range of resources tailored to your courses.",
    },
    {
      id: "4",
      icon: <Sparkles size={22} className="" />,
      title: "Smart Learning",
      description: "Welcome to AI-driven prep that understands your specific materials.",
    }
  ];

  return (
    <section className="bg-[#F1F5F9] py-10 lg:py-20 px-5 lg:px-10 relative overflow-hidden" id='how-it-works'>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-15 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Seamless Integration
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#0B1120] text-3xl md:text-4xl font-extrabold"
          >
            How It  <span className="text-[#D4AF37]">Works</span>
          </motion.h3>
        </div>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center lg:items-start gap-12 md:gap-4">
          
          {/* Desktop Connecting Path (Dashed Line) */}
          <svg className="hidden md:block absolute top-16 left-0 w-full h-20 -z-0" fill="none">
            <path 
              d="M 100 40 Q 250 120 400 40 T 700 40 T 1000 40" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              className="opacity-30"
            />
          </svg>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex-1 flex flex-col items-center text-center relative z-10 group "
            >
              {/* Step Number Bubble */}
              <div className="absolute -top-7 bg-white border border-[#F1F5F9] shadow-sm w-10 h-10 rounded-full flex items-center justify-center text-[#5d6578] font-black text-xs mb-4">
                {step.id}
              </div>

              {/* Icon Circle - Matching the style of your reference image */}
              <div className="relative mb-5">
                <div className="w-32 h-32 rounded-full bg-white border-2 border-dashed border-[#D4AF37]/20 flex items-center justify-center transition-all duration-500 group-hover:border-[#D4AF37]">
                  <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500">
                    <span className="group-hover:scale-110 group-hover:text-white transition-all duration-500 ">
                      {step.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-[#0B1120] text-lg font-bold mb-3 tracking-tight">
                {step.title}
              </h4>
              <p className="text-[#1E293B]/60 text-[12px] leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;