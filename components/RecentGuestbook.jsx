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
            Messages from <span className="text-white light:text-black">friends</span> and <span className="text-[#a3e635] light:text-[#84cc16]">visitors</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg) => (
            <div key={msg.id} className="p-8 rounded-2xl bg-[#111111] light:bg-white border border-white/5 light:border-black/5 flex gap-4 shadow-sm">
              <img 
                src={msg.avatar_url || 'https://www.gravatar.com/avatar/?d=mp'} 
                alt={`${msg.name}'s avatar`}
                className="w-12 h-12 rounded-full bg-zinc-800 object-cover shrink-0"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-white light:text-black font-sans font-medium">{msg.name}</span>
                  <span className="text-zinc-500 light:text-zinc-500 text-xs font-sans">
                    {formatDistanceToNow(new Date(msg.created_at), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-zinc-300 light:text-zinc-700 font-sans leading-relaxed text-sm whitespace-pre-wrap">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
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
