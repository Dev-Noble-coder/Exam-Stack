import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin, Mail, Layers } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1120] border-t border-[#F1F5F9]/10 px-5 lg:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-10">

                {/* Logo & Slogan */}
                <div className="text-center md:text-left">
                    <div className="text-2xl font-bold tracking-tight flex items-center gap-1.5 pb-2">
                        <Layers className='text-[#F1F5F9]' />
                        <Link href="/">
                            <span className="text-[#D4AF37]">Exam</span>
                            <span className="text-[#F1F5F9]"> Stack</span>
                        </Link>
                    </div>
                    <p className="text-[#F1F5F9]/50 text-xs uppercase tracking-[0.2em]">
                        Master Your Exams, Stack Your A’s.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex gap-8 text-[#F1F5F9]/70 text-xs font-medium">
                    <Link href="/" className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
                        Home
                    </Link>
                    <Link href="/course-materials" className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
                        Materials
                    </Link>
                    <Link href="/contact" className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
                        Contact
                    </Link>
                </div>

                {/* Socials */}
                <div className="flex gap-5 items-center">
                    <Link href="#" className="text-[#F1F5F9]/40 hover:text-[#D4AF37] transition-all">
                        <Twitter size={20} />
                    </Link>
                    <Link href="#" className="text-[#F1F5F9]/40 hover:text-[#D4AF37] transition-all">
                        <Github size={20} />
                    </Link>
                    <Link href="#" className="text-[#F1F5F9]/40 hover:text-[#D4AF37] transition-all">
                        <Linkedin size={20} />
                    </Link>
                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="max-w-7xl mx-auto  py-5 border-t border-[#F1F5F9]/5 text-center">
                <p className="text-[#F1F5F9]/20 text-[10px] uppercase tracking-widest">
                    © {currentYear} ExamStack AI. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;