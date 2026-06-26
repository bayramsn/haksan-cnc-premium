import React from 'react';

const data = [
  { value: '6,000+', label: 'Mutlu Müşteri', icon: '🤝' },
  { value: '50+', label: 'Yıllık Tecrübe', icon: '📅' },
  { value: '3', label: 'Showroom', icon: '🏭' },
  { value: '15+', label: 'Global Marka', icon: '🌍' },
];

export default function Numbers() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {data.map((item, i) => (
            <div key={i} className="text-center">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-white/50 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
