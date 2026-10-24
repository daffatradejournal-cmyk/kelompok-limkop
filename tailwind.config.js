/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#000000',
          surface: '#161617',
          elevated: '#1d1d1f',
          hover: '#242426',
          border: 'rgba(255, 255, 255, 0.08)',
          borderStrong: 'rgba(255, 255, 255, 0.16)',
          text: '#f5f5f7',
          secondary: '#86868b',
          tertiary: '#6e6e73',
          blue: '#2997ff',
          blueHover: '#0077ed',
          btn: '#0071e3',
          btnHover: '#0077ed',
          red: '#ff375f'
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      borderRadius: {
        apple: '28px',
        pill: '980px'
      }
    },
  },
  plugins: [],
}
