import type { Config } from "tailwindcss"

/**
 * GBAE Design System - Tailwind Configuration
 * Implements the GBAE design tokens for colors, spacing, typography
 */

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 16px mobile
        sm: "2rem", // 32px tablet
        lg: "3rem", // 48px desktop
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      // ============================================
      // 🎨 GBAE COLOR SYSTEM
      // ============================================
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#004225", // Deep Green
          foreground: "#F5F1E5", // Soft Cream text on primary
        },
        secondary: {
          DEFAULT: "#F5F1E5", // Soft Cream
          foreground: "#004225", // Deep Green text on secondary
        },
        accent: {
          DEFAULT: "#0B6E4F", // Fresh Green
          foreground: "#F5F1E5", // Light text on accent
        },

        // Semantic Background Colors
        background: {
          DEFAULT: "#F5F1E5", // Soft Cream - main background
          primary: "#F5F1E5", // Soft Cream
          secondary: "#FFFFFF", // White for cards
          accent: "#004225", // Deep Green for dark sections
        },

        // Semantic Text Colors
        text: {
          DEFAULT: "#004225", // Deep Green - default text
          primary: "#004225", // Deep Green
          secondary: "#0B6E4F", // Fresh Green
          muted: "#6B7280", // Gray
          inverse: "#F5F1E5", // Cream on dark
        },

        // Border Colors
        border: {
          DEFAULT: "#E5E7EB",
          secondary: "#D1D5DB",
          accent: "#0B6E4F",
        },

        // Utility colors for compatibility
        foreground: "#004225",
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#004225",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#004225",
        },
      },

      // ============================================
      // 📐 SPACING SYSTEM (8px Grid)
      // ============================================
      spacing: {
        // Base 8px grid
        "0": "0",
        "1": "8px", // 1 * 8
        "2": "16px", // 2 * 8
        "3": "24px", // 3 * 8
        "4": "32px", // 4 * 8
        "5": "40px", // 5 * 8
        "6": "48px", // 6 * 8
        "8": "64px", // 8 * 8
        "10": "80px", // 10 * 8
        "12": "96px", // 12 * 8
        "15": "120px", // 15 * 8
        "16": "128px", // 16 * 8
        "20": "160px", // 20 * 8
      },

      // ============================================
      // 🔶 TYPOGRAPHY SYSTEM
      // ============================================
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-aktiv)",
          "system-ui",
          "sans-serif",
        ],
        serif: ["var(--font-playfair)", "var(--font-inter)", "serif"],
        primary: [
          "var(--font-inter)",
          "var(--font-aktiv)",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        h1: ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 44px - reduced from 56px
        h2: ["3rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }], // 48px
        h3: ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }], // 36px
        h4: ["1.875rem", { lineHeight: "1.35", letterSpacing: "0" }], // 30px
        h5: ["1.5rem", { lineHeight: "1.4", letterSpacing: "0" }], // 24px
        h6: ["1.25rem", { lineHeight: "1.4", letterSpacing: "0" }], // 20px
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "0" }], // 16px
        "body-lg": ["1.125rem", { lineHeight: "1.65", letterSpacing: "0" }], // 18px
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }], // 12px
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },

      // ============================================
      // 📏 LAYOUT
      // ============================================
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },

      // ============================================
      // 🎬 MOTION SYSTEM
      // ============================================
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },

      // ============================================
      // 🎬 ANIMATIONS
      // ============================================
      "fade-in": "fade-in 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      "fade-out": "fade-out 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      "slide-up": "slide-up 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      "slide-down": "slide-down 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      float: "float 6s ease-in-out infinite",
      "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      scroll: "scroll 45s linear infinite",
      shine: "shine 2s infinite",
      fill: "fillWidth 1.5s ease-out forwards",
      "fill-bar": "fillBar 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
      shine: {
        "0%": { left: "-100%" },
        "100%": { left: "200%" },
      },
      fillWidth: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      fillBar: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "fade-out": {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
      "slide-up": {
        "0%": { transform: "translateY(10px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      "slide-down": {
        "0%": { transform: "translateY(-10px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
