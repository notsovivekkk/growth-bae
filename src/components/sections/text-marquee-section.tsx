"use client"

import React from "react"

/**
 * Text Marquee Section
 * Dark green background (#004225)
 * Alternating text: "SHIP FASTER" / "VALIDATE NOW"
 * Green dots between items
 */
export function TextMarqueeSection() {
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
    <React.Fragment key={i}>
      <span className="text-sm font-medium uppercase tracking-widest text-[#F5F1E5] md:text-base">
        {i % 2 !== 0 ? "SHIP FASTER" : "VALIDATE NOW"}
      </span>
      <div className="h-3 w-3 rounded-full bg-[#34D399]" />
    </React.Fragment>
  ))

  return (
    <div className="w-full overflow-hidden border-y border-[#F5F1E5]/5 bg-[#004225] py-4">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap px-8">
          {content}
        </div>
        <div className="animate-marquee2 absolute top-0 flex items-center gap-12 whitespace-nowrap px-8">
          {content}
        </div>
      </div>
    </div>
  )
}
