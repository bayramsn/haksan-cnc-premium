import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OnlineStore() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-dark to-navy" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.06] rounded-full blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-gold/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gold/15">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl lg:text-2xl">Online Mağazamız</h3>
              <p className="text-white/40 text-sm">Yedek parça, ekipman ve aksesuarlar</p>
            </div>
          </div>
          <a href="#" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-950 font-extrabold rounded-full text-sm transition-all duration-500 hover:shadow-[0_8px_40px_rgba(255,255,255,0.1)] overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors">Şimdi Alışveriş Yapın</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
