import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      pubDate: z.coerce.date(),
      category: z.string().default('Santé & Bien-être'),
      heroImage: z.optional(image()),
    }),
});

export const collections = { blog };
