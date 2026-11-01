"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"
import { EASE, VIEWPORT } from "./aeo-motion"

/**
 * One chevron of the GrowthBae logo: two blades meeting at an apex.
 * Traced from /public/images/logo.JPG and normalised to an 880 × 494 box.
 * The full logo is two of these stacked.
 */
const CHEVRON = "M440 0 0 494h293L440 0Zm0 0 146 494h293L440 0Z"
const CHEVRON_RATIO = 494 / 880

interface GrowthMarkProps {
  className?: string
  delay?: number
  trigger?: "mount" | "view"
}

/**
 * The logo, building itself: the bottom chevron lands, then the top one
 * rises out of it. Growth, told in under a second.
 */
export function GrowthMark({
  className,
  delay = 0,
  trigger = "view",
}: GrowthMarkProps) {
  const reduce = useReducedMotion()
  const play =
    trigger === "mount"
      ? { animate: "shown" }
      : { whileInView: "shown", viewport: VIEWPORT }

  return (
    <motion.svg
      viewBox="0 0 880 988"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      initial={reduce ? false : "hidden"}
      {...play}
    >
      <g transform="translate(0 494)">
        <motion.path
          d={CHEVRON}
          variants={{
            hidden: { opacity: 0, y: 160 },
            shown: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay, ease: EASE },
            },
          }}
        />
      </g>
      <motion.path
        d={CHEVRON}
        variants={{
          hidden: { opacity: 0, y: 494 },
          shown: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, delay: delay + 0.3, ease: EASE },
          },
        }}
      />
    </motion.svg>
  )
}

interface GrowthFieldProps {
  width: number // px width of each chevron
  height: number // px height of the visible window
  className?: string
}

/**
 * A quiet column of logo chevrons that climbs one notch, pauses, repeats.
 * Pure CSS (see .aeo-growth-field in aeo.css), so it costs nothing to run.
 */
export function GrowthField({ width, height, className }: GrowthFieldProps) {
  const gap = Math.round(width * 0.14)
  const step = Math.round(width * CHEVRON_RATIO) + gap
  const count = Math.ceil(height / step) + 2

  return (
    <div
      aria-hidden="true"
      className={cn(
        "aeo-growth-field pointer-events-none overflow-hidden",
        className
      )}
      style={
        {
          width,
          height,
          ["--aeo-step" as string]: `${step}px`,
        } as CSSProperties
      }
    >
      <div className="aeo-growth-field__track flex flex-col" style={{ gap }}>
        {Array.from({ length: count }, (_, i) => (
          <svg
            key={i}
            viewBox="0 0 880 494"
            width={width}
            height={Math.round(width * CHEVRON_RATIO)}
            fill="currentColor"
            className="shrink-0"
          >
            <path d={CHEVRON} />
          </svg>
        ))}
      </div>
    </div>
  )
}

/** Static chevron for small, repeated uses (marquee separators etc.) */
export function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 880 494"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={CHEVRON} />
    </svg>
  )
}

/** Static full logo mark (two chevrons) for chips and badges */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 880 988"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={CHEVRON} />
      <path d={CHEVRON} transform="translate(0 494)" />
    </svg>
  )
}
