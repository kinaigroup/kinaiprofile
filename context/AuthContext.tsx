'use client';

import React, { createContext, useContext, useState, useMemo, useEffect, useSyncExternalStore } from 'react';
import {
  getSupabaseClient,
  isSupabaseConfigured,
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
  signOutSupabase,
  setCustomSupabaseCredentials,
  getSupabaseCredentials,
} from '@/lib/supabase';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  provider?: string;
  avatarUrl?: string;
}

interface RegisterData {
  fullName: string;
  unitBisnis: string;
  phone?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoginModalOpen: boolean;
  initialTab: 'login' | 'register';
  openLoginModal: (tab?: 'login' | 'register') => void;
  closeLoginModal: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, data: RegisterData) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isSupabaseConnected: boolean;
  saveSupabaseConfig: (url: string, key: string) => void;
  getSupabaseInfo: () => { url: string; anonKey: string };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// External store subscription for localStorage user profile
function subscribeUser(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('kinai-auth-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('kinai-auth-change', callback);
  };
}

function getUserSnapshot(): string | null {
  try {
    return localStorage.getItem('kinai_auth_user');
  } catch {
    return null;
  }
}

function getServerUserSnapshot(): null {
  return null;
}

function persistLocalUser(profile: UserProfile | null) {
  try {
    if (profile) {
      localStorage.setItem('kinai_auth_user', JSON.stringify(profile));
    } else {
      localStorage.removeItem('kinai_auth_user');
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('kinai-auth-change'));
    }
  } catch {
    // ignore
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<'login' | 'register'>('login');
  const [supabaseVersion, setSupabaseVersion] = useState(0);

  // useSyncExternalStore guarantees SSR renders null and client safely syncs
  const rawUser = useSyncExternalStore(subscribeUser, getUserSnapshot, getServerUserSnapshot);

  const user: UserProfile | null = useMemo(() => {
    if (!rawUser) return null;
    try {
      return JSON.parse(rawUser);
    } catch {
      return null;
    }
  }, [rawUser]);

  // Reactive connection status without synchronous setState inside useEffect
  const isSupabaseConnected = useMemo(() => {
    // Reading version makes this reactive if configuration is updated dynamically
    void supabaseVersion;
    return isSupabaseConfigured();
  }, [supabaseVersion]);

  // Listen to configuration changes
  useEffect(() => {
    const handleConfigChange = () => {
      setSupabaseVersion((v) => v + 1);
    };
    window.addEventListener('kinai-supabase-config-change', handleConfigChange);
    return () => {
      window.removeEventListener('kinai-supabase-config-change', handleConfigChange);
    };
  }, []);

  // Check Supabase session on client mount and when configuration changes
  useEffect(() => {
    const client = getSupabaseClient();
    if (!client) return;

    // Check active session (including redirect from Google OAuth)
    client.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const u = session.user;
        const userMeta = u.user_metadata || {};
        const profile: UserProfile = {
          id: u.id,
          name: userMeta.full_name || u.email?.split('@')[0]?.toUpperCase() || 'INSAN KINASIH',
          email: u.email || '',
          role: 'Insan KINASIH',
          department: userMeta.unit_bisnis || 'PT KINAI Group Ecosystem',
          provider: u.app_metadata?.provider || 'supabase',
          avatarUrl: userMeta.avatar_url || userMeta.picture,
        };
        persistLocalUser(profile);
      }
    });

    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const u = session.user;
        const userMeta = u.user_metadata || {};
        const profile: UserProfile = {
          id: u.id,
          name: userMeta.full_name || u.email?.split('@')[0]?.toUpperCase() || 'INSAN KINASIH',
          email: u.email || '',
          role: 'Insan KINASIH',
          department: userMeta.unit_bisnis || 'PT KINAI Group Ecosystem',
          provider: u.app_metadata?.provider || 'supabase',
          avatarUrl: userMeta.avatar_url || userMeta.picture,
        };
        persistLocalUser(profile);
      } else if (_event === 'SIGNED_OUT') {
        persistLocalUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabaseVersion]);

  const openLoginModal = (tab: 'login' | 'register' = 'login') => {
    setInitialTab(tab);
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);

  // Email / ID Login
  const login = async (email: string, pass: string): Promise<boolean> => {
    if (isSupabaseConfigured()) {
      await signInWithEmail(email, pass);
      return true;
    }

    // Fallback simulation if not connected yet
    await new Promise((resolve) => setTimeout(resolve, 600));
    const cleanName = email.split('@')[0]
      ? email.split('@')[0].replace(/[._-]/g, ' ').toUpperCase()
      : 'KINASIH MEMBER';

    const profile: UserProfile = {
      id: 'KNS-' + Math.floor(1000 + Math.random() * 9000),
      name: cleanName,
      email: email || 'kinasih@kinai.co.id',
      role: 'Insan KINASIH',
      department: 'PT KINAI Group Ecosystem',
      provider: 'kinai_id',
    };

    persistLocalUser(profile);
    return true;
  };

  // Register New Account
  const register = async (email: string, pass: string, regData: RegisterData): Promise<boolean> => {
    if (isSupabaseConfigured()) {
      await signUpWithEmail(email, pass, regData);
      return true;
    }

    // Fallback simulation if not connected yet
    await new Promise((resolve) => setTimeout(resolve, 600));
    const profile: UserProfile = {
      id: 'KNS-' + Math.floor(1000 + Math.random() * 9000),
      name: regData.fullName.toUpperCase() || email.split('@')[0].toUpperCase(),
      email: email,
      role: 'Insan KINASIH',
      department: regData.unitBisnis || 'PT KINAI Group Ecosystem',
      provider: 'kinai_registered',
    };

    persistLocalUser(profile);
    return true;
  };

  // Google Login via Supabase OAuth
  const loginWithGoogle = async (): Promise<void> => {
    if (isSupabaseConfigured()) {
      await signInWithGoogle();
      return;
    }

    // Direct Google authentication simulation if keys are not set yet
    await new Promise((resolve) => setTimeout(resolve, 600));
    const profile: UserProfile = {
      id: 'GOOG-8812',
      name: 'KINAI GROUP GOOGLE',
      email: 'kinaigroup.id@gmail.com',
      role: 'Insan KINASIH (Google SSO)',
      department: 'PT Kincir Angin Indonesia',
      provider: 'google',
    };
    persistLocalUser(profile);
  };

  const logout = async () => {
    if (isSupabaseConfigured()) {
      try {
        await signOutSupabase();
      } catch {
        // ignore
      }
    }
    persistLocalUser(null);
  };

  const saveSupabaseConfig = (url: string, key: string) => {
    setCustomSupabaseCredentials(url, key);
  };

  const getSupabaseInfo = () => {
    return getSupabaseCredentials();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoginModalOpen,
        initialTab,
        openLoginModal,
        closeLoginModal,
        login,
        register,
        loginWithGoogle,
        logout,
        isSupabaseConnected,
        saveSupabaseConfig,
        getSupabaseInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
