'use client'
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskSize = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 });
  const smoothSize = useSpring(maskSize, { damping: 30, stiffness: 200 });

  const maskImage = useMotionTemplate`radial-gradient(circle ${smoothSize}px at ${smoothX}px ${smoothY}px, black 100%, transparent 100%)`;

  const handlePointerMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => maskSize.set(150)}
      onPointerLeave={() => maskSize.set(0)}
      className="relative w-full h-dvh overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full relative [clip-path:polygon(0_20%,100%_0%,100%_80%,0_100%)] md:[clip-path:polygon(0_35%,100%_5%,100%_65%,0_90%)]">
          <div className="absolute inset-0">
            <img src="/portrait.jpg" alt="Satyam Kumar Jha" className="w-full h-full object-cover opacity-70 contrast-125 grayscale-[0.1]" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <motion.div className="absolute inset-0 z-10" style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}>
            <img src="/portrait-reveal.jpg" alt="Satyam Reveal" className="w-full h-full object-cover contrast-125" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </div>

      <div className="relative w-full h-full max-w-7xl mx-auto pointer-events-none z-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-[12vh] md:top-[12vh] left-6 md:left-12 pointer-events-auto"
        >
          {/* USES BARLOW MEDIUM */}
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[8vw] font-sans font-medium text-white uppercase leading-[0.85] tracking-tighter drop-shadow-2xl">
            SATYAM<br />
            KUMAR JHA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="absolute top-[48vh] md:top-[30%] right-6 md:right-12 flex flex-col items-end pointer-events-auto cursor-crosshair min-h-[150px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0, y: isHovered ? 0 : 10, marginBottom: isHovered ? 12 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <span className="inline-block px-3 py-1 bg-[#EF4444] text-white font-sans font-medium tracking-[0.2em] text-[9px] md:text-xs uppercase rounded-sm shadow-[0_0_15px_rgba(239,68,68,0.4)] whitespace-nowrap">
              I BUILD THE INTERNET.
            </span>
          </motion.div>

          {/* SANS / SERIF MIXED TYPOGRAPHY */}
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.h2
                key="vision"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="text-[7vw] md:text-[5vw] uppercase text-right leading-[0.9] tracking-tighter"
              >
                <span className="font-serif italic font-normal normal-case text-zinc-400 text-[8vw] md:text-[6vw]">Beyond Visuals.</span><br />
                <span className="font-sans font-medium text-white">BUILT WITH<br />VISION.</span>
              </motion.h2>
            ) : (
              <motion.h2
                key="superpower"
                initial={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="text-[6vw] md:text-[4vw] uppercase text-right leading-[1] tracking-tighter mt-2 whitespace-nowrap"
              >
                <span className="font-serif italic font-normal normal-case text-zinc-400 text-[7vw] md:text-[5vw]">Code is my</span><br />
                <span className="font-sans font-medium text-[#EF4444] drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">SUPERPOWER.</span>
              </motion.h2>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-[16vh] md:bottom-12 left-6 md:left-12 max-w-xs md:max-w-md flex flex-col gap-5 pointer-events-auto"
        >
          <h3 className="text-lg md:text-[2vw] font-sans font-medium text-white leading-[1.1] tracking-tight drop-shadow-md">
            Full Stack Developer & Founder @ SENO.<br />
            <span className="text-zinc-300 font-sans font-light transition-colors mt-1 block text-sm md:text-base">Crafting 3D interactive web experiences with React, Three.js, and Framer Motion.</span>
          </h3>
          <div className="flex gap-3">
            <a href="https://github.com/sa50tyam11" target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 18v4"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/satyamkrjha5011" target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-[#EF4444] hover:text-[#EF4444] hover:bg-[#EF4444]/10 transition-all backdrop-blur-md" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute bottom-6 md:bottom-12 left-6 md:left-auto right-6 md:right-12 flex flex-row gap-3 md:gap-4 pointer-events-auto"
        >
          <a href="#projects" className="flex-1 md:flex-none flex items-center justify-center px-4 py-3.5 md:px-8 md:py-4 rounded-full border border-white/30 text-white font-sans font-medium tracking-widest uppercase text-[10px] md:text-xs hover:bg-white hover:text-black transition-all backdrop-blur-md shadow-lg">VIEW WORK</a>
          <a href="#contact" className="flex-1 md:flex-none flex items-center justify-center px-4 py-3.5 md:px-8 md:py-4 rounded-full border border-[#EF4444] text-[#EF4444] font-sans font-medium tracking-widest uppercase text-[10px] md:text-xs hover:bg-[#EF4444] hover:text-white transition-all bg-[#0a0a0a]/70 backdrop-blur-md shadow-lg">CONTACT</a>
        </motion.div>
      </div>
    </section>
  );
}