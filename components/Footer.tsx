'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-stone-800">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-stone-950 flex items-center justify-center font-bold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M12 12L12 2C15 2 17 4 17 7L12 12Z" fill="currentColor" fillOpacity="0.85" />
                    <path d="M12 12L22 12C22 15 20 17 17 17L12 12Z" fill="currentColor" fillOpacity="0.85" />
                    <path d="M12 12L12 22C9 22 7 20 7 17L12 12Z" fill="currentColor" fillOpacity="0.85" />
                    <path d="M12 12L2 12C2 9 4 7 7 7L12 12Z" fill="currentColor" fillOpacity="0.85" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  PT KINAI
                </span>
              </div>

              <p className="text-xs tracking-wider uppercase font-semibold text-emerald-400 mb-2">
                Kincir Angin Indonesia
              </p>

              <p className="text-sm text-stone-400 leading-relaxed max-w-sm mb-4">
                Grup perusahaan Indonesia yang berakar di tanah air dan bertumbuh menuju panggung dunia, bergerak di bidang manufaktur garmen, makanan dan minuman, energi, serta konsultansi data dan operasional.
              </p>

              <div className="text-xs text-stone-400 italic">
                Slogan: <span className="text-white font-medium">&ldquo;Grow Together, Better Every Day&rdquo;</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-800/80">
              <span className="text-xs text-stone-400 block mb-1">Korespondensi Resmi</span>
              <a
                href="mailto:kinaigroup.id@gmail.com"
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                kinaigroup.id@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang KINAI &amp; Filosofi Nama
                </a>
              </li>
              <li>
                <a href="#visi-misi" className="hover:text-white transition-colors">
                  Purpose, Visi &amp; Misi (KINASIH)
                </a>
              </li>
              <li>
                <a href="#lini-bisnis" className="hover:text-white transition-colors">
                  Empat Bidang Bisnis Grup
                </a>
              </li>
              <li>
                <a href="#dna" className="hover:text-white transition-colors">
                  Insan KINASIH &amp; DNA KINARIA
                </a>
              </li>
              <li>
                <a href="#rnd" className="hover:text-white transition-colors">
                  R&amp;D Pilar Lintas Bisnis
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* 4 Business Lines */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Ekosistem Bisnis
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex flex-col">
                <span className="text-white font-medium">Manufaktur Garmen</span>
                <span className="text-xs text-stone-400">Garment Manufacturing</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Manufaktur Makanan &amp; Minuman</span>
                <span className="text-xs text-stone-400">Food and Beverage Manufacturing</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Energi</span>
                <span className="text-xs text-stone-400">Sustainable Energy Solutions</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Konsultansi Data &amp; Operasional</span>
                <span className="text-xs text-stone-400">Data &amp; Operations Advisory</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} PT KINAI (Kincir Angin Indonesia). Seluruh hak cipta dilindungi undang-undang.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Kembali ke atas halaman"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
