import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data';

export default function Categories() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Ürünlerimiz</span>
          <h2 className="text-3xl lg:text-[42px] font-bold text-ink leading-tight">
            İhtiyacınıza Uygun <span className="text-accent">Çözümler</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Link key={i} to={`/kategori/${cat.slug}`}
              className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/10] bg-surface-muted p-5 flex items-center justify-center">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4 border-t border-border-light">
                <h3 className="text-ink font-semibold text-sm group-hover:text-accent transition-colors">{cat.name}</h3>
                <span className="text-ink-muted text-xs mt-1 block">{cat.products.length} ürün serisi</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
