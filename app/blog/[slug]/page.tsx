import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const revalidate = 0; // Disable caching

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), 'iframe', 'video', 'source'],
  attributes: {
    ...defaultSchema.attributes,
    iframe: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen', 'title'],
    video: ['src', 'controls', 'width', 'height', 'poster', 'autoplay', 'loop', 'muted'],
    source: ['src', 'type'],
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, description, cover_image_url')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Satyam Kumar Jha`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.cover_image_url ? [post.cover_image_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !post) {
    notFound();
  }

  const readTime = readingTime(post.content).text;

  return (
    <div className="min-h-screen bg-[#0a0a0a] light:bg-[#fafafa] flex flex-col pt-32">
      <div className="flex-grow w-full px-6 md:px-12 mb-20">
        <article className="max-w-3xl mx-auto">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-zinc-400 hover:text-[#6C63FF] transition-colors mb-8 font-sans text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>

        <header className="mb-12">
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-[#6C63FF]/10 text-[#6C63FF] rounded-full text-xs font-sans uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-serif italic text-white light:text-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm font-sans text-zinc-500">
            <time dateTime={post.created_at}>
              {format(new Date(post.created_at), 'MMMM d, yyyy')}
            </time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </header>

        {post.cover_image_url && (
          <div className="mb-12 rounded-xl overflow-hidden border border-white/10">
            <img 
              src={post.cover_image_url} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert light:prose-p:text-black light:prose-headings:text-black prose-p:font-sans prose-headings:font-serif prose-headings:italic prose-a:text-[#6C63FF] hover:prose-a:text-[#84cc16] max-w-none prose-img:rounded-xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      </div>
      <Footer />
    </div>
  );
}
