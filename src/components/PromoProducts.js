import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PROMO_PRODUCTS } from '../data';

function PCard({ product, i }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.03 }} viewport={{ once: true }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPos({ x: 0, y: 0 }); }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setPos({ x: (e.clientX - r.left - r.width / 2) / 25, y: (e.clientY - r.top - r.height / 2) / 25 }); }}
      className="flex-shrink-0 w-[230px] snap-start"
      style={{ transform: hover ? `perspective(600px) rotateY(${pos.x * 0.3}deg) rotateX(${-pos.y * 0.3}deg) translateY(-4px)` : 'none', transition: 'transform 0.15s ease-out' }}
    >
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-400">
        <div className="aspect-[4/3] bg-gray-50/50 overflow-hidden relative p-4">
          <img src={product.img} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          <div className="absolute top-2.5 left-2.5 bg-gold/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Kampanya</div>
        </div>
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-[13px] leading-snug line-clamp-2 min-h-[34px]">{product.name}</h3>
          <div className="flex items-center gap-1 mt-3 text-[11px] font-bold text-navy group-hover:text-gold transition-colors cursor-pointer">
            İncele <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PromoProducts() {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const scroll = (d) => scrollRef.current?.scrollBy({ left: d * 260, behavior: 'smooth' });

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[#f8f9fa] overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Kampanyalar</span>
            </div>
            <h2 className="text-4xl lg:text-[56px] font-black text-gray-950 leading-[1.05] tracking-tight">
              Kampanyalı <span className="bg-gradient-to-r from-navy to-blue bg-clip-text text-transparent">Ürünlerimiz</span>
            </h2>
          </motion.div>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-navy hover:text-navy transition-all hover:shadow-md bg-white"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={() => scroll(1)} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-navy hover:text-navy transition-all hover:shadow-md bg-white"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {PROMO_PRODUCTS.map((p, i) => <PCard key={i} product={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
