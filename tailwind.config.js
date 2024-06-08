/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        full: "100%",
        xs:"116%",
        sm: "120%",
        md: "150%",
        lg1:"160%",
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
        blueBorder: "#03045E0F",
        whiteBg:"#FAFAFA",
        darkBlue: "#03045E",
        lightBlack: "#4D4D4C",
        lightBlue: "#DDF9FF",
        skyBlue: "#00B5D8",
       'light-Blue':'#00B5D81A',
        grey: "#959595", 
        lightGrey: "#03045E1A",
        lightGrey2: '#0000001A',
        lightWhite:"#B3DDEE"
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        "common-shadow": "0px 16px 25.3px 0 #00000014",
        "common-shadow2": "0 8px 12.4px 0 #03045D",
      },
      backgroundSize:{
full:'100% 100%'
      },
      backgroundImage:{
        'blueGradient': 'linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)',
"headcard":'linear-gradient(7.95deg, rgba(0, 181, 216, 0.05) -3.4%, rgba(0, 0, 128, 0.05) 114.66%)',
'ellipse':'linear-gradient(7.95deg, rgba(0, 181, 216, 0.1) -3.4%, rgba(0, 0, 128, 0.1) 114.66%)'

      },
      animation:{
wiggle: 'wiggle 5s  infinite linear',
wiggle1: 'wiggle1 5s  infinite linear',
wiggle2: 'wiggle 3s  infinite linear',
wiggle3: 'wiggle1 3s  infinite linear',
wiggle4:'wiggle2 10s infinite linear',
wiggle5: 'wiggle 8s  infinite linear',
      },
      keyframes: {
        wiggle: {
          '0%':{'border-radius' : ' 30% 70% 70% 30% / 30% 30% 70% 70% '},
          '20%':{'border-radius' : '52% 48% 55% 45% / 43% 40% 60% 57%  '},
          '40%':{'border-radius' : ' 34% 66% 42% 58% / 60% 57% 43% 40% '},
          '60%':{'border-radius' : '53% 47% 29% 71% / 35% 21% 79% 65%  '},
          '80%':{'border-radius' : '44% 56% 48% 52% / 55% 48% 52% 45%  '},
          '100%':{'border-radius' : '30% 70% 70% 30% / 30% 30% 70% 70%'},
        },
        wiggle1: {
          '0%':{'border-radius' : ' 44% 56% 48% 52% / 55% 48% 52% 45% '},
          '20%':{'border-radius' : '90% 10% 17% 83% / 22% 62% 38% 78%   '},
          '40%':{'border-radius' : ' 36% 64% 66% 34% / 65% 89% 11% 35% '},
          '60%':{'border-radius' : '59% 41% 41% 59% / 56% 34% 66% 44%   '},
          '80%':{'border-radius' : '74% 26% 61% 39% / 31% 62% 38% 69% '},
          '100%':{'border-radius' : '44% 56% 48% 52% / 55% 48% 52% 45% '},
        },
        wiggle2: {
          '0%':{'border-radius' : ' 46% 54% 18% 82% / 55% 24% 76% 45% '},
          '20%':{'border-radius' : '46% 54% 47% 53% / 45% 57% 43% 55%  '},
          '40%':{'border-radius' : ' 67% 33% 66% 34% / 31% 70% 30% 69%  '},
          '60%':{'border-radius' : '79% 21% 82% 18% / 15% 81% 19% 85%   '},
          '80%':{'border-radius' : '37% 63% 66% 34% / 46% 61% 39% 54% '},
          '100%':{'border-radius' : '57% 43% 36% 64% / 66% 37% 63% 34% '},
        },
    },
  },
  plugins: [],
}};