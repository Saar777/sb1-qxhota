import React, { useState } from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';
import { icons } from '../utils/icons';

export default function Tabs() {
  const { settings } = useSiteSettings();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white pb-32">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 min-h-[600px]">
          {/* Vertical Tabs */}
          <div className="w-64 flex flex-col gap-2">
            {settings.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === index
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                {icons[tab.icon as keyof typeof icons]}
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {settings.tabs[activeTab].name}
            </h3>
            <p className="text-gray-600">
              {settings.tabs[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}