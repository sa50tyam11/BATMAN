create table guestbook_messages (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text not null,
  name text not null,
  avatar_url text,
  message text not null check (char_length(message) <= 280),
  likes int not null default 0,
  created_at timestamptz not null default now()
);

create table guestbook_likes (
  message_id uuid references guestbook_messages(id) on delete cascade,
  clerk_user_id text not null,
  primary key (message_id, clerk_user_id)
);
