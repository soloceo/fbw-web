/**
 * FBW LLP — Central Firm Configuration
 * -----------------------------------------------------------------
 * Single source of truth for firm name, contact info, offices,
 * navigation, and SEO metadata. All pages and components read here.
 * Client-updated content (people bios, practice details, insights)
 * lives in src/content/ as Markdown.
 */

export const FIRM = {
  name: "FBW LLP",
  legalName: "Freedman Benipal Wu LLP",
  tagline: "Freedman · Benipal · Wu",
  shortDescription:
    "A Greater Toronto law firm built on three founding principles: clarity, diligence, and enduring client relationships.",
  longDescription:
    "FBW LLP serves individuals, entrepreneurs, and businesses across the Greater Toronto Area from three offices in Toronto, Markham, and Oakville. Our founding partners bring complementary strengths across real estate, corporate, litigation, and private client work — delivering counsel that is both rigorous and personal.",
  yearFounded: 2024,
  jurisdiction: "Ontario, Canada",
  website: "https://fbwlaw.ca",
  email: "info@fbwlaw.ca",
  mainPhone: "+1 905-604-8201",
  // Placeholder — replace with real social URLs when client provides.
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

export const OFFICES = [
  {
    slug: "toronto",
    name: "Toronto",
    role: "Head Office",
    address1: "130 King Street West",
    address2: "Suite 1205",
    city: "Toronto",
    province: "ON",
    postal: "M5X 2A2",
    country: "CA",
    phone: "+1 905-604-8201",
    email: "info@fbwlaw.ca",
    hours: "Mon–Fri 9:00–17:30",
    lat: 43.6484,
    lng: -79.3817,
  },
  {
    slug: "markham",
    name: "Markham",
    role: "Branch Office",
    address1: "101-7050 Woodbine Avenue",
    address2: "",
    city: "Markham",
    province: "ON",
    postal: "L3R 4G8",
    country: "CA",
    phone: "+1 905-604-8201",
    email: "info@fbwlaw.ca",
    hours: "Mon–Fri 9:00–17:30",
    lat: 43.82,
    lng: -79.3518,
  },
  {
    slug: "oakville",
    name: "Oakville",
    role: "Branch Office",
    address1: "1075 N Service Road West",
    address2: "Unit 17",
    city: "Oakville",
    province: "ON",
    postal: "L6M 2G2",
    country: "CA",
    phone: "+1 905-604-8201",
    email: "info@fbwlaw.ca",
    hours: "Mon–Fri 9:00–17:30",
    lat: 43.4675,
    lng: -79.7132,
  },
] as const;

export type OfficeSlug = (typeof OFFICES)[number]["slug"];

/**
 * Primary navigation — max 7 items per 2026 law firm UX best practice.
 * Each entry points to the landing URL of that section.
 */
export const NAV_PRIMARY = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our People", href: "/people" },
  { label: "Offices", href: "/offices" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Footer columns — mirrors main nav + utility links.
 */
export const NAV_FOOTER = {
  firm: [
    { label: "About the Firm", href: "/about" },
    { label: "Our People", href: "/people" },
    { label: "Offices", href: "/offices" },
    { label: "Careers", href: "/about#careers" },
  ],
  work: [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;

/**
 * SEO defaults — overridden per page via SEO component.
 */
export const SEO_DEFAULT = {
  title: `${FIRM.name} — ${FIRM.tagline}`,
  description: FIRM.shortDescription,
  keywords: [
    "Toronto law firm",
    "Markham lawyer",
    "Oakville lawyer",
    "Ontario LLP",
    "real estate law",
    "corporate counsel",
    "commercial litigation",
    "immigration law",
    "wills and estates",
  ],
  ogImage: "brand/logo-gold.svg",
  locale: "en_CA",
} as const;
