"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalizationCard from '../components/dashboard/overview/PersonalizationCard';

const personalizationSteps = [


  {
    id: 1,
    question: "Which faculty are you in?",
    icon: "🏛️",
    options: ["Engineering", "Medicine", "Law", "Arts & Humanities", "Science"],
  },
      {
    id: 2,
    question: "How do you prefer to learn?",
    icon: "🧠",
    options: ["Visual (Images/Videos)", "Auditory (Listening)", "Reading/Writing", "Doing (Practice)"],
  },
    {
    id: 3,
    question: "What's your primary study goal?",
    icon: "🎯",
    options: ["Ace Exams", "Deep Learning", "Quick Revision", "Curiosity"],
  },
];

const DashboardPage = () => {
  const [currentSteps, setCurrentSteps] = useState(personalizationSteps);
  const isPersonalizationComplete = currentSteps.length === 0;

  const handleOptionSelect = (stepId: number, option: string) => {
    // Small delay to let the user see the click before the card slides
    setTimeout(() => {
      setCurrentSteps((prev) => prev.filter((step) => step.id !== stepId));
    }, 200);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* 1. THE ACTUAL DASHBOARD CONTENT (What's underneath) */}
      <div className=" pointer-events-none">
        <h1 className="text-xl font-medium">Main Dashboard Content</h1>
        {/* Add your usual dashboard grid/charts here */}
      </div>

      {/* 2. THE PERSONALIZATION OVERLAY */}
      <AnimatePresence>
        {!isPersonalizationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-[#0B1120]/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="w-full max-w-xl"
            >
              {/* Header inside the overlay */}
              <div className="text-center mb-10">
                <motion.h1 
                  layout
                  className="text-xl font-black text-white tracking-tighter italic"
                >
                  INITIALIZING <span className="text-[#D4AF37]">VAULT</span>
                </motion.h1>
                <p className="text-slate-300 mt-2 text-xs">Personalize your AI engine for better results.</p>
              </div>

              {/* The Card Stack */}
              <div className="relative h-[450px] w-full perspective-1000">
                <AnimatePresence mode="popLayout">
                  {currentSteps.map((step, index) => (
                    <PersonalizationCard
                      key={step.id}
                      data={step}
                      index={currentSteps.length - 1 - index}
                      total={currentSteps.length}
                      onSelect={handleOptionSelect}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Skip option for better UX */}
              <button 
                onClick={() => setCurrentSteps([])}
                className="mt-8 w-full text-slate-200 lg:text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
              >
                Skip personalization
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardPage;