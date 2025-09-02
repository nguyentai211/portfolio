import React from 'react';
import { Mail, Download, Github, Phone, Globe, ChevronDown, User } from 'lucide-react';

interface HeroSectionProps {
  translations: any;
  personalData: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ translations, personalData }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <User size={48} className="text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {translations.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            {translations.title}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {translations.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 btn-enhanced"
          >
            <Mail size={20} />
            <span>{translations.buttons.getInTouch}</span>
          </a>
          <a
            href="/Nguyen_Cong_Khanh_Tai_CV.pdf"
            download
            className="flex items-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white btn-enhanced"
          >
            <Download size={20} />
            <span>{translations.buttons.downloadCV}</span>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 btn-enhanced"
          >
            <Github size={24} />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 btn-enhanced"
          >
            <Mail size={24} />
          </a>
          <a
            href={`tel:${personalData.phone}`}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 btn-enhanced"
          >
            <Phone size={24} />
          </a>
          <a
            href={personalData.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 btn-enhanced"
          >
            <Globe size={24} />
          </a>
        </div>

        <div className="mt-12">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;