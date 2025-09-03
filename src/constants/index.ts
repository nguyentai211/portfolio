export const ANIMATION_DELAYS = {
  STAGGER_1: '0.1s',
  STAGGER_2: '0.2s',
  STAGGER_3: '0.3s',
  STAGGER_4: '0.4s',
  STAGGER_5: '0.5s',
} as const;

export const ANIMATION_DURATIONS = {
  FAST: '0.3s',
  NORMAL: '0.5s',
  SLOW: '0.8s',
  SPLASH: '2000', // milliseconds
} as const;

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
} as const;

export const SCROLL_THRESHOLD = 50;
export const INTERSECTION_THRESHOLD = 0.1;

export const CV_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=15AAUhDguglKwOXwgvnd4jgmRnMpJELbK';

export const GRADIENT_CLASSES = {
  PRIMARY: 'from-blue-600 via-purple-600 to-pink-600',
  SECONDARY: 'from-blue-500 to-purple-600',
  ACCENT: 'from-purple-500 to-pink-600',
  SUCCESS: 'from-green-500 to-emerald-600',
  WARNING: 'from-yellow-400 to-orange-500',
  ERROR: 'from-red-500 to-pink-600',
  NEUTRAL: 'from-gray-600 to-gray-800',
  CYAN: 'from-blue-500 to-cyan-600',
} as const;