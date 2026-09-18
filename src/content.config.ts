import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/stories',
  }),

  schema: z.object({
    /* =========================================
       PERSON
    ========================================= */

    name: z.string(),

    photo: z.string(),

    bannerImage: z.string().optional(),

    /* =========================================
       LOCATION
    ========================================= */

    country: z.string().default('India'),

    countryCode: z.string().default('IND'),

    state: z.string().default('Tamil Nadu'),

    stateCode: z.string().optional(),

    district: z.string().optional(),

    city: z.string().default('Chennai'),

    location: z.string().optional(),

    /* =========================================
       BRANCH / ADDRESS
    ========================================= */

    branch: z.string().optional(),

    address: z.string().optional(),

    /* =========================================
       JOB DETAILS
    ========================================= */

    jobTitle: z.string().optional(),

    jobDetails: z.string().optional(),

    department: z.string().optional(),

    expertise: z.string().optional(),

    /* =========================================
       MAP COORDINATES
    ========================================= */

    latitude: z.number(),

    longitude: z.number(),

    /* =========================================
       CONTENT
    ========================================= */

    pullQuote: z.string().optional(),

    /* =========================================
       DATE / STATUS
    ========================================= */

    publishDate: z.coerce.date(),

    status: z.enum([
      'draft',
      'published',
    ]),

    /* =========================================
       TAGS
    ========================================= */

    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  stories,
};