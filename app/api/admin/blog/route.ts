import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { isAdmin } from '@/lib/isAdmin';
import slugify from 'slugify';

export async function GET() {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { title, description, content, tags, cover_image_url, published } = body;

    let slug = body.slug || slugify(title, { lower: true, strict: true });
    
    // Check if slug exists to avoid unique constraint error
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('slug', slug);

    if (existing && existing.length > 0) {
      slug = `${slug}-${Date.now()}`;
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([
        {
          title,
          slug,
          description,
          content,
          tags: tags || [],
          cover_image_url,
          published: !!published,
        }
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
