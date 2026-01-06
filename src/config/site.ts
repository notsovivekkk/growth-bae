/**
 * GBAE Site Configuration
 * Centralized location for site metadata, navigation, and global settings
 */

export const siteConfig = {
  name: "GrowthBae",
  description: "Premium growth strategies and case studies that drive results",
  tagline: "Data-driven insights for accelerated growth",
  url: "https://growthbae.com",
  ogImage: "https://growthbae.com/og.jpg",
  links: {
    twitter: "https://twitter.com/growthbae",
    github: "https://github.com/growthbae",
    linkedin: "https://linkedin.com/company/growthbae",
  },
  forms: {
    contact:
      process.env.NEXT_PUBLIC_TALLY_FORM_URL || "https://tally.so/r/44Jrpb",
  },
}

export type SiteConfig = typeof siteConfig
