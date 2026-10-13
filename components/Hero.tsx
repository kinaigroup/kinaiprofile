'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Shirt, Utensils, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const quickSectors = [
    {
      title: 'Manufaktur Garmen',
      en: 'Garment Manufacturing',
      icon: Shirt,
      href: '#lini-bisnis',
    },
    {
      title: 'Makanan & Minuman',
      en: 'Food & Beverage',
      icon: Utensils,
      href: '#lini-bisnis',
    },
    {
      title: 'Energi Berkelanjutan',
      en: 'Energy Solutions',
      icon: Zap,
      href: '#lini-bisnis',
    },
    {
      title: 'Konsultansi Data & Operasional',
      en: 'Data & Operations',
      icon: BarChart3,
      href: '#lini-bisnis',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50/50">
      {/* Background subtle architectural grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#064E3B 1px, transparent 1px), linear-gradient(to right, #064E3B 1px, transparent 1px)',
          backgroundSize: '32px 32px, 128px 128px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement & Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Slogan metadata text without pill box */}
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold text-[#064E3B] mb-5">
              <span>PT Kincir Angin Indonesia</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500 font-normal">Grow Together, Better Every Day</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-stone-900 leading-[1.15] mb-6 text-balance"
            >
              Mengubah Setiap Potensi Menjadi Manfaat Nyata bagi Kehidupan
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
              Terinspirasi dari kincir angin yang mengubah hembusan angin menjadi energi
              bermanfaat, KINAI membangun ekosistem terhubung lintas manufaktur garmen,
              makanan &amp; minuman, energi, serta konsultansi data dan operasional.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#lini-bisnis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#064E3B] hover:bg-[#053d2e] rounded-lg shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 whitespace-nowrap"
              >
                <span>Eksplorasi Lini Bisnis</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#tentang"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200/90 rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 whitespace-nowrap"
              >
                <span>Tentang &amp; Filosofi</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Quiet trust markers */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 w-full flex items-center gap-6 text-xs text-stone-500">
              <span className="font-medium text-stone-700">Ekosistem 4 Pilar Industri</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Berbasis R&amp;D Lintas Sektor</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Indonesia Menuju Global</span>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Visual Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-md bg-stone-100">
              <Image
                src="/images/hero_kinai_wind_1791850520389.jpg"
                alt="Pemandangan kincir angin energi berkelanjutan PT KINAI di Indonesia"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Gentle bottom scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-emerald-300 mb-1">
                  Filosofi Kincir Angin
                </p>
                <p className="text-sm font-medium leading-snug text-stone-100">
                  Mengubah tantangan dan peluang tak terlihat menjadi kekuatan nyata yang bermanfaat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Quick Glance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {quickSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <a
                key={sector.title}
                href={sector.href}
                className="group p-4 rounded-xl bg-white border border-stone-200/80 hover:border-emerald-700/40 hover:shadow-xs transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#064E3B] flex items-center justify-center shrink-0 group-hover:bg-[#064E3B] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-stone-900 group-hover:text-[#064E3B] transition-colors truncate">
                    {sector.title}
                  </h2>
                  <p className="text-xs text-stone-500 truncate mt-0.5">
                    {sector.en}
                  </p>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
