import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import SkillTag from './SkillTag';
import type { ProjectItem, Translations } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  translations: Translations;
  language: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  translations, 
  language, 
  index 
}) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface rounded-2xl shadow-xl overflow-hidden card-hover fade-in-section group relative"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Project image with overlay effects */}
      <div className="h-56 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
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
        <p className="text-gray-600 dark:text-gray-300 nord:text-nord-text/80 tokyo-night:text-tokyo-text/80 dracula:text-dracula-text/80 catppuccin:text-catppuccin-text/80 mb-6 leading-relaxed">
          {project.description[language as keyof typeof project.description]}
        </p>
        
        <div className="mb-6">
          <h4 className="font-bold text-lg mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary bg-clip-text text-transparent">
              {translations.projects.keyFeatures}
            </span>
          </h4>
          <ul className="space-y-2">
            {project.features[language as keyof typeof project.features].slice(0, 3).map((feature: string, featureIndex: number) => (
              <li 
                key={featureIndex} 
                className="flex items-start text-sm text-gray-600 dark:text-gray-300 nord:text-nord-text/80 tokyo-night:text-tokyo-text/80 dracula:text-dracula-text/80 catppuccin:text-catppuccin-text/80 animate-fadeInUp group/feature"
                style={{ animationDelay: `${featureIndex * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary rounded-full mt-2 mr-3 flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/feature:text-gray-800 dark:group-hover/feature:text-gray-100 nord:group-hover/feature:text-nord-text tokyo-night:group-hover/feature:text-tokyo-text dracula:group-hover/feature:text-dracula-text catppuccin:group-hover/feature:text-catppuccin-text transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech: string, techIndex: number) => (
              <SkillTag
                key={techIndex}
                skill={tech}
                index={techIndex}
                variant="secondary"
                size="sm"
              />
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
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 nord:from-nord-bg nord:to-nord-surface tokyo-night:from-tokyo-bg tokyo-night:to-tokyo-surface dracula:from-dracula-bg dracula:to-dracula-surface catppuccin:from-catppuccin-bg catppuccin:to-catppuccin-surface text-gray-700 dark:text-gray-300 nord:text-nord-text tokyo-night:text-tokyo-text dracula:text-dracula-text catppuccin:text-catppuccin-text rounded-xl hover:from-gray-800 hover:to-gray-900 hover:text-white btn-enhanced group/btn flex-1 justify-center"
          >
            <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="font-medium">{translations.projects.buttons.code}</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 nord:from-nord-accent nord:to-nord-secondary tokyo-night:from-tokyo-accent tokyo-night:to-tokyo-secondary dracula:from-dracula-accent dracula:to-dracula-secondary catppuccin:from-catppuccin-accent catppuccin:to-catppuccin-secondary text-white rounded-xl hover:from-blue-700 hover:to-purple-700 btn-enhanced group/btn flex-1 justify-center shadow-lg"
            >
              <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="font-medium">{translations.projects.buttons.demo}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;