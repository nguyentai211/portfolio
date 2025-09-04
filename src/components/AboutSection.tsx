import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Code, Server } from 'lucide-react';
import { observeElements } from '../utils/animations';
import SectionHeader from './ui/SectionHeader';
import SkillTag from './ui/SkillTag';
import type { Translations, PersonalData } from '../types';

interface AboutSectionProps {
  translations: Translations;
  personalData: PersonalData;
  language: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ translations, personalData, language }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeElements(sectionRef.current);
  }, []);

  return (
    <section id="about" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={translations.about.title}
          subtitle={translations.about.subtitle}
          leftIcon={GraduationCap}
          rightIcon={Code}
          leftIconColor="text-blue-500"
          rightIconColor="text-purple-500"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-1 relative overflow-hidden group">
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary bg-clip-text text-transparent">
                  {translations.about.education}
                </h3>
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl text-gray-800 dark:text-white nord:text-nord-text tokyo-night:text-tokyo-text dracula:text-dracula-text catppuccin:text-catppuccin-text mb-2">
                  {personalData.education.university}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 nord:text-nord-text/80 tokyo-night:text-tokyo-text/80 dracula:text-dracula-text/80 catppuccin:text-catppuccin-text/80 text-lg mb-3">
                  {personalData.education.degree[language as keyof typeof personalData.education.degree]}
                </p>
                <p className="text-gray-500 dark:text-gray-400 nord:text-nord-text/60 tokyo-night:text-tokyo-text/60 dracula:text-dracula-text/60 catppuccin:text-catppuccin-text/60 flex items-center">
                  <Calendar size={18} className="mr-2 text-blue-600 nord:text-nord-accent tokyo-night:text-tokyo-accent dracula:text-dracula-accent catppuccin:text-catppuccin-accent" />
                  {personalData.education.graduationDate[language as keyof typeof personalData.education.graduationDate]}
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 nord:from-nord-secondary nord:to-nord-accent tokyo-night:from-tokyo-secondary tokyo-night:to-tokyo-accent dracula:from-dracula-secondary dracula:to-dracula-accent catppuccin:from-catppuccin-secondary catppuccin:to-catppuccin-accent text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 nord:from-nord-secondary nord:to-nord-accent tokyo-night:from-tokyo-secondary tokyo-night:to-tokyo-accent dracula:from-dracula-secondary dracula:to-dracula-accent catppuccin:from-catppuccin-secondary catppuccin:to-catppuccin-accent bg-clip-text text-transparent">
                  {translations.about.location}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 nord:text-nord-text/80 tokyo-night:text-tokyo-text/80 dracula:text-dracula-text/80 catppuccin:text-catppuccin-text/80 text-lg relative z-10">
                {personalData.location[language as keyof typeof personalData.location]}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Programming Languages */}
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Code size={28} />
                </div>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary bg-clip-text text-transparent">
                  {translations.skills.languages}
                </span>
              </h3>
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

            {/* Frameworks & Tools */}
            <div className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full -translate-y-20 -translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 nord:from-nord-secondary nord:to-nord-accent tokyo-night:from-tokyo-secondary tokyo-night:to-tokyo-accent dracula:from-dracula-secondary dracula:to-dracula-accent catppuccin:from-catppuccin-secondary catppuccin:to-catppuccin-accent text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Server size={28} />
                </div>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 nord:from-nord-secondary nord:to-nord-accent tokyo-night:from-tokyo-secondary tokyo-night:to-tokyo-accent dracula:from-dracula-secondary dracula:to-dracula-accent catppuccin:from-catppuccin-secondary catppuccin:to-catppuccin-accent bg-clip-text text-transparent">
                  {translations.skills.frameworks}
                </span>
              </h3>
              <div className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 nord:from-nord-text nord:to-nord-text/80 tokyo-night:from-tokyo-text tokyo-night:to-tokyo-text/80 dracula:from-dracula-text dracula:to-dracula-text/80 catppuccin:from-catppuccin-text catppuccin:to-catppuccin-text/80 bg-clip-text text-transparent mb-3">
                    {translations.skills.frameworksLabel}
                  </h4>
                  <div className="flex flex-wrap gap-3">
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
                <div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 nord:from-nord-text nord:to-nord-text/80 tokyo-night:from-tokyo-text tokyo-night:to-tokyo-text/80 dracula:from-dracula-text dracula:to-dracula-text/80 catppuccin:from-catppuccin-text catppuccin:to-catppuccin-text/80 bg-clip-text text-transparent mb-3">
                    {translations.skills.toolsLabel}
                  </h4>
                  <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;