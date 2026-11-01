"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { FAQS } from "./aeo-faqs"
import { EASE, Reveal, SectionIndex, SplitHeading } from "./aeo-primitives"

export function AeoFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="aeo-section border-t border-[var(--aeo-line)]">
      <div className="aeo-wrap grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <SectionIndex n="07" />
          <SplitHeading text="FAQ" className="aeo-h2" />
        </div>

        <Reveal>
          <ul className="border-t border-[var(--aeo-line-strong)]">
            {FAQS.map((item, i) => {
              const isOpen = open === i
              const panelId = `aeo-faq-${i}`
              return (
                <li
                  key={item.q}
                  className="border-b border-[var(--aeo-line-strong)]"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-3 py-2.5 text-left text-[clamp(16px,1.4vw,18px)] font-semibold tracking-[-0.01em]"
                    >
                      {item.q}
                      <span
                        className={cn(
                          "grid h-[28px] w-[28px] shrink-0 place-items-center rounded-full border transition-all [transition-duration:var(--aeo-dur-slow)] [transition-timing-function:var(--aeo-ease)]",
                          isOpen
                            ? "rotate-45 border-[var(--aeo-ink)] bg-[var(--aeo-ink)] text-[var(--aeo-paper)]"
                            : "border-[var(--aeo-line-strong)] group-hover:border-[var(--aeo-ink)]"
                        )}
                      >
                        <Plus size={15} aria-hidden="true" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { duration: 0.45, ease: EASE },
                        }}
                        // Exit faster than entrance
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="aeo-lead max-w-[56ch] pb-2.5 pr-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
