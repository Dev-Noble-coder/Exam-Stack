"use client";
import { UploadCloud } from "lucide-react";

const LabelForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Course Code</label>
          <input 
            type="text" 
            placeholder="e.g. GST 101" 
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all text-xs"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Academic Year</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs px-4 py-3 outline-none">
            <option>2023/2024</option>
            <option>2022/2023</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Course Title</label>
        <input 
          type="text" 
          placeholder="e.g. Introduction to Philosophy" 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs px-4 py-3 outline-none"
        />
      </div>

      <button 
        onClick={onSubmit}
        className="w-full bg-[#0B1120] text-[#D4AF37] font-bold py-3 rounded-full hover:bg-[#1E293B] transition-all flex items-center justify-center gap-2 text-xs cursor-pointer"
      >
        <UploadCloud size={18} />
        INITIALIZE UPLOAD & GAIN POINTS
      </button>
    </div>
  );
};

export default LabelForm;