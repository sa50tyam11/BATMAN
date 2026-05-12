// components/About.jsx
'use client'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ComicText } from '@/components/ui/comic-text';

export default function About() {
  // Restructured for instantly readable recruiter scanning
  const techStack = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    Backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    Systems: ["C / C++", "OpenCV", "Low-level Architecture"],
    Tools: ["Git", "Docker", "Figma", "Postman"]
  };

  return (
    <section id="about" className="w-full relative bg-[#0a0a0a] text-white border-t border-white/10">

      <div className="max-w-350 mx-auto w-full px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

        {/* --- LEFT SIDEBAR (Sticky) --- */}
        <div className="w-full lg:col-span-5 lg:sticky lg:top-0 lg:h-screen flex flex-col pt-24 pb-12 pr-0 lg:pr-8">

          <div className="flex flex-col items-start mb-10 gap-2 md:gap-4">
            <ComicText fontSize={4}>THE</ComicText>
            <ComicText fontSize={4}>ARCHITECT.</ComicText>
          </div>

          <div className="flex flex-col gap-8 border-l-2 border-[#EF4444]/40 pl-6 mt-2">
            <div>
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">20+</span>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">Total Projects</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">15+</span>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">Client Platforms</p>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">3+</span>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">Years Coding</p>
            </div>
          </div>

          <div className="mt-10 pl-6">
            {/* FIXED: Wired up the actual skjresume.pdf file with a download attribute */}
            <a
              href="/skjresume.pdf"
              download="Satyam_Kumar_Jha_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold tracking-widest uppercase text-[10px] md:text-xs hover:bg-white hover:text-black transition-all backdrop-blur-md shadow-lg w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        {/* --- RIGHT CONTENT (Scrollable) --- */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-16 pt-12 lg:pt-24 pb-24">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] text-zinc-200 tracking-tight"
          >
            I am Satyam Kumar Jha. I engineer enterprise-grade Full Stack architectures and push technical boundaries through low-level systems programming and Computer Vision.
          </motion.p>

          <div className="grid grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase border-b border-white/10 pb-4">The Origin</h3>
              <ul className="space-y-5 text-zinc-400 text-sm md:text-base leading-relaxed">
                <li className="flex gap-4 items-start">
                  <ArrowRight className="w-4 h-4 text-[#EF4444] shrink-0 mt-1" />
                  <span>Began by reverse-engineering web architectures, scaling into robust React & Node.js applications.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <ArrowRight className="w-4 h-4 text-[#EF4444] shrink-0 mt-1" />
                  <span>Founder of <strong>SENO Studio</strong>, architecting premium, high-performance web platforms and leading end-to-end digital transformations for diverse clients.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <ArrowRight className="w-4 h-4 text-[#EF4444] shrink-0 mt-1" />
                  <span>Expanding technical depth through systems programming (C/C++) and Machine Learning (Python, OpenCV).</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase border-b border-white/10 pb-4">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold text-lg tracking-tight">Bachelor of Computer Applications</h4>
                  <p className="text-[#EF4444] text-xs font-bold tracking-wider uppercase mt-2">Nitishwar Mahavidyalaya BRABU<br /><span className="text-zinc-500">2024 — Present</span></p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg tracking-tight">Class XII (PCM + IT STEM)</h4>
                  <p className="text-[#EF4444] text-xs font-bold tracking-wider uppercase mt-2">Sree Ayyappa Public School<br /><span className="text-zinc-500">Bokaro</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase border-b border-white/10 pb-4">Experience</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-white font-bold text-lg tracking-tight">Freelance Full Stack Developer</h4>
                  <p className="text-[#EF4444] text-xs font-bold tracking-wider uppercase mt-2">Independent <span className="text-zinc-500 mx-2">•</span> <span className="text-zinc-500">2022 — Present</span></p>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Successfully architected and delivered 20+ custom client projects globally. Specialized in transforming complex business requirements into high-performance web applications, scalable e-commerce platforms, and premium digital agency portfolios.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Grouped Tech Stack */}
          <div className="pt-8 border-t border-white/10 mt-8">
            <span className="text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">(CORE ARSENAL)</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(techStack).map(([category, skills], categoryIndex) => (
                <div key={categoryIndex} className="flex flex-col gap-3">
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-2 border-l-2 border-[#EF4444] pl-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                        className="px-4 py-2 rounded-full border border-white/10 bg-[#0f0f0f] text-[10px] md:text-xs font-semibold tracking-wide text-zinc-300 hover:border-[#EF4444] hover:text-[#EF4444] hover:bg-[#EF4444]/5 transition-all cursor-default"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}