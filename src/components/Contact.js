import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [ok, setOk] = useState(false);
  const submit = (e) => { e.preventDefault(); setOk(true); setForm({ name: '', phone: '', email: '' }); setTimeout(() => setOk(false), 3000); };

  return (
    <section className="py-24 lg:py-32 bg-primary-dark">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">İletişim</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-white leading-tight mb-6">
              Üretiminizi<br /><span className="text-accent">Güçlendirelim</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">Size en uygun CNC çözümlerini birlikte belirleyelim.</p>
            <div className="space-y-4">
              {[
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, text: '+90 212 567 33 31', sub: 'Bizi Arayın' },
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, text: 'Bayrampaşa / İstanbul', sub: '3 Showroom' },
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, text: 'WhatsApp Desteği', sub: 'Anında Yanıt' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/70">
                  <div className="text-accent">{item.icon}</div>
                  <div>
                    <span className="text-white font-medium text-sm block">{item.text}</span>
                    <span className="text-white/40 text-xs">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-white font-bold text-lg mb-6">İletişim Formu</h3>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-white/50 text-xs font-medium mb-1.5">Ad Soyad</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Adınız Soyadınız" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5">Telefon</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Telefon" required />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5">E-posta</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="E-posta" required />
                </div>
              </div>
              <button type="submit" className={`w-full py-3.5 font-semibold rounded-lg text-sm transition-all cursor-pointer ${ok ? 'bg-green-500 text-white' : 'bg-accent hover:bg-accent-dark text-white'}`}>
                {ok ? '✓ Gönderildi' : 'GÖNDER'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
