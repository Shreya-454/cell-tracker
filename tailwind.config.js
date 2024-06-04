/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
lineHeight:{
  'full':'100%',
  'sm':'120%',
  'md':'150%',
  'lg':'166%',
},
fontSize:{
  '3xxl':'32px',
  '4xxl':'40px',
  '6xxl':'64px',
},

colors:{
  darkBlue:'#03045E',
  lightBlack:'#4D4D4C',
  lightBlue:'#DDF9FF',
  skyBlue:'#00B5D8'
},
container: {
  center: true,
  padding: "1rem",
},
animation:{
'wiggle':'wiggle 5s linear infinite',
'wiggle1' :'wiggle1 5s linear infinite',
'wiggle2':'wiggle 10s linear infinite',
'wiggle3':'wiggle1 10s linear infinite',

},
keyframes:{
  wiggle: {
    '0%':{'border-radius' : ' 63% 37% 46% 54% / 42% 27% 73% 58%   '},
    '20%':{'border-radius' : '44% 56% 19% 81% / 49% 18% 82% 51% '},
    '40%':{'border-radius' : ' 62% 38% 59% 41% / 23% 45% 55% 77%  '},
    '60%':{'border-radius' : '62% 38% 85% 15% / 14% 60% 40% 86%   '},
    '80%':{'border-radius' : '83% 17% 67% 33% / 36% 68% 32% 64%  '},
    '100%':{'border-radius' : '50% 50% 44% 56% / 62% 36% 64% 38% '},
  },
  wiggle1: {
    '0%':{'border-radius' : ' 73% 27% 65% 35% / 27% 40% 60% 73%   '},
    '20%':{'border-radius' : '54% 46% 47% 53% / 56% 56% 44% 44% '},
    '40%':{'border-radius' : ' 29% 71% 33% 67% / 66% 41% 59% 34%  '},
    '60%':{'border-radius' : '52% 48% 49% 51% / 45% 26% 74% 55%  '},
    '80%':{'border-radius' : '40% 60% 30% 70% / 57% 42% 58% 43%   '},
    '100%':{'border-radius' : '57% 43% 28% 72% / 66% 23% 77% 34%  '},
  },
  },
},
    },
  plugins: [],
}