import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import readingTime from 'reading-time';

export const revalidate = 0; // Disable caching to always show latest

export async function GET() {
  // Fetch published posts, order by newest first
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, description, content, tags, cover_image_url, published, created_at, updated_at')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Calculate reading time for each post
  const postsWithReadingTime = data?.map(post => ({
    ...post,
    readingTime: readingTime(post.content).text
  }));

  return NextResponse.json(postsWithReadingTime);
}
