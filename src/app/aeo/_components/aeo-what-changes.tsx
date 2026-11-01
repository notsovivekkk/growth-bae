"use client"

import {
  LineChart,
  ListChecks,
  ScanSearch,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { Reveal, SectionIndex, SplitHeading } from "./aeo-primitives"

interface Outcome {
  icon: LucideIcon
  title: string
  body: string
}

const OUTCOMES: Outcome[] = [
  {
    icon: ScanSearch,
    title: "See where you're missing.",
    body: "Every question, every AI tool.",
  },
  {
    icon: Trophy,
    title: "Know why competitors win.",
    body: "The exact pages AI quotes.",
  },
  {
    icon: ListChecks,
    title: "Know exactly what to fix.",
    body: "We guide your team, step by step.",
  },
  {
    icon: LineChart,
    title: "See the proof.",
    body: "Your numbers, every month.",
  },
]

export function AeoWhatChanges() {
  return (
    <section className="aeo-section">
      <div className="aeo-wrap grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        {/* Heading pins while the cards scroll past it on desktop */}
        <div className="lg:sticky lg:top-12 lg:self-start">
          <SectionIndex n="02" />
          <SplitHeading
            text="What changes"
            accent={["changes"]}
            className="aeo-h2"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {OUTCOMES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.1}>
              <div className="aeo-card flex h-full min-h-[184px] flex-col p-3">
                <div className="flex items-start justify-between">
                  <span className="grid h-5 w-5 place-items-center rounded-[var(--aeo-r-sm)] bg-[var(--aeo-green-tint)] text-[var(--aeo-green)]">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="aeo-label text-[var(--aeo-ink-soft)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="aeo-h3 mt-auto pt-5">{title}</h3>
                <p className="mt-0.5 text-sm text-[var(--aeo-ink-soft)]">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
