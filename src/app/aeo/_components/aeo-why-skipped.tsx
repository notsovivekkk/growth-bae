"use client"

import { motion, useReducedMotion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import {
  EASE,
  Reveal,
  SectionIndex,
  SplitHeading,
  VIEWPORT,
} from "./aeo-primitives"

const REASONS = [
  "AI can't find your page",
  "AI can't quote it",
  "The page doesn't exist",
  "Competitors are more trusted",
  "AI is confused about who you are",
  "AI has wrong or old facts",
]

/**
 * A plain checklist of failure points, each flagged as it arrives.
 * Reads like the first page of an audit report.
 */
export function AeoWhySkipped() {
  const reduce = useReducedMotion()

  return (
    <section className="aeo-section">
      <div className="aeo-wrap grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionIndex n="03" />
          <SplitHeading
            text="Why AI skips your brand"
            accent={["skips"]}
            className="aeo-h2"
          />
          <Reveal delay={0.2}>
            <p className="mt-4 text-[clamp(18px,1.8vw,22px)] font-semibold tracking-[-0.02em]">
              We find the reason.{" "}
              <span className="aeo-accent">Then we fix it.</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="aeo-card divide-y divide-[var(--aeo-line)] px-3">
            {REASONS.map((reason, i) => (
              <motion.li
                key={reason}
                initial={reduce ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.07,
                  ease: EASE,
                }}
                className="flex items-center gap-2 py-2 text-[15px]"
              >
                <span className="aeo-label w-3 text-[var(--aeo-ink-soft)]">
                  0{i + 1}
                </span>
                <span className="flex-1 font-medium">{reason}</span>
                <AlertTriangle
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--aeo-warn)]"
                />
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
