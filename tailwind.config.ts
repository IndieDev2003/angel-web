import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07111d",
        foreground: "#ebf2ff",
        card: "#0d1b2a",
        muted: "#9aa9bc",
        border: "rgba(148,163,184,0.2)",
        primary: {
          50: "#eef8ff",
          100: "#d9f2ff",
          500: "#38bdf8",
          600: "#0ea5e9",
          700: "#0369a1",
        },
        accent: {
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 23, 42, 0.32)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
