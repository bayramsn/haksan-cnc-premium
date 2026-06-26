import React from 'react';
import { SLIDES, COMPANY_INFO } from '../data';

export default function VideoSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background - using the 4th slide (5 Eksen) */}
      <div className="absolute inset-0">
        <img src={SLIDES[3].desktop} alt="" className="w-full h-full object-cover hidden md:block" />
        <img src={SLIDES[3].mobile} alt="" className="w-full h-full object-cover md:hidden" />
      </div>
      <div className="absolute inset-0 video-overlay" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <div className="reveal-left">
            <span className="text-white/60 text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Vizyonumuz</span>
            <h2 className="text-3xl lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Üretimin<br />
              <span className="text-primary">Geleceğini</span> İnşa Ediyoruz
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              {COMPANY_INFO.tagline} olarak, en son CNC teknolojileriyle üretim çözümleri sunuyoruz.
            </p>

            {/* Specs from LinkedIn post */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['20.000 RPM Spindle', '5 Eksen Simultane', 'Yüksek Hassasiyet'].map((spec, i) => (
                <span key={i} className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full">
                  {spec}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/kategori"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full text-sm hover:shadow-[0_8px_30px_rgba(207,6,12,0.4)] transition-all duration-300">
                Ürünleri Keşfet
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/hakkimizda"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Hakkımızda
              </a>
            </div>
          </div>

          {/* Right - stats */}
          <div className="reveal-right">
            <div className="glass rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-white font-bold text-lg mb-6">Şirket Bilgileri</h3>
              <div className="space-y-4">
                {[
                  { label: 'Slogan', value: COMPANY_INFO.tagline },
                  { label: 'Sektör', value: COMPANY_INFO.industry },
                  { label: 'Konum', value: COMPANY_INFO.location },
                  { label: 'Çalışan', value: COMPANY_INFO.employees },
                  { label: 'Kuruluş', value: COMPANY_INFO.founded },
                  { label: 'LinkedIn Takipçi', value: COMPANY_INFO.linkedinFollowers },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.06] last:border-0">
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-white font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
