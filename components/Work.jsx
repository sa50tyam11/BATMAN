'use client'
import { useRef } from 'react';
import { ComicText } from '@/components/ui/comic-text';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Homepage: 2 featured projects only, with full case-study format
// Additional projects archived at /projects
const featuredProjects = [
  {
    title: "Sur-Sansar",
    tagline: "Interactive map of India's regional folk music",
    problem: "No single place existed to discover the breadth of India's regional folk traditions through an interactive, audio-first experience.",
    solution: "Built an interactive India map where clicking each region triggers region-specific folk audio playback, with smooth transitions and state managed across the full UI.",
    techDecision: "Chose Zustand over React Context specifically to avoid re-render overhead during rapid region-switching — audio state changes frequently and Context would cause the whole tree to re-render on every click.",
    stack: ["Next.js", "Zustand", "Howler.js"],
    image: "/sursansar.png",
    githubUrl: "https://github.com/sa50tyam11/SUR-SANSAR",
    liveUrl: null, // Add live URL when deployed
    category: "Personal Project",
  },
  {
    title: "Muzaffarpur Bangles",
    tagline: "Full-stack e-commerce site with admin dashboard",
    problem: "A local bangle retailer had no online presence and was losing customers to competitors with digital storefronts.",
    solution: "Built a full-stack storefront and admin panel — the storefront handles product browsing and catalog display, while the admin panel lets the business owner manage inventory and products end-to-end.",
    techDecision: "Used Next.js for both the public storefront and the admin panel under a single deployment, keeping the build pipeline simple and avoiding the overhead of a separate admin app.",
    stack: ["Next.js", "TypeScript", "Supabase", "Netlify"],
    image: "/bangle.png",
    githubUrl: null, // Private client repository
    liveUrl: "https://muzaffarpurbangles.netlify.app",
    category: "Client Work",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group flex flex-col bg-[#0f0f0f] light:bg-white border border-white/8 light:border-black/8 rounded-2xl overflow-hidden hover:border-white/20 light:hover:border-black/20 transition-colors shadow-sm"
    >
      {/* Project Image */}
      <div className="relative w-full overflow-hidden aspect-[16/9] bg-zinc-900">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-zinc-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6 md:p-8 flex-1">
        <div>
          <h3 className="text-white light:text-black text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
          <p className="text-[#a3e635] light:text-[#84cc16] text-sm font-medium mt-1">{project.tagline}</p>
        </div>

        {/* Case study sections */}
        <div className="flex flex-col gap-4 text-sm text-zinc-400 light:text-zinc-600 leading-relaxed">
          <div>
            <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase block mb-1">Problem</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase block mb-1">Solution</span>
            <p>{project.solution}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase block mb-1">Key Technical Decision</span>
            <p className="text-zinc-300 light:text-zinc-700">{project.techDecision}</p>
          </div>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-white/10 light:border-black/10 text-[10px] font-semibold tracking-wide text-zinc-400 light:text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5 light:border-black/5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 light:border-black/20 text-white light:text-black text-xs font-medium tracking-wide hover:border-white/40 light:hover:border-black/40 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              View Code
            </a>
          ) : (
            <span className="text-zinc-600 text-xs italic">Private client repository</span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#a3e635] text-black text-xs font-bold tracking-wide hover:bg-[#bef264] transition-colors"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-zinc-600 text-xs italic">Demo coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={containerRef} className="w-full relative bg-[#0a0a0a] light:bg-[#fafafa] border-t border-white/10 light:border-black/10">
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 py-24 lg:py-32">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <ComicText fontSize={3.5}>FEATURED PROJECTS</ComicText>
          <p className="mt-4 text-xl md:text-2xl font-serif italic tracking-wide text-center md:text-left">
            <span className="text-white light:text-black">Real systems, shipped for </span>
            <span className="text-[#a3e635] light:text-[#84cc16]">real clients and real problems.</span>
          </p>
        </div>

        {/* Projects Grid — 2 featured, full case-study format */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="w-full flex justify-center mt-24 relative z-10">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full border border-[#a3e635] light:border-[#84cc16] text-[#a3e635] light:text-[#84cc16] text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#a3e635] light:hover:bg-[#84cc16] hover:text-black transition-all duration-300"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}