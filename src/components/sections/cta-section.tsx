import { H2, Lead } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

/**
 * GBAE CTA Section
 * Premium conversion section with minimal design
 * Subtle accent background with generous spacing
 */
export function CTASection() {
  return (
    <Section padding="lg" background="accent">
      <Container size="narrow">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          {/* Headline */}
          <H2 className="text-text-inverse">
            Ready to accelerate your growth?
          </H2>

          {/* Description */}
          <Lead className="text-text-inverse/90">
            Get access to exclusive case studies, frameworks, and growth
            strategies used by top companies.
          </Lead>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90"
            >
              Get Started
            </Button>
            <Button
              variant="underline"
              size="lg"
              className="text-text-inverse hover:text-secondary"
            >
              View Case Studies →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
