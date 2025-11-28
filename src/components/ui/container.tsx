import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

/**
 * GBAE Container Component
 * Enforces max-width and generous whitespace
 * Follows 8px grid system with responsive padding
 */

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full"
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles with responsive padding - mobile-first
          "mx-auto w-full",
          // Mobile (360-640px): 16px padding
          "px-4",
          // Small screens (640px+): 32px padding
          "sm:px-6 md:px-8",
          // Large screens (1024px+): 48px padding
          "lg:px-12",

          // Size variants
          {
            "max-w-[1440px]": size === "default", // 2xl
            "max-w-[1024px]": size === "narrow", // lg
            "max-w-[1600px]": size === "wide",
            "max-w-full": size === "full",
          },

          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = "Container"

export { Container }
