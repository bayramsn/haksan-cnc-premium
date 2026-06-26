import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data';

export default function ProductGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ürün <span className="text-navy">Kategorilerimiz</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Link key={i} to={`/kategori/${cat.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-navy/30 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/10] bg-gray-50 p-4">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4 text-center border-t border-gray-100">
                <h3 className="text-gray-900 font-semibold text-sm group-hover:text-navy transition-colors">{cat.name}</h3>
                <span className="text-gray-400 text-xs mt-1 block">{cat.products.length} ürün</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
