export const BASE = 'https://www.haksancnc.com.tr';

const enc = (s) => encodeURI(s).replace(/#/g, '%23');

export const LOGO = enc(`${BASE}/images/27219287072089023637hksanmak.png`);

export const SLIDES = [
  {
    desktop: enc(`${BASE}/images/227852223228610248901.jpg`),
    mobile: enc(`${BASE}/images/6985eda933cf71.jpg`),
    cta: 'HEMEN BİLGİ AL',
    link: 'https://api.whatsapp.com/send?phone=905309621054&text=',
  },
  {
    desktop: enc(`${BASE}/images/6985edb7d8029KAMPANYA BANNER PC.jpg`),
    mobile: enc(`${BASE}/images/6985edb7d834c2.jpg`),
    cta: 'HIZLI SERVİS AL',
    link: '/servis-talep',
  },
  {
    desktop: enc(`${BASE}/images/67a1ed7bd1c16haksanslider11.jpg`),
    mobile: enc(`${BASE}/images/67a1efee2789fMobil Banner Dijital TR 800x800.jpg`),
    cta: 'İNCELE',
    link: '/blog',
  },
  {
    desktop: enc(`${BASE}/images/252172300921353288805 EKSEN.jpg`),
    mobile: enc(`${BASE}/images/252172300921353288805 EKSEN.jpg`),
    cta: '5 EKSEN ÇÖZÜMLERİ',
    link: '/kategori',
  },
];

export const PRODUCT_CATEGORIES = [
  {
    slug: 'cnc-dik-isleme-merkezleri',
    name: 'CNC Dik İşleme Merkezleri',
    img: enc(`${BASE}/images/27582259072231220639DİK İŞLEME.jpg`),
    description: 'Yüksek hassasiyet ve güçlü performans sunan dik işleme merkezleri.',
    products: [
      { name: 'VM Serisi', img: enc(`${BASE}/images/30680273963117726368VM SERİSİ.jpg`), desc: 'Yüksek hassasiyetli dik işleme merkezi. Hızlı ve hassas işleme için tasarlandı.' },
      { name: 'MV Serisi', img: enc(`${BASE}/images/21094249072743728300MV SERİSİ.jpg`), desc: 'Yüksek verimlilik ve güçlü performans. Endüstriyel üretim için ideal.' },
      { name: 'VC Serisi', img: enc(`${BASE}/images/30984237632001326770VC SERİSİ.jpg`), desc: 'Verimli ve hassas işlem. Kompakt tasarım, geniş çalışma alanı.' },
    ],
  },
  {
    slug: 'cnc-torna-tezgahlari',
    name: 'CNC Torna Tezgahları',
    img: enc(`${BASE}/images/30158257072201622652TORNA.jpg`),
    description: 'Yüksek hassasiyet ve dayanıklılık sunan torna tezgahları.',
    products: [
      { name: 'SL Serisi', img: enc(`${BASE}/images/23221246312604727506SL SERİSİ.jpg`), desc: 'Yüksek hassasiyetli torna çözümleri. Hassas üretim için ideal.' },
      { name: 'MT Serisi', img: enc(`${BASE}/images/22823275472975223631MT SERİSİ.jpg`), desc: 'Endüstriyel torna için yüksek kapasite. Güçlü ve dayanıklı.' },
      { name: 'SJ Serisi', img: enc(`${BASE}/images/31608212903133423518SJ SERİSİ.jpg`), desc: 'Dayanıklı ve yüksek verimli torna tezgahları. Uzun ömürlü kullanım.' },
    ],
  },
  {
    slug: 'cnc-tapping-center',
    name: 'CNC Tapping Center',
    img: enc(`${BASE}/images/22804256182221322566TAPPING.jpg`),
    description: 'Hassas delik işleme ve diş açma çözümleri.',
    products: [
      { name: 'TC Serisi', img: enc(`${BASE}/images/29513319262970220291TC SERİSİ.jpg`), desc: 'Yüksek performans ve hassas işleme. Kompakt ve hızlı.' },
    ],
  },
  {
    slug: 'cnc-yatay-isleme-merkezleri',
    name: 'CNC Yatay İşleme Merkezleri',
    img: enc(`${BASE}/images/20203235042438025760YATAY İŞLEME.jpg`),
    description: 'Yüksek kapasite ve hassasiyet sunan yatay işleme merkezleri.',
    products: [
      { name: 'HT Serisi', img: enc(`${BASE}/images/21266288042718322748HT SERİSİ.jpg`), desc: 'Yüksek kapasite ve hassasiyet. Büyük parçalar için ideal.' },
      { name: 'LH Serisi', img: enc(`${BASE}/images/30446206723117530236LH SERİSİ.jpg`), desc: 'Güçlü ve dayanıklı işleme. Ağır iş yükleri için tasarlandı.' },
    ],
  },
  {
    slug: 'cnc-5-eksen-isleme-merkezleri',
    name: 'CNC 5 Eksen İşleme Merkezleri',
    img: enc(`${BASE}/images/252172300921353288805 EKSEN.jpg`),
    description: 'Esnek ve hassas çok eksenli işleme çözümleri.',
    products: [
      { name: 'D Serisi', img: enc(`${BASE}/images/308283127121811318541.jpg`), desc: '5 eksen hassas işleme. Karmaşık parçalar için ideal.' },
      { name: 'C Serisi', img: enc(`${BASE}/images/249502702228912299253.jpg`), desc: 'Gelişmiş 5 eksen teknolojisi. Yüksek verimlilik.' },
    ],
  },
  {
    slug: 'cnc-kopru-tipi-isleme-merkezleri',
    name: 'CNC Köprü Tipi İşleme Merkezleri',
    img: enc(`${BASE}/images/23409287862648825709ÇİFT KOLONLU.jpg`),
    description: 'Yüksek performans ve kapasite sunan köprü tipi merkezler.',
    products: [
      { name: 'DL Serisi', img: enc(`${BASE}/images/208762203224348286434.jpg`), desc: 'Köprü tipi dik işleme merkezi. Büyük hacimli üretim için.' },
    ],
  },
];

export const PROMO_PRODUCTS = [
  { name: 'MT-310/500 CNC Torna', img: enc(`${BASE}/images/20488267023034329488MT-310-1.jpg`) },
  { name: 'DL-2112 CNC Köprü Tipi', img: enc(`${BASE}/images/308552120526065259556.jpg`) },
  { name: 'DL-3116 CNC Köprü Tipi', img: enc(`${BASE}/images/282282912828729268154.jpg`) },
  { name: 'D-600 CNC 5 Eksen', img: enc(`${BASE}/images/214042180027510218592.jpg`) },
  { name: 'D-700 CNC 5 Eksen', img: enc(`${BASE}/images/289762864928830309323.jpg`) },
  { name: 'D-800 CNC 5 Eksen', img: enc(`${BASE}/images/218063009024291267261.jpg`) },
  { name: 'C20-5U/5A CNC 5 Eksen', img: enc(`${BASE}/images/245792121828785288041.jpg`) },
  { name: 'TC-510 CNC Tapping Center', img: enc(`${BASE}/images/20359249952120527513TC-510.jpg`) },
  { name: 'VC-760 EZ CNC Dik İşleme', img: enc(`${BASE}/images/25712283932612727113VC760.jpg`) },
  { name: 'VM-2 CNC Dik İşleme', img: enc(`${BASE}/images/218462333428976203541.jpg`) },
  { name: 'MV-1050 CNC Dik İşleme', img: enc(`${BASE}/images/21715308722108225695MV1050.jpg`) },
  { name: 'SJ-20 CNC Torna', img: enc(`${BASE}/images/30067215272025724719SJ-20-2.jpg`) },
];

export const SECOND_HAND = [
  {
    name: 'SMARC PROMİLL CNC DİK İŞLEME MERKEZİ',
    img: enc(`${BASE}/images/20001286412289726487WhatsApp Image 2026-04-14 at 09.15.20 (2).jpeg`),
    brand: 'SMARC',
    model: 'PROMİLL',
  },
];

export const BLOG_POSTS = [
  { title: 'Makine Sektörü 2026 Beklentileri - Z Raporu', author: 'İsmail Somalı', date: '2 Şubat 2026', tag: 'Sektör', img: enc(`${BASE}/images/27913204442306626870Adsız tasarım.jpg`) },
  { title: 'Cevherden Makineye\'25 Zirvesi', author: 'Haksan Makina', date: '17 Nisan 2025', tag: 'Etkinlik', img: enc(`${BASE}/images/30828299892807723751cevher-7.jpeg`) },
  { title: 'CNC Takım Tezgahlarında Leasing', author: 'Raif Şentürk', date: '3 Nisan 2025', tag: 'Finans', img: enc(`${BASE}/images/30303215193178725071leasing.jpg`) },
  { title: 'Endüstri 4.0 Nedir?', author: 'Haksan CNC', date: '28 Ocak 2025', tag: 'Teknoloji', img: enc(`${BASE}/images/24582271542315820485Adsız tasarım (24).jpg`) },
];

export const FULL_BLOG_POSTS = [
  { title: 'Makine Sektörü 2026 Beklentileri - Z Raporu', author: 'İsmail Somalı', date: '2 Şubat 2026', tag: 'Sektör', img: enc(`${BASE}/images/27913204442306626870Adsız tasarım.jpg`), excerpt: '2026 yılı makine sektörü için kritik eşik olarak görülmektedir.' },
  { title: 'Cevherden Makineye\'25 Zirvesi', author: 'Haksan Makina', date: '17 Nisan 2025', tag: 'Etkinlik', img: enc(`${BASE}/images/30828299892807723751cevher-7.jpeg`), excerpt: 'MÜSİAD tarafından düzenlenen zirveye sponsor olarak katıldık.' },
  { title: 'CNC Takım Tezgahlarında Leasing', author: 'Raif Şentürk', date: '3 Nisan 2025', tag: 'Finans', img: enc(`${BASE}/images/30303215193178725071leasing.jpg`), excerpt: 'CNC takım tezgahlarını leasing ile edinmenin avantajlarını keşfedin.' },
  { title: 'CNC Makinelerde Yatırım Teşvik Belgesi', author: 'Raif Şentürk', date: '3 Nisan 2025', tag: 'Finans', img: enc(`${BASE}/images/21402284812211523160ytb.jpg`), excerpt: 'Teşviklerden yararlanarak maliyetlerinizi nasıl düşürebilirsiniz.' },
  { title: 'CNC Makinelerin Tarihi', author: 'Haksan CNC', date: '8 Şubat 2025', tag: 'Teknoloji', img: enc(`${BASE}/images/30311222332164327796Adsız tasarım (28).jpg`), excerpt: 'Sanayi devriminden Endüstri 4.0\'a CNC teknolojisinin evrimi.' },
  { title: 'CNC Makina Çeşitleri Nelerdir?', author: 'Haksan CNC', date: '8 Şubat 2025', tag: 'Rehber', img: enc(`${BASE}/images/25769236892325027786Adsız tasarım (27).jpg`), excerpt: 'CNC freze, torna, plazma ve lazer makinelerinin karşılaştırması.' },
  { title: 'Makine Sektörü 2025 Beklentileri', author: 'İsmail Somalı', date: '5 Şubat 2025', tag: 'Sektör', img: enc(`${BASE}/images/26001218072662028540Z RAPORU - 2025 BEKLENTİLERİ.jpg`), excerpt: '2024 ihracat rakamları ve 2025 hedefleri.' },
  { title: 'CNC Nasıl Çalışır?', author: 'Haksan CNC', date: '28 Ocak 2025', tag: 'Rehber', img: enc(`${BASE}/images/23370253183191830177Adsız tasarım (26).jpg`), excerpt: 'CNC makinelerinin çalışma prensipleri ve avantajları.' },
  { title: 'Endüstri 4.0 ve CNC', author: 'Haksan CNC', date: '28 Ocak 2025', tag: 'Teknoloji', img: enc(`${BASE}/images/24582271542315820485Adsız tasarım (24).jpg`), excerpt: 'IoT ve yapay zekanın CNC teknolojisine etkileri.' },
  { title: 'CNC Operatörü Nedir?', author: 'Haksan CNC', date: '28 Ocak 2025', tag: 'Kariyer', img: enc(`${BASE}/images/26462300572979725112Adsız tasarım (23).jpg`), excerpt: 'CNC operatörü olmak için gereken nitelikler.' },
  { title: 'İkinci El CNC Alırken Dikkat', author: 'Dr. Makina', date: '27 Ocak 2025', tag: 'Rehber', img: enc(`${BASE}/images/23643227822572722377Adsız tasarım (22).jpg`), excerpt: 'İkinci el CNC makinesi alırken dikkat edilmesi gerekenler.' },
  { title: 'CNC Dikey İşleme Merkezi Nedir?', author: 'Haksan CNC', date: '14 Ocak 2025', tag: 'Rehber', img: enc(`${BASE}/images/28491207202121823104CNC VMC TR.jpg`), excerpt: 'Özellikleri, avantajları ve kullanım alanları.' },
  { title: 'CNC Tapping Center Nedir?', author: 'Haksan CNC', date: '14 Ocak 2025', tag: 'Rehber', img: enc(`${BASE}/images/23615269312344624171CNC Tapping Center Nedir.jpg`), excerpt: 'İşlevleri ve avantajları hakkında bilgi.' },
  { title: 'CNC Nedir?', author: 'Haksan CNC', date: '15 Kasım 2024', tag: 'Rehber', img: enc(`${BASE}/images/23715242402899530725Başlıksız-7.jpg`), excerpt: 'Computer Numerical Control nedir, nasıl çalışır?' },
  { title: 'CNC Verimliliği Artırma', author: 'Haksan CNC', date: '15 Kasım 2024', tag: 'Rehber', img: enc(`${BASE}/images/29534227362968025541Başlıksız-6.jpg`), excerpt: 'Verimliliği artırmanın en etkili yolları.' },
  { title: 'CNC Torna Tezgahı Nedir?', author: 'Haksan CNC', date: '13 Aralık 2024', tag: 'Rehber', img: enc(`${BASE}/images/26558217792959225751cnc torna tezgahı nedir.jpg`), excerpt: 'Avantajları ve kullanım alanları.' },
  { title: 'Maktek Avrasya 2024 Fuarı', author: 'Haksan Makina', date: '8 Ekim 2024', tag: 'Etkinlik', img: enc(`${BASE}/images/27108295132886631339Başlıksız-5.jpg`), excerpt: 'Fuar deneyimimiz ve sergilediğimiz çözümler.' },
];

export const BRANDS = [
  '2F MAKİNA', 'AKTİF MOTOR', 'ASTAŞ JUKİ', 'BUTEL TEKNOLOJİ',
  'CEMAX MAKİNA', 'DELTA-V', 'DİSPA MAKİNA', 'DİZAYN MAKİNA',
  'FEMAŞ MAKİNA', 'HAKFORM CNC', 'ISITAN MAKİNA', 'KALE MAKİNA',
  'KESKİNLER KALIP', 'KÖSE OTOMAT', 'MEGA EKSPORT', 'NERO ENDÜSTRİ',
  'NETPAK AMBALAJ', 'NİK MAKİNA', 'ÖZİSMAK MAKİNA', 'SAVA MAKİNA',
];

export const ABOUT_IMG = enc(`${BASE}/images/28932314222644422109ANA 1.jpg`);

export const ABOUT_GALLERY = [
  enc(`${BASE}/images/268172458823485227823.jpg`),
  enc(`${BASE}/images/260432700131439290024.jpg`),
  enc(`${BASE}/images/279792936331750263025.jpg`),
  enc(`${BASE}/images/200082700027970269096.jpg`),
  enc(`${BASE}/images/225842707925563248277.jpg`),
  enc(`${BASE}/images/309532073523780222772.jpg`),
];

export const CONTACT_BRANCHES = [
  { title: 'Merkez', address: 'Yenidoğan Mah. Eyüp Sultan Caddesi : 24 Bayrampaşa / İSTANBUL', phone: '+90 212 567 33 31', email: 'cnc@haksanmakina.com.tr', fax: '+90 212 565 70 58' },
  { title: 'Emintaş Şube', address: 'Abdi İpekçi Cad. 1. Emintaş Sanayi Sitesi No: 74 / 121 Bayrampaşa / İSTANBUL', phone: '+90 212 613 02 09', email: 'info@haksanmakina.com.tr', fax: '+90 212 576 44 20' },
  { title: 'İkitelli Şube', address: 'İkitelli OSB. Demirciler San. Sit. B3 Blok No:92 İkitelli / İSTANBUL', phone: '+90 212 671 84 98', email: 'info@haksanmakina.com.tr', fax: '+90 12 671 12 91' },
];

export const REFERENCES = [
  { name: '2F MAKİNA', img: enc(`${BASE}/images/287252020531529317272F.png`) },
  { name: 'AKTİF MOTOR', img: enc(`${BASE}/images/31321226752057421893aktif motor.png`) },
  { name: 'ASTAŞ JUKİ', img: enc(`${BASE}/images/28556229853043024756astaş.png`) },
  { name: 'ATTACK ARMS', img: enc(`${BASE}/images/26661208523043425212attack.png`) },
  { name: 'BUTEL TEKNOLOJİ', img: enc(`${BASE}/images/21173306793056824233butel.png`) },
  { name: 'CEMAX MAKİNA', img: enc(`${BASE}/images/27948314152755722687cemax.png`) },
  { name: 'DELTA-V', img: enc(`${BASE}/images/26223290062745230032deltav.png`) },
  { name: 'DİSPA MAKİNA', img: enc(`${BASE}/images/30210227633037822486dispa.png`) },
  { name: 'DİZAYN MAKİNA', img: enc(`${BASE}/images/25022258352410128902dizayn.png`) },
  { name: 'FEMAŞ MAKİNA', img: enc(`${BASE}/images/29062291702188830386femaş.png`) },
  { name: 'HAKFORM CNC', img: enc(`${BASE}/images/26036214922903425434hakform.png`) },
  { name: 'ISITAN MAKİNA', img: enc(`${BASE}/images/30532211192706423223ısıtan.png`) },
  { name: 'KALE MAKİNA', img: enc(`${BASE}/images/23708273042848126798kale mak.png`) },
  { name: 'KESKİNLER KALIP', img: enc(`${BASE}/images/26985211522499522342keskinler.png`) },
  { name: 'KÖSE OTOMAT', img: enc(`${BASE}/images/29129201002873926454köse oto.png`) },
  { name: 'KURTOĞLU BAKIR', img: enc(`${BASE}/images/29410238392348729883kurtoğlu.png`) },
  { name: 'MEGA EKSPORT', img: enc(`${BASE}/images/29616252002120727197mega eks.png`) },
  { name: 'NERO ENDÜSTRİ', img: enc(`${BASE}/images/27774274192348231166nero end.png`) },
  { name: 'NETPAK AMBALAJ', img: enc(`${BASE}/images/31843272852511721893netpak.png`) },
  { name: 'NİK MAKİNA', img: enc(`${BASE}/images/28746208273153720910nik.png`) },
  { name: 'ÖZİSMAK MAKİNA', img: enc(`${BASE}/images/21694202822647230288özismak.png`) },
  { name: 'ÖZMAK TEKSTİL', img: enc(`${BASE}/images/24318236482711623784özmak.png`) },
  { name: 'PLASTKOM', img: enc(`${BASE}/images/24991276362773924618plastkom.png`) },
  { name: 'SARAYBOSNA ÜNİVERSİTESİ', img: enc(`${BASE}/images/23655287422216124173saraybosna.png`) },
  { name: 'SAVA MAKİNA', img: enc(`${BASE}/images/30316296743178427811sava.png`) },
  { name: 'SAVEMA MAKİNA', img: enc(`${BASE}/images/27708212732310131848savema.png`) },
  { name: 'SEGA MAKİNA', img: enc(`${BASE}/images/27738292193179924210sega.png`) },
  { name: 'SMS TORK', img: enc(`${BASE}/images/29270268972686028947sms tork.png`) },
  { name: 'ŞAHİNTEK', img: enc(`${BASE}/images/2696830553293430688şahintek.png`) },
  { name: 'TARLE PLAST', img: enc(`${BASE}/images/22828245262647127306tarleplast.png`) },
  { name: 'YÜKSELİŞ ASANSÖR', img: enc(`${BASE}/images/25889303222845227272yükseliş.png`) },
  { name: 'ZİRVE-BİR KALIP', img: enc(`${BASE}/images/23358291982212327979zirvebir.png`) },
];

// LinkedIn'den alınan gerçek şirket bilgileri
export const COMPANY_INFO = {
  tagline: 'Makina Marketiniz',
  industry: 'Endüstriyel Makine Bakım ve Satış',
  location: 'İstanbul, Bayrampaşa',
  employees: '201-500',
  founded: '1972',
  linkedinFollowers: '1.025',
  address: 'Yenidoğan Mah. Cicoz Yolu No: 24 Bayrampaşa / İSTANBUL',
};

// LinkedIn'den alınan gerçek paylaşımlar
export const LINKEDIN_POSTS = [
  {
    title: 'D-800 5 Eksen İşleme Merkezi',
    text: 'Güç. Hassasiyet. Teknoloji. Maximart D-800 ile imkansız görünen geometriler artık standart üretiminiz olacak. Popüler olanı değil, profesyonel olanı seçin.',
    specs: ['20.000 RPM Built-in Spindle', '5 Eksen Simultane İşleme'],
    img: enc(`${BASE}/images/218063009024291267261.jpg`),
    date: '4 ay önce',
    likes: 13,
  },
  {
    title: '24 Ay Vade Kampanyası',
    text: 'Sermayenizi Bağlamayın: Peşin Fiyatına 24 Ay Vade ile Tezgahınızı Yenileyin! Sanayicinin en büyük gücü nakit akışıdır.',
    specs: ['Vakıf Katılım Güvencesi', 'Peşin Fiyatına 24 Ay'],
    img: enc(`${BASE}/images/227852223228610248901.jpg`),
    date: '4 ay önce',
    likes: 10,
  },
  {
    title: 'Yeni Yıl Mesajı',
    text: 'Yeni yılın siz ve sevdiklerinize huzur, umut, sağlık ve mutluluk getirmesini dileriz.',
    specs: [],
    img: enc(`${BASE}/images/67a1ed7bd1c16haksanslider11.jpg`),
    date: '5 ay önce',
    likes: 8,
  },
];

// Sosyal medya linkleri
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/hksnmak/',
  youtube: 'https://www.youtube.com/@haksan_makina',
  instagram: 'https://www.instagram.com/haksan_makina/',
  linkedin: 'https://www.linkedin.com/company/haksanmakina/',
  whatsapp: 'https://api.whatsapp.com/send?phone=905309621054&text=',
  website: 'https://www.haksanmakina.com.tr',
  drmak: 'https://www.drmak.com.tr/',
};
