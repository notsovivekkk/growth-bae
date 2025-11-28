/**
 * GBAE Design System Tokens
 * Centralized design tokens for colors, spacing, typography
 * DO NOT use raw values in components - always reference these tokens
 */

// ============================================
// 🎨 COLOR PALETTE
// ============================================

export const colors = {
  // Brand Colors
  primary: "#004225", // Deep Green - Typography & Primary Elements
  secondary: "#F5F1E5", // Soft Cream - Backgrounds
  accent: "#0B6E4F", // Fresh Green - CTAs, Highlights, Links

  // Semantic Colors (mapped from brand)
  background: {
    primary: "#F5F1E5", // Soft Cream
    secondary: "#FFFFFF", // White for cards/elevated surfaces
    accent: "#004225", // Deep Green for dark sections
  },

  text: {
    primary: "#004225", // Deep Green - Main text
    secondary: "#0B6E4F", // Fresh Green - Secondary text
    muted: "#6B7280", // Gray for muted text
    inverse: "#F5F1E5", // Cream for text on dark backgrounds
  },

  border: {
    primary: "#E5E7EB", // Light border
    secondary: "#D1D5DB", // Medium border
    accent: "#0B6E4F", // Accent border
  },
} as const

// ============================================
// 📐 SPACING SYSTEM (8px Grid)
// ============================================

export const spacing = {
  // Base unit: 8px
  base: "8px",

  // Component spacing (16-32px)
  component: {
    xs: "16px", // 2 * 8px
    sm: "24px", // 3 * 8px
    md: "32px", // 4 * 8px
    lg: "40px", // 5 * 8px
    xl: "48px", // 6 * 8px
  },

  // Section spacing (64-120px)
  section: {
    sm: "64px", // 8 * 8px
    md: "80px", // 10 * 8px
    lg: "96px", // 12 * 8px
    xl: "120px", // 15 * 8px
  },

  // Container padding
  container: {
    mobile: "16px",
    tablet: "32px",
    desktop: "48px",
  },
} as const

// ============================================
// 🔶 TYPOGRAPHY SYSTEM
// ============================================

export const typography = {
  // Font Family
  fontFamily: {
    primary: ["Aktiv Grotesk", "Inter", "system-ui", "sans-serif"],
  },

  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  // Font Sizes & Line Heights
  scale: {
    h1: {
      fontSize: "2.75rem", // 44px - reduced from 56px
      lineHeight: "1.2",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "3rem", // 48px
      lineHeight: "1.25",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "2.25rem", // 36px
      lineHeight: "1.3",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.875rem", // 30px
      lineHeight: "1.35",
      fontWeight: 600,
      letterSpacing: "0",
    },
    h5: {
      fontSize: "1.5rem", // 24px
      lineHeight: "1.4",
      fontWeight: 600,
      letterSpacing: "0",
    },
    h6: {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.4",
      fontWeight: 600,
      letterSpacing: "0",
    },
    body: {
      fontSize: "1rem", // 16px
      lineHeight: "1.6",
      fontWeight: 400,
      letterSpacing: "0",
    },
    bodyLarge: {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.65",
      fontWeight: 400,
      letterSpacing: "0",
    },
    bodySmall: {
      fontSize: "0.875rem", // 14px
      lineHeight: "1.5",
      fontWeight: 400,
      letterSpacing: "0",
    },
    caption: {
      fontSize: "0.75rem", // 12px
      lineHeight: "1.4",
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
  },
} as const

// ============================================
// 🎬 MOTION SYSTEM
// ============================================

export const motion = {
  // Easing curves
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)", // Soft easing
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Duration
  duration: {
    fast: "150ms",
    normal: "250ms",
    slow: "350ms",
  },

  // Transitions
  transition: {
    default: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const

// ============================================
// 📏 LAYOUT CONSTRAINTS
// ============================================

export const layout = {
  // Container max-widths
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },

  // Border Radius (minimal, subtle)
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  // Shadows (soft, subtle)
  shadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
} as const

// ============================================
// 🎨 COMPONENT STYLES
// ============================================

export const components = {
  button: {
    // Minimal, underline or ghost style
    variants: {
      ghost: {
        background: "transparent",
        color: colors.primary,
        border: "none",
        hover: {
          background: "rgba(11, 110, 79, 0.08)",
        },
      },
      underline: {
        background: "transparent",
        color: colors.primary,
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        hover: {
          color: colors.accent,
        },
      },
      primary: {
        background: colors.accent,
        color: colors.text.inverse,
        border: "none",
        hover: {
          background: colors.primary,
        },
      },
    },
  },

  card: {
    // Rounded corners, soft shadows
    background: colors.background.secondary,
    borderRadius: layout.radius.lg,
    boxShadow: layout.shadow.md,
    padding: spacing.component.md,
  },
} as const

// Type exports for TypeScript
export type ColorToken = typeof colors
export type SpacingToken = typeof spacing
export type TypographyToken = typeof typography
export type MotionToken = typeof motion
export type LayoutToken = typeof layout
