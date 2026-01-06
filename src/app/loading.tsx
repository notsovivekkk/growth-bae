import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

/**
 * Loading Component
 * Shows a loading state while page content is being fetched
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-secondary">
      <Section className="py-20">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-body text-primary/60">Loading...</p>
          </div>
        </Container>
      </Section>
    </div>
  )
}

