'use client';

import React from 'react';
import { Target, Eye, Compass, Heart, Shield, Sparkles, Zap, Users, Lightbulb, Sprout } from 'lucide-react';
import { motion } from 'motion/react';

export default function PurposeVisionMission() {
  const missionItems = [
    {
      step: '01',
      letter: 'K',
      title: 'KIND',
      idDesc: 'Menjadi pribadi yang baik, melakukan kebaikan, dan melakukannya dengan cara yang baik.',
      enDesc: 'Be good, do good, and do it in a good way.',
      icon: Heart,
    },
    {
      step: '02',
      letter: 'I',
      title: 'INTEGRITY',
      idDesc: 'Melakukan hal yang benar, bahkan ketika tidak ada yang melihat.',
      enDesc: 'Do what is right, even when no one is watching.',
      icon: Shield,
    },
    {
      step: '03',
      letter: 'N',
      title: 'NURTURE',
      idDesc: 'Membantu orang lain bertumbuh dan menjadi versi terbaik dirinya.',
      enDesc: 'Help people grow and become their best.',
      icon: Sprout,
    },
    {
      step: '04',
      letter: 'A',
      title: 'ACT',
      idDesc: 'Mengubah niat baik menjadi tindakan yang bermakna.',
      enDesc: 'Turn good intentions into meaningful actions.',
      icon: Zap,
    },
    {
      step: '05',
      letter: 'S',
      title: 'SERVE',
      idDesc: 'Menciptakan nilai yang bermakna bagi pelanggan, masyarakat dan lingkungan.',
      enDesc: 'Create meaningful value for customers, society and environment.',
      icon: Users,
    },
    {
      step: '06',
      letter: 'I',
      title: 'INNOVATE',
      idDesc: 'Menemukan cara yang lebih baik untuk menciptakan nilai yang lebih besar.',
      enDesc: 'Find better ways to create greater value.',
      icon: Lightbulb,
    },
    {
      step: '07',
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
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Kompas Masa Depan KINAI
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

        {/* Mission - K.I.N.A.S.I.H Section */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-xs">
          {/* Mission Header */}
          <div className="mb-6 pb-5 border-b border-stone-100">
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-[#064E3B]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                Mission
              </span>
              <span className="text-xs text-stone-400">· How We Go to There</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Tujuh Misi KINASIH
            </h3>
          </div>

          {/* Pita Progresif 2 Baris: Row 1 KINASIH, Row 2 Kind · Integrity · dst */}
          <div className="mb-8 py-3 px-4 rounded-xl bg-stone-50 border border-stone-200/70 text-center">
            {/* Row 1: KINASIH */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mb-2">
              {['K', 'I', 'N', 'A', 'S', 'I', 'H'].map((char, i) => (
                <span
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#064E3B] text-white font-extrabold text-[15px] sm:text-base flex items-center justify-center shadow-2xs"
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Row 2: Kind · Integrity · Nurture ... */}
            <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-stone-500 font-medium">
              Kind · Integrity · Nurture · Act · Serve · Innovate · Harmonize
            </p>
          </div>

          {/* Vertical Stack: Cards Scroll Downwards Sequentially (No 4 & 3 rows) */}
          <div className="space-y-4">
            {missionItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-5 sm:p-6 rounded-xl border border-stone-200/90 bg-stone-50/40 hover:bg-white hover:border-[#064E3B]/40 hover:shadow-xs transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                    {/* Mission Header & Identifier (Col 1-4 on Desktop) */}
                    <div className="lg:col-span-4 flex items-center justify-between lg:justify-start gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-[#064E3B] text-white font-extrabold text-base flex items-center justify-center shadow-2xs shrink-0">
                          {item.letter}
                        </span>
                        <div>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400 block leading-none">
                            Mission {item.step}
                          </span>
                          <h4 className="text-base font-bold text-stone-900 tracking-wide mt-1">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <Icon className="w-4 h-4 text-[#064E3B] lg:ml-auto" />
                    </div>

                    {/* Indonesian Description (Col 5-8 on Desktop) */}
                    <div className="lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pl-6">
                      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
                        {item.idDesc}
                      </p>
                    </div>

                    {/* English Translation (Col 9-12 on Desktop) */}
                    <div className="lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pl-6">
                      <p className="text-xs sm:text-sm text-stone-500 italic leading-relaxed">
                        &ldquo;{item.enDesc}&rdquo;
                      </p>
                    </div>
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
