import React, { useState } from 'react';

export default function FinalCta() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [ok, setOk] = useState(false);
  const submit = (e) => { e.preventDefault(); setOk(true); setForm({ name: '', phone: '', email: '' }); setTimeout(() => setOk(false), 3000); };

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left content */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">İletişim</span>
            </div>
            <h2 className="text-3xl lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Üretiminizi<br />
              <span className="text-primary">Güçlendirelim</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-md">
              Size en uygun CNC çözümlerini birlikte belirleyelim. Uzman ekibimiz her zaman yanınızda.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+90 212 567 33 31', sub: 'Bizi Arayın' },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', text: 'Bayrampaşa / İstanbul', sub: '3 Showroom' },
                { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', text: 'WhatsApp Desteği', sub: 'Anında Yanıt' },
              ].map((item, i) => (
                <div key={i} className="reveal flex items-center gap-4 text-white/60 group" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm block">{item.text}</span>
                    <span className="text-white/30 text-xs">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="reveal-right">
            <div className="glass rounded-3xl p-8 lg:p-10 border border-white/[0.06] relative overflow-hidden">
              {/* Form glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />

              <h3 className="text-white font-bold text-xl mb-8 relative z-10">İletişim Formu</h3>

              <form onSubmit={submit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-white/50 text-[11px] font-semibold tracking-wider uppercase mb-2">Ad Soyad</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="Adınız Soyadınız" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-[11px] font-semibold tracking-wider uppercase mb-2">Telefon</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="Telefon" required />
                  </div>
                  <div>
                    <label className="block text-white/50 text-[11px] font-semibold tracking-wider uppercase mb-2">E-posta</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="E-posta" required />
                  </div>
                </div>
                <button type="submit"
                  className={`w-full py-4 font-bold rounded-xl text-sm tracking-wide transition-all duration-300 ${
                    ok
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-primary hover:bg-primary-dark text-white hover:shadow-[0_8px_30px_rgba(207,6,12,0.3)]'
                  }`}>
                  {ok ? '✓ Mesajınız Gönderildi' : 'GÖNDER'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
