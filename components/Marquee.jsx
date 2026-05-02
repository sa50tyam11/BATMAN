// components/Marquee.jsx
'use client'

export default function Marquee() {
  // You can replace these strings with actual <img /> tags later for client logos
  const items = [
    "MUZAFFARPUR BANGLES", "REACT", "NEXT.JS", "GSAP", "FRAMER MOTION", "THREE.JS", 
    "MUZAFFARPUR BANGLES", "REACT", "NEXT.JS", "GSAP", "FRAMER MOTION", "THREE.JS"
  ];

  return (
    <section className="w-full overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-6 relative">
      <div className="animate-marquee flex gap-16 px-8 items-center cursor-pointer">
        {items.map((item, index) => (
          <div key={index} className="text-2xl font-bold text-zinc-600 uppercase tracking-widest whitespace-nowrap hover:text-white transition-colors duration-300">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}