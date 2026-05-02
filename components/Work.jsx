// components/Work.jsx
'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ComicText } from '@/components/ui/comic-text';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    // Using JSX directly in the data to color 'Soft' and 'Campus' separately
    name: <><span className="text-[#FF5722]">Soft</span><span className="text-[#0284c7]">Campus</span></>,
    category: "Global Tech Agency",
    description: "A complete website built from scratch for a global company that crafts custom software and web solutions. Designed to perfectly showcase their extensive portfolio and global presence.",
    image: "/softcampus.jpg",
  },
  {
    id: "02",
    name: "Muzaffarpur Lahathi",
    category: "Digital Transformation",
    description: "Built from the ground up for a client with a massive offline legacy but zero online footprint. This platform successfully launched their brand into the digital space.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", // Keeping your previous placeholder
  },
  {
    id: "03",
    name: "SENO Studio",
    category: "Freelance Agency",
    description: "The official digital headquarters for my own freelance agency. Engineered from scratch to deliver elite, uncompromising digital experiences. Live at www.senostudio.in.",
    image: "/seno.jpg",
  }
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = projects.map((_, index) => {
      return ScrollTrigger.create({
        trigger: `#project-${index}`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveIndex(index);
          }
        }
      });
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={containerRef} className="w-full relative bg-[#0a0a0a] border-t border-white/10">

      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

        {/* LEFT SIDEBAR (Sticky) */}
        <div className="hidden lg:flex lg:col-span-5 sticky top-0 h-screen flex-col py-24 pr-8">

          <div className="flex justify-start mb-16">
            <ComicText fontSize={3.5}>LATEST WORK</ComicText>
          </div>

          <div className="relative flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col"
              >
                <span className="text-zinc-500 font-bold tracking-[0.2em] text-xl mb-4">
                  ({projects[activeIndex].id})
                </span>

                <h3 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                  {projects[activeIndex].name}
                </h3>

                <div className="mb-6 flex">
                  <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-medium text-white/80 uppercase tracking-widest backdrop-blur-sm">
                    {projects[activeIndex].category}
                  </span>
                </div>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
                  {projects[activeIndex].description}
                </p>

                <div className="mt-8">
                  <button className="flex items-center gap-2 text-white font-medium uppercase tracking-widest hover:opacity-70 transition-opacity">
                    View Case Study <ArrowUpRight size={20} />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT CONTENT (Scrollable Images) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col pt-24 lg:pt-0 pb-12">
          {projects.map((proj, index) => (
            <div
              key={index}
              id={`project-${index}`}
              className="min-h-screen w-full flex flex-col justify-center py-12"
            >
              <div className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer mb-6 border border-white/10">
                <img
                  src={proj.image}
                  alt={`Project ${proj.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-2 border border-white/10 font-medium tracking-wide">
                    VIEW PROJECT <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Mobile Info */}
              <div className="lg:hidden flex flex-col mt-4">
                <span className="text-zinc-500 font-medium mb-2 tracking-widest">({proj.id})</span>
                <h3 className="text-4xl font-bold text-white mb-4">{proj.name}</h3>
                <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-medium text-white/80 uppercase tracking-widest w-fit mb-4">
                  {proj.category}
                </span>
                <p className="text-zinc-400 leading-relaxed mb-6">{proj.description}</p>
                <button className="flex items-center gap-2 text-white text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity w-fit">
                  View Case Study <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MORE PROJECTS CTA BUTTON --- */}
      <div className="w-full flex justify-center pb-32 pt-12 relative z-10">
        <a
          href="https://github.com/sa50tyam11"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center w-[280px] md:w-[400px] py-5 rounded-full border border-[#EF4444] text-[#EF4444] text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#EF4444] hover:text-white"
        >
          VIEW MORE PROJECTS
        </a>
      </div>

    </section>
  );
}