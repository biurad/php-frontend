module.exports = {
  mode: "jit",
  content: ["./resources/**/*.{jsx,tsx,latte}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
