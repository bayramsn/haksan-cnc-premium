import React from 'react';
import { REFERENCES, COMPANY_INFO } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

const benefits = [
  { icon: '🔧', title: 'Teknik Destek', desc: '7/24 uzman teknik destek.' },
  { icon: '📦', title: 'Yedek Parça', desc: 'Hızlı yedek parça tedariki.' },
  { icon: '🎓', title: 'Eğitim', desc: 'Operatör eğitimleri.' },
  { icon: '🚛', title: 'Kurulum', desc: 'Profesyonel kurulum.' },
  { icon: '💰', title: 'Finansman', desc: 'Uygun finansman seçenekleri.' },
  { icon: '🛡️', title: 'Garanti', desc: 'Resmi üretici garantisi.' },
];

export default function Dealerships() {
  useScrollReveal();
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Distribütörlükler</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">
            Global Markaların <span className="text-primary">Distribütörü</span>
          </h1>
          <p className="text-white/50 text-lg">{COMPANY_INFO.linkedinFollowers}+ LinkedIn takipçisi ile güvenilir çözüm ortağınız.</p>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {benefits.map((b, i) => (
              <div key={i} className="reveal card-3d p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-3xl mb-3 block">{b.icon}</span>
                <h3 className="text-secondary font-bold mb-1">{b.title}</h3>
                <p className="text-text text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-secondary mb-8 text-center">Distribütörü Olduğumuz Markalar</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {REFERENCES.slice(0, 12).map((ref, i) => (
              <div key={i} className="reveal bg-surface border border-border rounded-xl p-4 flex items-center justify-center hover:shadow-md transition-all aspect-square" style={{ animationDelay: `${i * 30}ms` }}>
                <img src={ref.img} alt={ref.name} className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
