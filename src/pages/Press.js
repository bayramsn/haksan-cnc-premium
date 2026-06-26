import React from 'react';
import { FULL_BLOG_POSTS } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

const pressItems = FULL_BLOG_POSTS.filter(p => p.tag === 'Sektör' || p.tag === 'Etkinlik').slice(0, 6);

export default function Press() {
  useScrollReveal();
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Basın</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">Medyada <span className="text-primary">Biz</span></h1>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressItems.map((item, i) => (
              <div key={i} className="reveal card-3d group bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-400" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[16/9] overflow-hidden"><img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-text/50 mb-3"><span className="font-medium text-primary">{item.author}</span><span>·</span><span>{item.date}</span></div>
                  <h3 className="text-secondary font-bold leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
