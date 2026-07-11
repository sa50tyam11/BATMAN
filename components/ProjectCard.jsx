'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ProjectCard({ project, index = 0 }) {
  const [hasHovered, setHasHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices
    const matchMedia = window.matchMedia('(hover: none)');
    setIsTouchDevice(matchMedia.matches);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setHasHovered(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative w-full flex flex-col ${inter.className}`}
    >
      <div 
        className="group relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[#0d0d0d] light:bg-[#ffffff] shadow-lg border border-white/10 light:border-black/10"
        onMouseEnter={handleMouseEnter}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Only mount video if hovered and videoUrl exists */}
        {hasHovered && project.videoUrl && (
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          />
        )}
      </div>

      <div className="mt-6 flex flex-col items-start px-2">
        <h3 className="text-3xl font-bold text-white light:text-black mb-3">
          {project.title}
        </h3>
        
        <div className="space-y-1 mb-6">
          <p className="text-sm text-zinc-400 light:text-zinc-600">
            <strong className="text-white light:text-black font-semibold mr-1">Industry:</strong> {project.industry}
          </p>
          <p className="text-sm text-zinc-400 light:text-zinc-600">
            <strong className="text-white light:text-black font-semibold mr-1">Scope:</strong> {project.scope}
          </p>
        </div>
        
        <a 
          href={project.ctaLink || project.link}
          target={project.ctaLink ? "_self" : "_blank"}
          rel={project.ctaLink ? "" : "noopener noreferrer"}
          className={`mt-auto inline-block px-6 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-colors duration-300 ${
            project.ctaVariant === 'lime' 
              ? 'border-[#a3e635] text-[#a3e635] hover:bg-[#a3e635] hover:text-black light:border-[#84cc16] light:text-[#84cc16] light:hover:bg-[#84cc16] light:hover:text-white' 
              : 'border-white/20 text-white hover:bg-white hover:text-black light:border-black/20 light:text-black light:hover:bg-black light:hover:text-white'
          }`}
        >
          {project.ctaText || "View Live"}
        </a>
      </div>
    </motion.div>
  );
}
