module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [require("preline/plugin")],
  theme: {
    extends: {
      fontFamily: {
        sans: ["PingFang SC", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
};
