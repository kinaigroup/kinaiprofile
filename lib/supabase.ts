import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Sanitize string values (strip accidental quotes and trailing whitespace)
function cleanValue(val?: string | null): string {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

// Sanitize URL (strip quotes, spaces, and trailing slashes)
function cleanUrl(val?: string | null): string {
  let u = cleanValue(val);
  if (u.endsWith('/')) {
    u = u.slice(0, -1);
  }
  return u;
}

// Get configuration from environment variables (Vercel VITE_ or NEXT_PUBLIC_) or client-side storage
export function getSupabaseCredentials(): { url: string; anonKey: string } {
  let url = cleanUrl(
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    ''
  );

  let anonKey = cleanValue(
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    ''
  );

  if (typeof window !== 'undefined') {
    const customUrl = cleanUrl(localStorage.getItem('kinai_supabase_url'));
    const customKey = cleanValue(localStorage.getItem('kinai_supabase_anon_key'));

    if (customUrl && (!url || url.includes('your-project'))) {
      url = customUrl;
    }
    if (customKey && (!anonKey || anonKey.includes('your-anon-key'))) {
      anonKey = customKey;
    }
  }

  return { url, anonKey };
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
        flowType: 'pkce',
      },
      global: {
        headers: {
          apikey: anonKey,
        },
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
  const { anonKey } = getSupabaseCredentials();
  if (!client || !anonKey) {
    throw new Error('CONFIG_MISSING');
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  // Use skipBrowserRedirect: true so we can ensure the apikey param is attached to the URL
  // before browser navigation. This prevents Kong API Gateway from rejecting the request with:
  // {"message":"No API key found in request","hint":"No `apikey` request header or url param was found."}
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: origin,
      skipBrowserRedirect: true,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
        apikey: anonKey,
      },
    },
  });

  if (error) throw error;

  if (data?.url) {
    try {
      const targetUrl = new URL(data.url);
      if (!targetUrl.searchParams.has('apikey')) {
        targetUrl.searchParams.set('apikey', anonKey);
      }
      window.location.assign(targetUrl.toString());
    } catch {
      window.location.assign(data.url);
    }
  }

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
      return 'Konfigurasi Supabase belum lengkap. Pastikan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY sudah diatur di Vercel.';
    }

    const msg = err.message.toLowerCase();
    if (msg.includes('no api key found') || msg.includes('apikey') || msg.includes('no `apikey`')) {
      return 'Kunci API Supabase (anon key) tidak terdeteksi. Silakan periksa nilai VITE_SUPABASE_ANON_KEY pada pengaturan Vercel.';
    }
    if (msg.includes('invalid login credentials')) {
      return 'Email atau kata sandi tidak sesuai. Silakan periksa kembali.';
    }
    if (msg.includes('email not confirmed')) {
      return 'Email Anda belum dikonfirmasi. Silakan periksa tautan konfirmasi di kotak masuk atau folder spam email Anda.';
    }
    if (msg.includes('user already registered') || msg.includes('already registered')) {
      return 'Alamat email ini sudah terdaftar. Silakan masuk (Log In) atau gunakan opsi pemulihan kata sandi.';
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
    const cleanedUrl = cleanUrl(url);
    const cleanedKey = cleanValue(key);

    if (cleanedUrl) localStorage.setItem('kinai_supabase_url', cleanedUrl);
    else localStorage.removeItem('kinai_supabase_url');

    if (cleanedKey) localStorage.setItem('kinai_supabase_anon_key', cleanedKey);
    else localStorage.removeItem('kinai_supabase_anon_key');

    // Reset client cache so new instance is created with new keys
    cachedClient = null;
    window.dispatchEvent(new Event('kinai-supabase-config-change'));
  }
}
