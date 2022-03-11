module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myblue': '#0B1120',
        'authgreen': '#2cd399',
        'mygray': '#374151',
        'fontwhite': '#fcf8f8',
        'sky': '#2792c4',
        'lightblue': '#45bdf5',
        'secondgray': '#94A3B8',
        'first': '#0f2027',
        'second': '#203a43',
        'secgreen': '#31dea2',
        'red': '#D14343',
      },
    },
  },
  plugins: [],
}