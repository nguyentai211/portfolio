import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Star, Zap } from 'lucide-react';

interface ProjectsSectionProps {
  translations: any;
  projectsData: any[];
  language: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  translations, 
  projectsData, 
  language 
}) => {
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
    <section id="projects" className="py-20 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Zap className="text-yellow-500 animate-pulse-slow" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {translations.projects.title}
              </span>
            </h2>
            <Zap className="text-cyan-500 animate-pulse-slow" size={32} />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden card-hover fade-in-section group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project image with overlay effects */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Star decoration */}
                <div className="absolute top-4 right-4">
                  <Star className="text-yellow-400 animate-pulse-slow" size={24} />
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description[language]}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {translations.projects.keyFeatures}
                    </span>
                  </h4>
                  <ul className="space-y-2">
                    {project.features[language].slice(0, 3).map((feature: string, featureIndex: number) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start text-sm text-gray-600 dark:text-gray-300 animate-fadeInUp group/feature"
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300"></div>
                        <span className="group-hover/feature:text-gray-800 dark:group-hover/feature:text-gray-100 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold skill-tag animate-scaleIn hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-800 dark:hover:text-blue-300`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-500 dark:text-gray-400 rounded-xl text-xs font-semibold">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-800 hover:to-gray-900 hover:text-white btn-enhanced group/btn flex-1 justify-center"
                  >
                    <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">{translations.projects.buttons.code}</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 btn-enhanced group/btn flex-1 justify-center shadow-lg"
                    >
                      <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">{translations.projects.buttons.demo}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;