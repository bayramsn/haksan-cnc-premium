import React from 'react';
import { ABOUT_GALLERY } from '../data';

const stories = [
  {
    name: 'Yılmaz Metal',
    person: 'Ahmet Yılmaz',
    text: 'Haksan CNC ile çalışmak üretim sürecimizi tamamen dönüştürdü. 5 Eksen İşleme Merkezi sayesinde karmaşık parçaları tek seferde işleyebiliyoruz.',
    result: 'Verimlilik %35 arttı',
    img: ABOUT_GALLERY[0],
  },
  {
    name: 'Demir Makina',
    person: 'Mehmet Demir',
    text: '10 yıldır Haksan ile çalışıyoruz. Satış sonrası servis desteği rakipsiz. Herhangi bir arıza durumunda 24 saat içinde yanımızdalar.',
    result: 'Arıza süresi %60 azaldı',
    img: ABOUT_GALLERY[1],
  },
  {
    name: 'Kaya Otomotiv',
    person: 'Fatma Kaya',
    text: 'CNC Torna tezgahlarımız Haksan\'dan. Hassasiyet ve dayanıklılık konusunda beklentilerimizin üzerinde performans gösteriyor.',
    result: 'Hassasiyet 0.001mm',
    img: ABOUT_GALLERY[2],
  },
];

export default function CustomerStories() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Müşteri Hikayeleri</span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-bold text-secondary leading-[1.1]">
            Başarı <span className="text-primary">Hikayelerimiz</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, i) => (
            <div key={i} className="reveal card-3d bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-400"
              style={{ animationDelay: `${i * 150}ms` }}>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{story.result}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text text-sm leading-relaxed mb-4">"{story.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {story.person[0]}
                  </div>
                  <div>
                    <div className="text-secondary font-semibold text-sm">{story.person}</div>
                    <div className="text-text text-xs">{story.name}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
