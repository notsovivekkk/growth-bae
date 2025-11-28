"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Hero Section
 * Fully responsive hero with mobile-first approach
 * Typography, spacing, and buttons scale across all viewports
 * Includes glass-morphism tag above hero
 * Animation variants with "Quiet Confidence" - slow, eased transitions
 */

// Animation variants for "Quiet Confidence" (Slow, eased transitions)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom ease similar to quintOut
    },
  }),
}

const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export interface HeroSectionProps {
  tagText?: string
  headline?: string | string[]
  subtext?: string
  primaryCtaText?: string
  primaryCtaHref?: string
}

export function HeroSection({
  tagText = "Founder Build Studio",
  headline = ["Build MVPs and systems", "that actually scale."],
  subtext = "A perfect blend of design, product thinking and clean engineering to turn your ideas into winning products.",
  primaryCtaText = "Start your project",
  primaryCtaHref = "#",
}: HeroSectionProps) {
  // Handle both string and array headlines
  const headlineLines = Array.isArray(headline) ? headline : [headline]

  return (
    <Section
      padding="none"
      className={cn(
        "relative flex flex-col justify-center overflow-hidden bg-secondary",
        // Remove forced min-height, let content drive height for better flow
        "min-h-fit",
        // Responsive top padding to account for compact header height
        // Aggressively reduced bottom padding to bring marquee closer
        "pb-6 pt-16 md:pb-8 md:pt-20"
      )}
    >
      <Container className="relative z-10">
        {/* Content wrapper with responsive max-width */}
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {/* Glass-morphism Tag/Badge - Above hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-2 inline-block sm:mb-3 md:mb-4"
          >
            <motion.div
              variants={float}
              initial="initial"
              animate="animate"
              className={cn(
                "inline-flex items-center justify-center rounded-full",
                "border border-white/60 bg-white/40 backdrop-blur-xl",
                // Responsive padding
                "px-3 py-1.5 sm:px-4 sm:py-2",
                "shadow-sm",
                // Responsive text
                "text-xs font-medium tracking-wide text-primary sm:text-sm"
              )}
            >
              {tagText}
            </motion.div>
          </motion.div>

          {/* H1 Headline - Multi-line with different colors */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className={cn(
              "font-extrabold leading-[1.1] tracking-tight text-primary",
              // Use design system H1 with responsive scaling
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
              // Responsive margins - Tighten H1 to Subtitle (Compact Mode)
              "mb-2.5 sm:mb-3"
            )}
          >
            {headlineLines.map((line, index) => (
              <motion.span
                key={index}
                custom={index + 1}
                variants={fadeInUp}
                className={cn(
                  "block",
                  // Second line gets accent color
                  index === 1 && "text-accent/90"
                )}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading - Responsive typography and spacing */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={4}
            className={cn(
              "font-medium text-primary/80",
              // Responsive typography
              "text-lg md:text-xl",
              // Responsive max-width for readability
              "max-w-2xl",
              // Leading for readability with tight margins
              "leading-normal"
            )}
          >
            {subtext}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            className={cn(
              "flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4",
              // Vertical rhythm from Subtitle - Reduced for accessibility
              "mt-5 sm:mt-6"
            )}
          >
            {/* Primary Button - Standard Web App Sizing */}
            <Link
              href={primaryCtaHref}
              className={cn(
                "group inline-flex items-center justify-center gap-2",
                // Base sizing (Standard Web App) and typography
                "px-5 py-2.5 text-sm font-medium",
                // Colors & Border: Default state (Green bg, White text, No border)
                "border border-transparent bg-[#004225] text-white",
                // Hover state (Transparent bg, Green text, Green border)
                "hover:border-[#004225] hover:bg-transparent hover:text-[#004225]",
                // Layout & Transitions
                "rounded-full transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2",
                // Full width on mobile, auto on larger screens
                "w-full sm:w-auto"
              )}
            >
              <span className="whitespace-nowrap">{primaryCtaText}</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
