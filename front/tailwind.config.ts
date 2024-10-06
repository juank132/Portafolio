import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azulM: "#172540",
        gold2: "#efb810",
        gold3: "#f3c332",
        gray2: "#8f9496",
        gray1: "#d2d5d6",
        azul1: "#121f30",
        azul2: "#124253",
        azul3: "#146d82",
        azul4: "#1aa3b9",
        azul5: "#20dbd8"
      },
    },
  },
  plugins: [],
};
export default config;
