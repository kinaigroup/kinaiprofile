'use client';

import React, { useState } from 'react';
import { Microscope, Cpu, Database, Share2, Shirt, Utensils, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ResearchAndDevelopment() {
  const [highlightedSector, setHighlightedSector] = useState<string>('all');

  const capabilities = [
    {
      title: 'Riset & Inovasi Terapan',
      desc: 'Mengeksplorasi metodologi terkini dan formulasi solutif untuk menghasilkan produk bernilai tambah tinggi.',
      icon: Microscope,
    },
    {
      title: 'Pengembangan Teknologi',
      desc: 'Mengintegrasikan otomasi, peralatan mutakhir, dan rekayasa terstruktur ke dalam proses manufaktur.',
      icon: Cpu,
    },
    {
      title: 'Pemanfaatan Data Terarah',
      desc: 'Menganalisis indikator kinerja dan pola operasional untuk pengambilan keputusan berbasis data objektif.',
      icon: Database,
    },
    {
      title: 'Pertukaran Pengetahuan Lintas Industri',
      desc: 'Mendorong transfer kapabilitas antar bidang usaha sehingga inovasi di satu sektor memperkuat sektor lainnya.',
      icon: Share2,
    },
  ];

  const connections = [
    {
      id: 'garment',
      name: 'Manufaktur Garmen',
      icon: Shirt,
      role: 'Uji material tekstil, efisiensi pemotongan, standarisasi mutu serat, dan adaptasi rantai pasok terintegrasi.',
    },
    {
      id: 'fnb',
      name: 'Makanan & Minuman',
      icon: Utensils,
      role: 'Validasi higienitas, pengembangan formulasi pangan aman, pengemasan ramah lingkungan, dan kestabilan produk.',
    },
    {
      id: 'energy',
      name: 'Energi',
      icon: Zap,
      role: 'Riset konversi daya berkelanjutan, efisiensi konsumsi energi di fasilitas produksi, dan pengurangan jejak karbon.',
    },
    {
      id: 'consulting',
      name: 'Konsultan Data & Operasional',
      icon: BarChart3,
      role: 'Penyusunan arsitektur analitik, model optimalisasi lini kerja, dan penyelarasan tata kelola berbasis bukti.',
    },
  ];

  return (
    <section id="rnd" className="py-24 md:py-32 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-3">
            <span>Sinergi &amp; Akselerasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Research &amp; Development: Ketika Science dan Teknologi bertemu
          </h2>
        </div>

        {/* Narrative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 font-light">
              <strong className="font-semibold text-stone-900">Research and Development (R&amp;D)</strong> menjadi salah satu pilar utama KINAI yang menghubungkan dan memperkuat seluruh bidang usahanya. Melalui riset, inovasi, pengembangan teknologi, pemanfaatan data, dan pertukaran pengetahuan lintas industri, KINAI mendorong setiap bisnis untuk saling belajar, berbagi kapabilitas, dan mengembangkan solusi yang relevan.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Dengan pendekatan ini, R&amp;D tidak hanya mendukung pertumbuhan masing-masing bisnis, tetapi juga menciptakan sinergi yang membuka peluang baru dan meningkatkan daya saing seluruh grup secara berkelanjutan.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#064E3B] text-white shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block mb-2">
                Filosofi Integrasi R&amp;D
              </span>
              <p className="text-lg font-medium text-emerald-50 leading-snug mb-4">
                &ldquo;Saling belajar, berbagi kapabilitas, dan mengembangkan solusi yang relevan lintas industri.&rdquo;
              </p>
              <div className="text-xs text-emerald-100/90 pt-4 border-t border-emerald-800">
                Mendorong sinergi kompetitif seluruh grup bisnis KINAI dari hulu ke hilir.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of R&D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-700/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#064E3B] flex items-center justify-center mb-4 border border-stone-200/60 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interconnected Hub Interactive Visualization */}
        <div className="rounded-2xl border border-stone-200/90 bg-stone-50/60 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] block">
                Peta Hubungan Lintas Sektor
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                Bagaimana R&amp;D Memperkuat Setiap Lini Bisnis KINAI
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setHighlightedSector('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                  highlightedSector === 'all'
                    ? 'bg-[#064E3B] text-white shadow-2xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
                }`}
              >
                Semua Bidang
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {connections.map((item) => {
              const Icon = item.icon;
              const isSelected = highlightedSector === 'all' || highlightedSector === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setHighlightedSector(highlightedSector === item.id ? 'all' : item.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#064E3B] bg-white shadow-xs'
                      : 'border-stone-200/70 bg-white/50 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
