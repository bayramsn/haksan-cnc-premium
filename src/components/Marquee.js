import React from 'react';
import { BRANDS } from '../data';

export default function Marquee() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase">Distribütörlüklerimiz</span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-4 animate-scroll">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i} className="flex-shrink-0 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-gray-500 text-xs font-medium hover:border-navy/20 hover:text-navy transition-all cursor-default select-none">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
