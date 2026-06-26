import React from 'react';
import { BLOG_POSTS } from '../data';

export default function BlogNews() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Haberler ve <span className="text-navy">Duyurular</span>
            </h2>
          </div>
          <a href="/blog" className="text-navy font-semibold text-sm hover:text-gold transition-colors">
            Tüm Blog →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <a key={i} href="#" className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-navy/20 hover:shadow-md transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span className="text-navy font-medium">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-gray-900 font-semibold text-sm group-hover:text-navy transition-colors line-clamp-2">{post.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
