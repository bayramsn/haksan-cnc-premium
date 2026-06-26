import React from 'react';

const services = [
  { icon: '🔧', title: 'Teknik Servis', desc: '7/24 uzman teknik destek ve periyodik bakım hizmeti.' },
  { icon: '📦', title: 'Yedek Parça', desc: 'Hızlı ve güvenilir yedek parça tedarik hizmeti.' },
  { icon: '🎓', title: 'Eğitim', desc: 'Operatör ve bakım eğitimleri ile verimliliği artırın.' },
  { icon: '🚛', title: 'Kurulum', desc: 'Profesyonel kurulum ve devreye alma hizmeti.' },
  { icon: '💰', title: 'Finansman', desc: 'Uygun vadeli finansman seçenekleri.' },
  { icon: '🛡️', title: 'Garanti', desc: 'Resmi üretici garantisi ve güvence.' },
];

export default function Services() {
  return (
    <section className="py-28 lg:py-36 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary/40" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Hizmetlerimiz</span>
            <div className="w-10 h-[2px] bg-primary/40" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-bold text-white leading-[1.1]">
            Satış Sonrası <span className="text-primary">Hizmetler</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Her zaman yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="reveal glass rounded-2xl p-7 border border-white/[0.06] hover:border-primary/20 transition-all duration-300 group"
              style={{ animationDelay: `${i * 100}ms` }}>
              <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
