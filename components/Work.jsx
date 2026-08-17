'use client'
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ComicText } from '@/components/ui/comic-text';

const projects = [
  { title: "Sur-Sansar", industry: "Interactive Music Web App", scope: "Next.js + Zustand + Howler.js", image: "/sursansar.png", videoUrl: "", link: "https://github.com/sa50tyam11/SUR-SANSAR" },
  { title: "Visionary Opticals", industry: "Retail & Eyewear", scope: "Website Design + E-commerce", image: "/opticle.png", videoUrl: "", link: "https://seno-eye-demo.netlify.app/" },
  { title: "Real Estate Business", industry: "Real Estate", scope: "Property Buying & Selling", image: "/e-state.png", videoUrl: "", link: "https://seno-estate.netlify.app/" },
  { title: "Muzaffarpur Bangles", industry: "E-Commerce", scope: "Full-Stack Web App & Admin", image: "/bangle.png", videoUrl: "", link: "https://muzaffarpurbangles.netlify.app" }
];

export default function Work() {
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={containerRef} className="w-full relative bg-[#0a0a0a] light:bg-[#fafafa] border-t border-white/10 light:border-black/10">
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 py-24 lg:py-32">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <ComicText fontSize={3.5}>FEATURED PROJECTS</ComicText>
          <p className="mt-4 text-xl md:text-2xl font-serif italic tracking-wide text-center md:text-left">
            <span className="text-white light:text-black">A mix of </span><span className="text-[#a3e635] light:text-[#84cc16]">real systems, useful tools, and controlled chaos.</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="w-full flex justify-center mt-24 relative z-10">
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center px-12 py-4 rounded-full border border-[#a3e635] light:border-[#84cc16] text-[#a3e635] light:text-[#84cc16] text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#a3e635] light:hover:bg-[#84cc16] hover:text-white transition-all duration-300"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}