'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shirt, Utensils, Zap, BarChart3, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BusinessSectors() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const sectors = [
    {
      id: 'garment',
      num: '01',
      title: 'Manufaktur Garmen',
      enTitle: 'Garment Manufacturing',
      icon: Shirt,
      image: '/images/biz_garment_1791850523565.jpg',
      tagline: 'Presisi Manufaktur Tekstil dan Pakaian Jadi Berkualitas',
      description:
        'Lini manufaktur garmen KINAI berfokus pada produksi pakaian jadi berkualitas tinggi dengan mengedepankan efisiensi operasional, ketepatan pengerjaan, dan perhatian mendalam terhadap standar kenyamanan serta daya tahan produk.',
      ecosystemRole:
        'Terhubung dengan riset bahan baku dan optimasi data operasional grup untuk menghadirkan produksi yang tangguh dan adaptif terhadap kebutuhan pasar global.',
      highlights: [
        'Produksi garmen dan pakaian terstruktur',
        'Efisiensi alur kerja manufaktur presisi',
        'Dukungan integrasi riset material dan teknologi tekstil',
      ],
    },
    {
      id: 'fnb',
      num: '02',
      title: 'Manufaktur Makanan dan Minuman',
      enTitle: 'Food and Beverage Manufacturing',
      icon: Utensils,
      image: '/images/biz_food_beverage_1791850521548.jpg',
      tagline: 'Produksi Makanan dan Minuman Higienis Berstandar Tinggi',
      description:
        'Lini manufaktur makanan dan minuman KINAI menghadirkan pengolahan produk pangan yang higienis, aman, dan konsisten mutunya, didukung oleh fasilitas pengolahan modern dan pengawasan kualitas menyeluruh.',
      ecosystemRole:
        'Berkolaborasi erat dengan divisi R&D dalam formulasi, pengemasan, dan keandalan sistem rantai pasok yang aman serta berkelanjutan.',
      highlights: [
        'Standar higienitas dan keamanan pangan konsisten',
        'Fasilitas pengolahan dan pembotolan modern',
        'Pengembangan formulasi dan kemasan teruji bersama R&D',
      ],
    },
    {
      id: 'energy',
      num: '03',
      title: 'Energi',
      enTitle: 'Energy Solutions',
      icon: Zap,
      image: '/images/biz_energy_1791850523208.jpg',
      tagline: 'Pengembangan dan Pemanfaatan Energi untuk Masa Depan',
      description:
        'Lini energi KINAI selaras dengan filosofi dasar Kincir Angin Indonesia: mengubah potensi alam menjadi energi yang bermanfaat nyata bagi manusia, dengan kesadaran penuh terhadap kelestarian lingkungan dan keberlanjutan bumi.',
      ecosystemRole:
        'Menjadi pondasi pasokan daya ramah lingkungan dan inspirasi efisiensi energi bagi seluruh unit manufaktur di dalam grup KINAI.',
      highlights: [
        'Pemanfaatan potensi energi berkelanjutan',
        'Keselarasan pertumbuhan bisnis dengan kelestarian bumi',
        'Sinergi efisiensi daya lintas fasilitas operasional grup',
      ],
    },
    {
      id: 'consulting',
      num: '04',
      title: 'Konsultansi Data dan Operasional',
      enTitle: 'Data and Operational Consultancy',
      icon: BarChart3,
      image: '/images/biz_consulting_1791850523029.jpg',
      tagline: 'Solusi Analisis Data dan Optimalisasi Operasional Strategis',
      description:
        'Lini konsultansi data dan operasional KINAI membantu organisasi dan unit usaha dalam mengolah data menjadi wawasan terukur, menata alur kerja, serta merancang perbaikan operasional yang berdampak langsung pada kinerja.',
      ecosystemRole:
        'Menyediakan analisis analitik dan optimasi sistemik yang menopang efisiensi operasional seluruh pilar manufaktur dan R&D KINAI.',
      highlights: [
        'Analisis data terarah untuk pengambilan keputusan',
        'Penyempurnaan proses dan produktivitas operasional',
        'Penerapan metodologi analitik lintas industri',
      ],
    },
  ];

  const currentSector = sectors[activeTab];
  const CurrentIcon = currentSector.icon;

  return (
    <section id="lini-bisnis" className="py-24 md:py-32 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-3">
            <span>Portofolio Bisnis</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">Empat Pilar Industri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Ekosistem Bisnis Terintegrasi KINAI
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Melalui keberagaman bidang usaha tersebut, KINAI membangun ekosistem bisnis yang
            saling terhubung untuk menciptakan peluang, mengembangkan solusi, dan menghadirkan
            nilai bagi pelanggan serta masyarakat.
          </p>
        </div>

        {/* 1. Sederhana & Berada di Atas: 4 Kartu Pemilih Sektor (Tanpa Deskripsi) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isCurrent = activeTab === idx;

            return (
              <div
                key={sec.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveTab(idx);
                  }
                }}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 select-none ${
                  isCurrent
                    ? 'border-[#064E3B] bg-emerald-50/40 shadow-xs ring-1 ring-[#064E3B]'
                    : 'border-stone-200/90 bg-stone-50/50 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-[#064E3B]' : 'text-stone-400'}`}>
                      Pilar {sec.num}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-[#064E3B] text-white shadow-2xs'
                          : 'bg-white border border-stone-200/80 text-stone-600'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h3 className={`text-xs sm:text-sm font-bold tracking-tight line-clamp-2 ${isCurrent ? 'text-[#064E3B]' : 'text-stone-900'}`}>
                    {sec.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-stone-500 mt-0.5 truncate">
                    {sec.enTitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[10px] sm:text-xs">
                  <span className={isCurrent ? 'font-semibold text-[#064E3B]' : 'text-stone-500'}>
                    {isCurrent ? 'Aktif' : 'Pilih'}
                  </span>
                  {isCurrent ? (
                    <Check className="w-3.5 h-3.5 text-[#064E3B]" />
                  ) : (
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Berada di Bawah: Hasil Tampilan & Detail Lengkap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSector.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-stone-200/90 bg-white overflow-hidden shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Visual Preview */}
              <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] bg-stone-200">
                <Image
                  src={currentSector.image}
                  alt={`Fasilitas ${currentSector.title} PT KINAI`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-xs text-xs font-bold text-stone-900 shadow-xs">
                    Pilar {currentSector.num}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
                    {currentSector.enTitle}
                  </p>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                    {currentSector.tagline}
                  </h4>
                </div>
              </div>

              {/* Detail Lengkap & Deskripsi */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                        Detail Pilar {currentSector.num}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                        {currentSector.title}
                      </h3>
                    </div>
                  </div>

                  {/* Deskripsi Lengkap */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {currentSector.description}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Peran dalam Ekosistem KINAI
                    </h5>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {currentSector.ecosystemRole}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                      Fokus &amp; Kapabilitas Utama
                    </h5>
                    <ul className="space-y-2">
                      {currentSector.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    Bagian dari integrasi R&amp;D Lintas Bisnis KINAI
                  </span>
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064E3B] hover:text-[#043e2e] transition-colors"
                  >
                    <span>Konsultasikan Kebutuhan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
