import React, { useState } from 'react';
import { FULL_BLOG_POSTS } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

const TAGS = ['Tümü', 'Sektör', 'Etkinlik', 'Finans', 'Teknoloji', 'Rehber', 'Kariyer'];

export default function BlogPage() {
  useScrollReveal();
  const [activeTag, setActiveTag] = useState('Tümü');
  const filtered = activeTag === 'Tümü' ? FULL_BLOG_POSTS : FULL_BLOG_POSTS.filter(p => p.tag === activeTag);

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Blog</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">
            Haberler ve <span className="text-primary">Duyurular</span>
          </h1>
          <p className="text-white/50 text-lg">Sektörel gelişmeler ve güncellemeler.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="reveal flex flex-wrap gap-2 justify-center mb-12">
            {TAGS.map((tag) => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTag === tag ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface text-text hover:bg-border border border-border'
                }`}>
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <a key={`${activeTag}-${i}`} href="#"
                className="reveal card-3d group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-400"
                style={{ animationDelay: `${i * 80}ms` }}>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3"><span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">{post.tag}</span></div>
                  <div className="absolute top-3 right-3"><span className="bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">{post.date}</span></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-text/50 mb-2">
                    <span className="font-medium text-text/70">{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-secondary font-semibold text-[15px] leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-3">{post.title}</h3>
                  <p className="text-text text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Devamını Oku <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
