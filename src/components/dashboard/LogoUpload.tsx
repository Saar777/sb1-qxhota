import React, { useRef } from 'react';

interface LogoUploadProps {
  currentLogo?: string;
  onLogoChange: (logo: string) => void;
}

export default function LogoUpload({ currentLogo, onLogoChange }: LogoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLogoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label className="w-48 text-sm font-medium text-gray-700">
        Site Logo
      </label>
      <div className="flex items-center gap-4">
        {currentLogo && (
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img 
              src={currentLogo} 
              alt="Site Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {currentLogo ? 'Change Logo' : 'Upload Logo'}
        </button>
        {currentLogo && (
          <button
            onClick={() => onLogoChange('')}
            className="text-red-600 hover:text-red-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}