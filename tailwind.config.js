/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif;"],
        secondary: ["Nunito Sans", "sans-serif;"],
      },
      colors: {
        primary: "#2F327D",
        secondary: "#F48C06",
        thỉrd: "#65DAFF",
        gray: "#696984",
        grayBase: "#6C6C6C",
        grayDark: "#464646",
        grayDarker: "#252641",
        grayLight: "#E5E5E5",
        purple: "#5b72ee",
        yellow: "#fff2e1",
        blue: "#29b9e7",
        sunnyTop: "#ffe25a",
        sunnyBottom: "#ffa852",
      },
    },
  },
  plugins: [],
};
