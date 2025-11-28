import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

/**
 * GBAE Icon Wrapper Component
 * Atomic wrapper for icons with consistent sizing and styling
 * Use with any icon library (Lucide, Heroicons, etc.)
 */

export interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "default" | "accent" | "muted"
}

export function IconWrapper({
  size = "md",
  variant = "default",
  className,
  children,
  ...props
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "transition-color-soft inline-flex items-center justify-center",

        // Size variants
        {
          "h-4 w-4": size === "xs", // 16px
          "h-5 w-5": size === "sm", // 20px
          "h-6 w-6": size === "md", // 24px
          "h-8 w-8": size === "lg", // 32px
          "h-10 w-10": size === "xl", // 40px
        },

        // Color variants
        {
          "text-primary": variant === "default",
          "text-accent": variant === "accent",
          "text-text-muted": variant === "muted",
        },

        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
