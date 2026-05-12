// components/Hero.jsx
'use client'
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Image & Editorial Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-coding.png" 
          alt="Satyam Kumar Jha Coding"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80" />
      </div>

      {/* Top Left Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-8 md:top-10 left-6 md:left-12 z-20 pointer-events-auto mt-1"
      >
        <span className="text-white font-sans text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase drop-shadow-md">
          Satyam Kumar Jha
        </span>
      </motion.div>

      {/* Main Typography Block */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">
        
        <div className="flex flex-col items-start mt-8 md:mt-0 pointer-events-auto">
          
          {/* FIXED: Scaled down from text-3xl to text-2xl */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-300 font-serif italic text-lg md:text-2xl tracking-widest uppercase mb-2 md:mb-4 drop-shadow-lg"
          >
            Full Stack
          </motion.span>

          {/* FIXED: Scaled down from 12vw to 10vw to give breathing room from the top name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white font-serif text-[20vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase drop-shadow-2xl"
          >
            WEB<br />
            DEVELOPER
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-[1px] bg-white/40 my-5 md:my-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-zinc-200 font-sans font-light text-sm md:text-lg max-w-xs md:max-w-sm leading-relaxed tracking-wide drop-shadow-md"
          >
            Building digital experiences that are elegant, functional & impactful.
          </motion.p>
        </div>

      </div>

      {/* FIXED: Grouped "Code. Create. Elevate." and the Button together so they perfectly align at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-20 flex items-end gap-8 md:gap-16 pointer-events-none"
      >
        <div className="flex flex-col gap-3 pointer-events-auto">
          {['CODE.', 'CREATE.', 'ELEVATE.'].map((word, i) => (
            <span key={i} className="text-zinc-300 font-sans font-medium tracking-[0.3em] text-[10px] uppercase drop-shadow-md">
              {word}
            </span>
          ))}
        </div>

        {/* Button moved here so it perfectly aligns horizontally with "ELEVATE" */}
        <a
          href="#projects"
          className="group flex items-center justify-between w-[200px] md:w-[220px] px-6 py-3.5 md:py-4 border border-white/20 bg-white/10 backdrop-blur-md text-white font-sans text-[10px] md:text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm shadow-xl pointer-events-auto mb-[-2px]"
        >
          <span>View My Work</span>
          <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </motion.div>

      {/* Bottom Right: Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-20 flex flex-col gap-6 items-center pointer-events-auto hidden md:flex"
      >
        <a href="https://www.linkedin.com/in/satyamkrjha5011" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors drop-shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/sa50tyam11" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors drop-shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 18v4"></path></svg>
        </a>
        <a href="https://twitter.com/sa50tyam11" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors drop-shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </motion.div>

      {/* Mid Right: Availability Status */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden md:flex absolute top-[35%] right-12 z-20 flex-col items-end text-right pointer-events-auto"
      >
        <span className="text-zinc-400 font-sans text-[9px] tracking-widest uppercase mb-2 drop-shadow-md">Available For</span>
        <span className="text-white font-sans text-[11px] font-medium tracking-widest uppercase border-b border-white/20 pb-2 drop-shadow-md">
          Internships & Roles
        </span>
      </motion.div>

    </section>
  );
}