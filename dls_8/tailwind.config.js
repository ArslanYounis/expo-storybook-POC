/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/tailwind/native")],
  theme: {
    extend: {},
  },
  plugins: [],
};
