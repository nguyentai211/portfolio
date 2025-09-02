import React from 'react';
import { Mail, Phone, Github, Globe } from 'lucide-react';

interface ContactSectionProps {
  translations: any;
  personalData: any;
  language: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  translations, 
  personalData, 
  language 
}) => {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {translations.contact.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {translations.contact.info}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {language === 'en' ? 'Phone' : 'Điện Thoại'}
                  </p>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Github className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">GitHub</p>
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalData.github.replace('https://', '')}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Globe className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {language === 'en' ? 'Portfolio' : 'Hồ Sơ'}
                  </p>
                  <a
                    href={personalData.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalData.portfolio.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {translations.contact.form.title}
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={translations.contact.form.placeholders.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={translations.contact.form.placeholders.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder={translations.contact.form.placeholders.message}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {translations.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;