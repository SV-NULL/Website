// File: components/Footer.tsx
'use client';

import { Instagram, Linkedin, Github, ChevronRight, Phone, MapPin, Mail } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <div className="flex space-x-4">
            {[
              { icon: <Instagram />, href: '#' },
              { icon: <Linkedin />, href: '#' },
              { icon: <Github />, href: '#' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors"
              >
                {React.cloneElement(item.icon, { className: 'w-5 h-5 text-white' })}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Informatie</h3>
          <ul className="list-none space-y-3 text-gray-400">
            <li>
              <a href="/statuten" className="flex items-center hover:text-yellow-500">
                <ChevronRight className="w-5 h-5 mr-2" /> Statuten
              </a>
            </li>
            <li>
              <a href="/documents" className="flex items-center hover:text-yellow-500">
                <ChevronRight className="w-5 h-5 mr-2" /> Verenigingsdocumenten
              </a>
            </li>
            <li>
              <a href="/privacy-cookies" className="flex items-center hover:text-yellow-500">
                <ChevronRight className="w-5 h-5 mr-2" /> Privacy & Cookies
              </a>
            </li>
          </ul>
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
    </footer>
  );
}
