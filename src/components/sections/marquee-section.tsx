"use client"

import { InfiniteMarquee } from "@/components/ui/infinite-marquee"
import { Section } from "@/components/ui/section"
import Image from "next/image"

const PORTFOLIO_ITEMS = [
  { src: "/images/mq1.jpg", alt: "Portfolio 1" },
  { src: "/images/mq2.png", alt: "Portfolio 2" },
  { src: "/images/mq3.png", alt: "Portfolio 3" },
  { src: "/images/mq4.jpg", alt: "Portfolio 4" },
  { src: "/images/mq5.png", alt: "Portfolio 5" },
  { src: "/images/mq6.png", alt: "Portfolio 6" },
]

export function MarqueeSection() {
  return (
    <Section padding="none" className="w-full overflow-hidden bg-[#F5F1E5] pt-0 pb-0">
      <div className="group">
        <InfiniteMarquee
          items={PORTFOLIO_ITEMS}
          speed="normal"
          className="bg-[#F5F1E5]"
          renderItem={(item) => (
            <div className="relative h-[300px] w-[85vw] shrink-0 overflow-hidden rounded-lg shadow-sm sm:w-[450px] lg:h-[450px] lg:w-[700px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 85vw, 700px"
              />
            </div>
          )}
        />
      </div>
    </Section>
  )
}
