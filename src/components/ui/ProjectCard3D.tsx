import React, { useState, useRef, useCallback } from 'react';
import { Github, ExternalLink, Star, Users, Target, TrendingUp } from 'lucide-react';
import SkillTag from './SkillTag';
import type { ProjectItem, Translations } from '../../types';

interface ProjectCard3DProps {
  project: ProjectItem;
  translations: Translations;
  language: string;
  index: number;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ 
  project, 
  translations, 
  language, 
  index 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const longPressTimer = useRef<NodeJS.Timeout>();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = ((e.clientY - centerY) / rect.height) * -6; // Max 6 degrees
    const rotateY = ((e.clientX - centerX) / rect.width) * 6;
    
    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleLongPressStart = useCallback(() => {
    longPressTimer.current = setTimeout(() => {
      setIsFlipped(true);
    }, 500); // 500ms long press
  }, []);

  const handleLongPressEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (isFlipped) {
      setIsFlipped(false);
    }
  }, [isFlipped]);

  const cardStyle = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: 'transform 0.1s ease-out'
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full h-96 fade-in-section group cursor-pointer"
      style={{ 
        animationDelay: `${index * 0.2}s`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleLongPressStart}
      onMouseUp={handleLongPressEnd}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      onClick={handleClick}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ 
          transformStyle: 'preserve-3d',
          ...cardStyle
        }}
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full ring-0 hover:ring-4 hover:ring-blue-500/20 transition-all duration-300 relative group/card">
            {/* Project image with overlay effects */}
            <div className="h-48 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover/card:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover/card:w-20 transition-all duration-500"></div>
              </div>

              {/* Star decoration */}
              <div className="absolute top-4 right-4">
                <Star className="text-yellow-400 animate-pulse-slow" size={20} />
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description[language as keyof typeof project.description]}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech: string, techIndex: number) => (
                    <SkillTag
                      key={techIndex}
                      skill={tech}
                      index={techIndex}
                      variant="secondary"
                      size="sm"
                    />
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-semibold">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-800 hover:to-gray-900 hover:text-white btn-enhanced group/btn flex-1 justify-center text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">{translations.projects.buttons.code}</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 btn-enhanced group/btn flex-1 justify-center shadow-lg text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">{translations.projects.buttons.demo}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Long press hint */}
            <div className="absolute bottom-2 right-2 text-xs text-gray-400 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              Hold to flip
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl h-full p-6 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  <Star size={16} />
                </button>
              </div>

              <div className="space-y-4 flex-1">
                {/* Tech Stack */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">🛠️</span>
                    </div>
                    <h4 className="font-semibold">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role & Impact */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Users size={12} />
                    </div>
                    <h4 className="font-semibold">My Role</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Full-stack development, architecture design, and deployment
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Target size={12} />
                    </div>
                    <h4 className="font-semibold">Impact</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Enhanced user experience and improved system performance
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <TrendingUp size={20} className="mx-auto mb-1" />
                    <div className="text-xs opacity-80">Performance</div>
                    <div className="font-bold">+40%</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <Star size={20} className="mx-auto mb-1" />
                    <div className="text-xs opacity-80">User Rating</div>
                    <div className="font-bold">4.8/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard3D;