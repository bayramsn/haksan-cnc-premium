import React, { useState, useEffect } from 'react';
import { SLIDES } from '../data';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-primary-dark" style={{ height: '80vh', minHeight: '500px', maxHeight: '750px' }}>
      {SLIDES.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.desktop} alt="" className="w-full h-full object-cover hidden md:block" />
          <img src={slide.mobile} alt="" className="w-full h-full object-cover md:hidden" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/60 via-primary-dark/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-accent' : 'w-5 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
