import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-page": "url('/images/kirby_1080_edit_compressed.png')",
      },
      fontFamily: {
        merriweather: ["var(--font-merriweather)"],
        inter: ["var(--font-inter)"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "85ch",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
