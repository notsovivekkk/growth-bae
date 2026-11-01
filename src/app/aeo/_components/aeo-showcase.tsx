"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { GrowthField, LogoMark } from "./aeo-growth-mark"

/**
 * Hero showcase: a small result card (the promise: named #1, cited) on top
 * of a large step card (the method: what each of our 4 steps produces).
 *
 * One timeline drives everything: `step` + elapsed ms, advanced per frame.
 * Pause, resume and click-to-jump just touch those two values.
 *
 * All data is illustrative. "Vellum Skin" is an invented competitor.
 */

const STEP_MS = 4500

type ToolId = "chatgpt" | "claude" | "gemini" | "perplexity"

const TOOLS: { id: ToolId; name: string }[] = [
  { id: "chatgpt", name: "ChatGPT" },
  { id: "claude", name: "Claude" },
  { id: "gemini", name: "Gemini" },
  { id: "perplexity", name: "Perplexity" },
]

// Each step pairs a different tool with a different buyer question
const STEPS: { label: string; title: string; tool: ToolId; prompt: string }[] =
  [
    {
      label: "Track prompts",
      title: "Prompt tracker",
      tool: "chatgpt",
      prompt: "Best face oil for sensitive skin in the UK?",
    },
    {
      label: "Find the gap",
      title: "Why competitors get cited",
      tool: "claude",
      prompt: "Fragrance-free face oil for redness, under £40?",
    },
    {
      label: "Fix plan",
      title: "Next fix",
      tool: "gemini",
      prompt: "UK-made face oil that won't clog pores?",
    },
    {
      label: "Prove it",
      title: "Visibility",
      tool: "perplexity",
      prompt: "Is Your brand face oil worth it?",
    },
  ]

const FADE = { duration: 0.25, ease: "easeOut" } as const

export function AeoShowcase() {
  const reduce = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { amount: 0.3 })
  const [tabHidden, setTabHidden] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pausedRef = useRef(true)

  const [step, setStep] = useState(0)
  const elapsed = useRef(0)
  const progress = useMotionValue(0)

  useEffect(() => {
    const onChange = () => setTabHidden(document.hidden)
    onChange()
    document.addEventListener("visibilitychange", onChange)
    return () => document.removeEventListener("visibilitychange", onChange)
  }, [])

  useEffect(() => {
    pausedRef.current = hovered || !inView || tabHidden
  }, [hovered, inView, tabHidden])

  // The step clock. Reduced motion never auto-advances (tabs still work).
  useAnimationFrame((_, delta) => {
    if (reduce || pausedRef.current) return
    elapsed.current += Math.min(delta, 100)
    progress.set(Math.min(elapsed.current / STEP_MS, 1))
    if (elapsed.current >= STEP_MS) {
      elapsed.current = 0
      progress.set(0)
      setStep((s) => (s + 1) % STEPS.length)
    }
  })

  const jump = (i: number) => {
    elapsed.current = 0
    progress.set(0)
    setStep(i)
  }

  const current = STEPS[step]

  return (
    <div className="mx-auto w-full max-w-[540px]">
      <div
        ref={stageRef}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        className="relative isolate flex flex-col overflow-hidden rounded-[28px] bg-[var(--aeo-night)] p-[16px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-[24px] lg:h-[560px]"
      >
        {/* Brand texture: the climbing logo chevrons, mint on dark */}
        <GrowthField
          width={480}
          height={680}
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[rgba(158,230,196,0.07)]"
        />

        {/* The promise: small and quiet. Tool + question change, the result doesn't. */}
        <div className="relative z-20 flex h-[104px] w-full flex-col justify-between rounded-[16px] bg-[var(--aeo-card)] px-[16px] py-[14px] shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)] lg:w-[340px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
            >
              <div className="flex items-center gap-[8px] text-[13px] font-medium">
                <ToolLogo id={current.tool} />
                {TOOLS.find((t) => t.id === current.tool)?.name}
              </div>
              <p className="mt-[6px] truncate text-[13px] text-[var(--aeo-ink-soft)]">
                {current.prompt}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-[6px]">
            <motion.span
              key={step}
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex h-[24px] items-center gap-[6px] rounded-[8px] bg-[var(--aeo-green)] px-[8px] text-[12px] font-semibold text-white"
            >
              <LogoMark className="h-[10px] w-auto" />
              #1 · Your brand
            </motion.span>
            <span className="inline-flex h-[24px] items-center gap-[4px] rounded-[8px] border border-[var(--aeo-line-strong)] px-[8px] text-[12px] font-medium">
              <Check
                size={12}
                strokeWidth={2.5}
                className="text-[var(--aeo-green)]"
              />
              Cited
            </span>
          </div>
        </div>

        {/* The method: the main element. Fixed height so it never jumps. */}
        <div className="relative z-10 mt-[16px] h-[320px] lg:-mt-[24px] lg:h-[300px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              // Extra top padding on desktop clears the result card overlapping it
              className="absolute inset-0 flex flex-col rounded-[20px] bg-[var(--aeo-card)] p-[20px] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55)] lg:pt-[44px]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-[22px] items-center gap-[6px] rounded-full bg-[var(--aeo-night)] px-[9px] text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                  <LogoMark className="h-[9px] w-auto text-[var(--aeo-mint)]" />
                  Example
                </span>
                <span className="inline-flex h-[22px] items-center gap-[6px] rounded-full bg-[var(--aeo-green-tint)] px-[9px] text-[11px] font-medium text-[var(--aeo-green)]">
                  <span className="aeo-ping" />
                  Live
                </span>
              </div>
              <p className="mt-[10px] text-[18px] font-semibold tracking-[-0.01em]">
                {current.title}
              </p>
              <div className="mt-[12px] flex min-h-0 flex-1 flex-col">
                {step === 0 && <TrackerCard />}
                {step === 1 && <GapCard />}
                {step === 2 && <FixCard progress={progress} />}
                {step === 3 && <ProveCard />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step tabs: 1 row on desktop, 2×2 on phones */}
        <div className="mt-[16px] grid grid-cols-2 gap-[4px] rounded-[16px] bg-[var(--aeo-ink)] p-[4px] lg:mt-auto lg:flex">
          {STEPS.map((s, i) => {
            const active = i === step
            return (
              <button
                key={s.label}
                type="button"
                aria-pressed={active}
                onClick={() => jump(i)}
                className={cn(
                  "relative h-[40px] flex-1 whitespace-nowrap rounded-[12px] px-[8px] text-[14px] font-medium transition-colors duration-150",
                  active
                    ? "text-[var(--aeo-ink)]"
                    : "text-[rgba(158,230,196,0.7)] hover:text-[var(--aeo-mint)]"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="aeo-step-pill"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 rounded-[12px] bg-white"
                  />
                )}
                <span className="relative inline-block">
                  {s.label}
                  {active && (
                    <motion.span
                      aria-hidden="true"
                      style={{ scaleX: progress }}
                      className="absolute -bottom-[3px] left-0 right-0 h-[2px] origin-left rounded-full bg-[var(--aeo-green)]"
                    />
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <p className="mt-[12px] text-center text-[12px] text-[var(--aeo-ink-soft)]">
        Example dashboard. Illustrative data.
      </p>
    </div>
  )
}

function ToolLogo({ id }: { id: ToolId }) {
  return (
    <Image
      src={`/logos/${id}.svg`}
      alt=""
      width={16}
      height={16}
      unoptimized
      className="h-[16px] w-[16px] shrink-0"
    />
  )
}

/* ============================================
   Step cards (each fits the fixed-height card, no scrolling)
   ============================================ */

const TRACKED: { prompt: React.ReactNode; hits: boolean[] }[] = [
  {
    prompt: "Best face oil for sensitive skin UK",
    hits: [true, true, true, false],
  },
  {
    prompt: "Fragrance-free face oil for redness",
    hits: [true, false, true, true],
  },
  { prompt: "Vellum Skin alternatives", hits: [true, true, false, true] },
  {
    prompt: (
      <>
        Is <span className="font-semibold">Your brand</span> worth it?
      </>
    ),
    hits: [true, true, true, true],
  },
]

function TrackerCard() {
  return (
    <>
      <div className="grid grid-cols-[minmax(0,1fr)_repeat(4,18px)] items-center gap-x-[8px] gap-y-[8px] text-[12px]">
        <span />
        {TOOLS.map((t) => (
          <span key={t.id} className="grid place-items-center">
            <ToolLogo id={t.id} />
          </span>
        ))}
        {TRACKED.map((row, r) => (
          <Row key={r} row={row} r={r} />
        ))}
      </div>
      <p className="mt-auto text-[11px] text-[var(--aeo-ink-soft)]">
        Tracked weekly · 50 prompts · 5 AI tools
      </p>
    </>
  )
}

function Row({ row, r }: { row: (typeof TRACKED)[number]; r: number }) {
  return (
    <>
      <span className="truncate">{row.prompt}</span>
      {row.hits.map((hit, c) => (
        <motion.span
          key={c}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.15 + r * 0.08,
            ease: "easeOut",
          }}
          className={cn(
            "mx-auto grid h-[16px] w-[16px] place-items-center rounded-full",
            hit
              ? "bg-[var(--aeo-green)] text-white"
              : "bg-[var(--aeo-ink-faint)] text-[var(--aeo-ink-dim)]"
          )}
        >
          {hit ? (
            <Check size={10} strokeWidth={3} />
          ) : (
            <X size={10} strokeWidth={3} />
          )}
        </motion.span>
      ))}
    </>
  )
}

function GapCard() {
  const tags = ["Comparison table", "Updated this month", "Clear FAQ"]
  return (
    <>
      <p className="truncate rounded-[8px] border border-[var(--aeo-line)] bg-[var(--aeo-paper)] px-[10px] py-[7px] font-mono text-[12px]">
        vellumskin.co.uk/best-face-oils
      </p>
      <div className="mt-[12px] flex flex-wrap gap-[6px]">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.2 + i * 0.1,
              ease: "easeOut",
            }}
            className="rounded-[8px] bg-[var(--aeo-green-tint)] px-[8px] py-[4px] text-[12px] font-medium text-[var(--aeo-green)]"
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <p className="mt-auto text-[13px] leading-[1.5]">
        AI quotes this page <span className="font-semibold">3x more</span> than
        yours.
      </p>
    </>
  )
}

function FixCard({ progress }: { progress: MotionValue<number> }) {
  const [done, setDone] = useState(false)
  // Ticks near the end of the step
  useMotionValueEvent(progress, "change", (v) => setDone(v >= 0.8))

  const meta = [
    ["Owner", "Your team"],
    ["Impact", "High"],
    ["Re-test", "Week 6"],
  ]

  return (
    <>
      <div className="flex items-start gap-[10px] rounded-[12px] border border-[var(--aeo-line)] p-[12px]">
        <span
          className={cn(
            "mt-[2px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] border-[1.5px] transition-colors duration-200",
            done
              ? "border-[var(--aeo-green)] bg-[var(--aeo-green)] text-white"
              : "border-[var(--aeo-line-strong)]"
          )}
        >
          {done && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={FADE}
            >
              <Check size={12} strokeWidth={3} />
            </motion.span>
          )}
        </span>
        <div className="min-w-0">
          <p className="text-[14px] font-medium leading-[1.4]">
            Add a 40-word answer to the top of /face-oil
          </p>
          <p
            className={cn(
              "mt-[4px] text-[12px] transition-colors duration-200",
              done
                ? "font-medium text-[var(--aeo-green)]"
                : "text-[var(--aeo-ink-soft)]"
            )}
          >
            {done ? "Done" : "In progress"}
          </p>
        </div>
      </div>
      <dl className="mt-auto grid grid-cols-3 gap-[8px] text-[12px]">
        {meta.map(([k, v]) => (
          <div key={k}>
            <dt className="text-[var(--aeo-ink-soft)]">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </>
  )
}

// Illustrative weekly mention rate, 18% → 46%
const CHART = [18, 19, 21, 20, 24, 27, 29, 33, 36, 39, 43, 46]

function ProveCard() {
  const reduce = useReducedMotion()
  const [rate, setRate] = useState(reduce ? 46 : 18)

  useEffect(() => {
    if (reduce) return
    const controls = animate(18, 46, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setRate(Math.round(v)),
    })
    return () => controls.stop()
  }, [reduce])

  const w = 300
  const h = 40
  const d = CHART.map((v, i) => {
    const x = (i / (CHART.length - 1)) * w
    const y = h - 4 - ((v - 15) / 35) * (h - 8)
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(" ")

  return (
    <>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[32px] font-bold tabular-nums leading-none tracking-[-0.03em]">
            {rate}%
          </p>
          <p className="mt-[4px] text-[12px] text-[var(--aeo-ink-soft)]">
            Mention rate
          </p>
        </div>
        <div className="flex gap-[8px] pb-[2px]">
          {TOOLS.map((t) => (
            <span key={t.id} className="relative">
              <ToolLogo id={t.id} />
              <span className="absolute -right-[2px] -top-[2px] h-[6px] w-[6px] rounded-full border border-white bg-[var(--aeo-green)]" />
            </span>
          ))}
        </div>
      </div>

      {/* Drawn with a left-to-right wipe, not pathLength: the chart stretches
          to the card width, and pathLength under-draws once it's stretched */}
      <motion.svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="mt-[10px] h-[40px] w-full overflow-visible"
        aria-hidden="true"
        initial={{
          clipPath: reduce
            ? "inset(-4px 0% -4px 0)"
            : "inset(-4px 100% -4px 0)",
        }}
        animate={{ clipPath: "inset(-4px 0% -4px 0)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <path
          d={d}
          fill="none"
          stroke="var(--aeo-green)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
      <div className="mt-[4px] flex justify-between text-[10px] text-[var(--aeo-ink-soft)]">
        <span>Week 1</span>
        <span>Week 12</span>
      </div>

      <p className="mt-auto text-[11px] text-[var(--aeo-ink-soft)]">
        Same prompts, re-tested every week.
      </p>
    </>
  )
}
