module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        luckiest: ["LuckestGuy", "sans"],
      },
      colors: {
        green: {
          DEFAULT: "#103233",
          50: "#96DDDF",
          100: "#86D8DA",
          200: "#67CFD0",
          300: "#48C5C7",
          400: "#36AEB0",
          500: "#2C8F90",
          600: "#237071",
          700: "#195152",
          800: "#103233",
          900: "#020808",
        },
        red: {
          DEFAULT: "#411120",
          50: "#E69EB5",
          100: "#E28DA9",
          200: "#D96D90",
          300: "#D14D78",
          400: "#C33261",
          500: "#A22A51",
          600: "#822141",
          700: "#611931",
          800: "#411120",
          900: "#14050A",
        },
      },
      screens: {
        xl: "1024px",
        "2xl": "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
