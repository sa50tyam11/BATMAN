import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import { ComicText } from '@/components/ui/comic-text';

export const revalidate = 0;

export default async function RecentBlogs() {
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, description, content, tags, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(3);

  if (error || !posts || posts.length === 0) return null;

  return (
    <section className="w-full relative bg-[#0a0a0a] light:bg-[#fafafa] border-t border-white/10 light:border-black/10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <ComicText fontSize={3.5}>LATEST WRITING</ComicText>
          <p className="mt-4 text-xl md:text-2xl font-serif italic tracking-wide text-center md:text-left text-zinc-400 light:text-zinc-600">
            Insights on <span className="text-[#6C63FF]">development</span> and <span className="text-[#a3e635] light:text-[#84cc16]">design</span>.
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-12 py-4">
          <div className="animate-marquee flex gap-8">
            {[...posts, ...posts, ...posts, ...posts].map((post, idx) => {
              const readTime = readingTime(post.content).text;
              return (
                <Link 
                  key={`${post.id}-${idx}`} 
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-8 rounded-2xl bg-[#111111] light:bg-white border border-white/5 light:border-black/5 hover:border-[#6C63FF]/50 light:hover:border-[#6C63FF]/50 transition-colors shadow-sm w-[300px] md:w-[400px] shrink-0 h-full"
                >
                  <div className="flex items-center gap-3 text-xs font-sans text-zinc-500 light:text-zinc-600 mb-4">
                    <time dateTime={post.created_at}>
                      {format(new Date(post.created_at), 'MMM d, yyyy')}
                    </time>
                    <span>•</span>
                    <span>{readTime}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-sans font-medium text-white light:text-black group-hover:text-[#6C63FF] transition-colors mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-400 light:text-zinc-600 font-sans text-sm line-clamp-3 mb-6">
                    {post.description}
                  </p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={`${tag}-${idx}`} 
                          className="px-2 py-1 bg-white/5 light:bg-black/5 rounded text-[10px] font-sans text-zinc-300 light:text-zinc-700 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-full flex justify-center mt-16 relative z-10">
          <Link
            href="/blogs"
            className="group relative inline-flex items-center justify-center px-12 py-4 rounded-full border border-[#6C63FF] text-[#6C63FF] text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#6C63FF] hover:text-white light:hover:text-white transition-all duration-300"
          >
            VIEW ALL POSTS
          </Link>
        </div>
      </div>
    </section>
  );
}
