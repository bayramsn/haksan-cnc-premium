import React from 'react';
import { ABOUT_IMG } from '../data';

const items = [
  { num: '01', title: '1972\'den Bugüne', desc: 'Yarım asrı aşkın tecrübemizle güvenilir çözüm ortağınız. Sektördeki deneyimimizle her projede yanınızdayız.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { num: '02', title: 'Yenilik ve Güven', desc: 'Teknolojik gelişmeleri takip eden genç ekibimizle en güncel çözümleri sunuyoruz. Satış sonrası destek her zaman yanınızda.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { num: '03', title: 'Uygun Çözümler', desc: 'Güçlü finansal yapımız ve uzun vadeli planlama kapasitemizle, sürdürülebilir ve güvenilir çözümler sunuyoruz.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

export default function Features3D() {
  return (
    <section className="py-28 lg:py-36 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="reveal-left relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-2xl" />
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/10 rounded-full animate-rotate-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                <img src={ABOUT_IMG} alt="Haksan Makina" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute top-6 left-6 glass px-5 py-3 rounded-xl animate-float">
                  <div className="text-white font-bold text-xl">50+</div>
                  <div className="text-white/50 text-[11px]">yıllık tecrübe</div>
                </div>

                {/* Quality badge */}
                <div className="absolute bottom-6 right-6 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm animate-pulse-glow shadow-lg shadow-primary/30">
                  Kalite Garantisi
                </div>

                {/* Decorative dots */}
                <div className="absolute top-6 right-6 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="reveal-right order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Neden Biz?</span>
            </div>
            <h2 className="text-3xl lg:text-[48px] font-bold text-secondary leading-[1.1] tracking-tight mb-10">
              Neden Bizi<br />
              <span className="text-primary">Tercih Etmelisiniz?</span>
            </h2>

            <div className="space-y-5">
              {items.map((f, i) => (
                <div key={i} className="reveal group flex gap-5 p-5 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg hover:bg-surface transition-all duration-400"
                  style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-primary font-mono text-[11px] font-bold mb-1 tracking-wider">{f.num}</div>
                    <h3 className="text-secondary font-bold text-[15px] mb-1 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-text text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
