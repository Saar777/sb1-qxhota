import React from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';
import { socialIcons } from '../utils/socialIcons';

export default function Footer() {
  const { settings } = useSiteSettings();

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <div className="text-white/90 text-sm">
            {settings.footer.copyright}
          </div>

          {/* Contact */}
          <div className="text-white/90">
            {settings.footer.contact}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {settings.footer.socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[item.name as keyof typeof socialIcons]}
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}