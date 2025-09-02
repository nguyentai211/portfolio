import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceSectionProps {
  translations: any;
  experienceData: any[];
  language: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  translations, 
  experienceData, 
  language 
}) => {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {translations.experience.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {translations.experience.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="timeline-line"></div>
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center timeline-item ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10 pulse-glow"></div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg card-hover glass-effect card-3d">
                    <div className="card-3d-inner">
                    <div className="flex items-center mb-3">
                      <Briefcase className="text-blue-600 mr-3 float-animation" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {exp.position[language]}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    {exp.location && (
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location[language]}</span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description[language]}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {exp.achievements[language].map((achievement: string, achIndex: number) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium skill-tag-enhanced"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;