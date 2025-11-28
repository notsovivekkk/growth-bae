import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { HTMLAttributes } from "react"

/**
 * GBAE Logo Component
 * Fully responsive logo with mobile-first sizing
 * Uses uploaded logo image from public/images/
 */

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  href?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ href, size = "md", className, ...props }: LogoProps) {
  // Responsive dimensions and classes based on size
  const sizeConfig = {
    sm: {
      width: 80,
      height: 24,
      heightClasses: "h-6 sm:h-7 md:h-8",
      widthClasses: "w-20 sm:w-24 md:w-28",
    },
    md: {
      width: 100,
      height: 32,
      heightClasses: "h-8 sm:h-9 md:h-10 lg:h-11",
      widthClasses: "w-24 sm:w-28 md:w-32 lg:w-36",
    },
    lg: {
      width: 120,
      height: 40,
      heightClasses: "h-10 sm:h-11 md:h-12 lg:h-12",
      widthClasses: "w-32 sm:w-36 md:w-40 lg:w-44",
    },
  }

  const config = sizeConfig[size]

  const logoContent = (
    <div
      className={cn(
        "relative inline-flex flex-shrink-0 items-center p-0 px-0 pl-0",
        config.heightClasses,
        className
      )}
      {...props}
    >
      <Image
        src="/images/logo.JPG"
        alt="GrowthBae"
        width={config.width}
        height={config.height}
        className={cn("h-full w-auto object-contain overflow-visible", config.widthClasses)}
        priority
      />
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex flex-shrink-0 items-center p-0 px-0 pl-0 -ml-2 transition-opacity hover:opacity-80"
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
