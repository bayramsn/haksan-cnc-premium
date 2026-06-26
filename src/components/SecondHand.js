import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SECOND_HAND } from '../data';

export default function SecondHand() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Fırsat</span>
            </div>
            <h2 className="text-4xl lg:text-[56px] font-black text-gray-950 leading-[1.05] tracking-tight">
              İkinci El <span className="bg-gradient-to-r from-navy to-blue bg-clip-text text-transparent">Ürünlerimiz</span>
            </h2>
          </motion.div>
          <a href="/ikinciel" className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors group">
            TÜM ÜRÜNLER
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SECOND_HAND.map((item, i) => (
            <motion.a key={i} href="/ikinciel" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-gray-50 p-6">
                <img src={item.img} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">Fırsat</div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-950 font-bold text-lg mb-3 group-hover:text-navy transition-colors">{item.name}</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-5">
                  <span><span className="font-semibold text-gray-700">Marka:</span> {item.brand}</span>
                  <span><span className="font-semibold text-gray-700">Model:</span> {item.model}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold transition-colors">
                  Ürünü İncele
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
