"use client"

import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion"
import { useRef, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BookingLink } from "./aeo-booking"
import { GrowthMark } from "./aeo-growth-mark"
import { EASE, VIEWPORT } from "./aeo-motion"

export { EASE, VIEWPORT }

/**
 * Fade + lift on scroll. The workhorse for anything that isn't a heading.
 */
export function Reveal({
  delay = 0,
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface SplitHeadingProps {
  as?: "h1" | "h2"
  text: string
  // Words (exact, incl. punctuation) to set in Playfair italic
  accent?: string[]
  className?: string
  delay?: number
  trigger?: "mount" | "view"
  // Rendered after the last word, e.g. the growth mark in the hero
  trailing?: ReactNode
}

/**
 * Each word slides up from behind a mask, one after another.
 * Screen readers get the plain sentence; the split spans are hidden from them.
 */
export function SplitHeading({
  as = "h2",
  text,
  accent = [],
  className,
  delay = 0,
  trigger = "view",
  trailing,
}: SplitHeadingProps) {
  const reduce = useReducedMotion()
  const Tag = as
  const words = text.split(" ")
  const target = { y: "0%" }

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            {/* Padding + negative margin give italic descenders room inside the mask */}
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className={cn(
                  "inline-block",
                  accent.includes(word) && "aeo-accent pr-[0.04em]"
                )}
                initial={reduce ? false : { y: "110%" }}
                {...(trigger === "mount"
                  ? { animate: target }
                  : { whileInView: target, viewport: VIEWPORT })}
                transition={{
                  duration: 0.8,
                  delay: delay + i * 0.05,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
        {trailing}
      </span>
    </Tag>
  )
}

/**
 * Section marker: the logo mark builds itself in next to the section number.
 * Repeating the brand gesture is what ties the page together.
 */
export function SectionIndex({
  n,
  dark = false,
}: {
  n: string
  dark?: boolean
}) {
  return (
    <div className="mb-3 flex items-center gap-1">
      <GrowthMark
        className={cn(
          "h-[14px] w-auto",
          dark ? "text-[var(--aeo-mint)]" : "text-[var(--aeo-green)]"
        )}
      />
      <span
        className={cn(
          "aeo-label",
          dark ? "text-[var(--aeo-cream-soft)]" : "text-[var(--aeo-ink-soft)]"
        )}
      >
        {n}
      </span>
    </div>
  )
}

interface BookCtaProps {
  children: ReactNode
  variant?: "primary" | "ghost" | "ghost-dark"
  size?: "sm" | "md" | "lg"
  arrow?: boolean
  className?: string
}

/** Every CTA on this page books a call, so they all open the Calendly popup */
export function BookCta({
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
}: BookCtaProps) {
  return (
    <BookingLink
      className={cn(
        "aeo-btn",
        `aeo-btn--${variant}`,
        size !== "md" && `aeo-btn--${size}`,
        className
      )}
    >
      {children}
      {arrow && (
        <ArrowRight size={15} className="aeo-arrow" aria-hidden="true" />
      )}
    </BookingLink>
  )
}

interface FillBarProps {
  value: number // 0–1
  delay?: number
  duration?: number
  className?: string
}

/**
 * Track + fill that grows to `value` on scroll. We watch the *track*, not
 * the fill: a fill at scaleX(0) has zero width and may never "intersect".
 */
export function FillBar({
  value,
  delay = 0,
  duration = 1.6,
  className,
}: FillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, VIEWPORT)
  const reduce = useReducedMotion()

  return (
    <div
      ref={ref}
      className={cn(
        "h-[3px] overflow-hidden rounded-full bg-[var(--aeo-line-dark)]",
        className
      )}
    >
      <motion.div
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: inView || reduce ? value : 0 }}
        transition={{ duration, delay, ease: EASE }}
        className="h-full origin-left rounded-full bg-[var(--aeo-mint)]"
      />
    </div>
  )
}
