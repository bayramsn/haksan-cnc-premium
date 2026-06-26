import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProductCategory() {
  useScrollReveal();
  const { slug } = useParams();
  const category = PRODUCT_CATEGORIES.find(c => c.slug === slug);

  if (!category) return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center"><h2 className="text-3xl font-bold text-secondary mb-4">Kategori Bulunamadı</h2><Link to="/" className="px-6 py-3 bg-primary text-white rounded-lg font-medium">Ana Sayfaya Dön</Link></div>
    </div>
  );

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0"><img src={category.img} alt={category.name} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-secondary/70" /></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">{category.products.length} Ürün</span>
            <h1 className="text-4xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight mb-4">{category.name}</h1>
            <p className="text-white/50 text-lg">{category.description}</p>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <Link key={i} to={`/kategori/${c.slug}`} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${c.slug === slug ? 'bg-primary text-white' : 'bg-surface text-text hover:bg-border border border-border'}`}>{c.name}</Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((p, i) => (
              <Link key={i} to={`/kategori/${slug}/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="reveal card-3d bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-400" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[4/3] bg-white p-6"><img src={p.img} alt={p.name} className="w-full h-full object-contain" loading="lazy" /></div>
                <div className="p-5 border-t border-border">
                  <h3 className="text-secondary font-bold text-lg mb-2">{p.name}</h3>
                  <p className="text-text text-sm leading-relaxed mb-4">{p.desc}</p>
                  <a href="https://api.whatsapp.com/send?phone=905309621054&text=" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors">Fiyat Al →</a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
