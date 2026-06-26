import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const benefits = [
  { icon: '🔧', title: 'Yerinde Servis', desc: 'Teknisyenlerimiz adresinize gelir' },
  { icon: '⚡', title: 'Hızlı Müdahale', desc: '24 saat içinde geri dönüş' },
  { icon: '📋', title: 'Periyodik Bakım', desc: 'Düzenli bakım anlaşmaları' },
  { icon: '🎓', title: 'Teknik Eğitim', desc: 'Operatör eğitimleri' },
  { icon: '📦', title: 'Yedek Parça', desc: 'Hızlı tedarik' },
  { icon: '🛡️', title: 'Garanti', desc: 'Resmi garanti kapsamında' },
];

export default function Service() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', machine: '', issue: '', message: '' });
  const [ok, setOk] = useState(false);
  const submit = (e) => { e.preventDefault(); setOk(true); setTimeout(() => setOk(false), 4000); };

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-secondary flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl px-4">
          <span className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase block mb-4">Servis</span>
          <h1 className="text-5xl lg:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-4">
            Profesyonel <span className="text-primary">Servis Desteği</span>
          </h1>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="max-w-site mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Neden Servis Desteği?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16">
            {benefits.map((b, i) => (
              <div key={i} className="reveal card-3d p-6 bg-surface rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-2xl mb-3 block">{b.icon}</span>
                <h4 className="text-secondary font-bold text-sm mb-1">{b.title}</h4>
                <p className="text-text text-xs">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-6 text-white flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Acil Servis Hattı</h3>
              <a href="tel:+902125673331" className="text-primary font-bold text-xl">+90 212 567 33 31</a>
            </div>
          </div>

          {/* Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal-left">
              <h2 className="text-2xl font-bold text-secondary mb-4">Servis Talep Formu</h2>
              <p className="text-text text-sm mb-6">Formu doldurun, en kısa sürede size dönüş yapalım.</p>
            </div>
            <div className="reveal-right">
              <form onSubmit={submit} className="bg-surface rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-secondary text-sm font-medium mb-1.5">Ad Soyad</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Adınız" required /></div>
                    <div><label className="block text-secondary text-sm font-medium mb-1.5">Telefon</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Telefon" required /></div>
                  </div>
                  <div><label className="block text-secondary text-sm font-medium mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Email" required /></div>
                  <div><label className="block text-secondary text-sm font-medium mb-1.5">Makine Tipi</label>
                    <select value={form.machine} onChange={(e) => setForm({ ...form, machine: e.target.value })} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors">
                      <option value="">Seçiniz</option>
                      <option>CNC Dik İşleme</option><option>CNC Torna</option><option>CNC Tapping</option><option>CNC Yatay</option><option>Diğer</option>
                    </select></div>
                  <div><label className="block text-secondary text-sm font-medium mb-1.5">Açıklama</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-secondary text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Sorununuzu açıklayın..." /></div>
                  <button type="submit" className={`w-full py-3.5 font-bold rounded-xl text-sm transition-all ${ok ? 'bg-green-500 text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}>
                    {ok ? '✓ Talebiniz Alındı' : 'Servis Talep Et'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
