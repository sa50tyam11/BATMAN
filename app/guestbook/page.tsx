'use client';

import { useState, useEffect } from 'react';
import { useUser, SignInButton } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import Footer from '@/components/Footer';

type Message = {
  id: string;
  clerk_user_id: string;
  name: string;
  avatar_url: string;
  message: string;
  likes: number;
  created_at: string;
};

export default function GuestbookPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likedMessages, setLikedMessages] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/guestbook');
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || newMessage.length > 280) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage }),
      });

      if (res.ok) {
        setNewMessage('');
        fetchMessages();
      } else {
        const err = await res.json();
        alert(`Error: ${err.error}`);
      }
    } catch (error) {
      console.error('Failed to post message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (id: string) => {
    if (!isSignedIn) {
      alert("Please sign in to like messages.");
      return;
    }

    try {
      // Optimistic update
      const isCurrentlyLiked = likedMessages.has(id);
      
      setLikedMessages(prev => {
        const newSet = new Set(prev);
        if (isCurrentlyLiked) newSet.delete(id);
        else newSet.add(id);
        return newSet;
      });

      setMessages(prev => prev.map(msg => {
        if (msg.id === id) {
          return { ...msg, likes: isCurrentlyLiked ? Math.max(0, msg.likes - 1) : msg.likes + 1 };
        }
        return msg;
      }));

      const res = await fetch(`/api/guestbook/${id}/like`, { method: 'POST' });
      
      if (res.ok) {
        const data = await res.json();
        setLikedMessages(prev => {
          const newSet = new Set(prev);
          if (data.liked) newSet.add(id);
          else newSet.delete(id);
          return newSet;
        });
      } else {
        // Revert on error
        fetchMessages();
      }
    } catch (error) {
      console.error('Failed to toggle like:', error);
      fetchMessages();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] light:bg-[#fafafa] flex flex-col pt-32">
      <div className="flex-grow w-full max-w-4xl mx-auto px-6 md:px-12 mb-20">
        <div className="mb-16">
        <h1 className="font-serif italic text-6xl md:text-8xl font-normal text-white light:text-black mb-6">
          Guestbook
        </h1>
        <p className="text-zinc-400 light:text-zinc-600 text-lg md:text-xl font-sans max-w-2xl">
          You stopped by. Leave a mark.
        </p>
      </div>

      <div className="bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 p-6 md:p-8 rounded-2xl mb-16">
        {!isLoaded ? (
          <div className="animate-pulse h-20 bg-white/5 light:bg-black/5 rounded-xl"></div>
        ) : !isSignedIn ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-zinc-300 light:text-zinc-700 font-sans">Sign in to leave a message.</p>
            <SignInButton mode="modal">
              <button className="bg-[#6C63FF] hover:bg-[#5b54d6] text-white px-8 py-3 rounded-full font-sans font-medium transition-colors">
                Sign In
              </button>
            </SignInButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-2">
              <img 
                src={user.imageUrl} 
                alt="Your avatar" 
                className="w-10 h-10 rounded-full bg-zinc-800 light:bg-zinc-200 object-cover"
              />
              <span className="text-white light:text-black font-sans font-medium">
                {user.firstName || user.username}
              </span>
            </div>
            
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="What's on your mind? (max 280 chars)"
              className="w-full bg-[#0a0a0a] light:bg-[#fafafa] border border-white/20 light:border-black/20 rounded-xl p-4 text-white light:text-black font-sans focus:outline-none focus:border-[#84cc16] transition-colors resize-none h-32"
              maxLength={280}
            />
            
            <div className="flex justify-between items-center">
              <span className={`text-xs font-sans ${newMessage.length >= 280 ? 'text-red-400' : 'text-zinc-500'}`}>
                {newMessage.length} / 280
              </span>
              <button 
                type="submit"
                disabled={isSubmitting || !newMessage.trim() || newMessage.length > 280}
                className="bg-[#84cc16] hover:bg-[#74b313] disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 px-8 py-3 rounded-full font-sans font-bold transition-colors"
              >
                {isSubmitting ? 'Posting...' : 'Sign Guestbook'}
              </button>
            </div>
          </form>
        )}
      </div>

      <div>
        <h2 className="text-white light:text-black font-sans font-medium mb-8">
          {messages.length} {messages.length === 1 ? 'message' : 'messages'}
        </h2>
        
        <div className="flex flex-col gap-8">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-4 group">
              <img 
                src={msg.avatar_url || 'https://www.gravatar.com/avatar/?d=mp'} 
                alt={`${msg.name}'s avatar`}
                className="w-12 h-12 rounded-full bg-zinc-800 light:bg-zinc-200 object-cover shrink-0"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-white light:text-black font-sans font-medium">{msg.name}</span>
                  <span className="text-zinc-500 light:text-zinc-500 text-xs font-sans">
                    {formatDistanceToNow(new Date(msg.created_at), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-zinc-300 light:text-zinc-700 font-sans leading-relaxed mb-3 whitespace-pre-wrap">
                  {msg.message}
                </p>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleLike(msg.id)}
                    className={`flex items-center gap-1.5 text-xs font-sans font-medium transition-colors ${
                      likedMessages.has(msg.id) 
                        ? 'text-[#6C63FF]' 
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={likedMessages.has(msg.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>{msg.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
