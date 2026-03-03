"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContributorCard = ({ rank, name, points, dept }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg border border-slate-200 relative overflow-hidden group"
    >
      <div className="absolute top-4 right-6 text-4xl font-black text-slate-50 italic opacity-10 group-hover:opacity-20 transition-opacity">
        #{rank}
      </div>
      
      <div className="w-12 h-12 bg-[#0B1120]/90 rounded-full flex items-center justify-center text-[#D4AF37] font-black mb-4">
        {name.charAt(0)}
      </div>

      <div>
        <h4 className="font-bold text-[#0B1120] text-sm">{name}</h4>
        <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">{dept}</p>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase">Contribution Points</p>
          <p className="text-lg font-black text-[#0B1120]">{points}</p>
        </div>
        <div className="h-8 w-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#D4AF37] group-hover:text-[#0B1120] transition-colors">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ContributorCard;