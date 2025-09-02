import React from 'react';
import { GraduationCap, MapPin, Calendar, Code, Server } from 'lucide-react';

interface AboutSectionProps {
  translations: any;
  personalData: any;
  language: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ translations, personalData, language }) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {translations.about.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{translations.about.education}</h3>
              </div>
              <div>
                <h4 className="font-semibold text-lg">{personalData.education.university}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {personalData.education.degree[language]}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  <Calendar size={16} className="mr-1" />
                  {personalData.education.graduationDate[language]}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{translations.about.location}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {personalData.location[language]}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="text-blue-600 mr-3" size={24} />
                {translations.skills.languages}
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalData.skills.languages.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Server className="text-blue-600 mr-3" size={24} />
                {translations.skills.frameworks}
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {translations.skills.frameworksLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalData.skills.frameworks.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {translations.skills.toolsLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalData.skills.tools.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;