import React from 'react';

interface SkillTagProps {
  skill: string;
  index: number;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
}

const SkillTag: React.FC<SkillTagProps> = ({ 
  skill, 
  index, 
  variant = 'primary',
  size = 'md'
}) => {
  const variants = {
    primary: 'from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300',
    secondary: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300',
    accent: 'from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 text-green-800 dark:text-green-300'
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm'
  };

  return (
    <span
      className={`${sizes[size]} bg-gradient-to-r ${variants[variant]} rounded-xl font-semibold skill-tag animate-fadeInUp`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill}
    </span>
  );
};

export default SkillTag;