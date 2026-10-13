'use client';

import React, { useState } from 'react';
import { Target, Eye, Compass, Heart, Shield, Sparkles, Zap, Users, Lightbulb, Sprout } from 'lucide-react';
import { motion } from 'motion/react';

export default function PurposeVisionMission() {
  const [activeLetter, setActiveLetter] = useState<string>('K');

  const missionItems = [
    {
      letter: 'K',
      title: 'KIND',
      idDesc: 'Menjadi pribadi yang baik, melakukan kebaikan, dan melakukannya dengan cara yang baik.',
      enDesc: 'Be good, do good, and do it in a good way.',
      icon: Heart,
    },
    {
      letter: 'I',
      title: 'INTEGRITY',
      idDesc: 'Melakukan hal yang benar, bahkan ketika tidak ada yang melihat.',
      enDesc: 'Do what is right, even when no one is watching.',
      icon: Shield,
    },
    {
      letter: 'N',
      title: 'NURTURE',
      idDesc: 'Membantu orang lain bertumbuh dan menjadi versi terbaik dirinya.',
      enDesc: 'Help people grow and become their best.',
      icon: Sprout,
    },
    {
      letter: 'A',
      title: 'ACT',
      idDesc: 'Mengubah niat baik menjadi tindakan yang bermakna.',
      enDesc: 'Turn good intentions into meaningful actions.',
      icon: Zap,
    },
    {
      letter: 'S',
      title: 'SERVE',
      idDesc: 'Menciptakan nilai yang bermakna bagi pelanggan, masyarakat dan lingkungan.',
      enDesc: 'Create meaningful value for customers, society and environment.',
      icon: Users,
    },
    {
      letter: 'I',
      title: 'INNOVATE',
      subKey: 'I2',
      titleUnique: 'INNOVATE',
      idDesc: 'Menemukan cara yang lebih baik untuk menciptakan nilai yang lebih besar.',
      enDesc: 'Find better ways to create greater value.',
      icon: Lightbulb,
    },
    {
      letter: 'H',
      title: 'HARMONIZE',
      idDesc: 'Bertumbuh selaras dengan manusia dan bumi.',
      enDesc: 'Grow in harmony with people and the earth.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="visi-misi" className="py-24 md:py-32 bg-stone-50/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-3">
            <span>Arah &amp; Fondasi</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">Purpose, Visi, dan Misi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Fondasi Keberadaan dan Kompas Masa Depan KINAI
          </h2>
        </div>

        {/* Purpose & Visi - Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Purpose Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-stone-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-emerald-700/30 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                    Purpose
                  </span>
                  <span className="text-xs text-stone-400">Why We Exist</span>
                </div>
              </div>

              <p className="text-xl sm:text-2xl font-semibold text-stone-900 leading-snug mb-6 text-balance">
                &ldquo;Membuat kehidupan menjadi lebih baik, menciptakan nilai yang bermakna, dan memberikan dampak yang berkelanjutan.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <p className="text-xs sm:text-sm text-stone-500 italic">
                &ldquo;To make lives better, create meaningful value, and make a lasting impact.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Visi Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-stone-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-emerald-700/30 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                    Visi
                  </span>
                  <span className="text-xs text-stone-400">Where We Are Going</span>
                </div>
              </div>

              <p className="text-lg sm:text-xl font-medium text-stone-900 leading-relaxed mb-6">
                &ldquo;Menjadi grup perusahaan global terdepan yang senantiasa menjadikan hari ini lebih baik daripada kemarin, dengan bertumbuh bersama KINASIH, menciptakan nilai bagi pelanggan, memberikan manfaat bagi masyarakat, dan menjaga kelestarian lingkungan.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <p className="text-xs sm:text-sm text-stone-500 italic leading-relaxed">
                &ldquo;To become a leading global group of companies that continuously makes today better than yesterday, by growing together with KINASIH, creating value for customers, contributing to society, and preserving the environment.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission - K.I.N.A.S.I.H Grid */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Compass className="w-4 h-4 text-[#064E3B]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                  Mission
                </span>
                <span className="text-xs text-stone-400">· How We Go to There</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Tujuh Nilai Misi: K · I · N · A · S · I · H
              </h3>
            </div>

            {/* Interactive Selector Pill alternative: Clean Segmented Bar */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto max-w-full">
              {missionItems.map((item, index) => {
                const key = item.subKey || item.letter;
                const isActive = activeLetter === key;
                return (
                  <button
                    key={`${item.title}-${index}`}
                    type="button"
                    onClick={() => setActiveLetter(key)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                      isActive
                        ? 'bg-[#064E3B] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    {item.letter} - {item.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards for all 7 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {missionItems.map((item, index) => {
              const Icon = item.icon;
              const key = item.subKey || item.letter;
              const isHighlighted = activeLetter === key;

              return (
                <div
                  key={`${item.title}-${index}`}
                  onClick={() => setActiveLetter(key)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isHighlighted
                      ? 'border-[#064E3B] bg-emerald-50/40 shadow-xs'
                      : 'border-stone-200/80 bg-stone-50/50 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-md bg-[#064E3B] text-white font-bold text-xs flex items-center justify-center">
                          {item.letter}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 tracking-wide">
                          {item.title}
                        </h4>
                      </div>
                      <Icon className={`w-4 h-4 ${isHighlighted ? 'text-[#064E3B]' : 'text-stone-400'}`} />
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {item.idDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60">
                    <p className="text-[11px] text-stone-500 italic leading-normal">
                      &ldquo;{item.enDesc}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
