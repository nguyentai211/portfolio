import React, { useState } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { THEME_OPTIONS } from '../../constants/themes';
import type { Theme } from '../../types';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  currentTheme, 
  onThemeChange, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentThemeOption = THEME_OPTIONS.find(t => t.id === currentTheme);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface text-gray-600 dark:text-gray-300 nord:text-nord-text tokyo-night:text-tokyo-text dracula:text-dracula-text catppuccin:text-catppuccin-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white btn-enhanced group transition-all duration-300"
        title="Change theme"
      >
        <Palette size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-sm font-medium hidden sm:inline">{currentThemeOption?.name}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 nord:bg-nord-surface tokyo-night:bg-tokyo-surface dracula:bg-dracula-surface catppuccin:bg-catppuccin-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 nord:border-nord-surface tokyo-night:border-tokyo-surface dracula:border-dracula-surface catppuccin:border-catppuccin-surface z-50 overflow-hidden animate-fadeInUp">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 nord:text-nord-text tokyo-night:text-tokyo-text dracula:text-dracula-text catppuccin:text-catppuccin-text">
                Choose Theme
              </h3>
              <div className="space-y-2">
                {THEME_OPTIONS.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      onThemeChange(themeOption.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      currentTheme === themeOption.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 nord:hover:bg-nord-bg tokyo-night:hover:bg-tokyo-bg dracula:hover:bg-dracula-bg catppuccin:hover:bg-catppuccin-bg'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white/20 relative overflow-hidden"
                        style={{ backgroundColor: themeOption.colors.bg }}
                      >
                        <div 
                          className="absolute inset-0 opacity-60"
                          style={{ backgroundColor: themeOption.colors.accent }}
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-sm">{themeOption.name}</p>
                        <p className={`text-xs ${
                          currentTheme === themeOption.id 
                            ? 'text-white/80' 
                            : 'text-gray-500 dark:text-gray-400 nord:text-nord-text/70 tokyo-night:text-tokyo-text/70 dracula:text-dracula-text/70 catppuccin:text-catppuccin-text/70'
                        }`}>
                          {themeOption.description}
                        </p>
                      </div>
                    </div>
                    {currentTheme === themeOption.id && (
                      <Check size={20} className="text-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;