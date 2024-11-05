import React from 'react';

interface AccordionSectionProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  customActions?: React.ReactNode;
}

export default function AccordionSection({ 
  title, 
  icon, 
  isOpen, 
  onToggle, 
  children,
  customActions 
}: AccordionSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {customActions}
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[2000px] p-6' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}