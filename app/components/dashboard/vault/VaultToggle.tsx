"use client";
import { LayoutGrid, Table } from 'lucide-react';

const VaultToggle = ({ view, setView }: { view: 'grid' | 'table', setView: (v: 'grid' | 'table') => void }) => {
  return (
    <div className="flex bg-[#1E293B] p-1 rounded-md border border-[#F1F5F9]/5 w-fit">
      <button
        onClick={() => setView('grid')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${view === 'grid' ? 'bg-[#D4AF37] text-[#0B1120] shadow-lg' : 'text-[#F1F5F9]/40 hover:text-[#F1F5F9]'}`}
      >
        <LayoutGrid size={16} />
        <span className="text-xs font-bold uppercase tracking-wider">3D Stack</span>
      </button>
      <button
        onClick={() => setView('table')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${view === 'table' ? 'bg-[#D4AF37] text-[#0B1120] shadow-lg' : 'text-[#F1F5F9]/40 hover:text-[#F1F5F9]'}`}
      >
        <Table size={16} />
        <span className="text-xs font-bold uppercase tracking-wider">Table View</span>
      </button>
    </div>
  );
};

export default VaultToggle;