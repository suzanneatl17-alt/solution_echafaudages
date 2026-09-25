import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const specTable = z.object({
  headers: z.array(z.string()),
  rows: z.array(z.array(z.string())),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum([
        'montant-dechafaudage',
        'garde-corps-mds',
        'diagonale-dechafaudage',
        'planchers',
        'acces-circulation',
        'embases-et-socles',
        'echafaudage-facade',
      ]),
      excerpt: z.string(),
      description: z.string(),
      image: image(),
      order: z.number().default(0),
      specs: z.array(z.string()).optional(),
      table: specTable.optional(),
      variants: z
        .array(
          z.object({
            name: z.string(),
            description: z.string().optional(),
            specs: z.array(z.string()).optional(),
            table: specTable.optional(),
            note: z.string().optional(),
            image: image(),
          })
        )
        .optional(),
    }),
});

export const collections = { products };
