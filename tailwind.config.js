// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}",
//       "./public/index.html"
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3563E9',
          light: '#6590FF',
          dark: '#1E45B8',
        },
        secondary: {
          DEFAULT: '#FF6B6B',
          light: '#FF9B9B',
          dark: '#D14040',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        }
      },
      boxShadow: {
        sm: '0 1px 2px rgba(16, 24, 40, 0.05)',
        md: '0 2px 4px rgba(16, 24, 40, 0.06), 0 4px 8px rgba(16, 24, 40, 0.1)',
        lg: '0 8px 16px rgba(16, 24, 40, 0.1), 0 4px 8px rgba(16, 24, 40, 0.08)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      transitionDuration: {
        150: '0.15s',
        250: '0.25s',
        400: '0.4s',
      },
      transitionTimingFunction: {
        'in-out-custom': 'ease',
      },
    },
  },
  plugins: [],
}