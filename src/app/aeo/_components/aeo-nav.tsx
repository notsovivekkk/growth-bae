"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BookingLink } from "./aeo-booking"
import { LogoMark } from "./aeo-growth-mark"
import { BookCta } from "./aeo-primitives"

// Three jumps a prospect actually wants: the evidence, the method, the guarantee
const SECTIONS = [
  { id: "proof", label: "Proof" },
  { id: "how-it-works", label: "How it works" },
  { id: "promise", label: "Our promise" },
]

/**
 * Same pattern as the main site header: a cream bar, logo left, links and
 * Book a call right. Gains a hairline border once the page scrolls.
 */
export function AeoNav() {
  const active = useActiveSection(SECTIONS.map((s) => s.id))
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300",
          scrolled
            ? "border-[var(--aeo-line)] bg-[var(--aeo-paper-glass)] backdrop-blur-md"
            : "border-transparent bg-[var(--aeo-paper)]"
        )}
      >
        <nav
          aria-label="Main"
          className="aeo-wrap flex h-[64px] items-center justify-between"
        >
          <Link
            href="/"
            aria-label="GrowthBae home"
            className="flex items-center gap-[8px] text-[var(--aeo-ink)]"
          >
            <LogoMark className="h-[20px] w-auto text-[var(--aeo-green)]" />
            <span className="text-[17px] font-bold tracking-[-0.02em]">
              GrowthBae
            </span>
          </Link>

          <div className="flex items-center gap-[24px]">
            <ul className="hidden items-center gap-[24px] md:flex">
              {SECTIONS.map((s) => {
                const on = active === s.id
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={on ? "location" : undefined}
                      className={cn(
                        "relative block py-[6px] text-[14px] font-medium transition-colors duration-150",
                        on
                          ? "text-[var(--aeo-ink)]"
                          : "text-[var(--aeo-ink-soft)] hover:text-[var(--aeo-ink)]"
                      )}
                    >
                      {s.label}
                      {on && (
                        <motion.span
                          layoutId="aeo-nav-active"
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute inset-x-0 -bottom-[2px] h-[2px] rounded-full bg-[var(--aeo-green)]"
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
            <BookCta size="sm">Book a call</BookCta>
          </div>
        </nav>
      </header>
    </>
  )
}

/**
 * Which listed section is crossing the middle of the screen, if any.
 * Sections not in the list (or the hero) clear the highlight.
 */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
          else setActive((cur) => (cur === e.target.id ? null : cur))
        }
      },
      // A thin band across the middle of the viewport
      { rootMargin: "-50% 0px -50% 0px" }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // ids is a static list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}
