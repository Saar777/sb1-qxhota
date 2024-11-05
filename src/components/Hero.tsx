import React from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Hero() {
  const { settings } = useSiteSettings();
  
  return (
    <section className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {settings.text1}
            </h2>
            <p className="text-xl text-gray-600">
              {settings.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}