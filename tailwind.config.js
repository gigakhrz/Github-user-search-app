/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
    "./src/components/Header.tsx",
    "./src/components/search.tsx",
    "./src/components/Result.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
