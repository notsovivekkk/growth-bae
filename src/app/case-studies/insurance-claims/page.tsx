"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Container } from "@/components/ui/container"
import {
  Zap,
  CheckCircle,
  Clock,
  Database,
  Cpu,
  FileText,
  AlertCircle,
  Play,
  Receipt,
  Camera,
  UploadCloud,
  CheckCircle2,
} from "lucide-react"

// ─── Shared Animation Constants ───────────────────────────────────────────────

const VIEWPORT = { once: true, margin: "-10%" } as const

// ─── Components ──────────────────────────────────────────────────────────────

function TOCItem({
  label,
  id,
  activeId,
  duration,
}: {
  label: string
  id: string
  activeId: string | null
  duration?: string
}) {
  const isActive = activeId === id
  return (
    <a
      href={`#${id}`}
      className={`group flex items-center justify-between border-l-2 py-2 pl-4 text-sm transition-all duration-300 ${
        isActive
          ? "border-[#0B6E4F] text-[#004225] font-semibold"
          : "border-[#004225]/10 text-[#004225]/60 hover:border-[#004225]/30 hover:text-[#004225]"
      }`}
    >
      <span>{label}</span>
      {duration && (
        <span className="text-xs text-[#004225]/40 opacity-0 group-hover:opacity-100 transition-opacity">
          {duration}
        </span>
      )}
    </a>
  )
}

function Quote({
  text,
  author,
  role,
}: {
  text: string
  author: string
  role: string
}) {
  return (
    <div className="my-8 rounded-2xl bg-[#004225]/5 p-6 border border-[#004225]/10">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0B6E4F]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0B6E4F]" />
        Perspective
      </div>
      <blockquote className="mb-4 text-lg font-medium leading-relaxed text-[#004225] italic">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#004225]/10 flex items-center justify-center text-[#004225] font-bold text-xs">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold text-[#004225]">{author}</div>
          <div className="text-xs text-[#004225]/60">{role}</div>
        </div>
      </div>
    </div>
  )
}

function SectionHeading({ number, title }: { number: number; title: string }) {
  return (
    <div className="mb-8">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#004225]/40">
        Section {number}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-[#004225] md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function VideoPlaceholder() {
  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#004225]/10 bg-black shadow-sm aspect-video">
      <video
        className="h-full w-full object-cover"
        controls
        src="/images/gb-ins.webm"
      />
    </div>
  )
}

// ─── Step Animation Components ────────────────────────────────────────────────

const UPLOAD_FILES = [
  { icon: FileText, label: "Police Report", colorClass: "text-blue-500" },
  { icon: Receipt, label: "Repair Invoice", colorClass: "text-amber-500" },
  { icon: Camera, label: "Damage Photo", colorClass: "text-purple-500" },
]

function UploadStepAnim() {
  const [phase, setPhase] = useState<"idle" | "animating">("idle")

  useEffect(() => {
    setPhase("animating")
    const loop = setInterval(() => {
      setPhase("idle")
      setTimeout(() => setPhase("animating"), 500)
    }, 3000)
    return () => clearInterval(loop)
  }, [])

  return (
    <div className="aspect-[16/9] bg-[#F5F1E5] flex items-center justify-center p-6">
      <div className="flex flex-col items-center gap-5 w-full max-w-xs">
        <div className="w-full rounded-xl border-2 border-dashed border-[#004225]/20 bg-white/60 px-4 py-5 flex flex-col items-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#004225]/50">
            <UploadCloud className="h-3 w-3" />
            Drop files here
          </div>
          <div className="flex gap-2 w-full justify-center">
            {UPLOAD_FILES.map((file, i) => (
              <motion.div
                key={file.label}
                initial={{ y: 20, opacity: 0 }}
                animate={phase === "animating" ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: i * 0.18, duration: 0.4, ease: "easeOut" }}
                className="flex flex-1 flex-col items-center gap-1.5 rounded-lg border border-[#004225]/8 bg-white p-2.5 shadow-sm"
              >
                <file.icon className={`h-5 w-5 ${file.colorClass}`} strokeWidth={1.5} />
                <span className="text-center text-[8px] font-medium text-[#004225]/55 leading-tight">
                  {file.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase === "animating" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
          className="flex items-center gap-1.5 rounded-full bg-[#004225] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#F5F1E5]"
        >
          <CheckCircle2 className="h-3 w-3" />
          3 documents classified
        </motion.div>
      </div>
    </div>
  )
}

function ProcessingStepAnim() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
    const loop = setInterval(() => {
      setActive(false)
      setTimeout(() => setActive(true), 500)
    }, 3200)
    return () => clearInterval(loop)
  }, [])

  return (
    <div className="aspect-[16/9] bg-[#F5F1E5] flex items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        {/* Doc icons row with connector lines */}
        <div className="flex justify-center gap-8">
          {([FileText, Receipt, Camera] as const).map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -8 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={{ delay: i * 0.12, duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center gap-0"
            >
              <div className="rounded-lg border border-[#004225]/10 bg-white p-2 shadow-sm">
                <Icon className="h-4 w-4 text-[#004225]/60" strokeWidth={1.5} />
              </div>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={active ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.25, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
                className="h-4 w-px bg-[#004225]/20"
              />
            </motion.div>
          ))}
        </div>

        {/* Central AI hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ delay: 0.45, duration: 0.35, ease: "easeOut" }}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#004225]/10 bg-white shadow-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0B6E4F]"
          />
          <Cpu className="h-4 w-4 text-[#004225]/40" />
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.55, duration: 0.3 }}
          className="flex w-44 flex-col gap-1.5"
        >
          <div className="flex justify-between text-[8px] font-medium text-[#004225]/40">
            <span>Reading all 3 documents...</span>
            <span>AI Vision</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#004225]/10">
            <motion.div
              key={String(active)}
              initial={{ width: "5%" }}
              animate={active ? { width: "95%" } : { width: "5%" }}
              transition={{ delay: 0.6, duration: 2.4, ease: "easeInOut" }}
              className="h-full rounded-full bg-[#0B6E4F]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const CONFIDENCE_ROWS = [
  { label: "Insured Name", value: "John Smith", status: "AUTO" },
  { label: "Policy Number", value: "POL-2024-8821", status: "AUTO" },
  { label: "Date of Loss", value: "Nov 12, 2024", status: "AUTO" },
  { label: "VIN Number", value: "1HGCM82…4352", status: "REVIEW" },
]

function ConfidenceStepAnim() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const loop = setInterval(() => {
      setVisible(false)
      setTimeout(() => setVisible(true), 500)
    }, 3000)
    return () => clearInterval(loop)
  }, [])

  return (
    <div className="aspect-[16/9] bg-[#F5F1E5] flex items-center justify-center p-6">
      <div className="flex flex-col gap-2 w-full max-w-xs">
        {CONFIDENCE_ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ x: -10, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
            transition={{ delay: i * 0.15, duration: 0.35, ease: "easeOut" }}
            className="flex items-center justify-between rounded-lg border border-[#004225]/8 bg-white px-3 py-2 shadow-sm"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] font-bold uppercase tracking-wider text-[#004225]/35">
                {row.label}
              </span>
              <span className="text-[10px] font-medium text-[#004225] truncate max-w-[120px]">
                {row.value}
              </span>
            </div>
            {row.status === "AUTO" ? (
              <span className="flex items-center gap-1 rounded-full bg-green-50 border border-green-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-700">
                <CheckCircle className="h-2.5 w-2.5" />
                AUTO
              </span>
            ) : (
              <span className="flex items-center gap-1 rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-700">
                <AlertCircle className="h-2.5 w-2.5" />
                REVIEW
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Pipeline Node Visualizations ────────────────────────────────────────────

function UploadNodeViz() {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(true)
    const t = setInterval(() => {
      setActive(false)
      setTimeout(() => setActive(true), 500)
    }, 2800)
    return () => clearInterval(t)
  }, [])
  const bars = [
    { w: "w-14", color: "bg-blue-400/50" },
    { w: "w-10", color: "bg-amber-400/50" },
    { w: "w-7",  color: "bg-purple-400/50" },
  ]
  return (
    <div className="mb-5 flex h-11 flex-col items-center justify-center gap-1.5">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ x: -10, opacity: 0 }}
          animate={active ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ delay: i * 0.14, duration: 0.3, ease: "easeOut" }}
          className={`h-1.5 ${bar.w} ${bar.color} rounded-full`}
        />
      ))}
    </div>
  )
}

function ProcessingNodeViz() {
  return (
    <div className="mb-5 flex h-11 items-center justify-center gap-2">
      {/* Input dots */}
      <div className="flex flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.28, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-[#004225]/50"
          />
        ))}
      </div>
      {/* Converging line */}
      <motion.div
        animate={{ scaleX: [0.2, 1, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
        className="h-px w-4 bg-[#004225]/25"
      />
      {/* Spinning ring hub */}
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-[#0B6E4F]"
        />
        <div className="h-2 w-2 rounded-full bg-[#0B6E4F]/60" />
      </div>
      {/* Output line */}
      <motion.div
        animate={{ scaleX: [0, 0, 1, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut", delay: 0.6 }}
        style={{ transformOrigin: "left" }}
        className="h-px w-4 bg-[#004225]/25"
      />
      {/* Output dot */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.8 }}
        className="h-2 w-2 rounded-full bg-[#0B6E4F]"
      />
    </div>
  )
}

const EXPORT_LINES = [
  { key: "vin",     val: '"1HGCM826X5"' },
  { key: "insured", val: '"J. Smith"'   },
  { key: "policy",  val: '"POL-2024"'   },
]

function ExportNodeViz() {
  const TOTAL = EXPORT_LINES.length + 1
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % TOTAL), 650)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="mb-5 flex h-11 flex-col justify-center gap-1 font-mono text-[9px]">
      {EXPORT_LINES.map((line, i) => (
        <motion.div
          key={line.key}
          animate={{ opacity: step > i ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="flex gap-1.5"
        >
          <span className="text-[#004225]/40">{line.key}:</span>
          <span className="text-[#0B6E4F]">{line.val}</span>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIDEBAR_STATS = [
  { label: "Processing Time", value: "<30 seconds", color: "text-[#004225]" },
  { label: "Field Accuracy", value: "99.9%", color: "text-[#004225]" },
  { label: "Annual Savings", value: "$53,460", color: "text-[#0B6E4F]" },
  { label: "Claims Volume", value: "300/month", color: "text-[#004225]" },
]

const TABLE_ROWS = [
  { metric: "Time per claim", before: "25–30 minutes", after: "<30 seconds" },
  { metric: "Manual fields per claim", before: "48", after: "0–3 (exceptions only)" },
  { metric: "Error rate", before: "Significant (fatigue-driven)", after: "<0.1%" },
  { metric: "Storm season scaling", before: "Hire temps", after: "Same team, same accuracy" },
  { metric: "Annual cost", before: "Baseline", after: "$53,460 savings" },
]

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function InsuranceClaimsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -50% 0px" }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F1E5] font-sans selection:bg-[#0B6E4F] selection:text-white">
      <Header />

      <main className="pt-32 pb-24 md:pt-40">
        <Container>

          {/* ── Hero ── */}
          <div className="mb-16 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="rounded-full border border-[#004225]/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0B6E4F]">
                Case Study
              </span>
              <span className="h-1 w-1 rounded-full bg-[#004225]/20" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#004225]/60">
                Insurance Tech
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mb-5 text-4xl font-black tracking-tight text-[#004225] md:text-6xl lg:text-7xl"
            >
              AI-Powered Insurance Claims Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-xl leading-relaxed text-[#004225]/70 max-w-2xl"
            >
              How we cut claim processing time from 30 minutes to under 30 seconds — without replacing a single system.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* ── Sidebar ── */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#004225]/40">
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    <TOCItem label="The Problem" id="the-problem" activeId={activeSection} duration="3 min" />
                    <TOCItem label="What's Breaking" id="whats-breaking" activeId={activeSection} duration="2 min" />
                    <TOCItem label="How It Works" id="how-it-works" activeId={activeSection} duration="2 min" />
                    <TOCItem label="Under the Hood" id="under-the-hood" activeId={activeSection} duration="3 min" />
                    <TOCItem label="What We Learned" id="what-we-learned" activeId={activeSection} duration="2 min" />
                    <TOCItem label="The Numbers" id="the-numbers" activeId={activeSection} duration="1 min" />
                  </nav>
                </div>

                <div className="rounded-2xl bg-[#004225]/5 p-6">
                  <h4 className="mb-4 text-sm font-bold text-[#004225]">Project Snapshot</h4>
                  <div className="space-y-4">
                    {SIDEBAR_STATS.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VIEWPORT}
                        transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                      >
                        <div className="text-xs text-[#004225]/60">{stat.label}</div>
                        <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <div className="lg:col-span-8 lg:col-start-5">

              {/* SECTION 1 — The Problem Nobody Talks About */}
              <section id="the-problem" className="mb-24 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <SectionHeading number={1} title="The Problem Nobody Talks About" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                  className="mb-6 text-xl font-bold text-[#004225]"
                >
                  Your adjusters aren&apos;t slow. The process is.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                  className="mb-6 text-lg leading-relaxed text-[#004225]/80"
                >
                  When an auto insurance claim lands on a desk, what happens next looks like this: An adjuster opens a police report. Finds the VIN buried in paragraph three. Types it into the system. Opens the repair estimate. Finds the VIN again — checks if it matches. It doesn&apos;t. Calls someone. Waits. Re-enters the field.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
                  className="mb-6 text-lg leading-relaxed text-[#004225]/80"
                >
                  Repeat that across 48 required fields, across three to five documents, for every single claim that comes through the door.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="mb-6 text-lg leading-relaxed text-[#004225]/80"
                >
                  That&apos;s <strong className="text-[#004225]">25 to 35 minutes of pure data entry per claim.</strong> Not evaluation. Not judgment. Not the work your adjusters were hired to do. Just copying information from one document into a box on a screen.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
                  className="mb-6 text-lg leading-relaxed text-[#004225]/80"
                >
                  At 300 claims a month, you&apos;re paying skilled staff to be human copy-paste machines — and the margin for error compounds with every hour of fatigue.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
                  className="text-lg leading-relaxed text-[#004225]/80"
                >
                  The real cost isn&apos;t just the time. It&apos;s what that time is doing to your operation.
                </motion.p>
              </section>

              {/* SECTION 2 — What's Actually Breaking */}
              <section id="whats-breaking" className="mb-24 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <SectionHeading number={2} title="What's Actually Breaking" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                  className="mb-8 text-lg leading-relaxed text-[#004225]/70"
                >
                  Three failure points that compound into real money lost
                </motion.p>

                <div className="space-y-8">
                  {[
                    {
                      num: "01",
                      title: "Nobody's cross-referencing in real time.",
                      body: "A police report says \"2022 Honda Accord.\" The repair estimate says \"2021 Honda Accord.\" A rushed adjuster misses it. That discrepancy doesn't surface until it hits the wrong desk — and by then, it's a payment delay, a compliance flag, or a reopened claim. Manual review catches this occasionally. Systematic review catches it every time.",
                      delay: 0,
                    },
                    {
                      num: "02",
                      title: "One typo can hold up an entire payment.",
                      body: "A single digit off on a policy number triggers a downstream chain reaction — payment queues, compliance reviews, manual interventions. The error took two seconds to make. Fixing it takes two days.",
                      delay: 0.1,
                    },
                    {
                      num: "03",
                      title: "You can't scale during storm season without scaling headcount.",
                      body: "High-volume periods mean temporary hires. Temp hires mean less experienced staff. Less experienced staff means more errors. More errors mean more rework. It's a cycle that costs you both ways — payroll going up, accuracy going down — at the exact moment you can least afford it.",
                      delay: 0.2,
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VIEWPORT}
                      transition={{ duration: 0.5, ease: "easeOut", delay: item.delay }}
                      className="border-l-2 border-[#0B6E4F]/30 pl-6"
                    >
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#0B6E4F]/60">
                        {item.num}
                      </span>
                      <h4 className="mb-3 font-bold text-[#004225]">{item.title}</h4>
                      <p className="text-[#004225]/70 leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* SECTION 3 — How It Works */}
              <section id="how-it-works" className="mb-24 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <SectionHeading number={3} title="How It Works" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                  className="mb-10 text-lg leading-relaxed text-[#004225]/80"
                >
                  We didn&apos;t rebuild your claims management system. We built a fast, intelligent layer that sits in front of it — handling the extraction and verification so your adjusters can focus on the decisions only humans should make.
                </motion.p>

                <div className="space-y-12">
                  {/* Video first */}
                  <VideoPlaceholder />

                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B6E4F] text-white font-bold text-sm">1</div>
                      <h4 className="text-xl font-bold text-[#004225]">Drop Everything In at Once</h4>
                    </div>
                    <div className="mb-6 overflow-hidden rounded-2xl border border-[#004225]/10 bg-white shadow-sm">
                      <UploadStepAnim />
                    </div>
                    <p className="text-[#004225]/80 leading-relaxed">
                      The adjuster drags and drops up to 8 files — PDFs, photos, scanned documents — into a single upload interface. The system immediately reads each one and classifies it: this is a police report, this is a repair estimate, this is a registration document. No sorting. No labeling. No pre-processing.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B6E4F] text-white font-bold text-sm">2</div>
                      <h4 className="text-xl font-bold text-[#004225]">The AI Reads All of It at the Same Time</h4>
                    </div>
                    <div className="mb-6 overflow-hidden rounded-2xl border border-[#004225]/10 bg-white shadow-sm">
                      <ProcessingStepAnim />
                    </div>
                    <p className="text-[#004225]/80 leading-relaxed">
                      This is where most document tools fall short. They process files one at a time, which means they can&apos;t catch inconsistencies between documents. Our system sends everything into a single context window simultaneously — reading the police report, the repair invoice, and the vehicle registration as one body of information. When the police report says &ldquo;2021&rdquo; and the registration says &ldquo;2022,&rdquo; the system doesn&apos;t guess — it knows which source to trust, flags the discrepancy, and surfaces it for the adjuster to verify in seconds.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B6E4F] text-white font-bold text-sm">3</div>
                      <h4 className="text-xl font-bold text-[#004225]">Confidence Scores, Not Blind Approvals</h4>
                    </div>
                    <div className="mb-6 overflow-hidden rounded-2xl border border-[#004225]/10 bg-white shadow-sm">
                      <ConfidenceStepAnim />
                    </div>
                    <p className="text-[#004225]/80 leading-relaxed">
                      Every extracted field gets a confidence rating. Green fields — high confidence — flow through automatically. Red fields — ambiguous or conflicting — are flagged for a human to review. Your adjuster&apos;s job shifts from re-typing 48 fields to reviewing the handful that actually need their attention. The result: faster throughput, fewer errors, and adjusters who spend their time on real judgment calls.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* SECTION 4 — Under the Hood */}
              <section id="under-the-hood" className="mb-24 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <SectionHeading number={4} title="Under the Hood" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                  className="mb-6 text-lg leading-relaxed text-[#004225]/80"
                >
                  The system is designed so that no sensitive claim data lives in the processing layer. Every request is stateless — data comes in, gets processed, goes out in structured format. Nothing is stored between sessions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
                  className="mb-10 text-lg leading-relaxed text-[#004225]/80"
                >
                  The output conforms to ACORD 2 standards, which means it drops directly into whatever agency management system you&apos;re already running. There&apos;s no migration, no integration project, no switching costs.
                </motion.p>

                {/* Architecture pipeline */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 py-2">

                  {/* Connector line 1→2 */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                    style={{ transformOrigin: "left" }}
                    className="hidden md:block absolute top-7 left-[33%] w-[17%] h-px bg-[#004225]/20"
                  />

                  {/* Connector line 2→3 */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    style={{ transformOrigin: "left" }}
                    className="hidden md:block absolute top-7 left-[67%] w-[17%] h-px bg-[#004225]/20"
                  />

                  {/* Node 1: Document Upload */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                    className="flex flex-col items-center text-center cursor-default"
                  >
                    <UploadNodeViz />
                    <h5 className="font-bold text-[#004225] mb-2">Document Upload</h5>
                    <p className="text-sm text-[#004225]/60">
                      Handles up to 8 mixed file types simultaneously with automatic validation.
                    </p>
                  </motion.div>

                  {/* Node 2: AI Vision Processing (with pulse) */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                    className="flex flex-col items-center text-center cursor-default"
                  >
                    <ProcessingNodeViz />
                    <h5 className="font-bold text-[#004225] mb-2">AI Vision Processing</h5>
                    <p className="text-sm text-[#004225]/60">
                      All documents processed together in a single context window, resolving conflicts by source hierarchy.
                    </p>
                  </motion.div>

                  {/* Node 3: Structured Export */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    className="flex flex-col items-center text-center cursor-default"
                  >
                    <ExportNodeViz />
                    <h5 className="font-bold text-[#004225] mb-2">Structured Export</h5>
                    <p className="text-sm text-[#004225]/60">
                      Output is structured data your existing system already understands — ACORD 2 compliant.
                    </p>
                  </motion.div>

                </div>

              </section>

              {/* SECTION 5 — What We Learned */}
              <section id="what-we-learned" className="mb-24 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <SectionHeading number={5} title="What We Learned" />
                </motion.div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Adjusters don't want less control. They want fewer surprises.",
                      body: "The instinct when building automation is to remove humans from the loop entirely. That's the wrong move here. Adjusters are experienced — they have good instincts about edge cases, fraud signals, and unusual claims. What they don't need is to manually transcribe a VIN before they can apply any of that expertise. The system we built earns trust by being transparent. Every decision it makes is visible. Every flag it raises has a reason. Adjusters can override anything. That transparency wasn't an afterthought — it was the reason adoption happened without resistance.",
                      delay: 0,
                    },
                    {
                      title: "Institutional knowledge locked in people's heads is a liability.",
                      body: "Every agency has that one person who knows exactly which fields matter for which carrier, what to do when a document is missing, and how to read between the lines on a borderline claim. When that person leaves, the knowledge walks out the door. We encoded the logic that experienced adjusters rely on — field hierarchy rules, carrier-specific requirements, common discrepancy patterns — directly into the system. It doesn't replace expertise. It preserves it, and makes it available to every person on the team regardless of experience level.",
                      delay: 0.1,
                    },
                    {
                      title: "One issue at a time is faster than everything at once.",
                      body: "When an adjuster reviews flagged fields, the interface surfaces one issue at a time rather than dumping a full error list. The difference between \"here are 12 problems\" and \"here's the one thing to resolve right now\" is the difference between cognitive overload and forward momentum. Resolution time dropped significantly just from this change. Staff moved through exception queues faster and with more confidence — because the system wasn't asking them to hold 12 things in their head simultaneously.",
                      delay: 0.2,
                    },
                  ].map((lesson) => (
                    <motion.div
                      key={lesson.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VIEWPORT}
                      transition={{ duration: 0.5, ease: "easeOut", delay: lesson.delay }}
                    >
                      <h4 className="mb-3 text-xl font-bold text-[#004225]">{lesson.title}</h4>
                      <p className="text-lg leading-relaxed text-[#004225]/80">{lesson.body}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* SECTION 6 — The Numbers */}
              <section id="the-numbers" className="scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <SectionHeading number={6} title="The Numbers" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                  className="mb-10 text-lg leading-relaxed text-[#004225]/80"
                >
                  The bottleneck in most agencies isn&apos;t adjuster judgment. It&apos;s the mechanical work that happens before judgment can even begin. Remove that bottleneck, and throughput scales without adding headcount.
                </motion.p>

                {/* Before / After Table */}
                <div className="mb-6">
                  {/* Header */}
                  <div className="grid grid-cols-3 border-b border-[#004225]/12 pb-3 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#004225]/40">Metric</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#004225]/40">Before</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0B6E4F]">After</span>
                  </div>
                  {/* Rows */}
                  {TABLE_ROWS.map((row, i) => (
                    <motion.div
                      key={row.metric}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 4 }}
                      viewport={VIEWPORT}
                      transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                      className="grid grid-cols-3 border-b border-[#004225]/8 py-4 last:border-0 cursor-default"
                    >
                      <span className="text-sm font-semibold text-[#004225]">{row.metric}</span>
                      <span className="text-sm text-[#004225]/40 line-through">{row.before}</span>
                      <span className="text-sm font-bold text-[#0B6E4F]">{row.after}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="mb-6 text-xs text-[#004225]/40 italic"
                >
                  Based on 300 claims per month.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                  className="text-lg leading-relaxed text-[#004225]/80"
                >
                  The savings figure accounts for staff time recaptured and rework eliminated. It doesn&apos;t account for the harder-to-quantify gains: fewer reopened claims, fewer compliance flags, and an operations team that isn&apos;t burned out after every bad weather week.
                </motion.p>
              </section>

            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
