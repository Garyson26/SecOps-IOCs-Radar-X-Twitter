/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "ibm": ["IBM Plex Sans", "sans-serif"],

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "box-gradient1": "linear-gradient(315deg, #875fc0 0%, #5346ba 74%)",
        "box-gradient2": "linear-gradient(315deg, #47c5f4 0%, #6791d9 74%)",
        "box-gradient3": "linear-gradient(315deg, #eb4786 0%, #b854a6 74%)",
        "box-gradient4": "linear-gradient(315deg, #ffb72c 0%, #f57f59 74%)",
       
      },
      colors: {
        light: "#f2f3f8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
