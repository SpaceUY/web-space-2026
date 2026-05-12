import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    category: z.enum([
      "Blockchain Trends",
      "Web2 Trends",
      "Product Development",
      "AI",
      "Augmented Reality",
      "Techy Trends",
    ]),
    tags: z.array(z.string()).default([]),
    readTime: z.number().int().positive().default(6),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.enum(["Web2", "Web3"]),
    accent: z.enum(["purple", "cyan", "green", "mixed"]).default("purple"),
    client: z.string().optional(),
    industry: z.string().optional(),
    year: z.number().int().optional(),
    duration: z.string().optional(),
    team: z.string().optional(),
    services: z.array(z.string()).default([]),
    techStack: z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
    /** Optional rich-content fields for fleshed-out studies */
    heroImage: z.string().optional(),
    summary: z.string().optional(),
    objectives: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    outcome: z.string().optional(),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, "case-studies": caseStudies };
