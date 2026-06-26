import React from 'react';
import { ABOUT_IMG } from '../data';

const items = [
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, title: '1972\'den Bugüne', desc: 'Yarım asrı aşkın tecrübemizle güvenilir çözüm ortağınız.' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Yenilik ve Güven', desc: 'Teknolojik gelişmeleri takip eden genç ekibimizle yanınızdayız.' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Uygun Çözümler', desc: 'Güçlü finansal yapımızla sürdürülebilir çözümler sunuyoruz.' },
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Neden Biz?</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-ink leading-tight mb-10">
              Neden Bizi <span className="text-accent">Tercih Etmelisiniz?</span>
            </h2>
            <div className="space-y-5">
              {items.map((f, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">{f.icon}</div>
                  <div>
                    <h3 className="text-ink font-semibold text-base mb-1">{f.title}</h3>
                    <p className="text-ink-secondary text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={ABOUT_IMG} alt="Haksan Makina" className="rounded-2xl shadow-xl w-full" loading="lazy" />
            <div className="absolute -bottom-5 -left-5 bg-accent text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-white/80 text-xs">Yıllık Tecrübe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
