import { RocketIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const featureSectionFields = [
  defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
  defineField({ name: 'title', title: 'Title', type: 'string' }),
  defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  defineField({ name: 'bullets', title: 'Bullet points', type: 'array', of: [{ type: 'string' }] }),
  defineField({ name: 'ctaLabel', title: 'CTA label', type: 'string' }),
]

export const featuresPage = defineType({
  name: 'featuresPage',
  title: 'Features page',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Australia', value: 'au' },
          { title: 'Colombia', value: 'co' },
        ],
      },
      validation: (rule) => rule.required(),
      readOnly: true,
    }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'ctaPrimary', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'ctaSecondary', title: 'Secondary CTA label', type: 'string' }),
        defineField({ name: 'trust', title: 'Trust line', type: 'string' }),
      ],
    }),

    defineField({
      name: 'sections',
      title: 'Feature sections',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'assetManagement',
          title: 'Asset Management',
          type: 'object',
          options: { collapsible: true, collapsed: true },
          fields: featureSectionFields,
        }),
        defineField({
          name: 'inspectionManagement',
          title: 'Inspection Management',
          type: 'object',
          options: { collapsible: true, collapsed: true },
          fields: featureSectionFields,
        }),
        defineField({
          name: 'multiLocations',
          title: 'Multi Locations',
          type: 'object',
          options: { collapsible: true, collapsed: true },
          fields: featureSectionFields,
        }),
        defineField({
          name: 'reports',
          title: 'Reports',
          type: 'object',
          options: { collapsible: true, collapsed: true },
          fields: featureSectionFields,
        }),
        defineField({
          name: 'mobileApp',
          title: 'Offline Inspections',
          type: 'object',
          options: { collapsible: true, collapsed: true },
          fields: featureSectionFields,
        }),
      ],
    }),

    defineField({
      name: 'closingCta',
      title: 'Closing CTA band',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'ctaPrimary', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'ctaSecondary', title: 'Secondary CTA label', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { country: 'country' },
    prepare({ country }) {
      return { title: `Features — ${country === 'au' ? 'Australia' : country === 'co' ? 'Colombia' : country}` }
    },
  },
})
