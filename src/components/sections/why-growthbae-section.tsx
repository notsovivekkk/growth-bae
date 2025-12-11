"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

/**
 * Why GrowthBae Section
 * Three-column grid: PROBLEM, SOLUTION, OUTCOME
 * Cards with hover effects
 */
export function WhyGrowthbaeSection() {
  const items = [
    {
      label: "PROBLEM",
      text: "Founders know what they want to build but don't have the team to do it right.",
    },
    {
      label: "SOLUTION",
      text: "We validate the idea, move fast and help you ship in far less time.",
    },
    {
      label: "OUTCOME",
      text: "We turn unclear concepts into plans and clean systems ready to scale.",
    },
  ]

  return (
    <Section className="bg-[#F5F1E5] !pb-4 !pt-8 md:!pb-6 md:!pt-12">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004225]/10 bg-white/10 px-4 py-2 text-sm font-medium text-[#004225] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              WHY GROWTHBAE?
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex h-full min-h-[200px] flex-col gap-3 rounded-2xl bg-[#004225]/5 p-4 transition-colors duration-300 hover:bg-[#004225]/10 md:min-h-[280px] md:gap-6 md:rounded-3xl md:p-6 lg:p-8"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B6E4F] md:text-xs">
                  {item.label}
                </span>
                <p className="mt-auto text-base font-medium leading-relaxed text-[#004225] md:text-lg lg:text-xl xl:text-2xl">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
