import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRODUCT_CATEGORIES } from '../data';

function Card({ cat, i }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={`/kategori/${cat.slug}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPos({ x: 0, y: 0 }); }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) / 20, y: (e.clientY - r.top - r.height / 2) / 20 });
      }}
      className="group relative block"
      style={{ transform: hover ? `perspective(1000px) rotateY(${pos.x}deg) rotateX(${-pos.y}deg) translateZ(10px)` : 'none', transition: 'transform 0.15s ease-out' }}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{cat.products.length} Ürün Serisi</p>
                <h3 className="text-white font-bold text-lg leading-tight">{cat.name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProductCategories() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[#f8f9fa]">
      <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1B2A4A 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Ürünlerimiz</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="text-4xl lg:text-[56px] font-black text-gray-950 leading-[1.05] tracking-tight mb-5">
            İhtiyacınıza Uygun<br />
            <span className="bg-gradient-to-r from-navy via-blue to-navy bg-clip-text text-transparent">Çözümlerimiz</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-[15px] leading-relaxed">
            Geniş ürün yelpazemizle endüstriyel ihtiyaçlarınıza yönelik yüksek hassasiyetli çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat, i) => <Card key={i} cat={cat} i={i} />)}
        </div>
      </div>
    </section>
  );
}
