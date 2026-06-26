import React from 'react';
import { PROMO_PRODUCTS } from '../data';

export default function PromoStrip() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Kampanyalı <span className="text-navy">Ürünler</span>
            </h2>
          </div>
          <a href="/kategori" className="text-navy font-semibold text-sm hover:text-gold transition-colors">
            Tümünü Gör →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {PROMO_PRODUCTS.slice(0, 8).map((p, i) => (
            <a key={i} href="#" className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-navy/20 hover:shadow-md transition-all duration-300">
              <div className="aspect-square bg-gray-50 p-4 relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <span className="absolute top-2 left-2 bg-gold text-white text-[9px] font-bold px-2 py-0.5 rounded">Kampanya</span>
              </div>
              <div className="p-3 text-center border-t border-gray-100">
                <h3 className="text-gray-900 text-xs font-medium group-hover:text-navy transition-colors line-clamp-2 min-h-[30px]">{p.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
