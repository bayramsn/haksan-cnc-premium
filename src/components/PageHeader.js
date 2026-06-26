import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ph-grid)" />
        </svg>
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-gold transition-colors">Anasayfa</Link>
          {breadcrumbs.map((bc, i) => (
            <React.Fragment key={i}>
              <span>/</span>
              {bc.link ? (
                <Link to={bc.link} className="hover:text-gold transition-colors">{bc.label}</Link>
              ) : (
                <span className="text-gold">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
