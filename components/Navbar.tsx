'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, LogOut, ShieldCheck, UserPlus, PhoneCall } from 'lucide-react';
import KinaiLogo from '@/components/KinaiLogo';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const isClient = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const { user, openLoginModal, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang & Filosofi', href: '#tentang' },
    { label: 'Visi & Misi', href: '#visi-misi' },
    { label: 'Lini Bisnis', href: '#lini-bisnis' },
    { label: 'KINAI DNA', href: '#dna' },
    { label: 'R&D', href: '#rnd' },
    { label: 'Hubungi Kami', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-white/90 backdrop-blur-xs border-b border-stone-100 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo Brand PT KINAI */}
          <a
            href="#"
            className="flex items-center group whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg"
          >
            <KinaiLogo variant="horizontal" className="h-10 sm:h-11 w-auto transition-transform duration-200 group-hover:scale-[1.02]" />
          </a>

          {/* Navigation Menu Utama (Semua link, Hubungi Kami, Login & Daftar Akun terintegrasi di dalam satu menu) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#064E3B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Separator halus di dalam menu */}
            <span className="h-4 w-px bg-stone-200" aria-hidden="true" />

            {/* Bagian Akun & Login di dalam menu */}
            {isClient && user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="inline-flex items-center gap-2 py-1 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-900/10 text-xs font-semibold text-[#064E3B] transition-colors cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-[11px]">
                    {user.name.charAt(0)}
                  </span>
                  <span className="max-w-[120px] truncate">{user.name}</span>
                </button>

                {/* Dropdown Menu Akun */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2.5 border-b border-stone-100">
                      <p className="text-xs font-bold text-stone-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-stone-500 truncate mt-0.5">{user.email}</p>
                      <div className="flex items-center gap-1 mt-1.5 text-[10px] text-emerald-800 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{user.role}</span>
                      </div>
                    </div>

                    <div className="px-2 py-1">
                      <button
                        type="button"
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Keluar (Log Out)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => openLoginModal('login')}
                  className="hover:text-[#064E3B] text-stone-700 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 font-semibold cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#064E3B] hover:after:w-full after:transition-all after:duration-200"
                >
                  <LogIn className="w-4 h-4 text-[#064E3B]" />
                  <span>Log In</span>
                </button>

                <button
                  type="button"
                  onClick={() => openLoginModal('register')}
                  className="hover:text-[#064E3B] text-stone-700 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 font-semibold cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#064E3B] hover:after:w-full after:transition-all after:duration-200"
                >
                  <UserPlus className="w-4 h-4 text-[#064E3B]" />
                  <span>Daftar Akun</span>
                </button>
              </div>
            )}
          </nav>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel: Semua item menu termasuk Hubungi Kami, Log In & Daftar Akun berada di dalam menu ini */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-[#064E3B] py-2 border-b border-stone-100 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.href === '#kontak' && <PhoneCall className="w-4 h-4 text-[#064E3B]" />}
              </a>
            ))}

            {/* Menu Akun / Log In & Daftar Akun di dalam mobile menu */}
            {isClient && user ? (
              <div className="pt-2">
                <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-xs">
                      {user.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">{user.name}</p>
                      <p className="text-[10px] text-stone-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg text-xs flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Keluar</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLoginModal('login');
                  }}
                  className="w-full flex items-center justify-between text-base font-semibold text-[#064E3B] py-2.5 border-b border-stone-100 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    <span>Log In (Portal KINASIH)</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLoginModal('register');
                  }}
                  className="w-full flex items-center justify-between text-base font-semibold text-stone-700 hover:text-[#064E3B] py-2.5 border-b border-stone-100 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-emerald-700" />
                    <span>Daftar Akun Baru</span>
                  </span>
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
