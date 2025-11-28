import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

/**
 * GBAE Section Component
 * Enforces section spacing from design system (64-120px)
 * Follows 8px grid system for vertical padding
 */

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: "none" | "sm" | "default" | "lg"
  background?: "primary" | "secondary" | "accent" | "white"
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { className, padding = "default", background = "primary", ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          // Padding variants (8px grid: 64-120px)
          {
            "py-0": padding === "none",
            "py-6 sm:py-8 lg:py-10": padding === "sm", // 48→64→80px
            "py-8 sm:py-10 lg:py-15": padding === "default", // 64→80→120px
            "py-12 sm:py-15 lg:py-20": padding === "lg", // 96→120→160px
          },

          // Background variants
          {
            "bg-background-primary": background === "primary", // Soft Cream
            "bg-background-secondary": background === "secondary", // White
            "bg-background-accent text-text-inverse": background === "accent", // Deep Green
            "bg-white": background === "white",
          },

          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = "Section"

export { Section }
