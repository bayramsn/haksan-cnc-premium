import React, { useState } from 'react';
import { CONTACT_BRANCHES, SOCIAL_LINKS } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [ok, setOk] = useState(false);
  const submit = (e) => { e.preventDefault(); setOk(true); setForm({ name: '', phone: '', email: '', message: '' }); setTimeout(() => setOk(false), 3000); };

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">İletişim</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">
            Bizimle <span className="text-primary">İletişime</span> Geçin
          </h1>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_BRANCHES.map((branch, i) => (
              <div key={i} className={`reveal card-3d p-8 rounded-2xl border ${i === 0 ? 'bg-secondary text-white border-secondary' : 'bg-white border-border'}`}
                style={{ animationDelay: `${i * 150}ms` }}>
                <h3 className={`font-bold text-lg mb-6 ${i === 0 ? 'text-white' : 'text-secondary'}`}>{branch.title}</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', text: branch.address },
                    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: branch.phone },
                    { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: branch.email },
                  ].map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 text-primary`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className={`text-sm leading-relaxed ${i === 0 ? 'text-white/70' : 'text-text'}`}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal-left">
              <h2 className="text-3xl lg:text-[40px] font-bold text-secondary mb-4">Tüm Soru, Görüş ve Talepler için</h2>
              <p className="text-text mb-8">Size en iyi deneyimi sunmak ve ihtiyaçlarınıza en iyi çözümleri verebilmek için buradayız.</p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-border">
                  <h3 className="text-secondary font-bold mb-1">Haksan Takım Tezgahları</h3>
                  <p className="text-text text-sm mb-2">Üniversal ve sac işleme ürünlerimiz için sitemizi ziyaret edin.</p>
                  <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm">www.haksanmakina.com.tr →</a>
                </div>
                <div className="bg-white p-5 rounded-xl border border-border">
                  <h3 className="text-secondary font-bold mb-1">Dr. Makina</h3>
                  <p className="text-text text-sm mb-2">Uzman teknik servis ve periyodik bakım hizmetlerimiz.</p>
                  <a href={SOCIAL_LINKS.drmak} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm">www.drmak.com.tr →</a>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <form onSubmit={submit} className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="text-secondary font-bold text-lg mb-6">Mesaj Gönderin</h3>
                <div className="space-y-4">
                  <div><label className="block text-secondary text-sm font-medium mb-1.5">Ad Soyad</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Adınız Soyadınız" required /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-secondary text-sm font-medium mb-1.5">Telefon</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Telefon" required /></div>
                    <div><label className="block text-secondary text-sm font-medium mb-1.5">Email</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Email" required /></div>
                  </div>
                  <div><label className="block text-secondary text-sm font-medium mb-1.5">Mesaj</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Mesajınızı yazın..." required /></div>
                  <button type="submit" className={`w-full py-3.5 font-bold rounded-xl text-sm transition-all duration-300 ${ok ? 'bg-green-500 text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}>
                    {ok ? '✓ Mesajınız Gönderildi' : 'Bize Ulaşın'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-surface">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1!2d28.9!3d41.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzAwLjAiTiAyOMKwNTQnMDAuMCJF!5e0!3m2!1str!2str!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Haksan CNC Konum" />
      </section>
    </div>
  );
}
