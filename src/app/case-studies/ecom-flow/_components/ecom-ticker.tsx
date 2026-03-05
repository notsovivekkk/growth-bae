"use client"

interface TickerWord {
  text: string
  italic?: boolean
}

const ROW_1: TickerWord[] = [
  { text: "WhatsApp Support" },
  { text: "instant replies", italic: true },
  { text: "Cart Recovery" },
  { text: "3× revenue", italic: true },
  { text: "Returns Automated" },
  { text: "same-day approval", italic: true },
  { text: "£0.90 per ticket" },
  { text: "zero manual work", italic: true },
]

const ROW_2: TickerWord[] = [
  { text: "done for you", italic: true },
  { text: "UK E-Commerce" },
  { text: "shopify native", italic: true },
  { text: "83% faster support" },
  { text: "ai that scales", italic: true },
  { text: "74% cheaper returns" },
  { text: "built by growthbae", italic: true },
  { text: "Ecom Flow" },
]

function TickerItem({ word }: { word: TickerWord }) {
  return (
    <div className="flex flex-shrink-0 items-center gap-5 px-4">
      <span
        className={`font-serif text-[15px] font-bold uppercase tracking-[-0.2px] ${
          word.italic ? "italic text-[#7A7467]" : "text-primary"
        }`}
      >
        {word.text}
      </span>
      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#A09890]" />
    </div>
  )
}

function TickerRow({
  words,
  reverse = false,
  duration = "28s",
}: {
  words: TickerWord[]
  reverse?: boolean
  duration?: string
}) {
  const items = [...words, ...words]

  return (
    <div className="flex overflow-hidden border-b border-[#004225]/12 py-[18px] last:border-b-0">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `ecom-ticker ${duration} linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {items.map((word, i) => (
          <TickerItem key={`${word.text}-${i}`} word={word} />
        ))}
      </div>
    </div>
  )
}

export function EcomTicker() {
  return (
    <section className="overflow-hidden border-b border-t border-[#004225]/12 bg-[#E4DDCC]">
      <style>{`
        @keyframes ecom-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <TickerRow words={ROW_1} duration="28s" />
      <TickerRow words={ROW_2} duration="22s" reverse />
    </section>
  )
}
