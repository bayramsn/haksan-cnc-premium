import React from 'react';
import { PROMO_PRODUCTS, SECOND_HAND } from '../data';

export default function Featured() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Öne Çıkanlar</span>
            </div>
            <h2 className="text-3xl lg:text-[44px] font-bold text-gray-900 leading-tight">
              Kampanyalı <span className="text-navy">Ürünler</span>
            </h2>
          </div>
          <a href="/kategori" className="text-navy font-semibold text-sm hover:text-gold transition-colors inline-flex items-center gap-2">
            Tümünü Gör <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {PROMO_PRODUCTS.slice(0, 8).map((p, i) => (
            <a key={i} href="#"
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-navy/15 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square p-5 relative">
                <img src={p.img} alt={p.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy" />
                <span className="absolute top-3 left-3 bg-gold text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Kampanya</span>
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-gray-900 font-semibold text-xs group-hover:text-navy transition-colors line-clamp-2 min-h-[28px]">{p.name}</h3>
                <span className="text-navy text-[11px] font-bold mt-1 inline-block">İncele →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Second hand banner */}
        <div className="mt-10 bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏷️</span>
            <div>
              <h3 className="text-white font-bold text-xl">İkinci El Ürünler</h3>
              <p className="text-white/50 text-sm">Kaliteyi uygun fiyatlarla keşfedin</p>
            </div>
          </div>
          <a href="/ikinciel"
            className="px-6 py-3 bg-white text-gray-900 font-semibold text-sm rounded-lg hover:bg-gold hover:text-white transition-all">
            Ürünleri Keşfet →
          </a>
        </div>
      </div>
    </section>
  );
}
