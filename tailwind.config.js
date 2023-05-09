/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#e2c346",

            secondary: "#bdc2fc",

            accent: "#adffeb",

            neutral: "#251A28",

            "base-100": "#2E3F56",

            info: "#6F99E2",

            success: "#76EFAE",

            warning: "#BC870B",

            error: "#FB1360",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
