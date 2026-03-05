"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

const VIEWPORT = { once: true, margin: "-10%" } as const

export function EcomCta() {
  return (
    <div className="border-b border-[#004225]/12">
      <section className="mx-auto max-w-[1200px] px-6 py-15 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A7467]"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-3 max-w-[700px] font-serif text-[clamp(44px,5.5vw,72px)] font-extrabold leading-[1.05] tracking-[-1.5px] text-primary"
        >
          Ready to automate
          <br />
          <em className="font-bold italic">your store?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mb-6 max-w-[440px] text-[15px] font-light leading-[1.75] text-[#7A7467]"
        >
          Book a 30-minute call. We&apos;ll audit your setup and tell you exactly
          what EcomFlow would recover — with real numbers from your store data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={siteConfig.forms.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#004225] px-[28px] py-[13px] text-[14px] font-medium !text-[#F5F1E5] shadow-xl shadow-[#0B6E4F]/20 transition-all duration-300 hover:scale-105 hover:bg-[#0B6E4F] hover:!text-[#F5F1E5] hover:shadow-2xl active:!text-[#F5F1E5]"
          >
            Book a Free Audit →
          </a>
          <a
            href={siteConfig.forms.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#7A7467] transition-colors hover:text-primary"
          >
            See modules ↑
          </a>
        </motion.div>
      </section>
    </div>
  )
}
