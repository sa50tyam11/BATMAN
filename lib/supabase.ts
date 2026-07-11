import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Note: This client uses the service role key and bypasses Row Level Security (RLS).
// NEVER expose this client to the browser. Only use it in server-side API routes.
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
