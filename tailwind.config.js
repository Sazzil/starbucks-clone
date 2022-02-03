module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      xxl: '1536px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'star-brown': '#231f20',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
