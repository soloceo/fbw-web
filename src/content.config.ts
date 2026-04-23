import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Known office and practice slugs — the source of truth.
 * Keep in sync with `src/data/firm.ts#OFFICES` and the filenames
 * under `src/content/practices/`. Typos in frontmatter will now
 * fail at build time rather than silently excluding a person from
 * their own practice / office page.
 */
const OFFICE_SLUGS = ["toronto", "markham", "oakville"] as const;
const PRACTICE_SLUGS = [
  "real-estate",
  "corporate-commercial",
  "commercial-litigation",
  "wills-estates",
  "immigration",
  "family-law",
  "employment",
  "tax",
] as const;

/* People — founding partners & team */
const people = defineCollection({
  loader: glob({ base: "./src/content/people", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    role: z.enum(["founding-partner", "managing-partner", "partner", "associate", "staff"]),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    altPhone: z.string().optional(),
    offices: z.array(z.enum(OFFICE_SLUGS)).default(["toronto"]),
    practices: z.array(z.enum(PRACTICE_SLUGS)).default([]),
    languages: z.array(z.string()).default(["English"]),
    barAdmissions: z.array(z.string()).default([]),
    education: z.array(z.string()).default([]),
    order: z.number().default(99),
    photo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* Practice areas */
const practices = defineCollection({
  loader: glob({ base: "./src/content/practices", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    summary: z.string(),
    icon: z.string().default("ph:scales-light"),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    keyServices: z.array(z.string()).default([]),
    leadPartner: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* Insights — articles, alerts, news */
const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(["article", "alert", "news", "case-study"]).default("article"),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    practices: z.array(z.enum(PRACTICE_SLUGS)).default([]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { people, practices, insights };
