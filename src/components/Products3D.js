import React from 'react';
import { PROMO_PRODUCTS } from '../data';

export default function Products3D() {
  return (
    <section className="py-28 lg:py-36 bg-surface overflow-hidden relative">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Kampanyalar</span>
            </div>
            <h2 className="text-3xl lg:text-[48px] font-bold text-secondary leading-[1.05] tracking-tight">
              Kampanyalı <span className="text-primary">Ürünler</span>
            </h2>
          </div>
          <a href="/kategori" className="reveal text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-2 group">
            Tümünü Gör
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
          {PROMO_PRODUCTS.slice(0, 8).map((p, i) => (
            <a key={i} href="/kategori"
              className="reveal card-3d group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-400"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="aspect-square bg-surface p-5 relative overflow-hidden">
                <img src={p.img} alt={p.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy" />
                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  Kampanya
                </span>
              </div>
              <div className="p-4 text-center border-t border-border">
                <h3 className="text-secondary font-medium text-[13px] group-hover:text-primary transition-colors line-clamp-2 min-h-[32px]">
                  {p.name}
                </h3>
                <span className="text-primary text-[11px] font-semibold mt-1.5 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  İncele
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Second hand banner */}
        <div className="reveal mt-12 bg-secondary rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="relative flex items-center gap-5">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12.7V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">İkinci El Ürünler</h3>
              <p className="text-white/50 text-sm">Kaliteyi uygun fiyatlarla keşfedin</p>
            </div>
          </div>
          <a href="/ikinciel"
            className="relative px-8 py-3.5 bg-white text-secondary font-semibold text-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/30">
            Ürünleri Keşfet →
          </a>
        </div>
      </div>
    </section>
  );
}
