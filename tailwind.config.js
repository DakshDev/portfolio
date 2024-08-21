/** @type {import('tailwindcss').Config} */  
module.exports = {
  content: [
    "./components/**/*.{html,js,css}",
    "./components/index.html",
  ],
  theme: {
    screens: {
      'sm': '425px',
      // => @media (min-width: 425px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1525px',
      // => @media (min-width: 1525px) { ... }
    },
    extend: {
      fontFamily:{
        Fone: "Fone",
        Ftwo: "Ftwo",
        Fthree: "Fthree",
      },
      colors: {
        bg:"var(--bg-clr)",
        bg2:"var(--bg-clr2)",
        pri:"var(--pri-clr)",
        sec:"var(--sec-clr)",
        txt:"var(--txt-clr)",
      },
      screens: {
        'lsm': '600px',
        'lxs': '550px',
        'xsm': '380px',
      }
    },
  },
  plugins: [],
}

