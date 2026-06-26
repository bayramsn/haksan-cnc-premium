import React from 'react';
import { BLOG_POSTS } from '../data';

export default function BlogPreview() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Haberler</span>
            </div>
            <h2 className="text-3xl lg:text-[48px] font-bold text-secondary leading-[1.05] tracking-tight">
              Son <span className="text-primary">Haberler</span>
            </h2>
          </div>
          <a href="/blog" className="reveal text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-2 group">
            Tüm Haberler
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <a key={i} href="#"
              className="reveal card-3d group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-400"
              style={{ animationDelay: `${i * 120}ms` }}>
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={post.img} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {post.tag}
                  </span>
                </div>
                {/* Date badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-secondary font-semibold text-[15px] leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-text text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Devamını Oku
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
