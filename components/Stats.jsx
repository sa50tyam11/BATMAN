// components/Stats.jsx
'use client'
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { ComicText } from '@/components/ui/comic-text';

function Counter({ from = 0, to, duration = 2 }) {
  const nodeRef = useRef(null);
  // Removed the negative margin so it triggers earlier and more reliably
  const inView = useInView(nodeRef, { once: true, amount: 0.5 }); 

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function Stats() {
  // Updated the first stat to 20+ projects
  const stats = [
    { value: 20, suffix: "+", label: "Successful projects completed" },
    { value: 2, suffix: "+", label: "Years of experience in creative industry" },
    { value: 99, suffix: "%", label: "Customer satisfaction rate" },
    { value: 100, suffix: "%", label: "On-time project delivery" }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-32 border-t border-white/10 relative">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 flex flex-col items-start">
            <ComicText fontSize={3.5}>WHY US</ComicText>
            <h2 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold text-white uppercase leading-[0.85] tracking-tighter mt-8">
              Numbers<br />Don&apos;t Lie
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end pb-4">
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium max-w-md">
              With advanced full-stack expertise, SENO Studio crafts bold brands and high-impact digital experiences that get tangible results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`py-12 flex flex-col border-b border-white/10 lg:border-b-0 
                ${i !== 0 ? 'lg:border-l lg:pl-12' : 'lg:pr-12'} 
                ${(i === 1 || i === 3) ? 'md:border-l md:pl-12' : ''}
              `}
            >
              <div className="text-7xl md:text-8xl font-bold text-white mb-4 flex items-baseline tracking-tighter">
                <Counter from={0} to={stat.value} duration={2.5} />
                <span className="text-[#EF4444]">{stat.suffix}</span>
              </div>
              <p className="text-zinc-500 font-medium text-lg max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}