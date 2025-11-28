import { cn } from "@/lib/utils"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

/**
 * GBAE NavLink Component
 * Atomic navigation link with consistent styling
 * Minimal design with soft hover transitions
 */

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  active?: boolean
  variant?: "default" | "underline"
}

export function NavLink({
  href,
  active,
  variant = "default",
  className,
  children,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        // Base styles
        "transition-color-soft text-body font-medium",

        // Variant styles
        {
          "text-primary hover:text-accent": variant === "default" && !active,
          "text-accent": variant === "default" && active,

          "text-primary underline underline-offset-4 hover:text-accent":
            variant === "underline" && !active,
          "text-accent underline underline-offset-4":
            variant === "underline" && active,
        },

        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
