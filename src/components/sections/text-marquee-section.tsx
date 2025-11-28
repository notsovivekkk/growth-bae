"use client"

import { cn } from "@/lib/utils"

export function TextMarqueeSection() {
  return (
    <div className="w-full border-y border-[#004225]/10 bg-[#004225] py-3 overflow-hidden sm:py-4">
      <style>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="flex w-max min-w-full items-center whitespace-nowrap opacity-80 hover:[animation-play-state:paused]"
        style={{ animation: "scroll-text 40s linear infinite" }}
      >
        {/* Set 1 */}
        {[...Array(10)].map((_, i) => (
          <div key={`set1-${i}`} className="flex items-center gap-2 pr-4 sm:gap-4 sm:pr-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5F1E5] sm:text-sm">
              Ship Faster
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C177] sm:h-2 sm:w-2" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5F1E5] sm:text-sm">
              Validate Now
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C177] sm:h-2 sm:w-2" />
          </div>
        ))}

        {/* Set 2 (Duplicate for seamless loop) */}
        {[...Array(10)].map((_, i) => (
          <div key={`set2-${i}`} className="flex items-center gap-2 pr-4 sm:gap-4 sm:pr-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5F1E5] sm:text-sm">
              Ship Faster
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C177] sm:h-2 sm:w-2" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5F1E5] sm:text-sm">
              Validate Now
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#00C177] sm:h-2 sm:w-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
