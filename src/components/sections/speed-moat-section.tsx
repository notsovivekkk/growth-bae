"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function SpeedMoatSection() {
  return (
    <>
      <style jsx>{`
        @keyframes fillWidth {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-fill-green {
          animation: fillWidth 1.5s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
      <Section
        padding="none"
        className="relative z-10 -mt-9 overflow-hidden bg-secondary px-6 pb-16 pt-0 md:px-12"
      >
        {/* Grid Background Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />

        <Container size="default" className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold leading-tight text-[#0A291E] md:text-5xl"
            >
              Speed is your only true moat.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#59503F]"
            >
              In early-stage startups, velocity is survival. While others are
              stuck in workshops, you&apos;ll be onboarding users. We give you
              what you actually need:{" "}
              <strong className="text-[#0A291E]">
                Production-ready code in weeks, not quarters.
              </strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto inline-block flex justify-center gap-12 border-t border-[#E6DDD0] pt-6 md:gap-24"
            >
              <div className="text-center">
                <div className="mb-1 text-3xl font-bold text-[#0A291E] md:text-4xl">
                  0%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#59503F]">
                  Bureaucracy
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-3xl font-bold text-[#0A291E] md:text-4xl">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#59503F]">
                  Shipping
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-[#E6DDD0] bg-white p-6 shadow-sm md:p-8"
          >
            <div className="space-y-8">
              {/* GrowthBae Workflow */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#008556]"></div>
                  <span className="text-sm font-bold text-[#0A291E]">
                    Growthbae Workflow
                  </span>
                </div>
                <div className="relative h-12 w-full overflow-hidden rounded-lg bg-[#008556]/10 md:h-14">
                  {/* Filling Animation Bar */}
                  <div className="animate-fill-green absolute bottom-0 left-0 top-0 rounded-lg bg-[#008556]"></div>
                  {/* Text Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm md:text-sm">
                      Build & Ship
                    </span>
                  </div>
                </div>
              </div>

              {/* Typical Agency */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                  <span className="text-sm font-bold text-[#59503F]">
                    Typical Agency
                  </span>
                </div>
                <div className="no-scrollbar w-full overflow-x-auto rounded-lg border border-[#E6DDD0]">
                  <div className="flex h-12 min-w-[500px] md:h-14 md:min-w-0">
                    <div className="flex h-full w-[20%] items-center justify-center border-r border-white/50 bg-gray-100 text-[10px] font-medium uppercase tracking-wide text-gray-500">
                      Meetings
                    </div>
                    <div className="flex h-full w-[25%] items-center justify-center border-r border-white/50 bg-gray-200 text-[10px] font-medium uppercase tracking-wide text-gray-600">
                      Discovery
                    </div>
                    <div className="flex h-full w-[15%] items-center justify-center border-r border-white/50 bg-gray-100 text-[10px] font-medium uppercase tracking-wide text-gray-500">
                      Docs
                    </div>
                    <div className="flex h-full w-[40%] items-center justify-center bg-[#E8F5E9] text-[10px] font-bold uppercase tracking-wide text-[#008556]">
                      Code
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 flex items-start gap-3 border-t border-gray-100 pt-6 md:items-center">
              <TrendingUp className="h-5 w-5 shrink-0 text-[#008556]" />
              <p className="text-sm font-medium italic text-[#59503F]">
                &quot;We don&apos;t bill for the noise. We only build the
                signal.&quot;
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
