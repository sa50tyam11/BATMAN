import Link from 'next/link';
import { Cat, ArrowUpRight } from 'lucide-react';

export default function GithubChaos() {
  return (
    <section className="w-full relative bg-[#0a0a0a] light:bg-[#fafafa] py-16 md:py-24 border-t border-white/10 light:border-black/10">
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 flex flex-col items-center justify-center text-center">
        <p className="text-xl md:text-3xl font-sans text-white light:text-black leading-relaxed max-w-4xl mx-auto mb-10">
          There&apos;s more <span className="bg-[#84cc16] text-black px-2 md:px-3 py-0.5 md:py-1 rounded-md font-medium">experiments, half-built tools, and questionable decisions</span><br className="hidden md:block" /> living on my GitHub.
        </p>

        <a
          href="https://github.com/sa50tyam11"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#111111] light:bg-[#111111] text-white rounded-xl border border-white/10 hover:border-white/30 light:border-transparent light:hover:bg-black transition-all shadow-sm"
        >
          <Cat size={20} className="text-white" />
          <span className="font-sans font-medium text-sm md:text-base">Explore the Chaos</span>
          <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
}
