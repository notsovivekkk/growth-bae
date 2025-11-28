"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface InfiniteMarqueeProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  className?: string
  speed?: "fast" | "normal" | "slow"
}

export function InfiniteMarquee<T>({
  items,
  renderItem,
  className,
  speed = "normal",
}: InfiniteMarqueeProps<T>) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-background",
        className
      )}
    >
      {/* Gradient Masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-secondary to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-secondary to-transparent" />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Track */}
      <div
        className={cn(
          "flex w-max min-w-full shrink-0 items-center gap-5 py-4 group-hover:[animation-play-state:paused]",
        )}
        style={{
          animation: `scroll ${
            speed === "fast" ? "30s" : speed === "slow" ? "60s" : "45s"
          } linear infinite`
        }}
      >
        {/* First set of items */}
        {items.map((item, i) => (
          <div key={`original-${i}`} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, i) => (
          <div key={`duplicate-${i}`} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  )
}

