"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"

/**
 * Every booking CTA on the page opens one Calendly popup, so visitors book
 * without leaving. Each CTA is still a real link to Calendly, so new-tab
 * clicks (and no-JS) land on the booking page directly.
 */

export const CALENDLY_URL =
  "https://calendly.com/purayathvivek/30-minute-meeting-clone?primary_color=02821f"

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

// Load Calendly's script once, the first time someone opens the popup
let scriptPromise: Promise<void> | null = null
function loadCalendly() {
  if (window.Calendly) return Promise.resolve()
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script")
    s.src = CALENDLY_SCRIPT
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => {
      scriptPromise = null
      reject(new Error("Calendly failed to load"))
    }
    document.body.appendChild(s)
  })
  return scriptPromise
}

const BookingContext = createContext<() => void>(() => {})

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openBooking = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  return (
    <BookingContext.Provider value={openBooking}>
      {children}
      <BookingModal open={open} onClose={close} />
    </BookingContext.Provider>
  )
}

/** A link to Calendly that opens the popup on a normal click */
export function BookingLink({
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const openBooking = useContext(BookingContext)

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    // Let cmd/ctrl/shift/middle clicks open Calendly in a new tab as usual
    if (e.defaultPrevented || e.button !== 0) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    openBooking()
  }

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    />
  )
}

function BookingModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const reduce = useReducedMotion()
  const widgetRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [failed, setFailed] = useState(false)

  // Lock page scroll, close on Escape, and hand focus back when done
  useEffect(() => {
    if (!open) return
    const lastFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKey)
      lastFocus?.focus()
    }
  }, [open, onClose])

  // Mount the Calendly inline widget into the popup
  useEffect(() => {
    if (!open) return
    let cancelled = false
    setFailed(false)
    loadCalendly()
      .then(() => {
        const el = widgetRef.current
        if (cancelled || !el || !window.Calendly) return
        el.innerHTML = ""
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: el,
        })
      })
      .catch(() => !cancelled && setFailed(true))
    return () => {
      cancelled = true
    }
  }, [open])

  const fade = reduce
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="booking"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: reduce ? { duration: 0 } : { duration: 0.15 },
          }}
          transition={fade}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,48,27,0.6)] sm:p-[24px]"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book a call"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={fade}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-[1000px] flex-col overflow-hidden bg-white sm:h-auto sm:max-h-[calc(100svh-48px)] sm:rounded-[16px] sm:shadow-[var(--aeo-shadow-lg)]"
          >
            <div className="flex h-[56px] shrink-0 items-center justify-between border-b border-[var(--aeo-line)] px-[16px] sm:px-[20px]">
              <p className="text-[15px] font-semibold">Book a call</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-[36px] w-[36px] place-items-center rounded-full transition-colors duration-150 hover:bg-[var(--aeo-ink-faint)]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto">
              {failed ? (
                <p className="p-[24px] text-[15px]">
                  The calendar didn&apos;t load.{" "}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    Open it in a new tab
                  </a>
                  .
                </p>
              ) : (
                // Same size as Calendly's own inline embed snippet
                <div ref={widgetRef} style={{ minWidth: 320, height: 700 }} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
