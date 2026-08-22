// components/Navbar.jsx
'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => {
        if (data.isAdmin) {
          setIsAdmin(true);
        }
      })
      .catch(console.error);
  }, []);

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/sa50tyam11' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satyamkrjha5011' },
    { name: 'X/Twitter', url: 'https://twitter.com/sa50tyam11' },
    { name: 'Freelance Agency', url: 'https://senostudio.in' }
  ];

  const navLinks = [
    { name: 'HOME', href: '/#home' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'CONTACT', href: '/#contact' }
  ];

  if (isAdmin) {
    navLinks.push({ name: 'ADMIN', href: '/admin/blog' });
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[110] px-6 md:px-12 py-8 flex justify-end items-center pointer-events-none">
        <div className="flex items-center gap-8 pointer-events-auto">

          <div className="hidden lg:flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <div className="text-white light:text-black text-[10px] leading-tight font-medium uppercase tracking-widest transition-colors">
              Open to internship &amp; full-time roles
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Persistent Resume button — accessible from any scroll position */}
            <a
              href="/skjresume.pdf"
              download="Satyam_Kumar_Jha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[#a3e635] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-[#bef264] transition-colors shadow-sm shadow-[#a3e635]/20"
            >
              <Download size={12} />
              Resume
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 border rounded-full group-hover:border-[#a3e635] light:group-hover:border-[#84cc16] transition-colors backdrop-blur-sm border-white/20 light:border-black/20 bg-white/5 light:bg-black/5">
                <div className="w-5 h-0.5 group-hover:bg-[#a3e635] light:group-hover:bg-[#84cc16] bg-white light:bg-black transition-colors" />
                <div className="w-5 h-0.5 group-hover:bg-[#a3e635] light:group-hover:bg-[#84cc16] bg-white light:bg-black transition-colors" />
              </div>
            </button>
          </div>
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
            className="fixed top-0 right-0 w-full md:w-[500px] h-screen bg-[#0d0d0d]/95 light:bg-white/95 backdrop-blur-xl border-l border-white/10 light:border-black/10 z-[120] flex flex-col"
          >
            {/* Header (Fixed at top) */}
            <div className="flex justify-between items-center border-b border-white/10 light:border-black/10 p-8 md:px-12 md:pt-12 md:pb-6 shrink-0">
              <div className="flex items-center gap-4">
                <img src="/hero-coding.png" alt="Satyam Kumar Jha" className="w-10 h-10 object-cover rounded-md" />
                <span className="text-white light:text-black text-xs font-bold tracking-[0.3em] uppercase mt-1">MENU</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white light:text-black hover:text-[#a3e635] light:hover:text-[#a3e635] transition-colors">
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 flex flex-col justify-between custom-scrollbar">
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 pb-12">
                {navLinks.map((item) => (
                  <div key={item.name} className="group relative overflow-hidden py-2 border-b border-white/5 light:border-black/5">
                    <a href={item.href} onClick={() => setIsOpen(false)} className="text-white light:text-black text-5xl md:text-6xl font-black tracking-tighter uppercase font-sans hover:text-[#a3e635] light:hover:text-[#84cc16] flex items-center gap-4 transition-colors">
                      {item.name}
                      <span className="text-[#a3e635] light:text-[#84cc16] text-xl opacity-0 group-hover:opacity-100 transition-opacity">■</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Email, Resume & Socials */}
              <div className="flex flex-col gap-10 mt-auto pt-8">
                <div className="flex flex-col gap-2">
                  <span className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">(EMAIL)</span>
                  <a href="mailto:krjhasatyam128@gmail.com" className="text-[#a3e635] text-xl md:text-2xl font-semibold hover:opacity-70 transition-opacity break-all">
                    krjhasatyam128@gmail.com
                  </a>
                </div>

                {/* Resume — visible in mobile menu */}
                <a
                  href="/skjresume.pdf"
                  download="Satyam_Kumar_Jha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#a3e635] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-[#bef264] transition-colors w-fit"
                >
                  <Download size={14} />
                  Download Resume
                </a>

                <div className="flex flex-col gap-4">
                  <span className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">(SOCIALS)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                    {socialLinks.map(social => (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white light:text-black text-sm font-medium flex items-center gap-1 hover:text-[#a3e635] light:hover:text-[#84cc16] transition-colors group w-fit">
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