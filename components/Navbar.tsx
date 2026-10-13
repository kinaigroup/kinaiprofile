'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, LogIn, LogOut, User, ShieldCheck } from 'lucide-react';
import KinaiLogo from '@/components/KinaiLogo';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs border-b border-stone-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Single brand logo */}
          <a
            href="#"
            className="flex items-center group whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg"
          >
            <KinaiLogo variant="horizontal" className="h-10 sm:h-11 w-auto transition-transform duration-200 group-hover:scale-[1.02]" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#064E3B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Menu Log In Link */}
            {!user ? (
              <button
                type="button"
                onClick={openLoginModal}
                className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 font-semibold text-stone-700 hover:underline cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Log In</span>
              </button>
            ) : null}
          </nav>

          {/* Zone 3: Actions (Auth & Contact) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Authenticated User Pill / Profile Button */}
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-900/10 text-xs font-semibold text-[#064E3B] transition-colors cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-[11px]">
                    {user.name.charAt(0)}
                  </span>
                  <span className="hidden sm:inline max-w-[120px] truncate">{user.name}</span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2 border-b border-stone-100">
                      <p className="text-xs font-bold text-stone-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-stone-500 truncate">{user.email}</p>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-800 font-semibold">
                        <ShieldCheck className="w-3 h-3" />
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
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Keluar (Log Out)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="hidden md:inline-flex lg:hidden items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-[#064E3B] rounded-lg transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Log In</span>
              </button>
            )}

            {/* Hubungi Kami CTA Button */}
            <a
              href="#kontak"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#053d2e] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-[#064E3B] py-1.5 border-b border-stone-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Log In / User Item */}
            {user ? (
              <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-xs">
                    {user.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-stone-900">{user.name}</p>
                    <p className="text-[10px] text-stone-500">{user.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg text-xs flex items-center gap-1 font-semibold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLoginModal();
                }}
                className="w-full flex items-center justify-between text-base font-semibold text-[#064E3B] py-2 border-b border-stone-100"
              >
                <span className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  <span>Log In (Portal KINASIH)</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </button>
            )}

            <div className="pt-2">
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#064E3B] hover:bg-[#053d2e] rounded-lg transition-colors"
              >
                <span>Hubungi Kami</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
