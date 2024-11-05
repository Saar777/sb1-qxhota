import React from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Services() {
  const { settings } = useSiteSettings();
  
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{settings.services.title}</h2>
          <p className="text-xl text-gray-600">{settings.services.text1}</p>
          <p className="text-xl text-gray-600">{settings.services.text2}</p>
        </div>
      </div>
    </section>
  );
}