"use client"

import { motion } from "framer-motion"
import { EcomFlowCard } from "./ecom-flow-card"

const VIEWPORT = { once: true, margin: "-10%" } as const

interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "We connect to your store",
    description:
      "Shopify or WooCommerce API, WhatsApp Business, and your email — full integration in under a week.",
  },
  {
    number: "02",
    title: "AI learns your business",
    description:
      "We train the system on your tone, return policies, product catalog, and FAQs so it sounds like you.",
  },
  {
    number: "03",
    title: "System goes live",
    description:
      "Agents handle tier-1 operations autonomously. Complex edge cases escalate to your team with full context.",
  },
  {
    number: "04",
    title: "You watch the dashboard",
    description:
      "Track recovered revenue, tickets resolved, and returns processed — updated in real time.",
  },
]

export function EcomHowItWorks() {
  return (
    <div className="border-b border-[#004225]/12">
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:py-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A7467]"
        >
          How EcomFlow Works
        </motion.p>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 font-serif text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.05] tracking-[-1.5px] text-primary"
            >
              One system.
              <br />
              <em className="font-bold italic">Three engines.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 max-w-[480px] text-[15px] font-light leading-[1.75] text-[#7A7467]"
            >
              EcomFlow connects directly into your store and runs three AI agents
              silently in the background — handling support, recovering carts, and
              processing returns without your team lifting a finger.
            </motion.p>

            {/* Steps */}
            <div className="flex flex-col">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="grid grid-cols-[48px_1fr] gap-2 border-b border-[#004225]/12 py-4 last:border-b-0"
                >
                  <span className="pt-[3px] text-[11px] font-semibold tracking-[0.1em] text-[#A09890]">
                    {step.number}
                  </span>
                  <div>
                    <div className="mb-1 font-serif text-[17px] font-bold tracking-[-0.3px] text-primary">
                      {step.title}
                    </div>
                    <p className="text-[13px] font-light leading-[1.65] text-[#7A7467]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column — Flow Card */}
          <EcomFlowCard />
        </div>
      </section>
    </div>
  )
}
