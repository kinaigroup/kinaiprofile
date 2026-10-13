'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, AlertCircle, ArrowRight } from 'lucide-react';

interface FormData {
  nama: string;
  email: string;
  phone: string;
  domisili: string;
  pesan: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    email: '',
    phone: '',
    domisili: 'Indonesia',
    pesan: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!formData.nama.trim()) {
      errs.nama = 'Nama lengkap wajib diisi';
    }
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format alamat email tidak valid';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Nomor telepon wajib diisi';
    }
    if (!formData.domisili.trim()) {
      errs.domisili = 'Domisili (negara) wajib diisi';
    }
    if (!formData.pesan.trim()) {
      errs.pesan = 'Pesan pertanyaan wajib diisi';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      email: '',
      phone: '',
      domisili: 'Indonesia',
      pesan: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="kontak" className="py-24 md:py-32 bg-stone-50/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Correspondence */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-3">
              <span>Hubungi Kami</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500 font-normal">Pertanyaan &amp; Korespondensi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
              Sampaikan Pertanyaan kepada PT KINAI
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              Apakah Anda memiliki pertanyaan seputar grup usaha, lini manufaktur garmen, makanan &amp; minuman, energi, atau konsultansi data dan operasional? Silakan kirimkan pertanyaan Anda melalui formulir resmi ini.
            </p>

            {/* Official Correspondence Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Email Resmi
                  </h4>
                  <a
                    href="mailto:kinaigroup.id@gmail.com"
                    className="text-base font-semibold text-stone-900 hover:text-[#064E3B] transition-colors"
                  >
                    kinaigroup.id@gmail.com
                  </a>
                  <p className="text-xs text-stone-500 mt-1">
                    Korespondensi grup perusahaan PT Kincir Angin Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-emerald-50/50 border border-emerald-900/10">
              <p className="text-xs text-[#064E3B] font-medium leading-relaxed">
                Setiap pesan akan ditinjau secara saksama oleh tim representatif PT KINAI sesuai dengan bidang yang Anda tanyakan.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#064E3B] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    Pertanyaan Berhasil Terkirim
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed mb-6">
                    Terima kasih telah menghubungi PT KINAI, <strong>{formData.nama}</strong>. Kami telah menerima pertanyaan Anda dan akan menindaklanjutinya ke alamat email <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#064E3B] bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700"
                  >
                    <span>Kirim Pertanyaan Lain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1">
                      Formulir Pertanyaan &amp; Kontak
                    </h3>
                    <p className="text-xs text-stone-500">
                      Lengkapi data di bawah ini untuk memulai komunikasi dengan KINAI.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nama Lengkap */}
                    <div>
                      <label htmlFor="nama" className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="nama"
                        type="text"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors ${
                          errors.nama ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.nama && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.nama}</span>
                        </p>
                      )}
                    </div>

                    {/* Alamat Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Alamat Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors ${
                          errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nomor Telepon / Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812-xxxx-xxxx"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors ${
                          errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Domisili (Negara) */}
                    <div>
                      <label htmlFor="domisili" className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Domisili (Negara) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="domisili"
                        type="text"
                        value={formData.domisili}
                        onChange={(e) => setFormData({ ...formData, domisili: e.target.value })}
                        placeholder="Contoh: Indonesia, Singapura, Jepang"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors ${
                          errors.domisili ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.domisili && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.domisili}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label htmlFor="pesan" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Pesan Pertanyaan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="pesan"
                      rows={4}
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      placeholder="Tuliskan pertanyaan atau topik yang ingin Anda tanyakan kepada grup KINAI..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 transition-colors resize-y ${
                        errors.pesan ? 'border-red-400 ring-1 ring-red-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.pesan && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.pesan}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#064E3B] hover:bg-[#053d2e] active:scale-[0.99] rounded-lg shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Mengirimkan Pesan...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan Pertanyaan</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-stone-400 mt-3">
                      Data Anda hanya digunakan untuk kepentingan korespondensi resmi dengan PT KINAI.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
