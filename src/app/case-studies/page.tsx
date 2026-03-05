"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import {
  FileText,
  Receipt,
  Camera,
  CheckCircle2,
  Loader2,
  UploadCloud,
  BarChart3,
} from "lucide-react"

// ─── Insurance Claims Animated Preview ───────────────────────────────────────

const DOCS = [
  { icon: FileText, label: "Police Report", color: "text-blue-500" },
  { icon: Receipt, label: "Repair Invoice", color: "text-amber-500" },
  { icon: Camera, label: "Damage Photo", color: "text-purple-500" },
]

const FIELDS = [
  { label: "Insured", value: "John Smith", confidence: "HIGH" },
  { label: "Policy", value: "POL-2024-8821", confidence: "MEDIUM" },
  { label: "Date of Loss", value: "Nov 12, 2024", confidence: "HIGH" },
  { label: "Vehicle", value: "2022 Honda Accord", confidence: "HIGH" },
]

const METRICS = [
  { label: "Fields", value: "42 / 48" },
  { label: "Fill Rate", value: "88%" },
  { label: "Speed", value: "<30s" },
  { label: "Faster", value: "~150×" },
]

function ConfidenceBadge({ confidence }: { confidence: string }) {
  const styles =
    confidence === "HIGH"
      ? "bg-green-50 text-green-700 border border-green-200"
      : "bg-yellow-50 text-yellow-700 border border-yellow-200"
  return (
    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${styles}`}>
      {confidence}
    </span>
  )
}

function InsuranceClaimsPreview() {
  const [phase, setPhase] = useState(0)
  const PHASES = 4
  const PHASE_DURATION = 2800

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((p) => (p + 1) % PHASES)
    }, PHASE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#F5F1E5] px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,66,37,0.06) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <AnimatePresence mode="wait">

        {/* Phase 0 — Upload */}
        {phase === 0 && (
          <motion.div
            key="upload"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex w-full flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#004225]/60 shadow-sm">
              <UploadCloud className="h-3 w-3" />
              Uploading documents
            </div>
            <div className="flex w-full justify-center gap-2 sm:gap-3">
              {DOCS.map((doc, i) => (
                <motion.div
                  key={doc.label}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.18, duration: 0.4, ease: "easeOut" }}
                  className="flex flex-1 flex-col items-center gap-1.5 rounded-xl border border-[#004225]/8 bg-white p-2.5 shadow-sm sm:rounded-2xl sm:p-3"
                >
                  <doc.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${doc.color}`} strokeWidth={1.5} />
                  <span className="text-center text-[8px] font-medium text-[#004225]/60 sm:text-[9px]">
                    {doc.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 1 — Processing */}
        {phase === 1 && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex w-full flex-col items-center gap-4"
          >
            <div className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0B6E4F]"
              />
              <Loader2 className="h-4 w-4 text-[#004225]/25 sm:h-5 sm:w-5" />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-[#004225] sm:text-sm">Analyzing 3 documents...</p>
              <p className="mt-0.5 text-[9px] text-[#004225]/45 sm:mt-1 sm:text-[10px]">Claude Vision cross-referencing all files</p>
            </div>
            <div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#004225]/10 sm:w-40">
              <motion.div
                initial={{ width: "5%" }}
                animate={{ width: "82%" }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
                className="h-full rounded-full bg-[#0B6E4F]"
              />
            </div>
          </motion.div>
        )}

        {/* Phase 2 — Extraction */}
        {phase === 2 && (
          <motion.div
            key="extraction"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex w-full flex-col gap-1.5 sm:gap-2"
          >
            <div className="mb-0.5 self-start flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#0B6E4F] shadow-sm sm:px-3 sm:text-[10px]">
              <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Extracting fields
            </div>
            {FIELDS.map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.18, duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-between rounded-lg border border-[#004225]/6 bg-white px-2.5 py-1.5 shadow-sm sm:rounded-xl sm:px-3 sm:py-2"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] font-semibold uppercase tracking-wider text-[#004225]/35 sm:text-[9px]">
                    {field.label}
                  </span>
                  <span className="text-[10px] font-medium text-[#004225] sm:text-[11px]">{field.value}</span>
                </div>
                <ConfidenceBadge confidence={field.confidence} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Phase 3 — Results */}
        {phase === 3 && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex w-full flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#0B6E4F] shadow-sm sm:px-3 sm:text-[10px]">
              <BarChart3 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Extraction complete
            </div>
            <div className="grid w-full grid-cols-2 gap-1.5 sm:gap-2">
              {METRICS.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center rounded-xl border border-[#004225]/6 bg-white py-2.5 shadow-sm sm:rounded-2xl sm:py-3"
                >
                  <span className="text-base font-bold text-[#004225] sm:text-lg">{metric.value}</span>
                  <span className="text-[8px] font-medium uppercase tracking-wider text-[#004225]/45 sm:text-[9px]">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

// ─── EcomFlow Animated Preview ───────────────────────────────────────────────

const LINE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

function mkLineAnim(step: number, minStep: number) {
  return {
    opacity: step >= minStep ? 1 : 0,
    y: step >= minStep ? 0 : 5,
    transition: { duration: 0.4, ease: LINE_EASE },
  }
}

// ── Scene A: Recovery Log ────────────────────────────────────────────────────

function RecoveryLogScene({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const DELAYS = [700, 700, 600, 2200]

  useEffect(() => {
    const t = setTimeout(() => {
      if (step < DELAYS.length - 1) {
        setStep((s) => s + 1)
      } else {
        onDone()
      }
    }, DELAYS[step] ?? 0)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  useEffect(() => {
    if (step !== 3) { setRevenue(0); return }
    let val = 0
    const iv = setInterval(() => {
      val = Math.min(val + 7, 84)
      setRevenue(val)
      if (val >= 84) clearInterval(iv)
    }, 80)
    return () => clearInterval(iv)
  }, [step])

  return (
    <div className="flex w-full max-w-[220px] flex-col gap-3.5 px-2 sm:max-w-[260px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[8px] font-bold uppercase tracking-widest text-[#004225]/30 sm:text-[9px]">
          Recovery Log
        </p>
        <span className="rounded-full border border-[#004225]/10 bg-[#004225]/5 px-1.5 py-0.5 text-[7px] font-medium text-[#004225]/25">
          3 events
        </span>
      </div>

      {/* Log lines */}
      <div className="flex flex-col gap-2.5 sm:gap-3">

        {/* Line 1 — Cart abandoned */}
        <motion.div animate={mkLineAnim(step, 0)} className="flex items-center gap-2">
          <span className="w-7 shrink-0 text-[7.5px] tabular-nums text-[#004225]/20">14:32</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
          <p className="flex-1 text-[9.5px] font-medium leading-snug text-[#004225]/65 sm:text-[10.5px]">
            Cart abandoned · Air Max 97
          </p>
          <span className="shrink-0 rounded-full border border-red-200 bg-red-50 px-1.5 py-0.5 text-[7px] font-semibold text-red-400">
            Abandoned
          </span>
        </motion.div>

        {/* Line 2 — AI message */}
        <motion.div animate={mkLineAnim(step, 1)} className="flex items-center gap-2">
          <span className="w-7 shrink-0 text-[7.5px] tabular-nums text-[#004225]/20">14:33</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6E4F]" />
          <p className="flex-1 text-[9.5px] font-medium leading-snug text-[#004225]/65 sm:text-[10.5px]">
            AI message sent · 28s later
          </p>
        </motion.div>

        {/* Line 3 — Order placed */}
        <motion.div animate={mkLineAnim(step, 2)} className="flex items-center gap-2">
          <span className="w-7 shrink-0 text-[7.5px] tabular-nums text-[#004225]/20">14:38</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6E4F]" />
          <p className="flex-1 text-[9.5px] font-medium leading-snug text-[#004225]/65 sm:text-[10.5px]">
            Order placed · 6m later
          </p>
          <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-500">
            Recovered
          </span>
        </motion.div>

      </div>

      {/* Stats footer */}
      <motion.div
        animate={mkLineAnim(step, 3)}
        className="flex items-center justify-between border-t border-[#004225]/8 pt-2.5 sm:pt-3"
      >
        <p className="text-[8px] text-[#004225]/35">67% rate · 28s avg</p>
        <p className="text-right text-sm font-bold tabular-nums text-[#0B6E4F] sm:text-base">
          £{revenue} recovered
        </p>
      </motion.div>
    </div>
  )
}

// ── Scene B: Support Query ───────────────────────────────────────────────────

function SupportQueryScene({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const DELAYS = [800, 900, 2000]

  useEffect(() => {
    const t = setTimeout(() => {
      if (step < DELAYS.length - 1) {
        setStep((s) => s + 1)
      } else {
        onDone()
      }
    }, DELAYS[step] ?? 0)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  return (
    <div className="flex w-full max-w-[220px] flex-col gap-3.5 px-2 sm:max-w-[260px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[8px] font-bold uppercase tracking-widest text-[#004225]/30 sm:text-[9px]">
          Support Query
        </p>
        <div className="flex items-center gap-1">
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
          />
          <span className="text-[7px] font-medium text-emerald-500">Live</span>
        </div>
      </div>

      {/* Log lines */}
      <div className="flex flex-col gap-2.5 sm:gap-3">

        {/* Customer message */}
        <motion.div animate={mkLineAnim(step, 0)} className="flex items-center gap-2">
          <span className="w-7 shrink-0 text-[7.5px] tabular-nums text-[#004225]/20">14:41</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#004225]/25" />
          <p className="flex-1 text-[9.5px] font-medium leading-snug text-[#004225]/65 sm:text-[10.5px]">
            <span className="mr-1 text-[#004225]/30">Ivanka S.</span>
            &ldquo;Where&apos;s my order?&rdquo;
          </p>
        </motion.div>

        {/* Typing — only at step 1 */}
        <motion.div
          animate={{
            opacity: step === 1 ? 1 : 0,
            y: step === 1 ? 0 : 4,
            transition: { duration: 0.3, ease: LINE_EASE },
          }}
          className="flex items-center gap-2"
        >
          <span className="w-7 shrink-0 text-[7.5px] tabular-nums text-[#004225]/20">14:41</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6E4F]/40" />
          <p className="text-[9.5px] font-medium italic leading-snug text-[#004225]/35 sm:text-[10.5px]">
            AI · typing...
          </p>
        </motion.div>

        {/* AI reply */}
        <motion.div animate={mkLineAnim(step, 2)} className="flex items-start gap-2">
          <span className="mt-1 w-7 shrink-0 text-[7.5px] tabular-nums text-[#004225]/20">14:42</span>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6E4F]" />
              <p className="text-[9.5px] font-medium leading-snug text-[#004225]/65 sm:text-[10.5px]">
                Order #4821 · BlueDart
              </p>
            </div>
            <motion.div
              animate={{
                opacity: step >= 2 ? 1 : 0,
                transition: { duration: 0.35, ease: LINE_EASE, delay: 0.25 },
              }}
              className="ml-3.5 flex items-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6E4F]" />
              <p className="text-[8.5px] font-semibold text-[#0B6E4F] sm:text-[9.5px]">In Transit</p>
            </motion.div>
            <motion.p
              animate={{
                opacity: step >= 2 ? 1 : 0,
                transition: { duration: 0.35, ease: LINE_EASE, delay: 0.45 },
              }}
              className="ml-3.5 text-[8px] text-[#004225]/40 sm:text-[8.5px]"
            >
              Est. delivery: Tomorrow
            </motion.p>
          </div>
        </motion.div>

      </div>

      {/* Stats footer */}
      <motion.div
        animate={mkLineAnim(step, 2)}
        transition={{ delay: 0.6 }}
        className="flex justify-end border-t border-[#004225]/8 pt-2.5 sm:pt-3"
      >
        <p className="text-[8px] text-[#004225]/35">22s response · ✓ Resolved</p>
      </motion.div>
    </div>
  )
}

// ── Orchestrator ─────────────────────────────────────────────────────────────

function EcomFlowPreview() {
  const [scene, setScene] = useState<0 | 1>(0)
  const [transitioning, setTransitioning] = useState(false)

  const switchScene = () => {
    setTransitioning(true)
    setTimeout(() => {
      setScene((s) => (s === 0 ? 1 : 0))
      setTransitioning(false)
    }, 420)
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#F5F1E5]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,66,37,0.06) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.div
        animate={{ opacity: transitioning ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {scene === 0
          ? <RecoveryLogScene key={scene} onDone={switchScene} />
          : <SupportQueryScene key={scene} onDone={switchScene} />}
      </motion.div>
    </div>
  )
}

// ─── Coming Soon Preview — Claude-style ──────────────────────────────────────

const CYCLE_WORDS = ["Deliberating", "Architecting", "Scoping", "Shipping"]

function ComingSoonPreview() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % CYCLE_WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-4"
      style={{
        background: "#F5F1E5",
        backgroundImage:
          "radial-gradient(circle, rgba(0,66,37,0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="select-none text-4xl leading-none text-[#0B6E4F] sm:text-5xl"
        style={{ fontFamily: "serif" }}
      >
        ✳
      </motion.div>

      <div className="flex flex-col items-center gap-1">
        <AnimatePresence mode="wait">
          <motion.p
            key={wordIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-serif text-sm italic text-[#004225]/50 sm:text-base"
          >
            {CYCLE_WORDS[wordIdx]}...
          </motion.p>
        </AnimatePresence>
        <p className="text-[9px] font-medium uppercase tracking-widest text-[#004225]/25 sm:text-[10px]">
          More coming soon
        </p>
      </div>
    </div>
  )
}

// ─── Card hover variants ──────────────────────────────────────────────────────

const cardVariants = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  hover: {
    y: -6,
    scale: 1.015,
    transition: { type: "spring" as const, stiffness: 320, damping: 22 },
  },
}

const cardVariantsDelayed = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 },
  },
  hover: {
    y: -6,
    scale: 1.015,
    transition: { type: "spring" as const, stiffness: 320, damping: 22 },
  },
}

const cardVariantsDelayed2 = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.2 },
  },
  hover: {
    y: -6,
    scale: 1.015,
    transition: { type: "spring" as const, stiffness: 320, damping: 22 },
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E5] font-sans selection:bg-[#0B6E4F] selection:text-white">
      <Header />

      <main id="main-content" className="pb-24 pt-36 md:pb-32 md:pt-44">
        <Container>

          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-center"
          >
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-[#0B6E4F]/60">
              Featured Work
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-[#004225] md:text-5xl lg:text-6xl">
              The window{" "}
              <span className="font-serif italic text-[#0B6E4F]">is open.</span>
            </h1>
          </motion.div>

          {/* ── Hormozi Quote ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
          >
            <div
              aria-hidden="true"
              className="mb-1 select-none font-serif text-5xl leading-none text-[#0B6E4F]/15"
            >
              &ldquo;
            </div>
            <blockquote>
              <p className="font-serif text-base italic leading-loose text-[#004225]/80 md:text-lg md:leading-loose">
                There&apos;s never been a better time to start an AI-first business to disrupt an
                existing market — because all the people in that existing market are busy running
                their businesses rather than learning AI and{" "}
                <span className="text-[#0B6E4F]">
                  using words like &ldquo;AI-first&rdquo; rather than actually being AI-first.
                </span>
              </p>
              <footer className="mt-5 flex items-center justify-center gap-3">
                <div className="h-px w-6 bg-[#004225]/20" />
                <cite className="not-italic text-xs font-semibold uppercase tracking-widest text-[#004225]/35">
                  Alex Hormozi
                </cite>
                <div className="h-px w-6 bg-[#004225]/20" />
              </footer>
            </blockquote>
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* Card 1 — Insurance Claims Automation */}
            <Link href="/case-studies/insurance-claims" className="block h-full">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-10%" }}
                className="h-full overflow-hidden rounded-3xl border border-[#004225]/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                <div className="h-[220px] sm:h-[250px] md:h-[280px]">
                  <InsuranceClaimsPreview />
                </div>
                <div className="border-t border-[#004225]/5 px-5 py-4 text-center sm:px-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6E4F]">
                    AI Automation · Insurance Tech
                  </span>
                  <h3 className="mt-1 text-base font-bold text-[#004225] md:text-lg">
                    Insurance Claims Automation
                  </h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 2 — EcomFlow */}
            <Link href="/case-studies/ecom-flow" className="block h-full">
              <motion.div
                variants={cardVariantsDelayed}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-10%" }}
                className="h-full overflow-hidden rounded-3xl border border-[#004225]/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                <div className="h-[220px] sm:h-[250px] md:h-[280px]">
                  <EcomFlowPreview />
                </div>
                <div className="border-t border-[#004225]/5 px-5 py-4 text-center sm:px-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6E4F]">
                    AI · E-Commerce
                  </span>
                  <h3 className="mt-1 text-base font-bold text-[#004225] md:text-lg">
                    EcomFlow
                  </h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 3 — Coming Soon, centered on row 2 */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full lg:max-w-[calc(50%-10px)]">
                <motion.div
                  variants={cardVariantsDelayed2}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-10%" }}
                  className="cursor-pointer overflow-hidden rounded-3xl border border-[#004225]/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="h-[220px] sm:h-[250px] md:h-[280px]">
                    <ComingSoonPreview />
                  </div>
                  <div className="border-t border-[#004225]/5 px-5 py-4 text-center sm:px-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#004225]/25">
                      Coming Soon
                    </span>
                    <h3 className="mt-1 text-base font-bold text-[#004225]/25 md:text-lg">
                      More Case Studies
                    </h3>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </Container>
      </main>
    </div>
  )
}
