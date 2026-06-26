import React from 'react';
import { BRANDS } from '../data';

export default function Brands() {
  return (
    <section className="py-16 bg-white border-y border-border/50 overflow-hidden relative">
      <div className="max-w-site mx-auto px-4 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-text/40 text-[11px] font-semibold tracking-[0.3em] uppercase">Distribütörlüklerimiz & Referanslarımız</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i}
              className="flex-shrink-0 px-6 py-3 bg-surface border border-border/60 rounded-full text-text/50 text-[12px] font-medium tracking-wide hover:border-primary/30 hover:text-primary hover:bg-primary/[0.03] transition-all duration-300 cursor-default select-none whitespace-nowrap">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
