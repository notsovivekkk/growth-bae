"use client"

import { Header } from "@/components/layout/header"
import { EcomHero } from "./_components/ecom-hero"
import { EcomStats } from "./_components/ecom-stats"
import { EcomHowItWorks } from "./_components/ecom-how-it-works"
import { EcomModules } from "./_components/ecom-modules"
import { EcomTicker } from "./_components/ecom-ticker"
import { EcomCta } from "./_components/ecom-cta"
import { EcomFooter } from "./_components/ecom-footer"

export default function EcomFlowPage() {
  return (
    <>
      <Header />
      <main>
        <EcomHero />
        <EcomStats />
        <EcomHowItWorks />
        <EcomModules />
        <EcomTicker />
        <EcomCta />
      </main>
      <EcomFooter />
    </>
  )
}
