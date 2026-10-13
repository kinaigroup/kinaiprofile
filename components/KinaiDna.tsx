'use client';

import React, { useState } from 'react';
import { Heart, TreePine, Smile, UserCheck, Shield, Eye, Award, HeartHandshake, Rocket, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function KinaiDna() {
  const [selectedPillar, setSelectedPillar] = useState<'within' | 'with' | 'beyond'>('within');

  const dnaPillars = [
    {
      id: 'within',
      title: 'WITHIN',
      taglineId: 'Bangun siapa dirimu.',
      taglineEn: 'Build who you are.',
      letters: [
        {
          letter: 'K',
          word: 'KNOW',
          idText: 'Mengenal diri sendiri, Tuhan, lingkungan, dan apa yang seharusnya dilakukan.',
          enText: 'Know yourself, know your God, understand your surroundings, and know what you should do.',
          icon: UserCheck,
        },
        {
          letter: 'I',
          word: 'INTEGRITY',
          idText: 'Melakukan hal yang benar, bahkan ketika tidak ada yang melihat.',
          enText: 'Do what is right, even when no one is watching.',
          icon: Shield,
        },
      ],
    },
    {
      id: 'with',
      title: 'WITH',
      taglineId: 'Berikan nilai kepada sesama.',
      taglineEn: 'Bring value to others.',
      letters: [
        {
          letter: 'N',
          word: 'NOTICE',
          idText: 'Memperhatikan satu sama lain dan memahami kebutuhan orang lain.',
          enText: 'Notice one another and understand what others need.',
          icon: Eye,
        },
        {
          letter: 'A',
          word: 'APPRECIATE',
          idText: 'Menghargai setiap usaha, kontribusi, dan keberanian untuk mencoba, bahkan ketika gagal.',
          enText: 'Appreciate every effort, every contribution, and every courage to try—even when it fails.',
          icon: Award,
        },
        {
          letter: 'R',
          word: 'RESPECT',
          idText: 'Menghormati setiap orang dan setiap kontribusi.',
          enText: 'Honor every person and every contribution.',
          icon: HeartHandshake,
        },
      ],
    },
    {
      id: 'beyond',
      title: 'BEYOND',
      taglineId: 'Melangkah melampaui apa yang ada di hadapanmu.',
      taglineEn: 'Rise to what lies ahead.',
      letters: [
        {
          letter: 'I',
          word: 'INITIATE',
          idText: 'Mengambil tanggung jawab dan berani memulai.',
          enText: 'Take ownership and start.',
          icon: Rocket,
        },
        {
          letter: 'A',
          word: 'AGILE',
          idText: 'Belajar dengan cepat, merespons dengan bijak, dan beradaptasi terhadap tantangan.',
          enText: 'Learn fast, respond wisely, and adapt to challenges.',
          icon: Zap,
        },
      ],
    },
  ];

  return (
    <section id="dna" className="py-24 md:py-32 bg-stone-50/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-3">
            <span>Identitas &amp; Nilai Luhur</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500 font-normal">People &amp; DNA KINAI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            KINASIH &amp; KINARIA: Bertumbuh untuk Memberi Manfaat
          </h2>
        </div>

        {/* 1. People Section: KINASIH */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white border border-stone-200/90 p-8 sm:p-12 mb-16 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                    Insan KINAI
                  </span>
                  <h3 className="text-2xl font-bold text-stone-900">
                    KINASIH
                  </h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-stone-700">
                &ldquo;Orang di dalam KINAI disebut KINASIH yang berarti orang yang terkasih.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-stone-200 lg:pl-10">
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
                Secara lebih mendalam, <strong className="font-semibold text-stone-900">KINASIH</strong> adalah manusia yang dihargai martabatnya, ditumbuhkan potensinya, dan didorong untuk menghadirkan kebaikan serta nilai bagi kehidupan.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-4 text-xs text-stone-500">
                <span>Dihargai Martabatnya</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Ditumbuhkan Potensinya</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Menghadirkan Kebaikan bagi Kehidupan</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. KINAI DNA: KINARIA Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* KINA Pillar */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-stone-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                  <TreePine className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Akar Pertama
                  </span>
                  <h4 className="text-xl font-bold text-stone-900">
                    KINA · Pohon Kina
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                KINA terinspirasi dari pohon kina, pohon yang memberikan manfaat bagi kehidupan. Pohon kina menjadi simbol bahwa pertumbuhan bukan sekadar tentang menjadi lebih besar, tinggi, atau kuat, melainkan tentang <strong>semakin berkembangnya kemampuan untuk memberikan manfaat bagi kehidupan</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Simbol pertumbuhan kapasitas kemanfaatan sejati
            </div>
          </div>

          {/* RIA Pillar */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-stone-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Akar Kedua
                  </span>
                  <h4 className="text-xl font-bold text-stone-900">
                    RIA · Bahagia &amp; Sukacita
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                RIA melambangkan kebahagiaan dan sukacita, yang tumbuh ketika kebaikan hadir, manfaat dirasakan, dan kehidupan menjadi lebih baik.
              </p>
              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                Semakin bertumbuh, semakin besar manfaat yang dapat diberikan. Dan setiap manfaat diberikan dengan penuh ketulusan dan kebahagiaan, bukan karena keterpaksaan.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Ketulusan memberi tanpa paksaan
            </div>
          </div>
        </div>

        {/* Central KINARIA Creed Banner */}
        <div className="rounded-2xl bg-[#064E3B] text-white p-8 sm:p-10 mb-16 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-xs uppercase tracking-widest font-semibold text-emerald-300 mb-2">
            DNA KINARIA
          </p>
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-emerald-50 max-w-3xl mx-auto mb-4">
            &ldquo;Sebab, pertumbuhan sejati bukan hanya tentang seberapa jauh kita berkembang, tetapi juga seberapa besar manfaat yang dapat kita hadirkan dan seberapa tulus kita menjalaninya.&rdquo;
          </p>
          <p className="text-sm font-semibold tracking-wide text-white">
            KINARIA — Bertumbuh untuk Memberi Manfaat, Memberi Manfaat dengan Bahagia.
          </p>
        </div>

        {/* 3. DNA PILLARS: WITHIN · WITH · BEYOND (K-I-N-A-R-I-A) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B] block mb-1">
              Tiga Pilar DNA (K · I · N · A · R · I · A)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Pilar DNA: WITHIN, WITH, dan BEYOND
            </h3>
          </div>

          {/* Segmented Pillar Selector for mobile/tab navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-stone-200/80 rounded-xl">
              {dnaPillars.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPillar(p.id as 'within' | 'with' | 'beyond')}
                  className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                    selectedPillar === p.id
                      ? 'bg-[#064E3B] text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* DNA Pillars Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dnaPillars.map((pillar) => {
              const isSelected = selectedPillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id as 'within' | 'with' | 'beyond')}
                  className={`rounded-2xl border p-6 sm:p-8 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#064E3B] bg-white ring-2 ring-[#064E3B]/20 shadow-sm'
                      : 'border-stone-200/90 bg-white/70 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div>
                    {/* Header of Pillar */}
                    <div className="pb-5 mb-6 border-b border-stone-100">
                      <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest block mb-1">
                        Pilar DNA
                      </span>
                      <h4 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-sm font-semibold text-stone-800 mt-1">
                        {pillar.taglineId}
                      </p>
                      <p className="text-xs text-stone-500 italic mt-0.5">
                        {pillar.taglineEn}
                      </p>
                    </div>

                    {/* Letters inside this pillar */}
                    <div className="space-y-5">
                      {pillar.letters.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.word} className="p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                            <div className="flex items-center gap-2.5 mb-2">
                              <span className="w-6 h-6 rounded-md bg-[#064E3B] text-white font-bold text-xs flex items-center justify-center">
                                {item.letter}
                              </span>
                              <span className="text-xs font-bold text-stone-900 tracking-wider">
                                {item.word}
                              </span>
                              <Icon className="w-3.5 h-3.5 text-stone-400 ml-auto" />
                            </div>
                            <p className="text-xs text-stone-700 leading-relaxed">
                              {item.idText}
                            </p>
                            <p className="text-[11px] text-stone-500 italic mt-1.5 pt-1.5 border-t border-stone-200/60">
                              &ldquo;{item.enText}&rdquo;
                            </p>
                          </div>
                        );
                      })}
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
