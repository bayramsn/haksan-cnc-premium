import React from 'react';
import { PROMO_PRODUCTS } from '../data';

export default function Products() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Kampanyalar</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-ink leading-tight">Kampanyalı <span className="text-accent">Ürünler</span></h2>
          </div>
          <a href="/kategori" className="text-accent font-semibold text-sm hover:text-accent-dark transition-colors cursor-pointer">Tümünü Gör →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {PROMO_PRODUCTS.slice(0, 8).map((p, i) => (
            <a key={i} href="#" className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-square bg-surface-muted p-4 relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <span className="absolute top-2.5 left-2.5 bg-accent text-white text-[10px] font-semibold px-2 py-0.5 rounded">Kampanya</span>
              </div>
              <div className="p-3.5 text-center border-t border-border-light">
                <h3 className="text-ink font-medium text-xs group-hover:text-accent transition-colors line-clamp-2 min-h-[28px]">{p.name}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 bg-primary-dark rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">İkinci El Ürünler</h3>
            <p className="text-white/50 text-sm">Kaliteyi uygun fiyatlarla keşfedin</p>
          </div>
          <a href="/ikinciel" className="px-6 py-3 bg-white text-primary-dark font-semibold text-sm rounded-lg hover:bg-accent hover:text-white transition-all cursor-pointer">Ürünleri Keşfet →</a>
        </div>
      </div>
    </section>
  );
}
