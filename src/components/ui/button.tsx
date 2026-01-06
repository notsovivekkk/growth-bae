import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

/**
 * GBAE Button Component
 * Minimal, premium button styles: underline, ghost, primary
 * No harsh styles - soft transitions only
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "underline" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2",
          "font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variant styles
          {
            // Primary: Deep Green background with Soft Cream text
            "rounded-full bg-[#004225] text-[#F5F1E5] shadow-xl shadow-[#0B6E4F]/20 hover:scale-105 hover:bg-[#0B6E4F] hover:shadow-2xl":
              variant === "primary",

            // Ghost: Transparent with subtle hover
            "rounded-md border border-transparent bg-transparent text-primary hover:bg-accent/10":
              variant === "ghost",

            // Underline: Text-only with underline decoration
            "rounded-md bg-transparent px-0 text-primary underline underline-offset-4 hover:text-accent":
              variant === "underline",

            // Outline: Border with transparent background
            "rounded-md border border-primary bg-transparent text-primary hover:bg-primary/5":
              variant === "outline",
          },

          // Size variants
          {
            "px-3 py-1.5 text-body-sm": size === "sm",
            "px-4 py-2 text-body": size === "md",
            "px-6 py-3 text-body-lg": size === "lg",
          },

          // Remove padding for underline variant
          {
            "px-0": variant === "underline",
          },

          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
