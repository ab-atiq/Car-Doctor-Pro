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
          "secondary": "teal",
          ".btn-primary": {
            color: "#fff",
            borderColor: "#FF3811",
          },
          ".btn-outline.btn-primary:hover": {
            color: "#fff",
          },
        },
      },
      "dark",
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF3811",
          secondary: "teal",
        },
      },
    ],
  },
};
export default config;
