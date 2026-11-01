"use client"

import {
  BookCta,
  FillBar,
  Reveal,
  SectionIndex,
  SplitHeading,
} from "./aeo-primitives"

const PILOT_TICKS = [0, 30, 60, 90]

export function AeoStart() {
  return (
    <section className="aeo-section">
      <div className="aeo-wrap">
        <SectionIndex n="05" />
        <SplitHeading
          text="Two steps to get started"
          accent={["started"]}
          className="aeo-h2"
        />

        <div className="mt-6 grid gap-2 lg:grid-cols-2">
          <Reveal>
            <div className="aeo-card flex h-full flex-col p-3 sm:p-4">
              <StepNumber n={1} />
              <h3 className="aeo-h3 mt-4 !text-[clamp(19px,1.8vw,22px)]">
                AI Visibility Audit
              </h3>
              <p className="mt-1 max-w-[42ch] text-sm text-[var(--aeo-ink-soft)]">
                Book a discovery call. We come back with your report: where
                you&apos;re missing, and why.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="aeo-night flex h-full flex-col rounded-[var(--aeo-r-lg)] p-3 sm:p-4">
              <StepNumber n={2} />
              <h3 className="aeo-h3 mt-4 !text-[clamp(19px,1.8vw,22px)]">
                90-Day Pilot
              </h3>
              <p className="mt-1 max-w-[46ch] text-sm text-[var(--aeo-cream-soft)]">
                We guide the fixes, then test, learn and improve. AI answers
                don&apos;t change overnight. It takes a few rounds, and about 90
                days, to see real results.
              </p>
              <PilotTimeline />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-5 flex justify-center">
          <BookCta size="lg">Book a discovery call</BookCta>
        </Reveal>
      </div>
    </section>
  )
}

function StepNumber({ n }: { n: number }) {
  return <span className="aeo-accent text-[40px] leading-none">{n}</span>
}

/**
 * Three "rounds" fill one after another: the test → learn → improve loop,
 * drawn as time. Makes "it takes ~90 days" feel planned, not slow.
 */
function PilotTimeline() {
  return (
    <div aria-hidden="true" className="mt-auto pt-5">
      <div className="flex gap-1">
        {[0, 1, 2].map((round) => (
          <FillBar
            key={round}
            value={1}
            duration={0.9}
            delay={0.3 + round * 0.7}
            className="flex-1"
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between">
        {PILOT_TICKS.map((t) => (
          <span key={t} className="aeo-label text-[var(--aeo-cream-soft)]">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
