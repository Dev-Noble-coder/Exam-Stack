"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Flame, ArrowUpRight, Target } from 'lucide-react';
import ProgressCircle from '@/app/components/dashboard/community-movement/ProgressCircle';
import ContributorCard from '@/app/components/dashboard/community-movement/ContributorCard';

const CommunityPage = () => {
  return (
    <div className="max-w-7xl mx-auto  pb-20">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-xl font-black text-[#0B1120] tracking-tighter italic">
            COMMUNITY <span className="text-[#D4AF37]">PULSE</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium text-xs">Real-time contribution metrics across all departments.</p>
        </div>
        
        <div className="flex items-center gap-3 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/20">
          <Flame className="text-[#D4AF37] animate-pulse" size={20} />
          <span className="text-xs font-bold text-[#B8860B]">1,240 Papers Uploaded This Week</span>
        </div>
      </div>

      {/* --- Progress & Stats Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Global Goal (Progress Bar Section) */}
        <div className="lg:col-span-2 bg-[#0B1120] rounded-lg px-10 py-10 flex flex-col justify-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Seasonal Goal</h3>
                <p className="text-xl font-bold mt-1">The 50k Paper Milestone</p>
              </div>
              <Target className="text-[#D4AF37]/50" size={32} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold italic">
                <span>38,420 / 50,000</span>
                <span className="text-[#D4AF37]">76% Complete</span>
              </div>
              {/* Custom Golden Progress Bar */}
              <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden p-1 border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "76%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-linear-to-r from-[#D4AF37] to-[#F1F5F9] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="border-l border-white/10 pl-4">
                <p className="text-xs text-white/40 font-bold uppercase">Active Stackers</p>
                <p className="text-md font-black">4.2k</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="text-xs text-white/40 font-bold uppercase">AI Verifications</p>
                <p className="text-md font-black">98.2%</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="text-xs text-white/40 font-bold uppercase">Daily Growth</p>
                <p className="text-md font-black text-emerald-400">+12%</p>
              </div>
            </div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full -mr-20 -mt-20" />
        </div>

        {/* Top Department (Circle Progress) */}
        <div className="bg-white rounded-lg border border-slate-200 p-8  flex flex-col items-center justify-center text-center">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Lead Department</h3>
            <ProgressCircle percentage={50} label="Engineering" color="#D4AF37" />
            <p className="mt-6 text-xs text-slate-500 font-medium max-w-[180px]">
                Engineering leads with <span className="text-[#0B1120] font-bold">12,402</span> verified documents.
            </p>
        </div>
      </div>

      {/* --- Contributors Section --- */}
      <div className="space-y-6 mt-14">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-[#0B1120] flex items-center gap-3">
            <Trophy className="text-[#D4AF37]" /> TOP CONTRIBUTORS
          </h2>
          <button className="text-xs font-bold text-[#D4AF37] hover:underline tracking-widest uppercase">View All-Time</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContributorCard rank={1} name="Sola Ade" points="14,200" dept="Law" />
          <ContributorCard rank={2} name="Mike Ross" points="12,150" dept="Engineering" />
          <ContributorCard rank={3} name="Elena G." points="9,800" dept="Medicine" />
          <ContributorCard rank={4} name="David K." points="8,400" dept="Arts" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;