"use client"

import Image from "next/image"
import { Reveal, SectionIndex, SplitHeading } from "./aeo-primitives"

// Web-sized 4:5 crop of DSC03908.JPG (the 18 MB original isn't served)
const FOUNDER_PHOTO = "/images/vivek-founder.jpg"

export function AeoFounder() {
  return (
    <section className="aeo-section !pt-0">
      <div className="aeo-wrap">
        <div className="grid grid-cols-1 gap-5 rounded-[var(--aeo-r-lg)] bg-[var(--aeo-paper-deep)] p-3 sm:p-5 md:grid-cols-[200px_1fr] md:items-center md:gap-8 lg:p-8">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-[var(--aeo-r-md)] bg-[var(--aeo-ink)]">
              <Image
                src={FOUNDER_PHOTO}
                alt="Vivek M., Founder of GrowthBae"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionIndex n="06" />
            <SplitHeading
              text="A note from the Founder"
              accent={["Founder"]}
              className="aeo-h2"
            />

            <Reveal delay={0.15}>
              <div className="mt-4 max-w-[60ch] space-y-2 text-[clamp(16px,1.3vw,18px)] leading-relaxed">
                {/* The one-line promise leads, the rest supports it */}
                <p className="font-semibold">
                  I care about one thing: results for your brand.
                </p>
                <p>
                  I watch your brand like it&apos;s my own. Every question,
                  every mention, every drop. I see it, and I act on it. If that
                  means going beyond the brief, I will.
                </p>
                <p>
                  We work best with founders who treat their brand like their
                  baby. You care about every detail. You want it done right, not
                  just done.
                </p>
                <p>
                  If that&apos;s you, let&apos;s talk. If we&apos;re not the
                  right fit, I&apos;ll tell you.
                </p>
              </div>
              <p className="aeo-accent mt-4 text-base">Vivek M.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
