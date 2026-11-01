"use client"

import { GrowthField } from "./aeo-growth-mark"
import { BookCta, Reveal, SplitHeading } from "./aeo-primitives"

export function AeoFinalCta() {
  return (
    <section className="pb-8">
      <div className="aeo-wrap">
        <div className="aeo-night relative isolate overflow-hidden rounded-[var(--aeo-r-lg)] px-3 py-12 text-center sm:px-8">
          {/* Same climbing chevrons as the hero: the page opens and closes on growth */}
          <GrowthField
            width={520}
            height={560}
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[rgba(245,241,229,0.05)]"
          />

          <SplitHeading
            text="Does AI recommend you?"
            accent={["you?"]}
            className="aeo-h2 mx-auto !text-[clamp(32px,4.4vw,52px)]"
          />
          <Reveal delay={0.2}>
            <p className="aeo-lead mx-auto mt-3 max-w-[40ch]">
              Find out free. We&apos;ll test your top questions and show you
              where you&apos;re missing.
            </p>
          </Reveal>
          <Reveal
            delay={0.3}
            className="mt-5 flex flex-col justify-center gap-1 sm:flex-row"
          >
            <BookCta size="lg">Get my free AI check</BookCta>
            <BookCta variant="ghost-dark" size="lg" arrow={false}>
              Book a call
            </BookCta>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
