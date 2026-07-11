'use client';
import { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

const categories = ['All', 'Design', 'Branding', 'Development', 'Strategy', 'E-Commerce'];

export default function BlogList({ initialPosts }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? initialPosts 
    : initialPosts.filter(post => post.tags && post.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase()));

  // The first post gets the featured treatment if 'All' is selected, otherwise we just show them in the grid.
  // Actually, based on the design, let's always make the first post in the filtered list large.
  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="w-full">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-sans transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-[#6C63FF] text-white shadow-[0_0_20px_rgba(108,99,255,0.4)]' 
                : 'bg-[#111111] light:bg-white border border-white/10 light:border-black/10 text-zinc-400 light:text-zinc-600 hover:border-[#6C63FF]/50 hover:text-white light:hover:text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-24 text-center border-t border-white/10 light:border-black/10">
          <p className="text-zinc-500 light:text-zinc-600 font-sans">No posts found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Post (spans 2 columns on lg) */}
          {featuredPost && (
            <Link 
              href={`/blog/${featuredPost.slug}`}
              className="group lg:col-span-2 flex flex-col md:flex-row bg-[#111111] light:bg-white border border-white/5 light:border-black/5 rounded-3xl overflow-hidden hover:border-[#6C63FF]/50 light:hover:border-[#6C63FF]/50 transition-all duration-300"
            >
              {featuredPost.cover_image_url && (
                <div className="w-full md:w-1/2 h-[300px] md:h-auto shrink-0 overflow-hidden">
                  <img 
                    src={featuredPost.cover_image_url} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-8 md:p-12 flex flex-col justify-center w-full">
                {featuredPost.tags && featuredPost.tags.length > 0 && (
                  <span className="text-[#6C63FF] text-xs font-bold tracking-widest uppercase mb-4">
                    {featuredPost.tags[0]}
                  </span>
                )}
                <h2 className="text-3xl md:text-5xl font-serif italic text-white light:text-black mb-6 group-hover:text-[#a3e635] light:group-hover:text-[#84cc16] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5 light:border-black/5">
                  <time className="text-zinc-500 light:text-zinc-600 text-sm font-sans">
                    {format(new Date(featuredPost.created_at), 'MMM d, yyyy')}
                  </time>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://github.com/sa50tyam11.png" 
                      alt="Satyam Kr Jha"
                      className="w-8 h-8 rounded-full bg-zinc-800"
                    />
                    <span className="text-zinc-300 light:text-zinc-700 text-sm font-sans font-medium">Satyam Kr Jha</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining Posts */}
          {remainingPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[#111111] light:bg-white border border-white/5 light:border-black/5 rounded-3xl p-8 hover:border-[#6C63FF]/50 light:hover:border-[#6C63FF]/50 transition-all duration-300 min-h-[350px]"
            >
              {post.tags && post.tags.length > 0 && (
                <span className="text-[#6C63FF] text-xs font-bold tracking-widest uppercase mb-6">
                  {post.tags[0]}
                </span>
              )}
              
              <h3 className="text-2xl md:text-3xl font-serif italic text-white light:text-black mb-4 group-hover:text-[#a3e635] light:group-hover:text-[#84cc16] transition-colors leading-snug">
                {post.title}
              </h3>
              
              {post.cover_image_url && (
                <div className="mt-auto mb-8 w-20 h-20 self-end rounded-2xl overflow-hidden shadow-2xl">
                   <img 
                    src={post.cover_image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="mt-auto">
                <time className="text-zinc-500 light:text-zinc-600 text-sm font-sans block">
                  {format(new Date(post.created_at), 'MMM d, yyyy')}
                </time>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
