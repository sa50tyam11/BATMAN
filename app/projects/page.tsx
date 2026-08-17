import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Inter } from 'next/font/google';
import { ComicText } from '@/components/ui/comic-text';

const inter = Inter({ subsets: ['latin'] });

const projects = [
  { title: "Sur-Sansar", industry: "Interactive Music Web App", scope: "Next.js + Zustand + Howler.js", image: "/sursansar.png", videoUrl: "", link: "https://github.com/sa50tyam11/SUR-SANSAR" },
  { title: "Visionary Opticals", industry: "Retail & Eyewear", scope: "Website Design + E-commerce", image: "/opticle.png", videoUrl: "", link: "https://seno-eye-demo.netlify.app/" },
  { title: "Real Estate Business", industry: "Real Estate", scope: "Property Buying & Selling", image: "/e-state.png", videoUrl: "", link: "https://seno-estate.netlify.app/" },
  { title: "Muzaffarpur Bangles", industry: "E-Commerce", scope: "Full-Stack Web App & Admin", image: "/bangle.png", videoUrl: "", link: "https://muzaffarpurbangles.netlify.app" },
  { title: "Campus School", industry: "Education", scope: "School Website & Portal", image: "/school.png", videoUrl: "", link: "https://campusschool.netlify.app" },
  { title: "SENO Studio", industry: "Digital Agency", scope: "Brand Identity & Web Design", image: "/senoweb.png", videoUrl: "", link: "#" },
  { title: "Ongoing Client Work", industry: "Confidential", scope: "Under Development", image: "/4.jpg", videoUrl: "", link: "", ctaText: "Contact for Work", ctaLink: "/#contact", ctaVariant: "lime" }
];

export default function ProjectsPage() {
  return (
    <main className={`w-full bg-[#0a0a0a] min-h-screen flex flex-col ${inter.className}`}>
      
      <div className="flex-1 pt-40 pb-20 px-8 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-20 flex flex-col items-center">
          <ComicText fontSize={4.5}>PROJECT SHOWCASE</ComicText>
          <p className="mt-4 text-xl md:text-2xl font-serif italic tracking-wide text-center max-w-3xl">
            <span className="text-white">Everything I actually shipped — and </span>
            <span className="text-[#a3e635]">a few things I started at midnight</span>
            <span className="text-white"> and never quite finished.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
