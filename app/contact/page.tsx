"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link, { useLinkStatus } from 'next/link';

const ContactPage: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (

    <>
      <Link 
        href="/" 
        className="group flex items-center gap-2 text-[#F1F5F9]/60 hover:text-[#D4AF37] transition-colors ml-5 lg:ml-10 pt-10"
      >
        <div className="p-2 rounded-full border border-[#F1F5F9]/10 group-hover:border-[#D4AF37]/40 transition-all">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Back to Home
        </span>
      </Link>

    <section className="bg-[#0B1120] text-[#F1F5F9] min-h-screen pt-28 pb-20 px-5 lg:px-10 overflow-hidden">

    
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Contact Form */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Get In Touch
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Let’s Talk <br /> <span className="text-[#D4AF37]">Academic Growth.</span>
            </h1>
            <p className="text-[#F1F5F9]/60 text-xs max-w-md leading-relaxed">
              Have questions about your department's repository or need technical support with the AI? Our team is here to help you stack those A's.
            </p>
          </motion.div>

          <motion.form 
            variants={itemVariants}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#F1F5F9]/40">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full text-xs border-b border-[#F1F5F9]/10  pl-2 py-2.5  focus:outline-none focus:border-[#D4AF37] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#F1F5F9]/40">Email Address</label>
                <input type="email" placeholder="john@university.edu" className="w-full text-xs border-b border-[#F1F5F9]/10  pl-2 py-2.5  focus:outline-none focus:border-[#D4AF37] transition-all"  />
              </div>
            </div>   

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#F1F5F9]/40">Message</label>
              <textarea rows={2} placeholder="How can we help you study smarter?"className="w-full text-xs border-b border-[#F1F5F9]/10  pl-2 py-2.5  focus:outline-none focus:border-[#D4AF37] transition-all" ></textarea>
            </div>   

            <button className="w-full  bg-[#D4AF37] text-[#0B1120] px-12 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#F1F5F9] transition-all shadow-md shadow-[#D4AF37]/10 cursor-pointer">
              Send Message
              <Send size={16} />
            </button>
          </motion.form>

          {/* Quick Contact Info */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-8 pt-10 border-t border-[#F1F5F9]/10">
             <div className="flex items-center gap-3">
                <div className="p-3 bg-[#1E293B] rounded-md text-[#D4AF37] border border-gray-700 "><Mail size={18}/></div>
                <div><p className="text-[10px] text-[#F1F5F9]/40 uppercase font-bold">Email Us</p><p className="text-xs">support@examstack.com</p></div>
             </div>
             <div className="flex items-center gap-3">
                <div className="p-3 bg-[#1E293B] rounded-md text-[#D4AF37] border border-gray-700 "><MessageSquare size={18}/></div>
                <div><p className="text-[10px] text-[#F1F5F9]/40 uppercase font-bold">Live Chat</p><p className="text-xs">Available 24/7</p></div>
             </div>
          </motion.div>
        </motion.div>  

      <motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative grid grid-cols-2 gap-4 h-[600px]"
>
  {/* Decorative Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/5 blur-[120px] rounded-full" />

  {/* LEFT COLUMN */}
  <div className="flex flex-col gap-4">
    {/* Div 1: Main Action Image */}
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex-[1.5] rounded-xl overflow-hidden border border-[#F1F5F9]/10 relative group"
    >
      <Image 
        src="https://img.freepik.com/premium-photo/smiling-young-african-american-businesswoman-talking-smartphone-against-gray-background_13339-333040.jpg" 
        alt="Support" 
        fill 
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
      />
    </motion.div>

    {/* Div 2 (Swapped): Illustration/Learning Image */}
    <motion.div 
      whileHover={{ y: 5, scale: 1.02 }}
      className="flex-1 rounded-xl overflow-hidden border border-[#D4AF37]/30 relative"
    >
      <Image 
        src="https://img.freepik.com/premium-vector/vector-illustration-education-learning-back-school-reading-book_7087-3781.jpg?w=1480" 
        alt="Learning" 
        fill 
        className="object-cover" 
      />
    </motion.div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-4">
    {/* Div 3 (Swapped): Tech/AI Stat Box */}
    <motion.div 
      whileHover={{ x: 10, scale: 1.02 }}
      className="flex-1 rounded-xl overflow-hidden border border-[#D4AF37]/20 relative bg-[#1E293B] flex items-center justify-center p-6"
    >
      <div className="text-center z-10">
        <p className="text-[#D4AF37] font-black text-3xl mb-1">24/7</p>
        <p className="text-[#F1F5F9]/40 text-[10px] uppercase tracking-widest font-bold">Priority Support</p>
      </div>
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
    </motion.div>
    
    {/* Div 4: Success Card */}
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex-[0.8] bg-[#D4AF37] rounded-xl p-8 flex flex-col justify-end group transition-colors hover:bg-[#F1F5F9]"
    >
      <h4 className="text-[#0B1120] font-black text-2xl tracking-tighter leading-none">
        Stack Your <br /> A's Today.
      </h4>
      <p className="text-[#0B1120]/60 text-[10px] font-bold uppercase tracking-widest mt-4">
        Join 500+ Students
      </p>
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>

    </>
  );
};

export default ContactPage;