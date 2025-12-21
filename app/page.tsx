'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ServiceList } from '@/components/ServiceList';
import { GramaServiceType } from '@/types';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Bike, Ambulance, Building2, Stethoscope,
  Wrench, Dog, GraduationCap, ShoppingBasket,
  ChevronLeft, Languages
} from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<GramaServiceType | null>(null);
  const { t, language, setLanguage } = useLanguage();

  const getCategoryLabel = (id: GramaServiceType) => {
    return t.categories[id as keyof typeof t.categories];
  };

  const categories: { id: GramaServiceType; label: string; icon: any; color: string }[] = [
    { id: 'emergency', label: 'Emergency', icon: Ambulance, color: 'bg-red-100 text-red-600' },
    { id: 'transport', label: 'Transport', icon: Bike, color: 'bg-blue-100 text-blue-600' },
    { id: 'health', label: 'Health', icon: Stethoscope, color: 'bg-green-100 text-green-600' },
    { id: 'panchayat', label: 'Panchayat', icon: Building2, color: 'bg-orange-100 text-orange-600' },
    { id: 'services', label: 'Services', icon: Wrench, color: 'bg-gray-100 text-gray-600' },
    { id: 'veterinary', label: 'Veterinary', icon: Dog, color: 'bg-yellow-100 text-yellow-600' },
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'bg-indigo-100 text-indigo-600' },
    { id: 'daily_needs', label: 'Daily Needs', icon: ShoppingBasket, color: 'bg-pink-100 text-pink-600' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ml' : 'en');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white pt-10 pb-16 px-6 relative overflow-hidden rounded-b-[2.5rem] shadow-xl">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
          <Building2 size={200} />
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold transition-all border border-white/30"
        >
          <Languages size={14} />
          {language === 'en' ? 'മലയാളം' : 'English'}
        </button>

        <div className="relative z-10 max-w-lg mx-auto">
          <p className="text-indigo-200 text-sm font-semibold tracking-wider uppercase mb-1">{t.welcome}</p>
          <h1 className="text-3xl font-bold mb-2">{t.appTitle}</h1>
          <p className="text-indigo-100/90 text-sm">{t.description}</p>
        </div>
      </header>

      {/* Content Container */}
      <div className="flex-1 px-4 -mt-8 pb-8 z-20">
        <div className="max-w-lg mx-auto">

          {selectedCategory ? (
            // Detail View
            <div className="bg-white rounded-2xl shadow-lg min-h-[60vh] flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <h2 className="text-lg font-bold text-gray-800 ml-2 capitalize">
                  {getCategoryLabel(selectedCategory)}
                </h2>
              </div>
              <div className="p-4 flex-1">
                <ServiceList type={selectedCategory} />
              </div>
            </div>
          ) : (
            // Grid View
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex flex-col items-center text-center space-y-3 border border-transparent hover:border-indigo-50"
                  dir={language === 'ml' ? 'rtl' : 'ltr'}
                >
                  <div className={`p-4 rounded-full ${cat.color} bg-opacity-50`}>
                    <cat.icon className="w-8 h-8" />
                  </div>
                  <span className={`font-semibold text-gray-700 leading-tight ${language === 'ml' ? 'text-base' : 'text-sm'}`}>
                    {getCategoryLabel(cat.id)}
                  </span>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      <div className="text-center py-4 text-gray-400 text-xs flex flex-col items-center gap-2">
        <div className="relative h-6 w-24 opacity-75">
          <Image src="/logo-dark.png" alt="Vallaroo" fill className="object-contain" />
        </div>
        <p>{t.footer}</p>
      </div>
    </main>
  );
}
