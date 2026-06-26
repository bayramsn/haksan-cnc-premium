import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ABOUT_IMG } from '../data';

const items = [
  { num: '01', title: '1972\'den Bugüne', desc: 'Yarım asrı aşkın tecrübemizle sanayi sektöründe güvenilir çözüm ortağınız.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
  { num: '02', title: 'Yenilik ve Güven', desc: 'Teknolojik gelişmeleri takip eden genç ekibimizle her zaman yanınızdayız.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { num: '03', title: 'Uygun Çözümler', desc: 'Güçlü finansal yapımızla sürdürülebilir ve güvenilir çözümler sunuyoruz.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hover, setHover] = useState(false);

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
              style={{ transform: hover ? 'perspective(1200px) rotateY(-3deg)' : 'none', transition: 'transform 0.6s ease-out' }}>
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/10 to-navy/5 rounded-3xl blur-xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={ABOUT_IMG} alt="Haksan" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-gray-950 font-black text-lg">50+</span>
                  <span className="text-gray-500 text-xs ml-1">yıl</span>
                </div>
                <div className="absolute bottom-6 right-6 bg-gold text-white px-4 py-2 rounded-xl shadow-lg shadow-gold/30 font-bold text-sm">
                  Kalite Garantisi
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-gold" />
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Hakkımızda</span>
              </div>
              <h2 className="text-4xl lg:text-[52px] font-black text-gray-950 leading-[1.05] tracking-tight mb-8">
                Neden Bizi<br />
                <span className="bg-gradient-to-r from-navy to-blue bg-clip-text text-transparent">Tercih Etmelisiniz?</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {items.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="group flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-navy/15 hover:bg-gray-50/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-gold font-mono text-xs font-bold mb-1">{f.num}</div>
                    <h3 className="text-gray-950 font-bold text-base mb-1 group-hover:text-navy transition-colors">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
