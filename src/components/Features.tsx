import React from 'react';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Features() {
  const { settings } = useSiteSettings();

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex gap-12">
          {/* Banner 1 - 4x2 grid with scrolling */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {settings.banner1}
            </h3>
            <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-4 gap-6 auto-rows-max">
                {settings.items.map((item) => (
                  <a 
                    key={item.id}
                    href={item.link}
                    className="transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {item.author}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Banner 2 - 2x2 grid with scrolling */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {settings.banner2}
            </h3>
            <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-2 gap-6 auto-rows-max">
                {settings.courseItems.map((item) => (
                  <div 
                    key={item.id}
                    className="card transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 p-4">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}