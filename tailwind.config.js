/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      darkest: "#343a40",
      dark: "#495057",
      medium: "#ced4da",
      light: "#f1f3f5",
       move:"#430f58",
      theme: "#1098ad",
      accent: "#ffa94d",
     }
    },
  },
  plugins: [],
};
