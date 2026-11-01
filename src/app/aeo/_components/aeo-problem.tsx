"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  EASE,
  Reveal,
  SectionIndex,
  SplitHeading,
  VIEWPORT,
} from "./aeo-primitives"

interface Stat {
  value: string
  line: string
  source: string
}

// Re-check every figure and source before launch
const SHRINKING: Stat[] = [
  {
    value: "68%",
    line: "of US Google searches end without a single click.",
    source: "SparkToro / Similarweb, 2026",
  },
  {
    value: "58%",
    line: "fewer clicks to the #1 Google result when an AI answer sits above it.",
    source: "Ahrefs, Feb 2026",
  },
]

const BUY_MORE: Stat[] = [
  {
    value: "3x",
    line: "more visitors and orders from AI for Shopify stores vs a year ago.",
    source: "Shopify, Q2 2026",
  },
  {
    value: "42%",
    line: "more likely to buy when shoppers arrive from AI.",
    source: "Adobe Analytics, Q1 2026",
  },
  {
    value: "4.4x",
    line: "more valuable: an AI visitor vs a Google search visitor.",
    source: "Semrush, 2025",
  },
]

type Tone = "down" | "up"

/**
 * One ruled row of five equal columns on dark green, so every number,
 * line and source sits on the same line. Colour tells the story:
 * cream = the old channel shrinking, mint = the new one worth more.
 */
export function AeoProblem() {
  return (
    <section id="proof" className="aeo-night aeo-section">
      <div className="aeo-wrap">
        <SectionIndex n="01" dark />

        <div className="grid gap-3 lg:grid-cols-2 lg:items-end lg:gap-8">
          <SplitHeading
            text="Buyers ask AI first."
            accent={["first."]}
            className="aeo-h2"
          />
          <Reveal delay={0.15}>
            <p className="aeo-lead max-w-[42ch]">
              Google clicks are shrinking. AI visitors buy more.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_3fr] lg:gap-0">
          <StatGroup
            tone="down"
            label="Google clicks are shrinking"
            stats={SHRINKING}
          />
          <StatGroup
            tone="up"
            label="AI visitors buy more"
            stats={BUY_MORE}
            offset={SHRINKING.length}
          />
        </div>
      </div>
    </section>
  )
}

interface StatGroupProps {
  tone: Tone
  label: string
  stats: Stat[]
  // Index of this group's first column across the row, for the stagger
  offset?: number
}

function StatGroup({ tone, label, stats, offset = 0 }: StatGroupProps) {
  const up = tone === "up"
  const Arrow = up ? ArrowUpRight : ArrowDownRight

  return (
    <div
      // The divider between the two groups is the strongest line in the row
      className={cn(
        "flex flex-col",
        up && "lg:border-l lg:border-[rgba(158,230,196,0.35)]"
      )}
    >
      <p
        className={cn(
          "mb-3 flex items-center gap-[6px] text-[13px] font-medium tracking-[0.04em]",
          up
            ? "text-[var(--aeo-mint)] lg:pl-[28px]"
            : "text-[var(--aeo-cream-soft)]"
        )}
      >
        <Arrow size={15} strokeWidth={2.25} aria-hidden="true" />
        {label}
      </p>

      <div
        className={cn("grid flex-1", up ? "lg:grid-cols-3" : "lg:grid-cols-2")}
      >
        {stats.map((stat, i) => (
          <StatCell
            key={stat.value}
            stat={stat}
            tone={tone}
            index={offset + i}
            first={i === 0}
          />
        ))}
      </div>
    </div>
  )
}

function StatCell({
  stat,
  tone,
  index,
  first,
}: {
  stat: Stat
  tone: Tone
  index: number
  first: boolean
}) {
  const reduce = useReducedMotion()
  const up = tone === "up"
  const delay = index * 0.06

  return (
    <Reveal
      delay={delay}
      className={cn(
        // Phones: number left, text right, hairline between rows
        "relative grid grid-cols-[104px_1fr] gap-x-2 py-4 sm:grid-cols-[140px_1fr]",
        // Desktop: equal columns, same rhythm top to bottom
        "lg:flex lg:flex-col lg:py-0 lg:pb-1 lg:pt-4",
        "lg:px-[28px]",
        first && !up && "lg:pl-0",
        !first && "lg:border-l lg:border-[var(--aeo-line-dark)]"
      )}
    >
      {/* Top rule draws in on scroll */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[var(--aeo-line-dark)]"
      >
        <motion.span
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: delay + 0.1, ease: EASE }}
          className={cn(
            "block h-full origin-left",
            up ? "bg-[var(--aeo-mint)]" : "bg-[rgba(245,241,229,0.45)]"
          )}
        />
      </span>

      <p
        className={cn(
          "text-[clamp(44px,4.4vw,64px)] font-semibold leading-none tracking-[-0.045em]",
          up ? "text-[var(--aeo-mint)]" : "text-[var(--aeo-paper)]"
        )}
      >
        <CountUp value={stat.value} delay={delay} />
      </p>

      <div className="flex min-w-0 flex-col lg:flex-1">
        <p className="text-[15px] leading-[1.5] text-[var(--aeo-cream-soft)] lg:mt-3">
          {stat.line}
        </p>
        <p className="mt-1 text-[12px] text-[rgba(245,241,229,0.55)] lg:mt-auto lg:pt-3">
          {stat.source}
        </p>
      </div>
    </Reveal>
  )
}

/**
 * Counts "68%", "3x" or "4.4x" up from 0 on scroll, keeping its decimals.
 * Server HTML keeps the real value, so crawlers and AI tools read "68%".
 */
function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, VIEWPORT)
  const reduce = useReducedMotion()
  const [, num = "0", suffix = ""] = value.match(/^([\d.]+)(.*)$/) ?? []
  const target = parseFloat(num)
  const decimals = num.includes(".") ? num.split(".")[1].length : 0
  const [display, setDisplay] = useState(value)

  // Below the fold on load: drop to 0 so there's something to count up
  useEffect(() => {
    if (!reduce && !inView) setDisplay(`${(0).toFixed(decimals)}${suffix}`)
    // Only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, target, {
      duration: 1.4,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(`${v.toFixed(decimals)}${suffix}`),
    })
    return () => controls.stop()
  }, [inView, reduce, target, decimals, suffix, delay])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  )
}
