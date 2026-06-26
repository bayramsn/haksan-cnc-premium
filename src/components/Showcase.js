import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data';

export default function Showcase() {
  return (
    <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/[0.02] rounded-full blur-[80px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Kategoriler</span>
            </div>
            <h2 className="text-4xl lg:text-[52px] font-bold text-secondary leading-[1.05] tracking-tight">
              Ürün <span className="text-primary">Kategorilerimiz</span>
            </h2>
          </div>
          <Link to="/kategori" className="reveal text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-2 group">
            Tüm Ürünler
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Link key={i} to={`/kategori/${cat.slug}`}
              className="reveal card-3d group relative bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}>
              {/* Image area */}
              <div className="aspect-[4/3] bg-surface relative overflow-hidden">
                <img src={cat.img} alt={cat.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-secondary font-semibold text-[15px] group-hover:text-primary transition-colors duration-300">{cat.name}</h3>
                    <span className="text-text text-xs mt-0.5 block">{cat.products.length} ürün serisi</span>
                  </div>
                  <div className="w-9 h-9 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
