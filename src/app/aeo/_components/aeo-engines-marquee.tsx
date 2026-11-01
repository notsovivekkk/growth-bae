import { ENGINES } from "./aeo-engines"
import { Chevron } from "./aeo-growth-mark"

/**
 * Quiet ribbon of the AI tools we track. The list is rendered twice and
 * the track slides by exactly half its width, so the loop has no seam.
 */
export function AeoEnginesMarquee() {
  const loop = [...ENGINES, ...ENGINES, ...ENGINES, ...ENGINES]

  return (
    <div
      aria-hidden="true"
      className="aeo-marquee border-y border-[var(--aeo-line)] py-2"
    >
      <div className="aeo-marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {loop.map((engine, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center gap-4 px-2 text-base font-semibold tracking-[-0.01em] text-[var(--aeo-ink-soft)]"
              >
                {engine}
                <Chevron className="h-[7px] w-auto text-[var(--aeo-green)]" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
