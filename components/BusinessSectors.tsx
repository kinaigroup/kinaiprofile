'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shirt, Utensils, Zap, BarChart3, ArrowRight } from 'lucide-react';
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

  return (
    <section id="lini-bisnis" className="py-24 md:py-32 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
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

          {/* Interactive Navigation Indicator / Filter Tabs */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
            {sectors.map((sec, idx) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                  activeTab === idx
                    ? 'bg-[#064E3B] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {sec.num}. {sec.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Spotlight for Active Sector */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            {sectors.map((sector, index) => {
              if (index !== activeTab) return null;
              const Icon = sector.icon;

              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-stone-200/90 bg-stone-50/60 overflow-hidden shadow-xs"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Visual Preview */}
                    <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto min-h-[300px] lg:min-h-[440px] bg-stone-200">
                      <Image
                        src={sector.image}
                        alt={`Fasilitas ${sector.title} PT KINAI`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-xs text-xs font-bold text-stone-900 shadow-xs">
                          Pilar {sector.num}
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
                          {sector.enTitle}
                        </p>
                        <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                          {sector.tagline}
                        </h4>
                      </div>
                    </div>

                    {/* Sector Narrative */}
                    <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                              Bidang Usaha {sector.num}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                              {sector.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                          {sector.description}
                        </p>

                        <div className="mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            Peran dalam Ekosistem KINAI
                          </h5>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            {sector.ecosystemRole}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                            Fokus &amp; Kapabilitas Utama
                          </h5>
                          <ul className="space-y-2">
                            {sector.highlights.map((item, i) => (
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
              );
            })}
          </AnimatePresence>
        </div>

        {/* 4 Cards Grid View for Fast Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isCurrent = activeTab === idx;

            return (
              <div
                key={sec.id}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'border-[#064E3B] bg-emerald-50/20 shadow-xs ring-1 ring-[#064E3B]'
                    : 'border-stone-200/90 bg-white hover:border-stone-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-stone-400">
                      {sec.num}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-[#064E3B] text-white'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 mb-1">
                    {sec.title}
                  </h4>
                  <p className="text-xs text-stone-500 mb-3">
                    {sec.enTitle}
                  </p>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className={isCurrent ? 'font-semibold text-[#064E3B]' : 'text-stone-500'}>
                    {isCurrent ? 'Sedang Ditampilkan' : 'Pilih untuk Melihat'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#064E3B]' : 'text-stone-400'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
