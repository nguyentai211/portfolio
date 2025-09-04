import type { ThemeOption } from '../types';

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'light',
    name: 'Light',
    description: 'Clean and bright',
    colors: {
      bg: '#FFFFFF',
      surface: '#F8FAFC',
      text: '#1F2937',
      accent: '#3B82F6',
      secondary: '#8B5CF6'
    }
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Modern and sleek',
    colors: {
      bg: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB',
      accent: '#3B82F6',
      secondary: '#8B5CF6'
    }
  }
];

export const getThemeColors = (theme: string) => {
  return THEME_OPTIONS.find(t => t.id === theme)?.colors || THEME_OPTIONS[0].colors;
};