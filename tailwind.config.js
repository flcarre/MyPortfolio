module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      dark: "#353353",
      borderDark: "#35335330",
      light: "#f8f1f1",
      borderLight: "#f8f1f130",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
