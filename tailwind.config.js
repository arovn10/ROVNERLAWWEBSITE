/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Color Palette
        'navy-primary': '#0f172a',
        'navy-secondary': '#1e293b',
        'navy-light': '#334155',
        'blue-accent': '#1d4ed8',
        'blue-light': '#3b82f6',
        'gold-accent': '#d97706',
        'gold-light': '#f59e0b',
        'red-accent': '#dc2626',
        'green-success': '#16a34a',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'professional-sm': '0 1px 2px 0 rgb(0 0 0 / 0.08)',
        'professional-md': '0 4px 8px -2px rgb(0 0 0 / 0.12), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'professional-lg': '0 12px 16px -4px rgb(0 0 0 / 0.15), 0 4px 6px -2px rgb(0 0 0 / 0.08)',
        'professional-xl': '0 24px 48px -12px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
} 