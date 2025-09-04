/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nord theme
        'nord-bg': '#2E3440',
        'nord-surface': '#3B4252',
        'nord-text': '#E5E9F0',
        'nord-accent': '#88C0D0',
        'nord-secondary': '#A3BE8C',
        
        // Tokyo Night theme
        'tokyo-bg': '#1A1B26',
        'tokyo-surface': '#24283B',
        'tokyo-text': '#C0CAF5',
        'tokyo-accent': '#7AA2F7',
        'tokyo-secondary': '#BB9AF7',
        
        // Dracula theme
        'dracula-bg': '#282A36',
        'dracula-surface': '#303241',
        'dracula-text': '#F8F8F2',
        'dracula-accent': '#BD93F9',
        'dracula-secondary': '#50FA7B',
        
        // Catppuccin theme
        'catppuccin-bg': '#1E1E2E',
        'catppuccin-surface': '#313244',
        'catppuccin-text': '#CDD6F4',
        'catppuccin-accent': '#89B4FA',
        'catppuccin-secondary': '#F38BA8',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};