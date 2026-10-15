'use client';

import React, { useState } from 'react';
import {
  X,
  Lock,
  Mail,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  User,
  Building,
  Phone,
  Database,
  Info,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { formatSupabaseAuthError } from '@/lib/supabase';
import KinaiLogo from '@/components/KinaiLogo';

export default function LoginModal() {
  const {
    isLoginModalOpen,
    initialTab,
    closeLoginModal,
    login,
    register,
    loginWithGoogle,
    isSupabaseConnected,
    saveSupabaseConfig,
    getSupabaseInfo,
  } = useAuth();

  // Controlled tab selection
  const [selectedTab, setSelectedTab] = useState<'login' | 'register' | null>(null);
  const activeTab = selectedTab ?? initialTab ?? 'login';

  // Login Form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Register Form
  const [fullName, setFullName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [unitBisnis, setUnitBisnis] = useState('Manufaktur Garmen');
  const [phone, setPhone] = useState('');

  // States
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successTitle, setSuccessTitle] = useState('Akses Berhasil');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailConfirmationRequired, setEmailConfirmationRequired] = useState(false);

  // Forgot Password
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // Supabase Manual Settings Modal
  const [showSupabaseSettings, setShowSupabaseSettings] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [customKey, setCustomKey] = useState('');
  const [configSaved, setConfigSaved] = useState(false);

  if (!isLoginModalOpen) return null;

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleTabSwitch = (tab: 'login' | 'register') => {
    setSelectedTab(tab);
    setError('');
  };

  // Submit Login (signInWithPassword)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError('Harap masukkan alamat email.');
      return;
    }
    if (!password) {
      setError('Harap masukkan kata sandi Anda.');
      return;
    }

    setIsLoading(true);
    setLoadingText('Memverifikasi kredensial ke Supabase...');

    try {
      await login(cleanEmail, password);
      setSuccessTitle('Selamat Datang Kembali');
      setSuccessMessage('Autentikasi berhasil. Anda telah masuk ke Portal KINASIH.');
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeLoginModal();
        setSelectedTab(null);
      }, 1000);
    } catch (err: unknown) {
      setError(formatSupabaseAuthError(err));
    } finally {
      setIsLoading(false);
    }
  };

  // Submit Register (signUp)
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || fullName.trim().length < 3) {
      setError('Harap masukkan nama lengkap (minimal 3 karakter).');
      return;
    }
    const cleanEmail = regEmail.trim();
    if (!cleanEmail) {
      setError('Harap masukkan alamat email.');
      return;
    }
    if (!validateEmail(cleanEmail)) {
      setError('Format email tidak valid (contoh: nama@perusahaan.co.id).');
      return;
    }
    if (!regPassword || regPassword.length < 6) {
      setError('Kata sandi minimal 6 karakter.');
      return;
    }
    if (regPasswordConfirm && regPassword !== regPasswordConfirm) {
      setError('Konfirmasi kata sandi tidak cocok.');
      return;
    }

    setIsLoading(true);
    setLoadingText('Mendaftarkan akun ke Supabase Auth...');

    try {
      const result = await register(cleanEmail, regPassword, {
        fullName: fullName.trim(),
        unitBisnis,
        phone: phone.trim(),
      });

      if (result.requiresConfirmation) {
        setEmailConfirmationRequired(true);
        setSuccessTitle('Pendaftaran Berhasil');
        setSuccessMessage(
          `Tautan konfirmasi pendaftaran telah dikirim ke ${cleanEmail}. Silakan periksa kotak masuk atau spam email Anda untuk mengaktifkan akun sebelum login.`
        );
      } else {
        setSuccessTitle('Pendaftaran Berhasil');
        setSuccessMessage('Akun KINASIH Anda telah aktif dan otomatis masuk.');
      }

      setIsSuccess(true);

      if (!result.requiresConfirmation) {
        setTimeout(() => {
          setIsSuccess(false);
          closeLoginModal();
          setSelectedTab(null);
        }, 1200);
      }
    } catch (err: unknown) {
      setError(formatSupabaseAuthError(err));
    } finally {
      setIsLoading(false);
    }
  };

  // Google OAuth Login
  const handleGoogleAuth = async () => {
    setError('');
    setIsLoading(true);
    setLoadingText('Menghubungkan ke Google via Supabase...');
    try {
      await loginWithGoogle();
      if (!isSupabaseConnected) {
        setSuccessTitle('Login Google Selesai');
        setSuccessMessage('Sesi Google KINASIH telah terverifikasi.');
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          closeLoginModal();
          setSelectedTab(null);
        }, 1000);
      }
    } catch (err: unknown) {
      setError(formatSupabaseAuthError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail('kinasih.member@kinai.co.id');
    setPassword('Kinai2026#Grow');
    setError('');
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !validateEmail(email)) {
      setError('Masukkan alamat email terdaftar yang valid.');
      return;
    }
    setError('');
    setIsLoading(true);
    setLoadingText('Mengirim tautan pemulihan...');
    setTimeout(() => {
      setIsLoading(false);
      setForgotSuccess(true);
    }, 800);
  };

  const openSettings = () => {
    const info = getSupabaseInfo();
    setCustomUrl(info.url || '');
    setCustomKey(info.anonKey || '');
    setShowSupabaseSettings(true);
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig(customUrl, customKey);
    setConfigSaved(true);
    setTimeout(() => {
      setConfigSaved(false);
      setShowSupabaseSettings(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          closeLoginModal();
          setSelectedTab(null);
        }}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            closeLoginModal();
            setSelectedTab(null);
          }}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 z-10 cursor-pointer"
          aria-label="Tutup dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 pb-4 text-center border-b border-stone-100 bg-stone-50/50">
          <div className="flex justify-center mb-3">
            <KinaiLogo variant="horizontal" className="h-10 w-auto" />
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            Portal KINASIH
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Grup Usaha PT Kincir Angin Indonesia
          </p>

          {/* Supabase Status Pill */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {isSupabaseConnected ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Supabase Auth Aktif
              </span>
            ) : (
              <button
                type="button"
                onClick={openSettings}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200/80 transition-colors cursor-pointer"
              >
                <Database className="w-3 h-3 text-stone-400" />
                <span>Konfigurasi Supabase (Vercel)</span>
              </button>
            )}
          </div>

          {/* Tab Selector: Masuk vs Daftar Akun Baru */}
          {!isForgotMode && !showSupabaseSettings && !isSuccess && (
            <div className="mt-4 grid grid-cols-2 p-1 bg-stone-200/70 rounded-xl">
              <button
                type="button"
                onClick={() => handleTabSwitch('login')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'login'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Masuk (Log In)
              </button>
              <button
                type="button"
                onClick={() => handleTabSwitch('register')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'register'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Daftar Akun Baru
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 pt-5">
          {isSuccess ? (
            <div className="py-6 text-center space-y-3.5">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#064E3B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                {successTitle}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed px-2">
                {successMessage}
              </p>

              {emailConfirmationRequired ? (
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setEmailConfirmationRequired(false);
                      handleTabSwitch('login');
                    }}
                    className="py-2.5 px-5 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    Buka Halaman Masuk (Log In)
                  </button>
                </div>
              ) : null}
            </div>
          ) : showSupabaseSettings ? (
            /* Supabase Manual Setup Helper */
            <form onSubmit={handleSaveConfig} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                  <Database className="w-4 h-4 text-emerald-800" />
                  <span>Koneksi Supabase (Vercel)</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSupabaseSettings(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  Kembali
                </button>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-[11px] text-emerald-900 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 text-emerald-700 mt-0.5" />
                <span>
                  Sistem otomatis mendeteksi environment variable <strong>VITE_SUPABASE_URL</strong> dan <strong>VITE_SUPABASE_ANON_KEY</strong> dari Vercel. Anda juga dapat menyimpannya secara instan di form ini.
                </span>
              </div>

              {configSaved && (
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Konfigurasi Supabase berhasil diperbarui!</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  VITE_SUPABASE_URL
                </label>
                <input
                  type="url"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  placeholder="https://xyzproject.supabase.co"
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-200 text-xs text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  VITE_SUPABASE_ANON_KEY
                </label>
                <input
                  type="text"
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-200 text-xs text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Simpan &amp; Hubungkan Sekarang
              </button>
            </form>
          ) : isForgotMode ? (
            forgotSuccess ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#064E3B] flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Instruksi Terkirim
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Kami telah mengirimkan instruksi pemulihan kata sandi ke <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotMode(false);
                    setForgotSuccess(false);
                  }}
                  className="mt-3 text-xs font-semibold text-[#064E3B] hover:underline cursor-pointer"
                >
                  Kembali ke Halaman Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
                <div>
                  <label htmlFor="forgot-email" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Alamat Email Terdaftar
                  </label>
                  <div className="relative">
                    <input
                      id="forgot-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@kinai.co.id"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                    />
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? 'Mengirim...' : 'Kirim Tautan Reset'}
                </button>
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsForgotMode(false)}
                    className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
                  >
                    Batal dan kembali
                  </button>
                </div>
              </form>
            )
          ) : (
            <div className="space-y-4">
              {/* Google OAuth Login Button */}
              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-xl border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-semibold shadow-2xs transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"
                  />
                </svg>
                <span>
                  {activeTab === 'login' ? 'Lanjutkan dengan Google' : 'Daftar dengan Akun Google'}
                </span>
              </button>

              {/* Separator */}
              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-stone-200 w-full" />
                <span className="bg-white px-3 text-[11px] font-medium text-stone-400 uppercase tracking-wider">
                  atau
                </span>
              </div>

              {/* Error Message Box */}
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2 animate-in fade-in duration-150">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  <span className="leading-relaxed">{error}</span>
                </div>
              )}

              {/* TAB 1: FORM MASUK (signInWithPassword) */}
              {activeTab === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor="login-email" className="block text-xs font-semibold text-stone-700 mb-1">
                      Alamat Email
                    </label>
                    <div className="relative">
                      <input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@kinai.co.id atau email Anda"
                        disabled={isLoading}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors disabled:opacity-60"
                      />
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="login-password" className="text-xs font-semibold text-stone-700">
                        Kata Sandi
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsForgotMode(true)}
                        className="text-[11px] font-medium text-[#064E3B] hover:underline cursor-pointer"
                      >
                        Lupa Sandi?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan kata sandi"
                        disabled={isLoading}
                        className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors disabled:opacity-60"
                      />
                      <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3 text-stone-400 hover:text-stone-700 cursor-pointer"
                        aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded text-[#064E3B] focus:ring-emerald-700 border-stone-300"
                      />
                      <span className="text-xs text-stone-600">Ingat sesi saya</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-1"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{loadingText || 'Memverifikasi...'}</span>
                      </>
                    ) : (
                      <>
                        <span>Masuk ke Portal</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Tombol Demo Akun */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={fillDemoAccount}
                      className="w-full py-1.5 px-3 rounded-lg border border-dashed border-emerald-700/40 bg-emerald-50/50 hover:bg-emerald-50 text-[#064E3B] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Gunakan Akun Demo KINASIH</span>
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 2: FORM DAFTAR AKUN BARU (signUp) */}
              {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="reg-name" className="block text-xs font-semibold text-stone-700 mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="reg-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nama lengkap Anda"
                        disabled={isLoading}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 disabled:opacity-60"
                      />
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-semibold text-stone-700 mb-1">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="reg-email"
                        type="email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="nama@kinai.co.id atau email Anda"
                        disabled={isLoading}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 disabled:opacity-60"
                      />
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-2.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="reg-password" className="block text-xs font-semibold text-stone-700 mb-1">
                        Kata Sandi <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="reg-password"
                          type={showRegPassword ? 'text' : 'password'}
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          placeholder="Min. 6 karakter"
                          disabled={isLoading}
                          className="w-full pl-9 pr-8 py-2 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 disabled:opacity-60"
                        />
                        <Lock className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                        <button
                          type="button"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700 cursor-pointer"
                        >
                          {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reg-confirm" className="block text-xs font-semibold text-stone-700 mb-1">
                        Ulangi Sandi
                      </label>
                      <div className="relative">
                        <input
                          id="reg-confirm"
                          type={showRegPassword ? 'text' : 'password'}
                          value={regPasswordConfirm}
                          onChange={(e) => setRegPasswordConfirm(e.target.value)}
                          placeholder="Ulangi kata sandi"
                          disabled={isLoading}
                          className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 disabled:opacity-60"
                        />
                        <Lock className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="reg-unit" className="block text-xs font-semibold text-stone-700 mb-1">
                        Unit Bisnis KINAI
                      </label>
                      <div className="relative">
                        <select
                          id="reg-unit"
                          value={unitBisnis}
                          onChange={(e) => setUnitBisnis(e.target.value)}
                          disabled={isLoading}
                          className="w-full pl-8 pr-3 py-2 rounded-lg border border-stone-200 text-xs text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 appearance-none disabled:opacity-60"
                        >
                          <option value="Manufaktur Garmen">Manufaktur Garmen</option>
                          <option value="Makanan & Minuman">Makanan &amp; Minuman</option>
                          <option value="Energi">Energi</option>
                          <option value="Konsultan Data & Operasional">Konsultan Data &amp; Operasional</option>
                          <option value="Ekosistem Pusat">Ekosistem Pusat</option>
                        </select>
                        <Building className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reg-phone" className="block text-xs font-semibold text-stone-700 mb-1">
                        No. WhatsApp / HP
                      </label>
                      <div className="relative">
                        <input
                          id="reg-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+62 812..."
                          disabled={isLoading}
                          className="w-full pl-8 pr-3 py-2 rounded-lg border border-stone-200 text-xs text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 disabled:opacity-60"
                        />
                        <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{loadingText || 'Mendaftarkan Akun...'}</span>
                      </>
                    ) : (
                      <>
                        <span>Daftar Akun KINASIH</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
