// components/Contact.jsx
'use client'

import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0a0a0a] relative overflow-hidden border-t border-white/10 pt-32 pb-24 md:pt-48 md:pb-32">

      <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="w-full md:w-3/5">
          <h2 className="text-[14vw] md:text-[8vw] text-white uppercase leading-[0.85] tracking-tighter font-sans font-medium">
            Let&apos;s talk.
          </h2>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start md:items-end text-left md:text-right gap-6">
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-md font-sans font-light">
            I&apos;m looking for <span className="text-white font-medium">internship</span> and <span className="text-white font-medium">full-time software engineering roles</span>. If you&apos;re hiring, or just want to talk about something I&apos;ve built, my inbox is open.
          </p>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto mt-2">
            {/* Primary: Email */}
            <a 
              href="mailto:krjhasatyam128@gmail.com" 
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#a3e635] text-black text-sm font-sans font-bold tracking-[0.15em] uppercase hover:bg-[#bef264] transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#a3e635]/20"
            >
              <Mail size={18} />
              Email Me
            </a>
            {/* Secondary: WhatsApp — useful for Indian recruiters */}
            <a 
              href="https://wa.me/916200964876?text=Hi%20Satyam%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-sans font-medium tracking-[0.15em] uppercase hover:border-white/40 transition-all duration-300 whitespace-nowrap"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://www.linkedin.com/in/satyamkrjha5011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="https://github.com/sa50tyam11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 18v4"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}