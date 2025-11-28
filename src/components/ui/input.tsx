import { cn } from "@/lib/utils"
import { forwardRef, InputHTMLAttributes } from "react"

/**
 * GBAE Input Component
 * Minimal, clean form input with focus states
 * Follows GBAE design system
 */

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Base styles
          "flex w-full rounded-md border bg-background-secondary px-3 py-2",
          "text-body text-primary placeholder:text-text-muted",
          "transition-soft",

          // Focus state
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",

          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",

          // Border variants
          {
            "border-border hover:border-accent": !error,
            "border-red-500 focus-visible:ring-red-500": error,
          },

          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
