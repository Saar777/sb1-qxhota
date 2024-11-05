import React, { useState } from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccordionSection from '../components/dashboard/AccordionSection';
import ColorPicker from '../components/dashboard/ColorPicker';
import LogoUpload from '../components/dashboard/LogoUpload';
import { icons } from '../utils/icons';

export default function Dashboard() {
  const { settings, updateSettings } = useSiteSettings();
  const [openSections, setOpenSections] = useState({
    theme: true,
    services: false,
    footer: false,
    bot1: false,
    bot2: false,
    banner1: false,
    banner2: false,
    fileManager: false,
    faq: false,
    tools: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Theme & Content Settings */}
          <AccordionSection
            title="Theme & Content Settings"
            icon={icons.theme}
            isOpen={openSections.theme}
            onToggle={() => toggleSection('theme')}
          >
            <div className="space-y-6">
              <LogoUpload
                currentLogo={settings.theme.logo}
                onLogoChange={(logo) => updateSettings({
                  theme: { ...settings.theme, logo }
                })}
              />

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Site Name
                </label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => updateSettings({ name: e.target.value })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Text Line 1
                </label>
                <input
                  type="text"
                  value={settings.text1}
                  onChange={(e) => updateSettings({ text1: e.target.value })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Text Line 2
                </label>
                <input
                  type="text"
                  value={settings.text2}
                  onChange={(e) => updateSettings({ text2: e.target.value })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <ColorPicker
                label="Header Gradient Start"
                value={settings.theme.headerGradientFrom}
                onChange={(value) => updateSettings({
                  theme: { ...settings.theme, headerGradientFrom: value }
                })}
              />

              <ColorPicker
                label="Header Gradient End"
                value={settings.theme.headerGradientTo}
                onChange={(value) => updateSettings({
                  theme: { ...settings.theme, headerGradientTo: value }
                })}
              />

              <div className="flex justify-end">
                <button
                  onClick={() => {}}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </AccordionSection>

          {/* Services */}
          <AccordionSection
            title="Services"
            icon={icons.services}
            isOpen={openSections.services}
            onToggle={() => toggleSection('services')}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={settings.services.title}
                  onChange={(e) => updateSettings({
                    services: { ...settings.services, title: e.target.value }
                  })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Text Line 1
                </label>
                <input
                  type="text"
                  value={settings.services.text1}
                  onChange={(e) => updateSettings({
                    services: { ...settings.services, text1: e.target.value }
                  })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Text Line 2
                </label>
                <input
                  type="text"
                  value={settings.services.text2}
                  onChange={(e) => updateSettings({
                    services: { ...settings.services, text2: e.target.value }
                  })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {}}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </AccordionSection>

          {/* Bot 1 */}
          <AccordionSection
            title="Bot 1"
            icon={icons.bot}
            isOpen={openSections.bot1}
            onToggle={() => toggleSection('bot1')}
          >
            <div className="space-y-6">
              {/* Bot 1 settings will be implemented later */}
              <p className="text-gray-500">Bot 1 settings coming soon</p>
            </div>
          </AccordionSection>

          {/* Bot 2 */}
          <AccordionSection
            title="Bot 2"
            icon={icons.bot}
            isOpen={openSections.bot2}
            onToggle={() => toggleSection('bot2')}
          >
            <div className="space-y-6">
              {/* Bot 2 settings will be implemented later */}
              <p className="text-gray-500">Bot 2 settings coming soon</p>
            </div>
          </AccordionSection>

          {/* Banner 1 */}
          <AccordionSection
            title="Banner 1"
            icon={icons.banner}
            isOpen={openSections.banner1}
            onToggle={() => toggleSection('banner1')}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Banner Title
                </label>
                <input
                  type="text"
                  value={settings.banner1}
                  onChange={(e) => updateSettings({ banner1: e.target.value })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Banner items management will be added here */}
            </div>
          </AccordionSection>

          {/* Banner 2 */}
          <AccordionSection
            title="Banner 2"
            icon={icons.banner}
            isOpen={openSections.banner2}
            onToggle={() => toggleSection('banner2')}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Banner Title
                </label>
                <input
                  type="text"
                  value={settings.banner2}
                  onChange={(e) => updateSettings({ banner2: e.target.value })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {/* Banner items management will be added here */}
            </div>
          </AccordionSection>

          {/* File Manager */}
          <AccordionSection
            title="File Manager"
            icon={icons.file}
            isOpen={openSections.fileManager}
            onToggle={() => toggleSection('fileManager')}
          >
            <div className="space-y-6">
              {/* File Manager functionality will be implemented later */}
              <p className="text-gray-500">File Manager coming soon</p>
            </div>
          </AccordionSection>

          {/* FAQ */}
          <AccordionSection
            title="FAQ"
            icon={icons.faq}
            isOpen={openSections.faq}
            onToggle={() => toggleSection('faq')}
          >
            <div className="space-y-6">
              {settings.faqs.map((faq, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => {
                        const newFaqs = [...settings.faqs];
                        newFaqs[index] = { ...faq, question: e.target.value };
                        updateSettings({ faqs: newFaqs });
                      }}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-2"
                      placeholder="Question"
                    />
                    <textarea
                      value={faq.answer}
                      onChange={(e) => {
                        const newFaqs = [...settings.faqs];
                        newFaqs[index] = { ...faq, answer: e.target.value };
                        updateSettings({ faqs: newFaqs });
                      }}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Answer"
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  onClick={() => {}}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </AccordionSection>

          {/* Tools */}
          <AccordionSection
            title="Tools"
            icon={icons.tools}
            isOpen={openSections.tools}
            onToggle={() => toggleSection('tools')}
          >
            <div className="space-y-6">
              {/* Tools functionality will be implemented later */}
              <p className="text-gray-500">Tools coming soon</p>
            </div>
          </AccordionSection>

          {/* Footer */}
          <AccordionSection
            title="Footer"
            icon={icons.footer}
            isOpen={openSections.footer}
            onToggle={() => toggleSection('footer')}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Copyright Text
                </label>
                <input
                  type="text"
                  value={settings.footer.copyright}
                  onChange={(e) => updateSettings({
                    footer: { ...settings.footer, copyright: e.target.value }
                  })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium text-gray-700">
                  Contact Text
                </label>
                <input
                  type="text"
                  value={settings.footer.contact}
                  onChange={(e) => updateSettings({
                    footer: { ...settings.footer, contact: e.target.value }
                  })}
                  className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Social Links
                </label>
                {settings.footer.socials.map((social, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      type="text"
                      value={social.name}
                      onChange={(e) => {
                        const newSocials = [...settings.footer.socials];
                        newSocials[index] = { ...social, name: e.target.value };
                        updateSettings({
                          footer: {
                            ...settings.footer,
                            socials: newSocials
                          }
                        });
                      }}
                      className="w-48 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Social Name"
                    />
                    <input
                      type="text"
                      value={social.href}
                      onChange={(e) => {
                        const newSocials = [...settings.footer.socials];
                        newSocials[index] = { ...social, href: e.target.value };
                        updateSettings({
                          footer: {
                            ...settings.footer,
                            socials: newSocials
                          }
                        });
                      }}
                      className="flex-1 max-w-xs rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="URL"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {}}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </AccordionSection>
        </div>
      </div>
      <Footer />
    </div>
  );
}