// components/Navbar.jsx
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/sa50tyam11' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satyamkrjha5011' },
    { name: 'X/Twitter', url: 'https://twitter.com/sa50tyam11' },
    { name: 'Freelance Agency', url: 'https://senostudio.in' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[110] px-6 md:px-12 py-8 flex justify-end items-center pointer-events-none">
        <div className="flex items-center gap-8 pointer-events-auto">

          <div className="hidden lg:flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <div className="text-white text-[10px] leading-tight font-medium uppercase tracking-widest">
              Available for Internship / Job<br />
              <span className="text-zinc-500">EARLY MAY 2026</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 group"
          >
            <span className="text-white text-xs font-bold tracking-widest hidden md:block group-hover:text-[#EF4444] transition-colors uppercase">LET&apos;S TALK</span>
            <div className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 border border-white/20 rounded-full group-hover:border-[#EF4444] transition-colors bg-white/5 backdrop-blur-sm">
              <div className="w-5 h-0.5 bg-white group-hover:bg-[#EF4444]" />
              <div className="w-5 h-0.5 bg-white group-hover:bg-[#EF4444]" />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 w-full md:w-[500px] h-screen bg-[#0d0d0d]/95 backdrop-blur-xl border-l border-white/10 z-[120] flex flex-col"
          >
            {/* Header (Fixed at top) */}
            <div className="flex justify-between items-center border-b border-white/10 p-8 md:px-12 md:pt-12 md:pb-6 shrink-0">
              <div className="flex items-center gap-4">
                {/* FIXED: Swapped to your new portrait image and used object-cover */}
                <img src="/SKJ.png" alt="Satyam Kumar Jha" className="w-10 h-10 object-cover rounded-md" />
                <span className="text-white text-xs font-bold tracking-[0.3em] uppercase mt-1">MENU</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#EF4444] transition-colors">
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 flex flex-col justify-between custom-scrollbar">
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 pb-12">
                {['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].map((item) => (
                  <div key={item} className="group relative overflow-hidden py-2 border-b border-white/5">
                    <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-white text-5xl md:text-6xl font-black tracking-tighter uppercase font-sans hover:text-[#EF4444] flex items-center gap-4 transition-colors">
                      {item}
                      <span className="text-[#EF4444] text-xl opacity-0 group-hover:opacity-100 transition-opacity">■</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Email & Socials */}
              <div className="flex flex-col gap-10 mt-auto pt-8">
                <div className="flex flex-col gap-2">
                  <span className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">(EMAIL)</span>
                  <a href="mailto:krjhasatyam128@gmail.com" className="text-[#EF4444] text-xl md:text-2xl font-semibold hover:opacity-70 transition-opacity break-all">
                    krjhasatyam128@gmail.com
                  </a>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">(SOCIALS)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                    {socialLinks.map(social => (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium flex items-center gap-1 hover:text-[#EF4444] transition-colors group w-fit">
                        {social.name} <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}