import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand neutrals
        ink:    "#1E3A5F",   // deep navy — headings, footer bg
        body:   "#475569",   // slate-600 — body text
        muted:  "#94A3B8",   // slate-400 — captions, labels

        // Primary accent — trustworthy blue
        blue: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
        },

        // Secondary accent — warm teal
        teal: {
          50:  "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
        },

        // Surfaces
        surface: {
          DEFAULT: "#FFFFFF",
          subtle:  "#F8FAFC",   // slate-50
          muted:   "#F1F5F9",   // slate-100
          blue:    "#EFF6FF",   // blue-50
          teal:    "#F0FDFA",   // teal-50
        },

        // Borders
        border: {
          DEFAULT: "#E2E8F0",   // slate-200
          blue:    "#BFDBFE",   // blue-200
          teal:    "#99F6E4",   // teal-200
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Hero: very subtle light gradient
        "hero-gradient": "linear-gradient(160deg, #FFFFFF 0%, #EFF6FF 60%, #F0FDFA 100%)",
        // CTA banner: blue
        "cta-gradient":  "linear-gradient(135deg, #1E3A5F 0%, #1D4ED8 100%)",
      },
      boxShadow: {
        card:    "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        "card-md": "0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.04)",
        "card-blue": "0 6px 20px -4px rgb(37 99 235 / 0.15)",
        "card-teal": "0 6px 20px -4px rgb(13 148 136 / 0.15)",
        "btn":   "0 1px 3px 0 rgb(0 0 0 / 0.1), inset 0 1px 0 0 rgb(255 255 255 / 0.1)",
        "btn-blue": "0 4px 14px -2px rgb(37 99 235 / 0.35)",
        "btn-teal": "0 4px 14px -2px rgb(13 148 136 / 0.35)",
      },
    },
  },
  plugins: [forms, typography],
};
export default config;
