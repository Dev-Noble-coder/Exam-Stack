"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { Layers, Menu, X } from 'lucide-react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-pink bg-[#0B1120]/90 backdrop-blur-md h-16 flex flex-col justify-center">
      <div className="flex justify-between items-center px-5 lg:px-10 w-full mx-auto">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-tight flex items-center gap-1.5">
            <Layers className='text-[#F1F5F9]'/>
          <Link href="/">
            <span className="text-[#D4AF37]">Exam</span>
            <span className="text-[#F1F5F9]"> Stack</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[#F1F5F9]/80 text-xs font-medium">
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

          {/* Auth Button */}
          <div className="pl-4 border-l border-[#F1F5F9]/20">
            <Link 
              href="/sign-in" 
              className="bg-[#F1F5F9] text-[#0B1120] px-8 py-2.5 rounded-full text-xs font-bold hover:bg-[#D4AF37] hover:scale-105 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#F1F5F9] focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-[#0B1120] shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center overflow-hidden ${
          isOpen 
            ? "max-h-[400px] py-6 opacity-100 border-b border-[#F1F5F9]/20 pointer-events-auto" 
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/" onClick={toggleMenu} className="text-[#F1F5F9]/80 hover:text-[#D4AF37] text-sm font-medium transition-all duration-300">
          Home
        </Link>
        <Link href="/course-materials" onClick={toggleMenu} className="text-[#F1F5F9]/80 hover:text-[#D4AF37] text-sm font-medium transition-all duration-300 mt-6">
          Materials
        </Link>
        <Link href="/contact" onClick={toggleMenu} className="text-[#F1F5F9]/80 hover:text-[#D4AF37] text-sm font-medium transition-all duration-300 mt-6">
          Contact
        </Link>
        <Link 
          href="/sign-in" 
          onClick={toggleMenu}
          className="bg-[#F1F5F9] text-[#0B1120] px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#D4AF37] transition-all duration-300 mt-8 mb-2"
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default NavBar