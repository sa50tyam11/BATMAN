'use client';

import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { useRouter } from 'next/navigation';
import { Bold, Italic, Heading, Link as LinkIcon, Code, Table, List, MonitorPlay, Video, Image as ImageIcon } from 'lucide-react';

// Allow iframe and video in the sanitizer schema
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

type Post = {
  id?: string;
  title: string;
  slug?: string;
  description: string;
  content: string;
  tags: string[];
  cover_image_url: string;
  published: boolean;
};

export default function BlogEditor({ initialData, isEditing = false }: { initialData?: Post, isEditing?: boolean }) {
  const router = useRouter();
  
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [tags, setTags] = useState(initialData?.tags?.join(', ') || '');
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.cover_image_url || '');
  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const replacement = before + selectedText + after;

    setContent(
      content.substring(0, start) + replacement + content.substring(end)
    );

    // Set cursor position after update
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const handleYoutubeEmbed = () => {
    const url = prompt('Enter YouTube or Vimeo URL:');
    if (!url) return;
    
    // Simple youtube ID extraction
    let embedUrl = url;
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    
    if (ytMatch && ytMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
    }

    const iframeHtml = `\n<iframe width="100%" height="400" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>\n`;
    insertText(iframeHtml);
  };

  const handleVideoUpload = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*,image/*';
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
        // Insert a loading placeholder
        insertText(`\n[Uploading ${file.name}...]\n`);
        
        const res = await fetch('/api/admin/blog/upload', {
          method: 'POST',
          body: formData,
        });
        
        const data = await res.json();
        
        if (data.url) {
          // Replace placeholder (this is a simplified approach, a robust one would find and replace the specific placeholder)
          const newContent = content.replace(`\n[Uploading ${file.name}...]\n`, '');
          
          let mediaHtml = '';
          if (file.type.startsWith('video/')) {
            mediaHtml = `\n<video controls width="100%" src="${data.url}"></video>\n`;
          } else {
            mediaHtml = `\n![${file.name}](${data.url})\n`;
          }
          
          setContent(newContent + mediaHtml);
        } else {
          alert('Upload failed: ' + (data.error || 'Unknown error'));
        }
      } catch (err) {
        alert('Upload failed');
      }
    };
    input.click();
  };

  const handleSave = async (published: boolean) => {
    setIsSaving(true);
    
    const postData = {
      title,
      slug,
      description,
      content,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      cover_image_url: coverImageUrl,
      published
    };

    try {
      const url = isEditing && initialData?.id 
        ? `/api/admin/blog/${initialData.id}` 
        : '/api/admin/blog';
        
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save');
      }

      router.push('/admin/blog');
      router.refresh();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-[#0a0a0a] text-[#ededed] min-h-screen">
      <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-3xl font-serif italic">{isEditing ? 'Edit Post' : 'New Post'}</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => handleSave(false)}
            disabled={isSaving}
            className="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
          >
            Save Draft
          </button>
          <button 
            onClick={() => handleSave(true)}
            disabled={isSaving}
            className="px-4 py-2 bg-[#6C63FF] text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#6C63FF]"
              placeholder="Post title"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Slug (optional, auto-generated if empty)</label>
            <input 
              type="text" 
              value={slug} 
              onChange={e => setSlug(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#6C63FF]"
              placeholder="post-url-slug"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Description</label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#6C63FF] h-20"
              placeholder="Brief summary for cards and SEO"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Tags (comma separated)</label>
            <input 
              type="text" 
              value={tags} 
              onChange={e => setTags(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#6C63FF]"
              placeholder="react, nextjs, webdev"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Cover Image URL</label>
            <input 
              type="text" 
              value={coverImageUrl} 
              onChange={e => setCoverImageUrl(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#6C63FF]"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm text-gray-400">Content (Markdown)</label>
            <div className="flex bg-gray-900 rounded-md overflow-hidden border border-gray-800">
              <button 
                onClick={() => setIsPreview(false)} 
                className={`px-3 py-1 text-sm ${!isPreview ? 'bg-gray-800 text-white' : 'text-gray-400'}`}
              >
                Write
              </button>
              <button 
                onClick={() => setIsPreview(true)} 
                className={`px-3 py-1 text-sm ${isPreview ? 'bg-gray-800 text-white' : 'text-gray-400'}`}
              >
                Preview
              </button>
            </div>
          </div>

          {!isPreview ? (
            <div className="flex-grow flex flex-col border border-gray-800 rounded-md overflow-hidden">
              <div className="bg-gray-900 border-b border-gray-800 p-2 flex flex-wrap gap-1">
                <button onClick={() => insertText('**', '**')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Bold"><Bold size={16} /></button>
                <button onClick={() => insertText('_', '_')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Italic"><Italic size={16} /></button>
                <button onClick={() => insertText('### ', '')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Heading"><Heading size={16} /></button>
                <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>
                <button onClick={() => insertText('[', '](url)')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Link"><LinkIcon size={16} /></button>
                <button onClick={() => insertText('`', '`')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Inline Code"><Code size={16} /></button>
                <button onClick={() => insertText('\n```\n', '\n```\n')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Code Block"><Code size={16} /></button>
                <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>
                <button onClick={() => insertText('- ')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="List"><List size={16} /></button>
                <button onClick={() => insertText('\n| Header | Header |\n|--------|--------|\n| Cell | Cell |\n')} className="p-1.5 hover:bg-gray-800 rounded text-gray-300" title="Table"><Table size={16} /></button>
                <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>
                <button onClick={handleYoutubeEmbed} className="p-1.5 hover:bg-gray-800 rounded text-red-400" title="Embed YouTube"><MonitorPlay size={16} /></button>
                <button onClick={handleVideoUpload} className="p-1.5 hover:bg-gray-800 rounded text-[#84cc16]" title="Upload Media"><Video size={16} /></button>
              </div>
              <textarea
                ref={textareaRef}
                value={content}
                onChange={e => setContent(e.target.value)}
                className="w-full flex-grow bg-gray-950 p-4 text-gray-100 focus:outline-none font-mono text-sm min-h-[400px]"
                placeholder="Write your post content here..."
              />
            </div>
          ) : (
            <div className="flex-grow border border-gray-800 rounded-md p-6 bg-gray-950 overflow-y-auto min-h-[400px]">
              <div className="prose prose-invert prose-p:font-sans prose-headings:font-serif prose-headings:italic prose-a:text-[#6C63FF] max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
