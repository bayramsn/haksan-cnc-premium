import React from 'react';

const steps = [
  {
    num: '01',
    title: 'İhtiyacı Belirleyin',
    desc: 'Uzman ekibimizle görüşerek üretim ihtiyaçlarınızı analiz ediyoruz.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    num: '02',
    title: 'Çözümü Seçin',
    desc: 'Geniş ürün yelpazemizden size en uygun CNC makinesini belirliyoruz.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    num: '03',
    title: 'Kurulumu Yapın',
    desc: 'Profesyonel kurulum ve devreye alma hizmetiyle üretiminize başlayın.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  },
  {
    num: '04',
    title: 'Destek Alın',
    desc: '7/24 teknik destek ve periyodik bakım hizmetleriyle yanınızdayız.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Süreç</span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-bold text-secondary leading-[1.1]">
            Nasıl <span className="text-primary">Çalışır?</span>
          </h2>
          <p className="text-text text-lg mt-4 max-w-xl mx-auto">
            4 basit adımda üretiminizi güçlendirin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 hidden lg:block" />

          {steps.map((step, i) => (
            <div key={i} className="reveal text-center relative" style={{ animationDelay: `${i * 150}ms` }}>
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-full border-2 border-primary/20 mb-6 z-10 group-hover:border-primary transition-colors">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  {step.num}
                </div>
              </div>

              <h3 className="text-secondary font-bold text-base mb-2">{step.title}</h3>
              <p className="text-text text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
