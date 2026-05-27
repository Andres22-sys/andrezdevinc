import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8e44ad",
        "primary-dark": "#7b39a0",
        secondary: "#bb86fc",
        "secondary-dark": "rgb(121, 58, 246)",
        "bg-dark": "#121212",
        "bg-section-dark": "#242424",
        "text-dark": "#f5f5f5",
        "text-light": "#333333",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
