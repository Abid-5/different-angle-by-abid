/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#091411",
        charcoal: "#12231F",
        smoke: "#ADB6B0",
        bone: "#F2EEE5",
        gold: "#AC8B55",
        teal: "#6EE7B7",
      },
      fontFamily: {
        display: ["Fraunces", "Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(214, 168, 79, 0.12)",
      },
      backgroundImage: {
        "grain-soft":
          "radial-gradient(circle at 20% 10%, rgba(214,168,79,0.12), transparent 30%), radial-gradient(circle at 85% 15%, rgba(110,231,183,0.08), transparent 28%)",
      },
    },
  },
  plugins: [],
};
