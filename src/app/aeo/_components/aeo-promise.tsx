"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal, SectionIndex, SplitHeading, VIEWPORT } from "./aeo-primitives"

const PROMISES = [
  { title: "A clear plan, on time.", body: "Exact fixes, by agreed dates." },
  {
    title: "One dashboard.",
    body: "Every question, every AI tool, tracked in one place.",
  },
  {
    title: "A repeatable system.",
    body: "The same questions, re-tested every month.",
  },
  { title: "Real movement.", body: "Targets set together after your audit." },
  { title: "Clear money tracking.", body: "Visitors and sales from AI." },
]

const GUARDRAILS = ["No spam.", "No fake reviews.", "No risk to your brand."]

/**
 * Each promise is a switch that flips on in sequence when scrolled into view.
 * "Things we control" become literally things we switch on.
 */
export function AeoPromise() {
  const panelRef = useRef<HTMLDivElement>(null)
  const inView = useInView(panelRef, VIEWPORT)
  const reduce = useReducedMotion()
  const on = inView || !!reduce

  return (
    <section id="promise" className="aeo-night aeo-section">
      <div className="aeo-wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col">
          <SectionIndex n="04" dark />
          <SplitHeading
            text="We promise what we control."
            accent={["control."]}
            className="aeo-h2"
          />
          <Reveal delay={0.15}>
            <p className="aeo-lead mt-3 max-w-[34ch]">
              No one can promise what AI will say. So we promise:
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-5">
            <ul className="flex flex-wrap gap-1 italic">
              {GUARDRAILS.map((g) => (
                <li
                  key={g}
                  className="inline-flex items-center gap-[6px] rounded-full border border-[var(--aeo-line-dark)] px-1.5 py-[5px] text-xs text-[var(--aeo-cream-soft)]"
                >
                  <ShieldCheck
                    size={14}
                    aria-hidden="true"
                    className="text-[var(--aeo-mint)]"
                  />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div ref={panelRef}>
          <div className="overflow-hidden rounded-[var(--aeo-r-lg)] border border-[var(--aeo-line-dark)] bg-white/[0.03]">
            <ul className="divide-y divide-[var(--aeo-line-dark)]">
              {PROMISES.map((p, i) => (
                <li
                  key={p.title}
                  className="flex items-start gap-2 px-3 py-2.5"
                >
                  <Toggle on={on} delay={0.2 + i * 0.18} />
                  <div>
                    <h3 className="aeo-h3">{p.title}</h3>
                    <p className="mt-[2px] text-sm text-[var(--aeo-cream-soft)]">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Decorative switch. Spring on the knob is the one playful moment here.
function Toggle({ on, delay }: { on: boolean; delay: number }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative mt-[2px] inline-flex h-[20px] w-[36px] shrink-0 items-center rounded-full transition-colors [transition-duration:var(--aeo-dur-slow)]",
        on ? "bg-[var(--aeo-mint)]" : "bg-[var(--aeo-line-dark)]"
      )}
      style={{ transitionDelay: on ? `${delay}s` : "0s" }}
    >
      <motion.span
        initial={false}
        animate={{ x: on ? 19 : 3 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          delay: on ? delay : 0,
        }}
        className={cn(
          "h-[14px] w-[14px] rounded-full transition-colors [transition-duration:var(--aeo-dur-slow)]",
          on ? "bg-[var(--aeo-night)]" : "bg-[var(--aeo-cream-soft)]"
        )}
        style={{ transitionDelay: on ? `${delay}s` : "0s" }}
      />
    </span>
  )
}
