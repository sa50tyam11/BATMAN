// components/Footer.jsx
'use client'
import { ArrowUpRight } from 'lucide-react';
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";
import { useTheme } from 'next-themes';
import { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const handleFooterLink = useCallback((e, url) => {
    // Only intercept hash-anchor links
    if (!url.startsWith('/#')) return;
    e.preventDefault();
    const sectionId = url.slice(2);
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push('/');
      sessionStorage.setItem('scrollTo', sectionId);
    }
  }, [pathname, router, scrollToSection]);

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/sa50tyam11' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satyamkrjha5011' },
    { name: 'X/Twitter', url: 'https://twitter.com/sa50tyam11' }
  ];

  const footerLinks = [
    { name: 'Home', url: '/#home' },
    { name: 'About', url: '/#about' },
    { name: 'Works', url: '/#projects' },
    { name: 'Resume', url: '/resume' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Guestbook', url: '/guestbook' },
    { name: 'Contact', url: '/#contact' },
    { name: 'Privacy Policy', url: '/privacy-policy' }
  ];

  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] light:bg-[#fafafa] flex flex-col relative z-20 border-t border-white/10 light:border-black/10">
      <div className="max-w-350 mx-auto w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">

          <div className="flex items-center">
            {/* FIXED: Swapped to your new portrait image, used object-cover, and added a red-tinted shadow */}
            <img src="/hero-coding.png" alt="Satyam Kumar Jha" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-2xl shadow-lime-400/20" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase w-20 shrink-0">(EMAIL)</span>
            <a href="mailto:krjhasatyam128@gmail.com" className="text-[#a3e635] text-lg md:text-2xl font-sans font-medium hover:opacity-80 transition-opacity">krjhasatyam128@gmail.com</a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase w-20 shrink-0">(PHONE)</span>
            <a href="tel:+916200964876" className="text-white light:text-black text-2xl md:text-4xl font-sans font-medium hover:opacity-80 transition-opacity">+91 6200964876</a>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4 mt-4 lg:mt-0 lg:ml-12">
          <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase mb-2">(LINKS)</span>
          {footerLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              onClick={(e) => handleFooterLink(e, link.url)}
              className="text-white light:text-black hover:text-[#a3e635] light:hover:text-[#84cc16] text-lg font-sans font-light transition-colors w-fit"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4 mt-4 lg:mt-0">
          <span className="text-zinc-600 text-xs font-sans font-medium tracking-widest uppercase mb-2">(SOCIALS)</span>
          {socialLinks.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white light:text-black hover:text-[#a3e635] light:hover:text-[#84cc16] text-lg font-sans font-light transition-colors flex items-center gap-1 w-fit group">
              {social.name} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-350 mx-auto w-full px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-xs md:text-sm font-sans font-light gap-4">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="uppercase tracking-wider">© {new Date().getFullYear()} SATYAM KUMAR JHA. ALL RIGHTS RESERVED.</span>
          <span className="uppercase tracking-wider">Content, code, and design on this site may not be copied or reproduced without permission.</span>
        </div>
      </div>

      <div className="w-full bg-[#050505] light:bg-[#eeeeee] text-white light:text-black overflow-hidden flex justify-between items-end h-[200px] md:h-[350px] lg:h-[450px] px-6 md:px-12 lg:px-20 relative mt-12 border-t border-white/5 light:border-black/5">
        <div className="absolute bottom-[-15%] md:bottom-[-20%] left-[-2%] w-[80%] h-[120%] pointer-events-auto">
          {mounted && (
            <ParticleTextEffect text="SATYAM KR JHA" className="w-full h-full object-contain object-left-bottom" colors={resolvedTheme === 'light' ? ['111111'] : ['ffffff']} particleDensity={4} animationForce={60} />
          )}
        </div>
      </div>
    </footer>
  );
}