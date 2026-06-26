import React from 'react';
import { REFERENCES } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

export default function References() {
  useScrollReveal();
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Referanslar</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">Güvenle Çalıştığımız <span className="text-primary">Markalar</span></h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">6000'den fazla müşterimizle gurur duyuyoruz.</p>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {REFERENCES.map((ref, i) => (
              <div key={i} className="reveal card-3d bg-surface rounded-2xl p-6 flex items-center justify-center hover:shadow-lg border border-border transition-all duration-400 aspect-square" style={{ animationDelay: `${i * 30}ms` }}>
                <img src={ref.img} alt={ref.name} className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
