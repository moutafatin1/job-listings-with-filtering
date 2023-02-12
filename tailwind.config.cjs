/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: "hsl(180, 29%, 50%)",
        neutral: {
          background: "hsl(180, 52%, 96%)",
          filterTablet: "hsl(180, 31%, 95%)",
          darkGrayishCyan: "hsl(180, 8%, 52%)",
          veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        },
      },
      backgroundImage: {
        mobileHeader: "url('/images/bg-header-mobile.svg')",
        desktopHeader: "url('/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
