import React from 'react';

const techs = [
  { title: '5 Eksen İşleme', desc: 'Karmaşık geometrilerde hassas üretim.', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: 'bg-primary' },
  { title: 'CNC Torna', desc: 'Yüksek hassasiyetli döner parça üretimi.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1', color: 'bg-secondary' },
  { title: 'Tapping Center', desc: 'Hızlı ve hassas diş açma işlemleri.', icon: 'M13 10V3L4 14h7v7l9-12h-7z', color: 'bg-primary' },
  { title: 'Köprü Tipi', desc: 'Büyük parçalar için geniş işleme alanı.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5', color: 'bg-secondary' },
];

export default function Technologies() {
  return (
    <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Teknolojiler</span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-bold text-secondary leading-[1.1]">
            CNC <span className="text-primary">Teknolojilerimiz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <div key={i} className="reveal group card-3d p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-400 text-center"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center ${tech.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={tech.icon} />
                </svg>
              </div>
              <h3 className="text-secondary font-bold text-base mb-2">{tech.title}</h3>
              <p className="text-text text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
