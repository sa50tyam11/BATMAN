import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { auth, currentUser } from '@clerk/nextjs/server';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('guestbook_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error);
      return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const { message } = await req.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length === 0) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
    }
    if (trimmedMessage.length > 280) {
      return NextResponse.json({ error: 'Message exceeds 280 characters' }, { status: 400 });
    }

    // Upsert to ensure one message per user (as noted in the requirements)
    const { data, error } = await supabase
      .from('guestbook_messages')
      .upsert({
        clerk_user_id: userId,
        name: user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : user.username || 'Anonymous',
        avatar_url: user.imageUrl,
        message: trimmedMessage,
      }, { onConflict: 'clerk_user_id' })
      .select()
      .single();

    if (error) {
      console.error('Error saving message:', error);
      return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
