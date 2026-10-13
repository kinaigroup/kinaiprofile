'use client';

import React, { useState } from 'react';
import { X, Lock, Mail, Eye, EyeOff, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import KinaiLogo from '@/components/KinaiLogo';

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [forgotSuccess, setForgotSuccess] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Harap masukkan alamat email atau ID KINASIH Anda.');
      return;
    }
    if (!password.trim()) {
      setError('Harap masukkan kata sandi.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeLoginModal();
      }, 1000);
    } catch {
      setError('Terjadi kendala saat memproses login. Silakan coba lagi.');
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
    if (!email.trim()) {
      setError('Masukkan alamat email terdaftar.');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setForgotSuccess(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeLoginModal}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeLoginModal}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700"
          aria-label="Tutup dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 text-center border-b border-stone-100 bg-stone-50/50">
          <div className="flex justify-center mb-3">
            <KinaiLogo variant="horizontal" className="h-10 w-auto" />
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            {isForgotMode ? 'Pemulihan Kata Sandi' : 'Portal KINASIH'}
          </h3>
          <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
            {isForgotMode
              ? 'Tautan reset kata sandi akan dikirimkan ke alamat email terdaftar.'
              : 'Sistem login resmi grup bisnis PT Kincir Angin Indonesia'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 pt-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#064E3B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                Berhasil Masuk ke Portal
              </h4>
              <p className="text-xs text-stone-600">
                Selamat datang kembali, Insan KINASIH. Mengalihkan ke sesi Anda...
              </p>
            </div>
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
                  Kami telah mengirimkan tautan pemulihan kata sandi ke <strong>{email}</strong>. Silakan periksa kotak masuk atau spam.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotMode(false);
                    setForgotSuccess(false);
                  }}
                  className="mt-3 text-xs font-semibold text-[#064E3B] hover:underline"
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
                  className="w-full py-2.5 px-4 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Mengirim...' : 'Kirim Tautan Reset'}
                </button>
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsForgotMode(false)}
                    className="text-xs text-stone-500 hover:text-stone-800"
                  >
                    Batal dan kembali
                  </button>
                </div>
              </form>
            )
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Email / ID */}
              <div>
                <label htmlFor="login-email" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Email / ID KINASIH
                </label>
                <div className="relative">
                  <input
                    id="login-email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@kinai.co.id atau ID KINASIH"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors"
                  />
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="login-password" className="text-xs font-semibold text-stone-700">
                    Kata Sandi
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgotMode(true)}
                    className="text-[11px] font-medium text-[#064E3B] hover:underline"
                  >
                    Lupa Kata Sandi?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi akun"
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors"
                  />
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-stone-400 hover:text-stone-700"
                    aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk ke Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Quick Demo Fill Helper */}
              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={fillDemoAccount}
                  className="w-full py-2 px-3 rounded-lg border border-dashed border-emerald-700/40 bg-emerald-50/50 hover:bg-emerald-50 text-[#064E3B] text-xs font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Isi Otomatis Akun Demo KINASIH</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
