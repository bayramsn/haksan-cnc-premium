import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const benefits = [
  { icon: '📈', title: 'Kariyer Gelişimi', desc: 'Sürekli eğitim ve yükselme fırsatları' },
  { icon: '🏥', title: 'Sağlık Sigortası', desc: 'Tam kapsamlı özel sağlık sigortası' },
  { icon: '🏖️', title: 'İzin Hakları', desc: 'Yıllık izin ve ek tatil imkanları' },
  { icon: '🎯', title: 'Performans Primi', desc: 'Başarıya dayalı prim sistemi' },
  { icon: '🚗', title: 'Servis Aracı', desc: 'Görev servis imkanı' },
  { icon: '🍽️', title: 'Yemek Desteği', desc: 'Günlük yemek yardımı' },
];

const positions = [
  { title: 'CNC Satış Mühendisi', department: 'Satış', location: 'İstanbul', type: 'Tam Zamanlı' },
  { title: 'Teknik Servis Teknisyeni', department: 'Teknik Servis', location: 'İstanbul', type: 'Tam Zamanlı' },
  { title: 'Muhasebe Uzmanı', department: 'Finans', location: 'İstanbul', type: 'Tam Zamanlı' },
  { title: 'Pazarlama Uzmanı', department: 'Pazarlama', location: 'İstanbul', type: 'Tam Zamanlı' },
];

export default function Career() {
  useScrollReveal();
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Kariyer</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">Haksan <span className="text-primary">Ailesine</span> Katılın</h1>
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
          <h3 className="text-2xl font-bold text-secondary mb-8">Açık Pozisyonlar</h3>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <div key={i} className="reveal flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300" style={{ animationDelay: `${i * 80}ms` }}>
                <div>
                  <h4 className="text-secondary font-bold text-lg">{pos.title}</h4>
                  <div className="flex gap-4 text-sm text-text mt-1">
                    <span>{pos.department}</span><span>{pos.location}</span><span className="text-primary font-medium">{pos.type}</span>
                  </div>
                </div>
                <a href="/iletisim" className="mt-4 sm:mt-0 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors">Başvur</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
