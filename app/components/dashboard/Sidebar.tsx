"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileStack, 
  UploadCloud, 
  BarChart3, 
  Settings, 
  LogOut,
  Layers
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'My Vault', icon: FileStack, path: '/dashboard/vault' },
    { name: 'Upload', icon: UploadCloud, path: '/dashboard/upload' },
    { name: 'Movement', icon: BarChart3, path: '/dashboard/progress' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#0B1120] text-[#F1F5F9] border-r border-[#F1F5F9]/10">
      
      {/* 1. Logo Section */}
      <div className="px-5 py-3 border-b border-gray-600">
       <div className="text-2xl font-bold tracking-tight flex items-center gap-1.5">
            <Layers  className='text-[#F1F5F9]'/>
          <div>
            <span className="text-[#D4AF37]">Exam</span>
            <span className="text-[#F1F5F9]"> Stack</span>
          </div>
        </div>
      </div>

      {/* 2. Navigation */}
      <nav className="flex-1 px-4 mt-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`
                    group flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
                    ${isActive 
                      ? 'bg-[#D4AF37] text-[#0B1120] font-bold shadow-lg shadow-[#D4AF37]/10' 
                      : 'text-[#F1F5F9]/60 hover:bg-[#1E293B] hover:text-[#F1F5F9]'}
                  `}
                >
                  <item.icon 
                    size={20} 
                    className={`${isActive ? 'text-[#0B1120]' : 'text-[#D4AF37]/60 group-hover:text-[#D4AF37]'}`} 
                  />
                  <span className="text-xs uppercase tracking-widest">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3. Community Progress Widget (The Hook) */}
      <div className="px-6 mb-6">
        <div className="bg-[#1E293B] rounded-md p-4 border border-[#F1F5F9]/5">
          <p className="text-[10px] font-bold text-[#F1F5F9]/40 uppercase tracking-widest mb-3">
            Unlock AI Search
          </p>
          <div className="h-1.5 w-full bg-[#0B1120] rounded-full overflow-hidden mb-2">
            <div className="h-full bg-[#D4AF37] w-[65%]" />
          </div>
          <p className="text-[10px] text-[#F1F5F9]/60">
            <span className="text-[#D4AF37] font-bold">14/20</span> Resource needed.
          </p>
        </div>
      </div>

      {/* 4. Logout Section */}
      <div className="p-4 border-t border-[#F1F5F9]/10">
        <button 
          className="w-full flex items-center gap-3 px-4 py-3 text-[#F1F5F9]/40 hover:text-red-400 transition-colors cursor-pointer group"
          onClick={() => console.log("Logout Logic")}
        >
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;