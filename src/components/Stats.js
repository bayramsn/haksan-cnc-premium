import React from 'react';

const data = [
  { value: '6,000+', label: 'Mutlu Müşteri' },
  { value: '50+', label: 'Yıllık Tecrübe' },
  { value: '3', label: 'Showroom' },
  { value: '15+', label: 'Global Marka' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-dark">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-white/50 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
