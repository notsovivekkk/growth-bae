"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"

const MARQUEE_IMAGES = [
  { src: "/images/mq1.jpg", alt: "Portfolio 1" },
  { src: "/images/mq2.png", alt: "Portfolio 2" },
  { src: "/images/mq3.png", alt: "Portfolio 3" },
  { src: "/images/mq4.jpg", alt: "Portfolio 4" },
  { src: "/images/mq5.png", alt: "Portfolio 5" },
  { src: "/images/mq6.png", alt: "Portfolio 6" },
]

/**
 * Image Marquee Section
 * Dark green background (#004225)
 * Grayscale effect with hover removal
 * Seamless infinite scroll animation
 * Uses existing images from /images/mq*.jpg and /images/mq*.png
 */
export function MarqueeSection() {
  return (
    <div
      className="w-full overflow-hidden bg-[#004225] py-4 md:py-6"
      id="works-marquee"
    >
      <div className="group relative flex overflow-x-hidden px-4">
        <div className="animate-marquee [animation-duration:40s] flex gap-4 whitespace-nowrap">
          {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map(
            (item, i) => (
              <div
                key={i}
                className="relative h-[140px] w-[220px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl md:h-[180px] md:w-[280px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 220px, 280px"
                />
              </div>
            )
          )}
        </div>
        {/* Duplicated marquee for seamless loop */}
        <div className="animate-marquee2 [animation-duration:40s] absolute left-full top-0 flex gap-4 whitespace-nowrap pl-4">
          {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((item, i) => (
            <div
              key={`dup-${i}`}
              className="relative h-[140px] w-[220px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl md:h-[180px] md:w-[280px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 220px, 280px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
