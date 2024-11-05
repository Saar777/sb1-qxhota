import React from 'react';
import { SEO } from '../utils/seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';
import Features from '../components/Features';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Home() {
  const { settings } = useSiteSettings();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <SEO 
        title={settings.name}
        description={`${settings.text1} - ${settings.text2}`}
        keywords="autor, writing, platform, services"
      />
      <Header />
      <main>
        <Hero />
        <Tabs />
        <Features />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}