"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, LayoutGrid, Lock, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CourseMaterials = () => {
  // Mock data for the "Golden Stack" preview
  const previewMaterials = [
    { code: "MTH 101", title: "General Mathematics I", year: "2023", type: "Past Question" },
    { code: "CSC 301", title: "Data Structures", year: "2022", type: "Lecture Summary" },
    { code: "ANA 406", title: "Anatomy", year: "2023", type: "Exam Prep" },
    { code: "GST 211", title: "Entrepreneurship", year: "2024", type: "Past Question" },
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen text-[#F1F5F9] pt-28 pb-20 px-5 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 w-full lg:w-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-2/3"
          >
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              The Repository
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Explore the <span className="text-[#D4AF37]">Stack.</span>
            </h1>
            <p className="text-[#F1F5F9]/60 mt-6 max-w-lg text-sm leading-relaxed">
              Every document is AI-indexed and organized by department. 
              Upload any pdf or past question to Get Started.
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative group w-full lg:w-auto "
          >
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full transition-all w-full lg:w-auto" />
            <Link href="/signin" className="relative flex justify-center items-center gap-3 bg-[#D4AF37] text-[#0B1120] px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow w-full lg:w-auto ">
              Start Building Your Stack
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Filters / Search Bar (Disabled Visual Only) */}
        <div className="flex flex-wrap gap-4 mb-12 opacity-50 pointer-events-none">
          <div className="flex-1 min-w-[300px] bg-[#1E293B] border border-[#F1F5F9]/10 rounded-lg px-6 py-2.5 flex items-center gap-3">
            <Search size={18} className="text-[#F1F5F9]/40" />
            <span className="text-xs text-[#F1F5F9]/40 font-medium italic">Search course codes (e.g. MTH 101)...</span>
          </div>
          <div className="bg-[#1E293B] border border-[#F1F5F9]/10 rounded-lg px-6 py-2.5 flex items-center gap-3">
             <LayoutGrid size={18} className="text-[#F1F5F9]/40" />
             <span className="text-xs">Department</span>
          </div>
        </div>

        {/* The Golden Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewMaterials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#1E293B]/40 rounded-lg border border-[#F1F5F9]/5 p-6 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
            >
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#0B1120] rounded-lg text-[#D4AF37]">
                  <FileText size={18} />
                </div>
                <div className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {item.type}
                </div>
              </div>

              <h4 className="text- flgont-bold mb-1">{item.code}</h4>
              <p className="text-[#F1F5F9]/50 text-xs mb-4">{item.title}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-[#F1F5F9]/5">
                <span className="text-[10px] text-[#F1F5F9]/30 font-bold uppercase tracking-widest">Year: {item.year}</span>
                <Lock size={14} className="text-[#D4AF37] opacity-40" />
              </div>

              {/* Locked Overlay on Hover */}
              <div className="absolute inset-0 bg-[#0B1120]/80 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                 <Sparkles className="text-[#D4AF37] mb-3" size={32} />
                 <p className="text-xs font-bold mb-4 leading-tight text-[#F1F5F9]">Unlock full AI analysis for {item.code}</p>
                 <Link href="/sign-in" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest border-b border-[#D4AF37] pb-1">
                    Sign in to View
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 px-8 py-12 bg-linear-to-r from-[#1E293B] to-transparent rounded-lg border border-[#F1F5F9]/5 flex flex-col md:flex-row items-center justify-between gap-8 w-full lg:w-auto"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Can't find your material?</h3>
            <p className="text-[#F1F5F9]/50 text-xs">Be the first to upload and earn "Founder" status in your department.</p>
          </div>
          <Link href="/sign-in" className="bg-[#F1F5F9] text-[#0B1120] px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-[#D4AF37] transition-all w-full lg:w-auto">
            Upload to Stack
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default CourseMaterials;