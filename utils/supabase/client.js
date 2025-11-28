// /utils/supabase/client.js

import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    return null;
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    }
  );
}

// Create a client-side Supabase client
export const supabase = createClient();