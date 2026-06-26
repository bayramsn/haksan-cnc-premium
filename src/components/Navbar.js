import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../data';

const navLinks = [
  { name: 'Kurumsal', children: [
    { name: 'Hakkımızda', route: '/hakkimizda' },
    { name: 'Referanslarımız', route: '/referanslar' },
    { name: 'Distribütörlüklerimiz', route: '/distributorlukler' },
    { name: 'Basında Biz', route: '/basinda-biz' },
    { name: 'Kariyer', route: '/kariyer' },
  ]},
  { name: 'Ürünler', children: [
    { name: 'CNC Dik İşleme Merkezleri', route: '/kategori/cnc-dik-isleme-merkezleri' },
    { name: 'CNC Torna Tezgahları', route: '/kategori/cnc-torna-tezgahlari' },
    { name: 'CNC Tapping Center', route: '/kategori/cnc-tapping-center' },
    { name: 'CNC Yatay İşleme Merkezleri', route: '/kategori/cnc-yatay-isleme-merkezleri' },
    { name: 'CNC 5 Eksen', route: '/kategori/cnc-5-eksen-isleme-merkezleri' },
    { name: 'CNC Köprü Tipi', route: '/kategori/cnc-kopru-tipi-isleme-merkezleri' },
    { name: 'Tüm Ürünler', route: '/kategori' },
  ]},
  { name: '2. El Ürünler', route: '/ikinciel' },
  { name: 'Blog', route: '/blog' },
  { name: 'İletişim', route: '/iletisim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="max-w-site mx-auto px-4 lg:px-8 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={LOGO} alt="Haksan CNC" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <div key={i} className="relative"
                onMouseEnter={() => link.children && setOpenDrop(i)}
                onMouseLeave={() => setOpenDrop(null)}>
                {link.route ? (
                  <Link to={link.route}
                    className="px-3.5 py-2 text-[13px] font-medium text-text/80 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                ) : (
                  <button className="px-3.5 py-2 text-[13px] font-medium text-text/80 hover:text-primary transition-colors duration-200 flex items-center gap-1">
                    {link.name}
                    <svg className={`w-3 h-3 opacity-40 transition-transform duration-200 ${openDrop === i ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Dropdown */}
                {link.children && openDrop === i && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white border border-border rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-1.5 min-w-[240px]">
                      {link.children.map((child, j) => (
                        <Link key={j} to={child.route}
                          className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] text-text/70 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200">
                          <div className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary transition-colors" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="tel:+902125673331"
              className="hidden md:flex items-center gap-1.5 text-[13px] text-text/60 hover:text-primary transition-colors duration-200">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 212 567 33 31
            </a>

            <Link to="/servis-talep"
              className="hidden md:flex px-5 py-2 bg-primary hover:bg-primary-dark text-white text-[13px] font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_15px_rgba(207,6,12,0.3)]">
              Servis Talep
            </Link>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface transition-colors">
              {mobileOpen ? (
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-[70px] overflow-y-auto animate-slide-up">
          <div className="p-6">
            {navLinks.map((link, i) => (
              <div key={i} className="border-b border-border/50">
                <button
                  onClick={() => link.children && setOpenDrop(openDrop === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-secondary font-semibold text-[15px]">
                  {link.name}
                  {link.children && (
                    <svg className={`w-4 h-4 text-text/40 transition-transform duration-200 ${openDrop === i ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {link.children && openDrop === i && (
                  <div className="pl-4 pb-3 space-y-1">
                    {link.children.map((child, j) => (
                      <Link key={j} to={child.route} onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm text-text/60 hover:text-primary transition-colors">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-8 space-y-3">
              <Link to="/servis-talep" onClick={() => setMobileOpen(false)}
                className="block text-center py-3.5 bg-primary text-white rounded-full font-semibold text-sm">
                Servis Talep
              </Link>
              <a href="tel:+902125673331"
                className="block text-center py-3.5 border border-border text-text rounded-full text-sm font-medium">
                +90 212 567 33 31
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
