import React from 'react';
import { SECOND_HAND, PROMO_PRODUCTS } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

const allItems = [...SECOND_HAND, { name: 'SL-8 CNC Torna', img: PROMO_PRODUCTS[11]?.img, brand: 'Haksan', model: 'SL-8' }, { name: 'MT-208/500 CNC Torna', img: PROMO_PRODUCTS[0]?.img, brand: 'Haksan', model: 'MT-208' }, { name: 'VC-760 EZ CNC Dik İşleme', img: PROMO_PRODUCTS[8]?.img, brand: 'Manford', model: 'VC-760' }];

export default function SecondHandPage() {
  useScrollReveal();
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Fırsat Ürünleri</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">İkinci El <span className="text-primary">Ürünler</span></h1>
          <p className="text-white/50 text-lg">Kaliteyi uygun fiyatlarla keşfedin.</p>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allItems.map((item, i) => (
              <div key={i} className="reveal card-3d bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-400" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[16/10] bg-white p-6 relative">
                  {item.img ? <img src={item.img} alt={item.name} className="w-full h-full object-contain" loading="lazy" /> : <div className="w-full h-full flex items-center justify-center text-text/20"><svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div>}
                  <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Fırsat</span>
                </div>
                <div className="p-5">
                  <h3 className="text-secondary font-bold mb-2">{item.name}</h3>
                  <div className="flex gap-4 text-sm text-text mb-4"><span><span className="font-semibold text-secondary">Marka:</span> {item.brand}</span><span><span className="font-semibold text-secondary">Model:</span> {item.model}</span></div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">Ürünü İncele <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
