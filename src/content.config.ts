import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    name: z.string(),
    photo: z.string(),
    bannerImage: z.string().optional(),
    location: z.string(),
    city: z.string().default('Chennai'),
    department: z.string().optional(),
    expertise: z.string().optional(),
    pullQuote: z.string(),
    publishDate: z.coerce.date(),
    status: z.enum(['draft', 'published']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { stories };
