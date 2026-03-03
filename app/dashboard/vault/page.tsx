"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldenCard from '@/app/components/dashboard/vault/GoldenCard';
import VaultToggle from '@/app/components/dashboard/vault/VaultToggle';


interface DocItem {
  id: number;
  title: string;
  code: string;
  status: 'success' | 'pending' | 'failed'; // Explicitly match DocProps
  isShared: boolean;
}


const mockData: DocItem[] = [
  { id: 1, title: "Anatomy & Physiology I", code: "BIO 201", status: 'success', isShared: true },
  { id: 2, title: "Intro to Thermodynamics", code: "MECH 302", status: 'pending', isShared: false },
  { id: 3, title: "Commercial Law", code: "LAW 411", status: 'failed', isShared: true },
  { id: 4, title: "Data Structures", code: "CSC 201", status: 'success', isShared: false },
];

const VaultPage = () => {
  const [view, setView] = useState<'grid' | 'table'>('grid');

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-[#0B1120] tracking-tight">My Vault</h1>
          <p className="text-slate-500 text-xs">Manage your personal collection of golden materials.</p>
        </div>
        <VaultToggle view={view} setView={setView} />
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {view === 'grid' ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 perspective-1000"
          >
            {mockData.map((doc) => (
              <GoldenCard key={doc.id} {...doc} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="table"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-md  border border-gray-200 overflow-hidden"
          >
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="p-4 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Document</th>
                  <th className="p-4 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Code</th>
                  <th className="p-4 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Indexing</th>
                  <th className="p-4 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Shared</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {mockData.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors ">
                    <td className="p-4 font-medium text-slate-700 text-xs">{doc.title}</td>
                    <td className="p-4 text-xs text-slate-500">{doc.code}</td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${doc.status === 'success' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                        {doc.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-500">{doc.isShared ? "Public" : "Private"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VaultPage;