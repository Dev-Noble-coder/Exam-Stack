"use client";
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { UploadCloud, FilePlus, AlertCircle } from 'lucide-react';

interface DropzoneProps {
  onFileSelect: (file: File) => void;
}

const UploadDropzone = ({ onFileSelect }: DropzoneProps) => {
const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
  });

  // 1. Get the props from Dropzone
  const dropzoneProps = getRootProps();

  // 2. Destructure and OMIT the conflicting Framer Motion gesture props.
  // We pull them out so they are NOT part of the '...cleanProps' spread.
  const { 
    ref, 
    onDrag, 
    onDragStart, 
    onDragEnd, 
    onAnimationStart, 
    ...cleanProps 
  } = dropzoneProps;
  return (
    <motion.div
     ref={ref}
      {...cleanProps}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        relative group cursor-pointer
        h-80 w-full rounded-lg border-2 border-dashed transition-all duration-300
        flex flex-col items-center justify-center p-10 text-center
        ${isDragActive ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-[#D4AF37]/50'}
    
      `}
    >
      <input {...getInputProps()} />

      {/* Decorative Background Icon (Faded) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <UploadCloud size={150} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Animated Icon Circle */}
        <div className={`
          w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500
          ${isDragActive ? 'bg-[#D4AF37] text-[#0B1120] rotate-180' : 'bg-[#0B1120] text-[#D4AF37]'}
        `}>
     { isDragActive ? (
            <FilePlus size={32} />
          ) : (
            <UploadCloud size={32} />
          )}
        </div>

        <div>
          <h2 className="text-lg font-black text-[#0B1120] tracking-tight">
            {isDragActive ? "DROP TO STACK" : "DRAG & DROP PAPER"}
          </h2>
          {/* <p className="text-slate-500 text-xs mt-1 max-w-[240px]">
            {isDragReject 
              ? "Only PDF files are accepted" 
              : "Support PDF files up to 20MB. Make sure the text is clear."}
          </p> */}
        </div>

        <button className="mt-4 px-6 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#0B1120] transition-all">
          BROWSE FILES
        </button>
      </div>


    </motion.div>
  );
};

export default UploadDropzone;