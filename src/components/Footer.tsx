import React from 'react';
import { Github, Mail, Globe } from 'lucide-react';

interface FooterProps {
  translations: any;
  personalData: any;
}

const Footer: React.FC<FooterProps> = ({ translations, personalData }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 gradient-text-animated neon-glow">
            {translations.name}
          </div>
          <p className="text-gray-400 mb-6">
            {translations.footer.description}
          </p>
          
          <div className="flex justify-center space-x-6 mb-8 stagger-animation">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 enhanced-hover magnetic breathe-animation glass-effect"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 enhanced-hover magnetic breathe-animation glass-effect"
            >
              <Mail size={24} />
            </a>
            <a
              href={personalData.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 enhanced-hover magnetic breathe-animation glass-effect"
            >
              <Globe size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 {translations.name}. {translations.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;