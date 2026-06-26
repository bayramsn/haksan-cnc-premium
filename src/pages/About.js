import React from 'react';
import { ABOUT_IMG, ABOUT_GALLERY, COMPANY_INFO } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

const timeline = [
  { year: '1972', title: 'Kuruluş', desc: 'Haksan Makina, İstanbul\'da kuruldu.' },
  { year: '1990', title: 'Genişleme', desc: 'CNC teknolojilerine geçiş ve ürün yelpazesinin genişletilmesi.' },
  { year: '2010', title: 'Dijital Dönüşüm', desc: 'Endüstri 4.0 ve dijital üretim teknolojilerinin benimsenmesi.' },
  { year: '2024', title: 'Bugün', desc: '3 showroom, 50+ çalışan ve 6000+ mutlu müşteri.' },
];

const features = [
  { num: '01', title: '1972\'den Bugüne', desc: 'Yarım asrı aşkın tecrübemizle güvenilir çözüm ortağınız.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { num: '02', title: 'Yenilik ve Güven', desc: 'Teknolojik gelişmeleri takip eden genç ekibimizle yanınızdayız.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { num: '03', title: 'Uygun Çözümler', desc: 'Güçlü finansal yapımızla sürdürülebilir çözümler sunuyoruz.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const stats = [
  { value: '6,000+', label: 'Mutlu Müşteri' },
  { value: '50+', label: 'Yıllık Tecrübe' },
  { value: '3', label: 'Showroom' },
  { value: '50+', label: 'Uzman Çalışan' },
  { value: '201-500', label: 'Çalışan Sayısı' },
  { value: '15+', label: 'Global Marka' },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="Haksan Makina" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Hakkımızda</span>
            <h1 className="text-5xl lg:text-[80px] font-black text-white leading-[0.95] tracking-tight mb-6">
              Haksan <span className="text-primary">Makina</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              {COMPANY_INFO.tagline} — 1972'den beri endüstriyel sektöründe faaliyet gösteriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-28 lg:py-36">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-left">
              <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase block mb-4">Vizyon & Misyon</span>
              <h2 className="text-3xl lg:text-[44px] font-bold text-secondary leading-[1.1] mb-8">
                Geleceği <span className="text-primary">İnşa Ediyoruz</span>
              </h2>
              <div className="space-y-5 text-text text-[15px] leading-relaxed">
                <p><strong className="text-secondary">Vizyon:</strong> Sektörde yenilikçi teknolojiler ve çözümlerle global ölçekte lider bir firma olmak; kaliteli ürün, güvenilir hizmet ve sürdürülebilir projelerle üretim ekosistemine yön vermek.</p>
                <p><strong className="text-secondary">Misyon:</strong> Yarım asrı aşan tecrübemizi, genç ve dinamik ekibimizle birleştirerek iş ortaklarımıza yüksek teknolojiye dayalı, verimliliği artıran, güvenilir çözümler sunmak.</p>
              </div>
            </div>
            <div className="reveal-right relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-2xl" />
              <img src={ABOUT_IMG} alt="Haksan Makina" className="relative rounded-2xl shadow-2xl w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="reveal text-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">{s.value}</div>
                <div className="text-white/40 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 lg:py-36">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase block mb-4">Tarihçe</span>
            <h2 className="text-3xl lg:text-[44px] font-bold text-secondary">Yolculuğumuz</h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />
            {timeline.map((item, i) => (
              <div key={i} className="reveal relative pl-20 pb-12 last:pb-0" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="absolute left-6 top-1 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg" />
                <span className="text-primary font-mono text-[11px] font-bold tracking-wider">{item.year}</span>
                <h3 className="text-secondary font-bold text-lg mt-1 mb-1">{item.title}</h3>
                <p className="text-text text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 lg:py-36 bg-surface">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase block mb-4">Avantajlarımız</span>
            <h2 className="text-3xl lg:text-[44px] font-bold text-secondary">Neden Bizi <span className="text-primary">Tercih Etmelisiniz?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="reveal card-3d p-8 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-400"
                style={{ animationDelay: `${i * 150}ms` }}>
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <span className="text-primary font-mono text-[11px] font-bold">{f.num}</span>
                <h3 className="text-secondary font-bold text-lg mt-2 mb-3">{f.title}</h3>
                <p className="text-text text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase block mb-4">Galeri</span>
            <h2 className="text-3xl lg:text-[44px] font-bold text-secondary">Fabrikamızdan <span className="text-primary">Görüntüler</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ABOUT_GALLERY.map((img, i) => (
              <div key={i} className="reveal rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                style={{ animationDelay: `${i * 80}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
