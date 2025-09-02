import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Code, Server, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  translations: any;
  personalData: any;
  language: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ translations, personalData, language }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="text-blue-600 animate-pulse-slow" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {translations.about.title}
              </span>
            </h2>
            <Sparkles className="text-purple-600 animate-pulse-slow" size={32} />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {translations.about.education}
                </h3>
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl text-gray-800 dark:text-white mb-2">
                  {personalData.education.university}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-3">
                  {personalData.education.degree[language]}
                </p>
                <p className="text-gray-500 dark:text-gray-400 flex items-center">
                  <Calendar size={18} className="mr-2 text-blue-600" />
                  {personalData.education.graduationDate[language]}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {translations.about.location}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg relative z-10">
                {personalData.location[language]}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Code size={28} />
                </div>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {translations.skills.languages}
                </span>
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {personalData.skills.languages.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-xl text-sm font-semibold skill-tag animate-fadeInUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl card-hover fade-in-section stagger-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full -translate-y-20 -translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Server size={28} />
                </div>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {translations.skills.frameworks}
                </span>
              </h3>
              <div className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-3">
                    {translations.skills.frameworksLabel}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {personalData.skills.frameworks.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-xl text-sm font-semibold skill-tag animate-fadeInUp`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-3">
                    {translations.skills.toolsLabel}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {personalData.skills.tools.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 text-green-800 dark:text-green-300 rounded-xl text-sm font-semibold skill-tag animate-fadeInUp`}
                        style={{ animationDelay: `${index * 0.1}s` }}
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