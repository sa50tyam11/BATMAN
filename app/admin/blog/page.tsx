import { redirect } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { isAdmin } from '@/lib/isAdmin';
import { format } from 'date-fns';

export const revalidate = 0; // Disable caching for admin dashboard

export default async function AdminBlogDashboard() {
  const admin = await isAdmin();
  
  if (!admin) {
    redirect('/');
  }

  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, published, created_at, updated_at')
    .order('created_at', { ascending: false });

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-[#0a0a0a] text-[#ededed] min-h-screen pt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif italic text-[#84cc16]">Blog Admin</h1>
        <Link 
          href="/admin/blog/new" 
          className="px-4 py-2 bg-[#6C63FF] text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          New Post
        </Link>
      </div>

      {error ? (
        <div className="p-4 bg-red-900/50 text-red-200 border border-red-500 rounded-md">
          Error loading posts: {error.message}
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-950 border-b border-gray-800 text-gray-400 text-sm">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No posts yet. Click "New Post" to get started.
                  </td>
                </tr>
              )}
              {posts?.map((post) => (
                <tr key={post.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-white">{post.title}</div>
                    <div className="text-sm text-gray-500">{post.slug}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.published 
                        ? 'bg-[#84cc16]/20 text-[#84cc16] border border-[#84cc16]/30' 
                        : 'bg-gray-700 text-gray-300 border border-gray-600'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {format(new Date(post.created_at), 'MMM d, yyyy')}
                  </td>
                  <td className="p-4">
                    <div className="flex gap-3">
                      <Link 
                        href={`/admin/blog/${post.id}`}
                        className="text-sm text-[#6C63FF] hover:underline"
                      >
                        Edit
                      </Link>
                      <Link 
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
