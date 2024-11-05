import React from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Testimonials() {
  const { settings } = useSiteSettings();
  
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {settings.text1}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {settings.text2}
          </p>
        </div>
      </div>
    </section>
  );
}