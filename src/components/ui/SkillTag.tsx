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
    primary: 'from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 nord:from-nord-accent/20 nord:to-nord-secondary/20 tokyo-night:from-tokyo-accent/20 tokyo-night:to-tokyo-secondary/20 dracula:from-dracula-accent/20 dracula:to-dracula-secondary/20 catppuccin:from-catppuccin-accent/20 catppuccin:to-catppuccin-secondary/20 text-blue-800 dark:text-blue-300 nord:text-nord-accent tokyo-night:text-tokyo-accent dracula:text-dracula-accent catppuccin:text-catppuccin-accent',
    secondary: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 nord:from-nord-secondary/20 nord:to-nord-accent/20 tokyo-night:from-tokyo-secondary/20 tokyo-night:to-tokyo-accent/20 dracula:from-dracula-secondary/20 dracula:to-dracula-accent/20 catppuccin:from-catppuccin-secondary/20 catppuccin:to-catppuccin-accent/20 text-purple-800 dark:text-purple-300 nord:text-nord-secondary tokyo-night:text-tokyo-secondary dracula:text-dracula-secondary catppuccin:text-catppuccin-secondary',
    accent: 'from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 nord:from-nord-secondary/30 nord:to-nord-accent/30 tokyo-night:from-tokyo-secondary/30 tokyo-night:to-tokyo-accent/30 dracula:from-dracula-secondary/30 dracula:to-dracula-accent/30 catppuccin:from-catppuccin-secondary/30 catppuccin:to-catppuccin-accent/30 text-green-800 dark:text-green-300 nord:text-nord-secondary tokyo-night:text-tokyo-secondary dracula:text-dracula-secondary catppuccin:text-catppuccin-secondary'
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