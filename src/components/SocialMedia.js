import React from 'react';
import { LINKEDIN_POSTS, SOCIAL_LINKS } from '../data';

export default function SocialMedia() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-site mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase">Sosyal Medya</span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-bold text-secondary leading-[1.1]">
            Bizi <span className="text-primary">Takip Edin</span>
          </h2>
          <p className="text-text text-lg mt-4 max-w-xl mx-auto">
            LinkedIn, Instagram ve YouTube'da güncel paylaşımlarımızı takip edin.
          </p>
        </div>

        {/* LinkedIn Posts */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {LINKEDIN_POSTS.map((post, i) => (
            <div key={i} className="reveal card-3d bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-400"
              style={{ animationDelay: `${i * 120}ms` }}>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={post.img} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0077B5] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    LinkedIn
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {post.date}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-secondary font-bold text-[15px] mb-2">{post.title}</h3>
                <p className="text-text text-sm leading-relaxed mb-3 line-clamp-2">{post.text}</p>
                {post.specs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.specs.map((spec, j) => (
                      <span key={j} className="bg-primary/5 text-primary text-[10px] font-medium px-2 py-0.5 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-text/50">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.121 14.12a3 3 0 11-4.242-4.242 3 3 0 014.242 4.242zm-4.242 4.242a3 3 0 11-4.242-4.242 3 3 0 014.242 4.242z" />
                  </svg>
                  <span>{post.likes} beğeni</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="reveal flex flex-wrap justify-center gap-4">
          {[
            { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z', color: '#0077B5' },
            { name: 'Instagram', url: SOCIAL_LINKS.instagram, icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z', color: '#E4405F' },
            { name: 'YouTube', url: SOCIAL_LINKS.youtube, icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z', color: '#FF0000' },
            { name: 'Facebook', url: SOCIAL_LINKS.facebook, icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', color: '#1877F2' },
          ].map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border hover:shadow-lg transition-all duration-300"
              style={{ '--social-color': social.color }}>
              <svg className="w-5 h-5 transition-colors duration-300" style={{ color: social.color }} viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon} />
              </svg>
              <span className="text-secondary font-semibold text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
