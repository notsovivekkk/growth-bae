"use client"

import { useRef, useState, type PointerEvent, type ReactNode } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Check, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { GrowthMark } from "./aeo-growth-mark"
import { Reveal, SplitHeading } from "./aeo-primitives"

/**
 * How it works: the same 4 steps as the hero tabs.
 * Desktop: step list on the left, a sticky detail panel on the right.
 * Mobile: an accordion, with the panel content inline under the open row.
 */

interface Step {
  title: string
  bullets: string[]
  description: string
  checks: string[]
  deliverable: string
  mockup: () => ReactNode
}

const STEPS: Step[] = [
  {
    title: "Track prompts",
    bullets: [
      "Real buyer questions, from calls, reviews and searches",
      "Tested on ChatGPT, Claude, Gemini, Perplexity and Google AI",
      "Re-run every week",
    ],
    description:
      "We find the questions your buyers ask AI, and see who gets named.",
    checks: [
      "Your money questions, sorted by intent",
      "Every major AI tool",
      "Your starting score vs competitors",
    ],
    deliverable: "A locked question list and your baseline score.",
    mockup: () => <PromptsMockup />,
  },
  {
    title: "Find the gap",
    bullets: [
      "The pages AI quotes instead of yours",
      "What makes them win",
      "The sites AI trusts in your space",
    ],
    description: "We open every page AI quotes and find out why it wins.",
    checks: [
      "Structure, facts and freshness",
      "Tables, FAQs and comparisons",
      "Who mentions them, and where",
    ],
    deliverable: "A gap report: where you lose, and why.",
    mockup: () => <GapMockup />,
  },
  {
    title: "Fix plan",
    bullets: [
      "Every finding becomes a clear task",
      "Ranked by impact",
      "Your team ships, we guide each step",
    ],
    description:
      "We turn what we find into a simple to-do list your team can act on.",
    checks: [
      "Exact page and wording changes",
      "New pages to create",
      "Sites to get mentioned on",
    ],
    deliverable: "A ranked fix list with owners and dates.",
    mockup: () => <FixMockup />,
  },
  {
    title: "Prove it",
    bullets: [
      "Same questions, re-tested monthly",
      "One dashboard for every AI tool",
      "Mentions, citations and AI traffic",
    ],
    description:
      "We re-test the same questions and show you exactly what moved.",
    checks: [
      "Mention and citation rate",
      "Share of voice vs competitors",
      "Visitors and sales from AI",
    ],
    deliverable: "A live dashboard and a monthly report.",
    mockup: () => <ProveMockup />,
  },
]

const EASE_OUT = [0, 0, 0.2, 1] as const

export function AeoHowItWorks() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  // Where the pointer was when the last row opened (see onRowPointerMove)
  const switchedAt = useRef<{ x: number; y: number } | null>(null)

  const t = (duration: number) =>
    reduce ? { duration: 0 } : { duration, ease: EASE_OUT }

  /**
   * Hover-to-open on desktop. Opening a row changes heights, which slides a
   * different row under a still cursor. Requiring real pointer movement since
   * the last switch stops that from cascading into a flicker loop.
   */
  const onRowPointerMove = (i: number) => (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || i === active) return
    if (!window.matchMedia("(min-width: 1024px)").matches) return
    const p = switchedAt.current
    if (p && Math.hypot(e.clientX - p.x, e.clientY - p.y) < 6) return
    switchedAt.current = { x: e.clientX, y: e.clientY }
    setActive(i)
  }

  return (
    <section className="aeo-section">
      <div className="aeo-wrap">
        {/* Heading spans the width so the list and panel can start level */}
        <div className="mb-3 flex items-center gap-[8px]">
          <GrowthMark className="h-[14px] w-auto text-[var(--aeo-green)]" />
          <span className="text-[13px] font-medium tracking-[0.04em] text-[var(--aeo-green)]">
            How it works
          </span>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <SplitHeading
            text="How we get you into the answer."
            accent={["answer."]}
            className="aeo-h2 max-w-[16ch]"
          />
          <Reveal delay={0.1}>
            <p className="text-[17px] text-[var(--aeo-ink-soft)] lg:pb-[6px]">
              Four steps. Repeated every month.
            </p>
          </Reveal>
        </div>

        {/* Desktop: list and panel share one height, so all four steps and
            the active detail are on screen together. No scrolling between. */}
        <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <ul className="space-y-[8px] lg:h-[480px]">
            {STEPS.map((step, i) => {
              const open = i === active
              const panelId = `aeo-step-panel-${i}`
              return (
                <li
                  key={step.title}
                  onPointerMove={onRowPointerMove(i)}
                  className={cn(
                    "rounded-[20px] transition-colors duration-200",
                    open
                      ? "bg-[var(--aeo-green-tint)]"
                      : "hover:bg-[var(--aeo-ink-faint)]"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setActive(i)}
                      className="flex w-full items-center gap-[16px] p-[14px] text-left sm:px-[20px]"
                    >
                      <span
                        className={cn(
                          "grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[12px] text-[16px] font-semibold transition-colors duration-200",
                          open
                            ? "bg-[var(--aeo-green)] text-white"
                            : "bg-[var(--aeo-paper-deep)] text-[var(--aeo-ink)]"
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className="flex-1 text-[clamp(20px,1.8vw,24px)] font-semibold leading-tight tracking-[-0.02em]">
                        {step.title}
                      </span>
                      <ArrowRight
                        size={22}
                        aria-hidden="true"
                        className={cn(
                          "shrink-0 transition-[color,transform] duration-200",
                          // Phones: the arrow turns down when the row is open
                          open
                            ? "rotate-90 text-[var(--aeo-green)] lg:rotate-0"
                            : "text-[var(--aeo-ink)] opacity-60"
                        )}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-label={step.title}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={t(0.25)}
                        className="overflow-hidden"
                      >
                        <div className="px-[14px] pb-[18px] sm:pl-[76px] sm:pr-[20px]">
                          <ul className="space-y-[4px] text-[15px] text-[var(--aeo-ink-soft)]">
                            {step.bullets.map((b) => (
                              <li key={b} className="flex gap-[10px]">
                                <span
                                  aria-hidden="true"
                                  className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--aeo-green)]"
                                />
                                {b}
                              </li>
                            ))}
                          </ul>

                          {/* Phones: the detail panel lives inline */}
                          <div className="mt-[20px] lg:hidden">
                            <PanelBody step={step} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          {/* Right: the detail panel, same height as the list */}
          <div className="hidden h-[480px] overflow-hidden rounded-[24px] border-[1.5px] border-[var(--aeo-ink)] bg-[var(--aeo-card)] p-[32px] lg:block">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={t(0.25)}
                className="flex h-full flex-col"
              >
                <PanelBody step={STEPS[active]} fill />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function PanelBody({ step, fill = false }: { step: Step; fill?: boolean }) {
  return (
    <>
      <div className="relative flex h-[210px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[var(--aeo-paper)] px-[20px] pb-[12px] pt-[28px]">
        <span className="absolute right-[12px] top-[9px] text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--aeo-ink-soft)]">
          Example
        </span>
        {step.mockup()}
      </div>

      <p className="mt-[16px] text-[18px] font-medium leading-[1.4] tracking-[-0.01em]">
        {step.description}
      </p>

      <ul className="mt-[14px] space-y-[8px] text-[15px]">
        {step.checks.map((c) => (
          <li key={c} className="flex items-center gap-[10px]">
            <span className="grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[var(--aeo-green)] text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            {c}
          </li>
        ))}
      </ul>

      <p className={cn("text-[16px]", fill ? "mt-auto pt-[8px]" : "mt-[16px]")}>
        <span className="font-bold">You get:</span> {step.deliverable}
      </p>
    </>
  )
}

/* ============================================
   Deliverable mockups (example data, one entrance animation each)
   ============================================ */

function ToolLogo({ id }: { id: string }) {
  return (
    <Image
      src={`/logos/${id}.svg`}
      alt=""
      width={16}
      height={16}
      unoptimized
      className="h-[16px] w-[16px]"
    />
  )
}

const rise = (i: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, delay: 0.1 + i * 0.06, ease: EASE_OUT },
})

function PromptsMockup() {
  const prompts = [
    "Best face oil for sensitive skin UK",
    "Fragrance-free face oil for redness",
    "UK-made face oil, won't clog pores",
    "Is Your brand worth it?",
  ]
  return (
    <div className="w-full max-w-[320px]">
      <ul className="space-y-[6px]">
        {prompts.map((p, i) => (
          <motion.li
            key={p}
            {...rise(i)}
            className="truncate rounded-full border border-[var(--aeo-line)] bg-[var(--aeo-card)] px-[14px] py-[5px] text-[13px]"
          >
            {p}
          </motion.li>
        ))}
      </ul>
      <div className="mt-[10px] flex items-center justify-between">
        <div className="flex gap-[10px]">
          {["chatgpt", "claude", "gemini", "perplexity"].map((id) => (
            <ToolLogo key={id} id={id} />
          ))}
        </div>
        <span className="rounded-full bg-[var(--aeo-ink)] px-[10px] py-[4px] text-[12px] font-medium text-[var(--aeo-paper)]">
          Baseline: 18%
        </span>
      </div>
    </div>
  )
}

// A competitor page outline with three callouts pointing at what wins
function GapMockup() {
  const callouts = [
    { label: "Updated this month", y: 34 },
    { label: "Comparison table", y: 82 },
    { label: "Clear FAQ", y: 160 },
  ]
  return (
    // Fixed-geometry drawing: scaled down to fit narrow phones
    <div className="relative h-[196px] w-[340px] shrink-0 scale-[0.84] max-sm:scale-[0.74]">
      <div className="absolute inset-y-0 left-0 w-[190px] rounded-[10px] border border-[var(--aeo-line)] bg-[var(--aeo-card)]">
        <span className="absolute left-[14px] top-[14px] h-[8px] w-[120px] rounded-full bg-[var(--aeo-ink-dim)]" />
        <span className="absolute left-[14px] top-[31px] h-[6px] w-[60px] rounded-full bg-[var(--aeo-green)]" />
        {/* Comparison table */}
        <div className="absolute left-[14px] top-[50px] grid h-[64px] w-[162px] grid-cols-3 grid-rows-3 overflow-hidden rounded-[4px] border border-[var(--aeo-line-strong)]">
          {Array.from({ length: 9 }, (_, i) => (
            <span
              key={i}
              className={cn(
                "border-[var(--aeo-line)]",
                i % 3 !== 2 && "border-r",
                i < 6 && "border-b",
                i < 3 && "bg-[var(--aeo-ink-faint)]"
              )}
            />
          ))}
        </div>
        <span className="absolute left-[14px] top-[126px] h-[5px] w-[150px] rounded-full bg-[var(--aeo-line-strong)]" />
        <span className="absolute left-[14px] top-[137px] h-[5px] w-[110px] rounded-full bg-[var(--aeo-line-strong)]" />
        {/* FAQ rows */}
        {[152, 168].map((top) => (
          <span
            key={top}
            className="absolute left-[14px] flex w-[162px] items-center justify-between"
            style={{ top }}
          >
            <span className="h-[5px] w-[110px] rounded-full bg-[var(--aeo-line-strong)]" />
            <Plus
              size={9}
              strokeWidth={3}
              className="text-[var(--aeo-ink-dim)]"
            />
          </span>
        ))}
      </div>

      {callouts.map((c, i) => (
        <motion.div
          key={c.label}
          {...rise(i)}
          className="absolute left-[160px] flex -translate-y-1/2 items-center"
          style={{ top: c.y }}
        >
          <span className="h-[6px] w-[6px] rounded-full bg-[var(--aeo-green)]" />
          <span className="h-px w-[22px] bg-[var(--aeo-green)]" />
          <span className="whitespace-nowrap rounded-[8px] bg-[var(--aeo-green)] px-[8px] py-[4px] text-[12px] font-medium text-white">
            {c.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

function FixMockup() {
  const tasks = [
    { task: "Add a 40-word answer to /face-oil", impact: "High", done: true },
    { task: "Publish a face oil comparison page", impact: "High" },
    { task: "Get listed on 2 skincare review sites", impact: "Medium" },
  ]
  return (
    <ul className="w-full max-w-[360px] space-y-[8px]">
      {tasks.map((t, i) => (
        <motion.li
          key={t.task}
          {...rise(i)}
          className="flex items-center gap-[10px] rounded-[12px] border border-[var(--aeo-line)] bg-[var(--aeo-card)] px-[12px] py-[10px]"
        >
          <span
            className={cn(
              "grid h-[16px] w-[16px] shrink-0 place-items-center rounded-[4px] border-[1.5px]",
              t.done
                ? "border-[var(--aeo-green)] bg-[var(--aeo-green)] text-white"
                : "border-[var(--aeo-line-strong)]"
            )}
          >
            {t.done && <Check size={10} strokeWidth={3.5} />}
          </span>
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-[13px]",
              t.done && "text-[var(--aeo-ink-soft)]"
            )}
          >
            {t.task}
          </span>
          <span
            className={cn(
              "shrink-0 rounded-full px-[8px] py-[2px] text-[11px] font-medium",
              t.impact === "High"
                ? "bg-[var(--aeo-green-tint)] text-[var(--aeo-green)]"
                : "bg-[var(--aeo-paper-deep)] text-[var(--aeo-ink-soft)]"
            )}
          >
            {t.impact}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}

// Weekly mention rate, 18% → 46%
const WEEKS = [18, 19, 21, 20, 24, 27, 29, 33, 36, 39, 43, 46]

function ProveMockup() {
  const max = 50
  return (
    <div className="w-full max-w-[340px]">
      <div className="flex h-[128px] items-end gap-[6px]">
        {WEEKS.map((v, i) => {
          const first = i === 0
          const last = i === WEEKS.length - 1
          return (
            <div key={i} className="relative flex h-full flex-1 items-end">
              {(first || last) && (
                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-semibold",
                    last
                      ? "text-[var(--aeo-green)]"
                      : "text-[var(--aeo-ink-soft)]"
                  )}
                  style={{ bottom: `calc(${(v / max) * 100}% + 4px)` }}
                >
                  {v}%
                </span>
              )}
              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.25,
                  delay: 0.05 + i * 0.03,
                  ease: EASE_OUT,
                }}
                className={cn(
                  "w-full origin-bottom rounded-t-[4px]",
                  last ? "bg-[var(--aeo-green)]" : "bg-[rgba(11,110,79,0.25)]"
                )}
                style={{ height: `${(v / max) * 100}%` }}
              />
            </div>
          )
        })}
      </div>
      <div className="mt-[8px] flex justify-between border-t border-[var(--aeo-line-strong)] pt-[6px] text-[11px] text-[var(--aeo-ink-soft)]">
        <span>Week 1</span>
        <span>Week 12</span>
      </div>
    </div>
  )
}
