"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/ui/logo"
import { BookingLink } from "./aeo-booking"
import { BookCta, EASE } from "./aeo-primitives"

/**
 * Top banner scrolls away; the glass pill nav sticks.
 * This page is sent to prospects directly, so the nav only offers one action.
 */
export function AeoNav() {
  return (
    <>
      <BookingLink className="aeo-night group flex items-center justify-center gap-1 px-2 py-1.5 text-center text-xs sm:gap-2 sm:text-sm">
        <span className="aeo-ping text-[var(--aeo-mint)]" aria-hidden="true" />
        <span className="text-[var(--aeo-cream-soft)]">
          Does AI recommend your brand?{" "}
          <strong className="whitespace-nowrap font-medium text-[var(--aeo-paper)] underline decoration-[var(--aeo-mint)] underline-offset-4 transition-colors group-hover:text-[var(--aeo-mint)]">
            Get a free check →
          </strong>
        </span>
      </BookingLink>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="sticky top-2 z-50 px-2"
      >
        <nav
          aria-label="Main"
          className="mx-auto mt-2 flex max-w-[var(--aeo-max)] items-center justify-between rounded-full border border-white/70 bg-[var(--aeo-paper-glass)] py-1 pl-3 pr-1 shadow-[var(--aeo-shadow-md)] backdrop-blur-xl"
        >
          {/* Logo's width classes assume Tailwind's default spacing scale; let the image size itself */}
          <Logo href="/" size="sm" className="[&_img]:!w-auto" />
          <BookCta size="sm">Book a call</BookCta>
        </nav>
      </motion.div>
    </>
  )
}
