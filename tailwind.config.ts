import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F0E8",
        "ivory-dark": "#EDE7DA",
        "text-primary": "#22201D",
        "text-secondary": "#777168",
        "text-muted": "#9A9183",
        "arch-dark": "#171614",
        "arch-stone": "#D8CCBA",
        "arch-sand": "#B9AA95",
        "arch-moss": "#8D8B78",
        "arch-sage": "#6E765F",
        white: "#FFFFFF",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 6vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.7" }],
        "nav": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "50": "12.5rem",
        "54": "13.5rem",
        "60": "15rem",
        "68": "17rem",
        "72": "18rem",
        "88": "22rem",
        "100": "25rem",
        "120": "30rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
