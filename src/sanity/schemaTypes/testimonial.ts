import { StarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorRole',
      title: 'Author Role / Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Mining', value: 'mining' },
          { title: 'Construction', value: 'construction' },
          { title: 'Lifting & Rigging', value: 'lifting' },
          { title: 'Oil & Gas', value: 'oil-gas' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'avatar',
      title: 'Author Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Feature on homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'company', media: 'avatar' },
  },
})
