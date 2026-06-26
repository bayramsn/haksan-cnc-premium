import React from 'react';

const advantages = [
  { feature: '50+ Yıl Tecrübe', haksan: true, competitor: false },
  { feature: '7/24 Teknik Destek', haksan: true, competitor: false },
  { feature: '3 Showroom', haksan: true, competitor: false },
  { feature: 'Ücretsiz Kurulum', haksan: true, competitor: false },
  { feature: '24 Ay Vade', haksan: true, competitor: false },
  { feature: 'Yerinde Servis', haksan: true, competitor: false },
  { feature: 'Operatör Eğitimi', haksan: true, competitor: false },
  { feature: 'İkinci El Garantisi', haksan: true, competitor: false },
];

export default function WhyHaksan() {
  return (
    <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Karşılaştırma</span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-bold text-secondary leading-[1.1]">
            Neden <span className="text-primary">Haksan?</span>
          </h2>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          <div className="bg-surface rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_120px_120px] gap-4 p-5 bg-secondary text-white">
              <div className="font-semibold text-sm">Özellik</div>
              <div className="text-center font-bold text-sm">Haksan CNC</div>
              <div className="text-center font-bold text-sm text-white/50">Diğerleri</div>
            </div>

            {/* Rows */}
            {advantages.map((adv, i) => (
              <div key={i} className={`grid grid-cols-[1fr_120px_120px] gap-4 p-4 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-surface/50'} border-b border-border/50 last:border-0`}>
                <div className="text-secondary text-sm font-medium">{adv.feature}</div>
                <div className="text-center">
                  {adv.haksan ? (
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-primary/10 rounded-full">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-red-50 rounded-full">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="text-center">
                  {adv.competitor ? (
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-green-50 rounded-full">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-red-50 rounded-full">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
