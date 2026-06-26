import React from 'react';
import { REFERENCES } from '../data';

export default function Brands() {
  const allRefs = [...REFERENCES, ...REFERENCES];

  return (
    <section className="py-16 bg-white border-y border-border/50 overflow-hidden relative">
      <div className="max-w-site mx-auto px-4 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-text/40 text-[11px] font-semibold tracking-[0.3em] uppercase">Distribütörlüklerimiz & Referanslarımız</span>
        </div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <div className="flex gap-8 items-center animate-scroll">
          {allRefs.map((ref, i) => (
            <div key={i}
              className="flex-shrink-0 w-[140px] h-[80px] bg-surface border border-border/50 rounded-xl flex items-center justify-center px-4 hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-default group">
              <img
                src={ref.img}
                alt={ref.name}
                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
