import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        carDoctorTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#FF3811",
          ".btn-primary": {
            color: "white",
            borderColor: "#FF3811",
          },
          ".btn-outline.btn-primary:hover": {
            color: "white",
          },
          ".bg-white": {
            "background-color": "white",
            color: "black",
          },
          ".text-white": {
            color: "black",
          }
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "white",
          ".btn-primary": {
            color: "white",
            borderColor: "#FF3811",
          },
          ".btn-outline.btn-primary:hover": {
            color: "white",
          },
          ".bg-white": {
            "background-color": "black",
            color: "white",
          },
          ".text-white": {
            color: "white",
          }
        }
      },
    ],
  },
};
export default config;
