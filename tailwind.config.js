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
fontFamily:{
  '32':'32px'
},

colors:{
  darkBlue:'#03045E',
  lightBlack:'#4D4D4C',
  lightBlue:'#DDF9FF',
  skyBlue:'#00B5D8'
}

    },
  },
  plugins: [],
}