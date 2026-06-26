import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProductListing() {
  useScrollReveal();
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Ürünler</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">CNC <span className="text-primary">Ürün Yelpazemiz</span></h1>
          <p className="text-white/50 text-lg">İhtiyacınıza uygun CNC çözümlerimizi keşfedin.</p>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <Link key={i} to={`/kategori/${cat.slug}`} className="reveal card-3d group block bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-400" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div><span className="text-white/60 text-xs">{cat.products.length} ürün</span><h3 className="text-white font-bold text-lg">{cat.name}</h3></div>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-all"><svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
