import { Logo } from "@/components/ui/logo"
import { BookingLink } from "./aeo-booking"

export function AeoFooter() {
  return (
    <footer>
      <div className="aeo-wrap flex flex-col items-center justify-between gap-2 border-t border-[var(--aeo-line)] py-4 text-center md:flex-row md:text-left">
        <Logo href="/" size="sm" />
        <p className="text-sm text-[var(--aeo-ink-soft)]">
          &copy; {new Date().getFullYear()} GrowthBae. All rights reserved.
        </p>
        <BookingLink className="text-sm text-[var(--aeo-ink-soft)] transition-colors hover:!text-[var(--aeo-ink)]">
          Book a Call
        </BookingLink>
      </div>

      {/* The hero shows third-party AI logos, so we say so plainly */}
      <p className="aeo-wrap pb-4 text-center text-xs text-[var(--aeo-ink-soft)] md:text-left">
        ChatGPT, Claude, Gemini and Perplexity are trademarks of their owners.
        GrowthBae is not affiliated with or endorsed by them.
      </p>
    </footer>
  )
}
