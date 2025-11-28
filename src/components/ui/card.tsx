import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

/**
 * GBAE Card Component
 * Rounded corners, soft shadows, minimal aesthetic
 * Premium, clean design for case studies and content
 */

// ============================================
// Card Root
// ============================================
const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "card-gbae",
        "rounded-lg bg-background-secondary shadow-md",
        "p-4 sm:p-6",
        "transition-soft hover:shadow-lg",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

// ============================================
// Card Header
// ============================================
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-4 flex flex-col space-y-1.5", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

// ============================================
// Card Title
// ============================================
const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-h4 font-bold leading-snug tracking-tight text-primary",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// ============================================
// Card Description
// ============================================
const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-body-sm leading-relaxed text-text-secondary",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// ============================================
// Card Content
// ============================================
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// ============================================
// Card Footer
// ============================================
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mt-4 flex items-center border-t border-border pt-4",
        className
      )}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
