import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CtaSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [ok, setOk] = useState(false);

  const submit = (e) => { e.preventDefault(); setOk(true); setForm({ name: '', phone: '', email: '' }); setTimeout(() => setOk(false), 4000); };

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-gold/40" />
              <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">İletişim</span>
            </div>
            <h2 className="text-4xl lg:text-[56px] font-black text-white leading-[1.05] tracking-tight mb-6">
              Üretiminizi<br />
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Güçlendirelim</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-md">
              Size en uygun CNC çözümlerini birlikte belirleyelim.
            </p>

            <div className="space-y-4">
              {[
                { e: '📞', t: '+90 212 567 33 31', s: 'Bizi Arayın' },
                { e: '📍', t: 'Bayrampaşa / İstanbul', s: '3 Showroom' },
                { e: '💬', t: 'WhatsApp Desteği', s: 'Anında Yanıt' },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-white/[0.01] transition-all">
                  <span className="text-xl w-10 h-10 bg-white/[0.03] rounded-xl flex items-center justify-center">{x.e}</span>
                  <div>
                    <span className="text-white font-semibold text-sm block">{x.t}</span>
                    <span className="text-white/30 text-xs">{x.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/[0.05] via-transparent to-gold/[0.05] rounded-3xl blur-2xl" />
              <form onSubmit={submit} className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.06]">
                <h3 className="text-white font-bold text-lg mb-6">İletişim Formu</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">Ad Soyad</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-all" placeholder="Adınız Soyadınız" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">Telefon</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-all" placeholder="Telefon" required />
                    </div>
                    <div>
                      <label className="block text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">E-posta</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-all" placeholder="E-posta" required />
                    </div>
                  </div>
                  <button type="submit"
                    className={`w-full py-4 font-extrabold rounded-xl text-sm tracking-wide transition-all duration-300 ${ok ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-gold to-gold-light text-gray-950 hover:shadow-[0_0_40px_rgba(212,168,67,0.2)]'}`}>
                    {ok ? '✓ Mesajınız Gönderildi' : 'GÖNDER'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
