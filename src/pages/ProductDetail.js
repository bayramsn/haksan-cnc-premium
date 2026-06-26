import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES, SOCIAL_LINKS } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProductDetail() {
  useScrollReveal();
  const { slug, productName } = useParams();

  // Find the product across all categories
  let product = null;
  let category = null;
  for (const cat of PRODUCT_CATEGORIES) {
    const found = cat.products.find(p =>
      p.name.toLowerCase().replace(/[^a-z0-9]/g, '') === productName?.toLowerCase().replace(/[^a-z0-9]/g, '') ||
      p.model?.toLowerCase() === productName?.toLowerCase()
    );
    if (found) { product = found; category = cat; break; }
  }

  // Fallback: find by first product in matching category
  if (!product && category) {
    product = category.products[0];
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Ürün Bulunamadı</h2>
          <Link to="/kategori" className="px-6 py-3 bg-primary text-white rounded-lg font-medium">Ürünlere Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-surface">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain" />
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/80 to-transparent h-32" />
      </section>

      {/* Product Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Details */}
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-4">
                <Link to={`/kategori/${category?.slug}`} className="text-primary text-[11px] font-semibold tracking-[0.2em] uppercase hover:underline">
                  {category?.name}
                </Link>
                <span className="text-text/30">→</span>
                <span className="text-text/50 text-[11px]">{product.name}</span>
              </div>

              <h1 className="text-3xl lg:text-[40px] font-bold text-secondary leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-text text-[15px] leading-relaxed mb-8">
                {product.desc}
              </p>

              {/* Specs */}
              {product.specs && (
                <div className="mb-8">
                  <h3 className="text-secondary font-bold text-sm mb-4">Teknik Özellikler</h3>
                  <div className="space-y-3">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Brand & Model */}
              <div className="flex gap-6 mb-8">
                {product.brand && (
                  <div className="p-4 bg-surface rounded-xl">
                    <span className="text-text/50 text-xs block mb-1">Marka</span>
                    <span className="text-secondary font-semibold text-sm">{product.brand}</span>
                  </div>
                )}
                {product.model && (
                  <div className="p-4 bg-surface rounded-xl">
                    <span className="text-text/50 text-xs block mb-1">Model</span>
                    <span className="text-secondary font-semibold text-sm">{product.model}</span>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-full hover:shadow-[0_8px_30px_rgba(207,6,12,0.3)] transition-all">
                  Fiyat Al
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/servis-talep"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-border text-secondary font-semibold text-sm rounded-full hover:border-primary/30 transition-all">
                  Servis Talep
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="reveal-right">
              <div className="sticky top-24 bg-surface rounded-2xl p-8 border border-border">
                <img src={product.img} alt={product.name} className="w-full aspect-square object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {category && (
        <section className="py-16 bg-surface">
          <div className="max-w-site mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary mb-8">Benzer Ürünler</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {category.products.filter(p => p.name !== product.name).slice(0, 4).map((p, i) => (
                <Link key={i} to={`/kategori/${category.slug}/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="reveal group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square bg-surface p-4">
                    <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4 text-center border-t border-border">
                    <h3 className="text-secondary font-semibold text-sm group-hover:text-primary transition-colors">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
