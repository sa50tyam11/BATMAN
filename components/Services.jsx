// components/Services.jsx
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComicText } from '@/components/ui/comic-text';

const services = [
  {
    id: "01",
    title: "Cinematic Web Experiences",
    description: "Crafting premium, pixel-perfect frontend interfaces engineered with Next.js and Three.js. We prioritize fluid scroll-telling and 3D micro-interactions that make digital environments feel alive.",
    tags: ["React & Next.js", "Three.js & GSAP", "Interaction Design"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Robust Full-Stack Systems",
    description: "End-to-end bespoke applications bridging immersive frontend interfaces with highly resilient, scalable Django backends to power your complex business logic and enterprise APIs.",
    tags: ["Django Framework", "API Architecture", "Database Design"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "AI & Automation Integration",
    description: "Bespoke AI pipelines, automated Python workflows, and custom digital assistants engineered to elevate your digital operations, saving hundreds of hours of manual labor.",
    tags: ["Python Automations", "LLM Integration", "Smart Assistants"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "E-Commerce Architecture",
    description: "High-conversion headless storefronts optimized for sub-second checkouts. We build scalable platforms leveraging modern tech to turn your visitors into loyal customers.",
    tags: ["Headless Commerce", "Payment Integration", "Conversion Optimization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-[#0a0a0a] py-20 md:py-32 border-t border-white/10 overflow-hidden relative">
      <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- FIXED HEADER AREA --- */}
        <div className="flex flex-col w-full mb-16 md:mb-24">
          
          {/* Top Left: Comic Label */}
          <div className="w-full flex justify-start mb-4 md:mb-2 md:-ml-4">
            <ComicText fontSize={3.5}>SERVICES</ComicText>
          </div>
          
          {/* Centered: ONE LINE MASSIVE TITLE */}
          <div className="w-full flex justify-center">
            <h2 className="text-[11vw] md:text-[10vw] lg:text-[8.5vw] font-bold text-white uppercase leading-[0.8] tracking-tighter whitespace-nowrap text-center">
              How We Can Help<span className="text-[#EF4444]">.</span>
            </h2>
          </div>
          
        </div>

        {/* Accordion List */}
        <div className="border-t border-white/20">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={service.id} 
                className="border-b border-white/20 overflow-hidden group"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                onClick={() => setOpenIndex(isOpen ? null : index)} 
              >
                {/* Accordion Trigger Row */}
                <div className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300 pr-4">
                  
                  {/* Left Side: Number with red dot */}
                  <div className={`text-3xl md:text-4xl font-medium mb-4 md:mb-0 transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-600 group-hover:text-white"}`}>
                    {service.id}<span className={isOpen ? "text-[#EF4444]" : "text-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity"}>.</span>
                  </div>
                  
                  {/* Right Side: Title */}
                  <h3 className={`text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight transition-colors duration-500 text-left md:text-right ${isOpen ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Expanded Content Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <div className="pb-12 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pr-4 md:pr-0">
                        
                        {/* Image Left */}
                        <div className="col-span-1 lg:col-span-5 h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden border border-white/10">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                          />
                        </div>
                        
                        {/* Details Right */}
                        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                          <p className="text-zinc-400 text-base md:text-2xl leading-relaxed mb-8 max-w-2xl">
                            {service.description}
                          </p>
                          
                          {/* Tags / Pills */}
                          <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="px-5 py-2 rounded-full border border-white/15 text-sm font-medium text-white/80 bg-white/5 backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}