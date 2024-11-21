import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fustat: ['Fustat', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        roboto: ['"Roboto Flex"', 'sans-serif'],
        Graphik:['Graphik','sans-serif'],
        Graphikregular:['Graphikregular','sans-serif']
      
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
