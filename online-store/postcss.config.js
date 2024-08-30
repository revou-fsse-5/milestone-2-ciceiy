module.exports = {
  plugins: ["tailwindcss", "autoprefixer"],
};

tailwind.config.js;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add any custom theme extensions here
      colors: {
        // Example: custom color
        primary: "#3490dc",
      },
      fontSize: {
        // Example: custom font size
        xxs: "0.65rem",
      },
      // You can extend more theme properties if needed
    },
  },
  plugins: [],
};
