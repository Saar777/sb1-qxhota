import React, { createContext, useContext, useState } from 'react';

interface SiteSettings {
  name: string;
  text1: string;
  text2: string;
  banner1: string;
  banner2: string;
  theme: {
    headerGradientFrom: string;
    headerGradientTo: string;
    headerTextColor: string;
    logo?: string;
  };
  services: {
    title: string;
    text1: string;
    text2: string;
  };
  tabs: Array<{
    name: string;
    icon: string;
    content: string;
  }>;
  plans: Array<{
    name: string;
    price: string;
    features: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  footer: {
    socials: Array<{
      name: string;
      href: string;
    }>;
    contact: string;
    copyright: string;
  };
  items: Array<{
    id: number;
    title: string;
    image: string;
    link: string;
    author: string;
  }>;
  courseItems: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
}

const defaultSettings: SiteSettings = {
  name: 'Autor.One',
  text1: 'Transform Your Ideas',
  text2: 'Into Reality With Our Solutions',
  banner1: 'Autoren',
  banner2: 'Kurse',
  theme: {
    headerGradientFrom: '#4F46E5',
    headerGradientTo: '#9333EA',
    headerTextColor: '#FFFFFF',
  },
  services: {
    title: 'Our Services',
    text1: 'Transform Your Ideas',
    text2: 'Into Reality With Our Solutions'
  },
  tabs: [
    {
      name: 'Basic Chat 1',
      icon: 'chat',
      content: 'Content for Basic Chat 1'
    },
    {
      name: 'Basic Chat 2',
      icon: 'document',
      content: 'Content for Basic Chat 2'
    },
    {
      name: 'File Manager',
      icon: 'folder',
      content: 'Content for File Manager'
    }
  ],
  plans: [
    {
      name: 'Basic',
      price: '$9/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    },
    {
      name: 'Pro',
      price: '$29/mo',
      features: ['All Basic features', 'Feature 6', 'Feature 7', 'Feature 8', 'Feature 9']
    },
    {
      name: 'Enterprise',
      price: '$99/mo',
      features: ['All Pro features', 'Feature 10', 'Feature 11', 'Feature 12', 'Feature 13']
    }
  ],
  faqs: [
    {
      question: 'What is Autor.One?',
      answer: 'Autor.One is a platform that helps you transform your ideas into reality.'
    },
    {
      question: 'How does it work?',
      answer: 'Our platform provides tools and resources to help you achieve your goals.'
    },
    {
      question: 'What are the benefits?',
      answer: 'You get access to powerful features and professional support.'
    }
  ],
  items: [
    {
      id: 1,
      title: "Book Title 1",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 1"
    },
    {
      id: 2,
      title: "Book Title 2",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 2"
    },
    {
      id: 3,
      title: "Book Title 3",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 3"
    },
    {
      id: 4,
      title: "Book Title 4",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 4"
    },
    {
      id: 5,
      title: "Book Title 5",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 5"
    },
    {
      id: 6,
      title: "Book Title 6",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 6"
    },
    {
      id: 7,
      title: "Book Title 7",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 7"
    },
    {
      id: 8,
      title: "Book Title 8",
      image: "https://placehold.co/200x280",
      link: "#",
      author: "Author Name 8"
    }
  ],
  courseItems: [
    {
      id: 1,
      title: "Course Title 1",
      description: "Course description 1 goes here with more details about the course content.",
      image: "https://placehold.co/400x300",
    },
    {
      id: 2,
      title: "Course Title 2",
      description: "Course description 2 goes here with more details about the course content.",
      image: "https://placehold.co/400x300",
    },
    {
      id: 3,
      title: "Course Title 3",
      description: "Course description 3 goes here with more details about the course content.",
      image: "https://placehold.co/400x300",
    },
    {
      id: 4,
      title: "Course Title 4",
      description: "Course description 4 goes here with more details about the course content.",
      image: "https://placehold.co/400x300",
    }
  ],
  footer: {
    socials: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' }
    ],
    contact: 'Contact us: contact@autor.one',
    copyright: '© 2024 Autor.One. All rights reserved.'
  }
};

const SiteSettingsContext = createContext<{
  settings: SiteSettings;
  updateSettings: (updates: Partial<SiteSettings>) => void;
}>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  const updateSettings = (updates: Partial<SiteSettings>) => {
    setSettings(current => ({
      ...current,
      ...updates,
    }));
  };

  return (
    <SiteSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export const useSiteSettings = () => useContext(SiteSettingsContext);