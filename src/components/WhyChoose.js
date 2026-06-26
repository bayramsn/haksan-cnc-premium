import React from 'react';
import { ABOUT_IMG } from '../data';

const items = [
  { num: '01', title: '1972\'den Bugüne', desc: 'Yarım asrı aşkın tecrübemizle güvenilir çözüm ortağınız.' },
  { num: '02', title: 'Yenilik ve Güven', desc: 'Teknolojik gelişmeleri takip eden genç ekibimizle yanınızdayız.' },
  { num: '03', title: 'Uygun Çözümler', desc: 'Güçlü finansal yapımızla sürdürülebilir çözümler sunuyoruz.' },
];

const stats = [
  { value: '6000+', label: 'Mutlu Müşteri' },
  { value: '50+', label: 'Yıllık Tecrübe' },
  { value: '3', label: 'Showroom' },
  { value: '15+', label: 'Global Marka' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Neden Bizi <span className="text-navy">Tercih Etmelisiniz?</span>
            </h2>
            <div className="space-y-5">
              {items.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <span className="text-gold font-bold text-sm mt-0.5">{f.num}</span>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-base mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-navy">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src={ABOUT_IMG} alt="Haksan Makina" className="rounded-xl shadow-lg w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
