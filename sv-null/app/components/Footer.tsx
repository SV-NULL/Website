// File: components/Footer.tsx
'use client';

import { Instagram, Linkedin, Github, ChevronRight, Phone, MapPin, Mail } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Twee opties voor de footer: in het midden geschaald of de volledige breedte. Nu is er gekozen voor in het midden geschaald */}
      <div className="max-w-4xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8"> */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <div className="flex space-x-4">
            {[
              { icon: <Instagram />, href: 'https://www.instagram.com/s.v.null/' },
              { icon: <Linkedin />, href: 'https://www.linkedin.com/company/studievereniging-null' },
              { icon: <Github />, href: 'https://github.com/SV-NULL' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 transition-colors"
              >
                {React.cloneElement(item.icon, { className: 'w-5 h-5 text-white group-hover:text-black' })}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Informatie</h3>
          <div className='space-y-3'>
              <a href="/statuten" className="flex items-center hover:text-yellow-500">
                <ChevronRight className="w-5 h-5 mr-2" /> Statuten
              </a>
              <a href="/verenigingsdocumenten" className="flex items-center hover:text-yellow-500">
                <ChevronRight className="w-5 h-5 mr-2" /> Verenigingsdocumenten
              </a>
              <a href="/privacy-cookies" className="flex items-center hover:text-yellow-500">
                <ChevronRight className="w-5 h-5 mr-2" /> Privacy & Cookies
              </a>
              </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <address className="not-italic space-y-3 text-gray-400">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> 6717 JS Ede
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" /> +31 06 23540641
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:svnull@che.nl" className="hover:text-yellow-500">
                svnull@che.nl
              </a>
            </div>
          </address>
        </div>
      </div>
      <p className='text-center text-gray-500 py-4 '>
        Copyright © 2025 Studievereniging NULL
      </p>
    </footer>
  );
}
