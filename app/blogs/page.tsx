import { supabase } from '@/lib/supabase';
import readingTime from 'reading-time';
import BlogList from '@/components/BlogList';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

export const revalidate = 0; // Disable caching

export const metadata = {
  title: 'Blog | Satyam Kumar Jha',
  description: 'Writing about software development, design, and building premium web experiences.',
};

export default async function BlogsPage() {
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, description, content, tags, created_at, cover_image_url')
    .eq('published', true)
    .order('created_at', { ascending: false });

  const postsWithReadingTime = posts?.map(post => ({
    ...post,
    readingTime: readingTime(post.content).text
  })) || [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] light:bg-[#fafafa] flex flex-col pt-32">
      <div className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-start justify-start text-left mb-16">
          <h1 className="font-sans font-extrabold tracking-tight text-6xl md:text-8xl text-white light:text-black mb-6">
            Blogs
          </h1>
          <p className="text-zinc-300 light:text-zinc-600 text-xl md:text-2xl font-sans max-w-3xl">
            Writing about what I built, <span className="bg-[#84cc16] text-black px-2 py-0.5 rounded-sm font-medium">what broke</span>, and occasionally both at once.
          </p>
        </div>

        {error ? (
          <div className="py-12 border-t border-white/10 text-center">
            <p className="text-red-500 font-sans">Error loading posts: {error.message}</p>
          </div>
        ) : (
          <BlogList initialPosts={postsWithReadingTime} />
        )}
      </div>
      
      {/* Social Links Section */}
      <SocialLinks />
      <Footer />
    </div>
  );
}
