/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      TealGreen: "#4E878C",
      LightBlue: "#A1C9D9",
      DarkBlue: "#223A5E",
      White: "#FFF",
      Beige: "#E0C7A8",
      LightGray: "#c2c2c2",
    },
    fontWeight: {
      Regular: "400",
      Semibold: "600",
      Bold: "700",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlternate: ["Montserrat Alternates", "sans-serif"],
        montserratSubrayada: ["Montserrat Subrayada", "sans-serif"],
      },
      screens: {
        desktop: "1440px",
        laptop: "1366px",
        tablet: "1024px",
      },
    },
  },

  plugins: [],
};
