import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setOk(true);
    setEmail('');
    setTimeout(() => setOk(false), 3000);
  };

  return (
    <section className="py-20 bg-white border-y border-border/50">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-secondary font-bold text-xl mb-1">Bültenimize Katılın</h3>
            <p className="text-text/60 text-sm">Yeni ürünler, kampanyalar ve sektörel gelişmelerden haberdar olun.</p>
          </div>
          <form onSubmit={submit} className="flex w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="flex-1 md:w-80 px-5 py-3.5 bg-surface border border-border border-r-0 rounded-l-full text-secondary text-sm placeholder:text-text/40 focus:outline-none focus:border-primary/50 transition-all duration-200"
            />
            <button
              type="submit"
              className={`px-7 py-3.5 font-semibold text-sm rounded-r-full transition-all duration-300 whitespace-nowrap ${
                ok
                  ? 'bg-green-500 text-white'
                  : 'bg-primary hover:bg-primary-dark text-white hover:shadow-[0_4px_15px_rgba(207,6,12,0.3)]'
              }`}
            >
              {ok ? '✓ Katıldınız' : 'Katıl'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
