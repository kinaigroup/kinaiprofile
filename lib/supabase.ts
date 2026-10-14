import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get configuration from environment variables (Vercel VITE_ or NEXT_PUBLIC_) or client-side storage
export function getSupabaseCredentials(): { url: string; anonKey: string } {
  let url =
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    '';
  let anonKey =
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';

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

// Helper to sign up with Email & Password through Supabase Auth (signUp)
export async function signUpWithEmail(
  email: string,
  password: string,
  metadata?: { fullName?: string; unitBisnis?: string; phone?: string }
) {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('CONFIG_MISSING');
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const { data, error } = await client.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: {
      emailRedirectTo: origin,
      data: {
        full_name: metadata?.fullName?.trim(),
        unit_bisnis: metadata?.unitBisnis,
        phone: metadata?.phone?.trim(),
      },
    },
  });

  if (error) throw error;
  return data;
}

// Helper to sign in with Email & Password through Supabase Auth (signInWithPassword)
export async function signInWithEmail(email: string, password: string) {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('CONFIG_MISSING');
  }

  const { data, error } = await client.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });

  if (error) throw error;
  return data;
}

// Helper to sign in with Google through Supabase Auth (signInWithOAuth)
export async function signInWithGoogle() {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('CONFIG_MISSING');
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

// Helper to sign out through Supabase Auth (signOut)
export async function signOutSupabase() {
  const client = getSupabaseClient();
  if (!client) return;
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

// Helper to format Supabase Auth errors into user-friendly Indonesian messages
export function formatSupabaseAuthError(err: unknown): string {
  if (!err) return 'Terjadi kesalahan yang tidak diketahui.';

  if (err instanceof Error) {
    if (err.message === 'CONFIG_MISSING') {
      return 'Konfigurasi Supabase belum terdeteksi. Pastikan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY sudah disiapkan di Vercel.';
    }

    const msg = err.message.toLowerCase();
    if (msg.includes('invalid login credentials')) {
      return 'Email atau kata sandi tidak sesuai. Silakan periksa kembali.';
    }
    if (msg.includes('email not confirmed')) {
      return 'Email Anda belum dikonfirmasi. Silakan periksa tautan konfirmasi di inbox atau folder spam email Anda.';
    }
    if (msg.includes('user already registered') || msg.includes('already registered')) {
      return 'Alamat email ini sudah terdaftar. Silakan masuk (Log In) atau gunakan pemulihan kata sandi.';
    }
    if (msg.includes('password should be at least') || msg.includes('weak_password')) {
      return 'Kata sandi minimal 6 karakter.';
    }
    if (msg.includes('invalid format') || msg.includes('valid email')) {
      return 'Format alamat email tidak valid.';
    }
    if (msg.includes('rate limit')) {
      return 'Terlalu banyak permintaan dalam waktu singkat. Harap tunggu beberapa saat lalu coba lagi.';
    }
    if (msg.includes('failed to fetch') || msg.includes('network')) {
      return 'Gagal terhubung ke server Supabase. Pastikan koneksi internet stabil dan VITE_SUPABASE_URL valid.';
    }
    return err.message;
  }

  return 'Terjadi kendala saat memproses autentikasi. Silakan coba kembali.';
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
