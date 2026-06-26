import React from 'react';

const items = [
  { name: 'Ahmet Yılmaz', company: 'Yılmaz Metal', text: 'Haksan CNC ile çalışmak işimizi büyüttü. Teknik destek ve servis kalitesi mükemmel. Her aşamada yanımızda oldular.', rating: 5 },
  { name: 'Mehmet Demir', company: 'Demir Makina', text: '10 yıldır Haksan ile çalışıyoruz. Güvenilir partner, kesinlikle tavsiye ederim. Ürün kalitesi ve satış sonrası hizmet kusursuz.', rating: 5 },
  { name: 'Fatma Kaya', company: 'Kaya Otomotiv', text: 'CNC torna tezgahlarımız Haksan\'dan. Verimlilik artışı yüzde 40\'ın üzerinde. Yatırımımızın karşılığını fazlasıyla aldık.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Referanslar</span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-[48px] font-bold text-secondary leading-[1.1] tracking-tight">
            Müşterilerimiz <span className="text-primary">Ne Diyor?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div key={i} className="reveal card-3d group relative bg-surface p-7 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-400"
              style={{ animationDelay: `${i * 150}ms` }}>
              {/* Quote mark */}
              <div className="absolute top-4 left-6 text-primary/10 text-6xl font-serif leading-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {[...Array(item.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-text text-sm leading-relaxed mb-6 relative z-10">{item.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10 pt-5 border-t border-border">
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-secondary font-semibold text-sm">{item.name}</div>
                  <div className="text-text text-xs">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
