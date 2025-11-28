import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

/**
 * GBAE Typography Components
 * Clean, spacious, premium typography using Aktiv Grotesk
 * Rules: Avoid tight tracking, generous line-height, minimal aesthetic
 */

// ============================================
// H1 - Main Headlines
// ============================================
export const H1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-h1 font-bold text-primary",
      "leading-tight tracking-tight",
      className
    )}
    {...props}
  />
))
H1.displayName = "H1"

// ============================================
// H2 - Section Headlines
// ============================================
export const H2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-h2 font-bold text-primary",
      "leading-tight tracking-tight",
      className
    )}
    {...props}
  />
))
H2.displayName = "H2"

// ============================================
// H3 - Subsection Headlines
// ============================================
export const H3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-h3 font-bold text-primary",
      "leading-snug tracking-tight",
      className
    )}
    {...props}
  />
))
H3.displayName = "H3"

// ============================================
// H4 - Card/Component Headlines
// ============================================
export const H4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "text-h4 font-semibold text-primary",
      "leading-snug tracking-normal",
      className
    )}
    {...props}
  />
))
H4.displayName = "H4"

// ============================================
// H5 - Small Headlines
// ============================================
export const H5 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "text-h5 font-semibold text-primary",
      "leading-normal tracking-normal",
      className
    )}
    {...props}
  />
))
H5.displayName = "H5"

// ============================================
// H6 - Smallest Headlines
// ============================================
export const H6 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(
      "text-h6 font-semibold text-primary",
      "leading-normal tracking-normal",
      className
    )}
    {...props}
  />
))
H6.displayName = "H6"

// ============================================
// Body - Default Body Text
// ============================================
export const Body = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-body font-regular text-primary",
      "leading-relaxed",
      className
    )}
    {...props}
  />
))
Body.displayName = "Body"

// ============================================
// BodyLarge - Larger Body Text (Intro, Lead)
// ============================================
export const BodyLarge = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-body-lg font-regular text-primary",
      "leading-relaxed",
      className
    )}
    {...props}
  />
))
BodyLarge.displayName = "BodyLarge"

// ============================================
// BodySmall - Smaller Body Text (Captions, Meta)
// ============================================
export const BodySmall = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-body-sm font-regular text-text-secondary",
      "leading-normal",
      className
    )}
    {...props}
  />
))
BodySmall.displayName = "BodySmall"

// ============================================
// Caption - Tiny Text (Labels, Metadata)
// ============================================
export const Caption = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "text-caption font-medium uppercase text-text-muted",
      "tracking-wide",
      className
    )}
    {...props}
  />
))
Caption.displayName = "Caption"

// ============================================
// Lead - Intro/Lead Paragraph (Large emphasis)
// ============================================
export const Lead = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-body-lg font-regular text-text-secondary",
      "max-w-3xl leading-relaxed",
      className
    )}
    {...props}
  />
))
Lead.displayName = "Lead"

// ============================================
// Muted - Muted/Secondary Text
// ============================================
export const Muted = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-body leading-relaxed text-text-muted", className)}
    {...props}
  />
))
Muted.displayName = "Muted"
