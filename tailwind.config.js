/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        full: "100%",
        sm: "120%",
        md: "150%",
        lg: "166%",
      },
      fontSize: {
        "3xxl": "32px",
        "2xxl": "28px",
        "4xxl": "40px",
        "6xxl": "64px",
      },
      screens: {
        xs: "375px",
      },
      colors: {
        darkBlue: "#03045E",
        lightBlack: "#4D4D4C",
        lightBlue: "#DDF9FF",
        skyBlue: "#00B5D8",
        grey: "#959595", 
        lightGrey: "#03045E1A",
        lightGrey2: '#0000001A',
        skyBlue: "#E6F8FB",
        lightWhite:"#B3DDEE"
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        "common-shadow": "0px 16px 25.3px 0px #00000014",
      },
      backgroundImage: {
        blueGradient: 'linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%);'
      }
    },
  },
  plugins: [],
};
