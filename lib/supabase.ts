import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get configuration from environment variables or client-side storage
export function getSupabaseCredentials(): { url: string; anonKey: string } {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (typeof window !== 'undefined') {
    const customUrl = localStorage.getItem('kinai_supabase_url');
    const customKey = localStorage.getItem('kinai_supabase_anon_key');
    if (customUrl && (!url || url.includes('your-project'))) {
      url = customUrl;
    }
    if (customKey && (!anonKey || anonKey.includes('your-anon-key'))) {
      anonKey = customKey;
    }
  }

  return { url: url.trim(), anonKey: anonKey.trim() };
}

export function isSupabaseConfigured(): boolean {
  const { url, anonKey } = getSupabaseCredentials();
  return Boolean(
    url &&
    anonKey &&
    !url.includes('your-project') &&
    url.startsWith('https://')
  );
}

// Singleton client cache
let cachedClient: SupabaseClient | null = null;
let lastUrl = '';
let lastKey = '';

export function getSupabaseClient(): SupabaseClient | null {
  const { url, anonKey } = getSupabaseCredentials();
  if (!url || !anonKey || url.includes('your-project')) {
    return null;
  }

  if (cachedClient && lastUrl === url && lastKey === anonKey) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
    lastUrl = url;
    lastKey = anonKey;
    return cachedClient;
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
    return null;
  }
}

// Export default instance
export const supabase = typeof window !== 'undefined' ? getSupabaseClient() : null;

// Helper to sign in with Google through Supabase
export async function signInWithGoogle() {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('SUPABASE_NOT_CONFIGURED');
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: origin,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error) throw error;
  return data;
}

// Helper to sign up with Email & Password through Supabase
export async function signUpWithEmail(
  email: string,
  password: string,
  metadata?: { fullName?: string; unitBisnis?: string; phone?: string }
) {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('SUPABASE_NOT_CONFIGURED');
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: origin,
      data: {
        full_name: metadata?.fullName,
        unit_bisnis: metadata?.unitBisnis,
        phone: metadata?.phone,
      },
    },
  });

  if (error) throw error;
  return data;
}

// Helper to sign in with Email & Password through Supabase
export async function signInWithEmail(email: string, password: string) {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('SUPABASE_NOT_CONFIGURED');
  }

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

// Helper to sign out through Supabase
export async function signOutSupabase() {
  const client = getSupabaseClient();
  if (!client) return;
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

// Helper to save Supabase custom credentials in browser
export function setCustomSupabaseCredentials(url: string, key: string) {
  if (typeof window !== 'undefined') {
    if (url) localStorage.setItem('kinai_supabase_url', url.trim());
    else localStorage.removeItem('kinai_supabase_url');

    if (key) localStorage.setItem('kinai_supabase_anon_key', key.trim());
    else localStorage.removeItem('kinai_supabase_anon_key');

    // Reset client cache so new instance is created with new keys
    cachedClient = null;
    window.dispatchEvent(new Event('kinai-supabase-config-change'));
  }
}
