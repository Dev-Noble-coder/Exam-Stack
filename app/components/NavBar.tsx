import React from 'react'
import Link from 'next/link'
import { Layers } from 'lucide-react'

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-pink bg-[#0B1120]/90 backdrop-blur-md h-16 flex justify-between">
      <div className="flex justify-between items-center  px-10 w-full mx-auto">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-tight flex items-center gap-1.5">
            <Layers  className='text-[#F1F5F9]'/>
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
            <Link href="/upload-course-materials" className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
              Materials
            </Link>
            <Link href="/upload-past-questions" className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
              Past Questions
            </Link>
            <Link href="/contact-us" className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
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

        {/* Mobile Toggle Placeholder */}
        <div className="md:hidden">
          <button className="text-[#F1F5F9]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar