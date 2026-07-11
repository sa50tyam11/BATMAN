import { redirect } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { isAdmin } from '@/lib/isAdmin';

export default async function NewPostPage() {
  const admin = await isAdmin();
  
  if (!admin) {
    redirect('/');
  }

  return <BlogEditor />;
}
