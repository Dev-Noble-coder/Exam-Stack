"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, CheckCircle2, Clock, AlertCircle, Share2 } from 'lucide-react';

interface DocProps {
  title: string;
  code: string;
  status: 'success' | 'pending' | 'failed';
  isShared: boolean;
}

const GoldenCard = ({ title, code, status, isShared }: DocProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative h-72 w-full bg-linear-to-br from-[#1E293B] to-[#0B1120] rounded-md border border-[#D4AF37]/20 px-4 py-5 shadow cursor-pointer group"
    >
      {/* Golden Shine Effect */}
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-center">
          <div className="p-2 bg-[#D4AF37]/10 rounded-md">
            <FileText className="text-[#D4AF37]" size={20} />
          </div>
          {isShared && <Share2 size={16} className="text-[#D4AF37]/40" />}
        </div>

        <div>
          <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-1">{code}</p>
          <h3 className="text-[#F1F5F9] font-bold text-md leading-tight group-hover:text-[#D4AF37] transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-[#F1F5F9]/5">
          {status === 'success' && <><CheckCircle2 size={14} className="text-emerald-400" /><span className="text-[10px] text-emerald-400 font-bold uppercase">AI Indexed</span></>}
          {status === 'pending' && <><Clock size={14} className="text-[#D4AF37]" /><span className="text-[10px] text-[#D4AF37] font-bold uppercase">Processing</span></>}
          {status === 'failed' && <><AlertCircle size={14} className="text-red-400" /><span className="text-[10px] text-red-400 font-bold uppercase">Failed</span></>}
        </div>
      </div>
    </motion.div>
  );
};

export default GoldenCard;