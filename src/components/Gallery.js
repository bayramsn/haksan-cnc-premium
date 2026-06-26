import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PROMO_PRODUCTS, SECOND_HAND } from '../data';

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Öne Çıkanlar</span>
          </div>
          <h2 className="text-4xl lg:text-[56px] font-black text-gray-950 leading-[1.05] tracking-tight">
            Kampanyalı <span className="bg-gradient-to-r from-navy to-blue bg-clip-text text-transparent">Ürünler</span>
          </h2>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {PROMO_PRODUCTS.slice(0, 8).map((p, i) => (
            <motion.a key={i} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-400 ${
                i === 0 || i === 5 ? 'row-span-2' : ''
              }`}>
              <div className={`relative overflow-hidden bg-gray-50/50 p-4 ${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-3 left-3 bg-gold/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Kampanya</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[13px] text-gray-900 group-hover:text-navy transition-colors line-clamp-2 min-h-[34px]">{p.name}</h3>
                <span className="text-[11px] font-bold text-navy mt-2 inline-flex items-center gap-1 group-hover:text-gold transition-colors">
                  İncele <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Second hand banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-3xl">🏷️</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">İkinci El Ürünler</h3>
              <p className="text-white/50 text-sm">Kaliteyi uygun fiyatlarla keşfedin</p>
            </div>
          </div>
          <a href="/ikinciel" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 font-bold text-sm rounded-full hover:bg-gold hover:text-white transition-all">
            Ürünleri Keşfet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
