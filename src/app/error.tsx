"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

/**
 * Error Boundary Component
 * Handles runtime errors gracefully with a user-friendly error page
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === "production") {
      console.error("Application error:", error)
    }
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">
          Something went wrong!
        </h1>
        <p className="mb-8 text-body text-primary/80">
          We encountered an unexpected error. Please try again or contact us if
          the problem persists.
        </p>
        {error.digest && (
          <p className="mb-4 text-body-sm text-primary/60">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={reset}
            className="rounded-full"
          >
            Try again
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => (window.location.href = "/")}
            className="rounded-full"
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  )
}

