import React from 'react';

const events = [
  { name: 'MAKTEK Avrasya 2026', date: 'Eylül 2026', location: 'İstanbul Fuar Merkezi', status: 'Yaklaşıyor', color: 'bg-primary' },
  { name: 'CNC Teknoloji Günleri', date: 'Kasım 2025', location: 'Bayrampaşa Showroom', status: 'Tamamlandı', color: 'bg-green-500' },
  { name: 'Endüstri 4.0 Zirvesi', date: 'Mart 2025', location: 'Haliç Kongre Merkezi', status: 'Tamamlandı', color: 'bg-green-500' },
];

export default function Events() {
  return (
    <section className="py-20 bg-white border-y border-border/50">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase block mb-2">Etkinlikler</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Fuarlar ve Etkinlikler</h2>
          </div>
          <a href="#" className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-1">
            Tüm Etkinlikler →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {events.map((event, i) => (
            <div key={i} className="reveal flex items-center gap-4 p-5 bg-surface rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center shrink-0`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-secondary font-semibold text-sm truncate">{event.name}</h3>
                <div className="flex items-center gap-2 text-xs text-text/60 mt-0.5">
                  <span>{event.date}</span>
                  <span className="w-1 h-1 bg-text/20 rounded-full" />
                  <span>{event.location}</span>
                </div>
              </div>
              <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${event.status === 'Yaklaşıyor' ? 'bg-primary/10 text-primary' : 'bg-green-50 text-green-600'}`}>
                {event.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
