import React from 'react';
import { SLIDES } from '../data';

export default function ContactBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={SLIDES[1].desktop} alt="" className="w-full h-full object-cover hidden md:block" />
        <img src={SLIDES[1].mobile} alt="" className="w-full h-full object-cover md:hidden" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-lg">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-[11px] font-semibold tracking-[0.2em] uppercase">7/24 Destek</span>
            </div>
            <h3 className="text-white font-bold text-3xl lg:text-[36px] leading-tight mb-3">
              Hızlı Servis Desteği
            </h3>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Uzman ekibimiz 7/24 yanınızda. Arızalarınız için hemen bize ulaşın.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/servis-talep"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-bold text-sm rounded-full hover:shadow-[0_8px_30px_rgba(207,6,12,0.4)] transition-all duration-300">
              Servis Talep Et
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="tel:+902125673331"
              className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/15 text-white font-semibold text-sm rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bizi Arayın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
