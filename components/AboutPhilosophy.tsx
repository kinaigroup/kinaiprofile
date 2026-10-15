'use client';

import React from 'react';
import { Wind, Compass, Sparkles, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPhilosophy() {
  const philosophyAspects = [
    {
      title: 'Angin: Perubahan & Peluang',
      desc: 'Melambangkan dinamika perubahan dan peluang yang seringkali tidak kasat mata, namun menyimpan daya yang luar biasa.',
      icon: Wind,
    },
    {
      title: 'Kincir: Manusia yang Bergerak',
      desc: 'Melambangkan manusia (KINASIH) yang terus bergerak aktif, berikhtiar, dan mengubah tantangan menjadi sesuatu yang bermanfaat.',
      icon: Compass,
    },
    {
      title: 'Energi Bermanfaat bagi Kehidupan',
      desc: 'Mewujudkan hasil nyata di mana potensi ditransformasikan menjadi nilai, solusi, dan dampak positif bagi masyarakat luas.',
      icon: Sparkles,
    },
    {
      title: 'Indonesia Menuju Panggung Global',
      desc: 'Dibangun dengan akar yang kuat di tanah air, dengan tekad dan kesiapan untuk bertumbuh serta berkontribusi di kancah dunia.',
      icon: Globe2,
    },
  ];

  return (
    <section id="tentang" className="py-24 md:py-32 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-3">
            TENTANG &amp; FILOSOFI
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Filosofi Kincir Angin: Mengubah Dinamika Menjadi Value dan Manfaat
          </h2>
        </div>

        {/* Philosophy Main Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Quote Block with deep forest container */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-[#064E3B] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            {/* Subtle background motif */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border border-emerald-500/20 pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-emerald-400/10 pointer-events-none" />

            <div>
              <div className="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
                Makna Filosofi Nama
              </div>
              <blockquote className="text-lg sm:text-xl font-normal leading-relaxed text-emerald-50 space-y-4">
                <p>
                  &ldquo;KINAI terinspirasi dari kincir angin. Kincir Angin akan mengubah apa yang
                  dimiliki oleh Angin menjadi energi yang sangat bermanfaat untuk manusia.&rdquo;
                </p>
                <p className="text-base text-emerald-100/90 leading-relaxed font-light">
                  Angin melambangkan perubahan dan peluang yang seringkali tidak bisa terlihat,
                  dan kincir angin melambangkan manusia yang terus bergerak untuk mengubah
                  tantangan tersebut menjadi sesuatu yang bermanfaat.
                </p>
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-800/80">
              <p className="text-sm text-emerald-100 leading-relaxed">
                Dibangun di Indonesia dan bertumbuh menuju dunia, KINAI percaya bahwa melalui
                pertumbuhan bersama <strong className="font-semibold text-white">KINASIH</strong>,
                setiap potensi yang terus bergerak dapat menjadi kekuatan untuk menciptakan nilai
                dan menjadikan kehidupan lebih baik untuk siapapun.
              </p>
            </div>
          </motion.div>

          {/* About Company Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 rounded-2xl bg-stone-50 border border-stone-200/80 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="text-[#064E3B] text-xs font-semibold uppercase tracking-wider mb-3">
                Tentang Perusahaan
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-5">
                Ekosistem Bisnis yang Saling Terhubung
              </h3>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  KINAI adalah grup perusahaan yang bergerak di berbagai bidang, meliputi
                  manufaktur garmen (<em>garment manufacturing</em>), manufaktur makanan dan
                  minuman (<em>food and beverage manufacturing</em>), energi, serta konsultan
                  data dan operasional.
                </p>
                <p>
                  Melalui keberagaman bidang usaha tersebut, KINAI membangun ekosistem bisnis yang
                  saling terhubung untuk menciptakan peluang, mengembangkan solusi, dan
                  menghadirkan nilai bagi pelanggan serta masyarakat.
                </p>
                <p>
                  KINAI memandang kemajuan tidak hanya diukur melalui pertumbuhan bisnis semata,
                  tetapi juga melalui nilai yang diciptakan, kehidupan yang diperbaiki, dan dampak
                  yang ditinggalkan.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-[#064E3B]">Slogan Perusahaan</span>
              <span className="italic text-stone-700 font-medium">
                &ldquo;Grow Together, Better Every Day&rdquo;
              </span>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of the Windmill Philosophy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyAspects.map((aspect) => {
            const Icon = aspect.icon;
            return (
              <div
                key={aspect.title}
                className="p-6 rounded-xl bg-white border border-stone-200/80 hover:border-emerald-700/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#064E3B] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-stone-900 mb-2">
                  {aspect.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {aspect.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
