"use client"

import { motion } from "framer-motion"

const VIEWPORT = { once: true, margin: "-10%" } as const

interface Metric {
  highlight: string
  suffix: string
}

interface Module {
  eyebrow: string
  icon: string
  title: string
  description: string
  metrics: Metric[]
  tags: string[]
}

const MODULES: Module[] = [
  {
    eyebrow: "Module 01",
    icon: "💬",
    title: "WhatsApp Support Agent",
    description:
      "Handles order tracking, FAQs, and tier-1 support on WhatsApp — the channel 73% of UK shoppers actually use. Escalates complex issues to your team with full conversation context.",
    metrics: [
      { highlight: "6hr → 4s", suffix: " average response time" },
      { highlight: "£14 → £0.90", suffix: " cost per ticket" },
      { highlight: "35%", suffix: " of all tickets fully automated" },
    ],
    tags: ["WhatsApp Business API", "Shopify Integration", "3–4 weeks"],
  },
  {
    eyebrow: "Module 02",
    icon: "🛒",
    title: "Cart Recovery Agent",
    description:
      "70% of carts are abandoned. This agent monitors every event, profiles the shopper, and sends hyper-personalised recovery messages via email, SMS, and WhatsApp — timed to each user's behaviour.",
    metrics: [
      { highlight: "3% → 15%", suffix: " cart recovery rate" },
      { highlight: "3× revenue", suffix: " per 1,000 abandoned carts" },
      {
        highlight: "30min / 24hr / 72hr",
        suffix: "",
      },
    ],
    tags: ["Email + SMS + WhatsApp", "Shopify Webhooks", "2–3 weeks"],
  },
  {
    eyebrow: "Module 03",
    icon: "📦",
    title: "Returns & Refund Agent",
    description:
      "Automates the entire returns lifecycle — request intake, fraud scoring, approval decisions, label generation, and refund trigger. No manual review for standard cases.",
    metrics: [
      { highlight: "3 days → same day", suffix: " processing" },
      { highlight: "£21 → £5.50", suffix: " cost per return" },
      { highlight: "60% better", suffix: " fraud pattern detection" },
    ],
    tags: ["Self-Serve Portal", "Fraud Detection", "3–5 weeks"],
  },
]

function MetricRow({ highlight, suffix }: Metric) {
  return (
    <div className="flex items-center gap-1 text-[12px] text-[#7A7467]">
      <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#3D7A57]" />
      <span>
        {suffix ? (
          <>
            <span className="font-medium text-primary">{highlight}</span>
            {suffix}
          </>
        ) : (
          <>
            3-touch cadence:{" "}
            <span className="font-medium text-primary">{highlight}</span>
          </>
        )}
      </span>
    </div>
  )
}

function ModuleCard({ module, index }: { module: Module; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="cursor-default border-b border-[#004225]/12 p-4 transition-colors hover:bg-[#F5F2EB] lg:border-b-0 lg:border-r lg:p-6 lg:last:border-r-0"
    >
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A09890]">
        {module.eyebrow}
      </p>

      <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-[10px] border border-[#004225]/20 bg-[#004225]/6 text-[22px]">
        {module.icon}
      </div>

      <h3 className="mb-2 font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.5px] text-primary lg:text-[22px]">
        {module.title}
      </h3>

      <p className="mb-4 text-[13px] font-light leading-[1.7] text-[#7A7467]">
        {module.description}
      </p>

      <div className="flex flex-col gap-[10px]">
        {module.metrics.map((metric) => (
          <MetricRow key={metric.highlight} {...metric} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#004225]/12 pt-3">
        {module.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#004225]/12 bg-[#E4DDCC] px-3 py-1 text-[11px] font-medium tracking-[0.02em] text-[#7A7467]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function EcomModules() {
  return (
    <section className="border-b border-[#004225]/12" id="modules">
      {/* Header */}
      <div className="mx-auto grid max-w-[1200px] items-end gap-4 px-3 pb-6 pt-8 lg:grid-cols-2 lg:gap-6 lg:px-6 lg:pb-8 lg:pt-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A7467]"
          >
            The Three Modules
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[clamp(28px,4vw,56px)] font-extrabold leading-[1.05] tracking-[-1.5px] text-primary"
          >
            Pick one.
            <br />
            <em className="font-bold italic">Or run all three.</em>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[480px] text-[14px] font-light leading-[1.75] text-[#7A7467] lg:text-[15px]"
        >
          Each module is a standalone AI agent. Buy individually or bundle for
          maximum ROI. Most clients start with one and add the rest within 60 days
          once they see the results.
        </motion.p>
      </div>

      {/* Module cards grid */}
      <div className="grid border-t border-[#004225]/12 lg:grid-cols-3">
        {MODULES.map((module, index) => (
          <ModuleCard key={module.eyebrow} module={module} index={index} />
        ))}
      </div>
    </section>
  )
}
