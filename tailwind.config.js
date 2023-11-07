/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : "class",
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      white: {
        100 : "hsla(0,0%,100%, 1)",
        200 : "hsla(0,0%,97%, 1)"
      },
      blue: "hsl(220, 98%, 61%)",
      red: "#c40233",
      "light-blue": "hsl(192, 100%, 67%)",
      purple: "hsl(280, 87%, 65%)",
      "light-gray": "hsl(0, 0%, 98%)",
      "light-grayish-blue": {
        100: "hsl(236, 33%, 92%)",
        200: "hsl(233, 11%, 84%)",
        300: "hsl(234, 39%, 85%)",
      },
      "dark-blue": "hsl(235, 21%, 11%)",
      "dark-grayish-blue": {
        100: "hsl(236, 9%, 61%)",
        200: "hsl(234, 11%, 52%)",
        300: "hsl(235, 19%, 35%)",
        400: "hsl(233, 14%, 35%)",
        500: "hsl(237, 14%, 26%)",
        700: "hsl(235, 24%, 19%)",
        800: "hsl(235, 24%, 11%)",
      },
      gradient: {
        "blue-to-purple":
          "linear-gradient(to bottom right,hsl(220, 98%, 61%) ,hsl(280, 87%, 65%) )",
      },
    },
    screens: {
      xs: "425px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        md: "0 30px 45px -15px rgba(194, 195, 214, 0.40)",
        sm: "0 15px 30px -12px rgba(194, 195, 214, 0.40)",
        "md-dark" : "0px 30px 45px -15px rgba(0, 0, 0, 0.50)"
      },
    },
  },
  plugins: [],
};
