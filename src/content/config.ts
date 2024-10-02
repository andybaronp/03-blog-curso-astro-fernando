import { z, defineCollection } from 'astro:content'

const blogColletion = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((im) => im.width < 1400, {
        message: 'La imagen debe ser de al menos  1400px de ancho',
      }),
      //relacion
      author: z.string(),
      //relacion
      tags: z.array(z.string()),
    }),
})

export const collections = {
  'blog': blogColletion,
}
