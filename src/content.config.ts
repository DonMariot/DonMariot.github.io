import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    }, z.date()),
    image: z.string().default("/og-image.jpg"),
    draft: z.boolean().default(false),
    author: z.string().default("Don Mariot R."),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };