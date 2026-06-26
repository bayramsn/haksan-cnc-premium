import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BLOG_POSTS } from '../data';

function BCard({ post, i }) {
  return (
    <motion.a href="#" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
      className="group block bg-white rounded-3xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100/60"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">{post.tag}</div>
        <div className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow">
          <span className="text-[9px] font-bold text-gray-900 leading-none">{post.date.split(' ')[0]}</span>
          <span className="text-[6px] text-gray-400 leading-none mt-0.5">{post.date.split(' ')[1]?.substring(0, 3)}</span>
        </div>
      </div>
      <div className="p-5">
        <span className="text-gray-400 text-[11px] font-medium">{post.author}</span>
        <h3 className="text-gray-950 font-bold text-sm leading-snug group-hover:text-navy transition-colors line-clamp-2 mt-1.5 mb-3">{post.title}</h3>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-navy group-hover:text-gold transition-colors">
          Devamını Oku <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    </motion.a>
  );
}

export default function Blog() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Haberler</span>
            </div>
            <h2 className="text-4xl lg:text-[56px] font-black text-gray-950 leading-[1.05] tracking-tight">
              Haberler ve{' '}
              <span className="bg-gradient-to-r from-navy to-blue bg-clip-text text-transparent">Duyurular</span>
            </h2>
          </motion.div>
          <a href="/blog" className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors group">
            Tüm Blog <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((p, i) => <BCard key={i} post={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
