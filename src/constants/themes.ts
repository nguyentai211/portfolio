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
  },
  {
    id: 'nord',
    name: 'Nord',
    description: 'Elegant dev vibes',
    colors: {
      bg: '#2E3440',
      surface: '#3B4252',
      text: '#E5E9F0',
      accent: '#88C0D0',
      secondary: '#A3BE8C'
    }
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    description: 'Bold and modern',
    colors: {
      bg: '#1A1B26',
      surface: '#24283B',
      text: '#C0CAF5',
      accent: '#7AA2F7',
      secondary: '#BB9AF7'
    }
  },
  {
    id: 'dracula',
    name: 'Dracula',
    description: 'High contrast',
    colors: {
      bg: '#282A36',
      surface: '#303241',
      text: '#F8F8F2',
      accent: '#BD93F9',
      secondary: '#50FA7B'
    }
  },
  {
    id: 'catppuccin',
    name: 'Catppuccin',
    description: 'Smooth and elegant',
    colors: {
      bg: '#1E1E2E',
      surface: '#313244',
      text: '#CDD6F4',
      accent: '#89B4FA',
      secondary: '#F38BA8'
    }
  }
];

export const getThemeColors = (theme: string) => {
  return THEME_OPTIONS.find(t => t.id === theme)?.colors || THEME_OPTIONS[0].colors;
};