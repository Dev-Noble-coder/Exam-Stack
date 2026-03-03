"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, School, Shield, Bell, Camera, Save, Award } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-7xl mx-auto pb-20">
      {/* --- Profile Header --- */}
      <div className="relative h-48 bg-[#0B1120] rounded-lg mb-20 overflow-hidden border border-gray-200 shadow">
        {/* Decorative Golden Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#D4AF37_1px,_transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="absolute bottom-5 left-10 flex items-end gap-4">
          <div className="relative group">
            <div className="w-26 h-26 rounded-full bg-linear-to-tr from-[#D4AF37] to-[#B8860B] border-4 border-white flex items-center justify-center text-[#0B1120] text-xl font-black shadow-xl">
              JD
            </div>
            <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg border border-slate-100 text-slate-600 hover:text-[#D4AF37] transition-colors">
              <Camera size={16} />
            </button>
          </div>
          
          <div className="mb-4">
            <h1 className="text-lg font-black text-slate-500 flex items-center gap-2 ">
              JOHN DOE 
            </h1>
            <p className="text-slate-500 text-xs font-medium flex items-center gap-2">
              <School size={14} /> University of Lagos
            </p>
          </div>
        </div>

        {/* Rank Badge */}
        <div className="absolute top-8 right-10 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4">
           <div className="p-2 bg-[#D4AF37]/20 rounded-full">
             <Award className="text-[#D4AF37]" size={24} />
           </div>
           <div>
             <p className="text-[10px] font-black text-[#D4AF37] tracking-widest uppercase">Vault Rank</p>
             <p className="text-white font-bold text-lg">Master Stacker</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* --- Sidebar Navigation --- */}
        <div className="space-y-2">
          {[
            { id: 'profile', label: 'General Profile', icon: User },
            { id: 'security', label: 'Security & Auth', icon: Shield },
            { id: 'notifications', label: 'Notifications', icon: Bell },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 cursor-pointer rounded-lg font-bold text-sm transition-all
                ${activeTab === tab.id 
                  ? 'bg-[#0B1120] text-[#D4AF37] shadow-lg' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Main Settings Form --- */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border border-slate-200 p-10 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input type="text" defaultValue="John" className="w-full bg-slate-100 border border-slate-200 text-sm rounded-lg pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Last Name</label>
                <div className='relative'>
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input type="text" defaultValue="Doe" className="w-full bg-slate-100 border border-slate-200 text-sm rounded-lg pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-medium" />
                
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Academic Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input type="email" defaultValue="j.doe@unilag.edu.ng" className="w-full bg-slate-100 border border-slate-200 text-sm rounded-lg pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-medium" disabled />
                </div>
                <p className="text-[10px] text-slate-400 italic mt-1">* University email cannot be changed once verified.</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Department</label>
                <select className="w-full bg-slate-100 border border-slate-200 text-sm rounded-lg  pl-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-medium">
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Electrical Engineering</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Level</label>
                <select className="w-full bg-slate-100 border border-slate-200 text-sm rounded-lg  pl-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-medium">
                  <option>100 Level</option>
                  <option>200 Level</option>
                  <option>300 Level</option>
                  <option>400 Level</option>
                  <option>500 Level</option>
                </select>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-50 flex justify-end">
              <button className="flex items-center gap-2 bg-[#D4AF37] text-[#0B1120] px-8 py-3 rounded-full font-medium  transition-all uppercase tracking-widest text-xs cursor-pointer">
                <Save size={16} />
                Update Profile
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;