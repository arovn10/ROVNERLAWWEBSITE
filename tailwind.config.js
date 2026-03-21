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
        // Muted professional palette - law firm appropriate
        'navy-primary': '#0f172a',
        'navy-secondary': '#1e293b',
        'navy-light': '#334155',
        'blue-accent': '#1e3a5f',
        'blue-light': '#2d4a6f',
        'gold-accent': '#92400e',
        'gold-muted': '#a16207',
        'gold-light': '#b45309',
        'red-accent': '#b91c1c',
        'green-success': '#15803d',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Libre Baskerville', 'Georgia', 'serif'],
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