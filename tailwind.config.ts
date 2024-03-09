import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      letterSpacing: {
        "1": "0em",
        "2": "0.025em",
        "3": "0.05em",
        "4": "0.1em",
      },
      colors: {
        blue_primary: "#131167",
        orange_primary: "#D38122",
        gray_dark: "#666666",
        gray_light: "#494949",
      },
      backgroundImage: {
        blue: "url('/bgBlue.png')",
        orange: "url('/bgOrange.png')",
      },
    },
  },
  plugins: [],
};
export default config;
