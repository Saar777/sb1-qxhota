import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Header() {
  const { settings } = useSiteSettings();
  const location = useLocation();

  const headerStyle = {
    background: `linear-gradient(to right, ${settings.theme.headerGradientFrom}, ${settings.theme.headerGradientTo})`,
    color: settings.theme.headerTextColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                {settings.theme.logo ? (
                  <img 
                    src={settings.theme.logo} 
                    alt={settings.name} 
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-xl">A</span>
                )}
              </div>
              <span className="text-white text-xl font-semibold">{settings.name}</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={location.pathname === "/dashboard" ? "/" : "/dashboard"}
              className="text-white/80 hover:text-white transition-colors"
            >
              {location.pathname === "/dashboard" ? "View Site" : "Dashboard"}
            </Link>
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 rounded-xl font-medium 
                           hover:bg-white/20 transition-all duration-200 border border-white/20">
              SSO Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}