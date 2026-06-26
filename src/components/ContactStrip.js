import React, { useState } from 'react';

export default function ContactStrip() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [ok, setOk] = useState(false);

  const submit = (e) => { e.preventDefault(); setOk(true); setForm({ name: '', phone: '', email: '' }); setTimeout(() => setOk(false), 3000); };

  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Bizimle <span className="text-gold">İletişime</span> Geçin
            </h2>
            <p className="text-white/60 mb-8">
              İhtiyacınıza en uygun çözümleri sunmak için buradayız.
            </p>
            <div className="space-y-3 text-white/70 text-sm">
              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>+90 212 567 33 31</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Bayrampaşa / İstanbul</span>
              </div>
              <div className="flex items-center gap-3">
                <span>💬</span>
                <span>WhatsApp Desteği</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-white/50 text-xs font-medium mb-1">Ad Soyad</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Adınız Soyadınız" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1">Telefon</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Telefon" required />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1">E-posta</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="E-posta" required />
                </div>
              </div>
              <button type="submit"
                className={`w-full py-3 font-semibold rounded-lg text-sm transition-all ${ok ? 'bg-green-500 text-white' : 'bg-gold hover:bg-gold-light text-midnight'}`}>
                {ok ? '✓ Gönderildi' : 'Bize Ulaşın'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
