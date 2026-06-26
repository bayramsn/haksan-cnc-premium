import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from '../data';

export default function VideoHero() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const next = useCallback(() => setCurrent(p => (p + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  useEffect(() => {
    const h = (e) => setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 6,
      y: (e.clientY / window.innerHeight - 0.5) * 4,
    });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-secondary">
      {SLIDES.map((slide, i) => (
        <div key={i}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transform: i === current ? `translate(${mouse.x * 0.2}px, ${mouse.y * 0.2}px)` : undefined }}>
          <img src={slide.desktop} alt="" className="w-full h-full object-cover hidden md:block" draggable={false} />
          <img src={slide.mobile} alt="" className="w-full h-full object-cover md:hidden" draggable={false} />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/50" />

      {/* Only CTA button - bottom left */}
      <div className="absolute bottom-24 left-0 right-0 z-10">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <a href={SLIDES[current].link}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_8px_50px_rgba(207,6,12,0.5)]">
              <span className="relative z-10">{SLIDES[current].cta}</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="max-w-site mx-auto px-4 lg:px-8 pb-8 flex items-end justify-between">
          <div className="hidden lg:flex items-center gap-6 text-white/20 text-xs">
            <span className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 212 567 33 31
            </span>
            <span className="w-1 h-1 bg-white/15 rounded-full" />
            <span>Bayrampaşa / İstanbul</span>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-[2px] rounded-full transition-all duration-700 ${
                  i === current ? 'w-12 bg-primary' : 'w-5 bg-white/20 hover:bg-white/40'
                }`} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="/iletisim" className="text-white/20 text-xs font-medium hover:text-white/50 transition-colors inline-flex items-center gap-2 group">
              İletişime Geçin
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
