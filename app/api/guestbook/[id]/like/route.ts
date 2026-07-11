import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: messageId } = await params;
    if (!messageId) {
      return NextResponse.json({ error: 'Message ID required' }, { status: 400 });
    }

    // Check if the like already exists
    const { data: existingLike, error: likeError } = await supabase
      .from('guestbook_likes')
      .select('*')
      .eq('message_id', messageId)
      .eq('clerk_user_id', userId)
      .single();

    if (likeError && likeError.code !== 'PGRST116') {
      // PGRST116 means no rows returned, which is fine
      console.error('Error checking like:', likeError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    if (existingLike) {
      // Unlike: delete the row and decrement
      await supabase
        .from('guestbook_likes')
        .delete()
        .eq('message_id', messageId)
        .eq('clerk_user_id', userId);
        
      // Decrement using a direct query or rpc. 
      // Supabase doesn't easily decrement without RPC, so we'll do an update based on reading first.
      const { data: msg } = await supabase.from('guestbook_messages').select('likes').eq('id', messageId).single();
      if (msg) {
        await supabase.from('guestbook_messages').update({ likes: Math.max(0, msg.likes - 1) }).eq('id', messageId);
      }
      return NextResponse.json({ liked: false });
    } else {
      // Like: insert the row and increment
      await supabase
        .from('guestbook_likes')
        .insert({
          message_id: messageId,
          clerk_user_id: userId
        });

      const { data: msg } = await supabase.from('guestbook_messages').select('likes').eq('id', messageId).single();
      if (msg) {
        await supabase.from('guestbook_messages').update({ likes: msg.likes + 1 }).eq('id', messageId);
      }
      return NextResponse.json({ liked: true });
    }
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
