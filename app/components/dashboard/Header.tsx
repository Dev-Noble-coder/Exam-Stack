"use client";
import React, { useState } from 'react';
import { Bell, Menu, ChevronDown, LogOut, Search, User } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  // Placeholder data - replace with your auth state/profile
  const profile = { firstname: "John", lastname: "Doe" };
  const initials = "JD";

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="sticky top-0 z-30 w-full bg-[#0B1120] border-b border-[#F1F5F9]/10 shadow-sm">
      {/* --- Desktop Header --- */}
      <header className="hidden lg:flex justify-between items-center py-1.5 px-6">
        <div>
          <h2 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">The Vault</h2>
          <p className="text-sm font-medium text-[#F1F5F9]">
            Welcome back, {profile ? profile.firstname : "Student"} 👋
          </p>
        </div>

        <div className="flex items-center gap-8">
          {/* Quick Search Shortcut */}
          <div className="hidden xl:flex items-center gap-2 bg-[#1E293B] px-4 py-2 rounded-full border border-[#F1F5F9]/5 group cursor-pointer hover:border-[#D4AF37]/30 transition-all">
            <Search size={14} className="text-[#F1F5F9]/40 group-hover:text-[#D4AF37]" />
            <span className="text-xs text-[#F1F5F9]/40">Search papers...</span>
            <kbd className="ml-4 px-1.5 py-0.5 rounded bg-[#0B1120] text-[10px] text-[#F1F5F9]/20 font-sans">CMD + K</kbd>
          </div>

          {/* Notifications */}
          <button className="relative p-2.5 text-[#F1F5F9]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-xl transition-all">
            <span className="absolute top-2.5 right-2.5 bg-[#D4AF37] border-2 border-[#0B1120] rounded-full w-2.5 h-2.5"></span>
            <Bell size={20} />
          </button>

          {/* Profile Section */}
          <div className="flex items-center gap-4 pl-8 border-l border-[#F1F5F9]/10">
            <div className="text-left">
              <p className="text-xs font-bold text-[#F1F5F9] leading-tight">
                {profile ? `${profile.firstname} ${profile.lastname}` : "Guest User"}
              </p>
              <p className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded mt-1 inline-block uppercase tracking-wider">
                Level 400
              </p>
            </div>
            <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#D4AF37] to-[#B8860B] flex justify-center items-center text-[#0B1120] text-sm font-black shadow-lg shadow-[#D4AF37]/10">
              {initials}
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Header --- */}
      <header className="lg:hidden flex justify-between items-center py-4 px-4">
      
          <div className="leading-tight">
            <p className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest">Stacker</p>
            <p className="text-sm font-medium text-[#F1F5F9]">
                {profile ? profile.firstname : "Student"}
            </p>
          </div>

        <div className="flex items-center gap-3">
            <button className="relative p-2 bg-[#1E293B] rounded-full text-[#F1F5F9]/60">
                <span className="absolute top-1.5 right-1.5 bg-[#D4AF37] rounded-full w-2 h-2"></span>
                <Bell size={18} />
            </button>
            
            <div className="relative">
                <button 
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                    className="flex items-center gap-1"
                >
                    <div className="w-9 h-9 rounded-full bg-linear-to-tr from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-[#0B1120] text-xs font-bold ring-2 ring-[#D4AF37]/20">
                        {initials}
                    </div>
                    <ChevronDown size={16} className={`text-[#F1F5F9]/40 transition-transform ${isPopoverOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Dropdown Popover */}
                {isPopoverOpen && (
                    <div className="absolute right-0 top-14 w-52 bg-[#1E293B] border border-[#F1F5F9]/10 shadow-2xl rounded-lg p-2 animate-in fade-in zoom-in duration-200">
                        <div className="px-3 py-3 mb-1 border-b border-[#F1F5F9]/5">
                            <p className="text-xs font-bold text-[#F1F5F9] truncate">
                                {profile?.firstname} {profile?.lastname}
                            </p>
                            <p className="text-[10px] text-[#D4AF37] font-medium uppercase mt-0.5">Engineering Student</p>
                        </div>
                        <button className="w-full  px-3 py-2.5 text-xs text-[#F1F5F9]/60 hover:bg-[#0B1120] hover:text-[#D4AF37] rounded-lg transition-all" onClick={()=> {
                          setIsPopoverOpen(false)
                          
                        }}>
                          <Link href ='/dashboard/settings' className='flex items-center gap-3'>
                            <User size={14} /> Profile Settings
                            </Link>
                        </button>
                        <button 
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-xs text-red-400 hover:bg-red-400/10 rounded-lg mt-1 transition-all"
                            onClick={handleLogout}
                        >
                            <LogOut size={14} /> Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;