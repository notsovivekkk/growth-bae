"use client"

import { motion } from "framer-motion"

const VIEWPORT = { once: true, margin: "-10%" } as const

interface StatItem {
  value: string
  label: string
}

const STATS: StatItem[] = [
  {
    value: "83%",
    label: "Faster support resolution — 6hr avg down to under 1 min",
  },
  {
    value: "£0.90",
    label: "Cost per support ticket — down from £14 manual handling",
  },
  {
    value: "3×",
    label: "Cart recovery rate — from 3–5% to 12–18% with AI",
  },
  {
    value: "74%",
    label: "Cheaper returns processing — £21 down to £5.50 per return",
  },
]

export function EcomStats() {
  return (
    <div className="grid grid-cols-2 border-b border-[#004225]/12 lg:grid-cols-4">
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="border-b border-[#004225]/12 px-6 py-5 lg:border-b-0 lg:border-r lg:px-6 lg:py-5 lg:last:border-r-0"
        >
          <div className="mb-1 font-serif text-[42px] font-extrabold leading-none tracking-tight text-primary">
            {stat.value}
          </div>
          <div className="max-w-[140px] text-[12px] leading-[1.5] text-[#7A7467]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
