/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        milano: {
          green: '#2E7D32',
          orange: '#F57C00',
        },
        status: {
          success: '#16A34A',
          warning: '#EA580C',
          danger: '#DC2626',
          info: '#2563EB',
          neutral: '#6B7280',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}
