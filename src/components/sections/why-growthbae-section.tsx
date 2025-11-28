"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function WhyGrowthbaeSection() {
  return (
    <Section padding="none" className="bg-secondary pt-6 pb-16 md:pt-10 md:pb-24">
      <Container size="default" className="max-w-7xl px-4 md:px-6">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 inline-block rounded-full border border-[#008556]/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#008556]"
        >
          Why Growthbae?
        </motion.div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Card 1: PROBLEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex h-auto min-h-[320px] w-full flex-col justify-between rounded-xl bg-[#F6EEDA] p-6 shadow-sm transition-all duration-300 hover:shadow-md md:h-[380px] md:p-8"
          >
            <h3 className="text-xs font-normal uppercase tracking-widest text-[#9A8C74]">
              PROBLEM
            </h3>
            <p className="text-xl font-medium leading-[1.1] text-[#008556] md:text-2xl">
              Founders know what they want to build but don't have the team to do it right.
            </p>
          </motion.div>

          {/* Card 2: SOLUTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex h-auto min-h-[320px] w-full flex-col justify-between rounded-xl bg-[#F6EEDA] p-6 shadow-sm transition-all duration-300 hover:shadow-md md:h-[380px] md:p-8"
          >
            <h3 className="text-xs font-normal uppercase tracking-widest text-[#9A8C74]">
              SOLUTION
            </h3>
            <p className="text-xl font-medium leading-[1.1] text-[#008556] md:text-2xl">
              We validate the idea, move fast and help you ship in far less time.
            </p>
          </motion.div>

          {/* Card 3: OUTCOME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex h-auto min-h-[320px] w-full flex-col justify-between rounded-xl bg-[#F6EEDA] p-6 shadow-sm transition-all duration-300 hover:shadow-md md:h-[380px] md:p-8"
          >
            <h3 className="text-xs font-normal uppercase tracking-widest text-[#9A8C74]">
              OUTCOME
            </h3>
            <p className="text-xl font-medium leading-[1.1] text-[#008556] md:text-2xl">
              We turn unclear concepts into plans and clean systems ready to scale.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
