"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function EcomHero() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <section className="border-b border-[#004225]/12 px-3 pb-[72px] pt-[120px] text-center lg:px-6 lg:pb-[100px] lg:pt-[140px]">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="rounded-full border border-[#004225]/20 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A14]">
            Product
          </span>
          <span className="h-1 w-1 rounded-full bg-[#A09890]" />
          {/* Warm muted tone specific to this case study page */}
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#7A7467]">
            E-Commerce AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mb-4 max-w-[900px] font-serif text-[clamp(36px,7vw,92px)] font-extrabold leading-[1.0] tracking-[-2px] text-primary"
        >
          EcomFlow.
          <br />
          <em className="font-bold italic">AI that runs your store.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mb-6 max-w-[520px] text-[15px] font-light leading-[1.7] text-[#7A7467] lg:text-[17px]"
        >
          Three AI agents. One bundle. Fully done for you, built and managed by
          GrowthBae for Shopify and WooCommerce stores.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={siteConfig.forms.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#004225] px-5 py-[10px] text-[13px] font-medium !text-[#F5F1E5] shadow-xl shadow-[#0B6E4F]/20 transition-all duration-300 hover:scale-105 hover:bg-[#0B6E4F] hover:!text-[#F5F1E5] hover:shadow-2xl active:!text-[#F5F1E5] sm:px-[28px] sm:py-[13px] sm:text-[14px]"
          >
            Get a Free Audit →
          </a>
          <a
            href="#modules"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#7A7467] transition-colors hover:text-primary sm:text-[14px]"
          >
            See what&apos;s included ↓
          </a>
        </motion.div>
      </section>
    </div>
  )
}
