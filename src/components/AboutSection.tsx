import React, { useEffect, useRef } from 'react';
import { User, GraduationCap, MapPin, Code, Wrench, Star, Sparkles } from 'lucide-react';
import { observeElements } from '../utils/animations';
import SectionHeader from './ui/SectionHeader';
import SkillTag from './ui/SkillTag';
import type { Translations, PersonalData } from '../types';

interface AboutSectionProps {
  translations: Translations;
  personalData: PersonalData;
  language: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  translations, 
  personalData, 
  language 
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeElements(sectionRef.current);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 nord:from-nord-bg nord:to-nord-surface tokyo-night:from-tokyo-bg tokyo-night:to-tokyo-surface dracula:from-dracula-bg dracula:to-dracula-surface catppuccin:from-catppuccin-bg catppuccin:to-catppuccin-surface relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title={translations.about.title}
          subtitle={translations.about.subtitle}
          leftIcon={User}
          rightIcon={Sparkles}
          leftIconColor="text-blue-500"
          rightIconColor="text-purple-500"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8 fade-in-section stagger-1">
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary bg-clip-text text-transparent">
                      {translations.about.education}
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 nord:text-nord-text tokyo-night:text-tokyo-text dracula:text-dracula-text catppuccin:text-catppuccin-text">
                  {personalData.education.university}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 nord:text-nord-text/80 tokyo-night:text-tokyo-text/80 dracula:text-dracula-text/80 catppuccin:text-catppuccin-text/80">
                  {personalData.education.degree[language as keyof typeof personalData.education.degree]}
                </p>
                <p className="text-gray-500 dark:text-gray-400 nord:text-nord-text/60 tokyo-night:text-tokyo-text/60 dracula:text-dracula-text/60 catppuccin:text-catppuccin-text/60 font-medium">
                  {personalData.education.graduationDate[language as keyof typeof personalData.education.graduationDate]}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {translations.about.location}
                    </span>
                  </h3>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 nord:text-nord-text tokyo-night:text-tokyo-text dracula:text-dracula-text catppuccin:text-catppuccin-text relative z-10">
                {personalData.location[language as keyof typeof personalData.location]}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8 fade-in-section stagger-2">
            {/* Programming Languages */}
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 nord:from-nord-secondary nord:to-nord-accent tokyo-night:from-tokyo-secondary tokyo-night:to-tokyo-accent dracula:from-dracula-secondary dracula:to-dracula-accent catppuccin:from-catppuccin-secondary catppuccin:to-catppuccin-accent text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Code size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 nord:from-nord-secondary nord:to-nord-accent tokyo-night:from-tokyo-secondary tokyo-night:to-tokyo-accent dracula:from-dracula-secondary dracula:to-dracula-accent catppuccin:from-catppuccin-secondary catppuccin:to-catppuccin-accent bg-clip-text text-transparent">
                      {translations.skills.languages}
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {personalData.skills.languages.map((skill: string, index: number) => (
                  <SkillTag
                    key={index}
                    skill={skill}
                    index={index}
                    variant="primary"
                  />
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Star size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {translations.skills.frameworksLabel}
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {personalData.skills.frameworks.map((skill: string, index: number) => (
                  <SkillTag
                    key={index}
                    skill={skill}
                    index={index}
                    variant="secondary"
                  />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Wrench size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {translations.skills.toolsLabel}
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {personalData.skills.tools.map((skill: string, index: number) => (
                  <SkillTag
                    key={index}
                    skill={skill}
                    index={index}
                    variant="accent"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;