import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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
    offices: z.array(z.string()).default(["toronto"]),
    practices: z.array(z.string()).default([]),
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
    author: z.string(),
    practices: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { people, practices, insights };
