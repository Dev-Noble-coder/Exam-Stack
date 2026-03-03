"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileCheck, Coins, Zap, ShieldCheck } from 'lucide-react';
import UploadDropzone from '@/app/components/dashboard/upload/UploadDropzone';
import LabelForm from '@/app/components/dashboard/upload/LabelForm';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState< Boolean >(false);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-xl font-black text-[#0B1120] tracking-tight">
            CONTRIBUTE <span className="text-[#D4AF37]">PAPER</span>
          </h1>
          <p className="text-slate-500 mt-2 text-xs">Upload high-quality materials to earn Stack Points & unlock AI Search.</p>
        </div>

        <div className="flex gap-4">
          <div className="bg-white p-4 rounded-md border border-slate-200  flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <Coins size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Potential Gain</p>
              <p className="text-sm font-black text-[#0B1120]">+50 XP</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Upload Area */}
        <div className="lg:col-span-2 space-y-6">
          {!file ? (
            <UploadDropzone onFileSelect={(f) => setFile(f)} />
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0B1120] rounded-lg p-8 border border-[#D4AF37]/20 relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center text-[#0B1120]">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{file.name}</h3>
                    <p className="text-[#D4AF37] text-xs font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB • PDF Ready</p>
                  </div>
                </div>
                <button 
                  onClick={() => setFile(null)}
                  className="cursor-pointer text-slate-500 hover:text-white text-xs underline"
                >
                  Change File
                </button>
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {file && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-8 border border-slate-200"
              >
                <LabelForm onSubmit={() => setIsUploading(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Rules/Points Breakdown */}
        <div className="space-y-4">
          <div className="bg-[#F8FAFC] rounded-lg p-6 border border-slate-200">
            <h4 className="font-bold text-[#0B1120] flex items-center gap-2 mb-4">
              <Zap size={18} className="text-[#D4AF37]" /> 
              Stack Rewards
            </h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Base Upload</span>
                <span className="font-bold text-[#0B1120]">+20</span>
              </li>
              <li className="flex justify-between items-center text-xs">
                <span className="text-slate-500">AI Quality Check</span>
                <span className="font-bold text-[#0B1120]">+10</span>
              </li>
              <li className="flex justify-between items-center text-xs">
                <span className="text-slate-500">First of Dept.</span>
                <span className="font-bold text-emerald-500">+20 Bonus</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
            <div className="flex items-center gap-3 text-emerald-700 font-bold text-sm mb-2">
              <ShieldCheck size={18} />
              Quality Guarantee
            </div>
            <p className="text-emerald-600/80 text-xs leading-relaxed">
              Ensure the PDF is legible. Blurred or incorrect papers will be rejected by the AI validator and points will be deducted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;