import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#50ACAB",
        gold: "#FFD37E",
        dark: {
          100: "#8A8DBA",
          150: "#6f7bc4",
          200: "#465085",
          400: "#242746",
          900: "#111224",
        },
      },
      fontFamily: {
        league: ["var(--font-league)"],
        gilroy: ["var(--font-gilroy)"],
      },
    },
  },
  plugins: [],
};
export default config;
