/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      // Primary colors (cyan/blue gradient)
      primary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        DEFAULT: '#06b6d4', // Default primary color
      },
      
      // Secondary colors (purple/pink gradient)
      secondary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
        DEFAULT: '#a855f7', // Default secondary color
      },
      
      // Background colors
      bg: {
        light: '#f8fafc',
        dark: '#0f172a',
        DEFAULT: '#0f172a', // Default background
      },
      
      // Neutral colors
      neutral: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        DEFAULT: '#64748b', // Default neutral
      },
      
      // Accent colors
      accent: {
        cyan: '#22d3ee',
        blue: '#2563eb',
        purple: '#9333ea',
        pink: '#ec4899',
      },
      
      // Dark colors
      dark: {
        900: '#030712',
        800: '#111827',
        700: '#1f2937',
        DEFAULT: '#111827',
      },
    },
  },
};
export const plugins = [];