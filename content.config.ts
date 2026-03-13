import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: '**/index.md',
      schema: z.object({
        links: z.array(createButtonSchema()).optional()
      })
    }),
    about: defineCollection({
      type: 'page',
      source: '**/about.md'
    }),
    experience: defineCollection({
      type: 'page',
      source: '**/experience.md',
      schema: z.object({
        items: z.array(z.object({
          date: z.string(),
          position: z.string(),
          company: z.string(),
          tasks: z.array(z.string())
        }))
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: '**/projects.md',
      schema: z.object({
        list: z.array(z.object({
          title: z.string(),
          stack: z.array(z.string()),
          description: z.string()
        }))
      })
    }),
    skills: defineCollection({
      type: 'page',
      source: '**/skills.md',
      schema: z.object({
        categories: z.array(z.object({
          name: z.string(),
          items: z.array(z.string())
        }))
      })
    }),
    achievements: defineCollection({
      type: 'page',
      source: '**/achievements.md',
      schema: z.object({
        items: z.array(z.string())
      })
    }),
    education: defineCollection({
      type: 'page',
      source: '**/education.md',
      schema: z.object({
        items: z.array(z.object({
          institution: z.string(),
          degree: z.string(),
          gpa: z.string(),
          date: z.string()
        }))
      })
    }),
    certifications: defineCollection({
      type: 'page',
      source: '**/certifications.md',
      schema: z.object({
        items: z.array(z.object({
          name: z.string()
        }))
      })
    }),
    contact: defineCollection({
      type: 'page',
      source: '**/contact.md',
      schema: z.object({
        email: z.string(),
        linkedin: z.string(),
        location: z.string()
      })
    })
  }
})
