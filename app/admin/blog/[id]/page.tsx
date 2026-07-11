import { redirect, notFound } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { supabase } from '@/lib/supabase';
import { isAdmin } from '@/lib/isAdmin';

export const revalidate = 0; // Disable caching

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await isAdmin();
  
  if (!admin) {
    redirect('/');
  }

  const { id } = await params;
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !post) {
    notFound();
  }

  return <BlogEditor initialData={post} isEditing={true} />;
}
