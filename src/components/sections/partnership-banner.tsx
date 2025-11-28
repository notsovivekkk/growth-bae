import { Container } from "@/components/ui/container"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Partnership Banner Section
 * Fully responsive partnership banner
 * Text wraps gracefully on mobile, centered on all screens
 */

export interface PartnershipBannerProps {
  partnerName?: string
  className?: string
}

export function PartnershipBanner({
  partnerName = "Lovable",
  className,
}: PartnershipBannerProps) {
  return (
    <section
      className={cn(
        // Responsive vertical padding
        "py-2 sm:py-3",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            // Responsive layout: flex-wrap on mobile to prevent overflow
            "mx-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2",
            // Responsive width: full on mobile, fit-content on larger screens
            "w-full sm:w-fit",
            // Light grey background, rounded corners
            "rounded-lg bg-gray-100",
            // Responsive padding
            "px-3 py-1.5 sm:px-4 sm:py-2",
            // Responsive text
            "text-xs font-medium text-primary sm:text-body-sm"
          )}
        >
          <span className="whitespace-nowrap">Official Gold Partner of</span>
          <Heart
            className={cn(
              "flex-shrink-0 fill-orange-500 text-orange-500",
              "h-3 w-3 sm:h-4 sm:w-4"
            )}
            aria-hidden="true"
          />
          <span className="whitespace-nowrap font-semibold text-primary">
            {partnerName}
          </span>
        </div>
      </Container>
    </section>
  )
}
