import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { formatDistanceToNow } from 'date-fns';
import { ComicText } from '@/components/ui/comic-text';

export const revalidate = 0;

export default async function RecentGuestbook() {
  const { data: messages, error } = await supabase
    .from('guestbook_messages')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  if (error || !messages || messages.length === 0) return null;

  return (
    <section className="w-full relative bg-[#0a0a0a] light:bg-[#fafafa] border-t border-white/10 light:border-black/10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <ComicText fontSize={3.5}>GUESTBOOK</ComicText>
          <p className="mt-4 text-xl md:text-2xl font-serif italic tracking-wide text-center md:text-left text-zinc-400 light:text-zinc-600">
            You made it this far. Might as well leave a <span className="text-[#a3e635] light:text-[#84cc16]">mark</span>.
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-8 py-4">
          <div className="animate-marquee flex gap-4 md:gap-6" style={{ animationDuration: '40s' }}>
            {[...messages, ...messages, ...messages, ...messages].map((msg, idx) => (
              <div key={`${msg.id}-${idx}`} className="p-4 rounded-xl bg-[#111111] light:bg-white border border-white/5 light:border-black/5 flex gap-3 shadow-sm w-[260px] md:w-[300px] shrink-0 h-full">
                <img 
                  src={msg.avatar_url || 'https://www.gravatar.com/avatar/?d=mp'} 
                  alt={`${msg.name}'s avatar`}
                  className="w-10 h-10 rounded-full bg-zinc-800 object-cover shrink-0"
                />
                <div className="flex flex-col w-full overflow-hidden justify-center">
                  <span className="text-white light:text-black font-sans font-medium text-sm truncate">{msg.name}</span>
                  <p className="text-zinc-400 light:text-zinc-500 font-sans leading-snug text-xs whitespace-pre-wrap line-clamp-2 mt-0.5">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center mt-16 relative z-10">
          <Link
            href="/guestbook"
            className="group relative inline-flex items-center justify-center px-12 py-4 rounded-full border border-white light:border-black text-white light:text-black text-sm md:text-base font-bold tracking-widest uppercase hover:bg-white hover:text-[#0a0a0a] light:hover:bg-black light:hover:text-white transition-all duration-300"
          >
            SIGN GUESTBOOK
          </Link>
        </div>
      </div>
    </section>
  );
}
