"use client"

import { motion } from "framer-motion"
import { GrowthMark } from "./aeo-growth-mark"
import { BookCta, EASE, SplitHeading } from "./aeo-primitives"
import { AeoShowcase } from "./aeo-showcase"

export function AeoHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ~55/45 split from lg; below that the stage stacks under the text */}
      <div className="aeo-wrap grid items-center gap-6 pb-12 pt-8 lg:min-h-[min(calc(100svh-120px),760px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-6 lg:py-10">
        <div>
          <SplitHeading
            as="h1"
            trigger="mount"
            delay={0.1}
            text="Get your brand recommended by AI."
            accent={["recommended"]}
            className="aeo-display max-w-[13ch]"
            trailing={
              // The logo builds itself at the end of the line: growth, as punctuation
              <GrowthMark
                trigger="mount"
                delay={0.65}
                className="ml-[0.16em] inline-block h-[0.62em] w-auto align-baseline text-[var(--aeo-green)]"
              />
            }
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="aeo-lead mt-3 max-w-[40ch]"
          >
            When people ask ChatGPT or Google what to buy, we put your brand in
            the answer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-4 flex flex-col gap-1 sm:flex-row"
          >
            <BookCta size="lg">Get my free AI check</BookCta>
            <BookCta variant="ghost" size="lg" arrow={false}>
              Book a call
            </BookCta>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            className="mt-4 text-sm italic text-[var(--aeo-ink-soft)]"
          >
            Tracked weekly across ChatGPT, Claude, Perplexity, Gemini and Google
            AI.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
        >
          <AeoShowcase />
        </motion.div>
      </div>
    </section>
  )
}
