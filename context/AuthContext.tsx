'use client';

import React, { createContext, useContext, useState, useMemo, useSyncExternalStore } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// External store subscription for localStorage without SSR hydration mismatch
function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('kinai-auth-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('kinai-auth-change', callback);
  };
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem('kinai_auth_user');
  } catch {
    return null;
  }
}

function getServerSnapshot(): null {
  return null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // useSyncExternalStore guarantees SSR renders null and hydrates matching the server,
  // then seamlessly syncs with localStorage on the client.
  const rawUser = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const user: UserProfile | null = useMemo(() => {
    if (!rawUser) return null;
    try {
      return JSON.parse(rawUser);
    } catch {
      return null;
    }
  }, [rawUser]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const login = async (email: string): Promise<boolean> => {
    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 600));

    const cleanName = email.split('@')[0]
      ? email.split('@')[0].replace(/[._-]/g, ' ').toUpperCase()
      : 'KINASIH MEMBER';

    const profile: UserProfile = {
      id: 'KNS-8842',
      name: cleanName,
      email: email || 'kinasih@kinai.co.id',
      role: 'Insan KINASIH',
      department: 'PT KINAI Group Ecosystem',
    };

    try {
      localStorage.setItem('kinai_auth_user', JSON.stringify(profile));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('kinai-auth-change'));
      }
    } catch {
      // ignore
    }
    return true;
  };

  const logout = () => {
    try {
      localStorage.removeItem('kinai_auth_user');
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('kinai-auth-change'));
      }
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        logout,
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
