// components/Footer.jsx
'use client'
import { ArrowUpRight } from 'lucide-react';
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

export default function Footer() {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/sa50tyam11' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satyamkrjha5011' },
    { name: 'X/Twitter', url: 'https://twitter.com/sa50tyam11' }
  ];

  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] flex flex-col relative z-20 border-t border-white/10">
      <div className="max-w-350 mx-auto w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
          
          <div className="flex items-center">
             {/* FIXED: Swapped to your new portrait image, used object-cover, and added a red-tinted shadow */}
             <img src="/SKJ.png" alt="Satyam Kumar Jha" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-2xl shadow-red-500/20" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase w-20 shrink-0">(EMAIL)</span>
            <a href="mailto:krjhasatyam128@gmail.com" className="text-[#EF4444] text-xl md:text-4xl font-sans font-medium hover:opacity-80 transition-opacity">krjhasatyam128@gmail.com</a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase w-20 shrink-0">(PHONE)</span>
            <a href="tel:+916200964876" className="text-white text-2xl md:text-4xl font-sans font-medium hover:opacity-80 transition-opacity">+91 6200964876</a>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4 mt-4 lg:mt-0 lg:ml-12">
          <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase mb-2">(LINKS)</span>
          {['Home', 'About', 'Works', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white hover:text-[#EF4444] text-lg font-sans font-light transition-colors w-fit">{link}</a>
          ))}
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4 mt-4 lg:mt-0">
          <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase mb-2">(SOCIALS)</span>
          {socialLinks.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#EF4444] text-lg font-sans font-light transition-colors flex items-center gap-1 w-fit group">
              {social.name} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-350 mx-auto w-full px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-xs md:text-sm font-sans font-light">
        <span className="uppercase tracking-wider">© {new Date().getFullYear()} SATYAM KUMAR JHA. ALL RIGHTS RESERVED.</span>
      </div>

      <div className="w-full bg-[#050505] text-white overflow-hidden flex justify-between items-end h-[200px] md:h-[350px] lg:h-[450px] px-6 md:px-12 lg:px-20 relative mt-12 border-t border-white/5">
        <div className="absolute bottom-[-15%] md:bottom-[-20%] left-[-2%] w-[80%] h-[120%] pointer-events-auto">
           <ParticleTextEffect text="SATYAM" className="w-full h-full object-contain object-left-bottom" colors={['ffffff']} particleDensity={4} animationForce={60} />
        </div>
        <div className="flex flex-col text-right pb-6 md:pb-12 lg:pb-16 w-full justify-end items-end pointer-events-none relative z-10">
          <h2 className="text-[6vw] md:text-[5vw] lg:text-[4vw] font-sans font-medium uppercase leading-[0.9] tracking-tighter text-white/90">
            <span className="font-serif italic font-normal normal-case text-zinc-400">Beyond code.</span><br/>
            Built With<br/>
            Vision.
          </h2>
        </div>
      </div>
    </footer>
  );
}