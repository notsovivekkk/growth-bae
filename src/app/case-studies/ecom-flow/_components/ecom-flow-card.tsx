"use client"

import { motion } from "framer-motion"

const VIEWPORT = { once: true, margin: "-10%" } as const

function Divider() {
  return <div className="my-1 h-px bg-[#004225]/12" />
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[#A09890]">{children}</span>
}

function Key({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-primary">{children}</span>
}

function Value({ children }: { children: React.ReactNode }) {
  return <span className="text-[#1A1A14]">{children}</span>
}

function Good({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-[#2A8A4A]">{children}</span>
}

function Bad({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-[#C0392B]">{children}</span>
}

export function EcomFlowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="overflow-hidden rounded-[14px] border border-[#004225]/12 bg-white shadow-[0_2px_24px_rgba(26,61,43,0.06)]"
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-[#004225]/12 bg-[#E4DDCC] px-5 py-[14px]">
        <div className="flex gap-1.5">
          <div className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD2E]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#28CA41]" />
        </div>
        <span className="text-[11px] font-medium tracking-[0.05em] text-[#7A7467]">
          ecomflow · agent runtime
        </span>
        <span />
      </div>

      {/* Terminal body */}
      <div className="space-y-0 overflow-x-auto p-4 font-mono text-[10px] leading-[2] lg:p-6 lg:text-[12px]">
        <div><Label>{`// inbound message`}</Label></div>
        <Divider />
        <div><Key>{`customer  `}</Key><Value>&quot;Where is my order?&quot;</Value></div>
        <div><Key>{`channel   `}</Key><Value>WhatsApp</Value></div>
        <div><Key>{`intent    `}</Key><Value>WISMO → order lookup</Value></div>
        <Divider />
        <div><Label>{`// shopify fetch`}</Label></div>
        <Divider />
        <div><Key>{`order     `}</Key><Value>#4821 · verified ✓</Value></div>
        <div><Key>{`status    `}</Key><Value>In Transit · Royal Mail</Value></div>
        <div><Key>{`ETA       `}</Key><Value>Tomorrow by 6pm</Value></div>
        <Divider />
        <div><Label>{`// response dispatched`}</Label></div>
        <Divider />
        <div><Key>{`sent      `}</Key><Good>✓ delivered</Good></div>
        <div><Key>{`time      `}</Key><Value>3.8 seconds</Value></div>
        <div><Key>{`cost      `}</Key><Value>£0.003</Value></div>
        <div><Key>{`human     `}</Key><Bad>not needed</Bad></div>
      </div>
    </motion.div>
  )
}
