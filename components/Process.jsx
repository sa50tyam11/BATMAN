// components/Process.jsx
'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ComicText } from '@/components/ui/comic-text';

const steps = [
  {
    id: "STEP 1",
    title: "Discovery\nPhase",
    description: "Understanding your goals, pain points, audience, and what sets you apart."
  },
  {
    id: "STEP 2",
    title: "Project\nKickoff",
    description: "Setting up projects, aligning on scope and milestones, and diving into the work."
  },
  {
    id: "STEP 3",
    title: "Receive\n& Refine",
    description: "Sharing initial designs, gathering feedback, and fine-tuning together."
  },
  {
    id: "STEP 4",
    title: "Continue\n& Grow",
    description: "Launching with confidence and supporting your next extraordinary move."
  }
];

export default function Process() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        let containerWidth = scrollContainerRef.current.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      gsap.to(scrollContainerRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1, 
          invalidateOnRefresh: true 
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center border-t border-white/10 relative">
      
      <div 
        ref={scrollContainerRef} 
        className="flex items-center h-full w-fit pl-6 md:pl-12 lg:pl-24"
      >
        
        {/* The Massive Title Header */}
        <div className="flex flex-col shrink-0 pr-16 md:pr-32 pt-20">
          
          {/* TILTED TOP-LEFT COMIC TEXT */}
          <div className="mb-6 flex justify-start -rotate-6 origin-bottom-left pl-2">
             <ComicText fontSize={3.5}>PROCESS</ComicText>
          </div>
          
          {/* DIFFERENT FONT: Tall, Heavy, Condensed */}
          {/* font-['Impact',_Arial,_sans-serif] completely changes the vibe from the rest of the site */}
          <h2 className="text-[13vw] md:text-[10vw] text-white uppercase leading-[0.8] tracking-wide whitespace-nowrap font-['Impact',_Arial,_sans-serif] scale-y-110 origin-left">
            HOW WE<br />WORK
          </h2>

        </div>

        {/* The 4 Step Cards */}
        <div className="flex h-full py-24 md:py-32 items-stretch">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="w-[300px] md:w-[400px] lg:w-[450px] shrink-0 border-l border-white/10 pl-8 md:pl-12 pr-8 md:pr-16 flex flex-col justify-between"
            >
              <div className="text-2xl md:text-3xl font-medium text-white/60 tracking-wider">
                {step.id}<span className="text-[#EF4444]">.</span>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] whitespace-pre-line">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="w-[10vw] shrink-0 border-l border-white/10"></div>
        </div>

      </div>
    </section>
  );
}